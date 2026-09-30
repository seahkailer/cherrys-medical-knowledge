import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 50 NUP CPG — Parkinson's Disease (May 2024)
// ---------------------------------------------------------------------------
export const parkinsonDisease: CpgDocument = {
  id: 'parkinson-disease',
  title: "Parkinson's Disease",
  category: 'Neurology',
  lastReviewed: 'May 2024',
  sections: [
    {
      title: 'Introduction',
      blocks: [
        {
          type: 'text',
          content:
            "Key Family Physicians: Dr Chong Yong He / Dr Tan Wei Beng. Specialist Advisors: Dr Jonathan Ong (Senior Consultant, NUH) / Dr June Tan (Senior Consultant, NUH). Updated in May 2024 by Dr Chong Yong He. Next review date: May 2027.",
        },
        {
          type: 'text',
          content:
            "Parkinson's Disease (PD) is a chronic progressive neurodegenerative disorder and is a common cause of parkinsonism. PD tends to manifest initially with motor symptoms (related to a loss of dopaminergic neurons in the substantia nigra). In later stages, non-motor features appear (related to neuronal loss in non-dopaminergic areas): (a) autonomic dysfunction; (b) falls; (c) sleep disturbances; (d) cognitive abnormalities.",
        },
        {
          type: 'text',
          content:
            "The pathogenetic mechanism of PD is still not fully understood — likely a combination of genes, environmental toxins, and free radicals. Pathological features include degeneration of dopaminergic neurons in the substantia nigra pars compacta coupled with intracytoplasmic inclusions known as Lewy bodies. Neurodegeneration and Lewy bodies can also be found in the locus ceruleus, nucleus basalis, hypothalamus, cerebral cortex, cranial nerve motor nuclei, and central and peripheral components of the autonomic nervous system.",
        },
        {
          type: 'text',
          content:
            "A significant number of patients diagnosed with PD show alternative diagnoses at autopsy, such as multiple systems atrophy, progressive supranuclear palsy and cerebrovascular disease.",
        },
      ],
    },
    {
      title: 'Epidemiology',
      blocks: [
        {
          type: 'text',
          content:
            "According to a community-based study in 2004, the prevalence of PD in Singapore was 0.3% of the population aged 50 years and above, representing a significant burden of disease to patient and family.",
        },
      ],
    },
    {
      title: 'Features and Diagnosis',
      blocks: [
        {
          type: 'text',
          content:
            "PD remains a clinical diagnosis as there are currently no definitive diagnostic markers. The Movement Disorders Society 2015 Clinical Diagnostic Criteria recommends: (a) Confirm the presence of parkinsonism; (b) Exclude atypical features that suggest alternative diagnoses; (c) Supportive prospective criteria for PD.",
        },
        {
          type: 'text',
          content: 'Step 1: Confirm Parkinsonism — defined by (A) bradykinesia; (B) rest tremor and/or rigidity.',
        },
        {
          type: 'list',
          items: [
            '1. Bradykinesia (mandatory feature): Slowed movements plus decrement in amplitude/speed or progressive hesitation/halts as movements are continued. Tested by repetitive movements: finger tapping, alternating pronation & supination of forearm, opening & closing of fists.',
            '2. Rest tremor: Distal "pill-rolling", 3–5 Hz. Present in 50–70% of PD patients (no tremor does not mean no PD). Best detected with limb fully supported against gravity.',
            '3. Rigidity (present in 89–99% of PD): Increased resistance noted uniformly during range of passive joint movement. Can be enhanced by contralateral motor activity or mental task performance.',
          ],
        },
        {
          type: 'text',
          content: 'Step 2: Diagnosis of clinically established PD requires: (1) Absence of absolute exclusion criteria; (2) At least 2 supportive criteria; (3) No red flags.',
        },
        {
          type: 'text',
          content: 'Diagnosis of clinically probable PD requires: (1) Absence of absolute exclusion criteria; (2) Red flags counterbalanced by supportive criteria (1 red flag → ≥1 supportive criterion; 2 red flags → ≥2 supportive criteria; no more than 2 red flags allowed).',
        },
        {
          type: 'table',
          headers: ['Absolute Exclusion Criteria (any one rules out PD)'],
          rows: [
            { cells: ['Unequivocal cerebellar abnormalities (cerebellar gait, limb ataxia, cerebellar oculomotor abnormalities)'] },
            { cells: ['Downward supranuclear palsy or selective slowing of downward vertical saccades'] },
            { cells: ['Diagnosis of probable behavioural variant frontotemporal dementia or primary progressive aphasia within first 5 years of disease'] },
            { cells: ['Purely lower limb parkinsonism for > 3 years'] },
            { cells: ['Treatment with dopamine receptor blocker or dopamine-depleting agent in a dose and time-course consistent with drug-induced parkinsonism'] },
            { cells: ['Absence of observable response to high-dose levodopa despite at least moderate severity of disease'] },
            { cells: ['Unequivocal cortical sensory loss, clear limb ideomotor apraxia, or progressive aphasia'] },
            { cells: ['Normal functional neuroimaging of the presynaptic dopaminergic system'] },
            { cells: ['Documentation of an alternative condition known to produce parkinsonism and plausibly connected to patient\'s symptoms'] },
          ],
        },
        {
          type: 'table',
          headers: ['PD Supportive Features (≥ 2 required for clinically established PD)'],
          rows: [
            { cells: ['Good response to dopaminergic therapy (return to normal/near-normal function; during titration: marked improvement with dose ↑ or marked worsening with dose ↓ [>30% in UPDRS III]; unequivocal on/off fluctuations including predictable end-of-dose wearing off). NB: MSA-P may have partial L-dopa response.'] },
            { cells: ['Levodopa-induced dyskinesia'] },
            { cells: ['Rest tremor of a limb, documented on clinical examination'] },
            { cells: ['Olfactory loss (in anosmic or clearly hyposmic range, adjusted for age and sex) OR cardiac MIBG ↓ uptake (cardiac sympathetic denervation on MIBG scan)'] },
          ],
        },
        {
          type: 'table',
          headers: ['Red Flags (≤ 2 allowed for clinically probable PD)'],
          rows: [
            { cells: ['Within 3 years onset: Recurrent falls > 1 year due to impaired balance'] },
            { cells: ['Within 5 years onset: Rapid gait worsening requiring regular use of wheelchair'] },
            { cells: ['Within 5 years onset: Severe dysphonia, dysarthria (speech unintelligible most of the time) or severe dysphagia (requiring soft food, NG tube or gastrostomy feeding)'] },
            { cells: ['Within 5 years onset: Severe autonomic failure — orthostatic hypotension (↓BP within 3 min of standing by ≥30 mmHg systolic or 15 mmHg diastolic, in absence of dehydration/medication) or severe urinary retention/incontinence in <5 years'] },
            { cells: ['Within 5 years onset: Complete absence of progression of motor symptoms or signs unless stability is related to treatment'] },
            { cells: ['Within 5 years onset: Absence of any common NMS despite 5 years disease duration (sleep dysfunction, autonomic dysfunction, hyposmia, psychiatric dysfunction)'] },
            { cells: ['Within 10 years onset: Disproportionate anterocollis (dystonic) or hand/feet contractures'] },
            { cells: ['At any time: Inspiratory respiratory dysfunction (diurnal or nocturnal inspiratory stridor or frequent inspiratory sighs)'] },
            { cells: ['At any time: Otherwise unexplained pyramidal tract signs'] },
            { cells: ['At any time: Bilateral symptom onset with no side predominance reported by patient/caregiver and observed on examination'] },
          ],
        },
      ],
    },
    {
      title: 'Course of Parkinson\'s Disease',
      blocks: [
        {
          type: 'text',
          content:
            "PD results in significant disability 10–15 years after onset (rate of progression varies). Falls are common — result of postural instability, postural hypotension, dyskinesias, confusion, dementia, suboptimal nutrition, and sleep disorders. Mean survival before Levodopa was 9 years (mortality ratio 3.0 vs general population). Common causes of death: bronchopneumonia and urinary tract infection. Levodopa reduces the mortality ratio to 1.5.",
        },
        {
          type: 'table',
          headers: ['Hoehn & Yahr Stage', 'Clinical Severity', 'Median Duration (untreated)', 'Median Duration (levodopa-treated)'],
          rows: [
            { cells: ['I', 'Unilateral parkinsonism', '3 years', 'Not available'] },
            { cells: ['II', 'Bilateral parkinsonism', '6 years', '9 years'] },
            { cells: ['III', 'Mild to moderate disability with postural impairment', '7 years', '12 years'] },
            { cells: ['IV', 'Severe disabling disease, able to walk unassisted but markedly incapacitated', '9 years', '12 years'] },
            { cells: ['V', 'Confined to bed or wheelchair unless aided', '14 years', '18 years'] },
          ],
        },
      ],
    },
    {
      title: 'Goals of Treatment',
      blocks: [
        {
          type: 'list',
          items: [
            '1. To control symptoms and to improve function and quality of life.',
            '2. Balance between improving symptoms but potentially inducing drug side effects.',
            '3. Seldom possible to abolish symptoms.',
            'PD is a chronic disease covered under CDMP/CHAS.',
          ],
        },
      ],
    },
    {
      title: 'Pharmacotherapeutic Management — Motor Symptoms',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Common Dose', 'Common ADR', 'Remarks / Contraindications / Precautions'],
          rows: [
            { cells: ['Levodopa Preparations:\nMadopar® (Levodopa/Benserazide) 125 mg Capsules (S1) $; 125 mg HBS Capsules (S2) $; 250 mg Tablets (S1) $\n(Levodopa/Carbidopa preparations not available in NUP)', 'Start 62.5 mg TDS → 125 mg TDS → 187.5 mg TDS → 250 mg TDS (titrate at 1–2 weekly intervals). May titrate more slowly if unable to tolerate standard titration.', 'Nausea, vomiting (may use domperidone with caution per MOH guidelines), postural hypotension, cognitive disturbance. Motor complications: dyskinesia, motor fluctuations (sudden unpredictable ON/OFF fluctuations). May cause orange-coloured sweat, urine and saliva.', 'Main treatment. Improves bradykinesia and rigidity, but not so much tremor. Usually administered with peripheral dopa decarboxylase inhibitor (Benserazide in Madopar). Slow-release L-dopa (Madopar HBS) has unpredictable ON period but can be useful as last dose before bedtime for nocturnal OFF. Administration: Best given on empty stomach (½ hr before food or 1 hr after food). Avoid with/after protein-rich food as it may affect absorption. Madopar HBS can be taken with or without food. Space ≥ 2 hours apart from iron supplements. Avoid metoclopramide and olanzapine. Caution with first-generation antipsychotics.'] },
            { cells: ['Dopamine Agonists (DAs) — Not available in NUP:\nRopinirole (Requip® 0.25 mg, 1 mg, 2 mg; Requip® PR 2 mg, 4 mg); Rotigotine Patch; Pramipexole; Piribedil', 'Ropinirole: Initial 0.25 mg TDS; usual 12–16 mg/day in 3 divided doses; max 24 mg/day', 'Nausea, drowsiness, hallucinations, insomnia, constipation, peripheral oedema.', 'May be considered as first-line for younger PD patients (<65 years). Delays need for L-dopa. Use as add-on when motor complications set in. Avoid in patients with history of addiction disorders. Every patient initiated on a DA must be counselled on possible impulse control disorders (compulsive sexual activity, eating, pathological gambling & shopping).'] },
            { cells: ['MAO-B Inhibitors:\nSelegiline 5 mg Tablet (NS) $–$$\n(Rasagiline not available in NUP)', 'Selegiline: 2.5–5 mg OD or BD; Rasagiline: 1 mg OM', 'Headache, dry mouth, neuropsychiatric disturbance, nausea, dizziness, insomnia. Rasagiline has significantly fewer side effects.', 'May be considered as first-line for younger PD patients with mild disease. Use as add-on when motor complications set in. For selegiline BD dosing: take with breakfast and lunch to avoid insomnia.'] },
            { cells: ['COMT Inhibitors — Not available in NUP:\nEntacapone (Comtan® 200 mg Tablet)\nStalevo® (Levodopa/Carbidopa/Entacapone 100/25/200 mg)', 'Entacapone: 200 mg with each dose of Levodopa, up to max 8 times daily (max 1600 mg/day)', 'Enhances L-dopa side effects. Orange urine discolouration.', 'Used to lengthen the ON period before the next dose of L-dopa is due. Additional ON time gained from each dose is around 15–45 min.'] },
            { cells: ['Anticholinergics:\nBenzhexol 2 mg Tablets (S1) $\n(Benztropine not available in NUP)', 'Benzhexol: 2 mg BD–TDS; Benztropine: 1–2 mg BD', 'Dry mouth, confusion, blurred vision, constipation.', 'May be used for tremor-dominant PD in younger patients. Anticholinergics do not significantly improve other features of parkinsonism. NOT to be used in elderly due to risk of cognitive decline and hallucinations.'] },
            { cells: ['Amantadine (Symmetrel® 100 mg Tablet) — Not available in NUP', 'Initial 100 mg OM; maintenance 100 mg OD–BD; max 400 mg/day in divided doses', 'Livedo reticularis, peripheral oedema, confusion, hallucinations.', 'May be used as add-on for treatment of Levodopa-induced dyskinesia. Caution in patients with renal impairment.'] },
          ],
        },
      ],
    },
    {
      title: 'Pharmacotherapeutic Management — Non-Motor Symptoms',
      blocks: [
        {
          type: 'list',
          items: [
            'Neuropsychiatric — Depression: Pramipexole has antidepressant effects. SSRIs may be considered for depression in PD without dementia. (Stop Selegiline when SSRI started — risk of serotonergic crisis.)',
            'Neuropsychiatric — Dementia: Donepezil or rivastigmine may be considered for PD patients with dementia.',
            'Neuropsychiatric — Psychosis: PD patients with severe psychosis should be referred to a psychiatrist; clozapine may be required (needs strict investigations/monitoring for leucopaenia). For milder cases, quetiapine is commonly used (not olanzapine).',
            'Autonomic — Orthostatic hypotension: Increase fluid and salt intake. Midodrine and fludrocortisone may be used. (Fludrocortisone side effects: hypertension, hypokalaemia, ankle oedema.) Midodrine is short-acting and may be better in patients with supine hypertension.',
            'Autonomic — GI: Constipation and reduced gastric motility — regular pre- and probiotics, lactulose or forlax is effective. Avoid prolonged use of senna, bisacodyl and fleet enema. Anorexia, nausea and vomiting from dopamine agonist therapy — domperidone may be considered with caution per MOH guidelines.',
            'Autonomic — Erectile dysfunction: May be treated with sildenafil (warn about side effects: headaches, transient visual effects, flushing, cardiac arrest and hypotension risk, priapism).',
          ],
        },
      ],
    },
    {
      title: 'Surgical Management',
      blocks: [
        {
          type: 'text',
          content:
            "Deep Brain Stimulation (DBS) of subthalamic nucleus or globus pallidus: involves placement of stimulating electrodes into the relevant nucleus to depolarize it. Electrodes connected to a pulse generator implanted subcutaneously below the clavicle, much like a cardiac pacemaker. Currently performed in Singapore at the National Neuroscience Institute.",
        },
      ],
    },
    {
      title: 'Ancillary Management',
      blocks: [
        {
          type: 'text',
          content:
            "Rehabilitation services comprising physical, occupational and speech therapy can help patients with gait difficulties, dysphonia, dysarthria or dysphagia. Refer to dieticians for dietary advice, MSWs or psychologists for counselling, physiotherapists for balance and strength training. As occupational and speech therapy services are not available in NUP, consider referring to Neurology and/or Rehabilitation Medicine if PD patients develop issues with daily functioning, oropharyngeal dysfunction, swallowing impairment or speech impairment.",
        },
        {
          type: 'table',
          headers: ['Problem', 'Support Service', 'Management'],
          rows: [
            { cells: ['General fatigue', 'Physical therapy', 'Exercise therapy'] },
            { cells: ['Gait difficulties / start hesitation / falls', 'Physical therapy', 'Gait training; strengthening exercises; visual, auditory and tactile cues; exercises to improve posture'] },
            { cells: ['Reduced pulmonary function', 'Physical therapy', 'Pulmonary and general exercises; exercises to improve posture'] },
            { cells: ['Difficulty with ADL (work, leisure, self-care)', 'Occupational therapy', 'Group occupational therapy; occupational aids; review of home/work environment'] },
            { cells: ['Dysphonia', 'Speech therapy', 'Lee Silverman Voice Treatment (LSVT); Pitch Limited Voice Treatment (PLVT)'] },
            { cells: ['Stuttering', 'Speech therapy', 'Prosody exercises; chorus speech; smooth speech; delayed auditory feedback'] },
            { cells: ['Tachyphemia and problems with prosody', 'Speech therapy', 'Prosody exercises; smooth speech'] },
            { cells: ['Dysarthria', 'Speech therapy', 'Lee Silverman Voice Treatment (LSVT)'] },
            { cells: ['Dysphagia', 'Speech therapy', 'Investigation and intervention (thickeners); may require feeding via NG tube or percutaneous endoscopic gastrostomy'] },
          ],
        },
      ],
    },
    {
      title: 'Clinical Quality — Good Practices',
      blocks: [
        {
          type: 'list',
          items: [
            '1. For every new drug prescribed for treatment of PD, check and document response to the therapy and occurrence of side effects.',
            '2. Antiparkinsonian medication should not be withdrawn abruptly or allowed to fail suddenly owing to poor absorption (e.g., gastroenteritis, abdominal surgery), to avoid the potential for neuroleptic malignant-like syndrome (Parkinsonism hyperpyrexia syndrome).',
            '3. Ask about activity level and recent falls. Promote physical activity.',
            '4. Look out for neuropsychiatric symptoms — depression, psychosis, dementia.',
            '5. Look out for autonomic dysfunction — orthostatic dizziness/hypotension; constipation, anorexia, nausea, vomiting; erectile dysfunction.',
            '6. For patients on clozapine for psychosis, monitor for leukopaenia.',
            '7. Look out for caregiver stress.',
          ],
        },
      ],
    },
    {
      title: 'Referral to Specialist',
      blocks: [
        {
          type: 'list',
          items: [
            '1. New diagnosis of PD — refer to neurologist if unsure of diagnosis or starting medication.',
            '2. Young-onset PD.',
            '3. Atypical Parkinsonian disorders.',
            '4. Patients with family history of PD.',
            '5. Patients who do not respond to levodopa or dopamine agonists.',
            '6. Patients with cognitive impairment or neuropsychiatric dysfunction.',
            '7. Motor complications (motor fluctuations and dyskinesias) not responding to medication adjustments.',
          ],
        },
      ],
    },
    {
      title: 'Special Situations — Fitness to Drive',
      blocks: [
        {
          type: 'list',
          items: [
            '1. If a medical concern is raised regarding the patient\'s fitness to drive, advise to stop driving and refer to neurologist for further assessment and a driving test.',
            '2. The patient is deemed unfit to drive if any of the following are of sufficient degree to interfere with safe driving: significant weakness; lack of coordination; involuntary movements; visual impairment.',
          ],
        },
      ],
    },
    {
      title: 'Recommended Care Components',
      blocks: [
        {
          type: 'table',
          headers: ['Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Review of Diagnosis', 'Annually', 'The diagnosis would be reviewed regularly and reassessed if there are atypical features (e.g., falls at presentation and early in disease course, poor response to levodopa, symmetry at onset, rapid progression to Hoehn & Yahr stage 3 in 3 years, lack of tremor or dysautonomia).'] },
            { cells: ['Review of Treatment', 'Annually', 'Review and discussion regarding medical and surgical treatment options, as well as need for rehabilitative therapies (physiotherapy, occupational therapy, speech therapy).'] },
            { cells: ['Review of Complications', 'Annually', 'Assessment for cognitive impairment, psychiatric disorders (depression, psychosis), autonomic dysfunction (constipation, incontinence, orthostatic hypotension), falls, sleep disorders, and medication-related side effects.'] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under the National Adult Immunisation Schedule (NAIS).'] },
          ],
        },
      ],
    },
    {
      title: 'Useful Links for Patients and Caregivers',
      blocks: [
        {
          type: 'list',
          items: [
            "The Parkinson's Disease Society (Singapore): www.parkinsonsingapore.com",
            'WE MOVE™ (Worldwide Education and Awareness Movement Disorders): www.wemove.org',
            'U.S. National Parkinson Foundation: www.parkinson.org',
          ],
        },
      ],
    },
  ],
};
