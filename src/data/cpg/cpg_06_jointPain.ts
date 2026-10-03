import { CpgDocument } from '../types';

export const jointPain: CpgDocument = {
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
