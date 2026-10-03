import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 53 NUP CPG — Recurrent Dry Eyes (Non-Contact Lens User) (Feb 2026)
// ---------------------------------------------------------------------------
export const dryEyesNonContactLens: CpgDocument = {
  id: 'cpg-dry-eyes-non-contact-lens',
  condition: 'Recurrent Dry Eyes (Non-Contact Lens User)',
  source: '53 NUP CPG - Recurrent Dry Eyes (Non-Contact Lens User).pdf',
  reviewDate: '02/2026. Next review: 02/2029.',
  advisors: 'Dr Yuen Yew Sen (NUH Ophthalmology)',
  sections: [
    {
      heading: 'Rule Out',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Associated Sjogren syndrome (dry mouth) and other signs of autoimmune diseases e.g. Rheumatoid arthritis, SLE' },
            { text: 'Vitamin A deficiency (poor diet, previous Whipple\'s surgery)' },
            { text: 'Medications with anti-cholinergic effects (e.g. Tricyclic antidepressants)' },
            { text: 'Allergic component (signs of atopy: allergic rhinitis, eczema, asthma)' },
          ],
        },
      ],
    },
    {
      heading: 'Patient Advice',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Avoid sleeping under fan or aircon draft' },
            { text: 'Warm towel compress to eyelids Twice Daily' },
          ],
        },
      ],
    },
    {
      heading: 'Prescriptions',
      blocks: [
        {
          type: 'list',
          items: [
            {
              text: 'Lubricating eyedrops',
              children: [
                { text: 'Artificial tears (contains preservative) 1 drop 3–4 times a day: Hypromellose ($1.10/bottle SC, $2.20/bottle non-SC)' },
                { text: 'Preservative-Free artificial tears: Tears Naturale Free ($15.54/box of 32 vials); Refresh (not available in NUP)' },
              ],
            },
            {
              text: 'Gel or ointment for severe cases',
              children: [
                { text: 'Vidisic eye gel ($3.79/tube) TDS-PRN' },
                { text: 'Duratears eye ointment ($7.36/bottle) TDS-PRN — may cause mild blurring of vision and sticky discharge' },
              ],
            },
            {
              text: 'Eyelid scrubs',
              children: [
                { text: 'I-Defence Daily Eyelid Wipes ($5.14/box of 20 wipes)' },
                { text: 'Blephagel (discontinued in NUP)' },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Documentation Template',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'No signs of Sjogren syndrome and other autoimmune diseases' },
            { text: 'Instructed to avoid sleeping under fan, aircon draft' },
            { text: 'Instructed for warm towel compress to eyelids Twice Daily' },
            { text: 'Instructed for eyelid scrubs Twice Daily' },
            { text: 'Lubricants / gels as prescribed' },
          ],
        },
      ],
    },
  ],
};
