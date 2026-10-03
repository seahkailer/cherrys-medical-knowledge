import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 60 NUP Updates to DA and Immunisation Schedule (Oct 2020)
// ---------------------------------------------------------------------------
export const daAndImmunisation: CpgDocument = {
  id: 'cpg-da-and-immunisation',
  condition: 'Developmental Assessment & Immunisation Schedule Updates',
  source: '60 NUP Updates to DA and Imm 7 Oct 071020 version to be shared.pdf',
  reviewDate: 'Slides prepared 7 October 2020 by Dr Poon Sher Lynn (Paediatrics SAG).',
  advisors: 'Dr Tan Mae Yue (Associate Consultant, Child Development Unit, KTP-NUCMI, NUH)',
  sections: [
    {
      heading: 'Changes to Developmental Assessment (DA) Schedule',
      blocks: [
        {
          type: 'table',
          headers: ['Age Range', 'Recommended Touchpoint', 'Change'],
          rows: [
            { cells: ['4–8 weeks', '4 weeks DA', 'Same'] },
            { cells: ['3–5 months', '4 months DA', 'Previously 3 months DA'] },
            { cells: ['6–12 months', '6 months — screen by nurse, refer to Dr if needed; 12 months DA', 'Previously 9 months DA by nurse; 12 months is NEW'] },
            { cells: ['15–22 months', '18 months DA', 'Same'] },
            { cells: ['24–36 months', '30 months DA', 'NEW — previously 3-year-old DA by nurse'] },
            { cells: ['4–5 years', '4 years DA', 'Same'] },
          ],
        },
        {
          type: 'text',
          content:
            'No more 9-month hearing screening by nurses. CDS and NCIS subsidies now extended to participating CHAS GPs. Any suspicions of hearing loss picked up through developmental screening questions (not startling to sounds, speech delays).',
        },
      ],
    },
    {
      heading: 'Changes to Immunisation Schedule (NCIS)',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '6-in-1 (inclusive of Hep B) to replace 5-in-1 vaccine at 2-months and 6-months. Note: infant born to Hep B +ve mother — Hep B (D2) remains at one month old' },
            { text: 'Addition of Varicella vaccines: separate MMR and varicella at 12 months; combined MMRV at 15 months' },
            { text: 'PCV synced with 6-in-1: Dose 1 at 4 months, Dose 2 at 6 months' },
            { text: 'Influenza (annual or per season) incorporated as part of NCIS from 6 months to 59 months' },
          ],
        },
      ],
    },
    {
      heading: 'Developmental Milestones by Age',
      blocks: [
        {
          type: 'table',
          headers: ['Age', 'Gross Motor', 'Fine Motor', 'Speech & Language', 'Social'],
          rows: [
            { cells: ['4 weeks', 'Equal movements; lifts head momentarily prone', 'Grasp reflex', 'Alerts to sound', 'Regards faces; spontaneous social smile'] },
            { cells: ['4 months', 'Prone head up 45°; props on forearms; no head lag', 'Unfists mostly; grasps objects', 'Vocalises when talked to', 'Turns to sound out of sight; follows object past midline'] },
            { cells: ['12 months', 'Crawls; sits unsupported; stands with support; pulls to stand', 'Transfer objects; finger-thumb grasp; bangs 2 cubes', 'Single syllables "ma", "da", "ba"; imitates speech sounds', 'Looks for fallen object; reacts to stranger; claps hands'] },
            { cells: ['18 months', 'Stoops to recover; walks well independently', 'Pincer grasp; scribbles; tower of 2 cubes', 'Says papa/mama specifically', 'Imitates household activities; indicates wants by gestures; understands simple instructions'] },
            { cells: ['30 months', 'Walks up and down steps; kicks ball forward', 'Tower of 4–6 cubes', 'Points to 2–4 pictures; names 2 pictures; two-word phrases', 'Removes clothing; imaginative play'] },
            { cells: ['4 years', 'Pedals tricycle', 'Draws straight line; copies circle', 'Knows name/age/sex; names a friend; speaks 4–5 word sentences', 'Bladder control by day; plays with friends; follows 3-step instructions'] },
          ],
        },
      ],
    },
    {
      heading: 'Red Flags by Domain',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: 'Gross Motor red flags:',
              children: [
                { text: 'Floppy baby' },
                { text: 'Head lag at 3 months; poor head control at 4 months' },
                { text: 'Unable to roll over; persistence of primitive reflexes beyond 6 months' },
                { text: 'Persistence of flexor hypertonia in lower limbs beyond 9 months' },
                { text: 'Not sitting independently with straight spine by 10 months' },
                { text: 'Not walking by 18 months; clumsiness, poor balance, asymmetrical signs' },
              ],
            },
            {
              text: 'Fine Motor/Vision red flags:',
              children: [
                { text: 'Does not fix and follow at 3 months; not reaching with hands at 6 months' },
                { text: 'Persistence of hand regard after 9 months; no index finger exploration by 12 months' },
                { text: 'Early hand preference before 12 months; no scribbling by 2 years' },
                { text: 'Does not copy line by 3 years, circle by 4 years; no tripod grasp by 4 years' },
              ],
            },
            {
              text: 'Speech & Language red flags:',
              children: [
                { text: 'No smile/vocalising by 3 months; no babbling by 10 months' },
                { text: 'Not responding to name by 12 months; no clear spontaneous words by 18 months' },
                { text: 'No understanding of common objects by 18 months; no word combinations by 30 months' },
                { text: 'No routine use of 2–3 word sentences by 3 years; no understanding of what/why questions at 4 years; echolalia' },
              ],
            },
            {
              text: 'Social/Play red flags:',
              children: [
                { text: 'No chuckling by 5 months; no interest in social games by 10 months' },
                { text: 'Lack of interest in toys by 18 months; absence of pretend play by 24 months' },
                { text: 'Preference for solitary play by 3–4 years; no eye contact; repetitive play; limited imaginative play' },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'When and Where to Refer',
      blocks: [
        {
          type: 'table',
          headers: ['Refer To', 'Indications'],
          rows: [
            { cells: ['General Paediatrics', 'GM delay with hyper/hypotonia; asymmetry between right/left side; regression of motor milestones at any age; regression in multiple domains; isolated abnormal OFC (disproportionate); abnormal growth with clinical concerns of medical/syndromic/genetic condition'] },
            { cells: ['Child Development Unit (CDU)', 'Language delay; language regression; autism red flags; other developmental concerns; delay in multiple domains. CDU @ JMC: 6665 2530/2531; CDU @ Keat Hong: 6769 4537/4637'] },
            { cells: ['Paediatric ENT', 'Universal Newborn Hearing Screening not done or abnormal; lack of response to sound'] },
            { cells: ['Paediatric Eye', 'Lack of response to visual stimuli'] },
          ],
        },
        {
          type: 'text',
          content:
            'Two key questions before referral: (1) Is the developmental delay restricted to specific domains or affects more than 1 domain (global)? (2) Is development delayed or regressing? Regression at any age is always a red flag requiring urgent referral to General Paediatrics.',
        },
      ],
    },
  ],
};
