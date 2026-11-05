/* Course content generated from Create_and_Maintain_Websites_I_Khmer.docx
   by tools/build_course_data.py. Do not edit by hand: edit the book and run the tool again. */
window.COURSE_DATA = {
  "meta": {
    "titleKh": "ការបង្កើត និងថែទាំគេហទំព័រ I",
    "titleEn": "Create and Maintain Websites I",
    "author": "រៀបចំដោយ ហេង ឧត្តម",
    "institutionKh": "វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប",
    "institutionEn": "Regional Polytechnic Institute Techo Sen Siem Reap (RPITSSR)",
    "year": "២០២៦",
    "coverImage": "images/cover.webp",
    "logoImage": "images/logo.webp",
    "totalLessons": 9,
    "totalAppendices": 4,
    "totalPages": 127
  },
  "preface": {
    "title": "អារម្ភកថា",
    "content": "សព្វថ្ងៃនេះ គេហទំព័រ (Website) បានក្លាយជាច្រកទ្វារសំខាន់សម្រាប់ស្ថាប័ន អាជីវកម្ម និងបុគ្គលគ្រប់រូប ក្នុងការផ្សព្វផ្សាយព័ត៌មាន ផ្ដល់សេវាកម្ម និងទំនាក់ទំនងជាមួយអតិថិជន។ ជំនាញរចនា និងបង្កើតគេហទំព័រ គឺជាជំនាញមូលដ្ឋានដែលទីផ្សារការងារផ្នែកព័ត៌មានវិទ្យាត្រូវការជាចាំបាច់។\n\nដើម្បីឆ្លើយតបនឹងតម្រូវការនេះ វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប បានរៀបចំឯកសារមេរៀន «ការបង្កើត និងថែទាំគេហទំព័រ I (Create and Maintain Websites I)» សម្រាប់ជាជំនួយដល់ការបង្រៀនរបស់គ្រូ និងការសិក្សារបស់និស្សិតដេប៉ាតឺម៉ង់ព័ត៌មានវិទ្យា កម្រិតសញ្ញាបត្រជាន់ខ្ពស់បច្ចេកទេស ដែលចាប់ផ្ដើមពីសូន្យ។\n\nខ្លឹមសារត្រូវបានរៀបចំតាមលំដាប់ Penpot → HTML → CSS → JavaScript → Project ដោយមានឧទាហរណ៍កូដដែលអាចចម្លងទៅសាកល្បងបានភ្លាមៗ រូបភាពលទ្ធផលពិតក្នុង Browser លំហាត់អនុវត្ត និងសំណួរត្រួតពិនិត្យការយល់ដឹង។ មេរៀនទាំង ៩ រួមមាន ៖\n- មេរៀនទី ១ ៖ ការរចនាចំណុចប្រទាក់គេហទំព័រក្នុង Penpot\n- មេរៀនទី ២ ដល់ ទី ៤ ៖ HTML, HTML Forms និង CSS មូលដ្ឋាន\n- មេរៀនទី ៥ ៖ CSS Layout, Responsive Design និងសេចក្ដីផ្ដើម JavaScript\n- មេរៀនទី ៦ ដល់ ទី ៧ ៖ JavaScript មូលដ្ឋាន, DOM និង Events\n- មេរៀនទី ៨ ដល់ ទី ៩ ៖ គម្រោងបង្កើតគេហទំព័រ ការថែទាំ និងការបង្ហាញគម្រោង\n\nទោះបីជាអ្នករៀបចំបានខិតខំប្រឹងប្រែងយ៉ាងណាក្តី ក៏ឯកសារនេះប្រហែលជានៅមានការខ្វះខាតដោយអចេតនា។ អ្នករៀបចំរីករាយទទួលយកនូវរាល់មតិរិះគន់ប្រកបដោយស្ថាបនាពីសំណាក់គ្រូ និងនិស្សិតទាំងអស់ ដើម្បីបន្តកែលម្អឯកសារនេះឱ្យកាន់តែល្អប្រសើរ។",
    "signOff": {
      "location": "សៀមរាប",
      "date": "ឆ្នាំ២០២៦",
      "role": "រៀបចំ និងចងក្រងដោយ",
      "author": "ហេង ឧត្តម"
    }
  },
  "courseIntro": {
    "title": "សេចក្តីផ្តើមនៃមុខវិជ្ជា",
    "content": "## ១. ការពិពណ៌នាអំពីមុខវិជ្ជា (Course Description)\n\nមុខវិជ្ជា **ការបង្កើត និងថែទាំគេហទំព័រ I (Create and Maintain Websites I)** ត្រូវបានរៀបចំសម្រាប់និស្សិតដេប៉ាតឺម៉ង់ព័ត៌មានវិទ្យា កម្រិតសញ្ញាបត្រជាន់ខ្ពស់បច្ចេកទេស នៃវិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប (RPITSSR)។ និស្សិតរៀនរចនាគំរូ Website ក្នុង Penpot បង្កើត Website មូលដ្ឋានដោយប្រើ HTML, CSS និង JavaScript ព្រមទាំងកែប្រែ និងថែទាំ Website សាមញ្ញបាន។ មិនតម្រូវឱ្យមានចំណេះដឹង Programming ជាមុនទេ។\n\n## ២. គោលដៅនៃមុខវិជ្ជា (Course Learning Outcomes)\n\nក្រោយពេលបញ្ចប់មុខវិជ្ជានេះ និស្សិតនឹងមានសមត្ថភាព ៖\n- រចនា Homepage ក្នុង Penpot ដោយប្រើ Boards, Style Guide, Components និង Prototype\n- សរសេររចនាសម្ព័ន្ធ HTML Document ដោយប្រើ Semantic HTML, Links, Images, Lists, Tables និង Forms\n- កំណត់រចនាប័ទ្មដោយ CSS (Selectors, Typography, Box Model, Display) និងរៀបចំ Layout ដោយ Flexbox និង Grid\n- ធ្វើឱ្យ Website បង្ហាញល្អលើ Desktop និង Mobile ដោយ Media Queries\n- សរសេរ JavaScript មូលដ្ឋាន (Variables, Conditions, Loops, Functions, Arrays) និងកែប្រែ DOM តាម Events\n- បង្កើត Final Website Project ធ្វើតេស្ត Debug និងថែទាំ Website (កែខ្លឹមសារ រៀបចំ File និង Backup)\n\n## ៣. ការវាយតម្លៃ (Assessment)\n\n- **Penpot Design ៖** ១៥%\n- **HTML Structure ៖** ២០%\n- **CSS Styling and Responsive Design ៖** ២០%\n- **JavaScript Functionality ៖** ១៥%\n- **Final Website Project ៖** ២០%\n- **Attendance and Practical Exercises ៖** ១០%"
  },
  "lessons": [
    {
      "id": "lesson-01",
      "number": 1,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ១",
      "title": "ការចាប់ផ្ដើមជាមួយ Penpot និងការរចនាចំណុចប្រទាក់គេហទំព័រ",
      "fullTitle": "មេរៀនទី ១ ៖ ការចាប់ផ្ដើមជាមួយ Penpot និងការរចនាចំណុចប្រទាក់គេហទំព័រ",
      "kindLabel": "",
      "pageStart": 6,
      "pageEnd": 17,
      "objectives": [
        "យល់ពីរបៀបដែល Website ដំណើរការ និងតួនាទីរបស់ HTML, CSS និង JavaScript ក្នុង Front-end Web Development",
        "បែងចែកបានរវាងការរចនាចំណុចប្រទាក់ (UI) និងបទពិសោធន៍អ្នកប្រើ (UX)",
        "បង្កើតគណនី Penpot និងស្គាល់ផ្ទាំងការងារ (Interface) សំខាន់ៗរបស់ Penpot",
        "ប្រើ Boards, Shapes, Text និង Images ដើម្បីរៀបចំប្លង់ទំព័រ (Layout) បាន",
        "កំណត់ Colors, Typography, Spacing និង Alignment ឱ្យមានសណ្ដាប់ធ្នាប់",
        "បង្កើត Component និង Prototype មូលដ្ឋាន ហើយរចនា Homepage សាមញ្ញមួយក្នុង Penpot"
      ],
      "sections": [
        {
          "title": "១.១. សេចក្ដីផ្ដើមអំពី Website និង Front-end Web Development",
          "items": [
            {
              "type": "paragraph",
              "text": "គេហទំព័រ (Website) គឺជាបណ្ដុំនៃទំព័របណ្ដាញ (Web Pages) ដែលភ្ជាប់ទៅគ្នា ហើយអាចចូល មើលបានតាមរយៈកម្មវិធីរុករក (Browser) ដូចជា Google Chrome, Microsoft Edge ឬ Mozilla Firefox។ ឧទាហរណ៍ Website របស់វិទ្យាស្ថាន អាចមានទំព័រដើម (Homepage) ទំព័រជំនាញ ទំព័រព័ត៌មាន និងទំព័រ ទំនាក់ទំនង។"
            },
            {
              "type": "paragraph",
              "text": "នៅពេលយើងវាយអាសយដ្ឋាន (URL) ដូចជា `https://www.example.com` ក្នុង Browser កម្មវិធី Browser (ហៅថា Client) នឹងផ្ញើសំណើ (Request) ទៅកាន់ម៉ាស៊ីនមេ (Web Server)។ Web Server ផ្ញើឯកសារ HTML, CSS, JavaScript និងរូបភាពត្រឡប់មកវិញ (Response) ហើយ Browser បកប្រែឯកសារ ទាំងនោះ ដើម្បីបង្ហាញជាគេហទំព័រដែលយើងមើលឃើញ។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-01/fig-01.webp",
              "caption": "រូបភាពទី ១.១ ៖ ដំណើរការរបស់ Website រវាង Browser (Client) និង Web Server"
            },
            {
              "type": "paragraph",
              "text": "ការអភិវឌ្ឍគេហទំព័រ (Web Development) ចែកជាពីរផ្នែកធំៗ ៖"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>Front-end Development ៖</strong> ផ្នែកដែលអ្នកប្រើមើលឃើញ និងប៉ះពាល់ផ្ទាល់នៅលើ Browser ដូចជា ប្លង់ ពណ៌ អក្សរ ប៊ូតុង និង Form។ វគ្គសិក្សានេះផ្ដោតលើផ្នែកនេះ។",
                "<strong>Back-end Development ៖</strong> ផ្នែកដែលដំណើរការនៅលើ Server ដូចជា ការរក្សាទុកទិន្នន័យក្នុង Database និងការចូលប្រើគណនី។ ផ្នែកនេះនឹងសិក្សានៅវគ្គកម្រិតខ្ពស់បន្ទាប់។"
              ]
            },
            {
              "type": "table",
              "headers": [
                "<strong>បច្ចេកវិទ្យា</strong>",
                "<strong>តួនាទី</strong>",
                "<strong>ឧទាហរណ៍ងាយយល់</strong>"
              ],
              "rows": [
                [
                  "<strong>Penpot</strong>",
                  "រចនាគំរូ (Design/Mockup) មុនសរសេរកូដ",
                  "ដូចជាគំនូរប្លង់ផ្ទះ មុនពេលសាងសង់"
                ],
                [
                  "<strong>HTML</strong>",
                  "រៀបចំរចនាសម្ព័ន្ធ និងខ្លឹមសារទំព័រ",
                  "ដូចជាគ្រោងឆ្អឹង និងជញ្ជាំងផ្ទះ"
                ],
                [
                  "<strong>CSS</strong>",
                  "កំណត់រូបរាង ពណ៌ អក្សរ និងប្លង់",
                  "ដូចជាការលាបពណ៌ និងតុបតែងផ្ទះ"
                ],
                [
                  "<strong>JavaScript</strong>",
                  "បន្ថែមអន្តរកម្ម និងមុខងារ",
                  "ដូចជាភ្លើង ទ្វារស្វ័យប្រវត្តិ និងកុងតាក់"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "ក្នុងវគ្គនេះ សិស្សនឹងរៀនតាមលំដាប់ ៖ <strong>Penpot → HTML → CSS → JavaScript → Project</strong>។ ពោលគឺ រចនាជាមុនសិន បន្ទាប់មកបំលែង Design ទៅជាកូដ ហើយចុងក្រោយធ្វើតេស្ត និងថែទាំ Website។"
            }
          ]
        },
        {
          "title": "១.២. ភាពខុសគ្នារវាង UI និង UX",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>UI (User Interface) ឬចំណុចប្រទាក់អ្នកប្រើ</strong> គឺជាអ្វីដែលអ្នកប្រើមើលឃើញនៅលើអេក្រង់ ដូចជា ប៊ូតុង ពណ៌ ពុម្ពអក្សរ រូបតំណាង (Icons) និងការរៀបចំប្លង់។ <strong>UX (User Experience) ឬបទពិសោធន៍អ្នកប្រើ</strong> គឺជាអារម្មណ៍ និងភាពងាយស្រួលរបស់អ្នកប្រើ ពេលប្រើ Website ដូចជា រកព័ត៌មានឃើញលឿន យល់ពីអ្វីត្រូវ ចុច និងបំពេញ Form បានដោយមិនច្របូកច្របល់។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ចំណុចប្រៀបធៀប</strong>",
                "<strong>UI (User Interface)</strong>",
                "<strong>UX (User Experience)</strong>"
              ],
              "rows": [
                [
                  "<strong>សំណួរសំខាន់</strong>",
                  "តើវាមើលទៅស្អាត និងស្របគ្នាឬទេ?",
                  "តើវាងាយប្រើ និងដោះស្រាយបញ្ហាអ្នកប្រើ បានឬទេ?"
                ],
                [
                  "<strong>ផ្ដោតលើ</strong>",
                  "ពណ៌ អក្សរ ប៊ូតុង រូបភាព គម្លាត",
                  "លំដាប់ទំព័រ ការរុករក ល្បឿន ភាពច្បាស់លាស់"
                ],
                [
                  "<strong>ឧទាហរណ៍</strong>",
                  "ប៊ូតុង \"ចុះឈ្មោះ\" ពណ៌ខៀវ មុំមូល",
                  "អ្នកប្រើរកប៊ូតុង \"ចុះឈ្មោះ\" ឃើញភ្លាមៗនៅទំព័រដើម"
                ],
                [
                  "<strong>ឧបករណ៍/វិធី</strong>",
                  "Penpot, Style Guide, Components",
                  "Wireframe, User Flow, ការសាកល្បងជាមួយអ្នកប្រើ"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "UI ល្អ ប៉ុន្តែ UX មិនល្អ ធ្វើឱ្យ Website ស្អាតតែពិបាកប្រើ។ ផ្ទុយទៅវិញ UX ល្អ ប៉ុន្តែ UI មិនល្អ ធ្វើឱ្យអ្នកប្រើមិនទុកចិត្ត។ អ្នករចនាល្អត្រូវគិតទាំងពីរ។ គោលការណ៍ UX មូលដ្ឋានដែលអ្នកចាប់ផ្ដើមគួរ ចងចាំមាន ៖"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>ភាពសាមញ្ញ (Simplicity) ៖</strong> ដាក់តែព័ត៌មានដែលចាំបាច់ កុំឱ្យទំព័រពេញពេក។",
                "<strong>ភាពស៊ីសង្វាក់ (Consistency) ៖</strong> ប៊ូតុង ពណ៌ និងអក្សរប្រភេទដូចគ្នា ត្រូវមានរូបរាងដូចគ្នាគ្រប់ទំព័រ។",
                "<strong>លំដាប់ថ្នាក់ការមើលឃើញ (Visual Hierarchy) ៖</strong> ចំណងជើងសំខាន់ត្រូវធំ និងដិតជាងអត្ថបទ ធម្មតា។",
                "<strong>ភាពងាយអាន (Readability) ៖</strong> ពណ៌អក្សរ និងផ្ទៃខាងក្រោយត្រូវមានកម្រិតផ្ទុយ (Contrast) គ្រប់គ្រាន់។"
              ]
            }
          ]
        },
        {
          "title": "១.៣. ការបង្កើតគណនី និងចាប់ផ្ដើមប្រើ Penpot",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Penpot</strong> គឺជាកម្មវិធីរចនា UI និង Prototype ប្រភពកូដចំហ (Open Source) និងឥតគិតថ្លៃ ដែលដំណើរការលើ Browser ដោយមិនចាំបាច់ដំឡើងកម្មវិធី។ ឯកសារត្រូវបានរក្សាទុកលើ Server ដោយស្វ័យប្រវត្តិ ហើយស្ថាប័នក៏អាចដំឡើង Penpot លើ Server ផ្ទាល់ខ្លួន (Self-host) បានផងដែរ។ Penpot ប្រើស្តង់ដារ Web (SVG, CSS និង HTML) ដូច្នេះ Design ងាយបំលែងទៅជាកូដ ដែលសមស្របសម្រាប់អ្នករៀនបង្កើតគេហទំព័រ។"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>ជំហានទី ១ ៖</strong> បើក Browser ហើយចូលទៅកាន់ `https://design.penpot.app`។",
                "<strong>ជំហានទី ២ ៖</strong> ចុចប៊ូតុង <strong>Sign up</strong> រួចចុះឈ្មោះដោយ Email និងពាក្យសម្ងាត់ ឬប្រើគណនីដែលមាន ស្រាប់ (Google, GitHub ឬ GitLab)។ ការចុះឈ្មោះគឺឥតគិតថ្លៃ។",
                "<strong>ជំហានទី ៣ ៖</strong> ផ្ទៀងផ្ទាត់ Email (ប្រសិនបើត្រូវបានស្នើ) ហើយបំពេញព័ត៌មានខ្លីៗដែល Penpot សួរនៅពេលចូលលើកដំបូង។",
                "<strong>ជំហានទី ៤ ៖</strong> នៅទំព័រ <strong>Dashboard</strong> របស់ Penpot ចូលទៅផ្នែក <strong>Drafts</strong> រួចចុចប៊ូតុង <strong>+</strong> ដើម្បីបង្កើត ឯកសារ (File) ថ្មី។ ឯកសារនឹងបើកនៅក្នុងផ្ទាំងការងារ (Workspace)។",
                "<strong>ជំហានទី ៥ ៖</strong> នៅ Dashboard ចុចពីរដងលើឈ្មោះឯកសារ ដើម្បីប្ដូរឈ្មោះ ឧ. `Lesson01-Homepage`។"
              ]
            },
            {
              "type": "callout",
              "kind": "warning",
              "text": "<strong>ចំណាំ ៖</strong> Penpot ធ្វើបច្ចុប្បន្នភាពផ្ទាំងការងាររបស់ខ្លួនជាប្រចាំ។ ឈ្មោះប៊ូតុង ឬទីតាំង Menu ខ្លះអាចខុសបន្តិច ពីសៀវភៅនេះ។ ប្រសិនបើរកមិនឃើញ សូមមើលឯកសារជំនួយផ្លូវការនៅ `https://help.penpot.app/` ឬចុចគ្រាប់ចុច <strong>?</strong> ក្នុង Penpot ដើម្បីមើលបញ្ជីផ្លូវកាត់ក្ដារចុច។"
            }
          ]
        },
        {
          "title": "១.៤. ការយល់ដឹងអំពី Penpot Interface និង Workspace (Penpot Interface and Workspace)",
          "items": [
            {
              "type": "paragraph",
              "text": "នៅពេលបើកឯកសារ Design ថ្មី Penpot បង្ហាញផ្ទាំងការងារដែលមានផ្នែកសំខាន់ៗចំនួន ៤ ដូចរូបខាងក្រោម ៖"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-01/fig-02.webp",
              "caption": "រូបភាពទី ១.២ ៖ ប្លង់សង្ខេបនៃផ្ទាំងការងារ Penpot (Penpot Workspace)"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ល.រ</strong>",
                "<strong>ផ្នែក (Area)</strong>",
                "<strong>មុខងារ</strong>"
              ],
              "rows": [
                [
                  "<strong>1</strong>",
                  "Toolbar (របារឧបករណ៍)",
                  "ផ្ទុកឧបករណ៍សំខាន់ៗ ដូចជា Move, Board, Rectangle, Ellipse, Text, Image, Path និង Comments"
                ],
                [
                  "<strong>2</strong>",
                  "Left Sidebar",
                  "បង្ហាញ Pages និងបញ្ជី Layers (ស្រទាប់) ទាំងអស់ ព្រមទាំង Assets (Components, ពណ៌ និង Typography)"
                ],
                [
                  "<strong>3</strong>",
                  "Canvas (ផ្ទៃការងារ)",
                  "ផ្ទៃធំនៅកណ្ដាលសម្រាប់គូរ និងរៀបចំ Boards និងវត្ថុ (Objects) ទាំងអស់"
                ],
                [
                  "<strong>4</strong>",
                  "Right Sidebar",
                  "ផ្ទាំង <strong>Design</strong> សម្រាប់កំណត់ទំហំ ពណ៌ អក្សរ Layout និង Export; ផ្ទាំង <strong>Prototype</strong> សម្រាប់កំណត់អន្តរកម្ម; ផ្ទាំង <strong>Inspect</strong> សម្រាប់មើលទំហំ និងកូដ CSS/HTML។ ប៊ូតុង <strong>▷ (View mode)</strong> នៅខាងលើស្ដាំ សម្រាប់សាកល្បង Prototype"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "ការរុករកលើ Canvas ៖ ប្រើ Mouse Scroll ដើម្បីរំកិលឡើងចុះ, ចុច <strong>Ctrl + Scroll</strong> ដើម្បីពង្រីក/បង្រួម, ចុច <strong>Shift + 1</strong> ដើម្បីបង្ហាញវត្ថុទាំងអស់ឱ្យសមនឹងអេក្រង់ (Zoom to fit all) និង <strong>Shift + 0</strong> ដើម្បីត្រឡប់ទៅទំហំ 100%។"
            }
          ]
        },
        {
          "title": "១.៥. ការប្រើប្រាស់ Boards, Shapes, Text និង Images",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Board</strong> គឺជាផ្ទាំងតំណាងឱ្យអេក្រង់មួយ (ឧ. ទំព័រ Desktop ឬអេក្រង់ទូរស័ព្ទ)។ គ្រប់ Design ទំព័រគេហទំព័រ ត្រូវចាប់ផ្ដើមដោយ Board។ ចុចឧបករណ៍ Board (គ្រាប់ចុច <strong>B</strong>) រួចអូស Mouse លើ Canvas ដើម្បីគូរ Board ហើយកំណត់ Width និង Height នៅផ្ទាំង Design (ឧ. <strong>1440 × 1024</strong>) ឬជ្រើសទំហំគំរូ (Board Presets) សម្រាប់ Web/Desktop ឬទូរស័ព្ទ។ Board អាចផ្ទុក Layers ផ្សេងៗ ស្រដៀងនឹង `<div>` ក្នុង HTML។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ឧបករណ៍</strong>",
                "<strong>គ្រាប់ចុចកាត់</strong>",
                "<strong>របៀបប្រើ</strong>"
              ],
              "rows": [
                [
                  "<strong>Move</strong>",
                  "V",
                  "ជ្រើសរើស ផ្លាស់ទី និងប្ដូរទំហំវត្ថុ"
                ],
                [
                  "<strong>Board</strong>",
                  "B",
                  "បង្កើតផ្ទាំងអេក្រង់ (Desktop, Tablet, Mobile)"
                ],
                [
                  "<strong>Rectangle</strong>",
                  "R",
                  "គូររាងចតុកោណ សម្រាប់ប៊ូតុង កាត (Card) ឬផ្ទៃពណ៌"
                ],
                [
                  "<strong>Ellipse</strong>",
                  "E",
                  "គូររាងរង្វង់ ឬពងក្រពើ (សង្កត់ Shift ដើម្បីបានរង្វង់មូល)"
                ],
                [
                  "<strong>Line</strong>",
                  "L",
                  "គូរបន្ទាត់បែងចែកផ្នែក"
                ],
                [
                  "<strong>Text</strong>",
                  "T",
                  "ចុចលើ Canvas រួចវាយអក្សរ"
                ],
                [
                  "<strong>Path</strong>",
                  "P",
                  "គូររាងតាមចិត្ត (Vector)"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "<strong>ការដាក់រូបភាព (Images) ៖</strong> អូសឯកសាររូបភាព (.png ឬ .jpg) ពី Folder ក្នុងកុំព្យូទ័រ ទម្លាក់ចូល Canvas ផ្ទាល់ ឬចុចឧបករណ៍ <strong>Image</strong> (<strong>Shift + K</strong>) ដើម្បីជ្រើសរូបភាពពីកុំព្យូទ័រ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>ការរៀបចំ Layers ៖</strong> ស្រទាប់នីមួយៗគួរដាក់ឈ្មោះច្បាស់លាស់ (ចុចពីរដងលើឈ្មោះ Layer ដើម្បីប្ដូរ) ដូចជា `Header`, `Hero`, `Card-1`, `Footer`។ ជ្រើសវត្ថុច្រើនរួចចុច <strong>Ctrl + G</strong> ដើម្បីដាក់ជាក្រុម (Group)។ ការរៀបចំ Layers ឱ្យមានរបៀប ធ្វើឱ្យងាយបំលែងទៅជា HTML នៅពេលក្រោយ។"
            }
          ]
        },
        {
          "title": "១.៦. ការកំណត់ Colors, Typography, Spacing និង Alignment",
          "items": [
            {
              "type": "paragraph",
              "text": "មុនចាប់ផ្ដើមរចនាទំព័រ គួររៀបចំ <strong>Style Guide</strong> តូចមួយ ដែលកំណត់ពណ៌ អក្សរ និងគម្លាតដែល នឹងប្រើស្របគ្នាពេញ Website។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-01/fig-03.webp",
              "caption": "រូបភាពទី ១.៣ ៖ ឧទាហរណ៍ Style Guide ៖ ពណ៌ ទំហំអក្សរ និងគម្លាត"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>Colors (ពណ៌) ៖</strong> ជ្រើសពណ៌មេ (Primary) ១ ពណ៌បន្ថែម (Accent) ១ និងពណ៌ផ្ទៃ/អក្សរ។ កុំប្រើពណ៌ច្រើនពេក (៣–៥ ពណ៌គឺគ្រប់គ្រាន់)។ ពណ៌ក្នុង Penpot សរសេរជាលេខកូដ HEX ដូចជា `#002060` ដែលអាចចម្លងទៅប្រើក្នុង CSS បានផ្ទាល់។",
                "<strong>Typography (ពុម្ពអក្សរ) ៖</strong> ប្រើពុម្ពអក្សរ ១–២ ប្រភេទ។ សម្រាប់អក្សរខ្មែរ អាចជ្រើស Kantumruy Pro, Battambang ឬ Noto Sans Khmer (មានក្នុង Google Fonts)។ កំណត់ទំហំឱ្យមានលំដាប់ ឧ. H1 = 40px, H2 = 28px, Body = 16px។",
                "<strong>Spacing (គម្លាត) ៖</strong> ប្រើគម្លាតជាពហុគុណនៃ 8 (8, 16, 24, 32, 48px) ដើម្បីឱ្យប្លង់មើលទៅ មានរបៀប។",
                "<strong>Alignment (ការតម្រឹម) ៖</strong> ជ្រើសវត្ថុច្រើន រួចប្រើប៊ូតុង Align (Left, Center, Right, Top...) នៅខាងលើផ្ទាំង Design។ Penpot ក៏បង្ហាញបន្ទាត់តម្រឹម (Alignment Guides) ដោយស្វ័យប្រវត្តិ ពេលអូសវត្ថុឱ្យតម្រឹមគ្នា។"
              ]
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>គន្លឹះ Flex Layout ៖</strong> ជ្រើស Board ឬវត្ថុច្រើន រួចចុច <strong>Shift + A</strong> ដើម្បីបន្ថែម Flex Layout។ Flex Layout រៀបវត្ថុជាជួរដេក ឬជួរឈរ ដោយមានគម្លាត (Gap) និង Padding ស្មើគ្នាដោយស្វ័យប្រវត្តិ។ Penpot បង្កើត Flex Layout តាមស្តង់ដារ CSS Flexbox ដែលនឹងរៀននៅមេរៀនទី ៥ (ចុច <strong>Ctrl + Shift + A</strong> សម្រាប់ Grid Layout)។"
            }
          ]
        },
        {
          "title": "១.៧. Components និង Prototyping មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Component</strong> គឺជាធាតុរចនាដែលអាចប្រើឡើងវិញបានច្រើនដង ដូចជា ប៊ូតុង Navigation Bar ឬ Card។ ជ្រើសវត្ថុ រួចចុច <strong>Ctrl + K</strong> (ឬចុចខ្លិក Mouse ស្ដាំ → Create component)។ វត្ថុដើមហៅថា <strong>Main Component</strong> ហើយច្បាប់ចម្លងហៅថា <strong>Copy</strong> (ឬ Instance)។ នៅពេលកែ Main Component រាល់ Copies ទាំងអស់ប្ដូរតាមដោយស្វ័យប្រវត្តិ។ Components ត្រូវបានរក្សាទុកក្នុងផ្ទាំង <strong>Assets</strong>។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-01/fig-04.webp",
              "caption": "រូបភាពទី ១.៤ ៖ Main Component និង Copies"
            },
            {
              "type": "paragraph",
              "text": "<strong>Prototype</strong> គឺជាគំរូដែលអាចចុចសាកល្បងបាន ដើម្បីបង្ហាញលំហូរ (Flow) រវាងទំព័រ មុនពេល សរសេរកូដពិតប្រាកដ។ ជំហានបង្កើត Prototype មូលដ្ឋាន ៖"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>ជំហានទី ១ ៖</strong> បង្កើត Board ពីរ ឧ. `Home` និង `About`។",
                "<strong>ជំហានទី ២ ៖</strong> ចុចផ្ទាំង <strong>Prototype</strong> នៅ Right Sidebar។",
                "<strong>ជំហានទី ៣ ៖</strong> ជ្រើសប៊ូតុង \"About Us\" ក្នុង Board `Home` រួចអូសខ្សែភ្ជាប់ (Connection) ទៅ Board `About`។",
                "<strong>ជំហានទី ៤ ៖</strong> កំណត់ Interaction ៖ <strong>On click → Navigate to → About</strong> និងជ្រើស Animation (ឧ. Dissolve ឬ Slide)។",
                "<strong>ជំហានទី ៥ ៖</strong> ចុចប៊ូតុង <strong>▷ (View mode)</strong> នៅខាងលើស្ដាំ ដើម្បីសាកល្បងចុចប៊ូតុង។"
              ]
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-01/fig-05.webp",
              "caption": "រូបភាពទី ១.៥ ៖ ការភ្ជាប់ Interaction ពី Board Home ទៅ Board About"
            },
            {
              "type": "paragraph",
              "text": "<strong>ការនាំចេញ (Export) ៖</strong> ជ្រើស Board រួចនៅផ្នែក <strong>Export</strong> ក្នុងផ្ទាំង Design ចុច (+) ជ្រើសទម្រង់ (PNG, JPEG, WEBP, SVG ឬ PDF) និងទំហំ (1x, 2x) រួចចុច Export។ រូបភាពដែលនាំចេញអាចប្រើក្នុង Website ឬផ្ញើឱ្យគ្រូពិនិត្យ។ ម្យ៉ាងទៀត ផ្ទាំង <strong>Inspect</strong> បង្ហាញទំហំ ពណ៌ និងកូដ CSS/HTML របស់ Layer ដែលជ្រើស ដែលជួយច្រើនពេលបំលែង Design ទៅជាកូដ (មេរៀនទី ៨)។"
            }
          ]
        },
        {
          "title": "១.៨. គម្រោងអនុវត្ត៖ រចនា Homepage សាមញ្ញសម្រាប់ Website មួយក្នុង Penpot",
          "items": [
            {
              "type": "paragraph",
              "text": "គម្រោងនេះប្រមូលផ្ដុំចំណេះដឹងទាំងអស់ក្នុងមេរៀន។ សិស្សរចនា Homepage មួយសម្រាប់ Website ដែលខ្លួនជ្រើសរើស (Personal Portfolio, Institute Information, Restaurant ឬ Product Showcase)។ Design នេះនឹងក្លាយជាមូលដ្ឋានសម្រាប់ Final Project នៅមេរៀនទី ៨។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-01/fig-06.webp",
              "caption": "រូបភាពទី ១.៦ ៖ Wireframe នៃ Homepage ដែលមាន Header, Hero, Content, Contact និង Footer"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>ជំហានទី ១ ៖</strong> បង្កើត Board <strong>Desktop (1440 × 1024)</strong> ដាក់ឈ្មោះ `Home - Desktop`។ (បើខ្លឹមសារ វែង អាចទាញ Board ឱ្យខ្ពស់ជាងនេះបាន)",
                "<strong>ជំហានទី ២ ៖</strong> គូរ <strong>Header</strong> កម្ពស់ប្រហែល 80px ដែលមាន Logo (អត្ថបទ ឬរូបភាព) និង Navigation Links ៤ (ទំព័រដើម អំពីយើង សេវាកម្ម ទំនាក់ទំនង)។",
                "<strong>ជំហានទី ៣ ៖</strong> រចនា <strong>Hero Section</strong> ដែលមានចំណងជើងធំ ប្រយោគណែនាំខ្លី និងប៊ូតុង Call-to-Action។",
                "<strong>ជំហានទី ៤ ៖</strong> រចនា <strong>Content Section</strong> ដោយប្រើ Card ៣ (ធ្វើ Card ជា Component រួចប្រើ Copy ៣)។",
                "<strong>ជំហានទី ៥ ៖</strong> បន្ថែម <strong>Contact Section</strong> និង <strong>Footer</strong>។",
                "<strong>ជំហានទី ៦ ៖</strong> ពិនិត្យ Style Guide ៖ ពណ៌ ទំហំអក្សរ និងគម្លាតត្រូវស្របគ្នា។ ដាក់ឈ្មោះ Layers និង Group ឱ្យមានរបៀប។",
                "<strong>ជំហានទី ៧ ៖</strong> Export Board ជា PNG ហើយចែករំលែក Link ឯកសារ Penpot ឱ្យគ្រូ (ក្នុង View mode ចុច <strong>Share</strong> ដើម្បីបង្កើត Link)។"
              ]
            },
            {
              "type": "table",
              "headers": [
                "<strong>លក្ខណៈវិនិច្ឆ័យ</strong>",
                "<strong>ការពិពណ៌នា</strong>",
                "<strong>ពិន្ទុ</strong>"
              ],
              "rows": [
                [
                  "<strong>Layout</strong>",
                  "មាន Header, Navigation, Hero, Content, Footer គ្រប់គ្រាន់ និងតម្រឹមល្អ",
                  "30%"
                ],
                [
                  "<strong>Colors & Typography</strong>",
                  "ប្រើពណ៌ និងអក្សរស្របតាម Style Guide មិនច្រើនពេក",
                  "25%"
                ],
                [
                  "<strong>Components</strong>",
                  "ប៊ូតុង ឬ Card ត្រូវបានបង្កើតជា Component",
                  "20%"
                ],
                [
                  "<strong>Layers</strong>",
                  "Layers មានឈ្មោះច្បាស់ និង Group មានរបៀប",
                  "15%"
                ],
                [
                  "<strong>Prototype</strong>",
                  "មាន Interaction យ៉ាងតិច ១ ដែលដំណើរការ",
                  "10%"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>លំហាត់អនុវត្តន៍ជាក់ស្ដែងប្រចាំមេរៀនទី ១ (Hands-on Practice) ៖</strong>\n<strong>១.</strong> បង្កើតឯកសារ Penpot ថ្មីឈ្មោះ `Practice01` ហើយគូរ Board Desktop និង Board Mobile (iPhone) មួយៗ។ ក្នុង Board នីមួយៗ ដាក់ចំណងជើង ប៊ូតុង ១ និងរូបភាព ១។\n<strong>២.</strong> បង្កើត Style Guide តូចមួយ ដែលមានពណ៌ ៤ (Primary, Accent, Background, Text) និងទំហំអក្សរ ៣ កម្រិត (H1, H2, Body)។\n<strong>៣.</strong> បង្កើតប៊ូតុងជា Component រួចប្រើ Copy ៣ ដងនៅកន្លែងផ្សេងគ្នា។ សាកល្បងប្ដូរពណ៌ Main Component ហើយសង្កេតលទ្ធផល។\n<strong>៤.</strong> បញ្ចប់គម្រោង Homepage ក្នុងចំណុច ១.៨ និងបង្កើត Prototype ពី Home ទៅ About រួចចុច ▷ (View mode) ដើម្បីសាកល្បង។"
            }
          ]
        },
        {
          "title": "សំណួរត្រួតពិនិត្យការយល់ដឹង (Chapter Review Questions)",
          "items": [
            {
              "type": "quiz",
              "title": "ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
              "isExam": false,
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "តើបច្ចេកវិទ្យាណាដែលប្រើសម្រាប់កំណត់រចនាសម្ព័ន្ធ និងខ្លឹមសាររបស់ទំព័របណ្ដាញ?",
                  "options": [
                    {
                      "key": "A",
                      "text": "CSS"
                    },
                    {
                      "key": "B",
                      "text": "HTML"
                    },
                    {
                      "key": "C",
                      "text": "JavaScript"
                    },
                    {
                      "key": "D",
                      "text": "Penpot"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "HTML"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើពាក្យ UX សំដៅលើអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "ពណ៌ និងពុម្ពអក្សររបស់ Website"
                    },
                    {
                      "key": "B",
                      "text": "កម្មវិធីសម្រាប់គូររូបភាព"
                    },
                    {
                      "key": "C",
                      "text": "បទពិសោធន៍ និងភាពងាយស្រួលរបស់អ្នកប្រើពេលប្រើ Website"
                    },
                    {
                      "key": "D",
                      "text": "ភាសាសរសេរកូដសម្រាប់ Server"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "បទពិសោធន៍ និងភាពងាយស្រួលរបស់អ្នកប្រើពេលប្រើ Website"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ក្នុង Penpot តើគ្រាប់ចុចកាត់ណាសម្រាប់ជ្រើសឧបករណ៍ Board?",
                  "options": [
                    {
                      "key": "A",
                      "text": "R"
                    },
                    {
                      "key": "B",
                      "text": "T"
                    },
                    {
                      "key": "C",
                      "text": "B"
                    },
                    {
                      "key": "D",
                      "text": "V"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "B"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើ Copy របស់ Component មានលក្ខណៈដូចម្ដេច?",
                  "options": [
                    {
                      "key": "A",
                      "text": "មិនទាក់ទងអ្វីនឹង Main Component ទេ"
                    },
                    {
                      "key": "B",
                      "text": "ប្ដូរតាមដោយស្វ័យប្រវត្តិ នៅពេលកែ Main Component"
                    },
                    {
                      "key": "C",
                      "text": "អាចប្រើបានតែម្ដងប៉ុណ្ណោះ"
                    },
                    {
                      "key": "D",
                      "text": "ជារូបភាព PNG ដែលនាំចេញពី Penpot"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "ប្ដូរតាមដោយស្វ័យប្រវត្តិ នៅពេលកែ Main Component"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "តើផ្ទាំងណានៅ Right Sidebar ដែលប្រើសម្រាប់ភ្ជាប់ Interaction រវាង Boards?",
                  "options": [
                    {
                      "key": "A",
                      "text": "Design"
                    },
                    {
                      "key": "B",
                      "text": "Layers"
                    },
                    {
                      "key": "C",
                      "text": "Assets"
                    },
                    {
                      "key": "D",
                      "text": "Prototype"
                    }
                  ],
                  "answer": "D",
                  "answerNote": "Prototype"
                }
              ]
            },
            {
              "type": "short-questions",
              "title": "ខ. សំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ចូរពន្យល់ដោយខ្លីពីដំណើរការរវាង Browser និង Web Server នៅពេលយើងបើក Website មួយ។",
                  "answer": "Browser (Client) ផ្ញើសំណើ (HTTP Request) ទៅ Web Server តាម URL។ Server ផ្ញើឯកសារ HTML, CSS, JavaScript និងរូបភាពត្រឡប់មកវិញ (Response) ហើយ Browser បកប្រែឯកសារទាំងនោះ ដើម្បីបង្ហាញជាគេហទំព័រ។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូររៀបរាប់ភាពខុសគ្នារវាង UI និង UX ព្រមទាំងផ្ដល់ឧទាហរណ៍មួយ។",
                  "answer": "UI ជារូបរាងដែលមើលឃើញ (ពណ៌ អក្សរ ប៊ូតុង) រីឯ UX ជាភាពងាយស្រួល និងអារម្មណ៍ពេលប្រើ។ ឧ. ប៊ូតុងពណ៌ខៀវស្អាតជា UI ប៉ុន្តែការដាក់ប៊ូតុងនៅកន្លែងដែលងាយរកឃើញជា UX។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ហេតុអ្វីបានជាគួររចនាក្នុង Penpot មុនពេលសរសេរកូដ HTML និង CSS?",
                  "answer": "ដើម្បីមើលឃើញប្លង់ ពណ៌ និងលំហូររួមជាមុន កែប្រែបានលឿនដោយមិនចាំបាច់កែកូដ អាចបង្ហាញ ឬសាកល្បងជាមួយអ្នកប្រើ/គ្រូ ហើយប្រើជាឯកសារណែនាំពេលសរសេរកូដ។"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើ Style Guide មានធាតុអ្វីខ្លះ? ហេតុអ្វីវាសំខាន់?",
                  "answer": "មានពណ៌ (Primary, Accent, Background, Text) ពុម្ពអក្សរ និងទំហំអក្សរ និងគម្លាត (Spacing)។ វាធ្វើឱ្យ Design ស៊ីសង្វាក់គ្នាគ្រប់ទំព័រ និងងាយបំលែងទៅជា CSS។"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ចូររៀបរាប់ជំហានបង្កើត Prototype ពី Board \"Home\" ទៅ Board \"About\"។",
                  "answer": "បើកផ្ទាំង Prototype → ជ្រើសប៊ូតុងក្នុង Home → អូសខ្សែភ្ជាប់ទៅ Board About → កំណត់ On click → Navigate to → About និង Animation → ចុច ▷ (View mode) ដើម្បីសាកល្បង។"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ១ (Lesson Summary) ៖</strong>\n<strong>•</strong> Website ដំណើរការដោយ Browser ស្នើសុំឯកសារពី Web Server ហើយបង្ហាញ HTML (រចនាសម្ព័ន្ធ), CSS (រូបរាង) និង JavaScript (អន្តរកម្ម)។\n<strong>•</strong> UI ជារូបរាងដែលមើលឃើញ រីឯ UX ជាបទពិសោធន៍ និងភាពងាយស្រួលនៃការប្រើ។\n<strong>•</strong> Penpot មាន Toolbar, Left Sidebar (Pages, Layers, Assets), Canvas និង Right Sidebar (Design, Prototype, Inspect)។\n<strong>•</strong> Board តំណាងឱ្យអេក្រង់មួយ; Shapes, Text និង Images ប្រើសម្រាប់រៀបចំខ្លឹមសារ។\n<strong>•</strong> Style Guide (ពណ៌ អក្សរ គម្លាត) ធ្វើឱ្យ Design ស៊ីសង្វាក់; Component ជួយប្រើធាតុឡើងវិញ; Prototype ជួយសាកល្បងលំហូរ។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-02",
      "number": 2,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ២",
      "title": "មូលដ្ឋានគ្រឹះ HTML",
      "fullTitle": "មេរៀនទី ២ ៖ មូលដ្ឋានគ្រឹះ HTML",
      "kindLabel": "",
      "pageStart": 18,
      "pageEnd": 30,
      "objectives": [
        "ពន្យល់បានថា HTML ជាអ្វី និងតួនាទីរបស់វាក្នុងការបង្កើតគេហទំព័រ",
        "រៀបចំ Project Folder និងបង្កើតឯកសារ `index.html` ក្នុង Visual Studio Code បាន",
        "សរសេររចនាសម្ព័ន្ធ HTML Document ពេញលេញ (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) បានត្រឹមត្រូវ",
        "ប្រើ Elements និង Attributes សម្រាប់ចំណងជើង កថាខណ្ឌ តំណភ្ជាប់ រូបភាព បញ្ជី និងតារាងបាន",
        "ប្រើ Semantic HTML មូលដ្ឋាន (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) ដើម្បីរៀបចំទំព័រឱ្យមានអត្ថន័យ"
      ],
      "sections": [
        {
          "title": "២.១. សេចក្ដីផ្ដើមអំពី HTML (Introduction to HTML)",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>HTML (HyperText Markup Language)</strong> គឺជាភាសាសម្គាល់ (Markup Language) ដែលប្រើ សម្រាប់បង្កើតរចនាសម្ព័ន្ធ និងខ្លឹមសាររបស់ទំព័របណ្ដាញ។ HTML មិនមែនជាភាសាសរសេរកម្មវិធី (Programming Language) ទេ ព្រោះវាមិនមានការគណនា ឬលក្ខខណ្ឌ។ វាគ្រាន់តែប្រាប់ Browser ថា \"នេះជាចំណងជើង\" \"នេះជាកថាខណ្ឌ\" \"នេះជារូបភាព\" ។ល។"
            },
            {
              "type": "paragraph",
              "text": "HTML ប្រើ <strong>ស្លាក (Tags)</strong> ដែលសរសេរនៅចន្លោះសញ្ញា `<` និង `>`។ ស្លាកភាគច្រើនមានជាគូ ៖ ស្លាកបើក (Opening Tag) ដូចជា `<p>` និងស្លាកបិទ (Closing Tag) ដូចជា `</p>`។ កំណែបច្ចុប្បន្នដែលប្រើ ទូទាំងពិភពលោកគឺ <strong>HTML5</strong>។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ពាក្យ</strong>",
                "<strong>អត្ថន័យ</strong>"
              ],
              "rows": [
                [
                  "<strong>HyperText</strong>",
                  "អត្ថបទដែលមានតំណភ្ជាប់ (Links) ទៅទំព័រផ្សេង"
                ],
                [
                  "<strong>Markup</strong>",
                  "ការសម្គាល់ខ្លឹមសារដោយប្រើស្លាក ដើម្បីប្រាប់ពីតួនាទីរបស់វា"
                ],
                [
                  "<strong>Language</strong>",
                  "ភាសាដែលមានក្បួនសរសេរច្បាស់លាស់ ដែល Browser អាចយល់បាន"
                ]
              ]
            }
          ]
        },
        {
          "title": "២.២. ការរៀបចំ Project Folder និងឯកសារ index.html",
          "items": [
            {
              "type": "paragraph",
              "text": "ឧបករណ៍ដែលត្រូវការសម្រាប់វគ្គនេះមានតែពីរប៉ុណ្ណោះ ៖ កម្មវិធីសរសេរកូដ <strong>Visual Studio Code (VS Code)</strong> (ទាញយកឥតគិតថ្លៃពី `https://code.visualstudio.com/`) និង Browser ដូចជា Google Chrome ឬ Microsoft Edge។"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>ជំហានទី ១ ៖</strong> បង្កើត Folder ថ្មីមួយ ឧ. `my-website` នៅ Desktop ឬ Drive D។",
                "<strong>ជំហានទី ២ ៖</strong> បើក VS Code រួចចូល <strong>File → Open Folder...</strong> ហើយជ្រើស Folder `my-website`។",
                "<strong>ជំហានទី ៣ ៖</strong> នៅផ្ទាំង Explorer ខាងឆ្វេង ចុចរូប <strong>New File</strong> ហើយវាយឈ្មោះ `index.html` រួចចុច Enter។",
                "<strong>ជំហានទី ៤ ៖</strong> ក្នុងឯកសារទទេ វាយសញ្ញា `!` រួចចុច <strong>Tab</strong> (ឬ Enter)។ មុខងារ <strong>Emmet</strong> ដែលមានស្រាប់ក្នុង VS Code នឹងបង្កើតរចនាសម្ព័ន្ធ HTML5 ឱ្យដោយស្វ័យប្រវត្តិ។",
                "<strong>ជំហានទី ៥ ៖</strong> រក្សាទុកដោយចុច <strong>Ctrl + S</strong> រួចបើកឯកសារ `index.html` ក្នុង Browser (ចុចពីរដងលើ File ក្នុង File Explorer របស់ Windows)។"
              ]
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-02/fig-01.webp",
              "caption": "រូបភាពទី ២.១ ៖ រចនាសម្ព័ន្ធ Project Folder ស្តង់ដារ និងច្បាប់ដាក់ឈ្មោះ File"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>គន្លឹះ Live Server ៖</strong> អាចដំឡើង Extension ឈ្មោះ <strong>Live Server</strong> ក្នុង VS Code (ផ្ទាំង Extensions → ស្វែងរក \"Live Server\" → Install)។ បន្ទាប់មកចុចខ្លិកស្ដាំលើ `index.html` → <strong>Open with Live Server</strong>។ រាល់ពេល រក្សាទុក (Ctrl + S) Browser នឹង Reload ដោយស្វ័យប្រវត្តិ។"
            }
          ]
        },
        {
          "title": "២.៣. រចនាសម្ព័ន្ធ HTML Document (HTML Document Structure)",
          "items": [
            {
              "type": "paragraph",
              "text": "គ្រប់ឯកសារ HTML ត្រូវមានរចនាសម្ព័ន្ធមូលដ្ឋានដូចខាងក្រោម។ រចនាសម្ព័ន្ធនេះជួយឱ្យ Browser បង្ហាញទំព័របានត្រឹមត្រូវ និងគាំទ្រអក្សរខ្មែរ។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ២.១ ៖ រចនាសម្ព័ន្ធមូលដ្ឋាន (index.html)",
              "code": "<!DOCTYPE html>\n<html lang=\"km\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>ទំព័រដំបូងរបស់ខ្ញុំ</title>\n</head>\n<body>\n  <h1>សួស្តី HTML!</h1>\n  <p>នេះជាទំព័របណ្ដាញដំបូងរបស់ខ្ញុំ។</p>\n</body>\n</html>"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-02/fig-02.webp",
              "caption": "រូបភាពទី ២.២ ៖ រចនាសម្ព័ន្ធ HTML Document ៖ html, head និង body"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Element</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`<!DOCTYPE html>`",
                  "ប្រកាសប្រាប់ Browser ថាឯកសារនេះជា HTML5 (ដាក់នៅជួរទីមួយជានិច្ច)"
                ],
                [
                  "`<html lang=\"km\">`",
                  "Element ឫស (Root) ដែលគ្របដណ្ដប់ខ្លឹមសារទាំងអស់; `lang=\"km\"` ប្រាប់ថាភាសាចម្បងជាខ្មែរ"
                ],
                [
                  "`<head>`",
                  "ផ្ទុកព័ត៌មានអំពីទំព័រ (Metadata) ដែលមិនបង្ហាញលើផ្ទៃទំព័រ"
                ],
                [
                  "`<meta charset=\"UTF-8\">`",
                  "កំណត់ការអ៊ិនកូដអក្សរ UTF-8 ដើម្បីបង្ហាញអក្សរខ្មែរបានត្រឹមត្រូវ"
                ],
                [
                  "`<meta name=\"viewport\">`",
                  "ធ្វើឱ្យទំព័របង្ហាញសមល្មមលើទូរស័ព្ទ (សំខាន់សម្រាប់ Responsive Design)"
                ],
                [
                  "`<title>`",
                  "ចំណងជើងដែលបង្ហាញលើ Tab របស់ Browser"
                ],
                [
                  "`<body>`",
                  "ផ្ទុកខ្លឹមសារទាំងអស់ដែលអ្នកប្រើមើលឃើញ"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ នៅពេលបើកក្នុង Browser ទំព័របង្ហាញចំណងជើងធំ \"សួស្តី HTML!\" និងកថាខណ្ឌមួយ។ ពាក្យ \"ទំព័រដំបូងរបស់ខ្ញុំ\" បង្ហាញនៅលើ Tab របស់ Browser។"
            }
          ]
        },
        {
          "title": "២.៤. HTML Elements និង Attributes",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Element (ធាតុ)</strong> គឺជាផ្នែកនីមួយៗនៃទំព័រ ដែលរួមមាន ស្លាកបើក ខ្លឹមសារ និងស្លាកបិទ។ <strong>Attribute (លក្ខណៈ)</strong> ផ្ដល់ព័ត៌មានបន្ថែមដល់ Element ហើយតែងតែសរសេរនៅក្នុងស្លាកបើក ជាទម្រង់ `name=\"value\"`។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-02/fig-03.webp",
              "caption": "រូបភាពទី ២.៣ ៖ សមាសភាគនៃ HTML Element និង Attribute"
            },
            {
              "type": "paragraph",
              "text": "Element ខ្លះមិនមានខ្លឹមសារ និងមិនមានស្លាកបិទទេ ហៅថា <strong>Empty (Void) Elements</strong> ដូចជា `<img>`, `<br>`, `<hr>`, `<input>` និង `<meta>`។ Element ក៏អាចដាក់នៅក្នុង Element ផ្សេងទៀតបាន (Nesting) ប៉ុន្តែត្រូវបិទតាមលំដាប់ត្រឹមត្រូវ ៖"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ត្រឹមត្រូវ / ខុស</strong>",
                "<strong>ឧទាហរណ៍</strong>"
              ],
              "rows": [
                [
                  "<strong>✔ ត្រឹមត្រូវ</strong>",
                  "`<p>`ខ្ញុំ `<strong>`ចូលចិត្ត`</strong> HTML</p>`"
                ],
                [
                  "<strong>✘ ខុស</strong>",
                  "`<p>`ខ្ញុំ `<strong>`ចូលចិត្ត`</p></strong>`"
                ]
              ]
            },
            {
              "type": "table",
              "headers": [
                "<strong>Attribute</strong>",
                "<strong>ប្រើជាមួយ</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`href`",
                  "`<a>`",
                  "អាសយដ្ឋាន (URL) ដែលតំណភ្ជាប់នាំទៅ"
                ],
                [
                  "`src`",
                  "`<img>`, `<script>`",
                  "ទីតាំងឯកសាររូបភាព ឬ Script"
                ],
                [
                  "`alt`",
                  "`<img>`",
                  "អត្ថបទជំនួសរូបភាព (សំខាន់សម្រាប់ Accessibility និងពេលរូបភាពមិនបង្ហាញ)"
                ],
                [
                  "`id`",
                  "គ្រប់ Element",
                  "ឈ្មោះសម្គាល់តែមួយគត់ក្នុងទំព័រ"
                ],
                [
                  "`class`",
                  "គ្រប់ Element",
                  "ឈ្មោះក្រុមសម្រាប់ប្រើជាមួយ CSS (អាចប្រើច្រើនដង)"
                ],
                [
                  "`title`",
                  "គ្រប់ Element",
                  "អត្ថបទជំនួយដែលបង្ហាញពេលដាក់ Mouse ពីលើ"
                ]
              ]
            }
          ]
        },
        {
          "title": "២.៥. Headings, Paragraphs និង Text Formatting",
          "items": [
            {
              "type": "paragraph",
              "text": "HTML មានចំណងជើង (Headings) ៦ កម្រិត ពី `<h1>` (សំខាន់បំផុត និងធំបំផុត) ដល់ `<h6>` (តូចបំផុត)។ ទំព័រនីមួយៗគួរមាន `<h1>` តែមួយ ហើយប្រើកម្រិតបន្តបន្ទាប់តាមលំដាប់ មិនគួររំលងកម្រិត។ កថាខណ្ឌ (Paragraph) ប្រើ `<p>`។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ២.២ ៖ ចំណងជើង កថាខណ្ឌ និងទម្រង់អក្សរ",
              "code": "<h1>វិទ្យាស្ថានពហុបច្ចេកទេស</h1>\n<h2>ជំនាញព័ត៌មានវិទ្យា</h2>\n<h3>មុខវិជ្ជា Web Design</h3>\n\n<p>សិស្សរៀន <strong>HTML</strong>, <em>CSS</em> និង JavaScript។</p>\n<p>អាសយដ្ឋាន ៖ ក្រុងសៀមរាប<br>ខេត្តសៀមរាប</p>\n<hr>\n<p>តម្លៃ ៖ <del>$20</del> <mark>$15</mark></p>"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Element</strong>",
                "<strong>ការប្រើប្រាស់</strong>",
                "<strong>លទ្ធផលក្នុង Browser</strong>"
              ],
              "rows": [
                [
                  "",
                  "អត្ថបទសំខាន់",
                  "អក្សរដិត"
                ],
                [
                  "`<em>`",
                  "សង្កត់ធ្ងន់ (Emphasis)",
                  "អក្សរទ្រេត"
                ],
                [
                  "`<br>`",
                  "ចុះបន្ទាត់ក្នុងកថាខណ្ឌតែមួយ",
                  "ចុះបន្ទាត់ថ្មី"
                ],
                [
                  "`<hr>`",
                  "បែងចែកប្រធានបទ",
                  "បន្ទាត់ផ្ដេក"
                ],
                [
                  "`<mark>`",
                  "បន្លិចអត្ថបទ",
                  "ផ្ទៃពណ៌លឿង"
                ],
                [
                  "`<del>`",
                  "អត្ថបទដែលលុបចោល",
                  "មានបន្ទាត់ឆូតកណ្ដាល"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "warning",
              "text": "<strong>ចំណាំ ៖</strong> Browser មិនបង្ហាញការចុះបន្ទាត់ ឬដកឃ្លាច្រើនដែលយើងវាយក្នុងកូដទេ។ ដើម្បីចុះបន្ទាត់ ត្រូវប្រើ `<br>` ឬបង្កើត `<p>` ថ្មី។ ចំពោះអក្សរដិត/ទ្រេតសម្រាប់តុបតែងសុទ្ធសាធ គួរប្រើ CSS (មេរៀនទី ៤)។"
            }
          ]
        },
        {
          "title": "២.៦. Links និង Images (Links and Images)",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>តំណភ្ជាប់ (Link)</strong> ប្រើ Element `<a>` (Anchor) ជាមួយ Attribute `href`។ តំណភ្ជាប់អាចនាំទៅ Website ផ្សេង ទៅទំព័រផ្សេងក្នុង Website ដដែល ឬទៅផ្នែកណាមួយក្នុងទំព័រតែមួយ។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ២.៣ ៖ ប្រភេទតំណភ្ជាប់",
              "code": "<!-- 1. តំណភ្ជាប់ទៅ Website ខាងក្រៅ (បើកក្នុង Tab ថ្មី) -->\n<a href=\"https://developer.mozilla.org/\" target=\"_blank\">MDN Web Docs</a>\n\n<!-- 2. តំណភ្ជាប់ទៅទំព័រផ្សេងក្នុង Folder ដដែល (Relative Path) -->\n<a href=\"about.html\">អំពីយើង</a>\n\n<!-- 3. តំណភ្ជាប់ទៅផ្នែកក្នុងទំព័រ (ត្រូវមាន id=\"contact\") -->\n<a href=\"#contact\">ទំនាក់ទំនង</a>\n\n<!-- 4. តំណភ្ជាប់ Email -->\n<a href=\"mailto:info@example.com\">ផ្ញើ Email</a>"
            },
            {
              "type": "paragraph",
              "text": "<strong>រូបភាព (Image)</strong> ប្រើ Element `<img>` ដែលជា Empty Element។ Attribute `src` ប្រាប់ទីតាំងរូបភាព ហើយ `alt` ពិពណ៌នារូបភាព។ ឧ. `<img src=\"images/avatar.png\" alt=\"`រូបថតរបស់ខ្ញុំ`\" width=\"150\">`។ ផ្លូវ (Path) `images/avatar.png` មានន័យថា រូបភាពស្ថិតក្នុង Folder `images` ដែលនៅជាមួយឯកសារ HTML។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ប្រភេទ Path</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>ពេលប្រើ</strong>"
              ],
              "rows": [
                [
                  "<strong>Relative Path</strong>",
                  "`images/logo.png`",
                  "ឯកសារនៅក្នុង Project ដដែល (ណែនាំ)"
                ],
                [
                  "<strong>Relative (ឡើង Folder មួយកម្រិត)</strong>",
                  "`../index.html`",
                  "ឯកសារនៅ Folder មេ"
                ],
                [
                  "<strong>Absolute URL</strong>",
                  "`https://example.com/a.png`",
                  "ឯកសារនៅលើ Website ផ្សេង"
                ]
              ]
            }
          ]
        },
        {
          "title": "២.៧. Ordered Lists និង Unordered Lists (Ordered and Unordered Lists)",
          "items": [
            {
              "type": "bullets",
              "items": [
                "<strong>Unordered List</strong> `<ul>` <strong>៖</strong> បញ្ជីគ្មានលំដាប់ បង្ហាញដោយសញ្ញាចំណុច (•)។ សមសម្រាប់បញ្ជីជំនាញ ឬ Menu។",
                "<strong>Ordered List</strong> `<ol>` <strong>៖</strong> បញ្ជីមានលំដាប់ បង្ហាញដោយលេខ (1, 2, 3)។ សមសម្រាប់ជំហាន ឬចំណាត់ថ្នាក់។",
                "ធាតុនីមួយៗក្នុងបញ្ជីទាំងពីរ ប្រើ `<li>` (List Item)។"
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ២.៤ ៖ បញ្ជីគ្មានលំដាប់ និងមានលំដាប់",
              "code": "<h3>ជំនាញរបស់ខ្ញុំ</h3>\n<ul>\n  <li>Penpot</li>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\n<h3>ជំហានចម្អិនបាយ</h3>\n<ol>\n  <li>លាងអង្ករ</li>\n  <li>ដាក់ទឹក</li>\n  <li>ដាំឱ្យពុះ</li>\n</ol>"
            }
          ]
        },
        {
          "title": "២.៨. Tables និង Semantic HTML មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>តារាង (Table)</strong> ប្រើសម្រាប់បង្ហាញទិន្នន័យជាជួរដេក និងជួរឈរ ដូចជាកាលវិភាគ ឬតារាងពិន្ទុ។ `<table>` ផ្ទុកតារាង, `<tr>` (Table Row) ជាជួរដេក, `<th>` (Table Header) ជាក្រឡាចំណងជើង និង `<td>` (Table Data) ជាក្រឡាទិន្នន័យ។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ២.៥ ៖ តារាងកាលវិភាគ",
              "code": "<table border=\"1\">\n  <tr>\n    <th>ថ្ងៃ</th>\n    <th>មុខវិជ្ជា</th>\n  </tr>\n  <tr>\n    <td>ច័ន្ទ</td>\n    <td>Web Design</td>\n  </tr>\n  <tr>\n    <td>អង្គារ</td>\n    <td>Networking</td>\n  </tr>\n</table>"
            },
            {
              "type": "paragraph",
              "text": "Attribute `border=\"1\"` ប្រើបណ្ដោះអាសន្ន ដើម្បីឱ្យឃើញបន្ទាត់តារាងមុនពេលរៀន CSS។ នៅមេរៀនទី ៤ យើងនឹងប្រើ CSS Property `border` ជំនួសវិញ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>Semantic HTML</strong> គឺការប្រើ Elements ដែលមានអត្ថន័យច្បាស់ ដើម្បីប្រាប់ពីតួនាទីនៃផ្នែកនីមួយៗ ជំនួសការប្រើ `<div>` គ្រប់កន្លែង។ វាធ្វើឱ្យកូដងាយអាន ងាយថែទាំ ជួយម៉ាស៊ីនស្វែងរក (Search Engine) និងកម្មវិធីអានអេក្រង់ (Screen Reader)។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Semantic Element</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`<header>`",
                  "ផ្នែកក្បាលទំព័រ (Logo, ចំណងជើង, Navigation)"
                ],
                [
                  "`<nav>`",
                  "ក្រុមតំណភ្ជាប់រុករកសំខាន់ៗ (Menu)"
                ],
                [
                  "`<main>`",
                  "ខ្លឹមសារចម្បងនៃទំព័រ (មានតែមួយក្នុងមួយទំព័រ)"
                ],
                [
                  "`<section>`",
                  "ផ្នែកមួយនៃខ្លឹមសារ ដែលមានប្រធានបទរួម"
                ],
                [
                  "`<article>`",
                  "ខ្លឹមសារឯករាជ្យ ដូចជាអត្ថបទព័ត៌មាន ឬ Card ផលិតផល"
                ],
                [
                  "`<footer>`",
                  "ផ្នែកខាងក្រោមទំព័រ (Copyright, ទំនាក់ទំនង)"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "ឧទាហរណ៍ខាងក្រោមជាទំព័រ Personal Profile ពេញលេញ ដែលប្រើចំណេះដឹងទាំងអស់ក្នុងមេរៀន នេះ (HTML សុទ្ធ មិនទាន់មាន CSS)។ ឯកសារពេញមាននៅក្នុង Folder `Create_and_Maintain_Websites_I_Assets/code/lesson02_profile/`។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ២.៦ ៖ Personal Profile Website (index.html)",
              "code": "<!DOCTYPE html>\n<html lang=\"km\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>ប្រវត្តិរូបរបស់ខ្ញុំ</title>\n</head>\n<body>\n  <header>\n    <h1>សុខ ដារ៉ា (Sok Dara)</h1>\n    <p>សិស្សផ្នែកព័ត៌មានវិទ្យា - វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប</p>\n    <nav>\n      <a href=\"#about\">អំពីខ្ញុំ</a> |\n      <a href=\"#skills\">ជំនាញ</a> |\n      <a href=\"#schedule\">កាលវិភាគ</a> |\n      <a href=\"#contact\">ទំនាក់ទំនង</a>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>អំពីខ្ញុំ</h2>\n      <img src=\"images/avatar.png\" alt=\"រូបថតរបស់ Sok Dara\" width=\"120\">\n      <p>ខ្ញុំឈ្មោះ <strong>សុខ ដារ៉ា</strong> រស់នៅខេត្តសៀមរាប។\n         ខ្ញុំចូលចិត្តរចនា និងបង្កើតគេហទំព័រ ហើយចង់ក្លាយជា <em>Web Developer</em>។</p>\n    </section>\n\n    <section id=\"skills\">\n      <h2>ជំនាញរបស់ខ្ញុំ</h2>\n      <ul>\n        <li>Penpot (UI Design)</li>\n        <li>HTML</li>\n        <li>CSS</li>\n      </ul>\n      <h3>គោលដៅសិក្សា</h3>\n      <ol>\n        <li>បង្កើត Personal Website មួយ</li>\n        <li>រៀន JavaScript មូលដ្ឋាន</li>\n        <li>បង្កើត Website ឱ្យហាងក្នុងសហគមន៍</li>\n      </ol>\n    </section>\n\n    <section id=\"schedule\">\n      <h2>កាលវិភាគសិក្សា</h2>\n      <table border=\"1\">\n        <tr>\n          <th>សប្ដាហ៍</th>\n          <th>ខ្លឹមសារ</th>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td>Penpot and UI Design</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td>HTML Fundamentals</td>\n        </tr>\n      </table>\n    </section>\n\n    <section id=\"contact\">\n      <h2>ទំនាក់ទំនង</h2>\n      <p>Email: <a href=\"mailto:dara@example.com\">dara@example.com</a></p>\n      <p>ស្វែងយល់បន្ថែមអំពី HTML នៅ\n         <a href=\"https://developer.mozilla.org/\" target=\"_blank\">MDN Web Docs</a></p>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Sok Dara. All rights reserved.</p>\n  </footer>\n</body>\n</html>"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-02/fig-04.webp",
              "caption": "រូបភាពទី ២.៤ ៖ លទ្ធផលនៃ Personal Profile Website (HTML សុទ្ធ) ក្នុង Browser"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ ទំព័របង្ហាញខ្លឹមសារតាមលំដាប់ពីលើចុះក្រោម ដោយប្រើរចនាប័ទ្មលំនាំដើមរបស់ Browser (អក្សរ Times New Roman, តំណភ្ជាប់ពណ៌ខៀវមានគូសបន្ទាត់ក្រោម)។ ការចុចតំណភ្ជាប់ \"ជំនាញ\" ក្នុង Navigation នឹងរំកិលទៅផ្នែក `id=\"skills\"`។ រូបរាងនេះនឹងត្រូវកែលម្អដោយ CSS នៅមេរៀនបន្ទាប់។"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>គន្លឹះពិនិត្យកូដ ៖</strong> ចុចខ្លិកស្ដាំលើទំព័រក្នុង Browser រួចជ្រើស <strong>View page source</strong> (ឬ Ctrl + U) ដើម្បីមើលកូដ HTML ដែល Browser ទទួលបាន។ អាចពិនិត្យកំហុសកូដ HTML ដោយឥតគិតថ្លៃនៅ `https://validator.w3.org/`។"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>លំហាត់អនុវត្តន៍ជាក់ស្ដែងប្រចាំមេរៀនទី ២ (Hands-on Practice) ៖</strong>\n<strong>១.</strong> បង្កើត Project Folder `lesson02` ដែលមាន `index.html` និង Folder `images` ហើយសរសេររចនាសម្ព័ន្ធ HTML5 ដោយប្រើ Emmet (`!` + Tab)។\n<strong>២.</strong> បង្កើតទំព័រ Personal Profile របស់ខ្លួនឯង (HTML សុទ្ធ) ដែលមាន ៖ `<header>` និង `<nav>`, ផ្នែក \"អំពីខ្ញុំ\" មានរូបភាព និងកថាខណ្ឌ, បញ្ជីជំនាញ (`<ul>`), គោលដៅ (`<ol>`), តារាងកាលវិភាគ និង `<footer>`។\n<strong>៣.</strong> បន្ថែមទំព័រទីពីរ `hobby.html` ហើយភ្ជាប់ Link ទៅមកវិញទៅមករវាង `index.html` និង `hobby.html`។\n<strong>៤.</strong> ពិនិត្យកូដរបស់ខ្លួនដោយ W3C Validator ហើយកែកំហុសដែលរកឃើញ។"
            }
          ]
        },
        {
          "title": "សំណួរត្រួតពិនិត្យការយល់ដឹង (Chapter Review Questions)",
          "items": [
            {
              "type": "quiz",
              "title": "ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
              "isExam": false,
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "តើ Element មួយណាដែលផ្ទុកខ្លឹមសារដែលអ្នកប្រើមើលឃើញនៅលើទំព័រ?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`<head>`"
                    },
                    {
                      "key": "B",
                      "text": "`<title>`"
                    },
                    {
                      "key": "C",
                      "text": "`<body>`"
                    },
                    {
                      "key": "D",
                      "text": "`<meta>`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "<body>"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើ Attribute ណាដែលប្រាប់ទីតាំងឯកសាររូបភាពក្នុង `<img>`?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`href`"
                    },
                    {
                      "key": "B",
                      "text": "`src`"
                    },
                    {
                      "key": "C",
                      "text": "`alt`"
                    },
                    {
                      "key": "D",
                      "text": "`link`"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "src"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "តើ `<meta charset=\"UTF-8\">` មានតួនាទីអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "កំណត់ចំណងជើងលើ Tab"
                    },
                    {
                      "key": "B",
                      "text": "ភ្ជាប់ឯកសារ CSS"
                    },
                    {
                      "key": "C",
                      "text": "ធ្វើឱ្យ Browser បង្ហាញអក្សរ (រួមទាំងអក្សរខ្មែរ) បានត្រឹមត្រូវ"
                    },
                    {
                      "key": "D",
                      "text": "បង្កើតតំណភ្ជាប់ទៅទំព័រផ្សេង"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "ធ្វើឱ្យ Browser បង្ហាញអក្សរ (រួមទាំងអក្សរខ្មែរ) បានត្រឹមត្រូវ"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើ Element ណាប្រើសម្រាប់បង្កើតបញ្ជីមានលេខរៀង?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`<ul>`"
                    },
                    {
                      "key": "B",
                      "text": "`<ol>`"
                    },
                    {
                      "key": "C",
                      "text": "`<li>`"
                    },
                    {
                      "key": "D",
                      "text": "`<dl>`"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "<ol>"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "តើ Semantic Element មួយណាសមស្របបំផុតសម្រាប់ក្រុមតំណភ្ជាប់ Menu?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`<footer>`"
                    },
                    {
                      "key": "B",
                      "text": "`<section>`"
                    },
                    {
                      "key": "C",
                      "text": "`<div>`"
                    },
                    {
                      "key": "D",
                      "text": "`<nav>`"
                    }
                  ],
                  "answer": "D",
                  "answerNote": "<nav>"
                }
              ]
            },
            {
              "type": "short-questions",
              "title": "ខ. សំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ហេតុអ្វីបានជា HTML ត្រូវបានហៅថា Markup Language មិនមែន Programming Language?",
                  "answer": "ព្រោះ HTML គ្រាន់តែសម្គាល់ខ្លឹមសារដោយស្លាក ដើម្បីប្រាប់ពីរចនាសម្ព័ន្ធ និងតួនាទីរបស់វា ដោយគ្មានការគណនា លក្ខខណ្ឌ ឬរង្វិលជុំដូចភាសាសរសេរកម្មវិធី។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូរពន្យល់ភាពខុសគ្នារវាង `<head>` និង `<body>`។",
                  "answer": "`<head>` ផ្ទុកព័ត៌មានអំពីទំព័រ (meta, title, link CSS) ដែលមិនបង្ហាញលើផ្ទៃទំព័រ; `<body>` ផ្ទុកខ្លឹមសារទាំងអស់ដែលអ្នកប្រើមើលឃើញ។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ហេតុអ្វីគួរដាក់ Attribute `alt` ឱ្យរូបភាពជានិច្ច?",
                  "answer": "ដើម្បីបង្ហាញអត្ថបទជំនួសពេលរូបភាពមិនដំណើរការ ជួយកម្មវិធីអានអេក្រង់សម្រាប់អ្នកពិការភ្នែក និងជួយម៉ាស៊ីនស្វែងរកយល់ពីរូបភាព។"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ចូរសរសេរកូដ HTML សម្រាប់តំណភ្ជាប់ទៅ `https://www.google.com` ដែលបើកក្នុង Tab ថ្មី។",
                  "answer": "`<a href=\"https://www.google.com\" target=\"_blank\">Google</a>`"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ចូររៀបរាប់អត្ថប្រយោជន៍ ៣ នៃការប្រើ Semantic HTML។",
                  "answer": "ធ្វើឱ្យកូដងាយអាន និងថែទាំ; ជួយម៉ាស៊ីនស្វែងរក (SEO) យល់ពីខ្លឹមសារ; ជួយកម្មវិធីអានអេក្រង់ (Accessibility) រុករកទំព័របានល្អ។"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ២ (Lesson Summary) ៖</strong>\n<strong>•</strong> HTML ជាភាសាសម្គាល់ ដែលប្រើស្លាកដើម្បីបង្កើតរចនាសម្ព័ន្ធ និងខ្លឹមសារទំព័រ។\n<strong>•</strong> Project ត្រូវមាន Folder ច្បាស់លាស់ និងទំព័រដើមឈ្មោះ `index.html`; VS Code និង Emmet ជួយសរសេរកូដបានលឿន។\n<strong>•</strong> ឯកសារ HTML5 ត្រូវមាន `<!DOCTYPE html>`, `<html>`, `<head>` (meta, title) និង `<body>`។\n<strong>•</strong> Elements ចម្បង ៖ Headings (`h1`–`h6`), `p`, `a`, `img`, `ul`/`ol`/`li` និង `table`/`tr`/`th`/`td`។\n<strong>•</strong> Semantic HTML (`header`, `nav`, `main`, `section`, `footer`) ធ្វើឱ្យទំព័រមានអត្ថន័យ និងងាយថែទាំ។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-03",
      "number": 3,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ៣",
      "title": "HTML Forms និងការណែនាំអំពី CSS",
      "fullTitle": "មេរៀនទី ៣ ៖ HTML Forms និងការណែនាំអំពី CSS",
      "kindLabel": "",
      "pageStart": 31,
      "pageEnd": 41,
      "objectives": [
        "បង្កើត HTML Form ដោយប្រើ `<form>`, `<label>` និង `<input>` បានត្រឹមត្រូវ",
        "ជ្រើសប្រើ Input Types សមស្រប (`text`, `email`, `password`, `number`, `date`, `radio`, `checkbox`, `submit`)",
        "ប្រើ `<button>`, `<select>` និង `<textarea>` ព្រមទាំង Form Attributes (`required`, `placeholder`, `min`, `max`)",
        "ពន្យល់ពីតួនាទីរបស់ CSS និងភ្ជាប់ CSS ទៅ HTML តាមវិធី Inline, Internal និង External",
        "សរសេរ CSS Syntax និងប្រើ Selectors មូលដ្ឋាន ព្រមទាំងកំណត់ពណ៌ និងផ្ទៃខាងក្រោយបាន"
      ],
      "sections": [
        {
          "title": "៣.១. សេចក្ដីផ្ដើមអំពី HTML Forms (Introduction to HTML Forms)",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Form (ទម្រង់បែបបទ)</strong> ប្រើសម្រាប់ទទួលព័ត៌មានពីអ្នកប្រើ ដូចជា ការចុះឈ្មោះសិស្ស ការចូលគណនី (Login) ការកក់តុ ឬការផ្ញើសារទំនាក់ទំនង។ Form ទាំងមូលស្ថិតនៅក្នុង Element `<form>`។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Attribute</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`action`",
                  "អាសយដ្ឋានដែលទិន្នន័យ Form ត្រូវផ្ញើទៅ (ជាធម្មតាជាកម្មវិធីលើ Server)"
                ],
                [
                  "`method`",
                  "វិធីផ្ញើទិន្នន័យ ៖ `get` (ភ្ជាប់ទិន្នន័យជាមួយ URL) ឬ `post` (ផ្ញើលាក់ក្នុងសំណើ)"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "warning",
              "text": "<strong>ចំណាំ ៖</strong> ក្នុងវគ្គនេះ យើងមិនទាន់សិក្សាការរក្សាទុកទិន្នន័យលើ Server (Back-end) ទេ។ យើងប្រើ `action=\"#\"` ដើម្បីហាត់រចនា Form ហើយនៅមេរៀនទី ៧ យើងនឹងប្រើ JavaScript ពិនិត្យទិន្នន័យ (Form Validation) នៅលើ Browser។"
            }
          ]
        },
        {
          "title": "៣.២. Form, Label និង Input Elements (Form, Label and Input Elements)",
          "items": [
            {
              "type": "bullets",
              "items": [
                "`<input>` <strong>៖</strong> ប្រអប់បញ្ចូលទិន្នន័យ (Empty Element)។ Attribute `type` កំណត់ប្រភេទ និង `name` ជាឈ្មោះទិន្នន័យពេលផ្ញើ។",
                "`<label>` <strong>៖</strong> ស្លាកឈ្មោះសម្រាប់ប្រអប់បញ្ចូល។ Attribute `for` ត្រូវតែដូច `id` របស់ `<input>`។ ពេលចុចលើ Label Cursor នឹងទៅកាន់ប្រអប់នោះ ដែលធ្វើឱ្យ Form ងាយប្រើ។"
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៣.១ ៖ ការភ្ជាប់ Label ជាមួយ Input",
              "code": "<form action=\"#\" method=\"post\">\n  <label for=\"fullname\">ឈ្មោះពេញ</label>\n  <input type=\"text\" id=\"fullname\" name=\"fullname\">\n</form>"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ Browser បង្ហាញពាក្យ \"ឈ្មោះពេញ\" ហើយប្រអប់អត្ថបទនៅខាងស្ដាំ។ ចុចលើពាក្យ \"ឈ្មោះពេញ\" នោះប្រអប់បញ្ចូលនឹងត្រូវបាន Focus ភ្លាម ព្រោះ `for=\"fullname\"` ត្រូវគ្នានឹង `id=\"fullname\"`។"
            }
          ]
        },
        {
          "title": "៣.៣. Input Types (Input Types)",
          "items": [
            {
              "type": "paragraph",
              "text": "HTML5 មាន Input Types ច្រើនប្រភេទ។ ការជ្រើសប្រភេទត្រឹមត្រូវជួយឱ្យទូរស័ព្ទបង្ហាញក្ដារចុច សមស្រប និងឱ្យ Browser ពិនិត្យទិន្នន័យមូលដ្ឋានដោយស្វ័យប្រវត្តិ។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>type</strong>",
                "<strong>ការប្រើប្រាស់</strong>",
                "<strong>ឧទាហរណ៍</strong>"
              ],
              "rows": [
                [
                  "`text`",
                  "អត្ថបទមួយបន្ទាត់",
                  "ឈ្មោះ អាសយដ្ឋាន"
                ],
                [
                  "`email`",
                  "Email (Browser ពិនិត្យថាមានសញ្ញា @)",
                  "`name@example.com`"
                ],
                [
                  "`password`",
                  "ពាក្យសម្ងាត់ (លាក់អក្សរជាចំណុច)",
                  "ពាក្យសម្ងាត់ Login"
                ],
                [
                  "`number`",
                  "លេខ (អាចកំណត់ `min`, `max`)",
                  "អាយុ ចំនួនភ្ញៀវ"
                ],
                [
                  "`date`",
                  "ជ្រើសកាលបរិច្ឆេទពីប្រតិទិន",
                  "ថ្ងៃខែឆ្នាំកំណើត"
                ],
                [
                  "`radio`",
                  "ជ្រើសតែមួយក្នុងក្រុម (`name` ដូចគ្នា)",
                  "ភេទ ប្រុស/ស្រី"
                ],
                [
                  "`checkbox`",
                  "ជ្រើសបានច្រើន ឬបិទ/បើក",
                  "យល់ព្រមលក្ខខណ្ឌ"
                ],
                [
                  "`submit`",
                  "ប៊ូតុងផ្ញើ Form",
                  "ចុះឈ្មោះ"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៣.២ ៖ Radio Buttons និង Checkbox",
              "code": "<p>ភេទ</p>\n<input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n<label for=\"male\">ប្រុស</label>\n<input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n<label for=\"female\">ស្រី</label>\n\n<input type=\"checkbox\" id=\"agree\" name=\"agree\">\n<label for=\"agree\">ខ្ញុំយល់ព្រមតាមបទបញ្ជាផ្ទៃក្នុង</label>"
            },
            {
              "type": "paragraph",
              "text": "ប៊ូតុង Radio ទាំងពីរមាន `name=\"gender\"` ដូចគ្នា ដូច្នេះអ្នកប្រើអាចជ្រើសបានតែមួយប៉ុណ្ណោះ។ Attribute `value` ជាតម្លៃដែលនឹងផ្ញើទៅ Server។"
            }
          ]
        },
        {
          "title": "៣.៤. Buttons, Select និង Textarea (Buttons, Select and Textarea)",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>Element</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`<button type=\"submit\">`",
                  "ប៊ូតុងផ្ញើ Form (អាចដាក់អក្សរ ឬ Icon នៅខាងក្នុង)"
                ],
                [
                  "`<button type=\"reset\">`",
                  "ប៊ូតុងសម្អាតទិន្នន័យក្នុង Form ទាំងអស់"
                ],
                [
                  "`<button type=\"button\">`",
                  "ប៊ូតុងធម្មតា សម្រាប់ប្រើជាមួយ JavaScript"
                ],
                [
                  "`<select>` <strong>និង</strong> `<option>`",
                  "បញ្ជីទម្លាក់ចុះ (Dropdown) សម្រាប់ជ្រើសរើស"
                ],
                [
                  "`<textarea>`",
                  "ប្រអប់អត្ថបទច្រើនបន្ទាត់ (កំណត់កម្ពស់ដោយ `rows`)"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៣.៣ ៖ Select, Textarea និង Button",
              "code": "<label for=\"major\">ជំនាញ</label>\n<select id=\"major\" name=\"major\">\n  <option value=\"\">-- ជ្រើសរើសជំនាញ --</option>\n  <option value=\"it\">ព័ត៌មានវិទ្យា</option>\n  <option value=\"electrical\">អគ្គិសនី</option>\n  <option value=\"tourism\">ទេសចរណ៍</option>\n</select>\n\n<label for=\"message\">សារបន្ថែម</label>\n<textarea id=\"message\" name=\"message\" rows=\"3\"></textarea>\n\n<button type=\"submit\">ចុះឈ្មោះ</button>"
            }
          ]
        },
        {
          "title": "៣.៥. Form Attributes និងការរៀបចំ Form ឱ្យងាយប្រើ",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>Attribute</strong>",
                "<strong>តួនាទី</strong>",
                "<strong>ឧទាហរណ៍</strong>"
              ],
              "rows": [
                [
                  "`required`",
                  "តម្រូវឱ្យបំពេញ មុនពេលផ្ញើ",
                  "`<input type=\"email\" required>`"
                ],
                [
                  "`placeholder`",
                  "អត្ថបទណែនាំក្នុងប្រអប់ (បាត់ពេលវាយ)",
                  "`placeholder=\"`ឧ`.` សុខ ដារ៉ា`\"`"
                ],
                [
                  "`min` <strong>/</strong> `max`",
                  "តម្លៃតូចបំផុត/ធំបំផុតសម្រាប់ number/date",
                  "`min=\"15\" max=\"60\"`"
                ],
                [
                  "`minlength` <strong>/</strong> `maxlength`",
                  "ចំនួនតួអក្សរតិចបំផុត/ច្រើនបំផុត",
                  "`minlength=\"6\"`"
                ],
                [
                  "`value`",
                  "តម្លៃលំនាំដើម ឬតម្លៃដែលត្រូវផ្ញើ",
                  "`value=\"it\"`"
                ],
                [
                  "`disabled`",
                  "បិទមិនឱ្យប្រើប្រអប់នោះ",
                  "`<input disabled>`"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "គោលការណ៍រៀបចំ Form ឱ្យងាយប្រើ (Usability) ៖"
            },
            {
              "type": "bullets",
              "items": [
                "ប្រអប់នីមួយៗត្រូវមាន `<label>` ច្បាស់លាស់ (កុំប្រើតែ `placeholder` ជំនួស Label)។",
                "សួរតែព័ត៌មានដែលចាំបាច់ ហើយរៀបតាមលំដាប់ធម្មជាតិ (ឈ្មោះ → Email → ...)។",
                "ប្រើ Input Type ត្រឹមត្រូវ និង `required` សម្រាប់ប្រអប់ចាំបាច់។",
                "ប៊ូតុងផ្ញើត្រូវមានពាក្យច្បាស់ ដូចជា \"ចុះឈ្មោះ\" ជំនួសឱ្យ \"Submit\" ទូទៅ។",
                "ដាក់ Field នីមួយៗក្នុង `<div>` ដើម្បីឱ្យងាយរៀបចំដោយ CSS។"
              ]
            }
          ]
        },
        {
          "title": "៣.៦. សេចក្ដីផ្ដើមអំពី CSS",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>CSS (Cascading Style Sheets)</strong> ជាភាសាសម្រាប់កំណត់រូបរាង (Style) របស់ HTML Elements ដូចជា ពណ៌ ពុម្ពអក្សរ ទំហំ គម្លាត និងប្លង់។ HTML ប្រាប់ថា \"អ្វី\" ជាខ្លឹមសារ ចំណែក CSS ប្រាប់ថា \"បង្ហាញយ៉ាងដូចម្ដេច\"។ ការបំបែក HTML និង CSS ធ្វើឱ្យយើងអាចប្ដូររូបរាង Website ទាំងមូល ដោយកែតែ ឯកសារ CSS មួយ។"
            }
          ]
        },
        {
          "title": "៣.៧. Inline, Internal និង External CSS (Inline, Internal and External CSS)",
          "items": [
            {
              "type": "image",
              "src": "images/lessons/lesson-03/fig-01.webp",
              "caption": "រូបភាពទី ៣.១ ៖ វិធីបីយ៉ាងក្នុងការភ្ជាប់ CSS ទៅ HTML"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៣.៤ ៖ វិធីភ្ជាប់ CSS ទាំងបី",
              "code": "<!-- ① Inline CSS -->\n<h1 style=\"color: blue;\">ចំណងជើង</h1>\n\n<!-- ② Internal CSS (ក្នុង <head>) -->\n<style>\n  p { color: green; }\n</style>\n\n<!-- ③ External CSS (ក្នុង <head>) - ណែនាំឱ្យប្រើ -->\n<link rel=\"stylesheet\" href=\"style.css\">"
            },
            {
              "type": "paragraph",
              "text": "ក្នុងគម្រោងពិតប្រាកដ គួរប្រើ <strong>External CSS</strong> ជានិច្ច ព្រោះឯកសារ `style.css` មួយអាចប្រើរួមគ្នា គ្រប់ទំព័រ ងាយថែទាំ និង Browser អាចរក្សាទុក (Cache) ធ្វើឱ្យទំព័របើកលឿន។ ប្រសិនបើ Rule ច្រើនកំណត់ លើ Element តែមួយ Inline CSS មានអាទិភាពខ្ពស់ជាង Internal និង External។"
            }
          ]
        },
        {
          "title": "៣.៨. CSS Syntax និង Selectors មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "CSS Rule មួយមាន <strong>Selector (ឧបករណ៍ជ្រើស)</strong> ដែលជ្រើស Element ត្រូវកំណត់ និង <strong>Declaration Block</strong> នៅក្នុង `{ }`។ Declaration នីមួយៗមាន <strong>Property (លក្ខណៈសម្បត្តិ)</strong> និង <strong>Value (តម្លៃ)</strong> ខណ្ឌចែកដោយ `:` ហើយបញ្ចប់ដោយ `;`។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-03/fig-02.webp",
              "caption": "រូបភាពទី ៣.២ ៖ សមាសភាគនៃ CSS Rule ៖ Selector, Property និង Value"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Selector</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>ជ្រើសរើស</strong>"
              ],
              "rows": [
                [
                  "<strong>Element Selector</strong>",
                  "`p { }`",
                  "គ្រប់ `<p>` ទាំងអស់"
                ],
                [
                  "<strong>Class Selector</strong>",
                  "`.note { }`",
                  "គ្រប់ Element ដែលមាន `class=\"note\"`"
                ],
                [
                  "<strong>ID Selector</strong>",
                  "`#fullname { }`",
                  "Element តែមួយដែលមាន `id=\"fullname\"`"
                ],
                [
                  "<strong>Grouping Selector</strong>",
                  "`input, select { }`",
                  "Elements ច្រើនប្រភេទក្នុងពេលតែមួយ"
                ],
                [
                  "<strong>Universal Selector</strong>",
                  "`* { }`",
                  "គ្រប់ Elements ទាំងអស់"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "CSS Comment សរសេរនៅចន្លោះ `/*` និង `*/` ហើយ Browser មិនយកមកប្រើទេ។ វាជួយពន្យល់កូដ ឬបិទ Rule ណាមួយបណ្ដោះអាសន្ន។"
            }
          ]
        },
        {
          "title": "៣.៩. Colors និង Backgrounds មូលដ្ឋាន (Basic Colors and Backgrounds)",
          "items": [
            {
              "type": "paragraph",
              "text": "Property `color` កំណត់ពណ៌អក្សរ ហើយ `background-color` កំណត់ពណ៌ផ្ទៃខាងក្រោយ។ ពណ៌អាចសរសេរបានច្រើនទម្រង់ ៖"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ទម្រង់</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>ចំណាំ</strong>"
              ],
              "rows": [
                [
                  "<strong>Color Name</strong>",
                  "`red`, `navy`, `white`",
                  "ងាយចាំ ប៉ុន្តែមានជម្រើសតិច"
                ],
                [
                  "<strong>HEX</strong>",
                  "`#002060`, `#ffffff`",
                  "ពេញនិយមបំផុត ចម្លងពី Penpot បានផ្ទាល់"
                ],
                [
                  "<strong>RGB</strong>",
                  "`rgb(0, 32, 96)`",
                  "តម្លៃ Red, Green, Blue ពី 0 ដល់ 255"
                ],
                [
                  "<strong>RGBA</strong>",
                  "`rgba(0, 0, 0, 0.5)`",
                  "មានតម្លៃភាពថ្លា (Alpha) ពី 0 ដល់ 1"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "ឧទាហរណ៍ពេញខាងក្រោម គឺ Student Registration Form ដែលភ្ជាប់ External CSS។ ក្នុង CSS មាន Property មួយចំនួន (`padding`, `margin`, `border`, `max-width`) ដែលនឹងពន្យល់លម្អិតនៅមេរៀនទី ៤។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៣.៥ ៖ Student Registration Form (index.html - ផ្នែក body)",
              "code": "<h1>ទម្រង់ចុះឈ្មោះសិស្ស</h1>\n<p class=\"note\">សូមបំពេញព័ត៌មានខាងក្រោមឱ្យបានត្រឹមត្រូវ។</p>\n\n<form action=\"#\" method=\"post\">\n  <div class=\"field\">\n    <label for=\"fullname\">ឈ្មោះពេញ</label>\n    <input type=\"text\" id=\"fullname\" name=\"fullname\" placeholder=\"ឧ. សុខ ដារ៉ា\" required>\n  </div>\n  <div class=\"field\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"name@example.com\" required>\n  </div>\n  <div class=\"field\">\n    <label for=\"password\">ពាក្យសម្ងាត់</label>\n    <input type=\"password\" id=\"password\" name=\"password\" minlength=\"6\" required>\n  </div>\n  <div class=\"field\">\n    <label for=\"age\">អាយុ</label>\n    <input type=\"number\" id=\"age\" name=\"age\" min=\"15\" max=\"60\">\n  </div>\n  <div class=\"field\">\n    <label for=\"dob\">ថ្ងៃខែឆ្នាំកំណើត</label>\n    <input type=\"date\" id=\"dob\" name=\"dob\">\n  </div>\n  <!-- ... Radio (ភេទ), Select (ជំនាញ), Textarea និង Checkbox ដូចឧទាហរណ៍ ៣.២ និង ៣.៣ ... -->\n  <button type=\"submit\">ចុះឈ្មោះ</button>\n</form>"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៣.៦ ៖ style.css",
              "code": "/* Element selector: ផ្ទៃទំព័រទាំងមូល */\nbody {\n  background-color: #f0f4f8;\n  color: #222222;\n  font-family: \"Kantumruy Pro\", \"Khmer OS Siemreap\", sans-serif;\n}\n\n/* Element selector: ចំណងជើង */\nh1 {\n  color: #002060;\n  text-align: center;\n}\n\n/* Class selector */\n.note {\n  color: #555555;\n  text-align: center;\n}\n\n/* ផ្ទៃ Form */\nform {\n  background-color: #ffffff;\n  border: 1px solid #b0c4de;\n  padding: 20px;\n  max-width: 480px;\n  margin: 0 auto;\n}\n\n.field {\n  margin-bottom: 12px;\n}\n\n/* Grouping selector */\ninput, select, textarea {\n  border: 1px solid #b0c4de;\n  padding: 6px;\n  font-family: inherit;\n}\n\n/* ID selector */\n#fullname {\n  background-color: #fffbe6;\n}\n\nbutton {\n  background-color: #002060;\n  color: #ffffff;\n  border: none;\n  padding: 10px 24px;\n  font-family: inherit;\n}"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-03/fig-03.webp",
              "caption": "រូបភាពទី ៣.៣ ៖ លទ្ធផល Student Registration Form ដែលភ្ជាប់ External CSS"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ ផ្ទៃទំព័រមានពណ៌ប្រផេះខៀវស្រាល ចំណងជើងពណ៌ខៀវចាស់នៅកណ្ដាល Form មានផ្ទៃពណ៌ស និងស៊ុមពណ៌ខៀវស្រាល។ ប្រអប់ \"ឈ្មោះពេញ\" មានពណ៌លឿងស្រាល ព្រោះ ID Selector `#fullname`។ បើចុច \"ចុះឈ្មោះ\" ដោយមិនបំពេញប្រអប់ដែលមាន `required` Browser នឹងបង្ហាញសារព្រមាន។ ឯកសារពេញមានក្នុង `code/lesson03_register/`។"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>លំហាត់អនុវត្តន៍ជាក់ស្ដែងប្រចាំមេរៀនទី ៣ (Hands-on Practice) ៖</strong>\n<strong>១.</strong> បង្កើត Student Registration Form ពេញលេញ ដែលមានយ៉ាងតិច ៖ text, email, password, number, date, radio (២ ជម្រើស), select (៣ ជម្រើស), textarea, checkbox និងប៊ូតុង submit។\n<strong>២.</strong> ធានាថា `<input>` នីមួយៗមាន `<label>` ដែល `for` ត្រូវនឹង `id` ហើយប្រអប់សំខាន់មាន `required`។\n<strong>៣.</strong> បង្កើតឯកសារ `style.css` ហើយភ្ជាប់ជា External CSS។ ប្រើ Element Selector, Class Selector និង ID Selector យ៉ាងតិចម្នាក់មួយ ដើម្បីកំណត់ `color` និង `background-color`។\n<strong>៤.</strong> សាកល្បងចុច Submit ដោយមិនបំពេញ Email ឬបំពេញ Email ខុសទម្រង់ ហើយកត់ត្រាសារព្រមានដែល Browser បង្ហាញ។"
            }
          ]
        },
        {
          "title": "សំណួរត្រួតពិនិត្យការយល់ដឹង (Chapter Review Questions)",
          "items": [
            {
              "type": "quiz",
              "title": "ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
              "isExam": false,
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "តើ Attribute ណារបស់ `<label>` ដែលប្រើភ្ជាប់ទៅ `id` របស់ `<input>`?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`name`"
                    },
                    {
                      "key": "B",
                      "text": "`for`"
                    },
                    {
                      "key": "C",
                      "text": "`value`"
                    },
                    {
                      "key": "D",
                      "text": "`type`"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "for"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើ Input Type ណាដែលអនុញ្ញាតឱ្យជ្រើសបានតែមួយក្នុងក្រុមជម្រើស?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`checkbox`"
                    },
                    {
                      "key": "B",
                      "text": "`text`"
                    },
                    {
                      "key": "C",
                      "text": "`radio`"
                    },
                    {
                      "key": "D",
                      "text": "`select`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "radio"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "តើវិធីភ្ជាប់ CSS មួយណាដែលណែនាំឱ្យប្រើសម្រាប់ Website ច្រើនទំព័រ?",
                  "options": [
                    {
                      "key": "A",
                      "text": "Inline CSS"
                    },
                    {
                      "key": "B",
                      "text": "Internal CSS"
                    },
                    {
                      "key": "C",
                      "text": "External CSS"
                    },
                    {
                      "key": "D",
                      "text": "សរសេរ CSS ក្នុង `<title>`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "External CSS"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ក្នុង CSS Rule `h1 { color: red; }` តើ `color` ជាអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "Selector"
                    },
                    {
                      "key": "B",
                      "text": "Property"
                    },
                    {
                      "key": "C",
                      "text": "Value"
                    },
                    {
                      "key": "D",
                      "text": "Element"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "Property"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "តើ Selector ណាជ្រើស Element ដែលមាន `class=\"box\"`?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`#box`"
                    },
                    {
                      "key": "B",
                      "text": "`box`"
                    },
                    {
                      "key": "C",
                      "text": "`.box`"
                    },
                    {
                      "key": "D",
                      "text": "`*box`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": ".box"
                }
              ]
            },
            {
              "type": "short-questions",
              "title": "ខ. សំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ហេតុអ្វីគួរប្រើ `type=\"email\"` ជំនួស `type=\"text\"` សម្រាប់ប្រអប់ Email?",
                  "answer": "Browser ពិនិត្យទម្រង់ Email (មាន @) ដោយស្វ័យប្រវត្តិ ហើយទូរស័ព្ទបង្ហាញក្ដារចុចដែលមានសញ្ញា @ ធ្វើឱ្យបញ្ចូលងាយ និងកាត់បន្ថយកំហុស។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូរពន្យល់ភាពខុសគ្នារវាង `placeholder` និង `<label>`។",
                  "answer": "`<label>` ជាឈ្មោះប្រអប់ដែលបង្ហាញជានិច្ច និងភ្ជាប់ជាមួយ Input; `placeholder` ជាអត្ថបទណែនាំក្នុងប្រអប់ ដែលបាត់ពេលចាប់ផ្ដើមវាយ ដូច្នេះមិនគួរប្រើជំនួស Label។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ចូរសរសេរ Tag សម្រាប់ភ្ជាប់ឯកសារ `style.css` ទៅ HTML និងប្រាប់ទីតាំងដែលត្រូវដាក់។",
                  "answer": "`<link rel=\"stylesheet\" href=\"style.css\">` ដាក់នៅក្នុង `<head>`។"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ចូរពន្យល់ភាពខុសគ្នារវាង Class Selector និង ID Selector។",
                  "answer": "Class Selector (`.name`) ជ្រើស Element ច្រើនដែលមាន Class ដូចគ្នា ហើយប្រើឡើងវិញបាន; ID Selector (`#name`) ជ្រើស Element តែមួយ ព្រោះ id ត្រូវតែមានតែមួយក្នុងទំព័រ។"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ចូរសរសេរ CSS ដែលធ្វើឱ្យគ្រប់ `<p>` មានអក្សរពណ៌ស និងផ្ទៃពណ៌ `#002060`។",
                  "answer": "`p { color: #ffffff; background-color: #002060; }`"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ៣ (Lesson Summary) ៖</strong>\n<strong>•</strong> `<form>` ផ្ទុក Form ទាំងមូល; `<label>` + `<input>` ត្រូវភ្ជាប់គ្នាដោយ `for` និង `id`។\n<strong>•</strong> Input Types (text, email, password, number, date, radio, checkbox, submit) ជួយបញ្ចូលទិន្នន័យបានត្រឹមត្រូវ។\n<strong>•</strong> `<select>`, `<textarea>`, `<button>` និង Attributes (`required`, `placeholder`, `min`, `max`) ធ្វើឱ្យ Form ពេញលេញ និងងាយប្រើ។\n<strong>•</strong> CSS កំណត់រូបរាង; វិធីភ្ជាប់មាន Inline, Internal និង External (ណែនាំ External)។\n<strong>•</strong> CSS Rule = Selector + { Property: Value; } ; Selectors មូលដ្ឋាន ៖ Element, `.class`, `#id`, Grouping និង `*`។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-04",
      "number": 4,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ៤",
      "title": "ការរចនាគេហទំព័រដោយប្រើ CSS",
      "fullTitle": "មេរៀនទី ៤ ៖ ការរចនាគេហទំព័រដោយប្រើ CSS",
      "kindLabel": "",
      "pageStart": 42,
      "pageEnd": 53,
      "objectives": [
        "ពន្យល់ពី CSS Rules, Cascade និងអាទិភាពរបស់ Selectors (Element, Class, ID)",
        "កំណត់ពណ៌ ផ្ទៃខាងក្រោយ និងរូបភាពផ្ទៃខាងក្រោយ (Background Image) បាន",
        "កំណត់ Font Family, Font Size, Font Weight និង Text Alignment ឱ្យស្របតាម Design",
        "ប្រើ Width, Height និងឯកតា (`px`, `%`, `rem`, `vh`, `vw`) បានសមស្រប",
        "យល់ និងអនុវត្ត CSS Box Model (Margin, Border, Padding, Content) និង Display Property",
        "រចនា Profile Card និង Login Form ដោយប្រើ Border Radius និង Box Shadow"
      ],
      "sections": [
        {
          "title": "៤.១. សេចក្ដីផ្ដើមអំពី CSS Rules និង Cascade",
          "items": [
            {
              "type": "paragraph",
              "text": "ពាក្យ <strong>Cascade (ការហូរចុះតាមលំដាប់)</strong> ក្នុង CSS មានន័យថា នៅពេល Rules ច្រើនកំណត់ Property ដូចគ្នាលើ Element តែមួយ Browser ត្រូវសម្រេចថា Rule មួយណាឈ្នះ។ ច្បាប់សំខាន់ៗសម្រាប់អ្នក ចាប់ផ្ដើមមានបី ៖"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>លំដាប់ (Order) ៖</strong> បើ Rules មានកម្រិតស្មើគ្នា Rule ដែលសរសេរនៅខាងក្រោយឈ្នះ។",
                "<strong>ភាពជាក់លាក់ (Specificity) ៖</strong> ID Selector ខ្លាំងជាង Class Selector ហើយ Class Selector ខ្លាំងជាង Element Selector។ Inline Style ខ្លាំងជាងគេ។",
                "<strong>ការបន្តតំណ (Inheritance) ៖</strong> Property ខ្លះដូចជា `color` និង `font-family` ត្រូវបាន Element កូន (Child) ទទួលបន្តពី Element មេ (Parent)។ ឧ. កំណត់ `font-family` លើ `body` នោះគ្រប់អក្សរ ក្នុងទំព័រប្រើ Font នោះ។"
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៤.១ ៖ តើអក្សរនឹងមានពណ៌អ្វី?",
              "code": "/* HTML: <p id=\"intro\" class=\"note\">សួស្តី</p> */\np      { color: black; }   /* Element: ខ្សោយបំផុត */\n.note  { color: green; }   /* Class: ខ្លាំងជាង Element */\n#intro { color: blue; }    /* ID: ខ្លាំងបំផុតក្នុងបីនេះ */"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ អក្សរ \"សួស្តី\" បង្ហាញពណ៌ <strong>ខៀវ</strong> ព្រោះ ID Selector `#intro` មានភាពជាក់លាក់ខ្ពស់ជាងគេ ទោះបីវាសរសេរនៅខាងក្រោយ ឬខាងមុខក៏ដោយ។"
            }
          ]
        },
        {
          "title": "៤.២. Element, Class និង ID Selectors (Element, Class and ID Selectors)",
          "items": [
            {
              "type": "paragraph",
              "text": "ក្នុងការអនុវត្តជាក់ស្ដែង ៖ ប្រើ <strong>Element Selector</strong> សម្រាប់ការកំណត់ទូទៅ (ឧ. `body`, `h1`, `a`), ប្រើ <strong>Class Selector</strong> សម្រាប់ Style ដែលប្រើឡើងវិញ (ឧ. `.card`, `.btn`) និងប្រើ <strong>ID</strong> តិចតួចបំផុត (ជាពិសេសសម្រាប់ JavaScript ឬ Link ក្នុងទំព័រ)។ Element មួយអាចមាន Class ច្រើន ដោយដកឃ្លាខណ្ឌចែក ឧ. `class=\"btn btn-large\"`។ Selector អាចផ្សំគ្នាបាន ៖"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Selector ផ្សំ</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>ជ្រើសរើស</strong>"
              ],
              "rows": [
                [
                  "<strong>Descendant</strong>",
                  "`.card p`",
                  "គ្រប់ `<p>` ដែលនៅក្នុង `.card`"
                ],
                [
                  "<strong>Element + Class</strong>",
                  "`p.note`",
                  "តែ `<p>` ណាដែលមាន class `note`"
                ],
                [
                  "<strong>Multiple Classes</strong>",
                  "`.btn.large`",
                  "Element ដែលមានទាំង class `btn` និង `large`"
                ]
              ]
            }
          ]
        },
        {
          "title": "៤.៣. Colors, Background Color និង Background Image",
          "items": [
            {
              "type": "paragraph",
              "text": "ក្រៅពី `color` និង `background-color` យើងអាចដាក់រូបភាពជាផ្ទៃខាងក្រោយ ដោយប្រើ `background-image` រួមជាមួយ Properties ពាក់ព័ន្ធ ៖"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៤.២ ៖ Hero Section ដែលមានរូបភាពផ្ទៃខាងក្រោយ",
              "code": ".hero {\n  background-color: #002060;               /* ពណ៌ជំនួស បើរូបភាពមិនទាន់ផ្ទុក */\n  background-image: url(\"images/hero.jpg\");\n  background-size: cover;                   /* រូបភាពពេញផ្ទៃ មិនលាតទ្រង់ទ្រាយ */\n  background-position: center;              /* តម្រឹមកណ្ដាល */\n  background-repeat: no-repeat;             /* មិនឱ្យរូបភាពដដែលៗ */\n  color: #ffffff;\n}"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Property</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`background-image`",
                  "កំណត់រូបភាពផ្ទៃខាងក្រោយ ដោយប្រើ `url(\"`ទីតាំងរូបភាព`\")`"
                ],
                [
                  "`background-size`",
                  "`cover` (ពេញផ្ទៃ អាចកាត់គែម) ឬ `contain` (បង្ហាញពេញរូប)"
                ],
                [
                  "`background-position`",
                  "ទីតាំងរូបភាព ដូចជា `center`, `top`, `left`"
                ],
                [
                  "`background-repeat`",
                  "`no-repeat`, `repeat`, `repeat-x`, `repeat-y`"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>គន្លឹះភាពងាយអាន ៖</strong> ពេលដាក់អក្សរលើរូបភាព ត្រូវប្រាកដថាអក្សរ និងផ្ទៃខាងក្រោយមាន Contrast គ្រប់គ្រាន់។ អាចជ្រើសរូបភាពងងឹត ឬដាក់ `background-color` ពណ៌ងងឹតជាមួយ `color: #ffffff;`។"
            }
          ]
        },
        {
          "title": "៤.៤. Font Family, Font Size, Font Weight និង Text Alignment (Typography)",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>Property</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>ពន្យល់</strong>"
              ],
              "rows": [
                [
                  "`font-family`",
                  "`\"Kantumruy Pro\", \"Khmer OS Siemreap\", sans-serif`",
                  "បញ្ជី Font តាមលំដាប់អាទិភាព; បញ្ចប់ដោយ Generic Family"
                ],
                [
                  "`font-size`",
                  "`16px`, `1.5rem`",
                  "ទំហំអក្សរ"
                ],
                [
                  "`font-weight`",
                  "`normal`, `bold`, `600`",
                  "កម្រាស់អក្សរ (100–900)"
                ],
                [
                  "`font-style`",
                  "`italic`",
                  "អក្សរទ្រេត"
                ],
                [
                  "`text-align`",
                  "`left`, `center`, `right`, `justify`",
                  "ការតម្រឹមអត្ថបទ"
                ],
                [
                  "`line-height`",
                  "`1.6`",
                  "កម្ពស់បន្ទាត់ (អក្សរខ្មែរគួរ 1.6–1.8)"
                ],
                [
                  "`text-decoration`",
                  "`none`, `underline`",
                  "ដកបន្ទាត់ក្រោមតំណភ្ជាប់ ឬបន្ថែម"
                ],
                [
                  "`text-transform`",
                  "`uppercase`",
                  "ប្ដូរអក្សរឡាតាំងជាអក្សរធំ"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "Font ដែលដាក់ក្នុង `font-family` ត្រូវតែមានក្នុងកុំព្យូទ័រអ្នកមើល ទើបបង្ហាញបាន។ ដូច្នេះត្រូវដាក់ Font ជំនួសច្រើន (Fallback)។ ម្យ៉ាងទៀត អាចប្រើ Web Font ពី Google Fonts (ឧ. Kantumruy Pro) ដោយចម្លង `<link>` ដែល Google Fonts ផ្ដល់ឱ្យ ទៅដាក់ក្នុង `<head>`។"
            }
          ]
        },
        {
          "title": "៤.៥. Width, Height និង Units មូលដ្ឋាន (Width, Height and CSS Units)",
          "items": [
            {
              "type": "paragraph",
              "text": "Property `width` និង `height` កំណត់ទំហំ Element។ `max-width` កំណត់ទទឹងអតិបរមា ដែលមាន ប្រយោជន៍ខ្លាំងសម្រាប់ Responsive Design (ឧ. `max-width: 960px;` ធ្វើឱ្យខ្លឹមសារមិនលាតពេកលើ អេក្រង់ធំ ប៉ុន្តែរួមតូចបានលើទូរស័ព្ទ)។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ឯកតា</strong>",
                "<strong>អត្ថន័យ</strong>",
                "<strong>ឧទាហរណ៍ប្រើ</strong>"
              ],
              "rows": [
                [
                  "`px`",
                  "Pixel ទំហំថេរ",
                  "ស៊ុម `1px`, រូបតំណាង `24px`"
                ],
                [
                  "`%`",
                  "ភាគរយធៀបនឹង Element មេ",
                  "`width: 50%;`"
                ],
                [
                  "`rem`",
                  "ធៀបនឹងទំហំអក្សររបស់ `<html>` (ជាទូទៅ 16px)",
                  "`font-size: 1.5rem;` = 24px"
                ],
                [
                  "`vh`",
                  "ភាគរយនៃកម្ពស់អេក្រង់ (1vh = 1%)",
                  "`height: 100vh;` ពេញអេក្រង់"
                ],
                [
                  "`vw`",
                  "ភាគរយនៃទទឹងអេក្រង់ (1vw = 1%)",
                  "`width: 50vw;`"
                ]
              ]
            }
          ]
        },
        {
          "title": "៤.៦. Margin, Padding និង Border",
          "items": [
            {
              "type": "bullets",
              "items": [
                "<strong>Padding ៖</strong> គម្លាតខាងក្នុង រវាងខ្លឹមសារ និងស៊ុម។ ផ្ទៃពណ៌ (background) គ្របដណ្ដប់លើ Padding។",
                "<strong>Border ៖</strong> ស៊ុមជុំវិញ Element។ សរសេររួមគ្នា ៖ `border: 2px solid #002060;` (កម្រាស់ ប្រភេទ ពណ៌)។ ប្រភេទស៊ុម ៖ `solid`, `dashed`, `dotted`, `none`។",
                "<strong>Margin ៖</strong> គម្លាតខាងក្រៅ រវាង Element និង Elements ផ្សេងទៀត (ថ្លាជានិច្ច)។ `margin: 0 auto;` ធ្វើឱ្យ Block Element ដែលមាន width តម្រឹមកណ្ដាល។"
              ]
            },
            {
              "type": "table",
              "headers": [
                "<strong>ការសរសេរខ្លី (Shorthand)</strong>",
                "<strong>អត្ថន័យ</strong>"
              ],
              "rows": [
                [
                  "`padding: 20px;`",
                  "ទាំង ៤ ជ្រុង = 20px"
                ],
                [
                  "`padding: 10px 20px;`",
                  "លើ/ក្រោម = 10px, ឆ្វេង/ស្ដាំ = 20px"
                ],
                [
                  "`padding: 10px 20px 30px 40px;`",
                  "លើ, ស្ដាំ, ក្រោម, ឆ្វេង (តាមទ្រនិចនាឡិកា)"
                ],
                [
                  "`margin-top: 16px;`",
                  "កំណត់តែជ្រុងមួយ (top, right, bottom, left)"
                ]
              ]
            }
          ]
        },
        {
          "title": "៤.៧. CSS Box Model",
          "items": [
            {
              "type": "paragraph",
              "text": "គ្រប់ HTML Element ទាំងអស់ត្រូវបាន Browser ចាត់ទុកជាប្រអប់ (Box) ដែលមាន ៤ ស្រទាប់ពីក្នុង ទៅក្រៅ ៖ <strong>Content → Padding → Border → Margin</strong>។ នេះហៅថា <strong>Box Model</strong>។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-04/fig-01.webp",
              "caption": "រូបភាពទី ៤.១ ៖ CSS Box Model ៖ Content, Padding, Border និង Margin"
            },
            {
              "type": "paragraph",
              "text": "តាមលំនាំដើម (`box-sizing: content-box`) `width` គិតតែ Content ប៉ុណ្ណោះ។ ឧ. `width: 300px; padding: 20px; border: 5px solid;` នោះទទឹងសរុបដែលមើលឃើញ = 300 + 20×2 + 5×2 = <strong>350px</strong>។ ដើម្បីងាយគណនា គេនិយមដាក់ Rule ខាងក្រោមនៅដើមឯកសារ CSS ៖"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៤.៣ ៖ box-sizing: border-box",
              "code": "* {\n  box-sizing: border-box;   /* width រាប់បញ្ចូល padding និង border */\n}\n\n.box {\n  width: 300px;             /* ទទឹងសរុបនៅតែ 300px */\n  padding: 20px;\n  border: 5px solid #002060;\n}"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>គន្លឹះពិនិត្យ Box Model ៖</strong> ក្នុង Chrome ឬ Edge ចុច <strong>F12</strong> (Developer Tools) → ជ្រើស Element ក្នុងផ្ទាំង Elements → មើលផ្នែក Styles/Computed។ Browser បង្ហាញរូប Box Model ដែលមានតម្លៃ Margin, Border, Padding និង Content ពិតប្រាកដ។"
            }
          ]
        },
        {
          "title": "៤.៨. Display Property (The Display Property)",
          "items": [
            {
              "type": "image",
              "src": "images/lessons/lesson-04/fig-02.webp",
              "caption": "រូបភាពទី ៤.២ ៖ ភាពខុសគ្នារវាង display: block, inline, inline-block និង none"
            },
            {
              "type": "table",
              "headers": [
                "<strong>តម្លៃ</strong>",
                "<strong>លក្ខណៈ</strong>",
                "<strong>Elements លំនាំដើម</strong>"
              ],
              "rows": [
                [
                  "`block`",
                  "ចាប់ផ្ដើមជួរថ្មី យកទទឹងពេញ ទទួល width/height",
                  "`div`, `p`, `h1`–`h6`, `ul`, `section`"
                ],
                [
                  "`inline`",
                  "នៅជួរជាមួយអត្ថបទ មិនទទួល width/height",
                  "`span`, `a`, `strong`, `em`"
                ],
                [
                  "`inline-block`",
                  "នៅជួរជាមួយគ្នា ប៉ុន្តែទទួល width/height/padding",
                  "`button`, `input` (ជាទូទៅ)"
                ],
                [
                  "`none`",
                  "លាក់ Element ទាំងស្រុង មិនយកកន្លែង",
                  "(ប្រើជាមួយ JavaScript សម្រាប់បង្ហាញ/លាក់)"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "ឧ. ដើម្បីធ្វើតំណភ្ជាប់ `<a>` ឱ្យទៅជាប៊ូតុងដែលមាន padding ត្រឹមត្រូវ យើងកំណត់ `display: inline-block;`។ ដើម្បីឱ្យ `<label>` នៅលើ `<input>` យើងកំណត់ `display: block;` ឱ្យ Label។"
            }
          ]
        },
        {
          "title": "៤.៩. Border Radius និង Box Shadow មូលដ្ឋាន",
          "items": [
            {
              "type": "bullets",
              "items": [
                "`border-radius` <strong>៖</strong> ធ្វើឱ្យជ្រុងមូល។ ឧ. `border-radius: 12px;` ជ្រុងមូលបន្តិច, `border-radius: 50%;` លើរូបការ៉េ ធ្វើឱ្យក្លាយជារង្វង់។",
                "`box-shadow` <strong>៖</strong> បន្ថែមស្រមោល។ ទម្រង់ ៖ `box-shadow: x y blur color;` ឧ. `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);` ស្រមោលស្រាលនៅខាងក្រោម។"
              ]
            },
            {
              "type": "paragraph",
              "text": "ឧទាហរណ៍ខាងក្រោមប្រមូលផ្ដុំ Box Model, Typography, Display, Border Radius និង Box Shadow ដើម្បីបង្កើត Profile Card និង Login Form (ឯកសារពេញ ៖ `code/lesson04_card/`)។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៤.៤ ៖ Profile Card និង Login Form (index.html - ផ្នែក body)",
              "code": "<div class=\"card\">\n  <img class=\"avatar\" src=\"avatar.png\" alt=\"រូបថត Sok Dara\">\n  <h2 class=\"name\">សុខ ដារ៉ា</h2>\n  <p class=\"role\">Front-end Web Developer</p>\n  <p class=\"bio\">ចូលចិត្តរចនា UI ក្នុង Penpot និងបង្កើតគេហទំព័រដោយ HTML និង CSS។</p>\n  <a class=\"btn\" href=\"#\">ទាក់ទងខ្ញុំ</a>\n</div>\n\n<form class=\"login\">\n  <h2>ចូលប្រើប្រាស់ (Login)</h2>\n  <label for=\"user\">Email</label>\n  <input type=\"email\" id=\"user\" placeholder=\"name@example.com\">\n  <label for=\"pass\">ពាក្យសម្ងាត់</label>\n  <input type=\"password\" id=\"pass\">\n  <button type=\"submit\">Login</button>\n</form>"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៤.៥ ៖ style.css (Profile Card)",
              "code": "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 40px 16px;\n  background-color: #f0f4f8;\n  font-family: \"Kantumruy Pro\", \"Khmer OS Siemreap\", sans-serif;\n  font-size: 16px;\n  color: #222222;\n}\n\n.card {\n  width: 320px;\n  margin: 0 auto 32px auto;\n  padding: 24px;\n  background-color: #ffffff;\n  border: 1px solid #b0c4de;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  text-align: center;\n}\n\n.avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 3px solid #002060;\n}\n\n.name {\n  margin: 12px 0 4px 0;\n  color: #002060;\n  font-size: 1.4rem;\n}\n\n.role {\n  margin: 0;\n  color: #1f4e79;\n  font-weight: bold;\n}\n\n.bio {\n  line-height: 1.6;\n  color: #555555;\n}\n\n.btn {\n  display: inline-block;\n  padding: 10px 20px;\n  background-color: #002060;\n  color: #ffffff;\n  text-decoration: none;\n  border-radius: 6px;\n}"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៤.៦ ៖ style.css (Login Form - បន្តពីខាងលើ)",
              "code": ".login {\n  width: 320px;\n  margin: 0 auto;\n  padding: 24px;\n  background-color: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n\n.login h2 {\n  margin-top: 0;\n  color: #002060;\n  text-align: center;\n}\n\n.login label {\n  display: block;\n  margin-bottom: 4px;\n}\n\n.login input {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid #b0c4de;\n  border-radius: 6px;\n}\n\n.login button {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  background-color: #002060;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 1rem;\n}"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-04/fig-03.webp",
              "caption": "រូបភាពទី ៤.៣ ៖ លទ្ធផល Profile Card និង Login Form ក្នុង Browser"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ Card ពណ៌សមានជ្រុងមូល និងស្រមោលស្រាល តម្រឹមកណ្ដាលទំព័រ (ដោយ `margin: 0 auto`)។ រូបថតក្លាយជារង្វង់ (`border-radius: 50%`)។ តំណភ្ជាប់ \"ទាក់ទងខ្ញុំ\" មើលទៅដូចប៊ូតុង ព្រោះ `display: inline-block` និង `padding`។ ក្នុង Login Form ប្រអប់បញ្ចូលមានទទឹងពេញ (`width: 100%`) ហើយ Label នៅពីលើ (`display: block`)។"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>លំហាត់អនុវត្តន៍ជាក់ស្ដែងប្រចាំមេរៀនទី ៤ (Hands-on Practice) ៖</strong>\n<strong>១.</strong> បង្កើត Profile Card របស់ខ្លួនឯង ដែលមានរូបថតរាងមូល ឈ្មោះ តួនាទី ការពិពណ៌នាខ្លី និងប៊ូតុង។ ប្រើ `padding`, `margin`, `border`, `border-radius` និង `box-shadow`។\n<strong>២.</strong> បង្កើត Login Form ដែលមាន Email, Password និងប៊ូតុង Login ដែលទទឹងពេញ Form។ Label ត្រូវនៅលើ Input។\n<strong>៣.</strong> បើក Developer Tools (F12) ជ្រើស `.card` ហើយកត់ត្រាទំហំ Content, Padding, Border និង Margin។ សាកល្បងលុប `box-sizing: border-box` ហើយប្រៀបធៀបទទឹង Card។\n<strong>៤.</strong> បង្កើត Class `.btn-outline` ដែលមានផ្ទៃថ្លា ស៊ុមពណ៌ `#002060` និងអក្សរពណ៌ `#002060` ហើយប្រើវាជាមួយប៊ូតុងទីពីរក្នុង Card។"
            }
          ]
        },
        {
          "title": "សំណួរត្រួតពិនិត្យការយល់ដឹង (Chapter Review Questions)",
          "items": [
            {
              "type": "quiz",
              "title": "ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
              "isExam": false,
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ប្រសិនបើ `p { color: black; }`, `.note { color: green; }` និង `#intro { color: blue; }` កំណត់លើ `<p id=\"intro\" class=\"note\">` តើអក្សរមានពណ៌អ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "ខ្មៅ"
                    },
                    {
                      "key": "B",
                      "text": "បៃតង"
                    },
                    {
                      "key": "C",
                      "text": "ខៀវ"
                    },
                    {
                      "key": "D",
                      "text": "ពណ៌លំនាំដើមរបស់ Browser"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "ខៀវ"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើស្រទាប់ណានៃ Box Model ដែលនៅចន្លោះ Content និង Border?",
                  "options": [
                    {
                      "key": "A",
                      "text": "Margin"
                    },
                    {
                      "key": "B",
                      "text": "Padding"
                    },
                    {
                      "key": "C",
                      "text": "Outline"
                    },
                    {
                      "key": "D",
                      "text": "Shadow"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "Padding"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "តើ `1.5rem` ស្មើប៉ុន្មាន Pixel បើទំហំអក្សររបស់ `<html>` ជា 16px?",
                  "options": [
                    {
                      "key": "A",
                      "text": "15px"
                    },
                    {
                      "key": "B",
                      "text": "20px"
                    },
                    {
                      "key": "C",
                      "text": "24px"
                    },
                    {
                      "key": "D",
                      "text": "32px"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "24px"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើ Display Value ណាដែលធ្វើឱ្យ Element នៅជួរជាមួយគ្នា ប៉ុន្តែអាចកំណត់ width និង padding បាន?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`block`"
                    },
                    {
                      "key": "B",
                      "text": "`inline`"
                    },
                    {
                      "key": "C",
                      "text": "`inline-block`"
                    },
                    {
                      "key": "D",
                      "text": "`none`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "inline-block"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "តើ CSS មួយណាធ្វើឱ្យរូបភាពការ៉េក្លាយជារង្វង់?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`box-shadow: 50%;`"
                    },
                    {
                      "key": "B",
                      "text": "`border-radius: 50%;`"
                    },
                    {
                      "key": "C",
                      "text": "`border: circle;`"
                    },
                    {
                      "key": "D",
                      "text": "`display: round;`"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "border-radius: 50%;"
                }
              ]
            },
            {
              "type": "short-questions",
              "title": "ខ. សំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ចូរពន្យល់ពាក្យ Cascade ក្នុង CSS និងច្បាប់ ២ ដែលកំណត់ថា Rule មួយណាឈ្នះ។",
                  "answer": "Cascade ជារបៀបដែល Browser សម្រេចចិត្តពេល Rules ច្រើនកំណត់ Property ដូចគ្នា។ ច្បាប់ ៖ (១) Specificity — ID ខ្លាំងជាង Class ហើយ Class ខ្លាំងជាង Element; (២) Order — បើកម្រិតស្មើគ្នា Rule ខាងក្រោយឈ្នះ។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូរគណនាទទឹងសរុបនៃ `.box { width: 200px; padding: 10px; border: 2px solid; margin: 20px; }` ក្នុង `content-box` (មិនរាប់ Margin)។",
                  "answer": "200 + 10×2 + 2×2 = 224px។ (Margin 20px នៅខាងក្រៅ មិនរាប់ក្នុងទទឹងប្រអប់ដែលមើលឃើញ)"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ចូរពន្យល់ភាពខុសគ្នារវាង Margin និង Padding។",
                  "answer": "Padding ជាគម្លាតខាងក្នុងស៊ុម ហើយមានពណ៌ផ្ទៃខាងក្រោយ; Margin ជាគម្លាតខាងក្រៅស៊ុម ដើម្បីឃ្លាតពី Elements ផ្សេង ហើយថ្លាជានិច្ច។"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ហេតុអ្វីគេនិយមប្រើ `box-sizing: border-box;`?",
                  "answer": "ព្រោះ width ដែលកំណត់រាប់បញ្ចូល Padding និង Border រួចហើយ ធ្វើឱ្យងាយគណនាទំហំ និងរៀបចំប្លង់ ដោយមិនឱ្យ Element ធំលើសការរំពឹងទុក។"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ចូរសរសេរ CSS សម្រាប់ Class `.btn` ដែលមានផ្ទៃពណ៌ `#002060` អក្សរពណ៌ស Padding 10px 20px ជ្រុងមូល 6px និងគ្មានបន្ទាត់ក្រោម។",
                  "answer": "`.btn { display: inline-block; background-color: #002060; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; }`"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ៤ (Lesson Summary) ៖</strong>\n<strong>•</strong> Cascade សម្រេចដោយ Specificity (Inline > ID > Class > Element), លំដាប់ Rule និង Inheritance។\n<strong>•</strong> `background-image` រួមជាមួយ `background-size: cover` បង្កើត Hero Section ដែលមានរូបភាព ផ្ទៃខាងក្រោយ។\n<strong>•</strong> Typography កំណត់ដោយ `font-family`, `font-size`, `font-weight`, `line-height` និង `text-align`។\n<strong>•</strong> ឯកតា `px` ថេរ, `%` ធៀប Parent, `rem` ធៀបអក្សរ Root, `vh`/`vw` ធៀបអេក្រង់។\n<strong>•</strong> Box Model = Content + Padding + Border + Margin; ប្រើ `box-sizing: border-box` ដើម្បីងាយ គណនា។\n<strong>•</strong> `display` (block, inline, inline-block, none), `border-radius` និង `box-shadow` ជួយរចនា Card និង Form ឱ្យស្អាត។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-05",
      "number": 5,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ៥",
      "title": "ការរៀបចំ Layout និង Responsive Website ព្រមទាំងសេចក្ដីផ្ដើម JavaScript",
      "fullTitle": "មេរៀនទី ៥ ៖ ការរៀបចំ Layout និង Responsive Website ព្រមទាំងសេចក្ដីផ្ដើម JavaScript",
      "kindLabel": "",
      "pageStart": 54,
      "pageEnd": 65,
      "objectives": [
        "ប្រើ Flexbox (Container, Items, Direction, Justify Content, Align Items) ដើម្បីរៀបចំ Navigation Bar និងជួរ Elements",
        "ប្រើ CSS Grid មូលដ្ឋាន ដើម្បីរៀបចំ Cards ជាជួរឈរ",
        "ពន្យល់ និងប្រើ Position (`static`, `relative`, `absolute`, `fixed`) និង Hover Effects បាន",
        "ប្រើ Media Queries ដើម្បីធ្វើឱ្យ Layout បង្ហាញបានល្អលើ Desktop និង Mobile ហើយសាកល្បងលើទំហំអេក្រង់ផ្សេងៗ",
        "ភ្ជាប់ JavaScript ទៅ HTML ប្រើ `let`, `const`, `console.log()` និង `alert()` បាន"
      ],
      "sections": [
        {
          "title": "៥.១. សេចក្ដីផ្ដើមអំពី CSS Layout",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Layout (ប្លង់)</strong> គឺការរៀបចំទីតាំងផ្នែកនានានៃទំព័រ ដូចជា Header នៅខាងលើ Menu នៅខាងស្ដាំ Logo និង Cards រៀបជាជួរ។ តាមលំនាំដើម Block Elements រៀបពីលើចុះក្រោម (Normal Flow)។ CSS សម័យទំនើបផ្ដល់ឧបករណ៍ Layout សំខាន់ពីរ ៖"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ឧបករណ៍</strong>",
                "<strong>លក្ខណៈ</strong>",
                "<strong>ពេលប្រើ</strong>"
              ],
              "rows": [
                [
                  "<strong>Flexbox</strong>",
                  "រៀប Items តាមទិសមួយ (ជួរដេក ឬជួរឈរ)",
                  "Navigation Bar, ប៊ូតុងជាជួរ, តម្រឹមកណ្ដាល"
                ],
                [
                  "<strong>CSS Grid</strong>",
                  "រៀប Items តាមពីរទិស (ជួរដេក និងជួរឈរ)",
                  "Gallery, Cards ច្រើនជួរ, ប្លង់ទំព័រទាំងមូល"
                ]
              ]
            }
          ]
        },
        {
          "title": "៥.២. Flexbox៖ Container, Items, Direction, Justify Content និង Align Items",
          "items": [
            {
              "type": "paragraph",
              "text": "ដើម្បីប្រើ Flexbox យើងកំណត់ `display: flex;` លើ Element មេ ដែលហៅថា <strong>Flex Container</strong>។ Element កូនផ្ទាល់ទាំងអស់ក្លាយជា <strong>Flex Items</strong> ហើយរៀបជាជួរដេកដោយស្វ័យប្រវត្តិ។ Flexbox មានអ័ក្សពីរ ៖ <strong>Main Axis</strong> (ទិសដែល Items រៀប) និង <strong>Cross Axis</strong> (ទិសកាត់កែង)។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-05/fig-01.webp",
              "caption": "រូបភាពទី ៥.១ ៖ ការតម្រឹម Flex Items ដោយ justify-content និង align-items"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Property (លើ Container)</strong>",
                "<strong>តម្លៃទូទៅ</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`flex-direction`",
                  "`row` (លំនាំដើម), `column`",
                  "ទិសរបស់ Main Axis"
                ],
                [
                  "`justify-content`",
                  "`flex-start`, `center`, `flex-end`, `space-between`, `space-around`",
                  "តម្រឹមតាម Main Axis"
                ],
                [
                  "`align-items`",
                  "`stretch`, `center`, `flex-start`, `flex-end`",
                  "តម្រឹមតាម Cross Axis"
                ],
                [
                  "`flex-wrap`",
                  "`nowrap`, `wrap`",
                  "អនុញ្ញាតឱ្យ Items ចុះជួរថ្មីពេលមិនគ្រប់កន្លែង"
                ],
                [
                  "`gap`",
                  "`8px`, `20px`",
                  "គម្លាតរវាង Items"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៥.១ ៖ Navigation Bar ដោយ Flexbox",
              "code": "<!-- HTML -->\n<header class=\"navbar\">\n  <a class=\"logo\" href=\"#\">RPITSSR</a>\n  <nav>\n    <ul class=\"menu\">\n      <li><a href=\"#\">ទំព័រដើម</a></li>\n      <li><a href=\"#\">ជំនាញ</a></li>\n      <li><a href=\"#\">ព័ត៌មាន</a></li>\n      <li><a href=\"#\">ទំនាក់ទំនង</a></li>\n    </ul>\n  </nav>\n</header>\n\n/* CSS */\n.navbar {\n  display: flex;\n  justify-content: space-between;  /* Logo ឆ្វេង, Menu ស្ដាំ */\n  align-items: center;             /* តម្រឹមកណ្ដាលបញ្ឈរ */\n  padding: 12px 24px;\n  background-color: #002060;\n}\n\n.menu {\n  display: flex;                   /* Menu Items ជាជួរដេក */\n  gap: 8px;\n  list-style: none;                /* លុបចំណុចបញ្ជី */\n  margin: 0;\n  padding: 0;\n}"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ Logo \"RPITSSR\" នៅខាងឆ្វេង ហើយ Menu ៤ នៅខាងស្ដាំ ក្នុងជួរតែមួយ ព្រោះ `justify-content: space-between` ចែកគម្លាតទំនេរទៅកណ្ដាល។ Flexbox ពីរកម្រិតត្រូវបានប្រើ ៖ `.navbar` (Logo + nav) និង `.menu` (Links)។"
            }
          ]
        },
        {
          "title": "៥.៣. CSS Grid មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "CSS Grid ចែកផ្ទៃជាក្រឡាចត្រង្គ។ កំណត់ `display: grid;` លើ Container ហើយប្រើ `grid-template-columns` ដើម្បីកំណត់ចំនួន និងទំហំជួរឈរ។ ឯកតា `fr` (fraction) ចែកផ្ទៃទំនេរជាចំណែក ស្មើៗគ្នា។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-05/fig-02.webp",
              "caption": "រូបភាពទី ៥.២ ៖ CSS Grid ដែលមាន 3 ជួរឈរ (repeat(3, 1fr)) និង gap"
            },
            {
              "type": "table",
              "headers": [
                "<strong>តម្លៃ grid-template-columns</strong>",
                "<strong>លទ្ធផល</strong>"
              ],
              "rows": [
                [
                  "`1fr 1fr 1fr` <strong>ឬ</strong> `repeat(3, 1fr)`",
                  "៣ ជួរឈរ ទទឹងស្មើគ្នា"
                ],
                [
                  "`2fr 1fr`",
                  "២ ជួរឈរ ជួរទីមួយធំជាងជួរទីពីរ ២ ដង"
                ],
                [
                  "`200px 1fr`",
                  "ជួរទីមួយទទឹងថេរ 200px ជួរទីពីរយកផ្ទៃសល់"
                ],
                [
                  "`1fr`",
                  "១ ជួរឈរ (សមសម្រាប់ Mobile)"
                ]
              ]
            }
          ]
        },
        {
          "title": "៥.៤. Position Property មូលដ្ឋាន (Basic Position Property)",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>Position</strong>",
                "<strong>លក្ខណៈ</strong>"
              ],
              "rows": [
                [
                  "`static`",
                  "លំនាំដើម ៖ Element នៅតាមលំដាប់ធម្មតា (មិនទទួល top/left)"
                ],
                [
                  "`relative`",
                  "នៅតាមលំដាប់ធម្មតា ប៉ុន្តែអាចរំកិលដោយ top/left; ជាទូទៅប្រើជាចំណុចយោងសម្រាប់កូន `absolute`"
                ],
                [
                  "`absolute`",
                  "ចេញពីលំដាប់ធម្មតា ហើយកំណត់ទីតាំងធៀបនឹង Parent ដែលមាន `position: relative` ជិតបំផុត"
                ],
                [
                  "`fixed`",
                  "ជាប់នឹងអេក្រង់ មិនរំកិលពេល Scroll (ឧ. ប៊ូតុង \"ទៅលើ\" ឬ Chat)"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៥.២ ៖ ស្លាក \"ថ្មី\" (Badge) នៅជ្រុង Card",
              "code": ".card {\n  position: relative;      /* ចំណុចយោង */\n  padding: 20px;\n  border: 1px solid #b0c4de;\n  border-radius: 10px;\n}\n\n.badge {\n  position: absolute;      /* ធៀបនឹង .card */\n  top: 10px;\n  right: 10px;\n  padding: 2px 10px;\n  background-color: #c00000;\n  color: #ffffff;\n  border-radius: 10px;\n}"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ ស្លាកពណ៌ក្រហម \"ថ្មី\" ស្ថិតនៅជ្រុងខាងលើស្ដាំនៃ Card ជានិច្ច ទោះ Card ផ្លាស់ទីទៅកន្លែង ណាក៏ដោយ។"
            }
          ]
        },
        {
          "title": "៥.៥. Hover Effects និង Pseudo-class មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Pseudo-class</strong> ជាពាក្យគន្លឹះដែលបន្ថែមលើ Selector ដោយសញ្ញា `:` ដើម្បីកំណត់ Style ពេល Element ស្ថិតក្នុងស្ថានភាពពិសេស។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Pseudo-class</strong>",
                "<strong>ពេលដែល Style ដំណើរការ</strong>"
              ],
              "rows": [
                [
                  "`:hover`",
                  "ពេលដាក់ Mouse ពីលើ Element"
                ],
                [
                  "`:focus`",
                  "ពេល Element (ឧ. input) កំពុងត្រូវបានជ្រើស/វាយ"
                ],
                [
                  "`:active`",
                  "ពេលកំពុងចុច"
                ],
                [
                  "`:first-child`",
                  "Element ជាកូនទីមួយ"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៥.៣ ៖ Hover លើ Menu និង Focus លើ Input",
              "code": ".menu a {\n  display: block;\n  padding: 8px 12px;\n  color: #ffffff;\n  text-decoration: none;\n  border-radius: 6px;\n}\n\n.menu a:hover {\n  background-color: #ffd200;\n  color: #002060;\n}\n\ninput:focus {\n  outline: 2px solid #ffd200;\n}"
            }
          ]
        },
        {
          "title": "៥.៦. Media Queries និង Responsive Web Design",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Responsive Web Design</strong> គឺការរចនា Website ឱ្យបង្ហាញបានល្អលើគ្រប់ទំហំអេក្រង់ (Desktop, Tablet, Mobile) ដោយប្រើកូដតែមួយ។ លក្ខខណ្ឌចាំបាច់មានបី ៖ (១) `<meta name=\"viewport\" ...>` ក្នុង `<head>`, (២) ប្រើទំហំបត់បែន (`%`, `fr`, `max-width`), និង (៣) <strong>Media Queries</strong> ដើម្បីប្ដូរ CSS តាមទទឹងអេក្រង់។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-05/fig-03.webp",
              "caption": "រូបភាពទី ៥.៣ ៖ Responsive Layout ៖ ចំនួនជួរឈរប្ដូរតាមទំហំអេក្រង់"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៥.៤ ៖ Media Query សម្រាប់អេក្រង់តូចជាង 768px",
              "code": ".cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);   /* Desktop: ៣ ជួរឈរ */\n  gap: 20px;\n}\n\n@media (max-width: 768px) {\n  .navbar {\n    flex-direction: column;                /* Logo និង Menu ជាជួរឈរ */\n    gap: 8px;\n  }\n\n  .menu {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .cards {\n    grid-template-columns: 1fr;            /* Mobile: ១ ជួរឈរ */\n  }\n}"
            },
            {
              "type": "paragraph",
              "text": "`@media (max-width: 768px)` មានន័យថា \"ប្រសិនបើទទឹងអេក្រង់តូចជាង ឬស្មើ 768px សូមប្រើ CSS ខាងក្នុងនេះ\"។ ទទឹងបំបែក (Breakpoint) ដែលគេនិយមប្រើមាន 576px (ទូរស័ព្ទ), 768px (Tablet) និង 992px (Laptop តូច)។"
            }
          ]
        },
        {
          "title": "៥.៧. ការសាកល្បង Website លើទំហំអេក្រង់ផ្សេងៗ",
          "items": [
            {
              "type": "bullets",
              "items": [
                "<strong>វិធីទី ១ ៖</strong> ទាញទំហំផ្ទាំង Browser ឱ្យតូច/ធំ ដើម្បីមើល Layout ប្ដូរ។",
                "<strong>វិធីទី ២ (ណែនាំ) ៖</strong> បើក Developer Tools (F12) → ចុចរូប <strong>Toggle device toolbar</strong> (ឬ Ctrl + Shift + M) → ជ្រើសឧបករណ៍ ដូចជា iPhone ឬ Galaxy ឬកំណត់ទទឹងដោយខ្លួនឯង។",
                "<strong>វិធីទី ៣ ៖</strong> បើក Website លើទូរស័ព្ទពិតប្រាកដ (ឧ. តាម Live Server ក្នុង Wi-Fi តែមួយ ឬក្រោយពេលបោះពុម្ពផ្សាយ)។"
              ]
            },
            {
              "type": "paragraph",
              "text": "ចំណុចដែលត្រូវពិនិត្យ ៖ អក្សរមិនតូចពេក មិនមានរបាររំកិលផ្ដេក (Horizontal Scroll) ប៊ូតុងធំល្មមចុច ដោយម្រាមដៃ និងរូបភាពមិនហៀរចេញក្រៅអេក្រង់។ ឧទាហរណ៍ពេញនៃ Layout នេះមាននៅ `code/lesson05_responsive/`។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-05/fig-04.webp",
              "caption": "រូបភាពទី ៥.៤ ៖ លទ្ធផល Layout លើអេក្រង់ Desktop (ទទឹង 1100px) ៖ Cards ៣ ជួរឈរ"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-05/fig-05.webp",
              "caption": "រូបភាពទី ៥.៥ ៖ លទ្ធផល Layout ដដែលលើអេក្រង់ Mobile (ទទឹង 390px) ៖ Menu និង Cards ជាជួរឈរ"
            }
          ]
        },
        {
          "title": "៥.៨. សេចក្ដីផ្ដើមអំពី JavaScript",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>JavaScript (JS)</strong> គឺជាភាសាសរសេរកម្មវិធី (Programming Language) ដែលដំណើរការក្នុង Browser ដើម្បីធ្វើឱ្យទំព័របណ្ដាញមានអន្តរកម្ម ដូចជា ឆ្លើយតបពេលចុចប៊ូតុង ពិនិត្យ Form បង្ហាញ/លាក់ Menu និងគណនាលទ្ធផល។ JavaScript ខុសពី Java ទាំងស្រុង ទោះបីឈ្មោះស្រដៀងគ្នាក៏ដោយ។"
            },
            {
              "type": "paragraph",
              "text": "កន្លែងសាកល្បង JavaScript លឿនបំផុតគឺ <strong>Console</strong> របស់ Browser ៖ ចុច <strong>F12</strong> → ផ្ទាំង <strong>Console</strong> → វាយ `console.log(\"`សួស្តី`\")` រួចចុច Enter។ Console ក៏ជាកន្លែងបង្ហាញកំហុស (Errors) របស់ JavaScript ផងដែរ។"
            }
          ]
        },
        {
          "title": "៥.៩. ការភ្ជាប់ JavaScript ទៅ HTML និងការប្រើ let និង const",
          "items": [
            {
              "type": "paragraph",
              "text": "ដូច CSS ដែរ JavaScript គួរសរសេរក្នុងឯកសារដាច់ដោយឡែក (`script.js`) ហើយភ្ជាប់ដោយ `<script src=\"script.js\"></script>`។ គួរដាក់ `<script>` នៅមុន `</body>` ដើម្បីឱ្យ HTML ផ្ទុករួចជាមុន។"
            },
            {
              "type": "paragraph",
              "text": "<strong>Variable (អថេរ)</strong> ជាប្រអប់សម្រាប់រក្សាទុកទិន្នន័យ។ ប្រើ `const` សម្រាប់តម្លៃដែលមិនប្ដូរ និង `let` សម្រាប់តម្លៃដែលអាចប្ដូរបាន។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៥.៥ ៖ ភ្ជាប់ script.js (ចុងបញ្ចប់ index.html)",
              "code": "  <section class=\"hero\">\n    <h1>សូមស្វាគមន៍ មកកាន់វិទ្យាស្ថាន</h1>\n    <button onclick=\"showWelcome()\">ចុចទីនេះ</button>\n  </section>\n  ...\n  <script src=\"script.js\"></script>\n</body>\n</html>"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៥.៦ ៖ script.js",
              "code": "// JavaScript ដំបូង៖ បង្ហាញសារក្នុង Console\nconst schoolName = \"RPITSSR\";\nlet visitCount = 1;\n\nconsole.log(\"សូមស្វាគមន៍មកកាន់ \" + schoolName);\nconsole.log(\"ចំនួនដងចូលមើល: \" + visitCount);\n\n// Function ដែលហៅពេលចុចប៊ូតុង (onclick នៅក្នុង HTML)\nfunction showWelcome() {\n  visitCount = visitCount + 1;\n  alert(\"សួស្តី! អ្នកកំពុងរៀន JavaScript ជាមួយ \" + schoolName);\n  console.log(\"ចំនួនដងចុច: \" + visitCount);\n}"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ ពេលបើកទំព័រ Console បង្ហាញ \"សូមស្វាគមន៍មកកាន់ RPITSSR\" និង \"ចំនួនដងចូលមើល: 1\"។ ពេលចុចប៊ូតុង \"ចុចទីនេះ\" ប្រអប់សារ (alert) លេចឡើង ហើយ Console បង្ហាញ \"ចំនួនដងចុច: 2\"។ ប្រសិនបើយើងសាកល្បងសរសេរ `schoolName = \"ABC\";` Console នឹងបង្ហាញកំហុស <strong>TypeError</strong> ព្រោះ `const` មិនអនុញ្ញាតឱ្យប្ដូរតម្លៃ។"
            },
            {
              "type": "callout",
              "kind": "warning",
              "text": "<strong>ចំណាំ ៖</strong> Attribute `onclick` ក្នុង HTML ងាយយល់សម្រាប់ការចាប់ផ្ដើម។ នៅមេរៀនទី ៧ យើងនឹងរៀនវិធីល្អជាង នេះ គឺ `addEventListener()` ដែលបំបែក JavaScript ចេញពី HTML ទាំងស្រុង។"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>លំហាត់អនុវត្តន៍ជាក់ស្ដែងប្រចាំមេរៀនទី ៥ (Hands-on Practice) ៖</strong>\n<strong>១.</strong> បង្កើត Responsive Navigation Bar ដោយ Flexbox ៖ Logo នៅឆ្វេង Menu ៤ នៅស្ដាំ ហើយ Menu ប្ដូរពណ៌ពេល Hover។\n<strong>២.</strong> បង្កើតផ្នែក Cards ៣ ដោយ CSS Grid (`repeat(3, 1fr)`) ហើយបន្ថែម Badge \"ថ្មី\" ដោយ `position: absolute` លើ Card ទីមួយ។\n<strong>៣.</strong> បន្ថែម Media Query `@media (max-width: 768px)` ដើម្បីឱ្យ Navbar និង Cards ក្លាយជាជួរឈរលើ Mobile។ សាកល្បងដោយ Device Toolbar (Ctrl + Shift + M) លើទំហំ iPhone និង iPad។\n<strong>៤.</strong> បង្កើត `script.js` ភ្ជាប់ទៅទំព័រ ប្រកាស `const` មួយសម្រាប់ឈ្មោះ Website និង `let` មួយសម្រាប់ចំនួន ហើយបង្ហាញសារក្នុង Console និង `alert()` ពេលចុចប៊ូតុង។"
            }
          ]
        },
        {
          "title": "សំណួរត្រួតពិនិត្យការយល់ដឹង (Chapter Review Questions)",
          "items": [
            {
              "type": "quiz",
              "title": "ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
              "isExam": false,
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "តើ Property ណាដែលធ្វើឱ្យ Flex Items បែកចេញទៅចុងទាំងសងខាង (ឧ. Logo ឆ្វេង Menu ស្ដាំ)?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`align-items: center;`"
                    },
                    {
                      "key": "B",
                      "text": "`justify-content: space-between;`"
                    },
                    {
                      "key": "C",
                      "text": "`flex-direction: column;`"
                    },
                    {
                      "key": "D",
                      "text": "`display: block;`"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "justify-content: space-between;"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើ `grid-template-columns: repeat(3, 1fr);` បង្កើតអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "៣ ជួរដេក"
                    },
                    {
                      "key": "B",
                      "text": "៣ ជួរឈរដែលមានទទឹងស្មើគ្នា"
                    },
                    {
                      "key": "C",
                      "text": "៣ Items ដែលលាក់"
                    },
                    {
                      "key": "D",
                      "text": "ជួរឈរទទឹង 3px"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "៣ ជួរឈរដែលមានទទឹងស្មើគ្នា"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "តើ Element ដែលមាន `position: absolute;` កំណត់ទីតាំងធៀបនឹងអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "Element មុនវា"
                    },
                    {
                      "key": "B",
                      "text": "Parent ជិតបំផុតដែលមាន position ខុសពី static (ឧ. relative)"
                    },
                    {
                      "key": "C",
                      "text": "Element បន្ទាប់"
                    },
                    {
                      "key": "D",
                      "text": "ឯកសារ CSS"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "Parent ជិតបំផុតដែលមាន position ខុសពី static (ឧ. relative)"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើ Media Query `@media (max-width: 768px)` ដំណើរការពេលណា?",
                  "options": [
                    {
                      "key": "A",
                      "text": "ពេលអេក្រង់ធំជាង 768px"
                    },
                    {
                      "key": "B",
                      "text": "ពេលទទឹងអេក្រង់តូចជាង ឬស្មើ 768px"
                    },
                    {
                      "key": "C",
                      "text": "តែពេលបោះពុម្ព"
                    },
                    {
                      "key": "D",
                      "text": "ជានិច្ចគ្រប់អេក្រង់"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "ពេលទទឹងអេក្រង់តូចជាង ឬស្មើ 768px"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "តើពាក្យគន្លឹះណាសម្រាប់ប្រកាស Variable ដែលមិនអាចប្ដូរតម្លៃបាន?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`let`"
                    },
                    {
                      "key": "B",
                      "text": "`var`"
                    },
                    {
                      "key": "C",
                      "text": "`const`"
                    },
                    {
                      "key": "D",
                      "text": "`function`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "const"
                }
              ]
            },
            {
              "type": "short-questions",
              "title": "ខ. សំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ចូរប្រៀបធៀប Flexbox និង CSS Grid ហើយផ្ដល់ឧទាហរណ៍ពេលប្រើនីមួយៗ។",
                  "answer": "Flexbox រៀបតាមទិសមួយ (ជួរដេក ឬជួរឈរ) សមសម្រាប់ Navigation Bar ឬជួរប៊ូតុង; Grid រៀបតាមពីរទិស (ជួរដេក និងជួរឈរ) សមសម្រាប់ Gallery ឬ Cards ច្រើនជួរ។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូររៀបរាប់លក្ខខណ្ឌ ៣ ដើម្បីធ្វើឱ្យ Website មួយជា Responsive។",
                  "answer": "មាន `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`; ប្រើទំហំបត់បែន (`%`, `fr`, `max-width`); ប្រើ Media Queries ដើម្បីប្ដូរ Layout តាមទទឹងអេក្រង់។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ចូរសរសេរ CSS ដែលប្ដូរពណ៌ផ្ទៃ Link ក្នុង `.menu` ទៅជា `#ffd200` ពេល Hover។",
                  "answer": "`.menu a:hover { background-color: #ffd200; }`"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើគួរដាក់ `<script src=\"script.js\"></script>` នៅទីតាំងណាក្នុង HTML? ហេតុអ្វី?",
                  "answer": "ដាក់នៅមុន `</body>` ដើម្បីឱ្យ HTML Elements ទាំងអស់ត្រូវបានផ្ទុករួចជាមុន ទើប JavaScript អាចប្រើពួកវាបាន ហើយទំព័របង្ហាញលឿន។"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ចូរពន្យល់ភាពខុសគ្នារវាង `let` និង `const` ជាមួយឧទាហរណ៍។",
                  "answer": "`let` អាចប្ដូរតម្លៃបាន ឧ. `let count = 1; count = 2;`; `const` មិនអាចកំណត់តម្លៃថ្មីបាន ឧ. `const name = \"RPITSSR\";` បើកំណត់ម្ដងទៀតនឹងមាន TypeError។"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ៥ (Lesson Summary) ៖</strong>\n<strong>•</strong> Flexbox (`display: flex`) រៀប Items តាមទិសមួយ; `justify-content` តម្រឹមតាម Main Axis និង `align-items` តាម Cross Axis។\n<strong>•</strong> CSS Grid (`display: grid`, `grid-template-columns`, `fr`, `gap`) រៀប Items ជាជួរដេក និងជួរឈរ។\n<strong>•</strong> Position ៖ `relative` ជាចំណុចយោង, `absolute` ដាក់ទីតាំងធៀប Parent, `fixed` ជាប់នឹងអេក្រង់។\n<strong>•</strong> Pseudo-classes (`:hover`, `:focus`) ផ្ដល់ការឆ្លើយតបពេលអ្នកប្រើធ្វើអន្តរកម្ម។\n<strong>•</strong> Media Queries + Viewport Meta + ទំហំបត់បែន = Responsive Design; សាកល្បងដោយ Device Toolbar (Ctrl + Shift + M)។\n<strong>•</strong> JavaScript ភ្ជាប់ដោយ `<script src>` មុន `</body>`; `const` សម្រាប់តម្លៃថេរ និង `let` សម្រាប់តម្លៃ ប្ដូរបាន។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-06",
      "number": 6,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ៦",
      "title": "មូលដ្ឋានគ្រឹះ JavaScript",
      "fullTitle": "មេរៀនទី ៦ ៖ មូលដ្ឋានគ្រឹះ JavaScript",
      "kindLabel": "",
      "pageStart": 66,
      "pageEnd": 76,
      "objectives": [
        "សរសេរ JavaScript Statements តាមក្បួន Syntax ត្រឹមត្រូវ និងប្រើ Comment បាន",
        "ប្រកាស Variables ដោយ `let` និង `const` និងពន្យល់ពីមូលហេតុដែលមិនណែនាំ `var`",
        "បែងចែក Data Types មូលដ្ឋាន (String, Number, Boolean, Undefined, Null) និងប្រើ Operators បាន",
        "ប្រើ Conditional Statements (`if`, `else if`, `else`) និង `switch` ដើម្បីសម្រេចចិត្ត",
        "ប្រើ Loops (`for`, `while`), Functions (Parameters/Return Values) និង Arrays មូលដ្ឋាន",
        "បង្កើត Grade Calculator ដែលទទួល Input ពីអ្នកប្រើ ហើយគណនាលទ្ធផល"
      ],
      "sections": [
        {
          "title": "៦.១. JavaScript Syntax និង Statements",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Statement (សេចក្ដីថ្លែង)</strong> គឺជាបញ្ជាមួយដែល JavaScript អនុវត្ត។ ក្បួនសំខាន់ៗ ៖"
            },
            {
              "type": "bullets",
              "items": [
                "Statement នីមួយៗគួរបញ្ចប់ដោយ `;` ហើយសរសេរម្នាក់មួយបន្ទាត់។",
                "JavaScript <strong>បែងចែកអក្សរធំ/តូច (Case-sensitive)</strong> ៖ `score` និង `Score` ជាឈ្មោះពីរខុសគ្នា។",
                "អត្ថបទ (String) ត្រូវនៅក្នុងសញ្ញា `\"...\"` ឬ `'...'`។",
                "Comment មួយបន្ទាត់ចាប់ផ្ដើមដោយ `//` ហើយ Comment ច្រើនបន្ទាត់នៅចន្លោះ `/*` និង `*/`។",
                "ក្រុម Statements (Block) នៅក្នុង `{ }` ដូចជាក្នុង `if` ឬ Function។"
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.១ ៖ Statements និង Comments",
              "code": "// បង្ហាញសារក្នុង Console\nconsole.log(\"សួស្តី JavaScript\");\n\n/* គណនាផលបូក\n   ហើយបង្ហាញលទ្ធផល */\nconsole.log(5 + 3);   // លទ្ធផល: 8"
            }
          ]
        },
        {
          "title": "៦.២. Variables៖ let, const និងការយល់ដឹងអំពី var",
          "items": [
            {
              "type": "paragraph",
              "text": "ក្បួនដាក់ឈ្មោះ Variable ៖ ចាប់ផ្ដើមដោយអក្សរ `_` ឬ `$` (មិនអាចចាប់ផ្ដើមដោយលេខ) គ្មានដកឃ្លា មិនប្រើពាក្យគន្លឹះ (ដូចជា `let`, `if`) ហើយគួរប្រើទម្រង់ <strong>camelCase</strong> ដូចជា `studentName`, `totalScore`។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ពាក្យគន្លឹះ</strong>",
                "<strong>ប្ដូរតម្លៃបាន?</strong>",
                "<strong>វិសាលភាព (Scope)</strong>",
                "<strong>ការណែនាំ</strong>"
              ],
              "rows": [
                [
                  "`const`",
                  "មិនបាន",
                  "Block `{ }`",
                  "ប្រើជាលំនាំដើម"
                ],
                [
                  "`let`",
                  "បាន",
                  "Block `{ }`",
                  "ប្រើពេលតម្លៃត្រូវប្ដូរ (ឧ. អ្នករាប់)"
                ],
                [
                  "`var`",
                  "បាន",
                  "Function (ទូលាយជាង)",
                  "វិធីចាស់ មិនណែនាំក្នុងកូដថ្មី"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "`var` ជាវិធីចាស់ (មុនឆ្នាំ 2015)។ វាអាចប្រកាសឈ្មោះដដែលម្ដងទៀតបាន ហើយមិនគោរព Block `{ }` ដែលងាយបង្កកំហុសដោយមិនដឹងខ្លួន។ សិស្សត្រូវស្គាល់ `var` ដើម្បីអានកូដចាស់ ប៉ុន្តែគួរប្រើ `let` និង `const` ជានិច្ច។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.២ ៖ let និង const",
              "code": "const school = \"RPITSSR\";   // មិនប្ដូរ\nlet score = 75;             // អាចប្ដូរ\nscore = score + 10;\nconsole.log(school + \" - ពិន្ទុ: \" + score);   // RPITSSR - ពិន្ទុ: 85"
            }
          ]
        },
        {
          "title": "៦.៣. Data Types មូលដ្ឋាន",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>Data Type</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>ពន្យល់</strong>"
              ],
              "rows": [
                [
                  "<strong>String</strong>",
                  "`\"`សុខ ដារ៉ា`\"`, `'HTML'`",
                  "អត្ថបទ"
                ],
                [
                  "<strong>Number</strong>",
                  "`25`, `3.14`, `-10`",
                  "លេខ (ទាំងលេខគត់ និងលេខទសភាគ)"
                ],
                [
                  "<strong>Boolean</strong>",
                  "`true`, `false`",
                  "ពិត ឬមិនពិត"
                ],
                [
                  "<strong>Undefined</strong>",
                  "`let x;`",
                  "Variable ដែលមិនទាន់មានតម្លៃ"
                ],
                [
                  "<strong>Null</strong>",
                  "`let y = null;`",
                  "\"គ្មានតម្លៃ\" ដែលយើងកំណត់ដោយចេតនា"
                ],
                [
                  "<strong>Array</strong>",
                  "`[80, 90, 75]`",
                  "បញ្ជីតម្លៃ (មើលចំណុច ៦.៩)"
                ],
                [
                  "<strong>Object</strong>",
                  "`{ name: \"Dara\", age: 18 }`",
                  "ក្រុមទិន្នន័យដែលមានឈ្មោះ (ស្គាល់ជាមូលដ្ឋាន)"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "ប្រើ `typeof` ដើម្បីពិនិត្យប្រភេទទិន្នន័យ ៖ `typeof 25` ផ្ដល់ `\"number\"` និង `typeof \"25\"` ផ្ដល់ `\"string\"`។ ចំណាំ ៖ ទិន្នន័យដែលទទួលពី `prompt()` ឬពី Input ក្នុង Form ជា <strong>String</strong> ជានិច្ច។ ត្រូវប្ដូរជាលេខដោយ `Number()` មុនពេលគណនា ៖ `Number(\"25\")` ផ្ដល់ `25`។"
            }
          ]
        },
        {
          "title": "៦.៤. Arithmetic, Assignment និង Comparison Operators",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>ប្រភេទ</strong>",
                "<strong>Operator</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>លទ្ធផល</strong>"
              ],
              "rows": [
                [
                  "<strong>Arithmetic</strong>",
                  "`+ - * /`",
                  "`10 / 4`",
                  "`2.5`"
                ],
                [
                  "<strong>Arithmetic</strong>",
                  "`%` (សំណល់)",
                  "`10 % 3`",
                  "`1`"
                ],
                [
                  "<strong>Assignment</strong>",
                  "`=`",
                  "`let a = 5;`",
                  "a ស្មើ 5"
                ],
                [
                  "<strong>Assignment</strong>",
                  "`+=`, `-=`",
                  "`a += 2;`",
                  "a ស្មើ 7"
                ],
                [
                  "<strong>Assignment</strong>",
                  "`++`, `--`",
                  "`a++;`",
                  "បូក 1"
                ],
                [
                  "<strong>Comparison</strong>",
                  "`===` (ស្មើ ទាំងតម្លៃ និងប្រភេទ)",
                  "`5 === \"5\"`",
                  "`false`"
                ],
                [
                  "<strong>Comparison</strong>",
                  "`!==` (មិនស្មើ)",
                  "`5 !== 3`",
                  "`true`"
                ],
                [
                  "<strong>Comparison</strong>",
                  "`> < >= <=`",
                  "`90 >= 50`",
                  "`true`"
                ],
                [
                  "<strong>Logical</strong>",
                  "`&&` (និង)",
                  "`true && false`",
                  "`false`"
                ],
                [
                  "<strong>Logical</strong>",
                  "`||` (ឬ)",
                  "`true || false`",
                  "`true`"
                ],
                [
                  "<strong>Logical</strong>",
                  "`!` (មិនមែន)",
                  "`!true`",
                  "`false`"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "warning",
              "text": "<strong>ប្រយ័ត្ន ៖</strong> សញ្ញា `+` ជាមួយ String នឹងភ្ជាប់អត្ថបទ (Concatenation) មិនមែនបូកលេខទេ ៖ `\"5\" + 3` ផ្ដល់ `\"53\"` ប៉ុន្តែ `Number(\"5\") + 3` ផ្ដល់ `8`។ គួរប្រើ `===` ជំនួស `==` ព្រោះ `==` ប្ដូរប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិ ហើយអាចផ្ដល់លទ្ធផលមិនរំពឹងទុក។"
            }
          ]
        },
        {
          "title": "៦.៥. Conditional Statements (Conditional Statements (if, else if, else))",
          "items": [
            {
              "type": "paragraph",
              "text": "Conditional Statements អនុញ្ញាតឱ្យកម្មវិធីសម្រេចចិត្ត ៖ ប្រសិនបើលក្ខខណ្ឌពិត (`true`) ធ្វើកូដមួយ ផ្ទុយទៅវិញធ្វើកូដមួយទៀត។ `else if` ប្រើសម្រាប់ពិនិត្យលក្ខខណ្ឌច្រើនតាមលំដាប់ ហើយ JavaScript ឈប់នៅលក្ខខណ្ឌពិតដំបូងគេ។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-06/fig-01.webp",
              "caption": "រូបភាពទី ៦.១ ៖ លំហូរ (Flowchart) នៃការកំណត់និទ្ទេសដោយ if / else if / else"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.៣ ៖ កំណត់និទ្ទេសតាមមធ្យមភាគ",
              "code": "const average = 84;\nlet grade;\n\nif (average >= 90) {\n  grade = \"A\";\n} else if (average >= 80) {\n  grade = \"B\";\n} else if (average >= 70) {\n  grade = \"C\";\n} else {\n  grade = \"F\";\n}\n\nconsole.log(\"និទ្ទេស: \" + grade);   // និទ្ទេស: B"
            }
          ]
        },
        {
          "title": "៦.៦. switch Statement (The switch Statement)",
          "items": [
            {
              "type": "paragraph",
              "text": "`switch` ប្រៀបធៀបតម្លៃមួយជាមួយករណី (`case`) ជាច្រើន។ វាងាយអានជាង `if` វែងៗ ពេលប្រៀបធៀបតម្លៃជាក់លាក់ (ដូចជា ថ្ងៃ ឬនិទ្ទេស)។ ត្រូវដាក់ `break` (ឬ `return` ក្នុង Function) នៅចុងករណីនីមួយៗ ដើម្បីកុំឱ្យធ្លាក់ចុះទៅករណីបន្ទាប់។ `default` ដំណើរការពេលគ្មានករណីណាត្រូវ។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.៤ ៖ switch សម្រាប់ថ្ងៃសិក្សា",
              "code": "const day = \"Saturday\";\n\nswitch (day) {\n  case \"Saturday\":\n    console.log(\"រៀន Web Design\");\n    break;\n  case \"Sunday\":\n    console.log(\"ថ្ងៃសម្រាក\");\n    break;\n  default:\n    console.log(\"រៀនមុខវិជ្ជាផ្សេង\");\n}"
            }
          ]
        },
        {
          "title": "៦.៧. Loops (Loops (for and while))",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Loop (រង្វិលជុំ)</strong> ប្រើសម្រាប់ធ្វើកូដដដែលៗច្រើនដង។ `for` សមពេលដឹងចំនួនដងច្បាស់ ហើយ `while` សមពេលធ្វើរហូតដល់លក្ខខណ្ឌលែងពិត។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.៥ ៖ for និង while",
              "code": "// for: បង្ហាញលេខ 1 ដល់ 5\nfor (let i = 1; i <= 5; i++) {\n  console.log(\"លេខ \" + i);\n}\n\n// while: រាប់ថយក្រោយពី 3\nlet count = 3;\nwhile (count > 0) {\n  console.log(\"រាប់: \" + count);\n  count--;\n}\nconsole.log(\"ចាប់ផ្ដើម!\");"
            },
            {
              "type": "paragraph",
              "text": "ក្នុង `for (let i = 1; i <= 5; i++)` មានបីផ្នែក ៖ តម្លៃចាប់ផ្ដើម (`let i = 1`), លក្ខខណ្ឌបន្ត (`i <= 5`) និងការប្ដូរបន្ទាប់ពីជុំនីមួយៗ (`i++`)។ ប្រយ័ត្ន ៖ បើភ្លេចប្ដូរតម្លៃក្នុង `while` (ឧ. `count--`) Loop នឹងដំណើរការមិនឈប់ (Infinite Loop) ហើយ Browser អាចគាំង។"
            }
          ]
        },
        {
          "title": "៦.៨. Functions និង Parameters/Return Values",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Function (អនុគមន៍)</strong> ជាក្រុមកូដដែលមានឈ្មោះ ហើយអាចហៅប្រើឡើងវិញបានច្រើនដង។ <strong>Parameter</strong> ជាទិន្នន័យដែលបញ្ជូនចូល Function ហើយ `return` ផ្ដល់លទ្ធផលត្រឡប់មកវិញ។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.៦ ៖ Function ដែលមាន Parameters និង Return",
              "code": "function add(a, b) {        // a, b ជា Parameters\n  return a + b;             // ផ្ដល់លទ្ធផលត្រឡប់\n}\n\nfunction calculateArea(width, height) {\n  return width * height;\n}\n\nconst total = add(10, 5);                  // 15\nconsole.log(\"ផលបូក: \" + total);\nconsole.log(\"ផ្ទៃក្រឡា: \" + calculateArea(4, 3));   // 12"
            },
            {
              "type": "paragraph",
              "text": "គុណសម្បត្តិរបស់ Function ៖ ជៀសវាងការសរសេរកូដដដែលៗ ធ្វើឱ្យកូដងាយអាន និងងាយកែ (កែតែកន្លែងមួយ)។ Function គួរមានឈ្មោះជាកិរិយាស័ព្ទ ដែលប្រាប់ពីអ្វីដែលវាធ្វើ ដូចជា `calculateAverage`, `getGrade`, `showMessage`។"
            }
          ]
        },
        {
          "title": "៦.៩. Arrays មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Array (អារេ)</strong> ជាបញ្ជីតម្លៃច្រើនក្នុង Variable តែមួយ។ ធាតុនីមួយៗមានលេខរៀង (Index) ដែល<strong>ចាប់ផ្ដើមពី 0</strong>។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>កូដ</strong>",
                "<strong>លទ្ធផល</strong>",
                "<strong>ពន្យល់</strong>"
              ],
              "rows": [
                [
                  "`const scores = [80, 95, 70];`",
                  "–",
                  "បង្កើត Array មាន ៣ ធាតុ"
                ],
                [
                  "`scores[0]`",
                  "`80`",
                  "ធាតុទីមួយ (Index 0)"
                ],
                [
                  "`scores.length`",
                  "`3`",
                  "ចំនួនធាតុ"
                ],
                [
                  "`scores.push(88);`",
                  "`[80, 95, 70, 88]`",
                  "បន្ថែមធាតុនៅចុង"
                ],
                [
                  "`scores.pop();`",
                  "`[80, 95, 70]`",
                  "ដកធាតុចុងក្រោយចេញ"
                ],
                [
                  "`scores.join(\", \")`",
                  "`\"80, 95, 70\"`",
                  "ភ្ជាប់ធាតុជា String"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.៧ ៖ ប្រើ for Loop ជាមួយ Array",
              "code": "const subjects = [\"HTML\", \"CSS\", \"JavaScript\"];\n\nfor (let i = 0; i < subjects.length; i++) {\n  console.log((i + 1) + \". \" + subjects[i]);\n}\n// 1. HTML\n// 2. CSS\n// 3. JavaScript"
            }
          ]
        },
        {
          "title": "៦.១០. លំហាត់ Calculator ឬ Simple Grade Calculator",
          "items": [
            {
              "type": "paragraph",
              "text": "គម្រោងនេះប្រមូលផ្ដុំ Variables, Data Types, Operators, Conditions, `switch`, Loops, Functions និង Arrays។ កម្មវិធីសួរឈ្មោះសិស្ស និងពិន្ទុ ៣ មុខវិជ្ជា (តាមរយៈ `prompt()`) គណនាមធ្យមភាគ កំណត់និទ្ទេស ហើយបង្ហាញលទ្ធផល។ ឯកសារពេញ ៖ `code/lesson06_js/`។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.៨ ៖ index.html",
              "code": "<!DOCTYPE html>\n<html lang=\"km\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Grade Calculator</title>\n</head>\n<body>\n  <h1>Grade Calculator</h1>\n  <p>សូមបើក Console (F12) ដើម្បីមើលលទ្ធផល។</p>\n  <script src=\"script.js\"></script>\n</body>\n</html>"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៦.៩ ៖ script.js",
              "code": "// ===== 1. Function គណនាមធ្យមភាគ =====\nfunction calculateAverage(scores) {\n  let total = 0;\n  for (let i = 0; i < scores.length; i++) {\n    total = total + scores[i];\n  }\n  return total / scores.length;\n}\n\n// ===== 2. Function កំណត់និទ្ទេស (Grade) =====\nfunction getGrade(average) {\n  if (average >= 90) {\n    return \"A\";\n  } else if (average >= 80) {\n    return \"B\";\n  } else if (average >= 70) {\n    return \"C\";\n  } else if (average >= 60) {\n    return \"D\";\n  } else if (average >= 50) {\n    return \"E\";\n  } else {\n    return \"F\";\n  }\n}\n\n// ===== 3. switch: បង្ហាញមតិតាមនិទ្ទេស =====\nfunction getComment(grade) {\n  switch (grade) {\n    case \"A\":\n      return \"ល្អប្រសើរ\";\n    case \"B\":\n      return \"ល្អណាស់\";\n    case \"C\":\n      return \"ល្អ\";\n    case \"D\":\n    case \"E\":\n      return \"មធ្យម\";\n    default:\n      return \"ត្រូវខិតខំបន្ថែម\";\n  }\n}\n\n// ===== 4. ទទួល Input ពីអ្នកប្រើ =====\nconst studentName = prompt(\"បញ្ចូលឈ្មោះសិស្ស:\");\nconst subjects = [\"HTML\", \"CSS\", \"JavaScript\"];\nconst scores = [];\n\nfor (let i = 0; i < subjects.length; i++) {\n  const score = Number(prompt(\"បញ្ចូលពិន្ទុ \" + subjects[i] + \" (0-100):\"));\n  scores.push(score);\n}\n\nconst average = calculateAverage(scores);\nconst grade = getGrade(average);\n\nconsole.log(\"ឈ្មោះ: \" + studentName);\nconsole.log(\"ពិន្ទុ: \" + scores.join(\", \"));\nconsole.log(\"មធ្យមភាគ: \" + average.toFixed(2));\nconsole.log(\"និទ្ទេស: \" + grade + \" (\" + getComment(grade) + \")\");\nalert(studentName + \" ទទួលបាននិទ្ទេស \" + grade);"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល (ឧទាហរណ៍) ៖ បើបញ្ចូលឈ្មោះ `Dara` និងពិន្ទុ `95`, `82`, `88` Console បង្ហាញ ៖"
            },
            {
              "type": "table",
              "headers": [
                "<strong>បន្ទាត់ក្នុង Console</strong>",
                "<strong>ពន្យល់</strong>"
              ],
              "rows": [
                [
                  "ឈ្មោះ`: Dara`",
                  "តម្លៃពី `prompt()` ទីមួយ"
                ],
                [
                  "ពិន្ទុ`: 95, 82, 88`",
                  "Array `scores` ភ្ជាប់ដោយ `join(\", \")`"
                ],
                [
                  "មធ្យមភាគ`: 88.33`",
                  "(95 + 82 + 88) ÷ 3 = 88.333… បង្គត់ ២ ខ្ទង់ដោយ `toFixed(2)`"
                ],
                [
                  "និទ្ទេស`: B (`ល្អណាស់`)`",
                  "88.33 ≥ 80 → \"B\"; `switch` ផ្ដល់មតិ \"ល្អណាស់\""
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "បន្ទាប់មក ប្រអប់ `alert` បង្ហាញ \"Dara ទទួលបាននិទ្ទេស B\"។ (លទ្ធផលនេះត្រូវបានផ្ទៀងផ្ទាត់ដោយ ដំណើរការកូដពិតប្រាកដ)"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>លំហាត់អនុវត្តន៍ជាក់ស្ដែងប្រចាំមេរៀនទី ៦ (Hands-on Practice) ៖</strong>\n<strong>១.</strong> សរសេរ Function `celsiusToFahrenheit(c)` ដែល `return` តម្លៃ `c * 9 / 5 + 32` ហើយសាកល្បងជាមួយ 0, 30 និង 100 (ចម្លើយត្រូវជា 32, 86, 212)។\n<strong>២.</strong> សរសេរ Simple Calculator ៖ ទទួលលេខពីរ និងសញ្ញា (`+`, `-`, `*`, `/`) តាម `prompt()` ហើយប្រើ `switch` ដើម្បីគណនា និងបង្ហាញលទ្ធផលក្នុង `alert()`។ ត្រូវពិនិត្យករណីចែកនឹង 0។\n<strong>៣.</strong> បង្កើត Array តម្លៃម្ហូប ៥ មុខ ហើយប្រើ `for` Loop គណនាតម្លៃសរុប និងរកតម្លៃថ្លៃបំផុត។\n<strong>៤.</strong> កែ Grade Calculator ឱ្យទទួលពិន្ទុ ៥ មុខវិជ្ជា (បន្ថែមក្នុង Array `subjects`) ហើយពិនិត្យថាពិន្ទុនីមួយៗនៅចន្លោះ 0–100។"
            }
          ]
        },
        {
          "title": "សំណួរត្រួតពិនិត្យការយល់ដឹង (Chapter Review Questions)",
          "items": [
            {
              "type": "quiz",
              "title": "ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
              "isExam": false,
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "តើលទ្ធផលនៃ `\"5\" + 3` ក្នុង JavaScript គឺជាអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`8`"
                    },
                    {
                      "key": "B",
                      "text": "`\"53\"`"
                    },
                    {
                      "key": "C",
                      "text": "`15`"
                    },
                    {
                      "key": "D",
                      "text": "Error"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "\"53\""
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើ Index នៃធាតុទីមួយក្នុង Array គឺប៉ុន្មាន?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`0`"
                    },
                    {
                      "key": "B",
                      "text": "`1`"
                    },
                    {
                      "key": "C",
                      "text": "`-1`"
                    },
                    {
                      "key": "D",
                      "text": "អាស្រ័យលើ Array"
                    }
                  ],
                  "answer": "A",
                  "answerNote": "0"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "តើលទ្ធផលនៃ `5 === \"5\"` គឺអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`true`"
                    },
                    {
                      "key": "B",
                      "text": "`false`"
                    },
                    {
                      "key": "C",
                      "text": "`undefined`"
                    },
                    {
                      "key": "D",
                      "text": "`\"5\"`"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "false"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើ `for (let i = 0; i < 3; i++)` ដំណើរការប៉ុន្មានដង?",
                  "options": [
                    {
                      "key": "A",
                      "text": "2 ដង"
                    },
                    {
                      "key": "B",
                      "text": "3 ដង"
                    },
                    {
                      "key": "C",
                      "text": "4 ដង"
                    },
                    {
                      "key": "D",
                      "text": "មិនឈប់"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "3 ដង"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ក្នុង Function តើពាក្យគន្លឹះណាដែលផ្ដល់លទ្ធផលត្រឡប់មកវិញ?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`break`"
                    },
                    {
                      "key": "B",
                      "text": "`let`"
                    },
                    {
                      "key": "C",
                      "text": "`return`"
                    },
                    {
                      "key": "D",
                      "text": "`console.log`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "return"
                }
              ]
            },
            {
              "type": "short-questions",
              "title": "ខ. សំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ហេតុអ្វីបានជាគួរប្រើ `let` និង `const` ជំនួស `var`?",
                  "answer": "`let` និង `const` គោរព Block Scope `{ }` និងមិនអនុញ្ញាតឱ្យប្រកាសឈ្មោះដដែលម្ដងទៀត ដែលកាត់បន្ថយកំហុស; `const` ការពារការប្ដូរតម្លៃដោយចៃដន្យ។ `var` ជាវិធីចាស់ដែលងាយបង្កកំហុស។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូររៀបរាប់ Data Types មូលដ្ឋាន ៤ ជាមួយឧទាហរណ៍។",
                  "answer": "String `\"Dara\"`, Number `25`, Boolean `true`, Undefined (`let x;`) និង Null (`null`)។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ហេតុអ្វីត្រូវប្រើ `Number()` ជាមួយតម្លៃដែលទទួលពី `prompt()`?",
                  "answer": "ព្រោះ `prompt()` តែងតែផ្ដល់ String។ បើមិនប្ដូរ សញ្ញា `+` នឹងភ្ជាប់អត្ថបទ (ឧ. \"80\" + \"90\" = \"8090\") ជំនួសការបូកលេខ។"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ចូរសរសេរ Function `isPass(score)` ដែល `return` `true` បើ score ≥ 50 និង `false` បើតិចជាង។",
                  "answer": "`function isPass(score) { if (score >= 50) { return true; } else { return false; } }` (ឬសរសេរខ្លី `return score >= 50;`)"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ចូរពន្យល់ភាពខុសគ្នារវាង `for` Loop និង `while` Loop។",
                  "answer": "`for` សមពេលដឹងចំនួនដងច្បាស់ ដោយមានតម្លៃចាប់ផ្ដើម លក្ខខណ្ឌ និងការប្ដូរក្នុងបន្ទាត់តែមួយ; `while` ធ្វើរហូតដល់លក្ខខណ្ឌលែងពិត ហើយត្រូវប្ដូរតម្លៃក្នុង Loop ដើម្បីកុំឱ្យជា Infinite Loop។"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ៦ (Lesson Summary) ៖</strong>\n<strong>•</strong> Statements បញ្ចប់ដោយ `;` ; JavaScript បែងចែកអក្សរធំ/តូច; Comment ប្រើ `//` ឬ `/* */`។\n<strong>•</strong> ប្រើ `const` ជាលំនាំដើម, `let` ពេលតម្លៃប្ដូរ; ជៀសវាង `var` ក្នុងកូដថ្មី។\n<strong>•</strong> Data Types ៖ String, Number, Boolean, Undefined, Null (និង Array, Object)។ ប្រើ `Number()` ប្ដូរ String ជាលេខ។\n<strong>•</strong> Operators ៖ Arithmetic (`+ - * / %`), Assignment (`= += ++`), Comparison (`=== !== > <`) និង Logical (`&& || !`)។\n<strong>•</strong> `if / else if / else` និង `switch` សម្រាប់ការសម្រេចចិត្ត; `for` និង `while` សម្រាប់ធ្វើដដែលៗ។\n<strong>•</strong> Functions (Parameters + `return`) និង Arrays (Index ចាប់ពី 0, `length`, `push`) ជួយរៀបចំកូដ និងទិន្នន័យ។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-07",
      "number": 7,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ៧",
      "title": "JavaScript DOM និង Events",
      "fullTitle": "មេរៀនទី ៧ ៖ JavaScript DOM និង Events",
      "kindLabel": "",
      "pageStart": 77,
      "pageEnd": 88,
      "objectives": [
        "ពន្យល់បានថា Document Object Model (DOM) ជាអ្វី និងអានរចនាសម្ព័ន្ធ DOM Tree បាន",
        "ជ្រើសរើស Elements ដោយ `getElementById()`, `querySelector()` និង `querySelectorAll()`",
        "កែប្រែ Content, Attributes និង CSS Classes (`classList`) របស់ Elements ដោយ JavaScript",
        "ប្រើ `addEventListener()` ដើម្បីឆ្លើយតបនឹង Click Events និង Submit Events",
        "សរសេរ Form Validation មូលដ្ឋាន និងប្រើ Browser Developer Tools ដើម្បីរកកំហុស",
        "រៀបចំផែនការ និង Project Folder សម្រាប់ Final Website Project"
      ],
      "sections": [
        {
          "title": "៧.១. សេចក្ដីផ្ដើមអំពី Document Object Model (DOM)",
          "items": [
            {
              "type": "paragraph",
              "text": "នៅពេល Browser ផ្ទុកឯកសារ HTML វាបង្កើតគំរូនៃទំព័រនៅក្នុង Memory ហៅថា <strong>DOM (Document Object Model)</strong>។ DOM តំណាងឱ្យ HTML Element នីមួយៗជា <strong>Object</strong> ដែល JavaScript អាចអាន និងកែប្រែបាន។ នៅពេល JavaScript កែ DOM (ឧ. ប្ដូរអត្ថបទ) Browser នឹងបង្ហាញការផ្លាស់ប្ដូរភ្លាមៗ លើអេក្រង់ ដោយមិនចាំបាច់ Reload ទំព័រ។ Object ចម្បងសម្រាប់ចូលប្រើ DOM គឺ `document`។"
            }
          ]
        },
        {
          "title": "៧.២. DOM Tree និងការយល់ដឹងពី HTML Elements",
          "items": [
            {
              "type": "paragraph",
              "text": "DOM រៀបចំជារចនាសម្ព័ន្ធដើមឈើ (Tree)។ `document` នៅលើគេបង្អស់ បន្ទាប់មក `<html>` ដែលមានកូនពីរគឺ `<head>` និង `<body>`។ Element នីមួយៗហៅថា <strong>Node</strong>។ Element ដែលនៅក្នុង Element ផ្សេង ហៅថា <strong>Child (កូន)</strong> ហើយ Element ដែលផ្ទុកវាហៅថា <strong>Parent (មេ)</strong>។ អត្ថបទក្នុង Element ក៏ជា Node មួយប្រភេទ ហៅថា Text Node។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-07/fig-01.webp",
              "caption": "រូបភាពទី ៧.១ ៖ DOM Tree នៃទំព័រ \"DOM និង Events\""
            }
          ]
        },
        {
          "title": "៧.៣. ការជ្រើសរើស Elements (Selecting Elements)",
          "items": [
            {
              "type": "paragraph",
              "text": "មុនពេលកែ Element ណាមួយ យើងត្រូវជ្រើសវាជាមុនសិន ហើយរក្សាទុកក្នុង Variable។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Method</strong>",
                "<strong>ឧទាហរណ៍</strong>",
                "<strong>លទ្ធផល</strong>"
              ],
              "rows": [
                [
                  "`getElementById(\"id\")`",
                  "`document.getElementById(\"title\")`",
                  "Element តែមួយដែលមាន `id=\"title\"`"
                ],
                [
                  "`querySelector(\"selector\")`",
                  "`document.querySelector(\".card\")`",
                  "Element <strong>ទីមួយ</strong> ដែលត្រូវនឹង CSS Selector"
                ],
                [
                  "`querySelectorAll(\"selector\")`",
                  "`document.querySelectorAll(\".menu a\")`",
                  "Elements <strong>ទាំងអស់</strong> ដែលត្រូវ (NodeList)"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "`querySelector()` ប្រើ CSS Selector ដូចក្នុង CSS (`#id`, `.class`, `tag`) ដូច្នេះវាបត់បែនបំផុត។ បើរក Element មិនឃើញ Method ទាំងនេះផ្ដល់ `null` (ឬ NodeList ទទេ) ហើយការប្រើ `null` បន្តនឹងបង្កកំហុសក្នុង Console។"
            }
          ]
        },
        {
          "title": "៧.៤. ការកែប្រែ Content និង Attributes",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>Property / Method</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`element.textContent`",
                  "អាន ឬកំណត់អត្ថបទក្នុង Element (មិនបកប្រែ HTML Tags)"
                ],
                [
                  "`element.innerHTML`",
                  "អាន ឬកំណត់ HTML ក្នុង Element (ប្រើដោយប្រុងប្រយ័ត្ន)"
                ],
                [
                  "`input.value`",
                  "អាន ឬកំណត់តម្លៃក្នុងប្រអប់ Input/Textarea/Select"
                ],
                [
                  "`element.setAttribute(\"src\", \"b.png\")`",
                  "កំណត់ Attribute"
                ],
                [
                  "`element.getAttribute(\"href\")`",
                  "អានតម្លៃ Attribute"
                ],
                [
                  "`element.style.color = \"red\"`",
                  "កំណត់ Inline Style (ប្រើតិចតួច; គួរប្រើ classList)"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៧.១ ៖ ប្ដូរអត្ថបទ និងរូបភាព",
              "code": "const title = document.getElementById(\"title\");\ntitle.textContent = \"សូមស្វាគមន៍មកកាន់ Website របស់យើង\";\n\nconst logo = document.querySelector(\".logo img\");\nlogo.setAttribute(\"src\", \"images/logo-new.png\");\nlogo.setAttribute(\"alt\", \"Logo ថ្មី\");"
            },
            {
              "type": "callout",
              "kind": "warning",
              "text": "<strong>សុវត្ថិភាព ៖</strong> ពេលបង្ហាញទិន្នន័យដែលអ្នកប្រើវាយបញ្ចូល គួរប្រើ `textContent` ជំនួស `innerHTML`។ `innerHTML` បកប្រែអត្ថបទជា HTML ដែលអាចបង្កឱ្យមានកូដមិនល្អត្រូវបានបញ្ចូលក្នុងទំព័រ។"
            }
          ]
        },
        {
          "title": "៧.៥. ការកំណត់ និងដក CSS Classes",
          "items": [
            {
              "type": "paragraph",
              "text": "វិធីល្អបំផុតក្នុងការប្ដូររូបរាងដោយ JavaScript គឺ សរសេរ Style ក្នុង CSS ជា Class ហើយប្រើ JavaScript ដើម្បីបន្ថែម ឬដក Class នោះ។ វិធីនេះរក្សាការបំបែក CSS (រូបរាង) និង JavaScript (ឥរិយាបថ)។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Method</strong>",
                "<strong>តួនាទី</strong>"
              ],
              "rows": [
                [
                  "`element.classList.add(\"dark\")`",
                  "បន្ថែម Class"
                ],
                [
                  "`element.classList.remove(\"dark\")`",
                  "ដក Class"
                ],
                [
                  "`element.classList.toggle(\"dark\")`",
                  "បើមានដក បើគ្មានបន្ថែម (បិទ/បើក)"
                ],
                [
                  "`element.classList.contains(\"dark\")`",
                  "ពិនិត្យថាមាន Class ឬអត់ (`true`/`false`)"
                ]
              ]
            }
          ]
        },
        {
          "title": "៧.៦. Event និង Event Listener",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Event (ព្រឹត្តិការណ៍)</strong> គឺជាសកម្មភាពដែលកើតឡើងលើទំព័រ ដូចជាអ្នកប្រើចុចប៊ូតុង វាយអក្សរ ឬផ្ញើ Form។ <strong>Event Listener</strong> ជាកូដដែល \"ស្ដាប់\" Event លើ Element ណាមួយ ហើយដំណើរការ Function ពេល Event នោះកើតឡើង។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-07/fig-02.webp",
              "caption": "រូបភាពទី ៧.២ ៖ លំហូរពី Event ទៅការផ្លាស់ប្ដូរ DOM"
            },
            {
              "type": "table",
              "headers": [
                "<strong>Event</strong>",
                "<strong>ពេលកើតឡើង</strong>"
              ],
              "rows": [
                [
                  "`click`",
                  "ចុចលើ Element"
                ],
                [
                  "`submit`",
                  "ផ្ញើ Form (ចុចប៊ូតុង submit ឬ Enter)"
                ],
                [
                  "`input`",
                  "តម្លៃក្នុងប្រអប់ Input ប្ដូរ (រាល់ពេលវាយ)"
                ],
                [
                  "`change`",
                  "តម្លៃ Select/Checkbox ប្ដូរ"
                ],
                [
                  "`mouseover`",
                  "Mouse ចូលពីលើ Element"
                ],
                [
                  "`keydown`",
                  "ចុចគ្រាប់ចុចលើក្ដារចុច"
                ]
              ]
            }
          ]
        },
        {
          "title": "៧.៧. ការប្រើ addEventListener() និង Click Events",
          "items": [
            {
              "type": "paragraph",
              "text": "ទម្រង់ ៖ `element.addEventListener(\"`ឈ្មោះ`Event\", function () { ... });`។ ឧទាហរណ៍ខាងក្រោមបង្កើតប៊ូតុងពីរ ៖ ប៊ូតុងប្ដូរពណ៌ផ្ទៃ (Dark Mode) និងប៊ូតុង Like ដែលរាប់ចំនួនចុច។ ឯកសារពេញ ៖ `code/lesson07_dom/`។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៧.២ ៖ index.html (ផ្នែក body)",
              "code": "<header class=\"topbar\">\n  <h1 id=\"title\">DOM និង Events</h1>\n  <button id=\"themeBtn\">ប្ដូរពណ៌ផ្ទៃ</button>\n</header>\n\n<section class=\"box\">\n  <h2>1. ប៊ូតុងរាប់ចំនួនចុច</h2>\n  <p>ចំនួនចុច៖ <span id=\"count\">0</span></p>\n  <button id=\"likeBtn\">👍 Like</button>\n</section>"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៧.៣ ៖ script.js (Click Events)",
              "code": "// ===== 1. ជ្រើសរើស Elements =====\nconst themeBtn = document.getElementById(\"themeBtn\");\nconst likeBtn = document.getElementById(\"likeBtn\");\nconst countSpan = document.querySelector(\"#count\");\n\n// ===== 2. Click Event: ប្ដូរពណ៌ផ្ទៃ (classList.toggle) =====\nthemeBtn.addEventListener(\"click\", function () {\n  document.body.classList.toggle(\"dark\");\n});\n\n// ===== 3. Click Event: រាប់ចំនួនចុច (textContent) =====\nlet count = 0;\nlikeBtn.addEventListener(\"click\", function () {\n  count = count + 1;\n  countSpan.textContent = count;\n});"
            },
            {
              "type": "paragraph",
              "text": "ក្នុង CSS មាន Rule `body.dark { background-color: #1e1e2e; color: #f0f0f0; }`។ លទ្ធផល ៖ ចុច \"ប្ដូរពណ៌ផ្ទៃ\" ម្ដង ផ្ទៃទំព័រប្ដូរជាពណ៌ងងឹត ចុចម្ដងទៀតត្រឡប់មកពណ៌ភ្លឺវិញ។ ចុច \"👍 Like\" បីដង លេខប្ដូរពី 0 ទៅ 3។"
            }
          ]
        },
        {
          "title": "៧.៨. Form Validation មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Form Validation</strong> គឺការពិនិត្យទិន្នន័យមុនទទួលយក ដូចជា ប្រអប់មិនទទេ Email មានសញ្ញា @ ឬសារវែងគ្រប់គ្រាន់។ យើងស្ដាប់ Event `submit` លើ `<form>` ហើយហៅ `event.preventDefault()` ដើម្បីបញ្ឈប់ការផ្ញើ/Reload ទំព័រ ទើបអាចពិនិត្យ និងបង្ហាញសារកំហុសបាន។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៧.៤ ៖ Contact Form (index.html - បន្ត)",
              "code": "<section class=\"box\">\n  <h2>2. ទម្រង់ទំនាក់ទំនង (Form Validation)</h2>\n  <form id=\"contactForm\" novalidate>\n    <label for=\"name\">ឈ្មោះ</label>\n    <input type=\"text\" id=\"name\">\n    <small class=\"error\" id=\"nameError\"></small>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\">\n    <small class=\"error\" id=\"emailError\"></small>\n\n    <label for=\"message\">សារ</label>\n    <textarea id=\"message\" rows=\"3\"></textarea>\n    <small class=\"error\" id=\"messageError\"></small>\n\n    <button type=\"submit\">ផ្ញើសារ</button>\n  </form>\n  <p id=\"successMsg\" class=\"success hidden\">✔ ផ្ញើសារបានជោគជ័យ! សូមអរគុណ។</p>\n</section>"
            },
            {
              "type": "paragraph",
              "text": "Attribute `novalidate` បិទការពិនិត្យស្វ័យប្រវត្តិរបស់ Browser ដើម្បីឱ្យ JavaScript របស់យើង គ្រប់គ្រងការពិនិត្យ និងបង្ហាញសារជាភាសាខ្មែរ។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៧.៥ ៖ script.js (Form Validation)",
              "code": "const form = document.querySelector(\"#contactForm\");\nconst successMsg = document.getElementById(\"successMsg\");\n\n// Function ជំនួយសម្រាប់បង្ហាញ/លុបសារកំហុស\nfunction showError(input, errorId, message) {\n  input.classList.add(\"invalid\");\n  document.getElementById(errorId).textContent = message;\n}\n\nfunction clearError(input, errorId) {\n  input.classList.remove(\"invalid\");\n  document.getElementById(errorId).textContent = \"\";\n}\n\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault(); // បញ្ឈប់ការ Reload ទំព័រ\n\n  const nameInput = document.getElementById(\"name\");\n  const emailInput = document.getElementById(\"email\");\n  const messageInput = document.getElementById(\"message\");\n  let isValid = true;\n\n  if (nameInput.value.trim() === \"\") {\n    showError(nameInput, \"nameError\", \"សូមបញ្ចូលឈ្មោះ\");\n    isValid = false;\n  } else {\n    clearError(nameInput, \"nameError\");\n  }\n\n  if (!emailInput.value.includes(\"@\")) {\n    showError(emailInput, \"emailError\", \"Email មិនត្រឹមត្រូវ\");\n    isValid = false;\n  } else {\n    clearError(emailInput, \"emailError\");\n  }\n\n  if (messageInput.value.trim().length < 10) {\n    showError(messageInput, \"messageError\", \"សារត្រូវមានយ៉ាងតិច 10 តួអក្សរ\");\n    isValid = false;\n  } else {\n    clearError(messageInput, \"messageError\");\n  }\n\n  if (isValid) {\n    successMsg.classList.remove(\"hidden\");\n    form.reset();\n  } else {\n    successMsg.classList.add(\"hidden\");\n  }\n});"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-07/fig-03.webp",
              "caption": "រូបភាពទី ៧.៣ ៖ លទ្ធផល ៖ ចុច Like ៣ ដង និងផ្ញើ Form ដែលទិន្នន័យមិនត្រឹមត្រូវ"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ បើផ្ញើ Form ដោយទុកឈ្មោះទទេ Email `dara.com` (គ្មាន @) និងសារទទេ ប្រអប់ទាំងបីប្ដូរស៊ុមជាពណ៌ក្រហម (Class `invalid`) ហើយសារកំហុសបង្ហាញនៅក្រោមប្រអប់នីមួយៗ។ បើទិន្នន័យត្រឹមត្រូវទាំងអស់ សារ \"✔ ផ្ញើសារបានជោគជ័យ!\" បង្ហាញ ហើយ Form ត្រូវបានសម្អាតដោយ `form.reset()`។"
            },
            {
              "type": "callout",
              "kind": "warning",
              "text": "<strong>ចំណាំ ៖</strong> `.trim()` លុបដកឃ្លានៅដើម និងចុង ដើម្បីកុំឱ្យអ្នកប្រើវាយតែដកឃ្លាហើយរំលងការពិនិត្យបាន។ ការពិនិត្យនៅលើ Browser ជួយបទពិសោធន៍អ្នកប្រើ ប៉ុន្តែក្នុង Website ពិតប្រាកដ Server ក៏ត្រូវពិនិត្យម្ដង ទៀតដែរ (សិក្សានៅវគ្គ Back-end)។"
            }
          ]
        },
        {
          "title": "៧.៩. ការដោះស្រាយ Error និងការប្រើ Browser Developer Tools មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "បើកដោយចុច <strong>F12</strong> ឬ <strong>Ctrl + Shift + I</strong> (ក្នុង Chrome/Edge)។ ផ្ទាំងសំខាន់ៗសម្រាប់អ្នកចាប់ផ្ដើម ៖"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ផ្ទាំង (Tab)</strong>",
                "<strong>ការប្រើប្រាស់</strong>"
              ],
              "rows": [
                [
                  "<strong>Elements</strong>",
                  "មើល និងកែ HTML/CSS បណ្ដោះអាសន្ន; ពិនិត្យ Box Model និង Class ដែល JavaScript បានបន្ថែម"
                ],
                [
                  "<strong>Console</strong>",
                  "មើលសារ `console.log()` និងសារកំហុស (Error) ព្រមទាំងលេខបន្ទាត់ដែលកំហុសកើតឡើង"
                ],
                [
                  "<strong>Sources</strong>",
                  "មើលឯកសារ JS និងដាក់ Breakpoint ដើម្បីដំណើរការកូដម្ដងមួយជំហាន"
                ],
                [
                  "<strong>Network</strong>",
                  "ពិនិត្យថាឯកសារ CSS, JS, រូបភាព ផ្ទុកបានឬទេ (កំហុស 404 = រកឯកសារមិនឃើញ)"
                ]
              ]
            },
            {
              "type": "table",
              "headers": [
                "<strong>សារកំហុសទូទៅក្នុង Console</strong>",
                "<strong>មូលហេតុ និងដំណោះស្រាយ</strong>"
              ],
              "rows": [
                [
                  "`Uncaught ReferenceError: x is not defined`",
                  "ប្រើ Variable/Function ដែលមិនទាន់ប្រកាស ឬសរសេរឈ្មោះខុស (ពិនិត្យអក្សរធំ/តូច)"
                ],
                [
                  "`Cannot read properties of null`",
                  "`getElementById`/`querySelector` រកមិនឃើញ Element (id ខុស ឬ `<script>` ដាក់មុន HTML)"
                ],
                [
                  "`Uncaught SyntaxError`",
                  "ខ្វះ `)` `}` ឬ `\"` ; ពិនិត្យបន្ទាត់ដែល Console បង្ហាញ"
                ],
                [
                  "`Failed to load resource: 404`",
                  "ផ្លូវ (Path) ទៅឯកសារ `src`/`href` ខុស"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "ជំហានដោះស្រាយកំហុស ៖ (១) អានសារកំហុស និងលេខបន្ទាត់ក្នុង Console, (២) ចុចលើឈ្មោះ ឯកសារដើម្បីទៅបន្ទាត់នោះ, (៣) ប្រើ `console.log()` ដើម្បីពិនិត្យតម្លៃ Variable, (៤) កែម្ដងមួយចំណុច ហើយសាកល្បងឡើងវិញ។"
            }
          ]
        },
        {
          "title": "សំណួរត្រួតពិនិត្យការយល់ដឹង (Chapter Review Questions)",
          "items": [
            {
              "type": "quiz",
              "title": "ក. សំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
              "isExam": false,
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "តើ DOM តំណាងឱ្យអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "Data Output Method"
                    },
                    {
                      "key": "B",
                      "text": "Document Object Model"
                    },
                    {
                      "key": "C",
                      "text": "Design Object Map"
                    },
                    {
                      "key": "D",
                      "text": "Display Order Mode"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "Document Object Model"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើ Method ណាផ្ដល់ Elements ទាំងអស់ដែលត្រូវនឹង Selector `.card`?",
                  "options": [
                    {
                      "key": "A",
                      "text": "`getElementById(\".card\")`"
                    },
                    {
                      "key": "B",
                      "text": "`querySelector(\".card\")`"
                    },
                    {
                      "key": "C",
                      "text": "`querySelectorAll(\".card\")`"
                    },
                    {
                      "key": "D",
                      "text": "`getElement(\".card\")`"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "querySelectorAll(\".card\")"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "តើ `classList.toggle(\"dark\")` ធ្វើអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "លុប Element"
                    },
                    {
                      "key": "B",
                      "text": "បន្ថែម Class `dark` បើមិនទាន់មាន ឬដកចេញបើមានរួច"
                    },
                    {
                      "key": "C",
                      "text": "ប្ដូរ id ទៅជា dark"
                    },
                    {
                      "key": "D",
                      "text": "បន្ថែម Class `dark` ជានិច្ច"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "បន្ថែម Class dark បើមិនទាន់មាន ឬដកចេញបើមានរួច"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ក្នុង Form Validation តើ `event.preventDefault()` មានតួនាទីអ្វី?",
                  "options": [
                    {
                      "key": "A",
                      "text": "លុបទិន្នន័យក្នុង Form"
                    },
                    {
                      "key": "B",
                      "text": "ផ្ញើ Form ភ្លាមៗ"
                    },
                    {
                      "key": "C",
                      "text": "បញ្ឈប់ការផ្ញើ Form និងការ Reload ទំព័រតាមលំនាំដើម"
                    },
                    {
                      "key": "D",
                      "text": "បិទ Browser"
                    }
                  ],
                  "answer": "C",
                  "answerNote": "បញ្ឈប់ការផ្ញើ Form និងការ Reload ទំព័រតាមលំនាំដើម"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "តើផ្ទាំងណាក្នុង Developer Tools បង្ហាញសារកំហុស JavaScript?",
                  "options": [
                    {
                      "key": "A",
                      "text": "Elements"
                    },
                    {
                      "key": "B",
                      "text": "Console"
                    },
                    {
                      "key": "C",
                      "text": "Network"
                    },
                    {
                      "key": "D",
                      "text": "Application"
                    }
                  ],
                  "answer": "B",
                  "answerNote": "Console"
                }
              ]
            },
            {
              "type": "short-questions",
              "title": "ខ. សំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ចូរពន្យល់ថា DOM ជាអ្វី ហើយហេតុអ្វី JavaScript ត្រូវការវា។",
                  "answer": "DOM ជាគំរូនៃទំព័រ HTML ដែល Browser បង្កើតជា Tree នៃ Objects។ JavaScript ប្រើ DOM ដើម្បីជ្រើស អាន និងកែ Elements ធ្វើឱ្យទំព័រប្ដូរភ្លាមៗដោយមិនចាំបាច់ Reload។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូរប្រៀបធៀប `textContent` និង `innerHTML`។",
                  "answer": "`textContent` អាន/កំណត់តែអត្ថបទ (Tags ត្រូវបង្ហាញជាអក្សរ) ដែលមានសុវត្ថិភាព; `innerHTML` បកប្រែជា HTML ដូច្នេះមិនគួរប្រើជាមួយទិន្នន័យដែលអ្នកប្រើវាយបញ្ចូល។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ចូរសរសេរកូដដែលបង្ហាញ `alert(\"`សួស្តី`\")` ពេលចុចប៊ូតុង `<button id=\"helloBtn\">`។",
                  "answer": "`const btn = document.getElementById(\"helloBtn\"); btn.addEventListener(\"click\", function () { alert(\"`សួស្តី`\"); });`"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ហេតុអ្វីបានជាការប្ដូររូបរាងដោយ `classList` ល្អជាងការប្រើ `element.style`?",
                  "answer": "ព្រោះ Style ស្ថិតក្នុង CSS ទាំងអស់ (ងាយថែទាំ និងប្រើឡើងវិញ) ហើយ JavaScript គ្រាន់តែបន្ថែម/ដក Class ធ្វើឱ្យ CSS និង JavaScript បំបែកពីគ្នាច្បាស់លាស់។"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "បើ Console បង្ហាញ \"Cannot read properties of null\" តើមូលហេតុអាចជាអ្វី និងដោះស្រាយយ៉ាងដូចម្ដេច?",
                  "answer": "JavaScript រក Element មិនឃើញ (id/Selector ខុស ឬ `<script>` ដំណើរការមុន HTML ផ្ទុក)។ ដោះស្រាយដោយពិនិត្យឈ្មោះ id/Selector ឱ្យត្រូវ និងដាក់ `<script>` មុន `</body>`។"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ៧ (Lesson Summary) ៖</strong>\n<strong>•</strong> DOM ជា Tree នៃ Objects តំណាងឱ្យ HTML; `document` ជាចំណុចចាប់ផ្ដើម។\n<strong>•</strong> ជ្រើស Elements ដោយ `getElementById()`, `querySelector()` (ទីមួយ) និង `querySelectorAll()` (ទាំងអស់)។\n<strong>•</strong> កែ Content ដោយ `textContent`/`value`, Attributes ដោយ `setAttribute()`, និងរូបរាងដោយ `classList.add/remove/toggle`។\n<strong>•</strong> `addEventListener(\"click\"` ឬ `\"submit\", function)` ភ្ជាប់ Event ទៅ Function; `event.preventDefault()` បញ្ឈប់ការផ្ញើ Form។\n<strong>•</strong> Form Validation ពិនិត្យទិន្នន័យ និងបង្ហាញសារកំហុស/ជោគជ័យ; Developer Tools (Console, Elements) ជួយរកកំហុស។\n<strong>•</strong> Final Project ចាប់ផ្ដើមដោយ Project Plan, Penpot Design និង Project Folder ដែលមានរបៀប។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-08",
      "number": 8,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ៨",
      "title": "គម្រោងអនុវត្តការបង្កើតគេហទំព័រ",
      "fullTitle": "មេរៀនទី ៨ ៖ គម្រោងអនុវត្តការបង្កើតគេហទំព័រ",
      "kindLabel": "",
      "pageStart": 89,
      "pageEnd": 105,
      "objectives": [
        "ជ្រើសប្រធានបទ កំណត់គោលដៅ និងវិសាលភាព Website ឱ្យសមស្របនឹងពេលវេលា",
        "រៀបចំ Project Folder និង File Structure ឱ្យមានរបៀប",
        "បំលែង Penpot Design ទៅជា HTML Structure និងរចនាដោយ CSS",
        "រៀបចំ Responsive Layout និងបន្ថែម JavaScript Interaction យ៉ាងតិច ១–២ មុខងារ",
        "ធ្វើតេស្ត Debug និងអនុវត្ត Website Maintenance មូលដ្ឋាន (កែខ្លឹមសារ រៀបចំ File និង Backup)",
        "ត្រៀម Project សម្រាប់ការបង្ហាញ និងប្រគល់"
      ],
      "sections": [
        {
          "title": "៨.១. ការជ្រើសរើសប្រធានបទ និងកំណត់គោលដៅ Website",
          "items": [
            {
              "type": "paragraph",
              "text": "សិស្សជ្រើសប្រធានបទមួយក្នុងចំណោម ៤ ខាងក្រោម (ឬប្រធានបទផ្សេងដែលគ្រូយល់ព្រម)។ វិសាល ភាពត្រូវតែជា <strong>One-page Website</strong> ដែលអាចបញ្ចប់បានក្នុងម៉ោងសិក្សា។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ប្រធានបទ</strong>",
                "<strong>ផ្នែកខ្លឹមសារសំខាន់</strong>",
                "<strong>មុខងារ JavaScript ដែលណែនាំ</strong>"
              ],
              "rows": [
                [
                  "<strong>Personal Portfolio Website</strong>",
                  "អំពីខ្ញុំ ជំនាញ ស្នាដៃ (Projects) ទំនាក់ទំនង",
                  "Mobile Menu, Dark Mode"
                ],
                [
                  "<strong>Institute Information Website</strong>",
                  "អំពីវិទ្យាស្ថាន ជំនាញសិក្សា ព័ត៌មាន ការចុះឈ្មោះ",
                  "Mobile Menu, Form Validation"
                ],
                [
                  "<strong>Restaurant Website</strong>",
                  "អំពីហាង ម៉ឺនុយម្ហូប ម៉ោងបើក ការកក់តុ",
                  "Mobile Menu, Booking Form Validation"
                ],
                [
                  "<strong>Product Showcase Website</strong>",
                  "ផលិតផល លក្ខណៈពិសេស តម្លៃ ការបញ្ជាទិញ",
                  "Mobile Menu, ប៊ូតុងបង្ហាញព័ត៌មានបន្ថែម"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "វិសាលភាពអប្បបរមា ៖ <strong>Header + Navigation, Hero Section, About/Content Section, Contact Section និង Footer</strong>។ គោលដៅគួរសរសេរជាប្រយោគច្បាស់ ឧ. \"Website នេះជួយភ្ញៀវទេសចរមើលម៉ឺនុយ និងកក់តុនៅ Lotus Kitchen បានងាយស្រួលលើទូរស័ព្ទ\"។ ក្នុងមេរៀននេះ យើងប្រើគំរូ <strong>Restaurant Website ឈ្មោះ Lotus Kitchen</strong> ជាឧទាហរណ៍។"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-08/fig-01.webp",
              "caption": "រូបភាពទី ៨.១ ៖ លំហូរការងារ Final Website Project"
            }
          ]
        },
        {
          "title": "៨.២. ការរៀបចំ Project Folder និង File Structure",
          "items": [
            {
              "type": "code",
              "title": "រចនាសម្ព័ន្ធ Folder របស់គម្រោង Lotus Kitchen",
              "code": "lesson08_project/\n├── index.html\n├── css/\n│   └── style.css\n├── js/\n│   └── script.js\n└── images/          (រូបភាពរបស់គម្រោង ប្រសិនបើមាន)"
            },
            {
              "type": "paragraph",
              "text": "ក្នុង `index.html` ត្រូវភ្ជាប់ CSS ដោយ `<link rel=\"stylesheet\" href=\"css/style.css\">` ហើយ JavaScript ដោយ `<script src=\"js/script.js\"></script>`។ ចំណាំថា Path មានឈ្មោះ Folder `css/` និង `js/` នៅខាងមុខ។"
            }
          ]
        },
        {
          "title": "៨.៣. ការបំលែង Penpot Design ទៅជា HTML Structure",
          "items": [
            {
              "type": "paragraph",
              "text": "វិធីសាស្ត្រ ៖ មើល Design ពីលើចុះក្រោម ហើយកំណត់ផ្នែកធំៗ (Sections) ជាមុន បន្ទាប់មកកំណត់ Elements ក្នុងផ្នែកនីមួយៗ។ ចាប់ផ្ដើមដោយ HTML សុទ្ធ (គ្មាន CSS) ដើម្បីប្រាកដថាខ្លឹមសារ និងលំដាប់ ត្រឹមត្រូវ។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ផ្នែកក្នុង Penpot</strong>",
                "<strong>HTML Element</strong>",
                "<strong>ចំណាំ</strong>"
              ],
              "rows": [
                [
                  "<strong>Header + Menu</strong>",
                  "`<header>`, `<nav>`, `<ul>`, `<a>`",
                  "Link ទៅ `#about`, `#menu`, `#contact`"
                ],
                [
                  "<strong>Hero (ចំណងជើងធំ + ប៊ូតុង)</strong>",
                  "`<section class=\"hero\">`, `<h1>`, `<a class=\"btn\">`",
                  "មាន `<h1>` តែមួយក្នុងទំព័រ"
                ],
                [
                  "<strong>Cards (ម៉ឺនុយ/ផលិតផល)</strong>",
                  "`<article class=\"menu-item\">`",
                  "Component ក្នុង Penpot = Class ក្នុង CSS"
                ],
                [
                  "<strong>Contact Form</strong>",
                  "`<form>`, `<label>`, `<input>`, `<button>`",
                  "`id` សម្រាប់ JavaScript"
                ],
                [
                  "<strong>Footer</strong>",
                  "`<footer>`",
                  "Copyright និងអាសយដ្ឋាន"
                ]
              ]
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៨.១ ៖ index.html (Lotus Kitchen)",
              "code": "<!DOCTYPE html>\n<html lang=\"km\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Lotus Kitchen - ភោជនីយដ្ឋានខ្មែរ</title>\n  <link rel=\"stylesheet\" href=\"css/style.css\">\n</head>\n<body>\n  <!-- ===== Header & Navigation ===== -->\n  <header class=\"header\">\n    <a class=\"logo\" href=\"#home\">🪷 Lotus Kitchen</a>\n    <button class=\"menu-toggle\" id=\"menuToggle\" aria-label=\"បើកម៉ឺនុយ\">☰</button>\n    <nav>\n      <ul class=\"nav-links\" id=\"navLinks\">\n        <li><a href=\"#home\">ទំព័រដើម</a></li>\n        <li><a href=\"#about\">អំពីយើង</a></li>\n        <li><a href=\"#menu\">ម្ហូប</a></li>\n        <li><a href=\"#contact\">ទំនាក់ទំនង</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <!-- ===== Hero Section ===== -->\n  <section class=\"hero\" id=\"home\">\n    <h1>រសជាតិខ្មែរពិតៗ នៅសៀមរាប</h1>\n    <p>ម្ហូបស្រស់ឆ្ងាញ់ រៀបចំពីគ្រឿងផ្សំក្នុងស្រុក</p>\n    <a class=\"btn\" href=\"#menu\">មើលម៉ឺនុយ</a>\n  </section>\n\n  <!-- ===== About Section ===== -->\n  <section class=\"section\" id=\"about\">\n    <h2>អំពីយើង</h2>\n    <p>Lotus Kitchen បើកដំណើរការតាំងពីឆ្នាំ 2020 ដោយផ្ដល់ម្ហូបខ្មែរបែបប្រពៃណី\n       ក្នុងបរិយាកាសស្ងប់ស្ងាត់ និងតម្លៃសមរម្យសម្រាប់គ្រួសារ និងភ្ញៀវទេសចរ។</p>\n  </section>\n\n  <!-- ===== Menu Section ===== -->\n  <section class=\"section\" id=\"menu\">\n    <h2>ម្ហូបពេញនិយម</h2>\n    <div class=\"menu-grid\">\n      <article class=\"menu-item\">\n        <div class=\"icon\">🍲</div>\n        <h3>អាម៉ុកត្រី</h3>\n        <p>ត្រីចំហុយគ្រឿងការី និងខ្ទិះដូង</p>\n        <span class=\"price\">$5.00</span>\n      </article>\n      <article class=\"menu-item\">\n        <div class=\"icon\">🍜</div>\n        <h3>នំបញ្ចុកសម្លខ្មែរ</h3>\n        <p>សម្លប្រហើរ ជាមួយបន្លែស្រស់</p>\n        <span class=\"price\">$2.50</span>\n      </article>\n      <article class=\"menu-item\">\n        <div class=\"icon\">🥗</div>\n        <h3>ញាំស្វាយ</h3>\n        <p>ស្វាយខ្ចី ត្រីឆ្អើរ និងសណ្ដែកដី</p>\n        <span class=\"price\">$3.00</span>\n      </article>\n    </div>\n  </section>\n\n  <!-- ===== Contact Section ===== -->\n  <section class=\"section\" id=\"contact\">\n    <h2>ទំនាក់ទំនង / កក់តុ</h2>\n    <form id=\"bookingForm\" novalidate>\n      <label for=\"name\">ឈ្មោះ</label>\n      <input type=\"text\" id=\"name\">\n      <label for=\"phone\">លេខទូរស័ព្ទ</label>\n      <input type=\"tel\" id=\"phone\" placeholder=\"012 345 678\">\n      <label for=\"guests\">ចំនួនភ្ញៀវ</label>\n      <input type=\"number\" id=\"guests\" min=\"1\" max=\"20\">\n      <p class=\"form-message\" id=\"formMessage\"></p>\n      <button class=\"btn\" type=\"submit\">កក់តុ</button>\n    </form>\n  </section>\n\n  <!-- ===== Footer ===== -->\n  <footer class=\"footer\">\n    <p>&copy; 2026 Lotus Kitchen | ផ្លូវសម្ដេចតេជោ ក្រុងសៀមរាប</p>\n  </footer>\n\n  <script src=\"js/script.js\"></script>\n</body>\n</html>"
            }
          ]
        },
        {
          "title": "៨.៤. ការរចនាទំព័រដោយប្រើ CSS",
          "items": [
            {
              "type": "paragraph",
              "text": "សរសេរ CSS តាមលំដាប់ផ្នែកនៃទំព័រ ហើយដាក់ Comment បែងចែកផ្នែកនីមួយៗ ដើម្បីងាយថែទាំ។ ចម្លងពណ៌ (HEX) និងទំហំអក្សរពី Style Guide ក្នុង Penpot។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៨.២ ៖ css/style.css (ផ្នែកទី ១–៤)",
              "code": "/* ===== 1. Reset និងការកំណត់ទូទៅ ===== */\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Kantumruy Pro\", \"Khmer OS Siemreap\", sans-serif;\n  line-height: 1.6;\n  color: #2b2b2b;\n}\n\n/* ===== 2. Header និង Navigation ===== */\n.header {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 32px;\n  background-color: #14532d;\n  z-index: 10;\n}\n\n.logo {\n  color: #ffffff;\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n.nav-links {\n  display: flex;\n  gap: 20px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-links a {\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.nav-links a:hover {\n  color: #fcd34d;\n}\n\n.menu-toggle {\n  display: none;\n  font-size: 1.5rem;\n  background: none;\n  border: none;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n/* ===== 3. Hero Section ===== */\n.hero {\n  padding: 80px 24px;\n  text-align: center;\n  color: #ffffff;\n  background: linear-gradient(135deg, #14532d, #65a30d);\n}\n\n.hero h1 {\n  margin: 0 0 8px 0;\n  font-size: 2.2rem;\n}\n\n.btn {\n  display: inline-block;\n  padding: 10px 24px;\n  border: none;\n  border-radius: 24px;\n  background-color: #fcd34d;\n  color: #14532d;\n  font-family: inherit;\n  font-size: 1rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* ===== 4. Sections ===== */\n.section {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 48px 24px;\n}\n\n.section h2 {\n  color: #14532d;\n  text-align: center;\n}"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៨.៣ ៖ css/style.css (ផ្នែកទី ៥–៧)",
              "code": "/* ===== 5. Menu Grid ===== */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.menu-item {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: #f7fee7;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.menu-item .icon {\n  font-size: 2.5rem;\n}\n\n.price {\n  font-weight: bold;\n  color: #b45309;\n}\n\n/* ===== 6. Contact Form ===== */\n#bookingForm {\n  max-width: 420px;\n  margin: 0 auto;\n}\n\n#bookingForm label {\n  display: block;\n  margin-top: 10px;\n}\n\n#bookingForm input {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #a3a3a3;\n  border-radius: 6px;\n  font-family: inherit;\n}\n\n.form-message {\n  min-height: 1.6em;\n  font-weight: bold;\n}\n\n.form-message.error {\n  color: #c00000;\n}\n\n.form-message.success {\n  color: #15803d;\n}\n\n/* ===== 7. Footer ===== */\n.footer {\n  padding: 16px;\n  background-color: #14532d;\n  color: #ffffff;\n  text-align: center;\n}"
            },
            {
              "type": "paragraph",
              "text": "Property ថ្មីពីរដែលប្រើក្នុងគម្រោងនេះ ៖ `position: sticky; top: 0;` ធ្វើឱ្យ Header ជាប់នៅខាងលើពេល Scroll (ស្រដៀង `fixed` តែនៅក្នុងលំដាប់ធម្មតា) និង `linear-gradient()` បង្កើតផ្ទៃពណ៌ចម្រុះពីពណ៌មួយទៅពណ៌មួយ។ `scroll-behavior: smooth` ធ្វើឱ្យការចុច Link ក្នុងទំព័ររំកិលយឺតៗ។"
            }
          ]
        },
        {
          "title": "៨.៥. ការរៀបចំ Responsive Layout",
          "items": [
            {
              "type": "paragraph",
              "text": "លើ Mobile ៖ Menu ត្រូវលាក់ ហើយបង្ហាញប៊ូតុង ☰ ជំនួស; Cards ម៉ឺនុយត្រូវជាជួរឈរតែមួយ; ចំណងជើង Hero តូចជាងមុន។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៨.៤ ៖ css/style.css (ផ្នែកទី ៨ - Responsive)",
              "code": "/* ===== 8. Responsive (Mobile) ===== */\n@media (max-width: 768px) {\n  .header {\n    flex-wrap: wrap;\n    padding: 12px 16px;\n  }\n\n  .menu-toggle {\n    display: block;          /* បង្ហាញប៊ូតុង ☰ */\n  }\n\n  .header nav {\n    width: 100%;\n  }\n\n  .nav-links {\n    display: none;           /* លាក់ Menu ជាលំនាំដើម */\n    flex-direction: column;\n    gap: 0;\n    padding-top: 8px;\n  }\n\n  .nav-links.show {\n    display: flex;           /* JavaScript បន្ថែម Class \"show\" */\n  }\n\n  .nav-links a {\n    display: block;\n    padding: 8px 0;\n  }\n\n  .hero h1 {\n    font-size: 1.6rem;\n  }\n\n  .menu-grid {\n    grid-template-columns: 1fr;\n  }\n}"
            }
          ]
        },
        {
          "title": "៨.៦. ការបន្ថែម JavaScript Interaction",
          "items": [
            {
              "type": "paragraph",
              "text": "គម្រោងនេះមានមុខងារ JavaScript ពីរ ៖ (១) <strong>Mobile Menu Toggle</strong> — ចុច ☰ ដើម្បីបង្ហាញ/លាក់ Menu និង (២) <strong>Booking Form Validation</strong> — ពិនិត្យឈ្មោះ លេខទូរស័ព្ទ និងចំនួនភ្ញៀវ។"
            },
            {
              "type": "code",
              "title": "ឧទាហរណ៍កូដ ៨.៥ ៖ js/script.js",
              "code": "// ===== 1. Mobile Menu Toggle =====\nconst menuToggle = document.getElementById(\"menuToggle\");\nconst navLinks = document.getElementById(\"navLinks\");\n\nmenuToggle.addEventListener(\"click\", function () {\n  navLinks.classList.toggle(\"show\");\n});\n\n// បិទម៉ឺនុយវិញ ពេលចុចលើ Link ណាមួយ (សម្រាប់ Mobile)\nconst links = document.querySelectorAll(\".nav-links a\");\nfor (let i = 0; i < links.length; i++) {\n  links[i].addEventListener(\"click\", function () {\n    navLinks.classList.remove(\"show\");\n  });\n}\n\n// ===== 2. Booking Form Validation =====\nconst bookingForm = document.getElementById(\"bookingForm\");\nconst formMessage = document.getElementById(\"formMessage\");\n\nbookingForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n\n  const name = document.getElementById(\"name\").value.trim();\n  const phone = document.getElementById(\"phone\").value.trim();\n  const guests = Number(document.getElementById(\"guests\").value);\n\n  formMessage.classList.remove(\"error\", \"success\");\n\n  if (name === \"\" || phone === \"\") {\n    formMessage.textContent = \"សូមបំពេញឈ្មោះ និងលេខទូរស័ព្ទ\";\n    formMessage.classList.add(\"error\");\n  } else if (guests < 1 || guests > 20) {\n    formMessage.textContent = \"ចំនួនភ្ញៀវត្រូវនៅចន្លោះ 1 ដល់ 20 នាក់\";\n    formMessage.classList.add(\"error\");\n  } else {\n    formMessage.textContent = \"អរគុណ \" + name + \"! យើងនឹងទាក់ទងទៅលេខ \" + phone + \" ឆាប់ៗ។\";\n    formMessage.classList.add(\"success\");\n    bookingForm.reset();\n  }\n});"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-08/fig-02.webp",
              "caption": "រូបភាពទី ៨.២ ៖ លទ្ធផល Lotus Kitchen Website លើ Desktop"
            },
            {
              "type": "image",
              "src": "images/lessons/lesson-08/fig-03.webp",
              "caption": "រូបភាពទី ៨.៣ ៖ លទ្ធផលលើ Mobile ពេលចុចប៊ូតុង ☰ ដើម្បីបើក Menu"
            },
            {
              "type": "paragraph",
              "text": "លទ្ធផល ៖ លើ Desktop Menu បង្ហាញនៅខាងស្ដាំ Header ហើយម្ហូប ៣ មុខរៀបជា ៣ ជួរឈរ។ លើ Mobile Menu ត្រូវបានលាក់ ហើយពេលចុច ☰ Menu បង្ហាញជាជួរឈរ។ ពេលកក់តុដោយបំពេញ ឈ្មោះ `Dara`, ទូរស័ព្ទ `012345678` និងភ្ញៀវ `4` នាក់ សារពណ៌បៃតង \"អរគុណ Dara! យើងនឹងទាក់ទងទៅលេខ 012345678 ឆាប់ៗ។\" បង្ហាញ។ បើទុកប្រអប់ទទេ សារពណ៌ក្រហម \"សូមបំពេញឈ្មោះ និងលេខទូរស័ព្ទ\" បង្ហាញ។ (មុខងារទាំងនេះត្រូវបានសាកល្បងក្នុង Chrome)"
            }
          ]
        },
        {
          "title": "៨.៧. ការធ្វើតេស្ត Website និង Debugging",
          "items": [
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>✅ បញ្ជីត្រួតពិនិត្យការធ្វើតេស្ត (Testing Checklist) ៖</strong>\n☐ Link ទាំងអស់ក្នុង Navigation នាំទៅផ្នែកត្រឹមត្រូវ (#about, #menu, #contact)\n☐ រូបភាពទាំងអស់បង្ហាញ (គ្មានកំហុស 404 ក្នុង Console/Network) និងមាន `alt`\n☐ Layout ល្អលើ Desktop (≥ 1200px), Tablet (768px) និង Mobile (390px) តាម Device Toolbar\n☐ គ្មានរបាររំកិលផ្ដេក (Horizontal Scroll) លើ Mobile\n☐ Mobile Menu បើក/បិទបាន និងបិទវិញពេលចុច Link\n☐ Form បង្ហាញសារកំហុសពេលទិន្នន័យខុស និងសារជោគជ័យពេលត្រឹមត្រូវ\n☐ Console គ្មានសារ Error ពណ៌ក្រហម\n☐ សាកល្បងលើ Browser យ៉ាងតិច ២ (ឧ. Chrome និង Edge ឬ Firefox)\n☐ អក្សរខ្មែរបង្ហាញត្រឹមត្រូវ (មាន `<meta charset=\"UTF-8\">`) និងគ្មានកំហុសអក្ខរាវិរុទ្ធ"
            },
            {
              "type": "paragraph",
              "text": "ពេលរកឃើញកំហុស ត្រូវអនុវត្តតាមជំហាន Debug ក្នុងមេរៀនទី ៧ ៖ អានសារក្នុង Console → រកបន្ទាត់កំហុស → ពិនិត្យដោយ `console.log()` ឬផ្ទាំង Elements → កែម្ដងមួយចំណុច → សាកល្បងឡើងវិញ។ សិស្សក៏អាចផ្ទៀងផ្ទាត់ HTML ដោយ W3C Validator (`https://validator.w3.org/`)។"
            }
          ]
        },
        {
          "title": "៨.៨. Website Maintenance មូលដ្ឋាន",
          "items": [
            {
              "type": "paragraph",
              "text": "<strong>Website Maintenance (ការថែទាំគេហទំព័រ)</strong> គឺការធ្វើឱ្យ Website មានព័ត៌មានថ្មី ដំណើរការល្អ និងមានសុវត្ថិភាពជាប្រចាំ បន្ទាប់ពីបង្កើតរួច។ Website ដែលមិនថែទាំ នឹងមានព័ត៌មានហួសសម័យ Link ខូច និងធ្វើឱ្យអ្នកប្រើបាត់ទំនុកចិត្ត។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ការងារថែទាំ</strong>",
                "<strong>របៀបអនុវត្ត</strong>"
              ],
              "rows": [
                [
                  "<strong>កែប្រែអត្ថបទ</strong>",
                  "កែក្នុង `index.html` ត្រង់ផ្នែកដែលពាក់ព័ន្ធ (ប្រើ Ctrl + F ក្នុង VS Code ដើម្បីស្វែងរក) ឧ. ប្ដូរតម្លៃម្ហូប ម៉ោងបើក ឬលេខទូរស័ព្ទ"
                ],
                [
                  "<strong>ប្ដូររូបភាព</strong>",
                  "ដាក់រូបភាពថ្មីក្នុង `images/` (ទំហំសមល្មម ឧ. ទទឹង ≤ 1600px) ហើយកែ `src` និង `alt`; ឬប្រើឈ្មោះ File ដដែលដើម្បីជំនួស"
                ],
                [
                  "<strong>ប្ដូរពណ៌/រូបរាង</strong>",
                  "កែតែក្នុង `style.css`; ព្រោះ CSS ដាច់ដោយឡែក ការកែមួយកន្លែងប្ដូរគ្រប់ទំព័រ"
                ],
                [
                  "<strong>រៀបចំ File</strong>",
                  "រក្សា Folder `css/`, `js/`, `images/`; ឈ្មោះ File អក្សរតូច គ្មានដកឃ្លា; លុប File ដែលលែងប្រើ"
                ],
                [
                  "<strong>ពិនិត្យ Link</strong>",
                  "ចុចសាកល្បង Link ទាំងអស់ជាប្រចាំ ជាពិសេស Link ទៅ Website ខាងក្រៅ"
                ],
                [
                  "<strong>Backup</strong>",
                  "ចម្លង Project Folder ទាំងមូលជា ZIP ដាក់ឈ្មោះមានកាលបរិច្ឆេទ ឧ. `lotus-kitchen-2026-03-15.zip` ទុកលើ USB/Google Drive មុនពេលកែធំៗ"
                ],
                [
                  "<strong>កត់ត្រាការផ្លាស់ប្ដូរ</strong>",
                  "សរសេរ Comment ក្នុងកូដ ឬឯកសារ `changelog.txt` ថាបានកែអ្វី ពេលណា"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>ចំណេះដឹងបន្ថែម ៖ ការបោះពុម្ពផ្សាយ Website (Hosting) ៖</strong> ដើម្បីឱ្យអ្នកដទៃចូលមើល Website តាម Internet ត្រូវដាក់ឯកសារលើ <strong>Web Hosting</strong> (ម៉ាស៊ីនមេដែលបើក 24 ម៉ោង)។ សម្រាប់ Website ដែលមានតែ HTML, CSS និង JavaScript (Static Website) មានសេវាឥតគិតថ្លៃ ដែលអាច Upload Folder គម្រោងបានផ្ទាល់ ដូចជា Netlify ឬ GitHub Pages។ ប្រធានបទនេះមិនស្ថិតក្នុងម៉ោងស្នូលនៃវគ្គទេ ប៉ុន្តែសិស្សអាចស្វែងយល់បន្ថែម ដោយខ្លួនឯង។"
            }
          ]
        },
        {
          "title": "៨.៩. ការត្រៀមបង្ហាញ និងប្រគល់ Project",
          "items": [
            {
              "type": "bullets",
              "items": [
                "<strong>ប្រគល់ឯកសារ ៖</strong> Project Folder ទាំងមូល (ZIP) ដែលដាក់ឈ្មោះ ឈ្មោះសិស្ស`-final-project.zip` និង Link ឯកសារ Penpot (Share → Copy link)។",
                "<strong>ត្រៀមការបង្ហាញ ៖</strong> បើក Website ក្នុង Browser ជាមុន រៀបចំ Device Toolbar សម្រាប់បង្ហាញ Mobile និងបើក Penpot ក្នុង Tab មួយទៀត។",
                "<strong>ត្រៀមការពន្យល់ ៖</strong> ជ្រើសកូដ ៣ ចំណុចដែលចង់ពន្យល់ ៖ HTML Structure មួយ, CSS (Flexbox/Grid ឬ Media Query) មួយ និង JavaScript Function មួយ។",
                "<strong>ហាត់ពេលវេលា ៖</strong> ការបង្ហាញម្នាក់ប្រហែល ៣–៥ នាទី (មើលមេរៀនទី ៩)។"
              ]
            }
          ]
        },
        {
          "title": "បញ្ជីត្រួតពិនិត្យគម្រោង និងសំណួរវាយតម្លៃការអនុវត្ត (Project Checklist and Practical Assessment)",
          "items": [
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>📋 បញ្ជីត្រួតពិនិត្យគម្រោង (Project Checklist) ៖</strong>\n☐ មាន Penpot Design (Desktop និង Mobile) ដែលស្របនឹង Website\n☐ Project Folder មានរបៀប ៖ `index.html`, `css/style.css`, `js/script.js`, `images/`\n☐ HTML ប្រើ Semantic Elements (`header`, `nav`, `main`/`section`, `footer`) និងមាន `<h1>` តែមួយ\n☐ មានផ្នែក Header, Navigation, Hero, About/Content, Contact និង Footer\n☐ CSS ប្រើ External File, Flexbox ឬ Grid, និង Style Guide ស្របគ្នា\n☐ Responsive ៖ មាន Viewport Meta និង Media Query យ៉ាងតិច ១\n☐ JavaScript ៖ មានមុខងារយ៉ាងតិច ១–២ ដែលដំណើរការដោយគ្មាន Error\n☐ បានធ្វើតេស្តតាម Testing Checklist និងមាន Backup ZIP"
            },
            {
              "type": "short-questions",
              "title": "សំណួរវាយតម្លៃការអនុវត្ត (Practical Assessment Questions)",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "ចូរបង្ហាញ និងពន្យល់រចនាសម្ព័ន្ធ Project Folder របស់អ្នក។ ហេតុអ្វីត្រូវបំបែក CSS និង JavaScript ជា File ដាច់ដោយឡែក?",
                  "answer": "Folder មាន `index.html`, `css/style.css`, `js/script.js`, `images/`។ ការបំបែកធ្វើឱ្យកូដងាយអាន ងាយថែទាំ ប្រើឡើងវិញបាន និងកែរូបរាង ឬមុខងារដោយមិនប៉ះពាល់ HTML។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "ចូរបង្ហាញផ្នែកមួយក្នុង Penpot Design ហើយពន្យល់ពីរបៀបដែលអ្នកបំលែងវាទៅជា HTML និង CSS។",
                  "answer": "ឧ. Card ម៉ឺនុយក្នុង Penpot (Component) → `<article class=\"menu-item\">` ក្នុង HTML; ពណ៌ HEX, Border Radius, Shadow និងគម្លាតពី Penpot → Properties ក្នុង `.menu-item` របស់ CSS; Cards ៣ រៀបដោយ CSS Grid។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ចូរបង្ហាញ Website លើ Mobile (Device Toolbar) ហើយពន្យល់ Media Query ដែលអ្នកបានប្រើ។",
                  "answer": "`@media (max-width: 768px)` ប្ដូរ `.menu-grid` ទៅ `1fr` (ជួរឈរតែមួយ), លាក់ `.nav-links` និងបង្ហាញប៊ូតុង ☰, និងបង្រួមទំហំចំណងជើង Hero។"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "ចូរបង្ហាញមុខងារ JavaScript មួយ ហើយពន្យល់ Event, Element ដែលត្រូវជ្រើស និងការផ្លាស់ប្ដូរ DOM។",
                  "answer": "ឧ. Mobile Menu ៖ ជ្រើស `#menuToggle` និង `#navLinks` → `addEventListener(\"click\", ...)` → `navLinks.classList.toggle(\"show\")` ធ្វើឱ្យ CSS បង្ហាញ/លាក់ Menu។"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "ប្រសិនបើម្ចាស់ហាងចង់ប្ដូរតម្លៃម្ហូប និងបន្ថែមម្ហូបថ្មីមួយមុខ តើអ្នកត្រូវធ្វើអ្វីខ្លះ (Maintenance)?",
                  "answer": "Backup Project ជាមុន; កែតម្លៃក្នុង `<span class=\"price\">`; ចម្លង `<article class=\"menu-item\">` មួយ ហើយកែឈ្មោះ ការពិពណ៌នា និងតម្លៃ; ពិនិត្យ Layout លើ Desktop/Mobile; កត់ត្រាការផ្លាស់ប្ដូរ។"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ៨ (Lesson Summary) ៖</strong>\n<strong>•</strong> Final Project ជា One-page Website ដែលមាន Header, Navigation, Hero, Content, Contact និង Footer ដោយជ្រើសប្រធានបទសមស្រប។\n<strong>•</strong> Project Folder ស្តង់ដារ ៖ `index.html`, `css/`, `js/`, `images/`។\n<strong>•</strong> បំលែង Design ៖ Penpot Sections → Semantic HTML; Style Guide → CSS; Components → Classes។\n<strong>•</strong> Responsive ដោយ Media Query; JavaScript បន្ថែម Mobile Menu និង Form Validation។\n<strong>•</strong> ធ្វើតេស្តតាម Checklist, Debug ដោយ Developer Tools ហើយថែទាំដោយកែខ្លឹមសារ រៀបចំ File និង Backup ជាប្រចាំ។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-09",
      "number": 9,
      "isAppendix": false,
      "appendixNum": null,
      "label": "មេរៀនទី ៩",
      "title": "ការបង្ហាញគម្រោង និងការវាយតម្លៃចុងក្រោយ (Final Presentation and Assessment)",
      "fullTitle": "មេរៀនទី ៩ ៖ ការបង្ហាញគម្រោង និងការវាយតម្លៃចុងក្រោយ (Final Presentation and Assessment)",
      "kindLabel": "",
      "pageStart": 106,
      "pageEnd": 109,
      "objectives": [
        "ត្រៀមឯកសារ និងតំណភ្ជាប់ Project ឱ្យរួចរាល់មុនការបង្ហាញ",
        "បង្ហាញ Website និង Penpot Design ឱ្យមានលំដាប់ និងច្បាស់លាស់ក្នុងពេលកំណត់",
        "ពន្យល់ពី HTML, CSS និង JavaScript ដែលបានប្រើក្នុងគម្រោង",
        "ឆ្លើយសំណួរ និងទទួលមតិយោបល់ ដើម្បីកែលម្អការងារ"
      ],
      "sections": [
        {
          "title": "៩.១. ការត្រៀមឯកសារ និងតំណភ្ជាប់ Project",
          "items": [
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>📋 បញ្ជីត្រៀមមុនបង្ហាញ (Presentation Checklist) ៖</strong>\n☐ Website បើករួចក្នុង Browser (Chrome/Edge) និងដំណើរការដោយគ្មាន Error ក្នុង Console\n☐ Penpot Design បើករួចក្នុង Tab មួយទៀត (Desktop និង Mobile Boards)\n☐ VS Code បើក Project Folder ដើម្បីបង្ហាញកូដ\n☐ Device Toolbar (Ctrl + Shift + M) ត្រៀមសម្រាប់បង្ហាញទិដ្ឋភាព Mobile\n☐ File ZIP របស់ Project និង Link Penpot ត្រូវបានប្រគល់ឱ្យគ្រូរួច\n☐ ត្រៀមកូដ ៣ ចំណុចសម្រាប់ពន្យល់ (HTML, CSS, JavaScript)"
            }
          ]
        },
        {
          "title": "៩.២. ការបង្ហាញ Website និង Penpot Design",
          "items": [
            {
              "type": "paragraph",
              "text": "លំដាប់បង្ហាញដែលណែនាំ (៣–៤ នាទី) ៖"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ល.រ</strong>",
                "<strong>ផ្នែក</strong>",
                "<strong>ខ្លឹមសារត្រូវនិយាយ/បង្ហាញ</strong>",
                "<strong>ពេល</strong>"
              ],
              "rows": [
                [
                  "<strong>1</strong>",
                  "សេចក្ដីផ្ដើម",
                  "ឈ្មោះ ប្រធានបទ Website និងគោលដៅ (សម្រាប់អ្នកណា ដោះស្រាយបញ្ហាអ្វី)",
                  "30 វិនាទី"
                ],
                [
                  "<strong>2</strong>",
                  "Penpot Design",
                  "Style Guide (ពណ៌ អក្សរ) Layout និង Component សំខាន់",
                  "45 វិនាទី"
                ],
                [
                  "<strong>3</strong>",
                  "Website (Desktop)",
                  "Scroll ពីលើចុះក្រោម ចុច Navigation និងបង្ហាញផ្នែកនីមួយៗ",
                  "60 វិនាទី"
                ],
                [
                  "<strong>4</strong>",
                  "Website (Mobile)",
                  "បង្ហាញ Responsive Layout និង Mobile Menu",
                  "30 វិនាទី"
                ],
                [
                  "<strong>5</strong>",
                  "JavaScript",
                  "សាកល្បងមុខងារ (ឧ. Form Validation ពេលទិន្នន័យខុស និងត្រូវ)",
                  "30 វិនាទី"
                ],
                [
                  "<strong>6</strong>",
                  "សេចក្ដីសន្និដ្ឋាន",
                  "អ្វីដែលបានរៀន បញ្ហាដែលជួប និងអ្វីដែលចង់កែលម្អ",
                  "15 វិនាទី"
                ]
              ]
            }
          ]
        },
        {
          "title": "៩.៣. ការពន្យល់អំពី HTML, CSS និង JavaScript ដែលបានប្រើ",
          "items": [
            {
              "type": "paragraph",
              "text": "សិស្សត្រូវបង្ហាញកូដពិតប្រាកដក្នុង VS Code ហើយពន្យល់ដោយប្រើពាក្យបច្ចេកទេសត្រឹមត្រូវ ៖"
            },
            {
              "type": "bullets",
              "items": [
                "<strong>HTML ៖</strong> Semantic Elements ដែលបានប្រើ (`header`, `nav`, `section`, `footer`) និងរបៀបភ្ជាប់ CSS/JS។",
                "<strong>CSS ៖</strong> Flexbox ឬ Grid ដែលរៀបចំ Layout, Box Model (padding/margin) និង Media Query សម្រាប់ Mobile។",
                "<strong>JavaScript ៖</strong> Element ដែលត្រូវជ្រើស (`getElementById`/`querySelector`), Event (`click`/`submit`) និងការផ្លាស់ប្ដូរ DOM (`classList`, `textContent`)។"
              ]
            }
          ]
        },
        {
          "title": "៩.៤. ការឆ្លើយសំណួរ និងទទួលមតិយោបល់",
          "items": [
            {
              "type": "bullets",
              "items": [
                "ស្ដាប់សំណួរឱ្យចប់ ហើយឆ្លើយខ្លី ច្បាស់ ដោយបង្ហាញកូដ ឬទំព័រប្រកបជាមួយ។",
                "បើមិនដឹងចម្លើយ ត្រូវនិយាយដោយស្មោះត្រង់ ហើយប្រាប់ពីរបៀបដែលអ្នកនឹងស្វែងរកចម្លើយ (ឧ. MDN Web Docs)។",
                "កត់ត្រាមតិយោបល់ពីគ្រូ និងមិត្តភក្ដិ ហើយរៀបចំបញ្ជីការកែលម្អ (Improvement List) សម្រាប់ការថែទាំ Website បន្ត។",
                "ពេលផ្ដល់មតិដល់មិត្ត ប្រើទម្រង់ ៖ \"ចំណុចល្អ ១ + ចំណុចគួរកែលម្អ ១\"។"
              ]
            }
          ]
        },
        {
          "title": "៩.៥. ការវាយតម្លៃចុងក្រោយ",
          "items": [
            {
              "type": "paragraph",
              "text": "ការវាយតម្លៃវគ្គសិក្សាទាំងមូលមានសមាសភាគដូចខាងក្រោម។ ផ្នែក \"Final Website Project\" ត្រូវវាយតម្លៃដោយ Rubric នៅឧបសម្ព័ន្ធទី ៤។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ផ្នែកវាយតម្លៃ</strong>",
                "<strong>ពិន្ទុ</strong>"
              ],
              "rows": [
                [
                  "<strong>Penpot Design</strong>",
                  "15%"
                ],
                [
                  "<strong>HTML Structure</strong>",
                  "20%"
                ],
                [
                  "<strong>CSS Styling and Responsive Design</strong>",
                  "20%"
                ],
                [
                  "<strong>JavaScript Functionality</strong>",
                  "15%"
                ],
                [
                  "<strong>Final Website Project</strong>",
                  "20%"
                ],
                [
                  "<strong>Attendance and Practical Exercises</strong>",
                  "10%"
                ],
                [
                  "<strong>សរុប</strong>",
                  "<strong>100%</strong>"
                ]
              ]
            },
            {
              "type": "table",
              "headers": [
                "<strong>ឈ្មោះសិស្ស</strong>",
                "<strong>ប្រធានបទ Website</strong>",
                "<strong>Design (Penpot)</strong>",
                "<strong>Code (HTML/CSS/JS)</strong>",
                "<strong>Responsive</strong>",
                "<strong>ការបង្ហាញ/ពន្យល់</strong>"
              ],
              "rows": [
                [
                  "<strong>....................</strong>",
                  "....................",
                  "/5",
                  "/5",
                  "/5",
                  "/5"
                ],
                [
                  "<strong>....................</strong>",
                  "....................",
                  "/5",
                  "/5",
                  "/5",
                  "/5"
                ],
                [
                  "<strong>....................</strong>",
                  "....................",
                  "/5",
                  "/5",
                  "/5",
                  "/5"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "តារាងខាងលើជាទម្រង់កត់ពិន្ទុរហ័សពេលបង្ហាញ (រួម ២០ ពិន្ទុ) ដែលគ្រូអាចប្ដូរទៅជាពិន្ទុ Final Website Project (20%)។"
            }
          ]
        },
        {
          "title": "សំណួរវាយតម្លៃការបង្ហាញគម្រោង (Presentation Assessment Questions)",
          "items": [
            {
              "type": "short-questions",
              "title": "សំណួរដែលគ្រូអាចសួរពេលបង្ហាញ",
              "questions": [
                {
                  "number": 1,
                  "numberKh": "១",
                  "question": "តើ Website របស់អ្នកសម្រាប់អ្នកណា ហើយជួយដោះស្រាយបញ្ហាអ្វី?",
                  "answer": "ចម្លើយត្រូវបញ្ជាក់អ្នកប្រើគោលដៅ (ឧ. ភ្ញៀវទេសចរ សិស្សថ្មី) និងគោលដៅច្បាស់ (ឧ. មើលម៉ឺនុយ និងកក់តុបានលឿនលើទូរស័ព្ទ)។"
                },
                {
                  "number": 2,
                  "numberKh": "២",
                  "question": "តើ Style Guide ក្នុង Penpot (ពណ៌ និង Font) ត្រូវបានយកមកប្រើក្នុង CSS យ៉ាងដូចម្ដេច?",
                  "answer": "លេខកូដ HEX និងទំហំអក្សរពី Penpot ត្រូវបានចម្លងទៅ Properties `color`, `background-color`, `font-family`, `font-size` ក្នុង `style.css` ដើម្បីឱ្យ Website ដូច Design។"
                },
                {
                  "number": 3,
                  "numberKh": "៣",
                  "question": "ចូរបង្ហាញកូដ CSS ដែលធ្វើឱ្យ Layout ប្ដូរលើ Mobile ហើយពន្យល់វា។",
                  "answer": "បង្ហាញ `@media (max-width: 768px) { ... }` ហើយពន្យល់ថាពេលទទឹងអេក្រង់ ≤ 768px Grid ប្ដូរទៅ `1fr` និង Menu ប្ដូរជាជួរឈរ ឬលាក់ក្រោមប៊ូតុង ☰។"
                },
                {
                  "number": 4,
                  "numberKh": "៤",
                  "question": "តើ JavaScript ក្នុង Website របស់អ្នកឆ្លើយតបនឹង Event អ្វី ហើយប្ដូរអ្វីនៅក្នុង DOM?",
                  "answer": "ឧ. Event `submit` លើ Form → ពិនិត្យ `value` របស់ Input → ប្ដូរ `textContent` និង `classList` របស់ធាតុសារ ដើម្បីបង្ហាញសារកំហុស ឬជោគជ័យ។"
                },
                {
                  "number": 5,
                  "numberKh": "៥",
                  "question": "បើមានពេលបន្ថែម ១ សប្ដាហ៍ តើអ្នកនឹងកែលម្អ ឬថែទាំអ្វីខ្លះក្នុង Website?",
                  "answer": "ឧ. បន្ថែមទំព័រ/ផ្នែកថ្មី កែលម្អរូបភាព និង Contrast ពិនិត្យ Link និងអក្ខរាវិរុទ្ធ បន្ថែម Accessibility (alt, label) ធ្វើ Backup និងបោះពុម្ពផ្សាយលើ Hosting។"
                }
              ]
            },
            {
              "type": "callout",
              "kind": "note",
              "text": "<strong>សង្ខេបមេរៀនទី ៩ (Lesson Summary) ៖</strong>\n<strong>•</strong> ការត្រៀមល្អ (Website, Penpot, VS Code, Device Toolbar, ZIP និង Link) ធ្វើឱ្យការបង្ហាញរលូន។\n<strong>•</strong> បង្ហាញតាមលំដាប់ ៖ គោលដៅ → Penpot → Desktop → Mobile → JavaScript → សេចក្ដីសន្និដ្ឋាន ក្នុង ៣–៤ នាទី។\n<strong>•</strong> ពន្យល់កូដពិតប្រាកដដោយប្រើពាក្យបច្ចេកទេសត្រឹមត្រូវ (Semantic HTML, Flexbox/Grid, Media Query, Event, DOM)។\n<strong>•</strong> មតិយោបល់ក្លាយជាបញ្ជីកែលម្អសម្រាប់ការថែទាំ Website បន្ត។\n<strong>•</strong> ការវាយតម្លៃសរុប ៖ Penpot 15%, HTML 20%, CSS/Responsive 20%, JavaScript 15%, Final Project 20%, វត្តមាន និងលំហាត់ 10%។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-10",
      "number": 10,
      "isAppendix": true,
      "appendixNum": 1,
      "label": "ឧបសម្ព័ន្ធទី ១",
      "title": "តារាងផ្លូវកាត់ក្តារចុច (Keyboard Shortcuts Reference)",
      "fullTitle": "ឧបសម្ព័ន្ធទី ១ ៖ តារាងផ្លូវកាត់ក្តារចុច (Keyboard Shortcuts Reference)",
      "kindLabel": "Keyboard Shortcuts Reference",
      "pageStart": 110,
      "pageEnd": 113,
      "objectives": [],
      "sections": [
        {
          "title": "ខ្លឹមសារមេរៀន",
          "items": [
            {
              "type": "paragraph",
              "text": "ផ្លូវកាត់ក្ដារចុចខាងក្រោមជាផ្លូវកាត់លំនាំដើម (Default) សម្រាប់ប្រព័ន្ធប្រតិបត្តិការ Windows។ សម្រាប់ macOS ជាទូទៅប្ដូរ Ctrl → Cmd និង Alt → Option។ ផ្លូវកាត់អាចប្រែប្រួលតាមកំណែកម្មវិធី ឬការកំណត់ផ្ទាល់ខ្លួន ដូច្នេះអាចពិនិត្យបញ្ជីពេញក្នុងកម្មវិធីផ្ទាល់ ៖ Penpot (<strong>?</strong>), VS Code (<strong>Ctrl + K</strong> បន្ទាប់មក <strong>Ctrl + S</strong>)។"
            },
            {
              "type": "subsection",
              "title": "<strong>ក. Penpot</strong>"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ល.រ</strong>",
                "<strong>មុខងារ (Function)</strong>",
                "<strong>ផ្លូវកាត់</strong>",
                "<strong>ការពន្យល់ជាភាសាខ្មែរ</strong>"
              ],
              "rows": [
                [
                  "<strong>1</strong>",
                  "Move Tool",
                  "V",
                  "ជ្រើសរើស និងផ្លាស់ទីវត្ថុ"
                ],
                [
                  "<strong>2</strong>",
                  "Board Tool",
                  "B",
                  "បង្កើត Board (អេក្រង់)"
                ],
                [
                  "<strong>3</strong>",
                  "Rectangle Tool",
                  "R",
                  "គូររាងចតុកោណ"
                ],
                [
                  "<strong>4</strong>",
                  "Ellipse Tool",
                  "E",
                  "គូររាងរង្វង់/ពងក្រពើ"
                ],
                [
                  "<strong>5</strong>",
                  "Line Tool",
                  "L",
                  "គូរបន្ទាត់"
                ],
                [
                  "<strong>6</strong>",
                  "Path Tool",
                  "P",
                  "គូររាង Vector តាមចិត្ត"
                ],
                [
                  "<strong>7</strong>",
                  "Curve Tool",
                  "Shift + C",
                  "គូរបន្ទាត់ដោយដៃ (Freehand)"
                ],
                [
                  "<strong>8</strong>",
                  "Text Tool",
                  "T",
                  "វាយអក្សរ"
                ],
                [
                  "<strong>9</strong>",
                  "Image",
                  "Shift + K",
                  "នាំចូលរូបភាព"
                ],
                [
                  "<strong>10</strong>",
                  "Comments",
                  "C",
                  "បន្ថែមមតិយោបល់"
                ],
                [
                  "<strong>11</strong>",
                  "Add Flex Layout",
                  "Shift + A",
                  "រៀបវត្ថុជាជួរ (ដូច CSS Flexbox)"
                ],
                [
                  "<strong>12</strong>",
                  "Add Grid Layout",
                  "Ctrl + Shift + A",
                  "រៀបវត្ថុជាក្រឡា (ដូច CSS Grid)"
                ],
                [
                  "<strong>13</strong>",
                  "Create Component",
                  "Ctrl + K",
                  "បង្កើត Main Component"
                ],
                [
                  "<strong>14</strong>",
                  "Group / Ungroup",
                  "Ctrl + G / Shift + G",
                  "ដាក់ជាក្រុម / បំបែកក្រុម"
                ],
                [
                  "<strong>15</strong>",
                  "Duplicate",
                  "Ctrl + D",
                  "ចម្លងវត្ថុ"
                ],
                [
                  "<strong>16</strong>",
                  "Rename Layer",
                  "Alt + N",
                  "ប្ដូរឈ្មោះ Layer ដែលជ្រើស"
                ],
                [
                  "<strong>17</strong>",
                  "Export Shapes",
                  "Ctrl + Shift + E",
                  "នាំចេញ Layer ដែលជ្រើស"
                ],
                [
                  "<strong>18</strong>",
                  "Zoom to Fit All",
                  "Shift + 1",
                  "បង្ហាញវត្ថុទាំងអស់ពេញអេក្រង់"
                ],
                [
                  "<strong>19</strong>",
                  "Reset Zoom (100%)",
                  "Shift + 0",
                  "ទំហំពិត"
                ],
                [
                  "<strong>20</strong>",
                  "Show/Hide UI",
                  "\\",
                  "លាក់/បង្ហាញ Panels ទាំងអស់"
                ],
                [
                  "<strong>21</strong>",
                  "Undo / Redo",
                  "Ctrl + Z / Ctrl + Shift + Z",
                  "ត្រឡប់ក្រោយ / ធ្វើវិញ"
                ]
              ]
            },
            {
              "type": "subsection",
              "title": "<strong>ខ. Visual Studio Code</strong>"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ល.រ</strong>",
                "<strong>មុខងារ (Function)</strong>",
                "<strong>ផ្លូវកាត់</strong>",
                "<strong>ការពន្យល់ជាភាសាខ្មែរ</strong>"
              ],
              "rows": [
                [
                  "<strong>1</strong>",
                  "New File / Save",
                  "Ctrl + N / Ctrl + S",
                  "បង្កើត File ថ្មី / រក្សាទុក"
                ],
                [
                  "<strong>2</strong>",
                  "Quick Open",
                  "Ctrl + P",
                  "ស្វែងរក និងបើក File តាមឈ្មោះ"
                ],
                [
                  "<strong>3</strong>",
                  "Command Palette",
                  "Ctrl + Shift + P",
                  "ស្វែងរក និងដំណើរការពាក្យបញ្ជាទាំងអស់"
                ],
                [
                  "<strong>4</strong>",
                  "Toggle Sidebar",
                  "Ctrl + B",
                  "លាក់/បង្ហាញ Sidebar"
                ],
                [
                  "<strong>5</strong>",
                  "Explorer",
                  "Ctrl + Shift + E",
                  "បើកផ្ទាំង File Explorer"
                ],
                [
                  "<strong>6</strong>",
                  "Extensions",
                  "Ctrl + Shift + X",
                  "ស្វែងរក និងដំឡើង Extensions (ឧ. Live Server)"
                ],
                [
                  "<strong>7</strong>",
                  "Toggle Terminal",
                  "Ctrl + `",
                  "បើក/បិទ Terminal"
                ],
                [
                  "<strong>8</strong>",
                  "Find / Replace",
                  "Ctrl + F / Ctrl + H",
                  "ស្វែងរក / ស្វែងរក និងជំនួស"
                ],
                [
                  "<strong>9</strong>",
                  "Toggle Line Comment",
                  "Ctrl + /",
                  "ដាក់/ដក Comment លើបន្ទាត់"
                ],
                [
                  "<strong>10</strong>",
                  "Format Document",
                  "Shift + Alt + F",
                  "រៀបចំ Indentation កូដដោយស្វ័យប្រវត្តិ"
                ],
                [
                  "<strong>11</strong>",
                  "Move Line Up/Down",
                  "Alt + ↑ / Alt + ↓",
                  "ផ្លាស់ទីបន្ទាត់ឡើង/ចុះ"
                ],
                [
                  "<strong>12</strong>",
                  "Copy Line Down",
                  "Shift + Alt + ↓",
                  "ចម្លងបន្ទាត់ទៅខាងក្រោម"
                ],
                [
                  "<strong>13</strong>",
                  "Delete Line",
                  "Ctrl + Shift + K",
                  "លុបបន្ទាត់ទាំងមូល"
                ],
                [
                  "<strong>14</strong>",
                  "Add Next Occurrence",
                  "Ctrl + D",
                  "ជ្រើសពាក្យដូចគ្នាបន្ទាប់ (កែច្រើនកន្លែងក្នុងពេលតែមួយ)"
                ],
                [
                  "<strong>15</strong>",
                  "Toggle Word Wrap",
                  "Alt + Z",
                  "បត់បន្ទាត់វែងឱ្យសមនឹងអេក្រង់"
                ],
                [
                  "<strong>16</strong>",
                  "Undo / Redo",
                  "Ctrl + Z / Ctrl + Y",
                  "ត្រឡប់ក្រោយ / ធ្វើវិញ"
                ],
                [
                  "<strong>17</strong>",
                  "Emmet HTML5",
                  "វាយ ! រួចចុច Tab",
                  "បង្កើតរចនាសម្ព័ន្ធ HTML5 (ក្នុង File .html)"
                ]
              ]
            },
            {
              "type": "subsection",
              "title": "<strong>គ. Browser Developer Tools (Google Chrome / Microsoft Edge)</strong>"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ល.រ</strong>",
                "<strong>មុខងារ (Function)</strong>",
                "<strong>ផ្លូវកាត់</strong>",
                "<strong>ការពន្យល់ជាភាសាខ្មែរ</strong>"
              ],
              "rows": [
                [
                  "<strong>1</strong>",
                  "Open DevTools",
                  "F12 ឬ Ctrl + Shift + I",
                  "បើក Developer Tools"
                ],
                [
                  "<strong>2</strong>",
                  "Open Console",
                  "Ctrl + Shift + J",
                  "បើកផ្ទាំង Console ផ្ទាល់"
                ],
                [
                  "<strong>3</strong>",
                  "Inspect Element",
                  "Ctrl + Shift + C",
                  "ចុចលើ Element ក្នុងទំព័រដើម្បីពិនិត្យ"
                ],
                [
                  "<strong>4</strong>",
                  "Device Toolbar",
                  "Ctrl + Shift + M",
                  "សាកល្បងទំហំ Mobile/Tablet (ពេល DevTools បើក)"
                ],
                [
                  "<strong>5</strong>",
                  "Command Menu",
                  "Ctrl + Shift + P",
                  "ស្វែងរកពាក្យបញ្ជា DevTools (ពេល DevTools បើក)"
                ],
                [
                  "<strong>6</strong>",
                  "Clear Console",
                  "Ctrl + L",
                  "សម្អាតសារក្នុង Console"
                ],
                [
                  "<strong>7</strong>",
                  "Reload",
                  "F5 ឬ Ctrl + R",
                  "ផ្ទុកទំព័រឡើងវិញ"
                ],
                [
                  "<strong>8</strong>",
                  "Hard Reload",
                  "Ctrl + F5 ឬ Ctrl + Shift + R",
                  "ផ្ទុកឡើងវិញដោយមិនប្រើ Cache (ពេល CSS ថ្មីមិនបង្ហាញ)"
                ],
                [
                  "<strong>9</strong>",
                  "View Page Source",
                  "Ctrl + U",
                  "មើលកូដ HTML របស់ទំព័រ"
                ],
                [
                  "<strong>10</strong>",
                  "Zoom In / Out / Reset",
                  "Ctrl + + / Ctrl + - / Ctrl + 0",
                  "ពង្រីក / បង្រួម / ទំហំដើម"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-11",
      "number": 11,
      "isAppendix": true,
      "appendixNum": 2,
      "label": "ឧបសម្ព័ន្ធទី ២",
      "title": "វចនានុក្រមបច្ចេកទេស Web Development អង់គ្លេស-ខ្មែរ (Technical Glossary)",
      "fullTitle": "ឧបសម្ព័ន្ធទី ២ ៖ វចនានុក្រមបច្ចេកទេស Web Development អង់គ្លេស-ខ្មែរ (Technical Glossary)",
      "kindLabel": "Technical Glossary",
      "pageStart": 114,
      "pageEnd": 118,
      "objectives": [],
      "sections": [
        {
          "title": "ខ្លឹមសារមេរៀន",
          "items": [
            {
              "type": "paragraph",
              "text": "កម្រងពាក្យបច្ចេកទេសសំខាន់ៗដែលប្រើក្នុងសៀវភៅនេះ។ ពាក្យបកប្រែត្រូវបានប្រើស្របគ្នាពេញសៀវភៅ។ ក្នុងការអនុវត្តជាក់ស្ដែង អ្នកជំនាញភាគច្រើននៅតែប្រើពាក្យ អង់គ្លេសដើម។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ល.រ</strong>",
                "<strong>English Technical Term</strong>",
                "<strong>ពាក្យបកប្រែជាភាសាខ្មែរ</strong>",
                "<strong>ការពន្យល់អត្ថន័យ និងការប្រើប្រាស់</strong>"
              ],
              "rows": [
                [
                  "<strong>1</strong>",
                  "Alignment",
                  "ការតម្រឹម",
                  "ការរៀបវត្ថុ ឬអត្ថបទឱ្យត្រង់គ្នា (ឆ្វេង កណ្ដាល ស្ដាំ)"
                ],
                [
                  "<strong>2</strong>",
                  "Array",
                  "អារេ",
                  "បញ្ជីតម្លៃច្រើនក្នុង Variable តែមួយ; Index ចាប់ពី 0"
                ],
                [
                  "<strong>3</strong>",
                  "Attribute",
                  "លក្ខណៈ (Attribute)",
                  "ព័ត៌មានបន្ថែមក្នុងស្លាកបើក ឧ. `href`, `src`, `class`"
                ],
                [
                  "<strong>4</strong>",
                  "Backup",
                  "ការបម្រុងទុក",
                  "ការចម្លងឯកសារទុក ដើម្បីការពារការបាត់បង់"
                ],
                [
                  "<strong>5</strong>",
                  "Board",
                  "ផ្ទាំង Board (Board)",
                  "ផ្ទាំងក្នុង Penpot តំណាងអេក្រង់មួយ ដែលអាចផ្ទុក Layers ផ្សេងៗ"
                ],
                [
                  "<strong>6</strong>",
                  "Box Model",
                  "គំរូប្រអប់",
                  "Content + Padding + Border + Margin"
                ],
                [
                  "<strong>7</strong>",
                  "Breakpoint",
                  "ចំណុចបំបែក",
                  "ទទឹងអេក្រង់ដែល Layout ប្ដូរ ឧ. 768px"
                ],
                [
                  "<strong>8</strong>",
                  "Browser",
                  "កម្មវិធីរុករក",
                  "កម្មវិធីបើក Website ឧ. Chrome, Edge"
                ],
                [
                  "<strong>9</strong>",
                  "Cascade",
                  "ការហូរចុះតាមលំដាប់",
                  "ក្បួនសម្រេចថា CSS Rule មួយណាឈ្នះ"
                ],
                [
                  "<strong>10</strong>",
                  "Class",
                  "ថ្នាក់ (Class)",
                  "ឈ្មោះក្រុមសម្រាប់ Style ដែលប្រើឡើងវិញ (`.card`)"
                ],
                [
                  "<strong>11</strong>",
                  "Client",
                  "ម៉ាស៊ីនភ្ញៀវ",
                  "ឧបករណ៍/Browser ដែលស្នើសុំទំព័រពី Server"
                ],
                [
                  "<strong>12</strong>",
                  "Component",
                  "សមាសធាតុ (Component)",
                  "ធាតុរចនាក្នុង Penpot ដែលប្រើឡើងវិញបាន"
                ],
                [
                  "<strong>13</strong>",
                  "Conditional Statement",
                  "សេចក្ដីថ្លែងលក្ខខណ្ឌ",
                  "`if`, `else if`, `else` សម្រាប់ការសម្រេចចិត្ត"
                ],
                [
                  "<strong>14</strong>",
                  "Console",
                  "ផ្ទាំងបញ្ជា (Console)",
                  "កន្លែងបង្ហាញ `console.log()` និងកំហុស JavaScript"
                ],
                [
                  "<strong>15</strong>",
                  "Data Type",
                  "ប្រភេទទិន្នន័យ",
                  "String, Number, Boolean, Undefined, Null"
                ],
                [
                  "<strong>16</strong>",
                  "Debugging",
                  "ការរកនិងកែកំហុស",
                  "ដំណើរការរក មូលហេតុ និងកែកំហុសកូដ"
                ],
                [
                  "<strong>17</strong>",
                  "Developer Tools",
                  "ឧបករណ៍អ្នកអភិវឌ្ឍ",
                  "ឧបករណ៍ក្នុង Browser (F12) សម្រាប់ពិនិត្យ និង Debug"
                ],
                [
                  "<strong>18</strong>",
                  "Display",
                  "ការបង្ហាញ",
                  "CSS Property កំណត់របៀបបង្ហាញ (block, inline...)"
                ],
                [
                  "<strong>19</strong>",
                  "DOM (Document Object Model)",
                  "គំរូវត្ថុឯកសារ",
                  "គំរូទំព័រជា Tree នៃ Objects ដែល JavaScript កែបាន"
                ],
                [
                  "<strong>20</strong>",
                  "Element",
                  "ធាតុ (Element)",
                  "ផ្នែកនៃ HTML ៖ ស្លាកបើក + ខ្លឹមសារ + ស្លាកបិទ"
                ],
                [
                  "<strong>21</strong>",
                  "Event",
                  "ព្រឹត្តិការណ៍",
                  "សកម្មភាពលើទំព័រ ឧ. click, submit, input"
                ],
                [
                  "<strong>22</strong>",
                  "Event Listener",
                  "អ្នកស្ដាប់ព្រឹត្តិការណ៍",
                  "កូដដែលរង់ចាំ Event ហើយដំណើរការ Function"
                ],
                [
                  "<strong>23</strong>",
                  "Flex Layout",
                  "ប្លង់បត់បែន (Flex Layout)",
                  "មុខងារ Penpot រៀបវត្ថុជាជួរដេក ឬជួរឈរ តាមគោលការណ៍ CSS Flexbox"
                ],
                [
                  "<strong>24</strong>",
                  "Flexbox",
                  "ប្លង់បត់បែន (Flexbox)",
                  "CSS Layout រៀប Items តាមទិសមួយ"
                ],
                [
                  "<strong>25</strong>",
                  "Form",
                  "ទម្រង់បែបបទ",
                  "ផ្នែកទទួលទិន្នន័យពីអ្នកប្រើ (`<form>`)"
                ],
                [
                  "<strong>26</strong>",
                  "Form Validation",
                  "ការផ្ទៀងផ្ទាត់ទម្រង់",
                  "ការពិនិត្យទិន្នន័យ Form មុនទទួលយក"
                ],
                [
                  "<strong>27</strong>",
                  "Front-end",
                  "ផ្នែកខាងមុខ",
                  "ផ្នែក Website ដែលអ្នកប្រើមើលឃើញលើ Browser"
                ],
                [
                  "<strong>28</strong>",
                  "Function",
                  "អនុគមន៍",
                  "ក្រុមកូដមានឈ្មោះ ដែលហៅប្រើឡើងវិញបាន"
                ],
                [
                  "<strong>29</strong>",
                  "Grid",
                  "ក្រឡាចត្រង្គ (Grid)",
                  "CSS Layout រៀប Items តាមជួរដេក និងជួរឈរ"
                ],
                [
                  "<strong>30</strong>",
                  "Hosting",
                  "សេវាផ្ទុក Website",
                  "ម៉ាស៊ីនមេដែលផ្ទុក Website ឱ្យចូលមើលតាម Internet"
                ],
                [
                  "<strong>31</strong>",
                  "Hover",
                  "ការដាក់ Mouse ពីលើ",
                  "ស្ថានភាព `:hover` ពេល Mouse នៅលើ Element"
                ],
                [
                  "<strong>32</strong>",
                  "HTML",
                  "ភាសាសម្គាល់អត្ថបទ",
                  "HyperText Markup Language សម្រាប់រចនាសម្ព័ន្ធទំព័រ"
                ],
                [
                  "<strong>33</strong>",
                  "Index",
                  "លេខរៀង (Index)",
                  "ទីតាំងធាតុក្នុង Array (ចាប់ពី 0)"
                ],
                [
                  "<strong>34</strong>",
                  "Inheritance",
                  "ការបន្តតំណ",
                  "Element កូនទទួល Style ខ្លះពី Element មេ"
                ],
                [
                  "<strong>35</strong>",
                  "Instance",
                  "ច្បាប់ចម្លង (Copy/Instance)",
                  "ច្បាប់ចម្លងរបស់ Main Component ក្នុង Penpot"
                ],
                [
                  "<strong>36</strong>",
                  "Layer",
                  "ស្រទាប់",
                  "វត្ថុនីមួយៗក្នុង Penpot ដែលបង្ហាញក្នុង Layers Panel"
                ],
                [
                  "<strong>37</strong>",
                  "Layout",
                  "ប្លង់",
                  "ការរៀបចំទីតាំងផ្នែកនានានៃទំព័រ"
                ],
                [
                  "<strong>38</strong>",
                  "Loop",
                  "រង្វិលជុំ",
                  "ការធ្វើកូដដដែលៗ (`for`, `while`)"
                ],
                [
                  "<strong>39</strong>",
                  "Margin",
                  "គម្លាតខាងក្រៅ",
                  "ចន្លោះខាងក្រៅស៊ុមរបស់ Element"
                ],
                [
                  "<strong>40</strong>",
                  "Media Query",
                  "សំណួរមេឌៀ (Media Query)",
                  "CSS `@media` ប្ដូរ Style តាមទំហំអេក្រង់"
                ],
                [
                  "<strong>41</strong>",
                  "Mockup",
                  "គំរូរចនា",
                  "Design លម្អិតដែលមានពណ៌ អក្សរ រូបភាព"
                ],
                [
                  "<strong>42</strong>",
                  "Operator",
                  "សញ្ញាប្រមាណវិធី",
                  "សញ្ញាគណនា/ប្រៀបធៀប ឧ. `+`, `===`, `&&`"
                ],
                [
                  "<strong>43</strong>",
                  "Padding",
                  "គម្លាតខាងក្នុង",
                  "ចន្លោះរវាងខ្លឹមសារ និងស៊ុម"
                ],
                [
                  "<strong>44</strong>",
                  "Parameter",
                  "ប៉ារ៉ាម៉ែត្រ",
                  "ទិន្នន័យបញ្ជូនចូល Function"
                ],
                [
                  "<strong>45</strong>",
                  "Position",
                  "ទីតាំង",
                  "CSS Property: static, relative, absolute, fixed"
                ],
                [
                  "<strong>46</strong>",
                  "Property",
                  "លក្ខណៈសម្បត្តិ",
                  "ឈ្មោះ Style ក្នុង CSS ឧ. `color`, `margin`"
                ],
                [
                  "<strong>47</strong>",
                  "Prototype",
                  "គំរូសាកល្បង",
                  "Design ដែលអាចចុចសាកល្បងលំហូរបាន"
                ],
                [
                  "<strong>48</strong>",
                  "Responsive Design",
                  "ការរចនាឆ្លើយតបតាមអេក្រង់",
                  "Website បង្ហាញល្អលើគ្រប់ទំហំអេក្រង់"
                ],
                [
                  "<strong>49</strong>",
                  "Return Value",
                  "តម្លៃត្រឡប់",
                  "លទ្ធផលដែល Function ផ្ដល់មកវិញដោយ `return`"
                ],
                [
                  "<strong>50</strong>",
                  "Selector",
                  "ឧបករណ៍ជ្រើស (Selector)",
                  "ផ្នែក CSS ជ្រើស Element ត្រូវកំណត់ Style"
                ],
                [
                  "<strong>51</strong>",
                  "Semantic HTML",
                  "HTML មានអត្ថន័យ",
                  "ប្រើ Elements ដែលបង្ហាញតួនាទី (`header`, `nav`...)"
                ],
                [
                  "<strong>52</strong>",
                  "Server",
                  "ម៉ាស៊ីនមេ",
                  "កុំព្យូទ័រដែលផ្ដល់ឯកសារ Website"
                ],
                [
                  "<strong>53</strong>",
                  "Specificity",
                  "ភាពជាក់លាក់",
                  "កម្រិតខ្លាំងរបស់ Selector (ID > Class > Element)"
                ],
                [
                  "<strong>54</strong>",
                  "Style Guide",
                  "មគ្គុទ្ទេសក៍រចនាប័ទ្ម",
                  "ក្បួនពណ៌ អក្សរ និងគម្លាតសម្រាប់ Website"
                ],
                [
                  "<strong>55</strong>",
                  "Tag",
                  "ស្លាក",
                  "`<p>`, `</p>` សម្រាប់សម្គាល់ Element"
                ],
                [
                  "<strong>56</strong>",
                  "Typography",
                  "ការរចនាអក្សរ",
                  "ការជ្រើស Font ទំហំ និងគម្លាតអក្សរ"
                ],
                [
                  "<strong>57</strong>",
                  "UI (User Interface)",
                  "ចំណុចប្រទាក់អ្នកប្រើ",
                  "អ្វីដែលអ្នកប្រើមើលឃើញ និងប៉ះពាល់"
                ],
                [
                  "<strong>58</strong>",
                  "URL",
                  "អាសយដ្ឋានបណ្ដាញ",
                  "អាសយដ្ឋាន Website ឧ. `https://example.com`"
                ],
                [
                  "<strong>59</strong>",
                  "UX (User Experience)",
                  "បទពិសោធន៍អ្នកប្រើ",
                  "ភាពងាយស្រួល និងអារម្មណ៍ពេលប្រើ Website"
                ],
                [
                  "<strong>60</strong>",
                  "Value",
                  "តម្លៃ",
                  "តម្លៃនៃ CSS Property ឬ Variable"
                ],
                [
                  "<strong>61</strong>",
                  "Variable",
                  "អថេរ",
                  "ប្រអប់រក្សាទុកទិន្នន័យ (`let`, `const`)"
                ],
                [
                  "<strong>62</strong>",
                  "Viewport",
                  "ផ្ទៃមើលឃើញ",
                  "ផ្ទៃអេក្រង់ដែលបង្ហាញទំព័រក្នុង Browser"
                ],
                [
                  "<strong>63</strong>",
                  "Website Maintenance",
                  "ការថែទាំគេហទំព័រ",
                  "ការកែប្រែ ពិនិត្យ និង Backup Website ជាប្រចាំ"
                ],
                [
                  "<strong>64</strong>",
                  "Wireframe",
                  "គ្រោងប្លង់",
                  "គំនូរសាមញ្ញបង្ហាញទីតាំងផ្នែកនានា (គ្មានពណ៌លម្អិត)"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-12",
      "number": 12,
      "isAppendix": true,
      "appendixNum": 3,
      "label": "ឧបសម្ព័ន្ធទី ៣",
      "title": "កម្រងចម្លើយមេរៀន (Official Answer Key)",
      "fullTitle": "ឧបសម្ព័ន្ធទី ៣ ៖ កម្រងចម្លើយមេរៀន (Official Answer Key)",
      "kindLabel": "Official Answer Key",
      "pageStart": 119,
      "pageEnd": 124,
      "objectives": [],
      "sections": [
        {
          "title": "ខ្លឹមសារមេរៀន",
          "items": [
            {
              "type": "paragraph",
              "text": "កម្រងចម្លើយផ្លូវការសម្រាប់សំណួរពហុជ្រើសរើស (MCQs) នៃមេរៀនទី ១ ដល់ទី ៧ និងចម្លើយគំរូ សម្រាប់សំណួរត្រិះរិះ និងឆ្លើយខ្លី ព្រមទាំងសំណួរវាយតម្លៃការអនុវត្តក្នុងមេរៀនទី ៨ និងទី ៩។"
            }
          ]
        },
        {
          "title": "ក. ចម្លើយសំណួរពហុជ្រើសរើស (Multiple Choice Questions)",
          "items": [
            {
              "type": "table",
              "headers": [
                "<strong>មេរៀន</strong>",
                "<strong>សំណួរ ១</strong>",
                "<strong>សំណួរ ២</strong>",
                "<strong>សំណួរ ៣</strong>",
                "<strong>សំណួរ ៤</strong>",
                "<strong>សំណួរ ៥</strong>"
              ],
              "rows": [
                [
                  "<strong>មេរៀនទី ១</strong>",
                  "B",
                  "C",
                  "C",
                  "B",
                  "D"
                ],
                [
                  "<strong>មេរៀនទី ២</strong>",
                  "C",
                  "B",
                  "C",
                  "B",
                  "D"
                ],
                [
                  "<strong>មេរៀនទី ៣</strong>",
                  "B",
                  "C",
                  "C",
                  "B",
                  "C"
                ],
                [
                  "<strong>មេរៀនទី ៤</strong>",
                  "C",
                  "B",
                  "C",
                  "C",
                  "B"
                ],
                [
                  "<strong>មេរៀនទី ៥</strong>",
                  "B",
                  "B",
                  "B",
                  "B",
                  "C"
                ],
                [
                  "<strong>មេរៀនទី ៦</strong>",
                  "B",
                  "A",
                  "B",
                  "B",
                  "C"
                ],
                [
                  "<strong>មេរៀនទី ៧</strong>",
                  "B",
                  "C",
                  "B",
                  "C",
                  "B"
                ]
              ]
            }
          ]
        },
        {
          "title": "ខ. ចម្លើយគំរូសំណួរត្រិះរិះ និងឆ្លើយខ្លី (Short Answer Questions)",
          "items": [
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយខាងក្រោមជាចម្លើយគំរូ (Model Answers)។ គ្រូអាចទទួលយកចម្លើយរបស់សិស្សដែលមានន័យត្រឹមត្រូវ ទោះបីប្រើពាក្យខុសគ្នាក៏ដោយ។"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ១ ៖ ការចាប់ផ្ដើមជាមួយ Penpot និងការរចនាចំណុចប្រទាក់គេហទំព័រ</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ចូរពន្យល់ដោយខ្លីពីដំណើរការរវាង Browser និង Web Server នៅពេលយើងបើក Website មួយ។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Browser (Client) ផ្ញើសំណើ (HTTP Request) ទៅ Web Server តាម URL។ Server ផ្ញើឯកសារ HTML, CSS, JavaScript និងរូបភាពត្រឡប់មកវិញ (Response) ហើយ Browser បកប្រែឯកសារទាំងនោះ ដើម្បីបង្ហាញជាគេហទំព័រ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូររៀបរាប់ភាពខុសគ្នារវាង UI និង UX ព្រមទាំងផ្ដល់ឧទាហរណ៍មួយ។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ UI ជារូបរាងដែលមើលឃើញ (ពណ៌ អក្សរ ប៊ូតុង) រីឯ UX ជាភាពងាយស្រួល និងអារម្មណ៍ពេលប្រើ។ ឧ. ប៊ូតុងពណ៌ខៀវស្អាតជា UI ប៉ុន្តែការដាក់ប៊ូតុងនៅកន្លែងដែលងាយរកឃើញជា UX។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ហេតុអ្វីបានជាគួររចនាក្នុង Penpot មុនពេលសរសេរកូដ HTML និង CSS?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ដើម្បីមើលឃើញប្លង់ ពណ៌ និងលំហូររួមជាមុន កែប្រែបានលឿនដោយមិនចាំបាច់កែកូដ អាចបង្ហាញ ឬសាកល្បងជាមួយអ្នកប្រើ/គ្រូ ហើយប្រើជាឯកសារណែនាំពេលសរសេរកូដ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. តើ Style Guide មានធាតុអ្វីខ្លះ? ហេតុអ្វីវាសំខាន់?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ មានពណ៌ (Primary, Accent, Background, Text) ពុម្ពអក្សរ និងទំហំអក្សរ និងគម្លាត (Spacing)។ វាធ្វើឱ្យ Design ស៊ីសង្វាក់គ្នាគ្រប់ទំព័រ និងងាយបំលែងទៅជា CSS។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. ចូររៀបរាប់ជំហានបង្កើត Prototype ពី Board \"Home\" ទៅ Board \"About\"។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ បើកផ្ទាំង Prototype → ជ្រើសប៊ូតុងក្នុង Home → អូសខ្សែភ្ជាប់ទៅ Board About → កំណត់ On click → Navigate to → About និង Animation → ចុច ▷ (View mode) ដើម្បីសាកល្បង។"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ២ ៖ មូលដ្ឋានគ្រឹះ HTML</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ហេតុអ្វីបានជា HTML ត្រូវបានហៅថា Markup Language មិនមែន Programming Language?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ព្រោះ HTML គ្រាន់តែសម្គាល់ខ្លឹមសារដោយស្លាក ដើម្បីប្រាប់ពីរចនាសម្ព័ន្ធ និងតួនាទីរបស់វា ដោយគ្មានការគណនា លក្ខខណ្ឌ ឬរង្វិលជុំដូចភាសាសរសេរកម្មវិធី។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូរពន្យល់ភាពខុសគ្នារវាង</strong> `<head>` <strong>និង</strong> `<body>`<strong>។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `<head>` ផ្ទុកព័ត៌មានអំពីទំព័រ (meta, title, link CSS) ដែលមិនបង្ហាញលើផ្ទៃទំព័រ; `<body>` ផ្ទុកខ្លឹមសារទាំងអស់ដែលអ្នកប្រើមើលឃើញ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ហេតុអ្វីគួរដាក់ Attribute</strong> `alt` <strong>ឱ្យរូបភាពជានិច្ច?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ដើម្បីបង្ហាញអត្ថបទជំនួសពេលរូបភាពមិនដំណើរការ ជួយកម្មវិធីអានអេក្រង់សម្រាប់អ្នកពិការភ្នែក និងជួយម៉ាស៊ីនស្វែងរកយល់ពីរូបភាព។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. ចូរសរសេរកូដ HTML សម្រាប់តំណភ្ជាប់ទៅ</strong> `https://www.google.com` <strong>ដែលបើកក្នុង Tab ថ្មី។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `<a href=\"https://www.google.com\" target=\"_blank\">Google</a>`"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. ចូររៀបរាប់អត្ថប្រយោជន៍ ៣ នៃការប្រើ Semantic HTML។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ធ្វើឱ្យកូដងាយអាន និងថែទាំ; ជួយម៉ាស៊ីនស្វែងរក (SEO) យល់ពីខ្លឹមសារ; ជួយកម្មវិធីអានអេក្រង់ (Accessibility) រុករកទំព័របានល្អ។"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ៣ ៖ HTML Forms និងការណែនាំអំពី CSS</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ហេតុអ្វីគួរប្រើ</strong> `type=\"email\"` <strong>ជំនួស</strong> `type=\"text\"` <strong>សម្រាប់ប្រអប់ Email?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Browser ពិនិត្យទម្រង់ Email (មាន @) ដោយស្វ័យប្រវត្តិ ហើយទូរស័ព្ទបង្ហាញក្ដារចុចដែលមានសញ្ញា @ ធ្វើឱ្យបញ្ចូលងាយ និងកាត់បន្ថយកំហុស។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូរពន្យល់ភាពខុសគ្នារវាង</strong> `placeholder` <strong>និង</strong> `<label>`<strong>។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `<label>` ជាឈ្មោះប្រអប់ដែលបង្ហាញជានិច្ច និងភ្ជាប់ជាមួយ Input; `placeholder` ជាអត្ថបទណែនាំក្នុងប្រអប់ ដែលបាត់ពេលចាប់ផ្ដើមវាយ ដូច្នេះមិនគួរប្រើជំនួស Label។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ចូរសរសេរ Tag សម្រាប់ភ្ជាប់ឯកសារ</strong> `style.css` <strong>ទៅ HTML និងប្រាប់ទីតាំងដែលត្រូវដាក់។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `<link rel=\"stylesheet\" href=\"style.css\">` ដាក់នៅក្នុង `<head>`។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. ចូរពន្យល់ភាពខុសគ្នារវាង Class Selector និង ID Selector។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Class Selector (`.name`) ជ្រើស Element ច្រើនដែលមាន Class ដូចគ្នា ហើយប្រើឡើងវិញបាន; ID Selector (`#name`) ជ្រើស Element តែមួយ ព្រោះ id ត្រូវតែមានតែមួយក្នុងទំព័រ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. ចូរសរសេរ CSS ដែលធ្វើឱ្យគ្រប់</strong> `<p>` <strong>មានអក្សរពណ៌ស និងផ្ទៃពណ៌</strong> `#002060`<strong>។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `p { color: #ffffff; background-color: #002060; }`"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ៤ ៖ ការរចនាគេហទំព័រដោយប្រើ CSS</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ចូរពន្យល់ពាក្យ Cascade ក្នុង CSS និងច្បាប់ ២ ដែលកំណត់ថា Rule មួយណាឈ្នះ។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Cascade ជារបៀបដែល Browser សម្រេចចិត្តពេល Rules ច្រើនកំណត់ Property ដូចគ្នា។ ច្បាប់ ៖ (១) Specificity — ID ខ្លាំងជាង Class ហើយ Class ខ្លាំងជាង Element; (២) Order — បើកម្រិតស្មើគ្នា Rule ខាងក្រោយឈ្នះ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូរគណនាទទឹងសរុបនៃ</strong> `.box { width: 200px; padding: 10px; border: 2px solid; margin: 20px; }` <strong>ក្នុង</strong> `content-box` <strong>(មិនរាប់ Margin)។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ 200 + 10×2 + 2×2 = 224px។ (Margin 20px នៅខាងក្រៅ មិនរាប់ក្នុងទទឹងប្រអប់ដែលមើលឃើញ)"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ចូរពន្យល់ភាពខុសគ្នារវាង Margin និង Padding។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Padding ជាគម្លាតខាងក្នុងស៊ុម ហើយមានពណ៌ផ្ទៃខាងក្រោយ; Margin ជាគម្លាតខាងក្រៅស៊ុម ដើម្បីឃ្លាតពី Elements ផ្សេង ហើយថ្លាជានិច្ច។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. ហេតុអ្វីគេនិយមប្រើ</strong> `box-sizing: border-box;`<strong>?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ព្រោះ width ដែលកំណត់រាប់បញ្ចូល Padding និង Border រួចហើយ ធ្វើឱ្យងាយគណនាទំហំ និងរៀបចំប្លង់ ដោយមិនឱ្យ Element ធំលើសការរំពឹងទុក។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. ចូរសរសេរ CSS សម្រាប់ Class</strong> `.btn` <strong>ដែលមានផ្ទៃពណ៌</strong> `#002060` <strong>អក្សរពណ៌ស Padding 10px 20px ជ្រុងមូល 6px និងគ្មានបន្ទាត់ក្រោម។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `.btn { display: inline-block; background-color: #002060; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; }`"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ៥ ៖ ការរៀបចំ Layout និង Responsive Website ព្រមទាំងសេចក្ដីផ្ដើម JavaScript</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ចូរប្រៀបធៀប Flexbox និង CSS Grid ហើយផ្ដល់ឧទាហរណ៍ពេលប្រើនីមួយៗ។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Flexbox រៀបតាមទិសមួយ (ជួរដេក ឬជួរឈរ) សមសម្រាប់ Navigation Bar ឬជួរប៊ូតុង; Grid រៀបតាមពីរទិស (ជួរដេក និងជួរឈរ) សមសម្រាប់ Gallery ឬ Cards ច្រើនជួរ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូររៀបរាប់លក្ខខណ្ឌ ៣ ដើម្បីធ្វើឱ្យ Website មួយជា Responsive។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ មាន `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`; ប្រើទំហំបត់បែន (`%`, `fr`, `max-width`); ប្រើ Media Queries ដើម្បីប្ដូរ Layout តាមទទឹងអេក្រង់។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ចូរសរសេរ CSS ដែលប្ដូរពណ៌ផ្ទៃ Link ក្នុង</strong> `.menu` <strong>ទៅជា</strong> `#ffd200` <strong>ពេល Hover។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `.menu a:hover { background-color: #ffd200; }`"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. តើគួរដាក់</strong> `<script src=\"script.js\"></script>` <strong>នៅទីតាំងណាក្នុង HTML? ហេតុអ្វី?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ដាក់នៅមុន `</body>` ដើម្បីឱ្យ HTML Elements ទាំងអស់ត្រូវបានផ្ទុករួចជាមុន ទើប JavaScript អាចប្រើពួកវាបាន ហើយទំព័របង្ហាញលឿន។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. ចូរពន្យល់ភាពខុសគ្នារវាង</strong> `let` <strong>និង</strong> `const` <strong>ជាមួយឧទាហរណ៍។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `let` អាចប្ដូរតម្លៃបាន ឧ. `let count = 1; count = 2;`; `const` មិនអាចកំណត់តម្លៃថ្មីបាន ឧ. `const name = \"RPITSSR\";` បើកំណត់ម្ដងទៀតនឹងមាន TypeError។"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ៦ ៖ មូលដ្ឋានគ្រឹះ JavaScript</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ហេតុអ្វីបានជាគួរប្រើ</strong> `let` <strong>និង</strong> `const` <strong>ជំនួស</strong> `var`<strong>?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `let` និង `const` គោរព Block Scope `{ }` និងមិនអនុញ្ញាតឱ្យប្រកាសឈ្មោះដដែលម្ដងទៀត ដែលកាត់បន្ថយកំហុស; `const` ការពារការប្ដូរតម្លៃដោយចៃដន្យ។ `var` ជាវិធីចាស់ដែលងាយបង្កកំហុស។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូររៀបរាប់ Data Types មូលដ្ឋាន ៤ ជាមួយឧទាហរណ៍។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ String `\"Dara\"`, Number `25`, Boolean `true`, Undefined (`let x;`) និង Null (`null`)។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ហេតុអ្វីត្រូវប្រើ</strong> `Number()` <strong>ជាមួយតម្លៃដែលទទួលពី</strong> `prompt()`<strong>?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ព្រោះ `prompt()` តែងតែផ្ដល់ String។ បើមិនប្ដូរ សញ្ញា `+` នឹងភ្ជាប់អត្ថបទ (ឧ. \"80\" + \"90\" = \"8090\") ជំនួសការបូកលេខ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. ចូរសរសេរ Function</strong> `isPass(score)` <strong>ដែល</strong> `return` `true` <strong>បើ score ≥ 50 និង</strong> `false` <strong>បើតិចជាង។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `function isPass(score) { if (score >= 50) { return true; } else { return false; } }` (ឬសរសេរខ្លី `return score >= 50;`)"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. ចូរពន្យល់ភាពខុសគ្នារវាង</strong> `for` <strong>Loop និង</strong> `while` <strong>Loop។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `for` សមពេលដឹងចំនួនដងច្បាស់ ដោយមានតម្លៃចាប់ផ្ដើម លក្ខខណ្ឌ និងការប្ដូរក្នុងបន្ទាត់តែមួយ; `while` ធ្វើរហូតដល់លក្ខខណ្ឌលែងពិត ហើយត្រូវប្ដូរតម្លៃក្នុង Loop ដើម្បីកុំឱ្យជា Infinite Loop។"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ៧ ៖ JavaScript DOM និង Events</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ចូរពន្យល់ថា DOM ជាអ្វី ហើយហេតុអ្វី JavaScript ត្រូវការវា។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ DOM ជាគំរូនៃទំព័រ HTML ដែល Browser បង្កើតជា Tree នៃ Objects។ JavaScript ប្រើ DOM ដើម្បីជ្រើស អាន និងកែ Elements ធ្វើឱ្យទំព័រប្ដូរភ្លាមៗដោយមិនចាំបាច់ Reload។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូរប្រៀបធៀប</strong> `textContent` <strong>និង</strong> `innerHTML`<strong>។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `textContent` អាន/កំណត់តែអត្ថបទ (Tags ត្រូវបង្ហាញជាអក្សរ) ដែលមានសុវត្ថិភាព; `innerHTML` បកប្រែជា HTML ដូច្នេះមិនគួរប្រើជាមួយទិន្នន័យដែលអ្នកប្រើវាយបញ្ចូល។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ចូរសរសេរកូដដែលបង្ហាញ</strong> `alert(\"`សួស្តី`\")` <strong>ពេលចុចប៊ូតុង</strong> `<button id=\"helloBtn\">`<strong>។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `const btn = document.getElementById(\"helloBtn\"); btn.addEventListener(\"click\", function () { alert(\"`សួស្តី`\"); });`"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. ហេតុអ្វីបានជាការប្ដូររូបរាងដោយ</strong> `classList` <strong>ល្អជាងការប្រើ</strong> `element.style`<strong>?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ព្រោះ Style ស្ថិតក្នុង CSS ទាំងអស់ (ងាយថែទាំ និងប្រើឡើងវិញ) ហើយ JavaScript គ្រាន់តែបន្ថែម/ដក Class ធ្វើឱ្យ CSS និង JavaScript បំបែកពីគ្នាច្បាស់លាស់។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. បើ Console បង្ហាញ \"Cannot read properties of null\" តើមូលហេតុអាចជាអ្វី និងដោះស្រាយយ៉ាងដូចម្ដេច?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ JavaScript រក Element មិនឃើញ (id/Selector ខុស ឬ `<script>` ដំណើរការមុន HTML ផ្ទុក)។ ដោះស្រាយដោយពិនិត្យឈ្មោះ id/Selector ឱ្យត្រូវ និងដាក់ `<script>` មុន `</body>`។"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ៨ ៖ គម្រោងអនុវត្តការបង្កើតគេហទំព័រ</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. ចូរបង្ហាញ និងពន្យល់រចនាសម្ព័ន្ធ Project Folder របស់អ្នក។ ហេតុអ្វីត្រូវបំបែក CSS និង JavaScript ជា File ដាច់ដោយឡែក?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Folder មាន `index.html`, `css/style.css`, `js/script.js`, `images/`។ ការបំបែកធ្វើឱ្យកូដងាយអាន ងាយថែទាំ ប្រើឡើងវិញបាន និងកែរូបរាង ឬមុខងារដោយមិនប៉ះពាល់ HTML។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. ចូរបង្ហាញផ្នែកមួយក្នុង Penpot Design ហើយពន្យល់ពីរបៀបដែលអ្នកបំលែងវាទៅជា HTML និង CSS។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ឧ. Card ម៉ឺនុយក្នុង Penpot (Component) → `<article class=\"menu-item\">` ក្នុង HTML; ពណ៌ HEX, Border Radius, Shadow និងគម្លាតពី Penpot → Properties ក្នុង `.menu-item` របស់ CSS; Cards ៣ រៀបដោយ CSS Grid។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ចូរបង្ហាញ Website លើ Mobile (Device Toolbar) ហើយពន្យល់ Media Query ដែលអ្នកបានប្រើ។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ `@media (max-width: 768px)` ប្ដូរ `.menu-grid` ទៅ `1fr` (ជួរឈរតែមួយ), លាក់ `.nav-links` និងបង្ហាញប៊ូតុង ☰, និងបង្រួមទំហំចំណងជើង Hero។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. ចូរបង្ហាញមុខងារ JavaScript មួយ ហើយពន្យល់ Event, Element ដែលត្រូវជ្រើស និងការផ្លាស់ប្ដូរ DOM។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ឧ. Mobile Menu ៖ ជ្រើស `#menuToggle` និង `#navLinks` → `addEventListener(\"click\", ...)` → `navLinks.classList.toggle(\"show\")` ធ្វើឱ្យ CSS បង្ហាញ/លាក់ Menu។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. ប្រសិនបើម្ចាស់ហាងចង់ប្ដូរតម្លៃម្ហូប និងបន្ថែមម្ហូបថ្មីមួយមុខ តើអ្នកត្រូវធ្វើអ្វីខ្លះ (Maintenance)?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ Backup Project ជាមុន; កែតម្លៃក្នុង `<span class=\"price\">`; ចម្លង `<article class=\"menu-item\">` មួយ ហើយកែឈ្មោះ ការពិពណ៌នា និងតម្លៃ; ពិនិត្យ Layout លើ Desktop/Mobile; កត់ត្រាការផ្លាស់ប្ដូរ។"
            },
            {
              "type": "subsection",
              "title": "<strong>មេរៀនទី ៩ ៖ ការបង្ហាញគម្រោង និងការវាយតម្លៃចុងក្រោយ</strong>"
            },
            {
              "type": "paragraph",
              "text": "<strong>១. តើ Website របស់អ្នកសម្រាប់អ្នកណា ហើយជួយដោះស្រាយបញ្ហាអ្វី?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ចម្លើយត្រូវបញ្ជាក់អ្នកប្រើគោលដៅ (ឧ. ភ្ញៀវទេសចរ សិស្សថ្មី) និងគោលដៅច្បាស់ (ឧ. មើលម៉ឺនុយ និងកក់តុបានលឿនលើទូរស័ព្ទ)។"
            },
            {
              "type": "paragraph",
              "text": "<strong>២. តើ Style Guide ក្នុង Penpot (ពណ៌ និង Font) ត្រូវបានយកមកប្រើក្នុង CSS យ៉ាងដូចម្ដេច?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ លេខកូដ HEX និងទំហំអក្សរពី Penpot ត្រូវបានចម្លងទៅ Properties `color`, `background-color`, `font-family`, `font-size` ក្នុង `style.css` ដើម្បីឱ្យ Website ដូច Design។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៣. ចូរបង្ហាញកូដ CSS ដែលធ្វើឱ្យ Layout ប្ដូរលើ Mobile ហើយពន្យល់វា។</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ បង្ហាញ `@media (max-width: 768px) { ... }` ហើយពន្យល់ថាពេលទទឹងអេក្រង់ ≤ 768px Grid ប្ដូរទៅ `1fr` និង Menu ប្ដូរជាជួរឈរ ឬលាក់ក្រោមប៊ូតុង ☰។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៤. តើ JavaScript ក្នុង Website របស់អ្នកឆ្លើយតបនឹង Event អ្វី ហើយប្ដូរអ្វីនៅក្នុង DOM?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ឧ. Event `submit` លើ Form → ពិនិត្យ `value` របស់ Input → ប្ដូរ `textContent` និង `classList` របស់ធាតុសារ ដើម្បីបង្ហាញសារកំហុស ឬជោគជ័យ។"
            },
            {
              "type": "paragraph",
              "text": "<strong>៥. បើមានពេលបន្ថែម ១ សប្ដាហ៍ តើអ្នកនឹងកែលម្អ ឬថែទាំអ្វីខ្លះក្នុង Website?</strong>"
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "ចម្លើយ ៖ ឧ. បន្ថែមទំព័រ/ផ្នែកថ្មី កែលម្អរូបភាព និង Contrast ពិនិត្យ Link និងអក្ខរាវិរុទ្ធ បន្ថែម Accessibility (alt, label) ធ្វើ Backup និងបោះពុម្ពផ្សាយលើ Hosting។"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson-13",
      "number": 13,
      "isAppendix": true,
      "appendixNum": 4,
      "label": "ឧបសម្ព័ន្ធទី ៤",
      "title": "ប្រភពឯកសារយោង (References and Learning Resources)",
      "fullTitle": "ឧបសម្ព័ន្ធទី ៤ ៖ ប្រភពឯកសារយោង (References and Learning Resources)",
      "kindLabel": "References and Learning Resources",
      "pageStart": 125,
      "pageEnd": 127,
      "objectives": [],
      "sections": [
        {
          "title": "ខ្លឹមសារមេរៀន",
          "items": [
            {
              "type": "paragraph",
              "text": "ប្រភពខាងក្រោមជាឯកសារផ្លូវការ និងគួរឱ្យទុកចិត្ត ដែលសិស្ស និងគ្រូអាចប្រើសម្រាប់ស្វែងយល់បន្ថែម និងផ្ទៀងផ្ទាត់ព័ត៌មាន ជាពិសេសមុខងារ ឬ Menu ដែលប្រែប្រួលតាមកំណែកម្មវិធី។"
            },
            {
              "type": "table",
              "headers": [
                "<strong>ល.រ</strong>",
                "<strong>ប្រភព</strong>",
                "<strong>អាសយដ្ឋាន (URL) និងការប្រើប្រាស់</strong>"
              ],
              "rows": [
                [
                  "<strong>1</strong>",
                  "Penpot Help Center",
                  "`https://help.penpot.app/` — ឯកសារផ្លូវការអំពី Boards, Components, Flex Layout, Prototyping, Inspect និង Export"
                ],
                [
                  "<strong>2</strong>",
                  "MDN Web Docs – HTML",
                  "`https://developer.mozilla.org/en-US/docs/Web/HTML` — ឯកសារយោង HTML Elements និង Attributes"
                ],
                [
                  "<strong>3</strong>",
                  "MDN Web Docs – CSS",
                  "`https://developer.mozilla.org/en-US/docs/Web/CSS` — Properties, Selectors, Flexbox, Grid, Media Queries"
                ],
                [
                  "<strong>4</strong>",
                  "MDN Web Docs – JavaScript",
                  "`https://developer.mozilla.org/en-US/docs/Web/JavaScript` — Syntax, Data Types, Functions, Arrays"
                ],
                [
                  "<strong>5</strong>",
                  "MDN Learn Web Development",
                  "`https://developer.mozilla.org/en-US/docs/Learn_web_development` — មេរៀនសម្រាប់អ្នកចាប់ផ្ដើម"
                ],
                [
                  "<strong>6</strong>",
                  "Visual Studio Code Docs",
                  "`https://code.visualstudio.com/docs` — ការដំឡើង ការប្រើប្រាស់ និង Keyboard Shortcuts"
                ],
                [
                  "<strong>7</strong>",
                  "Chrome DevTools",
                  "`https://developer.chrome.com/docs/devtools` — ការប្រើ Elements, Console, Device Mode"
                ],
                [
                  "<strong>8</strong>",
                  "W3C Markup Validation Service",
                  "`https://validator.w3.org/` — ពិនិត្យកំហុសកូដ HTML"
                ],
                [
                  "<strong>9</strong>",
                  "Google Fonts",
                  "`https://fonts.google.com/` — Fonts ខ្មែរឥតគិតថ្លៃ (Kantumruy Pro, Battambang, Noto Sans Khmer)"
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "tip",
              "text": "<strong>ឯកសារភ្ជាប់ជាមួយសៀវភៅ ៖</strong> កូដឧទាហរណ៍ទាំងអស់ក្នុងសៀវភៅនេះ (មេរៀនទី ២–៨) និង Diagram មាននៅក្នុង Folder `Create_and_Maintain_Websites_I_Assets/code/` និង `Create_and_Maintain_Websites_I_Assets/diagrams/`។"
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "author": "Penpot (Kaleidos)",
      "year": "Online",
      "title": "Penpot Help Center",
      "publisher": "https://help.penpot.app/"
    },
    {
      "author": "Mozilla (MDN Web Docs)",
      "year": "Online",
      "title": "HTML: HyperText Markup Language",
      "publisher": "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      "author": "Mozilla (MDN Web Docs)",
      "year": "Online",
      "title": "CSS: Cascading Style Sheets",
      "publisher": "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      "author": "Mozilla (MDN Web Docs)",
      "year": "Online",
      "title": "JavaScript",
      "publisher": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      "author": "Mozilla (MDN Web Docs)",
      "year": "Online",
      "title": "Learn Web Development",
      "publisher": "https://developer.mozilla.org/en-US/docs/Learn_web_development"
    },
    {
      "author": "Microsoft",
      "year": "Online",
      "title": "Visual Studio Code Documentation",
      "publisher": "https://code.visualstudio.com/docs"
    },
    {
      "author": "Google",
      "year": "Online",
      "title": "Chrome DevTools",
      "publisher": "https://developer.chrome.com/docs/devtools"
    },
    {
      "author": "ដេប៉ាតឺម៉ង់ព័ត៌មានវិទ្យា RPITSSR",
      "year": "២០២៦",
      "title": "សៀវភៅមេរៀន ការបង្កើត និងថែទាំគេហទំព័រ I (Create and Maintain Websites I)",
      "publisher": "វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប"
    }
  ]
};
