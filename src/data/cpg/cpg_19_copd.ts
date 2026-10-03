import { CpgDocument } from '../types';

export const copd: CpgDocument = {
  id: 'copd',
  condition: 'Chronic Obstructive Pulmonary Disease (COPD)',
  source: 'NUP CPG',
  reviewDate: 'October 2025',
  advisors: 'Dr See Kay Choong (Senior Consultant, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Chronic Obstructive Pulmonary Disease (COPD) is a heterogeneous disorder characterised by airflow obstruction that is not fully reversible. The airflow limitation is usually both progressive and associated with exposure to noxious particles or gases. Smoking is by far the most important risk factor.' },
        { type: 'text', content: 'Globally in 2019, COPD is the third most common cause of death. In Singapore, COPD is estimated to be the tenth highest cause of death and seventeenth highest cause of disability-adjusted life years, with an annual societal cost of SGD$3,304 per capita in 2022.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'list', items: [
          { text: 'Screen all patients with any risk factors for COPD symptoms, and vice versa, at least yearly.' },
          { text: 'Suspect COPD in any patient with at least one COPD symptom and risk factor.' },
          { text: 'All patients suspected to have COPD MUST be evaluated by spirometry.' },
          { text: 'Screening spirometry in the general asymptomatic population is not recommended.' },
        ]},
        { type: 'text', content: 'Diagnosis of COPD requires ALL of the following: (1) At least one COPD symptom; (2) At least one risk factor; (3) Evidence of airflow limitation: post-bronchodilator spirometry FEV1/FVC <0.70.' },
        { type: 'table', headers: ['COPD Symptoms', 'Risk Factors', 'Co-Morbidities'], rows: [
          { cells: ['Chronic cough (generally initial symptom, may be intermittent)', 'Age 40 years and above', 'Heart disease'] },
          { cells: ['Chronic sputum production (any pattern, may be intermittent)', 'Tobacco smoke (ex and current smoker)', 'Hypertension'] },
          { cells: ['Chronic unexplained dyspnoea or reduced effort tolerance (hallmark, progressive, persistent)', 'Environmental exposure (second-hand smoke, air pollution)', 'Diabetes'] },
          { cells: ['Recurrent lower respiratory tract infections', 'Occupational exposure (dust, vapour, fumes, gases)', 'Chronic kidney disease'] },
          { cells: ['Wheezing (may be exertional or nocturnal)', 'History of abnormal lung development, severe childhood infections, or pulmonary tuberculosis', 'Osteoporosis'] },
          { cells: ['Fatigue', 'Rare risk factor: alpha-1-antitrypsin deficiency', 'Sleep apnoea, Depression, Cognitive impairment, Lung cancer'] },
          { cells: ['Severe COPD: weight loss, muscle mass loss, anorexia, ankle swelling (cor pulmonale), depression/anxiety', '', ''] },
        ]},
      ],
    },
    {
      heading: 'Investigation',
      blocks: [
        { type: 'list', items: [
          { text: 'Spirometry: Mandatory to establish COPD diagnosis (post-bronchodilator FEV1/FVC <0.70 confirms COPD). Should be undertaken when patients are clinically stable and free from respiratory tract infections.' },
          { text: 'Pulse oximetry: to evaluate the need for supplemental oxygen therapy.' },
          { text: 'Chest X-ray: Not useful to establish COPD diagnosis but valuable to exclude alternative diagnosis and establish comorbidities.' },
          { text: 'Full blood count: to rule out anaemia; blood eosinophil count guides use of ICS (eosinophils <100 cells/μl: ICS little/no effect; 100–299 cells/μl: consider ICS if symptoms not better; ≥300 cells/μl: ICS beneficial).' },
          { text: 'Alpha-1 antitrypsin deficiency (AATD) screening: WHO recommends all COPD patients be screened once.' },
        ]},
      ],
    },
    {
      heading: 'Management Goals',
      blocks: [
        { type: 'list', items: [
          { text: 'To reduce symptoms: relieve symptoms, improve exercise tolerance, and improve health status.' },
          { text: 'To reduce risks: prevent disease progression, prevent and treat exacerbation, and reduce mortality.' },
          { text: 'To prevent or minimise side effects from treatment.' },
        ]},
      ],
    },
    {
      heading: 'Follow-Up and Monitoring',
      blocks: [
        { type: 'list', items: [
          { text: 'Assess symptoms at least yearly using CAT score (document in EPIC Flowsheets). More frequently for patients who are more symptomatic, have more frequent exacerbations, or have recent escalation in treatment.' },
          { text: 'History of exacerbations: Increased risk of future exacerbation if TWO OR MORE exacerbations requiring antibiotics or steroids in the previous year, OR ONE exacerbation leading to hospitalisation in the previous year.' },
          { text: 'Smoking assessment (2 As approach): Ask all patients about smoking; Act to help all smokers quit.' },
          { text: 'Pharmacotherapy: optimise bronchodilator treatment and assess inhaler technique and medication adherence at every visit.' },
          { text: 'Ensure up-to-date vaccination: Annual influenza; Pneumococcal (per NAIS); Tdap; Covid-19; RSV (age >60 with chronic heart or lung disease); Zoster (COPD patients over 50).' },
          { text: 'Nutritional support: weight loss and malnutrition may develop as COPD progresses. Nutritional repletion (including protein supplementation) plays an important role.' },
          { text: 'Long-term oxygen therapy (LTOT): indicated when SaO2 <88% on room air when stable (confirmed 2x over 3-week period), or SaO2 =88% with evidence of right heart failure or erythrocytosis.' },
        ]},
      ],
    },
    {
      heading: 'Pharmacotherapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Start a long-acting bronchodilator treatment, preferably a LAMA (preferred over LABA-only inhalers), for patients with infrequent or less intense symptoms and lower risk of exacerbation. SAMA or SABA alone can be considered in patients with very occasional dyspnoea.' },
          { text: 'Start dual bronchodilator therapy with LAMA+LABA for patients with frequent or intense COPD symptoms, or a higher risk of exacerbation.' },
          { text: 'Consider triple therapy with LAMA+LABA+ICS for patients with: (1) Higher risk for exacerbations and blood eosinophils ≥300 cells/μl; (2) Frequent exacerbations on LAMA+LABA with blood eosinophils ≥100 cells/μl; (3) History of asthma or features of both asthma and COPD.' },
          { text: 'Avoid ICS in patients with recurrent pneumonia, blood eosinophils <100 cells/μl, or history of mycobacterial infections.' },
        ]},
        { type: 'table', headers: ['Medication', 'Adult Dose', 'Significant Adverse Reactions', 'Contraindications'], rows: [
          { cells: ['SABA: salbutamol (Ventolin) 100mcg MDI', '1–2 puffs 3–4 times PRN', 'Hypersensitivity reactions, hypokalaemia (high doses)', 'Hypersensitivity to salbutamol or any component'] },
          { cells: ['SAMA: ipratropium bromide (Atrovent N) 20mcg MDI', '2 puffs 3–4 times PRN', 'Dry mouth, constipation, tachycardia, palpitations, arrhythmias, ocular complications', 'Hypersensitivity to ipratropium, atropine, or its derivatives'] },
          { cells: ['LAMA: umeclidinium bromide (Incruse Ellipta) DPI 62.5mcg', '1 INH OD. Max 1 INH/day', 'CV effects, hypersensitivity reactions, increased intraocular pressure, urinary retention', 'Hypersensitivity to umeclidinium or any component; severe hypersensitivity to milk proteins'] },
          { cells: ['LAMA: tiotropium bromide (Spiriva Respimat) 2.5mcg', '2 INH OD. Max 2 INH/day', 'Xerostomia, URTI, pharyngitis, sinusitis', 'Hypersensitivity to ipratropium, tiotropium, or any component'] },
          { cells: ['LABA+LAMA: vilanterol+umeclidinium (Anoro Ellipta) DPI 25/62.5mcg', '1 INH OD. Max 1 INH/day', 'Hypersensitivity reactions, tachycardia, hyperglycaemia, hypokalaemia, urinary retention', 'Hypersensitivity to umeclidinium, vilanterol; asthma monotherapy; acute bronchospasm; concomitant LABA'] },
          { cells: ['LABA+LAMA+ICS: Vilanterol/umeclidinium/Fluticasone (Trelegy Ellipta) DPI 25/62.5/100mcg (Not available in NUP)', '1 INH OD. Max 1 INH/day', 'Nasopharyngitis, headache, oral candidiasis, UTI, pneumonia', 'Hypersensitivity to components; primary treatment of status asthmaticus or acute COPD episodes'] },
          { cells: ['LABA+ICS: formoterol+budesonide (Duoresp Spiromax) DPI 4.5/160mcg', '2 INH BD (max dose)', 'Headache, nasopharyngitis, oral candidiasis, skin bruises', 'Hypersensitivity to budesonide or formoterol; primary treatment of status asthmaticus'] },
          { cells: ['LABA+ICS: salmeterol+fluticasone (Seretide Accuhaler) DPI 50/500mcg', '1 INH BD (max dose)', 'Hypokalaemia, paradoxical bronchospasm, QTc prolongation', 'Hypersensitivity to fluticasone, salmeterol; status asthmaticus; acute COPD episodes'] },
        ]},
      ],
    },
    {
      heading: 'Acute Exacerbation of COPD',
      blocks: [
        { type: 'text', content: 'Definition: An event characterized by dyspnoea and/or cough and sputum production that worsens over ≤14 days; may be accompanied by tachypnoea and/or tachycardia.' },
        { type: 'text', content: 'Severity (ROME criteria): MILD — Dyspnea VAS <5, RR <24, HR <95 bpm, O2 sat >92% RA. MODERATE — Dyspnea VAS ≥5, RR ≥24, HR ≥95 bpm, O2 sat <92% RA (≥3/5 criteria). SEVERE — Marked dyspnoea and tachypnoea (RR >30), use of accessory muscles at rest, cyanosis, confusion, O2 sat <90% RA.' },
        { type: 'text', content: 'Home management: (1) Increase dose/frequency of SABA; (2) Consider adding SAMA; (3) Consider starting antibiotics if ≥2/3 Anthonisen criteria (increased dyspnoea, increased sputum volume, increased sputum purulence) — first line: PO amoxicillin/clavulanate 625mg TDS 5 days OR PO azithromycin 500mg OM for 3 days; alternative: PO doxycycline 100mg BD 5 days; (4) Consider oral corticosteroids (PO prednisolone 30mg OM 5 days); (5) Encourage fluid intake and sputum clearance; (6) Smoking cessation.' },
        { type: 'text', content: 'Indications for hospitalisation: Moderate to severe exacerbation, acute respiratory failure, onset of new physical signs (cyanosis, peripheral oedema), failure to respond to initial medical management, presence of serious comorbidities, insufficient home support.' },
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        { type: 'list', items: [
          { text: 'Indication for Respiratory Medicine Referral', children: [
            { text: 'Severe or frequent exacerbations' },
            { text: 'Onset of cor pulmonale, bullous lung disease, need for LTOT or home nebuliser therapy' },
            { text: 'Disease with age <40 years and <10 pack years (TRO AATD)' },
            { text: 'Rapid decline in FEV1 (>60 mL/year)' },
            { text: 'Development of new symptoms such as haemoptysis' },
          ]},
          { text: 'Palliative treatment options to reduce dyspnoea include opioids, pulmonary rehabilitation, patient self-management education, neuromuscular electrical stimulation, chest wall vibration, and blowing air onto the face.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Weight and BMI', 'Yearly', ''] },
          { cells: ['CAT score', 'Yearly', ''] },
          { cells: ['Spirometry', 'For diagnosis', ''] },
          { cells: ['Smoking assessment', 'Yearly for smokers; Once-off for non-smokers', 'Assess smoking habits and provide smoking cessation counselling'] },
          { cells: ['Inhaler technique', 'Every follow-up and prior to modifying therapy', ''] },
          { cells: ['Influenza Vaccination', 'Yearly', ''] },
          { cells: ['Pneumococcal Vaccination', 'Ensure up to date according to NAIS', ''] },
          { cells: ['Covid-19 Vaccination', 'Ensure up to date following National Guidelines', ''] },
        ]},
      ],
    },
  ],
};
