import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 54 NUP CPG — Schizophrenia (May 2024)
// ---------------------------------------------------------------------------
export const schizophrenia: CpgDocument = {
  id: 'cpg-schizophrenia',
  condition: 'Schizophrenia',
  source: '54 NUP CPG - Schizophrenia.pdf',
  reviewDate: 'Updated May 2024 by Dr Tng Han Ying / Dr Alicia Boo. Next review: May 2027.',
  advisors: 'Dr Soo Shuenn Chiang (Senior Consultant, NUH Psychological Medicine) / Dr Wan Yi Min (Consultant, NTFGH Psychiatry)',
  sections: [
    {
      heading: 'Introduction & Diagnostic Criteria (DSM-5)',
      blocks: [
        {
          type: 'text',
          content:
            'Schizophrenia is a severe psychotic disorder characterized by disturbances in cognition, emotional responsiveness, and behaviour. It affects 1 in 100 persons. Males onset: 15–25 years; Females onset: 25–35 years (another peak at 40+). Risk of suicide is 1 in 10.',
        },
        {
          type: 'text',
          content:
            'DSM-5: Two or more of the following for at least one month (one must be 1, 2 or 3): (1) Hallucinations; (2) Delusions; (3) Disorganized speech; (4) Grossly disorganized or catatonic behaviour; (5) Negative symptoms (affective flattening, alogia, avolition). Plus continuous disturbance for 6 months and social/occupational dysfunction.',
        },
      ],
    },
    {
      heading: 'Exclude Organic & Psychiatric Causes',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Organic: endocrine (hyperthyroidism, hypoglycaemia), immunological (SLE), CNS disorders (tumour, dementia, epilepsy, head trauma), drug/alcohol abuse or withdrawal' },
            { text: 'Investigate if: disorientation/memory loss, rapid onset within hours/days (beware NMDA encephalitis), abnormal vital signs, hallucinations in modalities other than auditory' },
            { text: 'Psychiatric differentials: Brief Psychotic Disorder (<1 month), Schizophreniform Disorder (1–6 months), Delusional Disorder, Mood Disorder, Schizoaffective Disorder' },
          ],
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Antipsychotic medications are cornerstone of treatment — do not wean off; switching not recommended unless severe side effects' },
            { text: 'Risk of relapse without medication: 77% within 1 year, >90% beyond 2 years' },
            { text: 'Maintenance dose should not be less than half the effective dose at acute phase. Trial at adequate dose for 4–6 weeks before switching' },
            { text: 'For relapsed schizophrenia with unlikely organic cause and low risk: perform FBC/RP/LFT/TFT/ESR; start Risperidone 1 mg ON; refer direct access psychiatry' },
            { text: 'Monitor metabolic syndrome annually: fasting lipids, glucose, weight, BMI. Encourage healthy diet, exercise and smoking reduction' },
            {
              text: 'Psychosocial interventions (stable phase): CBT, family therapy, social skills training, vocational rehabilitation, referral to Anglican Care Centre (COMIT team) via NUP MSW',
            },
          ],
        },
      ],
    },
    {
      heading: 'Oral Antipsychotics',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Usual Maintenance Dose', 'Maximum Dose', 'Remarks'],
          rows: [
            { cells: ['Haloperidol (S1)', 'Moderate: 1.5 mg BD/TDS; Severe: 3–5 mg BD/TDS', '30 mg/day', 'First-generation (FGA)'] },
            { cells: ['Trifluoperazine (S1)', '15–20 mg in divided doses', '40 mg/day', 'FGA'] },
            { cells: ['Chlorpromazine (S1)', 'Moderate: 100 mg TDS/QDS; Severe: 250 mg TDS', '800–1000 mg/day', 'Common ADR: sedation, anticholinergic effects, postural hypotension'] },
            { cells: ['Sulpiride (S2)', 'Moderate: 400 mg BD–QDS; Severe: 2400 mg/day in 2–4 divided doses', '2400 mg/day', 'FGA'] },
            { cells: ['Quetiapine (S2)', 'Immediate-release: 300 mg ON', '800 mg/day', 'Given at night due to sedation. Common ADR: sedation, anticholinergic, postural hypotension'] },
            { cells: ['Risperidone (S2)', '2–6 mg OD', '8 mg/day', 'Highest SGA risk for hyperprolactinemia and EPSE (especially >4 mg/day)'] },
            { cells: ['Olanzapine (S2)', '10–20 mg OD', '30 mg/day', 'Common ADR: sedation, significant weight gain, anticholinergic'] },
            { cells: ['Clozapine (Not in NUP)', '300–450 mg/day in divided doses', '900 mg/day', 'Managed by psychiatrists. Serious ADR: agranulocytosis, myocarditis, lowered seizure threshold'] },
          ],
        },
      ],
    },
    {
      heading: 'Adverse Drug Reactions (ADR) of Antipsychotics',
      blocks: [
        {
          type: 'table',
          headers: ['ADR', 'Remarks'],
          rows: [
            { cells: ['Parkinsonism', 'Non-urgent; relieve with benzhexol 2–4 mg daily'] },
            { cells: ['Acute dystonia', 'Urgent — refer to ED for IM benztropine; reduce antipsychotic dose'] },
            { cells: ['Akathisia', 'Urgent — refer direct access psychiatry; clonazepam BD PRN or propranolol 10–20 mg TDS PRN'] },
            { cells: ['Tardive dyskinesia', 'Consider Vitamin E 400–1600 IU/day or melatonin 10 mg/day; consider SGA or refer neurologist for tetrabenazine'] },
            { cells: ['Neuroleptic malignant syndrome', 'Emergency — refer ED. Characterized by hyperthermia, rigidity, autonomic instability, altered consciousness. Fatal in up to 20%'] },
            { cells: ['Cardiovascular (prolonged QTc)', 'Emergency — for QTc >500ms, refer Psychiatry SOC for dose adjustment or switch to aripiprazole'] },
            { cells: ['Hyperprolactinemia', 'Menstrual irregularities, infertility, galactorrhoea, sexual dysfunction — refer specialist, consider aripiprazole'] },
            { cells: ['Metabolic syndrome', 'Weight gain, diabetes, dyslipidaemia — monitor weight, BP, fasting glucose, lipid profile'] },
          ],
        },
      ],
    },
    {
      heading: 'Step-Down & Relapse Management',
      blocks: [
        {
          type: 'text',
          content:
            'Step-down criteria (on stable doses of oral meds for 6+ months): not on IM depot, not requiring NUP psychologist services, no comorbid personality disorder, medications on NUP formulary, no long-term benzodiazepines/Z-drugs, agreeable to polyclinic follow-up.',
        },
        {
          type: 'text',
          content:
            'Relapse management — Mild (caregiver able to administer meds, no suicidality/homicidality, due to non-adherence): restart usual doses (Risperidone 1 mg BD or Haloperidol 1.5 mg BD); review in 3 weeks at NUP HMC. Moderate/severe (suicidal/homicidal or unable to administer meds): refer direct access SOC + email ASCAT. Agitated: activate CISCO, call 999, PO Lorazepam 1–2 mg or IM Haloperidol 5 mg + IM Promethazine 25–50 mg.',
        },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Metabolic monitoring (fasting glucose, lipids, BMI)', 'Annually', 'For patients on typical AND atypical antipsychotics'] },
            { cells: ['Comorbid anxiety and depression', 'Annually', 'If suspected'] },
            { cells: ['Global Assessment of Functioning (GAF)', 'Annually', 'Check functional status at home and community'] },
            { cells: ['Clinical review', 'At least twice a year', 'Assess symptoms, medication response, adherence and side effects'] },
            { cells: ['Psychosocial interventions', 'Annually', 'TCU MSW for Anglican Care Centre if patient keen'] },
          ],
        },
      ],
    },
  ],
};
