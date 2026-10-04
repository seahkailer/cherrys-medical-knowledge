import { CpgDocument } from '../../types';

export const cdmpHandbook: CpgDocument = {
  id: 'cpg-cdmp-handbook',
  condition: 'Chronic Disease Management Programme (CDMP) — Clinical Guidelines',
  source: 'Ministry of Health, Singapore',
  reviewDate: '2024',
  advisors: [
    'Ministry of Health Singapore — CDMP Handbook for Healthcare Professionals 2024',
  ],
  sections: [
    {
      heading: 'CDMP Overview & Conditions Covered',
      blocks: [
        {
          type: 'text',
          content:
            'The Chronic Disease Management Programme (CDMP) was introduced in 2006. It allows patients to utilise MediSave and CHAS subsidies for outpatient management of chronic conditions. The Community Health Assist Scheme (CHAS) complements CDMP by providing subsidies for lower-to-middle income Singaporeans.',
        },
        {
          type: 'list',
          items: [
            {
              text: 'Conditions with data submission requirements (report clinical indicators):',
              subItems: [
                '1. Diabetes Mellitus and Pre-Diabetes',
                '2. Hypertension',
                '3. Lipid Disorders',
                '4. Asthma',
                '5. Chronic Obstructive Pulmonary Disease (COPD)',
                '6. Chronic Kidney Disease (Nephritis/Nephrosis)',
              ],
            },
            {
              text: 'CDMP Mental Illnesses (CDMP-MI) — requires Mental Health GP Partnership Programme:',
              subItems: [
                '7. Anxiety Disorders',
                '8. Major Depressive Disorder',
                '9. Bipolar Disorder',
                '10. Schizophrenia',
              ],
            },
            {
              text: 'Other Chronic Conditions:',
              subItems: [
                '11. Stroke',
                '12. Major Neurocognitive Disorder (Dementia)',
                '13. Osteoarthritis',
                '14. Parkinson\'s Disease',
                '15. Benign Prostatic Hyperplasia (BPH)',
                '16. Epilepsy',
                '17. Osteoporosis',
                '18. Psoriasis',
                '19. Rheumatoid Arthritis (RA)',
                '20. Ischaemic Heart Disease (IHD)',
                '21. Allergic Rhinitis',
                '22. Gout',
                '23. Chronic Hepatitis B',
              ],
            },
          ],
        },
        {
          type: 'text',
          content:
            'MediSave Use: A co-payment of 15% applies to each CDMP bill (waived for patients enrolled at their Healthier SG clinic from 1 Feb 2024). Annual withdrawal limit: $500–$700 per patient. Only accredited doctors and clinics may submit CDMP/MediSave claims.',
        },
      ],
    },
    {
      heading: 'Diabetes Mellitus & Pre-Diabetes',
      blocks: [
        {
          type: 'text',
          content:
            'Diabetes mellitus is a heterogeneous metabolic disorder characterised by hyperglycaemia. Chronic hyperglycaemia causes damage to kidneys, eyes, nerves, heart, and blood vessels. Screening is recommended for asymptomatic individuals aged ≥40 years and/or with risk factors.',
        },
        {
          type: 'table',
          headers: ['Test', 'Result', 'Interpretation'],
          rows: [
            { cells: ['HbA1c (screening)', '≤6.0%', 'Low probability of diabetes; no further tests unless symptomatic'] },
            { cells: ['HbA1c (screening)', '6.1%–6.9%', 'Proceed to FPG or 2-hr OGTT'] },
            { cells: ['FPG (pre-diabetes)', '6.1–6.9 mmol/L (IFG)', '2-hr post-challenge glucose <7.8 mmol/L'] },
            { cells: ['OGTT (pre-diabetes)', '7.8–11.0 mmol/L (IGT)', 'FPG <7.0 mmol/L'] },
          ],
        },
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Blood Pressure Measurement', 'Twice a year', 'Target generally <130/80 mmHg; personalise'] },
            { cells: ['Weight and BMI', 'Twice a year', 'Target BMI <23 kg/m² (Asian); <25 kg/m² (non-Asian)'] },
            { cells: ['HbA1c', 'Twice a year', 'General target ≤7.0%; personalise for elderly'] },
            { cells: ['Lipid Profile', 'Annually', 'Stratify by cardiovascular risk; personalise targets'] },
            { cells: ['Kidney Assessment (serum Cr/eGFR + uACR)', 'Annually', 'Also screen uPCR if significant proteinuria'] },
            { cells: ['Eye Assessment (retinal photography + visual acuity)', 'At least annually', 'Type 1 DM: first within 3–5 years after diagnosis (≥10yrs); Type 2 DM: first at diagnosis'] },
            { cells: ['Foot Assessment', 'At least annually', 'Screen for neuropathy, PVD, bone/joint/skin abnormalities'] },
            { cells: ['Smoking Assessment', 'Annually (smokers); once-off (non-smokers)', 'Provide cessation counselling'] },
            { cells: ['Influenza Vaccination', 'Annually', 'Per NAIS/NCIS'] },
            { cells: ['Pneumococcal Vaccination (PPSV23)', '1 or 2 doses', 'Per NAIS/NCIS'] },
          ],
        },
        {
          type: 'list',
          items: [
            {
              text: 'Specialist referral recommended for:',
              subItems: [
                'Suspected Type 1 DM (children and adults)',
                'Pregnant women requiring pre-conception intensive glycaemic control',
                'Nephrology: Stage 3b+ CKD, rapid decline in renal function, atypical features',
                'Ophthalmology: diabetic macular oedema, severe NPDR, unexplained drop in visual acuity, proliferative DR (urgent)',
                'Multidisciplinary diabetic foot clinic: ulceration, gangrene, Charcot\'s foot',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Hypertension',
      blocks: [
        {
          type: 'table',
          headers: ['Category', 'Systolic BP', 'Diastolic BP'],
          rows: [
            { cells: ['Normal BP', '<130 mmHg', '<85 mmHg'] },
            { cells: ['High-normal BP', '130–139 mmHg', '85–89 mmHg'] },
            { cells: ['Grade 1 Hypertension', '140–159 mmHg', '90–99 mmHg'] },
            { cells: ['Grade 2 Hypertension', '160–179 mmHg', '100–109 mmHg'] },
            { cells: ['Grade 3 Hypertension', '≥180 mmHg', '≥110 mmHg'] },
            { cells: ['Isolated Systolic Hypertension', '≥140 mmHg', '<90 mmHg'] },
          ],
        },
        {
          type: 'text',
          content:
            'Diagnosis should be based on multiple BP measurements on several separate occasions. When systolic and diastolic BP fall into different categories, the higher category applies.',
        },
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Blood Pressure Measurement', 'Twice a year', ''] },
            { cells: ['Weight and BMI', 'Twice a year', 'Target BMI <23 kg/m² (Asian)'] },
            { cells: ['Kidney Assessment (serum Cr/eGFR + uACR)', 'Annually', 'ACE inhibitors or ARBs preferred if patient also has DM'] },
            { cells: ['Smoking Assessment', 'Annually (smokers)', 'Provide cessation counselling'] },
            { cells: ['Lipid Profile', 'At baseline', 'Risk-stratify for coronary events; personalise targets'] },
            { cells: ['Cardiac Assessment (ECG)', 'At diagnosis', 'Before initiating medications'] },
          ],
        },
        {
          type: 'list',
          items: [
            {
              text: 'Specialist referral recommended for:',
              subItems: [
                'Malignant hypertension or hypertensive cardiac failure',
                'Hypertension refractory to ≥3 drugs',
                'Secondary hypertension (e.g. hyperaldosteronism)',
                'Hypertension in pregnancy or young children',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Lipid Disorders',
      blocks: [
        {
          type: 'text',
          content:
            'Lipid disorders (dyslipidaemia) are modifiable cardiovascular risk factors. Diagnosis via fasting or non-fasting lipid profile (TC, TG, LDL-C, HDL-C). Fasting profiles preferred when pharmacological therapy is being considered. Common causes of secondary dyslipidaemia should be excluded.',
        },
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Lipid Profile', 'Annually', 'Risk-stratify; personalise targets per Lipids ACG'] },
            { cells: ['Smoking Assessment', 'Annually (smokers)', 'Provide cessation counselling'] },
            { cells: ['Serum transaminases (ALT/AST)', 'Before starting statins, then as clinically indicated', 'Stop statin/fibrate if symptomatic or ALT/AST persistently ≥3× ULN'] },
          ],
        },
        {
          type: 'list',
          items: [
            {
              text: 'Refer to specialist for:',
              subItems: [
                'Pre-treatment transaminases >3× normal: refer to Gastroenterologist',
                'TG >4.5 mmol/L despite dietary changes and maximal drug therapy: refer to Endocrinologist',
                'TG >10.0 mmol/L',
                'Target parameters not achieved on maximal therapy',
                'Definite or possible familial hypercholesterolaemia',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Asthma',
      blocks: [
        {
          type: 'text',
          content:
            'Asthma is a chronic reversible airway disorder presenting with recurrent episodic cough, wheezing, dyspnoea and/or chest tightness with variable airflow limitation. Diagnosis is based on clinical presentation; supported by spirometry (FEV1/FVC reversibility ≥12% AND ≥200 ml), excessive PEF variability (>10% adults, >13% children 6–11 yrs), or ≥20% improvement in PEF after 4 weeks of ICS therapy.',
        },
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Asthma Control Assessment (e.g. GINA score)', 'Twice a year', 'Every visit for patients ≥4 years old'] },
            { cells: ['Self-Management Education + Written Asthma Action Plan', 'At diagnosis and change of medication', 'Check inhaler compliance and technique; trigger education'] },
            { cells: ['Smoking Assessment', 'Annually (smokers)', 'Provide cessation counselling'] },
            { cells: ['Spirometry', 'At or soon after diagnosis', 'When clinically indicated'] },
            { cells: ['Influenza Vaccination', 'Annually', 'Per NAIS/NCIS'] },
            { cells: ['Pneumococcal Vaccination (PPSV23)', '1 or 2 doses', 'Per NAIS/NCIS'] },
          ],
        },
        {
          type: 'list',
          items: [
            {
              text: 'Refer to specialist for:',
              subItems: [
                'Difficulty confirming asthma diagnosis',
                'Suspected occupational asthma',
                'Persistent uncontrolled asthma despite medium-to-high dose ICS, or need for biologic agent',
                'Uncontrolled asthma with risk factors (e.g. prior intubation/ICU, low FEV1)',
                'Children with poor control, pregnant women, athletes',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'COPD',
      blocks: [
        {
          type: 'text',
          content:
            'COPD is characterised by airflow obstruction that is not fully reversible, associated with exposure to noxious particles or gases (primarily smoking). Presentation: chronic cough (with or without sputum), breathlessness, wheezing, recurrent lower respiratory tract infections. Acute exacerbations may require hospitalisation.',
        },
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Weight and BMI', 'Annually', 'Nutritional intervention if BMI <18.5 kg/m² or significant involuntary weight loss'] },
            { cells: ['COPD Assessment Test (CAT) Score', 'Annually', ''] },
            { cells: ['Smoking Assessment', 'Annually (smokers)', 'Provide cessation counselling'] },
            { cells: ['Self-Management Education', 'At diagnosis and change of medication', 'Educate on exacerbation management; assess inhaler technique'] },
            { cells: ['Spirometry', 'At diagnosis', ''] },
            { cells: ['Influenza Vaccination', 'Annually', 'Per NAIS'] },
            { cells: ['Pneumococcal Vaccination (PPSV23)', '1 or 2 doses', 'Per NAIS'] },
          ],
        },
        {
          type: 'list',
          items: [
            {
              text: 'Refer to specialist for:',
              subItems: [
                'Cor pulmonale, bullous disease',
                'Initiation of home oxygen therapy (LTOT)',
                'Rapid decline in FEV1 (>60 ml/year)',
                'Symptoms disproportionate to FEV1',
                'Frequent infections',
                'Development of new symptoms (e.g. haemoptysis) or signs (cyanosis, peripheral oedema)',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Documentation Standards for CDMP Claims',
      blocks: [
        {
          type: 'text',
          content:
            'Clinical records for CDMP claims must be accurate, clear, and complete, containing:',
        },
        {
          type: 'list',
          items: [
            { text: 'Key findings from focused history and physical examination, including chief complaint and diagnoses of current acute and/or chronic medical issues' },
            { text: 'Indicated laboratory and/or radiological investigations to assist in diagnosis and/or management' },
            { text: 'Diagnoses and/or problem list' },
            { text: 'Treatment plan' },
            { text: 'Recommended care components as per Chapter Three Clinical Guidelines' },
          ],
        },
        {
          type: 'text',
          content:
            'MediSave co-payment: 15% per CDMP bill (waived from 1 Feb 2024 for Healthier SG-enrolled patients). Annual withdrawal limit: $500/$700 per patient, reset on 1 January each year. Two types of audit apply: Operational audit (documentation and MCAF completion) and Professional audit (clinical indicators, claim validity, accuracy of data submitted).',
        },
      ],
    },
  ],
};
