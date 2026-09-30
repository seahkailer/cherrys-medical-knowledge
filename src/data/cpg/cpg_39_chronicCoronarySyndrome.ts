import { CpgDocument } from '../types';

export const chronicCoronarySyndrome: CpgDocument = {
  id: 'cpg-ccs',
  condition: 'Chronic Coronary Syndrome (CCS)',
  source: '39 NUP CPG - Management of Chronic Coronary Syndrome.pdf',
  reviewDate: 'Published July 2025.',
  advisors: 'Key FP: Dr Kwan Yew Seng. Specialist: Dr Lim Toon Wei (Senior Consultant, Cardiology, National University Heart Centre, Singapore). Input: NUHSP: Mr Marvin Sim; Nursing: APN Liau Wei Fong.',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Chronic Coronary Syndrome (CCS), also known as chronic/stable ischaemic heart disease or stable coronary artery disease. Refers to clinical presentations arising from structural or functional alterations related to chronic diseases of the coronary arteries or microcirculation.' },
        { type: 'text', content: 'CCS encompasses six clinical presentations: (1) Stable angina with suspected CAD ± dyspnoea*; (2) Stabilised symptom(s) after ACS or revascularisation*; (3) Asymptomatic CAD*; (4) New-onset HF with suspected CAD; (5) Vasospastic angina; (6) Microvascular angina. (*Covered in this CPG)' },
        { type: 'text', content: 'Primary goals of CCS management: Reduce incidence of first acute MI in patients with screening-detected CAD; alleviate symptoms; reduce recurrence of MI; prevent complications (HF, AF); improve quality of life. Achieved through pharmacological and non-pharmacological treatment including lifestyle interventions.' },
      ],
    },
    {
      heading: 'Pharmacological Treatment',
      blocks: [
        { type: 'list', items: [
          { text: '(A) Anti-Platelet Therapy: Use long-term low-dose aspirin monotherapy for secondary prevention. Long-term clopidogrel can be alternative to aspirin (not recommended if known CYP2C19 decrease/poor metaboliser). Low-dose aspirin associated with minimal bleeding risk; PPI may be required for high GI bleeding risk patients. Use PPI if gastric protection needed for clopidogrel or ticagrelor patients (note: omeprazole/esomeprazole reduce clopidogrel active metabolite — discuss with cardiologist via VPC if concerned). DAPT (aspirin + clopidogrel or ticagrelor) for patients after PCI — duration typically determined by cardiologist and communicated to PC.' },
          { text: '(B) Medications for Prevention of Angina: Beta-blockers first line unless contraindicated. CCB when beta-blockers contraindicated or unacceptable side effects. Combination dihydropyridine CCB + beta-blocker if initial beta-blocker unsuccessful. AVOID concurrent non-dihydropyridine CCB + beta-blocker (risk of heart block/bradycardia). Additional options: long-acting nitrates, ivabradine (not in NUP), ranolazine (not in NUP), trimetazidine — added to beta-blocker and/or CCB if additional anti-anginal therapy needed. AVOID nitrates + PDE-5 inhibitors (severe hypotension). Do not combine ivabradine with non-dihydropyridine CCB. Follow recommended dosing for long-acting nitrates to minimise nitrate tolerance.' },
          { text: '(C) Management of Co-morbidities: T2DM — consider SGLT2 inhibitor or GLP-1 RA with proven CV benefits regardless of HbA1c; target HbA1c ≤7% (less stringent ≤8% for frail/older/short life expectancy). Hypertension — use ACE inhibitor, ARB, or CCB as first-line; thiazide/thiazide-like diuretics as alternative; target BP <130/80 mmHg (less stringent <140/90 for elderly ≥85 years or symptomatic orthostatic hypotension). Dyslipidaemia — maximally tolerated statin ± ezetimibe; PCSK9i if needed; target LDL-C <1.8 mmol/L (most CCS); <1.4 mmol/L for history of ACS, recurrent events or additional CV risk factors; if target not feasible, aim for ≥50% reduction from baseline. CKD — ACE inhibitor or ARB titrated to max tolerated; add SGLT2 inhibitor for CKD with persistent albuminuria regardless of DM. Chronic HF — treatment based on HF type, fluid management, prognostic interventions; for reduced LVEF (≤40%): SGLT2 inhibitors, ARNI, MRA, and beta-blockers. AF — OAC monotherapy based on modified CHA₂DS₂-VASc score for new-onset AF without recent stent; refer cardiologist for new-onset AF with stent within past 12 months.' },
        ]},
      ],
    },
    {
      heading: 'Non-Pharmacological Treatment and Lifestyle',
      blocks: [
        {
          type: 'table',
          headers: ['Aspect', 'Advice'],
          rows: [
            { cells: ['BMI and Weight Management', 'Achieve and maintain healthy weight (BMI <23 kg/m²). Lose weight if required through recommended energy intake and increased physical activity (± pharmacological management).'] },
            { cells: ['Psychosocial', 'Avoid situations inducing psychosocial stress. Treat depression and anxiety through psychological or pharmacological interventions.'] },
            { cells: ['Sexual Activity', 'Sexual activity associated with low CV risk if CCS is stable and asymptomatic at low-to-moderate activity. PDE-5 inhibitors generally safe but NOT to be taken with nitrates (severe hypotension risk).'] },
            { cells: ['Patient Education', 'Educate on condition, importance of pharmacological and non-pharmacological interventions, self-care, medication adherence.'] },
          ],
        },
        { type: 'text', content: 'Exercise for CCS: Regular physical activity is associated with reduced cardiovascular and all-cause mortality. All individuals with established (long-standing) CCS should perform minimal physical activity recommendations. Applies to stable angina, asymptomatic/symptomatic stabilised <1 year after ACS or revascularisation, and asymptomatic/symptomatic >1 year after diagnosis or revascularisation. Asymptomatic patients with long-standing CCS intending intensive/competitive sports → refer cardiologist (may need exercise stress testing, functional imaging, echo). Inform patients that symptoms during exercise should prompt reassessment. Patients on dual antiplatelet should avoid bodily collision sports (especially with OAC due to haemorrhage risk). Exercise CONTRAINDICATED in: unstable conditions (uncontrolled HT or DM); anginal symptoms; high-grade arrhythmias (VF); decompensated HF; severe aortic dilatation; active thromboembolic disease.' },
      ],
    },
    {
      heading: 'Follow-Up and Monitoring',
      blocks: [
        { type: 'list', items: [
          { text: 'Schedule regular follow-up for all patients with CCS.' },
          { text: 'During follow-up: assess overall CV risk factors (especially dyslipidaemia, T2DM); review exertional and rest symptoms and their impact on daily activities; assess adherence to non-pharmacological advice and medications; remind about vaccinations (influenza, pneumococcal, COVID-19); refer to tertiary centre/specialist if required (HF, poorly controlled angina).' },
        ]},
      ],
    },
    {
      heading: 'Assessment of Acute Exacerbation of Chest Pain in CCS',
      blocks: [
        { type: 'text', content: '"Typical" chest pain (more likely cardiac): all three of — (1) Constricting/compressive discomfort front of chest radiating to neck/shoulders/jaw/arms; (2) Precipitated by physical exertion; (3) Relieved by rest or short-acting GTN within ~5 minutes. When only two of three features present: less likely cardiac.' },
        { type: 'text', content: 'For suspected cardiac chest pain in CCS: order resting 12-lead ECG as baseline. All patients with CCS and suspected cardiac chest pain should be offered referral to ED for further assessment or urgent cardiologist review depending on clinical picture.' },
      ],
    },
    {
      heading: 'Fitness Certification',
      blocks: [
        { type: 'list', items: [
          { text: 'Class 1, 2 and 3 licences: Angina — not fit until satisfactorily controlled. MI/CABG/unstable angina — not fit for at least 1 month. Coronary angioplasty — at least 1 week off driving; resume if recovery satisfactory.' },
          { text: 'Class 4, 5 and Vocational Licences: Completion of exercise stress test required — will need cardiologist certification.' },
        ]},
      ],
    },
    {
      heading: 'Referral Back to Cardiology SOC',
      blocks: [
        { type: 'list', items: [
          { text: 'Urgent review: New onset chest pain suspected to be ischaemic; exacerbation or recurrence of stable angina.' },
          { text: 'Urgent review: New onset or exacerbation of heart failure.' },
          { text: 'Urgent review: New onset AF that is highly symptomatic or with poor rate control (HR <40 or >110 bpm at rest).' },
          { text: 'Urgent review: Syncope.' },
          { text: 'Routine referral: Problems with employment, life insurance, or unacceptable lifestyle interference. Patient wishes to see cardiologist.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Blood Pressure Measurement', 'Twice a year', ''] },
            { cells: ['Weight and BMI', 'Twice a year', 'Keep <23 kg/m² (non-Asian: <25 kg/m²)'] },
            { cells: ['Lipid Profile', 'Annually', 'Target LDL <1.8 mmol/L; <1.4 mmol/L for ACS history'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers', 'Smoking habit assessment and cessation counselling'] },
            { cells: ['Diabetes Screening', 'Annually (IFG/IGT) or every 3 years (normal glucose tolerance)', ''] },
            { cells: ['Kidney Function', 'Annually', 'More frequent if on ACE inhibitors. uACR annually or more frequently if abnormal.'] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As per NAIS'] },
            { cells: ['Pneumococcal Vaccination', 'As per NAIS', ''] },
            { cells: ['Shingles Vaccination (Recombinant herpes zoster)', '2 doses at 2–6 month interval', 'Per NAIS and NCIS for patients ≥60 years'] },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 40 NUP CPG — Minor Fractures, Sprain and Strain in Upper Limbs (Nov 2025)
// ---------------------------------------------------------------------------
const upperLimbFractures: CpgDocument = {
};
