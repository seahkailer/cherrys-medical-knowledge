import { CpgDocument } from '../types';

export const epilepsy: CpgDocument = {
  id: 'epilepsy',
  condition: 'Epilepsy',
  source: '26 NUP CPG - Epilepsy.pdf',
  reviewDate: 'October 2027',
  advisors: 'Dr Tan Wei Beng / Dr Ang Lai Lai; Specialist: Dr Rahul Rathakrishnan (Senior Consultant, Division of Neurology, NUH)',
  sections: [
    {
      heading: 'Objectives',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Appreciate the different presentation of epilepsy.' },
            { text: 'Understand how a diagnosis is established.' },
            { text: 'Be familiar with the common medications used in the treatment of epilepsy and their associated side effects.' },
            { text: 'Special consideration — the woman patient during pregnancy and lactation.' },
            { text: 'Be familiar with issues related to fitness certification for patients with epilepsy.' },
            { text: 'Be prepared for the emergency management of a patient during seizure.' },
          ],
        },
      ],
    },
    {
      heading: 'Background',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Epilepsy is one of the more serious yet treatable neurological disorders, affecting over 50 million people worldwide.' },
            { text: 'An estimated 20 million new cases occur each year globally.' },
            { text: 'If properly treated, about 70–80% people with epilepsy could lead normal lives.' },
          ],
        },
      ],
    },
    {
      heading: 'Definition',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Epilepsy is a chronic neurological disorder characterized by recurrent unprovoked seizures. The seizures can be partial or generalised.' },
            { text: 'They are divided into: (a) Partial (focal) seizures – simple or complex; (b) Generalized seizure – absence (petit mal), tonic-clonic (grand mal), myoclonic, tonic, clonic, atonic.' },
          ],
        },
      ],
    },
    {
      heading: 'Symptoms and Signs (Not Diagnostic Criteria)',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Aura' },
            { text: 'Cyanosis' },
            { text: 'Loss of consciousness' },
            { text: 'Motor manifestations: generalised stiffness of body and limbs followed by jerking of limbs, tongue biting, urinary incontinence.' },
            { text: 'Post-ictal: confusion, muscle soreness, headaches.' },
          ],
        },
      ],
    },
    {
      heading: 'Differential Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'With loss of consciousness: syncope, cardiac arrhythmia, TIA, hypoglycaemia, panic attacks. With abnormal movement: movement disorders during sleep and when awake, paroxysmal choreoathetosis/dystonia/tremor, drop attacks and cataplexy.',
        },
      ],
    },
    {
      heading: 'Investigations (If Relevant)',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Full Blood Count' },
            { text: 'Electrolytes, Urea, Creatinine and Glucose' },
            { text: 'Serum calcium, magnesium' },
            { text: 'Liver function tests' },
            { text: 'Electrocardiogram' },
            { text: 'Electroencephalogram (EEG)' },
            { text: 'Imaging – CT / MRI head' },
          ],
        },
        {
          type: 'text',
          content: 'Notes on EEG: Often useful in diagnosis, classification and prognostication of epilepsy. Performed to support a diagnosis in adults where clinical history is suggestive. Should be performed soon after the attack when a helpful result is more likely.',
        },
      ],
    },
    {
      heading: 'Referral for Evaluation of First Seizure',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'A neurologist should evaluate all individuals with a first-onset suspected seizure.' },
            { text: 'This ensures accurate and early diagnosis, and initiation of appropriate therapy.' },
            { text: 'The primary care doctor can follow up thereafter.' },
          ],
        },
      ],
    },
    {
      heading: 'Anti-Epileptic Drugs (AED)',
      blocks: [
        {
          type: 'text',
          content: 'At NUP, any AED should not be initiated at NUP — therapy is only stepped down from neurologists in hospital. Any patient who lost follow up and requires reinitiation of medicine should be referred back to neurologist as a rule.',
        },
        {
          type: 'text',
          content: 'Consideration for AED: (a) The risk of seizure recurrence; (b) The benefits of being on AED. Commonly used AEDs: Phenytoin, carbamazepine, sodium valproate, phenobarbitone. Newer AEDs (gabapentin, lamotrigine, topiramate, levetiracetam) can be added on by the neurologist for suboptimal control.',
        },
        {
          type: 'text',
          content: 'Changing formulation/brand of AED is not recommended — different preparations may vary in bioavailability or pharmacokinetic profiles, increasing risk of reduced effect or excessive side effects.',
        },
        {
          type: 'text',
          content: 'Monitoring AED levels in primary care is unnecessary and not cost-effective. Hospital specialists order levels for: compliance/titration, assessment of AED toxicity, titration of phenytoin dose.',
        },
        {
          type: 'text',
          content: 'Breakthrough seizures: increased risk due to non-compliance, drug interactions, alcohol abuse, sleep deprivation, concurrent illness. Patients with frequent breakthrough seizures should be referred back to a neurologist.',
        },
        {
          type: 'text',
          content: 'Withdrawal of AED can be explored: at end of at least 2-year seizure-free period, after discussion of risks and benefits, via referral to specialist. Risk of relapse after withdrawal is approximately 25% at 1 year and 29% at 2 years.',
        },
      ],
    },
    {
      heading: 'Pharmacological Treatment',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Dosage (adults)', 'Max Dose', 'Adverse Drug Reactions', 'Contraindications / Precautions / Remarks'],
          rows: [
            { cells: ['Phenytoin (S1) (Dilantin®) — 30mg, 100mg capsules; 125mg/5ml syrup', 'Maintenance: 200–400 mg daily in 3–4 divided doses', '400 mg daily', 'CNS symptoms (drowsiness, dizziness, nystagmus, ataxia, confusion); nausea, vomiting, hepatotoxicity; gingival hyperplasia, hypertrichosis; hyperglycaemia, folic acid deficiency, peripheral neuropathy, osteomalacia; SLE, fever, rash', 'Toxicity: CNS symptoms, hyperglycaemia. Potentially fatal (rare): SJS/TEN, agranulocytosis, aplastic anaemia. Dosage adjustments needed when switching between capsules and suspension. Space at least 2 hours apart from enteral feeds.'] },
            { cells: ['Carbamazepine (S1) (Tegretol®) — 200mg, 200mg CR tablets', 'Maintenance: 800–1200 mg daily in divided doses', '1600–2400 mg daily', 'CNS symptoms (drowsiness, dizziness, ataxia); nausea, vomiting, constipation, hepatotoxicity; hyponatraemia/SIADH; hair loss, allergic skin reactions; blood disorders, leucopenia', 'Toxicity: CNS symptoms, AV blocks, arrhythmias. Potentially fatal (rare): SJS/TEN (1–3 months after initiation; ~10x higher risk in some Asian populations); agranulocytosis, aplastic anaemia, hepatic failure. Obtain HLA-B*1502 genotyping prior to initiation.'] },
            { cells: ['Sodium Valproate (S1) (Epilim®, Epilim Chrono®) — 200mg/5ml syrup; 200mg EC, 200/300/500mg Chrono tablets', 'Maintenance: 1000–2000 mg daily in 1–2 divided doses', '2500 mg daily', 'CNS symptoms (drowsiness, dizziness, headache, ataxia, confusion, amnesia, anxiety, depression); GI disturbances, hepatotoxicity, hyperammonaemia; transient hair loss, weight gain, amenorrhoea, gynaecomastia; vasculitis, thrombocytopenia', 'Toxicity: CNS symptoms. Potentially fatal (case reports): pancreatitis, severe hypersensitivity reactions with organ dysfunction.'] },
            { cells: ['Phenobarbitone (S1) — 10mg, 60mg tablets', '60–250 mg daily at night', '—', 'CNS depression or paradoxical excitation, drowsiness, insomnia, nightmares, impaired judgment, hyperkinesia, ataxia, hallucinations; nausea, vomiting, constipation; hypotension, bradycardia, syncope; agranulocytosis, thrombocytopenia, megaloblastic anaemia', 'Toxicity: CNS symptoms, respiratory depression, tachycardia/bradycardia, hypotension. Potentially fatal (rare): severe cutaneous adverse reactions 1–2 months after initiation.'] },
            { cells: ['Gabapentin (S2) — 100mg, 300mg tablets', '300–800 mg tds', '—', 'CNS depression, drowsiness, dizziness, ataxia, mood changes; peripheral oedema, weight gain', 'Exclusively (100%) cleared renally.'] },
            { cells: ['Topiramate (S2) — 25mg, 50mg, 100mg tablets (not available at NUP)', '50–200 mg bd', '—', 'CNS symptoms (drowsiness, dizziness, cognitive dysfunction, word-finding difficulty, mood changes); metabolic acidosis, nephrolithiasis, angle-closure glaucoma, anorexia, weight loss, oligohidrosis', '—'] },
            { cells: ['Levetiracetam (S2) — 500mg tablets', '500–1500 mg bd', '—', 'CNS symptoms (drowsiness, dizziness, fatigue, headache, irritability, aggression); increased BP', 'Potentially fatal (rare): severe cutaneous adverse reactions 1–2 months after initiation.'] },
          ],
        },
      ],
    },
    {
      heading: 'Advice to Patients and Care Givers',
      blocks: [
        {
          type: 'text',
          content: 'Seizure precautions — situations with increased risk: non-compliance to antiepileptic medication, drug interactions, alcohol misuse, sleep deprivation, concurrent illness.',
        },
        {
          type: 'text',
          content: 'Seizure first-aid: (1) Place patient in recovery position or on his/her side. (2) Remove surrounding objects that may harm the patient. (3) Do not place any object in the patient\'s mouth. (4) Call for an ambulance if injury occurs, seizure lasts >5 minutes, or seizures cluster without return to baseline.',
        },
        {
          type: 'text',
          content: 'Home and workplace safety: minimise exposure to open fires and sharp instruments; refrain from extended baths or locking toilet doors; refrain from swimming alone; heavy machinery operation is discouraged.',
        },
      ],
    },
    {
      heading: 'Women, Pregnancy and Lactation',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Women with epilepsy should be referred to specialist care for preconception counselling and follow-up if pregnant.' },
            { text: 'Monotherapy at the lowest AED dose to control seizures is recommended where possible.' },
            { text: 'Folic acid 5 mg per day should be given to women on AED from pre-conception till the first trimester of pregnancy to prevent neural tube defects.' },
            { text: 'AED is not a contraindication to breastfeeding. Women should be encouraged to breastfeed after discussion with their neurologist.' },
          ],
        },
      ],
    },
    {
      heading: 'Fitness Certification',
      blocks: [
        {
          type: 'text',
          content: 'Pre-employment medical examination: office-based and sedentary jobs pose no increased risk. Occupations that put the patient at risk during a seizure (e.g. operating heavy machinery, working at heights) are not suitable. Refer to neurologist, designated factory doctor (DFD), or MMed(OM) for pre-employment assessment in hazardous occupations.',
        },
        {
          type: 'text',
          content: 'Assessment for fitness for physical activities: physical activities for stable patients should not be restricted unless they pose a danger. Activities involving heights, water, or aggressive physical contact should be avoided.',
        },
        {
          type: 'text',
          content: 'Driving: the current Road Traffic Act may prohibit individuals with epilepsy from driving in Singapore. Individuals must declare epilepsy when applying for a driving licence and must inform authorities if they develop epilepsy after obtaining a licence.',
        },
      ],
    },
    {
      heading: 'Emergency Treatment of Seizures',
      blocks: [
        {
          type: 'text',
          content: 'Protect the patient: remove hazards from immediate surroundings; protect from falling; position on their side with head in neutral inline position; protect head but do not restrain.',
        },
        {
          type: 'text',
          content: 'Initial assessment and management: establish ABC and administer high-concentration oxygen; check for hypoglycaemia; observe and record the pattern and duration of seizures; do not force anything into the person\'s mouth.',
        },
        {
          type: 'text',
          content: 'Emergency pharmacotherapy: required if seizures last ≥5 minutes or recur >3 times/hour. Initial dose: 5–10 mg diazepam IV or rectally. If no response, same dose can be repeated after 10 minutes. Monitor pulse rate, BP, respiratory rate, O₂ saturation closely.',
        },
        {
          type: 'text',
          content: 'Post-treatment: patient should be sent to the Emergency Department for further treatment and evaluation.',
        },
      ],
    },
    {
      heading: 'Living with Epilepsy',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Many people diagnosed and treated for epilepsy are able to live full, active lives and many live seizure-free if they take medications on schedule.' },
            { text: 'Even individuals with uncontrolled seizures can make lifestyle adjustments to allow a reasonable lifestyle.' },
            { text: 'Resources: Epilepsy Foundation (epilepsy.com), Epilepsy Institute (epilepsyinstitute.org), American Academy of Neurology (aan.com).' },
          ],
        },
      ],
    },
    {
      heading: 'Recommended Care Components for Epilepsy',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Components', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Seizure Frequency', 'Annually', ''] },
            { cells: ['Seizure Type', 'Annually', ''] },
            { cells: ['Seizure Free Duration', 'Annually', ''] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under the National Adult Immunisation Schedule (NAIS) and National Childhood Immunisation Schedule (NCIS)'] },
          ],
        },
      ],
    },
  ],
};
