import { CpgDocument } from '../types';

export const acneSkinInfections: CpgDocument = {
  id: 'cpg-acne-skin-infections',
  condition: 'Acne and Skin Infections',
  source: '35 NUP CPG - Management of Acne and Skin Infections.pdf',
  reviewDate: 'Updated January 2026 by Dr Choong Siew Li. Next review: January 2029.',
  advisors: 'Key FP: Dr Choong Siew Li. Specialist: Adj A/Prof Nisha Suyien Chandran (Senior Consultant, NUH).',
  sections: [
    {
      heading: 'Acne Vulgaris — Introduction',
      blocks: [
        { type: 'text', content: 'Acne vulgaris is a chronic inflammatory disease of the pilosebaceous unit characterised by the formation of comedones, erythematous papules, pustules, and/or nodules (pseudocysts) that can be accompanied by scarring.' },
      ],
    },
    {
      heading: 'Acne — Patient Education',
      blocks: [
        { type: 'list', items: [
          { text: 'Gentle soap-free pH-balanced cleanser' },
          { text: 'Non-comedogenic or oil-free cosmetics' },
          { text: 'Acne-specific moisturiser and sunscreen' },
          { text: 'Low glycaemic index diet and avoid dairy products' },
        ]},
      ],
    },
    {
      heading: 'Acne — Severity Assessment (Comprehensive Acne Severity Scale — CASS)',
      blocks: [
        {
          type: 'table',
          headers: ['Grade', 'Description'],
          rows: [
            { cells: ['Clear (0)', 'No lesions to barely noticeable ones; very few scattered comedones and papules'] },
            { cells: ['Almost clear (1)', 'Hardly visible from 2.5 metres away; a few scattered comedones and small papules; very few pustules'] },
            { cells: ['Mild (2)', 'Easily recognisable; <half of affected area involved; many comedones, papules and pustules'] },
            { cells: ['Moderate (3)', 'More than half of affected area involved; numerous comedones, papules and pustules'] },
            { cells: ['Severe (4)', 'Entire area involved; covered with comedones; numerous pustules and papules; few nodules and cysts'] },
            { cells: ['Very Severe (5)', 'Highly inflammatory acne covering the affected area, nodules, and cysts present'] },
          ],
        },
      ],
    },
    {
      heading: 'Acne — Treatment by Severity',
      blocks: [
        {
          type: 'table',
          headers: ['Disease Severity', 'Type of Therapy', 'Agent', 'Side Effect / Comment'],
          rows: [
            { cells: ['Mild', 'Topical', 'Morning: Benzoyl peroxide 5% gel OM OR Acne cream/lotion OM ± Clindamycin 1% solution/gel OD. Night: Adapalene 0.1% ON ($$).', 'Burning, erythema, stinging, pruritus. BP can bleach hair/clothes. Topical antibiotic monotherapy NOT recommended (resistance). Adapalene: irritant contact dermatitis, photosensitivity (use sunscreen). Strategies: every-other-day dosing, titrate upward slowly, use moisturiser, avoid astringents.'] },
            { cells: ['Moderate', 'Topical + Systemic', 'Same as mild PLUS Doxycycline (or Erythromycin if cannot use Doxy; second line Minocycline — not in NUP)', 'Oral antibiotics should not exceed 3–4 months. Not as single agent or with another topical antibiotic. Start Doxycycline 100mg BD OR Erythromycin 500mg BD; review 4–6 weeks; taper to Doxy 100mg OD or Erythromycin 250mg BD on improvement. Stop when inflammatory lesions clear. If no improvement despite oral antibiotics, consider OCP (females) or dermatology referral. Take with food. Doxy causes photosensitivity.'] },
            { cells: ['Severe', 'Systemic', 'Oral Isotretinoin (*not available in NUP)', 'Refer to Dermatologist'] },
          ],
        },
      ],
    },
    {
      heading: 'Acne — Differential Diagnosis',
      blocks: [
        {
          type: 'table',
          headers: ['Diagnosis', 'Important Factors', 'Location', 'Clinical Features'],
          rows: [
            { cells: ['Rosacea', 'Slow onset; aggravated by cold, alcohol, hot foods, stress; unknown aetiology', 'Central face', 'Erythema, telangiectasias, papules/pustules; can have rhinophyma or chronic eye inflammation'] },
            { cells: ['Perioral dermatitis', 'Sometimes associated with prolonged use of high-potency topical steroids', 'Chin, perioral and nasolabial folds', 'Papules, pustules, erythema confined to chin and nasolabial folds with sparing of area directly adjacent to vermillion border'] },
            { cells: ['Gram-negative folliculitis', 'Can occur with long-term antibiotic therapy', '(a) Nose and mouth areas (common); (b) Neck (uncommon)', '(a) Superficial pustules; (b) Large nodules'] },
            { cells: ['Steroid acne', 'Associated with oral corticosteroid therapy', 'Chest, back, upper arms, face', 'Small, monomorphic papules, pustules or closed comedones'] },
            { cells: ['Pityrosporum folliculitis', 'Increases in hot/humid weather or with increased sweating', 'Chest, back', 'Absence of comedones; history e.g. newly conscripted NS man'] },
          ],
        },
      ],
    },
    {
      heading: 'Acne — Specialist Consultation Criteria',
      blocks: [
        { type: 'list', items: [
          { text: 'Severe acne' },
          { text: 'Nodulocystic acne' },
          { text: 'Unsatisfactory response to treatment after 2 months of oral antibiotics' },
          { text: 'Acne scars' },
        ]},
      ],
    },
    {
      heading: 'Skin Infections — Viral',
      blocks: [
        { type: 'list', items: [
          { text: 'Varicella (Chicken Pox): Avoid scratching. Adults: Oral Acyclovir 800mg 5×/day for 1 week (renal adjustment for CKD). Paediatric dose chart for 5-day paediatric dosing. Medical leave 10–14 days. Refer severe/complicated cases and pregnant women.' },
          { text: 'Herpes Zoster: Uncomplicated — Acyclovir 800mg 5×/day for 1 week with adequate analgesia. Severe multidermatomal/disseminated zoster — refer ED. Post-herpetic neuralgia: WHO analgesia ladder; if persistent pain after 1 week, consider Gabapentin/Tricyclic antidepressants. Refer ophthalmologist if V1 trigeminal dermatomal involvement; refer neurologist if PHN not responsive to analgesia.' },
          { text: 'Hand Foot Mouth Disease: Supportive care, good hygiene. Medical leave 7–10 days. Refer A&E if poor oral intake. Return to school criteria: no fever, no oral ulcers, no blisters on hands/arms/feet/legs/buttocks.' },
          { text: 'Viral Warts: Topical Salicylic Acid Lotion ON up to 12 weeks (not for face or genital warts). Contraindications: children ≤2 years, DM, impaired circulation. Refer if: recalcitrant warts, unsatisfactory response after 2 months, periungual/subungual warts, facial warts, cutaneous horns/ulcerated lesions, immunosuppressed patients.' },
          { text: 'Viral Exanthem: Expectant management. Resolve in few days to 3 weeks.' },
          { text: 'Herpes Simplex: First line — PO Acyclovir 400mg TDS × 5–10 days (localised, e.g. cold sores). Second line — Valacyclovir (not in NUP).' },
        ]},
      ],
    },
    {
      heading: 'Skin Infections — Bacterial',
      blocks: [
        { type: 'list', items: [
          { text: 'Folliculitis, Furuncle, Impetigo: For non-infections, consider non-antibiotic alternatives: Chlorhexidine 1% cream; denatured alcohol 70%, potassium permanganate 0.1% solution, Chlorhexidine 0.05% solution. Mild/localised: Topical Fusidic acid 2% cream Q12H × 1 week OR Tetracycline 3% ointment Q12H × 1 week.' },
          { text: 'Abscess, Cellulitis: First line — Cephalexin 500mg Q8H × 5 days OR Cloxacillin 500mg Q6H × 5 days. Second line — Clindamycin 300–450mg Q6H × 5 days. Elevate affected area. For abscess, drainage recommended with hygiene and dressing advice. Consult pharmacist for renal adjustments.' },
        ]},
      ],
    },
    {
      heading: 'Skin Infections — Fungal',
      blocks: [
        { type: 'list', items: [
          { text: 'Tinea corporis/cruris/pedis: First line — Send for fungus smear. Topical Miconazole 2% cream BD or Clotrimazole 1% BD (apply on affected area + 2cm normal borders, continue 1 week after symptoms resolve). ± Ketoconazole 2% shampoo OD as wash (leave 5 min). ± Clotrimazole 1% powder BD. Second line (BSA >10% or failure): PO Itraconazole 200mg OD × 1 week or 100mg BD × 2 weeks — check LFT and drug interactions. Exclude DM/immunosuppression.' },
          { text: 'Tinea Versicolor: First line — Send fungus smear. Ketoconazole 2% shampoo as wash (leave 5 min). Ketoconazole 2% cream BD × 14 days. Other options: Selenium sulfide shampoo. Second line — PO Itraconazole 200mg OD × 5–7 days — check LFT and drug interactions. Exclude DM/immunosuppression.' },
          { text: 'Pityrosporum folliculitis: First line — Ketoconazole 2% shampoo EOD as wash (leave 5 min). Ketoconazole 2% cream BD × 4 weeks. Second line — PO Itraconazole 200mg OD × 1–3 weeks — check LFT and drug interactions.' },
          { text: 'Onychomycosis: First line — Clotrimazole 1% lotion BD to affected nails until clinical resolution (improvement may require months). Refer Dermatologist for oral antifungal (poor topical response, ≥4 nails affected — appropriate fungal cultures needed before oral therapy). Oral antifungals generally contraindicated in liver disease/congestive cardiac failure.' },
        ]},
      ],
    },
    {
      heading: 'Skin Infections — Parasitic',
      blocks: [
        { type: 'list', items: [
          { text: 'Scabies: Suspect in pruritic scaly papules especially involving web spaces, flexures, anogenital areas. Ask about nursing home or close contacts with similar symptoms. First line — Topical Malathion 0.5% (for ≥6 months) lotion for all suspected cases: apply all areas from neck down, wash off after 24 hours, repeat in 1 week (caution skin irritation). Treat all close contacts simultaneously. Machine wash and treat clothing/linen (≥60°C). Non-sedating antihistamines OM + sedating antihistamine ON. Watch for secondary bacterial infection. Post-scabietic itch: topical corticosteroids after adequate malathion treatment. Second line / children <6 months — Refer Dermatologist for Permethrin (not in NUP).' },
          { text: 'Lice (head/body/pubic): Diagnose by visualisation of adult lice or nits (check seams of clothing). First line — Malathion 0.5% lotion on hair/scalp/trunk/pubic area × 12 hours, single application (repeat in 7–9 days if live lice still visible). Not for infants <6 months. Head lice: wet combing every 3–4 days until no live louse found for 2 continuous weeks. Children may return to school after first application. Examine and treat close contacts. Treatment of clothing/linen same as scabies. Non-sedating antihistamine (day) + sedating antihistamine (night). Topical corticosteroids BD after eradication for symptom relief. Second line — Permethrin lotion (not in NUP).' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 36 NUP CPG — Acute and Recurrent Back Pain (Mar 2025)
// ---------------------------------------------------------------------------
const backPain: CpgDocument = {
};
