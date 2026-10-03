import { CpgDocument } from '../types';

export const masld: CpgDocument = {
  id: 'cpg-masld',
  condition: 'Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD)',
  source: '45 NUP CPG - Metabolic Dysfunction-Associated Steatotic Liver Disease.pdf',
  reviewDate: 'Updated November 2025 by Dr Phua Yiyong. Next review: November 2028.',
  advisors: 'Key FPs: Dr Amanda Loke, Dr Phua Yiyong. Specialist: Dr Mark Dinesh Muthiah (Senior Consultant, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Since 2023, MASLD is the new nomenclature for NAFLD/non-alcoholic fatty liver disease ("fatty liver") to better reflect the understanding of this liver disease. It lies on a spectrum: MASLD → MASH (metabolic dysfunction-associated steatohepatitis) → Fibrosis → Cirrhosis → HCC.' },
        { type: 'text', content: 'Importance: Most patients with MASLD are asymptomatic and receive care in primary care. Due to the multi-systemic and metabolic nature of the disease, patients with earlier stages are best managed in primary care. Early case identification, management and prognostication can mitigate huge morbidity and costs.' },
        { type: 'text', content: 'Epidemiology: Becoming the most common liver disease worldwide. Closely linked with rising obesity and metabolic syndrome. Local prevalence up to 40% (Goh GB, 2016).' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Most patients are asymptomatic and picked up incidentally via: health screening; raised liver enzymes; hepatic steatosis on imaging for other reasons; or when commencing medications requiring routine liver enzyme monitoring (e.g. statins, allopurinol).' },
        { type: 'text', content: 'If presenting with raised liver enzymes, MASLD usually shows: ALT 40–250 U/L (consider alternate pathology if higher); ALT higher than AST; some may have raised ALP; raised GGT (if done in external screening).' },
        { type: 'text', content: 'Diagnosis requires: (1) Hepatic steatosis on imaging or biopsy, AND (2) At least 1 of 5 cardiometabolic criteria:' },
        { type: 'list', items: [
          { text: 'BMI ≥23 kg/m² (or >25 for Caucasian) OR waist circumference >94cm (males) / >80cm (females)' },
          { text: 'Type 2 DM or pre-diabetes' },
          { text: 'Blood pressure ≥130/85 mmHg OR on specific antihypertensive treatment' },
          { text: 'Plasma triglycerides ≥1.70 mmol/L OR on lipid-lowering treatment' },
          { text: 'Plasma HDL ≤1.0 mmol/L (males) / ≤1.3 mmol/L (females) OR on lipid-lowering treatment' },
        ]},
        { type: 'text', content: 'Secondary causes of hepatic steatosis must be ruled out: large alcohol consumption (males >21 standard drinks/week; females >14/week); viral hepatitis (HepB and HepC — HepC is unsubsidised in NUP, test if high-risk behaviours); drug-induced liver injury (DILI from medication, CAM, supplements — refer LiverTox).' },
      ],
    },
    {
      heading: 'Initial Assessment',
      blocks: [
        {
          type: 'table',
          headers: ['Assessment Domain', 'Details'],
          rows: [
            { cells: ['History', 'Alcohol intake; concomitant medications; complementary and alternative medicines (CAM), herbs, supplements'] },
            { cells: ['Physical Examination', 'Blood pressure; BMI; waist circumference; hepatomegaly and stigmata of chronic liver disease'] },
            { cells: ['Imaging', 'Ultrasound of the liver'] },
            { cells: ['Lab — Comorbidities', 'HbA1c, lipid profile'] },
            { cells: ['Lab — Complications', 'FBC for thrombocytopenia; Liver function test (minimally AST/ALT)'] },
            { cells: ['Lab — Viral hepatitis', 'HBsAg, Anti-HBs antibodies; Anti-HCV for high-risk patients'] },
            { cells: ['Lab — Wilson disease', 'Strong family history of neurological or psychiatric illness → refer to gastroenterology for evaluation'] },
          ],
        },
      ],
    },
    {
      heading: 'FIB-4 Risk Stratification',
      blocks: [
        { type: 'text', content: 'Liver fibrosis is the key determinant of liver-related complications and mortality. FIB-4 is the preferred non-invasive test for MASLD — requires only simple blood tests (platelets, AST, ALT).' },
        { type: 'text', content: 'FIB-4 formula: Age (years) × AST (U/L) / [Platelet count (10⁹/L) × √ALT (U/L)]. Can be calculated at MDCalc. Note: FIB-4 may be inaccurate if conditions affect AST, ALT, or platelet count (e.g. low platelets from medication/infection/autoimmune thrombocytopenia; elevated AST/ALT from statins, alcohol, TCM). Higher rate of false positives in patients >65 years.' },
        {
          type: 'table',
          headers: ['FIB-4 Score', 'Management'],
          rows: [
            { cells: ['FIB-4 <1.3', 'Optimise metabolic and lifestyle in primary care. Repeat FIB-4: annually if T2DM or ≥2 cardiometabolic criteria; every 2 years if no T2DM and ≤2 cardiometabolic criteria.'] },
            { cells: ['FIB-4 1.3–2.67', 'Refer to gastroenterologist or for Vibration Controlled Transient Elastography (VCTE/Fibroscan) if available. If stiffness 8–10 kPa: intensive lifestyle/diet changes for weight loss. If stiffness >10 kPa: refer to gastroenterologist for specialised management. (Open access VCTE currently not available at NUP.)'] },
            { cells: ['FIB-4 >2.67', 'Refer to gastroenterologist.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Lifestyle: Abstain from regular alcohol (occasional 1–2 standard drinks/week permissible for special occasions). Regular physical exercise.' },
          { text: 'Metabolic comorbidities: DM — screen for diabetes in new MASLD with no known DM; manage per NUP DM CPG. Hypertension — per NUP CPG. Hyperlipidaemia — per NUP CPG.' },
          { text: 'Weight loss: Encourage >10% weight loss. Liver and cardiometabolic benefits begin at 5–7% weight loss. Target BMI 18.5–23 kg/m² (Asians) or 18.5–24.9 (Caucasians).' },
          { text: 'Vaccinations: Hepatitis A and B if non-immune. Influenza annually. Pneumococcal (18–64 years: one dose PPSV23; ≥65 years: one dose PCV13, then one dose PPSV23 1 year later).' },
          { text: 'Cancer Screening: Increased risk of colon and breast cancer in MASLD — adhere to current cancer screening recommendations. Insufficient evidence for HCC screening without cirrhosis.' },
        ]},
      ],
    },
    {
      heading: 'Management Algorithm',
      blocks: [
        { type: 'text', content: 'When incidental hepatic steatosis on imaging or raised liver enzymes → suspect MASLD → take history, PE, and investigations to exclude other causes. If other cause present → manage other liver diseases. If metabolic risk factors present → calculate FIB-4. If FIB-4 <1.3 → lifestyle modifications + metabolic comorbidity management + cancer screening + vaccinations → repeat AST, ALT, FBC at 1 year (T2DM or ≥2 metabolic risk factors) or every 2 years (no T2DM and <2 risk factors). If FIB-4 ≥1.3 → refer gastroenterologist. If absent risk factors with persistently raised liver enzymes or atypical features (≥2 family members with idiopathic/cryptogenic cirrhosis; features suggestive of Wilson\'s disease) → refer gastroenterologist.' },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'list', items: [
          { text: 'Annual FIB-4 scoring.' },
          { text: 'Good control of metabolic conditions: hypertension, diabetes, pre-diabetes, BMI, and hyperlipidaemia.' },
          { text: 'Up to date and appropriate vaccinations.' },
        ]},
      ],
    },
    {
      heading: 'Referrals — Elevated ALT Management',
      blocks: [
        { type: 'text', content: 'Refer to A&E: ALT >1000 IU; OR ALT at any level with signs of acute liver failure, jaundice with fever, or clinically ill.' },
        { type: 'text', content: 'Refer GE Direct Access: 200 ≤ ALT ≤ 1000 IU; solid mass (liver, pancreas, intra-abdominal) on imaging; jaundice with no fever; hepatomegaly, splenomegaly, ascites, oedema; cirrhosis suspected/newly diagnosed (raised bilirubin without jaundice, low albumin, low platelets); transaminitis with elevated globulin; unexplained weight loss (≥5% in 6–12 months).' },
        { type: 'text', content: 'Refer GE Routine: Persistently elevated ALT (120 ≤ ALT <200 IU) for ≥2 weeks (non-Hep B transaminitis); Hepatitis C.' },
        { type: 'text', content: 'For ALT elevated but <200 IU — Stepwise approach: (1) Review drugs/alcohol; (2) Review Hep B status; (3) Review Hep C status; (4) If both unknown, offer Hep B and Hep C screening with LFT. If clinically well and negative for both Hep B and C with no known cause: Repeat LFT in 1–2 weeks (ALT 120–200 IU) or 1–2 months (ALT normal to 120 IU). Based on repeat: if ≥120 IU → Table 1; if normal → repeat in 3–4 months; if raised but <120 → FBC, TFT, US liver. Final step: repeat LFT 3–4 months; if ≥120 IU → refer GE; if <120 IU and patient well → repeat in 6–12 months or discharge.' },
      ],
    },
    {
      heading: 'Role of Non-Doctor Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Dietician: Dietary counselling to aid management of metabolic conditions, especially weight loss.' },
          { text: 'Care Managers: Adjuvant counselling for management of metabolic conditions.' },
          { text: 'Care Coordinators: Encourage uptake of preventive health measures (vaccinations, cancer screening).' },
        ]},
      ],
    },
  ],
};
