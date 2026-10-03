import { CpgDocument } from '../types';

export const allergicConjunctivitis: CpgDocument = {
  id: 'cpg-allergic-conjunctivitis',
  condition: 'Allergic Conjunctivitis',
  source: '02 NUP CPG - Allergic Conjunctivitis.pdf',
  reviewDate: 'Jan 2024. Next review: Jan 2029.',
  advisors: 'Drs Yuen Yew Sen / Lai Yien / Chris Lim (NUH Ophthalmology)',
  sections: [
    {
      heading: 'Management — Rule Out',
      blocks: [
        { type: 'list', items: [
          { text: 'Severe allergic reaction (shortness of breath, wheezing)' },
          { text: 'Other signs of atopy that require concurrent management (Eczema, allergic rhinitis)' },
        ]},
      ],
    },
    {
      heading: 'Prescribe — Topical Antihistamines / Mast Cell Stabilisers Eyedrops',
      blocks: [
        { type: 'list', items: [
          { text: 'Sodium Cromoglycate 2% — 1 drop QDS' },
          { text: 'Patanol (Olopatadine) 0.1% — 1 drop BD' },
        ]},
      ],
    },
    {
      heading: 'Prescribe — Lubricating Eyedrops',
      blocks: [
        { type: 'list', items: [
          { text: 'Artificial tears WITHOUT preservative 3 hourly PRN' },
          { text: 'Tears Naturale Free (formulary item)' },
          { text: 'Refresh Plus (not in formulary)' },
        ]},
      ],
    },
    {
      heading: 'Prescribe — Consider Treating Allergic Rhinitis',
      blocks: [
        { type: 'list', items: [
          { text: 'Intranasal Nasonex 2 puff OD' },
          { text: 'Intranasal Avamys 2 puff OD' },
        ]},
      ],
    },
    {
      heading: 'Prescribe — Consider Systemic Antihistamines (If Indicated)',
      blocks: [
        { type: 'list', items: [
          { text: 'PO Loratadine 10mg OD (Alternative 2nd Gen antihistamines: Cetirizine)' },
          { text: '*Avoid first-generation antihistamines to avoid its sedative and anticholinergic effects (e.g. Chlorpheniramine, Diphenhydramine)' },
        ]},
      ],
    },
    {
      heading: 'Prescribe — Avoid Topical Decongestants (Naphcon-A)',
      blocks: [
        { type: 'list', items: [
          { text: 'These medications do not act on allergic mediators, are frequently associated with burning and stinging on instillation, and prolonged use can be associated with rebound hyperaemia and conjunctival medicamentosa' },
        ]},
      ],
    },
    {
      heading: 'Patient Advice',
      blocks: [
        { type: 'list', items: [
          { text: 'Allergen avoidance (including environmental and dietary allergens)' },
          { text: 'Allergen-impermeable mattress and pillow covers, wash bed sheets and/or linen weekly with hot water' },
          { text: 'Avoid pets' },
          { text: 'Cold compresses' },
        ]},
      ],
    },
    {
      heading: 'Document (Copy and Paste into Clinical Notes)',
      blocks: [
        { type: 'list', items: [
          { text: 'Ordered medications' },
          { text: 'Advised to return if worsening itch, red eye, persistent blurring of vision' },
          { text: 'Advised against contact lens use' },
        ]},
      ],
    },
    {
      heading: 'Drug Prices (Outpatient Subsidized Adult, Jan 2024)',
      blocks: [
        { type: 'table', headers: ['Drug Name', 'Drug Price', 'Subsidy Status'], rows: [
          { 'Drug Name': 'Sodium Cromoglycate 2% Eye Drop 10mL', 'Drug Price': '$', 'Subsidy Status': 'NS' },
          { 'Drug Name': 'Olopatadine 0.1% Eye Drop 5mL', 'Drug Price': '$$', 'Subsidy Status': 'NS' },
          { 'Drug Name': 'Tears Naturale Free Eye Drop 0.8mL 32S', 'Drug Price': '$$', 'Subsidy Status': 'NS' },
          { 'Drug Name': 'Refresh Plus Eye Drops 0.4mL x 30', 'Drug Price': '$$', 'Subsidy Status': 'Non-formulary, available at retail' },
          { 'Drug Name': 'Mometasone Furoate 0.05% Nasal Spray 140D', 'Drug Price': '$', 'Subsidy Status': 'S2' },
          { 'Drug Name': 'Avamys (Fluticasone Furoate) Nasal Spray 120D', 'Drug Price': '$$$', 'Subsidy Status': 'NS' },
          { 'Drug Name': 'Loratadine 10mg Tab', 'Drug Price': '<$10 per month', 'Subsidy Status': 'S2' },
          { 'Drug Name': 'Cetirizine 10mg Tab', 'Drug Price': '<$5 per month', 'Subsidy Status': 'S2' },
        ]},
        { type: 'text', content: 'Cost guide: $ = <$10 per unit, $$ = $10–<$20 per unit, $$$ = $20–<$30 per unit. Amount payable depends on patient subsidy level and drug subsidy class (Standard Drug List S1 and S2, Non-Standard Drug NS). Unit prices before GST and accurate as of Jan 2024.' },
      ],
    },
  ],
};
