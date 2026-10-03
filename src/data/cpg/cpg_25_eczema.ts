import { CpgDocument } from '../types';

export const eczema: CpgDocument = {
  id: 'eczema',
  condition: 'Eczema',
  source: 'NUP CPG',
  reviewDate: 'March 2025',
  advisors: 'Adj A/Prof Nisha Suyien Chandran (Senior Consultant, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Eczema or dermatitis is skin inflammation caused by internal or external stimuli. It tends to be a chronic skin condition affecting patients\' quality of life. Key challenges include variability in presentation across different ages, durations, and ethnic groups; unfamiliarity with treatment options; and complexity of patients\' ideas, concerns and expectations (ICE) regarding skin condition and treatment.' },
      ],
    },
    {
      heading: 'Diagnosis and Differential Diagnosis',
      blocks: [
        { type: 'text', content: 'Eczema is a clinical diagnosis. Itching or pruritus is a cardinal symptom. Lesion morphology varies by duration: acute (subcutaneous oedema, vesicles, erosions, weeping/crusting); chronic (thickened plaques, post-inflammatory pigmentation changes, lichenification, prurigo nodules); subacute (features of both). Superimposed bacterial infection (impetiginisation): weeping, yellow crusting, or signs of deeper infection. Note: erythema may be harder to appreciate in patients with darker skin; post-inflammatory hyperpigmentation is more common than hypopigmentation in Asian context.' },
        { type: 'text', content: 'Types of Eczema:' },
        { type: 'list', items: [
          { text: 'Atopic Dermatitis: Chronic relapsing-remitting condition starting in infancy or childhood. Exacerbated by environmental triggers (extremes of temperature, low humidity, house dust mites, contact allergens), irritants, infections, food. Associated with personal/family history of atopic disorders (asthma, allergic rhinitis, allergic conjunctivitis). Distribution: infantile — face, scalp, neck, extensor areas; childhood/adolescence — elbow, knee, wrist, neck flexures. Other features: keratosis pilaris, hyperlinear palms, ichthyosis vulgaris, atypical vascular responses.' },
          { text: 'Contact Dermatitis: Due to exogenous substances (household, occupational, iatrogenic). Types: Irritant Contact Dermatitis (ICD — local toxic effect) and Allergic Contact Dermatitis (ACD — immunologically mediated). Work-related contact dermatitis may be a reportable Occupational Skin Disease (Ministry of Manpower, Workplace Safety and Health Act).' },
          { text: 'Stasis Dermatitis: Affects dependent areas of lower limbs; associated with chronic venous insufficiency (CVI — dependent oedema, telangiectasias, varicose veins, lipodermatosclerosis, venous ulceration typically over medial malleolar region).' },
          { text: 'Asteatotic/Xerotic Eczema: Occurs in areas of dry skin, particularly extensor surfaces in older adults. Dry skin with pattern of cracks and superficial fissures (\'crazy-paving\').' },
          { text: 'Discoid/Nummular Eczema: Coin-shaped markedly pruritic subacute dermatitic plaques on upper and lower limbs. May occur without any trigger.' },
          { text: 'Seborrhoeic Dermatitis: Occurs in infants or adults; erythematous plaques with greasy scaling in scalp, eyebrows, ears, nasolabial folds. May be associated with HIV or neurological disorders (Parkinson\'s).' },
          { text: 'Dyshidrotic Eczema/Pompholyx: Firm vesicles on fingers and soles; intensely pruritic and relapsing; may be triggered by stress and contact dermatitis.' },
          { text: 'Lichen Simplex Chronicus/Prurigo Nodularis: Lichenified/nodular lesions due to chronic rubbing or scratching.' },
        ]},
      ],
    },
    {
      heading: 'Management of Eczema',
      blocks: [
        { type: 'text', content: 'The components of treatment are: (1) Identify and address triggers; (2) Improving the epidermal barrier; (3) Treat skin inflammation; (4) Treat pruritus; (5) Use of antimicrobials where appropriate; (6) Patient education.' },
      ],
    },
    {
      heading: 'Identify and Address Triggers',
      blocks: [
        { type: 'table', headers: ['Diagnosis', 'Possible Triggers', 'Strategies to Address Triggers'], rows: [
          { cells: ['Atopic Dermatitis', 'Environmental (temperature, humidity, house dust mites, allergens); irritants; infections (Staphylococcus aureus); food (small minority, especially children with severe/refractory disease)', 'House dust mite avoidance advice; treat superimposed bacterial infection; consider allergy testing referral for appropriate patients'] },
          { cells: ['Contact Dermatitis', 'Household, occupational, iatrogenic contactants (incl. traditional/Western medications)', 'Eliminate suspected contactants if possible or recommend PPE; consider allergy testing referral'] },
          { cells: ['Stasis Dermatitis', 'Obesity, prolonged standing, history of DVT', 'Elevate lower limbs at rest; compression stockings; referral to vascular surgery where appropriate'] },
          { cells: ['Asteatotic/Xerotic Eczema', 'Dry/cold weather', 'Avoid excessively warm baths; intensive use of emollients'] },
        ]},
      ],
    },
    {
      heading: 'Improving the Epidermal Barrier',
      blocks: [
        { type: 'list', items: [
          { text: 'Use mild soap-free or moisturising cleansers.' },
          { text: 'Avoid hot showers/baths of excessive duration. Prefer lukewarm or cold water.' },
          { text: 'Regular use of moisturisers: occlusives form a barrier on the skin surface; humectants bind water within the skin.' },
          { text: 'If excessive oozing/weeping, use compresses with astringent agents to dry up excessive fluid.' },
        ]},
        { type: 'table', headers: ['Type', 'Drug', 'Dose', 'Remarks'], rows: [
          { cells: ['Occlusive', 'Emulsifying Ointment', '1 application OM/BD', 'May also be used as a soap'] },
          { cells: ['Occlusive', 'White Soft Paraffin', '1 application BD/TDS', 'May be used on dry or chapped lips'] },
          { cells: ['Humectant', 'Aqueous Cream', '1 application BD/TDS', 'May also be used as soap substitute, cleanser, and makeup remover'] },
          { cells: ['Humectant', 'Urea cream', '1 application BD/TDS', 'Keratolytic effect useful for scaly lesions. Avoid in children; may cause mild stinging/itching.'] },
          { cells: ['Astringent', 'Potassium permanganate', '1 application as needed', 'Dilute 1:8 with water. Do not apply directly on skin. Use as compress over weepy/oozing skin 10–20 min, up to twice daily. May stain skin and clothing.'] },
        ]},
      ],
    },
    {
      heading: 'Treat Skin Inflammation',
      blocks: [
        { type: 'text', content: 'Topical Corticosteroids (TCS) are the mainstay of treating skin inflammation. Select appropriate vehicle (ointments for thicker localized lesions — deliver higher amount of steroid; creams for larger surfaces — less greasy). Select appropriate potency for the intensity of inflammation and area of skin.' },
        { type: 'table', headers: ['Potency', 'Drug(s)', 'Dose', 'Remarks'], rows: [
          { cells: ['Potent', 'Betamethasone valerate 0.1% cream/ointment; Mometasone furoate 0.1% cream', '1 application OD/BD; 1 application OD', 'Betamethasone valerate 0.1% ointment is the most potent.'] },
          { cells: ['Moderate', 'Betamethasone valerate 0.025%, 0.05% cream/ointment', '1 application OD/BD', ''] },
          { cells: ['Mild', 'Hydrocortisone 1% cream', '1 application OD/BD', 'Recommended for neonates/infants/young children; for mild lesions or lesions on the face.'] },
        ]},
        { type: 'table', headers: ['Drug', 'Dose', 'Remarks'], rows: [
          { cells: ['Hydrocortisone 1% with clioquinol 3%', '1 application OD/BD', 'Clioquinol has antifungal and antibacterial activity against gram-positive bacteria'] },
          { cells: ['Betamethasone 0.025%/0.1% with clioquinol 3%', '1 application OD/BD', ''] },
          { cells: ['Betamethasone dipropionate 0.05% and salicylic acid 3% ointment (Betacyclic)', '1 application OD/BD', 'Use limited to resistant lesions (lichenified AD, chronic plaque psoriasis, prurigo nodularis). Switch to lower strength TCS once lesions have flattened.'] },
        ]},
        { type: 'text', content: '1 fingertip unit (FTU) = amount squeezed from tip of adult finger to volar distal interphalangeal joint crease = sufficient for 2 adult palm-sizes of skin. TCS are safe if used for appropriate indications, at appropriate potencies, for appropriate durations. Adverse events (rare): skin atrophy and bruising, telangiectasias, acneiform eruptions, hypertrichosis, HPA axis suppression. Use of mild-to-moderate TCS in pregnancy has not been associated with adverse maternal or neonatal outcomes. Taper TCS dose (potency or frequency) once improved.' },
        { type: 'text', content: 'Topical Calcineurin Inhibitors (TCI): Non-steroidal anti-inflammatory agents, adjuncts to TCS. No side effect of skin atrophy. Suitable for sensitive areas (face, around eyes, neck, groin, skin flexures). Drug: Pimecrolimus 1% cream — 1 application OD/BD. For children ≥3 months. Should not be used in pregnancy. Adverse effects: local burning/pruritus/soreness/stinging (usually self-resolving). FDA black box warning: long-term safety not established; rare cases of malignancy reported.' },
      ],
    },
    {
      heading: 'Treat Pruritus and Use of Antimicrobials',
      blocks: [
        { type: 'text', content: 'Pruritus: Sedating antihistamines may be useful to decrease itching and permit sleep during flares. There is lack of high-quality evidence on efficacy of non-sedating antihistamines (cetirizine, loratadine).' },
        { type: 'text', content: 'Antimicrobials: Signs of bacterial superinfection (weepy or impetiginized lesions) should be treated with systemic antibiotics against gram-positive agents, particularly Staphylococcus aureus. Non-penicillin allergic: cloxacillin, cephalexin. Penicillin allergic: erythromycin, clindamycin. Topical antiseptics may be useful adjuncts.' },
      ],
    },
    {
      heading: 'Patient Education and Referrals',
      blocks: [
        { type: 'list', items: [
          { text: 'Patient Education (Atopic Dermatitis): Importance of regular moisturizer use; removal of triggers, especially House Dust Mites; appropriate use of TCS and FTU (address fear of topical corticosteroids upfront).' },
          { text: 'Indications for referral to a dermatologist: diagnostic uncertainty; skin condition does not respond to treatment; specialist-level treatments required (UV therapy, systemic immunosuppression, biologic agents).' },
          { text: 'Indications for Emergency Department referral: suspected eczema herpeticum (sudden eruption of vesicles on erosions, frequently with fever, malaise, lymphadenopathy); clinically unwell patient (febrile, toxic-appearing); extensive disease (erythroderma).' },
        ]},
        { type: 'text', content: 'House Dust Mite Avoidance Advice: Wash bedsheets and pillowcases in hot water ≥60°C weekly or fortnightly. Avoid beddings made of natural fibres; use synthetic fibres. Remove stuffed toys and thick curtains. Damp dust surfaces; avoid feather dusters. Clean air-conditioners regularly. Avoid carpets in the room. Consider mite-proof mattresses, pillow covers and blankets; use good quality vacuum cleaners or air purifiers.' },
      ],
    },
  ],
};
