import { CpgDocument } from '../types';

export const thrombocytosisErythrocytosis: CpgDocument = {
  id: 'cpg-thrombocytosis-erythrocytosis',
  condition: 'Thrombocytosis and Erythrocytosis',
  source: '34 NUP CPG - Management Algorithm for Thrombocytosis and Erythrocytosis in Primary Care.pdf',
  reviewDate: 'Published April 2023.',
  advisors: 'Key FPs: Dr Tan Zhirong Julio, Dr Justin Chong, Dr Tan Yee Leng. Specialists: Dr Lee Shir Ying (Senior Consultant, Haematology-Oncology, National University Cancer Institute) and Dr Chee Yen Lin (Head & Senior Consultant, Haematology-Oncology, NUCI).',
  sections: [
    {
      heading: 'Management Algorithm for Thrombocytosis',
      blocks: [
        { type: 'text', content: 'Approach to elevated platelet count in primary care (above ULN):' },
        { type: 'list', items: [
          { text: 'Platelet ≥1000 x10⁹/L, OR ≥600 x10⁹/L with recent thrombosis/bleed → Urgent referral to haematology (within 2 weeks) or ED as clinically indicated.' },
          { text: 'Platelet ≥600 x10⁹/L → Routine referral to haematology.' },
          { text: 'Platelet ULN to <600 x10⁹/L with elevated WBC or haematocrit, or hepatosplenomegaly → (1) History and examination for secondary thrombocytosis; (2) Review previous platelet counts; (3) PBF, ESR and Iron Panel. Manage infection/inflammation/iron deficiency. If persists: refer haematology.' },
          { text: 'Platelet ULN to 450 x10⁹/L, no alarm signs → Repeat platelet count in 3 months.' },
          { text: 'Platelet >450–600 x10⁹/L for >3 months → Refer haematology.' },
          { text: 'Platelet ≥600 x10⁹/L at repeat → Refer haematology.' },
          { text: 'Platelet ULN to 450 x10⁹/L, no alarm signs, stable → Monitor in primary care 6–12 monthly.' },
        ]},
        {
          type: 'table',
          headers: ['', 'Examples'],
          rows: [
            { cells: ['Common causes of secondary thrombocytosis', 'Iron deficiency, inflammation, infection, recent blood loss/surgery, prior splenectomy, borderline high normal variant'] },
            { cells: ['Common causes of primary thrombocytosis', 'Essential thrombocytosis, chronic myeloid leukaemia'] },
            { cells: ['Alarm signs requiring haematology referral', '≥600 x10⁹/L (urgent if ≥1000 or thrombosis/bleeding); >450–600 x10⁹/L for >3 months; hepatosplenomegaly; significantly elevated WBC and/or haematocrit; abnormal PBF'] },
          ],
        },
      ],
    },
    {
      heading: 'Management Algorithm for Erythrocytosis',
      blocks: [
        { type: 'text', content: 'Approach to elevated haematocrit (HCT) in primary care (above ULN):' },
        { type: 'list', items: [
          { text: 'HCT >58% for male / >54% for female, OR recent thrombosis/neurologic symptoms → Urgent referral to haematology (within 2 weeks) or ED as clinically indicated.' },
          { text: 'HCT >52–58% for male / >48–54% for female → Routine referral to haematology.' },
          { text: 'Elevated WBC or platelet, or hepatosplenomegaly → Refer haematology.' },
          { text: 'HCT ULN to ≤52% male / ≤48% female with no alarm signs — Step 1: (1) History and exam for secondary erythrocytosis, check SpO₂; (2) Review previous haematocrits; (3) If SpO₂ <94% or OSA symptoms → refer Respiratory specialist; (4) Advise hydration, stop smoking, stop haematinics, stop diuretics if possible; (5) Manage weight and hypertension; (6) Repeat NON-FASTING FBC in 3 months.' },
          { text: 'HCT still elevated >3 months — Step 2: (1) Advise hydration, stop smoking, stop haematinics/diuretics if possible; (2) Repeat FBC and PBF in 3 months + LFT, GGT, Creatinine, Calcium if none in last 6 months.' },
          { text: 'HCT remains elevated >6 months → Refer haematology. (Urgent if alarm signs present.)' },
        ]},
        {
          type: 'table',
          headers: ['', 'Examples'],
          rows: [
            { cells: ['Common causes of secondary erythrocytosis', 'Dehydration/diuretics/fasting, smoking, Gaisbock syndrome (obesity + hypertension), obstructive sleep apnoea, liver and kidney cysts, borderline high normal variant, chronic hypoxic states (COPD, right-to-left cardiac shunt)'] },
            { cells: ['Common causes of primary erythrocytosis', 'Polycythaemia rubra vera, idiopathic erythrocytosis'] },
            { cells: ['Alarm signs requiring haematology referral', 'Recent thrombosis or neurologic symptoms (headache, dizziness, blurring of vision); HCT >52% for males / >48% for females; hepatosplenomegaly; significantly elevated WBC and/or platelets; abnormal PBF'] },
          ],
        },
      ],
    },
    {
      heading: 'FAQs',
      blocks: [
        { type: 'list', items: [
          { text: 'Thrombocytosis: Our lab ULN is 360 x10⁹/L but referral threshold is 450 x10⁹/L — do we refer 360–450 x10⁹/L? Most patients with platelets <450 x10⁹/L that are not increasing over years are likely benign. Essential thrombocytosis criteria requires sustained >450 x10⁹/L. Monitor in primary care.' },
          { text: 'Thrombocytosis: Should constitutional symptoms (weight loss, night sweats, pruritus, flushing, erythromelalgia) be alarm signs? Majority do not have symptoms at presentation; other abnormalities will usually also be present. Continue holistic assessment.' },
          { text: 'Erythrocytosis: Why do LFT and calcium in erythrocytosis work-up? To screen for rare causes like erythropoietin-producing tumours (hepatocellular carcinoma, parathyroid adenoma/carcinoma).' },
          { text: 'Erythrocytosis: If referred to ENT/Respiratory for OSA, do we still follow the algorithm? Yes — specialists may not agree that erythrocytosis is from OSA, and the patient may have another concurrent cause.' },
          { text: 'Erythrocytosis: If persistent erythrocytosis found on review of previous haematocrits, start from "HCT remains elevated >3 months or >6 months" diamond in the algorithm.' },
          { text: 'Erythrocytosis: At 3-month and 6-month marks — ensure haematocrit is taken as NON-FASTING sample (fasting + diuretics/OHAs can cause haemoconcentration). Advise hydration, stop smoking, stop haematinics, stop diuretics, manage hypertension and obesity. Some Gaisbock syndrome patients may take >6 months to decline. If persistently elevated >6 months, refer haematology to exclude polycythaemia rubra vera or idiopathic erythrocytosis.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 35 NUP CPG — Management of Acne and Skin Infections (Jan 2026)
// ---------------------------------------------------------------------------
const acneSkinInfections: CpgDocument = {
};
