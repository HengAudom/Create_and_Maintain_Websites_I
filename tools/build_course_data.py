#!/usr/bin/env python3
"""
Rebuild js/course-data.js and images/lessons/ from the Word source of the
"Create and Maintain Websites I" book (ការបង្កើត និងថែទាំគេហទំព័រ I).

Usage:
    python tools/build_course_data.py "Create_and_Maintain_Websites_I_Khmer.docx"

What it reads from the book (the book was built from fixed templates, so these are reliable):
  - Style "មេរៀនទី"         -> a lesson / appendix ("ឧបសម្ព័ន្ធទី ...")
  - Style "ចំណុច"           -> a section inside the lesson
  - 1-cell boxes            -> 🎯 objectives, 📄/📁 code examples, 📌 summary, tips / practice / checklists
  - other tables            -> data tables
  - picture + "រូបភាពទី"     -> images (converted to WebP) with captions
  - review questions        -> interactive quiz (answers taken from Appendix "កម្រងចម្លើយ")
  - Consolas text           -> `inline code`, bold text -> <strong>
"""
import io
import json
import os
import re
import shutil
import sys
import zipfile
import xml.etree.ElementTree as ET

sys.stdout.reconfigure(encoding='utf-8')

try:
    from PIL import Image, features
    if not features.check('webp'):
        raise ImportError('Pillow was built without WebP support')
except ImportError as e:
    sys.exit(f'Pillow with WebP support is required ({e}). Install it with: python -m pip install Pillow')

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
R = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
A = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
V = '{urn:schemas-microsoft-com:vml}'

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(ROOT, 'js', 'course-data.js')
IMG_DIR = os.path.join(ROOT, 'images', 'lessons')
COVER_PATH = os.path.join(ROOT, 'images', 'cover.webp')
MAX_IMG_WIDTH = 1600
WEBP_QUALITY = 85

KH2AR = str.maketrans('០១២៣៤៥៦៧៨៩', '0123456789')
AR2KH = str.maketrans('0123456789', '០១២៣៤៥៦៧៨៩')
ZW = re.compile(r'[​‌‍﻿]')
NUM_RE = re.compile(r'^([០-៩0-9]+)\.\s*(.*)$', re.S)
OPT_RE = re.compile(r'^([A-D])\.\s*(.*)$', re.S)


def plain(t):
    """Text without markup / zero-width spaces (for matching)."""
    t = re.sub(r'</?strong>', '', t or '').replace('`', '')
    return ZW.sub('', t).strip()


def tidy(t):
    t = (t or '').replace(' ', ' ').replace('\t', ' ')
    t = re.sub(r' {2,}', ' ', t)
    return t.strip()


def to_webp(data, max_width=MAX_IMG_WIDTH):
    """Encode image bytes as WebP. Keeps transparency, Lanczos resizes if too wide."""
    img = Image.open(io.BytesIO(data))
    img.load()
    has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
    img = img.convert('RGBA' if has_alpha else 'RGB')
    if img.width > max_width:
        img = img.resize((max_width, round(img.height * max_width / img.width)), Image.LANCZOS)
    lossy = io.BytesIO()
    img.save(lossy, 'WEBP', quality=WEBP_QUALITY, method=6, alpha_quality=90)
    candidates = [lossy.getvalue()]
    if img.width * img.height <= 400_000:
        lossless = io.BytesIO()
        img.save(lossless, 'WEBP', lossless=True, quality=80, method=4)
        candidates.append(lossless.getvalue())
    return min(candidates, key=len)


class ImageWriter:
    def __init__(self, docx):
        self.docx = docx
        self.done = {}
        self.counters = {}
        self.bytes_in = self.bytes_out = 0

    def write(self, target, lesson_id):
        if target in self.done:
            return self.done[target]
        data = self.docx.media(target)
        self.bytes_in += len(data)
        self.counters[lesson_id] = self.counters.get(lesson_id, 0) + 1
        rel = f'images/lessons/{lesson_id}/fig-{self.counters[lesson_id]:02d}.webp'
        full_path = os.path.join(ROOT, rel)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        webp = to_webp(data)
        with open(full_path, 'wb') as f:
            f.write(webp)
        self.bytes_out += len(webp)
        self.done[target] = rel
        return rel


