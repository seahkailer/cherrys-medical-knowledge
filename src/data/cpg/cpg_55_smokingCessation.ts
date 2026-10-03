import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 55 NUP CPG — Smoking Cessation (Dec 2023)
// ---------------------------------------------------------------------------
export const smokingCessation: CpgDocument = {
  id: 'cpg-smoking-cessation',
  condition: 'Smoking Cessation',
  source: '55 NUP CPG - Smoking Cessation.pdf',
  reviewDate: 'Reviewed December 2023 by Dr Joanne Khor and Mr Woo Jia Xiang.',
  advisors: 'Dr Joanne Khor / Dr Cheryl Christine Chandra / Dr David Tan / Mr Woo Jia Xiang (Pharmacy)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content:
            'Smoking is a significant factor for many chronic diseases including coronary artery disease, lung disease, cerebrovascular disease, cancers and pregnancy complications. On average, a smoker dies 14 years prematurely compared to a non-smoker. Prevalence of daily smoking: 10.6% in 2019 and 9.2% in 2022 (MOH National Population Health Survey).',
        },
      ],
    },
    {
      heading: 'Initial Assessment',
      blocks: [
        {
          type: 'text',
          content:
            'Assessment of smoking habits (estimated sticks/day) should be done once-off for all patients unless there is a change in smoking habit. Smokers with chronic disease should have a smoking assessment done annually and smoking cessation counselling provided.',
        },
      ],
    },
    {
      heading: 'Level 1: The ABC Approach (Recommended for NUP Doctors)',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'A – ASK and document status of tobacco use: "Do you smoke? How many sticks? Do you want to quit?"' },
            {
              text: 'B – BRIEF ADVICE to stop smoking to every smoker regardless of intention to quit:',
              children: [
                { text: 'Risk of smoking' },
                { text: 'Health benefits of quitting' },
                { text: 'Relationship between smoking and current medical condition' },
              ],
            },
            {
              text: 'C – CESSATION support for every patient who wants to quit:',
              children: [
                { text: 'Refer to NUP pharmacy-led Smoking Cessation Clinics, HPB Quitline 1800 438 2000 or I Quit programme' },
                { text: 'Assess nicotine dependence (Fagerstrom Test) and consider pharmacotherapy' },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Level 2: The 5As Approach',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '1. Ask and document status of tobacco use for every patient' },
            { text: '2. Advise to quit: brief, firm, personalised advice' },
            { text: '3. Assess willingness using Stages of Change: Pre-Contemplation (motivational intervention) → Contemplation/Action (refer for cessation services) → Maintenance (relapse prevention)' },
            { text: '4. Assist in quit attempt' },
            { text: '5. Arrange follow-up to check on progress' },
          ],
        },
      ],
    },
    {
      heading: 'Nicotine Replacement Therapy (NRT) — Available in NUP',
      blocks: [
        {
          type: 'text',
          content:
            'Subsidised NRT available at NUP pharmacy-led smoking cessation clinics since February 2023. All forms at equivalent dose are similarly effective, increasing quit rates by 50–70%. Combination NRT (patch + oral form) is more efficacious than monotherapy.',
        },
        {
          type: 'table',
          headers: ['NRT Drug', 'Class', 'Price', 'Remarks'],
          rows: [
            { cells: ['nicoRETTE 2mg GUM 30s', 'Non-standard', '$8.70', ''] },
            { cells: ['nicoRETTE 4mg GUM 30s', 'Non-standard', '$8.70', 'Not available in some branches'] },
            { cells: ['nicoTINELL 1mg LOZENGES 36s', 'Non-standard', '$10.44', ''] },
            { cells: ['nicoTINELL TTS 10 (7s)', 'Non-standard', '$12.53', '7 mg/24hr patch'] },
            { cells: ['nicoTINELL TTS 20 (7s)', 'Non-standard', '$12.53', '14 mg/24hr patch'] },
            { cells: ['nicoTINELL TTS 30 (7s)', 'Non-standard', '$12.53', '21 mg/24hr patch'] },
          ],
        },
        {
          type: 'text',
          content:
            'Nicotinell® patch dosing: Light smokers <20 cig/day: 14mg/24hr × 8 weeks then 7mg/24hr × 4 weeks. Heavy smokers >20 cig/day: 21mg/24hr × 4 weeks → 14mg × 4 weeks → 7mg × 4 weeks. NRTs are Medisave-claimable for CDMP conditions (DM, HTN, Lipids, Asthma, COPD, CKD, Stroke, IHD). MAF subsidies available for Fagerstrom score ≥3 who complete ≥3 sessions.',
        },
      ],
    },
    {
      heading: 'Other Pharmacotherapy (Not Available in NUP)',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Dosing', 'Key Points'],
          rows: [
            { cells: ['Varenicline (Champix®)', 'Days 1–3: 0.5mg OD; Days 4–7: 0.5mg BD; Day 8+: 1mg BD for 12 weeks (optional 24 weeks total)', 'Most effective monotherapy. Start 1–2 weeks before quit date. Main SE: nausea. Avoid in ESRF.'] },
            { cells: ['Bupropion SR', 'Days 1–3: 150mg OD; Days 4–week 12: 150mg BD', 'Start 1–2 weeks before quit date. Contraindicated in pregnancy, seizures, eating disorders, MAO inhibitors.'] },
          ],
        },
        {
          type: 'text',
          content:
            'Cochrane review summary: NRT and bupropion similar efficacy (both increase quit rates 80% vs placebo); Varenicline more effective than NRT monotherapy or bupropion; Combination NRT as effective as varenicline.',
        },
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        {
          type: 'table',
          headers: ['Situation', 'Recommended Pharmacotherapy'],
          rows: [
            { cells: ['Psychiatric illness (mild untreated depression)', 'Bupropion, combination NRT, varenicline'] },
            { cells: ['Psychiatric illness (bipolar)', 'NRT, varenicline (avoid bupropion)'] },
            { cells: ['Schizophrenia', 'Bupropion, varenicline'] },
            { cells: ['Stable CVD', 'Same as general population: bupropion, NRT, varenicline'] },
            { cells: ['Seizures', 'Varenicline and NRT (bupropion contraindicated)'] },
            { cells: ['Pregnant smokers', 'First line: non-pharmacological. If unable to quit: NRT or bupropion (avoid varenicline)'] },
            { cells: ['Light smokers <10 cig/day', 'Lower dose NRT, standard bupropion, standard varenicline'] },
          ],
        },
      ],
    },
  ],
};
