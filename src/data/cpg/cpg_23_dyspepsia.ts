import { CpgDocument } from '../types';

export const dyspepsia: CpgDocument = {
  id: 'dyspepsia',
  condition: 'Dyspepsia',
  source: 'NUP CPG',
  reviewDate: 'August 2025',
  advisors: 'Dr Tang Si Ying (Consultant, Alexandra Hospital) / Dr Alexander Yip (Consultant, Alexandra Hospital)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Dyspepsia or indigestion refers to pain or discomfort in the epigastric area (central upper abdomen and lower chest area) attributed to the Gastrointestinal System for a period of at least 1 month. It typically occurs after meals but can also happen if there is no intake of food during normal mealtimes. Other associated symptoms include burping, feeling bloated, feeling nauseated, heartburn (burning sensation behind sternum), and early satiety.' },
        { type: 'text', content: 'Epidemiology: Locally, up to 38% of Singaporeans have dyspepsia at some point. It is more common in females, smokers and those who take NSAIDs. The most common type of dyspepsia at up to 70% is "Functional Dyspepsia" where a structural cause is not found.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'The PROMPT Model (Murtagh, 2024) is suggested as a practical diagnostic tool for primary care practitioners:' },
        { type: 'list', items: [
          { text: 'P — Probable diagnosis: Most likely diagnosis is luminal cause (functional dyspepsia, gastritis, or reflux). Key history: patient age, symptoms and signs, onset/time course/duration, risk factors.' },
          { text: 'R — Red Flags (not to be missed):', children: [
            { text: 'Cardiac: New ECG changes, new reduction in effort tolerance, new onset exertional chest pain.' },
            { text: 'GI Malignancy: New onset persistent dyspepsia age >45; unintentional significant weight loss (≥5% over 6–12 months); family history of gastric cancer; dysphagia; odynophagia; epigastric/abdominal mass; melena or haematemesis; risk factors for Barrett\'s Oesophagus (Chronic GERD ≥5 years + 3 of: age >50, male, obesity BMI >23.5, tobacco use, 1st degree relative with Barrett\'s or oesophageal adenocarcinoma).' },
            { text: 'Peptic Ulcer Disease: Melena, haematemesis.' },
            { text: 'Pancreatitis or cholecystitis: Unwell looking, fever, tender abdomen, positive Murphy\'s finding.' },
          ]},
          { text: 'O — Often Missed Causes:', children: [
            { text: 'Medications (temporal relationship to onset): Metformin, acarbose, GLP-1 agonist; iron tablets; NSAIDs; antidepressants (SSRIs); potassium chloride; Orlistat; antibiotics especially doxycycline; herbs (Ginkgo, Saw palmetto, garlic).' },
            { text: 'Alcohol Gastritis — long-term or acute large consumption.' },
          ]},
          { text: 'M — Masquerades: Depression/anxiety (somatization as epigastric pain); Aerophagy (excessive air swallowing); Oesophageal Spasm and Biliary Motility Disorder.' },
          { text: 'PT — Is the patient trying to tell me something? Explore ideas, concerns, and expectations.' },
        ]},
        { type: 'text', content: 'Key causes of luminal dyspepsia: (1) Functional Dyspepsia (FD): ROME IV criteria — one or more of: bothersome postprandial fullness, bothersome early satiation, bothersome epigastric pain, bothersome epigastric burning, with no evidence of structural disease. Criteria fulfilled for last 3 months with symptom onset ≥6 months prior. (2) Gastritis: H. pylori infection (prevalence 31% in Singapore) or exogenous/endogenous causes. (3) GERD: Stomach acid rises into oesophagus, may be triggered by lying down after meals.' },
        { type: 'text', content: 'Extra-luminal GI causes: (1) Biliary Colic — typically occurs after fatty meal, pain quickly escalating then resolving, may radiate to upper back or right shoulder, gallstones on U/S HBS. (2) Chronic Pancreatitis — epigastric pain radiating to back, endocrine insufficiency, weight loss, chronic diarrhoea/steatorrhea; most common cause is alcohol overuse.' },
      ],
    },
    {
      heading: 'Diagnostic Investigations Available in NUP',
      blocks: [
        { type: 'table', headers: ['Test', 'Open Access UBT', 'Open Access OGD', 'GastroClear'], rows: [
          { cells: ['Age Limitations', 'Above 16 years', 'Between 21 and 60 years', 'Above 40 years'] },
          { cells: ['Indications', 'Positive H. pylori antibodies; close family contact recently diagnosed with H. pylori', 'Dyspepsia symptoms without red flags; reflux/heartburn; recurrent upper abdominal pain/bloating', 'Screening test to identify intermediate to high-risk patients for gastric cancer; patients not keen for gastroscopy as first line investigation'] },
          { cells: ['Description', 'Swallow a pill/liquid containing urea; blow into a solution; detects active H. pylori infection', 'Tube with camera inserted via mouth under sedation; direct visualization; can carry out therapeutic procedures', 'Venous blood test; analyzes specific microRNA biomarkers to identify individuals at risk for gastric cancer'] },
          { cells: ['Sensitivity/Specificity', '94.2% sensitivity, 100% specificity for H. pylori', 'Operator dependent; overall sensitivity 87%, specificity 68%', 'Screening test — risk stratification only (low/intermediate/high)'] },
          { cells: ['Cost', 'About $150 per test for Singapore Citizen', 'At least $700 (additional cost for histology, therapeutic procedure)', 'About $80 till further notice'] },
          { cells: ['Risk', 'Non-invasive, very low risk', 'Invasive (GI tract bleeding, perforation, sedation risks)', 'Low risk — venipuncture related risk'] },
          { cells: ['Common Pitfalls', 'Positive UBT requires repeat UBT for proof of cure; negative test may still require OGD for other causes', 'Do not offer with open access UBT (duplicity); not suitable for cancer screening in asymptomatic patients', 'Only stratifies risk; intermediate/high risk requires Gastroenterology referral (not OA-OGD); defer OA-OGD until GastroClear result is out if ordering both'] },
        ]},
      ],
    },
    {
      heading: 'Management and Follow-Up',
      blocks: [
        { type: 'text', content: 'General approach: Exclude non-luminal causes and red flags first. If red flags present, urgent/early referral to Gastroenterology or appropriate speciality is warranted. Non-luminal causes should be referred appropriately (e.g. biliary colic to Hepatobiliary Surgery). After ruling out red flags and extra-luminal causes, adopt a test-and-treat approach for persistent luminal causes.' },
        { type: 'text', content: 'H. pylori Infection Treatment:' },
        { type: 'list', items: [
          { text: '1st line (no penicillin allergy): Omeprazole 20 mg BD + amoxicillin 1 gram BD + clarithromycin 500 mg BD for 2 weeks.' },
          { text: '1st line (penicillin allergy): Omeprazole 20 mg BD + metronidazole 400 mg TDS + clarithromycin 500 mg BD for 2 weeks.' },
          { text: '2nd line: Omeprazole 20 mg BD + bismuth subcitrate 240 mg BD (or bismuth subsalicylate 525 mg QDS) + metronidazole 400 mg TDS + tetracycline 500 mg QDS for 2 weeks. Note: bismuth subcitrate and tetracycline not stocked in NUP; provide external prescription.' },
        ]},
        { type: 'text', content: 'Functional Dyspepsia Treatment Algorithm: (1) Proton pump inhibitors (PPIs) remain the mainstay of initial treatment — Omeprazole 20 mg OM (no added benefit for BD or higher dosage). H2RA (famotidine 10 mg OM or BD) is an alternative. (2) Initiate appropriate lifestyle and dietary changes. (3) If persistent dyspepsia despite PPI trial, refer to Gastroenterology.' },
        { type: 'text', content: 'Persistent Dyspepsia (normal OGD, mild gastritis, or eradicated H. pylori but symptomatic beyond 4 weeks): Start PPI for 4–8 weeks. If symptoms improve: continue PPI for 6 months, then discontinue or taper to lowest dose. If no improvement: refer Gastroenterology.' },
        { type: 'text', content: 'GERD Treatment Algorithm: Initiate lifestyle and diet changes. Identify severity: Mild/intermittent (<2 episodes/week): PRN H2RA and/or antacid/alginates, review in 2–4 weeks. Severe/frequent (≥2 episodes/week or impaired quality of life): Start PPI + antacid/alginates PRN, review in 8 weeks. If red flags or Barrett\'s risk factors, refer to Gastroenterology.' },
      ],
    },
    {
      heading: 'Non-Pharmacological / Lifestyle',
      blocks: [
        { type: 'table', headers: ['Category', 'Trigger / Modulators', 'Suggested Lifestyle and Diet Changes'], rows: [
          { cells: ['Eating behaviour', 'Eating too fast; large portions; eating beyond satiety; eating close to bedtime; irregular mealtimes', 'Serve smaller portions; use smaller plates; finish eating 3 hours before lying down; schedule proper meals to avoid grazing'] },
          { cells: ['Dietary factors', 'Fatty/fried/oily food; spicy or sour food; excessive alcohol; excessive coffee or tea; carbonated drinks', 'Add fruits and vegetables (avoid citrus); reduce fatty/fried/oily food; eliminate or wean down caffeine; limit alcohol; choose water over carbonated drinks'] },
          { cells: ['Lifestyle', 'Weight gain; smoking; tight garments or belt', 'Lose weight; aim 7000–10000 steps/day; accumulate 150 min/week moderate exercise; stop smoking; wear loose clothing; lie on left side to minimise reflux; elevate head of bed'] },
          { cells: ['Emotional/behavioural factors', 'High stress environment or period; hypervigilance', 'Practice deep breathing or other stress releasing techniques'] },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Medications',
      blocks: [
        { type: 'table', headers: ['Medication', 'Common Dose', 'Remarks'], rows: [
          { cells: ['PPI: Omeprazole', '20 mg OM', 'Requires 3–4 days for full onset of acid reduction effect but more efficacious than H2RA. Given for 8 weeks.'] },
          { cells: ['H2RA: Famotidine', '20 mg OD–BD', 'Faster onset than PPI but may achieve tachyphylaxis in 4–6 weeks; prefer for mild and intermittent cases.'] },
          { cells: ['Antacid: Magnesium Trisilicate Mixture / Antacid tablets', '5–15 ml QDS PRN / 1–2 tablets TDS PRN', 'Neutralize gastric acid.'] },
          { cells: ['Alginate: Gaviscon', '10–20 ml TDS PRN', 'Contains carbonates to neutralize gastric acid; alginates form a viscous gel at the gastroesophageal junction to neutralize acid pocket.'] },
        ]},
      ],
    },
  ],
};