# ----------------------------------------------------------------------------- reading the .docx
class Docx:
    def __init__(self, path):
        self.z = zipfile.ZipFile(path)
        self.doc = ET.fromstring(self.z.read('word/document.xml'))
        rels = ET.fromstring(self.z.read('word/_rels/document.xml.rels'))
        self.rels = {r.get('Id'): r.get('Target') for r in rels}
        self.styles = {}
        st = ET.fromstring(self.z.read('word/styles.xml'))
        for s in st.iter(W + 'style'):
            n = s.find(W + 'name')
            self.styles[s.get(W + 'styleId')] = n.get(W + 'val') if n is not None else s.get(W + 'styleId')

    def media(self, target):
        return self.z.read(target if target.startswith('word/') else 'word/' + target)

    def para(self, p):
        """Paragraph -> {'text': marked-up text, 'raw': plain text, ...}.
        Consolas runs become `code`, bold runs become <strong>…</strong>."""
        segs, images, fonts = [], [], set()
        for r in p.iter(W + 'r'):
            rpr = r.find(W + 'rPr')
            code = bold = False
            if rpr is not None:
                f = rpr.find(W + 'rFonts')
                if f is not None:
                    fonts.add(f.get(W + 'ascii') or '')
                    code = 'Consolas' in (f.get(W + 'ascii') or '')
                b = rpr.find(W + 'b')
                bold = b is not None and b.get(W + 'val') not in ('0', 'false')
            for node in r:
                if node.tag == W + 't':
                    segs.append([node.text or '', code, bold])
                elif node.tag == W + 'tab':
                    segs.append([' ', code, bold])
                elif node.tag in (W + 'br', W + 'cr'):
                    segs.append(['\n', False, False])
            for node in r.iter():
                if node.tag == A + 'blip' and node.get(R + 'embed') in self.rels:
                    images.append(self.rels[node.get(R + 'embed')])
                elif node.tag == V + 'imagedata' and node.get(R + 'id') in self.rels:
                    images.append(self.rels[node.get(R + 'id')])
        # merge neighbours with the same formatting
        merged = []
        for s in segs:
            if merged and merged[-1][1] == s[1] and merged[-1][2] == s[2]:
                merged[-1][0] += s[0]
            else:
                merged.append(list(s))
        raw = ''.join(s[0] for s in merged)
        out = []
        for text, code, bold in merged:
            if not text:
                continue
            if code and text.strip():
                lead = text[:len(text) - len(text.lstrip())]
                trail = text[len(text.rstrip()):]
                out.append(lead + '`' + text.strip().replace('`', "'") + '`' + trail)
            elif bold and text.strip():
                lead = text[:len(text) - len(text.lstrip())]
                trail = text[len(text.rstrip()):]
                out.append(lead + '<strong>' + text.strip() + '</strong>' + trail)
            else:
                out.append(text)
        text = ''.join(out).replace('</strong><strong>', '').replace('</strong> <strong>', ' ')
        ppr = p.find(W + 'pPr')
        style, num = '', False
        if ppr is not None:
            ps = ppr.find(W + 'pStyle')
            if ps is not None:
                style = self.styles.get(ps.get(W + 'val'), ps.get(W + 'val'))
            num = ppr.find(W + 'numPr') is not None
        return {'k': 'p', 'text': tidy(text), 'raw': raw, 'style': style, 'num': num, 'images': images,
                'heading_font': any('Muol' in f or 'Moul' in f for f in fonts) and not style,
                'all_code': bool(raw.strip()) and all(s[1] for s in merged if s[0].strip())}

    def table(self, tbl):
        rows = []
        for tr in tbl.findall(W + 'tr'):
            cells = []
            for tc in tr.findall(W + 'tc'):
                ps = [self.para(p) for p in tc.iter(W + 'p')]
                span = tc.find(W + 'tcPr/' + W + 'gridSpan')
                cells.append({'paras': ps, 'span': int(span.get(W + 'val')) if span is not None else 1,
                              'images': [i for p in ps for i in p['images']]})
            rows.append(cells)
        return {'k': 'tbl', 'rows': rows}

    def blocks(self):
        for child in self.doc.find(W + 'body'):
            if child.tag == W + 'p':
                yield self.para(child)
            elif child.tag == W + 'tbl':
                yield self.table(child)
            elif child.tag == W + 'sdt':
                content = child.find(W + 'sdtContent')
                for sc in (content if content is not None else []):
                    if sc.tag == W + 'p':
                        yield self.para(sc)
                    elif sc.tag == W + 'tbl':
                        yield self.table(sc)


