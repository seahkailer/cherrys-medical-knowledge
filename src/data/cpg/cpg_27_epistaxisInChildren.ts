import { CpgDocument } from '../types';

export const epistaxisInChildren: CpgDocument = {
  id: 'cpg-epistaxis-in-children',
  condition: 'Epistaxis in Children',
  source: '27 NUP CPG - Epistaxis in Children.pdf',
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
