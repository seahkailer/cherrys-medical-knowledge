import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 52 NUP CPG — Recurrent Dry Eyes (Contact Lens User) (Feb 2026)
// ---------------------------------------------------------------------------
export const dryEyesContactLens: CpgDocument = {
  id: 'cpg-dry-eyes-contact-lens',
  condition: 'Recurrent Dry Eyes (Contact Lens User)',
  source: '52 NUP CPG - Recurrent Dry Eyes (Contact Lens User).pdf',
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
      heading: 'Contact Lens Advice',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Reduce contact lens use to 6–8 hours per day or stop temporarily for a few weeks' },
            { text: 'Switch to daily disposables if possible' },
            { text: 'If insists on bi-weekly or monthly contact lens: suggest switching to Hydrogen Peroxide based cleaning solution (e.g. Clear Care®, Clear Care Plus®)' },
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
              text: 'Preservative-Free Lubricating eyedrops 1 drop in affected eye as needed',
              children: [
                { text: 'Tears Naturale Free ($15.54 per box of 32 single use vials of 0.8mL)' },
                { text: 'Refresh (not available in NUP)' },
              ],
            },
            {
              text: 'Eyelid scrubs',
              children: [
                { text: 'I-Defence Daily Eyelid Wipes ($5.14 per box of 20 wipes)' },
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
            { text: 'Preservative-Free Lubricants as prescribed' },
            { text: 'Contact lens advice given: daily disposables if possible; explore Hydrogen Peroxide based cleaning solutions; reduce duration to 6–8 hours per day' },
          ],
        },
      ],
    },
  ],
};
