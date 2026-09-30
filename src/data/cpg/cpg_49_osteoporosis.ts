import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 49 NUP CPG — Osteoporosis (Oct 2025)
// ---------------------------------------------------------------------------
export const osteoporosis: CpgDocument = {
  id: 'osteoporosis',
  title: 'Osteoporosis',
  category: 'Endocrine / Musculoskeletal',
  lastReviewed: 'October 2025',
  sections: [
    {
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content:
            'Key Family Physicians: Dr Christine Ng, Dr Cheah Ming Hann. Specialist Advisors: Dr Chionh Siok Bee (Senior Consultant, NUH Endocrine). Reviewed in October 2025 by Dr Christine Ng. Next review date: October 2028.',
        },
      ],
    },
    {
      title: 'Screening and Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'Who to Screen?',
        },
        {
          type: 'list',
          items: [
            'All post-menopausal females with OSTA (Age minus weight) > 20',
            'Post-menopausal females and males ≥ 65 years old with risk factors:',
            'Non-modifiable: family history of osteoporosis or fragility fractures, history of falls, prolonged immobility, height loss (>2cm within 3 years), early menopause (≤45 years old), presence of diseases that can lower bone density (e.g. prolonged untreated hyperthyroidism, inflammatory rheumatic disease, diabetes mellitus)',
            'Modifiable: low elemental calcium intake (<800mg/day for adults ≤50 years, <1000mg/day for adults >50 years), excessive alcohol (>2 units/day men, >1 unit/day women), smoking (any), low BMI, certain medications (≥5mg prednisolone/day, androgen deprivation therapy, tamoxifen in premenopausal women, proton pump inhibitors)',
          ],
        },
        {
          type: 'text',
          content:
            'Gold Standard Test for Diagnosis: Dual-Energy X-Ray Absorptiometry (DXA) of the hip and lumbar spine.',
        },
        {
          type: 'text',
          content:
            'Diagnosis of Osteoporosis (in male patients ≥ 50 years old or postmenopausal female patients): (1) BMD T-score ≤ −2.5 SD in femoral neck, total hip, or lumbar spine; and/or (2) history of fragility fracture. Fragility fracture is defined as a fracture that occurs as a result of minimal trauma, such as a fall from a standing height or less, or no identifiable trauma.',
        },
        {
          type: 'text',
          content:
            'When to Consider Treatment: (1) Osteoporosis diagnosed based on BMD T-score. (2) For fragility hip or vertebral fractures, regardless of BMD results. (3) For BMD T-score between −1.0 and −2.5, calculate FRAX score and use appropriate thresholds. For fragility fractures at other sites (excluding fingers and toes), use clinical judgement, BMD and FRAX scores for guidance.',
        },
      ],
    },
    {
      title: 'Initial Assessment and General Management',
      blocks: [
        {
          type: 'list',
          items: [
            '1. Educate patient about osteoporosis and fragility fractures and their implications.',
            '2. Refer to Care Manager for assessment and education regarding: fall risk, home safety and footwear; appropriate weight bearing and muscle strengthening exercises (e.g., walking, elastic band exercises); calcium/vitamin D diet advice. A 2nd visit is recommended to review fall risk and diet history.',
            '3. Advise smoking cessation, reduce alcohol intake.',
            '4. Calcium and Vitamin D supplements if not meeting recommended dietary allowance.',
            '5. Pharmacotherapy where indicated.',
          ],
        },
      ],
    },
    {
      title: 'FRAX® Tool',
      blocks: [
        {
          type: 'text',
          content:
            'The FRAX® tool has been developed by WHO to evaluate fracture risk of patients. It is based on individual patient models that integrate clinical risk factors as well as bone mineral density (BMD) at the femoral neck.',
        },
        {
          type: 'list',
          items: [
            'Select the correct country and race.',
            'Select "yes" for glucocorticoids if patient has at least 5mg of daily prednisolone for at least 3 months.',
            'Select "yes" for rheumatoid arthritis if patient has Diabetes mellitus (DM is associated with increased fracture risk).',
            'For femoral neck BMD, select "Hologic" for the DXA equipment and enter the actual femoral neck BMD (in g/cm²) instead of T-score.',
            'FRAX score may also be calculated without a BMD (leave the field blank).',
            'Available at www.shef.ac.uk/FRAX. Also found on intranet under Doctors → Clinical Guidelines & Protocol → Endocrine: Charts & Calculators.',
          ],
        },
      ],
    },
    {
      title: 'Pharmacological Treatment',
      blocks: [
        {
          type: 'text',
          content:
            'Consider oral alendronate or risedronate for treatment. SC denosumab and IV zoledronate can be considered when oral bisphosphonates are not suitable or not preferred. For patients at very high risk (BMD T-score ≤ −3.0 AND ≥ 2 vertebral fractures or ≥ 2 fragility fractures), consider referral for anabolic agents (e.g. teriparatide or romosozumab) as first-line treatment.',
        },
        {
          type: 'text',
          content: 'Before initiating treatment, consider:',
        },
        {
          type: 'list',
          items: [
            '1. Secondary causes for osteoporosis: Hypogonadism, Hyperthyroidism, Hyperparathyroidism, Cushing\'s syndrome, Chronic Liver Disease, Chronic Renal Failure, Malabsorption, Rheumatoid Arthritis, Chronic Obstructive Lung disease, Anorexia Nervosa.',
            '2. Screen baseline labs: FBC, Creatinine, Calcium, Phosphate, LFT, thyroid panel, 25(OH)D.',
            '3. Assess dental condition. Inform of risks of medication-related osteonecrosis of the jaw (MRONJ) and atypical fractures. Dental clearance is not routinely necessary in patients with good dentition. Offer dental clearance for: patients at higher risk of MRONJ (cancer treatment, immunosuppression, choosing parenteral treatment); patients with concomitant periodontal disease or poor dentition requiring invasive dental procedures.',
            '4. Ensure adequate serum levels of Vitamin D (≥ 30 ng/mL) and Calcium. Treatment can be initiated concurrently with vitamin D replacement for levels ≥ 20 ng/mL.',
            '5. Ensure no contraindications to pharmacological agents.',
          ],
        },
        {
          type: 'table',
          headers: ['Medication', 'Dose', 'Common ADR', 'Contraindications / Precautions / Remarks'],
          rows: [
            { cells: ['Alendronate 70mg (Fosamax®) (S2) $', 'Alendronate: 70 mg once weekly', 'Reflux, oesophagitis, ulcers; ONJ (rare); risk of atypical femoral fractures; hypocalcaemia', 'Contraindications: CrCl < 35 ml/min; oesophageal abnormalities (Barrett\'s, stricture, achalasia); hypocalcaemia; unable to sit/stand >30 minutes; aspiration risk. Counselling: swallow whole with 1 glass water ≥30 min before food/beverages/other medications. Remain upright ≥30 min after eating.'] },
            { cells: ['Risedronate 35mg (Actonel®) (S2) $', 'Risedronate: 35 mg once weekly', 'As above', 'Contraindications: CrCl < 30 ml/min; same oesophageal/posture precautions as alendronate.'] },
            { cells: ['Denosumab 60mg/ml Inj (Prolia®) (NS) $$$$', 'SQ 60 mg once every 6 months', 'Arthralgia, back pain, constipation, diarrhoea, nausea, hypercholesterolaemia, eczema, dermatitis, risk of infection (skin infection, cystitis), headache, fatigue, anaemia, thrombocytopenia; risk of atypical femoral fractures, ONJ, hypocalcaemia with renal impairment', 'MAF eligible in patients with osteoporosis at high risk of fracture. Contraindications: hypersensitivity; hypocalcaemia; pregnancy. Usually initiated as 2nd line by specialists. Cost is high.'] },
          ],
        },
      ],
    },
    {
      title: 'Monitoring and Long-Term Follow-Up',
      blocks: [
        {
          type: 'list',
          items: [
            '1. DXA-BMD at baseline. In patients with fragility fractures, do not delay pharmacological treatment while awaiting BMD results. Repeat BMD should be considered 2 years after initiation of treatment; subsequently every 2 years to assess for deterioration (decline exceeding least significant change or >4–5%).',
            '2. Assess Creatinine and Calcium levels annually.',
            '3. Assess for any fracture occurring whilst on medication.',
            '4. Assess for adverse effects of prolonged bisphosphonate treatment: non-specific GI symptoms (nausea, dyspepsia, abdominal pain, reflux) — trial bisphosphonate with PPI (omeprazole 20 mg) taken the night before; osteonecrosis of jaw (rare — encourage routine dental visits); atypical femoral fractures (vigilant if patient complains of thigh pain).',
            '5. Dental procedures while on treatment: temporary discontinuation of bisphosphonates before invasive dental procedures is generally not required. For patients on denosumab, invasive dental procedures may be timed at least 2–4 weeks before the next scheduled 6-monthly injection.',
          ],
        },
      ],
    },
    {
      title: 'Drug Holiday',
      blocks: [
        {
          type: 'text',
          content:
            'Antiresorptive effects of bisphosphonates persist beyond discontinuation and a drug holiday may be considered after five years of bisphosphonate therapy. Duration depends on individual patient\'s fracture risk, T-score, and history of fracture.',
        },
        {
          type: 'text',
          content:
            'Who would be suitable: Patients with a repeat T-score above −2.5 SD and no new fractures at 5-year post therapy. A reasonable approach for patients with low risk of fracture is to stop treatment after five years and remain off as long as BMD is stable and patient has no previous vertebral fractures.',
        },
        {
          type: 'text',
          content:
            'Drug holidays are NOT recommended for patients on denosumab, due to risk of bone loss upon cessation. If denosumab needs to be stopped or delayed, a plan to transition to a bisphosphonate should be in place.',
        },
      ],
    },
    {
      title: 'Calcium and Vitamin D — Diet and Supplements',
      blocks: [
        {
          type: 'table',
          headers: ['Food', 'Serving Size', 'Calcium Content (mg)'],
          rows: [
            { cells: ['High-calcium milk powder', '4 scoops (25 g)', '500'] },
            { cells: ['Low-fat milk', '1 glass (250 ml)', '380'] },
            { cells: ['Full-cream milk', '1 glass (250 ml)', '300'] },
            { cells: ['Low-fat yoghurt', '1 carton (150 g)', '240'] },
            { cells: ['Low-fat cheese', '1 slice (20 g)', '200'] },
            { cells: ['Canned sardine (with bones)', '1 fish (80 g)', '270'] },
            { cells: ['Dried ikan bilis (with bones)', '2 tablespoons (40 g)', '270'] },
            { cells: ['Silken tofu', 'package (150 g)', '100'] },
            { cells: ['Tau kwa', '1 small cake (90 g)', '150'] },
            { cells: ['Dhal (raw)', 'mug (50 g)', '85'] },
            { cells: ['Baked beans, canned', 'can (210 g)', '110'] },
            { cells: ['Kai lan, cooked', 'mug (100 g)', '195'] },
            { cells: ['Spinach, cooked', 'mug (100 g)', '140'] },
            { cells: ['Chye sim, cooked', 'mug (100 g)', '140'] },
            { cells: ['Broccoli, cooked', 'mug (100 g)', '50'] },
            { cells: ['High-calcium soybean milk', '1 glass (250 ml)', '450'] },
            { cells: ['Enriched bread', '2 slices (60 g)', '100'] },
            { cells: ['Calcium-fortified orange juice', '1 serving (240 ml)', '350'] },
          ],
        },
        {
          type: 'text',
          content: 'Dietary sources of Vitamin D: Vitamin D fortified cereal/milk/orange juice, cod liver oil, egg yolk, salmon, tuna, sardines.',
        },
      ],
    },
    {
      title: 'Calcium Formulations',
      blocks: [
        {
          type: 'table',
          headers: ['Formulation', 'Suggested Dose', 'Common ADR', 'Contraindications / Precautions / Remarks'],
          rows: [
            { cells: ['Calcium Carbonate (S1) $\n625 mg (250 mg elemental Ca), 1,250 mg (500 mg elemental Ca)', '625–1250 mg OM', 'Constipation, flatulence', 'Should be taken with meals as acidity improves absorption. Space calcium 2 hours apart from iron supplements, levothyroxine, quinolones, tetracyclines.'] },
            { cells: ['Calcium Carbonate / Vitamin D3 (S1) $\nCaCO3 450 mg (180 mg elemental Ca); Vit D3 200 IU', '1–2 tabs OM', 'As above', 'Take with or after food. May be used with long-term gastric acid suppression agents.'] },
            { cells: ['Calcium Acetate (S1) $–$$\n667 mg (169 mg elemental Ca)', '667 mg BD–TDS (with meals)', 'As above', 'Mainly used in treatment of hyperphosphataemia in end-stage renal disease.'] },
          ],
        },
        {
          type: 'text',
          content: 'Recommended dietary intake of elemental calcium for healthy adults ≥51 years: 1,000 mg/day. For patients with osteoporosis: 1,200 mg/day for female >50 years and male >70 years.',
        },
      ],
    },
    {
      title: 'Vitamin D Formulations',
      blocks: [
        {
          type: 'table',
          headers: ['Formulation', 'Suggested Dose', 'Remarks'],
          rows: [
            { cells: ['Vitamin D3 = Cholecalciferol (S1) $\n1,000 IU per tablet', 'Maintenance: 1,000 IU/day', 'Take with food. Better absorption compared to D2.'] },
            { cells: ['D-Cure = liquid Vitamin D3 cholecalciferol (NS) $$–$$$\n25,000 IU per 1 ml ampoule', 'Initial replacement: 50,000 IU/week for 6–8 weeks. Maintenance: 25,000 IU/month.', 'Caution re: Vitamin D overdose — remind patients to switch to monthly dose after 8 weeks instead of continuing weekly dose.'] },
            { cells: ['Vitamin D2 = ergocalciferol (OTC)\n50,000 IU per capsule', 'Initial replacement: 50,000 IU/week', 'Available in few OTC vegan Calcium/Vitamin D preparations.'] },
            { cells: ['Alfacalcidol (S2) $$\n0.25 mcg per tablet', 'Maintenance: 0.25 mcg–1 mcg/day', 'Be cautious of hypercalcaemia.'] },
            { cells: ['Calcitriol (S2) $$\n0.25 mcg per capsule', 'Maintenance: 0.25 mcg/day', 'Drug of choice in advanced/end-stage renal disease. To be initiated and titrated according to PTH levels at specialist level.'] },
          ],
        },
      ],
    },
    {
      title: 'Criteria for Referral to Tertiary Care',
      blocks: [
        {
          type: 'text',
          content: 'Endocrinology referral criteria:',
        },
        {
          type: 'list',
          items: [
            '1. Male with fragility fracture < 65 years old',
            '2. Pre-menopausal with fragility fractures or Z-score < −2.0',
            '3. Very high risk of fractures (multiple fragility fractures and T-score < −3.0 — may be considered for anabolic agents)',
            '4. Poor response to bisphosphonates despite compliance for at least 1 year (new fractures or decreasing BMD trend > 4–5%)',
            '5. Unable to tolerate oral bisphosphonate therapy: renal impairment (CrCl < 30 ml/min, or CrCl 30–60 ml/min with abnormal calcium/phosphate levels → refer renal); gastrointestinal side effects (gastritis/reflux/PUD); atypical fractures or osteonecrosis of jaw whilst on bisphosphonates',
            '6. Suspected complex secondary causes due to endocrine disorders: hyperparathyroidism, Cushing\'s syndrome, hypophosphataemia, male hypogonadism, prolactinoma, hypopituitarism',
            '7. Women with pregnancy- and lactation-associated osteoporosis',
          ],
        },
        {
          type: 'text',
          content: 'Other specialties: Rheumatology (connective tissue disease); Haematology (myeloma); Gastroenterology (malabsorption syndrome); Falls Clinic/GRM/Neurology (recurrent falls).',
        },
        {
          type: 'text',
          content: 'Second Line Treatment (Usually Started by Specialist): (1) Oral Raloxifene; (2) SC Denosumab once/6-monthly; (3) SC Romosozumab monthly for up to 1 year; (4) IV Zoledronate once/year; (5) SC Teriparatide daily.',
        },
      ],
    },
    {
      title: 'Recommended Care Components',
      blocks: [
        {
          type: 'table',
          headers: ['Component', 'Minimum Frequency', 'Remarks'],
          rows: [
            { cells: ['DXA scan', 'At least once every 2 years', 'For treatment monitoring: DXA at baseline, after 2 years of treatment (to establish clinical effectiveness), and every 2 years thereafter.'] },
            { cells: ['Serum creatinine and calcium', 'Annually while on pharmacotherapy', 'To monitor CrCl and for hypocalcaemia while on anti-resorptives.'] },
          ],
        },
      ],
    },
    {
      title: 'Right Siting of Denosumab to NUP',
      blocks: [
        {
          type: 'text',
          content:
            'Since October 2022, NUP has established a workflow to allow SOC patients who have received at least 1 dose of Denosumab SC injection to be decanted to NUP. NUP doctor reviews patient annually to ensure suitability for continuation of Denosumab; nurses review 6-monthly to continue Denosumab SC injection.',
        },
        {
          type: 'table',
          headers: ['Visit', 'Action'],
          rows: [
            { cells: ['SOC (0 month)', 'Specialist assesses patient for suitability for discharge to NUP. Order 26-week Referral to Polyclinics. Print step-down care referral for patient.'] },
            { cells: ['1st NUP Visit (6 months) — Dr + Nurse', 'Admin Dr vets step-down referral; adds TCU NUR TREATMENT SERVICES on day of visit. During TCU DR STEP DOWN CARE, Dr assesses suitability for continuation. Order: 26-week TCU DR CHRONIC CONSULT + NUR TREATMENT SERVICES; 25-week TCU LAB (Calcium, Creatinine) ± BMD if due. Dr orders SC Denosumab CAM. Input MAF clinical indicator. Nurse administers in treatment room.'] },
            { cells: ['2nd NUP Visit (12 months) — Dr + Nurse', 'Dr reviews patient with lab results, ensures suitable to continue before transferring to nurse. Orders: 26-week TCU NUR TREATMENT SERVICES; 51-week TCU LAB (Calcium, Creatinine) ± BMD; 52-week DR CHRONIC CONSULT.'] },
            { cells: ['3rd NUP Visit (18 months) — Nurse ± Dr', 'Nurse assesses patient; if unsuitable refers to Dr. If suitable, nurse orders SC Denosumab from nurse CAM preference list. Inputs MAF clinical indicator and administers denosumab.'] },
          ],
        },
        {
          type: 'text',
          content:
            'Conversion of Denosumab to oral bisphosphonate in NUP may be considered if: T-score has improved (> −2.5) and no new fractures; patient has adverse effects to Denosumab. Do NOT stop Denosumab in polyclinics if patient is on aromatase inhibitors, androgen deprivation therapy, or high-dose steroids — refer back to hospital.',
        },
        {
          type: 'text',
          content:
            'Criteria for re-referral to respective Osteoporosis Specialist: ≥ 2 new fragility fractures after Denosumab initiated; ≥ 1 new fragility fracture AND declining BMD > 4–5%; declining BMD > 4–5% over 2 years despite adherence; CrCl persistently < 30 ml/min; unable to tolerate oral bisphosphonates; T-score improved > −2.5 with recent major fragility fracture within past 2 years; Denosumab use > 10 years and unable to tolerate oral bisphosphonates; development of conditions associated with low bone mass; initiation of medications associated with low bone mass.',
        },
      ],
    },
    {
      title: 'Hypercalcaemia',
      blocks: [
        {
          type: 'table',
          headers: ['System', 'Manifestations'],
          rows: [
            { cells: ['Kidney (Stones)', 'Dehydration, nephrolithiasis, nephrocalcinosis, nephrogenic diabetes insipidus'] },
            { cells: ['Bones', 'Bone pain, arthritis, osteoporosis'] },
            { cells: ['Abdominal Groans (GI)', 'Nausea, vomiting, constipation, abdominal pain, pancreatitis, peptic ulcer disease'] },
            { cells: ['Psychic Moans (Neuromuscular)', 'Impaired concentration/memory, lethargy/fatigue, muscle weakness, confusion/coma'] },
            { cells: ['Cardiovascular', 'Hypertension, shortened QT, cardiac arrhythmias'] },
            { cells: ['Others', 'Itch, keratitis, conjunctivitis'] },
          ],
        },
        {
          type: 'table',
          headers: ['Cause Category', 'Examples'],
          rows: [
            { cells: ['Parathyroid Hormone-Mediated', 'Primary hyperparathyroidism (sporadic adenomas, hyperplasia, carcinoma; inherited — MEN syndromes, familial hyperparathyroidism); tertiary hyperparathyroidism (renal failure or vitamin D deficiency); familial hypocalciuric hypercalcaemia; lithium induced'] },
            { cells: ['Non-PTH Mediated — Malignancy', 'Humoral hypercalcaemia of malignancy (PTHrp or 1,25OH vitamin D — squamous cell lung/head/neck, breast, ovary, renal cell, bladder, T-cell lymphoma); local osteolytic hypercalcaemia (multiple myeloma, breast ca, lymphoma)'] },
            { cells: ['Non-PTH Mediated — Other', 'Chronic granulomatous disorders (sarcoidosis, tuberculosis); endocrine disorders (hyperthyroidism, adrenal insufficiency); medications (vitamin D or A intoxication, thiazides, milk-alkali syndrome); immobilisation with high bone turnover (Paget\'s disease); acute renal failure; parenteral nutrition; recovery phase of rhabdomyolysis'] },
          ],
        },
        {
          type: 'text',
          content: 'More than 90% of cases are due to primary hyperparathyroidism and malignancy.',
        },
        {
          type: 'text',
          content: 'Evaluation: Confirm with 2 x abnormal Calcium levels. Measure intact PTH. Stop causative medications and recheck calcium. Screen thyroid function, renal function, phosphate. CXR to exclude sarcoidosis/TB if respiratory symptoms present.',
        },
        {
          type: 'table',
          headers: ['Adjusted Calcium Level', 'Urgency of Referral'],
          rows: [
            { cells: ['> 2.55 to 2.70 mmol/L (Asymptomatic)', 'Refer specialist routine'] },
            { cells: ['2.71 to 3.00 mmol/L', 'Refer specialist direct access within 2 weeks'] },
            { cells: ['> 3.00 mmol/L or severe symptomatic hypercalcaemia', 'Refer to A&E for immediate treatment'] },
          ],
        },
        {
          type: 'text',
          content: 'General management: Identify patients that need immediate referral. Avoid factors that aggravate hypercalcaemia: thiazide and lithium carbonate therapy, volume depletion, prolonged bed rest or inactivity, high calcium diet (> 1,000 mg/day). All patients with hypercalcaemia should be referred to a specialist for further evaluation.',
        },
      ],
    },
    {
      title: 'Hypocalcaemia',
      blocks: [
        {
          type: 'text',
          content: 'Common causes: post-surgical, autoimmune, Vitamin D deficiency, chronic kidney disease.',
        },
        {
          type: 'text',
          content: 'Symptoms: Neuromuscular irritability (perioral paraesthesia, tingling of fingers and toes, carpopedal spasms, cramps, tetany); seizures, cognitive impairment, personality disturbances. Signs: previous neck surgery or radiation; Chvostek and Trousseau signs; ECG prolonged QT intervals.',
        },
        {
          type: 'text',
          content: 'First-line investigations: serum calcium (corrected for albumin), phosphate, sodium/potassium, creatinine, alkaline phosphatase, 25-hydroxyvitamin D, ECG.',
        },
        {
          type: 'table',
          headers: ['Adjusted Calcium Level', 'Urgency of Referral'],
          rows: [
            { cells: ['2.01 to < 2.10 mmol/L', 'Routine referral'] },
            { cells: ['1.80 to 2.00 mmol/L without symptoms', 'Refer specialist direct access within 2 weeks'] },
            { cells: ['< 1.80 mmol/L or symptomatic < 2.00 mmol/L', 'Refer to A&E for urgent treatment'] },
          ],
        },
      ],
    },
    {
      title: 'Vitamin D Deficiency — Screening and Replacement',
      blocks: [
        {
          type: 'table',
          headers: ['Age Group', 'Vitamin D Requirements/Day', 'Calcium Requirements/Day'],
          rows: [
            { cells: ['Infants < 1 yr old', '400 IU', '300–400 mg'] },
            { cells: ['Children 1–18 yr old', '600 IU', '500–1000 mg'] },
            { cells: ['Adults 19–50 yrs old', '600 IU', '800 mg'] },
            { cells: ['Adults > 50 yrs old, pregnant/breastfeeding', '800 IU', '1000 mg'] },
            { cells: ['Adults with osteoporosis', '1000 IU', '1200 mg'] },
          ],
        },
        {
          type: 'text',
          content: 'Who to screen for Vitamin D deficiency: patients with osteoporosis; risk of frequent falls; pregnant and breastfeeding women; chronic renal disease (these patients will need calcitriol); malabsorption; osteomalacia.',
        },
        {
          type: 'text',
          content: 'Manifestations of Vitamin D deficiency: bone discomfort or pain (often throbbing) in low back, pelvis, lower extremities; increased risk of falls and impaired physical function; muscle aches; proximal muscle weakness; symmetric low back pain in women.',
        },
        {
          type: 'text',
          content: 'Vitamin D cut-offs for patients with osteoporosis: < 10 µg/L = severe deficiency; 10–19 µg/L = deficiency; 20–29 µg/L = insufficiency (for osteoporosis); 30–100 µg/L = sufficiency; > 100 µg/L = possibly harmful.',
        },
        {
          type: 'list',
          items: [
            'Replacement: Cholecalciferol (D3) oral D-cure 50,000 IU per week for 6–8 weeks for Vit D < 25 µg/L.',
            'Followed by maintenance dose: Cholecalciferol (D3) oral liquid D-cure 25,000 IU per month OR oral tablets 1,000 IU per day.',
            'Vitamin D levels should be rechecked about 3 months later to ensure adequate replacement (≥ 20 µg/L for general population, ≥ 30 µg/L if osteoporotic).',
          ],
        },
        {
          type: 'text',
          content: 'Benefits of Vitamin D supplementation: fall and fracture prevention in elderly patients, mainly in the frail with proven deficiency. Routine supplementation in healthy community-dwelling patients without known deficiency has not been shown to reduce falls.',
        },
      ],
    },
  ],
};
