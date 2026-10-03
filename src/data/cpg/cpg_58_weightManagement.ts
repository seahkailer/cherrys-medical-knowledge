import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 58 NUP CPG — Weight Management in Primary Care (Jan 2024)
// ---------------------------------------------------------------------------
export const weightManagement: CpgDocument = {
  id: 'cpg-weight-management',
  condition: 'Weight Management in Primary Care',
  source: '58 NUP CPG - Weight Management.pdf',
  reviewDate: 'Reviewed January 2024 by Dr Chua Ying Xian and Dr Cheah Ming Hann. Next review: January 2026.',
  advisors: 'Dr Cheah Ming Hann / Dr Chua Ying Xian',
  sections: [
    {
      heading: 'Introduction & Definitions',
      blocks: [
        {
          type: 'text',
          content:
            'Obesity is a major risk factor for CVD, stroke, DM, musculoskeletal disorders and some cancers. Effective weight management requires multi-disciplinary care: diet, exercise, behavioural modification and medications. Obesity is a chronic condition with complex interactions — approach with empathy.',
        },
        {
          type: 'table',
          headers: ['BMI (kg/m²)', 'Category', 'CVD Risk (Asian cut-offs)'],
          rows: [
            { cells: ['< 18.5', 'Underweight', 'Low (increased risk of osteoporosis, sub-fertility, nutritional deficiencies)'] },
            { cells: ['18.5 – 22.9', 'Normal (Asian)', 'Low'] },
            { cells: ['23.0 – 27.4', 'Overweight (Asian)', 'Moderate'] },
            { cells: ['27.5 – 32.4', 'Obese Class 1 (Asian)', 'High'] },
            { cells: ['32.5 – 37.4', 'Obese Class 2 (Asian)', 'Very high'] },
            { cells: ['≥ 37.5', 'Obese Class 3 (Asian)', 'Very high'] },
          ],
        },
        {
          type: 'text',
          content:
            'Asian BMI cut-off ≥23 kg/m² — at higher risk for DM, HTN. Screen for CVD risk factors. Waist circumference cut-offs for Asians: ≥90 cm (men), ≥80 cm (women). Metabolic syndrome: 3 of 5 criteria — abdominal obesity ≥90/80 cm; TG ≥1.7 mmol/L; HDL <1.0 (men)/<1.3 (women) mmol/L; BP ≥130/85 mmHg; fasting glucose ≥5.6 mmol/L.',
        },
      ],
    },
    {
      heading: 'Screening & Assessment',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Measure BMI routinely, at least every 6 months; consider measuring waist circumference' },
            { text: 'Assess causes (secondary causes: Cushing\'s, hypothyroidism, polycystic ovarian disease, hypogonadism, drug-induced); complications; risk factors; readiness to lose weight' },
            { text: 'Goal: reduce body weight 5–10% over 6–12 months' },
          ],
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: '1. Dietary Counselling',
              children: [
                { text: 'Caloric deficit of 500 kcal below estimated daily energy requirement → weight loss ~0.5 kg/week' },
                { text: 'Balanced, nutrient-reduced diet (restricted fat, moderate-high complex carbs, moderate protein)' },
                { text: 'Maintain diet higher in vegetables, legumes, fruits, whole grains; lower in fat, sugar, refined carbs; avoid sugar-sweetened beverages; avoid skipping meals' },
              ],
            },
            {
              text: '2. Physical Activity (F.I.T.T. principle)',
              children: [
                { text: 'At least 150–420 minutes/week moderate intensity for weight loss (>300 minutes for significant weight loss/maintenance)' },
                { text: 'Aerobic training + resistance training for core and muscle groups' },
                { text: 'Reduce sedentary periods: get up and move 2–5 minutes every hour of sitting' },
              ],
            },
            {
              text: '3. Behavioural Modification — Motivational Interviewing',
              children: [
                { text: 'Ascertain stage of readiness: Pre-contemplation → Contemplation → Preparation → Action → Maintenance' },
                { text: 'Stimulus control, self-monitoring, social support, coping with relapses' },
                { text: 'Consider referral to psychologist for motivational interviewing' },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Pharmacotherapy',
      blocks: [
        {
          type: 'text',
          content:
            'Indications: BMI ≥30 kg/m², or BMI 27.5–29.9 kg/m² in Asians with comorbidities (HTN, Type 2 DM). Medisave claimable with CDMP diagnoses (DM, HTN, hyperlipidaemia). Used as adjunct to lifestyle modification only.',
        },
        {
          type: 'table',
          headers: ['Drug', 'Dosing', 'Key Adverse Effects'],
          rows: [
            { cells: ['Orlistat (Xenical) — Available in NUP', '120 mg with each main meal (up to TDS); omit if meal missed or no fat', 'Steatorrhea, bloating, flatulence, abdominal pain. Contraindicated in pregnancy, breastfeeding, cholestasis, malabsorption. Discontinue if <4% weight loss after 3 months.'] },
            { cells: ['Liraglutide (GLP-1 agonist) — Not in NUP', 'SC 0.6 mg OD up to 3 mg OD', 'Nausea, vomiting, diarrhoea, constipation. Contraindicated in pregnancy, personal/family history of medullary thyroid carcinoma.'] },
            { cells: ['Semaglutide (GLP-1 agonist) — Not in NUP', 'SC 0.25 mg weekly up to 2.4 mg weekly', 'As above for liraglutide.'] },
            { cells: ['Orlistat, phentermine, naltrexone-bupropion (Contrave) — Not in NUP', 'Varies', 'See specific drug inserts'] },
          ],
        },
      ],
    },
    {
      heading: 'Bariatric Surgery',
      blocks: [
        {
          type: 'text',
          content:
            'Indications: BMI ≥40 kg/m² (or ≥37.5 in Asians), or BMI ≥35 kg/m² (or ≥32.5 in Asians) with obesity-related conditions (DM, HTN, hyperlipidaemia, fatty liver, PCOS, OSA, metabolic syndrome). Types: sleeve gastrectomy (restrictive), Roux-en-Y gastric bypass (combined), biliopancreatic diversion (malabsorptive). Refer to hospital weight management clinic for BMI ≥37.5 with no risk factors, or ≥32.5 with CHD risk factors.',
        },
      ],
    },
    {
      heading: 'Unintentional Weight Loss',
      blocks: [
        {
          type: 'text',
          content:
            'Unintentional weight loss >5% of usual body weight over 6–12 months should raise suspicion for serious medical or psychiatric illness. Patients with BMI <18.5 kg/m² are at higher risk of nutritional deficiency, osteoporosis and sub-fertility.',
        },
        {
          type: 'text',
          content:
            'Major causes: malignancy, gastrointestinal disease, endocrine disease (hyperthyroidism, DM), infectious diseases (HIV, TB), advanced chronic disease (heart, lung, kidney), neurological disease (stroke, dementia, Parkinson\'s), psychiatric disorders (depression, eating disorders). Mnemonic for older adults: MEALS ON WHEELS — Medications+Malignancy, Emotional (depression), Alcohol+Abuse+Anorexia, Late-life paranoia, Swallowing/Systemic; Oral factors, Nosocomial infections/No money; Wandering, Hyperthyroidism/HIV/Hyperglycaemia, Enteric problems, Eating problems, Low-salt/cholesterol diets, Stones/Social factors.',
        },
        {
          type: 'list',
          items: [
            { text: 'Initial investigations: FBC, TFT, plasma glucose/HbA1c, ESR, creatinine, LFT, CXR, HIV/Hepatitis C as appropriate, age-appropriate cancer screening' },
            { text: 'Manage underlying cause; multidisciplinary team (dietitian, speech, OT, physio, social worker)' },
            { text: 'Avoid appetite stimulants and high-calorie supplements (no long-term survival benefit)' },
          ],
        },
      ],
    },
  ],
};
