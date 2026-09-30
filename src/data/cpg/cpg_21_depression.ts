import { CpgDocument } from '../types';

export const depression: CpgDocument = {
  id: 'depression',
  condition: 'Depression',
  source: 'NUP CPG',
  reviewDate: 'June 2025',
  advisors: 'Dr Soo Shuenn Chiang (Senior Consultant, Department of Psychological Medicine, NUH) / Dr Wan Yi Min (Consultant, Department of Psychiatry, NTFGH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Major depression is the most common mental illness in Singapore. Based on the National Mental Health Study in 2016, 6.2% of the adult population suffered from major depression at some point in their lifetime. 14.3% of people with a chronic illness had a mental illness, and 50.6% of people with a mental illness also had a chronic illness. Diabetic patients have increased depressive symptoms. The 12-month treatment gap for Major Depressive Disorder was 73%.' },
      ],
    },
    {
      heading: 'Screening for Depression',
      blocks: [
        { type: 'text', content: 'Opportunistic screening is not recommended. Patients with risk factors should be screened.' },
        { type: 'table', headers: ['Clinical Risk Factors', 'Symptom Risk Factors'], rows: [
          { cells: ['History of depression', 'Unexplained physical symptoms'] },
          { cells: ['Family history of depression', 'Chronic pain'] },
          { cells: ['High users of medical services and chronic medical conditions (especially cardiovascular disease, diabetes, neurological disorders)', 'Fatigue'] },
          { cells: ['Other psychiatric conditions', 'Insomnia'] },
          { cells: ['Times of hormonal challenge (e.g. peripartum)', 'Anxiety, Substance abuse'] },
        ]},
        { type: 'text', content: 'Screening can be done with PHQ-2 (two questions over the last 2 weeks: (1) Little or no pleasure in doing things; (2) Feeling down, depressed, or hopeless). If PHQ-2 score ≥3, proceed to PHQ-9. Patients with PHQ-9 ≥10 should be evaluated by a doctor.' },
      ],
    },
    {
      heading: 'Suicide Risk Assessment',
      blocks: [
        { type: 'text', content: 'Patients reporting a recent suicide attempt or experiencing suicidal ideation should receive a suicide risk assessment by a HMC-trained care manager, doctor or psychologist on the same day. Standardised assessment tools such as C-SSRS (nationally preferred scale) or P4 can be used. Examples of higher risks: attempted self-harm, dramatic changes in mood, talking about death or making plans, expressing hopelessness, withdrawal from friends/family/society.' },
      ],
    },
    {
      heading: 'DSM-5 Criteria for Depression',
      blocks: [
        { type: 'text', content: '5 or more of the following 9 symptoms (at least one involving symptom 1 or 2), for 2 weeks duration: (1) Depressed mood; (2) Reduced interest or pleasure in almost all activities; (3) Weight gain or loss / change in appetite; (4) Insomnia or hypersomnia; (5) Psychomotor agitation or retardation; (6) Fatigue or loss of energy; (7) Feelings of worthlessness or inappropriate guilt; (8) Poor concentration or indecisiveness; (9) Thought of death or suicidal ideation. Plus: significant distress or functional impairment; never had a manic or hypomanic episode.' },
      ],
    },
    {
      heading: 'Differentials for Depression',
      blocks: [
        { type: 'text', content: 'Medical conditions causing depressive symptoms: Endocrine (hypothyroidism, Cushing disease, Addison disease), Malignancy, Neurological (stroke, syphilis, tumour, Parkinson\'s disease), Chronic illness (heart failure, SLE), Sleep disorders.' },
        { type: 'text', content: 'Psychiatric conditions: Psychotic disorders (schizophrenia, schizoaffective disorder, delusional disorder), Bipolar disorder (may present first as unipolar depression), Comorbid anxiety disorder, PTSD.' },
        { type: 'text', content: 'Drugs that may cause or aggravate depressive symptoms or cause drug interactions with SSRIs: Chronic conditions — Beta blockers, Statins (simvastatin); Endocrine/Hormones — Prednisolone, progestogens, oestrogen; Neurology — Levodopa, Bromocriptine, Anticonvulsants (Gabapentin, Topiramate); Others — PPIs, Ciprofloxacin; Substance Abuse — Alcohol, benzodiazepines, opioids.' },
      ],
    },
    {
      heading: 'PHQ-9 Interpretation and TCU / Referral Recommendations',
      blocks: [
        { type: 'table', headers: ['PHQ-9 Score', 'Severity', 'TCU / Referral Recommendation'], rows: [
          { cells: ['0–4', 'Minimal', 'Reassure patient, routine follow up, encourage regular exercise and self-care.'] },
          { cells: ['5–9', 'Mild', 'Psychological education + simple self-help strategies. TCU MSW (psychosocial support / CBT) within 8 weeks.'] },
          { cells: ['10–14', 'Moderate', 'TCU Psychologist (First Visit) if agreeable within 4 weeks. TCU Dr HMC Long (FV) for consideration of medication within 4 weeks.'] },
          { cells: ['15–19', 'Moderately severe', 'TCU Psychologist (First Visit) if agreeable within 2 weeks. TCU Dr HMC Long (FV) within 2 weeks; may start SSRIs if appropriate and patient agreeable.'] },
          { cells: ['20–27', 'Severe', 'Refer SOC (Direct Access). Safety planning (.nupsafetyplan).'] },
          { cells: ['Any (moderate suicide risk)', 'Any', 'Refer SOC (Direct Access). Safety planning.'] },
          { cells: ['Any (severe suicide risk)', 'Any', 'Refer ED.'] },
        ]},
      ],
    },
    {
      heading: 'Pharmacotherapy',
      blocks: [
        { type: 'text', content: 'Antidepressants are effective for moderate to severe depression and also effective for anxiety and obsessions. Onset of action is usually around 3–4 weeks. Onset of side effects are immediate and get better within 2 weeks. SSRIs are the class of choice for initial therapy due to effectiveness, tolerability, and safety in overdose. Drug of choice for depressed persons with cardiovascular disease.' },
        { type: 'table', headers: ['Class', 'Drug Name / Dose', 'Side Effects', 'Remarks'], rows: [
          { cells: ['SSRI', 'Fluoxetine (S2) — Initiation 10–20 mg OM; Maintenance 20–80 mg', 'Headache, GI (nausea/diarrhoea), excessive daytime somnolence, orthostatic hypotension, insomnia, anticholinergic effects; uncommon: sexual dysfunction, tremors, akathisia, QTc prolongation, SIADH, hyponatremia, bleeding risk', 'More likely to cause insomnia. Generally safe in renal and hepatic impairment (avoid in hepatic impairment due to extensive metabolism and long half-life). Sertraline preferred for pregnancy and cardiac diseases.'] },
          { cells: ['SSRI', 'Fluvoxamine (S2) — Initiation 25–50 mg ON; Maintenance 50–200 mg (doses >100 mg/day in 2 divided doses)', '(see above)', ''] },
          { cells: ['SSRI', 'Sertraline (S2) — Initiation 25–50 mg OM; Maintenance 50–200 mg', '(see above)', 'Preferred SSRI for pregnancy and cardiac diseases.'] },
          { cells: ['SSRI', 'Escitalopram (NS) — Initiation 5–10 mg OM; Maintenance 10–20 mg', '(see above)', 'Less drug-drug interactions but may cause weight gain.'] },
          { cells: ['SNRI', 'Venlafaxine XR (S2) 75 mg — Initiation 75 mg OM; Maintenance 150–225 mg', 'Headache, sweating, nausea, dry mouth, constipation, nervousness, insomnia, dose-dependent BP increase; Serotonin syndrome, SIADH/hyponatremia, sexual dysfunction', 'Not recommended in angle closure glaucoma, seizures. Use caution with hepatic/renal impairment.'] },
          { cells: ['NaSSA', 'Mirtazapine (S2) 15mg — Initiation 7.5–15 mg ON; Maintenance 15–45 mg', 'Sedation, weight gain, appetite gain, dry mouth, constipation', 'Low doses used for concomitant insomnia (preferentially blocks histamine receptor). Less sexual/nausea side effects and less hyponatremia than SSRIs.'] },
          { cells: ['TCA', 'Amitriptyline (S1) 10/25 mg — Initiation 10–25 mg ON; Maintenance 50–100 mg', 'Anticholinergic effects (dry mouth, constipation, blurred vision, urinary retention, weight gain), dizziness, somnolence, palpitations, tachycardia, orthostatic hypotension', 'Not first line due to anticholinergic and cardiotoxic side effects. Contraindicated: MAOI. Toxic cardiac effects in overdose.'] },
        ]},
        { type: 'text', content: 'Serotonin Syndrome: An Adverse Drug Reaction which can be life threatening. Usually occurs with combination therapy (SSRIs, SNRIs, MAOIs, TCAs, valproate, antiemetics, tramadol, dextromethorphan). Patients present with a triad of altered mental state, autonomic symptoms, and neuromuscular excitation. Management: discontinue the offending agent and refer to A&E for monitoring and support.' },
      ],
    },
    {
      heading: 'Using Antidepressants — Key Points',
      blocks: [
        { type: 'list', items: [
          { text: 'If partial response after 4 weeks, consider increasing dosage. If no response after 4–8 weeks, consider switching to another SSRI, then another class.' },
          { text: 'Possible risk of suicidal behaviour and self-harm during initial 1–3 months. Order CM HMC Teleconsultation at ~2 weeks after starting SSRIs for nurses to check tolerability, adherence, and suicide risk.' },
          { text: 'Stop antidepressant if hypomanic/manic symptoms emerge. Refer to psychiatrist for potential bipolar disorder.' },
          { text: 'Stopping antidepressants: typically considered after 1st depressive episode with ≥6–9 months response after remission. Taper over 4 weeks or more.' },
          { text: 'Consider long-term maintenance in patients with severe depressive episodes or ≥3 episodes of depression.' },
          { text: 'Young adults (18–24 years): Monitor closely for worsening suicidal ideation; black box warning applies. Overall benefits of treatment far outweigh risks.' },
          { text: 'Elderly (>65 years): Psychotherapy remains preferred treatment. Monitor sodium while on antidepressants (especially SSRIs/SNRIs).' },
        ]},
      ],
    },
    {
      heading: 'Referral to Specialist and Step-Down Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Referral to Specialist: patients ≤17 years who might need antidepressants; no response to 3 different antidepressants; complicated medical history (antenatal/postpartum, breastfeeding, liver disease, Cushing); comorbid personality disorders, substance dependence; new onset psychotic or bipolar disorder; potential need for interventional psychiatry (ECT, rTMS).' },
          { text: 'Step-down care accepted at NUP: patients with predominantly depression or anxiety, stable and mild to moderate severity; on NUP formulary medications; not reliant on regular benzodiazepines (occasional benzos acceptable up to 5 tablets; standalone benzos discouraged); patients on two antidepressants have increased serotonin syndrome risk; if on antipsychotics, do BMI, fasting glucose, lipid, BP check every year.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Doctor review', 'Twice a year or longer if stable', 'Includes assessment for symptoms, response/adherence to medications, psychosocial interventions, risk of harm, general physical health, and basic emotional support.'] },
          { cells: ['PHQ-9 Score', 'Every clinical review when appropriate; minimally 6 monthly for patients with depression', 'Reportable clinical indicator.'] },
        ]},
        { type: 'text', content: 'Postpartum Depression: Please refer to the NUP Women\'s Health CPG for guidelines on antepartum and postpartum depression.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 22. Diabetes Mellitus
// ---------------------------------------------------------------------------
const diabetesMellitus: CpgDocument = {
};
