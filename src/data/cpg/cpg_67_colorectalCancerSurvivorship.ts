import { CpgDocument } from '../types';

export const colorectalCancerSurvivorship: CpgDocument = {
  id: 'cpg-colorectal-cancer-survivorship',
  condition: 'Colorectal Cancer Survivorship',
  source: '67 Colorectal Cancer Survivorship (Summary).pdf',
  reviewDate: 'NUH Summary',
  advisors: 'Dr Chee Cheng Ean (Consultant, Dept of Haematology-Oncology, National University Cancer Institute, Singapore)',
  sections: [
    {
      heading: 'History, Physical Exam and Surveillance',
      blocks: [
        { type: 'text', content: 'At each visit, take a focused history and perform physical examination:' },
        { type: 'list', items: [
          { text: 'Symptoms that may be associated with disease recurrence/metastasis: Weight loss, abdominal pain, changes in bowel habits from baseline, hematochezia, changes in stool caliber from baseline, symptoms associated with bowel obstruction, jaundice, back/bone pain, persistent cough/dyspnea, persistent headaches.' },
          { text: 'Examination: In particular, look out for lymphadenopathy (neck, axilla, inguinal), abdominal masses, ascites, hepatomegaly, jaundice, leg swelling.' },
        ]},
      ],
    },
    {
      heading: 'Late and Long-Term Side Effects',
      blocks: [
        { type: 'list', items: [
          { text: 'Chronic diarrhea — may be related to surgery (short bowel syndrome, bile acid malabsorption) or radiotherapy.' },
          { text: 'Bowel/bladder control issues — especially after rectal surgery or pelvic radiotherapy.' },
          { text: 'Ostomy issues — for patients with a stoma: skin care, appliance management, psychological adjustment.' },
          { text: 'Peripheral neuropathy — from oxaliplatin chemotherapy (may be long-lasting).' },
          { text: 'Sexual dysfunction — especially after rectal surgery.' },
          { text: 'Fatigue — common during and after treatment.' },
          { text: 'Cognitive changes — from chemotherapy.' },
        ]},
      ],
    },
    {
      heading: 'General Wellness Screening',
      blocks: [
        { type: 'text', content: 'Continue routine general wellness screening per HPB guidelines:' },
        { type: 'list', items: [
          { text: 'Diabetes screening.' },
          { text: 'Cholesterol monitoring.' },
          { text: 'Hypertension monitoring.' },
          { text: 'Mammogram (for female patients).' },
          { text: 'Vaccinations — ensure up to date.' },
          { text: 'Cervical cancer screening (for female patients).' },
        ]},
      ],
    },
    {
      heading: 'Colonoscopy Surveillance',
      blocks: [
        { type: 'text', content: 'Ensure colonoscopy is up to date. Check the last colonoscopy report for any pathology that may warrant an earlier follow-up colonoscopy.' },
        { type: 'list', items: [
          { text: 'First colonoscopy: 1 year after surgery (unless done pre-operatively due to obstruction — then 3–6 months after surgery).' },
          { text: 'If first colonoscopy is normal: Repeat at 3 years, then every 5 years thereafter.' },
          { text: 'If normal colonoscopy found at 3 years: Continue colonoscopy every 3–5 years until age 75.' },
          { text: 'Any pathology found on colonoscopy (polyps, etc.) may warrant an earlier follow-up — follow specialist advice.' },
        ]},
        { type: 'text', content: 'No need for routine CEA (carcinoembryonic antigen) or CT scans in the primary care setting unless indicated by specialist.' },
      ],
    },
    {
      heading: 'Colonoscopy Preparation Guidelines (NUH)',
      blocks: [
        { type: 'text', content: 'Standard bowel preparation for colonoscopy at NUH. Patients should be counselled to:' },
        { type: 'list', items: [
          { text: 'Low residue diet for 3 days before the procedure.' },
          { text: 'Clear liquid diet on the day before the procedure.' },
          { text: 'Take prescribed bowel preparation agent as instructed (usually the evening before and/or morning of procedure).' },
          { text: 'Stay well hydrated with clear fluids.' },
          { text: 'Nothing by mouth 2 hours before procedure.' },
          { text: 'Inform the endoscopy team of all medications, especially blood thinners (anticoagulants, antiplatelets) and diabetic medications.' },
        ]},
      ],
    },
  ],
};
