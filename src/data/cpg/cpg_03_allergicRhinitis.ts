import { CpgDocument } from '../types';

export const allergicRhinitis: CpgDocument = {
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
