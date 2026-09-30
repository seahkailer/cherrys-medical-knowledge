import { CpgDocument } from '../types';

export const bronchialAsthmaChildren: CpgDocument = {
  id: 'cpg-bronchial-asthma-children',
  condition: 'Bronchial Asthma in Children',
  source: '12 NUP CPG - Bronchial Asthma in Children.pdf',
  reviewDate: 'Reviewed August 2023 by Dr Wong Yi Lian & Dr Joanne Khor.',
  advisors: 'Key FPs: Dr Wong Yi Lian / Dr David Tan Hsien Yung. Specialist Advisor: Dr Mahesh Babu Ramamurthy (NUH Paediatrics). Acknowledgement: Clinical Services: Dr Jonathan Phang, Dr Tan Wee Hian. Nursing: APN Liau Wei Fong, SNC Alice Goh Khoon Chin, NC Yap Hwee Luan. NUHSP: Ms Esther Bek, Mr Woo Jia Xiang.',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Asthma is a chronic reversible airway disorder that is common in people of all ages. It can be severe and may be fatal. Asthma may present with cough, wheezing, and unexplained dyspnoea and chest tightness. Symptoms are often transient, may be persistent and tend to be worse at night or in the early mornings.' },
        { type: 'text', content: 'Management of asthma in children, particularly in children in the first five years of life, is often a challenge. Difficulties with diagnosis, efficacy and safety of drugs and drug delivery are common issues faced by the practitioner. Definition of asthma is the same in children as in adults. A detailed medical history and clinical examination is mandatory.' },
      ],
    },
    {
      heading: 'Presentation and Diagnosis',
      blocks: [
        { type: 'text', content: 'Asthma should be considered if any of the following is present: cough, recurrent wheeze/breathing difficulty or chest tightness. Symptoms often occur or worsen at night, with exercise, or on exposure to various triggers (e.g. dust mite allergens). Asthma exacerbations in children are often triggered by respiratory viral and mycoplasma infections. The presence of atopy or a family history of atopy supports the diagnosis of asthma.' },
        { type: 'table', headers: ['Feature', 'Characteristics Suggesting Asthma'], rows: [
          { cells: ['Cough', 'Recurrent or persistent non-productive cough that may be worse in the middle of the night. Cough occurring with exercise, laughing, crying or exposure to tobacco smoke (particularly in absence of respiratory infection).'] },
          { cells: ['Wheezing', 'Recurrent wheezing, including during sleep, or with triggers such as activity, laughing, crying or exposure to tobacco smoke or air pollution.'] },
          { cells: ['Difficult or heavy breathing / shortness of breath', 'Occurring with exercise, laughing, or crying.'] },
          { cells: ['Activity limitation', 'Not running, playing, or laughing at the same intensity as other children, tires earlier during walks.'] },
          { cells: ['Family or past personal history', 'Atopic dermatitis, allergic rhinitis, food allergy. Asthma in first-degree relative(s).'] },
        ]},
        { type: 'list', items: [
          { text: 'Red Flags — Consider investigations in the presence of', children: [
            { text: 'Neonatal / early onset' },
            { text: 'Failure to thrive, loss of weight' },
            { text: 'Frequent vomiting / choking' },
            { text: 'Focal lung or cardiovascular signs' },
            { text: 'Continuous wheezing' },
            { text: 'No association of symptoms with typical triggers' },
            { text: 'Hypoxemia outside context of viral illness' },
          ]},
          { text: 'Beware of alternative diagnosis', children: [
            { text: 'Recurrent viral infections with wheezing' },
            { text: 'Chronic rhino-sinusitis' },
            { text: 'Gastro-oesophageal reflux' },
            { text: 'Bronchopulmonary dysplasia / Chronic lung disease of prematurity' },
            { text: 'Aspiration syndromes including foreign body aspiration / recurrent silent aspiration' },
            { text: 'Congenital malformations of lung' },
            { text: 'Congenital heart disease' },
            { text: 'Tuberculosis' },
          ]},
          { text: 'For ≥ 5 years: Spirometry — Reduced FEV1 with reduced FEV1/FVC ratio; Bronchodilator response: Increase FEV1 > 12% predicted after bronchodilator challenge; Positive exercise challenge test: Fall in FEV1 of > 12% from pre-exercise values, or PEF > 15%' },
          { text: 'For < 5 years: Consider referral to a Paediatrician. Commence on trial of asthma therapy for 8–12 weeks; Review diagnosis if response is poor.' },
        ]},
      ],
    },
    {
      heading: 'Other Modes of Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Cough variant asthma without wheezing — May be the group over-diagnosed as asthma; rule out rhinitis and sinusitis' },
          { text: 'Recurrent viral wheezing in children aged 5 years or younger without atopy may not respond to asthma treatment' },
          { text: 'Exercise-induced bronchoconstriction' },
        ]},
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'Chest X-Ray: To exclude foreign body, structural abnormalities, chronic chest infection or to exclude complications in severe acute episodes.' },
          { text: 'Pulmonary Function Tests (Spirometry): Many children by 5 years old are capable of performing spirometry if coached by experienced technician with visual incentives. Children under 8 years of age are deemed to have completed the test if they have sustained expiratory effort for 3 seconds (as opposed to 6 seconds in adults).' },
          { text: 'Allergy Tests: Skin prick testing or specific immunoglobulin E (sIgE) in serum. Other allergy tests (antigen specific IgG, IgG4, intradermal skin tests) are not useful. Food allergy testing is not useful for evaluation of asthma per se.' },
          { text: 'Airway Challenge Tests: Methacholine or Histamine challenge tests are not routinely performed in children. Exercise challenge is useful for evaluation of exercise-induced asthma in children.' },
        ]},
      ],
    },
    {
      heading: 'Asthma Control Goals and Initial Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Asthma Control Goals', children: [
            { text: 'No limitation of daily activities, including exercise' },
            { text: 'No or minimal daytime symptoms (≤ once/week for ≤5 years; ≤ twice/week for 6–11 years)' },
            { text: 'No nocturnal symptoms or awakening because of asthma' },
            { text: 'No or minimal need for reliever treatment (same frequency thresholds as above)' },
            { text: 'No exacerbations' },
            { text: 'Normal or near-normal lung function results' },
          ]},
          { text: 'Initial Management After Diagnosis', children: [
            { text: 'Good doctor-patient relationship' },
            { text: 'Explanation about asthma and factors that influence it' },
            { text: 'Starting appropriate medication' },
            { text: 'Training about correct inhalation technique' },
            { text: 'Reinforcement on importance of child\'s adherence to medication and avoidance of trigger factors' },
            { text: 'Written Asthma Action Plan (WAAP)' },
            { text: 'Follow up appointment in 4–12 weeks' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Follow-Up Visit — Ask for SPICE',
      blocks: [
        { type: 'list', items: [
          { text: 'S — Symptoms' },
          { text: 'P — Parental concerns' },
          { text: 'I — Inhaler techniques' },
          { text: 'C — Compliance / Adherence' },
          { text: 'E — Environmental triggers avoidance' },
          { text: 'Symptom control assessment with GINA symptoms control tool or Asthma Control Test' },
          { text: 'Review growth chart' },
        ]},
      ],
    },
    {
      heading: 'GINA Symptom Control Tool for Children',
      blocks: [
        { type: 'text', content: 'GINA Assessment of Asthma Symptom Control in Children 5 Years and Younger — In the past 4 weeks, has the child had: (1) Daytime asthma symptoms for more than a few minutes, more than once a week? (2) Any activity limitation due to asthma? (3) Reliever medication needed more than once a week? (4) Any night waking or night coughing due to asthma?' },
        { type: 'text', content: 'GINA Assessment for Children 6–11 Years — In the past 4 weeks, has the child had: (1) Daytime asthma symptoms for more than twice a week? (2) Any activity limitation due to asthma? (3) Reliever medication needed more than twice a week? (4) Any night waking due to asthma?' },
        { type: 'text', content: 'Interpretation: Well controlled = none of these; Partly controlled = 1–2 of these; Uncontrolled = 3–4 of these.' },
        { type: 'text', content: 'Asthma Control Test (ACT©) for children aged 4–11 years: 7-item questionnaire. Score ≤ 19 = poor asthma control; Score ≥ 20 = asthma may be under control; Score 27 = total control. For children aged 12 and above: same 5-item ACT as adults. Score ≤ 19 = poor control; 20–24 = well controlled; 25 = total control.' },
      ],
    },
    {
      heading: 'Titrating Inhaled Corticosteroid',
      blocks: [
        { type: 'list', items: [
          { text: 'If child is well controlled and maintained for at least 3 months', children: [
            { text: 'Consider tapering ICS treatment gradually to lowest effective dose' },
            { text: 'Children with high risk of poor asthma outcomes should be tapered cautiously' },
            { text: 'If ICS is tapered down or stopped, schedule follow-up in 3–6 weeks to review symptoms' },
          ]},
          { text: 'If child is partly controlled or uncontrolled, check the following', children: [
            { text: 'Verify diagnosis' },
            { text: 'Assess inhaler technique' },
            { text: 'Check adherence to medication and avoidance of trigger factors' },
            { text: 'Management of co-morbid conditions (allergic rhinitis, GERD, etc.)' },
            { text: 'Review medication dose' },
          ]},
          { text: 'Most children will respond to first line of low dose ICS if above factors are corrected. If all above factors have been corrected, consider stepping up treatment.' },
        ]},
      ],
    },
    {
      heading: 'Assessment of Risk Factors for Poor Asthma Outcomes',
      blocks: [
        { type: 'list', items: [
          { text: 'Features of patients at increased risk of adverse events', children: [
            { text: 'History of severe asthma exacerbations requiring intubation or HDU/ICU care' },
            { text: '≥ 1 severe exacerbation in last 12 months' },
            { text: 'High SABA use (> 1 canister of SABA per month)' },
            { text: 'Inadequate ICS, poor adherence, or incorrect inhaler technique' },
            { text: 'Comorbidities: Obesity, chronic rhino-sinusitis, GERD, confirmed food allergy' },
            { text: 'Exposures: Smoking, air pollution, allergens (dust mites, cockroach, pets, mould)' },
            { text: 'Major psychological or socioeconomic problems for child or family' },
            { text: 'Low initial FEV1, high BD reversibility; Blood eosinophilia' },
          ]},
          { text: 'Risk factors for persistent airflow limitation', children: [
            { text: 'Severe asthma with several hospitalisations' },
            { text: 'History of bronchiolitis in the first 3 months of age' },
            { text: 'History of maternal smoking in pregnancy, preterm birth, low birth weight and neonatal ventilation' },
          ]},
          { text: 'Risk factors for medication side-effects', children: [
            { text: 'Systemic: Chronic use of moderate to high dose ICS may reduce growth velocity in pre-pubertal children and slight reduction in adult final height. However, poorly controlled asthma itself may have much greater impact on a child\'s growth.' },
            { text: 'Local: With good inhaler technique using spacers, local side-effects are not common in children. When ICS is used without spacer, local side effects such as oral thrush should be looked for.' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment — Children ≤ 5 Years',
      blocks: [
        { type: 'text', content: 'In children aged 0 to 5 years, long-term treatment with SABA alone (without preventer) for asthma could be used ONLY if the child fulfils ALL of the following criteria: No history of ICU admission or intubation for asthma; No more than 3 exacerbations over the past year; Normal lung function test over the past year (if available); No night awakening due to asthma over the past 4 weeks; No exercise limitations due to asthma over the past 4 weeks; Asthma symptoms no more than once over the past 4 weeks; SABA used no more than once over the past 4 weeks.' },
        { type: 'list', items: [
          { text: 'Step 1–2: Low-dose ICS, plus as-needed inhaled SABA. Consider specialist referral. Other option: Daily LTRA or intermittent short course of ICS at onset of respiratory distress. *Blackbox Warning for Montelukast: Risk of neuropsychiatric effects including suicidal thoughts, depression, sleep and behaviour changes. Counsel parents.' },
          { text: 'Step 3: Double low-dose ICS, plus as-needed SABA. Consider specialist referral. (Insufficient data on ICS-LABA in children < 4 years; not approved for this age group.)' },
          { text: 'Step 4 & 5: Continue controller treatment and refer to a specialist.' },
        ]},
        { type: 'table', headers: ['Drug (≤ 5 years)', 'Low Total Daily Dose (mcg)'], rows: [
          { cells: ['Beclomethasone Dipropionate (pMDI, extrafine particle, HFA)', '50 (ages 5 years and older)'] },
          { cells: ['Fluticasone Propionate (pMDI, standard particle, HFA)', '50 (ages 4 years and older)'] },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment — Children 6–11 Years',
      blocks: [
        { type: 'list', items: [
          { text: 'Step 1–2: Daily low dose ICS, plus as-needed SABA. Other options: ICS whenever SABA is taken; Daily LTRA with as needed SABA. *Blackbox Warning for Montelukast (see above).' },
          { text: 'Step 3: Low dose ICS-LABA plus as needed SABA; or medium dose ICS plus as needed SABA. Other option: Low dose ICS with daily LTRA with as needed SABA. MART: Daily low-dose ICS-formoterol plus as needed low-dose ICS-formoterol. *Blackbox Warning for Montelukast (see above).' },
          { text: 'Step 4: Medium dose ICS-LABA, plus as needed SABA. Consider specialist referral. Patients not achieving good control despite Step 4 treatment may have refractory asthma and should be reviewed by a specialist.' },
          { text: 'Step 5: Refer specialist for phenotypic assessment and consideration of add-on treatment. Management should be supervised directly by specialist.' },
        ]},
        { type: 'table', headers: ['Drug (6–11 years)', 'Low Daily Dose (mcg)', 'Medium Daily Dose (mcg)', 'High Daily Dose (mcg)'], rows: [
          { cells: ['Beclomethasone Dipropionate (pMDI, extrafine particle, HFA)', '50–100', '> 100–200', '> 200'] },
          { cells: ['Budesonide (DPI)', '100–200', '> 200–400', '> 400'] },
          { cells: ['Fluticasone Propionate (DPI)', '50–100', '> 100–200', '> 200'] },
          { cells: ['Fluticasone Propionate (pMDI, standard particle, HFA)', '50–100', '> 100–200', '> 200'] },
        ]},
        { type: 'table', headers: ['Combination ICS/LABA Drug', 'Dosage'], rows: [
          { cells: ['Seretide 25/50® Evohaler (Fluticasone 50mcg/Salmeterol 25mcg) — ≥ 4 years', 'Usual: 1–2 puffs once to twice daily. Maximum: 2 puffs twice daily.'] },
          { cells: ['Seretide 50/100® Accuhaler (Fluticasone 50mcg/Salmeterol 50mcg) — ≥ 4 years', 'Usual: 1 puff once or twice daily. Maximum: 1 puff twice daily.'] },
          { cells: ['Symbicort® Rapihaler (Budesonide 80mcg/Formoterol 2.25mcg) — 6–11 years', 'Recommended dose: 2 puffs BD. When control achieved with BD regimen, tapering to ICS only can be offered.'] },
        ]},
        { type: 'text', content: 'NOTE: LABAs should NOT be used without concomitant inhaled corticosteroids in asthma. Recommended inhaler devices: < 4 years — pMDI plus spacer with face mask; ≥ 4 years — pMDI plus spacer with mouthpiece.' },
      ],
    },
    {
      heading: 'Asthma Exacerbations in Children — Severity Assessment',
      blocks: [
        { type: 'table', headers: ['Parameter', 'Mild', 'Moderate', 'Severe', 'Respiratory Arrest Imminent'], rows: [
          { cells: ['Breathlessness', 'While walking; can lie down', 'While at rest (infant – softer, shorter cry); prefer sitting', 'While at rest; hunched forward', ''] },
          { cells: ['Feeding (infant)', 'Feeds normally', 'Difficulty feeding', 'Stops feeding', ''] },
          { cells: ['Talks in', 'Sentences', 'Phrases', 'Words', ''] },
          { cells: ['Alertness', 'May be agitated', 'Usually agitated', 'Usually agitated', 'Drowsy or confused'] },
          { cells: ['Respiratory rate', 'Increased', 'Increased', 'Increased', ''] },
          { cells: ['Accessory muscles', 'Usually not', 'Usually', 'Usually', ''] },
          { cells: ['Central cyanosis', 'Absent', 'Absent', 'May be present', ''] },
          { cells: ['Wheeze', 'Moderate, often only end expiratory', 'Loud', 'Chest may be quiet', 'Absence of wheeze'] },
          { cells: ['Pulse rate', '< 100 beats/min', 'Increased', '> 180 beats/min (0–3 yrs); > 150 beats/min (4–5 yrs)', 'Bradycardia'] },
          { cells: ['SaO₂ (on air)', '> 92%', '> 92%', '< 92%', ''] },
        ]},
        { type: 'table', headers: ['Age', 'Normal Resp Rate (per min)', 'Age', 'Normal Pulse Rate (per min)'], rows: [
          { cells: ['< 2 months', '< 60', '2–12 months', '< 160'] },
          { cells: ['2–12 months', '< 50', '1–2 years', '< 120'] },
          { cells: ['1–5 years', '< 40', '2–8 years', '< 110'] },
          { cells: ['6–8 years', '< 30', '', ''] },
        ]},
      ],
    },
    {
      heading: 'Management of Acute Asthma Exacerbation in Children',
      blocks: [
        { type: 'list', items: [
          { text: 'Mild/Moderate Exacerbation (Mild/mod tachypnea, no/minimum chest retractions, SaO₂ > 92%)', children: [
            { text: 'Mild: Weight ≤ 10kg: Salbutamol 4 puffs by pMDI + spacer; Weight > 10kg: Salbutamol 8 puffs by pMDI + spacer. Repeat every 20 minutes for the first hour if needed.' },
            { text: 'Moderate: Add Oral prednisolone 1–2 mg/kg (max 20mg for < 2 yrs; max 30mg for 2–5 yrs; max 40mg for 6–11 yrs). Add Ipratropium MDI: Weight ≤ 10kg: 2 puffs; Weight > 10kg: 4 puffs.' },
            { text: 'Keep SaO₂ > 94–98%; add O₂ via face mask if necessary' },
            { text: 'Convert to Nebuliser if child is fatigued or hypoxic: Weight ≤ 10kg: Salbutamol 0.5ml / Ipratropium 0.5ml / Normal Saline 3ml; Weight > 10kg: Salbutamol 1ml / Ipratropium 1ml / Normal Saline 2ml' },
          ]},
          { text: 'Severe Exacerbation (Tachypnoeic+, chest retractions, accessory muscles++, SaO₂ < 92%)', children: [
            { text: 'Nebulise (same doses as above)' },
            { text: 'Oral prednisolone 1–2 mg/kg (same doses as above)' },
            { text: 'High flow O₂ via mask (6–10 L/min) to achieve SaO₂ ≥ 94%' },
            { text: 'Review after 1 cycle; refer to hospital A&E if no improvement/deterioration' },
          ]},
          { text: 'Life-Threatening Exacerbation — Arrange transfer to hospital immediately', children: [
            { text: 'High flow O₂ via mask (6–10 L/min) to achieve SaO₂ 94–98%' },
            { text: 'IV access' },
            { text: 'Oral prednisolone 1–2 mg/kg OR IV hydrocortisone 4 mg/kg stat (max 100mg)' },
            { text: 'Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: 's/c adrenaline 1:1000 0.1–0.3 ml (0.01 ml/kg) only for those above 2 years old' },
          ]},
        ]},
        { type: 'text', content: 'Discharge criteria after mild/moderate exacerbation: Continue SABA-PRN; Start or step up controller, check inhaler technique and adherence; Continue oral prednisolone usually 3–5 days; Follow up within 1–2 days; WAAP. A short course of oral steroids should be considered if: (1) requires frequent β₂-agonists therapy (more frequently than 4 hourly); (2) has a past history of life-threatening asthma exacerbation; (3) is on high dose inhaled steroid or low dose oral maintenance steroid therapy. For moderate to severe exacerbations, prednisolone 1–2 mg/kg/day can be given for 3 to 5 days without need to taper.' },
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        { type: 'list', items: [
          { text: 'Presence of Risk Factors for Death from Asthma', children: [
            { text: 'Prior intubation and mechanical ventilation for asthma' },
            { text: 'Hospitalisation or emergency care visit for asthma in the past year' },
            { text: 'Current use of systemic corticosteroids or recent withdrawal' },
            { text: 'Not currently using inhaled corticosteroids' },
            { text: 'Use of > 1 canister of inhaled short-acting β₂-agonist within 1 month' },
            { text: 'History of psychiatric disease or psychosocial problems' },
          ]},
          { text: 'Indications for Referral to Paediatric Specialist', children: [
            { text: 'Patients with high risk asthma with poor control' },
            { text: 'Patient aged 5 years old and younger (referral should be considered)' },
            { text: 'Patients who remain symptomatic, show suboptimal response to therapy' },
            { text: 'Patients requiring high doses of inhaled steroids (BDP or Budesonide ≥ 400 mcg/day)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Asthma Control Assessment (GINA Score, ACT)', 'At least twice a year', ''] },
          { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers unless change in smoking habit', 'Assessment on smoking habits and provide smoking cessation counselling'] },
          { cells: ['Written Asthma Action Plan', 'Upon diagnosis, recommended annually', ''] },
          { cells: ['Spirometry', 'Recommended at or soon after diagnosis, or when clinically indicated (if age appropriate)', ''] },
          { cells: ['Influenza and Pneumococcal Vaccination', 'As recommended under the National Childhood Immunisation Schedule', ''] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 13 NUP CPG — Cancer Screening (Nov 2025)
// ---------------------------------------------------------------------------
const cancerScreening: CpgDocument = {
};
