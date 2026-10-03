import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 57 NUP CPG — Acute Ischaemic Stroke and Transient Ischaemic Attack (Apr 2024)
// ---------------------------------------------------------------------------
export const transientIschaemicAttack: CpgDocument = {
  id: 'cpg-transient-ischaemic-attack',
  condition: 'Acute Ischaemic Stroke and Transient Ischaemic Attack (TIA)',
  source: '57 NUP CPG - Transient Ischaemic Attack.pdf',
  reviewDate: 'Updated April 2024 by Dr Tan Wei Beng. Next review: April 2026.',
  advisors: 'Dr Jing Mingxue (Associate Consultant, Department of Medicine, National University Hospital)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content:
            'Cerebrovascular disease accounts for more than 10,000 admissions in Singapore annually. About 25% recover with minor impairment, 40% experience moderate to severe impairments. TIA subsequent risk of stroke is around 10% in the first 90 days. Stroke was the fourth most common cause of death in Singapore (2020), accounting for 6.0% of all deaths. About 80% of annual strokes are ischaemic, 20% haemorrhagic.',
        },
        {
          type: 'text',
          content:
            'Definitions: Acute ischaemic stroke (AIS) — neurological dysfunction caused by focal cerebral, spinal, or retinal infarction. TIA — focal arterial ischaemia with transient symptoms (<24 hours) and without evidence of infarction by imaging.',
        },
      ],
    },
    {
      heading: 'Symptoms & Differential Diagnoses',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: 'FAST symptoms (sudden onset): Facial asymmetry, Arm/leg weakness (especially one side), Slurring of speech, Time to seek help. Also: loss of vision, double vision, unsteadiness, difficulty with language, vertigo with any of the above.',
            },
          ],
        },
        {
          type: 'list',
          items: [
            {
              text: 'Differential diagnoses:',
              children: [
                { text: 'Persistent deficits: intracerebral haemorrhage, brain tumour, brain abscess, non-ketotic hyperglycaemic stupor, multiple sclerosis, ADEM' },
                { text: 'Transient events: seizure/post-ictal paralysis, complicated migraine, syncope, hypoglycaemia, hepatic/renal/pulmonary encephalopathies, peripheral vestibulopathies' },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Initial Assessment in Primary Care',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '1. Check blood glucose for hypo/hyperglycaemia' },
            { text: '2. Check ECG for atrial fibrillation or myocardial infarction' },
            { text: '3. Activation of 995 system STRONGLY recommended for suspected stroke — minimises delay for potential interventions (thrombolysis within 4.5 hours, mechanical thrombectomy within 6 hours in eligible patients)' },
            { text: 'Referral to Emergency Department (ED) should be considered for all patients with suspected TIA or acute ischaemic stroke' },
            { text: 'Note: Empiric anti-platelet loading without brain imaging is NOT recommended (possibility of haemorrhagic infarct)' },
          ],
        },
      ],
    },
    {
      heading: 'Post-Stroke/TIA Step-Down Management',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Optimise medications: anti-thrombotics (anti-platelet with specified choice/duration, anticoagulation), lipid-lowering agents, anti-hypertensives' },
            { text: 'Monitor lipid profile, fasting glucose/HbA1c, GFR/ACR at appropriate intervals' },
            { text: 'Address modifiable risk factors:', children: [
              { text: 'Hypertension: maintain <140/90 mmHg, or <130/80 mmHg with concomitant CVD risk factors' },
              { text: 'Hyperlipidaemia: target LDL-c <1.8 mmol/L — moderate to high intensity lipid-lowering agents' },
              { text: 'Diabetes mellitus: maintain HbA1c <7%' },
              { text: 'Atrial fibrillation: discuss anticoagulation' },
              { text: 'Smoking cessation; exercise advice; weight management' },
            ]},
            { text: 'Influenza and pneumococcal vaccination as per NAIS' },
          ],
        },
      ],
    },
    {
      heading: 'Anti-Platelets & Anticoagulation',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Antiplatelet reduces risk of recurrent stroke, MI and vascular death by 23%' },
            { text: 'Short-course DAPT followed by long-term SAPT initiated at hospital discharge; beyond 90 days DAPT associated with increased bleeding with no added benefit (unless stent or other specific indications)' },
            { text: 'Aspirin 100 mg/day; Clopidogrel 75 mg/day (if aspirin intolerant or peptic ulcer)' },
            { text: 'Anticoagulation reduces risk of recurrent stroke after TIA/minor stroke in AF by approximately two-thirds' },
            { text: 'For DOAC: ensure appropriate dosing per renal status (creatinine clearance for rivaroxaban; age/weight/creatinine for apixaban)' },
            { text: 'Warfarin target INR: 2.0–3.0 (may be individualised by treating cardiologist)' },
          ],
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
            { cells: ['Thromboembolism Risk Assessment', 'As clinically indicated', 'Evaluate for AF, cardiac murmurs, fasting glucose and need for anti-thrombotic therapy'] },
            { cells: ['Rehabilitation Need Assessment', 'At baseline', ''] },
            { cells: ['Blood Pressure Measurement', 'Twice a year', ''] },
            { cells: ['Lipid Profile', 'Annually', 'Personalise targets by levels of risk'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers', 'Provide smoking cessation counselling'] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As per NAIS'] },
          ],
        },
      ],
    },
    {
      heading: 'Fitness to Drive After Stroke/TIA',
      blocks: [
        {
          type: 'text',
          content:
            'Group 1 (Class 1/2/3 licences) — TIA: single TIA allowed to drive once free for 1 month; multiple TIA: 6 months. Stroke: without residual disability may resume after 1 month; mild disability may undergo DARP >1 month after stroke if they pass, with neurologist review. Group 2 (vocational licences) — TIA: >6 months post-TIA (single) or >1 year (multiple/brainstem); requires neurologist clearance. Stroke: 1 year post, fully recovered, passed DARP, neurologist clearance.',
        },
      ],
    },
  ],
};
