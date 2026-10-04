import { CpgDocument } from '../types';

export const familialHypercholesterolaemia: CpgDocument = {
  id: 'cpg-familial-hypercholesterolaemia',
  condition: 'Familial Hypercholesterolaemia (FH)',
  source: '65 Amgen FH brochure general public_single page.pdf',
  reviewDate: 'Published by Amgen',
  advisors: '',
  sections: [
    {
      heading: 'What is Familial Hypercholesterolaemia (FH)?',
      blocks: [
        { type: 'text', content: 'FH is a genetic condition in which high cholesterol levels are passed down in families, increasing the risk of premature heart disease (chest pain, heart attacks, strokes) by up to 20 times over people without the condition.' },
        { type: 'text', content: 'It is the most common form of inherited heart disease, with one baby born with FH every minute. This condition affects 1 in 250 people around the world — approximately 20,000 people in Singapore.' },
      ],
    },
    {
      heading: 'Inheritance',
      blocks: [
        { type: 'text', content: 'FH is an inherited disease. If one of your parents, siblings or children has FH, you have a 50% chance of also having it.' },
        { type: 'text', content: 'Heterozygous FH (one defective gene copy) affects 1 in 250 people. Homozygous FH (two defective gene copies) is rarer and more severe — LDL-C can exceed 13 mmol/L.' },
      ],
    },
    {
      heading: 'Symptoms and Detection',
      blocks: [
        { type: 'text', content: 'Most people with FH have no symptoms until a heart attack occurs. FH can be detected through: (1) Genetic testing; (2) Blood cholesterol testing; (3) Physical signs — tendon xanthomas (cholesterol deposits in tendons), arcus cornealis (white/grey ring around the cornea before age 45).' },
        { type: 'text', content: 'Diagnostic criteria (Simon Broome Register): Definite FH — total cholesterol >7.5 mmol/L (adult) or >6.7 mmol/L (child <16 years) PLUS tendon xanthomas in patient or first/second degree relative OR DNA-confirmed pathogenic FH mutation. Possible FH — total cholesterol as above PLUS family history of myocardial infarction before age 50 in second degree relative or before age 60 in first degree relative OR family history of raised cholesterol.' },
      ],
    },
    {
      heading: 'Treatment',
      blocks: [
        { type: 'text', content: 'Even though FH is a genetic disease, a combination of medications and lifestyle changes is effective in lowering cholesterol levels and the risk of heart disease, often to normal levels.' },
        { type: 'list', items: [
          { text: 'Statins: Most commonly used medications. People with FH who started statin treatment as children went on to have normal lifespans. Adults treated with statins reduced their risk of heart attacks to normal (similar to people without FH). Atorvastatin indicated for heterozygous FH in children aged 10 or older.' },
          { text: 'PCSK9 inhibitors (e.g. Evolocumab/Repatha): Indicated for adults with primary hyperlipidaemia (heterozygous FH and non-familial) or mixed dyslipidaemia as adjunct to diet. Also indicated for homozygous FH in adults and adolescents ≥12 years as adjunct to other LDL-lowering therapies.' },
          { text: 'Lifestyle changes: Heart-healthy diet, regular exercise, no smoking.' },
        ]},
        { type: 'text', content: 'Cascade screening: When one family member is diagnosed with FH, first-degree relatives (parents, siblings, children) should be tested. Early detection and treatment are key to preventing premature cardiovascular events.' },
      ],
    },
  ],
};
