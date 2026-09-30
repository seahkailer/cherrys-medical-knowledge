import { CpgDocument } from '../types';

export const atrialFibrillation: CpgDocument = {
  id: 'cpg-atrial-fibrillation',
  condition: 'Atrial Fibrillation',
  source: '09 NUP CPG - Atrial Fibrillation.pdf',
  reviewDate: 'Reviewed March 2026. Next review date: March 2029.',
  advisors: 'Key FPs: Dr Chen Jiawei / Dr Kwan Yew Seng. Specialist Advisor: Dr Lim Toon Wei (Senior Consultant, Department of Cardiology, NUHCS). Acknowledgement: NUHSP: Mr Marvin Sim',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'The estimated incidence of atrial fibrillation worldwide for men and women is 20.9 million and 12.6 million respectively, with a higher incidence in developed countries. Atrial fibrillation is independently associated with a two-fold increased all-cause mortality risk in women and 1.5-fold increase in men. Atrial fibrillation increases the risk of stroke by 3 to 5 times. In Singapore, 17% of strokes occurred in patients with atrial fibrillation. Non-valvular atrial fibrillation forms the majority of AF cases seen in NUP and is the focus of this guideline. AF associated with significant mitral stenosis or mechanical heart valves is associated with higher stroke risk and is not included.' },
        { type: 'text', content: 'The 3 pillars of AF prevention and treatment are: (1) lifestyle and risk-factor modification, (2) stroke prevention, and (3) symptom management.' },
      ],
    },
    {
      heading: 'Stages of Atrial Fibrillation',
      blocks: [
        { type: 'table', headers: ['Stage', 'Description', 'Explanation'], rows: [
          { cells: ['1', 'At risk of atrial fibrillation', 'Modifiable risk factors: obesity, lack of fitness, hypertension, sleep apnoea, excessive alcohol consumption, diabetes mellitus. Non-modifiable: genetic factors (TTN, MYH7, MYH6, LMNA, KCNQ1 variants), male sex, old age'] },
          { cells: ['2', 'Pre–atrial fibrillation', 'Structural or electrical conditions that can lead to AF (e.g., atrial enlargement, frequent atrial ectopy, short bursts of atrial tachycardia, atrial flutter, heart failure, valve disease, coronary artery disease, hypertrophic cardiomyopathy, neuromuscular disorders, thyroid disease)'] },
          { cells: ['3A', 'Paroxysmal atrial fibrillation', 'Intermittent and terminating within 7 days of onset'] },
          { cells: ['3B', 'Persistent atrial fibrillation', 'Continuous and lasting longer than 7 days'] },
          { cells: ['3C', 'Long-standing persistent atrial fibrillation', 'Continuous and lasting longer than 12 months'] },
          { cells: ['3D', 'Successful atrial fibrillation ablation', 'Freedom from atrial fibrillation after ablation'] },
          { cells: ['4', 'Permanent atrial fibrillation', 'Not pursuing further attempts at rhythm control'] },
        ]},
      ],
    },
    {
      heading: 'Primary & Secondary Prevention',
      blocks: [
        { type: 'list', items: [
          { text: 'Primary Prevention', children: [
            { text: 'Maintain or achieve a healthy weight' },
            { text: 'Engage in physical activity' },
            { text: 'Moderate alcohol consumption or abstain; avoid binge drinking' },
            { text: 'Stop smoking' },
            { text: 'Control hypertension' },
            { text: 'Control hyperglycaemia in diabetes' },
          ]},
          { text: 'Secondary Prevention (for those who already have AF)', children: [
            { text: 'Lose weight if overweight or obese (BMI > 27 kg/m²)' },
            { text: 'Start a standardised exercise program' },
            { text: 'Stop smoking' },
            { text: 'Minimise alcohol consumption or abstain entirely' },
            { text: 'Optimally control comorbidities including hypertension and diabetes' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Approach — History',
      blocks: [
        { type: 'list', items: [
          { text: 'Asymptomatic' },
          { text: 'Palpitations' },
          { text: 'Chest Pain or discomfort' },
          { text: 'Shortness of Breath' },
          { text: 'Giddiness, Syncope' },
          { text: 'Decreased effort tolerance, Fatigue' },
          { text: 'Anxiety' },
          { text: 'Transient Ischemic Attack / Stroke' },
          { text: 'Evaluation of associated co-morbidities', children: [
            { text: 'Genetic Predisposition' },
            { text: 'Older Age (biggest risk factor for AF)' },
            { text: 'Hypertension' },
            { text: 'Heart Failure' },
            { text: 'Valvular Heart Disease' },
            { text: 'Myocardial Infarction' },
            { text: 'Thyroid Dysfunction' },
            { text: 'Obesity' },
            { text: 'Diabetes Mellitus' },
            { text: 'Chronic Obstructive Pulmonary Disease' },
            { text: 'Obstructive Sleep Apnoea' },
            { text: 'Chronic Kidney Disease' },
            { text: 'Smoking' },
            { text: 'Alcohol Consumption' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Approach — Physical Examination & Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'Physical Examination', children: [
            { text: 'Blood Pressure, Heart Rate' },
            { text: 'Cardiovascular Examination: presence of cardiac murmurs, features of cardiac failure' },
            { text: 'Neurological Examination' },
            { text: 'Thyroid Dysfunction' },
          ]},
          { text: 'Basic Investigations (for all patients)', children: [
            { text: 'Electrocardiogram (ECG) — Absence of P waves, irregular undulating baseline, irregularly irregular R-R intervals' },
            { text: 'Full blood count (FBC)' },
            { text: 'Serum electrolytes' },
            { text: 'Thyroid function test (TFT)' },
            { text: 'Liver function test (LFT)' },
            { text: 'Coagulation profile' },
            { text: 'Transthoracic echocardiogram' },
          ]},
          { text: 'Additional Investigations (for selected patients)', children: [
            { text: 'Ambulatory ECG' },
            { text: 'Transoesophageal echocardiogram' },
            { text: 'Coronary angiography or cardiac stress testing' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Principles of Management — Red Flags for Urgent Referral to ED',
      blocks: [
        { type: 'list', items: [
          { text: 'Haemodynamically unstable' },
          { text: 'Features of myocardial ischaemia' },
          { text: 'Features of congestive cardiac failure' },
          { text: 'New onset focal neurological deficit' },
          { text: 'Severe symptoms' },
        ]},
      ],
    },
    {
      heading: 'Rate Control Therapy',
      blocks: [
        { type: 'text', content: 'Target a resting heart rate of < 110 bpm.' },
        { type: 'list', items: [
          { text: 'Beta-blockers (e.g., bisoprolol, carvedilol, propranolol, metoprolol, atenolol) — First-line option unless contraindicated (severe asthma)' },
          { text: 'Non-dihydropyridine calcium-channel blockers (e.g., diltiazem, verapamil) — When beta-blockers are not tolerated or contraindicated' },
          { text: 'Digoxin — In patients with heart failure with reduced ejection fraction. Has a narrow therapeutic window; kidney function and electrolytes should be monitored' },
          { text: 'Amiodarone' },
        ]},
      ],
    },
    {
      heading: 'Monitoring of Patients on Long-Term Amiodarone',
      blocks: [
        { type: 'list', items: [
          { text: 'Long-term amiodarone use is associated with thyroid dysfunction, lung toxicity, liver toxicity, ophthalmologic and cardiovascular adverse effects' },
          { text: 'Patients should be monitored with 6 monthly LFT, TFT and ECG' },
          { text: 'Direct access referral to SOC is indicated for', children: [
            { text: 'Referral to Endocrinology for abnormal thyroid function test (hypo- or hyperthyroidism)' },
            { text: 'Referral to Respiratory medicine for pneumonitis on CXR in patients with new onset or worsening cough or dyspnoea' },
            { text: 'Referral to Cardiology for transaminitis (> 3x ULN) or abnormal ECG (other significant arrhythmia, bradycardia < 50/min, QTc interval > 600ms)' },
          ]},
          { text: 'Avoid concomitant use of other drugs that prolong QTc interval' },
        ]},
      ],
    },
    {
      heading: 'Rhythm Control Therapy',
      blocks: [
        { type: 'text', content: 'Sinus rhythm should be achieved early in the disease course with antiarrhythmic drugs or catheter ablation. Rhythm control in general is recommended to reduce the risk of progression and the risk of dementia or worsening cardiac structural abnormalities, and in patients with the following specific conditions:' },
        { type: 'list', items: [
          { text: 'Reduced left ventricular function and persistent or high burden of atrial fibrillation' },
          { text: 'Symptomatic atrial fibrillation' },
          { text: 'Recently diagnosed symptomatic AF (< 1 year)' },
          { text: 'Atrial fibrillation and heart failure' },
        ]},
      ],
    },
    {
      heading: 'Stroke Prevention — CHA₂DS₂-VASc Score',
      blocks: [
        { type: 'text', content: 'Prophylaxis against thromboembolism is the cornerstone of therapy for atrial fibrillation and should be considered regardless of whether a rate control or rhythm control therapy is chosen. Paroxysmal AF should be treated as for patients with persistent or longstanding persistent AF. Anticoagulation with DOACs is preferred over warfarin in patients without contraindication as DOACs have a better safety profile and fewer food/drug interactions.' },
        { type: 'table', headers: ['Factor', 'Condition', 'Points', 'Score', 'Adjusted Stroke Risk (%/yr)'], rows: [
          { cells: ['C', 'Congestive Heart Failure', '1', '0', '0'] },
          { cells: ['H', 'Hypertension (or treated hypertension)', '1', '1', '1.3'] },
          { cells: ['A₂', 'Age ≥ 75 years', '2', '2', '2.2'] },
          { cells: ['D', 'Diabetes', '1', '3', '3.2'] },
          { cells: ['S₂', 'Prior stroke or TIA', '2', '4', '4.0'] },
          { cells: ['V', 'Vascular disease', '1', '5', '6.7'] },
          { cells: ['A', 'Age 65 to 74', '1', '6', '9.8'] },
          { cells: ['Sc', 'Sex category (female)', '1', '7', '9.6'] },
          { cells: ['', '', '', '8', '6.7'] },
          { cells: ['', '', '', '9', '15.2'] },
        ]},
        { type: 'text', content: 'Modified CHA₂DS₂-VASc (mCHA₂DS₂-VASc): In the absence of other risk factors, female gender alone may not increase stroke risk. Local guidelines recommend the use of mCHA₂DS₂-VASc whereby gender does not contribute to the score.' },
        { type: 'table', headers: ['mCHA₂DS₂-VASc Score', 'Recommendation'], rows: [
          { cells: ['= 0', 'No anticoagulation or antiplatelet recommended'] },
          { cells: ['= 1', 'Anticoagulation with Apixaban should be considered'] },
          { cells: ['≥ 2', 'Anticoagulation recommended with DOAC (preferred) or Warfarin'] },
        ]},
        { type: 'text', content: 'When mCHA₂DS₂-VASc = 1, the decision to start OAC should consider patient-specific factors. Stroke risk is higher for: Age 65–74 years; Heart failure and age ≥ 35 years; Hypertension and age ≥ 50 years; Diabetes mellitus and age ≥ 50 years; Vascular diseases and age ≥ 55 years.' },
      ],
    },
    {
      heading: 'HAS-BLED Risk Score',
      blocks: [
        { type: 'table', headers: ['Letter', 'Condition', 'Points', 'Score', 'Bleeds per 100 patient-years'], rows: [
          { cells: ['H', 'Hypertension (systolic BP > 160mmHg)', '1', '0', '1.13'] },
          { cells: ['A', 'Abnormal renal and liver function (1 point each)', '1 or 2', '1', '1.02'] },
          { cells: ['S', 'Stroke', '1', '2', '1.88'] },
          { cells: ['B', 'Bleeding tendency or predisposition', '1', '3', '3.74'] },
          { cells: ['L', 'Labile INRs (for patients taking warfarin)', '1', '4', '8.70'] },
          { cells: ['E', 'Elderly (Age > 65)', '1', '5 to 9', 'Insufficient data'] },
          { cells: ['D', 'Drugs (concomitant aspirin or NSAIDS) or alcohol abuse (1 point each)', '1 or 2', '', ''] },
        ]},
        { type: 'text', content: 'The HAS-BLED risk score poorly predicts bleeding events but is a useful tool for identifying modifiable risk factors. A high HAS-BLED score (≥ 3) indicates high bleeding risk but is NOT a contraindication for anticoagulation. Consider aspirin or clopidogrel only when anticoagulation is contraindicated in patients with mCHA₂DS₂-VASc ≥ 2, especially those with a history of ischaemic stroke or TIA.' },
      ],
    },
    {
      heading: 'DOAC Protocol in NUP',
      blocks: [
        { type: 'text', content: 'Rivaroxaban and Apixaban are factor Xa inhibitors available in the NUP formulary. DOACs are as effective as warfarin in reducing AF-related strokes and systemic embolisms in patients with non-valvular heart disease. The use of DOAC in mechanical heart valves or moderate to severe mitral stenosis is NOT recommended — these patients should be treated with warfarin.' },
        { type: 'text', content: 'Contraindications to DOACs:' },
        { type: 'list', items: [
          { text: 'Hypersensitivity' },
          { text: 'Clinically significant active bleeding' },
          { text: 'Hepatic disease with coagulopathy and clinically relevant bleeding risk' },
          { text: 'Pregnancy and lactation' },
          { text: 'Lesion or condition considered to be a significant risk of major bleeding (recent GI ulceration, pregnancy, malignant neoplasm at high risk of bleed, etc.)' },
          { text: 'Concomitant treatment with any other anticoagulant agent' },
          { text: 'History of intracranial bleed' },
          { text: 'Renal impairment with creatinine clearance (Cockcroft-Gault) < 15 ml/min for Rivaroxaban and Apixaban' },
          { text: 'Mechanical heart valves' },
          { text: 'Moderate – Severe Mitral Stenosis' },
        ]},
        { type: 'text', content: 'Laboratory investigations prior to DOAC initiation: (1) Full Blood Count, (2) Liver Function Test, (3) Renal Panel, (4) PT/APTT, (5) Thyroid Function Test.' },
        { type: 'text', content: 'Criteria for initiating DOAC in polyclinic (while awaiting echocardiography or cardiology review): No contraindications; No features of mitral stenosis on clinical exam; Normal FBC, renal panel, LFT, PT/APTT; AND any of: history of stroke/TIA, age ≥ 75 years, or mCHA₂DS₂-VASc ≥ 2.' },
        { type: 'text', content: 'Dose Adjustments for Apixaban: 5mg BD standard. Reduce to 2.5mg BD if patient fulfils ≥ 2 of ABC Criteria (Age ≥ 80 years; Body Weight ≤ 60 kg; Serum Creatinine ≥ 133 umol/L) OR CrCl 15–29 ml/min. Avoid if CrCl < 15 ml/min.' },
        { type: 'text', content: 'Dose Adjustments for Rivaroxaban: CrCl > 50 ml/min → 20 mg OD; CrCl 15–50 ml/min → 15 mg OD; CrCl < 15 ml/min → Avoid.' },
        { type: 'text', content: 'Recommended follow-up after DOAC initiation: Review 1–3 months with FBC and Renal Panel. Monitor symptoms of stroke, TIA, thromboembolism and bleeding events. Consider 6-monthly reviews subsequently. Monitor age, body weight, frailty, fall risk and concomitant medications at every visit. Monitor FBC, Renal Panel, LFT annually.' },
      ],
    },
    {
      heading: 'Drug Cost',
      blocks: [
        { type: 'table', headers: ['Drug', 'Subsidy Status', 'Cost per tablet', 'Cost per week (Adult)', 'Cost per week (Elderly)'], rows: [
          { cells: ['Warfarin', 'SDL 1', '$0.20', '$1.40 (capped)', '$0.70 (capped)'] },
          { cells: ['Apixaban', 'SDL 2', '$0.77', '$5.39', '$2.70'] },
          { cells: ['Rivaroxaban', 'SDL 2 (change effective 1st April 2026)', '$1.54', '$5.39', '$2.70'] },
        ]},
        { type: 'text', content: 'Cost does not include additional MG/PG subsidy. Rivaroxaban cost does not take into account MAF subsidy which is determined through means testing.' },
      ],
    },
    {
      heading: 'Switching Warfarin to DOACs',
      blocks: [
        { type: 'text', content: 'Patients with existing non-valvular AF on warfarin may be offered conversion to a DOAC if they: (1) are unable to maintain therapeutic INR, (2) have difficulty attending clinic frequently for INR monitoring, (3) have problematic drug interactions, or (4) find dietary restrictions interfere excessively with a healthy, balanced diet.' },
        { type: 'table', headers: ['INR', 'Action'], rows: [
          { cells: ['INR < 2.5', 'Stop warfarin and start DOAC on the same day'] },
          { cells: ['INR 2.5–3', 'Stop warfarin and start DOAC the next day'] },
          { cells: ['INR > 3', 'Repeat INR and start DOAC as per above recommendations once INR has fallen below 3'] },
        ]},
      ],
    },
    {
      heading: 'Warfarin Protocol in NUP',
      blocks: [
        { type: 'text', content: 'Medical Officers (MOs) and Resident Physicians (RPs) may provide follow-up care for patients on warfarin and repeat prescriptions where INRs are within range and no titration is required. Where titration is indicated, MOs/RPs need to seek approval from FPs or designated RPs. Pharmacy staff will ensure any change in warfarin dosage is countersigned before dispensing.' },
        { type: 'list', items: [
          { text: 'Observe for bleeding: haematuria, melena, gingival bleeding, excessive bleeding from cuts, epistaxis, bruising, dizziness, hypotension, weakness' },
          { text: 'Observe for thromboembolic event: DVT, pulmonary embolism, CVA, AMI' },
          { text: 'Exclude any dietary or drug interaction that may affect patient\'s INR' },
          { text: 'Check haemoglobin and haematocrit annually' },
        ]},
        { type: 'text', content: 'Initiation/Re-Initiation of Warfarin: Check baseline INR before initiation. For initiation, a fixed dose of 2–5 mg/day (2–3 mg for Chinese/Malays; 4–5 mg for Indians) is recommended. For re-initiation, restart on last known dose that maintained therapeutic range. Check INR on day 3 after initiation/re-initiation and every 1–2 days till 2 consecutive readings of target INR achieved. Steady state expected after at least 5 days. Thereafter check INR weekly for first month, then 4 weekly and finally 8–12 weekly once stable.' },
        { type: 'text', content: 'INR Targets: Target INR for most patients: 2.0–3.0. In elderly > 75 years or those at higher bleeding risk, a lower INR target of 1.6–2.5 may be chosen. Patients with higher thrombotic risk may have target INR 2.5–3.5.' },
      ],
    },
    {
      heading: 'Warfarin Initiation Guide',
      blocks: [
        { type: 'table', headers: ['Day', 'INR', 'Dose (mg) Chinese/Malay', 'Dose (mg) Indian'], rows: [
          { cells: ['1', 'Baseline', '3', '5'] },
          { cells: ['3', '< 1.2', '3', '5'] },
          { cells: ['3', '1.2–< 1.5', '3', '5'] },
          { cells: ['3', '1.5–< 2.0', '3', '5'] },
          { cells: ['3', '2.0–< 3.0', '2', '3'] },
          { cells: ['3', '≥ 3.0', 'Nil', 'Nil'] },
          { cells: ['4', '< 1.3', '5', '8'] },
          { cells: ['4', '1.3–< 1.5', '4', '6.5'] },
          { cells: ['4', '1.5–< 1.7', '3', '5'] },
          { cells: ['4', '1.7–< 2.0', '2.5', '4'] },
          { cells: ['4', '2.0–< 2.5', '2.0', '3'] },
          { cells: ['4', '2.5–< 3.0', '1.5', '2.5'] },
          { cells: ['4', '3.0–< 3.5', 'Omit 1 day, then 1 mg', 'Omit 1 day, then 2 mg'] },
          { cells: ['4', '3.5–< 4.0', 'Omit 1 day, then 1 mg', 'Omit 1 day, then 2 mg'] },
          { cells: ['4', '≥ 4.0', 'Omit 2 days, then 0.5 mg', 'Omit 2 days, then 1 mg'] },
        ]},
      ],
    },
    {
      heading: 'Contraindications to Warfarin',
      blocks: [
        { type: 'list', items: [
          { text: 'Aneurysm (cerebral or dissecting)' },
          { text: 'Active bleeding disorder or unexplained anaemia' },
          { text: 'Cerebral vascular haemorrhage (confirmed or suspected), unless cleared by neurologist or neurosurgeon' },
          { text: 'Blood dyscrasias associated with haemorrhage or thrombocytopenia' },
          { text: 'Severe uncontrolled hypertension' },
          { text: 'Recent (2–3 weeks) trauma (especially to the CNS)' },
          { text: 'Neurosurgery unless cleared by neurosurgeon' },
          { text: 'Ulceration or active lesions of the GIT, respiratory or urinary tracts' },
          { text: 'Severe vasculitis' },
          { text: 'Pregnancy (1st trimester and before delivery)' },
          { text: 'Other factors making warfarin therapy unsuitable: alcohol abuse, high fall risk, poor family support/inability to return for INR monitoring, non-compliance, mentally unstable patient' },
          { text: 'Exercise caution in: Age > 75 years, clinical congestive cardiac failure, drug interactions, elevated baseline INR, hypermetabolic states, liver or renal impairment, malnutrition/low vitamin K intake, thyrotoxicosis' },
        ]},
      ],
    },
    {
      heading: 'Drugs with Major Interactions with Warfarin',
      blocks: [
        { type: 'table', headers: ['↑ Increase Effect of Warfarin', '↓ Decrease Effect of Warfarin'], rows: [
          { cells: ['Aspirin, Clopidogrel, Dipyridamole, Ticlopidine, Apixaban, Dabigatran, Rivaroxaban (Antiplatelet/Anticoagulants)', 'Carbamazepine, Phenobarbital, Phenytoin (Anticonvulsants)'] },
          { cells: ['Levothyroxine; Androgens, Estrogens, Progestins; Sulphonylureas (Endocrine)', 'Anti-thyroid agents e.g. Carbimazole, Propylthiouracil (Endocrine)'] },
          { cells: ['Amiodarone, Diltiazem, Verapamil, Propranolol, Simvastatin, Lovastatin, Fenofibrate, Gemfibrozil (Cardiovascular)', 'Cholestyramine (Cardiovascular)'] },
          { cells: ['SSRIs (Escitalopram, Fluoxetine, Fluvoxamine, Sertraline), TCAs (Amitriptyline, Doxepin), Mirtazapine, Venlafaxine, Quetiapine (Psychiatric)', 'Azathioprine, Sulphasalazine (Immunosuppression)'] },
          { cells: ['Valproic acid, Phenytoin (Anticonvulsants)', 'Rifampicin (Antibiotic)'] },
          { cells: ['Methotrexate, Tamoxifen (Malignant disease)', ''] },
          { cells: ['Allopurinol, Corticosteroid, Prednisolone (Musculoskeletal)', ''] },
          { cells: ['Cimetidine, Ranitidine, Omeprazole (GI)', ''] },
          { cells: ['NSAIDs, COX-II inhibitors, Paracetamol, Tramadol (Analgesics — ACUTE)', ''] },
          { cells: ['Azithromycin, Clarithromycin, Ciprofloxacin, Erythromycin, Metronidazole, Trimethoprim-Sulfamethoxazole, Itraconazole (Antibiotics — ACUTE)', ''] },
        ]},
      ],
    },
    {
      heading: 'Warfarin-Food Interactions',
      blocks: [
        { type: 'list', items: [
          { text: 'Foods Rich in Vitamin K (decrease warfarin effect): Green leafy vegetables (spinach, broccoli, lettuce, Brussels sprouts), certain legumes, some vegetable oils (e.g. soybean oil), animal livers, some fermented foods (e.g. cheese), green tea. Chronic alcohol intake can increase metabolism of oral anticoagulants.' },
          { text: 'Foods with Anti-Platelet Effect: Garlic, foods containing salicylates (fruits, vegetables, spices, teas, certain flavoured candies)' },
          { text: 'Others: Avocado (decrease effect), Vitamin E (potentiate effect), dietary supplements [arnica, bilberry, butchers broom, cat\'s claw, dong quai, feverfew, forskolin, garlic, ginger, ginkgo, horse chestnut, inositol hexaphosphate, licorice, melilot (sweet clover), pau d\'arco, red clover, St John\'s wort, sweet woodruff, turmeric, willow bark, wheat grass, alcohol (continuous heavy drinking stimulates hepatic enzymes, increasing metabolism of warfarin)]' },
        ]},
      ],
    },
    {
      heading: 'Management of Supratherapeutic INR',
      blocks: [
        { type: 'table', headers: ['INR', 'Management'], rows: [
          { cells: ['Greater than therapeutic range but < 4.5', 'Decrease or withhold dosage. Monitor INR more frequently and restart warfarin at a lower dose when INR is within therapeutic range.'] },
          { cells: ['4.5–9.0', 'Withhold warfarin, consider referral to Emergency Department for oral Vitamin K. If managed in primary care, recheck INR within 24–28 hours. If within therapeutic range, resume warfarin at a lower dose.'] },
          { cells: ['> 9.0', 'Referral to Emergency Department for oral Vitamin K'] },
        ]},
        { type: 'text', content: 'Monitoring Using INR: Repeat INR every 1–2 weeks for every dose adjustment. When target INR achieved, next INR may be checked after 4 weeks and subsequently 8–12 weekly.' },
      ],
    },
    {
      heading: 'Summary of Oral Anticoagulants',
      blocks: [
        { type: 'table', headers: ['Property', 'Warfarin', 'Rivaroxaban', 'Apixaban'], rows: [
          { cells: ['Mechanism of Action', 'Vitamin K Antagonist', 'Oral anti-Xa inhibitor', 'Oral anti-Xa inhibitor'] },
          { cells: ['Metabolism', 'Major CYP2C9, CYP450, CYP1A2, CYP3A4 substrate', 'CYP3A3 substrate, P-glycoprotein substrate', 'CYP3A3 substrate, P-glycoprotein substrate'] },
          { cells: ['Tmax (hours)', '4', '3–4', '3'] },
          { cells: ['Half-Life (hours)', '36', '5–13', '9–14'] },
          { cells: ['Elimination', 'Hepatic (cytochrome P450)', 'Liver (66%) Renal (33%)', 'Renal (27%)'] },
          { cells: ['Special Precautions', 'Ensure consistent Vitamin K intake in diet. Avoid supplements.', 'Take with food to increase bioavailability', 'With or without food'] },
          { cells: ['Laboratory Tests', 'PT/INR every 2–3 monthly; FBC at least annually', 'FBC, Renal Panel at least annually', 'FBC, Renal Panel at least annually'] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 10 NUP CPG — Benign Prostatic Hyperplasia (Feb 2024)
// ---------------------------------------------------------------------------
const bph: CpgDocument = {
};
