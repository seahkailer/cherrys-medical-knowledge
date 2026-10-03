import { CpgDocument } from '../types';

export const anaemia: CpgDocument = {
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
