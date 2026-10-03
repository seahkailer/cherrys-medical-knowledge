import { CpgDocument } from '../types';

export const hypertension: CpgDocument = {
  id: 'cpg-hypertension',
  condition: 'Hypertension',
  source: '30 NUP CPG - Hypertension.pdf',
  reviewDate: 'October 2028',
  advisors: 'Dr Kwan Yew Seng, Dr Anand Sankar; Specialist Advisor: Dr Lim Toon Wei (Senior Consultant, Department of Cardiology, National University Heart Centre, Singapore)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content: 'Hypertension or high blood pressure is a chronic medical condition in which the arterial blood pressure is elevated. Persistent hypertension is one of the key risk factors for cardiovascular diseases such as heart attack, stroke, and heart failure as well as other diseases like kidney failure. It is often known as a silent killer as it rarely causes symptoms, and many people go undiagnosed. Ischaemic heart disease (IHD) and stroke are the third and fourth leading causes of death in Singapore in 2022. Hypertensive diseases together constitute the fifth leading cause of death.',
        },
        {
          type: 'text',
          content: 'Epidemiology: Hypertension affects an estimated 1.28 billion people worldwide. In Singapore, the 2022 National Population Health Survey reported that over one in three residents (37%) aged 18–74 had hypertension, and that more than half (53%) were previously undiagnosed. More males (44.0%) were hypertensives compared with females (30.2%) in 2021–2022. Prevalence increases with age: ~8.1% for ages 18–29 to 76.8% for ages 70–74. About two-thirds (64.8%) of known hypertensives attending health examination had poor BP control.',
        },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'Recommended Screening: Any patient aged ≥18 years during any clinical visit.',
        },
        {
          type: 'table',
          headers: ['Systolic BP (mmHg)', 'Diastolic BP (mmHg)', 'Category', 'Recommended Action'],
          rows: [
            { cells: ['<130', '<85', 'Normal', '"Normal BP". Advise BP check biennially.'] },
            { cells: ['130–139', '85–89', 'High-Normal BP', 'Advise lifestyle modification. Check BP annually or more frequently if cardiovascular risk factors are present.'] },
            { cells: ['140–159', '90–99', 'Grade 1 Hypertension', 'Without CV risk factors: try lifestyle modification for 3–6 months. With high risk (established CV/renal disease, DM, or target organ damage): initiate drug treatment with lifestyle measures at the same time.'] },
            { cells: ['160–179', '100–109', 'Grade 2 Hypertension', 'Low risk (0–2 CV risk factors): can try lifestyle modification for several weeks; otherwise initiate drug treatment with lifestyle measures.'] },
            { cells: ['≥180', '≥110', 'Grade 3 Hypertension', 'Initiate drug treatment with lifestyle measures at the same time.'] },
            { cells: ['≥140', '<90', 'Isolated Systolic Hypertension', 'Graded according to same ranges of systolic BP; corresponding recommendations apply.'] },
          ],
        },
        {
          type: 'text',
          content: 'Blood Pressure Measurement: Measure at rest several times on several occasions, supine or sitting, using a non-invasive manometer. Measure BP in both arms; all subsequent readings on the arm with the higher reading. Measure sitting (or supine) and 2 minutes after standing for elderly and diabetic patients. Patient should rest 5 minutes, empty bladder if needed, refrain from smoking/caffeine/exercise/eating at least 30 minutes before. Select proper cuff size. For auscultatory method: inflate to ~30 mmHg above systolic, deflate at 2–3 mmHg per heartbeat, diastolic reading corresponds to Korotkoff phase V. For electronic method: if first BP reading is abnormal, take two additional readings with at least 1 minute between them and average the last 2.',
        },
        {
          type: 'text',
          content: 'Initial Assessment — Clinical Assessment: determine secondary cause, target organ damage (TOD), other cardiovascular risk factors. Use SG-FRS-2023 to calculate patient\'s 10-year risk.',
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        {
          type: 'text',
          content: 'Goals of Treatment: prevent cardiovascular and renal complications; treat the whole patient and associated conditions/risk factors; avoid drug side effects; majority may require two or more medications; aim for BP control within 3 months.',
        },
        {
          type: 'text',
          content: 'Treatment Targets (ACE Clinical Guidance Dec 2023): Special conditions: <150/100 mmHg in pregnant patients without TOD (do not decrease diastolic BP to <80 mmHg); <140/90 mmHg in pregnant patients with TOD; <220/120 mmHg during first 24 hrs of acute stroke (lower with care by 10–15%); lower by 10/5 mmHg if BP >140/90 mmHg after acute phase of stroke.',
        },
        {
          type: 'table',
          headers: ['Clinic (mmHg)', 'HBPM or Daytime ABPM (mmHg)', 'Night-time ABPM (mmHg)', '24-hour ABPM (mmHg)'],
          rows: [
            { cells: ['120/80', '120/80', '100/65', '115/75'] },
            { cells: ['130/80', '130/80', '110/65', '125/75'] },
            { cells: ['140/90', '135/85', '120/70', '130/80'] },
            { cells: ['160/100', '145/90', '140/85', '145/90'] },
          ],
        },
        {
          type: 'table',
          headers: ['Criteria', 'Recommended TCU Frequency', 'Alternate Dr/CM Visit'],
          rows: [
            { cells: ['Good BP control AND no complication', '6 months', '✓'] },
            { cells: ['Good BP AND elderly or has complications (IHD, CVA, renal impairment)', '3–4 months', '✓'] },
            { cells: ['Adherent to follow-up and treatment, with/without comorbidities, stable but sub-optimal control', '3–4 months', '✓'] },
            { cells: ['ACEi/ARB initiation or up-titration (K and Cr to be done in 2 weeks)', '2–4 weeks', '✓'] },
            { cells: ['Poor BP control AND requires titration of medication', '2–4 weeks', ''] },
          ],
        },
        {
          type: 'text',
          content: 'Lifestyle Modification and Patient Education: lifestyle modification is an important component and should be recommended. Use a team-based approach. All newly diagnosed hypertensive patients should be referred to a care manager for education. Health education topics: target BP, benefits and side effects of treatment, risks of hypertension, importance of long-term adherence, stress reduction. Non-pharmacological: restrict salt to 5–6g/day; moderate alcohol (≤2 standard drinks/day for men, ≤1 for women); increase vegetables, fruits, low-fat dairy; decrease saturated/total fats; reduce weight to BMI <23 kg/m² and waist circumference <90cm (men)/<80cm (women) for Asians; at least 30 minutes moderate dynamic exercise 5–7 days/week; offer assistance to quit smoking.',
        },
        {
          type: 'text',
          content: 'Initial Drug Choices — Uncomplicated Hypertension: ACE-I/ARB, Calcium Channel Blocker (CCB), Diuretic. Compelling Indications: Diabetes Mellitus → ACE-I/ARB; CKD/Proteinuria → ACE-I/ARB; Heart Failure → ACE-I/ARB (preferred), Beta-blocker (preferred), Diuretic; Isolated systolic hypertension (older persons) → Diuretic, Long-acting CCB; Myocardial infarction → Beta-blocker, ACE-I/ARB (LV dysfunction). Contraindications: Asthma/Bronchospasm → Beta-blocker (caution); 2°/3° Heart Block → Beta-blocker, Verapamil; Gout → Diuretic; Bilateral Renal Artery Stenosis → ACE-I, ARB; Pregnancy → ACE-I, ARB, Diuretic. Start with a low-dose long-acting once-daily drug and titrate dose.',
        },
        {
          type: 'text',
          content: 'Drug Combinations: consider low-dose dual therapy from two different anti-hypertensive classes. Note: Beta-blocker + ACE-I/ARB does not produce synergistic BP reduction; ACE-I + ARB worsens GFR and potentiates hyperkalaemia — avoid; Beta-blocker + diuretic increases risk of developing diabetes mellitus.',
        },
        {
          type: 'table',
          headers: ['Drug (class)', 'Recommended Dose Range', 'Renal Dose Adjustment', 'Common ADR', 'Contraindications / Precautions'],
          rows: [
            { cells: ['Lisinopril (S1) — ACE-I, 5/10/20mg', '5mg OD (elderly 2.5mg OD) to 40mg OD', 'CrCl <10: initial 2.5mg OD; CrCl 10–30: initial 2.5–5mg OM', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Enalapril (S1) — ACE-I, 5/10/20mg', '5mg OM (elderly 2.5mg OD) to 20mg BD', 'CrCl 10–30: initial 2.5mg/day in 1–2 divided doses, max 20mg/day; CrCl <10: initial 1.25mg OD or 2.5mg EOD, max 10mg/day', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Captopril (S1) — ACE-I, 12.5/25mg', '25mg BD/TDS to 50mg TDS', 'CrCl 10–50: 75% normal dose every 12–18h, max 50mg BD; CrCl <10: initial 1.25mg OD, max 50mg OD', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Perindopril (NS) — ACE-I, 4mg erbumine', '4mg OD (elderly 2mg OD) to 8mg OD', 'CrCl 30–80: initial 2mg OM, max 8mg OM; CrCl <30: not recommended', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Losartan (S2) — ARB, 50/100mg', '25mg OD to 100mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Valsartan (S2) — ARB, 80/160mg', '80mg OD to 320mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Irbesartan (NS) — ARB, 150/300mg', '150mg OD (elderly 75mg OD) to 300mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Telmisartan (S2) — ARB, 40/80mg', '40mg OD to 80mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Candesartan (NS) — ARB, 8mg', '8mg OD to 32mg OD', 'Renal impairment: initial 4mg OM; CrCl <30: max 16mg OD', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Amlodipine (S1) — CCB, 5/10mg', '2.5mg OD to 10mg OD', 'No dose adjustment needed', 'Peripheral oedema, dizziness, headache/flushing', 'Caution in patients with heart failure; amlodipine or felodipine preferred if CCB required in HF'] },
            { cells: ['Nifedipine LA (S2) — CCB, 30/60mg', '30mg OD to 120mg OD', 'No dose adjustment needed', 'Peripheral oedema, dizziness, headache/flushing', 'Caution in patients with heart failure'] },
            { cells: ['Diltiazem (S1) — CCB, 30/60mg tablets or 90/100/200mg SR capsules', '30mg TDS to 60mg TDS (or 90mg OD to 200mg OD SR)', 'Use with caution in renal impairment', 'Peripheral oedema, headache', 'Sick sinus syndrome; 2nd/3rd degree AV block; acute MI; pulmonary congestion; caution in heart failure'] },
            { cells: ['Atenolol (S1) — Beta-blocker, 50/100mg', '25mg OD to 100mg OD', 'CrCl 15–35: max 50mg OD; CrCl <15: max 25mg OD or 50mg EOD', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Bisoprolol (S2) — Beta-blocker, 2.5/5mg', '1.25mg OD to 10mg OD', 'CrCl <20: lower initial dose, max 10mg/day', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Carvedilol (S2) — Beta-blocker, 6.25/25mg', '6.25mg BD to 25mg BD', 'No dose adjustment needed', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Metoprolol (NS) — Beta-blocker, 50/100mg', '50mg BD to 100mg BD', 'No dose adjustment needed', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Hydrochlorothiazide (S1) — Thiazide Diuretic, 25mg', '12.5mg OD to 25mg OD', 'Use with caution; CrCl <10: not recommended (lack of efficacy)', 'Postural hypotension, electrolyte disturbances (hypokalaemia more likely ≥25mg OD)', 'Pregnancy; renal decompensation; anuria; may precipitate gout; increased risk of non-melanotic skin cancer'] },
            { cells: ['Indapamide 2.5mg (S2) / Indapamide SR 1.5mg (NS) — Thiazide Diuretic', 'Indapamide 2.5–5mg OD; SR 1.5mg OD', 'CrCl <30: not recommended', 'Postural hypotension, electrolyte disturbances', 'Sulphonamides allergy; may precipitate gout; avoid in severe renal disease'] },
            { cells: ['Spironolactone (S1) — MRA, 25mg (for resistant hypertension or persistent albuminuria)', '25mg OD to 50mg OD/BD', 'Caution in renal impairment; CrCl <30: not recommended', 'Breast tenderness/gynaecomastia (~6%), impotence in men, menstrual irregularities in women, hyperkalaemia', 'Usually restrict to eGFR ≥45ml/min and plasma potassium ≤4.5mmol/L; monitor electrolytes and eGFR soon after initiation and at least annually'] },
            { cells: ['Hydralazine (S1) — Vasodilator, 10/25/50mg', '10mg TDS to 50mg TDS', 'No dose adjustment needed', 'Tachycardia, flushing, peripheral oedema', 'Mitral valve rheumatic heart disease; may cause drug-induced Lupus-like syndrome (more likely with larger dose, longer duration)'] },
            { cells: ['Prazosin (S1) — Alpha-blocker, 1mg', '0.5mg TDS to 10mg BD', 'No dose adjustment needed', 'Postural hypotension, fatigue', ''] },
            { cells: ['Methyldopa (S1) — Centrally Acting, 250mg', '250mg BD/TDS to 500mg TDS', 'No dose adjustment needed', 'Postural hypotension', 'Current MAOI therapy; acute liver disease'] },
            { cells: ['Hyzaar/Hyzaar Forte (S2) — Losartan/HCTZ 50/12.5mg or 100/25mg', 'Initial: Hyzaar 1 tab OD; Max: Hyzaar Forte 1 tab OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Co-diovan (NS) — Valsartan/HCTZ', 'Initial: 80/12.5mg OD; Max: 160/12.5mg OD', 'Use with caution; CrCl <10: not recommended', 'Postural hypotension, dizziness, fatigue', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Entresto (NS) — Sacubitril/Valsartan', 'Initial: 100mg OD; Max: 400mg OD', '—', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); history of angioedema with ACE-I or ARBs'] },
          ],
        },
      ],
    },
    {
      heading: 'Home Blood Pressure Monitoring',
      blocks: [
        {
          type: 'text',
          content: 'Indications for HBPM or 24-hour ABPM: diagnosis of hypertension (borderline or unusual variability); suspected white-coat hypertension or masked hypertension; monitoring of treated hypertensive patients; symptoms suggesting hypotension; elevated clinic BP or suspected pre-eclampsia in pregnancy; identification of true/false resistant hypertension. Specific indications for 24-hour ABPM: extreme discordance between clinic and home BP; assessment of intra-day BP variability; evaluation of nocturnal dipping status; suspicion of nocturnal hypertension (patients with diabetes, CKD, obstructive sleep apnoea, night-shift workers).',
        },
        {
          type: 'text',
          content: 'Advantages of HBPM: multiple measurements during the day and over extended periods; assessment of treatment effects at different times; good reproducibility, good prognostic value, relatively low cost; improvement in patient engagement; may empower patients in BP management.',
        },
        {
          type: 'text',
          content: 'Monitoring Schedule: for diagnosis, high-normal BP monitoring, and effects of treatment changes — 7-day home measurements (minimum 3 days) before each clinic/tele visit; 2 readings per day (morning before medication intake; evening before eating); 2 measurements each time (1–2 minutes apart). Long-term follow-up: less frequent measurements (once or twice per week) are acceptable.',
        },
        {
          type: 'text',
          content: 'Interpretation of HBPM Readings: compute average excluding readings from the first day. Mean home systolic ≥135 mmHg and/or diastolic ≥85 mmHg indicates hypertension. Mean home systolic <130 mmHg and diastolic <80 mmHg should be considered normal. Mean systolic 130–134 and diastolic 80–84 requires continued regular monitoring. Diagnosis thresholds and treatment targets for HBPM are generally 5 mmHg lower (systolic and diastolic) compared to office BP.',
        },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Family Physician: all aspects of primary medical care from screening, diagnosis and management of hypertension, including health promotion and prevention/treatment of complications; collaborates with other health care providers for holistic care.' },
            { text: 'Care Coordinator: introduce OneNUHS and HealthHub Apps; enrol onto Teleconsult; perform general screening; address care gaps (vaccinations, cancer screenings); teach home BP monitoring; recruitment into PTEC-HT.' },
            { text: 'Care Manager: patient education on hypertension, BP target, lifestyle measures; teach home BP monitoring and validate BP set; assess treatment adherence; alternate CM visit with Doctor for stable hypertension and/or dyslipidaemia; recruitment into PTEC-HT.' },
            { text: 'Advanced Practice Nurse: manage patients with diabetes, hypertension, dyslipidaemia; initiate and titrate antihypertensive medications; collaborate with healthcare team.' },
            { text: 'Clinical Pharmacist: manage patients with diabetes, hypertension, dyslipidaemia; initiate and titrate antihypertensives; drug optimisation for drug interactions, polypharmacy, non-adherence.' },
            { text: 'Dietitian: patient education on DASH diet and weight management.' },
            { text: 'Psychologist: psychological and behavioural interventions; assessment and intervention for co-occurring psychological problems; support for carers experiencing caregiver stress.' },
            { text: 'Medical Social Worker: biopsychosocial assessment; intervention for social assistance, community resources, caregiver support.' },
            { text: 'Financial Counsellor: financial counselling; MediSave utilisation advice; applications for MediFund, Medication Assistance Fund, Institutional Medical Fund.' },
            { text: 'Pharmacist: smoking cessation clinic; detect/prevent drug interactions; medication reconciliation.' },
          ],
        },
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        {
          type: 'text',
          content: 'Microscopic Haematuria or Micro-/Macro-albuminuria: please refer to the guideline on chronic kidney disease.',
        },
        {
          type: 'text',
          content: 'Secondary Hypertension: hypertension due to an identifiable cause, which may be treatable with a specific intervention. A high index of suspicion and early detection are important because interventions may be curative. Suspect secondary hypertension in: younger patients (<40 years) with grade 2 hypertension or onset in childhood; acute worsening in previously stable normotension; resistant hypertension; severe (grade 3) or hypertensive emergency; extensive HMOD; clinical/biochemical features of endocrine causes or CKD; obstructive sleep apnoea; phaeochromocytoma symptoms or family history. Causes: obstructive sleep apnoea (5–10%), renal parenchyma disease (2–10%), primary hyperaldosteronism (5–15%), atherosclerotic renal vascular disease (1–10%), thyroid disease (1–2%), phaeochromocytoma/Cushing\'s/coarctation/hyperparathyroidism (<1%). Medications raising BP: oral contraceptive pill, diet pills, nasal decongestants, stimulant drugs, immunosuppressives, anti-angiogenic cancer therapies, anabolic steroids, erythropoietin, NSAIDs, herbal remedies (ephedra, ma huang).',
        },
        {
          type: 'text',
          content: 'Hypertensive Emergencies: large elevations in BP (SBP >180 mmHg or DBP >110 mmHg) associated with impending or progressive organ damage (major neurological changes, hypertensive encephalopathy, cerebral infarction, intracranial haemorrhage, acute LV failure, acute pulmonary oedema, aortic dissection, renal failure, eclampsia). Referral to Emergency Department is indicated.',
        },
        {
          type: 'text',
          content: 'Hypertensive Urgencies: isolated large BP elevations without acute target organ damage. Exclude acute TOD through history, physical examination including fundoscopy, urinalysis, ± serum creatinine. Treat by reinstitution or intensification of drug therapy and treatment of anxiety. Once TOD excluded, consider sending home with home BP monitoring and scheduled review next day or within a few days. Patient to proceed to ED if symptomatic.',
        },
        {
          type: 'text',
          content: 'Resistant Hypertension: BP remains above goal (average >140/90 mmHg) despite concurrent use of three antihypertensive agents of different classes at optimal doses (including a diuretic). Evaluation: detailed history/exam/investigations; exclude secondary cause. Management — Non-pharmacological: check and reinforce adherence to medication and diet/lifestyle. Pharmacological: addition of low-dose spironolactone; or eplerenone/amiloride/higher-dose thiazide/loop diuretic (for eGFR ≤30ml/min) if intolerant; or bisoprolol.',
        },
        {
          type: 'text',
          content: 'White Coat Hypertension: suggested by markedly elevated clinic BP in the absence of end-organ damage, normal ambulatory BP readings at work/home, unusual variability, symptoms of hypotension, BP seemingly resistant to treatment. Ambulatory or home BP monitoring useful for identification and monitoring.',
        },
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Patients in whom secondary hypertension is suspected.' },
            { text: 'Younger patients (<40 years) with grade 2 or more severe hypertension in whom secondary hypertension should be excluded.' },
            { text: 'Patients with treatment-resistant hypertension.' },
            { text: 'Patients in whom more detailed assessment of HMOD would influence treatment decisions.' },
            { text: 'Patients with sudden onset of hypertension when BP has previously been normal.' },
            { text: 'Other clinical circumstances where more specialist evaluation is required.' },
            { text: 'When there is a need for 24-hour ambulatory BP monitoring.' },
            { text: 'Hypertensive emergencies and urgencies (when not feasible to treat and monitor in clinic) — refer to hospital A&E.' },
          ],
        },
      ],
    },
    {
      heading: 'Recommended Care Components for Hypertension',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Components', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['BP Measurement', 'Twice a year', ''] },
            { cells: ['Weight and BMI Measurement', 'Twice a year', 'Keep <23 kg/m² (non-Asian: <25 kg/m²)'] },
            { cells: ['Kidney Assessment (serum Cr/eGFR and uACR or uPCR)', 'Annually', 'Annual screening of serum Cr/eGFR and uACR in all patients, or uPCR if significant proteinuria'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers', 'Assessment on smoking habits and smoking cessation counselling'] },
            { cells: ['Lipid Profile', 'At or soon after diagnosis', 'All patients should be risk stratified (as recommended in the Lipids CPG). Targets of treatment should be personalised by levels of risk.'] },
            { cells: ['Cardiac Assessment', 'At diagnosis before initiating medications', 'Includes baseline ECG'] },
          ],
        },
      ],
    },
  ],
};
