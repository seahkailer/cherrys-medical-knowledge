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

// ---------------------------------------------------------------------------
// 07 NUP CPG — Approach to Acute Red Eye (Dec 2022)
// ---------------------------------------------------------------------------
const acuteRedEye: CpgDocument = {
  id: 'cpg-acute-red-eye',
  condition: 'Approach to Acute Red Eye',
  source: '07 NUP CPG - Approach to Acute Red Eye.pdf',
  reviewDate: '12/2022. Next review date: 6/2024.',
  advisors: 'Dr Yuen Yew Sen (NUH Ophthalmology)',
  sections: [
    {
      heading: 'Suggested Protocol',
      blocks: [
        { type: 'text', content: 'Based on need to rule out etiologies that may cause early, rapid visual loss if undiagnosed.' },
        { type: 'list', items: [
          { text: 'Torchlight exam of cornea — Cornea opacity (*Especially in contact lens users) → Infective Bacterial Keratitis; Hypopyon → Endophthalmitis' },
          { text: 'Pupil exam with torchlight — Fixed, mid-dilated pupil (unresponsive to light) + Absence of previous cataract surgery → Acute Angle Closure Glaucoma; Irregular pupil → Likely Anterior Uveitis' },
          { text: 'Check ocular motility — Ocular mobility limited → suspect Orbital Cellulitis' },
        ]},
      ],
    },
    {
      heading: 'Red Flags',
      blocks: [
        { type: 'list', items: [
          { text: 'SUDDEN VISUAL LOSS' },
          { text: 'NEUROLOGICAL SYMPTOMS (Diplopia, acute ptosis, visual field deficits)' },
          { text: 'TRAUMA (eye injury, foreign body entry)' },
          { text: 'POSTERIOR SEGMENT SYMPTOMS (Acute floaters/photopsia)' },
        ]},
      ],
    },
    {
      heading: 'Step 1 — Refer Stat / Same Day',
      blocks: [
        { type: 'text', content: 'Refer Stat to Emergency Department or to Ophthalmology Clinic (same day) if:' },
        { type: 'list', items: [
          { text: 'Any positive findings from the suggested protocol above, OR' },
          { text: 'Any cases with recent ocular intervention (surgery, intravitreal injections), OR' },
          { text: 'Any Red Flags (sudden visual loss, neurological symptoms, trauma, posterior segment symptoms)' },
        ]},
      ],
    },
    {
      heading: 'Step 2 — Treatment (in absence of all red flags)',
      blocks: [
        { type: 'text', content: 'In the absence of all of the above, one or more of the treatment options below can be instituted where appropriate:' },
        { type: 'list', items: [
          { text: 'Preservative-Free Lubricating eye drops 1 drop 3 HOURLY PRN', children: [
            { text: 'Refresh ($9.39 per box of 30 single-use vials of 0.4ml)' },
            { text: 'Tears Naturale Free (Available in NUP retail pharmacy but not in formulary)' },
          ]},
          { text: 'Topical antibiotic eye drops 1 drop QDS', children: [
            { text: 'Chloramphenicol for 5 days ($1.10 per bot for SC, $2.20 per bot for Non-SC) — first line for adult age group' },
            { text: 'Tobramycin for 7 days (Non-Std $4.00 per bot for SC/Non-SC) — first line for paediatric age group' },
            { text: 'Ciprofloxacin for 5 days ($5.27 per bot for SC, $10.54 per bot for Non-SC)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Step 3 & 4 — Follow-Up and Documentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Instruct the patient to return in a few days if not getting better or if getting worse.' },
          { text: 'Document: Clear cornea, no opacity seen. Pupils round, reactive to light. No hypopyon. EOM (extraocular movement) full.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 08 NUP CPG — Approach to Gastroenteritis in Primary Care (Jun 2025)
// ---------------------------------------------------------------------------
const gastroenteritis: CpgDocument = {
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

// ---------------------------------------------------------------------------
// 09 NUP CPG — Atrial Fibrillation (Mar 2026)
// ---------------------------------------------------------------------------
const atrialFibrillation: CpgDocument = {
  id: 'cpg-atrial-fibrillation',
  condition: 'Atrial Fibrillation',
  source: '09 NUP CPG - Atrial Fibrillation.pdf',
  reviewDate: 'Reviewed March 2026. Next review date: March 2029.',
  advisors: 'Key FPs: Dr Chen Jiawei / Dr Kwan Yew Seng. Specialist Advisor: Dr Lim Toon Wei (Senior Consultant, Department of Cardiology, NUHCS). Acknowledgement: NUHSP: Mr Marvin Sim',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'The estimated incidence of atrial fibrillation worldwide for men and women is 20.9 million and 12.6 million respectively, with a higher incidence in developed countries. Atrial fibrillation is independently associated with a two-fold increased all-cause mortality risk in women and 1.5-fold increase in men. Atrial fibrillation increases the risk of stroke by 3 to 5 times. In Singapore, 17% of strokes occurred in patients with atrial fibrillation. Non-valvular atrial fibrillation forms the majority of AF cases seen in NUP and is the focus of this guideline. AF associated with significant mitral stenosis or mechanical heart valves is associated with higher stroke risk and is not included.' },
        { type: 'text', content: 'The 3 pillars of AF prevention and treatment are: (1) lifestyle and risk-factor modification, (2) stroke prevention, and (3) symptom management.' },
      ],
    },
    {
      heading: 'Stages of Atrial Fibrillation',
      blocks: [
        { type: 'table', headers: ['Stage', 'Description', 'Explanation'], rows: [
          { cells: ['1', 'At risk of atrial fibrillation', 'Modifiable risk factors: obesity, lack of fitness, hypertension, sleep apnoea, excessive alcohol consumption, diabetes mellitus. Non-modifiable: genetic factors (TTN, MYH7, MYH6, LMNA, KCNQ1 variants), male sex, old age'] },
          { cells: ['2', 'Pre–atrial fibrillation', 'Structural or electrical conditions that can lead to AF (e.g., atrial enlargement, frequent atrial ectopy, short bursts of atrial tachycardia, atrial flutter, heart failure, valve disease, coronary artery disease, hypertrophic cardiomyopathy, neuromuscular disorders, thyroid disease)'] },
          { cells: ['3A', 'Paroxysmal atrial fibrillation', 'Intermittent and terminating within 7 days of onset'] },
          { cells: ['3B', 'Persistent atrial fibrillation', 'Continuous and lasting longer than 7 days'] },
          { cells: ['3C', 'Long-standing persistent atrial fibrillation', 'Continuous and lasting longer than 12 months'] },
          { cells: ['3D', 'Successful atrial fibrillation ablation', 'Freedom from atrial fibrillation after ablation'] },
          { cells: ['4', 'Permanent atrial fibrillation', 'Not pursuing further attempts at rhythm control'] },
        ]},
      ],
    },
    {
      heading: 'Primary & Secondary Prevention',
      blocks: [
        { type: 'list', items: [
          { text: 'Primary Prevention', children: [
            { text: 'Maintain or achieve a healthy weight' },
            { text: 'Engage in physical activity' },
            { text: 'Moderate alcohol consumption or abstain; avoid binge drinking' },
            { text: 'Stop smoking' },
            { text: 'Control hypertension' },
            { text: 'Control hyperglycaemia in diabetes' },
          ]},
          { text: 'Secondary Prevention (for those who already have AF)', children: [
            { text: 'Lose weight if overweight or obese (BMI > 27 kg/m²)' },
            { text: 'Start a standardised exercise program' },
            { text: 'Stop smoking' },
            { text: 'Minimise alcohol consumption or abstain entirely' },
            { text: 'Optimally control comorbidities including hypertension and diabetes' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Approach — History',
      blocks: [
        { type: 'list', items: [
          { text: 'Asymptomatic' },
          { text: 'Palpitations' },
          { text: 'Chest Pain or discomfort' },
          { text: 'Shortness of Breath' },
          { text: 'Giddiness, Syncope' },
          { text: 'Decreased effort tolerance, Fatigue' },
          { text: 'Anxiety' },
          { text: 'Transient Ischemic Attack / Stroke' },
          { text: 'Evaluation of associated co-morbidities', children: [
            { text: 'Genetic Predisposition' },
            { text: 'Older Age (biggest risk factor for AF)' },
            { text: 'Hypertension' },
            { text: 'Heart Failure' },
            { text: 'Valvular Heart Disease' },
            { text: 'Myocardial Infarction' },
            { text: 'Thyroid Dysfunction' },
            { text: 'Obesity' },
            { text: 'Diabetes Mellitus' },
            { text: 'Chronic Obstructive Pulmonary Disease' },
            { text: 'Obstructive Sleep Apnoea' },
            { text: 'Chronic Kidney Disease' },
            { text: 'Smoking' },
            { text: 'Alcohol Consumption' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Approach — Physical Examination & Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'Physical Examination', children: [
            { text: 'Blood Pressure, Heart Rate' },
            { text: 'Cardiovascular Examination: presence of cardiac murmurs, features of cardiac failure' },
            { text: 'Neurological Examination' },
            { text: 'Thyroid Dysfunction' },
          ]},
          { text: 'Basic Investigations (for all patients)', children: [
            { text: 'Electrocardiogram (ECG) — Absence of P waves, irregular undulating baseline, irregularly irregular R-R intervals' },
            { text: 'Full blood count (FBC)' },
            { text: 'Serum electrolytes' },
            { text: 'Thyroid function test (TFT)' },
            { text: 'Liver function test (LFT)' },
            { text: 'Coagulation profile' },
            { text: 'Transthoracic echocardiogram' },
          ]},
          { text: 'Additional Investigations (for selected patients)', children: [
            { text: 'Ambulatory ECG' },
            { text: 'Transoesophageal echocardiogram' },
            { text: 'Coronary angiography or cardiac stress testing' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Principles of Management — Red Flags for Urgent Referral to ED',
      blocks: [
        { type: 'list', items: [
          { text: 'Haemodynamically unstable' },
          { text: 'Features of myocardial ischaemia' },
          { text: 'Features of congestive cardiac failure' },
          { text: 'New onset focal neurological deficit' },
          { text: 'Severe symptoms' },
        ]},
      ],
    },
    {
      heading: 'Rate Control Therapy',
      blocks: [
        { type: 'text', content: 'Target a resting heart rate of < 110 bpm.' },
        { type: 'list', items: [
          { text: 'Beta-blockers (e.g., bisoprolol, carvedilol, propranolol, metoprolol, atenolol) — First-line option unless contraindicated (severe asthma)' },
          { text: 'Non-dihydropyridine calcium-channel blockers (e.g., diltiazem, verapamil) — When beta-blockers are not tolerated or contraindicated' },
          { text: 'Digoxin — In patients with heart failure with reduced ejection fraction. Has a narrow therapeutic window; kidney function and electrolytes should be monitored' },
          { text: 'Amiodarone' },
        ]},
      ],
    },
    {
      heading: 'Monitoring of Patients on Long-Term Amiodarone',
      blocks: [
        { type: 'list', items: [
          { text: 'Long-term amiodarone use is associated with thyroid dysfunction, lung toxicity, liver toxicity, ophthalmologic and cardiovascular adverse effects' },
          { text: 'Patients should be monitored with 6 monthly LFT, TFT and ECG' },
          { text: 'Direct access referral to SOC is indicated for', children: [
            { text: 'Referral to Endocrinology for abnormal thyroid function test (hypo- or hyperthyroidism)' },
            { text: 'Referral to Respiratory medicine for pneumonitis on CXR in patients with new onset or worsening cough or dyspnoea' },
            { text: 'Referral to Cardiology for transaminitis (> 3x ULN) or abnormal ECG (other significant arrhythmia, bradycardia < 50/min, QTc interval > 600ms)' },
          ]},
          { text: 'Avoid concomitant use of other drugs that prolong QTc interval' },
        ]},
      ],
    },
    {
      heading: 'Rhythm Control Therapy',
      blocks: [
        { type: 'text', content: 'Sinus rhythm should be achieved early in the disease course with antiarrhythmic drugs or catheter ablation. Rhythm control in general is recommended to reduce the risk of progression and the risk of dementia or worsening cardiac structural abnormalities, and in patients with the following specific conditions:' },
        { type: 'list', items: [
          { text: 'Reduced left ventricular function and persistent or high burden of atrial fibrillation' },
          { text: 'Symptomatic atrial fibrillation' },
          { text: 'Recently diagnosed symptomatic AF (< 1 year)' },
          { text: 'Atrial fibrillation and heart failure' },
        ]},
      ],
    },
    {
      heading: 'Stroke Prevention — CHA₂DS₂-VASc Score',
      blocks: [
        { type: 'text', content: 'Prophylaxis against thromboembolism is the cornerstone of therapy for atrial fibrillation and should be considered regardless of whether a rate control or rhythm control therapy is chosen. Paroxysmal AF should be treated as for patients with persistent or longstanding persistent AF. Anticoagulation with DOACs is preferred over warfarin in patients without contraindication as DOACs have a better safety profile and fewer food/drug interactions.' },
        { type: 'table', headers: ['Factor', 'Condition', 'Points', 'Score', 'Adjusted Stroke Risk (%/yr)'], rows: [
          { cells: ['C', 'Congestive Heart Failure', '1', '0', '0'] },
          { cells: ['H', 'Hypertension (or treated hypertension)', '1', '1', '1.3'] },
          { cells: ['A₂', 'Age ≥ 75 years', '2', '2', '2.2'] },
          { cells: ['D', 'Diabetes', '1', '3', '3.2'] },
          { cells: ['S₂', 'Prior stroke or TIA', '2', '4', '4.0'] },
          { cells: ['V', 'Vascular disease', '1', '5', '6.7'] },
          { cells: ['A', 'Age 65 to 74', '1', '6', '9.8'] },
          { cells: ['Sc', 'Sex category (female)', '1', '7', '9.6'] },
          { cells: ['', '', '', '8', '6.7'] },
          { cells: ['', '', '', '9', '15.2'] },
        ]},
        { type: 'text', content: 'Modified CHA₂DS₂-VASc (mCHA₂DS₂-VASc): In the absence of other risk factors, female gender alone may not increase stroke risk. Local guidelines recommend the use of mCHA₂DS₂-VASc whereby gender does not contribute to the score.' },
        { type: 'table', headers: ['mCHA₂DS₂-VASc Score', 'Recommendation'], rows: [
          { cells: ['= 0', 'No anticoagulation or antiplatelet recommended'] },
          { cells: ['= 1', 'Anticoagulation with Apixaban should be considered'] },
          { cells: ['≥ 2', 'Anticoagulation recommended with DOAC (preferred) or Warfarin'] },
        ]},
        { type: 'text', content: 'When mCHA₂DS₂-VASc = 1, the decision to start OAC should consider patient-specific factors. Stroke risk is higher for: Age 65–74 years; Heart failure and age ≥ 35 years; Hypertension and age ≥ 50 years; Diabetes mellitus and age ≥ 50 years; Vascular diseases and age ≥ 55 years.' },
      ],
    },
    {
      heading: 'HAS-BLED Risk Score',
      blocks: [
        { type: 'table', headers: ['Letter', 'Condition', 'Points', 'Score', 'Bleeds per 100 patient-years'], rows: [
          { cells: ['H', 'Hypertension (systolic BP > 160mmHg)', '1', '0', '1.13'] },
          { cells: ['A', 'Abnormal renal and liver function (1 point each)', '1 or 2', '1', '1.02'] },
          { cells: ['S', 'Stroke', '1', '2', '1.88'] },
          { cells: ['B', 'Bleeding tendency or predisposition', '1', '3', '3.74'] },
          { cells: ['L', 'Labile INRs (for patients taking warfarin)', '1', '4', '8.70'] },
          { cells: ['E', 'Elderly (Age > 65)', '1', '5 to 9', 'Insufficient data'] },
          { cells: ['D', 'Drugs (concomitant aspirin or NSAIDS) or alcohol abuse (1 point each)', '1 or 2', '', ''] },
        ]},
        { type: 'text', content: 'The HAS-BLED risk score poorly predicts bleeding events but is a useful tool for identifying modifiable risk factors. A high HAS-BLED score (≥ 3) indicates high bleeding risk but is NOT a contraindication for anticoagulation. Consider aspirin or clopidogrel only when anticoagulation is contraindicated in patients with mCHA₂DS₂-VASc ≥ 2, especially those with a history of ischaemic stroke or TIA.' },
      ],
    },
    {
      heading: 'DOAC Protocol in NUP',
      blocks: [
        { type: 'text', content: 'Rivaroxaban and Apixaban are factor Xa inhibitors available in the NUP formulary. DOACs are as effective as warfarin in reducing AF-related strokes and systemic embolisms in patients with non-valvular heart disease. The use of DOAC in mechanical heart valves or moderate to severe mitral stenosis is NOT recommended — these patients should be treated with warfarin.' },
        { type: 'text', content: 'Contraindications to DOACs:' },
        { type: 'list', items: [
          { text: 'Hypersensitivity' },
          { text: 'Clinically significant active bleeding' },
          { text: 'Hepatic disease with coagulopathy and clinically relevant bleeding risk' },
          { text: 'Pregnancy and lactation' },
          { text: 'Lesion or condition considered to be a significant risk of major bleeding (recent GI ulceration, pregnancy, malignant neoplasm at high risk of bleed, etc.)' },
          { text: 'Concomitant treatment with any other anticoagulant agent' },
          { text: 'History of intracranial bleed' },
          { text: 'Renal impairment with creatinine clearance (Cockcroft-Gault) < 15 ml/min for Rivaroxaban and Apixaban' },
          { text: 'Mechanical heart valves' },
          { text: 'Moderate – Severe Mitral Stenosis' },
        ]},
        { type: 'text', content: 'Laboratory investigations prior to DOAC initiation: (1) Full Blood Count, (2) Liver Function Test, (3) Renal Panel, (4) PT/APTT, (5) Thyroid Function Test.' },
        { type: 'text', content: 'Criteria for initiating DOAC in polyclinic (while awaiting echocardiography or cardiology review): No contraindications; No features of mitral stenosis on clinical exam; Normal FBC, renal panel, LFT, PT/APTT; AND any of: history of stroke/TIA, age ≥ 75 years, or mCHA₂DS₂-VASc ≥ 2.' },
        { type: 'text', content: 'Dose Adjustments for Apixaban: 5mg BD standard. Reduce to 2.5mg BD if patient fulfils ≥ 2 of ABC Criteria (Age ≥ 80 years; Body Weight ≤ 60 kg; Serum Creatinine ≥ 133 umol/L) OR CrCl 15–29 ml/min. Avoid if CrCl < 15 ml/min.' },
        { type: 'text', content: 'Dose Adjustments for Rivaroxaban: CrCl > 50 ml/min → 20 mg OD; CrCl 15–50 ml/min → 15 mg OD; CrCl < 15 ml/min → Avoid.' },
        { type: 'text', content: 'Recommended follow-up after DOAC initiation: Review 1–3 months with FBC and Renal Panel. Monitor symptoms of stroke, TIA, thromboembolism and bleeding events. Consider 6-monthly reviews subsequently. Monitor age, body weight, frailty, fall risk and concomitant medications at every visit. Monitor FBC, Renal Panel, LFT annually.' },
      ],
    },
    {
      heading: 'Drug Cost',
      blocks: [
        { type: 'table', headers: ['Drug', 'Subsidy Status', 'Cost per tablet', 'Cost per week (Adult)', 'Cost per week (Elderly)'], rows: [
          { cells: ['Warfarin', 'SDL 1', '$0.20', '$1.40 (capped)', '$0.70 (capped)'] },
          { cells: ['Apixaban', 'SDL 2', '$0.77', '$5.39', '$2.70'] },
          { cells: ['Rivaroxaban', 'SDL 2 (change effective 1st April 2026)', '$1.54', '$5.39', '$2.70'] },
        ]},
        { type: 'text', content: 'Cost does not include additional MG/PG subsidy. Rivaroxaban cost does not take into account MAF subsidy which is determined through means testing.' },
      ],
    },
    {
      heading: 'Switching Warfarin to DOACs',
      blocks: [
        { type: 'text', content: 'Patients with existing non-valvular AF on warfarin may be offered conversion to a DOAC if they: (1) are unable to maintain therapeutic INR, (2) have difficulty attending clinic frequently for INR monitoring, (3) have problematic drug interactions, or (4) find dietary restrictions interfere excessively with a healthy, balanced diet.' },
        { type: 'table', headers: ['INR', 'Action'], rows: [
          { cells: ['INR < 2.5', 'Stop warfarin and start DOAC on the same day'] },
          { cells: ['INR 2.5–3', 'Stop warfarin and start DOAC the next day'] },
          { cells: ['INR > 3', 'Repeat INR and start DOAC as per above recommendations once INR has fallen below 3'] },
        ]},
      ],
    },
    {
      heading: 'Warfarin Protocol in NUP',
      blocks: [
        { type: 'text', content: 'Medical Officers (MOs) and Resident Physicians (RPs) may provide follow-up care for patients on warfarin and repeat prescriptions where INRs are within range and no titration is required. Where titration is indicated, MOs/RPs need to seek approval from FPs or designated RPs. Pharmacy staff will ensure any change in warfarin dosage is countersigned before dispensing.' },
        { type: 'list', items: [
          { text: 'Observe for bleeding: haematuria, melena, gingival bleeding, excessive bleeding from cuts, epistaxis, bruising, dizziness, hypotension, weakness' },
          { text: 'Observe for thromboembolic event: DVT, pulmonary embolism, CVA, AMI' },
          { text: 'Exclude any dietary or drug interaction that may affect patient\'s INR' },
          { text: 'Check haemoglobin and haematocrit annually' },
        ]},
        { type: 'text', content: 'Initiation/Re-Initiation of Warfarin: Check baseline INR before initiation. For initiation, a fixed dose of 2–5 mg/day (2–3 mg for Chinese/Malays; 4–5 mg for Indians) is recommended. For re-initiation, restart on last known dose that maintained therapeutic range. Check INR on day 3 after initiation/re-initiation and every 1–2 days till 2 consecutive readings of target INR achieved. Steady state expected after at least 5 days. Thereafter check INR weekly for first month, then 4 weekly and finally 8–12 weekly once stable.' },
        { type: 'text', content: 'INR Targets: Target INR for most patients: 2.0–3.0. In elderly > 75 years or those at higher bleeding risk, a lower INR target of 1.6–2.5 may be chosen. Patients with higher thrombotic risk may have target INR 2.5–3.5.' },
      ],
    },
    {
      heading: 'Warfarin Initiation Guide',
      blocks: [
        { type: 'table', headers: ['Day', 'INR', 'Dose (mg) Chinese/Malay', 'Dose (mg) Indian'], rows: [
          { cells: ['1', 'Baseline', '3', '5'] },
          { cells: ['3', '< 1.2', '3', '5'] },
          { cells: ['3', '1.2–< 1.5', '3', '5'] },
          { cells: ['3', '1.5–< 2.0', '3', '5'] },
          { cells: ['3', '2.0–< 3.0', '2', '3'] },
          { cells: ['3', '≥ 3.0', 'Nil', 'Nil'] },
          { cells: ['4', '< 1.3', '5', '8'] },
          { cells: ['4', '1.3–< 1.5', '4', '6.5'] },
          { cells: ['4', '1.5–< 1.7', '3', '5'] },
          { cells: ['4', '1.7–< 2.0', '2.5', '4'] },
          { cells: ['4', '2.0–< 2.5', '2.0', '3'] },
          { cells: ['4', '2.5–< 3.0', '1.5', '2.5'] },
          { cells: ['4', '3.0–< 3.5', 'Omit 1 day, then 1 mg', 'Omit 1 day, then 2 mg'] },
          { cells: ['4', '3.5–< 4.0', 'Omit 1 day, then 1 mg', 'Omit 1 day, then 2 mg'] },
          { cells: ['4', '≥ 4.0', 'Omit 2 days, then 0.5 mg', 'Omit 2 days, then 1 mg'] },
        ]},
      ],
    },
    {
      heading: 'Contraindications to Warfarin',
      blocks: [
        { type: 'list', items: [
          { text: 'Aneurysm (cerebral or dissecting)' },
          { text: 'Active bleeding disorder or unexplained anaemia' },
          { text: 'Cerebral vascular haemorrhage (confirmed or suspected), unless cleared by neurologist or neurosurgeon' },
          { text: 'Blood dyscrasias associated with haemorrhage or thrombocytopenia' },
          { text: 'Severe uncontrolled hypertension' },
          { text: 'Recent (2–3 weeks) trauma (especially to the CNS)' },
          { text: 'Neurosurgery unless cleared by neurosurgeon' },
          { text: 'Ulceration or active lesions of the GIT, respiratory or urinary tracts' },
          { text: 'Severe vasculitis' },
          { text: 'Pregnancy (1st trimester and before delivery)' },
          { text: 'Other factors making warfarin therapy unsuitable: alcohol abuse, high fall risk, poor family support/inability to return for INR monitoring, non-compliance, mentally unstable patient' },
          { text: 'Exercise caution in: Age > 75 years, clinical congestive cardiac failure, drug interactions, elevated baseline INR, hypermetabolic states, liver or renal impairment, malnutrition/low vitamin K intake, thyrotoxicosis' },
        ]},
      ],
    },
    {
      heading: 'Drugs with Major Interactions with Warfarin',
      blocks: [
        { type: 'table', headers: ['↑ Increase Effect of Warfarin', '↓ Decrease Effect of Warfarin'], rows: [
          { cells: ['Aspirin, Clopidogrel, Dipyridamole, Ticlopidine, Apixaban, Dabigatran, Rivaroxaban (Antiplatelet/Anticoagulants)', 'Carbamazepine, Phenobarbital, Phenytoin (Anticonvulsants)'] },
          { cells: ['Levothyroxine; Androgens, Estrogens, Progestins; Sulphonylureas (Endocrine)', 'Anti-thyroid agents e.g. Carbimazole, Propylthiouracil (Endocrine)'] },
          { cells: ['Amiodarone, Diltiazem, Verapamil, Propranolol, Simvastatin, Lovastatin, Fenofibrate, Gemfibrozil (Cardiovascular)', 'Cholestyramine (Cardiovascular)'] },
          { cells: ['SSRIs (Escitalopram, Fluoxetine, Fluvoxamine, Sertraline), TCAs (Amitriptyline, Doxepin), Mirtazapine, Venlafaxine, Quetiapine (Psychiatric)', 'Azathioprine, Sulphasalazine (Immunosuppression)'] },
          { cells: ['Valproic acid, Phenytoin (Anticonvulsants)', 'Rifampicin (Antibiotic)'] },
          { cells: ['Methotrexate, Tamoxifen (Malignant disease)', ''] },
          { cells: ['Allopurinol, Corticosteroid, Prednisolone (Musculoskeletal)', ''] },
          { cells: ['Cimetidine, Ranitidine, Omeprazole (GI)', ''] },
          { cells: ['NSAIDs, COX-II inhibitors, Paracetamol, Tramadol (Analgesics — ACUTE)', ''] },
          { cells: ['Azithromycin, Clarithromycin, Ciprofloxacin, Erythromycin, Metronidazole, Trimethoprim-Sulfamethoxazole, Itraconazole (Antibiotics — ACUTE)', ''] },
        ]},
      ],
    },
    {
      heading: 'Warfarin-Food Interactions',
      blocks: [
        { type: 'list', items: [
          { text: 'Foods Rich in Vitamin K (decrease warfarin effect): Green leafy vegetables (spinach, broccoli, lettuce, Brussels sprouts), certain legumes, some vegetable oils (e.g. soybean oil), animal livers, some fermented foods (e.g. cheese), green tea. Chronic alcohol intake can increase metabolism of oral anticoagulants.' },
          { text: 'Foods with Anti-Platelet Effect: Garlic, foods containing salicylates (fruits, vegetables, spices, teas, certain flavoured candies)' },
          { text: 'Others: Avocado (decrease effect), Vitamin E (potentiate effect), dietary supplements [arnica, bilberry, butchers broom, cat\'s claw, dong quai, feverfew, forskolin, garlic, ginger, ginkgo, horse chestnut, inositol hexaphosphate, licorice, melilot (sweet clover), pau d\'arco, red clover, St John\'s wort, sweet woodruff, turmeric, willow bark, wheat grass, alcohol (continuous heavy drinking stimulates hepatic enzymes, increasing metabolism of warfarin)]' },
        ]},
      ],
    },
    {
      heading: 'Management of Supratherapeutic INR',
      blocks: [
        { type: 'table', headers: ['INR', 'Management'], rows: [
          { cells: ['Greater than therapeutic range but < 4.5', 'Decrease or withhold dosage. Monitor INR more frequently and restart warfarin at a lower dose when INR is within therapeutic range.'] },
          { cells: ['4.5–9.0', 'Withhold warfarin, consider referral to Emergency Department for oral Vitamin K. If managed in primary care, recheck INR within 24–28 hours. If within therapeutic range, resume warfarin at a lower dose.'] },
          { cells: ['> 9.0', 'Referral to Emergency Department for oral Vitamin K'] },
        ]},
        { type: 'text', content: 'Monitoring Using INR: Repeat INR every 1–2 weeks for every dose adjustment. When target INR achieved, next INR may be checked after 4 weeks and subsequently 8–12 weekly.' },
      ],
    },
    {
      heading: 'Summary of Oral Anticoagulants',
      blocks: [
        { type: 'table', headers: ['Property', 'Warfarin', 'Rivaroxaban', 'Apixaban'], rows: [
          { cells: ['Mechanism of Action', 'Vitamin K Antagonist', 'Oral anti-Xa inhibitor', 'Oral anti-Xa inhibitor'] },
          { cells: ['Metabolism', 'Major CYP2C9, CYP450, CYP1A2, CYP3A4 substrate', 'CYP3A3 substrate, P-glycoprotein substrate', 'CYP3A3 substrate, P-glycoprotein substrate'] },
          { cells: ['Tmax (hours)', '4', '3–4', '3'] },
          { cells: ['Half-Life (hours)', '36', '5–13', '9–14'] },
          { cells: ['Elimination', 'Hepatic (cytochrome P450)', 'Liver (66%) Renal (33%)', 'Renal (27%)'] },
          { cells: ['Special Precautions', 'Ensure consistent Vitamin K intake in diet. Avoid supplements.', 'Take with food to increase bioavailability', 'With or without food'] },
          { cells: ['Laboratory Tests', 'PT/INR every 2–3 monthly; FBC at least annually', 'FBC, Renal Panel at least annually', 'FBC, Renal Panel at least annually'] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 10 NUP CPG — Benign Prostatic Hyperplasia (Feb 2024)
// ---------------------------------------------------------------------------
const bph: CpgDocument = {
  id: 'cpg-bph',
  condition: 'Benign Prostatic Hyperplasia (BPH)',
  source: '10 NUP CPG - Benign Prostatic Hyperplasia (BPH).pdf',
  reviewDate: 'Reviewed February 2024. Next review date: February 2027.',
  advisors: 'Key FP: Dr Sky Koh Wei Chee. Specialist Advisor: Asst Prof Benjamin Goh (Consultant, Department of Urology, NUH). Acknowledgement: NUHSP: Ms Neo Ying Fang',
  sections: [
    {
      heading: 'History',
      blocks: [
        { type: 'list', items: [
          { text: 'Voiding Symptoms', children: [
            { text: 'Hesitancy' },
            { text: 'Straining' },
            { text: 'Double voiding' },
            { text: 'Sensation of incomplete emptying' },
            { text: 'Weak flow' },
            { text: 'Terminal dribbling' },
          ]},
          { text: 'Storage Symptoms', children: [
            { text: 'Frequency' },
            { text: 'Urgency' },
            { text: 'Nocturia' },
          ]},
          { text: 'Duration of Symptoms' },
          { text: 'Other Associated Symptoms: Gross haematuria, urinary incontinence (any need for diapers?), dysuria, symptoms of UTI' },
          { text: 'Medication List: Diuretics, SGLT2-inhibitors, anti-psychotics, traditional medications, supplements' },
          { text: 'Past Surgical History: Procedures like indwelling catheter, cystoscopy, bladder stones, TURP' },
          { text: 'Past Medical History: DM, CCF, Parkinson\'s, spinal injuries' },
          { text: 'Social History: Coffee, tea, alcohol drinking, smoking' },
          { text: 'Red Flags from History: Haematuria, acute retention of urine, fever with loin pain' },
        ]},
        { type: 'text', content: 'Differentials for LUTS in males: UTI, Prostatitis, Distal ureteral stone, Ureteral stricture, Bladder tumour, Neurogenic bladder dysfunction, Over Active Bladder (OAB) - Detrusor over-activity / under-activity, Nocturnal polyuria, Foreign body.' },
      ],
    },
    {
      heading: 'Physical Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'BP and hydration status' },
          { text: 'Abdominal: Mass, palpable or percussable bladder, inguinal hernia, ballotable kidney' },
          { text: 'Any signs of ESRF' },
          { text: 'Digital Rectal Examination (DRE)', children: [
            { text: 'Prostate: Size, consistency, median sulcus, tenderness' },
            { text: '**Red flags: Irregular, hard, nodules' },
            { text: 'Rectal mass' },
            { text: 'Assess anal tone — Poor anal tone and sacral anaesthesia suggest possible neurogenic voiding dysfunction' },
            { text: 'Penis: Phimosis, hypospadias' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Investigation',
      blocks: [
        { type: 'list', items: [
          { text: 'UFEME to screen for pyuria, haematuria, proteinuria or other pathology. Urine culture if UFEME abnormal.' },
          { text: 'Baseline PSA: Levels of PSA proposed as a good surrogate for estimating prostate volume. For prostate volume > 30 g, PSA would be > 1.5 μg/L. PSA testing helps to detect prostate cancer and prostatitis, especially when DRE reveals an abnormal prostate.' },
        ]},
        { type: 'text', content: 'PSA Screening (Singapore Urological Association, 2017): Population screening for prostate cancer with PSA is controversial and not recommended. For men between 50–70 years of age with a life expectancy of more than 10 years, PSA screening may be offered after an informed discussion on potential benefits and harms including possibilities of false positive and false negative results, complications of subsequent TRUS guided biopsy and false negative biopsies. Men with a strong family history (one or more first-degree relatives diagnosed before age 65 years) may be offered screening 5–10 years younger than the youngest prostate cancer in the family. Routine screening in men younger than 50 years old without a strong family history is not recommended. Men with life expectancy less than 10–15 years should be informed that testing and treatment is unlikely to be beneficial. A PSA value of > 4 μg/L needs referral to urology for further evaluation. A routine screening interval of two years or more may be preferred over annual screening in asymptomatic men.' },
        { type: 'text', content: 'Voiding Diary: Should be used when frequency, urgency or nocturia is the dominant symptom. Helps to identify patients with isolated nocturnal polyuria, excessive fluid intake or overactive bladder.' },
      ],
    },
    {
      heading: 'International Prostate Symptoms Score (IPSS) and Quality of Life Score (QOL)',
      blocks: [
        { type: 'table', headers: ['Question', '0', '1', '2', '3', '4', '5'], rows: [
          { cells: ['Incomplete Emptying: Over the past month, how often have you had a sensation of not emptying your bladder completely after you finished urinating?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Frequency: Over the past month, how often have you had to urinate again less than 2 hours after you finished urinating?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Intermittency: Over the past month, how often have you found you stopped and started again several times when you urinated?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Urgency: Over the past month, how often have you found it difficult to postpone urination?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Weak Stream: Over the past month, how often have you had a weak urinary stream?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Straining: Over the past month, how often have you had to push or strain to begin urination?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Nocturia: Over the past month, how many times did you most typically get up to urinate from the time you went to bed until the time you got up in the morning?', 'None', '1 time', '2 times', '3 times', '4 times', '5 or more times'] },
        ]},
        { type: 'text', content: 'IPSS Scoring: 0–7 = Mild; 8–19 = Moderate; 20–35 = Severe. QOL Score: < 3 not bothered; ≥ 3 bothered.' },
        { type: 'table', headers: ['QOL Question', '0', '1', '2', '3', '4', '5', '6'], rows: [
          { cells: ['If you were to spend the rest of your life with your urinary condition just the way it is now, how would you feel about that?', 'Delighted', 'Pleased', 'Mostly satisfied', 'Mixed mostly', 'Mostly dissatisfied', 'Unhappy', 'Terrible'] },
        ]},
      ],
    },
    {
      heading: 'Further Investigation',
      blocks: [
        { type: 'text', content: 'These investigations may be required in patients with a definite indication, such as gross haematuria, uncertain diagnosis, DRE abnormalities, poor response to medical therapy or for surgical planning.' },
        { type: 'list', items: [
          { text: 'Urine cytology' },
          { text: 'Uroflowmetry' },
          { text: 'Urodynamics' },
          { text: 'Cystoscopy' },
          { text: 'Radiological evaluation of upper urinary tract (e.g. IVU, CT KUB, Urogram)' },
          { text: 'Prostate ultrasound' },
          { text: 'MRI prostate and prostate biopsy are indicated when the PSA is elevated' },
        ]},
      ],
    },
    {
      heading: 'Management — Medical Therapy',
      blocks: [
        { type: 'text', content: 'Cost guide: $ = <$10/month; $$ = $10–<$20/month; $$$ = $20–<$30/month; $$$$ = $30–<$60/month. Amount payable depends on patient subsidy level and drug subsidy class. Unit prices before GST and accurate as of Jan 2024.' },
        { type: 'text', content: 'Alpha-1 blockers: Act by relaxation of smooth muscle in prostatic urethra, bladder neck and blood vessels. IPSS decreases by about 35–40% and the flow rate by 20–25%. However, they do not prevent progression of BPH. Patients usually experience full therapeutic effect within one week. Recommended for patients whose urinary symptoms affect and limit their function.' },
        { type: 'table', headers: ['Drug', 'Dose', 'Subsidy', 'Cost', 'Risk of Postural Hypotension', 'Risk of Retrograde Ejaculation', 'Risk of Floppy Iris Syndrome', 'Remarks'], rows: [
          { cells: ['Alfuzosin XL (Xatral XL)', '10 mg ON', 'SDL2', '$', 'Medium', 'Low', 'Medium', 'Recommended for younger patients'] },
          { cells: ['Tamsulosin (Harnal)', '0.4 mg ON', 'NS', '$$', 'Low', 'Medium', 'High', 'Recommended in elderly with high falls risk'] },
          { cells: ['Terazosin (Hytrin)', '1–10 mg ON', 'SDL2', '2mg: $; 5mg: $$$', 'High', 'Low', 'Low', 'Suitable as an anti-hypertensive. Can be increased up to 20mg if inadequate response after 4–6 weeks'] },
        ]},
        { type: 'text', content: '5-Alpha-reductase inhibitors (5ARI): Indicated for prostate volumes > 30 g and significant obstruction. Efficacy is more pronounced in those with larger prostatic volumes. Efficacy is minimal for prostatic volume < 30 g. Decreases prostate volume by about 18–28% after 6–12 months; IPSS decreases by about 20–30%; reduces PSA by 50% after 6–12 months. Patients usually experience full therapeutic effects after six months of treatment.' },
        { type: 'list', items: [
          { text: 'Finasteride (Proscar): 5 mg OD' },
          { text: 'Dutasteride (Avodart): 0.5 mg OD' },
          { text: 'ADR: Decreased libido, erectile dysfunction, ejaculatory disorders, mastalgia, gynaecomastia' },
          { text: 'PSA guidance: The PSA value should reduce by 50% after at least 6 months of 5ARI therapy. A red flag is a patient\'s PSA that reduces by approximately half but then begins to rise for an unexplained reason, assuming medication compliance.' },
        ]},
      ],
    },
    {
      heading: 'Management — Lifestyle Modifications',
      blocks: [
        { type: 'list', items: [
          { text: 'Modify drinking habits, cut down fluid intake at night' },
          { text: 'Restriction of caffeine and alcohol intake' },
          { text: 'Avoidance/monitoring usage of some drugs (diuretics, antihistamines, antidepressants)' },
          { text: 'Stop smoking' },
          { text: 'Regular exercise' },
          { text: 'Lose weight if BMI is high' },
          { text: 'Timed or organised voiding (Bladder retraining)' },
          { text: 'Keep other medical conditions well managed' },
        ]},
      ],
    },
    {
      heading: 'Surgical Therapy Options',
      blocks: [
        { type: 'list', items: [
          { text: 'Bipolar Transurethral Resection of Prostate (TURP)' },
          { text: 'Enucleation of obstructing prostatic adenoma' },
          { text: 'Transurethral Laser prostatectomy' },
          { text: 'Transurethral Incision of Prostate (TUIP) / Open prostatectomy' },
          { text: 'UroLift and Rezum water vapour treatments' },
        ]},
      ],
    },
    {
      heading: 'Referral to Urologist',
      blocks: [
        { type: 'list', items: [
          { text: 'Persistent LUTS (based on moderate–severe IPSS or QOL score ≥ 3)' },
          { text: 'Gross haematuria' },
          { text: 'Urinary incontinence' },
          { text: 'Palpable bladder' },
          { text: 'DRE suspicious of prostate cancer' },
          { text: 'Abnormal PSA levels (> 4.0 ng/ml)' },
          { text: 'A rise in PSA while on 5-alpha reductase inhibitors' },
          { text: 'Recurrent infection' },
          { text: 'Complications arising from obstruction like hydronephrosis, renal failure' },
          { text: 'History/risk of urethral stricture' },
          { text: 'Neurological disease raising the likelihood of a primary bladder disorder' },
          { text: 'Failure of medical treatment at primary care level' },
          { text: 'Note: Post catheterised patients presenting with ARU — Consider A&E referral (if gross haematuria or signs of urosepsis) or Direct Access referral to Urology (within 1 week, if patient is assessed to be able to take care of urinary catheter/bag)' },
        ]},
      ],
    },
    {
      heading: 'Follow Up in Primary Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Assess treatment success or failure and possible adverse events' },
          { text: 'Assessment of treatment success varies: usually 2–4 weeks for alpha blocker therapy and at least 3 months for a 5α-reductase inhibitor' },
          { text: 'If treatment is successful and patient is satisfied, annual PSA for patients below age 70 years is generally recommended for those on 5-alpha reductase inhibitors' },
          { text: 'Follow-up strategy allows the physician to detect any changes in the last year, specifically if symptoms have progressed or become more bothersome, or if a complication has developed creating an indication for surgery' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Review of Lower Urinary Tract Symptoms', 'Annually', 'Recommended tool: International Prostate Symptom / Quality of Life Score'] },
          { cells: ['Clinical Examination — Abdominal and Digital Rectal Exam', 'Initial assessment', 'Abdominal examination includes assessment for a palpable bladder. Rectal examination to assess size, consistency and regularity of prostate'] },
          { cells: ['Co-Morbidity Assessment (includes medication review)', 'Initial assessment', ''] },
          { cells: ['Urine Dipstick or Microscopy', 'Initial assessment', 'Screen for haematuria, pyuria and glycosuria'] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Combined export of all CPG documents
// ---------------------------------------------------------------------------
// 11 NUP CPG — Bronchial Asthma in Adults (Nov 2024)
// ---------------------------------------------------------------------------
const bronchialAsthmaAdults: CpgDocument = {
  id: 'cpg-bronchial-asthma-adults',
  condition: 'Bronchial Asthma in Adults',
  source: '11 NUP CPG - Bronchial Asthma in Adults.pdf',
  reviewDate: 'Reviewed November 2024. Next review date: November 2027.',
  advisors: 'Key FPs: Dr David Tan Hsien Yung / Dr Joanne Khor. Specialist Advisor: Dr Liew Mei Fong (Senior Consultant, Alexandra Hospital). Acknowledgement: Clinical Services: Dr Jonathan Phang, Dr Tan Wee Hian, Ms Jamilah Jailani. Nursing: APN Liau Wei Fong, NC Yap Hwee Luan. Allied Health: Ms Lynette Goh (Dietetics), Ms Toh Hui Moon (Psychology), Ms Cindy Soh (Physiotherapy). NUHSP: Ms Esther Bek, Mr Woo Jia Xiang. NUH: Dr Lim Hui Fang.',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Asthma is a chronic reversible airway disorder that is common in people of all ages. It can be severe and may be fatal. Asthma may present with cough, wheezing, and unexplained dyspnoea and chest tightness. Symptoms are often transient, may be persistent and tend to be worse at night or in the early mornings. Asthma symptoms may be precipitated or aggravated by upper respiratory tract infections, cigarette smoke, environmental haze, exercise, drugs (e.g. aspirin, NSAIDs, β-blockers, ACE inhibitors), pets and occupational exposure to triggers.' },
        { type: 'text', content: 'A diagnosis of asthma is based on clinical presentation of characteristic symptoms and where possible, documentation of variable expiratory airflow limitation. Initiation of inhaled corticosteroids should not be delayed as these tests can be normal in mild or well controlled asthma.' },
        { type: 'text', content: 'Epidemiology: Asthma is one of the most common chronic respiratory conditions seen in primary care in Singapore. Around 5% of residents in Singapore aged 18 to 69 years have asthma. About 1 in 3 patients with asthma aged 12 years and older in Singapore report exacerbations in the past year, and about 1 in 2 have missed work or school due to asthma in the past year. Singapore\'s asthma hospital admission rates are higher than countries in the OECD. Despite wide availability of ICS, use of preventers in Singapore is the lowest among eight countries in the Asia-Pacific region, with only 1 in 4 patients using a preventer in the past month.' },
      ],
    },
    {
      heading: 'Presentation and Diagnosis',
      blocks: [
        { type: 'list', items: [
          { text: 'Symptoms: wheezing, shortness of breath, chest tightness, cough; nocturnal symptoms' },
          { text: 'Features supportive of asthma diagnosis', children: [
            { text: 'Frequent episodes of wheeze (more than once a month)' },
            { text: 'Activity induced cough or wheeze' },
            { text: 'Nocturnal cough in periods without viral infections, and not attributable to post-nasal drip and GERD' },
          ]},
          { text: 'Supportive evidence: Atopic features, family history of asthma/atopy' },
          { text: 'Bronchodilator Reversibility: ≥ 12% and ≥ 200ml increase in FEV1 (or FVC) after bronchodilator inhalation. An FEV1/FVC less than LLN or < 0.75 suggests expiratory airflow limitation and should be considered supportive of an asthma diagnosis. However, a normal spirometry does not exclude asthma.' },
          { text: 'Bronchial provocation: Methacholine or exercise challenge test, Histamine' },
          { text: 'Home PEF Variability: > 20% diurnal variation. PEF is the least reliable as it is highly effort dependent.' },
        ]},
        { type: 'text', content: 'Do CXR if other diagnosis suspected or consider other diagnostic tests in the presence of: (1) Loss of weight, (2) Frequent vomiting/choking, (3) Focal lung signs, haemoptysis, (4) Vocal cord dysfunction.' },
        { type: 'list', items: [
          { text: 'Alternative diagnoses (adult): Ca lung, bronchiectasis, COPD/emphysema, pulmonary tuberculosis, suppurative lung disease, pulmonary oedema, upper airway obstruction/inhaled foreign body, vocal cord dysfunction' },
        ]},
      ],
    },
    {
      heading: 'Other Modes of Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Cough variant asthma without wheezing' },
          { text: 'Adult onset asthma: consider referral if patients do not respond well to treatment to exclude eosinophilic granulomatosis with polyangiitis (EGPA), chronic rhinosinusitis and nasal polyps, allergic bronchopulmonary aspergillosis (ABPA). Obesity may also be associated with higher risk of developing adult-onset asthma.' },
          { text: '\'First acute wheeze\' — Exclude infections, foreign body aspiration, endobronchial lesions (unilateral wheezing)' },
          { text: 'In cigarette smokers, consider COPD with asthma' },
          { text: 'Exercise-induced bronchoconstriction' },
          { text: 'Asthma in pregnancy (1/3 of patients have deterioration of asthma during pregnancy due to hormonal changes)' },
        ]},
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'Chest X-ray: To exclude foreign body or chronic chest infection (e.g. pulmonary TB for chronic cough) or to exclude complications in severe acute episodes.' },
          { text: 'Pulmonary Function Tests (PEFR/Spirometry): Diurnal variation of PEFR ≥ 20% or positive bronchodilator response (post bronchodilator increase in FEV1 by ≥ 12% and ≥ 200 ml). Do NOT delay initiation of ICS if clinical suspicion is high.' },
          { text: 'Allergy Tests: Atopic status can be identified by skin prick testing or measuring specific immunoglobulin E (sIgE). Other allergy tests (antigen specific IgG, IgG4, intradermal skin tests) are not useful. Food allergy testing is not useful for evaluation of asthma per se.' },
          { text: 'Airway Challenge Tests (Methacholine/Histamine/Exercise): Methacholine challenge is a sensitive test to exclude asthma. Exercise challenge is reserved for evaluation of exercise-induced asthma.' },
          { text: 'FeNO: Has not been established as useful for ruling in or ruling out asthma.' },
          { text: 'Other tests: CT thorax, induced sputum for AFB smear and culture, nasoendoscopy/CT sinuses, OGD/pH manometry to exclude GERD, bronchoscopy, immunological investigations (HIV, serum immunoglobulin titres).' },
        ]},
      ],
    },
    {
      heading: 'Asthma Control Goals and Management Components',
      blocks: [
        { type: 'text', content: 'Asthma Control Goals:' },
        { type: 'list', items: [
          { text: 'No limitation of daily activities, including exercise' },
          { text: 'No (twice or less/week) daytime symptoms' },
          { text: 'No nocturnal symptoms or awakening because of asthma' },
          { text: 'No (twice or less/week) need for reliever treatment' },
          { text: 'No exacerbations' },
          { text: 'Normal or near-normal lung function results' },
        ]},
        { type: 'text', content: 'Components of Asthma Management: (1) Good doctor-patient relationship; (2) Identification and reduction of exposure to risk factors; (3) Assessment, treatment and monitoring; (4) Management of asthma exacerbations; (5) Patient education including Written Asthma Action Plan.' },
        { type: 'text', content: 'Follow-Up Interval: Asthma control review can vary from once in 2 weeks (poor control, medication adjustment) to once in 6 months (very well controlled). Annual review of asthma action plan. Annual smoking assessment.' },
      ],
    },
    {
      heading: 'Monitoring in Primary Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Asthma control using GINA assessment, Asthma Control Test (ACT)' },
          { text: 'High risk for severe attacks: ≥ 3 attacks or prednisolone bursts in last 12 months; ≥ 3 canisters of SABA used in last 12 months' },
          { text: 'High risk for life-threatening attack: previous ICU admission/intubation for status asthmaticus; ≥ 1 canister of SABA every month' },
          { text: 'Other risk factors: chronic airflow limitation (baseline FEV1 < 50%), persistent poor ICS adherence and smoking, psychosocial factors' },
          { text: 'Adherence to asthma medication' },
          { text: 'Inhaler technique' },
          { text: 'Aerochamber/spacer care (clean every month, change every 6–12 months)' },
          { text: 'Check and address causes of poor asthma control: refer asthma nurse to cross-check adherence and technique (50% of patients are not adherent); check for triggers (aeroallergens, irritants, haze, cigarette smoke); check for drugs that can aggravate asthma (aspirin, NSAIDS, non-cardioselective β-blockers); confirm diagnosis with CXR and spirometry' },
          { text: 'Understand use of self-management plan/written personalised asthma action plan' },
        ]},
      ],
    },
    {
      heading: 'GINA Assessment of Asthma Control',
      blocks: [
        { type: 'text', content: 'Asthma control is assessed in two domains: symptom control and future risk of adverse outcomes. Poor symptom control reduces productivity and quality of life and increases the risk of exacerbations. Asthma severity is assessed after at least 2–3 months of adequate treatment.' },
        { type: 'text', content: 'Asthma Control Test (ACT©): A 5-item, patient-administered questionnaire for adults and children aged 12 and above. Based on a five-point scoring system: Score 25 = total control; Score 20–24 = well controlled; Score < 20 = poor control.' },
        { type: 'list', items: [
          { text: 'Q1: In the past 4 weeks, how much of the time did your asthma keep you from getting as much done at work, school or at home?' },
          { text: 'Q2: During the past 4 weeks, how often have you had shortness of breath?' },
          { text: 'Q3: During the past 4 weeks, how often did your asthma symptoms (wheezing, coughing, shortness of breath, chest tightness or pain) wake you up at night or earlier than usual in the morning?' },
          { text: 'Q4: During the past 4 weeks, how often have you used your rescue inhaler or nebulizer medication (such as albuterol or salbutamol)?' },
          { text: 'Q5: How would you rate your asthma control during the past 4 weeks?' },
        ]},
      ],
    },
    {
      heading: 'Lifestyle Modification and Non-Pharmacological Treatment',
      blocks: [
        { type: 'list', items: [
          { text: 'Self-monitoring and regular review' },
          { text: 'Written action plan' },
          { text: 'Modifiable risk factors and comorbidities (e.g. smoking, obesity, anxiety)' },
          { text: 'Smoking cessation' },
          { text: 'Physical activity for weight loss' },
          { text: 'Avoidance of sensitizers where appropriate' },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment — Stepwise Approach',
      blocks: [
        { type: 'text', content: 'The patient\'s current treatment and level of control determine the selection of pharmacologic treatment. If asthma is not controlled on the current treatment, treatment should be stepped up until control is achieved. Control is usually maintained for at least 3 months before an attempt is made to step down the treatment.' },
        { type: 'list', items: [
          { text: 'Step 1: For safety, GINA and local guidelines no longer recommend SABA-only treatment. Regular low dose ICS, low dose ICS taken whenever SABA is taken, or as-needed low dose ICS-formoterol. Reserved for patients with infrequent symptoms (less than twice a month) of short duration with no risk factors for exacerbations.' },
          { text: 'Step 2: Regular low dose ICS, or as-needed low dose ICS-formoterol' },
          { text: 'Step 3: Low dose ICS-LABA, or medium dose ICS. As needed low dose ICS-formoterol for patients prescribed maintenance and reliever therapy.' },
          { text: 'Step 4: Medium dose ICS-LABA, or high dose ICS. As needed low dose ICS-formoterol for patients prescribed maintenance and reliever therapy.' },
          { text: 'Step 5: Refer for specialist investigation and consideration of add-on treatment. Management should be supervised directly by specialists.' },
          { text: 'RELIEVER: As-needed ICS-SABA, or as-needed SABA' },
        ]},
        { type: 'text', content: 'NOTE: LABAs should NOT be used without concomitant inhaled corticosteroids in asthma.' },
        { type: 'table', headers: ['Drug', 'Low Daily Dose (mcg)', 'Medium Daily Dose (mcg)', 'High Daily Dose (mcg)'], rows: [
          { cells: ['Beclomethasone Dipropionate (HFA)', '100–200', '> 200–400', '> 400'] },
          { cells: ['Budesonide (DPI)', '200–400', '> 400–800', '> 800'] },
          { cells: ['Fluticasone Propionate (DPI)', '100–250', '> 250–500', '> 500'] },
          { cells: ['Fluticasone Propionate (HFA)', '100–250', '> 250–500', '> 500'] },
          { cells: ['Fluticasone Furoate (DPI)', '100', '100', '200'] },
        ]},
        { type: 'text', content: 'REMEMBER TO: Provide guided self-management education. Treat modifiable risk factors and comorbidities. Advise about non-pharmacological therapies. Consider stepping up if symptoms uncontrolled. Consider referring to specialist if not well controlled on STEP 4. Consider stepping down if symptoms controlled for 3 months and low risk for exacerbations. Ceasing ICS is not advised. For list of medications available in NUP formulary, refer to NUP Intranet Asthma/COPD Medication Chart.' },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Family Physician: Provides all aspects of primary medical care from screening, diagnosis and management of asthma, including health promotion and prevention/treatment of complications.' },
          { text: 'Care Coordinator: Perform general screening (fall risk, social economics, smoking & drinking history); address care gaps under Health Maintenance Topics (vaccinations); perform GINA assessment of asthma control.' },
          { text: 'Care Manager: Evaluate understanding and provide education on asthma, good asthma control and lifestyle measures; assess and identify reasons for suboptimal/poor adherence; provide education on preventer and reliever inhalers, inhaler technique and use of asthma action plan.' },
          { text: 'Advanced Practice Nurse: Manage patients with asthma within scope of practice; initiate and titrate medication according to stepwise approach; initiate and educate patient on Written Asthma Action Plan; offer timely influenza and pneumococcal vaccinations; encourage smoking cessation.' },
          { text: 'Dietitian: Patient education on weight management.' },
          { text: 'Psychologist: Psychological and behavioural interventions to manage psychological stress, improve disease management and quality of life; assessment and intervention for co-occurring psychological problems (depression, anxiety disorders).' },
          { text: 'Physiotherapist: Assess and provide intervention for MSK conditions; prescribe exercise and provide patient education on appropriate exercises for weight loss; patient education on bronchial hygiene and positions to ease shortness of breath.' },
          { text: 'Pharmacist: Assess and teach use of various inhalers and delivery devices; smoking cessation clinic; detect, prevent and address drug-drug/drug-disease interactions; perform medication reconciliation.' },
        ]},
      ],
    },
    {
      heading: 'Asthma Exacerbations — Severity Assessment',
      blocks: [
        { type: 'table', headers: ['Parameter', 'Mild', 'Moderate', 'Severe', 'Respiratory Arrest Imminent'], rows: [
          { cells: ['Breathless', 'While walking; can lie down', 'While talking; prefer sitting', 'While at rest; hunched forward', ''] },
          { cells: ['Talks in', 'Sentences', 'Phrases', 'Words', ''] },
          { cells: ['Alertness', 'May be agitated', 'Usually agitated', 'Usually agitated', 'Drowsy or confused'] },
          { cells: ['Respiratory rate', 'Increased', 'Increased', 'Often > 30/min', ''] },
          { cells: ['Accessory muscles/suprasternal retractions', 'Usually not', 'Usually', 'Usually', ''] },
          { cells: ['Wheeze', 'Moderate, often only end expiratory', 'Loud', 'Usually loud; throughout inhalation and exhalation', 'Absence of wheeze'] },
          { cells: ['Pulse rate', '< 100/min', '100–200/min', '> 120/min', 'Bradycardia'] },
          { cells: ['PEF', '> 80%', 'Approx. 60–80%', '< 60% predicted or personal best', ''] },
          { cells: ['SpO₂ (on air)', '> 95%', '91–95%', '< 90%', ''] },
        ]},
      ],
    },
    {
      heading: 'Management of Acute Exacerbation in Adults',
      blocks: [
        { type: 'list', items: [
          { text: 'Mild/Moderate Exacerbation (Mild/mod tachypnea, no/minimum use of accessory muscles, SpO₂ 91–95%)', children: [
            { text: '1. MDI bronchodilator via Spacer: 10 puffs Salbutamol over 20 mins. Patient to inhale 5x via mouth/lips after every 1 puff.' },
            { text: '2. Oxygen via nasal prongs if necessary (keep SpO₂ > 95%)' },
            { text: '3. Oral prednisolone 30–60 mg stat' },
            { text: '4. Doctor to review after 1 cycle. Repeat another cycle if indicated.' },
            { text: '5. Refer to hospital A&E if no improvement after 2 cycles' },
            { text: '*Convert to nebuliser if patient is fatigued: Neb Salbutamol 1ml : Ipratropium 2ml : Normal Saline 1ml' },
          ]},
          { text: 'Severe Exacerbation (Can\'t complete sentences, tachypneic, Pulse > 110/min, Resp Rate > 25/min, PEF < 50% predicted or best, SpO₂ < 91%)', children: [
            { text: '1. High flow O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: '2. IV access' },
            { text: '3. IV hydrocortisone 200 mg stat' },
            { text: '4. Nebulise: Salbutamol 1ml : Ipratropium 2ml : Normal Saline 1ml' },
            { text: '5. Repeat nebulisation if indicated. Review after 30 minutes.' },
            { text: '6. Refer to A&E if no improvement after 2 rounds of nebulisation.' },
          ]},
          { text: 'Life-Threatening Exacerbation (Cyanosis/tachypnea, exhaustion, silent chest, SpO₂ < 91%, PEF < 33%; confusion/drowsiness; pulsus paradoxus/bradycardia; deterioration despite maximal therapy)', children: [
            { text: 'Arrange transfer to Hospital immediately' },
            { text: '1. High flow O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: '2. IV access' },
            { text: '3. IV hydrocortisone 200 mg stat' },
            { text: '4. Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: '5. Consider s/c adrenaline 1:1000 0.5ml (0.01 ml/kg)' },
          ]},
        ]},
        { type: 'text', content: 'MDI + Spacer Method: (a) Prime the spacer with 10 puffs of Salbutamol. (b) Load spacer with 1 puff each time; patient to inhale 5 times (tidal breaths) after every 1 puff. (c) Oxygen can be administered concurrently via nasal prongs if required — maintain SpO₂ > 95%. (d) Nurse to administer puffs, ensure inhalation via the mouth/lips. (e) Patient can self-administer bronchodilator treatment with supervision by medical staff.' },
      ],
    },
    {
      heading: 'Post-Exacerbation Response Assessment',
      blocks: [
        { type: 'list', items: [
          { text: 'Good Response (Response sustained 60 minutes after last treatment; physical examination normal; PEF > 70% predicted; no stress; O₂ saturation > 90%)', children: [
            { text: 'Discharge' },
            { text: 'Continue treatment with inhaled β₂-agonist' },
            { text: 'Consider course of prednisolone 30 mg om for 5–7 days in most cases' },
            { text: 'Initiate or continue inhaled glucocorticosteroids' },
            { text: 'Reinforce patient education, action plan and close follow-up' },
          ]},
          { text: 'Incomplete Response (History of high-risk patient; mild to moderate symptoms; PEF > 50–70%; O₂ saturation not improving)', children: [
            { text: 'Refer to Hospital A&E' },
            { text: 'O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: 'Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: 'IV hydrocortisone 200 mg stat if not already administered' },
          ]},
          { text: 'Poor Response (History of high-risk patient; symptoms severe, drowsiness, confusion; PEF < 30%; O₂ saturation < 90%)', children: [
            { text: 'ARRANGE URGENT TRANSFER TO HOSPITAL via ambulance immediately' },
            { text: 'High flow O₂ via mask 6–10 L/min to achieve SpO₂ > 95%' },
            { text: 'Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: 'IV hydrocortisone 200 mg if not already administered' },
            { text: 'Consider s/c adrenaline 1:1000 0.5ml (0.01 ml/kg)' },
            { text: 'Possible intubation & mechanical ventilation' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Emergency Drug List',
      blocks: [
        { type: 'list', items: [
          { text: 'Salbutamol Inhaler / neb' },
          { text: 'Prednisolone tab' },
          { text: 'Hydrocortisone IV' },
          { text: 'Ipratropium bromide nebuliser' },
          { text: 'Adrenaline IM' },
        ]},
      ],
    },
    {
      heading: 'Referrals — When to Refer to Respiratory Specialist',
      blocks: [
        { type: 'list', items: [
          { text: 'Presence of Risk Factors for Death from Asthma', children: [
            { text: 'Prior intubation and mechanical ventilation for asthma' },
            { text: 'Hospitalisation or emergency care visit for asthma in the past year' },
            { text: 'Current use of systemic corticosteroids or recent withdrawal from systemic corticosteroids' },
            { text: 'Not currently using inhaled corticosteroids' },
            { text: 'Use of > 1 canister of inhaled short-acting β₂-agonist within 1–2 months' },
            { text: 'History of psychiatric disease or psychosocial problems' },
          ]},
          { text: 'Acute Asthma — Severe or Frequent Exacerbations', children: [
            { text: 'A life-threatening asthma exacerbation' },
            { text: 'Frequent exacerbations: acute exacerbations 2–3 times a year, or more than once every six months, despite compliance with medications and good inhaler technique' },
            { text: 'Need for continuous oral corticosteroid therapy or not well-controlled on Step 4 therapy' },
          ]},
          { text: 'Chronic Asthma — Difficult or Poor Control', children: [
            { text: 'Failing goals of therapy after 3 to 6 months of treatment' },
            { text: 'Uncontrolled Asthma' },
            { text: 'Continuous oral corticosteroid therapy, or require more than two bursts of oral corticosteroids in 1 year, or high-dose inhaled corticosteroids' },
          ]},
          { text: 'Diagnosis', children: [
            { text: 'Atypical signs and symptoms' },
            { text: 'Other conditions complicate asthma or its diagnosis, e.g. heart failure, COPD, unsure of diagnosis' },
            { text: 'Additional diagnostic testing is indicated' },
            { text: 'Suspicion of occupational asthma' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Asthma Control Assessment (GINA Score, ACT)', 'At least twice a year', ''] },
          { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers unless change in smoking habit', 'Assessment on smoking habits and provide smoking cessation counselling'] },
          { cells: ['Written Asthma Action Plan', 'Upon diagnosis, recommended annually', ''] },
          { cells: ['Spirometry', 'Recommended at or soon after diagnosis, or when clinically indicated', ''] },
          { cells: ['Influenza and Pneumococcal Vaccination', 'As recommended under the National Adult Immunisation Schedule', ''] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 12 NUP CPG — Bronchial Asthma in Children (Aug 2023)
// ---------------------------------------------------------------------------
const bronchialAsthmaChildren: CpgDocument = {
  id: 'cpg-bronchial-asthma-children',
  condition: 'Bronchial Asthma in Children',
  source: '12 NUP CPG - Bronchial Asthma in Children.pdf',
  reviewDate: 'Reviewed August 2023 by Dr Wong Yi Lian & Dr Joanne Khor.',
  advisors: 'Key FPs: Dr Wong Yi Lian / Dr David Tan Hsien Yung. Specialist Advisor: Dr Mahesh Babu Ramamurthy (NUH Paediatrics). Acknowledgement: Clinical Services: Dr Jonathan Phang, Dr Tan Wee Hian. Nursing: APN Liau Wei Fong, SNC Alice Goh Khoon Chin, NC Yap Hwee Luan. NUHSP: Ms Esther Bek, Mr Woo Jia Xiang.',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Asthma is a chronic reversible airway disorder that is common in people of all ages. It can be severe and may be fatal. Asthma may present with cough, wheezing, and unexplained dyspnoea and chest tightness. Symptoms are often transient, may be persistent and tend to be worse at night or in the early mornings.' },
        { type: 'text', content: 'Management of asthma in children, particularly in children in the first five years of life, is often a challenge. Difficulties with diagnosis, efficacy and safety of drugs and drug delivery are common issues faced by the practitioner. Definition of asthma is the same in children as in adults. A detailed medical history and clinical examination is mandatory.' },
      ],
    },
    {
      heading: 'Presentation and Diagnosis',
      blocks: [
        { type: 'text', content: 'Asthma should be considered if any of the following is present: cough, recurrent wheeze/breathing difficulty or chest tightness. Symptoms often occur or worsen at night, with exercise, or on exposure to various triggers (e.g. dust mite allergens). Asthma exacerbations in children are often triggered by respiratory viral and mycoplasma infections. The presence of atopy or a family history of atopy supports the diagnosis of asthma.' },
        { type: 'table', headers: ['Feature', 'Characteristics Suggesting Asthma'], rows: [
          { cells: ['Cough', 'Recurrent or persistent non-productive cough that may be worse in the middle of the night. Cough occurring with exercise, laughing, crying or exposure to tobacco smoke (particularly in absence of respiratory infection).'] },
          { cells: ['Wheezing', 'Recurrent wheezing, including during sleep, or with triggers such as activity, laughing, crying or exposure to tobacco smoke or air pollution.'] },
          { cells: ['Difficult or heavy breathing / shortness of breath', 'Occurring with exercise, laughing, or crying.'] },
          { cells: ['Activity limitation', 'Not running, playing, or laughing at the same intensity as other children, tires earlier during walks.'] },
          { cells: ['Family or past personal history', 'Atopic dermatitis, allergic rhinitis, food allergy. Asthma in first-degree relative(s).'] },
        ]},
        { type: 'list', items: [
          { text: 'Red Flags — Consider investigations in the presence of', children: [
            { text: 'Neonatal / early onset' },
            { text: 'Failure to thrive, loss of weight' },
            { text: 'Frequent vomiting / choking' },
            { text: 'Focal lung or cardiovascular signs' },
            { text: 'Continuous wheezing' },
            { text: 'No association of symptoms with typical triggers' },
            { text: 'Hypoxemia outside context of viral illness' },
          ]},
          { text: 'Beware of alternative diagnosis', children: [
            { text: 'Recurrent viral infections with wheezing' },
            { text: 'Chronic rhino-sinusitis' },
            { text: 'Gastro-oesophageal reflux' },
            { text: 'Bronchopulmonary dysplasia / Chronic lung disease of prematurity' },
            { text: 'Aspiration syndromes including foreign body aspiration / recurrent silent aspiration' },
            { text: 'Congenital malformations of lung' },
            { text: 'Congenital heart disease' },
            { text: 'Tuberculosis' },
          ]},
          { text: 'For ≥ 5 years: Spirometry — Reduced FEV1 with reduced FEV1/FVC ratio; Bronchodilator response: Increase FEV1 > 12% predicted after bronchodilator challenge; Positive exercise challenge test: Fall in FEV1 of > 12% from pre-exercise values, or PEF > 15%' },
          { text: 'For < 5 years: Consider referral to a Paediatrician. Commence on trial of asthma therapy for 8–12 weeks; Review diagnosis if response is poor.' },
        ]},
      ],
    },
    {
      heading: 'Other Modes of Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Cough variant asthma without wheezing — May be the group over-diagnosed as asthma; rule out rhinitis and sinusitis' },
          { text: 'Recurrent viral wheezing in children aged 5 years or younger without atopy may not respond to asthma treatment' },
          { text: 'Exercise-induced bronchoconstriction' },
        ]},
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'list', items: [
          { text: 'Chest X-Ray: To exclude foreign body, structural abnormalities, chronic chest infection or to exclude complications in severe acute episodes.' },
          { text: 'Pulmonary Function Tests (Spirometry): Many children by 5 years old are capable of performing spirometry if coached by experienced technician with visual incentives. Children under 8 years of age are deemed to have completed the test if they have sustained expiratory effort for 3 seconds (as opposed to 6 seconds in adults).' },
          { text: 'Allergy Tests: Skin prick testing or specific immunoglobulin E (sIgE) in serum. Other allergy tests (antigen specific IgG, IgG4, intradermal skin tests) are not useful. Food allergy testing is not useful for evaluation of asthma per se.' },
          { text: 'Airway Challenge Tests: Methacholine or Histamine challenge tests are not routinely performed in children. Exercise challenge is useful for evaluation of exercise-induced asthma in children.' },
        ]},
      ],
    },
    {
      heading: 'Asthma Control Goals and Initial Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Asthma Control Goals', children: [
            { text: 'No limitation of daily activities, including exercise' },
            { text: 'No or minimal daytime symptoms (≤ once/week for ≤5 years; ≤ twice/week for 6–11 years)' },
            { text: 'No nocturnal symptoms or awakening because of asthma' },
            { text: 'No or minimal need for reliever treatment (same frequency thresholds as above)' },
            { text: 'No exacerbations' },
            { text: 'Normal or near-normal lung function results' },
          ]},
          { text: 'Initial Management After Diagnosis', children: [
            { text: 'Good doctor-patient relationship' },
            { text: 'Explanation about asthma and factors that influence it' },
            { text: 'Starting appropriate medication' },
            { text: 'Training about correct inhalation technique' },
            { text: 'Reinforcement on importance of child\'s adherence to medication and avoidance of trigger factors' },
            { text: 'Written Asthma Action Plan (WAAP)' },
            { text: 'Follow up appointment in 4–12 weeks' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Follow-Up Visit — Ask for SPICE',
      blocks: [
        { type: 'list', items: [
          { text: 'S — Symptoms' },
          { text: 'P — Parental concerns' },
          { text: 'I — Inhaler techniques' },
          { text: 'C — Compliance / Adherence' },
          { text: 'E — Environmental triggers avoidance' },
          { text: 'Symptom control assessment with GINA symptoms control tool or Asthma Control Test' },
          { text: 'Review growth chart' },
        ]},
      ],
    },
    {
      heading: 'GINA Symptom Control Tool for Children',
      blocks: [
        { type: 'text', content: 'GINA Assessment of Asthma Symptom Control in Children 5 Years and Younger — In the past 4 weeks, has the child had: (1) Daytime asthma symptoms for more than a few minutes, more than once a week? (2) Any activity limitation due to asthma? (3) Reliever medication needed more than once a week? (4) Any night waking or night coughing due to asthma?' },
        { type: 'text', content: 'GINA Assessment for Children 6–11 Years — In the past 4 weeks, has the child had: (1) Daytime asthma symptoms for more than twice a week? (2) Any activity limitation due to asthma? (3) Reliever medication needed more than twice a week? (4) Any night waking due to asthma?' },
        { type: 'text', content: 'Interpretation: Well controlled = none of these; Partly controlled = 1–2 of these; Uncontrolled = 3–4 of these.' },
        { type: 'text', content: 'Asthma Control Test (ACT©) for children aged 4–11 years: 7-item questionnaire. Score ≤ 19 = poor asthma control; Score ≥ 20 = asthma may be under control; Score 27 = total control. For children aged 12 and above: same 5-item ACT as adults. Score ≤ 19 = poor control; 20–24 = well controlled; 25 = total control.' },
      ],
    },
    {
      heading: 'Titrating Inhaled Corticosteroid',
      blocks: [
        { type: 'list', items: [
          { text: 'If child is well controlled and maintained for at least 3 months', children: [
            { text: 'Consider tapering ICS treatment gradually to lowest effective dose' },
            { text: 'Children with high risk of poor asthma outcomes should be tapered cautiously' },
            { text: 'If ICS is tapered down or stopped, schedule follow-up in 3–6 weeks to review symptoms' },
          ]},
          { text: 'If child is partly controlled or uncontrolled, check the following', children: [
            { text: 'Verify diagnosis' },
            { text: 'Assess inhaler technique' },
            { text: 'Check adherence to medication and avoidance of trigger factors' },
            { text: 'Management of co-morbid conditions (allergic rhinitis, GERD, etc.)' },
            { text: 'Review medication dose' },
          ]},
          { text: 'Most children will respond to first line of low dose ICS if above factors are corrected. If all above factors have been corrected, consider stepping up treatment.' },
        ]},
      ],
    },
    {
      heading: 'Assessment of Risk Factors for Poor Asthma Outcomes',
      blocks: [
        { type: 'list', items: [
          { text: 'Features of patients at increased risk of adverse events', children: [
            { text: 'History of severe asthma exacerbations requiring intubation or HDU/ICU care' },
            { text: '≥ 1 severe exacerbation in last 12 months' },
            { text: 'High SABA use (> 1 canister of SABA per month)' },
            { text: 'Inadequate ICS, poor adherence, or incorrect inhaler technique' },
            { text: 'Comorbidities: Obesity, chronic rhino-sinusitis, GERD, confirmed food allergy' },
            { text: 'Exposures: Smoking, air pollution, allergens (dust mites, cockroach, pets, mould)' },
            { text: 'Major psychological or socioeconomic problems for child or family' },
            { text: 'Low initial FEV1, high BD reversibility; Blood eosinophilia' },
          ]},
          { text: 'Risk factors for persistent airflow limitation', children: [
            { text: 'Severe asthma with several hospitalisations' },
            { text: 'History of bronchiolitis in the first 3 months of age' },
            { text: 'History of maternal smoking in pregnancy, preterm birth, low birth weight and neonatal ventilation' },
          ]},
          { text: 'Risk factors for medication side-effects', children: [
            { text: 'Systemic: Chronic use of moderate to high dose ICS may reduce growth velocity in pre-pubertal children and slight reduction in adult final height. However, poorly controlled asthma itself may have much greater impact on a child\'s growth.' },
            { text: 'Local: With good inhaler technique using spacers, local side-effects are not common in children. When ICS is used without spacer, local side effects such as oral thrush should be looked for.' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment — Children ≤ 5 Years',
      blocks: [
        { type: 'text', content: 'In children aged 0 to 5 years, long-term treatment with SABA alone (without preventer) for asthma could be used ONLY if the child fulfils ALL of the following criteria: No history of ICU admission or intubation for asthma; No more than 3 exacerbations over the past year; Normal lung function test over the past year (if available); No night awakening due to asthma over the past 4 weeks; No exercise limitations due to asthma over the past 4 weeks; Asthma symptoms no more than once over the past 4 weeks; SABA used no more than once over the past 4 weeks.' },
        { type: 'list', items: [
          { text: 'Step 1–2: Low-dose ICS, plus as-needed inhaled SABA. Consider specialist referral. Other option: Daily LTRA or intermittent short course of ICS at onset of respiratory distress. *Blackbox Warning for Montelukast: Risk of neuropsychiatric effects including suicidal thoughts, depression, sleep and behaviour changes. Counsel parents.' },
          { text: 'Step 3: Double low-dose ICS, plus as-needed SABA. Consider specialist referral. (Insufficient data on ICS-LABA in children < 4 years; not approved for this age group.)' },
          { text: 'Step 4 & 5: Continue controller treatment and refer to a specialist.' },
        ]},
        { type: 'table', headers: ['Drug (≤ 5 years)', 'Low Total Daily Dose (mcg)'], rows: [
          { cells: ['Beclomethasone Dipropionate (pMDI, extrafine particle, HFA)', '50 (ages 5 years and older)'] },
          { cells: ['Fluticasone Propionate (pMDI, standard particle, HFA)', '50 (ages 4 years and older)'] },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment — Children 6–11 Years',
      blocks: [
        { type: 'list', items: [
          { text: 'Step 1–2: Daily low dose ICS, plus as-needed SABA. Other options: ICS whenever SABA is taken; Daily LTRA with as needed SABA. *Blackbox Warning for Montelukast (see above).' },
          { text: 'Step 3: Low dose ICS-LABA plus as needed SABA; or medium dose ICS plus as needed SABA. Other option: Low dose ICS with daily LTRA with as needed SABA. MART: Daily low-dose ICS-formoterol plus as needed low-dose ICS-formoterol. *Blackbox Warning for Montelukast (see above).' },
          { text: 'Step 4: Medium dose ICS-LABA, plus as needed SABA. Consider specialist referral. Patients not achieving good control despite Step 4 treatment may have refractory asthma and should be reviewed by a specialist.' },
          { text: 'Step 5: Refer specialist for phenotypic assessment and consideration of add-on treatment. Management should be supervised directly by specialist.' },
        ]},
        { type: 'table', headers: ['Drug (6–11 years)', 'Low Daily Dose (mcg)', 'Medium Daily Dose (mcg)', 'High Daily Dose (mcg)'], rows: [
          { cells: ['Beclomethasone Dipropionate (pMDI, extrafine particle, HFA)', '50–100', '> 100–200', '> 200'] },
          { cells: ['Budesonide (DPI)', '100–200', '> 200–400', '> 400'] },
          { cells: ['Fluticasone Propionate (DPI)', '50–100', '> 100–200', '> 200'] },
          { cells: ['Fluticasone Propionate (pMDI, standard particle, HFA)', '50–100', '> 100–200', '> 200'] },
        ]},
        { type: 'table', headers: ['Combination ICS/LABA Drug', 'Dosage'], rows: [
          { cells: ['Seretide 25/50® Evohaler (Fluticasone 50mcg/Salmeterol 25mcg) — ≥ 4 years', 'Usual: 1–2 puffs once to twice daily. Maximum: 2 puffs twice daily.'] },
          { cells: ['Seretide 50/100® Accuhaler (Fluticasone 50mcg/Salmeterol 50mcg) — ≥ 4 years', 'Usual: 1 puff once or twice daily. Maximum: 1 puff twice daily.'] },
          { cells: ['Symbicort® Rapihaler (Budesonide 80mcg/Formoterol 2.25mcg) — 6–11 years', 'Recommended dose: 2 puffs BD. When control achieved with BD regimen, tapering to ICS only can be offered.'] },
        ]},
        { type: 'text', content: 'NOTE: LABAs should NOT be used without concomitant inhaled corticosteroids in asthma. Recommended inhaler devices: < 4 years — pMDI plus spacer with face mask; ≥ 4 years — pMDI plus spacer with mouthpiece.' },
      ],
    },
    {
      heading: 'Asthma Exacerbations in Children — Severity Assessment',
      blocks: [
        { type: 'table', headers: ['Parameter', 'Mild', 'Moderate', 'Severe', 'Respiratory Arrest Imminent'], rows: [
          { cells: ['Breathlessness', 'While walking; can lie down', 'While at rest (infant – softer, shorter cry); prefer sitting', 'While at rest; hunched forward', ''] },
          { cells: ['Feeding (infant)', 'Feeds normally', 'Difficulty feeding', 'Stops feeding', ''] },
          { cells: ['Talks in', 'Sentences', 'Phrases', 'Words', ''] },
          { cells: ['Alertness', 'May be agitated', 'Usually agitated', 'Usually agitated', 'Drowsy or confused'] },
          { cells: ['Respiratory rate', 'Increased', 'Increased', 'Increased', ''] },
          { cells: ['Accessory muscles', 'Usually not', 'Usually', 'Usually', ''] },
          { cells: ['Central cyanosis', 'Absent', 'Absent', 'May be present', ''] },
          { cells: ['Wheeze', 'Moderate, often only end expiratory', 'Loud', 'Chest may be quiet', 'Absence of wheeze'] },
          { cells: ['Pulse rate', '< 100 beats/min', 'Increased', '> 180 beats/min (0–3 yrs); > 150 beats/min (4–5 yrs)', 'Bradycardia'] },
          { cells: ['SaO₂ (on air)', '> 92%', '> 92%', '< 92%', ''] },
        ]},
        { type: 'table', headers: ['Age', 'Normal Resp Rate (per min)', 'Age', 'Normal Pulse Rate (per min)'], rows: [
          { cells: ['< 2 months', '< 60', '2–12 months', '< 160'] },
          { cells: ['2–12 months', '< 50', '1–2 years', '< 120'] },
          { cells: ['1–5 years', '< 40', '2–8 years', '< 110'] },
          { cells: ['6–8 years', '< 30', '', ''] },
        ]},
      ],
    },
    {
      heading: 'Management of Acute Asthma Exacerbation in Children',
      blocks: [
        { type: 'list', items: [
          { text: 'Mild/Moderate Exacerbation (Mild/mod tachypnea, no/minimum chest retractions, SaO₂ > 92%)', children: [
            { text: 'Mild: Weight ≤ 10kg: Salbutamol 4 puffs by pMDI + spacer; Weight > 10kg: Salbutamol 8 puffs by pMDI + spacer. Repeat every 20 minutes for the first hour if needed.' },
            { text: 'Moderate: Add Oral prednisolone 1–2 mg/kg (max 20mg for < 2 yrs; max 30mg for 2–5 yrs; max 40mg for 6–11 yrs). Add Ipratropium MDI: Weight ≤ 10kg: 2 puffs; Weight > 10kg: 4 puffs.' },
            { text: 'Keep SaO₂ > 94–98%; add O₂ via face mask if necessary' },
            { text: 'Convert to Nebuliser if child is fatigued or hypoxic: Weight ≤ 10kg: Salbutamol 0.5ml / Ipratropium 0.5ml / Normal Saline 3ml; Weight > 10kg: Salbutamol 1ml / Ipratropium 1ml / Normal Saline 2ml' },
          ]},
          { text: 'Severe Exacerbation (Tachypnoeic+, chest retractions, accessory muscles++, SaO₂ < 92%)', children: [
            { text: 'Nebulise (same doses as above)' },
            { text: 'Oral prednisolone 1–2 mg/kg (same doses as above)' },
            { text: 'High flow O₂ via mask (6–10 L/min) to achieve SaO₂ ≥ 94%' },
            { text: 'Review after 1 cycle; refer to hospital A&E if no improvement/deterioration' },
          ]},
          { text: 'Life-Threatening Exacerbation — Arrange transfer to hospital immediately', children: [
            { text: 'High flow O₂ via mask (6–10 L/min) to achieve SaO₂ 94–98%' },
            { text: 'IV access' },
            { text: 'Oral prednisolone 1–2 mg/kg OR IV hydrocortisone 4 mg/kg stat (max 100mg)' },
            { text: 'Nebulised salbutamol with ipratropium every 15–20 minutes while awaiting transfer' },
            { text: 's/c adrenaline 1:1000 0.1–0.3 ml (0.01 ml/kg) only for those above 2 years old' },
          ]},
        ]},
        { type: 'text', content: 'Discharge criteria after mild/moderate exacerbation: Continue SABA-PRN; Start or step up controller, check inhaler technique and adherence; Continue oral prednisolone usually 3–5 days; Follow up within 1–2 days; WAAP. A short course of oral steroids should be considered if: (1) requires frequent β₂-agonists therapy (more frequently than 4 hourly); (2) has a past history of life-threatening asthma exacerbation; (3) is on high dose inhaled steroid or low dose oral maintenance steroid therapy. For moderate to severe exacerbations, prednisolone 1–2 mg/kg/day can be given for 3 to 5 days without need to taper.' },
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        { type: 'list', items: [
          { text: 'Presence of Risk Factors for Death from Asthma', children: [
            { text: 'Prior intubation and mechanical ventilation for asthma' },
            { text: 'Hospitalisation or emergency care visit for asthma in the past year' },
            { text: 'Current use of systemic corticosteroids or recent withdrawal' },
            { text: 'Not currently using inhaled corticosteroids' },
            { text: 'Use of > 1 canister of inhaled short-acting β₂-agonist within 1 month' },
            { text: 'History of psychiatric disease or psychosocial problems' },
          ]},
          { text: 'Indications for Referral to Paediatric Specialist', children: [
            { text: 'Patients with high risk asthma with poor control' },
            { text: 'Patient aged 5 years old and younger (referral should be considered)' },
            { text: 'Patients who remain symptomatic, show suboptimal response to therapy' },
            { text: 'Patients requiring high doses of inhaled steroids (BDP or Budesonide ≥ 400 mcg/day)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Asthma Control Assessment (GINA Score, ACT)', 'At least twice a year', ''] },
          { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers unless change in smoking habit', 'Assessment on smoking habits and provide smoking cessation counselling'] },
          { cells: ['Written Asthma Action Plan', 'Upon diagnosis, recommended annually', ''] },
          { cells: ['Spirometry', 'Recommended at or soon after diagnosis, or when clinically indicated (if age appropriate)', ''] },
          { cells: ['Influenza and Pneumococcal Vaccination', 'As recommended under the National Childhood Immunisation Schedule', ''] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 13 NUP CPG — Cancer Screening (Nov 2025)
// ---------------------------------------------------------------------------
const cancerScreening: CpgDocument = {
  id: 'cpg-cancer-screening',
  condition: 'Cancer Screening',
  source: '13 NUP CPG - Cancer Screening.pdf',
  reviewDate: 'Updated November 2025. Next review date: November 2028.',
  advisors: 'Key FPs: Dr Alicia Ong / Dr Chua Ying Xian / Dr Lau Yen Ning / Dr Tan Chun Jek. Specialist Advisor: Dr Gloria Chan (Consultant, National University Cancer Institute, Singapore).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Cancer is currently the leading cause of death in Singapore, accounting for 24.6% of deaths in 2023. Lifestyle and behavioural factors such as obesity, physical inactivity, and smoking increase an individual\'s risk of developing cancer. It is important to encourage healthful behaviour to minimise the impact of these risk factors.' },
        { type: 'text', content: 'Principles of Screening: Health screening is conducted to facilitate early diagnosis of diseases that have yet to manifest (asymptomatic), so that treatment and intervention can be instituted promptly to achieve good health outcomes. The Screening Test Review Committee (STRC) tiers its recommendations into 3 categories:' },
        { type: 'table', headers: ['Category', 'Definition'], rows: [
          { cells: ['1. Population-level screening', 'Good robust evidence that the screening test is both clinically effective and cost effective for use to screen the population (for the specified age range).'] },
          { cells: ['2. Individual-level decision', 'The net benefit does not outweigh the risk in general populations, but the screening may be useful for high-risk populations. OR there is some evidence of effectiveness but cost-effectiveness is unfavourable.'] },
          { cells: ['3. Not recommended', 'Insufficient evidence to make a decision. OR good evidence that the screening test is not effective, or that the net harm outweighs benefits.'] },
        ]},
      ],
    },
    {
      heading: 'Screening for Colorectal Cancer',
      blocks: [
        { type: 'text', content: 'How to Screen: (1) Stool-based tests: Faecal Immunochemical Test (FIT) — preferred; Guaiac Faecal Occult Blood Test (FOBT) — no longer used for asymptomatic screening; Stool DNA test (not available in NUP). (2) Direct visualisation/imaging: Colonoscopy, Flexible sigmoidoscopy, CT colonography. Note: Carcinoembryonic antigen (CEA) is NOT recommended for screening.' },
        { type: 'text', content: 'Colorectal Cancer Screening in NUP: (1) Colonoscopy — refer open access colonoscopy (if fulfils criteria) or refer to SOC routine for screening colonoscopy. (2) FIT — HSG enrollee: send to Care Coordinator (CC) for FIT test; Non-HSG enrollee: Provider to order "FECAL IMMUNOCHEMICAL TEST (FIT) PANEL". For patients at increased risk, CCs will refer to clinician for colonoscopy discussion. FIT to be done only if patient declines colonoscopy.' },
        { type: 'table', headers: ['Risk Group', 'Screening Tool', 'Onset (Age)', 'Frequency'], rows: [
          { cells: ['A. Average Risk (Asymptomatic or family history limited to non-first degree relatives)', 'Faecal Immunochemical Testing (FIT)', '50', 'Annually'] },
          { cells: ['A. Average Risk', 'Colonoscopy', '50', 'Every 5–10 years'] },
          { cells: ['A. Average Risk', 'CT Colonography', '50', 'Every 5 years'] },
          { cells: ['B1. CRC in first degree relative aged ≤ 60 years or ≥ 2 first degree relatives', 'Colonoscopy', '10 years prior to youngest case or by age 40, whichever earlier', 'Every 5 years'] },
          { cells: ['B2. CRC in first degree relative aged > 60 years', 'Colonoscopy', '10 years prior to youngest case or by age 50, whichever earlier', 'Every 5–10 years'] },
          { cells: ['B3. Personal history of colorectal polyps', 'Colonoscopy', '1–3 years after polypectomy if high-risk features (> 1cm, multiple, villous); 3–5 years if low risk', '—'] },
          { cells: ['B4. Personal history of colorectal malignancy', 'Colonoscopy', 'One year after resection', 'Every 1–3 years'] },
          { cells: ['B5. Personal history of ovarian or endometrial cancer', 'Colonoscopy', 'One year after resection', ''] },
          { cells: ['C1. Family history of familial adenomatous polyposis', 'Flexible sigmoidoscopy (switch to colonoscopy if adenomas identified); consider referral for cancer genetic risk assessment', '10–12 years (from puberty)', 'Annually'] },
          { cells: ['C2. Family history of hereditary non-polyposis colorectal cancer (Lynch syndrome)', 'Colonoscopy; consider referral for cancer genetic risk assessment', '20–25 years', 'Every 1–2 years'] },
          { cells: ['C3a. Inflammatory bowel disease — left-sided colitis', 'Colonoscopy', 'From 15th year of diagnosis onwards', 'Every 1–2 years'] },
          { cells: ['C3b. Inflammatory bowel disease — pan-colitis', 'Colonoscopy', 'From 8th year of diagnosis onwards', 'Every 1–2 years'] },
        ]},
        { type: 'text', content: 'Management of CRC Screening: FIT Positive → Referral to Colorectal Surgery Service for Colonoscopy. Normal colonoscopy → Repeat FIT in 5 years. Abnormal colonoscopy → Follow up with Colorectal Surgery Service; not for further FIT.' },
      ],
    },
    {
      heading: 'Screening for Breast Cancer',
      blocks: [
        { type: 'list', items: [
          { text: 'Mammogram', children: [
            { text: '40–49 years old: Shared decision making after discussion of potential benefits, limitations, and harms (higher false positive rates, false negative results). If mammogram is performed, it should be done annually.' },
            { text: '50–69 years old: Mammogram every 2 years' },
            { text: '> 69 years old: Individualised decision considering benefits, risks and estimated life expectancy. If screening is performed, 2-yearly.' },
          ]},
          { text: 'Breast self-examination (a week after menses) is not used for screening. BSE can be encouraged for women from the age of 30 to improve awareness.' },
          { text: 'Breast MRI should not be used for screening of women at normal risk. It may be used as an adjunct to mammogram for high-risk groups, or for women with diffuse breast injection augmentation.' },
          { text: 'Ultrasound breast, tumour markers (CEA, CA15-3) and clinical breast examination are NOT routinely recommended for screening.' },
        ]},
        { type: 'text', content: 'Special Populations: (1) Refer to breast clinic for high-risk groups: received radiation treatment to the chest (e.g. for Hodgkin disease); women with gene mutations conferring high risk of breast cancer; strong family history of breast cancer but no proven mutation (screening recommended as early as 5–10 years prior to the age of onset in youngest family member, but not earlier than age 25–30 years). (2) Previous breast cancer or pre-malignant conditions: annual screening mammography of remnant and contralateral breasts.' },
        { type: 'text', content: 'To Arrange Mammogram at NUP: Patients can self-book by calling 6370 6556, NUHS or HealthHub App, or at https://for.sg/booknuhsdmammogram. Services at: Bukit Batok, Bukit Panjang, Choa Chu Kang, Clementi, Pioneer Polyclinics.' },
        { type: 'table', headers: ['Medical Institution', 'Contact for Abnormal Mammogram Referral'], rows: [
          { cells: ['Changi General Hospital (CGH)', '8127 7900'] },
          { cells: ['Khoo Teck Puat Hospital (KTPH)', '6602 1665'] },
          { cells: ['National Cancer Centre (NCC)', '6436 8415'] },
          { cells: ['National University Hospital (NUH)', '6772 2263'] },
          { cells: ['Tan Tock Seng Hospital (TTSH)', '6357 8177'] },
          { cells: ['Sengkang General Hospital (SKGH)', '6930 3220 / 6930 3990'] },
        ]},
      ],
    },
    {
      heading: 'Screening for Cervical Cancer',
      blocks: [
        { type: 'list', items: [
          { text: 'Who and How to Screen (all females who have ever had sexual intercourse)', children: [
            { text: '25–29 years: Cervical cytology (Pap smear), once every 3 years' },
            { text: '30–69 years: Human Papilloma Virus (HPV) DNA test, every 5 years (National Cervical Cancer Screening Programme)' },
            { text: 'Women who have never had sexual intercourse need not have screening. NUP does not screen patients with no previous sexual intercourse.' },
            { text: 'Ultrasound and CT pelvis is NOT recommended as screening tests.' },
          ]},
          { text: 'When to Stop Screening', children: [
            { text: 'A woman can be discharged from screening at 69 years of age if she has: 3 consecutive negative cervical cytology tests; OR 2 consecutive negative HPV tests in the last 10 years, with the most recent test occurring within the last 5 years.' },
            { text: 'For women who had history of CIN2, CIN3 or AIS, routine screening should continue for at least 20 years, even if it extends beyond 69 years of age.' },
          ]},
          { text: 'Special Populations — Immunocompromised women (HIV positive, undergone solid organ transplant, or clinical conditions requiring ≥ 2 immunosuppressive agents)', children: [
            { text: 'Annual cervical cytology for women aged 25–29 years old' },
            { text: '3-yearly HPV primary screening for women ≥ 30 years old. Those tested with any high-risk HPV strains should be sent for colposcopy instead of cytology triage.' },
            { text: 'Lifetime screening' },
          ]},
        ]},
        { type: 'text', content: 'Cervical Cancer Screening in NUP: Order "TCU NUR Cervical Cancer screening (First Visit)" on NGEMR, patient to book appointment at kiosks as per usual appointments.' },
        { type: 'table', headers: ['Hysterectomy Status', 'Action'], rows: [
          { cells: ['Subtotal hysterectomy', 'Routine cervical cancer screening'] },
          { cells: ['Hysterectomy for benign disease, no known cervical cancer precursors/cancer', 'Stop screening'] },
          { cells: ['Hysterectomy for unknown histology', 'Do 1 baseline vault smear, stop screening if negative'] },
          { cells: ['Immunosuppressed', 'Vault smears yearly'] },
          { cells: ['Past history of CIN — excision margin involved or not adequately assessed', 'Vault smear at least yearly'] },
          { cells: ['Past history of CIN 1/2/3 completely excised', 'Vault smear for 5 years yearly, then 2-yearly subsequently'] },
          { cells: ['Past history of invasive gynaecological cancer, or previously treated for vaginal intra-epithelial neoplasia', 'Follow up with gynaecologist'] },
        ]},
        { type: 'text', content: 'HPV Vaccination: Offer HPV vaccination for females aged 9–26 years to reduce risk of cervical cancer. School-based programme since April 2019: Dose 1 — HPV2-valent at 12–13 years (Secondary 1); Dose 2 — HPV2 at 13–14 years (Secondary 2). Dose 3 only recommended if dose 1 was given at 15 years of age or older. HPV testing should NOT be used for screening before deciding on HPV vaccination.' },
      ],
    },
    {
      heading: 'Screening for Endometrial, Ovarian and Prostate Cancer',
      blocks: [
        { type: 'text', content: 'Endometrial Cancer: Women with HNPCC or Lynch Syndrome may consider annual screening starting between ages 30 and 35. Routine screening is NOT recommended for women with average risk or those with increased risk (obesity, diabetes, hypertension, nulliparity, infertility, ovulation failure, late menopause, tamoxifen therapy or history of unopposed oestrogen therapy). Early evaluation of postmenopausal bleeding with referral to gynaecologist is important for early detection.' },
        { type: 'text', content: 'Ovarian Cancer: Insufficient supporting evidence for routine screening of asymptomatic women at increased risk. Known BRCA-carriers should be on follow up with an oncologist. Present evidence does NOT support routine screening with serum markers (e.g. CA 125) and/or ultrasound as it is ineffective and tends to lead to unnecessary interventions.' },
        { type: 'text', content: 'Prostate Cancer: Current evidence does not support population-based screening. May offer screening to men aged 50–70 years with estimated further life expectancy > 10 years — discuss potential benefits and risks (shared decision). Can consider SmartPhrase .INPSA to document discussion in NGEMR. High risk groups (one or more first-degree relatives diagnosed before age 65 years) may be offered screening 5–10 years younger than youngest prostate cancer in the family.' },
        { type: 'text', content: 'How to Screen for Prostate Cancer: Serum PSA recommended. PSA > 4 ng/ml requires further follow-up with urologist. Benign causes of elevated PSA include BPH, prostatitis, recent prostate biopsy/TURP/cystoscopy, ejaculation, urinary retention, perineal trauma or prostatic infarction. DRE does not cause clinically significant rise in PSA. PSA is lowered by 5ARI by about 50% after 6–12 months. Screening interval of 2 years or more preferred over annual screening.' },
      ],
    },
    {
      heading: 'Screening for Other Cancers',
      blocks: [
        { type: 'list', items: [
          { text: 'Gastric Cancer: Current evidence does not support population-based screening. High risk groups: Individuals with HNPCC or Lynch Syndrome may benefit from screening with OGD, starting from age 30–35 years. Individual-level screening: refer to GASTROClear section under Gastro SAG for eligibility and workflow information.' },
          { text: 'Liver Cancer: No need to screen general population. Offer screening to high-risk groups (Hepatitis B carriers or individuals with cirrhosis): 6-monthly alpha-fetoprotein and 6–12 monthly ultrasound HBS (refer to Hepatitis B CPG for more details). Liver function test is NOT recommended as a screening test for liver cancer.' },
          { text: 'Lung Cancer: Current evidence does not support population-based screening. Annual Low-dose CT (LDCT) screening may be offered (individual level decision) to: Individuals aged 55–74 who have smoked ≥ 30 pack years and are continuing to smoke; Individuals aged 55–74 who have smoked ≥ 30 pack years but quit < 15 years ago. If patient agreeable, refer Respiratory medicine (routine) and indicate: Others (High risk group for discussion for Lung Ca screening). CXR or tumour markers for lung cancer are NOT recommended as screening tools.' },
          { text: 'Nasopharyngeal Carcinoma (NPC): No need to screen general population. May offer screening to high-risk groups: Individuals with a first-degree relative (parent, sibling) with NPC. How to Screen: Anti-EBV EA IgA and nasoendoscopy. Refer to ENT specialist for screening.' },
        ]},
      ],
    },
    {
      heading: 'Guidelines for Genetic Testing Referral to Medical Oncology (Cancer Genetics Clinic)',
      blocks: [
        { type: 'list', items: [
          { text: 'Hereditary Breast and Ovarian Cancer Syndrome', children: [
            { text: 'Personal or family history of: breast cancer diagnosed < 40 years; male breast cancer, any age; epithelial ovarian cancer, any age; triple negative breast cancer diagnosed < 50 years; ≥ 2 breast cancers, at least one aged < 50 years; both breast and epithelial ovarian cancers; Two or more breast/ovarian cancers in the same patient.' },
            { text: 'Individual from a family with a known BRCA1/2 mutation or other rare gene mutations in the family. BRCA1/2 carriers are also at risk for pancreatic and prostate cancer.' },
            { text: 'Consider referring families with breast cancer and young onset pancreatic or prostate cancer diagnosed before age 50.' },
          ]},
          { text: 'Lynch Syndrome (LS)', children: [
            { text: 'Patient with CRC diagnosed < 50 years' },
            { text: '≥ 1 primary CRC or other LS-related tumours (endometrium, stomach, pancreas, small intestine, ovary, kidney, brain, ureters, bile duct) diagnosed at any age, AND who has at least 1 first-degree relative diagnosed with CRC or LS-related tumour diagnosed < 50 years, AND who has 2 or more first- or second-degree relatives with CRC or LS-related tumour at any age' },
            { text: 'Meets Amsterdam criteria (At least 3 family members affected, spanning 2 generations, at least 1 affected family member diagnosed below age 50 years, all 3 are first-degree relatives of each other)' },
            { text: 'Endometrial cancer < 50 years' },
            { text: 'Known LS mutation in family' },
          ]},
          { text: 'Familial Adenomatosis Polyposis (FAP)' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 14 NUP CPG — Cancer Survivorship Care (Nov 2025)
// ---------------------------------------------------------------------------
const cancerSurvivorship: CpgDocument = {
  id: 'cpg-cancer-survivorship',
  condition: 'Cancer Survivorship Care',
  source: '14 NUP CPG - Cancer Survivorship Care.pdf',
  reviewDate: 'Updated November 2025. Next review date: November 2028.',
  advisors: 'Key FP: Dr Alicia Ong. Specialist Advisor: Dr Gloria Chan (Consultant, Department of Haematology-Oncology, National University Cancer Institute, Singapore).',
  sections: [
    {
      heading: 'National Cancer Survivorship Programme',
      blocks: [
        { type: 'text', content: 'Background: This programme is for patients who have completed their 5-year cancer surveillance at any public tertiary oncology department and are cancer free. Wellness-focused care: to keep cancer survivors as well as possible from the diagnosis of cancer until the end of life. Two groups: breast cancer and colorectal cancer patients.' },
        { type: 'text', content: 'These patients will be discharged from SOC under the cancer survivorship programme to the patient\'s primary care provider (enrolled HSG clinic). In NUP, patients will be empanelled to teamlet.' },
        { type: 'text', content: 'Role of NUP Clinician — First step down visit: (1) Review the cancer survivorship care plan (hard copy with patient or soft copy uploaded to Epic → Media tab); (2) Review the patient care coordination notes updated by the SOC on cancer surveillance plans; (3) Add visit diagnosis of "Carcinoma of breast" or "Carcinoma of colon" and add (+) to Epic problem list.' },
        { type: 'list', items: [
          { text: 'Review following areas of care for cancer survivors yearly', children: [
            { text: 'Look out for symptoms associated with cancer disease recurrence/metastasis. If present, refer back to relevant oncology/surgery specialists via survivorship direct access referral pathway.' },
            { text: 'Be aware of long-term treatment side effects and its management' },
            { text: 'Ensure cancer surveillance is performed at appropriate intervals and update patient care coordination notes' },
            { text: 'Provide screening and preventive care as per HPB guidelines: Cardiovascular risk factor screening (DM, Hyperlipidaemia, Hypertension); Age-appropriate cancer screening; Bone health; Immunisations' },
            { text: 'Promote the benefits of healthy living, including diet & exercise, for patients following cancer treatment' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Colorectal Cancer Survivorship',
      blocks: [
        { type: 'text', content: 'SmartPhrase for documentation: .NUPDRONCOCOLORECTALCASURVIVOR' },
        { type: 'list', items: [
          { text: '1. History and Physical Exam', children: [
            { text: 'Symptoms that may be associated with disease recurrence/metastasis: Weight loss, abdominal pain, changes in bowel habits from baseline, haematochezia, changes in stool caliber from baseline, symptoms associated with bowel obstruction, jaundice, back/bone pain, persistent cough/dyspnoea, persistent headaches.' },
            { text: 'If symptomatic, perform exam: look out for lymphadenopathy (neck, axilla, inguinal), abdominal masses, ascites, hepatomegaly, jaundice, leg swelling.' },
            { text: 'Symptomatic for possible recurrence: Refer back Direct Access to Colorectal Surgery (Indicate: Cancer survivor) if haemodynamically stable, otherwise to ED.' },
          ]},
          { text: '2. Look out for late or long-term side effects: e.g. Chronic diarrhoea, bowel/bladder control issues, ostomy issues, neuropathy. Refer back Direct Access to Colorectal Surgery for suspected surgery complications; Medical Oncology for suspected chemotherapy side effects.' },
          { text: '3. Is the colonoscopy up-to-date?', children: [
            { text: 'Check last colonoscopy report.' },
            { text: 'If last colonoscopy is normal, refer for colonoscopy every 3–5 years until age 75, or until life expectancy < 10 years. (Note: Refer to Colorectal Surgery; do not use open access colonoscopy pathway.)' },
            { text: 'If last colonoscopy is abnormal, check specialist\'s notes/handover for plans on further management.' },
            { text: 'Note: some patients may opt for no further colonoscopy surveillance or other surveillance methods (e.g. CT scan). Check cancer survivorship plan.' },
          ]},
          { text: '4. No need for routine CEA or CT scans.' },
          { text: '5. Screening and preventive care as per HPB guidelines: e.g. CVRF screening, cancer screening (mammogram or HPV testing), bone health, immunisations.' },
        ]},
      ],
    },
    {
      heading: 'Breast Cancer Survivorship',
      blocks: [
        { type: 'text', content: 'SmartPhrase for documentation: .NUPDRONCOBREASTCASURVIVOR' },
        { type: 'list', items: [
          { text: '1. Annual History', children: [
            { text: 'Symptoms associated with disease recurrence/metastases: new breast symptom, pathological bone pain, increasing shortness of breath, jaundice, headaches with red flags.' },
            { text: 'Late or long-term side effects: e.g. fatigue, menopausal symptoms, numbness, pain.' },
            { text: 'Check on psychosocial health and physical function.' },
          ]},
          { text: '2. Annual physical examination: Breast Exam, Lymphadenopathy (supraclavicular, axilla). If symptomatic and as clinically indicated: Abdominal masses, ascites, hepatomegaly, Jaundice, Pleural effusion.' },
          { text: '3. Annual mammogram surveillance till 75 years old or life expectancy < 10 years. Check when patient\'s last mammogram was. Update care coordination notes.' },
          { text: '4. Refer back Direct Access to Breast Surgery (Indicate: Cancer survivor) for recurrence/suspected surgery complications or Medical Oncology for suspected chemotherapy side effects.' },
          { text: '5. No need for any regular blood tests or other investigations such as metastatic screen/tumour markers.' },
          { text: '6. Screening and preventive care as per HPB guidelines: e.g. CVRF screening, cancer screening (FIT/colonoscopy or HPV testing), bone health, immunisations.' },
        ]},
        { type: 'text', content: 'Booking Mammogram under Breast Screen Singapore (BSS): NUHSD will help to book for the following year. Patient to self-book annual BSS mammogram 2–3 months before doctor appointment if not yet booked: (1) NUHS Diagnostics hotline at 6370 6556; (2) Email NUHSD at nuhsd_contact@nuhs.edu.sg; (3) Approach NUHS Diagnostics counter staff at NUP; (4) HealthHub App. Patient will receive BSS results letter within 3–4 weeks, up to 6 weeks.' },
        { type: 'text', content: 'Viewing last mammogram report: BSS mammogram reports can be found in NEHR under "Screening/Indicators → Medical Screening". Mammograms done in hospitals can be found in NEHR under "Investigations → Radiology/Nuclear med". If latest BSS mammogram is abnormal, ensure patient has been recalled by BSS for further evaluation. If not, refer to NUH Breast Clinic direct access.' },
      ],
    },
    {
      heading: 'Contact Resources at NUHS',
      blocks: [
        { type: 'list', items: [
          { text: 'Cancer Appointment-Related Enquiries: Phone: (+65) 6773 7888 | Email: CancerApptLine@nuhs.edu.sg' },
          { text: 'Questions for Oncology Nurse: Phone: (+65) 9722 0569 | Email: CancerLineNurse@nuhs.edu.sg' },
          { text: 'Questions for Stoma Care Nurse: Phone: (+65) 8781 2378' },
        ]},
      ],
    },
    {
      heading: 'Cancer Rehabilitation and Community Services',
      blocks: [
        { type: 'list', items: [
          { text: 'NUH / NTFGH Rehabilitation Medicine (Referral via Epic)' },
          { text: 'Singapore Cancer Society Rehabilitation Centre or Cancer 365 (refer to MSW)' },
          { text: 'St. Luke\'s Hospital Outpatient Rehabilitation Service / Epic referral (Applicable to BBK only)' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 15 NUP CPG — Chalazion (Feb 2026)
// ---------------------------------------------------------------------------
const chalazion: CpgDocument = {
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
  id: 'cpg-chronic-hepatitis-b',
  condition: 'Chronic Hepatitis B Carriers',
  source: '16 NUP CPG - Chronic Hepatitis B Carriers.pdf',
  reviewDate: 'Updated November 2025. Next review date: November 2028.',
  advisors: 'Key FP: Dr Phua Yiyong. Specialist Advisors: Dr Mark Muthiah (Senior Consultant, NUH) / Dr Daniel Huang (Consultant, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Hepatitis B essentially means an infection of the liver with the Hepatitis B Virus (HBV). The HBV is transmitted by blood or body fluids of an infected person to another who does not have immunity against it. A HBV infection can be cleared by the body especially in a healthy adult (acute Hepatitis B) but in some cases the infection progresses to become a long term infection (chronic Hepatitis B) as the body is not able to clear it.' },
        { type: 'text', content: 'Most patients who contracted acute Hepatitis B might not develop any symptoms or only develop non-specific symptoms. Patients with chronic Hepatitis B infection (Hepatitis B carriers) are usually well looking and can unknowingly transmit the virus to others. The complication of damage includes liver scarring (fibrosis), liver failure and liver cancer. Liver cancer is known as a silent killer because the majority of patients do not have symptoms in the early stages.' },
        { type: 'text', content: 'There are drug treatments for Hepatitis B but no cure. Fortunately, there is a vaccine. The Hepatitis B vaccine is 95% effective in preventing children and adults from developing chronic Hepatitis B infection if they have not yet been infected. The vaccine is easily administered in a series of 3 intramuscular doses for adults.' },
        { type: 'text', content: 'Epidemiology: Up to 2 billion people have been infected with Hepatitis B world-wide and 300 million are chronically infected. In Singapore about 4% (1 in 25 persons) of the population are chronic Hepatitis B carriers. Hepatitis B is estimated to cause 60 to 80 per cent of primary liver cancers worldwide. Key findings from the National Sero-prevalence Survey 2005 showed that 59.3% of the population aged 30 to 74 years and 57.2% aged 30 to 44 years were not immune to the HBV.' },
      ],
    },
    {
      heading: 'Natural History of Chronic Hepatitis B',
      blocks: [
        { type: 'text', content: 'The likelihood of developing chronic hepatitis B is higher in those infected perinatally (90%) compared to those infected in adulthood (1%). Most infections acquired in Singapore are perinatal or during early childhood. The natural history of perinatal and childhood-acquired infection is generally described in three phases:' },
        { type: 'list', items: [
          { text: 'Phase 1 — Immune Tolerance Phase (can persist 10–30 years): Characterised by presence of HBeAg and high HBV-DNA levels with persistently normal ALT levels. Usually minimal histological changes in the liver. Rate of spontaneous HBeAg seroconversion is very low; 90% of children remain HBeAg-positive by age 10–15 years.' },
          { text: 'Phase 2 — Immune Clearance Phase (usually during late adolescence or young adulthood): Characterised by elevated ALT levels, lower HBV-DNA levels and increased histological activity. Spontaneous HBeAg seroconversion occurs at annual rate of 10–20%. Mean age of spontaneous HBeAg seroconversion is about 31–35 years. Persistence of HBeAg and high HBV-DNA levels beyond this age implies poor prognosis with worsening histology and higher incidence of hepatocellular carcinoma.' },
          { text: 'Phase 3 — Non-Replicative Phase: Usually asymptomatic; disease progression to cirrhosis is low. Characterised by low HBV-DNA levels, absence of HBeAg (HBeAg negative) and presence of anti-HBe antibodies, with absence of hepatic inflammation histologically.' },
        ]},
      ],
    },
    {
      heading: 'Screening & Diagnosis — Who to Screen',
      blocks: [
        { type: 'text', content: 'As recommended by the Screening Test Review Committee (STRC), hepatitis B screening is recommended in:' },
        { type: 'list', items: [
          { text: 'Asymptomatic Singapore residents with no known hepatitis B carrier status born before 1st September 1987 (when Hepatitis B vaccination was mandatory for all newborns) and who did not undergo the local catch-up immunisation programmes from 2001 to 2004.' },
          { text: 'Pregnant women' },
          { text: 'Healthcare workers' },
          { text: 'Foreigners and immigrants from countries where HBV is endemic' },
          { text: 'At risk groups including but not limited to', children: [
            { text: 'Chronic haemodialysis patients' },
            { text: 'Past or present injection drug users' },
            { text: 'Individuals who underwent invasive procedures in health-care facilities with inadequate infection control practices' },
            { text: 'Individuals with known exposures to HBV (e.g. healthcare workers following needle stick injury involving HBV-positive blood, or recipients of blood or organs from a donor who tested HBV-positive)' },
            { text: 'Individuals whose past or present sex partners were/are HBV-infected or injection drug users or HIV patients' },
            { text: 'Other at risk groups at the discretion of the clinician' },
          ]},
        ]},
        { type: 'text', content: 'NUP Hep A/B Screening and Vaccination Workflow: (1) Before screening for hepatitis A/B, check medical records that patient had not received hepatitis A/B vaccination before. (2) Arrange appropriate screening tests: Hepatitis A — Anti-HAV IgG; Hepatitis B — HBsAg, anti-HBs. (3) Clinician will arrange for review when results are ready and offer appropriate management. (4) If screening results were done more than 6 months ago, manage according to risk profile. (5) To repeat Hep B screening with both HBsAg and anti-HBs post-vaccination.' },
      ],
    },
    {
      heading: 'Hepatitis B Screening Results and Clinical Interpretation',
      blocks: [
        { type: 'table', headers: ['HBsAg', 'Anti-HBs', 'Vaccination Status', 'Interpretation', 'Recommended Action'], rows: [
          { cells: ['Negative', '< 10 IU/L', 'No', 'Not immune to HBV', 'Administer hepatitis B vaccination.'] },
          { cells: ['Negative', '< 10 IU/L', 'Completed recently within last few months', 'Not immune to HBV', 'Repeat hepatitis B course of 3 doses and recheck serology 6–8 weeks later. If no antibody response, consider referral to Infectious Diseases or Hepatology.'] },
          { cells: ['Negative', '< 10 IU/L', 'Completed many years ago', 'Antibody levels may have waned', 'Administer 1 dose and recheck Anti-HBs 6–8 weeks later. High titres > 100 convey immunity for life. If no antibody response, complete course of 3 doses and recheck.'] },
          { cells: ['Negative', '> 10 IU/L', 'Regardless', 'Immune to HBV', 'No vaccination required.'] },
          { cells: ['Positive', '—', 'Regardless', 'HBV infection — either acute or chronic (carrier)', 'Look for signs and symptoms of acute hepatitis. Repeat HBsAg in 6 months to check for Chronic Hep B infection. Screen for HIV and HCV.'] },
          { cells: ['Positive', '> 10 IU/L', 'Regardless', 'HBV infection — either acute or chronic (carrier); possibly mutant variant', 'Look for signs and symptoms of acute hepatitis. Refer to hepatology for further management.'] },
        ]},
      ],
    },
    {
      heading: 'Hepatitis B Infection Diagnosis and Clinical Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Hepatitis B infection is diagnosed based on the presence of Hepatitis B Surface Antigen (HBsAg).' },
          { text: 'Chronic HBV infection is defined as having two HBsAg positive results taken at least 6 months apart.' },
        ]},
        { type: 'text', content: 'Acute hepatitis B is often asymptomatic or mild, especially in children under 5 years of age. In adults the onset of illness is usually abrupt and can last for weeks to months. Symptoms of acute hepatitis include:' },
        { type: 'list', items: [
          { text: 'Jaundice' },
          { text: 'Fever' },
          { text: 'Dark coloured urine with pale stools' },
          { text: 'Prolonged tiredness or malaise' },
          { text: 'Poor appetite' },
          { text: 'Abdominal pain' },
          { text: 'Nausea and vomiting' },
        ]},
        { type: 'text', content: 'Patients with acute hepatitis B need to be treated urgently as it can lead to acute liver failure and even death. 1 in 10 patients may develop Chronic Hepatitis B Infection (Hepatitis B carriers). Patients with Chronic Hepatitis B Infection are usually asymptomatic unless they develop acute hepatitis or complications (liver cirrhosis, hepatocellular carcinoma, liver failure).' },
      ],
    },
    {
      heading: 'Hepatitis B Viral Protein Tests and Clinical Significance',
      blocks: [
        { type: 'table', headers: ['Viral Protein Test', 'Clinical Significance'], rows: [
          { cells: ['HBsAg (Hepatitis B surface antigen)', 'Detected in high levels in serum during acute infection and persists for an average of 4 weeks after exposure. Persistence beyond 6 months indicates chronic HBV infection.'] },
          { cells: ['Anti-HBs (Hepatitis B surface antibody)', 'Indicates recovery and immunity from HBV infection. Also develops in a person successfully vaccinated against HBV.'] },
          { cells: ['IgM anti-HBc (IgM class antibody to core antigen)', 'Indicates recent infection with HBV (< 6 months) or acute flare of chronic Hepatitis B.'] },
          { cells: ['HBeAg (Hepatitis B envelope antigen)', 'Those positive for HBeAg circulate HBV at very high titres in their blood — indicates high infectivity. Persistence of HBeAg beyond 40 years old is associated with poorer prognosis.'] },
          { cells: ['Anti-HBe (Antibody to HBeAg)', 'Anti-HBe becomes detectable when HBeAg is lost.'] },
        ]},
      ],
    },
    {
      heading: 'Management & Follow-Up of Chronic Hepatitis B',
      blocks: [
        { type: 'text', content: 'Initial Management (for 16 years old and above):' },
        { type: 'list', items: [
          { text: 'Family history of HBV infection, HBV vaccinations, HCC and cirrhosis' },
          { text: 'Risk factors: Smoking history, alcohol consumption, occupational history, medication history, history of jaundice and quality of life' },
          { text: 'Physical examination — Stigmata of chronic liver disease — refer to GE SOC immediately if present' },
          { text: 'Investigations: Viral markers (HBeAg, anti-HBe antibody), LFT, AFP, U/S HBS, FBC' },
        ]},
        { type: 'text', content: 'If physical examination and investigations are normal — Continue 6 monthly follow-up:' },
        { type: 'list', items: [
          { text: '1. ALT, Bilirubin, Albumin, AFP, platelets — 6 monthly' },
          { text: '2. U/S HBS — 6–12 monthly' },
          { text: '3. HBeAg — check once at age 40 or 35 years if high-risk factors present. No need to repeat yearly subsequently.' },
          { text: '4. Offer repeat Hep B serology (HBsAg + Anti-HBs) every 2 years — to check for spontaneous seroconversion. Consider continuing with regular surveillance even if there is HBsAg seroconversion as risk of HCC is still present.' },
          { text: '5. Consider FIB-4 or APRI score for fibrosis assessment every 2 years.' },
        ]},
        { type: 'text', content: 'High-risk factors: family history of HCC, regular alcohol consumption or immunocompromised state (prolonged steroids, chemo/immunotherapy).' },
        { type: 'text', content: 'Refer to Gastroenterologist if any of the following: (1) Clinical signs of liver disease — hepatomegaly, splenomegaly, ascites, jaundice, spider naevi, leukonychia, asterixis, pedal oedema, palmar erythema. (2) Abnormal laboratory results — ALT/AST persistently raised over 3 months; AFP raised, rising trend, or HBeAg positive > age 40 (or > age 35 if high-risk factors); Low albumin, raised bilirubin, low platelet. (3) U/S HBS suspicious for cirrhosis, HCC or abnormal lesions for which CT is recommended.' },
      ],
    },
    {
      heading: 'Management of Chronic Hepatitis B — Ongoing Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Monitor for acute flare and complications — All patients should have a 6 monthly review to:', children: [
            { text: 'Review for clinical symptoms and signs' },
            { text: 'Liver Function Test — to look for acute liver inflammation or liver failure' },
            { text: 'Alpha-Fetoprotein (AFP) — Liver cancer marker' },
            { text: 'Full Blood Count and Platelet — to evaluate liver function; to calculate APRI or FIB-4 score as marker of liver fibrosis where indicated' },
            { text: 'Ultrasound Hepatobiliary system — to evaluate for abnormal changes such as fatty liver, fibrosis and growth' },
            { text: 'Frequency of review can be earlier according to clinician\'s assessment' },
          ]},
          { text: 'Specialist Referral — Gastroenterology referral recommended in patients with', children: [
            { text: 'Persistently elevated ALT' },
            { text: 'Abnormal Alpha-Fetoprotein level' },
            { text: 'Other abnormal lab results: low albumin, raised bilirubin, low platelets' },
            { text: 'Signs of liver cirrhosis, HCC or other abnormal lesions on U/S HBS' },
            { text: 'Positive HBeAg at 40 years old or 35 years old (for high-risk population) and beyond' },
            { text: 'Clinical signs of chronic liver disease' },
            { text: 'HIV or hepatitis C co-infection' },
          ]},
          { text: 'Emergency Department referral recommended for: Clinical signs suggestive of acute liver injury or hepatic decompensation (new onset clinical jaundice, acute or overt gastrointestinal bleeding or ALT ≥ 1000 U/L).' },
          { text: 'Special situations', children: [
            { text: 'Offer repeat Hep B serology every 2 years to check for seroconversion (HBsAg negative and anti-HBs positive)' },
            { text: 'Sero-converted patients: Discuss with patient to continue regular surveillance as risk of HCC is still present (although lower risk). Carry out fibrosis risk assessment with FIB-4 score every 2 years. Refer if FIB-4 score > 1.3.' },
            { text: 'Patients with acute flare where ALT is raised — see NUP Metabolic Dysfunction-Associated Steatotic Liver Disease CPG' },
            { text: 'Fatty liver — manage as per fatty liver workflow (see NUP Metabolic Dysfunction-Associated Steatotic Liver Disease CPG)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Non-Pharmacological / Lifestyle Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Encourage screening for metabolic risk factors and optimise cardiovascular risk factors as per population guidelines.' },
          { text: 'Stop smoking and stop intake of alcohol.' },
          { text: 'Advise to avoid use of Traditional Chinese Medication.' },
          { text: 'If patient is on prolonged immunosuppression medication (e.g. steroids, methotrexate), refer to a gastroenterologist for co-management as patient is at increased risk of chronic Hepatitis B flare.' },
          { text: 'Advise family members & especially the sexual partner for hepatitis B screening. Advise Hepatitis B vaccination for those who are not immune to Hepatitis B.' },
          { text: 'Reinforce on the usage of barrier contraception (e.g. condoms) during sexual intercourse with partner unless the partner is Hepatitis B immunised.' },
          { text: 'Reassure that Hepatitis B cannot be contracted by casual contact, sharing of utensils and sharing of common living space.' },
          { text: 'Where patient is high risk, assess for other sexually transmitted diseases such as Hepatitis C and HIV.' },
        ]},
        { type: 'text', content: 'Self-Monitoring — Advise patients on signs and symptoms of acute flare and complications: (1) Jaundice; (2) Abdomen pain; (3) Weight loss or weight gain; (4) Abdomen swelling; (5) Loss of appetite; (6) Pale stools with tea-coloured urine.' },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['HBeAg', 'At first visit', 'If positive at first visit, to recheck at age 40 years, or age 35 years if high-risk factors present; if still positive, consider specialist referral.'] },
          { cells: ['Anti-HBe antibody', 'At first visit', ''] },
          { cells: ['Liver Function Test (LFT)', 'At first visit, and minimally ALT once every 6 monthly', 'Frequency of monitoring and specialist referral to be tailored based on previous ALT values and trends as well as HBeAg status.'] },
          { cells: ['Alpha-fetoprotein (AFP)', 'At first visit and once every 6 monthly', 'AFP is a tumour marker used for HCC surveillance.'] },
          { cells: ['Full Blood Count (FBC)', 'Consider at first visit and once every 6 monthly', 'To monitor for thrombocytopenia associated with liver disease.'] },
          { cells: ['Ultrasound Hepatobiliary System', 'At first visit and annually', 'Frequency of imaging is based on HCC risk.'] },
          { cells: ['Hepatitis A Screening / Vaccination', 'Consider anti-HAV screening and vaccination', 'Unless contraindicated, hepatitis A vaccination should be given to prevent superimposed acute hepatitis A in patients with chronic hepatitis B virus infection.'] },
          { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under the National Adult Immunisation Schedule (NAIS) and National Childhood Immunisation Schedule (NCIS).'] },
          { cells: ['Pneumococcal Vaccination (PCV13 or PPSV23)', 'As per guidelines depending on age and other medical conditions', 'As recommended under NAIS and NCIS.'] },
          { cells: ['Sexually transmitted diseases and Hepatitis C screening', 'Screening in patients with high-risk behaviours', 'High-risk behaviours include MSM, unprotected sex with multiple sexual partners, injection drug users, tattoos, sharing of household articles contaminated with blood.'] },
          { cells: ['Metabolic disease screening (BP, lipid profile, weight/BMI, Diabetes)', 'As per guidelines', 'Development of fatty liver and metabolic risk factors further increases risk of liver cirrhosis and HCC.'] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Combined export of all CPG documents (15 total)
// ---------------------------------------------------------------------------
export const cpgDocuments: CpgDocument[] = [
  allergicConjunctivitis,
  allergicRhinitis,
  anaemia,
  anxietyDisorder,
  jointPain,
  acuteRedEye,
  gastroenteritis,
  atrialFibrillation,
  bph,
  bronchialAsthmaAdults,
  bronchialAsthmaChildren,
  cancerScreening,
  cancerSurvivorship,
  chalazion,
  chronicHepatitisB,
];
