import { CpgDocument } from '../types';

export const chronicKidneyDisease: CpgDocument = {
  id: 'chronic-kidney-disease',
  condition: 'Chronic Kidney Disease',
  source: 'NUP CPG',
  reviewDate: 'December 2025',
  advisors: 'Dr Chua Horng Ruey (Senior Consultant, NUH) / Dr Clara Ngoh (Consultant, NUH) / Dr Chua Yan Ting (Associate Consultant, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Chronic kidney disease (CKD) is defined as abnormalities of kidney function or structure persisting for at least three months, with implications for health. This guide aims to optimise and manage patients with CKD to the point of referral and management by the nephrologist.' },
        { type: 'text', content: 'Haematuria and proteinuria are the hallmarks of glomerular disease. In addition, hypertension, impaired kidney function and fluid retention can be present. Conditions covered include: (a) Chronic Glomerulonephritis (presenting as nephritic or nephrotic syndromes), (b) Nephropathies (e.g. secondary to underlying diabetes or other conditions) and (c) Chronic Kidney Diseases (with or without known underlying aetiology).' },
        { type: 'text', content: 'Epidemiology: In 2017, the estimated global prevalence of CKD was 9.1%. In Singapore, prevalence among residents aged 18 to 74 years was 8.8% in 2019–2020. CKD has remained in the top ten causes of death from 2009 to 2019 with CKD-related deaths rising by 76% within that decade.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Risk Factors for CKD include: Age (≥60 years), Gender (male > female), Diabetes mellitus, Hypertension, Obesity (BMI ≥27.5 kg/m²), Hyperuricaemia or gout, Smoking, Family history of CKD or ESRF, Hereditary kidney disease, History of AKI, Recurrent kidney stones, Nephrotoxic medications (including frequent or chronic NSAID use).' },
        { type: 'text', content: 'Diagnosis of CKD is made if any of the following is present for at least three months: GFR <60 mL/min/1.73m², UACR ≥3 mg/mmol (≥30 mg/g), or other marker of kidney damage.' },
        { type: 'text', content: 'HALT-CKD Criteria — Normal ACR: male <2.5 mg/mmol, female <3.5 mg/mmol. Microalbuminuria: male 2.5–30 mg/mmol, female 3.5–30 mg/mmol. Macroalbuminuria: ACR >30–70 mg/mmol. Overt Proteinuria: ACR >70 mg/mmol. ACR 30 mg/mmol is equivalent to PCR 50 mg/mmol and UTP 500 mg/day. ACR 70 mg/mmol is equivalent to PCR 100 mg/mmol and UTP 1,000 mg/day.' },
        { type: 'text', content: 'Common Causes of CKD and ESRF: (1) Diabetic kidney disease; (2) Hypertensive nephrosclerosis; (3) Primary glomerulonephritis (GN); (4) Autoimmune diseases — SLE; (5) Cystic diseases — polycystic kidney disease; (6) Others — chronic pyelonephritis, obstruction.' },
      ],
    },
    {
      heading: 'Management — Targets of Treatment (HALT CKD)',
      blocks: [
        { type: 'table', headers: ['Goal', 'Target / Action'], rows: [
          { cells: ['Diagnose CKD', 'Add "Chronic Renal Failure" to visit diagnosis and problem list if UACR ≥3 mg/mmol or eGFR <60 mL/min/1.73m² for more than 3 months apart'] },
          { cells: ['Lifestyle Modification', 'Refer all patients age <80 years for HALT-CKD counselling; stop smoking; encourage weight loss; counsel on low salt (<2 g/day) diet; counsel on low protein diet (<0.8 g/kg/day) for CKD G3B patients without DM; advise 150 min/week moderate intensity exercise'] },
          { cells: ['Maximize ACE-I/ARB', 'Optimise dosages until maximal recommended dose, normoalbuminuria + BP target achieved, or maximal tolerated dose. Order ACE-I/ARB panel in 2–4 weeks with CM review'] },
          { cells: ['Optimize BP', '<130/80 mmHg for ALL patients; <140/90 mmHg for older patients, high fall risk, multiple co-morbidities'] },
          { cells: ['Optimize HbA1c', '≤7% for age ≤75 years; ≤8% for age 76–80 years'] },
          { cells: ['Optimize LDL-C', '<1.8 mmol/L for DM patients; <2.6 mmol/L for non-DM patients; more stringent for patients with ASCVD'] },
          { cells: ['Start SGLT-2 Inhibitor', 'Can be started if patient is on ACE-I/ARB; multiple benefits including weight loss, BP and DM control, reducing albuminuria, retarding progression, reducing mortality'] },
          { cells: ['Co-manage with Renal', 'Refer CKD G3B, G4 and G5 or persistent significant albuminuria to Nephrology'] },
        ]},
      ],
    },
    {
      heading: 'Use of SGLT2 Inhibitors in CKD',
      blocks: [
        { type: 'text', content: 'SGLT2 inhibitors have been shown to reduce risk of worsening kidney function, onset of kidney failure or death from renal causes, with the added benefit of reducing risk of CV events in patients with CKD, with or without DM.' },
        { type: 'text', content: 'An acute eGFR decline may occur at 2–4 weeks after initiation of an SGLT2 inhibitor. An initial rise in serum creatinine of up to 30% is not associated with long-term kidney function loss, and treatment should not be discontinued. For patients with CKD without DM, the recommended dosage of Dapagliflozin and Empagliflozin is limited to 10 mg daily.' },
        { type: 'list', items: [
          { text: 'Criteria to meet before initiating SGLT2i: Patient initiated on ACE-I/ARB with appropriate eGFR; if significant proteinuria (TUP >1 g/day) for patients without DM, consider referral to Nephrology; ensure adequate counselling on benefits, hydration, genital hygiene, sick day precaution.' },
        ]},
      ],
    },
    {
      heading: 'Other Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Stop use of nephrotoxic drugs', children: [
            { text: 'NSAID (except Aspirin)' },
            { text: 'Antibiotics: Sulphonamides, Aminoglycosides' },
            { text: 'Contrast media' },
          ]},
          { text: 'Diet advice for early CKD: Low salt, low protein (if applicable), adequate hydration. Allopurinol may need to be dose-adjusted (refer to Gout CPG).' },
        ]},
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        { type: 'text', content: 'Acute Kidney Injury (AKI): Defined as increase in serum creatinine ≥26.5 μmol/L within 48 hours, or ≥1.5 times baseline within 7 days, or urine volume <0.5 ml/kg/h for 6 hours. Evaluate for pre-renal (dehydration), renal (medications, autoimmune), and post-renal (obstruction) causes. Repeat non-fasting sodium, potassium, creatinine within 3–7 days.' },
        { type: 'text', content: 'Handling cessation of ACEi/ARB or SGLT2i post-hospital discharge: Discontinuation of ACEi/ARBs was associated with an almost twofold increased risk of progression to advanced CKD. For clinically stable patients with potentially good health outcomes, consider stepwise re-initiation and uptitration.' },
        { type: 'text', content: 'Use in Elderly: Research suggests comparable effectiveness and safety to younger populations. However, careful monitoring and awareness of potential drug interactions and adverse effects (postural hypotension) are crucial.' },
        { type: 'text', content: 'Use in Advanced CKD: Dapagliflozin (DAPA-CKD) can be continued until dialysis. ACEi/ARB with renally adjusted doses can be continued for advanced CKD patients, unless hyperkalaemia, hypotension, or unusually rapid worsening of eGFR occurs.' },
      ],
    },
    {
      heading: 'Referral Criteria',
      blocks: [
        { type: 'table', headers: ['Clinical Problem', 'Initial Management', 'Disposition'], rows: [
          { cells: ['Rise in creatinine >2x baseline', 'Repeat within 3–7 days', 'Refer A&E'] },
          { cells: ['Rise in creatinine >1.5x baseline (no ACEi/ARB change)', 'Repeat within 3–7 days', 'Direct access Nephro'] },
          { cells: ['Rise in creatinine >1.5x baseline (ACEi/ARB increased)', 'Stop/decrease ACEi/ARB, recheck Cr within 2 weeks; if back to baseline: Routine Nephro; if >30% rise: Early Nephro; if >50% rise: Direct access Nephro', ''] },
          { cells: ['Hyperkalaemia K+ ≥6', 'Hyperkalaemia management per protocol', 'Refer A&E'] },
          { cells: ['Hyperkalaemia K+ 5.6–5.9', 'Repeat K+ within 1 week; if remains 5.6–5.9 → Direct access Nephro', ''] },
          { cells: ['Fluid overload in CKD G5 despite ≥120mg daily loop diuretic', '', 'Refer A&E'] },
          { cells: ['Fluid overload in CKD G3–G4 despite loop diuretic', '', 'Early Nephro appt'] },
          { cells: ['CKD G5 (2 occasions over 90-day period, asymptomatic)', '', 'Early Nephro appt'] },
          { cells: ['CKD G3B–G4 with eGFR decline >5 mL/min/1.73m² over 3 months', '', 'Early Nephro appt'] },
          { cells: ['Average eGFR decline >10 mL/min/1.73m² over 12 months', '', 'Early Nephro appt'] },
          { cells: ['UPCR >300 or UACR >200 mg/mmol (non-diabetic)', '', 'Direct access Nephro'] },
          { cells: ['UPCR >300 or UACR >200 mg/mmol (diabetic)', '', 'Routine Nephro appt'] },
          { cells: ['UPCR >100 or UACR >70 mg/mmol with haematuria', '', 'Early Nephro appt'] },
          { cells: ['UPCR >100 or UACR >70 mg/mmol, no haematuria (non-diabetic)', 'Optimise ACEi/ARB; if persistent UPCR >100 or UACR >70 → Routine Nephro', ''] },
          { cells: ['RPGN suspected', '', 'Refer A&E'] },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Blood Pressure measurement', 'Twice a year', 'ACEi and ARBs should be used for BP control when proteinuria is present'] },
          { cells: ['Weight and BMI', 'Twice a year', ''] },
          { cells: ['Lipid profile', 'Annually', ''] },
          { cells: ['Diabetes screening', 'Annually', 'Or more frequent in pre-diabetes or diabetes'] },
          { cells: ['Kidney Function (Na, K, Cr and eGFR)', 'Twice a year', ''] },
          { cells: ['Albuminuria (uPCR or uACR)', 'Twice a year', ''] },
          { cells: ['Smoking assessment', 'Annually for smokers', 'Once-off for non-smokers unless change in smoking habit'] },
          { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under NAIS'] },
          { cells: ['Pneumococcal, Herpes Zoster, COVID-19 Vaccinations', 'As recommended under NAIS/NCIS', ''] },
          { cells: ['Hepatitis B Vaccination', 'As directed by Nephrology', ''] },
        ]},
      ],
    },
  ],
};