def cell_text(cell):
    return '\n'.join(p['text'] for p in cell['paras'] if plain(p['text']))


# ----------------------------------------------------------------------------- answer key (appendix)
def read_answer_key(blocks):
    """MCQ answers {lesson: {q: 'B'}} and model answers {lesson: {q: text}} from the answer-key appendix."""
    mcq, model = {}, {}
    start = next((i for i, b in enumerate(blocks) if b['k'] == 'p' and b['style'] == 'មេរៀនទី'
                  and 'កម្រងចម្លើយ' in plain(b['text'])), None)
    if start is None:
        return mcq, model
    lesson, qn = None, None
    for b in blocks[start + 1:]:
        if b['k'] == 'p' and b['style'] == 'មេរៀនទី':
            break
        if b['k'] == 'tbl':
            for row in b['rows'][1:]:
                m = re.search(r'([០-៩0-9]+)', plain(cell_text(row[0])))
                if m:
                    mcq[int(m.group(1).translate(KH2AR))] = {
                        str(i + 1): plain(cell_text(c)) for i, c in enumerate(row[1:]) if plain(cell_text(c))}
            continue
        t = plain(b['text'])
        m = re.match(r'^មេរៀនទី\s*([០-៩0-9]+)', t)
        if m:
            lesson = int(m.group(1).translate(KH2AR)); qn = None
            continue
        m = NUM_RE.match(t)
        if m and lesson:
            qn = int(m.group(1).translate(KH2AR))
            continue
        if t.startswith('ចម្លើយ') and lesson and qn:
            model.setdefault(lesson, {})[qn] = re.sub(r'^ចម្លើយ\s*៖\s*', '', b['text'])
    return mcq, model


# ----------------------------------------------------------------------------- lesson builder
class LessonBuilder:
    def __init__(self, lesson_id, number, mcq_answers, model_answers, is_answer_key=False):
        self.lesson_id = lesson_id
        self.number = number
        self.mcq_answers = mcq_answers
        self.model_answers = model_answers
        self.is_answer_key = is_answer_key
        self.objectives = []
        self.sections = []
        self.cur = None
        self.list_block = None
        self.qmode = None       # None / 'mcq' / 'short'
        self.qitem = None

    def section(self, title):
        self.cur = {'title': title, 'items': []}
        self.sections.append(self.cur)
        self.list_block = None
        self.qmode = None
        self.qitem = None

    def add(self, item):
        if self.cur is None:
            self.section('ខ្លឹមសារមេរៀន')
        self.cur['items'].append(item)
        if item['type'] != 'bullets':
            self.list_block = None
        return item

    def bullet(self, text):
        if not (self.list_block and self.cur['items'] and self.cur['items'][-1] is self.list_block):
            self.list_block = self.add({'type': 'bullets', 'items': []})
        self.list_block['items'].append(text)

    def start_quiz(self, head):
        if 'ពហុជ្រើសរើស' in head:
            self.qmode = 'mcq'
            self.qitem = self.add({'type': 'quiz', 'title': 'ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)',
                                   'isExam': False, 'questions': []})
        else:
            self.qmode = 'short'
            self.qitem = self.add({'type': 'short-questions', 'title': re.sub(r'\s*៖\s*$', '', head), 'questions': []})

    def question(self, n, text):
        q = {'number': n, 'numberKh': str(n).translate(AR2KH), 'question': text}
        if self.qmode == 'mcq':
            ans = self.mcq_answers.get(self.number, {}).get(str(n), '')
            q.update({'options': [], 'answer': ans, 'answerNote': ''})
        else:
            model = self.model_answers.get(self.number, {}).get(n)
            if model:
                q['answer'] = model
        self.qitem['questions'].append(q)

    def option(self, key, text):
        q = self.qitem['questions'][-1]
        q['options'].append({'key': key, 'text': text})
        if key == q['answer']:
            q['answerNote'] = plain(text)


