import { CpgDocument } from '../types';

// ---------------------------------------------------------------------------
// 47 NUP CPG — Advance Care Planning (Nov 2024)
// ---------------------------------------------------------------------------
export const advanceCarePlanning: CpgDocument = {
  id: 'cpg-advance-care-planning',
  condition: 'Advance Care Planning',
  source: '47 NUP CPG - NUP Guide on Advance Care Planning.pdf',
  reviewDate: 'Nov 2024. Next review: Nov 2027.',
  advisors: 'Dr Lim Lee Yen (Consultant, Division of Supportive Care & Palliative Medicine, NTFGH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content:
            'Key Family Physician: Dr Yeo Hui Nan. Specialist Advisor: Dr Lim Lee Yen (Consultant, Division of Supportive Care & Palliative Medicine, Department of Medicine, Ng Teng Fong General Hospital). Updated in November 2024. Next review date: November 2027.',
        },
        {
          type: 'text',
          content:
            'Advance Care Planning (ACP) is a process of discussion with an individual and his family regarding values, preferences and goals of care. ACP helps to ensure patients\' wishes are respected if they become incapable of participating in treatment decisions and allows for treatment at the end-of-life to be consistent with their preferences.',
        },
      ],
    },
    {
      heading: 'Types of ACP',
      blocks: [
        {
          type: 'table',
          headers: ['Type', 'Description'],
          rows: [
            { cells: ['General', 'Made by an individual who is generally healthy or with early chronic disease. Discuss elements of care that are important to that individual. Focus on goals of care if one is to be rendered severely mentally impaired with low chance of recovery.'] },
            { cells: ['Disease-Specific', 'Tailored to the patient\'s progressive life limiting illness e.g., for a patient with dementia, a discussion should be held that explores his preferences on tube feeding before that stage has been reached.'] },
            { cells: ['Preferred Plan of Care', 'Designed for a patient who is likely to pass away within 12 months. Issues that will normally be discussed include the patient\'s preferences for life-sustaining treatment such as ventilation and CPR, as well as his preferences for place of care e.g., home, hospice or hospital.'] },
          ],
        },
      ],
    },
    {
      heading: 'Benefits of ACP',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Provides opportunity to make choices about future healthcare preferences and personal care (strengthens patient autonomy)' },
            { text: 'Reduces uncertainties regarding preferences of care' },
            { text: 'Prepares caregivers for times of crisis' },
            { text: 'Decreases caregiver\'s burden in decision-making' },
            { text: 'Reduces family conflicts' },
            { text: 'Reduces hospitalisation and intensive treatments at the end of life which may cause more harm and unnecessary suffering' },
            { text: 'Enhances mutual understanding and relationships between patients, their loved ones and their healthcare providers' },
            { text: 'Facilitates right siting of care and concordance of care' },
            { text: 'Increases earlier utilisation of palliative services to improve symptom control' },
            { text: 'Facilitates patient-centred care and improves quality of life' },
          ],
        },
      ],
    },
    {
      heading: 'Barriers to ACP',
      blocks: [
        {
          type: 'table',
          headers: ['Category', 'Barriers'],
          rows: [
            { cells: ['Patient-Related', 'Death aversion culture (fear that talking about death will bring bad outcomes); low awareness; lack of ACP acceptance; lack of knowledge and poor health literacy; decision-making deferred to physicians or loved ones; resistance of family members to discuss end-of-life options to "protect" patient and demonstrate filial piety.'] },
            { cells: ['Physician-Related', 'Time constraint; lack of remuneration for ACP; perceived lack of skill and discomfort in having such conversations; difficulties talking about death; lack of training/knowledge; fear of causing patients undue distress or destroying hope; perceived lack of readiness of patients to discuss about death and dying; perceived view that patients are not sick enough; physician training focused on curation; competing priorities in clinical practice.'] },
            { cells: ['System-Related', 'Inability to transfer information across settings; inadequate institutional support; lack of systematic way of measuring efforts spent on ACP advocacy/facilitation and impact of ACP on patients.'] },
          ],
        },
      ],
    },
    {
      heading: 'Key Components About ACP',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Family physicians are well-placed in being ACP advocates to their patients.' },
            { text: 'Patients look to physicians to initiate ACP conversations.' },
            { text: 'ACP is relational, not transactional; not a form-filling exercise.' },
            { text: 'ACP is not a one-off event. It is an on-going iterative process, concerning patients\' values, beliefs and goals of care.' },
            { text: 'ACP is voluntary. Pace with patients if they are not ready.' },
            { text: 'Focus on patients with most needs, who benefit most from ACP conversations.' },
            { text: 'Move ACP conversations upstream and earlier in the disease trajectory when patients are not so seriously ill.' },
            { text: 'Normalise ACP as part of standard patient care.' },
          ],
        },
      ],
    },
    {
      heading: 'Focus on Patients with Most Needs',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Diagnosis of a serious, life-limiting illness e.g., cancer' },
            { text: 'Recurring hospitalisations e.g., end-stage organ failure' },
            { text: 'Worsening symptoms e.g., progression of disease' },
            { text: 'Deterioration or long-standing impairment in functional status e.g., ADL dependent, bedbound, multiple falls' },
            { text: 'Frail, elderly' },
            { text: 'Major surgery' },
            { text: 'Decline hospital referral for further assessment or invasive interventions' },
            { text: 'Illness / death involving significant others' },
            { text: 'Enquire about AMD / LPA or express a desire to discuss end-of-life wishes' },
          ],
        },
      ],
    },
    {
      heading: 'Verbal Cues from Patients',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '"I\'m already so old, just let it be. Just live day by day."' },
            { text: '"I can live until 80 quite good already. It is already enough."' },
            { text: '"Die then die. No need to think so much."' },
            { text: '"I don\'t want to be a burden to my family."' },
            { text: '"I\'ve had enough; I do not want to continue treatment."' },
            { text: '"I have thought about stopping dialysis."' },
            { text: '"I don\'t want any more medicines."' },
            { text: '"What if my condition gets worse?"' },
            { text: '"I\'m scared I would have cancer."' },
          ],
        },
      ],
    },
    {
      heading: 'Useful Opening Statements',
      blocks: [
        {
          type: 'list',
          items: [
            { text: '"How are you coping with your current medical condition?"' },
            { text: '"What is important for you at this point in time?"' },
            { text: '"What are your fears and worries about the future?"' },
            { text: '"Have you heard about Advance Care Planning?"' },
            { text: '"What is important for you to live well?"' },
            { text: '"What gives you joy and meaning?"' },
            { text: '"What gives you strength when you face an illness?"' },
            { text: '"Has the thought of your condition deteriorating ever cross your mind?"' },
          ],
        },
      ],
    },
    {
      heading: 'Referral Process',
      blocks: [
        {
          type: 'text',
          content: 'Pace with patients if they are not prepared to engage in ACP discussions at the first encounter. It may take 2 or 3 timely visits before patients are ready to discuss their care preferences.',
        },
        {
          type: 'list',
          items: [
            { text: 'Option 1 (Preferred): Launch a "TCU ADVANCE CARE PLANNING FACILITATION (ACP)" order via Epic and direct patients to the check-out kiosk to book an appointment. The "TCU TELE-ADVANCE CARE PLANNING (ACP)" order is only reserved for those who prefer ACP discussions over the phone rather than in person.' },
            { text: 'Option 2: Create a "TCU MEDICAL SOCIAL SERVICE (MSW)" order via Epic and select ACP under "Reason for Referral".' },
            { text: 'Option 3: Patient to self-book MSW appointment via OneNUHS app.' },
          ],
        },
      ],
    },
    {
      heading: 'Uploading and Reviewing ACP',
      blocks: [
        {
          type: 'text',
          content: 'Successfully completed ACPs will be uploaded by the MSW onto the National Electronic Health Record (NEHR) system. Physicians may access NEHR to view ACP documents from the patient dashboard and provide care that is concordant with patient preferences.',
        },
        {
          type: 'text',
          content: 'When there is a change in the health status of the patient, it may be pertinent to revisit the ACP to ensure goals of care have not changed or to re-establish new care preferences.',
        },
      ],
    },
    {
      heading: 'REDMAP Communication Framework',
      blocks: [
        {
          type: 'text',
          content: 'REDMAP was developed by Dr Kirsty Boyd, Reader in Palliative Care, The University of Edinburgh. It is a 6-step guide to Future Care Planning conversations with people who are living with a serious illness, health conditions or disabilities that will get worse, or older people who are becoming frailer.',
        },
        {
          type: 'table',
          headers: ['Step', 'Key Questions / Statements'],
          rows: [
            { cells: ['Ready', 'Can we talk about your health and care? Who should be involved?'] },
            { cells: ['Expect', 'What do you know? Do you want to tell/ask me about anything? How have things been recently? What has changed? Some people think about what might happen if…?'] },
            { cells: ['Diagnosis', 'What we know is... We don\'t know... We are not sure... I hope that, but I am worried about… It is possible that you might… Do you have questions or worries we can talk about?'] },
            { cells: ['Matters', 'What is important to you and your family? How would you like to be cared for? What would you like to be able to do? Is there anything you don\'t want? What would [person\'s name] say about this situation, if we could ask them?'] },
            { cells: ['Actions', 'What we can do is... Options that can help are... This will not help because... That does not work when...'] },
            { cells: ['Plan', 'Let\'s plan ahead for when/if... Making some plans in advance helps people get better care.'] },
          ],
        },
      ],
    },
  ],
};
