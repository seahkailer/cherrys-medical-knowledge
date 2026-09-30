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
// 17. Chronic Hepatitis C
// ---------------------------------------------------------------------------
const chronicHepatitisC: CpgDocument = {
  id: 'chronic-hepatitis-c',
  condition: 'Chronic Hepatitis C',
  source: 'NUP CPG',
  reviewDate: 'October 2024',
  advisors: 'Dr Mark Muthiah (Senior Consultant, NUH) / Dr Alexander Yip (Consultant, Alexandra Hospital) / Dr Alex Soh (Consultant, Alexandra Hospital)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Hepatitis C is an inflammation of the liver caused by the hepatitis C virus (HCV). HCV is primarily a blood-borne virus. The most common modes of infection are: (1) Injecting drug through sharing of injection equipment; (2) Inadequate sterilization of medical equipment; (3) Transfusion of unscreened blood and blood products; (4) Unsafe sex practices that lead to exposure to blood, people with multiple sexual partners and among men who have sex with men (less common).' },
        { type: 'text', content: 'Acute Hepatitis C infections are usually asymptomatic. Around 30% of infected persons clear the virus spontaneously within 6 months without treatment. The remaining 70% will develop chronic HCV infection. Among this group, the risk of cirrhosis ranges from 15–30% within 20 years.' },
        { type: 'text', content: 'Unlike Hepatitis B, there is currently no effective vaccine against hepatitis C. However, Direct-acting antiviral agents (DAAs) can cure more than 95% of persons affected by HCV.' },
        { type: 'text', content: 'In Singapore, acute hepatitis C infection is a notifiable disease under section 6 of the Infectious Disease Act within 72 hours from time of diagnosis. Chronic hepatitis C need not be reported to MOH.' },
        { type: 'text', content: 'Epidemiology: Globally, an estimated 50 million people have chronic HCV infection with approximately 1 million new infections per year. In Singapore, the seroprevalence is low (0.37–0.54%) based on blood donor studies, with majority among those with history of injecting drug use. Approximately 45% of people who inject drugs show evidence of current or past HCV infection.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Screening (per Report of Screening Test Review Committee, March 2019) is recommended for:' },
        { type: 'list', items: [
          { text: 'At-Risk Groups', children: [
            { text: 'Children born to HCV positive mothers' },
            { text: 'Chronic haemodialysis patients' },
            { text: 'Past or present intravenous drug abusers' },
            { text: 'Individuals who underwent invasive procedures in health-care facilities with inadequate infection control practices' },
            { text: 'Individuals with known exposures to HCV (e.g. healthcare workers following needle stick injury, recipients of blood or organs from HCV-positive donor)' },
            { text: 'Individuals whose past or present sex partners were/are HCV infected or intravenous drug abusers' },
            { text: 'HIV patients' },
          ]},
          { text: 'Healthcare Workers', children: [
            { text: 'All HCWs with direct patient contact are encouraged to have their status checked' },
            { text: 'HCWs practising in specialties or areas involving exposure-prone procedures' },
          ]},
        ]},
        { type: 'text', content: 'Diagnosis depends on detection of antibodies to recombinant antigens (Anti-HCV antibody) and detection of viral RNA (e.g. by PCR techniques).' },
        { type: 'text', content: 'Clinical Presentation: Most patients do not have symptoms in the first week of infection. Symptoms may develop anywhere between 2 weeks to 6 months. In the local context, most patients in the primary care setting were either discharged from specialist or defaulted follow-up. Patients who are treated and discharged would have achieved sustained virological response (SVR) defined by undetectable HCV RNA ≥ 12 weeks after treatment completion with DAA and transaminase normalization. Likelihood of achieving SVR with DAA generally exceeds 95%.' },
      ],
    },
    {
      heading: 'Management and Follow-Up',
      blocks: [
        { type: 'text', content: 'Patients who are discharged generally do not require follow-up if there is no evidence of cirrhosis. Assessment for other causes of liver disease is recommended for patients with persistently elevated transaminase levels after SVR. Patients who have risk of recurrence (habit of adding tattoo, IVDU, multiple sexual partners) should be counselled.' },
        { type: 'text', content: 'Cirrhotic patients are at risk for Hepatocellular Carcinoma and should undergo surveillance every 6 months with ultrasound (with or without AFP testing) with Gastro SOC. If relapse is suspected or cannot be ruled out, refer to Gastro for HCV-RNA testing. HCV antibody remains positive in most patients after achieving SVR; testing for recurrence via HCV RNA is recommended.' },
        { type: 'text', content: 'People who achieve SVR can have HCV recurrence due to reinfection or late relapse. Annual testing for HCV reinfection is recommended for patients with ongoing risk (injection drug use or high-risk sexual exposure).' },
      ],
    },
    {
      heading: 'Non-Pharmacological / Lifestyle',
      blocks: [
        { type: 'list', items: [
          { text: 'Avoid sharing toothbrushes, and dental or shaving equipment. Cover any bleeding wound.' },
          { text: 'Persons who inject drugs: counsel to avoid reusing or sharing syringes, needles, water, cotton and other drug preparation equipment.' },
          { text: 'Advised not to donate blood and to discuss HCV serostatus prior to donation of body organs, other tissue or semen.' },
          { text: 'Persons with HIV and those with multiple sexual partners should be reinforced to use barrier precautions.' },
          { text: 'Household surfaces contaminated with visible blood should be cleaned using 1 part household bleach to 9 parts water. Wear gloves when cleaning up blood spills.' },
          { text: 'Screening for at-risk family members such as children of persons with HCV infection and sexual contacts is recommended.' },
          { text: 'HCV is not spread by sneezing, hugging, holding hands, coughing, sharing eating utensils or drinking glasses, nor through food or water.' },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment',
      blocks: [
        { type: 'text', content: 'Direct-acting antiviral agents (DAAs) are prescribed by a specialist physician (gastroenterologist, hepatologist, or infectious disease specialist). DAAs can cure more than 95% of persons affected by HCV.' },
      ],
    },
    {
      heading: 'Self-Monitoring',
      blocks: [
        { type: 'text', content: 'Patients who have achieved SVR can develop recurrence from reinfection or relapse. They should be advised to monitor for:' },
        { type: 'list', items: [
          { text: 'Jaundice' },
          { text: 'Abdominal pain' },
          { text: 'Pale stools or tea-coloured urine' },
          { text: 'Loss of weight and/or loss of appetite' },
          { text: 'Vomiting of blood' },
          { text: 'Per rectal bleeding' },
          { text: 'Abdominal swelling' },
        ]},
        { type: 'text', content: 'Signs or symptoms suggesting decompensated liver disease, cirrhosis or hepatocellular carcinoma should be referred to Gastroenterologist for further management.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 18. Chronic Kidney Disease
// ---------------------------------------------------------------------------
const chronicKidneyDisease: CpgDocument = {
  id: 'chronic-kidney-disease',
  condition: 'Chronic Kidney Disease',
  source: 'NUP CPG',
  reviewDate: 'December 2025',
  advisors: 'Dr Chua Horng Ruey (Senior Consultant, NUH) / Dr Clara Ngoh (Consultant, NUH) / Dr Chua Yan Ting (Associate Consultant, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Chronic kidney disease (CKD) is defined as abnormalities of kidney function or structure persisting for at least three months, with implications for health. This guide aims to optimise and manage patients with CKD to the point of referral and management by the nephrologist.' },
        { type: 'text', content: 'Haematuria and proteinuria are the hallmarks of glomerular disease. In addition, hypertension, impaired kidney function and fluid retention can be present. Conditions covered include: (a) Chronic Glomerulonephritis (presenting as nephritic or nephrotic syndromes), (b) Nephropathies (e.g. secondary to underlying diabetes or other conditions) and (c) Chronic Kidney Diseases (with or without known underlying aetiology).' },
        { type: 'text', content: 'Epidemiology: In 2017, the estimated global prevalence of CKD was 9.1%. In Singapore, prevalence among residents aged 18 to 74 years was 8.8% in 2019–2020. CKD has remained in the top ten causes of death from 2009 to 2019 with CKD-related deaths rising by 76% within that decade.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Risk Factors for CKD include: Age (≥60 years), Gender (male > female), Diabetes mellitus, Hypertension, Obesity (BMI ≥27.5 kg/m²), Hyperuricaemia or gout, Smoking, Family history of CKD or ESRF, Hereditary kidney disease, History of AKI, Recurrent kidney stones, Nephrotoxic medications (including frequent or chronic NSAID use).' },
        { type: 'text', content: 'Diagnosis of CKD is made if any of the following is present for at least three months: GFR <60 mL/min/1.73m², UACR ≥3 mg/mmol (≥30 mg/g), or other marker of kidney damage.' },
        { type: 'text', content: 'HALT-CKD Criteria — Normal ACR: male <2.5 mg/mmol, female <3.5 mg/mmol. Microalbuminuria: male 2.5–30 mg/mmol, female 3.5–30 mg/mmol. Macroalbuminuria: ACR >30–70 mg/mmol. Overt Proteinuria: ACR >70 mg/mmol. ACR 30 mg/mmol is equivalent to PCR 50 mg/mmol and UTP 500 mg/day. ACR 70 mg/mmol is equivalent to PCR 100 mg/mmol and UTP 1,000 mg/day.' },
        { type: 'text', content: 'Common Causes of CKD and ESRF: (1) Diabetic kidney disease; (2) Hypertensive nephrosclerosis; (3) Primary glomerulonephritis (GN); (4) Autoimmune diseases — SLE; (5) Cystic diseases — polycystic kidney disease; (6) Others — chronic pyelonephritis, obstruction.' },
      ],
    },
    {
      heading: 'Management — Targets of Treatment (HALT CKD)',
      blocks: [
        { type: 'table', headers: ['Goal', 'Target / Action'], rows: [
          { cells: ['Diagnose CKD', 'Add "Chronic Renal Failure" to visit diagnosis and problem list if UACR ≥3 mg/mmol or eGFR <60 mL/min/1.73m² for more than 3 months apart'] },
          { cells: ['Lifestyle Modification', 'Refer all patients age <80 years for HALT-CKD counselling; stop smoking; encourage weight loss; counsel on low salt (<2 g/day) diet; counsel on low protein diet (<0.8 g/kg/day) for CKD G3B patients without DM; advise 150 min/week moderate intensity exercise'] },
          { cells: ['Maximize ACE-I/ARB', 'Optimise dosages until maximal recommended dose, normoalbuminuria + BP target achieved, or maximal tolerated dose. Order ACE-I/ARB panel in 2–4 weeks with CM review'] },
          { cells: ['Optimize BP', '<130/80 mmHg for ALL patients; <140/90 mmHg for older patients, high fall risk, multiple co-morbidities'] },
          { cells: ['Optimize HbA1c', '≤7% for age ≤75 years; ≤8% for age 76–80 years'] },
          { cells: ['Optimize LDL-C', '<1.8 mmol/L for DM patients; <2.6 mmol/L for non-DM patients; more stringent for patients with ASCVD'] },
          { cells: ['Start SGLT-2 Inhibitor', 'Can be started if patient is on ACE-I/ARB; multiple benefits including weight loss, BP and DM control, reducing albuminuria, retarding progression, reducing mortality'] },
          { cells: ['Co-manage with Renal', 'Refer CKD G3B, G4 and G5 or persistent significant albuminuria to Nephrology'] },
        ]},
      ],
    },
    {
      heading: 'Use of SGLT2 Inhibitors in CKD',
      blocks: [
        { type: 'text', content: 'SGLT2 inhibitors have been shown to reduce risk of worsening kidney function, onset of kidney failure or death from renal causes, with the added benefit of reducing risk of CV events in patients with CKD, with or without DM.' },
        { type: 'text', content: 'An acute eGFR decline may occur at 2–4 weeks after initiation of an SGLT2 inhibitor. An initial rise in serum creatinine of up to 30% is not associated with long-term kidney function loss, and treatment should not be discontinued. For patients with CKD without DM, the recommended dosage of Dapagliflozin and Empagliflozin is limited to 10 mg daily.' },
        { type: 'list', items: [
          { text: 'Criteria to meet before initiating SGLT2i: Patient initiated on ACE-I/ARB with appropriate eGFR; if significant proteinuria (TUP >1 g/day) for patients without DM, consider referral to Nephrology; ensure adequate counselling on benefits, hydration, genital hygiene, sick day precaution.' },
        ]},
      ],
    },
    {
      heading: 'Other Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Stop use of nephrotoxic drugs', children: [
            { text: 'NSAID (except Aspirin)' },
            { text: 'Antibiotics: Sulphonamides, Aminoglycosides' },
            { text: 'Contrast media' },
          ]},
          { text: 'Diet advice for early CKD: Low salt, low protein (if applicable), adequate hydration. Allopurinol may need to be dose-adjusted (refer to Gout CPG).' },
        ]},
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        { type: 'text', content: 'Acute Kidney Injury (AKI): Defined as increase in serum creatinine ≥26.5 μmol/L within 48 hours, or ≥1.5 times baseline within 7 days, or urine volume <0.5 ml/kg/h for 6 hours. Evaluate for pre-renal (dehydration), renal (medications, autoimmune), and post-renal (obstruction) causes. Repeat non-fasting sodium, potassium, creatinine within 3–7 days.' },
        { type: 'text', content: 'Handling cessation of ACEi/ARB or SGLT2i post-hospital discharge: Discontinuation of ACEi/ARBs was associated with an almost twofold increased risk of progression to advanced CKD. For clinically stable patients with potentially good health outcomes, consider stepwise re-initiation and uptitration.' },
        { type: 'text', content: 'Use in Elderly: Research suggests comparable effectiveness and safety to younger populations. However, careful monitoring and awareness of potential drug interactions and adverse effects (postural hypotension) are crucial.' },
        { type: 'text', content: 'Use in Advanced CKD: Dapagliflozin (DAPA-CKD) can be continued until dialysis. ACEi/ARB with renally adjusted doses can be continued for advanced CKD patients, unless hyperkalaemia, hypotension, or unusually rapid worsening of eGFR occurs.' },
      ],
    },
    {
      heading: 'Referral Criteria',
      blocks: [
        { type: 'table', headers: ['Clinical Problem', 'Initial Management', 'Disposition'], rows: [
          { cells: ['Rise in creatinine >2x baseline', 'Repeat within 3–7 days', 'Refer A&E'] },
          { cells: ['Rise in creatinine >1.5x baseline (no ACEi/ARB change)', 'Repeat within 3–7 days', 'Direct access Nephro'] },
          { cells: ['Rise in creatinine >1.5x baseline (ACEi/ARB increased)', 'Stop/decrease ACEi/ARB, recheck Cr within 2 weeks; if back to baseline: Routine Nephro; if >30% rise: Early Nephro; if >50% rise: Direct access Nephro', ''] },
          { cells: ['Hyperkalaemia K+ ≥6', 'Hyperkalaemia management per protocol', 'Refer A&E'] },
          { cells: ['Hyperkalaemia K+ 5.6–5.9', 'Repeat K+ within 1 week; if remains 5.6–5.9 → Direct access Nephro', ''] },
          { cells: ['Fluid overload in CKD G5 despite ≥120mg daily loop diuretic', '', 'Refer A&E'] },
          { cells: ['Fluid overload in CKD G3–G4 despite loop diuretic', '', 'Early Nephro appt'] },
          { cells: ['CKD G5 (2 occasions over 90-day period, asymptomatic)', '', 'Early Nephro appt'] },
          { cells: ['CKD G3B–G4 with eGFR decline >5 mL/min/1.73m² over 3 months', '', 'Early Nephro appt'] },
          { cells: ['Average eGFR decline >10 mL/min/1.73m² over 12 months', '', 'Early Nephro appt'] },
          { cells: ['UPCR >300 or UACR >200 mg/mmol (non-diabetic)', '', 'Direct access Nephro'] },
          { cells: ['UPCR >300 or UACR >200 mg/mmol (diabetic)', '', 'Routine Nephro appt'] },
          { cells: ['UPCR >100 or UACR >70 mg/mmol with haematuria', '', 'Early Nephro appt'] },
          { cells: ['UPCR >100 or UACR >70 mg/mmol, no haematuria (non-diabetic)', 'Optimise ACEi/ARB; if persistent UPCR >100 or UACR >70 → Routine Nephro', ''] },
          { cells: ['RPGN suspected', '', 'Refer A&E'] },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Blood Pressure measurement', 'Twice a year', 'ACEi and ARBs should be used for BP control when proteinuria is present'] },
          { cells: ['Weight and BMI', 'Twice a year', ''] },
          { cells: ['Lipid profile', 'Annually', ''] },
          { cells: ['Diabetes screening', 'Annually', 'Or more frequent in pre-diabetes or diabetes'] },
          { cells: ['Kidney Function (Na, K, Cr and eGFR)', 'Twice a year', ''] },
          { cells: ['Albuminuria (uPCR or uACR)', 'Twice a year', ''] },
          { cells: ['Smoking assessment', 'Annually for smokers', 'Once-off for non-smokers unless change in smoking habit'] },
          { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under NAIS'] },
          { cells: ['Pneumococcal, Herpes Zoster, COVID-19 Vaccinations', 'As recommended under NAIS/NCIS', ''] },
          { cells: ['Hepatitis B Vaccination', 'As directed by Nephrology', ''] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 19. Chronic Obstructive Pulmonary Disease
// ---------------------------------------------------------------------------
const copd: CpgDocument = {
  id: 'copd',
  condition: 'Chronic Obstructive Pulmonary Disease (COPD)',
  source: 'NUP CPG',
  reviewDate: 'October 2025',
  advisors: 'Dr See Kay Choong (Senior Consultant, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Chronic Obstructive Pulmonary Disease (COPD) is a heterogeneous disorder characterised by airflow obstruction that is not fully reversible. The airflow limitation is usually both progressive and associated with exposure to noxious particles or gases. Smoking is by far the most important risk factor.' },
        { type: 'text', content: 'Globally in 2019, COPD is the third most common cause of death. In Singapore, COPD is estimated to be the tenth highest cause of death and seventeenth highest cause of disability-adjusted life years, with an annual societal cost of SGD$3,304 per capita in 2022.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'list', items: [
          { text: 'Screen all patients with any risk factors for COPD symptoms, and vice versa, at least yearly.' },
          { text: 'Suspect COPD in any patient with at least one COPD symptom and risk factor.' },
          { text: 'All patients suspected to have COPD MUST be evaluated by spirometry.' },
          { text: 'Screening spirometry in the general asymptomatic population is not recommended.' },
        ]},
        { type: 'text', content: 'Diagnosis of COPD requires ALL of the following: (1) At least one COPD symptom; (2) At least one risk factor; (3) Evidence of airflow limitation: post-bronchodilator spirometry FEV1/FVC <0.70.' },
        { type: 'table', headers: ['COPD Symptoms', 'Risk Factors', 'Co-Morbidities'], rows: [
          { cells: ['Chronic cough (generally initial symptom, may be intermittent)', 'Age 40 years and above', 'Heart disease'] },
          { cells: ['Chronic sputum production (any pattern, may be intermittent)', 'Tobacco smoke (ex and current smoker)', 'Hypertension'] },
          { cells: ['Chronic unexplained dyspnoea or reduced effort tolerance (hallmark, progressive, persistent)', 'Environmental exposure (second-hand smoke, air pollution)', 'Diabetes'] },
          { cells: ['Recurrent lower respiratory tract infections', 'Occupational exposure (dust, vapour, fumes, gases)', 'Chronic kidney disease'] },
          { cells: ['Wheezing (may be exertional or nocturnal)', 'History of abnormal lung development, severe childhood infections, or pulmonary tuberculosis', 'Osteoporosis'] },
          { cells: ['Fatigue', 'Rare risk factor: alpha-1-antitrypsin deficiency', 'Sleep apnoea, Depression, Cognitive impairment, Lung cancer'] },
          { cells: ['Severe COPD: weight loss, muscle mass loss, anorexia, ankle swelling (cor pulmonale), depression/anxiety', '', ''] },
        ]},
      ],
    },
    {
      heading: 'Investigation',
      blocks: [
        { type: 'list', items: [
          { text: 'Spirometry: Mandatory to establish COPD diagnosis (post-bronchodilator FEV1/FVC <0.70 confirms COPD). Should be undertaken when patients are clinically stable and free from respiratory tract infections.' },
          { text: 'Pulse oximetry: to evaluate the need for supplemental oxygen therapy.' },
          { text: 'Chest X-ray: Not useful to establish COPD diagnosis but valuable to exclude alternative diagnosis and establish comorbidities.' },
          { text: 'Full blood count: to rule out anaemia; blood eosinophil count guides use of ICS (eosinophils <100 cells/μl: ICS little/no effect; 100–299 cells/μl: consider ICS if symptoms not better; ≥300 cells/μl: ICS beneficial).' },
          { text: 'Alpha-1 antitrypsin deficiency (AATD) screening: WHO recommends all COPD patients be screened once.' },
        ]},
      ],
    },
    {
      heading: 'Management Goals',
      blocks: [
        { type: 'list', items: [
          { text: 'To reduce symptoms: relieve symptoms, improve exercise tolerance, and improve health status.' },
          { text: 'To reduce risks: prevent disease progression, prevent and treat exacerbation, and reduce mortality.' },
          { text: 'To prevent or minimise side effects from treatment.' },
        ]},
      ],
    },
    {
      heading: 'Follow-Up and Monitoring',
      blocks: [
        { type: 'list', items: [
          { text: 'Assess symptoms at least yearly using CAT score (document in EPIC Flowsheets). More frequently for patients who are more symptomatic, have more frequent exacerbations, or have recent escalation in treatment.' },
          { text: 'History of exacerbations: Increased risk of future exacerbation if TWO OR MORE exacerbations requiring antibiotics or steroids in the previous year, OR ONE exacerbation leading to hospitalisation in the previous year.' },
          { text: 'Smoking assessment (2 As approach): Ask all patients about smoking; Act to help all smokers quit.' },
          { text: 'Pharmacotherapy: optimise bronchodilator treatment and assess inhaler technique and medication adherence at every visit.' },
          { text: 'Ensure up-to-date vaccination: Annual influenza; Pneumococcal (per NAIS); Tdap; Covid-19; RSV (age >60 with chronic heart or lung disease); Zoster (COPD patients over 50).' },
          { text: 'Nutritional support: weight loss and malnutrition may develop as COPD progresses. Nutritional repletion (including protein supplementation) plays an important role.' },
          { text: 'Long-term oxygen therapy (LTOT): indicated when SaO2 <88% on room air when stable (confirmed 2x over 3-week period), or SaO2 =88% with evidence of right heart failure or erythrocytosis.' },
        ]},
      ],
    },
    {
      heading: 'Pharmacotherapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Start a long-acting bronchodilator treatment, preferably a LAMA (preferred over LABA-only inhalers), for patients with infrequent or less intense symptoms and lower risk of exacerbation. SAMA or SABA alone can be considered in patients with very occasional dyspnoea.' },
          { text: 'Start dual bronchodilator therapy with LAMA+LABA for patients with frequent or intense COPD symptoms, or a higher risk of exacerbation.' },
          { text: 'Consider triple therapy with LAMA+LABA+ICS for patients with: (1) Higher risk for exacerbations and blood eosinophils ≥300 cells/μl; (2) Frequent exacerbations on LAMA+LABA with blood eosinophils ≥100 cells/μl; (3) History of asthma or features of both asthma and COPD.' },
          { text: 'Avoid ICS in patients with recurrent pneumonia, blood eosinophils <100 cells/μl, or history of mycobacterial infections.' },
        ]},
        { type: 'table', headers: ['Medication', 'Adult Dose', 'Significant Adverse Reactions', 'Contraindications'], rows: [
          { cells: ['SABA: salbutamol (Ventolin) 100mcg MDI', '1–2 puffs 3–4 times PRN', 'Hypersensitivity reactions, hypokalaemia (high doses)', 'Hypersensitivity to salbutamol or any component'] },
          { cells: ['SAMA: ipratropium bromide (Atrovent N) 20mcg MDI', '2 puffs 3–4 times PRN', 'Dry mouth, constipation, tachycardia, palpitations, arrhythmias, ocular complications', 'Hypersensitivity to ipratropium, atropine, or its derivatives'] },
          { cells: ['LAMA: umeclidinium bromide (Incruse Ellipta) DPI 62.5mcg', '1 INH OD. Max 1 INH/day', 'CV effects, hypersensitivity reactions, increased intraocular pressure, urinary retention', 'Hypersensitivity to umeclidinium or any component; severe hypersensitivity to milk proteins'] },
          { cells: ['LAMA: tiotropium bromide (Spiriva Respimat) 2.5mcg', '2 INH OD. Max 2 INH/day', 'Xerostomia, URTI, pharyngitis, sinusitis', 'Hypersensitivity to ipratropium, tiotropium, or any component'] },
          { cells: ['LABA+LAMA: vilanterol+umeclidinium (Anoro Ellipta) DPI 25/62.5mcg', '1 INH OD. Max 1 INH/day', 'Hypersensitivity reactions, tachycardia, hyperglycaemia, hypokalaemia, urinary retention', 'Hypersensitivity to umeclidinium, vilanterol; asthma monotherapy; acute bronchospasm; concomitant LABA'] },
          { cells: ['LABA+LAMA+ICS: Vilanterol/umeclidinium/Fluticasone (Trelegy Ellipta) DPI 25/62.5/100mcg (Not available in NUP)', '1 INH OD. Max 1 INH/day', 'Nasopharyngitis, headache, oral candidiasis, UTI, pneumonia', 'Hypersensitivity to components; primary treatment of status asthmaticus or acute COPD episodes'] },
          { cells: ['LABA+ICS: formoterol+budesonide (Duoresp Spiromax) DPI 4.5/160mcg', '2 INH BD (max dose)', 'Headache, nasopharyngitis, oral candidiasis, skin bruises', 'Hypersensitivity to budesonide or formoterol; primary treatment of status asthmaticus'] },
          { cells: ['LABA+ICS: salmeterol+fluticasone (Seretide Accuhaler) DPI 50/500mcg', '1 INH BD (max dose)', 'Hypokalaemia, paradoxical bronchospasm, QTc prolongation', 'Hypersensitivity to fluticasone, salmeterol; status asthmaticus; acute COPD episodes'] },
        ]},
      ],
    },
    {
      heading: 'Acute Exacerbation of COPD',
      blocks: [
        { type: 'text', content: 'Definition: An event characterized by dyspnoea and/or cough and sputum production that worsens over ≤14 days; may be accompanied by tachypnoea and/or tachycardia.' },
        { type: 'text', content: 'Severity (ROME criteria): MILD — Dyspnea VAS <5, RR <24, HR <95 bpm, O2 sat >92% RA. MODERATE — Dyspnea VAS ≥5, RR ≥24, HR ≥95 bpm, O2 sat <92% RA (≥3/5 criteria). SEVERE — Marked dyspnoea and tachypnoea (RR >30), use of accessory muscles at rest, cyanosis, confusion, O2 sat <90% RA.' },
        { type: 'text', content: 'Home management: (1) Increase dose/frequency of SABA; (2) Consider adding SAMA; (3) Consider starting antibiotics if ≥2/3 Anthonisen criteria (increased dyspnoea, increased sputum volume, increased sputum purulence) — first line: PO amoxicillin/clavulanate 625mg TDS 5 days OR PO azithromycin 500mg OM for 3 days; alternative: PO doxycycline 100mg BD 5 days; (4) Consider oral corticosteroids (PO prednisolone 30mg OM 5 days); (5) Encourage fluid intake and sputum clearance; (6) Smoking cessation.' },
        { type: 'text', content: 'Indications for hospitalisation: Moderate to severe exacerbation, acute respiratory failure, onset of new physical signs (cyanosis, peripheral oedema), failure to respond to initial medical management, presence of serious comorbidities, insufficient home support.' },
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        { type: 'list', items: [
          { text: 'Indication for Respiratory Medicine Referral', children: [
            { text: 'Severe or frequent exacerbations' },
            { text: 'Onset of cor pulmonale, bullous lung disease, need for LTOT or home nebuliser therapy' },
            { text: 'Disease with age <40 years and <10 pack years (TRO AATD)' },
            { text: 'Rapid decline in FEV1 (>60 mL/year)' },
            { text: 'Development of new symptoms such as haemoptysis' },
          ]},
          { text: 'Palliative treatment options to reduce dyspnoea include opioids, pulmonary rehabilitation, patient self-management education, neuromuscular electrical stimulation, chest wall vibration, and blowing air onto the face.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Weight and BMI', 'Yearly', ''] },
          { cells: ['CAT score', 'Yearly', ''] },
          { cells: ['Spirometry', 'For diagnosis', ''] },
          { cells: ['Smoking assessment', 'Yearly for smokers; Once-off for non-smokers', 'Assess smoking habits and provide smoking cessation counselling'] },
          { cells: ['Inhaler technique', 'Every follow-up and prior to modifying therapy', ''] },
          { cells: ['Influenza Vaccination', 'Yearly', ''] },
          { cells: ['Pneumococcal Vaccination', 'Ensure up to date according to NAIS', ''] },
          { cells: ['Covid-19 Vaccination', 'Ensure up to date following National Guidelines', ''] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Combined export of all CPG documents (15 total)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 20. Dementia
// ---------------------------------------------------------------------------
const dementia: CpgDocument = {
  id: 'dementia',
  condition: 'Dementia',
  source: 'NUP CPG',
  reviewDate: 'September 2024',
  advisors: 'Dr Tsoi Tung (Senior Consultant, Psycho-Geriatrician, Department of Psychological Medicine, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Dementia is a neurodegenerative disease characterised by progressive impairment of cognitive function. As the disease increases in severity, patients may experience memory loss, language impairment, disorientation, changes in personality, difficulty with activities of daily living, self-neglect, neuropsychiatric symptoms and out of character behaviour.' },
        { type: 'text', content: 'Causes of dementia: (a) Irreversible: Alzheimer\'s disease, fronto-temporal dementia, dementia with Lewy body, vascular dementia, Parkinson\'s disease dementia, prion-associated disorders. (b) Potentially Reversible: infectious disorders (meningitis, encephalitis), toxic or metabolic encephalopathies (hypothyroidism, vitamin B12 deficiency, alcohol-related syndromes), neoplastic causes, hydrocephalus.' },
        { type: 'text', content: 'Epidemiology: Singapore has one of the fastest ageing populations in Asia-Pacific. Dementia cases are expected to increase from 22,000 in 2005 to almost 53,000 in 2020 and 241,000 in 2050. Vascular risk factors (mid-life hypertension, hypercholesterolaemia, DM, strokes) have all been shown to be associated with an increased risk of incident dementia.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Screening should be targeted at individuals with: (1) Complaints of memory or cognitive impairment (self-reported or reported by caregiver); (2) Suspicion of cognitive impairment by healthcare professionals; (3) History of stroke or known risk factors of stroke; (4) Increased risk of dementia (strong family history); (5) Questionable mental competency needing important decisions; (6) Assessment for fitness to drive (elderly driver).' },
        { type: 'text', content: 'Symptoms include: progressive forgetfulness (especially short-term memory), new problems with communication, misplacing things, confusion with time and place, difficulties performing daily activities (especially iADL), problems with planning or solving problems, impaired judgment, changes in mood and personality, withdrawal from work or social activities, difficulty understanding visual images and spatial relationships.' },
        { type: 'text', content: 'Assessment in Teamlet/General Pool: (1) Exclude delirium if acute presentation; (2) Consider potentially reversible neurological conditions and depression if sub-acute; (3) Abbreviated Mental Test (AMT) — 10-item screening test validated locally. Score ≤7 suggests cognitive impairment in patients with primary school education or below; score ≤8 for patients with secondary education or higher.' },
        { type: 'text', content: 'Dementia Work-up Panel: Full blood count, Vitamin B12, Sodium/potassium/creatinine, Liver function test, Thyroid function test, Corrected Calcium, ECG (to exclude conduction problems which is a contraindication to AChEI therapy).' },
        { type: 'text', content: 'Criteria for Diagnosis (DSM-5): Evidence of significant cognitive decline from previous level in one or more domains (complex attention, executive function, learning and memory, language, perceptual-motor, or social cognition); the cognitive deficits interfere with independence in everyday activities; deficits do not occur exclusively in context of delirium; not better explained by another mental disorder. Mild Neurocognitive Disorder (MCI): as above except cognitive decline is modest and deficits do not interfere with independence.' },
        { type: 'text', content: 'mcMMSE cut-offs by educational level — Abnormal if less than: No Formal Education: 20; Primary: 22; Secondary/Tertiary: 24. Severity: Mild 18–24; Moderate 10–17; Severe <10.' },
        { type: 'text', content: 'CT Scan indications (CCCAD): Age <60 years; rapid unexplained decline in cognition or function; "short" duration of dementia (<2 years); recent significant head trauma; unexplained neurological symptoms; history of cancer; anticoagulants or bleeding disorder; history of urinary incontinence and gait disorder; new localising sign; unusual or atypical cognitive symptoms; gait disturbance.' },
        { type: 'table', headers: ['Severity', 'Functional Status'], rows: [
          { cells: ['Mild Dementia', 'Need assistance in instrumental ADL (managing money, marketing, housework, cooking)'] },
          { cells: ['Moderate Dementia', 'Need assistance in basic ADL (feeding, toileting, bathing, dressing)'] },
          { cells: ['Severe Dementia', 'ADL dependent'] },
        ]},
      ],
    },
    {
      heading: 'Management',
      blocks: [
        { type: 'text', content: 'Initial Management: Assess using mcMMSE and consolidate history from patients and caregivers. Refer to CT Scan if needed. If diagnosed with Dementia, offer second assessment for functional screening using Modified Barthel Index (MBI) and Lawton, Zarit Burden Interview Scale for Caregivers.' },
        { type: 'text', content: 'Follow-up domains: (i) Affect and mood — anxiety and depression common in early stages; (ii) BPSD — Behavioural and Psychological Symptoms in Dementia (wandering, verbal/non-verbal abuse, agitation, screaming, sleep problems) treated through non-pharmacological ABC approach (Antecedent, Behaviour, Consequence) and pharmacological methods as adjunct; (iii) Cognition — repeat mcMMSE to look for deterioration; (iv) Drugs — assess for anti-cholinergic medications which should be avoided (amitriptyline, imipramine, prochlorperazine, oxybutynin, diphenhydramine, chlorpheniramine, benztropine, olanzapine, quetiapine); (v) Social environment — caregiver stress, elder abuse, financial difficulties; (vi) Functional assessment — home/driving safety, falls, functional decline, swallowing, constipation, incontinence, malnutrition.' },
        { type: 'text', content: 'Interval of re-assessment ranges from 3 to 6 months. Consider yearly CM assessment for mcMMSE, Modified Barthel Index, Lawton-Brody Instrumental ADL Scale, and Zarit Burden Interview Scale.' },
      ],
    },
    {
      heading: 'Non-Pharmacological Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Designing and maintaining a daily routine.' },
          { text: 'Encouraging activities to engage the patient such as daily chores, creative or intellectual activities, physical activities.' },
          { text: 'Caregiver education and training should be considered to support caregivers in caring for patients in the community.' },
          { text: 'Appropriate utilisation of community resources such as dementia day care centres, caregiver support groups.' },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Treating identifiable reversible causes: treat depression, replace deficiency states (B12, hypothyroidism), correct metabolic abnormalities, remove anti-cholinergic medications.' },
          { text: 'Reduction of vascular risk factors: hyperlipidaemia, hypertension, DM, smoking cessation, obesity; anti-platelet agents for secondary stroke prevention; anti-coagulation for AF.' },
          { text: 'Slowing rate of disease progression: AChEIs (donepezil, rivastigmine) and NMDA receptor antagonist (memantine) — only after detailed discussion with caregiver and patient on risks, benefits and cost.' },
        ]},
        { type: 'table', headers: ['Drug', 'Initial Dose / Titration', 'Maximum Dose', 'Common ADR', 'Remarks / Contraindications'], rows: [
          { cells: ['Donepezil (S2)', '5 mg/day; titrate 5 mg every 4 weeks', '23 mg/day', 'Diarrhoea, nausea, vomiting, headache, anorexia, abnormal dreams, bradycardia, syncope, dizziness', 'Common 1st line for mild-moderate dementia. For elderly, may start 2.5 mg OM for 4–6 weeks. Contraindicated: bradycardia or cardiac conduction disease. Caution: PUD, COPD/asthma, seizure disorder, urinary tract obstruction.'] },
          { cells: ['Rivastigmine patch (NS) (Exelon) 4.6/9.5 mg/24h', '4.6 mg/24 hours; titrate 9.5 mg every 4 weeks', '13.3 mg/24 hours', 'Diarrhoea, nausea, vomiting, headache, anorexia, agitation, bradycardia, syncope, dizziness; contact rash, pruritus (rotate patch sites)', 'Contraindicated: bradycardia or cardiac conduction disease. Caution: PUD, COPD/asthma, seizure disorder, urinary tract obstruction.'] },
          { cells: ['Memantine (S2)', '5 mg/day; titrate 5 mg every 2 weeks', '20 mg/day', 'Headache, dizziness, agitation, constipation, confusion', 'Renal dose adjustment required. Avoid if Cr >200 μmol/L or eGFR <30 ml/min. Max 5 mg BD for eGFR 30–60 ml/min. Caution: severe hepatic impairment, seizure disorder.'] },
        ]},
        { type: 'table', headers: ['Drug (for BPSD)', 'Initial Dose / Titration', 'Maximum Dose', 'Common ADR', 'Remarks / Contraindications'], rows: [
          { cells: ['Fluvoxamine (S2) (Faverin) 50mg tablets', '25–50 mg; titrate 25–50 mg every 1 week; usual dose 50–100 mg/day', '100 mg/day (combination max Fluvoxamine 50mg + Mirtazapine 15mg)', 'Nausea, vomiting, diarrhoea, dry mouth, nervousness, headache, dizziness; sexual dysfunction, tremors, hyponatremia, QT prolongation', 'Sedating, useful to help sleep. Avoid antidepressants with anticholinergic activity. Contraindicated: MAOI concurrent or within 14 days.'] },
          { cells: ['Escitalopram (NS) (Lexapro) 10mg tablets', '5 mg/day; titrate 5 mg every 4 weeks', '10 mg/day', '(see above)', 'Activating. Contraindicated: MAOI concurrent or within 14 days.'] },
          { cells: ['Mirtazapine (S2) (Remeron) 15mg tablets', '15 mg; titrate 7.5–15 mg every 1–2 weeks; usual 15–30 mg/day', '30 mg/day (combination max Fluvoxamine 50mg + Mirtazapine 15mg)', 'Dry mouth, constipation, sedation (more sedating at lower doses), increased appetite, orthostatic hypotension, headache', 'Sedating, improves appetite. Useful for patients with poor appetite. Contraindicated: MAOI concurrent or within 14 days. Check FBC before starting.'] },
          { cells: ['Zopiclone (NS) 7.5mg tablets', '3.75 mg ON/PRN for sleep', '7.5 mg ON PRN', 'Sedation, nausea, vomiting, dry mouth, dizziness, headache', 'Short course ≤2 weeks. Contraindicated: severe respiratory impairment, myasthenia gravis, severe hepatic insufficiency, history of complex sleep behaviours.'] },
          { cells: ['Quetiapine (S2) (Seroquel) 25/100mg tablets', '12.5–25 mg/day; titrate 6.25–12.5 mg every 1 week', '75 mg BD', 'Sedation, nausea, constipation, dry mouth, orthostatic hypotension, headache, weight gain', 'FDA black box warning for antipsychotics and adverse cardiovascular events. Use beyond 12 weeks not recommended. Preferred atypical antipsychotic if high risk of extrapyramidal symptoms.'] },
        ]},
      ],
    },
    {
      heading: 'Special Situations and Referrals',
      blocks: [
        { type: 'text', content: 'Referral to NUP Memory Clinic — Inclusion criteria: above 65 years old with memory problems; memory loss >6 months. Exclusion criteria: legal issues/LPA/requires neuropsychological testing (refer Psychiatry); age <65 years (refer Neurology for early onset dementia).' },
        { type: 'text', content: 'Discharge Criteria from Memory Clinic: Diagnosis made; BPSD well managed; no medication issues or side effects; caregiver stress addressed; dementia assessment and Zarit score completed in past 1 year; family and patient agreeable. Yearly TCU NUR CM Consult still recommended post-discharge.' },
        { type: 'text', content: 'Referral Back to Memory Clinic: Sudden drastic decline in memory (MMSE dropped >4 points/year; usual expected decline 1–2 points/year); BPSD surfaces or worsens; caregiver stress and burn-out.' },
        { type: 'text', content: 'Refer to EMD: <3 months duration with sudden onset neurological deficits; suspected delirium; patient causing significant harm to self or others.' },
        { type: 'text', content: 'Special Precautions with Chronic Diseases: DM — do not aim for excessively tight glycaemic control; HTN/Cardiac Arrhythmia — CCB or beta blockers can worsen bradycardia in patients on AChEI; COPD/Asthma — AChEI can cause bronchoconstriction; Parkinson\'s — avoid typical antipsychotics; Renal Impairment — avoid Memantine if Cr >200 μmol/L or eGFR <30 ml/min.' },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Assessment of Memory', 'Annually', 'For patients on cognitive enhancers, objective documentation with bedside cognitive screening instrument (e.g. MMSE) must be performed.'] },
          { cells: ['Assessment of Mood and Behaviour', 'Annually', 'Enquire about mood and behaviour and initiate appropriate non-pharmacological and/or pharmacological treatment.'] },
          { cells: ['Assessment of Social Difficulties and Caregiver Stress', 'Annually', 'Assessment and referral to care coordinator, MSW or appropriate community services may be required.'] },
          { cells: ['Functional Needs Assessment', 'Annually', 'To assess home safety, driving safety, falls, functional decline and swallowing difficulties.'] },
          { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under NAIS.'] },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 21. Depression
// ---------------------------------------------------------------------------
const depression: CpgDocument = {
  id: 'depression',
  condition: 'Depression',
  source: 'NUP CPG',
  reviewDate: 'June 2025',
  advisors: 'Dr Soo Shuenn Chiang (Senior Consultant, Department of Psychological Medicine, NUH) / Dr Wan Yi Min (Consultant, Department of Psychiatry, NTFGH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Major depression is the most common mental illness in Singapore. Based on the National Mental Health Study in 2016, 6.2% of the adult population suffered from major depression at some point in their lifetime. 14.3% of people with a chronic illness had a mental illness, and 50.6% of people with a mental illness also had a chronic illness. Diabetic patients have increased depressive symptoms. The 12-month treatment gap for Major Depressive Disorder was 73%.' },
      ],
    },
    {
      heading: 'Screening for Depression',
      blocks: [
        { type: 'text', content: 'Opportunistic screening is not recommended. Patients with risk factors should be screened.' },
        { type: 'table', headers: ['Clinical Risk Factors', 'Symptom Risk Factors'], rows: [
          { cells: ['History of depression', 'Unexplained physical symptoms'] },
          { cells: ['Family history of depression', 'Chronic pain'] },
          { cells: ['High users of medical services and chronic medical conditions (especially cardiovascular disease, diabetes, neurological disorders)', 'Fatigue'] },
          { cells: ['Other psychiatric conditions', 'Insomnia'] },
          { cells: ['Times of hormonal challenge (e.g. peripartum)', 'Anxiety, Substance abuse'] },
        ]},
        { type: 'text', content: 'Screening can be done with PHQ-2 (two questions over the last 2 weeks: (1) Little or no pleasure in doing things; (2) Feeling down, depressed, or hopeless). If PHQ-2 score ≥3, proceed to PHQ-9. Patients with PHQ-9 ≥10 should be evaluated by a doctor.' },
      ],
    },
    {
      heading: 'Suicide Risk Assessment',
      blocks: [
        { type: 'text', content: 'Patients reporting a recent suicide attempt or experiencing suicidal ideation should receive a suicide risk assessment by a HMC-trained care manager, doctor or psychologist on the same day. Standardised assessment tools such as C-SSRS (nationally preferred scale) or P4 can be used. Examples of higher risks: attempted self-harm, dramatic changes in mood, talking about death or making plans, expressing hopelessness, withdrawal from friends/family/society.' },
      ],
    },
    {
      heading: 'DSM-5 Criteria for Depression',
      blocks: [
        { type: 'text', content: '5 or more of the following 9 symptoms (at least one involving symptom 1 or 2), for 2 weeks duration: (1) Depressed mood; (2) Reduced interest or pleasure in almost all activities; (3) Weight gain or loss / change in appetite; (4) Insomnia or hypersomnia; (5) Psychomotor agitation or retardation; (6) Fatigue or loss of energy; (7) Feelings of worthlessness or inappropriate guilt; (8) Poor concentration or indecisiveness; (9) Thought of death or suicidal ideation. Plus: significant distress or functional impairment; never had a manic or hypomanic episode.' },
      ],
    },
    {
      heading: 'Differentials for Depression',
      blocks: [
        { type: 'text', content: 'Medical conditions causing depressive symptoms: Endocrine (hypothyroidism, Cushing disease, Addison disease), Malignancy, Neurological (stroke, syphilis, tumour, Parkinson\'s disease), Chronic illness (heart failure, SLE), Sleep disorders.' },
        { type: 'text', content: 'Psychiatric conditions: Psychotic disorders (schizophrenia, schizoaffective disorder, delusional disorder), Bipolar disorder (may present first as unipolar depression), Comorbid anxiety disorder, PTSD.' },
        { type: 'text', content: 'Drugs that may cause or aggravate depressive symptoms or cause drug interactions with SSRIs: Chronic conditions — Beta blockers, Statins (simvastatin); Endocrine/Hormones — Prednisolone, progestogens, oestrogen; Neurology — Levodopa, Bromocriptine, Anticonvulsants (Gabapentin, Topiramate); Others — PPIs, Ciprofloxacin; Substance Abuse — Alcohol, benzodiazepines, opioids.' },
      ],
    },
    {
      heading: 'PHQ-9 Interpretation and TCU / Referral Recommendations',
      blocks: [
        { type: 'table', headers: ['PHQ-9 Score', 'Severity', 'TCU / Referral Recommendation'], rows: [
          { cells: ['0–4', 'Minimal', 'Reassure patient, routine follow up, encourage regular exercise and self-care.'] },
          { cells: ['5–9', 'Mild', 'Psychological education + simple self-help strategies. TCU MSW (psychosocial support / CBT) within 8 weeks.'] },
          { cells: ['10–14', 'Moderate', 'TCU Psychologist (First Visit) if agreeable within 4 weeks. TCU Dr HMC Long (FV) for consideration of medication within 4 weeks.'] },
          { cells: ['15–19', 'Moderately severe', 'TCU Psychologist (First Visit) if agreeable within 2 weeks. TCU Dr HMC Long (FV) within 2 weeks; may start SSRIs if appropriate and patient agreeable.'] },
          { cells: ['20–27', 'Severe', 'Refer SOC (Direct Access). Safety planning (.nupsafetyplan).'] },
          { cells: ['Any (moderate suicide risk)', 'Any', 'Refer SOC (Direct Access). Safety planning.'] },
          { cells: ['Any (severe suicide risk)', 'Any', 'Refer ED.'] },
        ]},
      ],
    },
    {
      heading: 'Pharmacotherapy',
      blocks: [
        { type: 'text', content: 'Antidepressants are effective for moderate to severe depression and also effective for anxiety and obsessions. Onset of action is usually around 3–4 weeks. Onset of side effects are immediate and get better within 2 weeks. SSRIs are the class of choice for initial therapy due to effectiveness, tolerability, and safety in overdose. Drug of choice for depressed persons with cardiovascular disease.' },
        { type: 'table', headers: ['Class', 'Drug Name / Dose', 'Side Effects', 'Remarks'], rows: [
          { cells: ['SSRI', 'Fluoxetine (S2) — Initiation 10–20 mg OM; Maintenance 20–80 mg', 'Headache, GI (nausea/diarrhoea), excessive daytime somnolence, orthostatic hypotension, insomnia, anticholinergic effects; uncommon: sexual dysfunction, tremors, akathisia, QTc prolongation, SIADH, hyponatremia, bleeding risk', 'More likely to cause insomnia. Generally safe in renal and hepatic impairment (avoid in hepatic impairment due to extensive metabolism and long half-life). Sertraline preferred for pregnancy and cardiac diseases.'] },
          { cells: ['SSRI', 'Fluvoxamine (S2) — Initiation 25–50 mg ON; Maintenance 50–200 mg (doses >100 mg/day in 2 divided doses)', '(see above)', ''] },
          { cells: ['SSRI', 'Sertraline (S2) — Initiation 25–50 mg OM; Maintenance 50–200 mg', '(see above)', 'Preferred SSRI for pregnancy and cardiac diseases.'] },
          { cells: ['SSRI', 'Escitalopram (NS) — Initiation 5–10 mg OM; Maintenance 10–20 mg', '(see above)', 'Less drug-drug interactions but may cause weight gain.'] },
          { cells: ['SNRI', 'Venlafaxine XR (S2) 75 mg — Initiation 75 mg OM; Maintenance 150–225 mg', 'Headache, sweating, nausea, dry mouth, constipation, nervousness, insomnia, dose-dependent BP increase; Serotonin syndrome, SIADH/hyponatremia, sexual dysfunction', 'Not recommended in angle closure glaucoma, seizures. Use caution with hepatic/renal impairment.'] },
          { cells: ['NaSSA', 'Mirtazapine (S2) 15mg — Initiation 7.5–15 mg ON; Maintenance 15–45 mg', 'Sedation, weight gain, appetite gain, dry mouth, constipation', 'Low doses used for concomitant insomnia (preferentially blocks histamine receptor). Less sexual/nausea side effects and less hyponatremia than SSRIs.'] },
          { cells: ['TCA', 'Amitriptyline (S1) 10/25 mg — Initiation 10–25 mg ON; Maintenance 50–100 mg', 'Anticholinergic effects (dry mouth, constipation, blurred vision, urinary retention, weight gain), dizziness, somnolence, palpitations, tachycardia, orthostatic hypotension', 'Not first line due to anticholinergic and cardiotoxic side effects. Contraindicated: MAOI. Toxic cardiac effects in overdose.'] },
        ]},
        { type: 'text', content: 'Serotonin Syndrome: An Adverse Drug Reaction which can be life threatening. Usually occurs with combination therapy (SSRIs, SNRIs, MAOIs, TCAs, valproate, antiemetics, tramadol, dextromethorphan). Patients present with a triad of altered mental state, autonomic symptoms, and neuromuscular excitation. Management: discontinue the offending agent and refer to A&E for monitoring and support.' },
      ],
    },
    {
      heading: 'Using Antidepressants — Key Points',
      blocks: [
        { type: 'list', items: [
          { text: 'If partial response after 4 weeks, consider increasing dosage. If no response after 4–8 weeks, consider switching to another SSRI, then another class.' },
          { text: 'Possible risk of suicidal behaviour and self-harm during initial 1–3 months. Order CM HMC Teleconsultation at ~2 weeks after starting SSRIs for nurses to check tolerability, adherence, and suicide risk.' },
          { text: 'Stop antidepressant if hypomanic/manic symptoms emerge. Refer to psychiatrist for potential bipolar disorder.' },
          { text: 'Stopping antidepressants: typically considered after 1st depressive episode with ≥6–9 months response after remission. Taper over 4 weeks or more.' },
          { text: 'Consider long-term maintenance in patients with severe depressive episodes or ≥3 episodes of depression.' },
          { text: 'Young adults (18–24 years): Monitor closely for worsening suicidal ideation; black box warning applies. Overall benefits of treatment far outweigh risks.' },
          { text: 'Elderly (>65 years): Psychotherapy remains preferred treatment. Monitor sodium while on antidepressants (especially SSRIs/SNRIs).' },
        ]},
      ],
    },
    {
      heading: 'Referral to Specialist and Step-Down Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Referral to Specialist: patients ≤17 years who might need antidepressants; no response to 3 different antidepressants; complicated medical history (antenatal/postpartum, breastfeeding, liver disease, Cushing); comorbid personality disorders, substance dependence; new onset psychotic or bipolar disorder; potential need for interventional psychiatry (ECT, rTMS).' },
          { text: 'Step-down care accepted at NUP: patients with predominantly depression or anxiety, stable and mild to moderate severity; on NUP formulary medications; not reliant on regular benzodiazepines (occasional benzos acceptable up to 5 tablets; standalone benzos discouraged); patients on two antidepressants have increased serotonin syndrome risk; if on antipsychotics, do BMI, fasting glucose, lipid, BP check every year.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Doctor review', 'Twice a year or longer if stable', 'Includes assessment for symptoms, response/adherence to medications, psychosocial interventions, risk of harm, general physical health, and basic emotional support.'] },
          { cells: ['PHQ-9 Score', 'Every clinical review when appropriate; minimally 6 monthly for patients with depression', 'Reportable clinical indicator.'] },
        ]},
        { type: 'text', content: 'Postpartum Depression: Please refer to the NUP Women\'s Health CPG for guidelines on antepartum and postpartum depression.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 22. Diabetes Mellitus
// ---------------------------------------------------------------------------
const diabetesMellitus: CpgDocument = {
  id: 'diabetes-mellitus',
  condition: 'Diabetes Mellitus',
  source: 'NUP CPG',
  reviewDate: 'January 2026',
  advisors: 'Dr Khoo Chin Meng (Senior Consultant, Department of Medicine, NUH)',
  sections: [
    {
      heading: 'Introduction — Classification',
      blocks: [
        { type: 'list', items: [
          { text: 'Type 1 DM (T1DM): β-cell destruction due to autoimmune process. Commonly occurs in childhood/adolescence but can occur at any age. Some adults may present resembling T2DM (LADA — Latent Autoimmune Diabetes of Adulthood).' },
          { text: 'Type 2 DM (T2DM): Most common form of diabetes. Characterised by disorders of insulin action and insulin secretion. Risk associated with increasing age, obesity and lack of physical activity. Frequently undiagnosed for many years as hyperglycaemia develops gradually.' },
          { text: 'Gestational Diabetes (GDM): Onset or first recognition of any degree of glucose intolerance during pregnancy. Applies irrespective of whether insulin is used for treatment or whether condition persists after pregnancy.' },
          { text: 'Other Specific Types: Genetic defects of β-cell function or insulin action, diseases of the exocrine pancreas, diabetes induced by other endocrinopathies, drugs, toxins, infections. MODY (Maturity Onset Diabetes of the Young) — early age onset, autosomal dominant, absence of autoimmunity.' },
        ]},
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Screening should be considered in adults of any age with one or more risk factors. Without risk factors, testing should begin at 40 years. Screening every 3 years for normal HbA1c or glucose tolerance; annually for IFG or IGT.' },
        { type: 'text', content: 'Risk factors: Overweight/obesity (Asian BMI >23 kg/m²), first degree relative with DM, high risk race/ethnicity, women who delivered ≥4 kg baby or previously diagnosed with GDM, hypertension (>140/90 mmHg), HDL <1.0 mmol/L (male)/<1.3 mmol/L (female) and/or triglyceride >2.2 mmol/L, polycystic ovarian syndrome, history of cardiovascular disease.' },
        { type: 'text', content: 'Screening using HbA1c: ≤6.0% — low probability of DM, no further test needed; 6.1–6.9% — proceed to FPG or OGTT; ≥7.0% — high probability, diagnose and manage as DM.' },
        { type: 'text', content: 'Intermediate categories (Pre-diabetes): Impaired Fasting Glycaemia (IFG): FPG 6.1–6.9 mmol/L and 2H-OGTT <7.8 mmol/L. Impaired Glucose Tolerance (IGT): FPG <7.0 mmol/L and 2H-OGTT 7.8–11.0 mmol/L.' },
        { type: 'text', content: 'Diagnosis — In patients with typical symptoms, DM can be diagnosed if any one is present: (1) Random plasma glucose ≥11.1 mmol/L; (2) FPG ≥7.0 mmol/L; (3) 2-hour post-challenge plasma glucose ≥11.1 mmol/L. Glucometers should NOT be used for diagnosis. Other individuals should have a repeat test on a subsequent day.' },
      ],
    },
    {
      heading: 'Treatment Targets',
      blocks: [
        { type: 'table', headers: ['Test', 'General Target', 'Frail patient susceptible to hypoglycaemia'], rows: [
          { cells: ['HbA1c (%)', '<7%', '7.0–8.5%'] },
          { cells: ['Pre Meal Glucose (mmol/L)', '4.0–7.0', '6.5–9.0'] },
          { cells: ['2HPP (mmol/L)', '5–10', '12'] },
        ]},
        { type: 'text', content: 'HbA1c: Check 3–4 monthly if unstable glycaemic control, recent adjustment in therapy, or intensive insulin therapy. Check 6-monthly if stable glycaemic control and meeting treatment goals. Lower HbA1c to ≤6.5% may be considered for some T2DM patients with short duration, long life expectancy, no significant CV complications. BMI target: <25 kg/m² (Asian: <23 kg/m²).' },
      ],
    },
    {
      heading: 'Lifestyle Modification',
      blocks: [
        { type: 'list', items: [
          { text: 'Medical Nutrition Therapy: Individuals with diabetes should receive individualised medical nutritional therapy provided by a dietitian. Consistently distribute carbohydrate intake throughout the day. Weight reduction of 5–10% for overweight/obese patients. Daily consumption of 20–35 g of dietary fibre. Minimize or avoid sugary beverages entirely.' },
          { text: 'Physical Activity: At least 150 mins/week of moderate to vigorous aerobic exercise spread over at least 3 days per week, with no more than 2 consecutive days between bouts. Pre-exercise evaluation important for sedentary/older diabetic individuals.' },
          { text: 'Avoidance of Smoking: Smoking cessation counselling and support should be routine. Nicotine replacement therapy is subsidized (MAF claimable) at pharmacist-led smoking cessation clinics.' },
        ]},
      ],
    },
    {
      heading: 'Glucose-Lowering Agents',
      blocks: [
        { type: 'table', headers: ['Drug', 'Initial Dose', 'Maximum Dose', 'Common ADR', 'Remarks / Contraindications'], rows: [
          { cells: ['Metformin IR (S1) 250/500 mg', '500 mg OM', '750 mg TDS', 'Nausea, anorexia, vomiting, diarrhoea, abdominal cramps, cholestatic hepatitis; risk of lactic acidosis in renal/hepatic insufficiency', 'Preferred initial agent. HbA1c lowering 1–1.5%. Take with or after meals. Dose adjust in renal impairment: eGFR 45–59 normal dose; 30–44 max 500 mg BD; <30 stop. Long-term use may cause B12 deficiency.'] },
          { cells: ['Dapagliflozin (Forxiga) (NS) 10 mg', '5 or 10 mg once daily', '10 mg once daily', 'Thirst, increased urination', 'SGLT-2 inhibitors lower HbA1c 0.6–0.9%, body weight and BP. Improved CV outcomes. Avoid in patients at risk of DKA. Not recommended at eGFR <30 (for glycaemic control). MAF subsidy ceased Aug 2024; consider switching to empagliflozin (subsidised SDL2) for cost concerns.'] },
          { cells: ['Empagliflozin (Jardiance) (S2) 10/25 mg', '10 or 25 mg once daily', '25 mg once daily', 'Thirst, increased urination', 'See above. Consider as class; choose lowest cost option.'] },
          { cells: ['Dulaglutide (Trulicity) SC 0.75/1.5 mg weekly', '0.75 mg weekly; titrate to 1.5 mg after 1 month', '1.5 mg weekly', 'Predominantly GI (nausea, vomiting, diarrhoea)', 'GLP-1 receptor agonist. HbA1c lowering 1–1.5%. Significant weight loss (up to 9.6 kg). Do NOT use with DPP-4 inhibitors. Contraindicated: personal/family history of MTC or MEN2; pregnancy (washout ≥6 weeks). Caution: pancreatitis, gastroparesis, IBD. Initiated/endorsed by senior doctors.'] },
          { cells: ['Glipizide (S1) 5 mg', '2.5 mg OM', '15 mg BD', 'Very infrequent mild nausea, vomiting, diarrhoea, allergic reactions', 'Sulfonylurea. HbA1c lowering 1–1.5%. Risk of hypoglycaemia and weight gain. Use second generation SUs. Avoid glibenclamide in elderly ≥60 years or eGFR <60.'] },
          { cells: ['Gliclazide (S1) 80 mg', '40 mg OM', '160 mg BD', '(see above)', ''] },
          { cells: ['Linagliptin (Trajenta) (NS) 5 mg — MAF eligible in T2DM with CKD ≥3B', '5 mg once daily', '5 mg once daily', '', 'DPP-4 inhibitor. HbA1c lowering 0.5–0.8%. Weight neutral. Does not require dose adjustment for declining renal function. Consider when SU/SGLT-2 not suitable.'] },
          { cells: ['Sitagliptin (Januvia) (S2) 50/100 mg', '50 or 100 mg once daily', '100 mg once daily', '', 'DPP-4 inhibitor. Dose adjust in renal impairment: eGFR ≥45 → 100 mg; eGFR 30–44 → 50 mg; eGFR <30 → 25 mg.'] },
        ]},
        { type: 'text', content: 'Initiate glucose-lowering agents when lifestyle intervention is insufficient. Oral agents preferred. Do not delay insulin in patients with symptomatic hyperglycaemia, unexplained recent weight loss, ketonuria or DKA. Consider insulin use if HbA1c >10% or random glucose >16.7 mmol/L. Insulin therapy should be considered if optimal combination therapy fails (2 consecutive HbA1c >8% over 3–6 months interval).' },
      ],
    },
    {
      heading: 'Prevention of Cardiovascular Disease',
      blocks: [
        { type: 'list', items: [
          { text: 'BP control: Target <130/80 mmHg for most DM patients. ACE-I/ARB is preferred for patients with DM and proteinuria or CKD.' },
          { text: 'Lipid control: Target LDL <1.8 mmol/L for DM patients with established CVD or additional risk factors. (See Lipids CPG)' },
          { text: 'Antiplatelet therapy: Low-dose aspirin (75–162 mg daily) for DM patients with established cardiovascular disease (secondary prevention). Not routinely recommended for primary prevention in low-risk DM patients.' },
        ]},
      ],
    },
    {
      heading: 'Prevention and Management of Complications',
      blocks: [
        { type: 'list', items: [
          { text: 'Retinopathy: Annual dilated retinal photography (DRP). Refer ophthalmologist if retinopathy detected.' },
          { text: 'Nephropathy: Annual urine albumin-creatinine ratio (UACR) and serum creatinine/eGFR. ACE-I/ARB if proteinuria present. SGLT-2 inhibitors for cardiorenal benefits.' },
          { text: 'Neuropathy/Foot: Annual diabetic foot screening (DFS). Examine feet at each visit if gross neuropathy or PVD.' },
          { text: 'Hypoglycaemia management: For mild/moderate (patient conscious): 15–20 g fast-acting carbohydrates, repeat if glucose <4 mmol/L after 15 minutes. For severe (patient unable to swallow or unconscious): Glucagon IM/SC or IV dextrose if glucagon not available or fails.' },
          { text: 'Hyperglycaemia: For BGL ≥20 mmol/L, consult family physicians. For suspected HHS or DKA (fever, drowsiness, vomiting, abdominal pain, dehydration), rapid hydration with IV normal saline, IV insulin, send to A&E.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Parameter', 'Frequency'], rows: [
          { cells: ['HbA1c', '3–6 monthly (3–4 monthly if poor control or recent adjustment)'] },
          { cells: ['Weight', 'Every 2–6 months'] },
          { cells: ['Blood Pressure', 'Every 2–6 months'] },
          { cells: ['Peripheral Neuropathy examination', 'Yearly'] },
          { cells: ['DM Panel test (HbA1c, Lipid Panel, Serum Creatinine, UACR)', 'Yearly'] },
          { cells: ['ECG', 'Baseline once upon diagnosis'] },
          { cells: ['Dilated Retinal Photography (DRP)', 'Yearly'] },
          { cells: ['Diabetic Foot Screening (DFS)', 'Yearly'] },
          { cells: ['Smoking assessment', 'Advise to stop at each visit'] },
        ]},
      ],
    },
    {
      heading: 'Pre-Diabetes Management',
      blocks: [
        { type: 'text', content: 'Pre-diabetes: IFG (FPG 6.1–6.9 mmol/L) or IGT (2H-OGTT 7.8–11.0 mmol/L). Both represent increased risk for DM and cardiovascular disease.' },
        { type: 'list', items: [
          { text: 'Lifestyle intervention: Weight loss of 5–7% of body weight through dietary changes and exercise.' },
          { text: 'Diet: Reduce total calorie intake; choose complex carbohydrates; increase dietary fibre; reduce saturated fat and sugar.' },
          { text: 'Weight Management: BMI target <23 kg/m² for Asians.' },
          { text: 'Physical Activity: At least 150 min/week of moderate-intensity aerobic exercise.' },
          { text: 'Pharmacological: Metformin can be considered for individuals with IGT or IFG and other risk factors (BMI >35, age <60, prior GDM).' },
          { text: 'Follow-up: Annually for patients with IFG or IGT; 3-yearly for those who revert to normal glucose tolerance.' },
        ]},
      ],
    },
  ],
};



// ---------------------------------------------------------------------------
// 23. Dyspepsia
// ---------------------------------------------------------------------------
const dyspepsia: CpgDocument = {
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

// ---------------------------------------------------------------------------
// 24. Ear Infections
// ---------------------------------------------------------------------------
const earInfections: CpgDocument = {
  id: 'ear-infections',
  condition: 'Ear Infections',
  source: 'NUP CPG',
  reviewDate: 'July 2025',
  advisors: 'Dr Goh Xue Ying (Consultant, Department of Otolaryngology – Head & Neck Surgery, NUH)',
  sections: [
    {
      heading: 'Middle Ear Infections (Otitis Media) — Introduction',
      blocks: [
        { type: 'text', content: 'Otitis media (OM) encompasses a spectrum of diseases including Acute Otitis Media (AOM), Otitis Media with Effusion (OME) and Chronic Suppurative Otitis Media (CSOM). AOM is a self-limiting infection mainly affecting children, attributable to eustachian-tube dysfunction, most often caused by an upper respiratory infection. CSOM is characterized by chronic suppurative middle ear inflammation usually associated with a persistently perforated tympanic membrane. OME is characterized by the presence of glue-like fluid behind an intact tympanic membrane without signs of acute inflammation.' },
        { type: 'text', content: 'Epidemiology: AOM is one of the most common diseases in childhood, with ~80% of all children experiencing it during their lifetime. Most commonly between 6 and 12 months of age. Microbiology: Bacteria (Streptococcus pneumoniae, non-typeable Haemophilus influenzae, Moraxella catarrhalis) or Viruses (RSV, coronaviruses, influenza, adenoviruses). In infants <2 weeks, may also be caused by group B Streptococcus, enteric gram-negative bacilli, or Staphylococcus aureus.' },
      ],
    },
    {
      heading: 'AOM — Clinical Presentation and Diagnosis',
      blocks: [
        { type: 'text', content: 'History: Otalgia (most common complaint; may manifest as ear rubbing/tugging in non-verbal child), decreased hearing, ear drainage (if TM ruptured — sudden relief of pain with purulent otorrhoea), fever (in 1/3 to 2/3 of children), symptoms of preceding URTI, nonspecific symptoms in young children (fussiness, poor sleep, poor feeding, vomiting).' },
        { type: 'text', content: 'Physical Examination: Key features — bulging tympanic membrane; decreased/absent mobility of TM (pneumatic otoscope). Other features — partial/complete opacification of TM; erythema of TM; acute TM perforation with purulent otorrhoea; bullae in TM.' },
        { type: 'text', content: 'Diagnosis (AAP guidelines): AOM should be diagnosed when there is moderate to severe TM bulging or new-onset otorrhoea not caused by otitis externa. AOM may be diagnosed with mild TM bulging and recent onset ear pain (<48 hours) or intense TM erythema. AOM should NOT be diagnosed when middle ear effusion is absent.' },
      ],
    },
    {
      heading: 'AOM — Management',
      blocks: [
        { type: 'text', content: 'Most children get better within 3 days without antibiotics. Antibiotics are the mainstay of treatment in adults.' },
        { type: 'table', headers: ['Age / Clinical Status', 'Treatment'], rows: [
          { cells: ['Children ≥6 months: Severe AOM (bilateral or unilateral)', 'Treat with antibiotics'] },
          { cells: ['Children 6–23 months: Non-severe bilateral AOM', 'Treat with antibiotics'] },
          { cells: ['Children 6–23 months: Non-severe unilateral AOM', 'Treat with antibiotics OR watchful waiting (initiate antibiotics if worsens or fails to improve within 48–72 hours) — based on joint decision making with caregiver'] },
          { cells: ['Children ≥24 months: Non-severe AOM (bilateral or unilateral)', 'Treat with antibiotics OR watchful waiting'] },
          { cells: ['Adults: Any severity of AOM', 'Treat with antibiotics'] },
        ]},
        { type: 'table', headers: ['Patient', 'Choice', 'Antibiotic / Dose'], rows: [
          { cells: ['Children — First-line (no amoxicillin in last 30 days; no concurrent purulent conjunctivitis; not allergic to penicillin)', '', 'Amoxicillin 40–50 mg/kg/day in 2–3 doses; max 1.5 g/day'] },
          { cells: ['Children — First-line for penicillin allergy', '', 'Clarithromycin 15 mg/kg/day in 2 doses; max 1 g/day'] },
          { cells: ['Children — Second-choice (amoxicillin in last 30 days; concurrent purulent conjunctivitis; recurrent AOM unresponsive to amoxicillin)', '', 'Amoxicillin/clavulanic acid 40–50 mg/kg/day (amoxicillin component) in 2 doses; max 3 g/day'] },
          { cells: ['Adults — First-line', '', 'Amoxicillin/clavulanic acid 625 mg TDS'] },
          { cells: ['Adults — First-line if allergic to penicillin', '', 'Doxycycline 100 mg BD'] },
          { cells: ['Adults — Allergic to penicillin + contraindications to doxycycline', '', 'Clarithromycin 500 mg BD'] },
        ]},
        { type: 'text', content: 'Duration: Children — 10 days if age <2 or with TM perforation; 5–7 days if ≥2 years with intact TM and no history of recurrent AOM. Adults — 5–7 days mild to moderate; 10 days severe.' },
        { type: 'text', content: 'Preventive Care: Pneumococcal conjugate vaccine and annual influenza vaccine per immunization schedule. Avoid tobacco smoke exposure. Prophylactic antibiotics NOT indicated to reduce frequency of AOM in children with recurrent AOM.' },
        { type: 'text', content: 'When to Refer: AOM associated with severe systemic infection or acute complications (mastoiditis, meningitis, intracranial abscess, sinus thrombosis, facial nerve paralysis) → refer to ED. Recurrent AOM (3 episodes in 6 months, or 4 episodes in 12 months with 1 in preceding 6 months) → refer to ENT. Hearing loss persisting >2 weeks after resolution → audiogram and ENT. TM perforations persisting ≥12 weeks → refer to ENT.' },
      ],
    },
    {
      heading: 'External Ear Infections (Otitis Externa) — Introduction',
      blocks: [
        { type: 'text', content: 'Otitis externa (OE) refers to inflammation of the external auditory canal, which may also involve the pinna or tympanic membrane. OE can be acute (<6 weeks) or chronic (>3 months). Acute otitis externa (AOE) is most commonly bacterial and presents with rapid onset of ear pain, tenderness, itching, aural fullness and hearing loss. Necrotising/malignant otitis externa involves skin and soft tissue of the external auditory canal and bone tissue of the temporal bone.' },
        { type: 'text', content: 'Epidemiology: ~10% of people develop OE during their lifetime; 95% are acute. Peak incidence at age 7–14 years. Most common pathogens: Pseudomonas aeruginosa and Staphylococcus aureus. Fungal OE is rare (~9%).' },
      ],
    },
    {
      heading: 'AOE — Clinical Presentation and Diagnosis',
      blocks: [
        { type: 'text', content: 'History/Symptoms: Ear pain, pruritus, otorrhoea, hearing loss, aural fullness. Risk factors: Water exposure/swimming, trauma or use of devices in ear canal, skin conditions (atopic dermatitis, psoriasis, allergic contact dermatitis), narrow ear canals, ear canal obstruction, prior ear surgery or radiation, stress, immunocompromised.' },
        { type: 'text', content: 'Physical Examination: Tenderness of tragus and/or pinna; ear canal oedema and erythema; associated debris (spores or curdy debris suggestive of fungal OE); tympanic membrane may be erythematous.' },
        { type: 'text', content: 'Diagnosis (AAP-HNS criteria): Rapid onset (generally within 48 hours) in the past 3 weeks AND symptoms of ear canal inflammation (otalgia, itching, or fullness, with or without hearing loss or jaw pain) AND signs of ear canal inflammation (tenderness of tragus and/or pinna, or diffuse ear canal oedema/erythema, with or without otorrhoea).' },
        { type: 'text', content: 'Complications: (1) Periauricular cellulitis — erythema, oedema, warmth of skin around pinna, generally mild pain without systemic manifestations. (2) Malignant external otitis — potentially fatal; most common in older adult diabetic or immunocompromised patients; spreads to bone/marrow spaces of skull base; severe otalgia out of proportion to examination; granulation tissue at bony cartilaginous junction; cranial nerve palsies indicate poor prognosis.' },
        { type: 'text', content: 'Differential Diagnosis: Contact dermatitis (pruritus dominant; consider if no response to OE treatment over 1 week); CSOM (symptoms mild, TM perforation and purulent middle ear drainage on otoscopy, minimal external canal oedema); Carcinoma of ear canal (consider if abnormal tissue growth or no response to prolonged OE treatment; friable lesion with surrounding purulence).' },
      ],
    },
    {
      heading: 'AOE — Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Prescribe analgesia according to severity of pain.' },
          { text: 'Topical antibiotics for initial treatment of diffuse, uncomplicated AOE. Use topical antibiotic providing coverage against Pseudomonas aeruginosa and Staphylococcus aureus (ciprofloxacin ear drops or neomycin-polymyxin B-dexamethasone ear drops). Treat for 1 week; continue additional week if not resolved; return for review if symptoms persist beyond 2 weeks.' },
          { text: 'If known or suspected TM perforation: use non-ototoxic preparation (topical fluoroquinolone for 7 days is preferred).' },
          { text: 'Oral antibiotics in addition to topical antibiotics: severe OE with cellulitis and/or fever; immunocompromised patients regardless of severity.' },
          { text: 'Oral fluoroquinolone is the antibiotic of choice when oral antibiotics are indicated. If not a candidate for systemic fluoroquinolones, amoxicillin/clavulanate is acceptable.' },
          { text: 'If no response within 48–72 hours, reassess for other causes of illness.' },
        ]},
        { type: 'text', content: 'Preventive Care: No devices in ear canal until symptoms resolved; disinfect prior to reuse. Prevention strategies: remove obstructing cerumen, use acidifying ear drops before/after swimming, use ear plugs while swimming, dry ear canal with hair dryer, avoid trauma to external auditory canal.' },
        { type: 'text', content: 'Instructions for Patients: Lie down with affected ear up; fill ear canal with drops entirely; stay in position for 3–5 minutes; gentle to-and-fro movement of ear may help; keep ear dry while using drops; try not to clean the ear yourself.' },
        { type: 'text', content: 'When to Refer: Refractory symptoms — start oral antibiotic for 1 week and refer to ENT. Patients with possible malignant OE, CSOM or carcinoma of the ear canal → promptly refer to ENT.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 25. Eczema
// ---------------------------------------------------------------------------
const eczema: CpgDocument = {
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



const epilepsy: CpgDocument = {
  id: 'epilepsy',
  condition: 'Epilepsy',
  source: 'NUP CPG',
  reviewDate: 'October 2027',
  advisors: 'Dr Tan Wei Beng / Dr Ang Lai Lai; Specialist: Dr Rahul Rathakrishnan (Senior Consultant, Division of Neurology, NUH)',
  sections: [
    {
      heading: 'Objectives',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Appreciate the different presentation of epilepsy.' },
            { text: 'Understand how a diagnosis is established.' },
            { text: 'Be familiar with the common medications used in the treatment of epilepsy and their associated side effects.' },
            { text: 'Special consideration — the woman patient during pregnancy and lactation.' },
            { text: 'Be familiar with issues related to fitness certification for patients with epilepsy.' },
            { text: 'Be prepared for the emergency management of a patient during seizure.' },
          ],
        },
      ],
    },
    {
      heading: 'Background',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Epilepsy is one of the more serious yet treatable neurological disorders, affecting over 50 million people worldwide.' },
            { text: 'An estimated 20 million new cases occur each year globally.' },
            { text: 'If properly treated, about 70–80% people with epilepsy could lead normal lives.' },
          ],
        },
      ],
    },
    {
      heading: 'Definition',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Epilepsy is a chronic neurological disorder characterized by recurrent unprovoked seizures. The seizures can be partial or generalised.' },
            { text: 'They are divided into: (a) Partial (focal) seizures – simple or complex; (b) Generalized seizure – absence (petit mal), tonic-clonic (grand mal), myoclonic, tonic, clonic, atonic.' },
          ],
        },
      ],
    },
    {
      heading: 'Symptoms and Signs (Not Diagnostic Criteria)',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Aura' },
            { text: 'Cyanosis' },
            { text: 'Loss of consciousness' },
            { text: 'Motor manifestations: generalised stiffness of body and limbs followed by jerking of limbs, tongue biting, urinary incontinence.' },
            { text: 'Post-ictal: confusion, muscle soreness, headaches.' },
          ],
        },
      ],
    },
    {
      heading: 'Differential Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'With loss of consciousness: syncope, cardiac arrhythmia, TIA, hypoglycaemia, panic attacks. With abnormal movement: movement disorders during sleep and when awake, paroxysmal choreoathetosis/dystonia/tremor, drop attacks and cataplexy.',
        },
      ],
    },
    {
      heading: 'Investigations (If Relevant)',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Full Blood Count' },
            { text: 'Electrolytes, Urea, Creatinine and Glucose' },
            { text: 'Serum calcium, magnesium' },
            { text: 'Liver function tests' },
            { text: 'Electrocardiogram' },
            { text: 'Electroencephalogram (EEG)' },
            { text: 'Imaging – CT / MRI head' },
          ],
        },
        {
          type: 'text',
          content: 'Notes on EEG: Often useful in diagnosis, classification and prognostication of epilepsy. Performed to support a diagnosis in adults where clinical history is suggestive. Should be performed soon after the attack when a helpful result is more likely.',
        },
      ],
    },
    {
      heading: 'Referral for Evaluation of First Seizure',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'A neurologist should evaluate all individuals with a first-onset suspected seizure.' },
            { text: 'This ensures accurate and early diagnosis, and initiation of appropriate therapy.' },
            { text: 'The primary care doctor can follow up thereafter.' },
          ],
        },
      ],
    },
    {
      heading: 'Anti-Epileptic Drugs (AED)',
      blocks: [
        {
          type: 'text',
          content: 'At NUP, any AED should not be initiated at NUP — therapy is only stepped down from neurologists in hospital. Any patient who lost follow up and requires reinitiation of medicine should be referred back to neurologist as a rule.',
        },
        {
          type: 'text',
          content: 'Consideration for AED: (a) The risk of seizure recurrence; (b) The benefits of being on AED. Commonly used AEDs: Phenytoin, carbamazepine, sodium valproate, phenobarbitone. Newer AEDs (gabapentin, lamotrigine, topiramate, levetiracetam) can be added on by the neurologist for suboptimal control.',
        },
        {
          type: 'text',
          content: 'Changing formulation/brand of AED is not recommended — different preparations may vary in bioavailability or pharmacokinetic profiles, increasing risk of reduced effect or excessive side effects.',
        },
        {
          type: 'text',
          content: 'Monitoring AED levels in primary care is unnecessary and not cost-effective. Hospital specialists order levels for: compliance/titration, assessment of AED toxicity, titration of phenytoin dose.',
        },
        {
          type: 'text',
          content: 'Breakthrough seizures: increased risk due to non-compliance, drug interactions, alcohol abuse, sleep deprivation, concurrent illness. Patients with frequent breakthrough seizures should be referred back to a neurologist.',
        },
        {
          type: 'text',
          content: 'Withdrawal of AED can be explored: at end of at least 2-year seizure-free period, after discussion of risks and benefits, via referral to specialist. Risk of relapse after withdrawal is approximately 25% at 1 year and 29% at 2 years.',
        },
      ],
    },
    {
      heading: 'Pharmacological Treatment',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Dosage (adults)', 'Max Dose', 'Adverse Drug Reactions', 'Contraindications / Precautions / Remarks'],
          rows: [
            { cells: ['Phenytoin (S1) (Dilantin®) — 30mg, 100mg capsules; 125mg/5ml syrup', 'Maintenance: 200–400 mg daily in 3–4 divided doses', '400 mg daily', 'CNS symptoms (drowsiness, dizziness, nystagmus, ataxia, confusion); nausea, vomiting, hepatotoxicity; gingival hyperplasia, hypertrichosis; hyperglycaemia, folic acid deficiency, peripheral neuropathy, osteomalacia; SLE, fever, rash', 'Toxicity: CNS symptoms, hyperglycaemia. Potentially fatal (rare): SJS/TEN, agranulocytosis, aplastic anaemia. Dosage adjustments needed when switching between capsules and suspension. Space at least 2 hours apart from enteral feeds.'] },
            { cells: ['Carbamazepine (S1) (Tegretol®) — 200mg, 200mg CR tablets', 'Maintenance: 800–1200 mg daily in divided doses', '1600–2400 mg daily', 'CNS symptoms (drowsiness, dizziness, ataxia); nausea, vomiting, constipation, hepatotoxicity; hyponatraemia/SIADH; hair loss, allergic skin reactions; blood disorders, leucopenia', 'Toxicity: CNS symptoms, AV blocks, arrhythmias. Potentially fatal (rare): SJS/TEN (1–3 months after initiation; ~10x higher risk in some Asian populations); agranulocytosis, aplastic anaemia, hepatic failure. Obtain HLA-B*1502 genotyping prior to initiation.'] },
            { cells: ['Sodium Valproate (S1) (Epilim®, Epilim Chrono®) — 200mg/5ml syrup; 200mg EC, 200/300/500mg Chrono tablets', 'Maintenance: 1000–2000 mg daily in 1–2 divided doses', '2500 mg daily', 'CNS symptoms (drowsiness, dizziness, headache, ataxia, confusion, amnesia, anxiety, depression); GI disturbances, hepatotoxicity, hyperammonaemia; transient hair loss, weight gain, amenorrhoea, gynaecomastia; vasculitis, thrombocytopenia', 'Toxicity: CNS symptoms. Potentially fatal (case reports): pancreatitis, severe hypersensitivity reactions with organ dysfunction.'] },
            { cells: ['Phenobarbitone (S1) — 10mg, 60mg tablets', '60–250 mg daily at night', '—', 'CNS depression or paradoxical excitation, drowsiness, insomnia, nightmares, impaired judgment, hyperkinesia, ataxia, hallucinations; nausea, vomiting, constipation; hypotension, bradycardia, syncope; agranulocytosis, thrombocytopenia, megaloblastic anaemia', 'Toxicity: CNS symptoms, respiratory depression, tachycardia/bradycardia, hypotension. Potentially fatal (rare): severe cutaneous adverse reactions 1–2 months after initiation.'] },
            { cells: ['Gabapentin (S2) — 100mg, 300mg tablets', '300–800 mg tds', '—', 'CNS depression, drowsiness, dizziness, ataxia, mood changes; peripheral oedema, weight gain', 'Exclusively (100%) cleared renally.'] },
            { cells: ['Topiramate (S2) — 25mg, 50mg, 100mg tablets (not available at NUP)', '50–200 mg bd', '—', 'CNS symptoms (drowsiness, dizziness, cognitive dysfunction, word-finding difficulty, mood changes); metabolic acidosis, nephrolithiasis, angle-closure glaucoma, anorexia, weight loss, oligohidrosis', '—'] },
            { cells: ['Levetiracetam (S2) — 500mg tablets', '500–1500 mg bd', '—', 'CNS symptoms (drowsiness, dizziness, fatigue, headache, irritability, aggression); increased BP', 'Potentially fatal (rare): severe cutaneous adverse reactions 1–2 months after initiation.'] },
          ],
        },
      ],
    },
    {
      heading: 'Advice to Patients and Care Givers',
      blocks: [
        {
          type: 'text',
          content: 'Seizure precautions — situations with increased risk: non-compliance to antiepileptic medication, drug interactions, alcohol misuse, sleep deprivation, concurrent illness.',
        },
        {
          type: 'text',
          content: 'Seizure first-aid: (1) Place patient in recovery position or on his/her side. (2) Remove surrounding objects that may harm the patient. (3) Do not place any object in the patient\'s mouth. (4) Call for an ambulance if injury occurs, seizure lasts >5 minutes, or seizures cluster without return to baseline.',
        },
        {
          type: 'text',
          content: 'Home and workplace safety: minimise exposure to open fires and sharp instruments; refrain from extended baths or locking toilet doors; refrain from swimming alone; heavy machinery operation is discouraged.',
        },
      ],
    },
    {
      heading: 'Women, Pregnancy and Lactation',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Women with epilepsy should be referred to specialist care for preconception counselling and follow-up if pregnant.' },
            { text: 'Monotherapy at the lowest AED dose to control seizures is recommended where possible.' },
            { text: 'Folic acid 5 mg per day should be given to women on AED from pre-conception till the first trimester of pregnancy to prevent neural tube defects.' },
            { text: 'AED is not a contraindication to breastfeeding. Women should be encouraged to breastfeed after discussion with their neurologist.' },
          ],
        },
      ],
    },
    {
      heading: 'Fitness Certification',
      blocks: [
        {
          type: 'text',
          content: 'Pre-employment medical examination: office-based and sedentary jobs pose no increased risk. Occupations that put the patient at risk during a seizure (e.g. operating heavy machinery, working at heights) are not suitable. Refer to neurologist, designated factory doctor (DFD), or MMed(OM) for pre-employment assessment in hazardous occupations.',
        },
        {
          type: 'text',
          content: 'Assessment for fitness for physical activities: physical activities for stable patients should not be restricted unless they pose a danger. Activities involving heights, water, or aggressive physical contact should be avoided.',
        },
        {
          type: 'text',
          content: 'Driving: the current Road Traffic Act may prohibit individuals with epilepsy from driving in Singapore. Individuals must declare epilepsy when applying for a driving licence and must inform authorities if they develop epilepsy after obtaining a licence.',
        },
      ],
    },
    {
      heading: 'Emergency Treatment of Seizures',
      blocks: [
        {
          type: 'text',
          content: 'Protect the patient: remove hazards from immediate surroundings; protect from falling; position on their side with head in neutral inline position; protect head but do not restrain.',
        },
        {
          type: 'text',
          content: 'Initial assessment and management: establish ABC and administer high-concentration oxygen; check for hypoglycaemia; observe and record the pattern and duration of seizures; do not force anything into the person\'s mouth.',
        },
        {
          type: 'text',
          content: 'Emergency pharmacotherapy: required if seizures last ≥5 minutes or recur >3 times/hour. Initial dose: 5–10 mg diazepam IV or rectally. If no response, same dose can be repeated after 10 minutes. Monitor pulse rate, BP, respiratory rate, O₂ saturation closely.',
        },
        {
          type: 'text',
          content: 'Post-treatment: patient should be sent to the Emergency Department for further treatment and evaluation.',
        },
      ],
    },
    {
      heading: 'Living with Epilepsy',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Many people diagnosed and treated for epilepsy are able to live full, active lives and many live seizure-free if they take medications on schedule.' },
            { text: 'Even individuals with uncontrolled seizures can make lifestyle adjustments to allow a reasonable lifestyle.' },
            { text: 'Resources: Epilepsy Foundation (epilepsy.com), Epilepsy Institute (epilepsyinstitute.org), American Academy of Neurology (aan.com).' },
          ],
        },
      ],
    },
    {
      heading: 'Recommended Care Components for Epilepsy',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Components', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Seizure Frequency', 'Annually', ''] },
            { cells: ['Seizure Type', 'Annually', ''] },
            { cells: ['Seizure Free Duration', 'Annually', ''] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under the National Adult Immunisation Schedule (NAIS) and National Childhood Immunisation Schedule (NCIS)'] },
          ],
        },
      ],
    },
  ],
};