def build_lesson(blocks, images, lesson_id, number, mcq, model, is_answer_key):
    lb = LessonBuilder(lesson_id, number, mcq, model, is_answer_key)
    i = 0
    while i < len(blocks):
        b = blocks[i]
        i += 1
        if b['k'] == 'p':
            t, txt = plain(b['text']), b['text']
            if b['images']:
                caption = ''
                if i < len(blocks) and blocks[i]['k'] == 'p' and plain(blocks[i]['text']).startswith('រូបភាពទី'):
                    caption = plain(blocks[i]['text'])
                    i += 1
                for img in b['images']:
                    lb.add({'type': 'image', 'src': images.write(img, lesson_id),
                            'caption': caption or (lb.cur['title'] if lb.cur else '')})
                continue
            if not t or t.startswith('រូបភាពទី'):
                continue
            if b['style'] == 'ចំណុច':
                lb.section(t)
                if t.startswith('សំណួរ') or 'សំណួរវាយតម្លៃ' in t or 'Review Questions' in t:
                    lb.qmode = 'pending'
                continue
            # quiz headings (ក. … / ខ. … / សំណួរ…) written in the Muol heading font
            if b['heading_font'] and lb.qmode is not None and 'សំណួរ' in t:
                lb.start_quiz(t)
                continue
            if b['heading_font']:
                lb.add({'type': 'subsection', 'title': txt})
                continue
            if lb.qmode in ('mcq', 'short'):
                m_opt = OPT_RE.match(t)
                m_q = NUM_RE.match(t)
                if lb.qmode == 'mcq' and m_opt and lb.qitem['questions']:
                    lb.option(m_opt.group(1), OPT_RE.match(txt).group(2) if OPT_RE.match(txt) else m_opt.group(2))
                    continue
                if m_q:
                    body = re.sub(r'^[០-៩0-9]+\.\s*', '', re.sub(r'</?strong>', '', txt))
                    lb.question(int(m_q.group(1).translate(KH2AR)), body)
                    continue
            if lb.is_answer_key:
                if t.startswith('ចម្លើយ'):
                    lb.add({'type': 'callout', 'kind': 'tip', 'text': txt})
                    continue
                if NUM_RE.match(t):
                    lb.add({'type': 'paragraph', 'text': '<strong>' + plain(txt) + '</strong>' if '`' not in txt else txt})
                    continue
            if b['style'] == 'List Paragraph' or b['num']:
                lb.bullet(re.sub(r'^\s*[•▪✔\-]\s*', '', txt))
            else:
                lb.add({'type': 'paragraph', 'text': txt})
            continue

        # ---- tables
        rows = b['rows']
        if all(len(r) == 1 for r in rows):
            # 1-column table = one or more boxes stacked (each row is its own box)
            for row in rows:
                cell = row[0]
                paras = [p for p in cell['paras'] if plain(p['text'])]
                if not paras:
                    continue
                first = plain(paras[0]['text'])
                if first.startswith('🎯') or 'Learning Objectives' in first:
                    lb.objectives += [re.sub(r'^\s*✔\s*', '', p['text']) for p in paras[1:]
                                      if not plain(p['text']).startswith('⏱')]
                elif first.startswith('⏱'):
                    pass  # study-hour boxes are not shown in the app
                elif first.startswith('📄') or first.startswith('📁'):
                    title = re.sub(r'^[📄📁]\s*', '', plain(paras[0]['text']))
                    code = '\n'.join(p['raw'].replace(' ', ' ').rstrip() for p in cell['paras'][1:])
                    lb.add({'type': 'code', 'title': title, 'code': code.strip('\n')})
                elif first.startswith('📌'):
                    lines = ['<strong>' + re.sub(r'^📌\s*', '', plain(paras[0]['text'])) + '</strong>'] + [p['text'] for p in paras[1:]]
                    lb.add({'type': 'callout', 'kind': 'note', 'text': '\n'.join(lines)})
                else:
                    kind = 'warning' if re.match(r'^(ចំណាំ|ប្រយ័ត្ន|សុវត្ថិភាព)', first) else 'tip'
                    lb.add({'type': 'callout', 'kind': kind, 'text': '\n'.join(p['text'] for p in paras)})
                for img in cell['images']:
                    lb.add({'type': 'image', 'src': images.write(img, lesson_id), 'caption': lb.cur['title'] if lb.cur else ''})
        else:
            def val(c):
                t = cell_text(c)
                return {'text': t, 'colspan': c['span']} if c['span'] > 1 else t
            lb.add({'type': 'table', 'headers': [val(c) for c in rows[0]], 'rows': [[val(c) for c in r] for r in rows[1:]]})
    return lb


