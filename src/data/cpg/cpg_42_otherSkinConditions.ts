import { CpgDocument } from '../types';

export const otherSkinConditions: CpgDocument = {
  id: 'cpg-other-skin-conditions',
  condition: 'Other Common Skin Conditions',
  source: '42 NUP CPG - Management of Other Common Skin Conditions in Primary Care.pdf',
  reviewDate: 'Updated January 2026 by Dr Choong Siew Li. Next review: January 2029.',
  advisors: 'Key FP: Dr Choong Siew Li. Specialist: Adj A/Prof Nisha Suyien Chandran (Senior Consultant, NUH).',
  sections: [
    {
      heading: 'Urticaria',
      blocks: [
        { type: 'text', content: 'Urticaria is a skin reaction characterised by transient pruritic oedematous, erythematous lesions. Individual lesions typically last <24 hours with no post-inflammatory hyperpigmentation.' },
        { type: 'list', items: [
          { text: 'Patient Education: Eliminate cause (drugs/diet/physical environment).' },
          { text: 'Investigations: Consider FBC, ESR and TFT in chronic urticaria (>6 weeks duration).' },
          { text: 'H1-Antihistamines: First line — 2nd generation: Cetirizine or Loratadine 10mg BD (can increase up to 4× standard dose). Second line — switch to Fexofenadine 180mg BD or Bilastine 20mg OD/BD (*not in NUP; can increase up to 4× standard dose). Consider adding another 2nd generation H1-antihistamine. Consider adding 1st generation antihistamine at bedtime (Chlorpheniramine 4mg ON or Hydroxyzine 10–25mg ON). Treat for at least 2 weeks, or 2 months if chronic. Consult pharmacist for renal dose adjustments.' },
          { text: 'H2-Antihistamines (if H1 insufficient): Famotidine 20mg BD (renal dose adjustment required); or Cimetidine 400mg BD (*not in NUP). Weak evidence for H1 + H2 combination.' },
          { text: 'Oral Corticosteroids: Short course prednisolone (0.5–1mg/kg/day, max 60mg/day) × 3–7 days for severe acute urticaria.' },
          { text: 'Specialist Consultation: Dermatologist for refractory urticaria or suspected urticarial vasculitis (pain, purpura/pigmentation, lesions lasting >24 hours, atypical features). A&E for severe angioedema with airway compromise or haemodynamic instability.' },
        ]},
      ],
    },
    {
      heading: 'Alopecia',
      blocks: [
        { type: 'text', content: 'Alopecia = partial or complete absence of hair where it normally grows. Non-scarring: hair follicles preserved and visible. Scarring: follicles obliterated and destroyed.' },
        { type: 'text', content: 'Causes: (1) Disturbance of hair follicle — androgenetic alopecia, alopecia areata. (2) Disturbance of hair cycle — telogen effluvium. (3) Physical factors — trauma (pulling/pressure), traction (hair styling). (4) Skin disease — fungal infection, inflammatory skin disease causing scarring (discoid lupus, lichen planus). (5) Systemic factors — drugs, endocrine disorders. (6) Hair shaft abnormalities — genetic disease, hair treatment damage.' },
        { type: 'text', content: 'Consider laboratory investigations (FBC, Iron panel, TFT) for new onset diffuse non-scarring hair loss without clear cause.' },
        { type: 'list', items: [
          { text: 'Androgenetic Alopecia ("patterned" alopecia, frontal recession in males, crown/vertex thinning, family history): First line — OTC Minoxidil (2%, 3%, 5%) Solution BD (females: 2%; males: 5% recommended, switch to lower if irritation). Continue indefinitely. Hair wig. Specialist: Refer to dermatologist for finasteride (males)/spironolactone (females). Finasteride 1mg OD can be stepped down to primary care — monitor for sexual dysfunction, gynaecomastia, breast tenderness, prostate cancer. Cosmetic: hair transplant.' },
          { text: 'Alopecia Areata (localised non-scarring patchy alopecia): 1st line — Betamethasone 0.1% scalp lotion OM (start in primary care). Concurrently refer to dermatologist for intralesional corticosteroid or topical immunotherapy. Adjunct: Minoxidil (2–5%) Solution BD. Topical corticosteroids (less efficacious).' },
          { text: 'Telogen Effluvium (diffuse hair loss of relatively short duration): Detailed history for underlying cause (recent delivery, severe stress, recent febrile illness e.g. dengue). Spontaneously improves within 6–9 months. Treat underlying cause.' },
          { text: 'Scarring Alopecia: Refer to dermatologist for assessment and management. Treat existing scalp infections (bacterial/fungal/viral). Advise against tight curls if traction alopecia suspected.' },
        ]},
      ],
    },
    {
      heading: 'Common Acquired Pigmentary Disorders',
      blocks: [
        { type: 'list', items: [
          { text: 'Freckles: Encourage sun protection. No urgency to refer (cosmetic, not subsidised).' },
          { text: 'Post-inflammatory Hyperpigmentation (PIH): Usually follows skin inflammation (eczema, acne, injury) especially in darker phototypes (III–VI). PIH will take time to fade (months to a few years). Treat underlying cause of PIH (optimise eczema/acne treatment). Encourage emollients and regular sunscreen use.' },
          { text: 'Vitiligo: Depigmented macules/patches — focal, segmental, or mixed. Fluoresce under Wood\'s lamp. Assess severity and stability (stable = no increase in size and no new lesions in previous 3–6 months). Goals: stabilisation, repigmentation, prevention of recurrence. Manage expectations regarding efficacy. Can be left alone if patient does not want treatment. For stable localised disease: 1st line — topical corticosteroids (mometasone furoate 0.1% cream OD or betamethasone 0.025% cream OD/BD) for up to 2 months. Watch for cutaneous atrophy. If no repigmentation, consider referral to Dermatology for phototherapy.' },
        ]},
      ],
    },
    {
      heading: 'Drug Rashes and Allergy Testing',
      blocks: [
        {
          type: 'table',
          headers: ['Diagnosis', 'Clinical Features', 'Recommended Disposition'],
          rows: [
            { cells: ['Suspected Food Allergy', 'Food-induced trigger suspected or cannot be confidently excluded in patient with dermatosis', '1. Referral to allergist (NSC does not offer food provocation testing). 2. Whilst awaiting, advise patient to keep a food diary.'] },
            { cells: ['Angioedema / Anaphylaxis', 'Angioedema/anaphylaxis ± urticaria. Drug aetiology usually within 24 hours. Non-IgE reactions (NSAID intolerance, opioids, contrast media, ACE inhibitors/ARBs) can have latency of hours to short days.', '1. Stop culprit drug if applicable. 2. Life/airway-threatening presentations → ED immediately. 3. Refer Dermatologist if no obvious trigger. 4. If food trigger suspected, refer to allergist.'] },
            { cells: ['Exanthema', 'Acute generalised eruption (maculopapular, macular, papular etc.). Usually viral trigger or drug-induced (latency 4–14 days). WARNING SIGNS of evolving SCAR: mucositis, erosions/Nikolsky\'s sign, dusky target → EM-SJS-TEN (4–30 day latency); fever >38.5°C, purpura, facial/earlobe oedema, scaling, induration → DRESS/DHS (4–6 weeks up to 3 months); pustules (especially flexural) ± facial oedema → AGEP (1–4 day latency)', '1. Stop culprit drug if applicable. 2. If no warning signs: stop offending drug, treat symptomatically with moderate-high potency topical steroids, review in a few days (no need to refer at outset). 3. If warning signs present → refer to ED immediately. 4. If unsure of categorisation/management → refer to Dermatologist early.'] },
          ],
        },
      ],
    },
    {
      heading: 'Skin Growths, Tumours, Scars and Keloids',
      blocks: [
        { type: 'list', items: [
          { text: 'Skin Tags, Seborrheic Keratoses, Sebaceous Hyperplasia, Syringomas: No urgency to refer (cosmetic/non-medical). Refer as private patient to Dermatologist.' },
          { text: 'Suspected BCC, SCC, Melanoma, Bowen\'s Disease: Refer to Dermatologist for biopsy/excision and histology.' },
          { text: 'Keloids: First line — intralesional steroid (*not in NUP). Consider referral to Dermatologist.' },
          { text: 'Scars: Refer to Dermatology clinic if patient requests scar treatment (non-subsidised).' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 43 NUP CPG — Management of Psoriasis (Mar 2025)
// ---------------------------------------------------------------------------
const psoriasis: CpgDocument = {
};