const epistaxisInChildren: CpgDocument = {
  id: 'epistaxis-in-children',
  condition: 'Epistaxis in Children',
  source: 'NUP CPG',
  reviewDate: 'April 2025',
  advisors: 'Dr Lee Chai Peng / Dr Tan Wee Hian; Specialist: Dr Goh Xue Ying (Consultant, Department of Otolaryngology – Head & Neck Surgery, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Epistaxis occurs commonly in children, especially in those between the ages of 2 and 10 years.' },
            { text: 'In most cases, nosebleeds are secondary to local trauma and can be cared for by primary care physicians.' },
            { text: 'In rare instances, however, a nosebleed may be difficult to control or a manifestation of a serious systemic illness.' },
          ],
        },
      ],
    },
    {
      heading: 'Epidemiology',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Estimated 30% of children have one nosebleed by the time they are 5 years of age.' },
            { text: 'In children between the ages of 6 and 10 years, the frequency increases to 56%.' },
            { text: 'Nosebleeds are rare in infancy and infrequent after puberty.' },
            { text: 'Increased incidence occurs during hot or cold weather and when ambient humidity is low, making nasal septal mucosa dry and friable, predisposed to bleeding even with minor trauma.' },
          ],
        },
      ],
    },
    {
      heading: 'History',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Age: rare in children younger than 2 years (~1 per 10,000) — should prompt consideration of trauma or serious illness. Recurrent idiopathic epistaxis resolves with time and is uncommon in children older than 14 years.' },
            { text: 'Duration of bleeding: prolonged bleeding may suggest a bleeding disorder.' },
            { text: 'Bilateral / unilateral: unilateral may be isolated lesion/minor trauma; bilateral more suggestive of general mucosal irritation, systemic aetiology, or major nasal trauma.' },
            { text: 'What measures were taken to stop the bleeding? Bleeding difficult to control with anterior pressure may indicate a bleeding disorder or posterior source.' },
            { text: 'History of trauma, including nose picking.' },
            { text: 'History of nasal congestion, discharge, or obstruction.' },
            { text: 'History of foreign body insertion (e.g. button battery) — may present with persistent unilateral bloody/foul discharge.' },
            { text: 'Ongoing nasal discharge — may suggest allergic rhinitis.' },
            { text: 'Any regular medication (such as anticoagulants, long-term aspirin).' },
          ],
        },
      ],
    },
    {
      heading: 'Physical Findings',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Look for haemodynamic compromise, signs of systemic causes of bleeding, and asphyxiation: malaise (hypoxia ± acidosis), pallor (blood loss/anaemia), petechiae/bruising/gingival bleeding/haemotympanum, mucocutaneous telangiectasias/haemangiomas, enlarged lymph nodes/organomegaly (haematological disease/malignancy), icterus ± hepatomegaly (liver disease with secondary coagulopathy), visual acuity and extraocular movements (if facial trauma).' },
            { text: 'Nasal examination (most bleeds happen anteriorly): active bleeding/scabs/ulcerations/erosions/prominent blood vessels over Little\'s area, foreign body, masses (tumours), rhinitis (infectious/allergy), signs of allergy (pale/bluish mucosa, boggy turbinates), vascular anomalies (telangiectasia, haemangioma) — telangiectasia in nose/oral cavity/lips suggests hereditary haemorrhagic telangiectasia.' },
          ],
        },
      ],
    },
    {
      heading: 'Red Flags',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Epistaxis uncontrolled (does not stop after 20 minutes) with simple first aid measures.' },
            { text: 'Presence of systemic features such as fever, other mucocutaneous bleeding.' },
          ],
        },
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Laboratory evaluation is not indicated in majority of children with self-limited epistaxis.' },
            { text: 'If systemic causes are suspected, consider FBC, peripheral blood film (PBF), and coagulation screen.' },
            { text: 'Nasal bone X-ray is indicated for suspected nasal bone fracture, or medicolegal issues (assault, RTA, suspected non-accidental injury).' },
          ],
        },
      ],
    },
    {
      heading: 'Differential Diagnoses',
      blocks: [
        {
          type: 'text',
          content: 'Local Causes:',
        },
        {
          type: 'list',
          items: [
            { text: 'Trauma: from nose picking, inflammation from upper respiratory infection, foreign bodies, external trauma, non-accidental trauma (especially child <2 years).' },
            { text: 'Allergic Rhinitis (AR): inflammation and drying of mucosa may lead to epistaxis. Airborne pollutants increase nasal inflammation. Intranasal corticosteroids (ICS) may cause epistaxis via direct drying effect or local trauma; however a 2023 trial showed ICS reduced severity and frequency of subsequent epistaxis in children with untreated AR. The dispenser tip may traumatise the dry friable mucosa.' },
            { text: 'Neoplasms: nasal masses, haemangioma in nose, juvenile nasopharyngeal angiofibroma; rare: rhabdomyosarcomas, lymphomas, squamous cell carcinomas.' },
          ],
        },
        {
          type: 'text',
          content: 'Systemic Causes:',
        },
        {
          type: 'list',
          items: [
            { text: 'Bleeding disorders: thrombocytopenia (ITP, leukaemia, aplastic anaemia, HIV), inherited (von Willebrand disease, Haemophilia, Glanzmann thrombasthenia, Bernard-Soulier syndrome), acquired coagulopathy (hepatic disease, severe vitamin K deficiency, malabsorption).' },
            { text: 'Hereditary blood vessel disorder: hereditary haemorrhagic telangiectasia (Osler-Weber-Rendu disease).' },
            { text: 'Medications: accidental ingestion of aspirin, NSAIDs, warfarin.' },
            { text: 'Hypertension: rare in children.' },
            { text: 'Inflammatory diseases: Wegener granulomatosis, lethal midline granuloma (rare idiopathic inflammatory diseases causing nasal tissue destruction and bleeding).' },
          ],
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        {
          type: 'text',
          content: 'First Aid for Epistaxis (Advice to Parent):',
        },
        {
          type: 'list',
          items: [
            { text: 'Lean forward and spit out any blood: sit child upright and lean forward. Avoid lying down or tilting head backwards (swallowed blood may cause vomiting). Prepare a basin for the child to spit into.' },
            { text: 'Pinch the soft part of the nose: tightly pinch the soft (not bony) part, just above nostrils, for 10 minutes. Nostrils should be closed firmly. Do not release pressure to check until 10 minutes is up. Child breathes through mouth. Optionally, place an ice pack over forehead or suck ice cubes.' },
            { text: 'If bleeding does not stop after 20 minutes of direct pressure, proceed to Children\'s Emergency. Continue applying pressure in the meantime.' },
          ],
        },
        {
          type: 'text',
          content: 'Things to Take Note:',
        },
        {
          type: 'list',
          items: [
            { text: 'Pressing on the bony part of the nose does not stop a nose bleed.' },
            { text: 'Avoid packing the child\'s nose with anything as bleeding usually recurs when packing is removed.' },
            { text: 'Once bleeding has stopped, avoid picking at the nose or blowing out blood clots as this may cause bleeding to happen again.' },
            { text: 'If needed, tell the child to blow his or her nose gently.' },
          ],
        },
        {
          type: 'text',
          content: 'Prevention of Epistaxis:',
        },
        {
          type: 'list',
          items: [
            { text: 'Apply a small amount of petroleum jelly twice a day to the centre wall (septum) inside the nose — helpful for relieving dryness and irritation.' },
            { text: 'Use of air humidifier in the bedroom at night to moisten the air.' },
            { text: 'Put two to three drops of warm water into each nostril before blowing a stuffy nose; may also use a saltwater nasal spray.' },
            { text: 'Take antihistamines if the child has nasal allergies; consider intranasal steroids spray if allergic rhinitis is suspected. Advise not to rub or blow nose.' },
            { text: 'Avoid aspirin — can increase bleeding tendency for up to a week and make nosebleeds last much longer.' },
            { text: 'Consider short-term topical decongestants e.g. oxymetazoline drops for 5 days — causes vasoconstriction to alleviate or prevent recurrence in the acute phase.' },
          ],
        },
      ],
    },
    {
      heading: 'When to Refer',
      blocks: [
        {
          type: 'text',
          content: 'Most episodes of epistaxis resolve with compression of nasal alae for 5 to 10 minutes and do not require specialty care. Referral to emergency department or ENT specialist is indicated for:',
        },
        {
          type: 'list',
          items: [
            { text: 'Refractory epistaxis: e.g. uncontrollable bleeding, posterior epistaxis, or haemodynamically unstable.' },
            { text: 'Local abnormalities: e.g. tumours, telangiectasias.' },
            { text: 'Recurrent epistaxis with no apparent cause.' },
          ],
        },
      ],
    },
  ],
};

