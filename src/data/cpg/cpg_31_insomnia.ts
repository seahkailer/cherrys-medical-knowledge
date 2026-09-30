import { CpgDocument } from '../types';

export const insomnia: CpgDocument = {
  id: 'cpg-insomnia',
  condition: 'Insomnia',
  source: '31 NUP CPG - Insomnia.pdf',
  reviewDate: 'Updated December 2025 by Dr Alicia Boo. Next review: December 2028.',
  advisors: 'Key FP: Dr Alicia Boo. Specialist: Dr Soo Shuenn Chiang. Contributing: Marissa Chin (NUHSP), Dr Benjamin Cheah, Toh Hui Moon (Snr Psychologist), Bindu Runy (Snr MSW).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Insomnia is a common complaint in the primary care setting. Many mental health issues surface as insomnia as patients consider it more acceptable. Sleep is important for growth, learning, development, and mood.' },
        {
          type: 'table',
          headers: ['Age Group', 'Recommended Sleep Duration'],
          rows: [
            { cells: ['Newborns', '14–17 hours/day'] },
            { cells: ['1–11 months', '12–15 hours/day'] },
            { cells: ['1–2 years old', '11–14 hours/day'] },
            { cells: ['3–5 years old', '10–13 hours/day'] },
            { cells: ['6–13 years old', '9–11 hours/day'] },
            { cells: ['13–17 years old', '8–10 hours/day'] },
          ],
        },
        { type: 'text', content: 'Blue light (iPads / phones / tablets) blocks melatonin. Circadian troughs (dips) occur in late afternoon and middle of the night. Sleep deprivation can cause learning problems, poor attention, hyperactivity, difficulty with memory-related tasks, obesity, and more frequent illnesses.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis — DSM-5 Criteria',
      blocks: [
        { type: 'list', items: [
          { text: 'Complaint of dissatisfaction with sleep quality/quantity — difficulty initiating OR maintaining sleep, OR early morning awakenings' },
          { text: 'Causing significant distress or impairment in functioning' },
          { text: 'Occurs at least 3 nights/week despite adequate opportunity to sleep' },
          { text: 'Present for at least 3 months' },
          { text: 'Sleep difficulty occurs despite adequate opportunity for sleep' },
          { text: 'Not better explained by another sleep-wake disorder (e.g. narcolepsy, breathing-related sleep disorder, circadian rhythm disorder, parasomnia)' },
          { text: 'Not attributable to physiological effects of a substance (drug of abuse, medication)' },
          { text: 'Coexisting mental disorders and medical conditions do not adequately explain the predominant complaint of insomnia' },
        ]},
        { type: 'text', content: '40–50% of those with insomnia have comorbid mental illness. Ask about eczema, low mood, anxiety, restless legs (check ferritin, treat if needed), recent environmental changes, pain, drug/substance use, shift work, obstructive sleep apnoea symptoms, nocturnal seizures, stimulant ingestion (coffee/tea/nicotine/chocolates), and noisy environment.' },
      ],
    },
    {
      heading: 'Insomnia Severity Index (ISI) — Interpretation and Referral',
      blocks: [
        {
          type: 'table',
          headers: ['Total Score', 'Interpretation', 'Treatment / Referral Recommendations'],
          rows: [
            { cells: ['0–7', 'No clinically significant insomnia', 'Usual care'] },
            { cells: ['8–14', 'Subthreshold insomnia', 'TCU MSW within 8 weeks for self-help strategies, sleep hygiene, and monitoring of symptom progression'] },
            { cells: ['15–21', 'Clinical insomnia (moderate severity)', 'If no/low suicide risk: TCU Psychology (Short) FV for CBT-I within 4 weeks; TCU Dr HMC (first visit) for medication consideration. If moderate suicide risk: refer Psychiatry SOC (Direct access) with safety planning. If high suicide risk: refer ED.'] },
            { cells: ['22–28', 'Clinical insomnia (severe)', 'If no/low suicide risk: TCU Psychology (Short) FV for CBT-I within 2 weeks. If moderate suicide risk: refer Psychiatry SOC (Direct access) with safety planning. If high suicide risk: refer ED.'] },
          ],
        },
      ],
    },
    {
      heading: 'Special Situations — Delayed Sleep Wake Phase Disorder (DSWPD)',
      blocks: [
        { type: 'text', content: 'DSWPD occurs in 3–16% of youths. Not true insomnia but causes dysfunction due to school/societal demands. Normal sleep latency, maintenance and duration if allowed own schedule. Get sleep diary of 2-week duration.' },
        {
          type: 'table',
          headers: ['Management', 'Examples'],
          rows: [
            { cells: ['Bright light therapy', 'Open blinds/curtains to allow natural sunlight at appropriate timing'] },
            { cells: ['Bedtime fading (when >30 min between going to bed and falling asleep)', 'Temporarily set bedtime later, bring forward by 15 min every 2 nights (may take 7–10 nights). Avoid weekend sleep-ins and naps.'] },
            { cells: ['Chronotherapy (for motivated patients; principle of increasing sleep drive by keeping sleep <9 hours for adolescents)', 'Day 1: sleep 3am–11am; Day 2: 6am–2pm; Day 3: 9am–5pm; Day 4: 12pm–8pm; Day 5: 3pm–11pm; Day 6: 6pm–2am; Day 7: 9pm–5am; Day 8: 10pm–6am. Maintain for 2 months on weekends/holidays to "set" internal clock.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management — Non-Pharmacological (First Line)',
      blocks: [
        {
          type: 'table',
          headers: ['Intervention', 'Details'],
          rows: [
            { cells: ['Cognitive Behavioural Therapy for Insomnia (CBT-I) — First line', 'Better long-term effectiveness than medications. 4–6 sessions including: (1) Cognitive restructuring; constructive worry time (15 min problem-solving at least 2 hours before bed). (2) Stimulus control, sleep restriction, relaxation training. (3) Psychoeducation on sleep biology and misconceptions.'] },
            { cells: ['Sleep Restriction Therapy', 'Step 1: Determine allowed time in bed (average sleep time + 30 mins, no less than 5 hours). Step 2: Set standard wake-up time. Step 3: Determine bedtime by counting back. Step 4: When sleep efficiency reaches 90%, increase time in bed by 15 min per week.'] },
            { cells: ['Sleep Hygiene', 'Avoid stimulants/caffeine/nicotine/alcohol. Exercise at least 2 hours before bedtime. No clock watching, no electronic devices in bed, nap before 3pm if needed but not >1 hour. Cool/dark environment.'] },
            { cells: ['Stimulus Control', 'Go to bed only when sleepy. Go to another room if unable to sleep within 15–20 min. Bedroom for sleep and sex only.'] },
            { cells: ['Relaxation Training', '1. Progressive muscle relaxation. 2. Diaphragmatic breathing. 3. Autogenic training.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management — Pharmacological',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Usual Dose', 'Common ADR', 'Remarks / Contraindications / Precautions'],
          rows: [
            { cells: ['Melatonin — Circadin 2mg prolonged release (S1; 1 box = 21 tablets)', '2mg 1–2 hours before bedtime, up to 13 weeks (can prescribe up to 52 weeks). First Rx: prescribe 12 weeks, supply 1 box first.', 'Not well-established. Vivid dreams, nightmares, dizziness, daytime sleepiness, headache, irritability, stomach cramps.', 'For sleep onset insomnia. Consider in elderly, cognitive dysfunction, glaucoma, BPH. Available as POM for ≥55 years (max 13 weeks). Off-label use <55 years or >13 weeks: patient must have had unsatisfactory trial of OTC melatonin. OTC supplement not routinely recommended as not of medicinal grade.'] },
            { cells: ['Promethazine — Sedating Antihistamine (S1, $0.20/tab)', '12.5–25mg ON', 'Sedation, dizziness', 'Caution in elderly (anticholinergic side effects: dry mouth/eyes, urinary hesitancy, confusion). Tolerance may develop. Hydroxyzine useful for insomnia with anxiety.'] },
            { cells: ['Hydroxyzine (S1, $0.20/tab)', '10–50mg ON', 'Sedation, dizziness', 'See promethazine remarks.'] },
            { cells: ['Chlorpheniramine (S1, $0.08/tab)', '4mg ON', 'Sedation, dizziness', 'See promethazine remarks.'] },
            { cells: ['Diphenhydramine (only URTI combination product in NUP formulary)', '25–50mg ON', 'Sedation, dizziness', 'See promethazine remarks.'] },
            { cells: ['Alprazolam/Xanax (NS, $0.20/tab)', '0.25mg ON', 'Somnolence, drowsiness, dizziness, ataxia', 'Adjunctive/bridge therapy. Limit to <2 weeks, once every 2–3 nights when necessary. Must document indication for repeated BZD prescriptions. Dependence risk. Avoid in opioid/substance use disorder. Increased risk of sedation, respiratory depression, coma, death with opioids. Refer psychiatry if unable to discontinue.'] },
            { cells: ['Lorazepam/Ativan (S1, $0.20/tab)', '0.5–1mg ON', 'Somnolence, drowsiness, dizziness, ataxia', 'See alprazolam remarks.'] },
            { cells: ['Clonazepam (S1, $0.37/tab)', '0.5mg ON', 'Somnolence, drowsiness, dizziness, ataxia', 'See alprazolam remarks.'] },
            { cells: ['Zopiclone (NS, $0.30/tab)', '3.75–15mg ON (3.75mg ON in elderly)', 'Somnolence, drowsiness, dizziness, ataxia, next-morning residual sedation', 'For sleep onset and sleep maintenance insomnia. Rarely may cause complex sleep-related behaviours (sleep-talking, sleepwalking) → injury/death. Avoid in opioid/substance use disorder or history of complex sleep-related behaviour. Increased risk of excessive sedation, cognitive impairment, delirium and falls in elderly.'] },
            { cells: ['Zolpidem ER (not available in NUP)', '6.25–12.5mg ON (6.25mg in elderly)', 'Somnolence, drowsiness, dizziness, ataxia, next-morning residual sedation', 'See zopiclone remarks.'] },
            { cells: ['Mirtazapine (S2, $$)', '7.5–30mg ON (up to 45mg/day for depression)', 'Somnolence, increased appetite, weight gain, dizziness. Caution in metabolic syndrome.', 'For patients with anxiety or depression. May cause cognitive/motor impairment. Suicidal ideation risk in young. Risk of hyponatraemia, serotonin syndrome, QT-prolongation, bleeding, mania activation. Avoid in angle-closure glaucoma. Caution in seizure disorders.'] },
            { cells: ['Fluvoxamine (S2, $$$)', '50–300mg/day in 2 divided doses', 'Somnolence, nausea/vomiting, diarrhoea, dizziness, nervousness, dry mouth. May cause sexual dysfunction.', 'For depression/anxiety.'] },
            { cells: ['Amitriptyline (S1, $)', '10–50mg ON (up to 300mg/day for depression)', 'Somnolence, weight gain, dry mouth, constipation, dizziness, headache. Avoid in elderly.', 'Antidepressant with sedative effect.'] },
            { cells: ['Trazodone (not in NUP formulary)', '25–50mg ON, up to 200mg ON', 'Orthostatic hypotension, syncope, oedema, blurred vision, diarrhoea, nasal congestion, weight loss. May cause priapism.', 'Not available in NUP.'] },
            { cells: ['Quetiapine (S2, $)', '25–100mg ON (higher for psychosis)', 'Sedation, nausea/vomiting, constipation, dry mouth, orthostatic hypotension, headache, weight gain', 'For patients with concomitant psychosis or BPSD. Can augment antidepressant effect. Higher risk of weight gain/diabetes/dyslipidaemia with olanzapine; higher EPS/tardive dyskinesia risk with risperidone. Rarely: neuroleptic malignant syndrome, seizures, agranulocytosis, increased mortality in elderly with dementia-related psychosis.'] },
            { cells: ['Risperidone (S2, $$$$)', '0.5–8mg/day (for psychosis/schizophrenia)', 'See quetiapine', 'See quetiapine remarks.'] },
            { cells: ['Olanzapine (S2, $$$$)', '2.5–30mg/day (for psychosis/schizophrenia)', 'See quetiapine', 'See quetiapine remarks.'] },
          ],
        },
        { type: 'text', content: 'Drug cost legend: $ <$10/month; $$ $10–<$20; $$$ $20–<$30; $$$$ $30–<$60; $$$$$ $60–<$90; $$$$$$ ≥$90/month. Amount payable depends on patient subsidy level and drug subsidy class (SDL S1/S2, Non-Standard NS). Unit prices before GST, accurate as of Dec 2023.' },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Family Physician — TCU NUP Psychologist for CBT-I. Refer Dr Health and Mind Clinic (HMC, for ≥18 years with depression/anxiety/adjustment/insomnia). Manage stable patients discharged from HMC. Refer Psychiatry SOC for high suicide risk or exclusion list (addictions/legal/bipolar/new onset psychosis or OCD).' },
          { text: 'Care Manager in HMC (HMC CM) — Conduct depression, anxiety, insomnia, and suicide risk screening for first-time HMC Dr visit. Offer psychoeducation and basic self-help techniques.' },
          { text: 'Family Physician in HMC (HMC Dr) — Manage new and follow-up cases of depression/anxiety/adjustment disorders/insomnia ≥18 years old. Follow-up psychiatric step-down cases. Escalate to SOC if needed.' },
          { text: 'Psychologist — Psychological assessment and intervention. Conduct screening/assessment for severity, complexity, risk tendencies. Formulate treatment plan. Provide psychological and behavioural interventions.' },
          { text: 'Medical Social Worker — Basic sleep hygiene and self-help; care assessment; supportive counselling; crisis intervention; Advance Care Planning; non-medical financial assistance; information and community referral.' },
          { text: 'Financial Counsellor — Financial assessment and assistance for patients with medical bill difficulties.' },
        ]},
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        { type: 'list', items: [
          { text: 'Refer to Sleep Unit (ENT or Respiratory) if suspected obstructive sleep apnoea or restless legs syndrome.' },
          { text: 'Consider pointing patients to Family Service Centres (FSC) for supportive counselling (social issues). Search "FSC locator" with postal code.' },
          { text: 'TCU Medical Social Worker for brief supportive counselling (complex psychosocial setup) or subthreshold insomnia.' },
          { text: 'TCU Psychologist Counselling (Short)(First Visit) for non-pharmacological interventions — should be first line for primary insomnia.' },
          { text: 'TCU Dr Health and Mind (Long) FV if suspected underlying depression/anxiety requiring longitudinal follow-up or medications needed. May trial antihistamines or SSRIs.' },
          { text: 'Refer NUHS Psychological Medicine if failed trial of ≥2 agents at adequate dose and duration, or require prolonged BZD or Z-drug use.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 32 NUP CPG — Kidney Cysts (Nov 2024)
// ---------------------------------------------------------------------------
const kidneyCysts: CpgDocument = {
};
