import { CpgDocument } from '../types';

export const acuteRedEye: CpgDocument = {
  id: 'cpg-acute-red-eye',
  condition: 'Approach to Acute Red Eye',
  source: '07 NUP CPG - Approach to Acute Red Eye.pdf',
  reviewDate: '12/2022. Next review date: 6/2024.',
  advisors: 'Dr Yuen Yew Sen (NUH Ophthalmology)',
  sections: [
    {
      heading: 'Suggested Protocol',
      blocks: [
        { type: 'text', content: 'Based on need to rule out etiologies that may cause early, rapid visual loss if undiagnosed.' },
        { type: 'list', items: [
          { text: 'Torchlight exam of cornea — Cornea opacity (*Especially in contact lens users) → Infective Bacterial Keratitis; Hypopyon → Endophthalmitis' },
          { text: 'Pupil exam with torchlight — Fixed, mid-dilated pupil (unresponsive to light) + Absence of previous cataract surgery → Acute Angle Closure Glaucoma; Irregular pupil → Likely Anterior Uveitis' },
          { text: 'Check ocular motility — Ocular mobility limited → suspect Orbital Cellulitis' },
        ]},
      ],
    },
    {
      heading: 'Red Flags',
      blocks: [
        { type: 'list', items: [
          { text: 'SUDDEN VISUAL LOSS' },
          { text: 'NEUROLOGICAL SYMPTOMS (Diplopia, acute ptosis, visual field deficits)' },
          { text: 'TRAUMA (eye injury, foreign body entry)' },
          { text: 'POSTERIOR SEGMENT SYMPTOMS (Acute floaters/photopsia)' },
        ]},
      ],
    },
    {
      heading: 'Step 1 — Refer Stat / Same Day',
      blocks: [
        { type: 'text', content: 'Refer Stat to Emergency Department or to Ophthalmology Clinic (same day) if:' },
        { type: 'list', items: [
          { text: 'Any positive findings from the suggested protocol above, OR' },
          { text: 'Any cases with recent ocular intervention (surgery, intravitreal injections), OR' },
          { text: 'Any Red Flags (sudden visual loss, neurological symptoms, trauma, posterior segment symptoms)' },
        ]},
      ],
    },
    {
      heading: 'Step 2 — Treatment (in absence of all red flags)',
      blocks: [
        { type: 'text', content: 'In the absence of all of the above, one or more of the treatment options below can be instituted where appropriate:' },
        { type: 'list', items: [
          { text: 'Preservative-Free Lubricating eye drops 1 drop 3 HOURLY PRN', children: [
            { text: 'Refresh ($9.39 per box of 30 single-use vials of 0.4ml)' },
            { text: 'Tears Naturale Free (Available in NUP retail pharmacy but not in formulary)' },
          ]},
          { text: 'Topical antibiotic eye drops 1 drop QDS', children: [
            { text: 'Chloramphenicol for 5 days ($1.10 per bot for SC, $2.20 per bot for Non-SC) — first line for adult age group' },
            { text: 'Tobramycin for 7 days (Non-Std $4.00 per bot for SC/Non-SC) — first line for paediatric age group' },
            { text: 'Ciprofloxacin for 5 days ($5.27 per bot for SC, $10.54 per bot for Non-SC)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Step 3 & 4 — Follow-Up and Documentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Instruct the patient to return in a few days if not getting better or if getting worse.' },
          { text: 'Document: Clear cornea, no opacity seen. Pupils round, reactive to light. No hypopyon. EOM (extraocular movement) full.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 08 NUP CPG — Approach to Gastroenteritis in Primary Care (Jun 2025)
// ---------------------------------------------------------------------------
const gastroenteritis: CpgDocument = {
};