const erectileDysfunction: CpgDocument = {
  id: 'erectile-dysfunction',
  condition: 'Erectile Dysfunction',
  source: 'NUP CPG',
  reviewDate: 'April 2025',
  advisors: 'Dr Sky Koh; Specialist Advisors: Adj A/Prof Benjamin Goh (Senior Consultant, NUH) / Dr Chia Jun Yang (Consultant, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content: 'Erectile dysfunction (ED) is a common condition where men struggle to achieve or maintain an erection, impacting sexual performance. It affects men of all ages, increasing with age. ED has physical (vascular, hormonal, neurological), psychological (anxiety, depression), and lifestyle-related causes. This condition significantly affects sexual and emotional well-being, self-esteem, and relationships.',
        },
      ],
    },
    {
      heading: 'Epidemiology',
      blocks: [
        {
          type: 'text',
          content: 'ED is a growing concern worldwide, with an estimated 322 million men expected to be affected by 2025. In Singapore, approximately half of all males above 30 report some degree of erectile dysfunction. This number increases substantially with age, affecting three-quarters of men in their sixties.',
        },
      ],
    },
    {
      heading: 'Risk Factors',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Endocrine: diabetes mellitus, thyroid disorders, hypogonadism, hyperprolactinemia.' },
            { text: 'Metabolic syndrome: hypertension, hyperlipidaemia, obesity, sedentary lifestyle.' },
            { text: 'Vascular: peripheral vascular disease.' },
            { text: 'Substance use: smoking, alcohol, illicit drugs.' },
            { text: 'Neurological: stroke, Parkinson\'s disease, multiple sclerosis, spinal cord injury.' },
            { text: 'Structural: Peyronie\'s disease, phimosis, prostate cancer treatment (surgery, radiation, hormone therapy), trauma.' },
            { text: 'Psychological: stress, marital/relationship issues, guilt, anxiety, depression, history of sexual abuse.' },
            { text: 'Drugs: anticonvulsants (phenytoin); antidepressants (lithium, MAO inhibitors, SSRIs, SNRIs, TCAs); antihistamines (dimenhydrinate, diphenhydramine, hydroxyzine); antihypertensives (alpha blockers, beta blockers, CCBs, thiazides, spironolactone); anti-Parkinson agents (bromocriptine, levodopa, trihexyphenidyl); psychotropics (chlorpromazine, haloperidol, benzodiazepines); cardiovascular drugs (digoxin, gemfibrozil); hormonal agents (5-alpha-reductase inhibitors, androgen receptor blockers, corticosteroids, GnRH analogues).' },
          ],
        },
      ],
    },
    {
      heading: 'Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'History and physical examination have a reported 95% sensitivity but 50% specificity in determining cause of ED, needing further tests to assist.',
        },
        {
          type: 'text',
          content: 'History: assessment of libido, morning erections, premature ejaculation, duration of symptoms; sexual history (5Ps — Partner, Practice, Past history of STI, Protection from STI, Prevention of Pregnancy); past medical history; previous cardiovascular evaluation, exertional symptoms, concomitant use of nitrates; baseline effort tolerance (ability to climb 2 flights of stairs or walk 2 bus stops); symptoms of hypogonadism (decreased libido, fatigability, loss of lean muscle mass, mood changes); evaluation of specific causes and risk factors for ED.',
        },
        {
          type: 'text',
          content: 'Physical Examination: blood pressure, heart rate, BMI; abdomen and external genitalia (structural issues, features of hypogonadism — loss of male hair pattern, gynaecomastia, small testes); assessment of femoral and peripheral pulses; targeted neurological evaluation.',
        },
        {
          type: 'table',
          headers: ['Score', 'Severity', 'Consistency', 'Remarks'],
          rows: [
            { cells: ['1', 'Severe', 'Tofu', 'Penis is large but not hard'] },
            { cells: ['2', 'Moderate', 'Peeled Banana', 'Penis is hard but not hard enough for penetration'] },
            { cells: ['3', 'Suboptimal', 'Unpeeled Banana', 'Penis is hard enough for penetration but not completely hard'] },
            { cells: ['4', 'Optimal', 'Cucumber', 'Penis is hard and completely rigid'] },
          ],
        },
        {
          type: 'text',
          content: 'Simplified Index of Erectile Function (IIEF-5) Score: a widely used, self-administered questionnaire that measures and grades severity of ED.',
        },
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        {
          type: 'text',
          content: 'Baseline investigations to identify underlying conditions (if not previously done):',
        },
        {
          type: 'list',
          items: [
            { text: 'Serum fasting glucose or HbA1c' },
            { text: 'Lipid panel' },
            { text: 'ECG' },
          ],
        },
        {
          type: 'text',
          content: 'Thyroid function tests are indicated for patients exhibiting signs or symptoms suggestive of thyroid disorders. If hypogonadism is suspected, referral to Urology is advised for morning testosterone level assessment and further management.',
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        {
          type: 'text',
          content: 'Non-Pharmacological Therapy: effective management involves identifying and addressing the underlying cause, followed by targeted treatment. Optimising concomitant chronic conditions (hypertension, diabetes, hyperlipidaemia) is crucial. Consider medication adjustment if ED is suspected to be drug-induced. Lifestyle modifications — regular exercise, smoking cessation, weight loss in overweight men — demonstrate significant symptom improvement.',
        },
        {
          type: 'text',
          content: 'Initiating Pharmacological Therapy: ED and cardiovascular disease share common risk factors. Cardiovascular risk stratification uses the Singapore-modified Framingham Risk Score (SG-FRS-2023): low risk <5%, intermediate risk 5–20%, high risk ≥20%. Perform an ECG to assess for undiagnosed cardiovascular conditions if not done recently. Intermediate-risk patients should undergo exercise treadmill investigation via the Open Access Exercise Treadmill Testing Workflow. High-risk patients should be referred to Cardiology for clearance prior to initiating PDE-5 inhibitor therapy.',
        },
        {
          type: 'text',
          content: 'Patients without existing cardiovascular diseases can be initiated on PDE-5 inhibitors if they fulfil ALL: low cardiovascular risk (SG-FRS-2023 <5%), normal ECG, and good effort tolerance (able to climb 2 flights of stairs or walk 2 bus stops).',
        },
        {
          type: 'text',
          content: 'Patients with existing cardiovascular conditions can be initiated on PDE-5 inhibitors if they had undergone complete revascularisation of coronary arteries (successful PCI/CABG with no angina symptoms) OR received cardiology clearance.',
        },
        {
          type: 'table',
          headers: ['Drug', 'Initial Dose', 'Maximum Dose', 'Common ADRs', 'Rare ADRs', 'Remarks / Contraindications / Precautions'],
          rows: [
            { cells: ['Sildenafil (NS) — 50 mg tablet', '50 mg, 1 hour before sexual intercourse', '100 mg in 24 hours', 'Headache, flushing, gastrointestinal symptoms', 'Visual disturbance, dizziness, myalgia, insomnia, anxiety, vertigo, epistaxis, priapism, hypotension; can cause potentially fatal cardiovascular events (MI, arrhythmias, unstable angina)', 'Take on empty stomach, 2 hours after low-fat diet. Manual stimulation prior to intercourse required. Contraindicated with nitrates (GTN, ISMN, ISDN), severe cardiovascular disorders (unstable angina, cardiac failure), loss of vision in 1 eye due to non-arteritic anterior ischaemic optic neuropathy, hypotension (BP <90/50 mmHg), recent stroke or MI, known hereditary degenerative retinal disorders, severe hepatic impairment. Patients on alpha-blockers, mild/moderate liver impairment, or CrCl <30ml/min should start on 25mg.'] },
          ],
        },
        {
          type: 'text',
          content: 'Other treatments of ED include Low-intensity Extracorporeal Shockwave Therapy (LiESWT), Intracorporeal Injections, Vacuum Erection Devices, and penile prostheses.',
        },
      ],
    },
    {
      heading: 'Referral Criteria to Urology',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Failed oral PDE5 inhibitor therapy with appropriate use (i.e., after 4 separate occasions of taking maximum doses on an empty stomach and with adequate stimulation).' },
            { text: 'Suspicion of hypogonadism.' },
            { text: 'Structural abnormalities, history of pelvic surgery, neurological disorders, complex medical conditions.' },
          ],
        },
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        {
          type: 'text',
          content: 'HSG enrolled or teamlet patients demanding sildenafil based on previous use from private GP or specialist: determine probable cause, assess cardiovascular risk using SG-FRS-2023. For high-risk patients, decline and refer to cardiology. For medium-risk patients, recommend treadmill stress test. If patient insists, engage in shared decision-making, document discussion before prescribing. Escalate to senior doctor if pressured.',
        },
        {
          type: 'text',
          content: 'Non-HSG enrolled, non-teamlet patients requesting sildenafil: politely decline and advise them to consult their principal doctor. Inform that their principal physician can provide a private prescription fillable at the pharmacy at the same price, without quantity restrictions. If patient insists, explain that comprehensive cardiovascular risk assessment is required. Firmly decline if unwilling to undergo assessments.',
        },
        {
          type: 'text',
          content: 'Requests for sildenafil exceeding the monthly limit of 8 tablets: be aware that the pharmacy will restrict collection. Explain that this policy prevents potential abuse, discourages black market sales, rationalises stock, ensures equal access, and maintains a healthy drug supply. Consider asking them to revisit when their supply runs out for re-prescription.',
        },
      ],
    },
  ],
};



