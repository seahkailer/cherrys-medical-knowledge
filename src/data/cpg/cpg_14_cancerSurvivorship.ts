import { CpgDocument } from '../types';

export const cancerSurvivorship: CpgDocument = {
  id: 'cpg-cancer-survivorship',
  condition: 'Cancer Survivorship Care',
  source: '14 NUP CPG - Cancer Survivorship Care.pdf',
  reviewDate: 'Updated November 2025. Next review date: November 2028.',
  advisors: 'Key FP: Dr Alicia Ong. Specialist Advisor: Dr Gloria Chan (Consultant, Department of Haematology-Oncology, National University Cancer Institute, Singapore).',
  sections: [
    {
      heading: 'National Cancer Survivorship Programme',
      blocks: [
        { type: 'text', content: 'Background: This programme is for patients who have completed their 5-year cancer surveillance at any public tertiary oncology department and are cancer free. Wellness-focused care: to keep cancer survivors as well as possible from the diagnosis of cancer until the end of life. Two groups: breast cancer and colorectal cancer patients.' },
        { type: 'text', content: 'These patients will be discharged from SOC under the cancer survivorship programme to the patient\'s primary care provider (enrolled HSG clinic). In NUP, patients will be empanelled to teamlet.' },
        { type: 'text', content: 'Role of NUP Clinician — First step down visit: (1) Review the cancer survivorship care plan (hard copy with patient or soft copy uploaded to Epic → Media tab); (2) Review the patient care coordination notes updated by the SOC on cancer surveillance plans; (3) Add visit diagnosis of "Carcinoma of breast" or "Carcinoma of colon" and add (+) to Epic problem list.' },
        { type: 'list', items: [
          { text: 'Review following areas of care for cancer survivors yearly', children: [
            { text: 'Look out for symptoms associated with cancer disease recurrence/metastasis. If present, refer back to relevant oncology/surgery specialists via survivorship direct access referral pathway.' },
            { text: 'Be aware of long-term treatment side effects and its management' },
            { text: 'Ensure cancer surveillance is performed at appropriate intervals and update patient care coordination notes' },
            { text: 'Provide screening and preventive care as per HPB guidelines: Cardiovascular risk factor screening (DM, Hyperlipidaemia, Hypertension); Age-appropriate cancer screening; Bone health; Immunisations' },
            { text: 'Promote the benefits of healthy living, including diet & exercise, for patients following cancer treatment' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Colorectal Cancer Survivorship',
      blocks: [
        { type: 'text', content: 'SmartPhrase for documentation: .NUPDRONCOCOLORECTALCASURVIVOR' },
        { type: 'list', items: [
          { text: '1. History and Physical Exam', children: [
            { text: 'Symptoms that may be associated with disease recurrence/metastasis: Weight loss, abdominal pain, changes in bowel habits from baseline, haematochezia, changes in stool caliber from baseline, symptoms associated with bowel obstruction, jaundice, back/bone pain, persistent cough/dyspnoea, persistent headaches.' },
            { text: 'If symptomatic, perform exam: look out for lymphadenopathy (neck, axilla, inguinal), abdominal masses, ascites, hepatomegaly, jaundice, leg swelling.' },
            { text: 'Symptomatic for possible recurrence: Refer back Direct Access to Colorectal Surgery (Indicate: Cancer survivor) if haemodynamically stable, otherwise to ED.' },
          ]},
          { text: '2. Look out for late or long-term side effects: e.g. Chronic diarrhoea, bowel/bladder control issues, ostomy issues, neuropathy. Refer back Direct Access to Colorectal Surgery for suspected surgery complications; Medical Oncology for suspected chemotherapy side effects.' },
          { text: '3. Is the colonoscopy up-to-date?', children: [
            { text: 'Check last colonoscopy report.' },
            { text: 'If last colonoscopy is normal, refer for colonoscopy every 3–5 years until age 75, or until life expectancy < 10 years. (Note: Refer to Colorectal Surgery; do not use open access colonoscopy pathway.)' },
            { text: 'If last colonoscopy is abnormal, check specialist\'s notes/handover for plans on further management.' },
            { text: 'Note: some patients may opt for no further colonoscopy surveillance or other surveillance methods (e.g. CT scan). Check cancer survivorship plan.' },
          ]},
          { text: '4. No need for routine CEA or CT scans.' },
          { text: '5. Screening and preventive care as per HPB guidelines: e.g. CVRF screening, cancer screening (mammogram or HPV testing), bone health, immunisations.' },
        ]},
      ],
    },
    {
      heading: 'Breast Cancer Survivorship',
      blocks: [
        { type: 'text', content: 'SmartPhrase for documentation: .NUPDRONCOBREASTCASURVIVOR' },
        { type: 'list', items: [
          { text: '1. Annual History', children: [
            { text: 'Symptoms associated with disease recurrence/metastases: new breast symptom, pathological bone pain, increasing shortness of breath, jaundice, headaches with red flags.' },
            { text: 'Late or long-term side effects: e.g. fatigue, menopausal symptoms, numbness, pain.' },
            { text: 'Check on psychosocial health and physical function.' },
          ]},
          { text: '2. Annual physical examination: Breast Exam, Lymphadenopathy (supraclavicular, axilla). If symptomatic and as clinically indicated: Abdominal masses, ascites, hepatomegaly, Jaundice, Pleural effusion.' },
          { text: '3. Annual mammogram surveillance till 75 years old or life expectancy < 10 years. Check when patient\'s last mammogram was. Update care coordination notes.' },
          { text: '4. Refer back Direct Access to Breast Surgery (Indicate: Cancer survivor) for recurrence/suspected surgery complications or Medical Oncology for suspected chemotherapy side effects.' },
          { text: '5. No need for any regular blood tests or other investigations such as metastatic screen/tumour markers.' },
          { text: '6. Screening and preventive care as per HPB guidelines: e.g. CVRF screening, cancer screening (FIT/colonoscopy or HPV testing), bone health, immunisations.' },
        ]},
        { type: 'text', content: 'Booking Mammogram under Breast Screen Singapore (BSS): NUHSD will help to book for the following year. Patient to self-book annual BSS mammogram 2–3 months before doctor appointment if not yet booked: (1) NUHS Diagnostics hotline at 6370 6556; (2) Email NUHSD at nuhsd_contact@nuhs.edu.sg; (3) Approach NUHS Diagnostics counter staff at NUP; (4) HealthHub App. Patient will receive BSS results letter within 3–4 weeks, up to 6 weeks.' },
        { type: 'text', content: 'Viewing last mammogram report: BSS mammogram reports can be found in NEHR under "Screening/Indicators → Medical Screening". Mammograms done in hospitals can be found in NEHR under "Investigations → Radiology/Nuclear med". If latest BSS mammogram is abnormal, ensure patient has been recalled by BSS for further evaluation. If not, refer to NUH Breast Clinic direct access.' },
      ],
    },
    {
      heading: 'Contact Resources at NUHS',
      blocks: [
        { type: 'list', items: [
          { text: 'Cancer Appointment-Related Enquiries: Phone: (+65) 6773 7888 | Email: CancerApptLine@nuhs.edu.sg' },
          { text: 'Questions for Oncology Nurse: Phone: (+65) 9722 0569 | Email: CancerLineNurse@nuhs.edu.sg' },
          { text: 'Questions for Stoma Care Nurse: Phone: (+65) 8781 2378' },
        ]},
      ],
    },
    {
      heading: 'Cancer Rehabilitation and Community Services',
      blocks: [
        { type: 'list', items: [
          { text: 'NUH / NTFGH Rehabilitation Medicine (Referral via Epic)' },
          { text: 'Singapore Cancer Society Rehabilitation Centre or Cancer 365 (refer to MSW)' },
          { text: 'St. Luke\'s Hospital Outpatient Rehabilitation Service / Epic referral (Applicable to BBK only)' },
        ]},
      ],
    },
  ],
};
