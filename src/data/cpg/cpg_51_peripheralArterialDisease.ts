import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 51 NUP CPG — Peripheral Arterial Disease – Lower Extremity (Mar 2025)
// ---------------------------------------------------------------------------
export const peripheralArterialDisease: CpgDocument = {
  id: 'cpg-peripheral-arterial-disease',
  condition: 'Peripheral Arterial Disease – Lower Extremity',
  source: '51 NUP CPG - Peripheral Arterial Disease – Lower Extremity.pdf',
  reviewDate: 'March 2025. Next review: March 2028.',
  advisors: 'Dr Peter Chang (Consultant, Department of Cardiology, National University Heart Centre, Singapore)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content:
            'Key Family Physicians: Dr Chen Jiawei / Dr Kwan Yew Seng. Updated in March 2025 by Dr Chen Jiawei. Next review date: March 2028. Peripheral Arterial Disease (PAD) is an occlusive disease of arteries such as the aorta, iliac and lower limb (LL) arteries. The major cause is peripheral atherosclerosis, while a less common cause is thromboembolic disease. The objective definition of PAD is a resting Ankle Brachial Index (ABI) < 0.9.',
        },
      ],
    },
    {
      heading: 'Risk Factors',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Diabetes mellitus (DM)' },
            { text: 'Hypertension' },
            { text: 'Hyperlipidaemia' },
            { text: 'Smoking' },
            { text: 'Hyperhomocysteinemia' },
            { text: 'Age more than 70 years (may consider age >50 if DM and smoking present)' },
            { text: 'Known atherosclerotic coronary, carotid or renal arterial disease' },
            { text: 'Note: Patients with PAD have the same CVD mortality risk as patients who have had AMI/CVA.' },
          ],
        },
      ],
    },
    {
      heading: 'Clinical Presentation',
      blocks: [
        {
          type: 'text',
          content:
            'Classic claudication is defined as muscle discomfort in the lower limbs that is reproduced by exercise and relieved by rest within 10 minutes. Only 10–35% of patients with PAD have classic claudication; others have atypical leg pain (40–50%) or are asymptomatic (20–50%).',
        },
        {
          type: 'text',
          content:
            "PVD Fontaine's Classification: Stage 1 – Asymptomatic; Stage 2A – Mild claudication (distance >200m); Stage 2B – Moderate to severe claudication (distance <200m); Stage 3 – Ischaemic rest pain; Stage 4 – Ulceration or gangrene. Stages 3 and 4 represent Critical Limb Ischaemia (CLI).",
        },
      ],
    },
    {
      heading: 'Assessment — Ankle-Brachial Index (ABI)',
      blocks: [
        {
          type: 'text',
          content:
            'ABI should be performed in symptomatic patients and those with abnormal examination (poor capillary refill >3 seconds, weak pulses, ischaemic-appearing foot, non-healing wounds).',
        },
        {
          type: 'table',
          headers: ['ABI Value', 'Interpretation'],
          rows: [
            { cells: ['0.90 or less', 'Abnormal'] },
            { cells: ['0.91 – 0.99', 'Borderline'] },
            { cells: ['1.00 – 1.40', 'Normal'] },
            { cells: ['Greater than 1.40', 'Non-compressible — use Toe-Brachial Index (TBI) instead'] },
          ],
        },
        {
          type: 'table',
          headers: ['TBI Value', 'Interpretation'],
          rows: [
            { cells: ['≥ 0.7', 'Normal'] },
            { cells: ['0.5 to 0.69', 'Peripheral Arterial Disease'] },
            { cells: ['≤ 0.49 or Toe Pressure < 30 mmHg', 'Severe PAD — urgent referral'] },
          ],
        },
      ],
    },
    {
      heading: 'Differential Diagnoses',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Other vascular causes: arterial embolism, dissection, trauma, thrombosis of aneurysm, Buerger\'s disease' },
            { text: 'Non-vascular "pseudoclaudication": spinal stenosis, OA hip or knee, lumbar radiculopathy, nocturnal leg cramp, diabetic neuropathic pain, venous claudication' },
          ],
        },
      ],
    },
    {
      heading: 'Management: 3-Pronged Approach',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: '1. Prevent progression of atherosclerosis & reduce CVD morbidity/mortality',
              children: [
                { text: 'Smoking cessation; DM: HbA1c <7%; Hypertension: <130/80mmHg (beta-blockers not contraindicated); Hyperlipidaemia: LDL <1.8 mmol/L or ≥50% reduction — statins recommended in all PAD patients' },
                { text: 'Anti-platelet: Aspirin 100 mg OM (or Clopidogrel 75 mg OM if aspirin not tolerated)' },
                { text: 'ACE-I/ARB recommended to reduce risk of major adverse cardiac events in PAD with hypertension' },
                { text: 'SGLT2 inhibitors and GLP-1 agonists effective at reducing major adverse cardiac events in PAD with DM' },
              ],
            },
            {
              text: '2. Improve functional status',
              children: [
                { text: 'Supervised exercise programme in hospitals' },
                { text: 'Cilostazol: effective to improve symptoms and increase walking distance in claudication (side effects: headache, diarrhoea, dizziness, palpitations)' },
                { text: 'Pentoxifylline: not effective for claudication treatment' },
              ],
            },
            {
              text: '3. Preserve limb',
              children: [
                { text: 'Regular surveillance; healthy foot behaviours (daily self-foot examination, wearing shoes and socks, avoidance of barefoot walking, proper footwear)' },
                { text: 'Timely referral for revascularisation procedure where needed' },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Indications for Referral',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Asymptomatic with absent/reduced pulses (DM: risk factor management; Non-DM: routine referral to vascular surgery)' },
            { text: 'Chronic symptomatic PAD with physical findings suggestive of ischaemia: direct access referral to vascular surgery' },
            { text: 'Lower limb ulceration or gangrene with absent/reduced pulses: refer to NUH Vascular Surgery DM Foot Hot Clinic' },
            { text: 'Acute limb ischaemia: referral to Emergency Department' },
            { text: 'Septic foot with or without pulses: referral to Emergency Department' },
            { text: 'Chronic limb-threatening ischaemia / rest pain: urgent referral' },
          ],
        },
      ],
    },
  ],
};
