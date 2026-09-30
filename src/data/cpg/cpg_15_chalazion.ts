import { CpgDocument } from '../types';

export const chalazion: CpgDocument = {
  id: 'cpg-chalazion',
  condition: 'Chalazion',
  source: '15 NUP CPG - Chalazion.pdf',
  reviewDate: '02/2026. Next review date: 02/2029.',
  advisors: 'Dr Yuen Yew Sen (NUH Eye)',
  sections: [
    {
      heading: 'Management — Rule Out',
      blocks: [
        { type: 'list', items: [
          { text: 'Orbital cellulitis', children: [
            { text: 'Limitation in ocular motility' },
            { text: 'Severe drop in vision' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Prescribe',
      blocks: [
        { type: 'list', items: [
          { text: 'Stop contact lens use, if any' },
          { text: 'Warm compresses to eyelids BD' },
          { text: 'Eyelid scrubs — Lid Care, Blephagel (Discontinued in NUP)' },
          { text: 'Antibiotic ointment to lid margins', children: [
            { text: 'Chlortetracycline 1% eye ointment BD, OR' },
            { text: 'Fucithalmic (Fusidic acid 1%) eye ointment BD' },
          ]},
          { text: '(If preseptal cellulitis present) PO Augmentin 625mg Q8h x 7 days' },
        ]},
      ],
    },
    {
      heading: 'Patient Advice',
      blocks: [
        { type: 'list', items: [
          { text: 'Return if drop in vision or red eye develops' },
          { text: 'Problem may recur in the future' },
          { text: 'May drain externally' },
        ]},
      ],
    },
    {
      heading: 'Documentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Stop contact lens use, if any' },
          { text: 'Warm compress to eyelids twice daily (long term therapy)' },
          { text: 'Eyelid scrubs' },
          { text: 'Antibiotic ointment to lid margins as prescribed' },
          { text: 'Patient counselling done', children: [
            { text: 'Return if drop in vision or red eye develops' },
            { text: 'May drain externally' },
            { text: 'Problem may recur in the future' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Drug Prices',
      blocks: [
        { type: 'table', headers: ['Drug Name', 'Drug Price (Outpatient Subsidized Adult)', 'Subsidy Status'], rows: [
          { cells: ['I-Defence Daily Eyelid Wipes (20s)', '$$', 'NS'] },
          { cells: ['Chlortetracycline 1% Eye ointment 3.5G', '$', 'S1'] },
          { cells: ['Augmentin 625mg (Oral)', '$', 'S2'] },
        ]},
        { type: 'text', content: 'Cost: $ = < $10 per unit; $$ = $10–<$20 per unit; $$$ = $20–<$30 per unit. Amount payable depends on patient subsidy level and drug subsidy class (Standard Drug List S1 and S2, Non-Standard Drug NS). Prices shown are an estimate. Please contact pharmacy for accurate pricing.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 16 NUP CPG — Chronic Hepatitis B Carriers (Nov 2025)
// ---------------------------------------------------------------------------
const chronicHepatitisB: CpgDocument = {
};
