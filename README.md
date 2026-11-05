# ការបង្កើត និងថែទាំគេហទំព័រ I (Create and Maintain Websites I)

វេទិកាសិក្សាឌីជីថលអន្តរកម្ម (PWA) សម្រាប់មុខវិជ្ជា Create and Maintain Websites I
វិទ្យាស្ថានពហុបច្ចេកទេសភូមិភាគតេជោសែនសៀមរាប (RPITSSR) — រៀបចំដោយ ហេង ឧត្តម

- ៩ មេរៀន៖ Figma → HTML → CSS → JavaScript → Final Project
- ៤ ឧបសម្ព័ន្ធ៖ Keyboard Shortcuts, Technical Glossary, Answer Key, References

## Update the lessons from the Word book

The lesson text and pictures come from `Create_and_Maintain_Websites_I_Khmer.docx`
(kept next to this folder, not in the repo). After editing the book, run:

```
python tools/build_course_data.py "../Create_and_Maintain_Websites_I_Khmer.docx"
```

This rewrites `js/course-data.js` and `images/lessons/` (pictures are converted to WebP).
Then bump `CACHE_VERSION` in `sw.js` so students get the new pictures. 
