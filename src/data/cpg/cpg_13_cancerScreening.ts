import { CpgDocument } from '../types';

export const cancerScreening: CpgDocument = {
  id: 'cpg-cancer-screening',
  condition: 'Cancer Screening',
  source: '13 NUP CPG - Cancer Screening.pdf',
  reviewDate: 'Updated November 2025. Next review date: November 2028.',
  advisors: 'Key FPs: Dr Alicia Ong / Dr Chua Ying Xian / Dr Lau Yen Ning / Dr Tan Chun Jek. Specialist Advisor: Dr Gloria Chan (Consultant, National University Cancer Institute, Singapore).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Cancer is currently the leading cause of death in Singapore, accounting for 24.6% of deaths in 2023. Lifestyle and behavioural factors such as obesity, physical inactivity, and smoking increase an individual\'s risk of developing cancer. It is important to encourage healthful behaviour to minimise the impact of these risk factors.' },
        { type: 'text', content: 'Principles of Screening: Health screening is conducted to facilitate early diagnosis of diseases that have yet to manifest (asymptomatic), so that treatment and intervention can be instituted promptly to achieve good health outcomes. The Screening Test Review Committee (STRC) tiers its recommendations into 3 categories:' },
        { type: 'table', headers: ['Category', 'Definition'], rows: [
          { cells: ['1. Population-level screening', 'Good robust evidence that the screening test is both clinically effective and cost effective for use to screen the population (for the specified age range).'] },
          { cells: ['2. Individual-level decision', 'The net benefit does not outweigh the risk in general populations, but the screening may be useful for high-risk populations. OR there is some evidence of effectiveness but cost-effectiveness is unfavourable.'] },
          { cells: ['3. Not recommended', 'Insufficient evidence to make a decision. OR good evidence that the screening test is not effective, or that the net harm outweighs benefits.'] },
        ]},
      ],
    },
    {
      heading: 'Screening for Colorectal Cancer',
      blocks: [
        { type: 'text', content: 'How to Screen: (1) Stool-based tests: Faecal Immunochemical Test (FIT) — preferred; Guaiac Faecal Occult Blood Test (FOBT) — no longer used for asymptomatic screening; Stool DNA test (not available in NUP). (2) Direct visualisation/imaging: Colonoscopy, Flexible sigmoidoscopy, CT colonography. Note: Carcinoembryonic antigen (CEA) is NOT recommended for screening.' },
        { type: 'text', content: 'Colorectal Cancer Screening in NUP: (1) Colonoscopy — refer open access colonoscopy (if fulfils criteria) or refer to SOC routine for screening colonoscopy. (2) FIT — HSG enrollee: send to Care Coordinator (CC) for FIT test; Non-HSG enrollee: Provider to order "FECAL IMMUNOCHEMICAL TEST (FIT) PANEL". For patients at increased risk, CCs will refer to clinician for colonoscopy discussion. FIT to be done only if patient declines colonoscopy.' },
        { type: 'table', headers: ['Risk Group', 'Screening Tool', 'Onset (Age)', 'Frequency'], rows: [
          { cells: ['A. Average Risk (Asymptomatic or family history limited to non-first degree relatives)', 'Faecal Immunochemical Testing (FIT)', '50', 'Annually'] },
          { cells: ['A. Average Risk', 'Colonoscopy', '50', 'Every 5–10 years'] },
          { cells: ['A. Average Risk', 'CT Colonography', '50', 'Every 5 years'] },
          { cells: ['B1. CRC in first degree relative aged ≤ 60 years or ≥ 2 first degree relatives', 'Colonoscopy', '10 years prior to youngest case or by age 40, whichever earlier', 'Every 5 years'] },
          { cells: ['B2. CRC in first degree relative aged > 60 years', 'Colonoscopy', '10 years prior to youngest case or by age 50, whichever earlier', 'Every 5–10 years'] },
          { cells: ['B3. Personal history of colorectal polyps', 'Colonoscopy', '1–3 years after polypectomy if high-risk features (> 1cm, multiple, villous); 3–5 years if low risk', '—'] },
          { cells: ['B4. Personal history of colorectal malignancy', 'Colonoscopy', 'One year after resection', 'Every 1–3 years'] },
          { cells: ['B5. Personal history of ovarian or endometrial cancer', 'Colonoscopy', 'One year after resection', ''] },
          { cells: ['C1. Family history of familial adenomatous polyposis', 'Flexible sigmoidoscopy (switch to colonoscopy if adenomas identified); consider referral for cancer genetic risk assessment', '10–12 years (from puberty)', 'Annually'] },
          { cells: ['C2. Family history of hereditary non-polyposis colorectal cancer (Lynch syndrome)', 'Colonoscopy; consider referral for cancer genetic risk assessment', '20–25 years', 'Every 1–2 years'] },
          { cells: ['C3a. Inflammatory bowel disease — left-sided colitis', 'Colonoscopy', 'From 15th year of diagnosis onwards', 'Every 1–2 years'] },
          { cells: ['C3b. Inflammatory bowel disease — pan-colitis', 'Colonoscopy', 'From 8th year of diagnosis onwards', 'Every 1–2 years'] },
        ]},
        { type: 'text', content: 'Management of CRC Screening: FIT Positive → Referral to Colorectal Surgery Service for Colonoscopy. Normal colonoscopy → Repeat FIT in 5 years. Abnormal colonoscopy → Follow up with Colorectal Surgery Service; not for further FIT.' },
      ],
    },
    {
      heading: 'Screening for Breast Cancer',
      blocks: [
        { type: 'list', items: [
          { text: 'Mammogram', children: [
            { text: '40–49 years old: Shared decision making after discussion of potential benefits, limitations, and harms (higher false positive rates, false negative results). If mammogram is performed, it should be done annually.' },
            { text: '50–69 years old: Mammogram every 2 years' },
            { text: '> 69 years old: Individualised decision considering benefits, risks and estimated life expectancy. If screening is performed, 2-yearly.' },
          ]},
          { text: 'Breast self-examination (a week after menses) is not used for screening. BSE can be encouraged for women from the age of 30 to improve awareness.' },
          { text: 'Breast MRI should not be used for screening of women at normal risk. It may be used as an adjunct to mammogram for high-risk groups, or for women with diffuse breast injection augmentation.' },
          { text: 'Ultrasound breast, tumour markers (CEA, CA15-3) and clinical breast examination are NOT routinely recommended for screening.' },
        ]},
        { type: 'text', content: 'Special Populations: (1) Refer to breast clinic for high-risk groups: received radiation treatment to the chest (e.g. for Hodgkin disease); women with gene mutations conferring high risk of breast cancer; strong family history of breast cancer but no proven mutation (screening recommended as early as 5–10 years prior to the age of onset in youngest family member, but not earlier than age 25–30 years). (2) Previous breast cancer or pre-malignant conditions: annual screening mammography of remnant and contralateral breasts.' },
        { type: 'text', content: 'To Arrange Mammogram at NUP: Patients can self-book by calling 6370 6556, NUHS or HealthHub App, or at https://for.sg/booknuhsdmammogram. Services at: Bukit Batok, Bukit Panjang, Choa Chu Kang, Clementi, Pioneer Polyclinics.' },
        { type: 'table', headers: ['Medical Institution', 'Contact for Abnormal Mammogram Referral'], rows: [
          { cells: ['Changi General Hospital (CGH)', '8127 7900'] },
          { cells: ['Khoo Teck Puat Hospital (KTPH)', '6602 1665'] },
          { cells: ['National Cancer Centre (NCC)', '6436 8415'] },
          { cells: ['National University Hospital (NUH)', '6772 2263'] },
          { cells: ['Tan Tock Seng Hospital (TTSH)', '6357 8177'] },
          { cells: ['Sengkang General Hospital (SKGH)', '6930 3220 / 6930 3990'] },
        ]},
      ],
    },
    {
      heading: 'Screening for Cervical Cancer',
      blocks: [
        { type: 'list', items: [
          { text: 'Who and How to Screen (all females who have ever had sexual intercourse)', children: [
            { text: '25–29 years: Cervical cytology (Pap smear), once every 3 years' },
            { text: '30–69 years: Human Papilloma Virus (HPV) DNA test, every 5 years (National Cervical Cancer Screening Programme)' },
            { text: 'Women who have never had sexual intercourse need not have screening. NUP does not screen patients with no previous sexual intercourse.' },
            { text: 'Ultrasound and CT pelvis is NOT recommended as screening tests.' },
          ]},
          { text: 'When to Stop Screening', children: [
            { text: 'A woman can be discharged from screening at 69 years of age if she has: 3 consecutive negative cervical cytology tests; OR 2 consecutive negative HPV tests in the last 10 years, with the most recent test occurring within the last 5 years.' },
            { text: 'For women who had history of CIN2, CIN3 or AIS, routine screening should continue for at least 20 years, even if it extends beyond 69 years of age.' },
          ]},
          { text: 'Special Populations — Immunocompromised women (HIV positive, undergone solid organ transplant, or clinical conditions requiring ≥ 2 immunosuppressive agents)', children: [
            { text: 'Annual cervical cytology for women aged 25–29 years old' },
            { text: '3-yearly HPV primary screening for women ≥ 30 years old. Those tested with any high-risk HPV strains should be sent for colposcopy instead of cytology triage.' },
            { text: 'Lifetime screening' },
          ]},
        ]},
        { type: 'text', content: 'Cervical Cancer Screening in NUP: Order "TCU NUR Cervical Cancer screening (First Visit)" on NGEMR, patient to book appointment at kiosks as per usual appointments.' },
        { type: 'table', headers: ['Hysterectomy Status', 'Action'], rows: [
          { cells: ['Subtotal hysterectomy', 'Routine cervical cancer screening'] },
          { cells: ['Hysterectomy for benign disease, no known cervical cancer precursors/cancer', 'Stop screening'] },
          { cells: ['Hysterectomy for unknown histology', 'Do 1 baseline vault smear, stop screening if negative'] },
          { cells: ['Immunosuppressed', 'Vault smears yearly'] },
          { cells: ['Past history of CIN — excision margin involved or not adequately assessed', 'Vault smear at least yearly'] },
          { cells: ['Past history of CIN 1/2/3 completely excised', 'Vault smear for 5 years yearly, then 2-yearly subsequently'] },
          { cells: ['Past history of invasive gynaecological cancer, or previously treated for vaginal intra-epithelial neoplasia', 'Follow up with gynaecologist'] },
        ]},
        { type: 'text', content: 'HPV Vaccination: Offer HPV vaccination for females aged 9–26 years to reduce risk of cervical cancer. School-based programme since April 2019: Dose 1 — HPV2-valent at 12–13 years (Secondary 1); Dose 2 — HPV2 at 13–14 years (Secondary 2). Dose 3 only recommended if dose 1 was given at 15 years of age or older. HPV testing should NOT be used for screening before deciding on HPV vaccination.' },
      ],
    },
    {
      heading: 'Screening for Endometrial, Ovarian and Prostate Cancer',
      blocks: [
        { type: 'text', content: 'Endometrial Cancer: Women with HNPCC or Lynch Syndrome may consider annual screening starting between ages 30 and 35. Routine screening is NOT recommended for women with average risk or those with increased risk (obesity, diabetes, hypertension, nulliparity, infertility, ovulation failure, late menopause, tamoxifen therapy or history of unopposed oestrogen therapy). Early evaluation of postmenopausal bleeding with referral to gynaecologist is important for early detection.' },
        { type: 'text', content: 'Ovarian Cancer: Insufficient supporting evidence for routine screening of asymptomatic women at increased risk. Known BRCA-carriers should be on follow up with an oncologist. Present evidence does NOT support routine screening with serum markers (e.g. CA 125) and/or ultrasound as it is ineffective and tends to lead to unnecessary interventions.' },
        { type: 'text', content: 'Prostate Cancer: Current evidence does not support population-based screening. May offer screening to men aged 50–70 years with estimated further life expectancy > 10 years — discuss potential benefits and risks (shared decision). Can consider SmartPhrase .INPSA to document discussion in NGEMR. High risk groups (one or more first-degree relatives diagnosed before age 65 years) may be offered screening 5–10 years younger than youngest prostate cancer in the family.' },
        { type: 'text', content: 'How to Screen for Prostate Cancer: Serum PSA recommended. PSA > 4 ng/ml requires further follow-up with urologist. Benign causes of elevated PSA include BPH, prostatitis, recent prostate biopsy/TURP/cystoscopy, ejaculation, urinary retention, perineal trauma or prostatic infarction. DRE does not cause clinically significant rise in PSA. PSA is lowered by 5ARI by about 50% after 6–12 months. Screening interval of 2 years or more preferred over annual screening.' },
      ],
    },
    {
      heading: 'Screening for Other Cancers',
      blocks: [
        { type: 'list', items: [
          { text: 'Gastric Cancer: Current evidence does not support population-based screening. High risk groups: Individuals with HNPCC or Lynch Syndrome may benefit from screening with OGD, starting from age 30–35 years. Individual-level screening: refer to GASTROClear section under Gastro SAG for eligibility and workflow information.' },
          { text: 'Liver Cancer: No need to screen general population. Offer screening to high-risk groups (Hepatitis B carriers or individuals with cirrhosis): 6-monthly alpha-fetoprotein and 6–12 monthly ultrasound HBS (refer to Hepatitis B CPG for more details). Liver function test is NOT recommended as a screening test for liver cancer.' },
          { text: 'Lung Cancer: Current evidence does not support population-based screening. Annual Low-dose CT (LDCT) screening may be offered (individual level decision) to: Individuals aged 55–74 who have smoked ≥ 30 pack years and are continuing to smoke; Individuals aged 55–74 who have smoked ≥ 30 pack years but quit < 15 years ago. If patient agreeable, refer Respiratory medicine (routine) and indicate: Others (High risk group for discussion for Lung Ca screening). CXR or tumour markers for lung cancer are NOT recommended as screening tools.' },
          { text: 'Nasopharyngeal Carcinoma (NPC): No need to screen general population. May offer screening to high-risk groups: Individuals with a first-degree relative (parent, sibling) with NPC. How to Screen: Anti-EBV EA IgA and nasoendoscopy. Refer to ENT specialist for screening.' },
        ]},
      ],
    },
    {
      heading: 'Guidelines for Genetic Testing Referral to Medical Oncology (Cancer Genetics Clinic)',
      blocks: [
        { type: 'list', items: [
          { text: 'Hereditary Breast and Ovarian Cancer Syndrome', children: [
            { text: 'Personal or family history of: breast cancer diagnosed < 40 years; male breast cancer, any age; epithelial ovarian cancer, any age; triple negative breast cancer diagnosed < 50 years; ≥ 2 breast cancers, at least one aged < 50 years; both breast and epithelial ovarian cancers; Two or more breast/ovarian cancers in the same patient.' },
            { text: 'Individual from a family with a known BRCA1/2 mutation or other rare gene mutations in the family. BRCA1/2 carriers are also at risk for pancreatic and prostate cancer.' },
            { text: 'Consider referring families with breast cancer and young onset pancreatic or prostate cancer diagnosed before age 50.' },
          ]},
          { text: 'Lynch Syndrome (LS)', children: [
            { text: 'Patient with CRC diagnosed < 50 years' },
            { text: '≥ 1 primary CRC or other LS-related tumours (endometrium, stomach, pancreas, small intestine, ovary, kidney, brain, ureters, bile duct) diagnosed at any age, AND who has at least 1 first-degree relative diagnosed with CRC or LS-related tumour diagnosed < 50 years, AND who has 2 or more first- or second-degree relatives with CRC or LS-related tumour at any age' },
            { text: 'Meets Amsterdam criteria (At least 3 family members affected, spanning 2 generations, at least 1 affected family member diagnosed below age 50 years, all 3 are first-degree relatives of each other)' },
            { text: 'Endometrial cancer < 50 years' },
            { text: 'Known LS mutation in family' },
          ]},
          { text: 'Familial Adenomatosis Polyposis (FAP)' },
        ]},
      ],
    },
  ],
};
