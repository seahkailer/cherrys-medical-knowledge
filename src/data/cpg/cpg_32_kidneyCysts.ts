import { CpgDocument } from '../types';

export const kidneyCysts: CpgDocument = {
  id: 'cpg-kidney-cysts',
  condition: 'Kidney Cysts',
  source: '32 NUP CPG - Kidney Cysts.pdf',
  reviewDate: 'Reviewed November 2024 by Dr Sky Koh. Next review: November 2027.',
  advisors: 'Key FPs: Dr Charmaine Low, Dr Sky Koh. Specialist: Asst Prof Benjamin Goh (Consultant, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Kidney cysts are fluid-filled sacs that develop within the kidneys. They are typically non-cancerous and can vary in size from very small to large cysts that can cause discomfort and affect kidney function.' },
        { type: 'text', content: 'Epidemiology: Benign kidney cysts are common — estimated 30% of patients above 60 years old will be diagnosed with at least one simple kidney cyst through abdominal imaging. Prevalence increases with age and is higher in males than females.' },
        { type: 'text', content: 'Importance: In primary care, kidney cysts are often incidental findings. Primary care physicians must differentiate between benign and complex cysts as complex cysts are associated with increased risk of malignancy (may require further imaging, biopsy, or surgery). Kidney cysts can also be present due to autosomal dominant polycystic kidney disease, Von Hippel-Lindau syndrome, and prolonged haemodialysis in ESRD.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'In many cases, benign kidney cysts do not cause symptoms and are discovered incidentally. Larger or multiplying cysts may cause:' },
        { type: 'list', items: [
          { text: 'Flank or back pain' },
          { text: 'Urinary frequency' },
          { text: 'Haematuria' },
          { text: 'Hypertension' },
          { text: 'Urinary tract infections' },
          { text: 'Kidney stones' },
          { text: 'Chronic kidney disease in advanced cases' },
        ]},
        { type: 'text', content: 'Diagnosis: Kidney cysts are commonly diagnosed through imaging — ultrasound kidneys in primary care. CT and MRI can also visualise size, number, and characteristics.' },
        { type: 'text', content: 'Classification: Kidney cysts detected on CT or MRI are classified using the Bosniak classification system (2019). Ultrasound kidneys can risk-stratify cysts for further imaging.' },
        {
          type: 'table',
          headers: ['Type', 'US Appearance', 'Recommendation'],
          rows: [
            { cells: ['Simple', 'Thin smooth wall; anechoic, no septa, calcification or solid component', 'No follow-up required, unless symptomatic'] },
            { cells: ['Complex (lower risk, <6cm, risk of malignancy <1%)', 'Few thin septa; septa and wall may appear echogenic; may have fine calcifications/milk of calcium; small cyst (<6cm)', 'Look for previous US or CT to assess change in size. If not available, repeat imaging in 1 year. If stable, discuss with patient; no follow-up required unless symptomatic.'] },
            { cells: ['Complex (higher risk)', 'Thickened hyperechoic wall; thickened septa or many thin septa; multiple coarse calcium calcifications; any one cyst ≥6cm', 'Refer Urology (Routine)'] },
            { cells: ['Complex (high suspicion)', '≥1 hyperechoic thick or irregular walls or multiple thickened septa', 'Refer Urology (Early)'] },
            { cells: ['Highly suspicious for malignancy', 'Solid nodule; presence of vascularity inside index lesion (with Doppler)', 'Refer Urology (Direct Access)'] },
          ],
        },
      ],
    },
    {
      heading: 'Bosniak (CT) Classification of Kidney Cysts',
      blocks: [
        {
          type: 'table',
          headers: ['Bosniak Class', 'CT Appearance', 'Risk of Malignancy (%)', 'Recommendation'],
          rows: [
            { cells: ['I', 'Thin smooth wall (≤2mm) which may enhance; homogenous simple fluid; no septa, calcification or solid component', '0%', 'No follow-up required, unless symptomatic'] },
            { cells: ['II', 'Thin smooth wall (≤2mm); few hairline thin septa (≤2mm); septa and wall may enhance; may have fine calcifications; small hyperdense cysts (<6cm)', '1%', 'Look for previous US or CT. If not, repeat imaging in 1 year. If stable, no follow-up unless symptomatic.'] },
            { cells: ['II-F', 'Minimally thickened (3mm) enhancing wall, or smooth minimal thickening (3mm) of ≥1 enhancing septa, or many (≥4) hairline thin septa (≤2mm); multiple coarse calcifications; large hyperdense cysts (≥6cm)', '1–38%', 'Refer Urology (routine)'] },
            { cells: ['III', '≥1 enhancing thick (≥4mm) or enhancing irregular walls or septa', '50%', 'Refer Urology (early)'] },
            { cells: ['IV', '≥1 enhancing nodule(s)', '>90%', 'Refer Urology (direct access)'] },
          ],
        },
      ],
    },
    {
      heading: 'Management and Referral',
      blocks: [
        { type: 'text', content: 'Recommended Follow-Up: (1) Simple renal cysts are benign and do not require further follow-up imaging. (2) Complex cysts, large size, multiple cysts, solid nodule, thick septa, multiple calcification should be referred to Urology for further imaging.' },
        { type: 'text', content: 'Other Indications for Referral to Urology:' },
        { type: 'list', items: [
          { text: 'Patients with symptomatic kidney cysts' },
          { text: 'Patients with multiple cysts and family history suggestive of polycystic kidney disease or Von Hippel-Lindau syndrome' },
          { text: 'Incidental findings of hydronephrosis, stone, or suspected tumour — refer urgently to Urology (direct access)' },
        ]},
        { type: 'text', content: 'Indications for Referral to Emergency Department:' },
        { type: 'list', items: [
          { text: 'Cyst infection/rupture with symptoms/signs: fever, flank pain, haematuria, hypotension' },
          { text: 'Hydronephrosis, stone or tumour with signs of urosepsis or severe renal impairment' },
        ]},
        { type: 'text', content: 'Things to Note: (1) Radiological results labelled "R1U — Unexpected" demand additional attention and must not be overlooked. Example: echogenic nodule with small eccentric cystic component and vascularity suggests possible renal cell carcinoma — referral is warranted. (2) For incidental renal cysts identified on US HBS where complexity could not be determined, further US kidneys is recommended.' },
      ],
    },
  ],
};
