import { CpgDocument } from '../types';

export const bronchialAsthmaAdults: CpgDocument = {
  id: 'cpg-bronchial-asthma-adults',
  condition: 'Bronchial Asthma in Adults',
  source: '11 NUP CPG - Bronchial Asthma in Adults.pdf',
  reviewDate: 'Reviewed November 2024. Next review date: November 2027.',
  advisors: 'Key FPs: Dr David Tan Hsien Yung / Dr Joanne Khor. Specialist Advisor: Dr Liew Mei Fong (Senior Consultant, Alexandra Hospital). Acknowledgement: Clinical Services: Dr Jonathan Phang, Dr Tan Wee Hian, Ms Jamilah Jailani. Nursing: APN Liau Wei Fong, NC Yap Hwee Luan. Allied Health: Ms Lynette Goh (Dietetics), Ms Toh Hui Moon (Psychology), Ms Cindy Soh (Physiotherapy). NUHSP: Ms Esther Bek, Mr Woo Jia Xiang. NUH: Dr Lim Hui Fang.',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Asthma is a chronic reversible airway disorder that is common in people of all ages. It can be severe and may be fatal. Asthma may present with cough, wheezing, and unexplained dyspnoea and chest tightness. Symptoms are often transient, may be persistent and tend to be worse at night or in the early mornings. Asthma symptoms may be precipitated or aggravated by upper respiratory tract infections, cigarette smoke, environmental haze, exercise, drugs (e.g. aspirin, NSAIDs, β-blockers, ACE inhibitors), pets and occupational exposure to triggers.' },
        { type: 'text', content: 'A diagnosis of asthma is based on clinical presentation of characteristic symptoms and where possible, documentation of variable expiratory airflow limitation. Initiation of inhaled corticosteroids should not be delayed as these tests can be normal in mild or well controlled asthma.' },
        { type: 'text', content: 'Epidemiology: Asthma is one of the most common chronic respiratory conditions seen in primary care in Singapore. Around 5% of residents in Singapore aged 18 to 69 years have asthma. About 1 in 3 patients with asthma aged 12 years and older in Singapore report exacerbations in the past year, and about 1 in 2 have missed work or school due to asthma in the past year. Singapore\'s asthma hospital admission rates are higher than countries in the OECD. Despite wide availability of ICS, use of preventers in Singapore is the lowest among eight countries in the Asia-Pacific region, with only 1 in 4 patients using a preventer in the past month.' },
      ],
    },
    {
      heading: 'Presentation and Diagnosis',
      blocks: [
        { type: 'list', items: [
          { text: 'Symptoms: wheezing, shortness of breath, chest tightness, cough; nocturnal symptoms' },
          { text: 'Features supportive of asthma diagnosis', children: [
            { text: 'Frequent episodes of wheeze (more than once a month)' },
            { text: 'Activity induced cough or wheeze' },
            { text: 'Nocturnal cough in periods without viral infections, and not attributable to post-nasal drip and GERD' },
          ]},
          { text: 'Supportive evidence: Atopic features, family history of asthma/atopy' },
          { text: 'Bronchodilator Reversibility: ≥ 12% and ≥ 200ml increase in FEV1 (or FVC) after bronchodilator inhalation. An FEV1/FVC less than LLN or < 0.75 suggests expiratory airflow limitation and should be considered supportive of an asthma diagnosis. However, a normal spirometry does not exclude asthma.' },
          { text: 'Bronchial provocation: Methacholine or exercise challenge test, Histamine' },
          { text: 'Home PEF Variability: > 20% diurnal variation. PEF is the least reliable as it is highly effort dependent.' },
        ]},
        { type: 'text', content: 'Do CXR if other diagnosis suspected or consider other diagnostic tests in the presence of: (1) Loss of weight, (2) Frequent vomiting/choking, (3) Focal lung signs, haemoptysis, (4) Vocal cord dysfunction.' },
        { type: 'list', items: [
          { text: 'Alternative diagnoses (adult): Ca lung, bronchiectasis, COPD/emphysema, pulmonary tuberculosis, suppurative lung disease, pulmonary oedema, upper airway obstruction/inhaled foreign body, vocal cord dysfunction' },
        ]},
      ],
    },
    {
      heading: 'Other Modes of Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Cough variant asthma without wheezing' },
          { text: 'Adult onset asthma: consider referral if patients do not respond well to treatment to exclude eosinophilic granulomatosis with polyangiitis (EGPA), chronic rhinosinusitis and nasal polyps, allergic bronchopulmonary aspergillosis (ABPA). Obesity may also be associated with higher risk of developing adult-onset asthma.' },
          { text: '\'First acute wheeze\' — Exclude infections, foreign body aspiration, endobronchial lesions (unilateral wheezing)' },
          { text: 'In cigarette smokers, consider COPD with asthma' },
          { text: 'Exercise-induced bronchoconstriction' },
          { text: 'Asthma in pregnancy (1/3 of patients have deterioration of asthma during pregnancy due to hormonal changes)' },
        ]},
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'Chest X-ray: To exclude foreign body or chronic chest infection (e.g. pulmonary TB for chronic cough) or to exclude complications in severe acute episodes.' },
          { text: 'Pulmonary Function Tests (PEFR/Spirometry): Diurnal variation of PEFR ≥ 20% or positive bronchodilator response (post bronchodilator increase in FEV1 by ≥ 12% and ≥ 200 ml). Do NOT delay initiation of ICS if clinical suspicion is high.' },
          { text: 'Allergy Tests: Atopic status can be identified by skin prick testing or measuring specific immunoglobulin E (sIgE). Other allergy tests (antigen specific IgG, IgG4, intradermal skin tests) are not useful. Food allergy testing is not useful for evaluation of asthma per se.' },
          { text: 'Airway Challenge Tests (Methacholine/Histamine/Exercise): Methacholine challenge is a sensitive test to exclude asthma. Exercise challenge is reserved for evaluation of exercise-induced asthma.' },
          { text: 'FeNO: Has not been established as useful for ruling in or ruling out asthma.' },
          { text: 'Other tests: CT thorax, induced sputum for AFB smear and culture, nasoendoscopy/CT sinuses, OGD/pH manometry to exclude GERD, bronchoscopy, immunological investigations (HIV, serum immunoglobulin titres).' },
        ]},
      ],
    },
    {
      heading: 'Asthma Control Goals and Management Components',
      blocks: [
        { type: 'text', content: 'Asthma Control Goals:' },
        { type: 'list', items: [
          { text: 'No limitation of daily activities, including exercise' },
          { text: 'No (twice or less/week) daytime symptoms' },
          { text: 'No nocturnal symptoms or awakening because of asthma' },
          { text: 'No (twice or less/week) need for reliever treatment' },
          { text: 'No exacerbations' },
          { text: 'Normal or near-normal lung function results' },
        ]},
        { type: 'text', content: 'Components of Asthma Management: (1) Good doctor-patient relationship; (2) Identification and reduction of exposure to risk factors; (3) Assessment, treatment and monitoring; (4) Management of asthma exacerbations; (5) Patient education including Written Asthma Action Plan.' },
        { type: 'text', content: 'Follow-Up Interval: Asthma control review can vary from once in 2 weeks (poor control, medication adjustment) to once in 6 months (very well controlled). Annual review of asthma action plan. Annual smoking assessment.' },
      ],
    },
    {
      heading: 'Monitoring in Primary Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Asthma control using GINA assessment, Asthma Control Test (ACT)' },
          { text: 'High risk for severe attacks: ≥ 3 attacks or prednisolone bursts in last 12 months; ≥ 3 canisters of SABA used in last 12 months' },
          { text: 'High risk for life-threatening attack: previous ICU admission/intubation for status asthmaticus; ≥ 1 canister of SABA every month' },
          { text: 'Other risk factors: chronic airflow limitation (baseline FEV1 < 50%), persistent poor ICS adherence and smoking, psychosocial factors' },
          { text: 'Adherence to asthma medication' },
          { text: 'Inhaler technique' },
          { text: 'Aerochamber/spacer care (clean every month, change every 6–12 months)' },
          { text: 'Check and address causes of poor asthma control: refer asthma nurse to cross-check adherence and technique (50% of patients are not adherent); check for triggers (aeroallergens, irritants, haze, cigarette smoke); check for drugs that can aggravate asthma (aspirin, NSAIDS, non-cardioselective β-blockers); confirm diagnosis with CXR and spirometry' },
          { text: 'Understand use of self-management plan/written personalised asthma action plan' },
        ]},
      ],
    },
    {
      heading: 'GINA Assessment of Asthma Control',
      blocks: [
        { type: 'text', content: 'Asthma control is assessed in two domains: symptom control and future risk of adverse outcomes. Poor symptom control reduces productivity and quality of life and increases the risk of exacerbations. Asthma severity is assessed after at least 2–3 months of adequate treatment.' },
        { type: 'text', content: 'Asthma Control Test (ACT©): A 5-item, patient-administered questionnaire for adults and children aged 12 and above. Based on a five-point scoring system: Score 25 = total control; Score 20–24 = well controlled; Score < 20 = poor control.' },
        { type: 'list', items: [
          { text: 'Q1: In the past 4 weeks, how much of the time did your asthma keep you from getting as much done at work, school or at home?' },
          { text: 'Q2: During the past 4 weeks, how often have you had shortness of breath?' },
          { text: 'Q3: During the past 4 weeks, how often did your asthma symptoms (wheezing, coughing, shortness of breath, chest tightness or pain) wake you up at night or earlier than usual in the morning?' },
          { text: 'Q4: During the past 4 weeks, how often have you used your rescue inhaler or nebulizer medication (such as albuterol or salbutamol)?' },
          { text: 'Q5: How would you rate your asthma control during the past 4 weeks?' },
        ]},
      ],
    },
    {
      heading: 'Lifestyle Modification and Non-Pharmacological Treatment',
      blocks: [
        { type: 'list', items: [
          { text: 'Self-monitoring and regular review' },
          { text: 'Written action plan' },
          { text: 'Modifiable risk factors and comorbidities (e.g. smoking, obesity, anxiety)' },
          { text: 'Smoking cessation' },
          { text: 'Physical activity for weight loss' },
          { text: 'Avoidance of sensitizers where appropriate' },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment — Stepwise Approach',
      blocks: [
        { type: 'text', content: 'The patient\'s current treatment and level of control determine the selection of pharmacologic treatment. If asthma is not controlled on the current treatment, treatment should be stepped up until control is achieved. Control is usually maintained for at least 3 months before an attempt is made to step down the treatment.' },
        { type: 'list', items: [
          { text: 'Step 1: For safety, GINA and local guidelines no longer recommend SABA-only treatment. Regular low dose ICS, low dose ICS taken whenever SABA is taken, or as-needed low dose ICS-formoterol. Reserved for patients with infrequent symptoms (less than twice a month) of short duration with no risk factors for exacerbations.' },
          { text: 'Step 2: Regular low dose ICS, or as-needed low dose ICS-formoterol' },
          { text: 'Step 3: Low dose ICS-LABA, or medium dose ICS. As needed low dose ICS-formoterol for patients prescribed maintenance and reliever therapy.' },
          { text: 'Step 4: Medium dose ICS-LABA, or high dose ICS. As needed low dose ICS-formoterol for patients prescribed maintenance and reliever therapy.' },
          { text: 'Step 5: Refer for specialist investigation and consideration of add-on treatment. Management should be supervised directly by specialists.' },
          { text: 'RELIEVER: As-needed ICS-SABA, or as-needed SABA' },
        ]},
        { type: 'text', content: 'NOTE: LABAs should NOT be used without concomitant inhaled corticosteroids in asthma.' },
        { type: 'table', headers: ['Drug', 'Low Daily Dose (mcg)', 'Medium Daily Dose (mcg)', 'High Daily Dose (mcg)'], rows: [
          { cells: ['Beclomethasone Dipropionate (HFA)', '100–200', '> 200–400', '> 400'] },
          { cells: ['Budesonide (DPI)', '200–400', '> 400–800', '> 800'] },
          { cells: ['Fluticasone Propionate (DPI)', '100–250', '> 250–500', '> 500'] },
          { cells: ['Fluticasone Propionate (HFA)', '100–250', '> 250–500', '> 500'] },
          { cells: ['Fluticasone Furoate (DPI)', '100', '100', '200'] },
        ]},
        { type: 'text', content: 'REMEMBER TO: Provide guided self-management education. Treat modifiable risk factors and comorbidities. Advise about non-pharmacological therapies. Consider stepping up if symptoms uncontrolled. Consider referring to specialist if not well controlled on STEP 4. Consider stepping down if symptoms controlled for 3 months and low risk for exacerbations. Ceasing ICS is not advised. For list of medications available in NUP formulary, refer to NUP Intranet Asthma/COPD Medication Chart.' },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Family Physician: Provides all aspects of primary medical care from screening, diagnosis and management of asthma, including health promotion and prevention/treatment of complications.' },
          { text: 'Care Coordinator: Perform general screening (fall risk, social economics, smoking & drinking history); address care gaps under Health Maintenance Topics (vaccinations); perform GINA assessment of asthma control.' },
          { text: 'Care Manager: Evaluate understanding and provide education on asthma, good asthma control and lifestyle measures; assess and identify reasons for suboptimal/poor adherence; provide education on preventer and reliever inhalers, inhaler technique and use of asthma action plan.' },
          { text: 'Advanced Practice Nurse: Manage patients with asthma within scope of practice; initiate and titrate medication according to stepwise approach; initiate and educate patient on Written Asthma Action Plan; offer timely influenza and pneumococcal vaccinations; encourage smoking cessation.' },
          { text: 'Dietitian: Patient education on weight management.' },
          { text: 'Psychologist: Psychological and behavioural interventions to manage psychological stress, improve disease management and quality of life; assessment and intervention for co-occurring psychological problems (depression, anxiety disorders).' },
          { text: 'Physiotherapist: Assess and provide intervention for MSK conditions; prescribe exercise and provide patient education on appropriate exercises for weight loss; patient education on bronchial hygiene and positions to ease shortness of breath.' },
          { text: 'Pharmacist: Assess and teach use of various inhalers and delivery devices; smoking cessation clinic; detect, prevent and address drug-drug/drug-disease interactions; perform medication reconciliation.' },
        ]},
      ],
    },
    {
      heading: 'Asthma Exacerbations — Severity Assessment',
      blocks: [
        { type: 'table', headers: ['Parameter', 'Mild', 'Moderate', 'Severe', 'Respiratory Arrest Imminent'], rows: [
          { cells: ['Breathless', 'While walking; can lie down', 'While talking; prefer sitting', 'While at rest; hunched forward', ''] },
          { cells: ['Talks in', 'Sentences', 'Phrases', 'Words', ''] },
          { cells: ['Alertness', 'May be agitated', 'Usually agitated', 'Usually agitated', 'Drowsy or confused'] },
          { cells: ['Respiratory rate', 'Increased', 'Increased', 'Often > 30/min', ''] },
          { cells: ['Accessory muscles/suprasternal retractions', 'Usually not', 'Usually', 'Usually', ''] },
          { cells: ['Wheeze', 'Moderate, often only end expiratory', 'Loud', 'Usually loud; throughout inhalation and exhalation', 'Absence of wheeze'] },
          { cells: ['Pulse rate', '< 100/min', '100–200/min', '> 120/min', 'Bradycardia'] },
          { cells: ['PEF', '> 80%', 'Approx. 60–80%', '< 60% predicted or personal best', ''] },
          { cells: ['SpO₂ (on air)', '> 95%', '91–95%', '< 90%', ''] },
        ]},
      ],
    },
    {
      heading: 'Management of Acute Exacerbation in Adults',
      blocks: [
        { type: 'list', items: [
          { text: 'Mild/Moderate Exacerbation (Mild/mod tachypnea, no/minimum use of accessory muscles, SpO₂ 91–95%)', children: [
            { text: '1. MDI bronchodilator via Spacer: 10 puffs Salbutamol over 20 mins. Patient to inhale 5x via mouth/lips after every 1 puff.' },
            { text: '2. Oxygen via nasal prongs if necessary (keep SpO₂ > 95%)' },
            { text: '3. Oral prednisolone 30–60 mg stat' },
            { text: '4. Doctor to review after 1 cycle. Repeat another cycle if indicated.' },
            { text: '5. Refer to hospital A&E if no improvement after 2 cycles' },
            { text: '*Convert to nebuliser if patient is fatigued: Neb Salbutamol 1ml : Ipratropium 2ml : Normal Saline 1ml' },
          ]},
          { text: 'Severe Exacerbation (Can\'t complete sentences, tachypneic, Pulse > 110/min, Resp Rate > 25/min, PEF < 50% predicted or best, SpO₂ < 91%)', children: [
            { text: '1. High flow O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: '2. IV access' },
            { text: '3. IV hydrocortisone 200 mg stat' },
            { text: '4. Nebulise: Salbutamol 1ml : Ipratropium 2ml : Normal Saline 1ml' },
            { text: '5. Repeat nebulisation if indicated. Review after 30 minutes.' },
            { text: '6. Refer to A&E if no improvement after 2 rounds of nebulisation.' },
          ]},
          { text: 'Life-Threatening Exacerbation (Cyanosis/tachypnea, exhaustion, silent chest, SpO₂ < 91%, PEF < 33%; confusion/drowsiness; pulsus paradoxus/bradycardia; deterioration despite maximal therapy)', children: [
            { text: 'Arrange transfer to Hospital immediately' },
            { text: '1. High flow O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: '2. IV access' },
            { text: '3. IV hydrocortisone 200 mg stat' },
            { text: '4. Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: '5. Consider s/c adrenaline 1:1000 0.5ml (0.01 ml/kg)' },
          ]},
        ]},
        { type: 'text', content: 'MDI + Spacer Method: (a) Prime the spacer with 10 puffs of Salbutamol. (b) Load spacer with 1 puff each time; patient to inhale 5 times (tidal breaths) after every 1 puff. (c) Oxygen can be administered concurrently via nasal prongs if required — maintain SpO₂ > 95%. (d) Nurse to administer puffs, ensure inhalation via the mouth/lips. (e) Patient can self-administer bronchodilator treatment with supervision by medical staff.' },
      ],
    },
    {
      heading: 'Post-Exacerbation Response Assessment',
      blocks: [
        { type: 'list', items: [
          { text: 'Good Response (Response sustained 60 minutes after last treatment; physical examination normal; PEF > 70% predicted; no stress; O₂ saturation > 90%)', children: [
            { text: 'Discharge' },
            { text: 'Continue treatment with inhaled β₂-agonist' },
            { text: 'Consider course of prednisolone 30 mg om for 5–7 days in most cases' },
            { text: 'Initiate or continue inhaled glucocorticosteroids' },
            { text: 'Reinforce patient education, action plan and close follow-up' },
          ]},
          { text: 'Incomplete Response (History of high-risk patient; mild to moderate symptoms; PEF > 50–70%; O₂ saturation not improving)', children: [
            { text: 'Refer to Hospital A&E' },
            { text: 'O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: 'Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: 'IV hydrocortisone 200 mg stat if not already administered' },
          ]},
          { text: 'Poor Response (History of high-risk patient; symptoms severe, drowsiness, confusion; PEF < 30%; O₂ saturation < 90%)', children: [
            { text: 'ARRANGE URGENT TRANSFER TO HOSPITAL via ambulance immediately' },
            { text: 'High flow O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: 'Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: 'IV hydrocortisone 200 mg if not already administered' },
            { text: 'Consider s/c adrenaline 1:1000 0.5ml (0.01 ml/kg)' },
            { text: 'Possible intubation & mechanical ventilation' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Emergency Drug List',
      blocks: [
        { type: 'list', items: [
          { text: 'Salbutamol Inhaler / neb' },
          { text: 'Prednisolone tab' },
          { text: 'Hydrocortisone IV' },
          { text: 'Ipratropium bromide nebuliser' },
          { text: 'Adrenaline IM' },
        ]},
      ],
    },
    {
      heading: 'Referrals — When to Refer to Respiratory Specialist',
      blocks: [
        { type: 'list', items: [
          { text: 'Presence of Risk Factors for Death from Asthma', children: [
            { text: 'Prior intubation and mechanical ventilation for asthma' },
            { text: 'Hospitalisation or emergency care visit for asthma in the past year' },
            { text: 'Current use of systemic corticosteroids or recent withdrawal from systemic corticosteroids' },
            { text: 'Not currently using inhaled corticosteroids' },
            { text: 'Use of > 1 canister of inhaled short-acting β₂-agonist within 1–2 months' },
            { text: 'History of psychiatric disease or psychosocial problems' },
          ]},
          { text: 'Acute Asthma — Severe or Frequent Exacerbations', children: [
            { text: 'A life-threatening asthma exacerbation' },
            { text: 'Frequent exacerbations: acute exacerbations 2–3 times a year, or more than once every six months, despite compliance with medications and good inhaler technique' },
            { text: 'Need for continuous oral corticosteroid therapy or not well-controlled on Step 4 therapy' },
          ]},
          { text: 'Chronic Asthma — Difficult or Poor Control', children: [
            { text: 'Failing goals of therapy after 3 to 6 months of treatment' },
            { text: 'Uncontrolled Asthma' },
            { text: 'Continuous oral corticosteroid therapy, or require more than two bursts of oral corticosteroids in 1 year, or high-dose inhaled corticosteroids' },
          ]},
          { text: 'Diagnosis', children: [
            { text: 'Atypical signs and symptoms' },
            { text: 'Other conditions complicate asthma or its diagnosis, e.g. heart failure, COPD, unsure of diagnosis' },
            { text: 'Additional diagnostic testing is indicated' },
            { text: 'Suspicion of occupational asthma' },
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
          { cells: ['Spirometry', 'Recommended at or soon after diagnosis, or when clinically indicated', ''] },
          { cells: ['Influenza and Pneumococcal Vaccination', 'As recommended under the National Adult Immunisation Schedule', ''] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 12 NUP CPG — Bronchial Asthma in Children (Aug 2023)
// ---------------------------------------------------------------------------
const bronchialAsthmaChildren: CpgDocument = {
};
