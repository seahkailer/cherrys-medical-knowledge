import { CpgDocument } from '../types';

export const acuteCoronarySyndrome: CpgDocument = {
  id: 'cpg-acs',
  condition: 'Acute Coronary Syndrome (ACS)',
  source: '37 NUP CPG - Management of Acute Coronary Syndrome.pdf',
  reviewDate: 'Published July 2025.',
  advisors: 'Key FP: Dr Kwan Yew Seng. Specialist: Dr Lim Toon Wei (Senior Consultant, Cardiology, National University Heart Centre, Singapore). Input: Emergency Medicine SAG Dr Anandan Gerard Thiagarajah; NUHSP: Mr Marvin Sim; Nursing: APN Liau Wei Fong.',
  sections: [
    {
      heading: 'Introduction and Classification',
      blocks: [
        { type: 'text', content: 'Cardiovascular disease (CVD) is the most common cause of mortality and morbidity worldwide. ACS is often the first clinical manifestation of CVD.' },
        { type: 'text', content: 'ACS is caused by disruption (rupture or erosion) of an unstable coronary artery atherosclerotic plaque with associated partial or complete coronary artery thrombosis and/or microemboli, resulting in diminished blood flow to the myocardium.' },
        { type: 'text', content: 'ACS includes 3 related clinical conditions: (1) Unstable angina; (2) NSTEMI; (3) STEMI.' },
        { type: 'text', content: 'Initial diagnosis and classification of ACS is based on: (1) Clinical history and symptomatology; (2) ECG interpretation; (3) Assessment of cardiac troponin.' },
        { type: 'text', content: 'Unstable angina: Transient myocardial ischaemia in the absence of significant myonecrosis (troponin not elevated). Characterised by prolonged (>20 min) rest angina; new onset severe angina; angina increasing in frequency, longer in duration, or lower in threshold; or angina after recent MI.' },
        { type: 'text', content: 'NSTEMI: Partially occluded artery → subendocardial ischaemia. STEMI: Completely occluded vessel → transmural ischaemia and infarction. ACS can be dynamic and patients may progress rapidly between types.' },
      ],
    },
    {
      heading: 'Diagnosis — Clinical Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Acute chest discomfort (pain, pressure, tightness, heaviness, or burning) is the leading presenting symptom.' },
          { text: 'Chest pain descriptors should be classified as cardiac, possibly cardiac, and likely non-cardiac. (Avoid term "atypical" though cardio e-referral still uses it.)' },
          { text: 'Chest pain-equivalent symptoms: dyspnoea, epigastric pain, pain in left or right arm or neck/jaw.' },
        ]},
      ],
    },
    {
      heading: 'History Taking and Physical Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'Focused history and accurate characterisation of presenting symptoms as soon as possible.' },
          { text: 'Vital signs promptly assessed, initial ECG ordered (may have been done by nursing in triage).' },
          { text: 'Physical examination to eliminate differential diagnoses and identify very high-risk/high-risk ACS features.' },
          { text: 'Focused PE: check all major pulses; measure BP in both arms; auscultate heart and lungs; assess for HF or circulatory compromise. Pulse and BP discrepancy = physical sign of aortic dissection.' },
        ]},
      ],
    },
    {
      heading: 'Differential Diagnoses of Acute Chest Pain',
      blocks: [
        {
          type: 'table',
          headers: ['Clinical Syndrome', 'Findings'],
          rows: [
            { cells: ['Pulmonary Embolism (Emergency)', 'Tachycardia + dyspnoea; pain with inspiration'] },
            { cells: ['Aortic Dissection (Emergency)', 'Connective tissue disorders (e.g. Marfan); extremity pulse differential; severe abrupt-onset pain + pulse differential + widened mediastinum on CXR; syncope'] },
            { cells: ['Oesophageal Rupture (Emergency)', 'Emesis, subcutaneous emphysema, pneumothorax with unilateral decreased/absent breath sounds'] },
            { cells: ['Noncoronary cardiac: Aortic Stenosis', 'Characteristic systolic murmur, tardus or parvus carotid pulse'] },
            { cells: ['Noncoronary cardiac: Aortic Regurgitation', 'Diastolic murmur at right of sternum, rapid carotid upstroke'] },
            { cells: ['Noncoronary cardiac: HCM', 'Increased or displaced LV impulse, prominent a wave in JVP, systolic murmur'] },
            { cells: ['Pericarditis', 'Fever, pleuritic chest pain, increased in supine position, friction rub'] },
            { cells: ['Myocarditis', 'Fever, chest pain, heart failure, S3'] },
            { cells: ['Oesophagitis, peptic ulcer, gallbladder disease', 'Epigastric tenderness; right upper quadrant tenderness, Murphy sign'] },
            { cells: ['Pneumonia', 'Fever, localised chest pain, may be pleuritic, friction rub'] },
            { cells: ['Pneumothorax', 'Dyspnoea and pain on inspiration, unilateral absence of breath sounds'] },
            { cells: ['Costochondritis / Tietze syndrome', 'Tenderness of costochondral junctions'] },
            { cells: ['Herpes Zoster', 'Pain in dermatomal distribution, triggered by touch; characteristic unilateral dermatomal rash'] },
          ],
        },
      ],
    },
    {
      heading: 'ECG Interpretation for Suspected ACS',
      blocks: [
        {
          type: 'table',
          headers: ['', 'NSTE-ACS', 'STEMI'],
          rows: [
            { cells: ['Electrocardiographic evidence', 'New/presumed new dynamic horizontal or down-sloping ST depression ≥0.5mm in ≥2 contiguous leads; and/or T-wave inversion >1mm in ≥2 contiguous leads with prominent R wave or R/S >1; or transient ST elevation', 'New/presumed new ST elevation ≥1mm in ≥2 anatomically contiguous leads (J-point) in all leads except V2–V3 (which require ≥2mm in men ≥40y, ≥2.5mm in men <40y, ≥1.5mm in women)'] },
            { cells: ['Other changes', 'Many have nonspecific ST/T changes or normal ECG. Absence of ECG evidence does not exclude ACS.', 'Posterior leads (V7–V9) should be obtained for suspected left circumflex occlusion (isolated ST depression ≥0.5mm in V1–V3). *ST changes may be seen in pericarditis, LVH, LBBB, Brugada, RV pacing, Takotsubo, early repolarisation — clinical correlation required.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management in the Polyclinic',
      blocks: [
        { type: 'list', items: [
          { text: 'Antiplatelet: Give aspirin loading dose 300mg orally if not contraindicated. Should be chewed (nonenteric coated) for faster onset. Loading dose applies even if already on aspirin.' },
          { text: 'Transfer patient to triage/treatment room. Inform nursing staff to call ambulance.' },
          { text: 'Oxygen: Supplement if SpO₂ <90%. Not recommended if SpO₂ >90% (not associated with clinical benefit).' },
          { text: 'Analgesia: Rapid and effective pain relief is important to prevent sympathetic activation. Sublingual GTN may be given ONLY in haemodynamically stable patients with SBP ≥90mmHg. Nitrates MUST NOT be given after recent PDE5 inhibitor use — avoid within 12 hours of avanafil, 24 hours of sildenafil/vardenafil, or 48 hours of tadalafil.' },
        ]},
      ],
    },
    {
      heading: 'Referrals — Rapid Access Chest Pain Clinic (RACPC)',
      blocks: [
        { type: 'text', content: 'For patients with chest pain suggestive of ischaemia, assessed as stable, and without ACS. Open to all NUP clinics. Clinic runs Mon–Fri at NTFGH. Appointments generally within 2–3 working days (Thursday/Friday referrals may be seen early the following week). Appointment paired with Treadmill Exercise ECG (TMX) test — patient must be able to do TMX. A blood test appointment may also be made.' },
        {
          type: 'table',
          headers: ['Inclusion Criteria', 'Exclusion Criteria'],
          rows: [
            { cells: ['Age ≥18 years', 'Suspected cardiac emergencies (suspected acute MI, severe/acute HF, unstable angina) — refer ED'] },
            { cells: ['Episode(s) of chest pain (unlikely to be musculoskeletal, pleuritic or gastric)', 'ECG abnormality: complete LBBB, >1mm resting ST depression, tachy/bradyarrhythmias — refer ED or Gen Cardio SOC'] },
            { cells: ['Baseline ECG done on referral day', 'Severe arterial hypertension (SBP >200 or DBP >110mmHg)'] },
            { cells: ['CV risk factors based on age/gender/DM/HT/HPL/smoking/ethnicity', 'On digoxin'] },
            { cells: ['No known CAD history OR CAD history >1 year prior with no existing Cardiology SOC', 'Existing/upcoming Cardiology SOC appointment in any PHI; normal CTCA/invasive angiogram in past 1 year'] },
          ],
        },
        { type: 'text', content: 'RACPC workflow for doctors: Order ECG for every referred patient. Ensure ECG is uploaded in Epic. Place correct referral order (Referral to Cardiology — Rapid Access Chest Pain Clinic — NTFGH). Order TCU in 2 weeks (to review RACPC results and chest pain symptoms). Send patient to NUP referral counter for RACPC appointment.' },
      ],
    },
  ],
};
