import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 48 NUP CPG — Obsessive Compulsive Disorder (Jun 2024)
// ---------------------------------------------------------------------------
export const ocd: CpgDocument = {
  id: 'cpg-ocd',
  condition: 'Obsessive Compulsive Disorder (OCD)',
  source: '48 NUP CPG - Obsessive Compulsive Disorder.pdf',
  reviewDate: 'Jun 2024. Next review: Jun 2027.',
  advisors: 'Dr Soo Shuenn Chiang',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content:
            'Key Family Physicians: Dr Jonathan Tung, Dr Alicia Boo. Specialist Advisor: Dr Soo Shuenn Chiang. Contributing Staff: Ms Toh Hui Moon (Senior Clinical Psychologist), Ms Marissa Chin (NUHS Senior Pharmacist). Published June 2024. Next review date: June 2027.',
        },
        {
          type: 'text',
          content:
            'Obsessive and compulsive features may be an appropriate adaptive response to a stressor, especially in occupations whereby attention to detail and order are required as part of the job. However, OCD is an exaggeration of this response such that it causes social and/or occupational dysfunction.',
        },
        {
          type: 'text',
          content:
            'Example: Mr A drives to work frequently. He is troubled by repeated thoughts and anxiety that he has accidentally hit a pedestrian while driving. He gets these thoughts throughout the day uncontrollably. He copes by repeatedly driving to and from his workplace to check if he has caused an accident. This results in him taking 2 hours to get to work instead of the average 20 minutes.',
        },
      ],
    },
    {
      heading: 'Screening and Diagnosis (DSM-5)',
      blocks: [
        {
          type: 'text',
          content:
            'OCD is indicated by the presence of obsessions (unwanted, repeated, intrusive thoughts or images that bring about distress, which the person tries to counteract with other thoughts or actions) and/or compulsions (repetitive ritualized actions attempting to counteract the thoughts, urges or images, and/or are excessive in their application).',
        },
        {
          type: 'text',
          content:
            'Obsessions and/or compulsions are time-consuming (e.g., taking more than 1 hour/day) or cause clinically significant distress or impairment in social, occupational, or other important areas of functioning. Common obsessive themes revolve around hygiene, cleanliness, orderliness, sex, and religion. The lifetime prevalence of OCD is 1.6%.',
        },
        {
          type: 'text',
          content:
            'These disturbances are not attributable to effects of a substance or another medical condition, and cannot be better explained by symptoms of another mental disorder, including: body dysmorphic disorder, hoarding disorder, trichotillomania, excoriation (skin picking) disorder, generalised anxiety disorder, ritualised eating behaviour / eating disorders, gambling disorder, illness anxiety disorder, substance/medication-induced obsessive-compulsive related disorder.',
        },
        {
          type: 'text',
          content:
            'The main distinguishing factor between OCD and obsessive compulsive personality disorder is the presence of anxiety in the former. Individuals range from having good insight (recognise that OCD beliefs are definitely or probably not true) to absent insight or delusional beliefs (completely convinced OCD beliefs are true).',
        },
      ],
    },
    {
      heading: 'When It Is Significant — YBOCS',
      blocks: [
        {
          type: 'text',
          content:
            'OCD becomes an issue when obsessions and/or compulsions are so time consuming that they cause clinically significant distress or impairment. Most psychiatrists go by clinical assessment. You may use the Yale–Brown Obsessive Compulsive Scale (YBOCS) available as part of Epic Flowsheets.',
        },
        {
          type: 'table',
          headers: ['Total YBOCS Score', 'Interpretation'],
          rows: [
            { cells: ['0–7', 'Subclinical symptoms of OCD'] },
            { cells: ['8–15', 'Mild symptoms of OCD'] },
            { cells: ['16–23', 'Moderate symptoms of OCD'] },
            { cells: ['24–31', 'Severe symptoms of OCD'] },
            { cells: ['32–40', 'Extreme symptoms of OCD'] },
          ],
        },
        {
          type: 'text',
          content: 'For those with OCD regardless of severity, do proceed to the following interventions that could help.',
        },
      ],
    },
    {
      heading: 'Non-Pharmacological Management — CBT/ERP',
      blocks: [
        {
          type: 'text',
          content:
            'CBT with an emphasis on ERP (Exposure and Response Prevention) is the recommended mode of management for OCD.',
        },
        {
          type: 'list',
          items: [
            { text: 'ERP: therapist-guided repeated and prolonged exposure to situations that provoke obsessional fear, along with abstinence from compulsive behaviours.' },
            { text: 'ERP requires the patient to remain in the exposure situation until the obsessional distress decreases spontaneously, without withdrawing or performing compulsions. The goal is to challenge how a patient responds to distress and to learn that feared stimuli are safe.' },
            { text: 'Patients can be exposed to actual situations (in vivo exposure), imagined situations (imaginal exposure), or physical sensations associated with anxiety (interoceptive exposure).' },
            { text: 'Example: a patient who fears accidentally hitting pedestrians will practice driving on streets with pedestrians, without getting out of the car to check for victims.' },
            { text: 'The frequency of CBT with ERP varies depending on severity, ranging from once a week to even daily outpatient psychology appointments. An example of daily treatment is the Bergen 4 Day Treatment (B4DT), available at certain centres.' },
          ],
        },
      ],
    },
    {
      heading: 'Pharmacological Management',
      blocks: [
        {
          type: 'text',
          content:
            'Patients with OCD should be treated with ERP and pharmacological management. The average maintenance dose required to treat OCD is higher compared to MDD or GAD. Majority of patients will continue to have residual symptoms despite maximal tolerable dose. Patients tend to take longer to achieve remission and are on psychotropics for a longer duration. In general, patients with OCD are put on long-term medications as the risk of relapse is high without medications.',
        },
        {
          type: 'table',
          headers: ['Drug', 'Usual Dose Range', 'Common ADR', 'Remarks / Contraindications / Precautions'],
          rows: [
            { cells: ['Fluoxetine (S2) $$', 'Initial: 10–20 mg/day; Maintenance: 40–80 mg/day (up to 120 mg/day)', 'GI (nausea, diarrhoea), insomnia, somnolence, nervousness, headache, dizziness, sexual dysfunction, weight gain', 'Avoid abrupt discontinuation. May cause hyponatraemia/SIADH, serotonin syndrome, QT-prolongation, bleeding, activation of mania. Avoid in angle-closure glaucoma. Caution in seizure disorders, renal/hepatic impairment. Contraindicated within 2 weeks of MAOI use.'] },
            { cells: ['Fluvoxamine (S2) $$', 'Initial: 50 mg/day; Maintenance: 100–300 mg/day (doses > 100 mg divided into twice-daily dosing)', 'As above; more somnolence', 'Same class warnings as fluoxetine.'] },
            { cells: ['Escitalopram (NS) $$$$$$', 'Initial: 10 mg/day; Maintenance: 20–40 mg/day (up to 60 mg/day)', 'As above', 'Escitalopram and Sertraline have less drug-drug interactions.'] },
            { cells: ['Sertraline (S2) $$$', 'Initial: 50 mg/day; Maintenance: 200 mg/day (up to 400 mg/day)', 'As above; more insomnia', 'Same class warnings.'] },
            { cells: ['Clomipramine TCA (S1) $', 'Initial: 25 mg ON; Maintenance: 100–250 mg ON', 'Somnolence, weight gain, anticholinergic effects (dry mouth, constipation), dizziness, headache', 'Avoid abrupt discontinuation. QT-prolongation risk. Avoid in elderly and angle-closure glaucoma. Contraindicated within 2 weeks of MAOI use. Less favoured due to risks of toxicity with overdose.'] },
          ],
        },
        {
          type: 'text',
          content: 'Cost key: $ <$10/month, $$ $10–<$20/month, $$$ $20–<$30/month, $$$$$$ $90+/month. Amount payable depends on subsidy level and drug subsidy class (S1, S2, NS). Prices accurate as of Mar 2024.',
        },
      ],
    },
    {
      heading: 'De-Escalation of Therapy',
      blocks: [
        {
          type: 'text',
          content:
            'If shared decision is to trial de-escalation (this scenario should be rare), gradually reduce the dosage of the patient\'s psychotropics. Arrange a review 2–3 months after each reduction in dosage to look for recurrence of symptoms.',
        },
        {
          type: 'table',
          headers: ['Medication', 'Recommended Maintenance Dosage'],
          rows: [
            { cells: ['Fluoxetine', '60–80 mg daily'] },
            { cells: ['Fluvoxamine', '150–200 mg daily'] },
            { cells: ['Sertraline', '150–200 mg daily'] },
            { cells: ['Escitalopram', '20 mg daily'] },
            { cells: ['Clomipramine', '150–200 mg daily'] },
          ],
        },
      ],
    },
    {
      heading: 'Management of Step-Down Patients from NUHS/IMH Psychiatry SOC',
      blocks: [
        {
          type: 'text',
          content:
            'All newly diagnosed patients with OCD should be referred to Psychiatry SOC for initiation of treatment and more intensive psychotherapy. Once patient is stable (at least 6 months on the same dose of medications with acceptable level of residual symptoms, and no longer needing psychotherapy), NUHS/IMH Psychiatry SOC can right-site these patients to NUP polyclinics.',
        },
        {
          type: 'text',
          content:
            'When the admin doc vets the step-down referrals, these patients should be given a "TCU Dr Health and Mind consult" visit type (not the LONG FIRST VISIT), as these are review patients. If stable, these patients can be decanted to specific teamlet (not to general pool, as there is no defaulter scrubbing for patients in general teamlet).',
        },
        {
          type: 'table',
          headers: ['Severity', 'Management'],
          rows: [
            { cells: ['Mild OCD', 'Continue same medications. TCU 3–6 months. Decant to teamlet at 2nd HMC visit. If mild relapse, consider referring to NUP psychologists and KIV increasing dose of medications.'] },
            { cells: ['Moderate OCD', 'Refer NUP psychologist to see within 1 month. Uptitrate medications. TCU patient to NUP HMC clinic within 1–2 months. Consider TCU back to teamlet once Y-BOCS score < 8.'] },
            { cells: ['Severe OCD or risk of self-harm/harm to others', 'Do suicide assessment risk. Consider referring to ED if clinically significant or significant risk of self-harm. Uptitrate medications, give 4 weeks supply. Refer original psychiatry SOC (direct access) AND email: ASCAT NTFGH: JHCampus_CMH_programme@nuhs.edu.sg; ASCAT NUH: nuhascat@nuhs.edu.sg'] },
          ],
        },
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        {
          type: 'text',
          content: 'A referral back to original psychiatry SOC is warranted for:',
        },
        {
          type: 'list',
          items: [
            { text: '1. Severe OCD or if there is a risk of self-harm / harm to others' },
            { text: '2. OCD not responding to optimal treatment with combination of ERP and an optimized dose of psychotropics' },
            { text: '3. OCD requiring escalating doses of benzodiazepines (follow latest benzodiazepine prescription guidelines for primary care)' },
            { text: '4. Patient assessed by NUP psychologist to require intensive ERP such that NUP psychology is not able to support' },
            { text: '5. Patients with concomitant drug or substance abuse' },
            { text: '6. All newly diagnosed patients with OCD' },
          ],
        },
      ],
    },
  ],
};
