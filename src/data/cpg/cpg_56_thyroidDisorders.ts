import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 56 NUP CPG — Thyroid Disorders (Dec 2023)
// ---------------------------------------------------------------------------
export const thyroidDisorders: CpgDocument = {
  id: 'cpg-thyroid-disorders',
  condition: 'Thyroid Disorders',
  source: '56 NUP CPG - Thyroid Disorders.pdf',
  reviewDate: 'Reviewed and updated December 2023 by Dr Cheah Ming Hann.',
  advisors: 'Dr Khoo Chin Meng (Senior Consultant, Division of Medicine, National University Hospital)',
  sections: [
    {
      heading: 'Hypothyroidism — Introduction',
      blocks: [
        {
          type: 'text',
          content:
            'Prevalence of overt hypothyroidism: 0.1–2%. Subclinical hypothyroidism: 4–10% of adults. Hypothyroidism is 5–8× more common in women than men. Common causes: post-radioiodine, post-thyroidectomy, over-treated thyrotoxicosis, Hashimoto\'s disease (31–60%), drugs (lithium, amiodarone), central hypothyroidism. Primary thyroid disease accounts for 95% of cases.',
        },
        {
          type: 'text',
          content:
            'Hashimoto\'s Thyroiditis: bilateral goitre (firm, rubbery), positive anti-TPO and/or anti-TG antibodies, may present as postnatal depression, associated with DM, pernicious anaemia, vitiligo, Addison\'s disease.',
        },
      ],
    },
    {
      heading: 'Hypothyroidism — Symptoms, Diagnosis & Goals',
      blocks: [
        {
          type: 'text',
          content:
            'Symptoms: lethargy, cold intolerance, depression symptoms, memory/mental impairment, hoarse voice, dry skin, puffy face, hair loss, weight gain, constipation, paraesthesia, menorrhagia, erectile dysfunction. Diagnosis relies on TFT (free T4 and TSH).',
        },
        {
          type: 'text',
          content:
            'Goals of therapy: (1) Ameliorate symptoms; (2) Normalise TSH; (3) Reduce goitre; (4) Avoid overtreatment (iatrogenic thyrotoxicosis). Aim to keep serum TSH within normal reference range.',
        },
      ],
    },
    {
      heading: 'Hypothyroidism — L-thyroxine Treatment',
      blocks: [
        {
          type: 'text',
          content:
            'Average replacement dose: 1.6 mcg/kg lean body weight. Start low and titrate gradually (increase 25 mcg every 3–4 weeks) for elderly >60 years, coronary heart disease, or mild hypothyroidism. Full replacement dose can be given upfront for young patients without coronary disease.',
        },
        {
          type: 'text',
          content:
            'Starting dose: 12.5–25 mcg OM for elderly/coronary heart disease; 25–50 mcg OM for adults without coronary heart disease. Repeat TFT in 6–8 weeks. Take on empty stomach with plain water, 60 minutes before breakfast.',
        },
        {
          type: 'table',
          headers: ['TSH Result', 'Action'],
          rows: [
            { cells: ['High', 'Check compliance; exclude drug interactions (sucralfate, calcium, iron, PPIs); if compliant, increase dose by 12.5–25 mcg each visit; repeat TFT in 6–8 weeks'] },
            { cells: ['Low', 'Over-replacement; decrease dose; may use alternating doses (e.g. 50/75 mcg EOD); repeat TFT in 6–8 weeks'] },
            { cells: ['Normal', 'Maintenance dose achieved; follow up 6 months then yearly TFT; stable patients with 2 normal TFTs ≥6 months apart can be monitored yearly'] },
          ],
        },
        {
          type: 'list',
          items: [
            { text: 'Subclinical Hypothyroidism: treat if TSH >10 mU/L; individualize if TSH 4.5–10 mU/L; treatment generally given with positive anti-TPO, goitre, strong family history, or infertility' },
            { text: 'Post-thyroidectomy cancer: if metastatic/invasive, aim TSH <0.01 mU/L; other cancers aim TSH 0.05–0.5 mU/L' },
            { text: 'Myxoedema coma: endocrine emergency — refer ED urgently' },
          ],
        },
      ],
    },
    {
      heading: 'Hypothyroidism — Referrals',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Endocrinology: children/infants, difficult to render euthyroid, pregnant patients (direct access within 2 weeks), suspicion of secondary hypothyroidism' },
            { text: 'Cardiology: patients with cardiac disease' },
            { text: 'Endocrine Surgery: enlarging nodule' },
            { text: 'Emergency Department: severely hypothyroid patients with impending myxoedema coma (significant bradycardia, signs of cardiac failure)' },
          ],
        },
      ],
    },
    {
      heading: 'Hyperthyroidism — Introduction & Causes',
      blocks: [
        {
          type: 'text',
          content:
            "Hyperthyroidism is more common in women than men (5:1 ratio). Overall prevalence ~1.3%, increases to 4–5% in older women. More common in smokers. Graves' disease is commonest cause; toxic nodular goitre more common in older population.",
        },
        {
          type: 'table',
          headers: ['Feature', 'Toxic Nodular Goitre', "Graves' Disease"],
          rows: [
            { cells: ['Age', 'Usually older >50 years', 'Usually younger <40 years'] },
            { cells: ['Gland appearance', 'Nodular (asymmetrical)', 'Diffuse (symmetrical)'] },
            { cells: ['Ophthalmopathy', 'No Graves\' ophthalmopathy', "Graves' ophthalmopathy present"] },
            { cells: ['Autoimmune association', 'Uncommon', 'Common with other autoimmune conditions'] },
          ],
        },
      ],
    },
    {
      heading: 'Hyperthyroidism — Symptoms & Management',
      blocks: [
        {
          type: 'text',
          content:
            'Symptoms: palpitations, nervousness, heat intolerance, weight loss with good appetite, insomnia, frequent bowel movements, dyspnoea, fatigue, decreased menstrual flow. Signs: tremors, thyroid enlargement, eye signs (lid retraction, Graves ophthalmopathy), AF, tachycardia, proximal muscle weakness.',
        },
        {
          type: 'list',
          items: [
            { text: 'If thyrotoxic: give beta-blockers (atenolol 25–50mg OM or propranolol 20mg BD) to alleviate tachycardia and tremors; target HR <90/min. Beta-blockers contraindicated in asthma/COPD.' },
            { text: 'Review early to review TFT in 1–2 weeks; start medical therapy once thyrotoxicosis confirmed with baseline FBC and LFT' },
            { text: 'Check TRAb to confirm Graves\' disease or TPO Ab if suspicious of Hashimoto\'s thyroiditis' },
          ],
        },
      ],
    },
    {
      heading: 'Hyperthyroidism — Drug Treatment',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Initiation', 'Titration & Maintenance', 'Follow-up'],
          rows: [
            { cells: ['Carbimazole 5mg tabs', '20–60 mg/day (starting dose based on fT4 elevation: 1–1.5× ULN: 5–15mg; 1.5–2×: 15–30mg; 2–3×: 30–60mg)', 'Decrease by 5–10mg each visit; maintain at 5–10mg daily; euthyroid state usually 3–6 months', 'Review 2–4 weeks, then 6–8 weeks; TFT weekly before review; follow-up every 6–8 weeks during titration, 3-monthly during maintenance. 12–18 months total.'] },
            { cells: ['Propylthiouracil 50mg tabs', '200–600 mg/day in divided doses every 8 hours; preferred in women planning pregnancy and early pregnancy', 'Reduce by 50–100mg per day every 6–8 weeks; maintain at 50–150mg/day', 'Consider baseline LFT; routine LFTs not required unless symptomatic (rash, jaundice, pale stool)'] },
            { cells: ['Propranolol 10/40mg', '10–20 mg/dose every 8 hours (max 40mg/dose)', 'Stop once adrenergic symptoms resolved', 'Contraindicated in asthma and COPD'] },
          ],
        },
        {
          type: 'text',
          content:
            'Relapse: restart medical treatment; consider RAI therapy or surgery. Patients who relapse twice are at high risk of further relapses. Refer Endocrine SOC if adverse reaction, difficulty maintaining euthyroid status, or multiple relapses. Emergency situations (thyroid storm, cardiac, agranulocytosis): refer to ED.',
        },
      ],
    },
  ],
};
