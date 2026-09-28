import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 02 NUP CPG — Allergic Conjunctivitis (Jan 2024)
// ---------------------------------------------------------------------------
const allergicConjunctivitis: CpgDocument = {
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
export { allergicConjunctivitis };

// ---------------------------------------------------------------------------
// 03 NUP CPG — Allergic Rhinitis (Sep 2022)
// ---------------------------------------------------------------------------
const allergicRhinitis: CpgDocument = {
  id: 'cpg-allergic-rhinitis',
  condition: 'Allergic Rhinitis',
  source: '03 NUP CPG - Allergic Rhinitis.pdf',
  reviewDate: 'Reviewed September 2022. First published May 2022.',
  advisors: 'Dr Terese Low (Associate Consultant, Otolaryngology, NTFGH) / A/Prof Raymond Ngo (Senior Consultant, Otolaryngology, NUH). Key FPs: Dr Tan Wee Hian / Dr Tan Juanmin / Dr Pang Suan Choo',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'list', items: [
          { text: 'Allergic rhinitis is a symptomatic disorder which involves an IgE-mediated inflammation of the mucous membrane of the nose that is induced after allergen exposure' },
          { text: 'The three cardinal symptoms in nasal reactions occurring in allergy are sneezing, nasal obstruction and mucous discharge' },
          { text: 'Untreated allergic rhinitis impairs quality of life, affects work productivity and school performance, and exacerbates common co-morbidities including asthma, sinusitis, and conjunctivitis' },
        ]},
      ],
    },
    {
      heading: 'Epidemiology',
      blocks: [
        { type: 'list', items: [
          { text: 'The prevalence of allergic rhinitis in the general adult population in Singapore has been estimated at 5.5–13%' },
          { text: 'There is a greater prevalence among the younger age groups, with a peak of up to 44% between the ages of 10 and 19 years' },
          { text: 'The condition in children may be associated with co-morbidities including asthma, atopic dermatitis / eczema, allergic conjunctivitis, chronic sinusitis, and chronic otitis media with effusion' },
        ]},
      ],
    },
    {
      heading: 'History',
      blocks: [
        { type: 'list', items: [
          { text: 'Symptoms', children: [
            { text: 'Nasal symptoms of obstruction, mucous discharge, itching affecting both nostrils, and/or sneezing' },
            { text: 'Mucous discharge usually watery and non-purulent' },
            { text: 'Duration for many years and worse in the mornings' },
          ]},
          { text: 'Presence of allergens in the environment', children: [
            { text: 'The most common aeroallergen in Singapore is house dust mite' },
            { text: 'Other allergens include: Animal dander, fur, saliva; Tobacco smoke; Cockroaches; Pollen from grass, trees and pollen; Indoor mould' },
          ]},
          { text: 'Presence of risk factors', children: [
            { text: 'Concomitant allergic conjunctivitis, asthma, atopic dermatitis' },
            { text: 'Family history of atopy' },
          ]},
          { text: 'Red flags', children: [
            { text: 'Fever, facial pain, recurrent blood-stained nasal discharge' },
            { text: 'Unilateral nasal symptoms e.g. unilateral obstruction, unilateral nasal discharge' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Physical Findings',
      blocks: [
        { type: 'list', items: [
          { text: 'Clear mucous discharge in the anterior nasal space' },
          { text: 'Pale nasal mucosa with or without bluish hue' },
          { text: 'Enlarged inferior turbinates' },
          { text: '"Allergic shiners" with infraorbital oedema and darkening due to subcutaneous venodilation' },
          { text: 'Transverse nasal crease caused by repeated rubbing and pushing the tip of the nose up with the hand — known as "allergic salute"' },
          { text: 'Red and watery eyes' },
        ]},
      ],
    },
    {
      heading: 'Investigations — Allergy Tests',
      blocks: [
        { type: 'list', items: [
          { text: 'Not required for diagnosis of allergic rhinitis and initiation of treatment' },
          { text: 'Indications include:', children: [
            { text: 'When diagnosis is uncertain' },
            { text: 'Allergic rhinitis has been diagnosed but not responding to empiric treatment' },
            { text: 'Knowledge of specific causative allergen needed to target therapy (e.g. avoidance strategies)' },
            { text: 'Potential candidates for immunotherapy' },
          ]},
          { text: 'Testing options:', children: [
            { text: 'Skin prick tests (SPT) – quick results, need to stop antihistamines for few days prior, may be inaccurate in very young children and the elderly' },
            { text: 'Blood tests e.g. radioallergosorbent test (RAST) – more costly, alternative for patients with contraindication to SPT' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Investigations — Imaging Tests',
      blocks: [
        { type: 'text', content: 'Sinonasal imaging should not be routinely performed in patients presenting with symptoms consistent with a diagnosis of allergic rhinitis' },
        { type: 'text', content: '~Refer to ENT for further discussion and management' },
      ],
    },
    {
      heading: 'Diagnosis',
      blocks: [
        { type: 'list', items: [
          { text: 'Diagnosis of allergic rhinitis can be made on clinical grounds based on both of the following:', children: [
            { text: '≥2 of the following symptoms – nasal congestion, runny nose, itchy nose, or sneezing – are present on ≥2 consecutive days for >1 hour on most days' },
            { text: 'History and physical exam consistent with an allergic cause (e.g. clear rhinorrhoea, pale discoloration of nasal mucosa, and red and watery eyes)' },
          ]},
          { text: 'Patients with allergic rhinitis should be assessed for the presence of associated conditions such as asthma, atopic dermatitis, sleep-disordered breathing, conjunctivitis, rhinosinusitis, and otitis media' },
        ]},
      ],
    },
    {
      heading: 'Classification',
      blocks: [
        { type: 'text', content: 'Allergic rhinitis may be classified based on frequency and severity of symptoms for more appropriate treatment selection' },
        { type: 'table', headers: ['Dimension', 'Category', 'Definition'], rows: [
          { 'Dimension': 'Frequency', 'Category': 'Intermittent', 'Definition': '<4 days per week OR <4 consecutive weeks per year' },
          { 'Dimension': 'Frequency', 'Category': 'Persistent', 'Definition': '>4 days per week AND >4 consecutive weeks per year' },
          { 'Dimension': 'Severity', 'Category': 'Mild', 'Definition': 'Symptoms are present but not interfering with quality of life' },
          { 'Dimension': 'Severity', 'Category': 'Moderate-Severe', 'Definition': 'Symptoms interfere with quality of life (sleep disturbance; impairment of daily activities, leisure, sport; impairment of school or work performance; exacerbation of coexisting asthma)' },
        ]},
      ],
    },
    {
      heading: 'Management — Overview',
      blocks: [
        { type: 'list', items: [
          { text: 'Treatment goal of Allergic Rhinitis is the relief of symptoms' },
          { text: '2019 ARIA (Allergic Rhinitis and its Impact on Asthma) Care Pathways on treatment remains largely relevant today' },
          { text: 'Strategies involve patient education (to maximise medication adherence, optimise treatment outcomes) and control of environmental factors (where possible), pharmacotherapy and allergen immunotherapy' },
          { text: 'Stepwise approach depending on severity and duration of symptoms as well as response to treatment' },
          { text: 'Surgical treatment can be considered as an adjunctive intervention for highly selected patients for relief of nasal obstruction due to persistent turbinate hypertrophy, cartilaginous/bony obstruction of nasal passage or secondary sinus disease' },
        ]},
      ],
    },
    {
      heading: 'Management — Control of Environmental Factors',
      blocks: [
        { type: 'list', items: [
          { text: 'Avoidance of known allergens' },
          { text: 'Removal of pets, keep animals out of bedroom' },
          { text: 'Use of air filtration systems (HEPA filter)' },
          { text: 'Washing bed covers and clothing in hot water above 60 degrees Celsius to kill dust mites' },
          { text: 'Periodically clean home thoroughly' },
        ]},
      ],
    },
    {
      heading: 'Management — Pharmacological: Antihistamines',
      blocks: [
        { type: 'list', items: [
          { text: '2nd generation oral (loratadine, cetirizine) or intranasal H1-antihistamines (azelastine, olopatadine) are recommended for the treatment of allergic rhinitis and conjunctivitis in adults and children' },
          { text: '1st generation oral H1-antihistamines tend to have sedating effects and should be used with care' },
          { text: 'Note: Intranasal antihistamines (azelastine, olopatadine) not available in NUP' },
        ]},
      ],
    },
    {
      heading: 'Management — Pharmacological: Intranasal Corticosteroids',
      blocks: [
        { type: 'list', items: [
          { text: 'Intranasal corticosteroids are the first-line treatment for patients with moderate-severe intermittent symptoms or any degree of persistent symptoms' },
          { text: 'Intranasal corticosteroids such as Avamys® (fluticasone), Nasonex® (mometasone), Nasacort® (triamcinolone) are recommended for the treatment of allergic rhinitis in adults and children and are safe for long term use when used at correct doses' },
          { text: 'Slower onset of action with maximal effect of intranasal corticosteroids with daily use from two weeks onwards' },
          { text: 'Nasal sprays work best when they are administered properly, and the medication remains in the nose rather than draining down the back of the throat' },
          { text: 'Note that the recommended techniques for the aqueous and aerosol sprays are different. Arrangement can be made for Pharmacy to counsel on technique' },
          { text: 'Once symptoms are controlled, the daily dose can be reduced to the lowest dose that maintains control' },
          { text: 'Intramuscular corticosteroids and long-term use of oral preparations are not recommended due to safety concerns' },
        ]},
        { type: 'table', headers: ['Medication', 'Brand name', 'Usual adult dose per nostril', 'Usual paediatric dose per nostril'], rows: [
          { 'Medication': 'Fluticasone furoate (27.5 mcg/spray)', 'Brand name': 'Avamys®', 'Usual adult dose per nostril': '2 sprays per nostril once daily', 'Usual paediatric dose per nostril': '2 to 11 years: One spray once daily' },
          { 'Medication': 'Mometasone (50mcg/spray)', 'Brand name': 'Nasonex®', 'Usual adult dose per nostril': '≥12 years: Two sprays once daily', 'Usual paediatric dose per nostril': '—' },
        ]},
      ],
    },
    {
      heading: 'Management — Pharmacological: Decongestants',
      blocks: [
        { type: 'list', items: [
          { text: 'Decongestants, either intranasal (oxymetazoline) or oral (pseudoephedrine), may be used only for a short period of time up to 5 days to relieve nasal obstruction' },
          { text: 'Prolonged use can lead to side effects including rebound congestion (rhinitis medicamentosa)' },
        ]},
      ],
    },
    {
      heading: 'Management — Pharmacological: Leukotriene Receptor Antagonist (LTRA)',
      blocks: [
        { type: 'list', items: [
          { text: 'LTRA (montelukast) should not be offered as primary treatment for allergic rhinitis' },
          { text: 'Subset of patients with both allergic rhinitis and asthma may benefit from LTRA' },
        ]},
      ],
    },
    {
      heading: 'Management — Nasal Irrigation',
      blocks: [
        { type: 'list', items: [
          { text: 'The beneficial effects of saline in improving symptoms and quality of life include improvement in mucous clearance, enhanced ciliary activity, disruption and removal of antigens, biofilms and inflammatory mediators, and direct protection of the sinonasal mucosa' },
          { text: 'The procedure is simple, inexpensive, and safe and has been shown to be effective' },
          { text: 'If there is a need for medication, nasal irrigation should be done first. The nasal medication is much more effective when sprayed onto clean nasal membranes, and the spray will reach deeper into the nose' },
          { text: 'Commercially prepared saline solutions that are available OTC in NUP retail pharmacy include Sterimar© Nose Hygiene and Serenaz© Natural Seawater Nasal Spray' },
          { text: 'Instructions:', children: [
            { text: 'Bend over the sink (some people do this in the shower) and squirt the solution into each side of your nose, aiming the stream toward the back of your head, and not the top of your head' },
            { text: 'The solution should flow into one nostril and out of the other, but it will not harm you if you swallow a little' },
            { text: 'Irrigate the nose with saline 1 to 2 times per day' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Management — Immunotherapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Via sublingual immunotherapy (SLIT) or subcutaneous immunotherapy (SCIT)' },
          { text: 'Proven therapeutic option for treatment of allergic rhinitis, asthma, or both' },
          { text: 'Potentially reduces symptoms, alter natural course of the disease, and induce long term clinical remission' },
          { text: 'Can be considered for patients with poor symptomatic control of allergic rhinitis despite maximal therapy or who cannot or will not take medication' },
          { text: 'More effective for patients with a single allergen that account for majority of symptoms' },
          { text: 'For Sublingual Immunotherapy (SLIT):', children: [
            { text: 'Dose is administered daily under the tongue' },
            { text: 'Requires commitment as therapy is administered daily for a longer term of 3–5 years' },
          ]},
        ]},
        { type: 'text', content: '~Refer to ENT for further discussion and management' },
      ],
    },
    {
      heading: 'Management — Surgical Therapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Inferior turbinate reduction via radiofrequency ablation may be considered for patients with nasal airway obstruction and enlarged inferior turbinates' },
          { text: 'Mechanical obstruction may be relieved with surgery, but allergic symptoms of nasal discharge and sneezing will unlikely improve' },
        ]},
        { type: 'text', content: '~Refer to ENT for further discussion and management' },
      ],
    },
    {
      heading: 'When to Refer',
      blocks: [
        { type: 'list', items: [
          { text: 'Medical therapy fails to provide adequate control of treatment' },
          { text: 'Patient to be considered for immunotherapy and surgical therapy' },
          { text: 'Recurrent epistaxis' },
          { text: 'Nasal obstruction without other symptoms' },
          { text: 'Unilateral symptoms +++' },
          { text: 'Anosmia' },
          { text: 'Mucopurulent rhinorrhoea' },
          { text: 'Posterior rhinorrhoea (postnasal drip)', children: [
            { text: 'With thick mucus' },
            { text: 'And no anterior rhinorrhoea' },
          ]},
          { text: 'Facial pain' },
          { text: 'Children younger than 2 years old as AR is uncommon in this age group' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components for Allergic Rhinitis',
      blocks: [
        { type: 'table', headers: ['Essential Care Components', 'Minimum Frequency', 'Remarks'], rows: [
          { 'Essential Care Components': 'Assessment and Education on Allergen Avoidance', 'Minimum Frequency': 'At diagnosis; thereafter, as clinically indicated', 'Remarks': 'Patient education regarding disease course and measures to control exposure to allergens' },
          { 'Essential Care Components': 'Smoking Assessment', 'Minimum Frequency': 'Annually for smokers; once-off for non-smokers, unless there is a change in smoking habit', 'Remarks': 'Assessment on smoking habits (estimated sticks a day; zero for non- or ex-smokers) and smoking cessation counselling' },
        ]},
        { type: 'text', content: '* More frequently if clinically indicated' },
      ],
    },
  ],
};
export { allergicRhinitis };

// ---------------------------------------------------------------------------
// 04 NUP CPG — Anaemia (May 2024)
// ---------------------------------------------------------------------------
const anaemia: CpgDocument = {
  id: 'cpg-anaemia',
  condition: 'Anaemia',
  source: '04 NUP CPG - Anaemia.pdf',
  reviewDate: 'Reviewed May 2024 by Dr Justin Chong. Next review: May 2027.',
  advisors: 'Dr Lee Shir Ying (Senior Consultant, Haematologist, NUH). Key FPs: Dr Tan Yee Leng / Dr Justin Chong',
  sections: [
    {
      heading: 'Definition — Haemoglobin Levels to Diagnose Anaemia at Sea Level (WHO 2011)',
      blocks: [
        { type: 'table', headers: ['Population', 'Mild (g/dL)', 'Moderate (g/dL)', 'Severe (g/dL)'], rows: [
          { Population: 'Children 6–59 months of age', 'Mild (g/dL)': '10.0–10.9', 'Moderate (g/dL)': '7.0–9.9', 'Severe (g/dL)': '< 7.0' },
          { Population: 'Children 5–11 years of age', 'Mild (g/dL)': '11.0–11.4', 'Moderate (g/dL)': '8.0–10.9', 'Severe (g/dL)': '< 8.0' },
          { Population: 'Children 12–14 years of age', 'Mild (g/dL)': '11.0–11.9', 'Moderate (g/dL)': '8.0–10.9', 'Severe (g/dL)': '< 8.0' },
          { Population: 'Non-pregnant women (15 years and above)', 'Mild (g/dL)': '11.0–11.9', 'Moderate (g/dL)': '8.0–10.9', 'Severe (g/dL)': '< 8.0' },
          { Population: 'Pregnant women', 'Mild (g/dL)': '10.0–10.9', 'Moderate (g/dL)': '7.0–9.9', 'Severe (g/dL)': '< 7.0' },
          { Population: 'Men (15 years and above)', 'Mild (g/dL)': '11.0–12.9', 'Moderate (g/dL)': '8.0–10.9', 'Severe (g/dL)': '< 8.0' },
        ]},
      ],
    },
    {
      heading: 'Classification — Based on Causes',
      blocks: [
        { type: 'list', items: [
          { text: 'A) Production', children: [
            { text: 'Haemoglobin synthesis disturbances: Iron deficiency, thalassaemia, anaemia of chronic disease, sickle cell disease' },
            { text: 'Stem cell disease: Aplastic anaemia, myeloproliferative disorder, myelodysplastic syndrome, sideroblastic anaemia' },
            { text: 'DNA synthesis disturbances: Folate deficiency, Vitamin B12 deficiency, immunosuppressive agent' },
            { text: 'Bone marrow infiltration: leukaemia, lymphoma, secondary malignancy, myelofibrosis' },
            { text: 'Bone marrow suppression: Alcoholism, chemotherapy, hypothyroidism, radiotherapy' },
            { text: 'Lack of erythropoietin: Chronic renal failure' },
          ]},
          { text: 'B) Destruction', children: [
            { text: 'Intrinsic haemolysis [due to red blood cell (RBC) Defects]: Spherocytosis, sickle cell disease, enzyme deficiencies' },
            { text: 'Extrinsic haemolysis: Infection, autoimmune haemolytic anaemia, drugs, toxins, mechanical valves, haemolytic-uraemic syndrome, hypersplenism, haemangioma, transfusion reaction' },
          ]},
          { text: 'C) Blood Loss', children: [
            { text: 'Excessive menstruation' },
            { text: 'Bleeding in the gastrointestinal or genitourinary tracts' },
            { text: 'Trauma' },
          ]},
          { text: 'D) Chronic Diseases', children: [
            { text: 'Organ failure: Chronic renal failure, chronic liver disease' },
            { text: 'Acute infections: Infective mononucleosis, viral hepatitis, Parvovirus infection, cytomegalovirus infection' },
            { text: 'Chronic infections: Tuberculosis, human immunodeficiency virus infection, infective endocarditis' },
            { text: 'Chronic inflammatory disorders: Rheumatoid arthritis, collagen vascular disease, polymyalgia rheumatica' },
            { text: 'Malignancy' },
            { text: 'Protein energy malnutrition' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Classification — Based on RBC Cell Size and Appearance',
      blocks: [
        { type: 'list', items: [
          { text: 'A) Microcytic Anaemia (MCV < 80 fl)', children: [
            { text: 'Iron deficiency (50% presents as HCMC Anaemia)' },
            { text: 'Thalassaemia' },
            { text: 'Anaemia of chronic disease' },
            { text: 'Sideroblastic anaemia' },
            { text: 'Lead poisoning' },
          ]},
          { text: 'B) Macrocytic Anaemia (MCV > 100 fl)', children: [
            { text: 'Megaloblastic Anaemia: Vitamin B12 deficiency; Folate deficiency; Drugs (Anticonvulsants e.g. Phenytoin, Phenobarbitone; Antibiotics e.g. Bactrim, Oral contraceptives; Others – Metformin, Methotrexate)' },
            { text: 'Non-megaloblastic Anaemia: Alcoholism; Hypothyroidism; Chronic liver disease; Myelodysplastic syndrome; Reticulocytosis; Malignancy with marrow infiltration' },
          ]},
          { text: 'C) Normocytic Anaemia (80–100 fl)', children: [
            { text: 'Anaemia of inflammation' },
            { text: 'Mixed iron and Vitamin B12 ± folate deficiency' },
            { text: 'Hypothyroidism' },
            { text: 'Leukaemia' },
            { text: 'Aplastic Anaemia' },
            { text: 'Haemolytic Anaemia' },
            { text: 'Haemorrhages' },
            { text: 'Hypersplenism' },
            { text: 'RBC membrane defect' },
            { text: 'Autoimmune destruction' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Clinical Assessment — Presentation & Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'Clinical Presentation', children: [
            { text: 'Asymptomatic' },
            { text: 'Fatigue' },
            { text: 'Light headedness' },
            { text: 'Headache' },
            { text: 'Cognitive impairment' },
            { text: 'Chest pain' },
            { text: 'Palpitation' },
            { text: 'Breathlessness' },
            { text: 'Numbness or coldness of extremities' },
          ]},
          { text: 'Physical Examination & Look Out for Related Causes', children: [
            { text: 'Pallor of conjunctivae and lips, palmar creases' },
            { text: 'Jaundice (haemolytic anaemia or chronic liver disease or alcoholism)' },
            { text: 'Angular cheilosis, glossitis, koilonychias (iron deficiency)' },
            { text: 'Thalassaemia facies (frontal bossing, chipmunk facies)' },
            { text: 'Goitre (hypothyroidism)' },
            { text: 'Compensatory tachycardia, low blood pressure' },
            { text: 'Parasternal systolic ejection flow murmur' },
            { text: 'Stigmata of chronic liver disease (palmar erythema, hepatic asterixis, spider naevi)' },
            { text: 'Organomegaly (myeloproliferative disorder, infiltrative disease, polycystic kidneys, space occupying lesions)' },
            { text: 'Renal causes (sallow features, uremic breath, AV fistula, transplanted kidney)' },
            { text: 'Per rectal examination (bleeding, haemorrhoids, rectal masses)' },
            { text: 'Skin (petechiae rashes, bruises, ecchymosis)' },
            { text: 'Lymphadenopathy (lymphoproliferative disorder)' },
            { text: 'Autoimmune conditions (SLE, RA, scleroderma)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Clinical Assessment — Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'If clinically suspect anaemia, to do full blood count (FBC)' },
          { text: 'If Hb < 12 g/dL in males or < 11 g/dL in female, for further evaluation based on the level of presenting haemoglobin. (Refer to flow chart on Approach to Anaemia)' },
          { text: 'A drop in Hb by >1 g/dL from previously low baseline is significant and should be further evaluated' },
          { text: 'Patients with borderline low Hb at onset, to trend the Hb in 2 weeks. If normalised, no further workup required' },
          { text: 'First line investigations include iron panel, ferritin, and in the presence of macrocytosis, include vitamin B12 and folate. Review latest creatinine for presence of Chronic Kidney Disease (CKD), looking back up to one year if there is no reason to expect worsening renal function. In the absence of haematological disorders or deficiencies causing the anaemia, along with Hb <10g/dL and CKD G3/G4/G5, routine nephrology appointment should be considered (NUP CKD CPG)' },
          { text: 'Peripheral blood film (PBF) is useful in the presence of cytopenias or macrocytosis to check for megaloblastic anaemia or myelodysplastic syndrome. It is recommended when there is macrocytosis and other cytopenias, OR macrocytosis with Hb <10g/dL. In the presence of macrocytosis with normal / slightly low Hb without an overt cause, a PBF is helpful as well' },
          { text: 'If no obvious cause can be found, screen clinically for other causes of anaemia – thyroid disease, liver disease, malignancy, personal or family history of thalassaemia, and chronic inflammatory diseases' },
          { text: 'In the absence of causes found from history, physical exam and 1st line investigations, and a stable patient with isolated mild anaemia who is asymptomatic, a repeat FBC can be arranged in 3 months\' time with return or emergency advice provided' },
          { text: 'Second line investigations may be guided by targeted history, and include retic count, thyroid function test, liver function test, thalassaemia screen, ESR' },
          { text: 'A high retic count of > 3% (in the absence of recent haematinic replenishment for haematinic deficiency) implies possible haemolytic anaemia which requires referral to the haematologist' },
        ]},
      ],
    },
    {
      heading: 'Clinical Assessment — General Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Acute haemorrhage, symptomatic or severe anaemia: Rapid resuscitation with crystalloid, refer Emergency Department after patient is haemodynamically stable' },
          { text: 'Suspected haematologic disease or unexplained anaemia after investigations: Refer to haematologist' },
          { text: 'Manage nutritional deficiencies if present: Refer to section on Specific Management' },
        ]},
      ],
    },
    {
      heading: 'Specific Management — Iron Deficiency Anaemia',
      blocks: [
        { type: 'text', content: 'Iron is found in the heme group of haemoglobin that carries oxygen, that supports respiration, energy production, DNA synthesis and cell proliferation. Deficiency in iron is usually chronic and asymptomatic. Before iron deficiency is severe enough to cause microcytic anaemia, patients may have non-specific symptoms like weakness, fatigue, difficulty concentrating or poor work productivity. However, there is no strong evidence for replacement therapy in cases of iron deficiency without anaemia.' },
        { type: 'table', headers: ['Systems', 'Causes'], rows: [
          { Systems: 'Physiologic', Causes: 'Infancy, puberty, menstruation, pregnancy, blood donation' },
          { Systems: 'Diet', Causes: 'Vegetarian, insufficient intake from poverty, malnutrition' },
          { Systems: 'Gastrointestinal (Blood loss / reduced absorption)', Causes: 'Upper GI: Helicobacter pylori infection, stomach surgery, atrophic gastritis, Crohn disease, gastritis, peptic ulcer disease, cancer. Lower GI: Diverticulitis, benign tumour, GI cancer, inflammatory bowel disease (Crohn\'s, ulcerative colitis), angiodysplasia, haemorrhoids, hookworm infestation' },
          { Systems: 'Gynaecological / genitourinary', Causes: 'Heavy menses, haematuria, haemoglobinuria' },
          { Systems: 'Medications', Causes: 'Salicylates, NSAIDs, proton-pump inhibitors, glucocorticoids' },
          { Systems: 'Genetic', Causes: 'Iron-refractory iron-deficiency anaemia' },
          { Systems: 'Iron-restricted erythropoiesis', Causes: 'Treatment with erythropoiesis-stimulating agents, anaemia of chronic disease, chronic kidney disease' },
        ]},
      ],
    },
    {
      heading: 'Specific Management — Iron Studies Interpretation (No Advanced Renal Failure or Inflammatory Disease)',
      blocks: [
        { type: 'table', headers: ['Point of care', 'Ferritin level (μg/L)', 'Transferrin Saturation', 'Interpretation', 'Management'], rows: [
          { 'Point of care': 'At presentation', 'Ferritin level (μg/L)': '< 30', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Iron deficiency with no iron store', 'Management': 'Start oral iron replacement' },
          { 'Point of care': 'At presentation', 'Ferritin level (μg/L)': '30–99', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Iron deficiency with some iron store', 'Management': 'Start oral iron replacement' },
          { 'Point of care': 'At presentation', 'Ferritin level (μg/L)': '≥ 100', 'Transferrin Saturation': '≥ 20%', 'Interpretation': 'Fe deficiency unlikely', 'Management': 'Evaluate for other causes' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '< 100', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Iron deficiency present', 'Management': 'Continue oral replacement' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '30–99', 'Transferrin Saturation': '≥ 20%', 'Interpretation': 'Recent oral iron replacement initiation', 'Management': 'Continue oral iron replacement' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '≥ 100', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Suspect functional iron deficiency', 'Management': 'Evaluate for anaemia of chronic disease' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '≥ 100', 'Transferrin Saturation': '≥ 20%', 'Interpretation': 'Fe deficiency resolved', 'Management': 'If anaemia resolves, stop therapy and discharge. If anaemia persists, evaluate for other causes.' },
        ]},
        { type: 'text', content: '*Note: In patients with renal failure (CKD G3a and worse), iron deficiency is defined as ferritin < 200 μg/L and transferrin saturation < 20%.' },
      ],
    },
    {
      heading: 'Specific Management — Iron Studies Interpretation (CKD G3a and Worse)',
      blocks: [
        { type: 'table', headers: ['Point of care', 'Ferritin level (μg/L)', 'Transferrin Saturation', 'Interpretation', 'Management'], rows: [
          { 'Point of care': 'At presentation', 'Ferritin level (μg/L)': '< 200', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Iron deficiency with low / no iron store', 'Management': 'Start oral iron replacement' },
          { 'Point of care': 'At presentation', 'Ferritin level (μg/L)': '≥ 200', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Functional iron deficiency', 'Management': 'Start oral iron replacement' },
          { 'Point of care': 'At presentation', 'Ferritin level (μg/L)': '≥ 200', 'Transferrin Saturation': '≥ 20%', 'Interpretation': 'Fe deficiency unlikely. Suspect anaemia of chronic kidney disease', 'Management': 'If Hb ≥ 10, evaluate further and KIV refer Haem. If Hb < 10, refer Renal for management KIV erythropoietin stimulating agents (ESA)' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '< 200', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Iron deficiency present', 'Management': 'Continue oral replacement. If no response of Hb after 3–6 months of oral replacement, refer to Haem or Renal.' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '< 200', 'Transferrin Saturation': '≥ 20%', 'Interpretation': 'Recent oral iron replacement initiation', 'Management': 'Continue oral iron replacement. If no response of Hb after 3–6 months of oral replacement, refer to Haem or Renal.' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '≥ 200', 'Transferrin Saturation': '< 20%', 'Interpretation': 'Suspect functional iron deficiency', 'Management': 'Refer to Renal if anaemia persists. For KIV ESA and/or IV iron if ferritin < 300.' },
          { 'Point of care': 'Monitoring of iron therapy', 'Ferritin level (μg/L)': '≥ 200', 'Transferrin Saturation': '≥ 20%', 'Interpretation': 'Fe deficiency resolved', 'Management': 'If anaemia resolves, stop therapy and discharge. If anaemia persists, refer to Renal. KIV ESA.' },
        ]},
        { type: 'text', content: 'Notes: (1) ESA – erythropoiesis stimulating agent, e.g., Recormon, Darbepoietin, Mircera. ESA and IV iron are generally initiated at Renal or Haem clinic. (2) CKD patients with iron deficiency should be checked for underlying causes as per Iron Deficiency flowchart. (3) Refer to Haem if no other indication for Renal referral; refer Renal if there are other indications for Renal referral.' },
      ],
    },
    {
      heading: 'Specific Management — Oral Iron Therapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Recommended daily oral iron replacement dosing: 100–200 mg of elementary iron, OR 3 mg/kg per day as liquid iron preparation to infants and children (Liquid iron preparation is not available in NUP)' },
          { text: 'Start at low dose once a day to avoid initial intolerance, preferably on empty stomach with monitoring of side effects. Ferrous gluconate and iron polymaltose formulations may be taken during or after meals, as recommended by the manufacturers' },
          { text: 'Side effects include nausea, vomiting, constipation, metallic taste, dark greenish stools (does not affect stool occult blood test)' },
          { text: 'For those who are intolerant to iron tablet, strategies to reduce adverse effect include:', children: [
            { text: 'Take the tablets after meals' },
            { text: 'Reduce the dose of the iron tablets. Alternative-day dosing is acceptable too' },
            { text: 'Use a stool softener or bulk-forming laxative' },
          ]},
          { text: 'Strategies to improve iron absorption include:', children: [
            { text: 'Take separately from foods that may impair absorption, e.g., coffee, tea, milk, and dairy products' },
            { text: 'Minimise exposure to medications that reduce gastric acidity, e.g., proton pump inhibitors and histamine receptor blockers. Iron should be given 2 hours before, or 4 hours after, ingestion of antacids' },
            { text: 'Combine with vitamin C' },
          ]},
        ]},
        { type: 'table', headers: ['Iron salt', 'Elemental iron (mg)', 'Starting dose', 'Availability at NUP'], rows: [
          { 'Iron salt': 'Ferrous gluconate', 'Elemental iron (mg)': '30', 'Starting dose': '1 tablet BD', 'Availability at NUP': '✓' },
          { 'Iron salt': 'Iron polymaltose', 'Elemental iron (mg)': '100', 'Starting dose': '1 tablet OD', 'Availability at NUP': '✓' },
        ]},
        { type: 'list', items: [
          { text: 'Response to treatment:', children: [
            { text: 'A response is seen in 7–10 days with a rise in haemoglobin (Hb) level by at least 1 g/dL' },
            { text: '3 months of treatment can be required for normalisation of Hb' },
            { text: 'Up to 6 months of treatment can be required for repletion of iron stores. It is thus recommended to continue iron therapy for another 3 months after Hb level normalises to replenish iron store' },
          ]},
          { text: 'Monitoring and follow-up:', children: [
            { text: 'First follow up with FBC at 4 weeks to check for rise in Hb, adherence and side effects to iron therapy and review underlying causes. Advise for early review at 2 weeks if low Hb of 8 to 10 g/dL, no improvement in symptoms or patient is intolerant to iron therapy' },
            { text: 'If response is adequate, follow up with FBC (± serum ferritin) can be at 12 weeks, focusing on normalisation of Hb. A further follow up at 24 weeks with FBC and serum ferritin for normalisation in ferritin level and ensuring Hb remains normal' },
            { text: 'Stop iron replacement after Hb and ferritin are normalised, and cause of iron loss is resolved' },
            { text: 'No further monitoring is needed unless symptoms recur' },
          ]},
          { text: 'A lack of response to oral iron replacement can be due to:', children: [
            { text: 'Premature termination of treatment, either by the physician or patient' },
            { text: 'Lack of adherence to the iron tablets (to check for side effects)' },
            { text: 'Unresolved underlying cause of iron deficiency' },
            { text: 'True refractory response to treatment' },
          ]},
          { text: 'Further evaluation and referral:', children: [
            { text: 'Dietitian: dietary causes' },
            { text: 'Gynaecologist: abnormal menstrual bleeding' },
            { text: 'Gastroenterologist / general surgeon: patients with gastrointestinal related symptoms, risk factors and comorbidities' },
            { text: 'Colorectal surgeon: for patients with per rectal bleeding' },
            { text: 'For all men and post-menopausal women with no obvious cause for iron deficiency anaemia, a referral to gastroenterologist or general surgery is indicated for endoscopy to rule out occult gastrointestinal blood loss' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Specific Management — Vitamin B12 Deficiency',
      blocks: [
        { type: 'text', content: 'Vitamin B12 (Vit B12) deficiency develops over years due to large body stores. The daily allowance for adults is 2.4 mcg and can be found in fish, meats, and fortified cereals. Vit B12 plays a role in red blood cell production. About 10% of vitamin B12 deficiency manifest as anaemia. Vit B12 deficiency can also manifest as neuropsychological symptoms alone without anaemia due to its role in DNA synthesis, the myelination process, and the maintenance of the central nervous system.' },
        { type: 'table', headers: ['System', 'Clinical Presentation'], rows: [
          { System: 'Neuropsychiatric', 'Clinical Presentation': 'Impaired cognition, mood disorders, symmetrical paraesthesia/ numbness, gait problems' },
          { System: 'Haematological', 'Clinical Presentation': 'Macrocytic anaemia (commonly), normochromic anaemia (if iron deficiency coexists), pancytopenia (in severe cases). Hypersegmented neutrophils, megaloblastic feature on blood film' },
          { System: 'Glossopharyngeal', 'Clinical Presentation': 'Glossitis, taste impairment' },
        ]},
        { type: 'list', items: [
          { text: 'Risk profiles with higher risk of Vitamin B12 deficiency:', children: [
            { text: 'Restricted diet: Long term vegetarians, elderly, poor dentition, alcohol abuse' },
            { text: 'Prolonged use of medications that can decrease Vit B12 absorption: metformin > 4 months, proton pump inhibitor / histamine H2 blocker use > 12 months' },
            { text: 'Decreased intrinsic factor: Pernicious anaemia, atrophic gastritis, post gastrectomy syndrome' },
            { text: 'Decreased ileal absorption: Crohn\'s disease, ileal resection' },
          ]},
        ]},
        { type: 'table', headers: ['Vitamin B12 levels (pmol/L)', 'Interpretation', 'Management'], rows: [
          { 'Vitamin B12 levels (pmol/L)': '< 145', 'Interpretation': 'Low. Deficiency present (97% sensitive)', 'Management': 'Start replacement' },
          { 'Vitamin B12 levels (pmol/L)': '145–220', 'Interpretation': 'Borderline. Vitamin B12 deficiency cannot be ruled out in the presence of symptoms', 'Management': 'Start replacement if symptoms or anaemia present' },
          { 'Vitamin B12 levels (pmol/L)': '220–569', 'Interpretation': 'Normal', 'Management': 'Evaluate for other causes' },
        ]},
        { type: 'list', items: [
          { text: 'Replacement therapy of Vitamin B12 deficiency:', children: [
            { text: 'Injectable therapy leads to more rapid improvement and should be considered in patients with severe deficiency, severe neurological symptoms, malabsorption, and compliance issues. Replacement treatment is with 1000 mcg intramuscular injections of cyanocobalamin given — every day or every other day for 1 week, followed by once-weekly for 4–8 weeks' },
            { text: 'Patients who present with neurological symptoms require step down parenteral injection to fortnightly for another 6 months after replacement therapy' },
            { text: 'Consider consultation with a gastroenterologist if planning to convert to oral supplementation' },
            { text: 'Those with reversible causes should be treated until the deficiency is corrected and symptoms resolve. Those with long term causes of vitamin B12 deficiency should be switched to maintenance therapy once symptoms / anaemia resolve' },
            { text: 'If patient has both folate and vitamin B12 deficiencies, vitamin B12 should be replaced first to prevent subacute combined degeneration of the spinal cord' },
          ]},
          { text: 'Treatment response and monitoring:', children: [
            { text: 'The clinical response to therapy is usually marked – an immediate sense of well-being, rapid reversal of pancytopenia and mucosal changes, bone marrow reverting to normal in 24 hours, and a brisk reticulocytosis can be seen as early as after 3rd day of treatment' },
            { text: 'Patients with neurological symptoms or other cytopenias should be reviewed at 1 week with FBC' },
            { text: 'At 1 week, there should be haemoglobin increase by ≥ 1g/dL, as well as resolution of leukopenia and thrombocytopenia if present. If there is no improvement in anaemia, leukopenia, or thrombocytopenia by 1 week, refer patient to the haematologist' },
            { text: 'FBC may be repeated at 4 weeks, and 8 weeks if not normalised at 4 weeks from the start of treatment to assess for response. If anaemia has not normalised by 8 weeks, refer patient to the haematologist' },
            { text: 'Neurological recovery begins within 1 week and complete response can be expected within 6 to 12 weeks of treatment. A small percentage may have residual disability, especially if diagnosis and treatment are delayed by 6 months or more' },
            { text: 'After treatment is stopped, it is recommended to monitor Vitamin B12 and FBC in one year\'s time to ensure levels are within normal' },
          ]},
          { text: 'General guide for monitoring of B12 levels after treatment:', children: [
            { text: 'Restricted diet which is reversible: No further monitoring of B12 required unless clinically indicated' },
            { text: 'On chronic medications that can cause mild malabsorption (i.e., metformin): 2-yearly B12 monitoring' },
            { text: 'Vegetarian, known pernicious anaemia, OR chronic conditions that can cause severe malabsorption: Yearly FBC and B12 monitoring' },
          ]},
          { text: 'Lifelong maintenance therapy required for patients with severe malabsorption conditions like chronic gastrointestinal related malabsorption, and pernicious anaemia:', children: [
            { text: 'Usual maintenance: 1000 mcg injections at 1 to 3-monthly intervals' },
            { text: 'Daily oral supplementation with Vitamin B12 1000 mcg daily can be as effective as IM injections' },
            { text: 'Monitor FBC and serum B12 yearly while on maintenance therapy' },
            { text: 'If B12 ≥ 800 pmol/L, withhold B12 replacement and monitor with FBC and vitamin B12 in 6 months. In the absence of pernicious anaemia, vitamin B12 stores in the body takes up to 2 years to deplete. Patients with pernicious anaemia may deplete faster at around 6 months. Restart maintenance therapy at lower dose (i.e., half the frequency) when vitamin B12 < 800 pmol/L, or if recurrence of macrocytic anaemia / symptoms. Resume annual FBC and B12 monitoring, or earlier based on clinical judgement' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Specific Management — Folate Deficiency',
      blocks: [
        { type: 'text', content: 'Folate is found in plant-based foods and fortified grains. Folate deficiency develops quicker over weeks to months due to limited body stores and high turnover rate during normal cell division. Folate deficiency causes megaloblastic anaemia and impaired cognition. Although neuropsychiatric changes have been reported in folate deficiency, such symptoms are more commonly described in vitamin B12 deficiency. Additionally, lack of folate during early pregnancy increases the risk of neural tube defects.' },
        { type: 'table', headers: ['Mechanism', 'Conditions'], rows: [
          { Mechanism: 'Nutritional deficiency', Conditions: 'Substance abuse, overcooked foods, alcoholism, poor quality diet, goats\' milk' },
          { Mechanism: 'Malabsorption', Conditions: 'Celiac disease, inflammatory bowel disease, GI malignancy, short bowel syndrome' },
          { Mechanism: 'Drugs', Conditions: 'Methotrexate, trimethoprim, phenytoin, sulphasalazine' },
          { Mechanism: 'Increased requirements', Conditions: 'Pregnancy, lactation, chronic haemolysis, exfoliative dermatitis' },
        ]},
        { type: 'table', headers: ['Folate level (nmol/L)', 'Interpretation', 'Action'], rows: [
          { 'Folate level (nmol/L)': 'Within normal laboratory reference range', 'Interpretation': 'Normal', 'Action': 'Evaluate for other causes' },
          { 'Folate level (nmol/L)': 'Less than lower limit of normal laboratory reference range', 'Interpretation': 'Low', 'Action': 'Start folic acid replacement' },
        ]},
        { type: 'list', items: [
          { text: 'Treatment and follow-up:', children: [
            { text: 'Rule out presence of vitamin B12 deficiency before starting therapy' },
            { text: 'Initial treatment – 5 mg daily until correction of anaemia (usually by 8 weeks)' },
            { text: 'All patients should be investigated for causes of folate deficiency' },
            { text: 'FBC may be repeated at 4 weeks, and 8 weeks (if haemoglobin remains low at 4 weeks) from the start of treatment to assess for response' },
            { text: 'At 1 week, there should be increase in retic count and haemoglobin and resolution of leukopenia and thrombocytopenia if present' },
            { text: 'If leukopenia / thrombocytopenia or anaemia has not normalised by 8 weeks, refer patient to the haematologist' },
            { text: 'Stop folate therapy after 8 weeks of replacement or until anaemia normalised, whichever is later. No further monitoring of FBC or serum folate is required' },
            { text: 'Only patients with chronic haemolysis or increased cell turnover disorders need long-term therapy. Otherwise, monitoring with FBC and folate yearly is recommended' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Specific Management — Anaemia of Chronic Disease (ACD)',
      blocks: [
        { type: 'list', items: [
          { text: 'Features:', children: [
            { text: 'Anaemia with normal or low MCV' },
            { text: 'Presence of a chronic inflammatory condition, e.g., infection, autoimmune disease, kidney disease or cancer' },
            { text: 'Evidence of functional iron deficiency: low to normal iron, low transferrin, low transferrin saturation; ferritin ≥ 100ug/L' },
            { text: 'Other causes of anaemia excluded' },
          ]},
          { text: 'Risk profiles with higher risk of anaemia of chronic disease:', children: [
            { text: 'Collagen vascular and autoimmune disorders: Rheumatoid arthritis, SLE, inflammatory bowel disease' },
            { text: 'Chronic infections: Tuberculosis, chronic fungal infection, hepatitis, HIV' },
            { text: 'Chronic disease: Moderate or severe renal disease, diabetes mellitus, congestive heart failure, chronic pulmonary disease, chronic liver disease, cerebral vascular disease' },
            { text: 'Cancer: Leukaemia, lymphoma, renal cell carcinoma, multiple myeloma, solid tumour' },
            { text: 'Critical illness and major trauma' },
          ]},
          { text: 'Clinical assessment:', children: [
            { text: 'Past medical history: Chronic diseases or recent major surgery / trauma / critical illness' },
            { text: 'System review: Joint pain and swelling, fever and constitutional symptoms of anorexia, night sweats, arthralgia, myalgia, weight loss' },
            { text: 'Physical examination: Check for lymph nodes, abdominal tenderness, and mass, organomegaly, chest examination, rash, joints, and eye' },
            { text: 'First line Investigation (done as part of anaemia workup): FBC, ferritin, iron studies, vitamin B12 / folate, review creatinine, PBF if macrocytosis or other cytopenias present' },
            { text: 'Second line investigation: KIV ESR / creatinine, retics, LFT, TFT if clinically indicated' },
          ]},
          { text: 'Treatment approach:', children: [
            { text: 'Treat underlying cause. Refer to relevant specialist if required' },
            { text: 'Refer to the haematologist if the diagnosis is unclear or in established cases of ACD when Hb < 10 g/dL and the underlying cause cannot be eliminated. Further treatment may involve erythropoietin +/- parenteral iron' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Indications for Referral to Haematologist',
      blocks: [
        { type: 'table', headers: ['Point of care', 'Indications for referral'], rows: [
          { 'Point of care': 'At presentation', 'Indications for referral': 'Haematological emergencies (via ED): symptomatic anaemia, severe anaemia, blast, thrombocytopenia with bleeding. Presence of other cytopenias [myelodysplastic syndrome], abnormal blood film – haemoglobinopathies (except thalassaemia).' },
          { 'Point of care': 'After investigations', 'Indications for referral': 'Unexplained anaemia' },
          { 'Point of care': 'Failure to respond to replacement therapy', 'Indications for referral': 'Persistent Fe deficiency anaemia at 3 months and no other causes of anaemia found. Persistent Vit B12 deficiency related anaemia with other cytopenias at 1 week. Persistent Vit B12 / folate deficiency anaemia at 8 weeks [macrocytic anaemia – to rule out marrow disease]' },
          { 'Point of care': 'Long-term follow-up', 'Indications for referral': 'Relapse of vit B12 deficiency anaemia after stopping of therapy [to rule out pernicious anaemia if not previously done]. Hb < 10 in those with anaemia of chronic disease or CKD' },
          { 'Point of care': 'Other indications', 'Indications for referral': 'Persistent macrocytosis without anaemia (1 year follow up). Retic > 3% (suspect hemolytic anaemia)' },
        ]},
      ],
    },
    {
      heading: 'Annexes — Quick Reference: Iron, B12, Folate Replacement Regimes',
      blocks: [
        { type: 'list', items: [
          { text: 'Fe deficiency cut-off: Ferritin level < 30, OR Ferritin level 30–99 + transferrin sat < 20%, OR CKD patients: Ferritin level < 200 + transferrin sat < 20%' },
        ]},
        { type: 'table', headers: ['Iron salt', 'Elemental iron (mg)', 'Starting dose', 'Availability at NUP'], rows: [
          { 'Iron salt': 'Ferrous gluconate', 'Elemental iron (mg)': '30', 'Starting dose': '1 tablet BD', 'Availability at NUP': '✓' },
          { 'Iron salt': 'Iron polymaltose', 'Elemental iron (mg)': '100', 'Starting dose': '1 tablet OD', 'Availability at NUP': '✓' },
        ]},
        { type: 'list', items: [
          { text: 'Monitoring after starting Fe replacement:', children: [
            { text: 'At 2* or 4 weeks: FBC – rise in Hb, symptoms improvement (*earlier TCU for patients with Hb of 8 to 10 g/dL)' },
            { text: 'At 12 weeks: FBC ± ferritin – normalisation of Hb. If Hb still low, refer haematologist' },
            { text: 'At 24 weeks: FBC + ferritin. Normal Hb and ferritin: stop Rx. Low Hb or low ferritin: continue replacement and refer haematologist' },
          ]},
          { text: 'Vit B12 deficiency cut-off: B12 deficient: Lab cutoff < 145, OR < 220 pmol/L (in the presence of symptoms)' },
          { text: 'B12 replacement:', children: [
            { text: 'Acute parenteral: 1000mcg i/m cyanocobalamin — every day or every other day for 1 week, followed by once-weekly for 4–8 weeks. Patients with neurological symptoms require step down parenteral injection to fortnightly for another 6 months after replacement therapy' },
            { text: 'Acute oral: 1000mcg oral mecobalamin OD for 6 months' },
            { text: 'Maintenance: 1000mcg i/m cyanocobalamin given 1 to 3 monthly, OR 1000mcg oral mecobalamin OD' },
          ]},
          { text: 'Folate deficiency cut-off: Less than lower limit of normal lab reference range' },
          { text: 'Folate replacement: Rule out presence of vitamin B12 deficiency before starting therapy. Initial treatment – 5 mg daily until correction of anaemia (usually by 8 weeks)' },
          { text: 'Other haematological-related issues — Normal Hb with microcytosis:', children: [
            { text: 'Possible cause: Thalassaemia trait. Clues: Mentzer index (MCV/RBC) < 13, RDW < 14% normal. Action: Consider Thalassaemia workup' },
          ]},
          { text: 'Other haematological-related issues — Normal Hb with macrocytosis:', children: [
            { text: 'Normal variant: Stable MCV with no progression. Exclude other causes at onset. Empirical therapy with neurobion in high-risk patients, repeat FBC in 6 months, no monitoring if normalised. Otherwise refer haematologist' },
            { text: 'Early myelodysplastic syndrome, subclinical thyroid disease, liver disease: Assess clinically. Check blood film, KIV TFT and LFT. Manage causes clinically. If no known cause, monitor FBC in 1 year. If persistent macrocytosis, refer haematologist. If normalised, no further investigations required' },
          ]},
          { text: 'High ferritin while on iron replacement:', children: [
            { text: 'Mild-mod iron overload (No chronic inflammation/CKD: Female > 150 μg/L, male > 400 μg/L; Chronic inflammation/CKD: > 500 μg/L): Transferrin saturation > 50%, patient on iron supplements. Action: Stop iron supplement, repeat ferritin in 3–6 months, refer haematologist if ferritin remains high' },
            { text: 'Severe iron overload (> 1000 μg/L): Transferrin saturation > 50%. Action: Stop iron supplement, refer haematologist for further evaluation' },
          ]},
        ]},
      ],
    },
  ],
};
export { anaemia };

// ---------------------------------------------------------------------------
// 05 NUP CPG — Anxiety Disorder (Feb 2025, updated Jun 2025)
// ---------------------------------------------------------------------------
const anxietyDisorder: CpgDocument = {
  id: 'cpg-anxiety-disorder',
  condition: 'Anxiety Disorder',
  source: '05 NUP CPG - Anxiety Disorder.pdf',
  reviewDate: 'Reviewed February 2025 (Dr Jonathan Tung / Dr Benjamin Cheah). Updated June 2025 (Dr Tan Jee Ooi). Next review: June 2028.',
  advisors: 'Dr Soo Shuenn Chiang (Senior Consultant, Dept of Psychological Medicine, NUH). Key FPs: Dr Jonathan Tung / Dr Benjamin Cheah / Dr Tan Jee Ooi',
  sections: [
    {
      heading: 'Definition of Anxiety',
      blocks: [
        { type: 'text', content: 'Anxiety is a tense emotional state associated with a feeling of impending danger, often accompanied by somatic symptoms. It is used to describe the mental and physical response to a feared situation — Flight or Fight. Anxiety is normal and serves as a built-in warning device. Moderate levels of anxiety can enhance performance. Even high levels of anxiety are normal if consistent with the demands of the situation.' },
      ],
    },
    {
      heading: 'Symptoms of Anxiety',
      blocks: [
        { type: 'list', items: [
          { text: 'Psychological:', children: [
            { text: 'Irritability' },
            { text: 'Poor concentration and memory' },
            { text: 'Restlessness' },
            { text: 'Worrying thoughts' },
            { text: 'Sexual Dysfunction' },
            { text: 'Insomnia / Nightmares' },
          ]},
          { text: 'Physical:', children: [
            { text: 'Bowel disturbance' },
            { text: 'Tremor' },
            { text: 'Indigestion' },
            { text: 'Dizziness' },
            { text: 'Chest discomfort' },
            { text: 'Headache' },
            { text: 'Difficulty inhaling' },
            { text: 'Muscle ache' },
            { text: 'Palpitations' },
          ]},
        ]},
      ],
    },
    {
      heading: '5 Basic Questions for Patient Assessment',
      blocks: [
        { type: 'text', content: 'These are the questions that a doctor should ask himself or herself when a patient presents with anxiety symptoms.' },
        { type: 'list', items: [
          { text: 'Is what my patient experiencing Pathological?' },
          { text: 'What is the Pattern of the symptoms described?' },
          { text: 'What are the present stressors and Problems faced by him/her?' },
          { text: 'What can I do for him / her Practically in a busy practice?' },
          { text: 'Is Psychiatric referral needed?' },
        ]},
      ],
    },
    {
      heading: 'Pathological Anxiety',
      blocks: [
        { type: 'text', content: 'Anxiety is pathological when:' },
        { type: 'list', items: [
          { text: 'It is greatly disproportionate to the risks and severity of the stimulus / stressors' },
          { text: 'It continues even when the danger is no longer present' },
          { text: 'Interferes with social, vocational, or physical aspects of daily life' },
          { text: 'Leads to avoidance' },
        ]},
      ],
    },
    {
      heading: 'Screening for Generalised Anxiety Disorder (GAD-2 and GAD-7)',
      blocks: [
        { type: 'text', content: 'Screening for generalised anxiety disorder (GAD) can be done using the Generalised Anxiety 2 item (GAD-2) questionnaire. A score of ≥ 3 on GAD-2 proceeds to the full GAD-7.' },
        { type: 'table', headers: ['Question', 'Not at all', 'Several days', 'More than half the days', 'Nearly everyday'], rows: [
          { Question: 'Feeling nervous, anxious or on edge', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Not being able to stop or control worrying', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Worrying too much about different things (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Trouble relaxing (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Being so restless that it\'s hard to sit still (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Becoming easily annoyed or irritable (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
          { Question: 'Feeling afraid as if something awful might happen (GAD-7)', 'Not at all': '0', 'Several days': '1', 'More than half the days': '2', 'Nearly everyday': '3' },
        ]},
        { type: 'table', headers: ['Score', 'Interpretation'], rows: [
          { Score: '0 – 4 points', Interpretation: 'No anxiety' },
          { Score: '5 – 9 points', Interpretation: 'Mild anxiety' },
          { Score: '10 – 14 points', Interpretation: 'Moderate anxiety' },
          { Score: '15 – 21 points', Interpretation: 'Severe anxiety' },
        ]},
      ],
    },
    {
      heading: 'Diagnosing the Type of Anxiety Disorder',
      blocks: [
        { type: 'table', headers: ['Type', 'DSM Diagnostic Criteria'], rows: [
          { Type: 'Generalised anxiety disorder', 'DSM Diagnostic Criteria': 'Excessive concern about various situations, happening on more days than not for a minimum of 6 months. The individual struggles against dwelling on the troubling situations. A minimum of 3 of the following symptoms (at least one present for majority of last 6 months): (1) Restlessness / agitation / keyed up / on the edge; (2) Fatigue; (3) Trouble concentrating; (4) Irritability; (5) Muscular tension; (6) Sleep disruption (difficulty falling or staying asleep, feeling restless, unsatisfying sleep). The anxiety, worry, or physical symptoms result in significant distress or impairment in daily functioning.' },
          { Type: 'Panic disorder', 'DSM Diagnostic Criteria': 'Repeated panic attacks, with anxiety rapidly escalating within minutes, including at least 4 of: Palpitations / rapid heartbeat; Sweating; Tremors / shaking; Breathlessness; Choking sensation; Chest pain / discomfort; Nausea or GI distress; Vertigo / giddiness; Sensations of heat or cold; Paraesthesia; Derealisation; Fear of dying; Fear of loss of self-control. At least one attack followed by ≥1 month of chronic worry about further attacks or maladaptive behavioural changes.' },
          { Type: 'Adjustment disorder', 'DSM Diagnostic Criteria': 'Emotional or behavioural symptoms in response to specific stressful events, within 3 months. Symptoms include severe distress out of proportion to the stressor OR significant decline in functioning. Does not qualify as another mental disorder. Symptoms resolve within 6 months once stressor is removed.' },
          { Type: 'Acute stress disorder', 'DSM Diagnostic Criteria': 'Similar to PTSD symptoms but at least 9 symptoms from any category appearing right after trauma and persisting 3 days to 1 month.' },
          { Type: 'Social anxiety disorder / social phobia', 'DSM Diagnostic Criteria': 'Excessive anxiety about being judged by others in social situations (meetings, conversations with unfamiliar people, public speaking). Fear of being perceived negatively leads to avoidance or enduring with intense anxiety.' },
          { Type: 'Agoraphobia', 'DSM Diagnostic Criteria': 'Intense anxiety about ≥2 of: using public transportation; being in open spaces; being in enclosed spaces; being in a crowd; being alone outside home. These situations typically cause significant distress, necessitate a companion, or are endured with intense fear.' },
          { Type: 'Post-traumatic stress disorder', 'DSM Diagnostic Criteria': 'Exposure to actual or potential death, severe injury, or sexual violence. Must include: ≥1 intrusive symptom; ≥1 avoidance symptom; ≥2 negative mood/cognition changes; ≥2 arousal symptoms. Duration ≥1 month. Onset may be delayed ≥6 months post-event.' },
          { Type: 'Specific phobia', 'DSM Diagnostic Criteria': 'Exaggerated fear response to a particular object or situation. Fear triggered immediately by presence of stimulus; person avoids it or endures with intense anxiety.' },
        ]},
        { type: 'text', content: '* Anxiety disorders typically last at least 6 months, except PTSD and acute stress reactions. The disturbances are not attributed to physiological effects of a substance / drug / medication and not better explained by another mental disorder.\n* Please refer to NUP Obsessive Compulsive Disorder CPG for more information about OCD and its management.' },
      ],
    },
    {
      heading: 'Differential Diagnosis / Medical Conditions That May Aggravate Anxiety Symptoms',
      blocks: [
        { type: 'table', headers: ['Disease System', 'Examples'], rows: [
          { 'Disease System': 'Endocrine', 'Examples': 'Hyperthyroidism, hypoglycaemia, phaeochromocytoma, adrenal insufficiency, hyperadrenocorticism' },
          { 'Disease System': 'Cardiovascular', 'Examples': 'Congestive heart failure, pulmonary embolism, arrhythmia, mitral valve prolapse' },
          { 'Disease System': 'Respiratory', 'Examples': 'Asthma, chronic obstructive lung disease, pneumonia' },
          { 'Disease System': 'Metabolic', 'Examples': 'Diabetes mellitus' },
          { 'Disease System': 'Neurologic', 'Examples': 'Vestibular dysfunction, migraine, neoplasm, temporal lobe epilepsy' },
          { 'Disease System': 'Gastrointestinal', 'Examples': 'Irritable bowel syndrome' },
          { 'Disease System': 'Haematologic', 'Examples': 'Anaemia, Vitamin B12 deficiency' },
          { 'Disease System': 'Drug Misuse', 'Examples': 'Alcohol withdrawal, benzodiazepine withdrawal, caffeine overuse' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — General Approach',
      blocks: [
        { type: 'text', content: 'General Approach is to consider patient needs, preferences, and readiness by discussing and agreeing on:' },
        { type: 'list', items: [
          { text: 'Goals of treatment' },
          { text: 'Preference between treatment modalities' },
          { text: 'Willingness and ability to engage in psychological treatment' },
          { text: 'Ability to adhere to regular medication' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Non-Pharmacological Therapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Educate the patient about the nature, aetiology of his / her anxiety symptoms and description of the symptoms of anxiety' },
          { text: 'Stress reduction strategies:', children: [
            { text: 'Deal with negative thoughts' },
            { text: 'Diaphragmatic breathing' },
            { text: 'Progressive muscle relaxation' },
          ]},
          { text: 'Encourage exercise' },
          { text: 'Suggest mind-body practices, grounding work' },
          { text: 'Reduce alcohol and caffeine intake. Stop smoking' },
          { text: 'Involve family members. Utilise community / social resources' },
          { text: 'Supportive counselling and psychotherapy (i.e. cognitive behavioural therapy). Reassure patient that it is frightening and not life threatening' },
          { text: 'Monitoring over time and deal with early signs of relapse' },
          { text: 'Promote good sleep hygiene' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Medication by Anxiety Type',
      blocks: [
        { type: 'table', headers: ['Type of Anxiety Disorder', 'Examples of Non-Pharmacological Therapies', 'Medication'], rows: [
          { 'Type of Anxiety Disorder': 'Generalized Anxiety Disorder*', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy, stress management', 'Medication': 'SSRIs or SNRIs (for GAD and panic disorders only). Benzodiazepines (for breakthrough anxiety episodes). Sedating anti-histamines (for breakthrough anxiety episodes / management of agitation / insomnia from SSRIs in the initial phase). Beta-blockers (for palpitations/tremors). 2nd generation anti-psychotics can be used as augmentation (e.g. quetiapine 25mg ON x 1 week → 50mg ON x 3wks, review in 4 weeks).' },
          { 'Type of Anxiety Disorder': 'Panic Disorder#', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (graded exposure)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Social Phobia', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (exposure to feared social situation)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Agoraphobia', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (graded exposure to feared situation)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Post-Traumatic Stress Disorder', 'Examples of Non-Pharmacological Therapies': 'Multiple modalities e.g. CBT, CPT, EMDR, stress inoculation training, treatment of co-morbid conditions (depression)', 'Medication': 'SSRIs or SNRIs (see above)' },
          { 'Type of Anxiety Disorder': 'Specific Phobia', 'Examples of Non-Pharmacological Therapies': 'Cognitive Behavioural Therapy (exposure to feared situation or object)', 'Medication': 'Drugs alone are not helpful. Require cognitive behavioural therapy' },
        ]},
        { type: 'text', content: '*For GAD, first line SSRIs are Escitalopram, Paroxetine (not available in NUP formulary) or Sertraline. 2nd line are SNRIs (Venlafaxine).\n#For panic disorder, all SSRIs are suitable as first line. 2nd line are SNRIs (Venlafaxine).' },
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Benzodiazepines',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Alprazolam (0.25mg tablet)', 'Common Dose': 'Short term management of anxiety. Initiate at 0.25mg to 0.5mg BD. Usual doses: 2–6mg/day in 3–4 divided doses. No renal adjustment required (use with caution). Hepatic adjustment required.', 'Maximum Dose': '10mg/day in divided doses', 'Common ADRs': 'Sedation, muscle weakness, ataxia, headache, vertigo, fatigue, confusion, psychomotor impairment, paradoxical reactions (agitation/insomnia), constipation, increased/decreased appetite, micturition difficulty, anterograde amnesia', 'Contraindications / Precautions': 'Contraindicated in pregnancy; concomitant use with ketoconazole/itraconazole; narrow-angle glaucoma; severe respiratory insufficiency; myasthenia gravis; sleep apnoea; severe hepatic impairment. Avoid in patients with history of alcohol/drug dependence. Withdrawal rebound anxiety commonly occurs with shorter acting drugs. Common interacting medications: CNS depressants (e.g. opioids).' },
          { Drug: 'Clonazepam (0.5mg tablet)', 'Common Dose': 'Anxiety. Initiate at 0.25mg BD. Usual doses: 1–3mg/day in 1–4 divided doses. No renal adjustment required (use with caution). Hepatic adjustment required.', 'Maximum Dose': '4mg/day in divided doses', 'Common ADRs': 'As above', 'Contraindications / Precautions': 'As above' },
          { Drug: 'Lorazepam (0.5mg / 1mg tablet)', 'Common Dose': 'Anxiety / Insomnia. Initiate at 0.5mg to 1mg BD. No renal adjustment required (use with caution). Hepatic adjustment required – prolonged elimination half-life.', 'Maximum Dose': '10mg/day in divided doses', 'Common ADRs': 'As above', 'Contraindications / Precautions': 'As above' },
          { Drug: 'Chlordiazepoxide 5mg + clidinium 2.5mg capsules (Librax)', 'Common Dose': 'Only for emotional distress caused by irritable bowel syndrome. Adult initiation: 2 capsules 4 times a day. Geriatric dose: 1 capsule 2 times a day.', 'Maximum Dose': '1 capsule 2 times a day (geriatric)', 'Common ADRs': 'As above', 'Contraindications / Precautions': 'Librax is not approved for patients below 18 years old' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Antipsychotics',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common dose', 'Maximum dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Quetiapine (* Recommend 2nd generation anti-psychotics)', 'Common dose': 'Initiate at 25mg ON. Ensure baseline ECG has been done with QTc <500ms before adding on quetiapine. Titrated up to 150mg ON as tolerated.', 'Maximum dose': '150mg ON', 'Common ADRs': 'Sedation, anticholinergic effect, postural hypotension, angioedema, dyslipidaemia and worsening metabolic syndrome, EPSEs, hypothyroidism, neuroleptic malignant syndrome, prolonged QTc, sexual dysfunction, GI motility issues, hepatic impairment, seizures (may reduce seizure threshold), urinary retention', 'Contraindications / Precautions': 'Use with caution in patients with decreased GI motility, hepatic impairment, seizure history' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Gabapentinoids',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Pregabalin (* Gabapentin not really used for GAD)', 'Common Dose': '150mg per day in 2 divided doses, increase gradually based on response', 'Maximum Dose': '600mg per day (in 2 or 3 divided doses)', 'Common ADRs': 'Giddiness, sedation, fatigue, suicidal ideation (debatable)', 'Contraindications / Precautions': 'Existing myasthenia gravis (may exacerbate condition). Renal impairment (renal adjustment required). Substance abuse issues (potentially addictive).' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Beta Blockers',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADRs', 'Contraindications / Precautions'], rows: [
          { Drug: 'Propranolol (off-label use)', 'Common Dose': 'For symptomatic relief of generalised anxiety (palpitations, hand tremors). 10–40mg BD to TDS PRN. No renal adjustment required (use with caution). No hepatic adjustment required (use with caution).', 'Maximum Dose': '40mg TDS', 'Common ADRs': 'Bradycardia, hypotension, fatigue, insomnia, vivid dreams', 'Contraindications / Precautions': 'Asthma, bradycardia, hypotension, 1st/2nd/3rd degree heart block. May mask signs and symptoms of hypoglycaemia & hyperthyroidism. Avoid abrupt withdrawal (acute tachycardia/hypertension).' },
        ]},
      ],
    },
    {
      heading: 'Patient Management — Pharmacological Therapy: Antihistamines',
      blocks: [
        { type: 'table', headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADR', 'Contraindications / Precautions'], rows: [
          { Drug: 'Hydroxyzine (10mg / 25mg Tablets)', 'Common Dose': 'Anxiety (short term use). May initiate at up to 10–25mg/day in divided doses. Dosage adjusted to individual response. Hydroxyzine is MOH approved for use in managing anxiety. Renal adjustment required. Hepatic adjustment required (may require dosing interval adjustment).', 'Maximum Dose': 'Max 400mg daily. Max single dose: 100mg for adults, 50mg for elderly.', 'Common ADR': 'Dizziness, drowsiness, headache, dry mouth, blurred vision, constipation, urinary retention, hypotension, thickening of bronchial secretions', 'Contraindications / Precautions': 'Contraindicated during early pregnancy. Caution in urinary retention. Anticholinergic effects not well tolerated in the elderly. Acute generalized exanthematous pustulosis (rare). QT prolongation.' },
          { Drug: 'Diphenhydramine (25mg tab) (off label use)', 'Common Dose': 'Short term management of insomnia (not anxiety). Adult 25–50mg given 30 min before bedtime. Diphenhydramine is FDA approved for insomnia but not anxiety use.', 'Maximum Dose': '—', 'Common ADR': '—', 'Contraindications / Precautions': '—' },
        ]},
      ],
    },
    {
      heading: 'Treatment Pointers',
      blocks: [
        { type: 'list', items: [
          { text: 'Most Cases of Anxiety Present First to Primary Care Physicians:', children: [
            { text: 'Most cases can be managed in primary care' },
            { text: 'Take a good history (Symptoms, severity, duration; Psychosocial stressors; Suicide Risk; Exclude organic illness)' },
          ]},
          { text: 'Some Treatment Pointers:', children: [
            { text: 'Start with an SSRI (choice based on side effect profile, drug-drug interactions and/or patient preference / treatment history)' },
            { text: 'Use past responses to medication or psychological treatment to help guide choice of treatment' },
            { text: 'Early ADRs of SSRIs include agitation & insomnia (faster onset than therapeutic effect on anxiety — Tx with BZDs / hydroxyzine)' },
            { text: 'Consider adding B blocker if severe tremors or palpitations are present' },
            { text: 'If no response, consider a different SSRI before other medications (Adequate trial of SSRI is considered to be 6 weeks at therapeutic dosing)' },
            { text: 'Consider doing a baseline ECG for QTc especially when starting escitalopram, venlafaxine, bupropion, amitriptyline, nortriptyline, quetiapine, olanzapine, chlorpromazine, haloperidol' },
            { text: 'Do check sodium after about 3–4 weeks in patients aged > 65 years or those with multiple comorbidities started on SSRIs' },
            { text: 'Listen actively' },
            { text: 'Encourage referral to NUP MSW for support/CBT for mild cases, or NUP Psychologist for moderate or severe cases' },
          ]},
          { text: 'Dosages and Treatment Phases:', children: [
            { text: 'Dosages typically similar for adult primary care and psychiatric patients' },
            { text: 'Initial drug titration: 4 to 8 weeks' },
            { text: 'Monitor closely for emergent suicidal thoughts and behaviour when initiating any antidepressant medication especially those under 25 years of age or with pre-existing suicide risk' },
            { text: 'Revisit safety plan and collaborate with other providers or family / caregivers to ensure support is in place' },
          ]},
          { text: 'Maintenance and Remission Phase:', children: [
            { text: 'Continuation of treatment for at least 6 to 12 months' },
            { text: 'Aim to achieve improvement in symptoms from baseline' },
            { text: 'Symptoms are minimal and no longer meet diagnostic criteria' },
            { text: 'Restoration of premorbid functioning and improved quality of life' },
          ]},
          { text: 'Relapse Prevention:', children: [
            { text: 'Consider switching to psychological treatment or adding in psychological treatment to medication to reduce risk of relapse once remission is reached' },
            { text: 'Discuss medication discontinuation based on history of relapse, adverse side effect, comorbid mental health conditions, ongoing or anticipated psychosocial stressors, degree of social support and patient\'s preference' },
            { text: 'Gradually reduce the dose of antidepressant medications to minimise discontinuation symptoms and risk of relapse' },
            { text: 'Risk of relapse is highest in the first several months of stopping treatment, with one-third to half occurring within one year' },
            { text: 'After stopping medication, consider review 1 month after, and 3–6 months after. This could be via video consult' },
            { text: 'Patients should always be educated on how to seek help early should they experience a relapse, and to be aware of their relapse symptoms' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Considerations When Using Benzodiazepines (BZD) in General Practice',
      blocks: [
        { type: 'list', items: [
          { text: 'The dosage of BZD should be the lowest effective dose necessary to achieve symptomatic relief' },
          { text: 'Repeat prescriptions for BZD should not be provided without a clinical review' },
          { text: 'As an adjunct to antidepressant treatment in anxiety disorders, the use of benzodiazepines should be limited to maximally 2 weeks at the lowest effective dose during each consult. The dose should be gradually tapered off. Benzodiazepine use should be closely monitored for adverse effects, abuse, tolerance, dependence and withdrawal symptoms' },
          { text: 'BZD prescribed for anxiety may be abused by some patients with co-morbid alcohol / substance abuse or dependence and are best avoided where possible in such patients' },
          { text: 'Do not extend use of benzodiazepines beyond 4 weeks per year at primary care, even when prescribed at the therapeutic dosages' },
        ]},
        { type: 'text', content: 'Specialist referral should be initiated for: (1) Patients who require or have been prescribed BZD beyond a cumulative period of 4 weeks per year. (2) Patients who are already on high dose and or long-term BZD from specialist or hospitals should be referred back to their specialist for review. (3) Patients who are unable to reduce the intake of BZD despite initial commitment to a tapering dose.' },
        { type: 'text', content: 'Note: Benzodiazepines have no role in the long-term treatment of anxiety disorders. Patients who refuse to be referred to a specialist should be counselled appropriately and documented in the case sheet. If the patient turns aggressive, they should be reported to the police.' },
      ],
    },
    {
      heading: 'Role of Health Care Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Family Physician (Dr):', children: [
            { text: 'Refer patients with psychological problems who fulfilled inclusion criteria to Health and Mind Clinic (HMC) in NUP (those aged ≥ 18 years with depression, anxiety, adjustment, insomnia)' },
            { text: 'Manage stable patients discharged from HMC' },
            { text: 'Refer to Psychiatry SOC based on geographical boundaries for those with high risk of suicide or risk of harm to self or others, or patients who are part of the exclusion list of HMC e.g., addictions / legal issues / bipolar disorder / new onset psychosis / new onset OCD' },
            { text: 'Start patients with moderate-severe anxiety disorders on appropriate SSRIs or other appropriate psychotropics (consult senior doctors if unsure)' },
          ]},
          { text: 'Care Manager in Health and Mind Clinic (HMC CM):', children: [
            { text: 'Gather biodata history and conduct depression, anxiety, insomnia, and suicide risk screening for patients visiting HMC Dr for the first time' },
            { text: 'Offer psychoeducation and basic self-help techniques, along with information and resources related to mental health' },
            { text: 'Conduct virtual consultations to assess the well-being of patients two weeks after initiating treatment with anti-depressants / anti-anxiety medications' },
            { text: 'Conduct virtual consultations to assess well-being of patients after discontinuation of psychotropics to detect early relapse' },
            { text: 'Details to refer to NUP-WI-CS-COP-030 Management of Patients in Health and Mind Clinic' },
          ]},
          { text: 'Family Physician in Health and Mind Clinic (HMC Dr):', children: [
            { text: 'Manage new cases and follow-up cases of depression / anxiety / insomnia who are 18 years old and above' },
            { text: 'Follow-up psychiatric stepdown cases' },
            { text: 'Escalate patients to Psychiatry SOC if needed' },
            { text: 'Details to refer to NUP-WI-CS-COP-030 Management of Patients in Health and Mind Clinic' },
          ]},
          { text: 'Psychologist:', children: [
            { text: 'Conduct psychological screening and assessment during initial assessment to assess the severity of mental health symptoms, complexity of issues and presence / absence of risk tendencies and behaviours' },
            { text: 'Formulate treatment plan for follow-up visits' },
            { text: 'Can work with many types of mental health cases inclusive grief; full list as per Allied Health - Psych Service' },
          ]},
          { text: 'Medical Social Worker:', children: [
            { text: 'Manage care and counselling inclusive cognitive behavioural therapy if appropriate, for patients with mild anxiety and mild depression' },
            { text: 'Provide sleep hygiene advice for patients with subthreshold insomnia' },
            { text: 'Provide care assessment and arrangement, supportive counselling, crisis intervention, non-medical related financial assistance, and support patients in need of information and referral' },
          ]},
          { text: 'Financial Counsellor:', children: [
            { text: 'Patients with financial difficulties on medical bills could be referred to Financial Counsellor for assistance' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Conditions for Referral to Psychiatry SOC',
      blocks: [
        { type: 'text', content: 'Patients should be referred when:' },
        { type: 'list', items: [
          { text: 'Patients 17 years and below who might need psychotropics' },
          { text: 'If patient has not responded to 3 different antidepressants or very high dose antidepressant monotherapy' },
          { text: 'Patient requires to take anti-psychotics as an adjunct to managing anxiety disorder (unless patient has been seen by or discussed with psychiatrist prior and is suggested to continue on anti-psychotics)' },
          { text: 'Presence of complicated medical history or special circumstances, e.g. Cushing disease, liver disease etc.' },
          { text: 'Presence of comorbid personality disorders, substance dependence' },
          { text: 'New onset psychotic disorder or bipolar disorder' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components for Anxiety',
      blocks: [
        { type: 'table', headers: ['Recommended Care Components', 'Minimum Frequency'], rows: [
          { 'Recommended Care Components': 'Generalised anxiety disorder – 7 (GAD-7) score', 'Minimum Frequency': 'Every clinical review when appropriate, minimally 6 monthly for patients with generalized anxiety disorder' },
          { 'Recommended Care Components': 'Suicide screening', 'Minimum Frequency': 'Where clinically indicated – please refer to NUP-WI-CS-COP-032 Management of Suicidal Patients' },
        ]},
        { type: 'text', content: '* More frequently if clinically indicated' },
      ],
    },
  ],
};
export { anxietyDisorder };

// ---------------------------------------------------------------------------
// 06 NUP CPG — Joint Pain in Primary Care (Aug 2024)
// ---------------------------------------------------------------------------
const jointPain: CpgDocument = {
  id: 'cpg-joint-pain',
  condition: 'Approach and Management of Joint Pain in Primary Care',
  source: '06 NUP CPG - Approach and Management of Joint Pain in Primary Care.pdf',
  reviewDate: 'Reviewed and updated August 2024 by NUP Ortho SAG. Next review: August 2027.',
  advisors: 'Dr Amelia Santosa (Senior Consultant, Rheumatology, NUH) / Dr Muhammad Nazrul (Consultant, Orthopaedic Surgery, NUH). Key FPs: Dr Tan Juanmin / Dr Jasline Chua / Dr Zhang Zhi Peng',
  sections: [
    {
      heading: 'Workflow for Approach & Management of Musculoskeletal Pain',
      blocks: [
        { type: 'list', items: [
          { text: 'History and Physical Examination — 5 key questions:', children: [
            { text: '1. Is it articular?' },
            { text: '2. Is it acute or chronic?' },
            { text: '3. Is it inflammatory? (Prolonged early morning stiffness > 60 minutes; Synovial swelling; Any systemic symptoms such as fatigue, rash or weight loss; Is ESR or CRP elevated?)' },
            { text: '4. How many joints are involved (mono-, oligo-, polyarticular)?' },
            { text: '5. What pattern of joints are involved (asymmetric / symmetric, peripheral / axial / both)?' },
          ]},
          { text: 'If NOT articular (Chronic): Consider Fibromyalgia, Polymyalgia Rheumatica, Bursitis, Tendinitis, Referred pain' },
          { text: 'If articular and Acute: Consider Acute Arthritis — Septic arthritis, Gout, Pseudogout, Reactive arthritis' },
          { text: 'If significant trauma or focal bone pain: Consider X-ray. If abnormal: consider Fracture, tumour, or metabolic bone disease' },
          { text: 'If articular and Chronic, Non-inflammatory: Check if AC, IP, CMC, 1st MTP, Hip or Knee joints involved — if yes: Likely Osteoarthritis; if no: consider Osteonecrosis, Charcot arthritis' },
          { text: 'If articular and Chronic, Inflammatory: Consider various chronic inflammatory arthritis depending on other clinical features:', children: [
            { text: 'Early undifferentiated inflammatory arthritis / early RA' },
            { text: 'Psoriatic arthritis (Psoriasis)' },
            { text: 'SLE (small joints — young female, sicca, oral ulcers, Raynaud\'s phenomenon)' },
            { text: 'Other inflammatory polyarthropathy: reactive arthritis, spondyloarthritis' },
          ]},
        ]},
      ],
    },
    {
      heading: 'History',
      blocks: [
        { type: 'list', items: [
          { text: 'The pattern of joints involved, i.e., small and/or large joints, asymmetrical or symmetrical' },
          { text: 'Duration of pain and any associated symptoms of stiffness, numbness or weakness. Early morning stiffness lasting more than 1 hour is significant' },
          { text: 'Any aggravating and relieving factors of the painful joint and its progression of the symptoms. Classically inflammatory joint pain improves with activity, while non-inflammatory joint pain worsens with activity' },
          { text: 'Any axial involvement (spine, sacroiliac joints)' },
          { text: 'Family history of inflammatory arthritis, connective tissue disease, skin psoriasis' },
          { text: 'Other constitutional/systemic symptoms (i.e., fever, fatigue, chills, body ache, nausea, weight loss, diarrhoea, skin rashes, mucosal ulcers, uveitis, etc.)' },
        ]},
      ],
    },
    {
      heading: 'Examination of Affected Joints',
      blocks: [
        { type: 'list', items: [
          { text: '1. LOOK: Inspect the joint for physical deformity, site(s) of swelling, skin changes suggestive of infection, any past surgical scars, pattern of joint involvement' },
          { text: '2. FEEL: Palpate the joint and assess for increased skin temperature, joint tenderness, joint swelling and joint deformity' },
          { text: '3. MOVE: Assess the joint for active and passive range of movement, power and weakness. One should not forget to assess the functional status of the affected regions' },
          { text: '4. SPECIAL TESTS: "Metacarpophalangeal (MCP) or metatarsophalangeal (MTP) squeeze test", also known as the Gaenslen\'s test (GT): Easy and simple to perform routinely in a busy clinical setting, involves applying pressure on MCP / MTP heads region, like in a hand-shake and assessing for tenderness. A positive squeeze test signifies the presence of synovitis at the MCPJs / MTPJs' },
          { text: '5. ASSESS FUNCTION: Assess the functional status of the hands/lower limbs: (5 simple tasks to screen hand function: Turn the doorknob, use a key, or buttoning, pick up a coin, and write using a pen. Lower limbs: Assess the gait/check for falls, get up and go test)' },
        ]},
      ],
    },
    {
      heading: 'Other Related Physical Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'Hallmarks features suggestive of synovitis:', children: [
            { text: 'Synovial swelling' },
            { text: 'Warmth/tenderness over a joint' },
            { text: 'Joint effusion' },
            { text: 'Limitation in range of motion' },
          ]},
        ]},
        { type: 'table', headers: ['Signs of Degenerative Joint Disease', 'Signs of Inflammatory Joint Disease'], rows: [
          { 'Signs of Degenerative Joint Disease': 'Bony overgrowth of joints (osteophytes)', 'Signs of Inflammatory Joint Disease': 'Bone erosions' },
          { 'Signs of Degenerative Joint Disease': 'Limited range of movement', 'Signs of Inflammatory Joint Disease': 'Limited range of movement' },
          { 'Signs of Degenerative Joint Disease': 'Crepitus during action / passive motion (usually knees; does not necessarily mean degeneration)', 'Signs of Inflammatory Joint Disease': 'Erythema and warmth, e.g., gout, pseudogout, infection' },
          { 'Signs of Degenerative Joint Disease': 'Joint effusion', 'Signs of Inflammatory Joint Disease': 'Joint effusion' },
          { 'Signs of Degenerative Joint Disease': 'Joint tenderness', 'Signs of Inflammatory Joint Disease': 'Joint tenderness' },
          { 'Signs of Degenerative Joint Disease': 'Joint deformity – e.g., Varus deformity consistent with knee osteoarthritis', 'Signs of Inflammatory Joint Disease': 'Joint deformity is only seen in chronic uncontrolled inflammatory arthritis' },
          { 'Signs of Degenerative Joint Disease': 'Pain more mechanical in nature especially with activities such as squatting, climbing stairs etc.', 'Signs of Inflammatory Joint Disease': 'Pain not relieved significantly by rest' },
        ]},
      ],
    },
    {
      heading: 'Additional Clinical Features to Take Note',
      blocks: [
        { type: 'list', items: [
          { text: 'The presence of subcutaneous nodules over the elbows may be due to rheumatoid nodules or tophi' },
          { text: 'Skin lesions may suggest that the joint symptoms are due to psoriatic arthritis, SLE, viral infection, or Adult Onset Still\'s disease / systemic Juvenile Idiopathic Arthritis' },
          { text: 'Eye involvement — including keratoconjunctivitis sicca, uveitis, conjunctivitis, and episcleritis, are features suggestive of rheumatic illnesses' },
          { text: 'Concomitant axial pain or stiffness suggests the possibility of axial spondyloarthritis or another seronegative spondyloarthritis' },
          { text: 'Check other relevant organ systems for possible conditions related to rheumatoid condition: e.g., Interstitial fibrosis, Felty\'s Syndrome, etc.' },
        ]},
        { type: 'table', headers: ['Category', 'Examples of Causes'], rows: [
          { Category: 'Infectious arthritis', 'Examples of Causes': 'Bacterial, Lyme Disease, Bacterial Endocarditis, Viral, Other infection' },
          { Category: 'Post-infectious (reactive) arthritis', 'Examples of Causes': 'Rheumatic Fever, Reactive Fever, Enteric Infection' },
          { Category: 'Crystal-Induced Arthritis', 'Examples of Causes': 'Gout, Pseudogout' },
          { Category: 'Juvenile Idiopathic Arthritis', 'Examples of Causes': '' },
          { Category: 'Other seronegative spondyloarthritides', 'Examples of Causes': 'Ankylosing Spondylitis, Psoriatic Arthritis, Inflammatory bowel disease' },
          { Category: 'Rheumatoid arthritis', 'Examples of Causes': '' },
          { Category: 'Inflammatory osteoarthritis', 'Examples of Causes': '' },
          { Category: 'Systemic Rheumatic Illness', 'Examples of Causes': 'Systemic Lupus Erythematous, Systemic Vasculitis, Systemic Sclerosis, Polymyositis/Dermatomyositis, Adult Onset Still\'s Disease, Behcet\'s Disease, Relapsing Polychondritis, Autoinflammatory disorder' },
          { Category: 'Other Systemic illness', 'Examples of Causes': 'Sarcoidosis, Palindromic Rheumatism, Malignancy, Hyperlipoproteinemias, Familial Mediterranean Fever' },
        ]},
        { type: 'text', content: 'Table 1. Causes of polyarticular inflammatory arthritis' },
      ],
    },
    {
      heading: 'Risk Factors for Septic Arthritis',
      blocks: [
        { type: 'text', content: 'Always consider this in the acute presentation of inflammatory monoarthritis:' },
        { type: 'list', items: [
          { text: 'Elderly and very young children' },
          { text: 'Skin infection and cutaneous ulcers' },
          { text: 'Diabetes mellitus (especially if poorly controlled)' },
          { text: 'Chronic kidney disease or liver disease' },
          { text: 'Previous joint pathology (e.g., rheumatoid arthritis, osteoarthritis, crystal arthropathy)' },
          { text: 'Recent joint surgery' },
          { text: 'Prosthetic joint' },
          { text: 'IV drug abuse, alcoholism' },
          { text: 'Previous intra-articular corticosteroid injection' },
          { text: 'Recent hospitalisation with risk for haematogenous spread of infection, e.g., intravenous cannulation, PICC lines' },
        ]},
      ],
    },
    {
      heading: 'Investigations — Blood Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'Full Blood Count (FBC):', children: [
            { text: 'High total white cell count and differential count: acute gout / septic arthritis' },
            { text: 'Anaemia – normochromic, normocytic (chronic illness), microcytic (consider iron deficiency from NSAID use)' },
            { text: 'Thrombocytosis – either reactive or underlying iron deficiency' },
            { text: 'Anaemia, leukopenia, lymphopenia, thrombocytopenia — consider acute viral infection, SLE or adverse effects of DMARD in patient with established inflammatory arthritis on DMARD' },
          ]},
          { text: 'Erythrocyte Sedimentation Rate (ESR) and/or C-reactive protein (CRP):', children: [
            { text: 'Help to differentiate presence of inflammatory medical conditions. However, a normal ESR / CRP may not exclude inflammatory arthritis' },
            { text: 'There are rare instances where patients with inflammatory arthritis may have a normal ESR and/or CRP, even in the presence of active peripheral arthritis or spondylitis' },
            { text: 'Note: Upper limit of normal of ESR: Male = Age / 2; Female = (Age+10) / 2' },
          ]},
          { text: 'Rheumatoid Factor (RF): should not be ordered routinely but should be reserved for cases in which there is a reasonable clinical suspicion, i.e., when there are prolonged inflammatory joint pains (acute joint pains should be first evaluated to exclude infective or crystal disease causes) with / without systemic symptoms. The indiscriminate use of RF will result in a high frequency of false-positive results and in additional expensive and unnecessary testing.' },
          { text: 'Antinuclear Antibody (ANA) — not available in NUP: should not be ordered routinely but should be reserved for cases in which there is a reasonable clinical suspicion for a connective tissue disease, i.e., when there are systemic symptoms and/or laboratory features (e.g., cytopenias) IN ADDITION to the arthritis.' },
        ]},
      ],
    },
    {
      heading: 'Investigations — Radiological Imaging',
      blocks: [
        { type: 'list', items: [
          { text: 'Consider radiographs when:', children: [
            { text: '1. Significant history of trauma (exclude fracture / dislocation)' },
            { text: '2. Focal bone pain (to exclude fracture or neoplasm)' },
          ]},
          { text: 'Plain X-Ray: able to detect fractures, tumours, and metabolic bone disease. A plain X-ray is unnecessary to diagnose osteoarthritis in patients with risk factors and typical symptoms and signs. It can be considered in patients with chronic atraumatic joint pain (> 6 weeks) and may be helpful before referral for surgery as a baseline. Radiological findings may not correlate well with patients\' symptoms.' },
          { text: 'When ordering X-rays to assess knee osteoarthritis:', children: [
            { text: '1. A bilateral weight-bearing anterior-posterior (AP) view and lateral (LAT) view can be considered to accentuate the radiological features of osteoarthritis and for comparison' },
            { text: '2. Skyline view should be considered if involvement of the patellofemoral compartment is suspected' },
          ]},
          { text: 'Note: changes on x-ray in patients with inflammatory arthritis and crystal arthritis are only apparent in chronic disease (usually years)' },
        ]},
        { type: 'text', content: 'The following investigations are only done in hospitals or tertiary institutions (Not available at NUP at this time):' },
        { type: 'list', items: [
          { text: '1. Musculoskeletal Ultrasound (MSUS): To assess soft tissues, cartilage, bone surfaces, and fluid-containing structures. MSUS can be used clinically for: Assessing for the presence of synovitis; Imaging tendons and bursae to guide treatment (e.g. supraspinatus tendinopathies, rotator cuff tears, sub-acromial / sub-deltoid bursitis); Guiding aspiration and/or injection of joints or soft tissues. *Blind joint and soft tissue aspirations/injections are still advocated in straightforward cases.' },
          { text: '2. Computerised Tomography (CT): May be useful in detecting cortical bony lesions and is widely used in fracture detection, especially in complex areas such as the cervical spine.' },
          { text: '3. Magnetic Resonance Imaging (MRI): Commonly used for: MRI sacroiliac joints — diagnosis of early spondyloarthritis especially when ESR/CRP normal; MRI knee — for internal derangement of the knee, ligamentous injuries, meniscal tears following sports injuries or in osteoarthritis of the knees; MRI spine — for mechanical back pain with increasing severity, sciatica, radicular symptoms; osteoporotic compression fractures (acute fractures which may be amenable to vertebroplasty), or when there are red flags for malignancy; MRI shoulder — for rotator cuff tears prior to surgery.' },
          { text: '4. Nuclear Medicine Studies: Bone Scan for metastases, cancer staging especially for osteoblastic tumours like CA breast and prostate.' },
          { text: '5. Synovial Fluid Composition: Inflammatory joint fluid with crystals establishes the diagnosis of gout or pseudogout. Non-inflammatory synovial fluid (e.g. < 2000 WBCs or < 75% neutrophils) should lead to consideration of osteoarthritis, soft tissue injury, or viral infection. A positive synovial fluid culture establishes the diagnosis of infectious arthritis. A sterile inflammatory joint fluid raises the suspicion of systemic rheumatic disorders; such patients should have further evaluation and should be referred to rheumatologist for further workup. A bloody effusion should lead to consideration of a trauma (most commonly meniscal injuries in OA knee), coagulopathy, tumour, or a Charcot joint.' },
        ]},
      ],
    },
    {
      heading: 'Musculoskeletal Emergencies — Red Flags',
      blocks: [
        { type: 'list', items: [
          { text: 'Hot or swollen joints may suggest infection; always consider TB (extrapulmonary) in a patient with chronic arthritis and risk factors, e.g. on an anti-TNF biologic, regardless of duration of biologic use' },
          { text: 'Constitutional symptoms (high-grade fever, weight loss, malaise) — suspicion of infection or sepsis; in children, acute leukaemia is always a consideration' },
          { text: 'Weakness may be a symptom of a compartment syndrome or an acute myelopathy' },
          { text: 'Burning pain, numbness, or paraesthesia may suggest an acute myelopathy, radiculopathy, or neuropathy' },
        ]},
      ],
    },
    {
      heading: 'Management — Osteoarthritis: Initial Management & Treatment Goals',
      blocks: [
        { type: 'list', items: [
          { text: 'Conservative management should be the first line and mainstay management as most patients with OA can be managed in the community' },
          { text: 'Treatment goals:', children: [
            { text: 'Adequate pain control' },
            { text: 'Improve or maintain function' },
            { text: 'Allow patients to function independently in the community for as much as possible' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Management — Osteoarthritis: Non-Pharmacological Treatment',
      blocks: [
        { type: 'list', items: [
          { text: 'Patient education' },
          { text: 'Lifestyle modification: appropriate weight loss, low-impact exercises (e.g., swimming, cycling (including stationary bikes), deep-water running – aqua jog)' },
          { text: 'Physiotherapy: Pain education, activity modification, lower limb strengthening exercises including quadriceps strengthening' },
          { text: 'Appropriate walking aids' },
          { text: 'Roles of non-doctor team members:', children: [
            { text: 'Physiotherapists play a crucial role in the management of OA' },
            { text: 'They can provide patient education such as pain education and promote self-management' },
            { text: 'They can provide directed muscle strengthening exercises to reduce pain and improve function' },
            { text: 'They can provide advice on activity modification and assisted devices (e.g. walking aid)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Management — Osteoarthritis: Pharmacological Treatment',
      blocks: [
        { type: 'list', items: [
          { text: 'Analgesia:', children: [
            { text: 'Topical NSAIDs' },
            { text: 'Oral paracetamol' },
            { text: 'Oral NSAIDs (if no contraindication)' },
            { text: 'Oral opioids have similar pain reduction efficacy to NSAIDs but with a relatively higher incidence of side effects. Should not be given as first line.' },
          ]},
          { text: 'Intraarticular injections (Hydrocortisone & Lignocaine, viscosupplementations – Hyaluronic acid) may provide temporary pain reduction and relief but are not the mainstay of conservative treatment. Their efficacy and cost effectiveness remain controversial.' },
          { text: 'The evidence surrounding the value of nutritional supplements, including glucosamine and/or chondroitin, in managing patients with osteoarthritis, has been inconclusive. The weight of the evidence indicates a lack of efficacy and essentially placebo effects.' },
        ]},
      ],
    },
    {
      heading: 'Management — Osteoarthritis: Surgical Options & Post-Surgical Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Surgical Options:', children: [
            { text: 'Realignment osteotomy' },
            { text: 'Arthroplasty' },
          ]},
          { text: 'Post Surgical Care:', children: [
            { text: 'Pain management' },
            { text: 'Wound care' },
            { text: 'Rehabilitation: usually initiated postoperatively inpatient. It includes range of motion exercises, gait training, quadriceps strengthening and training in activities of daily living.' },
            { text: 'In the long term: pursue low- to moderate- intensity, low-impact exercises such as walking and swimming.' },
          ]},
          { text: 'Consideration for referral to hospital and a specialist: Most patients with osteoarthritis can be managed in primary care. Referral to a specialist should be discussed with patients with unsatisfactory improvement of pain, stability, or function despite adequate conservative (non-pharmacological and pharmacological) treatment.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Component for Osteoarthritis',
      blocks: [
        { type: 'table', headers: ['Recommended Care Components', 'Minimum Frequency', 'Remarks'], rows: [
          { 'Recommended Care Components': 'Assessment of joint pain', 'Minimum Frequency': 'Annually', 'Remarks': 'Visual Analog Scale' },
          { 'Recommended Care Components': 'Weight and BMI Assessment (less relevant for hand OA)', 'Minimum Frequency': 'Annually', 'Remarks': 'Keep < 23kg/m² (For non-Asian population, keep BMI < 25kg/m²)' },
          { 'Recommended Care Components': 'Activities of Daily Living (ADL) Assessment (if appropriate)', 'Minimum Frequency': 'Annually', 'Remarks': 'Helps to determine functional impairment. Referral to physiotherapy or occupational therapy assessment for assisted devices should be considered if function is impaired.' },
        ]},
        { type: 'text', content: '* More frequently if clinically indicated' },
      ],
    },
    {
      heading: 'Management — Rheumatoid Arthritis: Non-Pharmacological Treatment',
      blocks: [
        { type: 'list', items: [
          { text: 'Patient education' },
          { text: 'Psychosocial interventions' },
          { text: 'Rest, exercise, and physical and occupational therapy' },
          { text: 'Nutritional and dietary counselling' },
          { text: 'Interventions to reduce risks of cardiovascular disease, including smoking cessation and lipid control' },
          { text: 'Screening for and treatment of osteoporosis' },
          { text: 'Immunizations to decrease risk of infectious complications of immunosuppressive therapies' },
        ]},
      ],
    },
    {
      heading: 'Management — Rheumatoid Arthritis: Pharmacological Treatment',
      blocks: [
        { type: 'text', content: 'The aims of using pharmacological/immunosuppressive therapy in RA are: To induce or maintain a remission; To reduce the frequency of flare or relapse; To allow tapering of glucocorticoids while maintaining disease control; Prevention of progressive joint erosions, damage and loss of function.' },
        { type: 'list', items: [
          { text: '1. Non-Steroidal Anti-Inflammatory Drugs (NSAIDs) / Selective Cyclooxygenase Inhibitors:', children: [
            { text: 'For pain relief in RA, but do not prevent irreversible joint damage' },
            { text: 'Caution is advised as long term and large dosages of NSAIDs will affect renal function and increase the risk of peptic ulcer disease / upper gastrointestinal bleeding and cardiovascular events' },
            { text: 'Baseline Hb and Cr should be checked' },
            { text: 'Patients with cross-reactive NSAID hypersensitivity (angioedema/urticaria/anaphylaxis to 2 or more NSAIDs) should be treated with paracetamol (if tolerated) or opioids / tramadol for pain relief' },
            { text: 'Referral to an allergist for drug provocation test to a selective COX-2 inhibitor to assess for tolerance is recommended should a selective COX-2 inhibitor be needed' },
          ]},
          { text: '2. Glucocorticoids:', children: [
            { text: 'Effective in suppressing the symptoms of RA and have an impact on disease progression' },
            { text: 'However, because of their associated toxicities, they are not ideal for the long-term management of RA' },
            { text: 'A trial of Prednisolone 5 mg BD for 2 weeks can be used to assess response in newly diagnosed RA' },
          ]},
          { text: '3. Non Biologic Disease-Modifying Anti-Rheumatic Drugs (DMARDs):', children: [
            { text: 'Treatment with DMARDs should be initiated as soon as possible for patients with confirmed RA and persistent synovitis; as active RA may lead to irreversible joint damage early in the disease process' },
            { text: 'Combination DMARD therapy is sometimes necessary to achieve disease control in patients with severe RA and may also be appropriate for some patients with early, moderately active disease' },
            { text: 'Such patients should be referred to a rheumatologist for early management' },
            { text: 'Commonly used non-biologic DMARDs in Singapore: Hydroxychloroquine, sulfasalazine, methotrexate – alone or in combination; Leflunomide, cyclosporine – when the above first line DMARDs fail or patients develop adverse effects; Intramuscular gold — when the above first line DMARDs fail or patients develop adverse effects' },
          ]},
          { text: '4. Biologic DMARDs and targeted synthetic DMARDs:', children: [
            { text: 'Generally targets cytokines, their receptors or other cell surface molecules that mediate the inflammatory response and bone resorption (e.g. tumour necrosis factor (TNF)-alpha)' },
            { text: 'The most commonly used biologic agents in Singapore: Anti-TNF inhibitors — infliximab (IV), adalimumab (SC self-injection every 2 weeks), golimumab (SC self-injection once a month); Rituximab – IV, usually 2 doses 2 weeks apart for refractory RA; Others – tocilizumab (anti-IL6); The most commonly used targeted synthetic DMARDs in RA: tofacitinib and baricitinib' },
            { text: 'Common side effects of all the above: Infections – including bacterial infections, extrapulmonary TB, herpes zoster; Malignancy' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Management — Rheumatoid Arthritis: Consideration for Collaborative Care with Specialist',
      blocks: [
        { type: 'list', items: [
          { text: 'Collaborative care or anchoring care with primary care physicians can be considered for:', children: [
            { text: 'Patients deemed to be in DMARD-free remission' },
            { text: 'Patients deemed to have quiescent/low disease activity (no swollen and/or tender joints, ESR/CRP within normal range) for at least 3–6 months under a specialist\'s care' },
            { text: 'Patients on non-biologic DMARD therapy at a maintenance dosage' },
          ]},
          { text: 'Patients on active treatment for RA should be on follow up with a rheumatologist. Management of any concurrent osteoporosis, and other appropriate preventive care (e.g., vaccinations, cardiovascular risk factors) can continue at primary care' },
          { text: 'Please refer to the appropriate NUP CPGs: Hypertension, Lipids, Diabetes Mellitus, Chronic Kidney Disease, Osteoporosis' },
          { text: 'Patients in the following clinical scenarios should also be arranged for active review by a rheumatologist:', children: [
            { text: 'Patients requiring new initiation of DMARDs' },
            { text: 'Patients with RA flares requiring either high dose (e.g., prednisolone > 10mg/day) or long term (≥ 6 months) glucocorticoid therapy (which should be accompanied by appropriate dose adjustment of DMARDs)' },
            { text: 'Patients with extra-articular manifestations of RA' },
            { text: 'Patients on biologic DMARD therapy' },
            { text: 'Paediatric patients with 6 weeks or more of persistent joint swelling, and joint pain' },
            { text: 'Patients who develop active disease (1 or more swollen and/or tender joints, high ESR/CRP) while on collaborative care' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Management — Rheumatoid Arthritis: Monitoring for Patients on DMARDs',
      blocks: [
        { type: 'list', items: [
          { text: 'Commonly all RA patients prescribed with immunosuppressive agents have the following monitored:', children: [
            { text: 'FBC, ESR, AST and ALT, and Creatinine done at 2–3 monthly intervals when stable' },
            { text: 'FBC, ESR, AST and ALT, and Creatinine within 2–4 weeks of dose escalation' },
            { text: 'Abnormal FBC, increasing ESR and increased transaminitis (ALT/AST) 3x higher than normal require further evaluation and assessment' },
            { text: 'Eye assessment and evaluation needs to be done for patients on chronic hydroxychloroquine use (Retinal toxicity)' },
          ]},
          { text: 'Trend of the laboratory result is as important as the absolute value. The following situations may necessitate reduction of DMARD dosage, e.g.:', children: [
            { text: 'Gradual decline in TW: for e.g. 4.4 x 10⁶/L to 3.6 x 10⁶/L' },
            { text: 'ALT increasing gradually: for e.g. 30 U/L to 56 U/L to 78 U/L when on methotrexate' },
            { text: 'Gradual rise in Cr from baseline to 1.5–2x upper limit of normal when on cyclosporine/methotrexate' },
            { text: 'Medication review of all other medications the patient is taking for his/her chronic medical conditions may potentiate these laboratory abnormalities. DMARD interruption/dose alteration may be needed, e.g.: Patient on MTX and statin for hyperlipidaemia with underlying non-alcoholic fatty liver disease; Gradual rise in Cr from ACE inhibitor/ARB dose escalation when on cyclosporine/methotrexate' },
          ]},
          { text: 'An acute viral illness may cause transient leukopenia, elevated ALT/AST which may be aggravated in patients on pre-existing DMARDs. This may require temporary interruption of the DMARD for 1 week till leukopenia and/or elevated ALT/AST resolve.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Component for Rheumatoid Arthritis',
      blocks: [
        { type: 'table', headers: ['Recommended Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { 'Recommended Care Component': 'Assessment of RA Disease Activity', 'Minimum Frequency': 'Annually', 'Remarks': 'Number of tender / swollen joints, CRP or ESR. Measures of disease activity must be obtained and documented regularly, as frequently as monthly for patients with high/moderate disease activity, or less frequently (at least at 6–12 months intervals) for patients in sustained low disease activity or remission.' },
        ]},
        { type: 'text', content: '* More frequently if clinically indicated' },
      ],
    },
    {
      heading: 'Summary',
      blocks: [
        { type: 'list', items: [
          { text: 'Patients with a history of significant trauma or focal bone pain should have plain radiographs of the affected joint to rule out fracture, tumour, or metabolic bone disease' },
          { text: 'Good history and relevant targeted physical examination are important when approaching patient presenting with acute or chronic joint pain' },
          { text: 'Most basic investigations including blood tests can be non-specific and need to be considered in tandem with patient\'s history and physical examination findings' },
          { text: 'Patients need to be referred urgently to the rheumatologist or to the Emergency Department (if severe / very unwell) for:', children: [
            { text: 'Suspected active SLE / Connective tissue disease (CTD)' },
            { text: 'Active dermatomyositis complicated by interstitial lung disease (ILD)' },
            { text: 'Known antiphospholipid syndrome with DVT / PE or stroke' },
          ]},
        ]},
      ],
    },
  ],
};
export { jointPain };

// ---------------------------------------------------------------------------
// Combined export of all CPG documents
// ---------------------------------------------------------------------------
export const cpgDocuments: CpgDocument[] = [
  allergicConjunctivitis,
  allergicRhinitis,
  anaemia,
  anxietyDisorder,
  jointPain,
];