# ----------------------------------------------------------------------------- texts that are not in the book
META = {
    "titleKh": "ការបង្កើត និងថែទាំគេហទំព័រ I",
    "titleEn": "Create and Maintain Websites I",
    "author": "រៀបចំដោយ ហេង ឧត្តម",
    "institutionKh": "វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប",
    "institutionEn": "Regional Polytechnic Institute Techo Sen Siem Reap (RPITSSR)",
    "year": "២០២៦",
    "coverImage": "images/cover.webp",
    "logoImage": "images/logo.webp",
}

PREFACE = {
    "title": "អារម្ភកថា",
    "content": (
        "សព្វថ្ងៃនេះ គេហទំព័រ (Website) បានក្លាយជាច្រកទ្វារសំខាន់សម្រាប់ស្ថាប័ន អាជីវកម្ម និងបុគ្គលគ្រប់រូប ក្នុងការផ្សព្វផ្សាយព័ត៌មាន "
        "ផ្ដល់សេវាកម្ម និងទំនាក់ទំនងជាមួយអតិថិជន។ ជំនាញរចនា និងបង្កើតគេហទំព័រ គឺជាជំនាញមូលដ្ឋានដែលទីផ្សារការងារផ្នែកព័ត៌មានវិទ្យាត្រូវការជាចាំបាច់។\n\n"
        "ដើម្បីឆ្លើយតបនឹងតម្រូវការនេះ វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប បានរៀបចំឯកសារមេរៀន «ការបង្កើត និងថែទាំគេហទំព័រ I "
        "(Create and Maintain Websites I)» សម្រាប់ជាជំនួយដល់ការបង្រៀនរបស់គ្រូ និងការសិក្សារបស់និស្សិតដេប៉ាតឺម៉ង់ព័ត៌មានវិទ្យា "
        "កម្រិតសញ្ញាបត្រជាន់ខ្ពស់បច្ចេកទេស ដែលចាប់ផ្ដើមពីសូន្យ។\n\n"
        "ខ្លឹមសារត្រូវបានរៀបចំតាមលំដាប់ Penpot → HTML → CSS → JavaScript → Project ដោយមានឧទាហរណ៍កូដដែលអាចចម្លងទៅសាកល្បងបានភ្លាមៗ "
        "រូបភាពលទ្ធផលពិតក្នុង Browser លំហាត់អនុវត្ត និងសំណួរត្រួតពិនិត្យការយល់ដឹង។ មេរៀនទាំង ៩ រួមមាន ៖\n"
        "- មេរៀនទី ១ ៖ ការរចនាចំណុចប្រទាក់គេហទំព័រក្នុង Penpot\n"
        "- មេរៀនទី ២ ដល់ ទី ៤ ៖ HTML, HTML Forms និង CSS មូលដ្ឋាន\n"
        "- មេរៀនទី ៥ ៖ CSS Layout, Responsive Design និងសេចក្ដីផ្ដើម JavaScript\n"
        "- មេរៀនទី ៦ ដល់ ទី ៧ ៖ JavaScript មូលដ្ឋាន, DOM និង Events\n"
        "- មេរៀនទី ៨ ដល់ ទី ៩ ៖ គម្រោងបង្កើតគេហទំព័រ ការថែទាំ និងការបង្ហាញគម្រោង\n\n"
        "ទោះបីជាអ្នករៀបចំបានខិតខំប្រឹងប្រែងយ៉ាងណាក្តី ក៏ឯកសារនេះប្រហែលជានៅមានការខ្វះខាតដោយអចេតនា។ "
        "អ្នករៀបចំរីករាយទទួលយកនូវរាល់មតិរិះគន់ប្រកបដោយស្ថាបនាពីសំណាក់គ្រូ និងនិស្សិតទាំងអស់ ដើម្បីបន្តកែលម្អឯកសារនេះឱ្យកាន់តែល្អប្រសើរ។"
    ),
    "signOff": {"location": "សៀមរាប", "date": "ឆ្នាំ២០២៦", "role": "រៀបចំ និងចងក្រងដោយ", "author": "ហេង ឧត្តម"},
}

