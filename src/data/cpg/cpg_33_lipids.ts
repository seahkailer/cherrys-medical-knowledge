import { CpgDocument } from '../types';

export const lipids: CpgDocument = {
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
};
