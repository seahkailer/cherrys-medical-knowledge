import { CpgDocument } from '../../types';

export const headacheGuidelines: CpgDocument = {
  id: 'cpg-headache-guidelines',
  condition: 'Headache: Migraine, Tension-type, MOH & Other Disorders',
  source: 'NUH-NUP Western Cluster Headache Network',
  reviewDate: '2018 (1st Edition)',
  advisors: [
    'Dr Jonathan JY Ong (NUH)',
    'Dr Chan Yee Cheun (NUH)',
    'Dr Ho King Hee',
    'Dr Ang Lai Lai (NUP)',
  ],
  sections: [
    {
      heading: 'Headache Classification (ICHD-3)',
      blocks: [
        {
          type: 'text',
          content:
            'The International Classification of Headache Disorders, 3rd Edition (2018) classifies headache disorders under 14 headings. Primary headache disorders are those not caused by another condition.',
        },
        {
          type: 'table',
          headers: ['Category', 'Diagnoses'],
          rows: [
            { cells: ['Primary Headaches', '1. Migraine (with and without aura)\n2. Tension-type headache (infrequent episodic, frequent episodic, chronic)\n3. Trigeminal autonomic cephalalgias (TACs): cluster headache, paroxysmal hemicrania, SUNCT/SUNA, hemicrania continua\n4. Other primary headaches'] },
            { cells: ['Secondary Headaches', '5. Trauma/injury to head or neck\n6. Cranial/cervical vascular disorder (incl. subarachnoid haemorrhage)\n7. Non-vascular intracranial disorder (incl. intracranial neoplasm)\n8. Substance or withdrawal (incl. medication-overuse headache)\n9. Infection\n10. Disorders of homeostasis (incl. arterial hypertension)\n11. Disorder of cranium, neck, eyes, ears, nose, sinuses (incl. cervicogenic headache, acute glaucoma)\n12. Psychiatric disorder'] },
            { cells: ['Neuralgias', '13. Trigeminal neuralgia and other painful cranial neuropathies\n14. Other headache disorders'] },
          ],
        },
      ],
    },
    {
      heading: 'Headache Diagnosis & Management Pathway',
      blocks: [
        {
          type: 'text',
          content:
            'All patients presenting with headache require a thorough history and examination to exclude secondary causes and red flags. Patients may have more than one type of headache disorder.',
        },
        {
          type: 'list',
          items: [
            {
              text: 'Urgent referral to ED (emergently) for:',
              subItems: [
                'Thunderclap onset',
                'Fever and meningism',
                'Papilloedema with or without focal signs or reduced consciousness',
                'Unexplained focal signs',
                'Acute glaucoma',
                'Temporal arteritis',
                'Relevant systemic illness',
              ],
            },
            {
              text: 'Early referral to appropriate specialty for:',
              subItems: [
                'Elderly patient: new headache with cognitive change',
                'Unusual headache precipitants',
                'Aggravation by neck movement; abnormal neck examination (consider cervicogenic headache)',
                'Jaw symptoms; abnormal jaw examination (consider temporomandibular joint disorder)',
                'Onset after age 50',
                'Unusual aura symptoms',
              ],
            },
            {
              text: 'Refer to Headache Service within 4 weeks for:',
              subItems: [
                'Chronic headache ≥15 days/month for >3 months with normal neurologic examination',
                'TAC (trigeminal autonomic cephalalgias)',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Approach to Headache History & Examination',
      blocks: [
        {
          type: 'text',
          content:
            'There are no diagnostic tests for primary headache disorders or medication-overuse headache. Invest in a good history and exclude red flags.',
        },
        {
          type: 'list',
          items: [
            {
              text: '7 steps to a successful outcome in headache history:',
              subItems: [
                '1. How many types of headaches? (take separate histories)',
                '2. Time questions: onset, frequency (days/month), duration (<3h, >4h, continuous), progression',
                '3. Character questions: intensity, quality, location, associated symptoms (nausea, vomiting, photophobia, autonomic features)',
                '4. Cause questions: precipitating/triggering factors, family history',
                '5. Response questions: what does patient do during headache; medications tried and response',
                '6. State of health between attacks: co-morbidities influencing treatment (insomnia, depression, anxiety, hypertension, asthma)',
                '7. Encourage use of headache diary',
              ],
            },
            {
              text: 'Key physical examination components:',
              subItems: [
                'Temperature and blood pressure',
                'Full neurological examination including mental status, cranial nerves, tone, power, reflexes, coordination, gait',
                'Visual fields and fundoscopy (look for papilloedema)',
                'Examination of head and neck: posture, range of movement, palpation for muscle tender points, neck stiffness',
                'Temporal artery palpation (tender/thickened suggests temporal arteritis)',
              ],
            },
          ],
        },
        {
          type: 'text',
          content:
            'Neuroimaging is NOT indicated in patients with recurrent headache with clinical features of migraine, normal neurologic examination findings, and no red flags. Neuroimaging, sinus or cervical spine X-rays, and EEGs are not recommended for routine assessment.',
        },
      ],
    },
    {
      heading: "Red Flags: 'SNOOP4' Sinister Features",
      blocks: [
        {
          type: 'table',
          headers: ['Letter', 'Feature', 'Details'],
          rows: [
            { cells: ['S', 'Systemic features / secondary risk factors', 'Fever, weight loss, elevated BP, cancer, HIV, immunosuppression'] },
            { cells: ['N', 'Neurological symptoms & signs', 'Confusion, reduced consciousness, personality change, visual disturbance, photophobia + nuchal rigidity + fever ± rash, prolonged or atypical aura (>1 hour or motor weakness)'] },
            { cells: ['O', 'Onset', 'First-ever headache; worst-ever / thunderclap (peaks within 1 min — exclude SAH); abrupt onset from sleep; new onset after head trauma; 3rd trimester or early postpartum; new aura in patient on combined oral contraceptives'] },
            { cells: ['O', 'Older patient (>50 years)', 'New onset or change in headache; signs/symptoms of temporal arteritis; acute glaucoma'] },
            { cells: ['P', 'Pattern change', 'Change in headache type or major change in frequency; progressive worsening over weeks'] },
            { cells: ['P', 'Precipitation', 'Valsalva manoeuvre, sexual activity, exercise/exertion, postural changes, cough'] },
            { cells: ['P', 'Postural aggravation', 'Worse standing, better lying (consider intracranial hypotension)'] },
            { cells: ['P', 'Papilloedema', 'With or without focal signs or reduced consciousness'] },
          ],
        },
      ],
    },
    {
      heading: 'Primary Headache Features Comparison',
      blocks: [
        {
          type: 'table',
          headers: ['Feature', 'Tension-type Headache', 'Migraine', 'Cluster Headache'],
          rows: [
            { cells: ['Pain location', 'Bilateral', 'Unilateral (2/3) or bilateral (1/3)', 'Strictly unilateral (around eye, temple)'] },
            { cells: ['Pain quality', 'Pressing/tightening (non-pulsating)', 'Pulsating/throbbing', 'Variable (sharp, boring, burning, throbbing)'] },
            { cells: ['Pain intensity', 'Mild or moderate', 'Moderate or severe', 'Severe or very severe'] },
            { cells: ['Effect on activities', 'Not aggravated by routine activities', 'Aggravated by or causes avoidance of routine activities', 'Restlessness or agitation'] },
            { cells: ['Other symptoms', 'None', 'Unusual sensitivity to light/sound; nausea/vomiting; aura (visual, sensory, speech disturbance) in minority', 'Ipsilateral cranial autonomic symptoms: red/watery eye, nasal congestion/rhinorrhoea, swollen eyelid, forehead sweating, constricted pupil/drooping eyelid'] },
            { cells: ['Duration', '30 min to 7 days', '4 to 72 hours', '15 to 180 minutes'] },
            { cells: ['Frequency (episodic)', '<15 days/month', '<15 days/month', '1 every other day to 8 per day with remission ≥3 months'] },
            { cells: ['Frequency (chronic)', '≥15 days/month for ≥3 months', '≥15 days/month for ≥3 months', '1 every other day to 8/day with remission <3 months in 12 months'] },
          ],
        },
      ],
    },
    {
      heading: 'Migraine: Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'ICHD-3 Diagnostic Criteria for Migraine without Aura:',
        },
        {
          type: 'list',
          items: [
            { text: 'A. At least 5 attacks fulfilling criteria B–D' },
            { text: 'B. Headache attacks lasting 4–72 hours (untreated or fully treated)' },
            {
              text: 'C. Headache has at least 2 of:',
              subItems: [
                'Unilateral location',
                'Pulsating quality',
                'Moderate or severe pain intensity',
                'Aggravation by or causing avoidance of routine physical activity',
              ],
            },
            {
              text: 'D. During headache, at least 1 of:',
              subItems: ['Nausea and/or vomiting', 'Photophobia and phonophobia'],
            },
            { text: 'E. Not attributed to another disorder' },
          ],
        },
        {
          type: 'text',
          content:
            'Migraine with Aura: Affects about one-third of migraineurs. Aura symptoms are progressive, last 5–60 minutes prior to headache. Visual aura (scintillating scotoma, fortification spectra, transient hemianopic disturbance) is most common. Other auras: sensory (unilateral paraesthesia of hand/arm/face), language/speech (dysphasia). Avoid prescribing combined oral contraceptive pill in patients with migraine with aura.',
        },
      ],
    },
    {
      heading: 'Migraine: Acute Management',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: 'Lifestyle advice (for all patients):',
              subItems: [
                'Regular meals and hydration',
                'Avoid excess alcohol and caffeine',
                'Regular sleep and exercise',
                'Avoid specific triggers',
                'Stress and anxiety management techniques',
                'Normalise BMI',
                'Encourage use of headache diary',
              ],
            },
            {
              text: 'Step 1 — Simple analgesics ± anti-emetic:',
              subItems: [
                'Ibuprofen 400–600 mg (up to 4 doses within 24 h)',
                'Naproxen sodium 550 mg (up to 2 doses within 24 h)',
                'Diclofenac potassium 50–100 mg (up to 100 mg within 24 h)',
                'Acetaminophen 1000 mg (up to 4000 mg within 24 h)',
                'Prokinetic anti-emetic: Metoclopramide 10 mg PRN or Domperidone 10 mg PRN',
                'Use fast-acting formulation (avoid slow-release)',
              ],
            },
            {
              text: 'Step 2 — Triptans ± anti-emetic (if Step 1 fails):',
              subItems: [
                'Sumatriptan 50 mg (max 200 mg/24 h)',
                'Zolmitriptan 2.5 mg (max 10 mg/24 h; minimum 2 h between doses)',
                'Take early in attack when headache is mild',
                'If not responding to one triptan, try an alternative',
                'Triptan + NSAID + antiemetic combination may be tried',
                'Avoid triptans during aura (appear ineffective)',
                'Contraindicated in uncontrolled HTN or cerebrovascular/cardiovascular disease',
              ],
            },
            { text: 'Step 3 — Review diagnosis and medication usage if Steps 1 and 2 fail' },
            {
              text: 'Step 4 — Combination therapy:',
              subItems: ['Sumatriptan 50 mg + Naproxen 550 mg is superior to either drug alone'],
            },
          ],
        },
        {
          type: 'text',
          content:
            'Avoid opioids/opiates (increase nausea and MOH risk). Limit triptans to <10 days/month to avoid MOH. All acute therapy should be combined with rest and sleep.',
        },
        {
          type: 'text',
          content:
            'Migraine in Pregnancy & Lactation: Paracetamol is safe throughout pregnancy. NSAIDs safe except in 3rd trimester. Metoclopramide or domperidone are unlikely to cause harm. During breastfeeding, ibuprofen, diclofenac, paracetamol and domperidone may be combined. Sumatriptan manufacturer recommends avoiding breastfeeding for 12 hours after treatment.',
        },
        {
          type: 'text',
          content:
            'Menstrual Migraine: Attacks occur regularly on day 1 of menstruation ±2 days for a minimum of 3 cycles. If predictable, prophylaxis options include: Naproxen 550 mg BD started 48 hours before expected attack; Frovatriptan 2.5 mg BD or Zolmitriptan 2.5 mg BD on days migraine is expected; or Oestradiol gel 1.5 mg transdermally daily for 7 days started 48 hours before expected attack.',
        },
      ],
    },
    {
      heading: 'Migraine: Preventive Treatment',
      blocks: [
        {
          type: 'text',
          content:
            'Indications for preventive treatment: recurrent attacks (>3 days/month) causing considerable disability despite optimal acute treatment; frequency approaching MOH risk levels; recurrent attacks with prolonged aura; contraindications to acute medications. MOH must first be excluded before starting preventive therapy.',
        },
        {
          type: 'text',
          content:
            'Set patient expectations: headache attacks will likely not be abolished completely; a ≥50% reduction in frequency is considered worthwhile. Benefit may take 6–8 weeks. Initiate at low dose, increase gradually every 2–3 weeks. Continue effective treatment for 6–12 months before gradual withdrawal. Monitor with headache diary.',
        },
        {
          type: 'table',
          headers: ['Medication', 'Starting Dose', 'Target Dose', 'Remarks'],
          rows: [
            { cells: ['Propranolol (1st line)', '20 mg BD', '40–120 mg BD', 'Avoid in asthma, heart failure, peripheral vascular disease, depression.'] },
            { cells: ['Metoprolol (1st line)', '50 mg BD', '50–100 mg BD', 'As above.'] },
            { cells: ['Amitriptyline (1st line)', '10 mg ON', '10–100 mg ON', 'Consider if depression, anxiety, insomnia or TTH. Common SE: dry mouth, sedation, dizziness, nausea.'] },
            { cells: ['Nortriptyline (1st line)', '10 mg ON', '10–100 mg ON', 'Alternative if amitriptyline effective but not tolerated.'] },
            { cells: ['Topiramate (2nd line)', '25 mg OD', '50 mg BD', 'Consider first line if overweight. Reduces efficacy of hormonal contraception. SE: paraesthesias, anorexia, weight loss, cognitive dysfunction, nephrolithiasis.'] },
            { cells: ['Candesartan (2nd line)', '8 mg OD', '16 mg OD', 'Few side effects; avoid in pregnancy.'] },
            { cells: ['Sodium valproate (others)', '250 mg OD', '750–1500 mg/day (divided BD)', 'Avoid in pregnancy. SE: nausea, weight gain, alopecia, hepatic effects.'] },
            { cells: ['Flunarizine (others)', '5–10 mg ON', '10 mg ON', 'Avoid in depression. SE: weight gain, drowsiness, extrapyramidal effects (rare).'] },
            { cells: ['Riboflavin (nutraceutical)', '400 mg OD', '400 mg OD', 'Limited efficacy evidence; few side effects.'] },
          ],
        },
      ],
    },
    {
      heading: 'Tension-type Headache (TTH) Management',
      blocks: [
        {
          type: 'text',
          content:
            'ICHD-3 Criteria for Episodic TTH: ≥10 episodes; lasting 30 min–7 days; ≥2 of: bilateral location, pressing/tightening quality, mild-moderate intensity, not aggravated by routine activity; no nausea/vomiting; no more than one of photophobia or phonophobia.',
        },
        {
          type: 'list',
          items: [
            {
              text: 'Step 1 — Acute Treatment (for episodic TTH <2 days/week):',
              subItems: [
                'Ibuprofen 400 mg',
                'Naproxen sodium 550 mg',
                'Ketoprofen 25–50 mg',
                'Acetaminophen 500–1000 mg',
                'Codeine and dihydrocodeine are NOT indicated; no role for stronger opioids',
              ],
            },
            {
              text: 'Step 2 — Consider alternative NSAID:',
              subItems: [
                'Naproxen 500 mg BD; may take regularly with PPI cover if headaches are severe',
              ],
            },
            {
              text: 'Step 3 — Preventive Treatment (for severe, frequent, persistent TTH):',
              subItems: [
                '1st line: Amitriptyline 10–100 mg/day (start 10 mg ON, increase slowly); or Nortriptyline 10–100 mg/day',
                '2nd line: Mirtazapine 30 mg ON; or Venlafaxine 150 mg OD',
                'Attempt withdrawal after 4–6 months of improvement',
                'Avoid beta-blockers and benzodiazepines; SSRIs not helpful unless underlying depression',
              ],
            },
          ],
        },
        {
          type: 'text',
          content:
            'Chronic TTH occurs on ≥15 days/month and may be daily. Physiotherapy is the treatment of choice for musculoskeletal symptoms.',
        },
      ],
    },
    {
      heading: 'Trigeminal Autonomic Cephalalgias (TACs)',
      blocks: [
        {
          type: 'text',
          content:
            'TACs are characterised by strictly unilateral headache with prominent ipsilateral cranial autonomic symptoms (conjunctival injection, hyperlacrimation, rhinorrhoea, nasal congestion, etc.). Refer these disorders early for specialist review at the Headache Service.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Cluster Headache', 'Paroxysmal Hemicrania', 'SUNCT/SUNA', 'Hemicrania Continua'],
          rows: [
            { cells: ['Gender (F:M)', '1:3.5–7', '2.1–2.4:1', '1:2:1', '2.4:1'] },
            { cells: ['Pain type', 'Stabbing, boring', 'Throbbing, boring, stabbing', 'Burning, stabbing, sharp', 'Background dull ache with throbbing/stabbing exacerbations'] },
            { cells: ['Pain severity', 'Excruciating', 'Excruciating', 'Moderate to severe', 'Moderate background; severe exacerbations'] },
            { cells: ['Attack duration', '15–180 min', '2–30 min', '5–240 seconds', 'Continuous with variable exacerbations'] },
            { cells: ['Attack frequency', '1/alternate day to 8/day', '1–40/day (>5/day for >50% of time)', '1/day to 30/hour', 'Continuous'] },
            { cells: ['Autonomic features', 'Yes', 'Yes', 'Yes', 'Yes'] },
            { cells: ['Alcohol trigger', 'Yes', 'Occasional', 'No', 'Yes'] },
          ],
        },
        {
          type: 'text',
          content:
            'Cluster Headache: Rare but most common TAC. Affects mostly men (M:F 6:1) in their 20s or older, often smokers. Bouts typically last 6–12 weeks, once every 1–2 years, often at the same time each year. Pain is strictly unilateral, intense, focused in or around one eye. Typically occurs daily at a similar time (often at night, 1–2 hours after falling asleep).',
        },
      ],
    },
    {
      heading: 'Medication-Overuse Headache (MOH)',
      blocks: [
        {
          type: 'text',
          content:
            'MOH: Headache occurring on ≥15 days/month as a consequence of regular overuse of acute headache medication for >3 months.',
        },
        {
          type: 'list',
          items: [
            { text: 'Paracetamol: ≥15 days/month' },
            { text: 'NSAIDs: ≥15 days/month' },
            { text: 'Triptans: ≥10 days/month' },
            { text: 'Opioids: ≥10 days/month' },
            { text: 'Combination analgesics (barbiturates, opioids, caffeine, codeine): ≥10 days/month — prime candidates for MOH' },
          ],
        },
        {
          type: 'text',
          content:
            'Preventive medication added to medication overuse is generally ineffective and can aggravate the condition. The only treatment of established MOH is withdrawal of the suspected medication(s).',
        },
        {
          type: 'list',
          items: [
            {
              text: 'Step 1 — Patient Education:',
              subItems: [
                'Explain that acute treatment overuse increases headache frequency',
                'Forewarn that withdrawal initially aggravates symptoms; plan ahead',
                'Sick leave for 1–2 weeks may be needed',
                'Maintain headache diary and good hydration during withdrawal',
              ],
            },
            {
              text: 'Step 2 — Withdraw the offending drug:',
              subItems: [
                'NSAIDs, paracetamol and triptans can be stopped abruptly',
                'Withdrawal headache (2–10 days) managed with Naproxen 250 mg TDS for 2 weeks, then 250 mg BD for 2 weeks, then 250 mg OD for 2 weeks',
                'Opioids or barbiturates must be withdrawn slowly under inpatient supervision — refer to Headache Service',
                'Triptans: improvement usually within 7–10 days; simple analgesics: 2–3 weeks; opioids/narcotics: 2–4 weeks',
              ],
            },
            {
              text: 'Step 3 — Refer to Headache Service if:',
              subItems: [
                'Not motivated or psychologically dependent on medication',
                'Failed attempts at withdrawal',
                'Headaches not improving despite medication withdrawal',
                'Withdrawal of opioids or barbiturates required',
                'Concomitant cardiovascular comorbidities need monitoring',
              ],
            },
          ],
        },
        {
          type: 'text',
          content:
            'Most patients with MOH revert to their original headache type (migraine or TTH) within 2 months of successful withdrawal. Overused medications may be reintroduced after 2 months with explicit restrictions on frequency of use. Relapse rate is ~40% within 5 years, most likely within the first year.',
        },
      ],
    },
    {
      heading: 'Medication Reference Card',
      blocks: [
        {
          type: 'table',
          headers: ['Class', 'Drug', 'Usual Dose', 'Max Daily Dose', 'Cautions', 'Adverse Effects'],
          rows: [
            { cells: ['Triptans', 'Sumatriptan', '50 mg', '200 mg', 'Uncontrolled HTN, cerebrovascular/cardiovascular disease; not combined with ergotamines; pregnancy not fully established (most experience)', 'Chest discomfort, nausea, paresthesias, drowsiness, flushing; limit to <10 days/month'] },
            { cells: ['Triptans', 'Zolmitriptan', '2.5 mg', '10 mg', 'As above', 'As above'] },
            { cells: ['Triptans', 'Frovatriptan', '2.5 mg', '5 mg', 'As above; use for menstrual migraine', 'As above'] },
            { cells: ['Analgesics', 'Acetaminophen', '1000 mg', '4000 mg', 'Severe liver dysfunction', 'Mild; safe in pregnancy'] },
            { cells: ['NSAIDs', 'Ibuprofen', '400–600 mg', 'Up to 4×/day', 'Asthma, peptic ulcer, avoid in 3rd trimester pregnancy; GI risk with SSRIs', 'GI disturbance, haemorrhagic effects'] },
            { cells: ['NSAIDs', 'Naproxen sodium', '550 mg', '1100 mg (BD)', 'As above', 'As above'] },
            { cells: ['NSAIDs', 'Diclofenac sodium', '50 mg', '150 mg/day', 'As above', 'As above'] },
            { cells: ['NSAIDs', 'Mefenamic acid', '250–500 mg', 'Up to 4×/day', 'As above', 'Preferred for menstrual migraine'] },
            { cells: ['Anti-emetics', 'Domperidone', '10 mg', '30 mg/day (TDS)', 'Possible GI obstruction', 'Dry mouth, abdominal cramps, hyperprolactinaemia; fewer CNS effects than metoclopramide'] },
            { cells: ['Anti-emetics', 'Metoclopramide', '10 mg', '30 mg/day (oral)', 'Risk of extrapyramidal effects; possible GI obstruction', 'Drowsiness, diarrhoea, hyperprolactinaemia, akathisia, tardive dyskinesia with long-term use'] },
            { cells: ['Anti-emetics', 'Prochlorperazine', '10 mg', '30 mg/day (q6–8h)', 'Risk of extrapyramidal effects; elderly', 'Anticholinergic effects, akathisia, sedation'] },
            { cells: ['TCAs', 'Amitriptyline / Nortriptyline', '10 mg ON, titrate by 10 mg/week', '50–100 mg/day', 'Heart block, CVD, urinary retention, uncontrolled glaucoma, prostate disease, mania', 'Weight gain, drowsiness, anticholinergic effects (dry mouth, constipation)'] },
            { cells: ['Anti-epileptics', 'Topiramate', '25 mg OD, titrate by 25 mg/week', '50 mg BD (up to 200 mg/day)', 'Kidney stones, kidney failure, angle-closure glaucoma; avoid in pregnancy', 'GI effects, renal calculi, paraesthesias, cognitive impairment, weight loss'] },
            { cells: ['Anti-epileptics', 'Divalproex sodium (valproate)', '250 mg OD, titrate', '750–1500 mg/day (divided BD)', 'Liver disease, bleeding disorders; avoid in pregnancy (teratogen)', 'Nausea, tremor, weight gain, alopecia, hepatic enzyme elevation'] },
            { cells: ['Antihypertensives', 'Candesartan', '8 mg OD, increase to 16 mg', '16 mg OD', 'Hypotension; avoid in pregnancy', 'Hypotension, dizziness'] },
            { cells: ['Antihypertensives', 'Flunarizine', '5–10 mg ON', '10 mg ON', "Depression, Parkinson's disease", 'Dizziness, weight gain, drowsiness, extrapyramidal effects (rare)'] },
            { cells: ['Vitamins', 'Riboflavin', '400 mg OD', '400 mg OD', 'Caution at high dose in pregnancy', 'Yellow-orange urine'] },
          ],
        },
      ],
    },
  ],
};
