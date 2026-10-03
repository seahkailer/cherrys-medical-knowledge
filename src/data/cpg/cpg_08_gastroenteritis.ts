import { CpgDocument } from '../types';

export const gastroenteritis: CpgDocument = {
  id: 'cpg-gastroenteritis',
  condition: 'Approach to Gastroenteritis in Primary Care',
  source: '08 NUP CPG - Approach to Gastroenteritis in Primary Care.pdf',
  reviewDate: 'Updated June 2025. Next review date: June 2028.',
  advisors: 'Key FPs: Dr Vivien Lee / Dr Franco Wong. Specialist Advisors: Dr Louisa Sun Jin (Consultant, Division of Infectious Diseases, NUH) / Prof Paul Anantharajah Tambyah (Senior Consultant, Division of Infectious Diseases, NUH)',
  sections: [
    {
      heading: 'Definition',
      blocks: [
        { type: 'text', content: 'Gastroenteritis refers to inflammation in the stomach and intestines, most often resulting in diarrhoea with or without vomiting. Diarrhoea is usually defined as passage of abnormally liquid or unformed stools at an increased amount and frequency. An increase in frequency of bowel movement of 3 or more stools per day is generally used as a definition of diarrhoea for epidemiological studies. Diarrhoea is defined as acute if it lasts for 14 days or less. Chronic diarrhoea is diarrhoea that has lasted more than 30 days.' },
        { type: 'table', headers: ['Severity', 'Definition'], rows: [
          { cells: ['Mild diarrhoea', '≤ 3 stool movements/day; Diarrhoea is bearable, and the patient is capable of traveling or other activities as planned'] },
          { cells: ['Moderate diarrhoea', '≥ 4–6 stool movements/day; Diarrhoea interferes with planned travels or other activities'] },
          { cells: ['Severe diarrhoea', '> 6 bowel movements/day or bloody diarrhoea; Diarrhoea interferes with daily activities and prevents planned travels or other activities'] },
        ]},
      ],
    },
    {
      heading: 'Diagnosis',
      blocks: [
        { type: 'text', content: 'The diagnosis of gastroenteritis is clinical. The aim of evaluation is to distinguish patients with mild, self-limiting diarrhoea from those requiring further investigations, empirical antibiotic therapy or admission. For diagnostic and management purposes, it is useful to classify acute diarrhoeas into "non-inflammatory" and "inflammatory" syndromes.' },
        { type: 'table', headers: ['Diarrhoeal syndrome', 'Organisms commonly implicated'], rows: [
          { cells: ['Non-inflammatory', 'Viruses: Norovirus, rotavirus. Bacteria: Clostridium perfringens, Staphylococcus aureus, Vibrio cholerae. Parasites: Giardia lamblia, Entamoeba histolytica'] },
          { cells: ['Inflammatory', 'Shigella, Salmonella, entero-haemorrhagic Escherichia coli (EHEC), enteroinvasive Escherichia coli (EIEC), Campylobacter, Clostridium difficile'] },
        ]},
        { type: 'list', items: [
          { text: 'Non-inflammatory diarrhoea syndrome: Characterised by watery stools of large volume without blood. Patient can have nausea and vomiting, abdominal colic and low-grade fever. In most cases, self-limiting and benign. Investigations are generally unnecessary unless cholera is suspected. Antibiotics are usually not required.' },
          { text: 'Inflammatory diarrhoea syndrome: Characterised by frequent, small volume stools which may be bloody. Often accompanied by fever, tenesmus and severe abdominal pain. Implies invasion or mucosal damage by the microbe or cytotoxins. Investigations and antibiotics may be required.' },
        ]},
      ],
    },
    {
      heading: 'History',
      blocks: [
        { type: 'list', items: [
          { text: 'Age — Young children and elderly are more likely to suffer complications of dehydration and sepsis. The majority of mortality from gastroenteritis occurs in these extremes of age.' },
          { text: 'Characterise the symptoms — number of diarrhoea or vomiting, presence of watery or bloody stools' },
          { text: 'Ability to tolerate orally — Patients who are unable to keep fluids will be at higher risk of dehydration' },
          { text: 'Past medical history — Immunocompromised patients (long-term steroids, immunosuppressive or chemotherapy, HIV, or chronic organ failure) are at higher risk of sepsis' },
          { text: 'Travel history — Diarrhoea during travel classified as traveller\'s diarrhoea; expected causative organisms are those prevalent in the visited country' },
          { text: 'Contact history — Important from a public health point of view; be on high alert if there is a common source of infection' },
          { text: 'Previous use of antibiotics — Investigate for nosocomial infections, especially Clostridium difficile' },
          { text: 'Occupation — Food handlers should be advised to only return to work 48 hours after last diarrhoea or vomiting' },
        ]},
        { type: 'text', content: 'Other differentials should be considered when a patient presents with vomiting only without diarrhoea.' },
      ],
    },
    {
      heading: 'Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'Vital signs: Record temperature, blood pressure (including postural BP if needed), heart rate' },
          { text: 'Signs of dehydration: postural drop, hypotension, tachycardia, sunken fontanelles (for infants), loss of skin turgor, increased cap refill time, dry mucous membranes' },
          { text: 'Examine the abdomen for tenderness, distension, rigidity or guarding' },
          { text: 'Perform a per rectal examination to look for the presence of blood in stools if history is suggestive' },
        ]},
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'text', content: 'Most cases of gastroenteritis in the community do not require further evaluation and are self-limiting. A careful evaluation of a patient with a good history and physical examination can save unnecessary investigations and use of antibiotics.' },
        { type: 'list', items: [
          { text: 'Investigations are only required if the diarrhoea is prolonged or there is bloody diarrhoea. Stool culture for Salmonella, Shigella and Campylobacter etc. can be sent.' },
          { text: 'For patients who develop diarrhoea after hospitalisation or recently received antibiotics, patients should be referred to tertiary settings for evaluation of Clostridium difficile.' },
          { text: 'Protozoal parasites are uncommon causes of traveller\'s diarrhoea but should be considered when diarrhoea lasts beyond a week or bacterial causes have been treated. Stool culture for ova, cysts and parasites (OCP) can be sent.' },
        ]},
      ],
    },
    {
      heading: 'Treatment — Rehydration',
      blocks: [
        { type: 'text', content: 'Most cases of gastroenteritis in the community only require supportive treatment. Fluid and electrolyte replacement is essential in the management of all patients with acute gastroenteritis. Oral rehydration is the treatment of choice. If a patient can take orally, isotonic drinks or oral rehydration salts will suffice. Patients who are unable to tolerate orally may require intravenous hydration in the tertiary setting.' },
      ],
    },
    {
      heading: 'Treatment — Anti-diarrhoea Agents',
      blocks: [
        { type: 'text', content: 'Antidiarrheal agents include intestinal motility inhibitors, intestinal secretion inhibitors and absorbents. Intestinal secretion or motility inhibitors may be helpful in decreasing the frequency or duration of diarrhoea for symptomatic improvement of acute infectious diarrhoea patients with moderate symptoms. Antimotility agents are NOT recommended in the management of acute gastroenteritis in infants and children as they have a risk of serious adverse events.' },
        { type: 'table', headers: ['Drug', 'Notes', 'Dose'], rows: [
          { cells: ['Loperamide (Intestinal motility inhibitor)', 'Inhibits intestinal motility; shortens duration by 1 day, decreases amount and frequency of watery diarrhoea in otherwise healthy adults', 'Adult: 2 mg TDS'] },
          { cells: ['Lomotil (diphenoxylate 2.5mg/atropine 25mcg)', 'Watch for opiate-induced ileus, drowsiness, and nausea caused by atropine effects', 'Adult: 2 tablets TDS'] },
          { cells: ['Kaolin mixture (Absorbent)', 'Does NOT decrease frequency or duration; not recommended in infectious diarrhoea', 'Child 3–5 yrs: 5–10 ml TDS; 6–12 yrs: 10–20 ml TDS; >12 yrs: 20–40 ml TDS. Adult: 20–40 ml TDS'] },
          { cells: ['Dioctahedral Smectite (Smecta)', 'Absorbent', 'Child >2 yrs: 1 sachet BD–TDS'] },
          { cells: ['Charcoal', 'Absorbent', 'Adult: 400 mg TDS'] },
          { cells: ['Simethicone drops (100mg/ml) (Anti-spasmodic)', 'Relieve abdominal colic', 'Child <2 yrs or <11 kg: 0.2 ml QDS; ≥2 yrs or ≥11 kg: 0.4 ml QDS'] },
          { cells: ['Colimix (Dicyclomine 5mg, Simethicone 50mg per 5ml)', 'Relieve abdominal colic', 'Child 6 months–4 yrs: 5 ml QDS; 4–12 yrs: 5–10 ml QDS'] },
          { cells: ['Buscopan (Anti-spasmodic)', 'Effective for abdominal cramps. Watch for anticholinergic, CNS, psychiatric side effects especially in older patients', 'Adult: 10–20 mg TDS'] },
          { cells: ['Bismuth subsalicylate (Not available in NUP)', 'Decreases frequency of diarrhoea and improves nausea and abdominal pain within 24 hours', 'Adult: 2 tablets (262mg/tab) or 30ml (regular strength) ½–1hr. Max daily dose: 8 regular-strength doses'] },
          { cells: ['Racecadotril / Hidrasec (Not available in NUP)', 'Effective in paediatric diarrhoea; similar effects as loperamide in adults', 'Child: <9kg: 10mg TDS; 9–<13kg: 20mg TDS; ≥13–27kg: 30mg TDS; ≥27kg: 60mg TDS. Not recommended <3 months'] },
          { cells: ['Lactoguard (Probiotic)', 'Limited evidence; more positive studies in children than adults; known to be safe with very little side effects', 'Child: <1yr: 1 sachet BD; 1–10 yrs: 1 sachet TDS; >10 yrs: 2 sachets TDS. Adult: 2 sachets TDS'] },
        ]},
      ],
    },
    {
      heading: 'Treatment — Antimicrobial Therapy',
      blocks: [
        { type: 'text', content: 'Most patients with acute gastroenteritis need not be treated with antimicrobial drugs. Acute watery diarrhoea is often viral in aetiology (norovirus, rotavirus, adenovirus). Even when bacterial, symptoms often improve spontaneously without treatment. Considering side effects, cost of antibiotics, and antibiotic resistance, antibiotic treatment does not offer much benefit.' },
        { type: 'text', content: 'Antimicrobial therapy can be considered in the following cases:' },
        { type: 'list', items: [
          { text: 'Blood or mucoid stools and fever' },
          { text: 'Shigellosis symptoms (frequent scant bloody stools, fever, cramping abdominal pain, tenesmus)' },
          { text: 'Traveller\'s diarrhoea with high fever >38.5°C or sepsis — antimicrobial therapy shortens the course and alleviates symptoms by 1.5 days' },
          { text: 'Bloody diarrhoea in immunocompromised patients' },
        ]},
        { type: 'table', headers: ['First Line Therapy', 'Alternative Therapy'], rows: [
          { cells: ['Azithromycin 1000mg Q24H 1 day, OR 500mg Q24H 3 days', 'Ciprofloxacin 500mg Q12H 3 days'] },
          { cells: ['Use empirically as first-line for traveller\'s diarrhoea in Southeast Asia or if fluoroquinolone-resistant bacteria are suspected. 24-hour dosing may be preferable to 12-hourly dosing of ciprofloxacin. Side effects (mainly nausea) can limit acceptability of single dose of 1,000 mg; alternatively use 500mg/day for 3 days.', 'Increasing microbial resistance to fluoroquinolones among Campylobacter isolates. Fluoroquinolones carry a black box warning from the FDA regarding aortic tears, hypoglycaemia, mental health side effects, and tendinitis and tendon rupture. Increasing resistance also reported for Salmonella and Shigella.'] },
        ]},
      ],
    },
    {
      heading: 'Special Situations — Specific Antimicrobial Therapy',
      blocks: [
        { type: 'text', content: 'Specific antimicrobial therapy is given when a treatable pathogen is identified in stool cultures.' },
        { type: 'table', headers: ['Pathogen', 'First-line antibiotics', 'Second-line antibiotics'], rows: [
          { cells: ['Campylobacter', 'Azithromycin', 'Ciprofloxacin'] },
          { cells: ['Non typhoidal Salmonella', 'Usually not indicated', 'NA'] },
          { cells: ['Salmonella enterica Typhi or Paratyphi', 'Ceftriaxone or ciprofloxacin', 'Ampicillin, TMP/SMX, Azithromycin'] },
          { cells: ['Shigella', 'Azithromycin, ciprofloxacin', 'TMP/SMX or ampicillin'] },
          { cells: ['Vibrio cholerae', 'Doxycycline', 'Ciprofloxacin, azithromycin'] },
          { cells: ['Giardia lamblia', 'Metronidazole', 'Tinidazole'] },
        ]},
      ],
    },
    {
      heading: 'Red Flags / Indications for Referral',
      blocks: [
        { type: 'list', items: [
          { text: 'Lethargy or confusion' },
          { text: 'Postural hypotension and tachycardia' },
          { text: 'Dehydration and inability to tolerate orally' },
          { text: 'Bloody stools' },
          { text: 'Temperature ≥ 38.5°C' },
          { text: 'Passage of ≥ 6 stools in 24 hours' },
          { text: 'Duration of illness > 72 hours' },
          { text: 'Severe abdominal pain in a patient > 50 years old' },
          { text: 'Diarrhoea in the elderly (≥ 70 years old)' },
          { text: 'Diarrhoea in the immunocompromised' },
          { text: 'Chronic diarrhoea' },
        ]},
      ],
    },
    {
      heading: 'Public Health',
      blocks: [
        { type: 'text', content: 'All suspected food poisoning outbreaks should be notified to the Ministry of Health to facilitate investigations (MD 131 or electronically via CD-LENS).' },
      ],
    },
    {
      heading: 'Key Recommendations',
      blocks: [
        { type: 'table', headers: ['Clinical Recommendation', 'Evidence Rating'], rows: [
          { cells: ['The first step to treating acute diarrhoea is rehydration, preferably oral rehydration.', 'C'] },
          { cells: ['In patients with acute diarrhoea, stool cultures should be reserved for grossly bloody stool, severe dehydration, signs of inflammatory disease, symptoms lasting more than 3–7 days, immunosuppression, and suspected nosocomial infections.', 'C'] },
          { cells: ['Antibiotics (usually a quinolone) reduce the duration and severity of traveller\'s diarrhoea.', 'A'] },
        ]},
        { type: 'text', content: 'A = consistent, good-quality patient-oriented evidence; B = inconsistent or limited-quality patient-oriented evidence; C = consensus, disease-oriented evidence, usual practice, expert opinion, or case series.' },
      ],
    },
  ],
};