COURSE_INTRO = {
    "title": "សេចក្តីផ្តើមនៃមុខវិជ្ជា",
    "content": (
        "## ១. ការពិពណ៌នាអំពីមុខវិជ្ជា (Course Description)\n\n"
        "មុខវិជ្ជា **ការបង្កើត និងថែទាំគេហទំព័រ I (Create and Maintain Websites I)** ត្រូវបានរៀបចំសម្រាប់និស្សិតដេប៉ាតឺម៉ង់ព័ត៌មានវិទ្យា "
        "កម្រិតសញ្ញាបត្រជាន់ខ្ពស់បច្ចេកទេស នៃវិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប (RPITSSR)។ និស្សិតរៀនរចនាគំរូ Website ក្នុង Penpot "
        "បង្កើត Website មូលដ្ឋានដោយប្រើ HTML, CSS និង JavaScript ព្រមទាំងកែប្រែ និងថែទាំ Website សាមញ្ញបាន។ មិនតម្រូវឱ្យមានចំណេះដឹង Programming ជាមុនទេ។\n\n"
        "## ២. គោលដៅនៃមុខវិជ្ជា (Course Learning Outcomes)\n\n"
        "ក្រោយពេលបញ្ចប់មុខវិជ្ជានេះ និស្សិតនឹងមានសមត្ថភាព ៖\n"
        "- រចនា Homepage ក្នុង Penpot ដោយប្រើ Boards, Style Guide, Components និង Prototype\n"
        "- សរសេររចនាសម្ព័ន្ធ HTML Document ដោយប្រើ Semantic HTML, Links, Images, Lists, Tables និង Forms\n"
        "- កំណត់រចនាប័ទ្មដោយ CSS (Selectors, Typography, Box Model, Display) និងរៀបចំ Layout ដោយ Flexbox និង Grid\n"
        "- ធ្វើឱ្យ Website បង្ហាញល្អលើ Desktop និង Mobile ដោយ Media Queries\n"
        "- សរសេរ JavaScript មូលដ្ឋាន (Variables, Conditions, Loops, Functions, Arrays) និងកែប្រែ DOM តាម Events\n"
        "- បង្កើត Final Website Project ធ្វើតេស្ត Debug និងថែទាំ Website (កែខ្លឹមសារ រៀបចំ File និង Backup)\n\n"
        "## ៣. ការវាយតម្លៃ (Assessment)\n\n"
        "- **Penpot Design ៖** ១៥%\n"
        "- **HTML Structure ៖** ២០%\n"
        "- **CSS Styling and Responsive Design ៖** ២០%\n"
        "- **JavaScript Functionality ៖** ១៥%\n"
        "- **Final Website Project ៖** ២០%\n"
        "- **Attendance and Practical Exercises ៖** ១០%"
    ),
}

