import { CpgDocument } from '../types';

export const gout: CpgDocument = {
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
