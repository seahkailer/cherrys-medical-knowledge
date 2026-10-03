import { CpgDocument } from '../types';

export const psoriasis: CpgDocument = {
  id: 'cpg-psoriasis',
  condition: 'Psoriasis',
  source: '43 NUP CPG - Management of Psoriasis.pdf',
  reviewDate: 'Published March 2025.',
  advisors: 'Key FP: Dr Choong Siew Li. Specialist: Adj A/Prof Nisha Suyien Chandran (Senior Consultant, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Psoriasis is a chronic, relapsing and remitting, non-infectious inflammatory skin disease characterised by well-demarcated thick scaling erythematous plaques. It has a bimodal age of onset (16–22 years and 57–60 years) and affects both sexes equally. It is an immune-mediated disease with genetic predisposition. Distribution: usually extensor surfaces (elbows, knees), scalp, nails. Intertriginous areas (axilla, groin folds, natal cleft) can sometimes be involved.' },
      ],
    },
    {
      heading: 'Types of Psoriasis',
      blocks: [
        {
          type: 'table',
          headers: ['Type', 'Description', 'Management'],
          rows: [
            { cells: ['Plaque psoriasis', 'Most common type', 'See management section'] },
            { cells: ['Inverse psoriasis', 'Affects skin folds of the body', 'See management section'] },
            { cells: ['Guttate psoriasis', 'Acute eruption of fine-scaled, small papules', 'See management section'] },
            { cells: ['Pustular psoriasis — Localised (e.g. palmoplantar)', 'Pustules that may be surrounded by inflamed skin', 'Avoid irritants; topical therapies'] },
            { cells: ['Pustular psoriasis — Generalised (Erythrodermic psoriasis)', 'Acute/subacute onset of generalised erythema >90% of the body. Signs of haemodynamic instability, multiple comorbidities.', 'Refer ED to consider hospitalisation'] },
            { cells: ['Uncertain diagnosis / stable chronic', '—', 'Refer to dermatologist for assessment/biopsy'] },
          ],
        },
      ],
    },
    {
      heading: 'Differential Diagnoses',
      blocks: [
        {
          type: 'table',
          headers: ['Differential Diagnosis', 'Distinguishing Features'],
          rows: [
            { cells: ['Atopic dermatitis', 'Predominant pruritus; typical morphology and distribution (flexural lichenification in adults/older children; facial and extensor papules in infancy)'] },
            { cells: ['Lichen planus', 'Typically pruritic; violaceous papules with frequent mucosal involvement'] },
            { cells: ['Pityriasis rosea', 'Pink, oval papules and patches with "Christmas tree" configuration on trunk; presence of herald patch with sparing of face and distal extremities'] },
            { cells: ['Tinea corporis', 'Annular scaly patches and plaques with central clearance'] },
            { cells: ['Onychomycosis', 'No cutaneous/joint manifestations; nail clippings for microscopy and culture'] },
          ],
        },
      ],
    },
    {
      heading: 'Management — Non-Pharmacological',
      blocks: [
        { type: 'list', items: [
          { text: 'Assess impact of disease on patient and psychological distress.' },
          { text: 'Identify and avoid triggers.' },
          { text: 'Consider replacing potentially inducing or aggravating drugs where clinically appropriate (e.g. beta-blockers).' },
          { text: 'Avoid scratching/trauma.' },
          { text: 'Counsel on support groups (Psoriasis Association of Singapore).' },
          { text: 'Advise on weight management, reduce alcohol intake and smoking cessation to reduce cardiovascular risk factors.' },
          { text: 'Screen and manage comorbidities (lipid panel and fasting glucose) — psoriasis is associated with metabolic syndrome.' },
          { text: 'Look for nail or joint involvement.' },
        ]},
      ],
    },
    {
      heading: 'Management — Stable Chronic Plaque Psoriasis (Topical Therapy)',
      blocks: [
        { type: 'list', items: [
          { text: 'First line: Betamethasone 0.1% cream BD or Mometasone 0.1% cream OD for plaques on trunk and limbs — aim to taper to Betamethasone 0.05% cream BD when better. Betamethasone 0.025% cream BD for plaques on face and flexures. If scalp involved: Betamethasone 0.1% scalp lotion BD; Coal tar shampoo or cetrimide shampoo twice weekly (or more often). Coal tar 10% in aqueous cream OD/BD as emollient substitute. *Tar products may stain skin, hair, or clothing; patients may find odour unpleasant.' },
          { text: 'Second line: Ointment equivalents for thicker plaques (e.g. Betamethasone 0.1% ointment BD for trunk/limbs; Betamethasone 0.025% ointment BD for face/flexures). Betamethasone dipropionate 0.05% + Salicylic acid 3% ointment (Betacyclic) BD for resistant lesions — switch to lower-strength topical corticosteroid once lesions have flattened until complete resolution. *Topical Vitamin D3 analogue (Calcipotriol), phototherapy, systemic therapy (acitretin, methotrexate, cyclosporine, biologics) — not available in polyclinic.' },
        ]},
      ],
    },
    {
      heading: 'Specialist Consultation Criteria',
      blocks: [
        { type: 'list', items: [
          { text: 'Unsatisfactory response to topical treatments (steroids or coal tar).' },
          { text: 'Psoriasis affecting 3–10% BSA (1 palm ≈ 1% BSA).' },
          { text: 'Patients who may benefit from phototherapy or systemic therapy.' },
          { text: 'Pustular/Erythrodermic psoriasis.' },
          { text: 'Psoriatic arthropathy.' },
          { text: 'Uncertain diagnosis.' },
        ]},
      ],
    },
  ],
};
