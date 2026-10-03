import { CpgDocument } from '../types';

export const diabetesMellitus: CpgDocument = {
  id: 'cpg-diabetes-mellitus',
  condition: 'Diabetes Mellitus',
  source: '22 NUP CPG - Diabetes Mellitus.pdf',
  reviewDate: 'January 2026',
  advisors: 'Dr Khoo Chin Meng (Senior Consultant, Department of Medicine, NUH)',
  sections: [
    {
      heading: 'Introduction — Classification',
      blocks: [
        { type: 'list', items: [
          { text: 'Type 1 DM (T1DM): β-cell destruction due to autoimmune process. Commonly occurs in childhood/adolescence but can occur at any age. Some adults may present resembling T2DM (LADA — Latent Autoimmune Diabetes of Adulthood).' },
          { text: 'Type 2 DM (T2DM): Most common form of diabetes. Characterised by disorders of insulin action and insulin secretion. Risk associated with increasing age, obesity and lack of physical activity. Frequently undiagnosed for many years as hyperglycaemia develops gradually.' },
          { text: 'Gestational Diabetes (GDM): Onset or first recognition of any degree of glucose intolerance during pregnancy. Applies irrespective of whether insulin is used for treatment or whether condition persists after pregnancy.' },
          { text: 'Other Specific Types: Genetic defects of β-cell function or insulin action, diseases of the exocrine pancreas, diabetes induced by other endocrinopathies, drugs, toxins, infections. MODY (Maturity Onset Diabetes of the Young) — early age onset, autosomal dominant, absence of autoimmunity.' },
        ]},
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Screening should be considered in adults of any age with one or more risk factors. Without risk factors, testing should begin at 40 years. Screening every 3 years for normal HbA1c or glucose tolerance; annually for IFG or IGT.' },
        { type: 'text', content: 'Risk factors: Overweight/obesity (Asian BMI >23 kg/m²), first degree relative with DM, high risk race/ethnicity, women who delivered ≥4 kg baby or previously diagnosed with GDM, hypertension (>140/90 mmHg), HDL <1.0 mmol/L (male)/<1.3 mmol/L (female) and/or triglyceride >2.2 mmol/L, polycystic ovarian syndrome, history of cardiovascular disease.' },
        { type: 'text', content: 'Screening using HbA1c: ≤6.0% — low probability of DM, no further test needed; 6.1–6.9% — proceed to FPG or OGTT; ≥7.0% — high probability, diagnose and manage as DM.' },
        { type: 'text', content: 'Intermediate categories (Pre-diabetes): Impaired Fasting Glycaemia (IFG): FPG 6.1–6.9 mmol/L and 2H-OGTT <7.8 mmol/L. Impaired Glucose Tolerance (IGT): FPG <7.0 mmol/L and 2H-OGTT 7.8–11.0 mmol/L.' },
        { type: 'text', content: 'Diagnosis — In patients with typical symptoms, DM can be diagnosed if any one is present: (1) Random plasma glucose ≥11.1 mmol/L; (2) FPG ≥7.0 mmol/L; (3) 2-hour post-challenge plasma glucose ≥11.1 mmol/L. Glucometers should NOT be used for diagnosis. Other individuals should have a repeat test on a subsequent day.' },
      ],
    },
    {
      heading: 'Treatment Targets',
      blocks: [
        { type: 'table', headers: ['Test', 'General Target', 'Frail patient susceptible to hypoglycaemia'], rows: [
          { cells: ['HbA1c (%)', '<7%', '7.0–8.5%'] },
          { cells: ['Pre Meal Glucose (mmol/L)', '4.0–7.0', '6.5–9.0'] },
          { cells: ['2HPP (mmol/L)', '5–10', '12'] },
        ]},
        { type: 'text', content: 'HbA1c: Check 3–4 monthly if unstable glycaemic control, recent adjustment in therapy, or intensive insulin therapy. Check 6-monthly if stable glycaemic control and meeting treatment goals. Lower HbA1c to ≤6.5% may be considered for some T2DM patients with short duration, long life expectancy, no significant CV complications. BMI target: <25 kg/m² (Asian: <23 kg/m²).' },
      ],
    },
    {
      heading: 'Lifestyle Modification',
      blocks: [
        { type: 'list', items: [
          { text: 'Medical Nutrition Therapy: Individuals with diabetes should receive individualised medical nutritional therapy provided by a dietitian. Consistently distribute carbohydrate intake throughout the day. Weight reduction of 5–10% for overweight/obese patients. Daily consumption of 20–35 g of dietary fibre. Minimize or avoid sugary beverages entirely.' },
          { text: 'Physical Activity: At least 150 mins/week of moderate to vigorous aerobic exercise spread over at least 3 days per week, with no more than 2 consecutive days between bouts. Pre-exercise evaluation important for sedentary/older diabetic individuals.' },
          { text: 'Avoidance of Smoking: Smoking cessation counselling and support should be routine. Nicotine replacement therapy is subsidized (MAF claimable) at pharmacist-led smoking cessation clinics.' },
        ]},
      ],
    },
    {
      heading: 'Glucose-Lowering Agents',
      blocks: [
        { type: 'table', headers: ['Drug', 'Initial Dose', 'Maximum Dose', 'Common ADR', 'Remarks / Contraindications'], rows: [
          { cells: ['Metformin IR (S1) 250/500 mg', '500 mg OM', '750 mg TDS', 'Nausea, anorexia, vomiting, diarrhoea, abdominal cramps, cholestatic hepatitis; risk of lactic acidosis in renal/hepatic insufficiency', 'Preferred initial agent. HbA1c lowering 1–1.5%. Take with or after meals. Dose adjust in renal impairment: eGFR 45–59 normal dose; 30–44 max 500 mg BD; <30 stop. Long-term use may cause B12 deficiency.'] },
          { cells: ['Dapagliflozin (Forxiga) (NS) 10 mg', '5 or 10 mg once daily', '10 mg once daily', 'Thirst, increased urination', 'SGLT-2 inhibitors lower HbA1c 0.6–0.9%, body weight and BP. Improved CV outcomes. Avoid in patients at risk of DKA. Not recommended at eGFR <30 (for glycaemic control). MAF subsidy ceased Aug 2024; consider switching to empagliflozin (subsidised SDL2) for cost concerns.'] },
          { cells: ['Empagliflozin (Jardiance) (S2) 10/25 mg', '10 or 25 mg once daily', '25 mg once daily', 'Thirst, increased urination', 'See above. Consider as class; choose lowest cost option.'] },
          { cells: ['Dulaglutide (Trulicity) SC 0.75/1.5 mg weekly', '0.75 mg weekly; titrate to 1.5 mg after 1 month', '1.5 mg weekly', 'Predominantly GI (nausea, vomiting, diarrhoea)', 'GLP-1 receptor agonist. HbA1c lowering 1–1.5%. Significant weight loss (up to 9.6 kg). Do NOT use with DPP-4 inhibitors. Contraindicated: personal/family history of MTC or MEN2; pregnancy (washout ≥6 weeks). Caution: pancreatitis, gastroparesis, IBD. Initiated/endorsed by senior doctors.'] },
          { cells: ['Glipizide (S1) 5 mg', '2.5 mg OM', '15 mg BD', 'Very infrequent mild nausea, vomiting, diarrhoea, allergic reactions', 'Sulfonylurea. HbA1c lowering 1–1.5%. Risk of hypoglycaemia and weight gain. Use second generation SUs. Avoid glibenclamide in elderly ≥60 years or eGFR <60.'] },
          { cells: ['Gliclazide (S1) 80 mg', '40 mg OM', '160 mg BD', '(see above)', ''] },
          { cells: ['Linagliptin (Trajenta) (NS) 5 mg — MAF eligible in T2DM with CKD ≥3B', '5 mg once daily', '5 mg once daily', '', 'DPP-4 inhibitor. HbA1c lowering 0.5–0.8%. Weight neutral. Does not require dose adjustment for declining renal function. Consider when SU/SGLT-2 not suitable.'] },
          { cells: ['Sitagliptin (Januvia) (S2) 50/100 mg', '50 or 100 mg once daily', '100 mg once daily', '', 'DPP-4 inhibitor. Dose adjust in renal impairment: eGFR ≥45 → 100 mg; eGFR 30–44 → 50 mg; eGFR <30 → 25 mg.'] },
        ]},
        { type: 'text', content: 'Initiate glucose-lowering agents when lifestyle intervention is insufficient. Oral agents preferred. Do not delay insulin in patients with symptomatic hyperglycaemia, unexplained recent weight loss, ketonuria or DKA. Consider insulin use if HbA1c >10% or random glucose >16.7 mmol/L. Insulin therapy should be considered if optimal combination therapy fails (2 consecutive HbA1c >8% over 3–6 months interval).' },
      ],
    },
    {
      heading: 'Prevention of Cardiovascular Disease',
      blocks: [
        { type: 'list', items: [
          { text: 'BP control: Target <130/80 mmHg for most DM patients. ACE-I/ARB is preferred for patients with DM and proteinuria or CKD.' },
          { text: 'Lipid control: Target LDL <1.8 mmol/L for DM patients with established CVD or additional risk factors. (See Lipids CPG)' },
          { text: 'Antiplatelet therapy: Low-dose aspirin (75–162 mg daily) for DM patients with established cardiovascular disease (secondary prevention). Not routinely recommended for primary prevention in low-risk DM patients.' },
        ]},
      ],
    },
    {
      heading: 'Prevention and Management of Complications',
      blocks: [
        { type: 'list', items: [
          { text: 'Retinopathy: Annual dilated retinal photography (DRP). Refer ophthalmologist if retinopathy detected.' },
          { text: 'Nephropathy: Annual urine albumin-creatinine ratio (UACR) and serum creatinine/eGFR. ACE-I/ARB if proteinuria present. SGLT-2 inhibitors for cardiorenal benefits.' },
          { text: 'Neuropathy/Foot: Annual diabetic foot screening (DFS). Examine feet at each visit if gross neuropathy or PVD.' },
          { text: 'Hypoglycaemia management: For mild/moderate (patient conscious): 15–20 g fast-acting carbohydrates, repeat if glucose <4 mmol/L after 15 minutes. For severe (patient unable to swallow or unconscious): Glucagon IM/SC or IV dextrose if glucagon not available or fails.' },
          { text: 'Hyperglycaemia: For BGL ≥20 mmol/L, consult family physicians. For suspected HHS or DKA (fever, drowsiness, vomiting, abdominal pain, dehydration), rapid hydration with IV normal saline, IV insulin, send to A&E.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Parameter', 'Frequency'], rows: [
          { cells: ['HbA1c', '3–6 monthly (3–4 monthly if poor control or recent adjustment)'] },
          { cells: ['Weight', 'Every 2–6 months'] },
          { cells: ['Blood Pressure', 'Every 2–6 months'] },
          { cells: ['Peripheral Neuropathy examination', 'Yearly'] },
          { cells: ['DM Panel test (HbA1c, Lipid Panel, Serum Creatinine, UACR)', 'Yearly'] },
          { cells: ['ECG', 'Baseline once upon diagnosis'] },
          { cells: ['Dilated Retinal Photography (DRP)', 'Yearly'] },
          { cells: ['Diabetic Foot Screening (DFS)', 'Yearly'] },
          { cells: ['Smoking assessment', 'Advise to stop at each visit'] },
        ]},
      ],
    },
    {
      heading: 'Pre-Diabetes Management',
      blocks: [
        { type: 'text', content: 'Pre-diabetes: IFG (FPG 6.1–6.9 mmol/L) or IGT (2H-OGTT 7.8–11.0 mmol/L). Both represent increased risk for DM and cardiovascular disease.' },
        { type: 'list', items: [
          { text: 'Lifestyle intervention: Weight loss of 5–7% of body weight through dietary changes and exercise.' },
          { text: 'Diet: Reduce total calorie intake; choose complex carbohydrates; increase dietary fibre; reduce saturated fat and sugar.' },
          { text: 'Weight Management: BMI target <23 kg/m² for Asians.' },
          { text: 'Physical Activity: At least 150 min/week of moderate-intensity aerobic exercise.' },
          { text: 'Pharmacological: Metformin can be considered for individuals with IGT or IFG and other risk factors (BMI >35, age <60, prior GDM).' },
          { text: 'Follow-up: Annually for patients with IFG or IGT; 3-yearly for those who revert to normal glucose tolerance.' },
        ]},
      ],
    },
  ],
};
