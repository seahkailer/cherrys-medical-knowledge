import { CpgDocument } from '../types';

export const heartFailure: CpgDocument = {
  id: 'heart-failure',
  condition: 'Heart Failure',
  source: 'NUP CPG',
  reviewDate: 'November 2028',
  advisors: 'Dr Ng Li Yan / Dr Kwan Yew Seng; Specialist Advisor: Dr Lin Weiqin (Senior Consultant, Department of Cardiology, National University Heart Centre, Singapore)',
  sections: [
    {
      heading: 'Heart Failure Management Tips',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Assess functional status (NYHA class).' },
            { text: 'Assess volume status (symptoms and signs, including weight).' },
            { text: 'Assess adherence to medications and fluid restriction.' },
            { text: 'Medication review to ensure patients are on appropriate disease-modifying treatment.' },
            { text: 'Control cardiovascular risk factors.' },
            { text: 'Assess renal function and electrolytes regularly.' },
            { text: 'Advise on exercise, educate patients, and screen for psychosocial issues.' },
          ],
        },
        {
          type: 'text',
          content: 'Heart Failure with Reduced Ejection Fraction (HFrEF) (LVEF ≤ 40%): Ensure 4 pillars of HFrEF have been initiated: (1) *ARNI OR ACEI/ARB; (2) Beta blockers (bisoprolol, carvedilol); (3) MRA; (4) SGLT-2 inhibitors.',
        },
        {
          type: 'text',
          content: 'Heart Failure with Mildly Reduced and Preserved Ejection Fraction (Non-HFrEF) (LVEF >40%): Initiate SGLT-2 inhibitors. Consider other HFrEF treatment for suitable patients.',
        },
        {
          type: 'text',
          content: 'Red Flags for ED Referral / Early Cardio Review: ADHF with pulmonary oedema; Hypotension (SBP <80mmHg); Rapid worsening of renal function; Fluid overload not responding to trial of increased diuretics; First presentation of heart failure.',
        },
      ],
    },
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content: 'Clinical Definition: Heart failure (HF) is a clinical syndrome with symptoms and/or signs caused by a structural and/or functional cardiac abnormality and corroborated by elevated natriuretic peptide levels and/or objective evidence of pulmonary or systemic congestion (Universal Definition and Classification of Heart Failure 2021).',
        },
        {
          type: 'text',
          content: 'Epidemiology: 4.5% of the Singapore population was found to be living with heart failure. Nearly 10% of people in their 80s suffer from heart failure.',
        },
      ],
    },
    {
      heading: 'Diagnosis, Classification, Aetiology and Severity of Heart Failure',
      blocks: [
        {
          type: 'text',
          content: 'Diagnosis (Universal Definition and Classification of Heart Failure 2021): Criteria 1 must be fulfilled and corroborated by either criterion 2 or 3. (1) Symptoms and/or signs of heart failure caused by a structural and/or functional cardiac abnormality. (2) EF <50%, abnormal cardiac chamber enlargement, elevated LV filling pressures (E/E\' >15), moderate/severe ventricular hypertrophy or valvular obstructive or regurgitant lesion. (3) Elevated natriuretic peptide levels. (4) Objective evidence of cardiogenic pulmonary or systemic congestion by diagnostic modalities.',
        },
        {
          type: 'text',
          content: 'Classification of Heart Failure: (1) HFrEF: EF ≤40%; (2) HFmEF: EF 41–49%; (3) HFpEF: EF ≥50%; (4) HFimpEF: baseline EF ≤40%, ≥10-point increase from baseline EF, and second measurement of EF >40%.',
        },
        {
          type: 'text',
          content: 'Initial Assessment — Symptoms (ask for chest pain, syncope and palpitations routinely): Breathlessness (orthopnoea, PND), pedal oedema, fatigue. Signs: Weight gain, raised JVP, displaced apical beat, peripheral oedema, lung crepitations, third heart sound, tachycardia.',
        },
        {
          type: 'text',
          content: 'Aetiology of Heart Failure: Coronary artery disease, hypertension, valvular heart disease, cardiomyopathy (familial and nonfamilial), thyroid disease, diabetes mellitus, anaemia, post-myocarditis, previous cancer treatment (chemotherapy-induced cardiomyopathy, radiation heart disease), infiltrative diseases (amyloidosis, haemachromatosis, glycogen storage diseases), toxins (alcohol, cocaine), neuromuscular diseases.',
        },
        {
          type: 'text',
          content: 'Precipitating Causes — Non-Cardiac: Non-compliance to medications/fluid/salt restriction; concomitant medications (NSAIDs, calcium channel blockers except amlodipine and felodipine, thiazolidinediones, anti-arrhythmics other than amiodarone); alcohol abuse; renal dysfunction; infection (UTI, pneumonia, sepsis); pulmonary embolism; thyroid dysfunction; anaemia. Cardiac: Arrhythmias (AF, SVT, VT); myocardial ischaemia; valve leaflet dysfunction secondary to papillary muscle rupture.',
        },
        {
          type: 'text',
          content: 'Complications of Heart Failure: Arrhythmias (AF, VT, VF, bradyarrhythmias); thromboembolism (stroke, DVT, PE); gastrointestinal (hepatic congestion/dysfunction, malabsorption); musculoskeletal (muscle wasting, cachexia); respiratory (pulmonary congestion/hypertension, respiratory muscle weakness).',
        },
        {
          type: 'table',
          headers: ['Class', 'Severity', 'Symptoms (NYHA)'],
          rows: [
            { cells: ['I', 'Asymptomatic', 'No symptom with ordinary physical activity'] },
            { cells: ['II', 'Mild', 'Comfortable at rest but ordinary activity causes symptoms'] },
            { cells: ['III', 'Moderate', 'Comfortable at rest but symptoms with less than ordinary activity'] },
            { cells: ['IV', 'Severe', 'Symptomatic at rest and without any physical activity'] },
          ],
        },
        {
          type: 'table',
          headers: ['Stage', 'Definition (AHA/ACC)'],
          rows: [
            { cells: ['A', 'At risk for HF but without current or prior symptoms or signs of HF and without structural or biomarker evidence of heart disease'] },
            { cells: ['B', 'Structural heart disease or abnormal cardiac function, or elevated natriuretic peptide levels without current or prior symptoms or signs of HF'] },
            { cells: ['C', 'Current or prior symptoms and/or signs of HF caused by a structural and/or functional cardiac abnormality'] },
            { cells: ['D', 'Severe symptoms and/or signs of HF at rest, recurrent hospitalisations despite GDMT, refractory or intolerant to GDMT, requiring advanced therapies such as consideration for transplant, mechanical circulatory support, or palliative care'] },
          ],
        },
      ],
    },
    {
      heading: 'Investigations at Primary Care',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Chest X-ray: ABCDE mnemonic — A: alveolar oedema (bat wing opacities), B: Kerley B lines, C: cardiomegaly, D: dilated upper lobe vessels, E: pleural effusion. May also detect conditions mimicking heart failure.' },
            { text: 'ECG: unlikely to be normal in chronic heart failure (20% may have a normal ECG). Commonly seen abnormalities: LVH, left axis deviation, LBBB, pathological Q-waves. Arrhythmias (sinus tachycardia, AF, acute ST changes) may be seen in decompensated HF.' },
            { text: 'Urinalysis: screen for proteinuria and glycosuria.' },
            { text: 'Full blood count: anaemia can precipitate acute HF; elevated WBC can indicate ongoing infection causing decompensated HF.' },
            { text: 'Creatinine and electrolytes: identify renal impairment and electrolyte disturbances from diuretic use.' },
            { text: 'HbA1c, lipid panel: identify cardiovascular risk factors.' },
            { text: 'Liver function test: elevated transaminases secondary to hepatic congestion.' },
            { text: 'Thyroid function test: especially in the presence of AF.' },
            { text: 'Iron panel: iron deficiency (absolute and functional) can occur with or without anaemia in heart failure.' },
          ],
        },
      ],
    },
    {
      heading: 'Investigations at Tertiary Care',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Echocardiography' },
            { text: 'Other investigations: plasma B-type natriuretic peptide, non-invasive imaging' },
            { text: 'Coronary angiogram: current gold standard for demonstrating coronary artery disease' },
          ],
        },
      ],
    },
    {
      heading: 'Management and Follow-Up',
      blocks: [
        {
          type: 'text',
          content: 'Non-Pharmacological / Lifestyle — Risk Factors: Lipids: aim LDL <1.4mmol/L (history of ACS) or <1.8mmol/L (stable IHD, post-PCI/CABG). Hypertension: aim BP <130/80 mmHg. Diabetes: screen for diabetes (aim HbA1c <7%). Smoking: offer cessation. Weight reduction: consider for patients with BMI ≥23 kg/m². Alcohol: advise all patients to abstain.',
        },
        {
          type: 'text',
          content: 'Psychosocial Management: identify psychosocial problems (depression, anxiety, social isolation). SSRIs have safer cardiovascular profiles.',
        },
        {
          type: 'text',
          content: 'Physical Activity and Exercise: all HF patients should be encouraged to enrol in a multidisciplinary cardiac rehabilitation programme. General advice: moderate intensity aerobic activity 30 minutes at least 5 times a week. Stable NYHA Class II–III patients with no contraindications are encouraged to undertake exercise.',
        },
        {
          type: 'text',
          content: 'Patient Education: general information about symptoms, treatment, prognosis, stress management; self-monitoring (home BP, daily weight, fluid/salt restriction); HF patients with erectile dysfunction can be treated with PDE-5 inhibitors in the absence of significant myocardial ischaemia or concomitant nitrates; advice on travel; advice on medications to avoid; DASH diet, fluid restriction; action plan; advance care planning for end-stage HF.',
        },
        {
          type: 'table',
          headers: ['Drug Class / Drug', 'Strength per Tablet', 'Initial Dose', 'Maximum Dose', 'Indications'],
          rows: [
            { cells: ['ARNI — Sacubitril/Valsartan', '24mg/26mg, 49mg/51mg, 97mg/103mg', '49mg/51mg bd', '97mg/103mg bd', 'First line therapy for HFrEF to reduce morbidity and mortality. Recommended for 2DE to review EF prior to initiation. Usually started by Cardiologists. Avoid if eGFR <30ml/min. Contraindicated with history of angioedema with ACE-I/ARBs, pregnancy, or concomitant aliskiren. Requires 36-hour washout period when switching to/from ACEi.'] },
            { cells: ['ACE Inhibitors — Captopril, Enalapril, Perindopril, Lisinopril', '12.5/25mg; 5/10/20mg; 4mg; 5/10/20mg', 'Captopril 6.25mg tds; Enalapril 2.5mg bd; Perindopril 2mg om; Lisinopril 2.5–5mg om', 'Captopril 50mg tds; Enalapril 10–20mg bd; Perindopril 8–16mg om; Lisinopril 20–40mg om', 'Beneficial to reduce morbidity and mortality in HFrEF when ARNI is not feasible. Titrate upwards to dosages shown effective in controlled trials.'] },
            { cells: ['ARBs — Losartan, Valsartan, Candesartan', '50mg; 80mg; 4mg', 'Losartan 25–50mg om; Valsartan 20–40mg bd; Candesartan 4–8mg om', 'Losartan 50–100mg om; Valsartan 160mg bd; Candesartan 32mg om', 'Alternative therapy in patients who are ACE inhibitor intolerant and when ARNI is not feasible. Routine combination of ACE-I, ARNI and ARB not recommended.'] },
            { cells: ['SGLT2 Inhibitors — Dapagliflozin, Empagliflozin', '10mg; 10/25mg', 'Dapagliflozin 10mg om; Empagliflozin 10mg om', 'Dapagliflozin 10mg om; Empagliflozin 10mg om', 'Reduces HF hospitalisation and cardiovascular mortality in symptomatic HF (NYHA II–IV) irrespective of EF, in both DM and non-DM patients. Dapagliflozin: not recommended at eGFR <25ml/min for new initiation; empagliflozin benefits shown in patients with eGFR ≥20ml/min.'] },
            { cells: ['Beta-Blockers — Carvedilol, Bisoprolol', '6.25/25mg; 2.5/5mg', 'Carvedilol 3.125mg bd; Bisoprolol 1.25mg om', 'Carvedilol 25mg bd (>85kg: 50mg bd); Bisoprolol 10mg om', 'Standard therapy for clinically stable patients with LV systolic dysfunction (EF ≤40%) and mild-moderate HF (NYHA II–III). Only carvedilol, bisoprolol, and sustained-release metoprolol succinate shown effective in reducing death and hospitalisation. Cautious dose titration every 2–4 weeks. Contraindicated in hypotension, bronchospasm, pulmonary oedema, symptomatic bradycardia, 2nd/3rd degree heart block.'] },
            { cells: ['MRA — Spironolactone', '25mg', '12.5–25mg om', '25mg om or bd', 'For symptomatic patients (NYHA II–IV) with HFrEF (EF ≤35%) already on ACE-I/ARB and beta-blocker. Can cause breast discomfort and gynaecomastia in males. Contraindicated if eGFR <30ml/min. Requires careful monitoring of renal function and serum K.'] },
            { cells: ['Diuretics — Hydrochlorothiazide, Frusemide', '25mg; 40mg', 'HCTZ 12.5mg om; Frusemide 20mg om', 'HCTZ 50mg om; Frusemide 160–200mg as single dose', 'For all symptomatic patients to improve symptoms and relieve congestion. Continued indefinitely; dose decreased once euvolaemia is attained. HCTZ: avoid if eGFR <30–40ml/min. Concurrent use with SGLT2-I may potentiate effects.'] },
            { cells: ['Digoxin', '0.0625/0.25mg', '0.0625mg', '0.5mg', 'Can be considered for symptomatic HF (NYHA II–IV) on standard therapy. Does not improve long-term survival but reduces rehospitalisation. Indicated for AF and CHF. Used as add-on to beta-blockers. Contraindicated in bradycardia, ventricular arrhythmia, severe renal dysfunction.'] },
            { cells: ['Hydralazine + Isosorbide Dinitrate (ISDN) — not available in NUP', 'Hydralazine 10/25/50mg; ISDN 10mg', 'Hydralazine 10mg 6H; ISDN 20mg 3–4 times/day', 'Hydralazine 225–300mg/day; ISDN 120–160mg/day', 'Usually for those intolerant of ARNI/ACE-I/ARBs. Add-on therapy in symptomatic patients on optimal medical therapy. High incidence of side effects such as headache.'] },
          ],
        },
        {
          type: 'text',
          content: '4 Pillars of HFrEF Management: (1) *ARNI/ARB/ACE-I; (2) SGLT2 inhibitors; (3) Beta blockers; (4) MRA.',
        },
        {
          type: 'text',
          content: 'Management of HFpEF: SGLT2 inhibitors significantly reduce combined risk of cardiovascular death or hospitalisation for HFpEF irrespective of diabetes status (EMPEROR Preserved 2021, DELIVER 2022). Few disease-modifying therapies available; aims are to identify and treat underlying risk factors, aetiology, and co-existing comorbidities; reduce symptoms of congestion with diuretics.',
        },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Family Physician: management of HF including health promotion and prevention/detection/treatment of complications; collaborates with other health care providers for holistic care.' },
            { text: 'Care Coordinator: introduce OneNUHS and HealthHub Apps; enrol patient onto Teleconsult; perform general screening (fall risk, social economics, smoking/drinking history); address care gaps (vaccinations, cancer screenings); recruitment into PTEC-HT/DM.' },
            { text: 'Care Manager: patient education on BP/LDL/glucose targets and lifestyle; teach home BP monitoring; assess treatment adherence.' },
            { text: 'Advanced Practice Nurse: manage patients with diabetes, hypertension, dyslipidaemia within scope of practice; titrate medications; manage common acute conditions.' },
            { text: 'Clinical Pharmacist: manage patients with diabetes, hypertension, dyslipidaemia; drug optimisation; closer monitoring for drug interactions, polypharmacy.' },
            { text: 'Dietitian: patient education on DASH diet and weight management.' },
            { text: 'Psychologist: psychological and behavioural interventions to manage stress, improve disease management; assessment and intervention for co-occurring psychological problems; support for carers.' },
            { text: 'Medical Social Worker: biopsychosocial assessment; intervention for social assistance including schemes, community resources, and caregiver support.' },
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
          content: 'Acute Decompensated Heart Failure: (1) Recognise symptoms/signs of decompensation; (2) Consider precipitating causes; (3) Investigations in primary care; (4) Primary care management — if underlying cause can be confidently elicited (most common being non-adherence to fluid restriction or medications), can treat in primary care with timely review; (5) Considerations for ED referrals — precipitating causes needing attention: Hb drop, acute coronary syndromes, new onset arrhythmias, severe infections.',
        },
        {
          type: 'text',
          content: 'Urgent and Emergency Situations — A&E Referrals: all patients with acute onset moderate-to-severe HF including acute pulmonary oedema and cardiogenic shock; patients with recurrent HF complicated by acutely threatening events (recent AMI, pulmonary/systemic embolus, symptomatic arrhythmias).',
        },
        {
          type: 'text',
          content: 'Fitness Certification (SMA guidelines 2011): NYHA Class I and II — Annual review for fitness to drive. NYHA Class III and IV — Permanently unfit.',
        },
      ],
    },
    {
      heading: 'Referrals and Community Resources',
      blocks: [
        {
          type: 'text',
          content: 'SOC Referrals: all first-time HF patients; mild to moderate chronic HF (NYHA II–IV) with progressive/refractory symptoms; persistent symptoms (chest pain, syncope, dyspnoea, palpitations); secondary causes (thyroid disease); pre-existing or developing metabolic abnormalities (sodium <130mmol/L, renal impairment with creatinine rising ≥2-fold or >200μmol/L); abnormal weight loss due to malnutrition.',
        },
        {
          type: 'text',
          content: 'Heart Failure Shared Care Programme: Cardiology SOC may refer stable HF patients to alternate visits between Cardiology SOC and NUP. Suitable patients: at least 6 months after last ADHF admission, no need for active up-titration of disease-modifying medications, stable dose of diuretics, on maximally tolerated doses of disease-modifying therapies. Escalation criteria: worsening HF (worsening effort tolerance, volume overload signs, recurrent outpatient visits for diuretic adjustment), inability to tolerate HF therapy, syncope/dizziness, new onset AF with poor rate control. Contact: nuhcs_communitycardio@nuhs.edu.sg or hotline 8908 3194.',
        },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Components', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Blood Pressure Measurement', 'Twice a year', 'Aim BP <130/80 mmHg'] },
            { cells: ['Weight and BMI Assessment', 'Twice a year', 'Keep <23 kg/m² (non-Asian: <25 kg/m²)'] },
            { cells: ['Lipid Profile', 'Annually', 'Risk stratify per ACG lipid 2023 (aim LDL <1.4mmol/L for ACS history; <1.8mmol/L for stable IHD, post PCI or CABG)'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers', 'Offer smoking cessation clinic, counselling, behavioural advice'] },
            { cells: ['Diabetes Screening', 'Annually or once every three years, as clinically indicated', 'Every 3 years for normal HbA1c or glucose tolerance; annually for IFG or IGT'] },
            { cells: ['Kidney Function Monitoring', 'Annually', 'More frequently if titrating HF medications or diuretics'] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under the National Adult Immunisation Schedule (NAIS)'] },
            { cells: ['Pneumococcal Vaccination', 'As recommended under NAIS', 'As recommended under NAIS'] },
            { cells: ['Shingles Vaccination (Recombinant herpes zoster vaccine)', '2 doses at 2 to 6 months interval', 'As recommended under NAIS (patients aged 60 years or older)'] },
          ],
        },
      ],
    },
  ],
};
