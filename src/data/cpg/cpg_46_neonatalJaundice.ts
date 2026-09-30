import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 46 NUP CPG — Neonatal Jaundice (Nov 2025)
// ---------------------------------------------------------------------------
export const neonatalJaundice: CpgDocument = {
  id: 'neonatal-jaundice',
  title: 'Neonatal Jaundice',
  category: 'Paediatrics',
  lastReviewed: 'November 2025',
  sections: [
    {
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content:
            'Key Family Physician: Dr Abiramy D/O Anathan. Specialist Advisor: Dr Amutha Chinnadurai (Senior Consultant, NUH Paediatric Medicine). Adapted from Practice Guidelines - Evaluation and Management of Neonatal Jaundice (October 2018). Reviewed in November 2025. Next review date: November 2028.',
        },
      ],
    },
    {
      title: 'NNJ Phototherapy SB Thresholds',
      blocks: [
        {
          type: 'text',
          content:
            'NB: If mother\'s group & antibody titres unknown, manage the baby as \'High Risk\' until the results are available. The following group of infants from the second week of life onwards (8–30 days of age) could be considered as normal risk: (1) Mother\'s group & antibody titres still unknown; (2) Exclusive breast feeding who had weight loss ≥ 10% & regained normal weight.',
        },
        {
          type: 'table',
          headers: ['Age in Days', 'Age in Hours of Life', 'TcB Normal Risk', 'TcB High Risk', 'SB Normal Risk', 'SB High Risk', 'Critical SB Normal Risk', 'Critical SB High Risk'],
          rows: [
            { cells: ['Day 1', '0 to 24', 'Managed in hospital', '', '', '', '', ''] },
            { cells: ['Day 2', '25 to 36', '160', '140', '200', '175', '300', '275'] },
            { cells: ['Day 2', '37 to 48', '180', '160', '225', '200', '350', '300'] },
            { cells: ['Day 3', '49 to 72', '200', '180', '250', '225', '350', '325'] },
            { cells: ['Day 4', '73 to 96', '220', '200', '275', '250', '375', '350'] },
            { cells: ['Day 5', '97 to 120', '220', '200', '275', '250', '400', '350'] },
            { cells: ['Day 6–7', '121 to 168', '240', '220', '300', '275', '400', '375'] },
            { cells: ['Day 8–14', '', '250', '240', '325', '300', '425', '375'] },
            { cells: ['Day 15–30', '', '—', '—', '325', '300', '425', '375'] },
          ],
        },
        {
          type: 'text',
          content: 'For Direct Admission to NUH or KKH: SB at admitting phototherapy level, no contraindications, parents agreeable, to reach within 4 hours. Refer to NUH/KKH CE (to reach within 1 hour) if at critical SB levels.',
        },
      ],
    },
    {
      title: 'Normal Risk vs High Risk Factors',
      blocks: [
        {
          type: 'text',
          content: 'Normal Risk: Gestational age ≥ 37 weeks, no high-risk factors.',
        },
        {
          type: 'list',
          items: [
            'High Risk Factors:',
            '1. Jaundice observed in first 24 hrs',
            '2. Late Prematurity (35 to 36+6 weeks)',
            '3. Asphyxia (Apgar ≤ 5 at 1 and 5 min)',
            '4. Term IUGR with birth weight 2000–2500g',
            '5. Family history of severe NNJ in siblings needing exchange transfusion',
            '6. G6PD deficiency and other haemolytic conditions',
            '7. ABO incompatibility: Mother\'s blood group O, baby\'s blood group A/B AND DCT positive OR maternal Anti-A/Anti-B IgG antibodies titre ≥ 128',
            '8. Rhesus incompatibility',
            '9. Rapid rate of rise of SB > 103 µmol/L in 24 hours',
            '10. Exclusive breastfeeding AND weight loss ≥ 10% of birth weight',
          ],
        },
        {
          type: 'text',
          content: 'Not for Management in Primary Care Setting: Neonates <35 weeks gestation (check SB against premmie chart; NUH Nursery hotline: 67725480 / 67723480; KKH Nursery hotline: 63941882) or birth weight <2000g.',
        },
      ],
    },
    {
      title: 'Approach to a Jaundiced Neonate — Age up to 14 Days',
      blocks: [
        {
          type: 'text',
          content: 'Objective: Risk stratify and catch peak jaundice level.',
        },
        {
          type: 'table',
          headers: ['Step', 'Action'],
          rows: [
            { cells: ['1. TcB or SB', 'Nurse does TcB or sends for SB if TcB contraindicated or crosses phototherapy threshold in high-risk category.'] },
            { cells: ['2. Neonate\'s Age', 'Calculate age in hours of life at time of TcB/SB. If just between age categories, follow next category (e.g., 48h 10min follows "49–72h").'] },
            { cells: ['3. Initial Risk Assessment', 'Check for high risk factors as listed in chart.'] },
            { cells: ['4. Current Clinical Status', 'Feeding – ask type and if feeding well. Check for pale stools. Assess hydration and % weight loss.'] },
            { cells: ['5. Physical Examination', 'General wellbeing – exclude unwell child, dehydration. Note level of jaundice, exclude gross organomegaly.'] },
            { cells: ['6. Document Risk Assessment', 'State risk assessment clearly in notes to facilitate nurses\' TcB interpretation in subsequent visits.'] },
            { cells: ['7. Doctor Management', 'Any unwell/sick baby with NNJ → refer to CE immediately. Review SB, check rate of rise. Refer if SB at admitting phototherapy level. Initiate Direct Admission if eligible. If not for phototherapy and ≤ 14 days old, order Nurse TcB.'] },
            { cells: ['8. Educate Parents', 'See parental advice section.'] },
          ],
        },
        {
          type: 'text',
          content: 'Repeat Visits: Nurse does TcB or SB and refers to Doctor if SB crosses phototherapy threshold or up-trending TcB/SB with expected TCU on clinic closure date. Doctor reassesses clinical status, reviews SB rate of rise, initiates Direct Admission if eligible.',
        },
        {
          type: 'text',
          content: 'Indications for Children\'s Emergency (contraindications to Direct Admission): Critical (Emergency) SB levels; to reach within 1 hour; baby unwell (fever, poor suck, clinical evidence of dehydration — call ambulance if signs of encephalopathy); positive maternal contact history with chickenpox.',
        },
        {
          type: 'text',
          content: 'Criteria for Discharge: Look for downward trend. Clinically not jaundiced and no pale stools. Monitor until TcB < 80 µmol/L or SB < 100 µmol/L. Parents to continue monitoring jaundice and stool colour.',
        },
      ],
    },
    {
      title: 'Approach — Age > 14 Days',
      blocks: [
        {
          type: 'text',
          content: 'Objective: Exclude conjugated hyperbilirubinaemia.',
        },
        {
          type: 'list',
          items: [
            'After 14 days old: order "Bilirubin, Paeds" (uses heel prick).',
            'Reassess clinical status: feeding type, pale stools, hydration, current weight, birth weight regained, level of jaundice.',
            'Doctor management: Any unwell/sick baby → refer to CE immediately.',
            'If SB > 325 µmol/L for Normal Risk, or > 300 µmol/L for High-Risk → refer to CE (not for direct admission).',
            'Order "Bilirubin, Direct" from Day 21 onwards if SB still > 100 µmol/L.',
          ],
        },
      ],
    },
    {
      title: 'Approach — Age > 30 Days',
      blocks: [
        {
          type: 'text',
          content: 'Objective: Identify prolonged jaundice.',
        },
        {
          type: 'list',
          items: [
            'After 30 days old: order "Bilirubin, Total" (TB). SB not validated for use in babies > 30 days old.',
            'Reassess: feeding, stool colour, current weight, ensure weight gain, inspect stool specimen, note level of jaundice.',
            'If TB still > 100 µmol/L and clinically still jaundiced: ensure Direct bilirubin done and < 20 µmol/L, no acholic stools.',
            'Refer to Paeds Med after 4 weeks old.',
          ],
        },
      ],
    },
    {
      title: 'Indications for Referral to Paeds Medicine',
      blocks: [
        {
          type: 'list',
          items: [
            '1. Urgent referral (within one week) if any evidence of conjugated hyperbilirubinaemia: pale stools OR direct bilirubin ≥ 20 µmol/L.',
            '2. Prolonged jaundice after 4 weeks old.',
          ],
        },
        {
          type: 'text',
          content: 'Criteria for Discharge: Direct bilirubin < 20 µmol/L. Downward trend. Clinically not jaundiced and no pale stools. Monitor until SB/TB < 100 µmol/L. Parents to continue monitoring jaundice and stool colour.',
        },
      ],
    },
    {
      title: 'Advice to Parents',
      blocks: [
        {
          type: 'list',
          items: [
            '1. Explain why baby is jaundiced. Stress importance of close monitoring. If jaundice too severe, it can damage baby\'s brain.',
            '2. Sunning the baby is ineffective and may cause sunburn/dehydration.',
            '3. There is usually no indication to stop breast-feeding. Breast milk is best. Ensure adequate breastfeeding to keep baby well hydrated.',
            '4. Some herbs increase risk of neurotoxicity and should be avoided during pregnancy/first month of breastfeeding: (1) Chuen-Lin (Chuan Lian), (2) Ngan-Huang (Niu Huang), (3) Yin-Chen.',
            '5. When ordering direct bilirubin, explain that extra blood will be drawn to distinguish the TYPE of jaundice — it is NOT a "liver test".',
            '6. Continue to monitor jaundice and stool colour on discharge. Bring baby back if yellowing recurs/persists or stools turn pale.',
          ],
        },
      ],
    },
    {
      title: 'Nurse TCU Orders for Repeat NNJ Visits',
      blocks: [
        {
          type: 'table',
          headers: ['Age', 'Test Type', 'Result', 'Trend', 'Recommended TCU'],
          rows: [
            { cells: ['2–7 days old', 'SB/TcB', '—', 'Rising', '1–2 days TcB* (for G6PD babies D2–14, use minimal recommended TCU)'] },
            { cells: ['2–7 days old', 'SB/TcB', '—', 'Stable or Downward', '2–3 days TcB*'] },
            { cells: ['8–14 days old', 'SB/TcB > 200 µmol/L', '—', 'Rising', '2–3 days TcB* (for babies ≥ D15 of life at next visit, for SB and DR consult)'] },
            { cells: ['8–14 days old', 'SB/TcB > 200 µmol/L', '—', 'Stable or Downward', '3–5 days TcB* (for babies ≥ D15 at next visit, for SB and DR consult)'] },
            { cells: ['8–14 days old', 'SB/TcB ≤ 200 µmol/L', '—', 'Rising/Stable/Downward', '5–7 days TcB* (for babies ≥ D15 at next visit, for SB and DR consult)'] },
            { cells: ['15–30 days old', 'Order SB and TCU to DR', '—', '—', 'Follows interval of 8–14 days old'] },
          ],
        },
        {
          type: 'text',
          content: 'Discharge baby if TcB < 80 µmol/L or SB < 100 µmol/L, minimal visible jaundice and no pale stools. Parent education: continue to monitor and return if jaundice worsens or pale stools seen.',
        },
      ],
    },
  ],
};
