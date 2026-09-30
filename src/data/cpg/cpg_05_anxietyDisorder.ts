import { CpgDocument } from '../types';

export const anxietyDisorder: CpgDocument = {
  id: 'cpg-anxiety-disorder',
  condition: 'Anxiety Disorder',
  source: '05 NUP CPG - Anxiety Disorder.pdf',
  reviewDate: 'Reviewed February 2025 (Dr Jonathan Tung / Dr Benjamin Cheah). Updated June 2025 (Dr Tan Jee Ooi). Next review: June 2028.',
  advisors: 'Dr Soo Shuenn Chiang (Senior Consultant, Dept of Psychological Medicine, NUH). Key FPs: Dr Jonathan Tung / Dr Benjamin Cheah / Dr Tan Jee Ooi',
  sections: [
    {
      heading: 'Definition of Anxiety',
      blocks: [
        { type: 'text', content: 'Anxiety is a tense emotional state associated with a feeling of impending danger, often accompanied by somatic symptoms. It is used to describe the mental and physical response to a feared situation — Flight or Fight. Anxiety is normal and serves as a built-in warning device. Moderate levels of anxiety can enhance performance. Even high levels of anxiety are normal if consistent with the demands of the situation.' },
      ],
    },
    {
      heading: 'Symptoms of Anxiety',
      blocks: [
        { type: 'list', items: [
          { text: 'Psychological:', children: [
            { text: 'Irritability' },
            { text: 'Poor concentration and memory' },
            { text: 'Restlessness' },
            { text: 'Worrying thoughts' },
            { text: 'Sexual Dysfunction' },
            { text: 'Insomnia / Nightmares' },
          ]},
          { text: 'Physical:', children: [
            { text: 'Bowel disturbance' },
            { text: 'Tremor' },
            { text: 'Indigestion' },
            { text: 'Dizziness' },
            { text: 'Chest discomfort' },
            { text: 'Headache' },
            { text: 'Difficulty inhaling' },
            { text: 'Muscle ache' },
            { text: 'Palpitations' },
          ]},
        ]},
      ],
    },
    {
      heading: '5 Basic Questions for Patient Assessment',
      blocks: [
        { type: 'text', content: 'These are the questions that a doctor should ask himself or herself when a patient presents with anxiety symptoms.' },
        { type: 'list', items: [
          { text: 'Is what my patient experiencing Pathological?' },
          { text: 'What is the Pattern of the symptoms described?' },
          { text: 'What are the present stressors and Problems faced by him/her?' },
          { text: 'What can I do for him / her Practically in a busy practice?' },
          { text: 'Is Psychiatric referral needed?' },
        ]},
      ],
    },
    {
      heading: 'Pathological Anxiety',
      blocks: [
        { type: 'text', content: 'Anxiety is pathological when:' },
        { type: 'list', items: [
          { text: 'It is greatly disproportionate to the risks and severity of the stimulus / stressors' },
          { text: 'It continues even when the danger is no longer present' },
          { text: 'Interferes with social, vocational, or physical aspects of daily life' },
          { text: 'Leads to avoidance' },
        ]},
      ],
    },
    {
      heading: 'Screening for Generalised Anxiety Disorder (GAD-2 and GAD-7)',
      blocks: [
        { type: 'text', content: 'Screening for generalised anxiety disorder (GAD) can be done using the Generalised Anxiety 2 item (GAD-2) questionnaire. A score of ≥ 3 on GAD-2 proceeds to the full GAD-7.' },
        { type: 'table', headers: ['Question', 'Not at all', 'Several days', 'More than half the days', 'Nearly everyday'], rows: [
          { Question: 'Feeling nervous, anxious or on edge', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Not being able to stop or control worrying', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Worrying too much about different things (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Trouble relaxing (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Being so restless that it\'s hard to sit still (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Becoming easily annoyed or irritable (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Feeling afraid as if something awful might happen (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
        ]},
        { type: 'table', headers: ['Score', 'Interpretation'], rows: [
          { Score: '0 – 4 points', Interpretation: 'No anxiety' },
          { Score: '5 – 9 points', Interpretation: 'Mild anxiety' },
          { Score: '10 – 14 points', Interpretation: 'Moderate anxiety' },
          { Score: '15 – 21 points', Interpretation: 'Severe anxiety' },
        ]},
      ],
    },
    {
      heading: 'Diagnosing the Type of Anxiety Disorder',
      blocks: [
        { type: 'table', headers: ['Type', 'DSM Diagnostic Criteria'], rows: [
          { Type: 'Generalised anxiety disorder', 'DSM Diagnostic Criteria': 'Excessive concern about various situations, happening on more days than not for a minimum of 6 months. The individual struggles against dwelling on the troubling situations. A minimum of 3 of the following symptoms (at least one present for majority of last 6 months): (1) Restlessness / agitation / keyed up / on the edge; (2) Fatigue; (3) Trouble concentrating; (4) Irritability; (5) Muscular tension; (6) Sleep disruption (difficulty falling or staying asleep, feeling restless, unsatisfying sleep). The anxiety, worry, or physical symptoms result in significant distress or impairment in daily functioning.' },
          { Type: 'Panic disorder', 'DSM Diagnostic Criteria': 'Repeated panic attacks, with anxiety rapidly escalating within minutes, including at least 4 of: Palpitations / rapid heartbeat; Sweating; Tremors / shaking; Breathlessness; Choking sensation; Chest pain / discomfort; Nausea or GI distress; Vertigo / giddiness; Sensations of heat or cold; Paraesthesia; Derealisation; Fear of dying; Fear of loss of self-control. At least one attack followed by ≥1 month of chronic worry about further attacks or maladaptive behavioural changes.' },
          { Type: 'Adjustment disorder', 'DSM Diagnostic Criteria': 'Emotional or behavioural symptoms in response to specific stressful events, within 3 months. Symptoms include severe distress out of proportion to the stressor OR significant decline in functioning. Does not qualify as another mental disorder. Symptoms resolve within 6 months once stressor is removed.' },
          { Type: 'Acute stress disorder', 'DSM Diagnostic Criteria': 'Similar to PTSD symptoms but at least 9 symptoms from any category appearing right after trauma and persisting 3 days to 1 month.' },
          { Type: 'Social anxiety disorder / social phobia', 'DSM Diagnostic Criteria': 'Excessive anxiety about being judged by others in social situations (meetings, conversations with unfamiliar people, public speaking). Fear of being perceived negatively leads to avoidance or enduring with intense anxiety.' },
          { Type: 'Agoraphobia', 'DSM Diagnostic Criteria': 'Intense anxiety about ≥2 of: using public transportation; being in open spaces; being in enclosed spaces; being in a crowd; being alone outside home. These situations typically cause significant distress, necessitate a companion, or are endured with intense fear.' },
          { Type: 'Post-traumatic stress disorder', 'DSM Diagnostic Criteria': 'Exposure to actual or potential death, severe injury, or sexual violence. Must include: ≥1 intrusive symptom; ≥1 avoidance symptom; ≥2 negative mood/cognition changes; ≥2 arousal symptoms. Duration ≥1 month. Onset may be delayed ≥6 months post-event.' },
          { Type: 'Specific phobia', 'DSM Diagnostic Criteria': 'Exaggerated fear response to a particular object or situation. Fear triggered immediately by presence of stimulus; person avoids it or endures with intense anxiety.' },
        ]},
        { type: 'text', content: '* Anxiety disorders typically last at least 6 months, except PTSD and acute stress reactions. The disturbances are not attributed to physiological effects of a substance / drug / medication and not better explained by another mental disorder.\n* Please refer to NUP Obsessive Compulsive Disorder CPG for more information about OCD and its management.' },
      ],
    },
    {
      heading: 'Differential Diagnosis / Medical Conditions That May Aggravate Anxiety Symptoms',
      blocks: [
        { type: 'table', headers: ['Disease System', 'Examples'], rows: [
          { 'Disease System': 'Endocrine', 'Examples': 'Hyperthyroidism, hypoglycaemia, phaeochromocytoma, adrenal insufficiency, hyperadrenocorticism' },
          { 'Disease System': 'Cardiovascular', 'Examples': 'Congestive heart failure, pulmonary embolism, arrhythmia, mitral valve prolapse' },
          { 'Disease System': 'Respiratory', 'Examples': 'Asthma, chronic obstructive lung disease, pneumonia' },
          { 'Disease System': 'Metabolic', 'Examples': 'Diabetes mellitus' },
          { 'Disease System': 'Neurologic', 'Examples': 'Vestibular dysfunction, migraine, neoplasm, temporal lobe epilepsy' },
          { 'Disease System': 'Gastrointestinal', 'Examples': 'Irritable bowel syndrome' },
          { 'Disease System': 'Haematologic', 'Examples': 'Anaemia, Vitamin B12 deficiency' },
          { 'Disease System': 'Drug Misuse', 'Examples': 'Alcohol withdrawal, benzodiazepine withdrawal, caffeine overuse' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — General Approach',
      blocks: [
        { type: 'text', content: 'General Approach is to consider patient needs, preferences, and readiness by discussing and agreeing on:' },
        { type: 'list', items: [
          { text: 'Goals of treatment' },
          { text: 'Preference between treatment modalities' },
          { text: 'Willingness and ability to engage in psychological treatment' },
          { text: 'Ability to adhere to regular medication' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Non-Pharmacological Therapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Educate the patient about the nature, aetiology of his / her anxiety symptoms and description of the symptoms of anxiety' },
          { text: 'Stress reduction strategies:', children: [
            { text: 'Deal with negative thoughts' },
            { text: 'Diaphragmatic breathing' },
            { text: 'Progressive muscle relaxation' },
          ]},
          { text: 'Encourage exercise' },
          { text: 'Suggest mind-body practices, grounding work' },
          { text: 'Reduce alcohol and caffeine intake. Stop smoking' },
          { text: 'Involve family members. Utilise community / social resources' },
          { text: 'Supportive counselling and psychotherapy (i.e. cognitive behavioural therapy). Reassure patient that it is frightening and not life threatening' },
          { text: 'Monitoring over time and deal with early signs of relapse' },
          { text: 'Promote good sleep hygiene' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Medication by Anxiety Type',
      blocks: [
        { type: 'table', headers: ['Type of Anxiety Disorder', 'Examples of Non-Pharmacological Therapies', 'Medication'], rows: [
          { 'Type of Anxiety Disorder': 'Generalized Anxiety Disorder*', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy, stress management', 'Medication': 'SSRIs or SNRIs (for GAD and panic disorders only). Benzodiazepines (for breakthrough anxiety episodes). Sedating anti-histamines (for breakthrough anxiety episodes / management of agitation / insomnia from SSRIs in the initial phase). Beta-blockers (for palpitations/tremors). 2nd generation anti-psychotics can be used as augmentation (e.g. quetiapine 25mg ON x 1 week → 50mg ON x 3wks, review in 4 weeks).' },
          { 'Type of Anxiety Disorder': 'Panic Disorder#', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (graded exposure)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Social Phobia', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (exposure to feared social situation)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Agoraphobia', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (graded exposure to feared situation)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Post-Traumatic Stress Disorder', 'Examples of Non-Pharmacological Therapies': 'Multiple modalities e.g. CBT, CPT, EMDR, stress inoculation training, treatment of co-morbid conditions (depression)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Specific Phobia', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (exposure to feared situation or object)', 'Medication': 'Drugs alone are not helpful. Require cognitive behavioural therapy' },
        ]},
        { type: 'text', content: '*For GAD, first line SSRIs are Escitalopram, Paroxetine (not available in NUP formulary) or Sertraline. 2nd line are SNRIs (Venlafaxine).\n#For panic disorder, all SSRIs are suitable as first line. 2nd line are SNRIs (Venlafaxine).' },
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Benzodiazepines',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Alprazolam (0.25mg tablet)', 'Common Dose': 'Short term management of anxiety. Initiate at 0.25mg to 0.5mg BD. Usual doses: 2–6mg/day in 3–4 divided doses. No renal adjustment required (use with caution). Hepatic adjustment required.', 'Maximum Dose': '10mg/day in divided doses', 'Common ADRs': 'Sedation, muscle weakness, ataxia, headache, vertigo, fatigue, confusion, psychomotor impairment, paradoxical reactions (agitation/insomnia), constipation, increased/decreased appetite, micturition difficulty, anterograde amnesia', 'Contraindications / Precautions': 'Contraindicated in pregnancy; concomitant use with ketoconazole/itraconazole; narrow-angle glaucoma; severe respiratory insufficiency; myasthenia gravis; sleep apnoea; severe hepatic impairment. Avoid in patients with history of alcohol/drug dependence. Withdrawal rebound anxiety commonly occurs with shorter acting drugs. Common interacting medications: CNS depressants (e.g. opioids).' },
          { Drug: 'Clonazepam (0.5mg tablet)', 'Common Dose': 'Anxiety. Initiate at 0.25mg BD. Usual doses: 1–3mg/day in 1–4 divided doses. No renal adjustment required (use with caution). Hepatic adjustment required.', 'Maximum Dose': '4mg/day in divided doses', 'Common ADRs': 'As above', 'Contraindications / Precautions': 'As above' },
          { Drug: 'Lorazepam (0.5mg / 1mg tablet)', 'Common Dose': 'Anxiety / Insomnia. Initiate at 0.5mg to 1mg BD. No renal adjustment required (use with caution). Hepatic adjustment required – prolonged elimination half-life.', 'Maximum Dose': '10mg/day in divided doses', 'Common ADRs': 'As above', 'Contraindications / Precautions': 'As above' },
          { Drug: 'Chlordiazepoxide 5mg + clidinium 2.5mg capsules (Librax)', 'Common Dose': 'Only for emotional distress caused by irritable bowel syndrome. Adult initiation: 2 capsules 4 times a day. Geriatric dose: 1 capsule 2 times a day.', 'Maximum Dose': '1 capsule 2 times a day (geriatric)', 'Common ADRs': 'As above', 'Contraindications / Precautions': 'Librax is not approved for patients below 18 years old' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Antipsychotics',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common dose', 'Maximum dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Quetiapine (* Recommend 2nd generation anti-psychotics)', 'Common dose': 'Initiate at 25mg ON. Ensure baseline ECG has been done with QTc <500ms before adding on quetiapine. Titrated up to 150mg ON as tolerated.', 'Maximum dose': '150mg ON', 'Common ADRs': 'Sedation, anticholinergic effect, postural hypotension, angioedema, dyslipidaemia and worsening metabolic syndrome, EPSEs, hypothyroidism, neuroleptic malignant syndrome, prolonged QTc, sexual dysfunction, GI motility issues, hepatic impairment, seizures (may reduce seizure threshold), urinary retention', 'Contraindications / Precautions': 'Use with caution in patients with decreased GI motility, hepatic impairment, seizure history' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Gabapentinoids',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Pregabalin (* Gabapentin not really used for GAD)', 'Common Dose': '150mg per day in 2 divided doses, increase gradually based on response', 'Maximum Dose': '600mg per day (in 2 or 3 divided doses)', 'Common ADRs': 'Giddiness, sedation, fatigue, suicidal ideation (debatable)', 'Contraindications / Precautions': 'Existing myasthenia gravis (may exacerbate condition). Renal impairment (renal adjustment required). Substance abuse issues (potentially addictive).' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Beta Blockers',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Propranolol (off-label use)', 'Common Dose': 'For symptomatic relief of generalised anxiety (palpitations, hand tremors). 10–40mg BD to TDS PRN. No renal adjustment required (use with caution). No hepatic adjustment required (use with caution).', 'Maximum Dose': '40mg TDS', 'Common ADRs': 'Bradycardia, hypotension, fatigue, insomnia, vivid dreams', 'Contraindications / Precautions': 'Asthma, bradycardia, hypotension, 1st/2nd/3rd degree heart block. May mask signs and symptoms of hypoglycaemia & hyperthyroidism. Avoid abrupt withdrawal (acute tachycardia/hypertension).' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Antihistamines',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADR', 'Contraindications / Precautions'], rows: [
          { Drug: 'Hydroxyzine (10mg / 25mg Tablets)', 'Common Dose': 'Anxiety (short term use). May initiate at up to 10–25mg/day in divided doses. Dosage adjusted to individual response. Hydroxyzine is MOH approved for use in managing anxiety. Renal adjustment required. Hepatic adjustment required (may require dosing interval adjustment).', 'Maximum Dose': 'Max 400mg daily. Max single dose: 100mg for adults, 50mg for elderly.', 'Common ADR': 'Dizziness, drowsiness, headache, dry mouth, blurred vision, constipation, urinary retention, hypotension, thickening of bronchial secretions', 'Contraindications / Precautions': 'Contraindicated during early pregnancy. Caution in urinary retention. Anticholinergic effects not well tolerated in the elderly. Acute generalized exanthematous pustulosis (rare). QT prolongation.' },
          { Drug: 'Diphenhydramine (25mg tab) (off label use)', 'Common Dose': 'Short term management of insomnia (not anxiety). Adult 25–50mg given 30 min before bedtime. Diphenhydramine is FDA approved for insomnia but not anxiety use.', 'Maximum Dose': '—', 'Common ADR': '—', 'Contraindications / Precautions': '—' },
        ]},
      ],
    },
    {
      heading: 'Treatment Pointers',
      blocks: [
        { type: 'list', items: [
          { text: 'Most Cases of Anxiety Present First to Primary Care Physicians:', children: [
            { text: 'Most cases can be managed in primary care' },
            { text: 'Take a good history (Symptoms, severity, duration; Psychosocial stressors; Suicide Risk; Exclude organic illness)' },
          ]},
          { text: 'Some Treatment Pointers:', children: [
            { text: 'Start with an SSRI (choice based on side effect profile, drug-drug interactions and/or patient preference / treatment history)' },
            { text: 'Use past responses to medication or psychological treatment to help guide choice of treatment' },
            { text: 'Early ADRs of SSRIs include agitation & insomnia (faster onset than therapeutic effect on anxiety — Tx with BZDs / hydroxyzine)' },
            { text: 'Consider adding B blocker if severe tremors or palpitations are present' },
            { text: 'If no response, consider a different SSRI before other medications (Adequate trial of SSRI is considered to be 6 weeks at therapeutic dosing)' },
            { text: 'Consider doing a baseline ECG for QTc especially when starting escitalopram, venlafaxine, bupropion, amitriptyline, nortriptyline, quetiapine, olanzapine, chlorpromazine, haloperidol' },
            { text: 'Do check sodium after about 3–4 weeks in patients aged > 65 years or those with multiple comorbidities started on SSRIs' },
            { text: 'Listen actively' },
            { text: 'Encourage referral to NUP MSW for support/CBT for mild cases, or NUP Psychologist for moderate or severe cases' },
          ]},
          { text: 'Dosages and Treatment Phases:', children: [
            { text: 'Dosages typically similar for adult primary care and psychiatric patients' },
            { text: 'Initial drug titration: 4 to 8 weeks' },
            { text: 'Monitor closely for emergent suicidal thoughts and behaviour when initiating any antidepressant medication especially those under 25 years of age or with pre-existing suicide risk' },
            { text: 'Revisit safety plan and collaborate with other providers or family / caregivers to ensure support is in place' },
          ]},
          { text: 'Maintenance and Remission Phase:', children: [
            { text: 'Continuation of treatment for at least 6 to 12 months' },
            { text: 'Aim to achieve improvement in symptoms from baseline' },
            { text: 'Symptoms are minimal and no longer meet diagnostic criteria' },
            { text: 'Restoration of premorbid functioning and improved quality of life' },
          ]},
          { text: 'Relapse Prevention:', children: [
            { text: 'Consider switching to psychological treatment or adding in psychological treatment to medication to reduce risk of relapse once remission is reached' },
            { text: 'Discuss medication discontinuation based on history of relapse, adverse side effect, comorbid mental health conditions, ongoing or anticipated psychosocial stressors, degree of social support and patient\'s preference' },
            { text: 'Gradually reduce the dose of antidepressant medications to minimise discontinuation symptoms and risk of relapse' },
            { text: 'Risk of relapse is highest in the first several months of stopping treatment, with one-third to half occurring within one year' },
            { text: 'After stopping medication, consider review 1 month after, and 3–6 months after. This could be via video consult' },
            { text: 'Patients should always be educated on how to seek help early should they experience a relapse, and to be aware of their relapse symptoms' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Considerations When Using Benzodiazepines (BZD) in General Practice',
      blocks: [
        { type: 'list', items: [
          { text: 'The dosage of BZD should be the lowest effective dose necessary to achieve symptomatic relief' },
          { text: 'Repeat prescriptions for BZD should not be provided without a clinical review' },
          { text: 'As an adjunct to antidepressant treatment in anxiety disorders, the use of benzodiazepines should be limited to maximally 2 weeks at the lowest effective dose during each consult. The dose should be gradually tapered off. Benzodiazepine use should be closely monitored for adverse effects, abuse, tolerance, dependence and withdrawal symptoms' },
          { text: 'BZD prescribed for anxiety may be abused by some patients with co-morbid alcohol / substance abuse or dependence and are best avoided where possible in such patients' },
          { text: 'Do not extend use of benzodiazepines beyond 4 weeks per year at primary care, even when prescribed at the therapeutic dosages' },
        ]},
        { type: 'text', content: 'Specialist referral should be initiated for: (1) Patients who require or have been prescribed BZD beyond a cumulative period of 4 weeks per year. (2) Patients who are already on high dose and or long-term BZD from specialist or hospitals should be referred back to their specialist for review. (3) Patients who are unable to reduce the intake of BZD despite initial commitment to a tapering dose.' },
        { type: 'text', content: 'Note: Benzodiazepines have no role in the long-term treatment of anxiety disorders. Patients who refuse to be referred to a specialist should be counselled appropriately and documented in the case sheet. If the patient turns aggressive, they should be reported to the police.' },
      ],
    },
    {
      heading: 'Role of Health Care Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Family Physician (Dr):', children: [
            { text: 'Refer patients with psychological problems who fulfilled inclusion criteria to Health and Mind Clinic (HMC) in NUP (those aged ≥ 18 years with depression, anxiety, adjustment, insomnia)' },
            { text: 'Manage stable patients discharged from HMC' },
            { text: 'Refer to Psychiatry SOC based on geographical boundaries for those with high risk of suicide or risk of harm to self or others, or patients who are part of the exclusion list of HMC e.g., addictions / legal issues / bipolar disorder / new onset psychosis / new onset OCD' },
            { text: 'Start patients with moderate-severe anxiety disorders on appropriate SSRIs or other appropriate psychotropics (consult senior doctors if unsure)' },
          ]},
          { text: 'Care Manager in Health and Mind Clinic (HMC CM):', children: [
            { text: 'Gather biodata history and conduct depression, anxiety, insomnia, and suicide risk screening for patients visiting HMC Dr for the first time' },
            { text: 'Offer psychoeducation and basic self-help techniques, along with information and resources related to mental health' },
            { text: 'Conduct virtual consultations to assess the well-being of patients two weeks after initiating treatment with anti-depressants / anti-anxiety medications' },
            { text: 'Conduct virtual consultations to assess well-being of patients after discontinuation of psychotropics to detect early relapse' },
            { text: 'Details to refer to NUP-WI-CS-COP-030 Management of Patients in Health and Mind Clinic' },
          ]},
          { text: 'Family Physician in Health and Mind Clinic (HMC Dr):', children: [
            { text: 'Manage new cases and follow-up cases of depression / anxiety / insomnia who are 18 years old and above' },
            { text: 'Follow-up psychiatric stepdown cases' },
            { text: 'Escalate patients to Psychiatry SOC if needed' },
            { text: 'Details to refer to NUP-WI-CS-COP-030 Management of Patients in Health and Mind Clinic' },
          ]},
          { text: 'Psychologist:', children: [
            { text: 'Conduct psychological screening and assessment during initial assessment to assess the severity of mental health symptoms, complexity of issues and presence / absence of risk tendencies and behaviours' },
            { text: 'Formulate treatment plan for follow-up visits' },
            { text: 'Can work with many types of mental health cases inclusive grief; full list as per Allied Health - Psych Service' },
          ]},
          { text: 'Medical Social Worker:', children: [
            { text: 'Manage care and counselling inclusive cognitive behavioural therapy if appropriate, for patients with mild anxiety and mild depression' },
            { text: 'Provide sleep hygiene advice for patients with subthreshold insomnia' },
            { text: 'Provide care assessment and arrangement, supportive counselling, crisis intervention, non-medical related financial assistance, and support patients in need of information and referral' },
          ]},
          { text: 'Financial Counsellor:', children: [
            { text: 'Patients with financial difficulties on medical bills could be referred to Financial Counsellor for assistance' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Conditions for Referral to Psychiatry SOC',
      blocks: [
        { type: 'text', content: 'Patients should be referred when:' },
        { type: 'list', items: [
          { text: 'Patients 17 years and below who might need psychotropics' },
          { text: 'If patient has not responded to 3 different antidepressants or very high dose antidepressant monotherapy' },
          { text: 'Patient requires to take anti-psychotics as an adjunct to managing anxiety disorder (unless patient has been seen by or discussed with psychiatrist prior and is suggested to continue on anti-psychotics)' },
          { text: 'Presence of complicated medical history or special circumstances, e.g. Cushing disease, liver disease etc.' },
          { text: 'Presence of comorbid personality disorders, substance dependence' },
          { text: 'New onset psychotic disorder or bipolar disorder' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components for Anxiety',
      blocks: [
        { type: 'table', headers: ['Recommended Care Components', 'Minimum Frequency'], rows: [
          { 'Recommended Care Components': 'Generalised anxiety disorder – 7 (GAD-7) score', 'Minimum Frequency': 'Every clinical review when appropriate, minimally 6 monthly for patients with generalized anxiety disorder' },
          { 'Recommended Care Components': 'Suicide screening', 'Minimum Frequency': 'Where clinically indicated – please refer to NUP-WI-CS-COP-032 Management of Suicidal Patients' },
        ]},
        { type: 'text', content: '* More frequently if clinically indicated' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 06 NUP CPG — Joint Pain in Primary Care (Aug 2024)
// ---------------------------------------------------------------------------
const jointPain: CpgDocument = {
};