REFERENCES = [
    {"author": "Penpot (Kaleidos)", "year": "Online", "title": "Penpot Help Center", "publisher": "https://help.penpot.app/"},
    {"author": "Mozilla (MDN Web Docs)", "year": "Online", "title": "HTML: HyperText Markup Language",
     "publisher": "https://developer.mozilla.org/en-US/docs/Web/HTML"},
    {"author": "Mozilla (MDN Web Docs)", "year": "Online", "title": "CSS: Cascading Style Sheets",
     "publisher": "https://developer.mozilla.org/en-US/docs/Web/CSS"},
    {"author": "Mozilla (MDN Web Docs)", "year": "Online", "title": "JavaScript",
     "publisher": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {"author": "Mozilla (MDN Web Docs)", "year": "Online", "title": "Learn Web Development",
     "publisher": "https://developer.mozilla.org/en-US/docs/Learn_web_development"},
    {"author": "Microsoft", "year": "Online", "title": "Visual Studio Code Documentation", "publisher": "https://code.visualstudio.com/docs"},
    {"author": "Google", "year": "Online", "title": "Chrome DevTools", "publisher": "https://developer.chrome.com/docs/devtools"},
    {"author": "ដេប៉ាតឺម៉ង់ព័ត៌មានវិទ្យា RPITSSR", "year": "២០២៦",
     "title": "សៀវភៅមេរៀន ការបង្កើត និងថែទាំគេហទំព័រ I (Create and Maintain Websites I)",
     "publisher": "វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប"},
]


def main(docx_path):
    print(f'Loading {docx_path}...')
    docx = Docx(docx_path)
    blocks = list(docx.blocks())

    # Page numbers from the table of contents (TOC 1 entries end with the page number)
    toc = []
    for b in blocks:
        if b['k'] == 'p' and b['style'].lower() == 'toc 1':
            m = re.search(r'([0-9]+)\s*$', b['raw'])
            if m:
                toc.append(int(m.group(1)))

    starts = [i for i, b in enumerate(blocks) if b['k'] == 'p' and b['style'] == 'មេរៀនទី']
    mcq, model = read_answer_key(blocks)

    if os.path.isdir(IMG_DIR):
        shutil.rmtree(IMG_DIR)
    os.makedirs(IMG_DIR, exist_ok=True)
    images = ImageWriter(docx)

    lessons = []
    core_count = sum(1 for s in starts if plain(blocks[s]['text']).startswith('មេរៀនទី'))
    for idx, pos in enumerate(starts):
        num = idx + 1
        lesson_id = f'lesson-{num:02d}'
        end = starts[idx + 1] if idx + 1 < len(starts) else len(blocks)
        heading = plain(blocks[pos]['text'])
        is_app = heading.startswith('ឧបសម្ព័ន្ធទី')
        m = re.match(r'^(?:មេរៀនទី|ឧបសម្ព័ន្ធទី)\s*([០-៩0-9]+)\s*[៖:]?\s*(.*)$', heading)
        own_num = int(m.group(1).translate(KH2AR))
        title = m.group(2).strip()
        lb = build_lesson(blocks[pos + 1:end], images, lesson_id, own_num if not is_app else 0, mcq, model,
                          is_answer_key=is_app and 'កម្រងចម្លើយ' in title)
        label = ('ឧបសម្ព័ន្ធទី ' if is_app else 'មេរៀនទី ') + str(own_num).translate(AR2KH)
        page_start = toc[idx] if idx < len(toc) else 1
        page_end = (toc[idx + 1] - 1) if idx + 1 < len(toc) else page_start + 2
        en = re.search(r'\(([^()]*)\)\s*$', title)
        lessons.append({
            'id': lesson_id, 'number': num, 'isAppendix': is_app, 'appendixNum': own_num if is_app else None,
            'label': label, 'title': title, 'fullTitle': f'{label} ៖ {title}',
            'kindLabel': en.group(1) if (is_app and en) else '',
            'pageStart': page_start, 'pageEnd': page_end,
            'objectives': lb.objectives, 'sections': lb.sections,
        })

    # Cover image = the picture in the middle of the book cover
    for b in blocks[:starts[0]]:
        if b['k'] == 'p':
            for target in b['images']:
                data = docx.media(target)
                if not target.lower().endswith('.gif') and len(data) > 10_000:   # skip the institute logo (GIF) and small ornaments
                    with open(COVER_PATH, 'wb') as f:
                        f.write(to_webp(data))

    meta = dict(META, totalLessons=core_count, totalAppendices=len(lessons) - core_count,
                totalPages=toc[-1] + 2 if toc else None)
    data = {'meta': meta, 'preface': PREFACE, 'courseIntro': COURSE_INTRO, 'lessons': lessons, 'references': REFERENCES}
    header = ('/* Course content generated from Create_and_Maintain_Websites_I_Khmer.docx\n'
              '   by tools/build_course_data.py. Do not edit by hand: edit the book and run the tool again. */\n')
    with open(DATA_PATH, 'w', encoding='utf-8') as f:
        f.write(header + 'window.COURSE_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')

    n_q = sum(len(it['questions']) for l in lessons for s in l['sections'] for it in s['items'] if it['type'] == 'quiz')
    n_code = sum(1 for l in lessons for s in l['sections'] for it in s['items'] if it['type'] == 'code')
    print(f'Built {core_count} lessons + {len(lessons) - core_count} appendices, {n_q} quiz questions, {n_code} code examples')
    print(f'Images written as WebP: {len(images.done)} ({images.bytes_in / 1e6:.1f} MB -> {images.bytes_out / 1e6:.1f} MB)')


if __name__ == '__main__':
    default_docx = os.path.join(os.path.dirname(ROOT), 'Create_and_Maintain_Websites_I_Khmer.docx')
    main(sys.argv[1] if len(sys.argv) > 1 else default_docx)
