import { CpgDocument } from '../types';

export const breastCancerSurvivorship: CpgDocument = {
  id: 'cpg-breast-cancer-survivorship',
  condition: 'Breast Cancer Survivorship',
  source: '66 Breast Cancer Survivorship (Summary).pdf',
  reviewDate: 'NUH Summary',
  advisors: 'Dr Chan Ching Wan (Senior Consultant, Dept of General Surgery (Breast), NUH)',
  sections: [
    {
      heading: 'Surveillance and Follow-Up',
      blocks: [
        { type: 'list', items: [
          { text: 'Annual mammogram and annual physical examination.' },
          { text: 'Any new masses — send for assessment/investigation.' },
          { text: 'No need for any regular blood tests or other investigations such as metastatic screen or tumour markers.' },
          { text: 'Screen for what is appropriate at patient\'s age — e.g. DM, Hypertension, IHD. Advise normal screening for other cancers such as colorectal and cervical cancer. Check for osteoporosis when post-menopausal.' },
        ]},
      ],
    },
    {
      heading: 'Screening for Distant Metastasis',
      blocks: [
        { type: 'text', content: 'Screen for distant metastasis at each annual visit (bone, lung, liver and brain). Ask about and look for:' },
        { type: 'list', items: [
          { text: 'Bone: Bone pain — persistent, not relieved by anything.' },
          { text: 'Lung: Increasing shortness of breath on exertion (SOBOE) — although a variety of reasons not related to cancer may be the cause. Assess for pleural effusion.' },
          { text: 'Liver: Look for hepatomegaly and jaundice.' },
          { text: 'Brain: Increasing frequency of headaches.' },
        ]},
      ],
    },
    {
      heading: 'Side Effects of Treatment to Monitor',
      blocks: [
        { type: 'list', items: [
          { text: 'Tamoxifen (pre-menopausal): Monitor for endometrial cancer — any unusual vaginal bleeding should be investigated. Deep vein thrombosis risk. Hot flushes, mood changes.' },
          { text: 'Aromatase inhibitors (post-menopausal): Bone loss — monitor bone density, prescribe calcium and Vitamin D. Joint pains and stiffness. Increased cardiovascular risk.' },
          { text: 'Trastuzumab (Herceptin): Cardiac toxicity — monitor cardiac function (LVEF). Infusion reactions.' },
          { text: 'Chemotherapy: Peripheral neuropathy, cognitive changes ("chemo brain"), fatigue, early menopause.' },
          { text: 'Radiotherapy: Skin changes, fatigue, lymphoedema (if axillary irradiation).' },
          { text: 'Lymphoedema: Monitor for swelling of arm on affected side. Refer to physiotherapy/lymphoedema specialist if present.' },
        ]},
      ],
    },
    {
      heading: 'General Wellness and Lifestyle',
      blocks: [
        { type: 'list', items: [
          { text: 'Encourage regular physical activity — associated with reduced recurrence risk.' },
          { text: 'Healthy diet and weight management — obesity associated with increased recurrence.' },
          { text: 'Smoking cessation.' },
          { text: 'Limit alcohol consumption.' },
          { text: 'Psychosocial support — screen for depression and anxiety, refer to counselling/support groups as needed.' },
          { text: 'Fertility and sexual health concerns — refer appropriately for young survivors.' },
        ]},
      ],
    },
  ],
};
