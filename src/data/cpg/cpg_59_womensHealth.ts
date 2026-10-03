import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 59 NUP CPG — Women's Health (Oct 2024)
// ---------------------------------------------------------------------------
export const womensHealth: CpgDocument = {
  id: 'cpg-womens-health',
  condition: "Women's Health",
  source: "59 NUP CPG - Women_s Health.pdf",
  reviewDate: 'Updated October 2024.',
  advisors: "NUP Women's Health Workgroup: Dr Chin Chi Hui / Dr Sharon Lau / Dr Amanda Loh / Dr Desmond Ong",
  sections: [
    {
      heading: 'Breast Cancer Screening',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'High risk patients: screening starts at 25 years old for proven carriers, or 5–10 years earlier than youngest family member with breast cancer' },
            { text: 'All women ≥30 years: monthly Breast Self-Examination (BSE) recommended' },
            { text: 'Fast-track referral to Breast Clinic: BIRADS 4/5, hard/fixed/irregular lumps ≥40 years (any age at NUH), bloody nipple discharge, newly diagnosed breast cancer, breast abscess, patients recalled by Breast Screen Singapore' },
          ],
        },
      ],
    },
    {
      heading: 'Cervical Screening (CSS)',
      blocks: [
        {
          type: 'table',
          headers: ['Age', 'Screening Test', 'Frequency'],
          rows: [
            { cells: ['25–29 years', 'Cervical cytology', 'Once every 3 years'] },
            { cells: ['30–69 years', 'HPV DNA test', 'Once every 5 years'] },
          ],
        },
        {
          type: 'text',
          content:
            'All women who have ever had sex advised to have first Pap smear by age 25. Discharge from screening at 69 years if: 3 consecutive negative cytology tests, OR 2 consecutive negative HPV tests in last 10 years (most recent within 5 years). Women with history of CIN2/CIN3/AIS: continue screening for at least 20 years even beyond age 69.',
        },
      ],
    },
    {
      heading: 'HPV Vaccination',
      blocks: [
        {
          type: 'table',
          headers: ['Vaccine', 'Protection Against', 'Schedule (NUP: Cervarix only)'],
          rows: [
            { cells: ['Cervarix^', 'HPV 16, 18', 'Age 9–14: 2 doses 5–13 months apart. Age 15–25: 3 doses at 0, 1–2.5 months, 5–12 months'] },
            { cells: ['Gardasil', 'HPV 6, 11, 16, 18', 'Age 9–14: 2 doses 6–12 months apart. Age 15–25: 3 doses at 0, 2, 6 months'] },
            { cells: ['Gardasil 9', 'HPV 6, 11, 16, 18, 31, 33, 45, 52, 58', 'Same schedule as Gardasil'] },
          ],
        },
        {
          type: 'text',
          content:
            'Females aged 9–26 years. Not recommended during pregnancy (routine pregnancy test not required before vaccination). Can be given to breastfeeding women. Immunocompromised states not a contraindication. Not to be given to those with yeast allergy (Gardasil/Gardasil 9).',
        },
      ],
    },
    {
      heading: 'Contraception — Methods Available in NUP',
      blocks: [
        {
          type: 'table',
          headers: ['Method', 'Typical Use Failure Rate', 'Key Points'],
          rows: [
            { cells: ['Combined Oral Contraceptive Pill (COCP)', '9%', 'Regular periods, lighter flow, reduces cramps. Contraindicated in smokers ≥35 years, BMI ≥35, HTN, migraine with aura, DVT/PE, liver disease, active hepatitis, breast cancer, ischaemic heart disease/stroke'] },
            { cells: ['IM Depo Provera (DMPA)', '6%', 'No/scanty menses, 3-monthly injection. Limit to 2 years (BMD warning). Average weight gain 2–6 kg. At ≤40 years without medical conditions: prescribe for 1 year; at >40 years or medical conditions: 12-weekly review'] },
            { cells: ['Copper IUCD (Cu-IUD)', '0.8%', 'Once inserted, no daily attention. 5-year copper IUCD available at NUP. Higher menstrual cramps/heavier flow. Risk of perforation, expulsion, infection'] },
          ],
        },
        {
          type: 'text',
          content:
            'Alternative methods not in NUP (refer to SOC): Hormonal IUD (Mirena, 5 years), Implanon (3 years), Evra Patch (weekly), Tubal Ligation (permanent). Emergency contraception: Postinor 2 tabs (1.5 mg Levonorgestrel) stat within 72 hours; Cu-IUD or Ella (ulipristal acetate) within 120 hours.',
        },
      ],
    },
    {
      heading: 'Antenatal Care',
      blocks: [
        {
          type: 'table',
          headers: ['Gestation', 'Key Actions'],
          rows: [
            { cells: ['< 12 weeks', 'History, physical exam, antenatal blood panel (FBC, HBsAg, anti-HBs Ab, Syphilis, HIV, ABO/Rhesus, thalassaemia screen if unknown). Dating scan and First Trimester Screening at NUH. Folic acid 5 mg OM. Start aspirin 100 mg nightly if ≥2 moderate or 1 high pre-eclampsia risk factor (from 12–16 weeks to 36 weeks). Review teratogenic drugs.'] },
            { cells: ['≥ 12 weeks', 'Symphyseal fundal height, Doptone. NIPT, anomaly scan at 18–22 weeks at NUH. 2-point OGTT (high risk for GDM). Obimin 1 tab OM.'] },
            { cells: ['≥ 20 weeks', '3-point OGTT at 24–28 weeks. Growth scan at 28–32 weeks. Influenza and Tdap vaccination ideally 20–28 weeks. Refer to Obstetric if SFH ±2 cm from dates.'] },
          ],
        },
        {
          type: 'text',
          content:
            'High-risk pregnancy — refer to Obstetric at first visit if: age <18 or ≥35, uncertain dates, late booking (≥20 weeks), subfertility, previous Caesarean section, recurrent miscarriage, previous PIH, previous infant with congenital disorders, pre-existing DM/HTN/cardiac/thyroid/renal disease, epilepsy, VTE.',
        },
      ],
    },
    {
      heading: 'Special Problems in Pregnancy',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Vomiting: if no dehydration — pyridoxine 10–25mg TDS, promethazine 1 tab TDS or metoclopramide 10mg TDS; if dehydrated/ketones/surgical → refer hospital' },
            { text: 'Anaemia: Hb <9 g/dL → refer hospital; microcytic → exclude blood loss, check ferritin and Hb electrophoresis; macrocytic → check B12 and folate' },
            { text: 'Elevated BP: ≥140/90 mmHg or rise of systolic ≥30 mmHg or diastolic ≥15 mmHg → refer hospital; if severe HTN or red flags (persistent headache, visual changes, epigastric pain) → refer ED' },
            { text: 'GDM (3-point OGTT at 24–28 weeks, IADPSG 2010): fasting 5.1–6.9 mmol/L or 1h ≥10 mmol/L or 2h 8.5–11.0 mmol/L → refer Obstetrics' },
            { text: 'Vaccination: avoid live vaccines (MMR, varicella, BCG); influenza (inactivated) any trimester; Tdap at 20–28 weeks' },
          ],
        },
      ],
    },
    {
      heading: 'Postnatal Care & Postpartum Depression',
      blocks: [
        {
          type: 'text',
          content:
            'Postnatal review at 6 weeks: assess postnatal depression (consider Edinburgh Postnatal Depression Scale), breastfeeding, bowel/urinary issues, lochia, episiotomy/CS wound, contraception. Postpartum depression: affects up to 15% of mothers post-delivery. Screen using EPDS (score ≥10 suggests PPD). Management: psychoeducation, supportive therapy, CBT, antidepressants (consider breastfeeding safety). Refer to NUH Women Emotional Health Service (WEHS).',
        },
      ],
    },
    {
      heading: 'Menopause',
      blocks: [
        {
          type: 'text',
          content:
            'Menopause: cessation of menstruation for 12 months (average age 51 in Singapore). Symptoms: hot flushes, night sweats, vaginal dryness, dyspareunia, mood changes, sleep disturbance, urinary symptoms, cognitive changes. Investigations: FSH >30 IU/L and LH elevated confirms menopause in appropriate clinical context.',
        },
        {
          type: 'list',
          items: [
            { text: 'Non-pharmacological: lifestyle modification, regular exercise, CBT for hot flushes, pelvic floor exercises for urinary symptoms' },
            {
              text: 'Hormone Replacement Therapy (HRT): most effective for vasomotor symptoms. Use lowest effective dose for shortest duration. Benefits outweigh risks in women <60 years and within 10 years of menopause onset without contraindications.',
              children: [
                { text: 'Contraindications: unexplained vaginal bleeding, known/suspected breast cancer, endometrial cancer, active liver disease, uncontrolled hypertension, history of DVT/PE, stroke or TIA' },
                { text: 'Combined HRT (oestrogen + progestogen) for women with intact uterus; oestrogen-only for women post-hysterectomy' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