const heartFailure: CpgDocument = {
  id: 'heart-failure',
  condition: 'Heart Failure',
  source: 'NUP CPG',
  reviewDate: 'November 2028',
  advisors: 'Dr Ng Li Yan / Dr Kwan Yew Seng; Specialist Advisor: Dr Lin Weiqin (Senior Consultant, Department of Cardiology, National University Heart Centre, Singapore)',
  sections: [
    {
      heading: 'Heart Failure Management Tips',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Assess functional status (NYHA class).' },
            { text: 'Assess volume status (symptoms and signs, including weight).' },
            { text: 'Assess adherence to medications and fluid restriction.' },
            { text: 'Medication review to ensure patients are on appropriate disease-modifying treatment.' },
            { text: 'Control cardiovascular risk factors.' },
            { text: 'Assess renal function and electrolytes regularly.' },
            { text: 'Advise on exercise, educate patients, and screen for psychosocial issues.' },
          ],
        },
        {
          type: 'text',
          content: 'Heart Failure with Reduced Ejection Fraction (HFrEF) (LVEF ≤ 40%): Ensure 4 pillars of HFrEF have been initiated: (1) *ARNI OR ACEI/ARB; (2) Beta blockers (bisoprolol, carvedilol); (3) MRA; (4) SGLT-2 inhibitors.',
        },
        {
          type: 'text',
          content: 'Heart Failure with Mildly Reduced and Preserved Ejection Fraction (Non-HFrEF) (LVEF >40%): Initiate SGLT-2 inhibitors. Consider other HFrEF treatment for suitable patients.',
        },
        {
          type: 'text',
          content: 'Red Flags for ED Referral / Early Cardio Review: ADHF with pulmonary oedema; Hypotension (SBP <80mmHg); Rapid worsening of renal function; Fluid overload not responding to trial of increased diuretics; First presentation of heart failure.',
        },
      ],
    },
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content: 'Clinical Definition: Heart failure (HF) is a clinical syndrome with symptoms and/or signs caused by a structural and/or functional cardiac abnormality and corroborated by elevated natriuretic peptide levels and/or objective evidence of pulmonary or systemic congestion (Universal Definition and Classification of Heart Failure 2021).',
        },
        {
          type: 'text',
          content: 'Epidemiology: 4.5% of the Singapore population was found to be living with heart failure. Nearly 10% of people in their 80s suffer from heart failure.',
        },
      ],
    },
    {
      heading: 'Diagnosis, Classification, Aetiology and Severity of Heart Failure',
      blocks: [
        {
          type: 'text',
          content: 'Diagnosis (Universal Definition and Classification of Heart Failure 2021): Criteria 1 must be fulfilled and corroborated by either criterion 2 or 3. (1) Symptoms and/or signs of heart failure caused by a structural and/or functional cardiac abnormality. (2) EF <50%, abnormal cardiac chamber enlargement, elevated LV filling pressures (E/E\' >15), moderate/severe ventricular hypertrophy or valvular obstructive or regurgitant lesion. (3) Elevated natriuretic peptide levels. (4) Objective evidence of cardiogenic pulmonary or systemic congestion by diagnostic modalities.',
        },
        {
          type: 'text',
          content: 'Classification of Heart Failure: (1) HFrEF: EF ≤40%; (2) HFmEF: EF 41–49%; (3) HFpEF: EF ≥50%; (4) HFimpEF: baseline EF ≤40%, ≥10-point increase from baseline EF, and second measurement of EF >40%.',
        },
        {
          type: 'text',
          content: 'Initial Assessment — Symptoms (ask for chest pain, syncope and palpitations routinely): Breathlessness (orthopnoea, PND), pedal oedema, fatigue. Signs: Weight gain, raised JVP, displaced apical beat, peripheral oedema, lung crepitations, third heart sound, tachycardia.',
        },
        {
          type: 'text',
          content: 'Aetiology of Heart Failure: Coronary artery disease, hypertension, valvular heart disease, cardiomyopathy (familial and nonfamilial), thyroid disease, diabetes mellitus, anaemia, post-myocarditis, previous cancer treatment (chemotherapy-induced cardiomyopathy, radiation heart disease), infiltrative diseases (amyloidosis, haemachromatosis, glycogen storage diseases), toxins (alcohol, cocaine), neuromuscular diseases.',
        },
        {
          type: 'text',
          content: 'Precipitating Causes — Non-Cardiac: Non-compliance to medications/fluid/salt restriction; concomitant medications (NSAIDs, calcium channel blockers except amlodipine and felodipine, thiazolidinediones, anti-arrhythmics other than amiodarone); alcohol abuse; renal dysfunction; infection (UTI, pneumonia, sepsis); pulmonary embolism; thyroid dysfunction; anaemia. Cardiac: Arrhythmias (AF, SVT, VT); myocardial ischaemia; valve leaflet dysfunction secondary to papillary muscle rupture.',
        },
        {
          type: 'text',
          content: 'Complications of Heart Failure: Arrhythmias (AF, VT, VF, bradyarrhythmias); thromboembolism (stroke, DVT, PE); gastrointestinal (hepatic congestion/dysfunction, malabsorption); musculoskeletal (muscle wasting, cachexia); respiratory (pulmonary congestion/hypertension, respiratory muscle weakness).',
        },
        {
          type: 'table',
          headers: ['Class', 'Severity', 'Symptoms (NYHA)'],
          rows: [
            { cells: ['I', 'Asymptomatic', 'No symptom with ordinary physical activity'] },
            { cells: ['II', 'Mild', 'Comfortable at rest but ordinary activity causes symptoms'] },
            { cells: ['III', 'Moderate', 'Comfortable at rest but symptoms with less than ordinary activity'] },
            { cells: ['IV', 'Severe', 'Symptomatic at rest and without any physical activity'] },
          ],
        },
        {
          type: 'table',
          headers: ['Stage', 'Definition (AHA/ACC)'],
          rows: [
            { cells: ['A', 'At risk for HF but without current or prior symptoms or signs of HF and without structural or biomarker evidence of heart disease'] },
            { cells: ['B', 'Structural heart disease or abnormal cardiac function, or elevated natriuretic peptide levels without current or prior symptoms or signs of HF'] },
            { cells: ['C', 'Current or prior symptoms and/or signs of HF caused by a structural and/or functional cardiac abnormality'] },
            { cells: ['D', 'Severe symptoms and/or signs of HF at rest, recurrent hospitalisations despite GDMT, refractory or intolerant to GDMT, requiring advanced therapies such as consideration for transplant, mechanical circulatory support, or palliative care'] },
          ],
        },
      ],
    },
    {
      heading: 'Investigations at Primary Care',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Chest X-ray: ABCDE mnemonic — A: alveolar oedema (bat wing opacities), B: Kerley B lines, C: cardiomegaly, D: dilated upper lobe vessels, E: pleural effusion. May also detect conditions mimicking heart failure.' },
            { text: 'ECG: unlikely to be normal in chronic heart failure (20% may have a normal ECG). Commonly seen abnormalities: LVH, left axis deviation, LBBB, pathological Q-waves. Arrhythmias (sinus tachycardia, AF, acute ST changes) may be seen in decompensated HF.' },
            { text: 'Urinalysis: screen for proteinuria and glycosuria.' },
            { text: 'Full blood count: anaemia can precipitate acute HF; elevated WBC can indicate ongoing infection causing decompensated HF.' },
            { text: 'Creatinine and electrolytes: identify renal impairment and electrolyte disturbances from diuretic use.' },
            { text: 'HbA1c, lipid panel: identify cardiovascular risk factors.' },
            { text: 'Liver function test: elevated transaminases secondary to hepatic congestion.' },
            { text: 'Thyroid function test: especially in the presence of AF.' },
            { text: 'Iron panel: iron deficiency (absolute and functional) can occur with or without anaemia in heart failure.' },
          ],
        },
      ],
    },
    {
      heading: 'Investigations at Tertiary Care',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Echocardiography' },
            { text: 'Other investigations: plasma B-type natriuretic peptide, non-invasive imaging' },
            { text: 'Coronary angiogram: current gold standard for demonstrating coronary artery disease' },
          ],
        },
      ],
    },
    {
      heading: 'Management and Follow-Up',
      blocks: [
        {
          type: 'text',
          content: 'Non-Pharmacological / Lifestyle — Risk Factors: Lipids: aim LDL <1.4mmol/L (history of ACS) or <1.8mmol/L (stable IHD, post-PCI/CABG). Hypertension: aim BP <130/80 mmHg. Diabetes: screen for diabetes (aim HbA1c <7%). Smoking: offer cessation. Weight reduction: consider for patients with BMI ≥23 kg/m². Alcohol: advise all patients to abstain.',
        },
        {
          type: 'text',
          content: 'Psychosocial Management: identify psychosocial problems (depression, anxiety, social isolation). SSRIs have safer cardiovascular profiles.',
        },
        {
          type: 'text',
          content: 'Physical Activity and Exercise: all HF patients should be encouraged to enrol in a multidisciplinary cardiac rehabilitation programme. General advice: moderate intensity aerobic activity 30 minutes at least 5 times a week. Stable NYHA Class II–III patients with no contraindications are encouraged to undertake exercise.',
        },
        {
          type: 'text',
          content: 'Patient Education: general information about symptoms, treatment, prognosis, stress management; self-monitoring (home BP, daily weight, fluid/salt restriction); HF patients with erectile dysfunction can be treated with PDE-5 inhibitors in the absence of significant myocardial ischaemia or concomitant nitrates; advice on travel; advice on medications to avoid; DASH diet, fluid restriction; action plan; advance care planning for end-stage HF.',
        },
        {
          type: 'table',
          headers: ['Drug Class / Drug', 'Strength per Tablet', 'Initial Dose', 'Maximum Dose', 'Indications'],
          rows: [
            { cells: ['ARNI — Sacubitril/Valsartan', '24mg/26mg, 49mg/51mg, 97mg/103mg', '49mg/51mg bd', '97mg/103mg bd', 'First line therapy for HFrEF to reduce morbidity and mortality. Recommended for 2DE to review EF prior to initiation. Usually started by Cardiologists. Avoid if eGFR <30ml/min. Contraindicated with history of angioedema with ACE-I/ARBs, pregnancy, or concomitant aliskiren. Requires 36-hour washout period when switching to/from ACEi.'] },
            { cells: ['ACE Inhibitors — Captopril, Enalapril, Perindopril, Lisinopril', '12.5/25mg; 5/10/20mg; 4mg; 5/10/20mg', 'Captopril 6.25mg tds; Enalapril 2.5mg bd; Perindopril 2mg om; Lisinopril 2.5–5mg om', 'Captopril 50mg tds; Enalapril 10–20mg bd; Perindopril 8–16mg om; Lisinopril 20–40mg om', 'Beneficial to reduce morbidity and mortality in HFrEF when ARNI is not feasible. Titrate upwards to dosages shown effective in controlled trials.'] },
            { cells: ['ARBs — Losartan, Valsartan, Candesartan', '50mg; 80mg; 4mg', 'Losartan 25–50mg om; Valsartan 20–40mg bd; Candesartan 4–8mg om', 'Losartan 50–100mg om; Valsartan 160mg bd; Candesartan 32mg om', 'Alternative therapy in patients who are ACE inhibitor intolerant and when ARNI is not feasible. Routine combination of ACE-I, ARNI and ARB not recommended.'] },
            { cells: ['SGLT2 Inhibitors — Dapagliflozin, Empagliflozin', '10mg; 10/25mg', 'Dapagliflozin 10mg om; Empagliflozin 10mg om', 'Dapagliflozin 10mg om; Empagliflozin 10mg om', 'Reduces HF hospitalisation and cardiovascular mortality in symptomatic HF (NYHA II–IV) irrespective of EF, in both DM and non-DM patients. Dapagliflozin: not recommended at eGFR <25ml/min for new initiation; empagliflozin benefits shown in patients with eGFR ≥20ml/min.'] },
            { cells: ['Beta-Blockers — Carvedilol, Bisoprolol', '6.25/25mg; 2.5/5mg', 'Carvedilol 3.125mg bd; Bisoprolol 1.25mg om', 'Carvedilol 25mg bd (>85kg: 50mg bd); Bisoprolol 10mg om', 'Standard therapy for clinically stable patients with LV systolic dysfunction (EF ≤40%) and mild-moderate HF (NYHA II–III). Only carvedilol, bisoprolol, and sustained-release metoprolol succinate shown effective in reducing death and hospitalisation. Cautious dose titration every 2–4 weeks. Contraindicated in hypotension, bronchospasm, pulmonary oedema, symptomatic bradycardia, 2nd/3rd degree heart block.'] },
            { cells: ['MRA — Spironolactone', '25mg', '12.5–25mg om', '25mg om or bd', 'For symptomatic patients (NYHA II–IV) with HFrEF (EF ≤35%) already on ACE-I/ARB and beta-blocker. Can cause breast discomfort and gynaecomastia in males. Contraindicated if eGFR <30ml/min. Requires careful monitoring of renal function and serum K.'] },
            { cells: ['Diuretics — Hydrochlorothiazide, Frusemide', '25mg; 40mg', 'HCTZ 12.5mg om; Frusemide 20mg om', 'HCTZ 50mg om; Frusemide 160–200mg as single dose', 'For all symptomatic patients to improve symptoms and relieve congestion. Continued indefinitely; dose decreased once euvolaemia is attained. HCTZ: avoid if eGFR <30–40ml/min. Concurrent use with SGLT2-I may potentiate effects.'] },
            { cells: ['Digoxin', '0.0625/0.25mg', '0.0625mg', '0.5mg', 'Can be considered for symptomatic HF (NYHA II–IV) on standard therapy. Does not improve long-term survival but reduces rehospitalisation. Indicated for AF and CHF. Used as add-on to beta-blockers. Contraindicated in bradycardia, ventricular arrhythmia, severe renal dysfunction.'] },
            { cells: ['Hydralazine + Isosorbide Dinitrate (ISDN) — not available in NUP', 'Hydralazine 10/25/50mg; ISDN 10mg', 'Hydralazine 10mg 6H; ISDN 20mg 3–4 times/day', 'Hydralazine 225–300mg/day; ISDN 120–160mg/day', 'Usually for those intolerant of ARNI/ACE-I/ARBs. Add-on therapy in symptomatic patients on optimal medical therapy. High incidence of side effects such as headache.'] },
          ],
        },
        {
          type: 'text',
          content: '4 Pillars of HFrEF Management: (1) *ARNI/ARB/ACE-I; (2) SGLT2 inhibitors; (3) Beta blockers; (4) MRA.',
        },
        {
          type: 'text',
          content: 'Management of HFpEF: SGLT2 inhibitors significantly reduce combined risk of cardiovascular death or hospitalisation for HFpEF irrespective of diabetes status (EMPEROR Preserved 2021, DELIVER 2022). Few disease-modifying therapies available; aims are to identify and treat underlying risk factors, aetiology, and co-existing comorbidities; reduce symptoms of congestion with diuretics.',
        },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Family Physician: management of HF including health promotion and prevention/detection/treatment of complications; collaborates with other health care providers for holistic care.' },
            { text: 'Care Coordinator: introduce OneNUHS and HealthHub Apps; enrol patient onto Teleconsult; perform general screening (fall risk, social economics, smoking/drinking history); address care gaps (vaccinations, cancer screenings); recruitment into PTEC-HT/DM.' },
            { text: 'Care Manager: patient education on BP/LDL/glucose targets and lifestyle; teach home BP monitoring; assess treatment adherence.' },
            { text: 'Advanced Practice Nurse: manage patients with diabetes, hypertension, dyslipidaemia within scope of practice; titrate medications; manage common acute conditions.' },
            { text: 'Clinical Pharmacist: manage patients with diabetes, hypertension, dyslipidaemia; drug optimisation; closer monitoring for drug interactions, polypharmacy.' },
            { text: 'Dietitian: patient education on DASH diet and weight management.' },
            { text: 'Psychologist: psychological and behavioural interventions to manage stress, improve disease management; assessment and intervention for co-occurring psychological problems; support for carers.' },
            { text: 'Medical Social Worker: biopsychosocial assessment; intervention for social assistance including schemes, community resources, and caregiver support.' },
            { text: 'Financial Counsellor: financial counselling; MediSave utilisation advice; applications for MediFund, Medication Assistance Fund, Institutional Medical Fund.' },
            { text: 'Pharmacist: smoking cessation clinic; detect/prevent drug interactions; medication reconciliation.' },
          ],
        },
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        {
          type: 'text',
          content: 'Acute Decompensated Heart Failure: (1) Recognise symptoms/signs of decompensation; (2) Consider precipitating causes; (3) Investigations in primary care; (4) Primary care management — if underlying cause can be confidently elicited (most common being non-adherence to fluid restriction or medications), can treat in primary care with timely review; (5) Considerations for ED referrals — precipitating causes needing attention: Hb drop, acute coronary syndromes, new onset arrhythmias, severe infections.',
        },
        {
          type: 'text',
          content: 'Urgent and Emergency Situations — A&E Referrals: all patients with acute onset moderate-to-severe HF including acute pulmonary oedema and cardiogenic shock; patients with recurrent HF complicated by acutely threatening events (recent AMI, pulmonary/systemic embolus, symptomatic arrhythmias).',
        },
        {
          type: 'text',
          content: 'Fitness Certification (SMA guidelines 2011): NYHA Class I and II — Annual review for fitness to drive. NYHA Class III and IV — Permanently unfit.',
        },
      ],
    },
    {
      heading: 'Referrals and Community Resources',
      blocks: [
        {
          type: 'text',
          content: 'SOC Referrals: all first-time HF patients; mild to moderate chronic HF (NYHA II–IV) with progressive/refractory symptoms; persistent symptoms (chest pain, syncope, dyspnoea, palpitations); secondary causes (thyroid disease); pre-existing or developing metabolic abnormalities (sodium <130mmol/L, renal impairment with creatinine rising ≥2-fold or >200μmol/L); abnormal weight loss due to malnutrition.',
        },
        {
          type: 'text',
          content: 'Heart Failure Shared Care Programme: Cardiology SOC may refer stable HF patients to alternate visits between Cardiology SOC and NUP. Suitable patients: at least 6 months after last ADHF admission, no need for active up-titration of disease-modifying medications, stable dose of diuretics, on maximally tolerated doses of disease-modifying therapies. Escalation criteria: worsening HF (worsening effort tolerance, volume overload signs, recurrent outpatient visits for diuretic adjustment), inability to tolerate HF therapy, syncope/dizziness, new onset AF with poor rate control. Contact: nuhcs_communitycardio@nuhs.edu.sg or hotline 8908 3194.',
        },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Components', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Blood Pressure Measurement', 'Twice a year', 'Aim BP <130/80 mmHg'] },
            { cells: ['Weight and BMI Assessment', 'Twice a year', 'Keep <23 kg/m² (non-Asian: <25 kg/m²)'] },
            { cells: ['Lipid Profile', 'Annually', 'Risk stratify per ACG lipid 2023 (aim LDL <1.4mmol/L for ACS history; <1.8mmol/L for stable IHD, post PCI or CABG)'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers', 'Offer smoking cessation clinic, counselling, behavioural advice'] },
            { cells: ['Diabetes Screening', 'Annually or once every three years, as clinically indicated', 'Every 3 years for normal HbA1c or glucose tolerance; annually for IFG or IGT'] },
            { cells: ['Kidney Function Monitoring', 'Annually', 'More frequently if titrating HF medications or diuretics'] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under the National Adult Immunisation Schedule (NAIS)'] },
            { cells: ['Pneumococcal Vaccination', 'As recommended under NAIS', 'As recommended under NAIS'] },
            { cells: ['Shingles Vaccination (Recombinant herpes zoster vaccine)', '2 doses at 2 to 6 months interval', 'As recommended under NAIS (patients aged 60 years or older)'] },
          ],
        },
      ],
    },
  ],
};

const hypertension: CpgDocument = {
  id: 'hypertension',
  condition: 'Hypertension',
  source: 'NUP CPG',
  reviewDate: 'October 2028',
  advisors: 'Dr Kwan Yew Seng, Dr Anand Sankar; Specialist Advisor: Dr Lim Toon Wei (Senior Consultant, Department of Cardiology, National University Heart Centre, Singapore)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content: 'Hypertension or high blood pressure is a chronic medical condition in which the arterial blood pressure is elevated. Persistent hypertension is one of the key risk factors for cardiovascular diseases such as heart attack, stroke, and heart failure as well as other diseases like kidney failure. It is often known as a silent killer as it rarely causes symptoms, and many people go undiagnosed. Ischaemic heart disease (IHD) and stroke are the third and fourth leading causes of death in Singapore in 2022. Hypertensive diseases together constitute the fifth leading cause of death.',
        },
        {
          type: 'text',
          content: 'Epidemiology: Hypertension affects an estimated 1.28 billion people worldwide. In Singapore, the 2022 National Population Health Survey reported that over one in three residents (37%) aged 18–74 had hypertension, and that more than half (53%) were previously undiagnosed. More males (44.0%) were hypertensives compared with females (30.2%) in 2021–2022. Prevalence increases with age: ~8.1% for ages 18–29 to 76.8% for ages 70–74. About two-thirds (64.8%) of known hypertensives attending health examination had poor BP control.',
        },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'Recommended Screening: Any patient aged ≥18 years during any clinical visit.',
        },
        {
          type: 'table',
          headers: ['Systolic BP (mmHg)', 'Diastolic BP (mmHg)', 'Category', 'Recommended Action'],
          rows: [
            { cells: ['<130', '<85', 'Normal', '"Normal BP". Advise BP check biennially.'] },
            { cells: ['130–139', '85–89', 'High-Normal BP', 'Advise lifestyle modification. Check BP annually or more frequently if cardiovascular risk factors are present.'] },
            { cells: ['140–159', '90–99', 'Grade 1 Hypertension', 'Without CV risk factors: try lifestyle modification for 3–6 months. With high risk (established CV/renal disease, DM, or target organ damage): initiate drug treatment with lifestyle measures at the same time.'] },
            { cells: ['160–179', '100–109', 'Grade 2 Hypertension', 'Low risk (0–2 CV risk factors): can try lifestyle modification for several weeks; otherwise initiate drug treatment with lifestyle measures.'] },
            { cells: ['≥180', '≥110', 'Grade 3 Hypertension', 'Initiate drug treatment with lifestyle measures at the same time.'] },
            { cells: ['≥140', '<90', 'Isolated Systolic Hypertension', 'Graded according to same ranges of systolic BP; corresponding recommendations apply.'] },
          ],
        },
        {
          type: 'text',
          content: 'Blood Pressure Measurement: Measure at rest several times on several occasions, supine or sitting, using a non-invasive manometer. Measure BP in both arms; all subsequent readings on the arm with the higher reading. Measure sitting (or supine) and 2 minutes after standing for elderly and diabetic patients. Patient should rest 5 minutes, empty bladder if needed, refrain from smoking/caffeine/exercise/eating at least 30 minutes before. Select proper cuff size. For auscultatory method: inflate to ~30 mmHg above systolic, deflate at 2–3 mmHg per heartbeat, diastolic reading corresponds to Korotkoff phase V. For electronic method: if first BP reading is abnormal, take two additional readings with at least 1 minute between them and average the last 2.',
        },
        {
          type: 'text',
          content: 'Initial Assessment — Clinical Assessment: determine secondary cause, target organ damage (TOD), other cardiovascular risk factors. Use SG-FRS-2023 to calculate patient\'s 10-year risk.',
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        {
          type: 'text',
          content: 'Goals of Treatment: prevent cardiovascular and renal complications; treat the whole patient and associated conditions/risk factors; avoid drug side effects; majority may require two or more medications; aim for BP control within 3 months.',
        },
        {
          type: 'text',
          content: 'Treatment Targets (ACE Clinical Guidance Dec 2023): Special conditions: <150/100 mmHg in pregnant patients without TOD (do not decrease diastolic BP to <80 mmHg); <140/90 mmHg in pregnant patients with TOD; <220/120 mmHg during first 24 hrs of acute stroke (lower with care by 10–15%); lower by 10/5 mmHg if BP >140/90 mmHg after acute phase of stroke.',
        },
        {
          type: 'table',
          headers: ['Clinic (mmHg)', 'HBPM or Daytime ABPM (mmHg)', 'Night-time ABPM (mmHg)', '24-hour ABPM (mmHg)'],
          rows: [
            { cells: ['120/80', '120/80', '100/65', '115/75'] },
            { cells: ['130/80', '130/80', '110/65', '125/75'] },
            { cells: ['140/90', '135/85', '120/70', '130/80'] },
            { cells: ['160/100', '145/90', '140/85', '145/90'] },
          ],
        },
        {
          type: 'table',
          headers: ['Criteria', 'Recommended TCU Frequency', 'Alternate Dr/CM Visit'],
          rows: [
            { cells: ['Good BP control AND no complication', '6 months', '✓'] },
            { cells: ['Good BP AND elderly or has complications (IHD, CVA, renal impairment)', '3–4 months', '✓'] },
            { cells: ['Adherent to follow-up and treatment, with/without comorbidities, stable but sub-optimal control', '3–4 months', '✓'] },
            { cells: ['ACEi/ARB initiation or up-titration (K and Cr to be done in 2 weeks)', '2–4 weeks', '✓'] },
            { cells: ['Poor BP control AND requires titration of medication', '2–4 weeks', ''] },
          ],
        },
        {
          type: 'text',
          content: 'Lifestyle Modification and Patient Education: lifestyle modification is an important component and should be recommended. Use a team-based approach. All newly diagnosed hypertensive patients should be referred to a care manager for education. Health education topics: target BP, benefits and side effects of treatment, risks of hypertension, importance of long-term adherence, stress reduction. Non-pharmacological: restrict salt to 5–6g/day; moderate alcohol (≤2 standard drinks/day for men, ≤1 for women); increase vegetables, fruits, low-fat dairy; decrease saturated/total fats; reduce weight to BMI <23 kg/m² and waist circumference <90cm (men)/<80cm (women) for Asians; at least 30 minutes moderate dynamic exercise 5–7 days/week; offer assistance to quit smoking.',
        },
        {
          type: 'text',
          content: 'Initial Drug Choices — Uncomplicated Hypertension: ACE-I/ARB, Calcium Channel Blocker (CCB), Diuretic. Compelling Indications: Diabetes Mellitus → ACE-I/ARB; CKD/Proteinuria → ACE-I/ARB; Heart Failure → ACE-I/ARB (preferred), Beta-blocker (preferred), Diuretic; Isolated systolic hypertension (older persons) → Diuretic, Long-acting CCB; Myocardial infarction → Beta-blocker, ACE-I/ARB (LV dysfunction). Contraindications: Asthma/Bronchospasm → Beta-blocker (caution); 2°/3° Heart Block → Beta-blocker, Verapamil; Gout → Diuretic; Bilateral Renal Artery Stenosis → ACE-I, ARB; Pregnancy → ACE-I, ARB, Diuretic. Start with a low-dose long-acting once-daily drug and titrate dose.',
        },
        {
          type: 'text',
          content: 'Drug Combinations: consider low-dose dual therapy from two different anti-hypertensive classes. Note: Beta-blocker + ACE-I/ARB does not produce synergistic BP reduction; ACE-I + ARB worsens GFR and potentiates hyperkalaemia — avoid; Beta-blocker + diuretic increases risk of developing diabetes mellitus.',
        },
        {
          type: 'table',
          headers: ['Drug (class)', 'Recommended Dose Range', 'Renal Dose Adjustment', 'Common ADR', 'Contraindications / Precautions'],
          rows: [
            { cells: ['Lisinopril (S1) — ACE-I, 5/10/20mg', '5mg OD (elderly 2.5mg OD) to 40mg OD', 'CrCl <10: initial 2.5mg OD; CrCl 10–30: initial 2.5–5mg OM', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Enalapril (S1) — ACE-I, 5/10/20mg', '5mg OM (elderly 2.5mg OD) to 20mg BD', 'CrCl 10–30: initial 2.5mg/day in 1–2 divided doses, max 20mg/day; CrCl <10: initial 1.25mg OD or 2.5mg EOD, max 10mg/day', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Captopril (S1) — ACE-I, 12.5/25mg', '25mg BD/TDS to 50mg TDS', 'CrCl 10–50: 75% normal dose every 12–18h, max 50mg BD; CrCl <10: initial 1.25mg OD, max 50mg OD', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Perindopril (NS) — ACE-I, 4mg erbumine', '4mg OD (elderly 2mg OD) to 8mg OD', 'CrCl 30–80: initial 2mg OM, max 8mg OM; CrCl <30: not recommended', 'Postural hypotension, dizziness, abnormal taste, dry cough, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); idiopathic or hereditary angioedema'] },
            { cells: ['Losartan (S2) — ARB, 50/100mg', '25mg OD to 100mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Valsartan (S2) — ARB, 80/160mg', '80mg OD to 320mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Irbesartan (NS) — ARB, 150/300mg', '150mg OD (elderly 75mg OD) to 300mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Telmisartan (S2) — ARB, 40/80mg', '40mg OD to 80mg OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Candesartan (NS) — ARB, 8mg', '8mg OD to 32mg OD', 'Renal impairment: initial 4mg OM; CrCl <30: max 16mg OD', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Amlodipine (S1) — CCB, 5/10mg', '2.5mg OD to 10mg OD', 'No dose adjustment needed', 'Peripheral oedema, dizziness, headache/flushing', 'Caution in patients with heart failure; amlodipine or felodipine preferred if CCB required in HF'] },
            { cells: ['Nifedipine LA (S2) — CCB, 30/60mg', '30mg OD to 120mg OD', 'No dose adjustment needed', 'Peripheral oedema, dizziness, headache/flushing', 'Caution in patients with heart failure'] },
            { cells: ['Diltiazem (S1) — CCB, 30/60mg tablets or 90/100/200mg SR capsules', '30mg TDS to 60mg TDS (or 90mg OD to 200mg OD SR)', 'Use with caution in renal impairment', 'Peripheral oedema, headache', 'Sick sinus syndrome; 2nd/3rd degree AV block; acute MI; pulmonary congestion; caution in heart failure'] },
            { cells: ['Atenolol (S1) — Beta-blocker, 50/100mg', '25mg OD to 100mg OD', 'CrCl 15–35: max 50mg OD; CrCl <15: max 25mg OD or 50mg EOD', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Bisoprolol (S2) — Beta-blocker, 2.5/5mg', '1.25mg OD to 10mg OD', 'CrCl <20: lower initial dose, max 10mg/day', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Carvedilol (S2) — Beta-blocker, 6.25/25mg', '6.25mg BD to 25mg BD', 'No dose adjustment needed', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Metoprolol (NS) — Beta-blocker, 50/100mg', '50mg BD to 100mg BD', 'No dose adjustment needed', 'Postural hypotension, tiredness/fatigue, cold extremities', 'Asthma; sinus node dysfunction; pregnancy; uncompensated heart failure; heart block >1st degree'] },
            { cells: ['Hydrochlorothiazide (S1) — Thiazide Diuretic, 25mg', '12.5mg OD to 25mg OD', 'Use with caution; CrCl <10: not recommended (lack of efficacy)', 'Postural hypotension, electrolyte disturbances (hypokalaemia more likely ≥25mg OD)', 'Pregnancy; renal decompensation; anuria; may precipitate gout; increased risk of non-melanotic skin cancer'] },
            { cells: ['Indapamide 2.5mg (S2) / Indapamide SR 1.5mg (NS) — Thiazide Diuretic', 'Indapamide 2.5–5mg OD; SR 1.5mg OD', 'CrCl <30: not recommended', 'Postural hypotension, electrolyte disturbances', 'Sulphonamides allergy; may precipitate gout; avoid in severe renal disease'] },
            { cells: ['Spironolactone (S1) — MRA, 25mg (for resistant hypertension or persistent albuminuria)', '25mg OD to 50mg OD/BD', 'Caution in renal impairment; CrCl <30: not recommended', 'Breast tenderness/gynaecomastia (~6%), impotence in men, menstrual irregularities in women, hyperkalaemia', 'Usually restrict to eGFR ≥45ml/min and plasma potassium ≤4.5mmol/L; monitor electrolytes and eGFR soon after initiation and at least annually'] },
            { cells: ['Hydralazine (S1) — Vasodilator, 10/25/50mg', '10mg TDS to 50mg TDS', 'No dose adjustment needed', 'Tachycardia, flushing, peripheral oedema', 'Mitral valve rheumatic heart disease; may cause drug-induced Lupus-like syndrome (more likely with larger dose, longer duration)'] },
            { cells: ['Prazosin (S1) — Alpha-blocker, 1mg', '0.5mg TDS to 10mg BD', 'No dose adjustment needed', 'Postural hypotension, fatigue', ''] },
            { cells: ['Methyldopa (S1) — Centrally Acting, 250mg', '250mg BD/TDS to 500mg TDS', 'No dose adjustment needed', 'Postural hypotension', 'Current MAOI therapy; acute liver disease'] },
            { cells: ['Hyzaar/Hyzaar Forte (S2) — Losartan/HCTZ 50/12.5mg or 100/25mg', 'Initial: Hyzaar 1 tab OD; Max: Hyzaar Forte 1 tab OD', 'No dose adjustment needed', 'Postural hypotension, dizziness, fatigue', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Co-diovan (NS) — Valsartan/HCTZ', 'Initial: 80/12.5mg OD; Max: 160/12.5mg OD', 'Use with caution; CrCl <10: not recommended', 'Postural hypotension, dizziness, fatigue', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester)'] },
            { cells: ['Entresto (NS) — Sacubitril/Valsartan', 'Initial: 100mg OD; Max: 400mg OD', '—', 'Postural hypotension, dizziness, fatigue, hyperkalaemia', 'Bilateral renal artery stenosis; pregnancy (2nd/3rd trimester); history of angioedema with ACE-I or ARBs'] },
          ],
        },
      ],
    },
    {
      heading: 'Home Blood Pressure Monitoring',
      blocks: [
        {
          type: 'text',
          content: 'Indications for HBPM or 24-hour ABPM: diagnosis of hypertension (borderline or unusual variability); suspected white-coat hypertension or masked hypertension; monitoring of treated hypertensive patients; symptoms suggesting hypotension; elevated clinic BP or suspected pre-eclampsia in pregnancy; identification of true/false resistant hypertension. Specific indications for 24-hour ABPM: extreme discordance between clinic and home BP; assessment of intra-day BP variability; evaluation of nocturnal dipping status; suspicion of nocturnal hypertension (patients with diabetes, CKD, obstructive sleep apnoea, night-shift workers).',
        },
        {
          type: 'text',
          content: 'Advantages of HBPM: multiple measurements during the day and over extended periods; assessment of treatment effects at different times; good reproducibility, good prognostic value, relatively low cost; improvement in patient engagement; may empower patients in BP management.',
        },
        {
          type: 'text',
          content: 'Monitoring Schedule: for diagnosis, high-normal BP monitoring, and effects of treatment changes — 7-day home measurements (minimum 3 days) before each clinic/tele visit; 2 readings per day (morning before medication intake; evening before eating); 2 measurements each time (1–2 minutes apart). Long-term follow-up: less frequent measurements (once or twice per week) are acceptable.',
        },
        {
          type: 'text',
          content: 'Interpretation of HBPM Readings: compute average excluding readings from the first day. Mean home systolic ≥135 mmHg and/or diastolic ≥85 mmHg indicates hypertension. Mean home systolic <130 mmHg and diastolic <80 mmHg should be considered normal. Mean systolic 130–134 and diastolic 80–84 requires continued regular monitoring. Diagnosis thresholds and treatment targets for HBPM are generally 5 mmHg lower (systolic and diastolic) compared to office BP.',
        },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Family Physician: all aspects of primary medical care from screening, diagnosis and management of hypertension, including health promotion and prevention/treatment of complications; collaborates with other health care providers for holistic care.' },
            { text: 'Care Coordinator: introduce OneNUHS and HealthHub Apps; enrol onto Teleconsult; perform general screening; address care gaps (vaccinations, cancer screenings); teach home BP monitoring; recruitment into PTEC-HT.' },
            { text: 'Care Manager: patient education on hypertension, BP target, lifestyle measures; teach home BP monitoring and validate BP set; assess treatment adherence; alternate CM visit with Doctor for stable hypertension and/or dyslipidaemia; recruitment into PTEC-HT.' },
            { text: 'Advanced Practice Nurse: manage patients with diabetes, hypertension, dyslipidaemia; initiate and titrate antihypertensive medications; collaborate with healthcare team.' },
            { text: 'Clinical Pharmacist: manage patients with diabetes, hypertension, dyslipidaemia; initiate and titrate antihypertensives; drug optimisation for drug interactions, polypharmacy, non-adherence.' },
            { text: 'Dietitian: patient education on DASH diet and weight management.' },
            { text: 'Psychologist: psychological and behavioural interventions; assessment and intervention for co-occurring psychological problems; support for carers experiencing caregiver stress.' },
            { text: 'Medical Social Worker: biopsychosocial assessment; intervention for social assistance, community resources, caregiver support.' },
            { text: 'Financial Counsellor: financial counselling; MediSave utilisation advice; applications for MediFund, Medication Assistance Fund, Institutional Medical Fund.' },
            { text: 'Pharmacist: smoking cessation clinic; detect/prevent drug interactions; medication reconciliation.' },
          ],
        },
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        {
          type: 'text',
          content: 'Microscopic Haematuria or Micro-/Macro-albuminuria: please refer to the guideline on chronic kidney disease.',
        },
        {
          type: 'text',
          content: 'Secondary Hypertension: hypertension due to an identifiable cause, which may be treatable with a specific intervention. A high index of suspicion and early detection are important because interventions may be curative. Suspect secondary hypertension in: younger patients (<40 years) with grade 2 hypertension or onset in childhood; acute worsening in previously stable normotension; resistant hypertension; severe (grade 3) or hypertensive emergency; extensive HMOD; clinical/biochemical features of endocrine causes or CKD; obstructive sleep apnoea; phaeochromocytoma symptoms or family history. Causes: obstructive sleep apnoea (5–10%), renal parenchyma disease (2–10%), primary hyperaldosteronism (5–15%), atherosclerotic renal vascular disease (1–10%), thyroid disease (1–2%), phaeochromocytoma/Cushing\'s/coarctation/hyperparathyroidism (<1%). Medications raising BP: oral contraceptive pill, diet pills, nasal decongestants, stimulant drugs, immunosuppressives, anti-angiogenic cancer therapies, anabolic steroids, erythropoietin, NSAIDs, herbal remedies (ephedra, ma huang).',
        },
        {
          type: 'text',
          content: 'Hypertensive Emergencies: large elevations in BP (SBP >180 mmHg or DBP >110 mmHg) associated with impending or progressive organ damage (major neurological changes, hypertensive encephalopathy, cerebral infarction, intracranial haemorrhage, acute LV failure, acute pulmonary oedema, aortic dissection, renal failure, eclampsia). Referral to Emergency Department is indicated.',
        },
        {
          type: 'text',
          content: 'Hypertensive Urgencies: isolated large BP elevations without acute target organ damage. Exclude acute TOD through history, physical examination including fundoscopy, urinalysis, ± serum creatinine. Treat by reinstitution or intensification of drug therapy and treatment of anxiety. Once TOD excluded, consider sending home with home BP monitoring and scheduled review next day or within a few days. Patient to proceed to ED if symptomatic.',
        },
        {
          type: 'text',
          content: 'Resistant Hypertension: BP remains above goal (average >140/90 mmHg) despite concurrent use of three antihypertensive agents of different classes at optimal doses (including a diuretic). Evaluation: detailed history/exam/investigations; exclude secondary cause. Management — Non-pharmacological: check and reinforce adherence to medication and diet/lifestyle. Pharmacological: addition of low-dose spironolactone; or eplerenone/amiloride/higher-dose thiazide/loop diuretic (for eGFR ≤30ml/min) if intolerant; or bisoprolol.',
        },
        {
          type: 'text',
          content: 'White Coat Hypertension: suggested by markedly elevated clinic BP in the absence of end-organ damage, normal ambulatory BP readings at work/home, unusual variability, symptoms of hypotension, BP seemingly resistant to treatment. Ambulatory or home BP monitoring useful for identification and monitoring.',
        },
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Patients in whom secondary hypertension is suspected.' },
            { text: 'Younger patients (<40 years) with grade 2 or more severe hypertension in whom secondary hypertension should be excluded.' },
            { text: 'Patients with treatment-resistant hypertension.' },
            { text: 'Patients in whom more detailed assessment of HMOD would influence treatment decisions.' },
            { text: 'Patients with sudden onset of hypertension when BP has previously been normal.' },
            { text: 'Other clinical circumstances where more specialist evaluation is required.' },
            { text: 'When there is a need for 24-hour ambulatory BP monitoring.' },
            { text: 'Hypertensive emergencies and urgencies (when not feasible to treat and monitor in clinic) — refer to hospital A&E.' },
          ],
        },
      ],
    },
    {
      heading: 'Recommended Care Components for Hypertension',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Components', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['BP Measurement', 'Twice a year', ''] },
            { cells: ['Weight and BMI Measurement', 'Twice a year', 'Keep <23 kg/m² (non-Asian: <25 kg/m²)'] },
            { cells: ['Kidney Assessment (serum Cr/eGFR and uACR or uPCR)', 'Annually', 'Annual screening of serum Cr/eGFR and uACR in all patients, or uPCR if significant proteinuria'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers', 'Assessment on smoking habits and smoking cessation counselling'] },
            { cells: ['Lipid Profile', 'At or soon after diagnosis', 'All patients should be risk stratified (as recommended in the Lipids CPG). Targets of treatment should be personalised by levels of risk.'] },
            { cells: ['Cardiac Assessment', 'At diagnosis before initiating medications', 'Includes baseline ECG'] },
          ],
        },
      ],
    },
  ],
};


