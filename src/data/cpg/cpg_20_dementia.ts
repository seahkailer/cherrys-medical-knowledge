import { CpgDocument } from '../types';

export const dementia: CpgDocument = {
  id: 'dementia',
  condition: 'Dementia',
  source: 'NUP CPG',
  reviewDate: 'September 2024',
  advisors: 'Dr Tsoi Tung (Senior Consultant, Psycho-Geriatrician, Department of Psychological Medicine, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Dementia is a neurodegenerative disease characterised by progressive impairment of cognitive function. As the disease increases in severity, patients may experience memory loss, language impairment, disorientation, changes in personality, difficulty with activities of daily living, self-neglect, neuropsychiatric symptoms and out of character behaviour.' },
        { type: 'text', content: 'Causes of dementia: (a) Irreversible: Alzheimer\'s disease, fronto-temporal dementia, dementia with Lewy body, vascular dementia, Parkinson\'s disease dementia, prion-associated disorders. (b) Potentially Reversible: infectious disorders (meningitis, encephalitis), toxic or metabolic encephalopathies (hypothyroidism, vitamin B12 deficiency, alcohol-related syndromes), neoplastic causes, hydrocephalus.' },
        { type: 'text', content: 'Epidemiology: Singapore has one of the fastest ageing populations in Asia-Pacific. Dementia cases are expected to increase from 22,000 in 2005 to almost 53,000 in 2020 and 241,000 in 2050. Vascular risk factors (mid-life hypertension, hypercholesterolaemia, DM, strokes) have all been shown to be associated with an increased risk of incident dementia.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Screening should be targeted at individuals with: (1) Complaints of memory or cognitive impairment (self-reported or reported by caregiver); (2) Suspicion of cognitive impairment by healthcare professionals; (3) History of stroke or known risk factors of stroke; (4) Increased risk of dementia (strong family history); (5) Questionable mental competency needing important decisions; (6) Assessment for fitness to drive (elderly driver).' },
        { type: 'text', content: 'Symptoms include: progressive forgetfulness (especially short-term memory), new problems with communication, misplacing things, confusion with time and place, difficulties performing daily activities (especially iADL), problems with planning or solving problems, impaired judgment, changes in mood and personality, withdrawal from work or social activities, difficulty understanding visual images and spatial relationships.' },
        { type: 'text', content: 'Assessment in Teamlet/General Pool: (1) Exclude delirium if acute presentation; (2) Consider potentially reversible neurological conditions and depression if sub-acute; (3) Abbreviated Mental Test (AMT) — 10-item screening test validated locally. Score ≤7 suggests cognitive impairment in patients with primary school education or below; score ≤8 for patients with secondary education or higher.' },
        { type: 'text', content: 'Dementia Work-up Panel: Full blood count, Vitamin B12, Sodium/potassium/creatinine, Liver function test, Thyroid function test, Corrected Calcium, ECG (to exclude conduction problems which is a contraindication to AChEI therapy).' },
        { type: 'text', content: 'Criteria for Diagnosis (DSM-5): Evidence of significant cognitive decline from previous level in one or more domains (complex attention, executive function, learning and memory, language, perceptual-motor, or social cognition); the cognitive deficits interfere with independence in everyday activities; deficits do not occur exclusively in context of delirium; not better explained by another mental disorder. Mild Neurocognitive Disorder (MCI): as above except cognitive decline is modest and deficits do not interfere with independence.' },
        { type: 'text', content: 'mcMMSE cut-offs by educational level — Abnormal if less than: No Formal Education: 20; Primary: 22; Secondary/Tertiary: 24. Severity: Mild 18–24; Moderate 10–17; Severe <10.' },
        { type: 'text', content: 'CT Scan indications (CCCAD): Age <60 years; rapid unexplained decline in cognition or function; "short" duration of dementia (<2 years); recent significant head trauma; unexplained neurological symptoms; history of cancer; anticoagulants or bleeding disorder; history of urinary incontinence and gait disorder; new localising sign; unusual or atypical cognitive symptoms; gait disturbance.' },
        { type: 'table', headers: ['Severity', 'Functional Status'], rows: [
          { cells: ['Mild Dementia', 'Need assistance in instrumental ADL (managing money, marketing, housework, cooking)'] },
          { cells: ['Moderate Dementia', 'Need assistance in basic ADL (feeding, toileting, bathing, dressing)'] },
          { cells: ['Severe Dementia', 'ADL dependent'] },
        ]},
      ],
    },
    {
      heading: 'Management',
      blocks: [
        { type: 'text', content: 'Initial Management: Assess using mcMMSE and consolidate history from patients and caregivers. Refer to CT Scan if needed. If diagnosed with Dementia, offer second assessment for functional screening using Modified Barthel Index (MBI) and Lawton, Zarit Burden Interview Scale for Caregivers.' },
        { type: 'text', content: 'Follow-up domains: (i) Affect and mood — anxiety and depression common in early stages; (ii) BPSD — Behavioural and Psychological Symptoms in Dementia (wandering, verbal/non-verbal abuse, agitation, screaming, sleep problems) treated through non-pharmacological ABC approach (Antecedent, Behaviour, Consequence) and pharmacological methods as adjunct; (iii) Cognition — repeat mcMMSE to look for deterioration; (iv) Drugs — assess for anti-cholinergic medications which should be avoided (amitriptyline, imipramine, prochlorperazine, oxybutynin, diphenhydramine, chlorpheniramine, benztropine, olanzapine, quetiapine); (v) Social environment — caregiver stress, elder abuse, financial difficulties; (vi) Functional assessment — home/driving safety, falls, functional decline, swallowing, constipation, incontinence, malnutrition.' },
        { type: 'text', content: 'Interval of re-assessment ranges from 3 to 6 months. Consider yearly CM assessment for mcMMSE, Modified Barthel Index, Lawton-Brody Instrumental ADL Scale, and Zarit Burden Interview Scale.' },
      ],
    },
    {
      heading: 'Non-Pharmacological Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Designing and maintaining a daily routine.' },
          { text: 'Encouraging activities to engage the patient such as daily chores, creative or intellectual activities, physical activities.' },
          { text: 'Caregiver education and training should be considered to support caregivers in caring for patients in the community.' },
          { text: 'Appropriate utilisation of community resources such as dementia day care centres, caregiver support groups.' },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Treating identifiable reversible causes: treat depression, replace deficiency states (B12, hypothyroidism), correct metabolic abnormalities, remove anti-cholinergic medications.' },
          { text: 'Reduction of vascular risk factors: hyperlipidaemia, hypertension, DM, smoking cessation, obesity; anti-platelet agents for secondary stroke prevention; anti-coagulation for AF.' },
          { text: 'Slowing rate of disease progression: AChEIs (donepezil, rivastigmine) and NMDA receptor antagonist (memantine) — only after detailed discussion with caregiver and patient on risks, benefits and cost.' },
        ]},
        { type: 'table', headers: ['Drug', 'Initial Dose / Titration', 'Maximum Dose', 'Common ADR', 'Remarks / Contraindications'], rows: [
          { cells: ['Donepezil (S2)', '5 mg/day; titrate 5 mg every 4 weeks', '23 mg/day', 'Diarrhoea, nausea, vomiting, headache, anorexia, abnormal dreams, bradycardia, syncope, dizziness', 'Common 1st line for mild-moderate dementia. For elderly, may start 2.5 mg OM for 4–6 weeks. Contraindicated: bradycardia or cardiac conduction disease. Caution: PUD, COPD/asthma, seizure disorder, urinary tract obstruction.'] },
          { cells: ['Rivastigmine patch (NS) (Exelon) 4.6/9.5 mg/24h', '4.6 mg/24 hours; titrate 9.5 mg every 4 weeks', '13.3 mg/24 hours', 'Diarrhoea, nausea, vomiting, headache, anorexia, agitation, bradycardia, syncope, dizziness; contact rash, pruritus (rotate patch sites)', 'Contraindicated: bradycardia or cardiac conduction disease. Caution: PUD, COPD/asthma, seizure disorder, urinary tract obstruction.'] },
          { cells: ['Memantine (S2)', '5 mg/day; titrate 5 mg every 2 weeks', '20 mg/day', 'Headache, dizziness, agitation, constipation, confusion', 'Renal dose adjustment required. Avoid if Cr >200 μmol/L or eGFR <30 ml/min. Max 5 mg BD for eGFR 30–60 ml/min. Caution: severe hepatic impairment, seizure disorder.'] },
        ]},
        { type: 'table', headers: ['Drug (for BPSD)', 'Initial Dose / Titration', 'Maximum Dose', 'Common ADR', 'Remarks / Contraindications'], rows: [
          { cells: ['Fluvoxamine (S2) (Faverin) 50mg tablets', '25–50 mg; titrate 25–50 mg every 1 week; usual dose 50–100 mg/day', '100 mg/day (combination max Fluvoxamine 50mg + Mirtazapine 15mg)', 'Nausea, vomiting, diarrhoea, dry mouth, nervousness, headache, dizziness; sexual dysfunction, tremors, hyponatremia, QT prolongation', 'Sedating, useful to help sleep. Avoid antidepressants with anticholinergic activity. Contraindicated: MAOI concurrent or within 14 days.'] },
          { cells: ['Escitalopram (NS) (Lexapro) 10mg tablets', '5 mg/day; titrate 5 mg every 4 weeks', '10 mg/day', '(see above)', 'Activating. Contraindicated: MAOI concurrent or within 14 days.'] },
          { cells: ['Mirtazapine (S2) (Remeron) 15mg tablets', '15 mg; titrate 7.5–15 mg every 1–2 weeks; usual 15–30 mg/day', '30 mg/day (combination max Fluvoxamine 50mg + Mirtazapine 15mg)', 'Dry mouth, constipation, sedation (more sedating at lower doses), increased appetite, orthostatic hypotension, headache', 'Sedating, improves appetite. Useful for patients with poor appetite. Contraindicated: MAOI concurrent or within 14 days. Check FBC before starting.'] },
          { cells: ['Zopiclone (NS) 7.5mg tablets', '3.75 mg ON/PRN for sleep', '7.5 mg ON PRN', 'Sedation, nausea, vomiting, dry mouth, dizziness, headache', 'Short course ≤2 weeks. Contraindicated: severe respiratory impairment, myasthenia gravis, severe hepatic insufficiency, history of complex sleep behaviours.'] },
          { cells: ['Quetiapine (S2) (Seroquel) 25/100mg tablets', '12.5–25 mg/day; titrate 6.25–12.5 mg every 1 week', '75 mg BD', 'Sedation, nausea, constipation, dry mouth, orthostatic hypotension, headache, weight gain', 'FDA black box warning for antipsychotics and adverse cardiovascular events. Use beyond 12 weeks not recommended. Preferred atypical antipsychotic if high risk of extrapyramidal symptoms.'] },
        ]},
      ],
    },
    {
      heading: 'Special Situations and Referrals',
      blocks: [
        { type: 'text', content: 'Referral to NUP Memory Clinic — Inclusion criteria: above 65 years old with memory problems; memory loss >6 months. Exclusion criteria: legal issues/LPA/requires neuropsychological testing (refer Psychiatry); age <65 years (refer Neurology for early onset dementia).' },
        { type: 'text', content: 'Discharge Criteria from Memory Clinic: Diagnosis made; BPSD well managed; no medication issues or side effects; caregiver stress addressed; dementia assessment and Zarit score completed in past 1 year; family and patient agreeable. Yearly TCU NUR CM Consult still recommended post-discharge.' },
        { type: 'text', content: 'Referral Back to Memory Clinic: Sudden drastic decline in memory (MMSE dropped >4 points/year; usual expected decline 1–2 points/year); BPSD surfaces or worsens; caregiver stress and burn-out.' },
        { type: 'text', content: 'Refer to EMD: <3 months duration with sudden onset neurological deficits; suspected delirium; patient causing significant harm to self or others.' },
        { type: 'text', content: 'Special Precautions with Chronic Diseases: DM — do not aim for excessively tight glycaemic control; HTN/Cardiac Arrhythmia — CCB or beta blockers can worsen bradycardia in patients on AChEI; COPD/Asthma — AChEI can cause bronchoconstriction; Parkinson\'s — avoid typical antipsychotics; Renal Impairment — avoid Memantine if Cr >200 μmol/L or eGFR <30 ml/min.' },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Assessment of Memory', 'Annually', 'For patients on cognitive enhancers, objective documentation with bedside cognitive screening instrument (e.g. MMSE) must be performed.'] },
          { cells: ['Assessment of Mood and Behaviour', 'Annually', 'Enquire about mood and behaviour and initiate appropriate non-pharmacological and/or pharmacological treatment.'] },
          { cells: ['Assessment of Social Difficulties and Caregiver Stress', 'Annually', 'Assessment and referral to care coordinator, MSW or appropriate community services may be required.'] },
          { cells: ['Functional Needs Assessment', 'Annually', 'To assess home safety, driving safety, falls, functional decline and swallowing difficulties.'] },
          { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under NAIS.'] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 21. Depression
// ---------------------------------------------------------------------------
const depression: CpgDocument = {
};