// ---------------------------------------------------------------------------
// 31 NUP CPG — Insomnia (Dec 2025)
// ---------------------------------------------------------------------------
const insomnia: CpgDocument = {
  id: 'cpg-insomnia',
  condition: 'Insomnia',
  source: '31 NUP CPG - Insomnia.pdf',
  reviewDate: 'Updated December 2025 by Dr Alicia Boo. Next review: December 2028.',
  advisors: 'Key FP: Dr Alicia Boo. Specialist: Dr Soo Shuenn Chiang. Contributing: Marissa Chin (NUHSP), Dr Benjamin Cheah, Toh Hui Moon (Snr Psychologist), Bindu Runy (Snr MSW).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Insomnia is a common complaint in the primary care setting. Many mental health issues surface as insomnia as patients consider it more acceptable. Sleep is important for growth, learning, development, and mood.' },
        {
          type: 'table',
          headers: ['Age Group', 'Recommended Sleep Duration'],
          rows: [
            { cells: ['Newborns', '14–17 hours/day'] },
            { cells: ['1–11 months', '12–15 hours/day'] },
            { cells: ['1–2 years old', '11–14 hours/day'] },
            { cells: ['3–5 years old', '10–13 hours/day'] },
            { cells: ['6–13 years old', '9–11 hours/day'] },
            { cells: ['13–17 years old', '8–10 hours/day'] },
          ],
        },
        { type: 'text', content: 'Blue light (iPads / phones / tablets) blocks melatonin. Circadian troughs (dips) occur in late afternoon and middle of the night. Sleep deprivation can cause learning problems, poor attention, hyperactivity, difficulty with memory-related tasks, obesity, and more frequent illnesses.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis — DSM-5 Criteria',
      blocks: [
        { type: 'list', items: [
          { text: 'Complaint of dissatisfaction with sleep quality/quantity — difficulty initiating OR maintaining sleep, OR early morning awakenings' },
          { text: 'Causing significant distress or impairment in functioning' },
          { text: 'Occurs at least 3 nights/week despite adequate opportunity to sleep' },
          { text: 'Present for at least 3 months' },
          { text: 'Sleep difficulty occurs despite adequate opportunity for sleep' },
          { text: 'Not better explained by another sleep-wake disorder (e.g. narcolepsy, breathing-related sleep disorder, circadian rhythm disorder, parasomnia)' },
          { text: 'Not attributable to physiological effects of a substance (drug of abuse, medication)' },
          { text: 'Coexisting mental disorders and medical conditions do not adequately explain the predominant complaint of insomnia' },
        ]},
        { type: 'text', content: '40–50% of those with insomnia have comorbid mental illness. Ask about eczema, low mood, anxiety, restless legs (check ferritin, treat if needed), recent environmental changes, pain, drug/substance use, shift work, obstructive sleep apnoea symptoms, nocturnal seizures, stimulant ingestion (coffee/tea/nicotine/chocolates), and noisy environment.' },
      ],
    },
    {
      heading: 'Insomnia Severity Index (ISI) — Interpretation and Referral',
      blocks: [
        {
          type: 'table',
          headers: ['Total Score', 'Interpretation', 'Treatment / Referral Recommendations'],
          rows: [
            { cells: ['0–7', 'No clinically significant insomnia', 'Usual care'] },
            { cells: ['8–14', 'Subthreshold insomnia', 'TCU MSW within 8 weeks for self-help strategies, sleep hygiene, and monitoring of symptom progression'] },
            { cells: ['15–21', 'Clinical insomnia (moderate severity)', 'If no/low suicide risk: TCU Psychology (Short) FV for CBT-I within 4 weeks; TCU Dr HMC (first visit) for medication consideration. If moderate suicide risk: refer Psychiatry SOC (Direct access) with safety planning. If high suicide risk: refer ED.'] },
            { cells: ['22–28', 'Clinical insomnia (severe)', 'If no/low suicide risk: TCU Psychology (Short) FV for CBT-I within 2 weeks. If moderate suicide risk: refer Psychiatry SOC (Direct access) with safety planning. If high suicide risk: refer ED.'] },
          ],
        },
      ],
    },
    {
      heading: 'Special Situations — Delayed Sleep Wake Phase Disorder (DSWPD)',
      blocks: [
        { type: 'text', content: 'DSWPD occurs in 3–16% of youths. Not true insomnia but causes dysfunction due to school/societal demands. Normal sleep latency, maintenance and duration if allowed own schedule. Get sleep diary of 2-week duration.' },
        {
          type: 'table',
          headers: ['Management', 'Examples'],
          rows: [
            { cells: ['Bright light therapy', 'Open blinds/curtains to allow natural sunlight at appropriate timing'] },
            { cells: ['Bedtime fading (when >30 min between going to bed and falling asleep)', 'Temporarily set bedtime later, bring forward by 15 min every 2 nights (may take 7–10 nights). Avoid weekend sleep-ins and naps.'] },
            { cells: ['Chronotherapy (for motivated patients; principle of increasing sleep drive by keeping sleep <9 hours for adolescents)', 'Day 1: sleep 3am–11am; Day 2: 6am–2pm; Day 3: 9am–5pm; Day 4: 12pm–8pm; Day 5: 3pm–11pm; Day 6: 6pm–2am; Day 7: 9pm–5am; Day 8: 10pm–6am. Maintain for 2 months on weekends/holidays to "set" internal clock.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management — Non-Pharmacological (First Line)',
      blocks: [
        {
          type: 'table',
          headers: ['Intervention', 'Details'],
          rows: [
            { cells: ['Cognitive Behavioural Therapy for Insomnia (CBT-I) — First line', 'Better long-term effectiveness than medications. 4–6 sessions including: (1) Cognitive restructuring; constructive worry time (15 min problem-solving at least 2 hours before bed). (2) Stimulus control, sleep restriction, relaxation training. (3) Psychoeducation on sleep biology and misconceptions.'] },
            { cells: ['Sleep Restriction Therapy', 'Step 1: Determine allowed time in bed (average sleep time + 30 mins, no less than 5 hours). Step 2: Set standard wake-up time. Step 3: Determine bedtime by counting back. Step 4: When sleep efficiency reaches 90%, increase time in bed by 15 min per week.'] },
            { cells: ['Sleep Hygiene', 'Avoid stimulants/caffeine/nicotine/alcohol. Exercise at least 2 hours before bedtime. No clock watching, no electronic devices in bed, nap before 3pm if needed but not >1 hour. Cool/dark environment.'] },
            { cells: ['Stimulus Control', 'Go to bed only when sleepy. Go to another room if unable to sleep within 15–20 min. Bedroom for sleep and sex only.'] },
            { cells: ['Relaxation Training', '1. Progressive muscle relaxation. 2. Diaphragmatic breathing. 3. Autogenic training.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management — Pharmacological',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Usual Dose', 'Common ADR', 'Remarks / Contraindications / Precautions'],
          rows: [
            { cells: ['Melatonin — Circadin 2mg prolonged release (S1; 1 box = 21 tablets)', '2mg 1–2 hours before bedtime, up to 13 weeks (can prescribe up to 52 weeks). First Rx: prescribe 12 weeks, supply 1 box first.', 'Not well-established. Vivid dreams, nightmares, dizziness, daytime sleepiness, headache, irritability, stomach cramps.', 'For sleep onset insomnia. Consider in elderly, cognitive dysfunction, glaucoma, BPH. Available as POM for ≥55 years (max 13 weeks). Off-label use <55 years or >13 weeks: patient must have had unsatisfactory trial of OTC melatonin. OTC supplement not routinely recommended as not of medicinal grade.'] },
            { cells: ['Promethazine — Sedating Antihistamine (S1, $0.20/tab)', '12.5–25mg ON', 'Sedation, dizziness', 'Caution in elderly (anticholinergic side effects: dry mouth/eyes, urinary hesitancy, confusion). Tolerance may develop. Hydroxyzine useful for insomnia with anxiety.'] },
            { cells: ['Hydroxyzine (S1, $0.20/tab)', '10–50mg ON', 'Sedation, dizziness', 'See promethazine remarks.'] },
            { cells: ['Chlorpheniramine (S1, $0.08/tab)', '4mg ON', 'Sedation, dizziness', 'See promethazine remarks.'] },
            { cells: ['Diphenhydramine (only URTI combination product in NUP formulary)', '25–50mg ON', 'Sedation, dizziness', 'See promethazine remarks.'] },
            { cells: ['Alprazolam/Xanax (NS, $0.20/tab)', '0.25mg ON', 'Somnolence, drowsiness, dizziness, ataxia', 'Adjunctive/bridge therapy. Limit to <2 weeks, once every 2–3 nights when necessary. Must document indication for repeated BZD prescriptions. Dependence risk. Avoid in opioid/substance use disorder. Increased risk of sedation, respiratory depression, coma, death with opioids. Refer psychiatry if unable to discontinue.'] },
            { cells: ['Lorazepam/Ativan (S1, $0.20/tab)', '0.5–1mg ON', 'Somnolence, drowsiness, dizziness, ataxia', 'See alprazolam remarks.'] },
            { cells: ['Clonazepam (S1, $0.37/tab)', '0.5mg ON', 'Somnolence, drowsiness, dizziness, ataxia', 'See alprazolam remarks.'] },
            { cells: ['Zopiclone (NS, $0.30/tab)', '3.75–15mg ON (3.75mg ON in elderly)', 'Somnolence, drowsiness, dizziness, ataxia, next-morning residual sedation', 'For sleep onset and sleep maintenance insomnia. Rarely may cause complex sleep-related behaviours (sleep-talking, sleepwalking) → injury/death. Avoid in opioid/substance use disorder or history of complex sleep-related behaviour. Increased risk of excessive sedation, cognitive impairment, delirium and falls in elderly.'] },
            { cells: ['Zolpidem ER (not available in NUP)', '6.25–12.5mg ON (6.25mg in elderly)', 'Somnolence, drowsiness, dizziness, ataxia, next-morning residual sedation', 'See zopiclone remarks.'] },
            { cells: ['Mirtazapine (S2, $$)', '7.5–30mg ON (up to 45mg/day for depression)', 'Somnolence, increased appetite, weight gain, dizziness. Caution in metabolic syndrome.', 'For patients with anxiety or depression. May cause cognitive/motor impairment. Suicidal ideation risk in young. Risk of hyponatraemia, serotonin syndrome, QT-prolongation, bleeding, mania activation. Avoid in angle-closure glaucoma. Caution in seizure disorders.'] },
            { cells: ['Fluvoxamine (S2, $$$)', '50–300mg/day in 2 divided doses', 'Somnolence, nausea/vomiting, diarrhoea, dizziness, nervousness, dry mouth. May cause sexual dysfunction.', 'For depression/anxiety.'] },
            { cells: ['Amitriptyline (S1, $)', '10–50mg ON (up to 300mg/day for depression)', 'Somnolence, weight gain, dry mouth, constipation, dizziness, headache. Avoid in elderly.', 'Antidepressant with sedative effect.'] },
            { cells: ['Trazodone (not in NUP formulary)', '25–50mg ON, up to 200mg ON', 'Orthostatic hypotension, syncope, oedema, blurred vision, diarrhoea, nasal congestion, weight loss. May cause priapism.', 'Not available in NUP.'] },
            { cells: ['Quetiapine (S2, $)', '25–100mg ON (higher for psychosis)', 'Sedation, nausea/vomiting, constipation, dry mouth, orthostatic hypotension, headache, weight gain', 'For patients with concomitant psychosis or BPSD. Can augment antidepressant effect. Higher risk of weight gain/diabetes/dyslipidaemia with olanzapine; higher EPS/tardive dyskinesia risk with risperidone. Rarely: neuroleptic malignant syndrome, seizures, agranulocytosis, increased mortality in elderly with dementia-related psychosis.'] },
            { cells: ['Risperidone (S2, $$$$)', '0.5–8mg/day (for psychosis/schizophrenia)', 'See quetiapine', 'See quetiapine remarks.'] },
            { cells: ['Olanzapine (S2, $$$$)', '2.5–30mg/day (for psychosis/schizophrenia)', 'See quetiapine', 'See quetiapine remarks.'] },
          ],
        },
        { type: 'text', content: 'Drug cost legend: $ <$10/month; $$ $10–<$20; $$$ $20–<$30; $$$$ $30–<$60; $$$$$ $60–<$90; $$$$$$ ≥$90/month. Amount payable depends on patient subsidy level and drug subsidy class (SDL S1/S2, Non-Standard NS). Unit prices before GST, accurate as of Dec 2023.' },
      ],
    },
    {
      heading: 'Role of Health Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Family Physician — TCU NUP Psychologist for CBT-I. Refer Dr Health and Mind Clinic (HMC, for ≥18 years with depression/anxiety/adjustment/insomnia). Manage stable patients discharged from HMC. Refer Psychiatry SOC for high suicide risk or exclusion list (addictions/legal/bipolar/new onset psychosis or OCD).' },
          { text: 'Care Manager in HMC (HMC CM) — Conduct depression, anxiety, insomnia, and suicide risk screening for first-time HMC Dr visit. Offer psychoeducation and basic self-help techniques.' },
          { text: 'Family Physician in HMC (HMC Dr) — Manage new and follow-up cases of depression/anxiety/adjustment disorders/insomnia ≥18 years old. Follow-up psychiatric step-down cases. Escalate to SOC if needed.' },
          { text: 'Psychologist — Psychological assessment and intervention. Conduct screening/assessment for severity, complexity, risk tendencies. Formulate treatment plan. Provide psychological and behavioural interventions.' },
          { text: 'Medical Social Worker — Basic sleep hygiene and self-help; care assessment; supportive counselling; crisis intervention; Advance Care Planning; non-medical financial assistance; information and community referral.' },
          { text: 'Financial Counsellor — Financial assessment and assistance for patients with medical bill difficulties.' },
        ]},
      ],
    },
    {
      heading: 'Referrals',
      blocks: [
        { type: 'list', items: [
          { text: 'Refer to Sleep Unit (ENT or Respiratory) if suspected obstructive sleep apnoea or restless legs syndrome.' },
          { text: 'Consider pointing patients to Family Service Centres (FSC) for supportive counselling (social issues). Search "FSC locator" with postal code.' },
          { text: 'TCU Medical Social Worker for brief supportive counselling (complex psychosocial setup) or subthreshold insomnia.' },
          { text: 'TCU Psychologist Counselling (Short)(First Visit) for non-pharmacological interventions — should be first line for primary insomnia.' },
          { text: 'TCU Dr Health and Mind (Long) FV if suspected underlying depression/anxiety requiring longitudinal follow-up or medications needed. May trial antihistamines or SSRIs.' },
          { text: 'Refer NUHS Psychological Medicine if failed trial of ≥2 agents at adequate dose and duration, or require prolonged BZD or Z-drug use.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 32 NUP CPG — Kidney Cysts (Nov 2024)
// ---------------------------------------------------------------------------
const kidneyCysts: CpgDocument = {
  id: 'cpg-kidney-cysts',
  condition: 'Kidney Cysts',
  source: '32 NUP CPG - Kidney Cysts.pdf',
  reviewDate: 'Reviewed November 2024 by Dr Sky Koh. Next review: November 2027.',
  advisors: 'Key FPs: Dr Charmaine Low, Dr Sky Koh. Specialist: Asst Prof Benjamin Goh (Consultant, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Kidney cysts are fluid-filled sacs that develop within the kidneys. They are typically non-cancerous and can vary in size from very small to large cysts that can cause discomfort and affect kidney function.' },
        { type: 'text', content: 'Epidemiology: Benign kidney cysts are common — estimated 30% of patients above 60 years old will be diagnosed with at least one simple kidney cyst through abdominal imaging. Prevalence increases with age and is higher in males than females.' },
        { type: 'text', content: 'Importance: In primary care, kidney cysts are often incidental findings. Primary care physicians must differentiate between benign and complex cysts as complex cysts are associated with increased risk of malignancy (may require further imaging, biopsy, or surgery). Kidney cysts can also be present due to autosomal dominant polycystic kidney disease, Von Hippel-Lindau syndrome, and prolonged haemodialysis in ESRD.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'In many cases, benign kidney cysts do not cause symptoms and are discovered incidentally. Larger or multiplying cysts may cause:' },
        { type: 'list', items: [
          { text: 'Flank or back pain' },
          { text: 'Urinary frequency' },
          { text: 'Haematuria' },
          { text: 'Hypertension' },
          { text: 'Urinary tract infections' },
          { text: 'Kidney stones' },
          { text: 'Chronic kidney disease in advanced cases' },
        ]},
        { type: 'text', content: 'Diagnosis: Kidney cysts are commonly diagnosed through imaging — ultrasound kidneys in primary care. CT and MRI can also visualise size, number, and characteristics.' },
        { type: 'text', content: 'Classification: Kidney cysts detected on CT or MRI are classified using the Bosniak classification system (2019). Ultrasound kidneys can risk-stratify cysts for further imaging.' },
        {
          type: 'table',
          headers: ['Type', 'US Appearance', 'Recommendation'],
          rows: [
            { cells: ['Simple', 'Thin smooth wall; anechoic, no septa, calcification or solid component', 'No follow-up required, unless symptomatic'] },
            { cells: ['Complex (lower risk, <6cm, risk of malignancy <1%)', 'Few thin septa; septa and wall may appear echogenic; may have fine calcifications/milk of calcium; small cyst (<6cm)', 'Look for previous US or CT to assess change in size. If not available, repeat imaging in 1 year. If stable, discuss with patient; no follow-up required unless symptomatic.'] },
            { cells: ['Complex (higher risk)', 'Thickened hyperechoic wall; thickened septa or many thin septa; multiple coarse calcium calcifications; any one cyst ≥6cm', 'Refer Urology (Routine)'] },
            { cells: ['Complex (high suspicion)', '≥1 hyperechoic thick or irregular walls or multiple thickened septa', 'Refer Urology (Early)'] },
            { cells: ['Highly suspicious for malignancy', 'Solid nodule; presence of vascularity inside index lesion (with Doppler)', 'Refer Urology (Direct Access)'] },
          ],
        },
      ],
    },
    {
      heading: 'Bosniak (CT) Classification of Kidney Cysts',
      blocks: [
        {
          type: 'table',
          headers: ['Bosniak Class', 'CT Appearance', 'Risk of Malignancy (%)', 'Recommendation'],
          rows: [
            { cells: ['I', 'Thin smooth wall (≤2mm) which may enhance; homogenous simple fluid; no septa, calcification or solid component', '0%', 'No follow-up required, unless symptomatic'] },
            { cells: ['II', 'Thin smooth wall (≤2mm); few hairline thin septa (≤2mm); septa and wall may enhance; may have fine calcifications; small hyperdense cysts (<6cm)', '1%', 'Look for previous US or CT. If not, repeat imaging in 1 year. If stable, no follow-up unless symptomatic.'] },
            { cells: ['II-F', 'Minimally thickened (3mm) enhancing wall, or smooth minimal thickening (3mm) of ≥1 enhancing septa, or many (≥4) hairline thin septa (≤2mm); multiple coarse calcifications; large hyperdense cysts (≥6cm)', '1–38%', 'Refer Urology (routine)'] },
            { cells: ['III', '≥1 enhancing thick (≥4mm) or enhancing irregular walls or septa', '50%', 'Refer Urology (early)'] },
            { cells: ['IV', '≥1 enhancing nodule(s)', '>90%', 'Refer Urology (direct access)'] },
          ],
        },
      ],
    },
    {
      heading: 'Management and Referral',
      blocks: [
        { type: 'text', content: 'Recommended Follow-Up: (1) Simple renal cysts are benign and do not require further follow-up imaging. (2) Complex cysts, large size, multiple cysts, solid nodule, thick septa, multiple calcification should be referred to Urology for further imaging.' },
        { type: 'text', content: 'Other Indications for Referral to Urology:' },
        { type: 'list', items: [
          { text: 'Patients with symptomatic kidney cysts' },
          { text: 'Patients with multiple cysts and family history suggestive of polycystic kidney disease or Von Hippel-Lindau syndrome' },
          { text: 'Incidental findings of hydronephrosis, stone, or suspected tumour — refer urgently to Urology (direct access)' },
        ]},
        { type: 'text', content: 'Indications for Referral to Emergency Department:' },
        { type: 'list', items: [
          { text: 'Cyst infection/rupture with symptoms/signs: fever, flank pain, haematuria, hypotension' },
          { text: 'Hydronephrosis, stone or tumour with signs of urosepsis or severe renal impairment' },
        ]},
        { type: 'text', content: 'Things to Note: (1) Radiological results labelled "R1U — Unexpected" demand additional attention and must not be overlooked. Example: echogenic nodule with small eccentric cystic component and vascularity suggests possible renal cell carcinoma — referral is warranted. (2) For incidental renal cysts identified on US HBS where complexity could not be determined, further US kidneys is recommended.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 33 NUP CPG — Lipids (Dec 2025)
// ---------------------------------------------------------------------------
const lipids: CpgDocument = {
  id: 'cpg-lipids',
  condition: 'Lipids (Dyslipidaemia)',
  source: '33 NUP CPG - Lipids.pdf',
  reviewDate: 'Reviewed December 2025 by Dr Siau Kai Rong. Next review: December 2028.',
  advisors: 'Key FPs: Dr Siau Kai Rong, Dr Choong Shoon Thai, Dr Cheah Ming Hann. Specialist: Dr Khoo Chin Meng (Senior Consultant, Dept of Medicine, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Hyperlipidaemia is a major risk factor for coronary artery disease (CAD). Elevated LDL-C causes atherosclerosis. Low HDL-C is associated with increased CAD risk. Moderate to severe hypertriglyceridemia increases risk of pancreatitis. Healthy lifestyle (diet, physical activity, tobacco abstinence) with pharmacotherapy where indicated improves cardiovascular risk.' },
        { type: 'text', content: 'Epidemiology: National Population Health Survey 2022 — about 3 in 10 Singapore residents aged 18–74 reported hyperlipidaemia. Males (36.2%) higher than females (27.9%). Prevalence increases with age — from ~10% (18–29 years) to >50% (60–74 years).' },
      ],
    },
    {
      heading: 'Screening',
      blocks: [
        { type: 'text', content: 'Whom to screen:' },
        { type: 'list', items: [
          { text: 'All patients aged ≥40 years' },
          { text: 'All patients aged ≥18 years with risk factors for CAD (DM, multiple CAD risk factors, family history of CVD before age 50 in males or 60 in females, family history suggestive of FH)' },
          { text: 'All patients with established coronary heart disease, cerebrovascular disease, peripheral vascular disease, hypertension, DM, impaired fasting glycaemia, or impaired glucose tolerance — irrespective of age' },
          { text: 'All first-degree relatives of diagnosed familial hypercholesterolaemia patients' },
        ]},
        { type: 'text', content: 'Screening for lipids should be part of a global cardiovascular/cardiometabolic risk assessment. Consider screening for blood pressure and blood glucose concurrently.' },
        { type: 'text', content: 'Screening frequency: Annually, except low-risk individuals with results within LDL-C target levels and not on lipid-modifying therapy — repeat at 3-yearly intervals. May use fasting or non-fasting Lipid Panel (fasting preferred for high-risk/strong family history).' },
        { type: 'text', content: 'Non-fasting Lipid Panel: Be aware of possible over-diagnosis of hypertriglyceridaemia (post-meal TG slightly higher) and under-diagnosis of hyperlipidaemia (post-meal LDL-C slightly lower). For TG interpretation, may consider repeating fasting lipid profile before starting pharmacological therapy. For patients with non-fasting results close to threshold, may need earlier fasting recheck.' },
      ],
    },
    {
      heading: 'Risk Stratification and Treatment Goals',
      blocks: [
        { type: 'text', content: 'Overall CV risk provides the starting point for lipid management. Assess for medical conditions that confer very high/high risk. If none, calculate 10-year risk using SG-FRS-2023. Select statin of appropriate intensity. Consider further intensification if LDL-C above target despite appropriate statin.' },
      ],
    },
    {
      heading: 'Singapore-Modified Framingham Risk Score 2023 (SG-FRS-2023) — Men',
      blocks: [
        { type: 'text', content: 'Estimate 10-year CAD risk by allocating points for age, total and HDL cholesterol, smoking status, and systolic BP. Check total points against Table 1.2.' },
        {
          type: 'table',
          headers: ['Age', 'Points'],
          rows: [
            { cells: ['20–34', '-9'] }, { cells: ['35–39', '-4'] }, { cells: ['40–44', '0'] },
            { cells: ['45–49', '3'] }, { cells: ['50–54', '6'] }, { cells: ['55–59', '8'] },
            { cells: ['60–64', '10'] }, { cells: ['65–69', '11'] }, { cells: ['70–74', '12'] }, { cells: ['75–79', '13'] },
          ],
        },
        {
          type: 'table',
          headers: ['HDL Cholesterol mmol/L (mg/dL)', 'Points'],
          rows: [
            { cells: ['≥1.6 (60)', '-1'] },
            { cells: ['1.3–1.5 (50–59)', '0'] },
            { cells: ['1.0–1.2 (40–49)', '1'] },
            { cells: ['<1.0 (<40)', '2'] },
          ],
        },
        {
          type: 'table',
          headers: ['Total Cholesterol mmol/L (mg/dL)', 'Age 20–39', 'Age 40–49', 'Age 50–59', 'Age 60–69', 'Age 70–79'],
          rows: [
            { cells: ['<4.1 (160)', '0', '0', '0', '0', '0'] },
            { cells: ['4.1–5.1 (160–199)', '4', '3', '2', '1', '0'] },
            { cells: ['5.2–6.1 (200–239)', '7', '5', '3', '1', '0'] },
            { cells: ['6.2–7.2 (240–279)', '9', '6', '4', '2', '1'] },
            { cells: ['≥7.3 (≥280)', '11', '8', '5', '3', '1'] },
          ],
        },
        {
          type: 'table',
          headers: ['Systolic BP (mmHg)', 'If untreated', 'If treated'],
          rows: [
            { cells: ['<120', '0', '0'] },
            { cells: ['120–129', '0', '1'] },
            { cells: ['130–139', '1', '2'] },
            { cells: ['140–159', '1', '2'] },
            { cells: ['≥160', '2', '3'] },
          ],
        },
        {
          type: 'table',
          headers: ['Smoker', 'Age 20–39', 'Age 40–49', 'Age 50–59', 'Age 60–69', 'Age 70–79'],
          rows: [
            { cells: ['No', '0', '0', '0', '0', '0'] },
            { cells: ['Yes', '8', '5', '3', '1', '1'] },
          ],
        },
        {
          type: 'table',
          headers: ['Total Points', '10-Year Risk — Chinese (%)', '10-Year Risk — Malay (%)', '10-Year Risk — Indian (%)'],
          rows: [
            { cells: ['-5 to 0', '<1', '<1', '<1'] },
            { cells: ['1', '<1', '<1', '1'] },
            { cells: ['2', '<1', '1', '1'] },
            { cells: ['3', '<1', '1', '1'] },
            { cells: ['4', '1', '1', '1'] },
            { cells: ['5', '1', '1', '2'] },
            { cells: ['6', '1', '2', '2'] },
            { cells: ['7', '1', '2', '3'] },
            { cells: ['8', '2', '3', '4'] },
            { cells: ['9', '2', '3', '5'] },
            { cells: ['10', '3', '4', '6'] },
            { cells: ['11', '3', '5', '7'] },
            { cells: ['12', '4', '7', '10'] },
            { cells: ['13', '5', '9', '12'] },
            { cells: ['14', '7', '11', '15'] },
            { cells: ['15', '9', '14', '19'] },
            { cells: ['16', '11', '18', '24'] },
            { cells: ['17', '14', '22', '30'] },
            { cells: ['18', '18', '28', '37'] },
            { cells: ['19', '23', '34', '45'] },
            { cells: ['20', '28', '42', '54'] },
          ],
        },
      ],
    },
    {
      heading: 'SG-FRS-2023 — Women',
      blocks: [
        {
          type: 'table',
          headers: ['Age', 'Points'],
          rows: [
            { cells: ['20–34', '-7'] }, { cells: ['35–39', '-3'] }, { cells: ['40–44', '0'] },
            { cells: ['45–49', '3'] }, { cells: ['50–54', '6'] }, { cells: ['55–59', '8'] },
            { cells: ['60–64', '10'] }, { cells: ['65–69', '12'] }, { cells: ['70–74', '14'] }, { cells: ['75–79', '16'] },
          ],
        },
        {
          type: 'table',
          headers: ['Total Cholesterol mmol/L (mg/dL)', 'Age 20–39', 'Age 40–49', 'Age 50–59', 'Age 60–69', 'Age 70–79'],
          rows: [
            { cells: ['<4.1 (160)', '0', '0', '0', '0', '0'] },
            { cells: ['4.1–5.1 (160–199)', '4', '3', '2', '1', '0'] },
            { cells: ['5.2–6.1 (200–239)', '8', '6', '4', '2', '1'] },
            { cells: ['6.2–7.2 (240–279)', '11', '8', '5', '3', '2'] },
            { cells: ['≥7.3 (≥280)', '13', '10', '7', '4', '2'] },
          ],
        },
        {
          type: 'table',
          headers: ['Systolic BP (mmHg)', 'If untreated', 'If treated'],
          rows: [
            { cells: ['<120', '0', '0'] },
            { cells: ['120–129', '1', '3'] },
            { cells: ['130–139', '2', '4'] },
            { cells: ['140–159', '3', '5'] },
            { cells: ['≥160', '4', '6'] },
          ],
        },
        {
          type: 'table',
          headers: ['Smoker', 'Age 20–39', 'Age 40–49', 'Age 50–59', 'Age 60–69', 'Age 70–79'],
          rows: [
            { cells: ['No', '0', '0', '0', '0', '0'] },
            { cells: ['Yes', '9', '7', '4', '2', '1'] },
          ],
        },
        {
          type: 'table',
          headers: ['Total Points', '10-Year Risk — Chinese (%)', '10-Year Risk — Malay (%)', '10-Year Risk — Indian (%)'],
          rows: [
            { cells: ['0–8', '<1', '<1', '<1'] },
            { cells: ['9', '<1', '<1', '1'] },
            { cells: ['10', '<1', '1', '1'] },
            { cells: ['11', '<1', '1', '1'] },
            { cells: ['12', '<1', '1', '1'] },
            { cells: ['13', '1', '1', '2'] },
            { cells: ['14', '1', '1', '2'] },
            { cells: ['15', '1', '2', '3'] },
            { cells: ['16', '1', '2', '3'] },
            { cells: ['17', '2', '3', '4'] },
            { cells: ['18', '2', '4', '6'] },
            { cells: ['19', '3', '5', '7'] },
            { cells: ['20', '4', '7', '10'] },
            { cells: ['21', '5', '9', '12'] },
            { cells: ['22', '7', '11', '16'] },
            { cells: ['23', '8', '14', '20'] },
            { cells: ['24', '11', '18', '25'] },
            { cells: ['25', '14', '23', '31'] },
            { cells: ['26', '18', '29', '39'] },
            { cells: ['27', '22', '36', '47'] },
          ],
        },
      ],
    },
    {
      heading: 'Secondary Dyslipidaemia',
      blocks: [
        { type: 'text', content: 'Secondary dyslipidaemia should be excluded in any patient presenting with dyslipidaemia.' },
        { type: 'list', items: [
          { text: 'Causes of increased Total Cholesterol and LDL-C: Hypothyroidism, Nephrosis, Cholestatic liver disease (e.g. Primary Biliary Cirrhosis), Progestin or anabolic steroid treatment, Dysgammaglobulinaemia (SLE, Multiple myeloma), Protease inhibitors for HIV.' },
          { text: 'Causes of increased Triglyceridaemia and VLDL-C: Type 2 DM, Chronic renal failure, Excessive alcohol, Hypothyroidism, Obesity, Antihypertensives (thiazide diuretics, β-blockers), Corticosteroid therapy, Oral oestrogens/OCPs/pregnancy, Protease inhibitors for HIV.' },
        ]},
      ],
    },
    {
      heading: 'Hypertriglyceridaemia',
      blocks: [
        { type: 'text', content: 'TG levels >1.7 mmol/L are considered elevated. Association with CAD is attenuated after adjustment for other lipids. Very high TG (>4.5 mmol/L, especially >10 mmol/L) increases risk of acute pancreatitis — treat to reduce this risk. Statins reduce TG by 10–20%. For patients with TG ≤1.7 mmol/L, LDL-M can be used for monitoring but all should still have full lipid panel annually.' },
      ],
    },
    {
      heading: 'Familial Hypercholesterolaemia (FH)',
      blocks: [
        { type: 'text', content: 'Patients with LDL >4.9 mmol/L should be evaluated for FH. Refer to Genomic Assessment Centre (GAC) for genetic testing after excluding secondary causes. FH patients are at high/very high CV risk — goal LDL-C 2.6 or 1.8 mmol/L depending on additional CV risk. Screen all first-degree relatives; children from age 2 years.' },
        { type: 'text', content: 'Use Dutch Lipid Clinic Network (DLCN) criteria (preferred over Simon Broome). Treat patients with DLCN ≥6 as clinical FH with or without genetic test.' },
        {
          type: 'table',
          headers: ['DLCN Criterion', 'Score'],
          rows: [
            { cells: ['Verified causal genetic mutation (LDLR, ApoB, PCSK9)', '8'] },
            { cells: ['LDL-C ≥8.5 mmol/L', '8'] },
            { cells: ['LDL-C 6.5–8.4 mmol/L', '5'] },
            { cells: ['LDL-C 5.0–6.4 mmol/L', '3'] },
            { cells: ['LDL-C 4.0–4.9 mmol/L', '1'] },
            { cells: ['Tendon Xanthomata', '6'] },
            { cells: ['Arcus Cornealis (age <45 years)', '4'] },
            { cells: ['1st degree relative with premature CAD OR 1st degree relative with verified LDL-C above 95th percentile', '1'] },
            { cells: ['1st degree relative with tendon xanthomata or arcus cornealis OR children with LDL-C above 95th percentile', '2'] },
            { cells: ['Patient: premature coronary artery disease', '2'] },
            { cells: ['Patient: premature cerebral or peripheral artery disease', '1'] },
          ],
        },
        { type: 'text', content: 'DLCN Diagnosis: Definite FH ≥8 points; Probable FH 6–7 points; Possible FH 3–5 points; Unlikely FH <3 points. *Premature disease: before age 55 (men) or 60 (women).' },
        {
          type: 'table',
          headers: ['Simon Broome Criteria', 'Total Cholesterol', 'LDL-C'],
          rows: [
            { cells: ['Child/young person aged <16 years', '>6.7 mmol/L', '>4.0 mmol/L'] },
            { cells: ['Adult', '>7.5 mmol/L', '>4.9 mmol/L'] },
          ],
        },
      ],
    },
    {
      heading: 'Management — Drug Therapy',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Common Dose', 'Maximum Dose', 'Common ADR', 'Contraindications / Precautions'],
          rows: [
            { cells: ['Simvastatin 10/20mg tablets (S1)', '10–40mg ON', '40mg/day', 'Headache, myalgia, fatigue, constipation, flatulence, dyspepsia, nausea, abdominal pain', 'Caution: renal impairment, liver disease history, elderly. Contraindicated: active liver disease, transaminases >3×ULN, CK >5×ULN, pregnancy, breastfeeding. Patients on simvastatin >40mg may be maintained only if on that dose ≥12 months without muscle toxicity.'] },
            { cells: ['Atorvastatin (Lipitor) 10/20/40/80mg (S2)', '10–80mg OD', '80mg/day', 'Same as above', 'Same as above'] },
            { cells: ['Rosuvastatin (Crestor) 10mg (S2)', '5–20mg OD', '40mg/day (>20mg under specialist)', 'Same as above', 'Same as above'] },
            { cells: ['Lovastatin 20mg (S1)', '10–40mg ON', '80mg/day', 'Same as above', 'Contraindicated with itraconazole, ketoconazole, posaconazole, erythromycin, clarithromycin, telithromycin, HIV PIs, boceprevir, telaprevir, nefazodone, cyclosporin, gemfibrozil. Do not exceed 20mg with danazol, diltiazem, verapamil; 40mg with amiodarone, ticagrelor. Avoid >1L grapefruit juice/day.'] },
            { cells: ['Pravastatin 10/20mg (S2)', '10–40mg ON', '80mg/day', 'Same as above', 'Same class precautions.'] },
            { cells: ['Ezetimibe (Ezetrol) 10mg (S2)', '10mg OD', '10mg OD', 'Arthralgia, dizziness, URTI, diarrhoea, GGT increase. With statin: AST/ALT increase, myalgia, fatigue, headache.', 'Secondary prevention: reduces LDL-C 15–20% added to statin. Caution: severe renal impairment (CrCl <30mL/min), mild hepatic impairment (Child-Pugh A). Not recommended in moderate/severe hepatic impairment. Contraindication: active hepatic disease or unexplained transaminase elevations.'] },
            { cells: ['Evolocumab PCSK9 inhibitor (NUP: FH patients only)', 'SC 140mg every 2 weeks', '140mg every 2 weeks (fixed)', 'Injection site reactions, URTI symptoms, pruritus, arthralgia, back pain', 'Consider if LDL-C targets not reached despite maximally tolerated statin ± ezetimibe (especially post-ACS, recurrent ASCVD, polyvascular disease, FH). No routine biochemical monitoring needed. Contraindication: serious hypersensitivity to PCSK9 inhibitor.'] },
            { cells: ['Fenofibrate (S1; 100/300mg caps; Lipanthyl 160mg micronized tab)', 'Caps: 100–300mg OD; micronized: 160mg OD', 'Non-micronized: 400mg/day (300mg with statin); micronized: Lipanthyl Supra 160mg/day (200mg with statin)', 'Abdominal pain, nausea, vomiting, diarrhoea, flatulence, transaminases increased.', 'Can use in CKD stages 1–3 (reduce dose, monitor). CrCl <30mL/min: contraindicated. Contraindicated in primary biliary cirrhosis, pre-existing gallbladder disease. Gemfibrozil (delisted from NUP Dec 2024) should not be used with statins.'] },
            { cells: ['Cholestyramine (not available in NUP)', '4g once to four times daily', '16g/day', 'Constipation, nausea, vomiting, abdominal pain, headache', 'Contraindicated in complete biliary obstruction. Space at least 1 hour before or 4 hours after other medications.'] },
            { cells: ['Omega-3 Fish Oils (OTC)', '2–4g/day EPA and DHA', '4g/day', 'Fishy aftertaste, abdominal bloating/pain, diarrhoea. May worsen LDL-C.', 'Use in severe hypertriglyceridaemia when fibrates alone inadequate. No effect on LDL-C or CV mortality — not a substitute for statins. Caution with high dose (>3g/day) in patients at risk of bleeding or high LDL-C.'] },
          ],
        },
        {
          type: 'table',
          headers: ['% Effect on LDL-C', 'Simvastatin (S1)', 'Atorvastatin (S2)', 'Rosuvastatin (S2)', 'Lovastatin (S1)', 'Pravastatin (S2)'],
          rows: [
            { cells: ['-27', '10mg $', '', '', '20mg $', ''] },
            { cells: ['-34', '20mg $', '10mg $$', '5mg $', '40mg $', '40mg $$$$$'] },
            { cells: ['-41', '40mg $', '20mg $$', '10mg $$', '80mg $$', '80mg $$$$$$'] },
            { cells: ['-48', '', '40mg $$', '20mg $$', '', ''] },
            { cells: ['-55', '', '80mg $$$', '40mg $$$', '', ''] },
          ],
        },
        { type: 'text', content: 'Simvastatin dose limitations: Contraindicated with itraconazole, ketoconazole, posaconazole, erythromycin, clarithromycin*, telithromycin, HIV PIs, nefazodone, gemfibrozil, cyclosporin, danazol. Do not exceed 10mg with verapamil or diltiazem; 20mg with amiodarone, ranolazine, amlodipine; 40mg with ticagrelor. *If clarithromycin cannot be avoided, suspend lovastatin or simvastatin during treatment.' },
      ],
    },
    {
      heading: 'Initiating Therapy',
      blocks: [
        { type: 'list', items: [
          { text: 'Obtain baseline liver enzymes (ALT/AST) and CK if no recent result (<6 months). Take history of prior muscle symptoms to establish baseline.' },
          { text: 'Transaminases <3×ULN: do not routinely exclude from statin therapy.' },
          { text: 'Transaminases 3×ULN or more: consider referral to Gastroenterology. Refer to ED if >5×ULN or 300 IU/L (whichever lower).' },
          { text: 'CK ≥5×ULN: consider referral to General Medicine. CK ≥10×ULN: consider ED to rule out rhabdomyolysis.' },
          { text: 'Inform patients: notify immediately if muscle symptoms (pain, tenderness, cramping, weakness) or hepatotoxicity symptoms (fatigue, weakness, loss of appetite, jaundice). Blood sugar increases have been reported with statins. Check all contraindicated medications.' },
          { text: 'Initiate at lowest dose or dose required to achieve LDL-C/TG goal (see Statin Conversion Table).' },
        ]},
      ],
    },
    {
      heading: 'Monitoring Side-Effects',
      blocks: [
        { type: 'list', items: [
          { text: 'Abnormal liver enzymes: Stop therapy if transaminases >3×ULN. Repeat ALT/AST within 2–3 weeks, monitor till normal. May restart at lower dose if normalised. Stop permanently if serious liver injury with clinical symptoms/hyperbilirubinemia/jaundice.' },
          { text: 'Muscle symptoms or elevated CK: If mild/moderate symptoms AND/OR CK >3×ULN or 800 IU/L (lower): discontinue; evaluate other causes; rechallenge with same or lower statin to confirm causality; if confirmed, use low dose hydrophilic statin (rosuvastatin or pravastatin). After 2 months without statin, if symptoms persist consider autoimmune myositis.' },
          { text: 'Unexplained severe muscle symptoms or CK >10×ULN: discontinue statin and refer to Emergency Department.' },
          { text: 'Cognitive impairment: Stop statin. Generally reversible; variable time to onset (1 day to years) and resolution (median 3 weeks).' },
          { text: 'Order repeat Lipid Panel, ALT/AST at 2–3 months after initiation/intensification. Repeat CK if baseline abnormal, muscle symptoms, or statin + fibrate. Routine repeat ALT/AST/CK not needed if no dose increase and patient is asymptomatic.' },
        ]},
      ],
    },
    {
      heading: 'Combination Therapy and Special Considerations',
      blocks: [
        { type: 'text', content: 'Combination therapy: Statins reduce major CV events by 20–25% per 1 mmol/L LDL-C reduction. Ezetimibe lowers LDL-C by 15–20% with associated CV risk reduction when added to statin. PCSK9 inhibitors reduce LDL-C by additional 45–60% when added to statin (for select ASCVD or FH patients). Niacin: no incremental benefit when LDL-C <2.1 mmol/L on statin ± ezetimibe.' },
        { type: 'list', items: [
          { text: 'Children: Screen FH children from age 2 years. Offer specialist referral for children with possible/probable/definite FH for therapy recommendation.' },
          { text: 'Women: Statins contraindicated in pregnancy, planning to conceive, or breastfeeding.' },
          { text: 'Elderly (>75 years): Consider potential risk-reduction, adverse effects, drug-drug interactions, functional status, and patient preferences. Start at lowest dose; titrate gently. No need to reduce therapy if LDL-C <2.1 mmol/L and well-tolerated.' },
          { text: 'Renal disease: Statins did not significantly improve CV outcomes in ESRD on dialysis. Atorvastatin and simvastatin (max 40mg/day) do not need renal adjustment. Monitor CK and renal function. Fibrates contraindicated if CrCl <30mL/min.' },
          { text: 'Liver disease: If transaminases <3×ULN, statins and fibrates can be given at low starting dose with careful monitoring.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Follow-Up Intervals',
      blocks: [
        {
          type: 'table',
          headers: ['Criteria', 'Recommended TCU Frequency', 'Alternate Dr/CM Visit'],
          rows: [
            { cells: ['Achieved treatment target AND no complication', '6–12 months', '✓'] },
            { cells: ['Achieved fair level of control over past 4–6 months', '3–4 months', '✓'] },
            { cells: ['Not achieved target AND started on statin OR requires medication titration', '2–3 months', '✓'] },
          ],
        },
      ],
    },
    {
      heading: 'Referral to Hospital',
      blocks: [
        { type: 'list', items: [
          { text: 'Possible or definite FH — refer to specialist for genetic testing and cascade screening.' },
          { text: 'Pre-treatment ALT/AST 1.5–3×ULN (or 150 IU/L, whichever lower) or post-treatment persistently >3×ULN — refer Gastroenterology.' },
          { text: 'Pre-treatment CK ≥5×ULN — refer General Medicine.' },
          { text: 'CK ≥10×ULN — refer Emergency Department to rule out rhabdomyolysis.' },
          { text: 'LDL-C above target or TG persistently >4.5 mmol/L despite lifestyle changes and maximum tolerated drug therapy — refer Endocrinology.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components for Lipid Disorders',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Lipid Profile', 'Annually', 'Risk stratify all patients; receive disease and lifestyle education. Personalise treatment targets by risk level.'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers (unless change in habit)', 'Assess smoking habits (sticks/day) and provide smoking cessation counselling.'] },
            { cells: ['Serum Transaminases', 'Before starting statins and as clinically indicated (e.g. hepatotoxicity symptoms, statin dose increase)', 'Stop statin/fibrate if symptomatic.'] },
            { cells: ['Serum Creatine Kinase', 'Before starting statins and as indicated (muscle symptoms)', 'Stop medication if CK >3×ULN or ~800 IU/L (whichever lower).'] },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 34 NUP CPG — Thrombocytosis and Erythrocytosis (Apr 2023)
// ---------------------------------------------------------------------------
const thrombocytosisErythrocytosis: CpgDocument = {
  id: 'cpg-thrombocytosis-erythrocytosis',
  condition: 'Thrombocytosis and Erythrocytosis',
  source: '34 NUP CPG - Management Algorithm for Thrombocytosis and Erythrocytosis in Primary Care.pdf',
  reviewDate: 'Published April 2023.',
  advisors: 'Key FPs: Dr Tan Zhirong Julio, Dr Justin Chong, Dr Tan Yee Leng. Specialists: Dr Lee Shir Ying (Senior Consultant, Haematology-Oncology, National University Cancer Institute) and Dr Chee Yen Lin (Head & Senior Consultant, Haematology-Oncology, NUCI).',
  sections: [
    {
      heading: 'Management Algorithm for Thrombocytosis',
      blocks: [
        { type: 'text', content: 'Approach to elevated platelet count in primary care (above ULN):' },
        { type: 'list', items: [
          { text: 'Platelet ≥1000 x10⁹/L, OR ≥600 x10⁹/L with recent thrombosis/bleed → Urgent referral to haematology (within 2 weeks) or ED as clinically indicated.' },
          { text: 'Platelet ≥600 x10⁹/L → Routine referral to haematology.' },
          { text: 'Platelet ULN to <600 x10⁹/L with elevated WBC or haematocrit, or hepatosplenomegaly → (1) History and examination for secondary thrombocytosis; (2) Review previous platelet counts; (3) PBF, ESR and Iron Panel. Manage infection/inflammation/iron deficiency. If persists: refer haematology.' },
          { text: 'Platelet ULN to 450 x10⁹/L, no alarm signs → Repeat platelet count in 3 months.' },
          { text: 'Platelet >450–600 x10⁹/L for >3 months → Refer haematology.' },
          { text: 'Platelet ≥600 x10⁹/L at repeat → Refer haematology.' },
          { text: 'Platelet ULN to 450 x10⁹/L, no alarm signs, stable → Monitor in primary care 6–12 monthly.' },
        ]},
        {
          type: 'table',
          headers: ['', 'Examples'],
          rows: [
            { cells: ['Common causes of secondary thrombocytosis', 'Iron deficiency, inflammation, infection, recent blood loss/surgery, prior splenectomy, borderline high normal variant'] },
            { cells: ['Common causes of primary thrombocytosis', 'Essential thrombocytosis, chronic myeloid leukaemia'] },
            { cells: ['Alarm signs requiring haematology referral', '≥600 x10⁹/L (urgent if ≥1000 or thrombosis/bleeding); >450–600 x10⁹/L for >3 months; hepatosplenomegaly; significantly elevated WBC and/or haematocrit; abnormal PBF'] },
          ],
        },
      ],
    },
    {
      heading: 'Management Algorithm for Erythrocytosis',
      blocks: [
        { type: 'text', content: 'Approach to elevated haematocrit (HCT) in primary care (above ULN):' },
        { type: 'list', items: [
          { text: 'HCT >58% for male / >54% for female, OR recent thrombosis/neurologic symptoms → Urgent referral to haematology (within 2 weeks) or ED as clinically indicated.' },
          { text: 'HCT >52–58% for male / >48–54% for female → Routine referral to haematology.' },
          { text: 'Elevated WBC or platelet, or hepatosplenomegaly → Refer haematology.' },
          { text: 'HCT ULN to ≤52% male / ≤48% female with no alarm signs — Step 1: (1) History and exam for secondary erythrocytosis, check SpO₂; (2) Review previous haematocrits; (3) If SpO₂ <94% or OSA symptoms → refer Respiratory specialist; (4) Advise hydration, stop smoking, stop haematinics, stop diuretics if possible; (5) Manage weight and hypertension; (6) Repeat NON-FASTING FBC in 3 months.' },
          { text: 'HCT still elevated >3 months — Step 2: (1) Advise hydration, stop smoking, stop haematinics/diuretics if possible; (2) Repeat FBC and PBF in 3 months + LFT, GGT, Creatinine, Calcium if none in last 6 months.' },
          { text: 'HCT remains elevated >6 months → Refer haematology. (Urgent if alarm signs present.)' },
        ]},
        {
          type: 'table',
          headers: ['', 'Examples'],
          rows: [
            { cells: ['Common causes of secondary erythrocytosis', 'Dehydration/diuretics/fasting, smoking, Gaisbock syndrome (obesity + hypertension), obstructive sleep apnoea, liver and kidney cysts, borderline high normal variant, chronic hypoxic states (COPD, right-to-left cardiac shunt)'] },
            { cells: ['Common causes of primary erythrocytosis', 'Polycythaemia rubra vera, idiopathic erythrocytosis'] },
            { cells: ['Alarm signs requiring haematology referral', 'Recent thrombosis or neurologic symptoms (headache, dizziness, blurring of vision); HCT >52% for males / >48% for females; hepatosplenomegaly; significantly elevated WBC and/or platelets; abnormal PBF'] },
          ],
        },
      ],
    },
    {
      heading: 'FAQs',
      blocks: [
        { type: 'list', items: [
          { text: 'Thrombocytosis: Our lab ULN is 360 x10⁹/L but referral threshold is 450 x10⁹/L — do we refer 360–450 x10⁹/L? Most patients with platelets <450 x10⁹/L that are not increasing over years are likely benign. Essential thrombocytosis criteria requires sustained >450 x10⁹/L. Monitor in primary care.' },
          { text: 'Thrombocytosis: Should constitutional symptoms (weight loss, night sweats, pruritus, flushing, erythromelalgia) be alarm signs? Majority do not have symptoms at presentation; other abnormalities will usually also be present. Continue holistic assessment.' },
          { text: 'Erythrocytosis: Why do LFT and calcium in erythrocytosis work-up? To screen for rare causes like erythropoietin-producing tumours (hepatocellular carcinoma, parathyroid adenoma/carcinoma).' },
          { text: 'Erythrocytosis: If referred to ENT/Respiratory for OSA, do we still follow the algorithm? Yes — specialists may not agree that erythrocytosis is from OSA, and the patient may have another concurrent cause.' },
          { text: 'Erythrocytosis: If persistent erythrocytosis found on review of previous haematocrits, start from "HCT remains elevated >3 months or >6 months" diamond in the algorithm.' },
          { text: 'Erythrocytosis: At 3-month and 6-month marks — ensure haematocrit is taken as NON-FASTING sample (fasting + diuretics/OHAs can cause haemoconcentration). Advise hydration, stop smoking, stop haematinics, stop diuretics, manage hypertension and obesity. Some Gaisbock syndrome patients may take >6 months to decline. If persistently elevated >6 months, refer haematology to exclude polycythaemia rubra vera or idiopathic erythrocytosis.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 35 NUP CPG — Management of Acne and Skin Infections (Jan 2026)
// ---------------------------------------------------------------------------
const acneSkinInfections: CpgDocument = {
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
  id: 'cpg-back-pain',
  condition: 'Acute and Recurrent Back Pain',
  source: '36 NUP CPG - Management of Acute and Recurrent Back Pain in Primary Care.pdf',
  reviewDate: 'Reviewed March 2025 by Dr Teo Hon Wei / Dr Ma Yueyun / Dr Zhang Zhi Peng. Next review: March 2028.',
  advisors: 'Key FPs: Dr Teo Hon Wei, Dr Ma Yueyun. Specialist: Dr Muhammad Nazrul (Consultant, Orthopaedic Surgery, NUH). Input: Dr Tan Jun Hao (Assoc Consultant, Orthopaedic Surgery, NUH).',
  sections: [
    {
      heading: 'Background and Key Messages',
      blocks: [
        { type: 'list', items: [
          { text: 'Acute back pain is common and lasts less than 3 months.' },
          { text: 'Pain is generally non-specific; precise and exact diagnosis is often not possible or necessary.' },
          { text: 'After acute episodes, there may be persistent or fluctuating pain for a few weeks to months.' },
          { text: 'Even in the presence of severe pain that limits activities initially, this tends to improve, with possible recurring episodes.' },
          { text: 'Acute back pain does not cause prolonged loss of function unlike chronic back pain.' },
          { text: 'Chronic back pain = persistent pain >3 months (different from recurrent: episodic acute <3 months with symptom-free periods in between).' },
          { text: 'Patients with chronic back pain are more likely to report loss of function or activity restrictions.' },
          { text: 'Consider specialist review for chronic back pain despite adequate education, reassurance, analgesia and trial of physiotherapy.' },
        ]},
        { type: 'text', content: 'Key Messages: (1) Episodes mostly short-lived (improve within 4 weeks) — reassurance is very helpful. (2) In the absence of red flags, investigations in the first 4–6 weeks do not provide clinical benefit. (3) Encourage patients to remain active: resume usual activities including work as soon as possible. (4) Analgesia and physiotherapy may provide short-term symptom control. (5) Some interventions may be harmful: extended bed rest, extended use of opiates, NSAIDs or benzodiazepines.' },
      ],
    },
    {
      heading: 'Clinical Assessment',
      blocks: [
        { type: 'text', content: 'Rule out red flags first. If present, early investigations, urgent referrals to A&E or spine specialist need to be considered.' },
        { type: 'list', items: [
          { text: 'RED FLAGS: Features of cauda equina syndrome (new-onset incontinence, saddle anaesthesia, lax anal tone, progressively worsening lower limb neurological symptoms)' },
          { text: 'RED FLAGS: Weight loss, current or history of cancers' },
          { text: 'RED FLAGS: Significant trauma or history of osteoporosis' },
          { text: 'RED FLAGS: Fever, long-term steroids use, or other forms of immunosuppressant' },
          { text: 'RED FLAGS: Severe, unremitting night pain' },
        ]},
        { type: 'text', content: 'History: Duration, pain score, trigger, relieving factors, response to previous therapy; previous similar symptoms; activities associated with pain; presence of radiculopathy or claudication; early morning stiffness ≥1 hour; impairment on occupation and ADL; mood disorder (depression/anxiety) especially in chronic LBP.' },
        { type: 'text', content: 'Physical Examination: Focused and targeted. Always consider: (1) Inspection of back and posture (scoliosis, hyperkyphosis, loss of lumbar lordosis); (2) Palpation of spine for localised vertebral tenderness; (3) Lower limb neurological exam (strength, reflexes, sensation and gait).' },
        {
          type: 'table',
          headers: ['Nerve Root', 'Action'],
          rows: [
            { cells: ['L2', 'Hip Flexion'] },
            { cells: ['L3', 'Knee Extension'] },
            { cells: ['L4', 'Ankle Dorsiflexion'] },
            { cells: ['L5', 'Big toe Extension'] },
            { cells: ['S1', 'Ankle Plantarflexion'] },
          ],
        },
        { type: 'text', content: 'Special manoeuvres (if relevant): (1) Straight Leg Raise (SLR / Lasègue\'s sign) — positive when radicular pain (beyond ipsilateral knee, not just back or hamstring) occurs between 30–70° hip flexion. (2) Patrick\'s (FABER) test — positive when hip or buttock pain is elicited with ipsilateral leg flexed at knee, hip abducted and externally rotated; raises suspicion of hip or sacroiliac joint pathology. (3) Schober\'s test (when indicated) — mark 10cm above and 5cm below L5. On forward flexion, distance should increase ≥5cm (to total ≥20cm); if not, restriction in lumbar flexion suspected.' },
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'text', content: 'Laboratory: Most patients with acute LBP do not require investigations. Consider etiologies outside the spine (pancreatitis, pyelonephritis, nephrolithiasis, aortic aneurysm, herpes zoster). If suspicion of systemic illness (connective tissue disorder, inflammatory spondyloarthropathy, infection), consider ESR — a normal ESR can help exclude suspected inflammatory arthritis/infection but is non-specific if elevated.' },
        { type: 'text', content: 'Radiological: Earlier use (within first 4–6 weeks without red flags) is not associated with improved outcomes. Radiological findings are often abnormal in asymptomatic patients. Inappropriate imaging can trigger additional costly studies, unneeded treatments, and unwarranted surgery. Only plain X-rays available in NUP (AP and Lateral views; X-ray of SI joint if sacroiliitis suspected).' },
        { type: 'text', content: 'Indications for early radiological investigations: (1) Significant trauma (high energy injury) or low energy trauma in elderly. (2) Current/previous history of cancers. (3) Risk factors for spinal infections (fever, IV drug use, immunosuppression, recent sepsis, recent spine procedure). (4) High risk for vertebral compression fractures (advanced age, prolonged steroids, known osteoporosis).' },
        { type: 'text', content: 'Limitations of plain X-rays: May not be sensitive enough in certain scenarios. Some patients require urgent advanced imaging (MRI): cauda equina syndrome or significant progressive neurological deficits; very high suspicion of spinal infection or malignancy. These patients should be referred to A&E if clinically indicated or given urgent specialist appointments.' },
      ],
    },
    {
      heading: 'Treatment — Non-Specific Low Back Pain',
      blocks: [
        { type: 'list', items: [
          { text: 'Non-pharmacological: Patient education and reassurance (prognosis often good, most cases resolve with little intervention; use NUP MSK brochure). Encourage staying active and returning to usual activities as soon as possible. Avoid bed rest. Lifestyle modification (avoid twisting and bending, avoid heavy contact sports and strenuous activities). Physiotherapy — consider if symptoms last >2 weeks despite adequate analgesia trial.' },
          { text: 'NSAIDs: Strongest evidence for symptom relief in acute back pain. Use with caution/avoid in CKD 3 or worse, patients on antiplatelet/anticoagulant, elderly (use extreme caution even if Cr normal). No clear evidence any NSAID is superior; consider switching if first is ineffective. Prescribe at lowest dose, shortest duration possible (avoid >2 weeks continuous use).' },
          { text: 'Paracetamol ± Orphenadrine: Safer first line for patients with NSAID contraindications (asthmatics, CKD). Beware of sedation risks with Orphenadrine and adverse effects in elderly. Evidence weaker than NSAIDs.' },
          { text: 'Opioids/Tramadol: Only as alternative when other medications are contraindicated. Limit to a few days (not more than 2 weeks). Be aware of potential for abuse.' },
          { text: 'Antiepileptics: Usually for radicular pain. Gabapentin/Pregabalin have very low-level evidence for chronic radicular pain.' },
          { text: 'Topical analgesia: Low-level evidence for topical capsaicin; very little evidence for other topical analgesics.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Management Algorithm for Acute Back Pain',
      blocks: [
        { type: 'text', content: 'Initial presentation: Check for red flags. If red flags present → investigate and consider referral to A&E or Orthopaedics. If no red flags → give patient the "green light": advise to stay active and continue to work; explain and reassure (use MSK brochures); agree on a management plan; control symptoms; arrange review if needed; consider physio if appropriate (recurrent back pain without prior trial of physio; acute back pain with pain score ≥7 with functional impairment).' },
        { type: 'text', content: 'Initial 1–4 weeks: Expect improvements. Review if necessary. Consider physiotherapy (Physiofirst clinic if appropriate; back care education and advice; up to 3 sessions).' },
        { type: 'text', content: '4–6 weeks follow-up (if necessary): Recheck for red flags. If symptoms improving → reinforce green light advice. If not improving → consider investigations (X-rays); consider specialist referral if no improvement after >6–8 weeks.' },
      ],
    },
    {
      heading: 'Recurrent and Chronic Back Pain',
      blocks: [
        { type: 'list', items: [
          { text: 'For recurrent back pain, revisit history and physical examination to ensure no new symptoms or findings suggesting more serious aetiology (including red flags).' },
          { text: 'Management of a recurring episode (<3 months, no worsening/new worrying symptoms) is similar to acute back pain with conservative management.' },
          { text: 'Consider offering physiotherapy if not already done.' },
          { text: 'Consider referring to spine specialist if: chronic back pain >3 months despite appropriate conservative management; worsening symptoms or red flags; significant functional impairment (frequent work absence, ADL affected); recurrent back pain not well controlled with conservative management.' },
          { text: 'Patients with chronic pain are more likely to have underlying mood disorders (anxiety, depression) — consider screening.' },
        ]},
      ],
    },
    {
      heading: 'Referral to Spine Specialist',
      blocks: [
        { type: 'list', items: [
          { text: 'Refer immediately to A&E: New-onset cauda equina syndrome symptoms; high suspicion of spinal infection (febrile, septic, significant rest pain, spinal tenderness, risk factors); high energy injury with spinal fractures (RTA, fall from height).' },
          { text: 'Refer urgently to spine specialist: High suspicion of primary spinal malignancy or metastatic disease (including pathological fractures); compression fractures with persistent significant pain; severe unremitting or worsening radicular symptoms with PID features especially with neurological deficit. (Milder, stable symptoms may have a trial of conservative management first.)' },
          { text: 'Recurrent or chronic back pain not responding to adequate conservative management (should have trial of physiotherapy first after excluding red flags).' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 37 NUP CPG — Acute Coronary Syndrome (Jul 2025)
// ---------------------------------------------------------------------------
const acuteCoronarySyndrome: CpgDocument = {
  id: 'cpg-acs',
  condition: 'Acute Coronary Syndrome (ACS)',
  source: '37 NUP CPG - Management of Acute Coronary Syndrome.pdf',
  reviewDate: 'Published July 2025.',
  advisors: 'Key FP: Dr Kwan Yew Seng. Specialist: Dr Lim Toon Wei (Senior Consultant, Cardiology, National University Heart Centre, Singapore). Input: Emergency Medicine SAG Dr Anandan Gerard Thiagarajah; NUHSP: Mr Marvin Sim; Nursing: APN Liau Wei Fong.',
  sections: [
    {
      heading: 'Introduction and Classification',
      blocks: [
        { type: 'text', content: 'Cardiovascular disease (CVD) is the most common cause of mortality and morbidity worldwide. ACS is often the first clinical manifestation of CVD.' },
        { type: 'text', content: 'ACS is caused by disruption (rupture or erosion) of an unstable coronary artery atherosclerotic plaque with associated partial or complete coronary artery thrombosis and/or microemboli, resulting in diminished blood flow to the myocardium.' },
        { type: 'text', content: 'ACS includes 3 related clinical conditions: (1) Unstable angina; (2) NSTEMI; (3) STEMI.' },
        { type: 'text', content: 'Initial diagnosis and classification of ACS is based on: (1) Clinical history and symptomatology; (2) ECG interpretation; (3) Assessment of cardiac troponin.' },
        { type: 'text', content: 'Unstable angina: Transient myocardial ischaemia in the absence of significant myonecrosis (troponin not elevated). Characterised by prolonged (>20 min) rest angina; new onset severe angina; angina increasing in frequency, longer in duration, or lower in threshold; or angina after recent MI.' },
        { type: 'text', content: 'NSTEMI: Partially occluded artery → subendocardial ischaemia. STEMI: Completely occluded vessel → transmural ischaemia and infarction. ACS can be dynamic and patients may progress rapidly between types.' },
      ],
    },
    {
      heading: 'Diagnosis — Clinical Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Acute chest discomfort (pain, pressure, tightness, heaviness, or burning) is the leading presenting symptom.' },
          { text: 'Chest pain descriptors should be classified as cardiac, possibly cardiac, and likely non-cardiac. (Avoid term "atypical" though cardio e-referral still uses it.)' },
          { text: 'Chest pain-equivalent symptoms: dyspnoea, epigastric pain, pain in left or right arm or neck/jaw.' },
        ]},
      ],
    },
    {
      heading: 'History Taking and Physical Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'Focused history and accurate characterisation of presenting symptoms as soon as possible.' },
          { text: 'Vital signs promptly assessed, initial ECG ordered (may have been done by nursing in triage).' },
          { text: 'Physical examination to eliminate differential diagnoses and identify very high-risk/high-risk ACS features.' },
          { text: 'Focused PE: check all major pulses; measure BP in both arms; auscultate heart and lungs; assess for HF or circulatory compromise. Pulse and BP discrepancy = physical sign of aortic dissection.' },
        ]},
      ],
    },
    {
      heading: 'Differential Diagnoses of Acute Chest Pain',
      blocks: [
        {
          type: 'table',
          headers: ['Clinical Syndrome', 'Findings'],
          rows: [
            { cells: ['Pulmonary Embolism (Emergency)', 'Tachycardia + dyspnoea; pain with inspiration'] },
            { cells: ['Aortic Dissection (Emergency)', 'Connective tissue disorders (e.g. Marfan); extremity pulse differential; severe abrupt-onset pain + pulse differential + widened mediastinum on CXR; syncope'] },
            { cells: ['Oesophageal Rupture (Emergency)', 'Emesis, subcutaneous emphysema, pneumothorax with unilateral decreased/absent breath sounds'] },
            { cells: ['Noncoronary cardiac: Aortic Stenosis', 'Characteristic systolic murmur, tardus or parvus carotid pulse'] },
            { cells: ['Noncoronary cardiac: Aortic Regurgitation', 'Diastolic murmur at right of sternum, rapid carotid upstroke'] },
            { cells: ['Noncoronary cardiac: HCM', 'Increased or displaced LV impulse, prominent a wave in JVP, systolic murmur'] },
            { cells: ['Pericarditis', 'Fever, pleuritic chest pain, increased in supine position, friction rub'] },
            { cells: ['Myocarditis', 'Fever, chest pain, heart failure, S3'] },
            { cells: ['Oesophagitis, peptic ulcer, gallbladder disease', 'Epigastric tenderness; right upper quadrant tenderness, Murphy sign'] },
            { cells: ['Pneumonia', 'Fever, localised chest pain, may be pleuritic, friction rub'] },
            { cells: ['Pneumothorax', 'Dyspnoea and pain on inspiration, unilateral absence of breath sounds'] },
            { cells: ['Costochondritis / Tietze syndrome', 'Tenderness of costochondral junctions'] },
            { cells: ['Herpes Zoster', 'Pain in dermatomal distribution, triggered by touch; characteristic unilateral dermatomal rash'] },
          ],
        },
      ],
    },
    {
      heading: 'ECG Interpretation for Suspected ACS',
      blocks: [
        {
          type: 'table',
          headers: ['', 'NSTE-ACS', 'STEMI'],
          rows: [
            { cells: ['Electrocardiographic evidence', 'New/presumed new dynamic horizontal or down-sloping ST depression ≥0.5mm in ≥2 contiguous leads; and/or T-wave inversion >1mm in ≥2 contiguous leads with prominent R wave or R/S >1; or transient ST elevation', 'New/presumed new ST elevation ≥1mm in ≥2 anatomically contiguous leads (J-point) in all leads except V2–V3 (which require ≥2mm in men ≥40y, ≥2.5mm in men <40y, ≥1.5mm in women)'] },
            { cells: ['Other changes', 'Many have nonspecific ST/T changes or normal ECG. Absence of ECG evidence does not exclude ACS.', 'Posterior leads (V7–V9) should be obtained for suspected left circumflex occlusion (isolated ST depression ≥0.5mm in V1–V3). *ST changes may be seen in pericarditis, LVH, LBBB, Brugada, RV pacing, Takotsubo, early repolarisation — clinical correlation required.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management in the Polyclinic',
      blocks: [
        { type: 'list', items: [
          { text: 'Antiplatelet: Give aspirin loading dose 300mg orally if not contraindicated. Should be chewed (nonenteric coated) for faster onset. Loading dose applies even if already on aspirin.' },
          { text: 'Transfer patient to triage/treatment room. Inform nursing staff to call ambulance.' },
          { text: 'Oxygen: Supplement if SpO₂ <90%. Not recommended if SpO₂ >90% (not associated with clinical benefit).' },
          { text: 'Analgesia: Rapid and effective pain relief is important to prevent sympathetic activation. Sublingual GTN may be given ONLY in haemodynamically stable patients with SBP ≥90mmHg. Nitrates MUST NOT be given after recent PDE5 inhibitor use — avoid within 12 hours of avanafil, 24 hours of sildenafil/vardenafil, or 48 hours of tadalafil.' },
        ]},
      ],
    },
    {
      heading: 'Referrals — Rapid Access Chest Pain Clinic (RACPC)',
      blocks: [
        { type: 'text', content: 'For patients with chest pain suggestive of ischaemia, assessed as stable, and without ACS. Open to all NUP clinics. Clinic runs Mon–Fri at NTFGH. Appointments generally within 2–3 working days (Thursday/Friday referrals may be seen early the following week). Appointment paired with Treadmill Exercise ECG (TMX) test — patient must be able to do TMX. A blood test appointment may also be made.' },
        {
          type: 'table',
          headers: ['Inclusion Criteria', 'Exclusion Criteria'],
          rows: [
            { cells: ['Age ≥18 years', 'Suspected cardiac emergencies (suspected acute MI, severe/acute HF, unstable angina) — refer ED'] },
            { cells: ['Episode(s) of chest pain (unlikely to be musculoskeletal, pleuritic or gastric)', 'ECG abnormality: complete LBBB, >1mm resting ST depression, tachy/bradyarrhythmias — refer ED or Gen Cardio SOC'] },
            { cells: ['Baseline ECG done on referral day', 'Severe arterial hypertension (SBP >200 or DBP >110mmHg)'] },
            { cells: ['CV risk factors based on age/gender/DM/HT/HPL/smoking/ethnicity', 'On digoxin'] },
            { cells: ['No known CAD history OR CAD history >1 year prior with no existing Cardiology SOC', 'Existing/upcoming Cardiology SOC appointment in any PHI; normal CTCA/invasive angiogram in past 1 year'] },
          ],
        },
        { type: 'text', content: 'RACPC workflow for doctors: Order ECG for every referred patient. Ensure ECG is uploaded in Epic. Place correct referral order (Referral to Cardiology — Rapid Access Chest Pain Clinic — NTFGH). Order TCU in 2 weeks (to review RACPC results and chest pain symptoms). Send patient to NUP referral counter for RACPC appointment.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 38 NUP CPG — Acute and Chronic Gout (Nov 2025)
// ---------------------------------------------------------------------------
const gout: CpgDocument = {
  id: 'cpg-gout',
  condition: 'Acute and Chronic Gout',
  source: '38 NUP CPG - Management of Acute Gout and Chronic Gout in Primary Care.pdf',
  reviewDate: 'Updated November 2025 by Dr Zhang Zhi Peng. Next review: February 2028.',
  advisors: 'Key FP: Dr Zhang Zhi Peng. Specialists: Dr Amelia Santosa (Consultant, Rheumatology, NUH) and Dr Anita Lim (Senior Consultant, Rheumatology, NUH).',
  sections: [
    {
      heading: 'Key Take-Home Messages',
      blocks: [
        { type: 'list', items: [
          { text: 'Gout is a chronic condition — appropriate long-term ongoing treatment should be instituted if indicated.' },
          { text: 'Provide lifestyle management to all patients with gout.' },
          { text: 'Do not delay ULT for patients who meet ULT treatment criteria.' },
          { text: '"Start low, go slow" with ULT.' },
          { text: 'Treatment targets: <360 μmol/L for non-tophaceous gout; <300 μmol/L for tophaceous gout.' },
          { text: 'For patients on ULT: DO NOT stop ULT during an acute flare.' },
          { text: 'ULT can be initiated during acute flare — no need to wait until acute flare has resolved if adequate treatment is provided.' },
          { text: 'Monitor serum uric acid at least every 6 months (more frequently if on active titration of ULT).' },
        ]},
        { type: 'text', content: 'ULT Treatment Criteria (Table 1): (1) Frequent acute gout flares (≥2 per year); (2) Tophaceous gout; (3) Clinical or radiological findings of gouty arthropathy; (4) History of urolithiasis (urate calculi); (5) Urate nephropathy or any renal insufficiency (CKD 3 and above).' },
      ],
    },
    {
      heading: 'History, Presentation and Risk Factors',
      blocks: [
        { type: 'list', items: [
          { text: 'Acute onset of severe pain (maximum within 6–12 hours, up to 24 hours) and asymmetrical swelling affecting 1st MTPJ, ankle joints, and occasionally knees and small joints of hands (PIP joints).' },
          { text: 'Erythema of affected joints with warmth.' },
          { text: 'Recurrent 1st MTP joint symptoms (most common).' },
          { text: 'Strong family history of gout.' },
          { text: 'Remission within a few days to 1 week even without active treatment.' },
          { text: 'Beware of "grumbling gout" — uncontrolled and untreated gout attack.' },
          { text: 'Men > women (post-menopausal).' },
          { text: 'May present with symmetrical polyarthritis and fever — must exclude infection/septic arthritis.' },
        ]},
        { type: 'text', content: 'Co-morbidities/Risk Factors to Exclude: Diabetes, Hypertension, Hyperlipidaemia, Chronic kidney disease, Excessive alcohol, Purine-rich foods (animal organs, red meat), Excessive fructose (corn syrup, sweetened beverages), Smoking, Obesity, Diuretic use (increases uric acid by increasing reabsorption and decreasing secretion; prophylactic allopurinol not necessary unless symptomatic), Cyclosporine, and other drugs.' },
      ],
    },
    {
      heading: 'Physical Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'Body temperature, obesity (BMI), blood pressure.' },
          { text: 'Tender and swollen joints (monoarticular or asymmetric polyarticular) — commonly 1st MTPJ (Podagra), small finger joints (PIPJs), tarsal joints, ankle, elbow, and occasionally knee.' },
          { text: 'Deformity of affected joints in chronic gout.' },
          { text: 'Abdominal exam if history suggests alcoholic liver disease, PUD.' },
        ]},
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        { type: 'text', content: 'Gold standard: Presence of characteristic negatively birefringent needle-shaped urate crystals in joint aspiration fluid or tophus (not done in polyclinic).' },
        { type: 'list', items: [
          { text: 'FBC: Exclude infection, haematological disorder, anaemia from prolonged NSAIDs. Be aware TW and polymorphs can be high in acute attacks. Consider repeating 2–8 weeks after starting allopurinol.' },
          { text: 'Creatinine: Exclude renal disease causing hyperuricaemia and urate nephropathy.' },
          { text: 'Uric Acid: Baseline and treatment target. Do NOT use to confirm or exclude gout. Monitor minimally every 6 months. HYPERURICEMIA ≠ GOUT.' },
          { text: 'ALT and AST: Baseline to exclude hepatic impairment. Repeat 2–8 weeks after starting allopurinol.' },
          { text: 'Plasma Glucose: Detect DM, insulin resistance (metabolic syndrome).' },
          { text: 'Fasting Lipids: High TG and low HDL (metabolic syndrome).' },
          { text: 'ESR: Can help exclude other inflammatory arthritis. Non-specific if elevated. Corrected reference range: Male = Age/2; Female = (Age+10)/2. Repeat or trend if persistently raised without specific symptoms.' },
          { text: 'CK: Consider at baseline or if concern about colchicine-related myopathy.' },
          { text: 'X-Ray of relevant joints (not routine): Periarticular erosions ("punched-out" lesions), interosseous tophi, joint space narrowing, deformity/subluxation in late chronic tophaceous gout. Also look for soft tissue swelling and oedema in acute presentations.' },
        ]},
      ],
    },
    {
      heading: 'Gout Diagnosis and Differential Diagnoses',
      blocks: [
        { type: 'list', items: [
          { text: '1st episode of acute gout; 1st episode of acute onset periarticular gout (bursae at knee & olecranon, tendon sheaths); frequent gout flares (≥2/year); chronic tophaceous gout.' },
          { text: 'Inter-critical gout = symptom-free period between attacks. Important to recognise and start ULT if indicated. Untreated: time between attacks shortens, symptoms worsen.' },
        ]},
        { type: 'text', content: 'Differential diagnoses: Septic arthritis (may be difficult to distinguish, can co-exist with gout); Trauma (can trigger acute gout); Pseudogout (calcium pyrophosphate — more commonly knees, wrists, hips); Cellulitis (inflammatory signs extend to non-articular area with fever/chills); Pes planus with hallux valgus (especially in females).' },
        { type: 'text', content: 'Asymptomatic hyperuricaemia: Do not diagnose gout based solely on elevated uric acid. Avoid routine/screening serum uric acid without clinical findings. Non-pharmacological advice can be provided. No further workup or pharmacological treatment usually required.' },
      ],
    },
    {
      heading: 'Treatment Goals and Non-Pharmacological Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Lower serum uric acid, decrease acute flare frequency, promote crystal dissolution, prevent crystal/tophi formation.' },
          { text: 'Target: <360 μmol/L for non-tophaceous gout; <300 μmol/L for tophaceous gout.' },
          { text: 'Non-pharmacological: Low purine diet (refer dietician); lifestyle modification (reduce weight, avoid smoking and alcohol); adequate fluid intake (if not contraindicated); review and reduce diuretics if possible (e.g., in stable CHF or hypertensive patients — as first-line management).' },
        ]},
      ],
    },
    {
      heading: 'Acute Management — Pharmacological',
      blocks: [
        { type: 'list', items: [
          { text: 'Colchicine 500 mcg BD/TDS (3–5 days) ± NSAIDs. Side effects: gastritis, diarrhoea.' },
          { text: 'NSAIDs (Indomethacin, Naproxen, Ibuprofen, Diclofenac): Use with caution/avoid in CKD 3+, patients on antiplatelet/anticoagulant, elderly. Exclude contraindications: poorly controlled asthma, aspirin-intolerant asthma, uncontrolled hypertension, established CVD. Consider prophylactic PPI. Lowest dose and shortest duration. Avoid >2 weeks continuous use.' },
          { text: 'Colchicine dose in renal impairment: Reduce dose in renal impairment, avoid in moderate/severe. If eGFR ≤30mL/min and severe hepatic impairment: 0.5mg 2–3 times/week. CAUTION: Increased myopathy risk with concomitant statins metabolised by CYP3A4 (less likely with fluvastatin or rosuvastatin) — consider temporarily withholding statins during colchicine course.' },
          { text: 'Prednisolone ≤30mg/day (0.5mg/kg, whichever lower) in divided doses ± colchicine 500mcg TDS (3–5 days). Recommended for elderly, renal insufficiency, hepatic dysfunction, cardiac failure, PUD, NSAIDs hypersensitivity.' },
          { text: 'Joint aspiration and intra-articular triamcinolone injection (by qualified doctors; beware septic joints).' },
          { text: 'Other alternatives: Anarex, Panadeine, Tramadol, Paracetamol.' },
          { text: 'If already on allopurinol: DO NOT STOP ALLOPURINOL DURING ACUTE FLARE. Use colchicine 500mcg OM/BD as prophylaxis whenever initiating or adjusting allopurinol (until target uric acid achieved, up to 6 months). If flare occurs during prophylaxis: use higher acute treatment dose and reinstate prophylactic dose once flare resolves.' },
        ]},
      ],
    },
    {
      heading: 'Maintenance — Urate Lowering Therapy (ULT)',
      blocks: [
        { type: 'text', content: 'ULT Indications: (1) ≥2 acute gout attacks/year; (2) Tophaceous gout; (3) Clinical/radiological changes of gouty arthropathy; (4) Urate nephropathy/calculi; (5) Significant renal insufficiency (CKD 3+). Also consider: 1st flare with very high uric acid (>535 μmol/L) or 1st flare with history of urolithiasis.' },
        { type: 'text', content: 'Allopurinol (Xanthine Oxidase Inhibitor): Start 50–100mg/day, increase every 2–8 weeks guided by serum uric acid until target achieved. Max dose 800–900mg/day for normal renal function. "Start low, go slow."' },
        {
          type: 'table',
          headers: ['eGFR (ml/min/1.73m²)', 'Starting Dose of Allopurinol', 'Remarks'],
          rows: [
            { cells: ['<5', '50mg/week', 'CKD 4/5: consider referral to RAI SOC'] },
            { cells: ['5–15', '50mg twice a week', 'CKD 4/5: consider referral to RAI SOC'] },
            { cells: ['16–30', '50mg EOD', ''] },
            { cells: ['31–45', '50mg OM', ''] },
            { cells: ['46–60', '50–100mg OM', ''] },
            { cells: ['>60', '100mg OM', ''] },
          ],
        },
        { type: 'text', content: 'Allopurinol SCAR (Severe Cutaneous Adverse Reaction) risk factors — mnemonic RASHES: Renal impairment; Agent (concomitant diuretics); Starting dose (high); HLA-B*5801 positive; Escalation (rapid dose increase); Seniority (elderly). Monitor closely for early signs: fever, rashes, oral ulcers/severe sore throat, red or sore eyes. Repeat FBC, ALT, AST 2–8 weeks after starting/escalating allopurinol. SCARs include SJS, TEN, DRESS. Increase dose by 50–100mg at each review. In patients with CKD, caution with doses >300mg daily (uptitrate slowly). Max 100mg/day if CrCl <10mL/min.' },
        { type: 'text', content: 'Probenecid (Uricosuric): Not for CrCl <50mL/min (ineffective). Contraindicated in renal stones. May cause haemolytic anaemia in G6PD deficiency. Start 250mg BD × 2–4 weeks; increase 250mg every 4–6 weeks to max 2g/day in divided doses. Adequate hydration. Decreases tubular excretion of salicylate and penicillin; increases serum frusemide and augments diuretic action.' },
        { type: 'text', content: 'Febuxostat (Not in NUP): More effective in reducing uric acid than allopurinol 100–300mg daily. Costlier; restricted to rheumatologists. Reserve for failure of max allopurinol ± probenecid, or severe allopurinol allergy.' },
        { type: 'text', content: 'Others with modest uricosuric effect: Losartan, Fenofibrate, Atorvastatin.' },
        { type: 'text', content: 'Prophylaxis: Colchicine 0.5mg OD or BD at initiation of ULT until target uric acid achieved (up to 6 months). Reduce dose in renal impairment. CAUTION: Use colchicine with caution with concomitant statins, macrolides, or other CYP3A4-metabolised drugs (risk of colchicine toxicity: pancytopenia and myopathy).' },
      ],
    },
    {
      heading: 'HLA-B*5801 Testing',
      blocks: [
        { type: 'text', content: 'HLA-B*5801 testing prevents SCARs in allopurinol use. Not offered as standard screening in Singapore (overall value of routine genotyping is limited).' },
        { type: 'list', items: [
          { text: 'If HLA-B*5801 positive AND uric acid at target, no recent flares, tolerating allopurinol for >3 months → continue allopurinol with close monitoring; no need to refer specialist.' },
          { text: 'If HLA-B*5801 positive AND uric acid not at target/recent flare but tolerating allopurinol ≥3 months, OR newly initiated (<3 months) and tolerating well → discuss risks/benefits/alternatives; Option 1: Continue allopurinol with close monitoring ≥3 months; Option 2: Alternatives — Probenecid (if no contraindications) OR Febuxostat (increased CV risk in heart disease; refer Rheum if switching to febuxostat).' },
          { text: 'If HLA-B*5801 positive AND patient has not been started on allopurinol → Routine referral to Rheumatology.' },
        ]},
      ],
    },
    {
      heading: 'Referral to Rheumatologist',
      blocks: [
        { type: 'list', items: [
          { text: 'HLA-B*5801 positive AND not started on allopurinol, OR prefers alternatives with allopurinol <3 months, OR prefers alternatives with allopurinol >3 months but targets not met.' },
          { text: 'Significant CKD (CKD 4/5).' },
          { text: 'Tophaceous gout despite adherence to ULT.' },
          { text: 'Hypersensitivity or serious adverse effects to ULT.' },
          { text: '≥4 attacks/year despite reaching target serum uric acid.' },
          { text: 'Uric acid not at target despite allopurinol ≥500mg/day + triggers minimised.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components for Gout',
      blocks: [
        {
          type: 'table',
          headers: ['Recommended Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Serum Uric Acid', 'At baseline; ≥6 monthly thereafter', 'Target <360 μmol/L (non-tophaceous) or <300 μmol/L (tophaceous). Tailor to clinical indication.'] },
            { cells: ['Renal Function (Creatinine/eGFR)', 'At baseline', 'Exclude renal disease. Consider yearly if on periodic NSAIDs.'] },
            { cells: ['ALT, AST', 'At baseline; 2–8 weeks after starting allopurinol', 'Baseline to exclude hepatic impairment. Monitor for SCAR.'] },
            { cells: ['FBC', 'At baseline; 2–8 weeks after starting allopurinol', 'Exclude infection, haematological disorders. Monitor for leukocytosis and eosinophilia in SCAR.'] },
            { cells: ['ESR', 'At baseline (where applicable)', 'Consider to exclude other inflammatory arthritis.'] },
            { cells: ['Creatine Kinase (CK)', 'At baseline; 2–8 weeks after starting Colchicine; 3–6 monthly thereafter', 'Baseline before colchicine; exclude muscle pathology; monitor for colchicine myopathy.'] },
            { cells: ['Plasma Glucose', 'At baseline; consider yearly', 'Detect insulin resistance and DM (metabolic syndrome).'] },
            { cells: ['Fasting Lipids', 'At baseline; consider yearly', 'Detect dyslipidaemia (metabolic syndrome). Personalise targets.'] },
            { cells: ['X-ray of Relevant Joints', 'If clinically indicated', 'Consider to differentiate from other inflammatory arthritides.'] },
            { cells: ['Blood Pressure', 'Twice a year', 'Personalise target based on patient risk factors.'] },
            { cells: ['Weight and BMI', 'Twice a year', 'Keep BMI <23 kg/m² (non-Asian: <25 kg/m²).'] },
            { cells: ['Assessment of Diet and Lifestyle', 'Annually', 'Advise low purine diet, lifestyle modification, alcohol avoidance, smoking cessation.'] },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 39 NUP CPG — Chronic Coronary Syndrome (Jul 2025)
// ---------------------------------------------------------------------------
const chronicCoronarySyndrome: CpgDocument = {
  id: 'cpg-ccs',
  condition: 'Chronic Coronary Syndrome (CCS)',
  source: '39 NUP CPG - Management of Chronic Coronary Syndrome.pdf',
  reviewDate: 'Published July 2025.',
  advisors: 'Key FP: Dr Kwan Yew Seng. Specialist: Dr Lim Toon Wei (Senior Consultant, Cardiology, National University Heart Centre, Singapore). Input: NUHSP: Mr Marvin Sim; Nursing: APN Liau Wei Fong.',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Chronic Coronary Syndrome (CCS), also known as chronic/stable ischaemic heart disease or stable coronary artery disease. Refers to clinical presentations arising from structural or functional alterations related to chronic diseases of the coronary arteries or microcirculation.' },
        { type: 'text', content: 'CCS encompasses six clinical presentations: (1) Stable angina with suspected CAD ± dyspnoea*; (2) Stabilised symptom(s) after ACS or revascularisation*; (3) Asymptomatic CAD*; (4) New-onset HF with suspected CAD; (5) Vasospastic angina; (6) Microvascular angina. (*Covered in this CPG)' },
        { type: 'text', content: 'Primary goals of CCS management: Reduce incidence of first acute MI in patients with screening-detected CAD; alleviate symptoms; reduce recurrence of MI; prevent complications (HF, AF); improve quality of life. Achieved through pharmacological and non-pharmacological treatment including lifestyle interventions.' },
      ],
    },
    {
      heading: 'Pharmacological Treatment',
      blocks: [
        { type: 'list', items: [
          { text: '(A) Anti-Platelet Therapy: Use long-term low-dose aspirin monotherapy for secondary prevention. Long-term clopidogrel can be alternative to aspirin (not recommended if known CYP2C19 decrease/poor metaboliser). Low-dose aspirin associated with minimal bleeding risk; PPI may be required for high GI bleeding risk patients. Use PPI if gastric protection needed for clopidogrel or ticagrelor patients (note: omeprazole/esomeprazole reduce clopidogrel active metabolite — discuss with cardiologist via VPC if concerned). DAPT (aspirin + clopidogrel or ticagrelor) for patients after PCI — duration typically determined by cardiologist and communicated to PC.' },
          { text: '(B) Medications for Prevention of Angina: Beta-blockers first line unless contraindicated. CCB when beta-blockers contraindicated or unacceptable side effects. Combination dihydropyridine CCB + beta-blocker if initial beta-blocker unsuccessful. AVOID concurrent non-dihydropyridine CCB + beta-blocker (risk of heart block/bradycardia). Additional options: long-acting nitrates, ivabradine (not in NUP), ranolazine (not in NUP), trimetazidine — added to beta-blocker and/or CCB if additional anti-anginal therapy needed. AVOID nitrates + PDE-5 inhibitors (severe hypotension). Do not combine ivabradine with non-dihydropyridine CCB. Follow recommended dosing for long-acting nitrates to minimise nitrate tolerance.' },
          { text: '(C) Management of Co-morbidities: T2DM — consider SGLT2 inhibitor or GLP-1 RA with proven CV benefits regardless of HbA1c; target HbA1c ≤7% (less stringent ≤8% for frail/older/short life expectancy). Hypertension — use ACE inhibitor, ARB, or CCB as first-line; thiazide/thiazide-like diuretics as alternative; target BP <130/80 mmHg (less stringent <140/90 for elderly ≥85 years or symptomatic orthostatic hypotension). Dyslipidaemia — maximally tolerated statin ± ezetimibe; PCSK9i if needed; target LDL-C <1.8 mmol/L (most CCS); <1.4 mmol/L for history of ACS, recurrent events or additional CV risk factors; if target not feasible, aim for ≥50% reduction from baseline. CKD — ACE inhibitor or ARB titrated to max tolerated; add SGLT2 inhibitor for CKD with persistent albuminuria regardless of DM. Chronic HF — treatment based on HF type, fluid management, prognostic interventions; for reduced LVEF (≤40%): SGLT2 inhibitors, ARNI, MRA, and beta-blockers. AF — OAC monotherapy based on modified CHA₂DS₂-VASc score for new-onset AF without recent stent; refer cardiologist for new-onset AF with stent within past 12 months.' },
        ]},
      ],
    },
    {
      heading: 'Non-Pharmacological Treatment and Lifestyle',
      blocks: [
        {
          type: 'table',
          headers: ['Aspect', 'Advice'],
          rows: [
            { cells: ['BMI and Weight Management', 'Achieve and maintain healthy weight (BMI <23 kg/m²). Lose weight if required through recommended energy intake and increased physical activity (± pharmacological management).'] },
            { cells: ['Psychosocial', 'Avoid situations inducing psychosocial stress. Treat depression and anxiety through psychological or pharmacological interventions.'] },
            { cells: ['Sexual Activity', 'Sexual activity associated with low CV risk if CCS is stable and asymptomatic at low-to-moderate activity. PDE-5 inhibitors generally safe but NOT to be taken with nitrates (severe hypotension risk).'] },
            { cells: ['Patient Education', 'Educate on condition, importance of pharmacological and non-pharmacological interventions, self-care, medication adherence.'] },
          ],
        },
        { type: 'text', content: 'Exercise for CCS: Regular physical activity is associated with reduced cardiovascular and all-cause mortality. All individuals with established (long-standing) CCS should perform minimal physical activity recommendations. Applies to stable angina, asymptomatic/symptomatic stabilised <1 year after ACS or revascularisation, and asymptomatic/symptomatic >1 year after diagnosis or revascularisation. Asymptomatic patients with long-standing CCS intending intensive/competitive sports → refer cardiologist (may need exercise stress testing, functional imaging, echo). Inform patients that symptoms during exercise should prompt reassessment. Patients on dual antiplatelet should avoid bodily collision sports (especially with OAC due to haemorrhage risk). Exercise CONTRAINDICATED in: unstable conditions (uncontrolled HT or DM); anginal symptoms; high-grade arrhythmias (VF); decompensated HF; severe aortic dilatation; active thromboembolic disease.' },
      ],
    },
    {
      heading: 'Follow-Up and Monitoring',
      blocks: [
        { type: 'list', items: [
          { text: 'Schedule regular follow-up for all patients with CCS.' },
          { text: 'During follow-up: assess overall CV risk factors (especially dyslipidaemia, T2DM); review exertional and rest symptoms and their impact on daily activities; assess adherence to non-pharmacological advice and medications; remind about vaccinations (influenza, pneumococcal, COVID-19); refer to tertiary centre/specialist if required (HF, poorly controlled angina).' },
        ]},
      ],
    },
    {
      heading: 'Assessment of Acute Exacerbation of Chest Pain in CCS',
      blocks: [
        { type: 'text', content: '"Typical" chest pain (more likely cardiac): all three of — (1) Constricting/compressive discomfort front of chest radiating to neck/shoulders/jaw/arms; (2) Precipitated by physical exertion; (3) Relieved by rest or short-acting GTN within ~5 minutes. When only two of three features present: less likely cardiac.' },
        { type: 'text', content: 'For suspected cardiac chest pain in CCS: order resting 12-lead ECG as baseline. All patients with CCS and suspected cardiac chest pain should be offered referral to ED for further assessment or urgent cardiologist review depending on clinical picture.' },
      ],
    },
    {
      heading: 'Fitness Certification',
      blocks: [
        { type: 'list', items: [
          { text: 'Class 1, 2 and 3 licences: Angina — not fit until satisfactorily controlled. MI/CABG/unstable angina — not fit for at least 1 month. Coronary angioplasty — at least 1 week off driving; resume if recovery satisfactory.' },
          { text: 'Class 4, 5 and Vocational Licences: Completion of exercise stress test required — will need cardiologist certification.' },
        ]},
      ],
    },
    {
      heading: 'Referral Back to Cardiology SOC',
      blocks: [
        { type: 'list', items: [
          { text: 'Urgent review: New onset chest pain suspected to be ischaemic; exacerbation or recurrence of stable angina.' },
          { text: 'Urgent review: New onset or exacerbation of heart failure.' },
          { text: 'Urgent review: New onset AF that is highly symptomatic or with poor rate control (HR <40 or >110 bpm at rest).' },
          { text: 'Urgent review: Syncope.' },
          { text: 'Routine referral: Problems with employment, life insurance, or unacceptable lifestyle interference. Patient wishes to see cardiologist.' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        {
          type: 'table',
          headers: ['Care Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['Blood Pressure Measurement', 'Twice a year', ''] },
            { cells: ['Weight and BMI', 'Twice a year', 'Keep <23 kg/m² (non-Asian: <25 kg/m²)'] },
            { cells: ['Lipid Profile', 'Annually', 'Target LDL <1.8 mmol/L; <1.4 mmol/L for ACS history'] },
            { cells: ['Smoking Assessment', 'Annually for smokers; once-off for non-smokers', 'Smoking habit assessment and cessation counselling'] },
            { cells: ['Diabetes Screening', 'Annually (IFG/IGT) or every 3 years (normal glucose tolerance)', ''] },
            { cells: ['Kidney Function', 'Annually', 'More frequent if on ACE inhibitors. uACR annually or more frequently if abnormal.'] },
            { cells: ['Influenza Vaccination', 'Annually or per season', 'As per NAIS'] },
            { cells: ['Pneumococcal Vaccination', 'As per NAIS', ''] },
            { cells: ['Shingles Vaccination (Recombinant herpes zoster)', '2 doses at 2–6 month interval', 'Per NAIS and NCIS for patients ≥60 years'] },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 40 NUP CPG — Minor Fractures, Sprain and Strain in Upper Limbs (Nov 2025)
// ---------------------------------------------------------------------------
const upperLimbFractures: CpgDocument = {
  id: 'cpg-upper-limb-fractures',
  condition: 'Minor Fractures, Sprain and Strain — Upper Limbs',
  source: '40 NUP CPG - Management of Minor Fractures Sprain and Strain in Upper Limbs.pdf',
  reviewDate: 'Updated November 2025. Next review: March 2027.',
  advisors: 'Key FPs: Dr Teo Hon Wei, Dr Tan Juanmin, Dr Zhang Zhi Peng. Specialists: Dr Renita Sirisena (Consultant, Hand & Reconstructive Microsurgery, NUHS) and Dr Wang Mingchang (Visiting Consultant, Orthopaedic Surgery, NUHS).',
  sections: [
    {
      heading: 'Introduction and Principles',
      blocks: [
        { type: 'list', items: [
          { text: 'Strain: Tearing injury to muscle fibres from excessive tension or overuse.' },
          { text: 'Sprain: Tearing injury to one or more ligaments of a joint when joint is forced beyond limits of normal motion.' },
          { text: 'Fracture: Disruption in bone tissue from force exceeding bone strength, repetitive stress, or an invasive process.' },
        ]},
        { type: 'text', content: 'Acute management principles (PRICE): P — Protect from further damage (support/splint). R — Rest, avoid excessive weight bearing on injured side. I — Ice for 15 min every 2–3 hours (do not apply ice directly to skin). C — Compress with elastic bandage (not when sleeping). E — Elevate and support to reduce swelling/bruising. Avoid ice beyond first 24 hours (may impair healing by inhibiting inflammation). For strains/sprains, avoid prolonged rest. When pain improves, encourage gentle range-of-movement exercises. Always evaluate the joint above and below the site of injury.' },
        { type: 'text', content: 'RED FLAGS (refer ALL to ED): Unstable fractures requiring backslab/cast immobilisation or intra-articular fractures; fractures involving weight-bearing or long bones (exception: small avulsion/chip fractures without significant pain not involving a joint); open fractures or significant soft tissue injuries; acute dislocations; any injury with neurovascular compromise. Fracture lines may not be visible in acute fractures — if high clinical suspicion (severe pain, significant swelling, immobility, functional impairment), manage as possible fracture or review in 1–2 weeks.' },
      ],
    },
    {
      heading: 'Finger Sprains',
      blocks: [
        { type: 'text', content: 'Suggested investigation: XR Fingers AP and Lateral views.' },
        { type: 'list', items: [
          { text: 'Volar (Palmar) plate sprain (hyperextension injury, PIPJ or DIPJ pain): Treat with buddy splint to adjacent finger × 1–2 weeks. If avulsion fractures: splint and refer to hand surgery direct access.' },
          { text: 'Collateral ligament injury: Most managed conservatively with buddy splint and early mobilisation (within 2 weeks). EXCEPT: Ulnar collateral ligament injury of 1st MCP joint (hyperextension/hyperabduction; pain, swelling, ecchymosis over thenar eminence + instability) — refer to hand surgery direct access.' },
          { text: 'Traumatic flexor tendon avulsion (Jersey finger — FDP from distal phalanx): Inability to actively flex DIPJ. XR finger AP and Lateral. Splint PIPJ and DIPJ in slight flexion. ALL jersey finger injuries: refer hand surgeon urgently (within 1 week preferably).' },
        ]},
      ],
    },
    {
      heading: 'Fractures',
      blocks: [
        { type: 'list', items: [
          { text: 'Distal phalanx fractures: Tuft fractures and mallet finger (extensor terminal tendon ± avulsion) can be managed conservatively. Mallet finger requires extension splint. Refer mallet finger to hand surgery direct access. Refer acutely displaced, shortened, or angulated fractures to A&E.' },
          { text: 'Middle phalanx fractures: Assess for rotation, shortening, or angulation. Immobilise in gutter splint. Refer to hand surgery direct access. Displaced/shortened/angulated → A&E.' },
          { text: 'Proximal phalanx fractures: Often unstable → refer to A&E for immobilisation.' },
          { text: 'Metacarpal fractures (XR Hand PA and Oblique): 1st metacarpal — intra-articular (Bennett\'s & Rolando\'s) often require surgery; extra-articular can be managed conservatively with long thumb spica splint. 2nd–5th metacarpal — assess for angulation and scissoring; non-displaced require splint. Refer acute metacarpal fractures to ED. Small avulsion/chip fractures without significant pain may not need ED but need early hand surgery review (direct access).' },
          { text: 'Carpal bone fractures (XR Wrist AP and Lateral): All require immobilisation with backslab before HRM review for surgery. Refer acute carpal bone fractures to ED. Special attention to scaphoid fracture (XR Scaphoid view): Plain radiograph may miss early fractures; always request scaphoid view. Prevalence of occult fracture with negative plain radiograph ~25%. If high clinical suspicion (snuffbox tenderness), assume fracture until proven otherwise. Requires thumb spica slab.' },
          { text: 'Distal radius fractures (XR Wrist AP and Lateral): Colles\' fracture (dorsal angulation); Smith\'s fracture (volar angulation). Require splint/arm cast and early HRM review. Refer to ED for immobilisation (reduction if required). Small avulsion/chip fractures may not need ED — suggest firm wrist guard, HRM review.' },
        ]},
        { type: 'text', content: 'Follow-ups for fractures: Follow up with acute fractures within 1–2 weeks (repeat X-ray to ensure no significant displacement; ensure adequate pain control). Typical healing: 8–12 weeks. Consider specialist referral for: worsening/persistent pain, swelling, or loss of function; malunion, nonunion, or delayed union; injuries requiring claim/compensation or legal input.' },
      ],
    },
    {
      heading: 'Adhesive Capsulitis (Frozen Shoulder)',
      blocks: [
        { type: 'text', content: 'Common shoulder condition with pain, stiffness, and loss of function. Idiopathic; increased prevalence in hypothyroidism, diabetes, and women aged 40–60. Commonly resolves within 1–2 years but some patients may never fully regain function.' },
        { type: 'text', content: 'Clinical pearls: Dull, poorly localised pain, may radiate to biceps. Elevated arm or reaching behind back elicits pain and stiffness. Red flags: fever, malaise, weight loss, night sweats. Cardinal findings: reduced active and passive motion in all planes (primarily external rotation); in advanced stages, loss of natural arm swing with muscular atrophy. Diagnosed clinically; radiography to exclude other shoulder pathologies. Consider DM and hypothyroidism screening for at-risk patients.' },
        { type: 'text', content: 'Management: Analgesia; Physiotherapy (manual mobilisation); Intra-articular corticosteroid injection; Hydrodilatation (arthroscopic distension — high-volume local anaesthetic + corticosteroids + normal saline); Surgery (manipulation under anaesthesia and arthroscopic capsule release). Consider referral to orthopaedic surgeon if minimal improvement after 6–12 weeks of conservative management.' },
      ],
    },
    {
      heading: 'Common Upper Limb Tendinopathy',
      blocks: [
        { type: 'text', content: 'Terminology: Tendinopathy = continuum of tendon injuries. Tendinitis = acute inflammatory response. Tendinosis = non-healing, degenerative; largely devoid of inflammatory cells. Acute tendinitis can occur on a background of chronic tendinosis. Tendon pathology typically develops in hypovascular/watershed areas.' },
        { type: 'text', content: 'Management mainstays: Activity modification with relative rest (pain score ≤3 on VAS); Analgesia; Physiotherapy with rehabilitative exercises to gradually increase load-bearing capacity (for both acute and chronic).' },
        { type: 'text', content: 'Analgesia options: Short-term oral or topical NSAIDs/COX-2 inhibitors in acute tendinopathy; peritendinous corticosteroid injection ± fenestration (repeated injections may exacerbate chronic pain, lead to tendon rupture — NEVER inject into/around weight-bearing tendons e.g. Achilles); dry needling; extracorporeal shock wave therapy for treatment-refractory tendinopathy. Early isometric, concentric, and eccentric exercises are advantageous. Specialist referral if conservative therapy proves ineffective after 3–6 months.' },
        { type: 'list', items: [
          { text: 'Rotator Cuff Tendinopathy: Most common cause of shoulder pain. Rotator cuff = subscapularis, supraspinatus, infraspinatus, teres minor. Common presentations: pain/weakness with overhead movement, reaching behind back, lying on affected side. Treatment: Analgesia; rehabilitative exercise (rotator cuff + scapular stabiliser strengthening); subacromial corticosteroid injections for short-term pain relief when initiating physio. Specialist referral if symptomatic after 6 months of physiotherapy.' },
          { text: 'Epicondylitis: Lateral (tennis elbow) — overuse → tendinosis of extensor carpi radialis brevis; lateral elbow pain with gripping, reduced grip strength; tenderness ~1cm distal to lateral epicondyle with resisted wrist extension. Medial (golfer\'s elbow) — less common; flexor-pronator tendon origin at medial epicondyle; medial epicondyle tenderness with resisted forearm pronation/wrist flexion. Management: Analgesia; eccentric strengthening exercises; cock-up wrist braces (lateral) or counterforce straps; corticosteroid injection or shockwave therapy if conservative measures ineffective.' },
          { text: 'De Quervain\'s Tenosynovitis: Tendons of extensor pollicis brevis and abductor pollicis longus in 1st extensor compartment. Gradual onset radial-sided wrist pain worsened by gripping/lifting. Tenderness and swelling over first dorsal wrist extensor compartment at radial styloid. Provocative tests: Finkelstein manoeuvre (pain over first extensor compartment when passively adducting the hand ulnarward while maintaining thumb traction); Eichhoff manoeuvre (pain with ulnar deviation while clenching thumb in fist). Negative grind test (positive in 1st CMC osteoarthritis). Management pathway: Most — Analgesia (NSAIDs) + orthoses (long thumb spica); Some — OT/corticosteroid injections; Selected — Surgery if conservative fails. Review escalation if pain and function persistently affected after 4–6 weeks.' },
        ]},
      ],
    },
    {
      heading: 'Carpal Tunnel Syndrome',
      blocks: [
        { type: 'text', content: 'Common entrapment neuropathy — compression of median nerve under transverse carpal ligament. Characteristic: night awakening with symptoms, relieved by shaking hands (flick sign). Paraesthesia and pain in median nerve distribution. Late-stage: weakness in thumb abduction and opposition.' },
        { type: 'text', content: 'Causes: Mostly idiopathic. Predisposing conditions: rheumatoid arthritis, DM, pregnancy, hypothyroidism, obesity, acromegaly, previous wrist fractures. Occupational: repetitive forceful activities, vibratory tools.' },
        { type: 'text', content: 'Examination: Paraesthesia in palmar aspect of thumb, index, middle, and radial half of ring finger. Thenar eminence wasting (severe). Weakness of thumb abduction/opposition (severe). Provocative tests: Tinel\'s, Phalen\'s, Duran\'s. Complete upper extremity exam (neck, shoulder, elbow, wrist) to exclude other causes.' },
        { type: 'text', content: 'Management: Conservative — splinting to keep wrist in neutral position (usually nocturnal but can be continuous); corticosteroid injection; oral prednisolone 20mg daily × 10–14 days (less effective than injection). OT, nerve gliding exercises, activity modification. Referral to Hand Surgery: electrodiagnostic tests for atypical cases; surgical decompression for persistent/severe cases.' },
        { type: 'text', content: 'Wrist Splint (available in NUP treatment rooms for BBK and PIO): Maintains neutral wrist positioning; alleviates numbness and pain. Worn daily (even at night). Remove for hand washing, showering, home exercises. Recommended wearing time ≥3 weeks; overall treatment duration 6–8 weeks. Management pathway: Most — NSAIDs + wrist splint (refer to Nur for splint, BBK/PIO only; also available OTC); Some — OT (direct OT referral workflow, BBK/PIO only); Selected — Surgery if conservative fails.' },
      ],
    },
    {
      heading: 'Trigger Finger',
      blocks: [
        { type: 'text', content: 'Stenosing tenosynovitis preventing smooth motion of the gliding tendon, usually at the level of A1 pulley. Common in >50 years, especially females and diabetics. Commonly affects thumb, middle and ring fingers.' },
        { type: 'text', content: 'Symptoms: Pain and stiffness at volar aspect of MCPJ; snapping or popping sensation with digital flexion/extension; locking of finger in flexed position at PIPJ. Risk factors: repetitive forceful gripping.' },
        { type: 'text', content: 'Examination: Tenderness at volar MCPJ over A1 pulley; palpable nodule at flexor tendon. Green\'s Classification: Grade I — pain/history of catching, not demonstrable; Grade II — demonstrable catching with intact active extension; Grade IIIA — demonstrable catching requiring passive extension; Grade IIIB — catching with loss of active flexion; Grade IV — fixed flexion contracture of PIPJ.' },
        { type: 'text', content: 'Management: Conservative — Oval 8 splint; Corticosteroid injection; NSAIDs; OT and activity modification. Referral to Hand Surgery for persistent cases. Oval 8 Splint (available in NUP treatment rooms for BBK and PIO): Limits full finger flexion at PIP joint; reduces stress on inflamed tendons and pulleys. Available in 14 sizes (sizes 2–15). Recommended wearing time ≥3 weeks; overall treatment duration 6–8 weeks. Management pathway: Most — NSAIDs + Oval 8 splint; Some — OT; Selected — Surgery if conservative fails.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 41 NUP CPG — Minor Fractures, Sprains and Strains — Foot and Ankle (Dec 2023)
// ---------------------------------------------------------------------------
const footAnkleFractures: CpgDocument = {
  id: 'cpg-foot-ankle-fractures',
  condition: 'Minor Fractures, Sprains and Strains — Foot and Ankle',
  source: '41 NUP CPG - Management of Minor fractures, Sprains and Strains of the Foot and Ankle.pdf',
  reviewDate: 'Reviewed December 2023 by Dr Zhang Zhi Peng, Dr Ma Yueyun, Dr Tan Juanmin, Dr Amaris Lim.',
  advisors: 'Key FPs: Dr Ma Yueyun, Dr Tan Juanmin, Dr Amaris Lim. Key Contributors: Dr Valerie Tan Huali, Dr Zhang Zhi Peng, Dr Sky Koh Wei Chee. Specialist: Dr Hong Choon Chiet (Consultant, Orthopaedic Surgery, NUHS).',
  sections: [
    {
      heading: 'Introduction and Principles',
      blocks: [
        { type: 'list', items: [
          { text: 'Strain: Tearing injury to muscle fibres from excessive tension or overuse.' },
          { text: 'Sprain: Tearing injury to one or more ligaments of a joint when forced beyond normal motion.' },
          { text: 'Fracture: Disruption in bone tissue from force, repetitive stress, or invasive process.' },
        ]},
        { type: 'text', content: 'Acute management principles (PRICE): P — Protect (support/splint). R — Rest, avoid weight bearing on injured side. I — Ice 15 min every 2–3 hours (not directly on skin). C — Compress with elastic bandage (not when sleeping). E — Elevate to reduce swelling/bruising. Always evaluate joint above and below site of injury.' },
        { type: 'text', content: 'RED FLAGS (refer ALL to ED): Unstable fractures requiring backslab/cast or involving joint lines; fractures involving weight-bearing/long bones (exception: small avulsion/chip fractures without significant pain not involving a joint); open fractures or significant soft tissue injuries; acute dislocations; any injury with neurovascular compromise. If high clinical suspicion but negative X-ray, manage as possible fracture; otherwise review and repeat radiographs in 1–2 weeks.' },
      ],
    },
    {
      heading: 'Toe Fractures',
      blocks: [
        { type: 'text', content: 'Anatomy: Great toe has 2 phalanges (crucial for balance and locomotion). Lesser toes (2nd–5th) have 3 phalanges each (occasionally 2). Each toe has plantar and dorsal arteries and nerves — unusual to injure except in open or severe crush injuries. Most closed toe fractures can be treated conservatively with excellent outcomes.' },
        { type: 'text', content: 'Clinical Evaluation: Exclude open fractures. Assess severity of subungual haematoma (hallmark of distal phalangeal fracture). Clinical toe alignment and rotational deformity. Neurovascular status. Suggested investigation: XR Toe AP and Oblique views.' },
        { type: 'text', content: 'Management of toe fractures:' },
        { type: 'list', items: [
          { text: 'Subungual haematoma: Displaced/fractured nail → treat as open fracture. Intact nail <48h → consider referral to ED for trephination vs. nailbed laceration repair. If decline referral, counsel on possible nail loss and deformity.' },
          { text: 'Open fracture, distal neurovascular compromise, significant displacement/fracture dislocation → Refer to ED immediately.' },
          { text: '<18 years old → TCU Paediatric Orthopaedic Surgery 1–2 weeks.' },
          { text: 'Multiple toe fractures → TCU Orthopaedic Surgery 1–2 weeks.' },
          { text: 'Manage in polyclinic (closed, minimally displaced, single fracture in adult ≥18 years): Analgesia; buddy splint fractured toe to adjacent toe × 1–2 weeks; daily elevation and minimise walking on injured foot in first 2 weeks; avoid sports/jumping/running × 6–8 weeks. Most toe fractures heal within 6–8 weeks. Residual stiffness, pain, swelling may last 3–6 months. Scheduled follow-up not routinely required; arrange 6–8 week review at clinician\'s discretion. Offer up to 10–14 days MC, 14 days light duty (excuse boots).' },
        ]},
      ],
    },
    {
      heading: 'Metatarsal Fractures',
      blocks: [
        { type: 'text', content: 'Suggested investigation: XR foot AP and Oblique views.' },
        { type: 'list', items: [
          { text: 'Acute fractures: Most treated conservatively (elevation, ice, analgesia, immobilisation). Non-displaced or minimally displaced can be splinted conservatively. Significant displacement/angulation requires reduction before immobilisation. Refer acute metatarsal fractures to ED for immobilisation (backslab + non-weight bearing). Small avulsion/chip fractures not involving joint and without significant pain → early Orthopaedic Surgery review in 1–2 weeks.' },
          { text: 'CAUTION: Small avulsions/chip fractures involving the joint could represent Lisfranc injury or MTPJ collateral ligament avulsion → refer to ED. Lisfranc injury can present with seemingly minor X-ray findings (e.g. misalignment of 2nd MTPJ) — high index of suspicion required.' },
          { text: 'Stress fractures: Most commonly 2nd and 3rd metatarsals. Conservative management: 6–8 weeks rest and orthotics to offload metatarsals. Calcium and Vitamin D supplementation at clinician\'s discretion. Refer to Orthopaedic Surgery outpatient clinic in 2–4 weeks.' },
        ]},
      ],
    },
    {
      heading: 'Tarsal Bone Fractures',
      blocks: [
        { type: 'list', items: [
          { text: 'Talus, Navicular, Calcaneal fractures: Mostly from high-velocity trauma (fall from height, RTA). May be associated with ligamentous injuries or joint dislocations. Talus and navicular have increased risk of avascular necrosis. Investigations: XR foot AP and Oblique + XR ankle AP and Lateral (talus/navicular); XR calcaneum Axial and Lateral (calcaneal). Refer to ED in acute setting.' },
          { text: 'Calcaneal stress fractures: From repetitive stress on heel. Mild symptoms — activity restriction and heel inserts. Significant symptoms (pain/swelling with walking) — non-weight bearing with crutches until symptoms subside. XR calcaneum Axial and Lateral. Calcium and Vitamin D at clinician\'s discretion. Refer to Orthopaedic Surgery outpatient clinic in 2–4 weeks.' },
        ]},
      ],
    },
    {
      heading: 'Ankle Sprain',
      blocks: [
        { type: 'text', content: 'Ankle sprains are among the commonest sports injuries. Exclude ankle fracture with targeted physical exam and appropriate imaging. Initial management: PRICE. Nursing team can bandage sprained ankle. Refer to physiotherapy for rehabilitation (proprioceptive training, peroneal tendon strengthening and stretching ± ankle bracing). If swelling and bruising out of proportion to trauma → suspect occult fracture; consider temporary immobilisation + non-weight bearing 1–2 weeks; refer to ED if needed. Refer to Orthopaedic Surgery in 4–6 weeks for residual ankle instability, recurrent sprains, pain and swelling on re-attendance.' },
      ],
    },
    {
      heading: 'Ankle Fractures and Ottawa Ankle/Foot Rule',
      blocks: [
        { type: 'text', content: 'Ankle fractures are among the commonest orthopaedic injuries. Suggested investigation: XR ankle AP and Lateral views.' },
        { type: 'text', content: 'Ottawa Ankle/Foot Rule:' },
        { type: 'list', items: [
          { text: 'Radiographs of ANKLE only required if: Pain in malleolar region PLUS one of — bony tenderness at distal posterior edge of fibula (6cm) or tip of lateral malleolus; OR bony tenderness at distal posterior edge of tibia (6cm) or tip of medial malleolus; OR inability to bear weight (limping = bearing weight) both immediately and in consult room for 4 steps.' },
          { text: 'Radiographs of FOOT only required if: Pain in midfoot region PLUS one of — bony tenderness at base of 5th metatarsal; OR bony tenderness at navicular; OR inability to bear weight both immediately and in consult room for 4 steps.' },
          { text: 'Acute ankle fractures: Refer to ED for immobilisation (backslab + non-weight bearing). Small avulsion/chip fractures without significant pain may not require ED — early Orthopaedic Surgery review in 1–2 weeks; consider ankle brace.' },
        ]},
      ],
    },
    {
      heading: 'Follow-Ups',
      blocks: [
        { type: 'list', items: [
          { text: 'Scheduled follow-up for closed, minimally displaced toe fractures not routinely required.' },
          { text: 'Non-toe fractures: referred to ED for backslab or early orthopaedics review after stabilisation.' },
          { text: 'Bony and ligamentous injuries can take up to 6–9 months to heal. Symptoms usually improve progressively after initial 6–8 weeks.' },
          { text: 'Patients with initially negative radiographs but persistent symptoms: repeat assessment and radiographs; ensure adequate pain control and compliance to rest, elevation and weight-bearing restrictions.' },
          { text: 'Consider specialist referral for: worsening/persistent pain, swelling, or loss of function; malunion, nonunion, or delayed union; injuries requiring claim/compensation or legal input; any outstanding physician or patient concern.' },
        ]},
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 42 NUP CPG — Other Common Skin Conditions (Jan 2026)
// ---------------------------------------------------------------------------
const otherSkinConditions: CpgDocument = {
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

// ---------------------------------------------------------------------------
// 44/45 NUP CPG — MASLD (Nov 2025)
// ---------------------------------------------------------------------------
const masld: CpgDocument = {
  id: 'cpg-masld',
  condition: 'Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD)',
  source: '45 NUP CPG - Metabolic Dysfunction-Associated Steatotic Liver Disease.pdf',
  reviewDate: 'Updated November 2025 by Dr Phua Yiyong. Next review: November 2028.',
  advisors: 'Key FPs: Dr Amanda Loke, Dr Phua Yiyong. Specialist: Dr Mark Dinesh Muthiah (Senior Consultant, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Since 2023, MASLD is the new nomenclature for NAFLD/non-alcoholic fatty liver disease ("fatty liver") to better reflect the understanding of this liver disease. It lies on a spectrum: MASLD → MASH (metabolic dysfunction-associated steatohepatitis) → Fibrosis → Cirrhosis → HCC.' },
        { type: 'text', content: 'Importance: Most patients with MASLD are asymptomatic and receive care in primary care. Due to the multi-systemic and metabolic nature of the disease, patients with earlier stages are best managed in primary care. Early case identification, management and prognostication can mitigate huge morbidity and costs.' },
        { type: 'text', content: 'Epidemiology: Becoming the most common liver disease worldwide. Closely linked with rising obesity and metabolic syndrome. Local prevalence up to 40% (Goh GB, 2016).' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Most patients are asymptomatic and picked up incidentally via: health screening; raised liver enzymes; hepatic steatosis on imaging for other reasons; or when commencing medications requiring routine liver enzyme monitoring (e.g. statins, allopurinol).' },
        { type: 'text', content: 'If presenting with raised liver enzymes, MASLD usually shows: ALT 40–250 U/L (consider alternate pathology if higher); ALT higher than AST; some may have raised ALP; raised GGT (if done in external screening).' },
        { type: 'text', content: 'Diagnosis requires: (1) Hepatic steatosis on imaging or biopsy, AND (2) At least 1 of 5 cardiometabolic criteria:' },
        { type: 'list', items: [
          { text: 'BMI ≥23 kg/m² (or >25 for Caucasian) OR waist circumference >94cm (males) / >80cm (females)' },
          { text: 'Type 2 DM or pre-diabetes' },
          { text: 'Blood pressure ≥130/85 mmHg OR on specific antihypertensive treatment' },
          { text: 'Plasma triglycerides ≥1.70 mmol/L OR on lipid-lowering treatment' },
          { text: 'Plasma HDL ≤1.0 mmol/L (males) / ≤1.3 mmol/L (females) OR on lipid-lowering treatment' },
        ]},
        { type: 'text', content: 'Secondary causes of hepatic steatosis must be ruled out: large alcohol consumption (males >21 standard drinks/week; females >14/week); viral hepatitis (HepB and HepC — HepC is unsubsidised in NUP, test if high-risk behaviours); drug-induced liver injury (DILI from medication, CAM, supplements — refer LiverTox).' },
      ],
    },
    {
      heading: 'Initial Assessment',
      blocks: [
        {
          type: 'table',
          headers: ['Assessment Domain', 'Details'],
          rows: [
            { cells: ['History', 'Alcohol intake; concomitant medications; complementary and alternative medicines (CAM), herbs, supplements'] },
            { cells: ['Physical Examination', 'Blood pressure; BMI; waist circumference; hepatomegaly and stigmata of chronic liver disease'] },
            { cells: ['Imaging', 'Ultrasound of the liver'] },
            { cells: ['Lab — Comorbidities', 'HbA1c, lipid profile'] },
            { cells: ['Lab — Complications', 'FBC for thrombocytopenia; Liver function test (minimally AST/ALT)'] },
            { cells: ['Lab — Viral hepatitis', 'HBsAg, Anti-HBs antibodies; Anti-HCV for high-risk patients'] },
            { cells: ['Lab — Wilson disease', 'Strong family history of neurological or psychiatric illness → refer to gastroenterology for evaluation'] },
          ],
        },
      ],
    },
    {
      heading: 'FIB-4 Risk Stratification',
      blocks: [
        { type: 'text', content: 'Liver fibrosis is the key determinant of liver-related complications and mortality. FIB-4 is the preferred non-invasive test for MASLD — requires only simple blood tests (platelets, AST, ALT).' },
        { type: 'text', content: 'FIB-4 formula: Age (years) × AST (U/L) / [Platelet count (10⁹/L) × √ALT (U/L)]. Can be calculated at MDCalc. Note: FIB-4 may be inaccurate if conditions affect AST, ALT, or platelet count (e.g. low platelets from medication/infection/autoimmune thrombocytopenia; elevated AST/ALT from statins, alcohol, TCM). Higher rate of false positives in patients >65 years.' },
        {
          type: 'table',
          headers: ['FIB-4 Score', 'Management'],
          rows: [
            { cells: ['FIB-4 <1.3', 'Optimise metabolic and lifestyle in primary care. Repeat FIB-4: annually if T2DM or ≥2 cardiometabolic criteria; every 2 years if no T2DM and ≤2 cardiometabolic criteria.'] },
            { cells: ['FIB-4 1.3–2.67', 'Refer to gastroenterologist or for Vibration Controlled Transient Elastography (VCTE/Fibroscan) if available. If stiffness 8–10 kPa: intensive lifestyle/diet changes for weight loss. If stiffness >10 kPa: refer to gastroenterologist for specialised management. (Open access VCTE currently not available at NUP.)'] },
            { cells: ['FIB-4 >2.67', 'Refer to gastroenterologist.'] },
          ],
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Lifestyle: Abstain from regular alcohol (occasional 1–2 standard drinks/week permissible for special occasions). Regular physical exercise.' },
          { text: 'Metabolic comorbidities: DM — screen for diabetes in new MASLD with no known DM; manage per NUP DM CPG. Hypertension — per NUP CPG. Hyperlipidaemia — per NUP CPG.' },
          { text: 'Weight loss: Encourage >10% weight loss. Liver and cardiometabolic benefits begin at 5–7% weight loss. Target BMI 18.5–23 kg/m² (Asians) or 18.5–24.9 (Caucasians).' },
          { text: 'Vaccinations: Hepatitis A and B if non-immune. Influenza annually. Pneumococcal (18–64 years: one dose PPSV23; ≥65 years: one dose PCV13, then one dose PPSV23 1 year later).' },
          { text: 'Cancer Screening: Increased risk of colon and breast cancer in MASLD — adhere to current cancer screening recommendations. Insufficient evidence for HCC screening without cirrhosis.' },
        ]},
      ],
    },
    {
      heading: 'Management Algorithm',
      blocks: [
        { type: 'text', content: 'When incidental hepatic steatosis on imaging or raised liver enzymes → suspect MASLD → take history, PE, and investigations to exclude other causes. If other cause present → manage other liver diseases. If metabolic risk factors present → calculate FIB-4. If FIB-4 <1.3 → lifestyle modifications + metabolic comorbidity management + cancer screening + vaccinations → repeat AST, ALT, FBC at 1 year (T2DM or ≥2 metabolic risk factors) or every 2 years (no T2DM and <2 risk factors). If FIB-4 ≥1.3 → refer gastroenterologist. If absent risk factors with persistently raised liver enzymes or atypical features (≥2 family members with idiopathic/cryptogenic cirrhosis; features suggestive of Wilson\'s disease) → refer gastroenterologist.' },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'list', items: [
          { text: 'Annual FIB-4 scoring.' },
          { text: 'Good control of metabolic conditions: hypertension, diabetes, pre-diabetes, BMI, and hyperlipidaemia.' },
          { text: 'Up to date and appropriate vaccinations.' },
        ]},
      ],
    },
    {
      heading: 'Referrals — Elevated ALT Management',
      blocks: [
        { type: 'text', content: 'Refer to A&E: ALT >1000 IU; OR ALT at any level with signs of acute liver failure, jaundice with fever, or clinically ill.' },
        { type: 'text', content: 'Refer GE Direct Access: 200 ≤ ALT ≤ 1000 IU; solid mass (liver, pancreas, intra-abdominal) on imaging; jaundice with no fever; hepatomegaly, splenomegaly, ascites, oedema; cirrhosis suspected/newly diagnosed (raised bilirubin without jaundice, low albumin, low platelets); transaminitis with elevated globulin; unexplained weight loss (≥5% in 6–12 months).' },
        { type: 'text', content: 'Refer GE Routine: Persistently elevated ALT (120 ≤ ALT <200 IU) for ≥2 weeks (non-Hep B transaminitis); Hepatitis C.' },
        { type: 'text', content: 'For ALT elevated but <200 IU — Stepwise approach: (1) Review drugs/alcohol; (2) Review Hep B status; (3) Review Hep C status; (4) If both unknown, offer Hep B and Hep C screening with LFT. If clinically well and negative for both Hep B and C with no known cause: Repeat LFT in 1–2 weeks (ALT 120–200 IU) or 1–2 months (ALT normal to 120 IU). Based on repeat: if ≥120 IU → Table 1; if normal → repeat in 3–4 months; if raised but <120 → FBC, TFT, US liver. Final step: repeat LFT 3–4 months; if ≥120 IU → refer GE; if <120 IU and patient well → repeat in 6–12 months or discharge.' },
      ],
    },
    {
      heading: 'Role of Non-Doctor Team Members',
      blocks: [
        { type: 'list', items: [
          { text: 'Dietician: Dietary counselling to aid management of metabolic conditions, especially weight loss.' },
          { text: 'Care Managers: Adjuvant counselling for management of metabolic conditions.' },
          { text: 'Care Coordinators: Encourage uptake of preventive health measures (vaccinations, cancer screening).' },
        ]},
      ],
    },
  ],
};

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
  chronicHepatitisC,
  chronicKidneyDisease,
  copd,
  dementia,
  depression,
  diabetesMellitus,
  dyspepsia,
  earInfections,
  eczema,
  epilepsy,
  epistaxisInChildren,
  erectileDysfunction,
  heartFailure,
  hypertension,
  insomnia,
  kidneyCysts,
  lipids,
  thrombocytosisErythrocytosis,
  acneSkinInfections,
  backPain,
  acuteCoronarySyndrome,
  gout,
  chronicCoronarySyndrome,
  upperLimbFractures,
  footAnkleFractures,
  otherSkinConditions,
  psoriasis,
  masld,
];
