import { CpgDocument } from '../types';

export const bph: CpgDocument = {
  id: 'cpg-bph',
  condition: 'Benign Prostatic Hyperplasia (BPH)',
  source: '10 NUP CPG - Benign Prostatic Hyperplasia (BPH).pdf',
  reviewDate: 'Reviewed February 2024. Next review date: February 2027.',
  advisors: 'Key FP: Dr Sky Koh Wei Chee. Specialist Advisor: Asst Prof Benjamin Goh (Consultant, Department of Urology, NUH). Acknowledgement: NUHSP: Ms Neo Ying Fang',
  sections: [
    {
      heading: 'History',
      blocks: [
        { type: 'list', items: [
          { text: 'Voiding Symptoms', children: [
            { text: 'Hesitancy' },
            { text: 'Straining' },
            { text: 'Double voiding' },
            { text: 'Sensation of incomplete emptying' },
            { text: 'Weak flow' },
            { text: 'Terminal dribbling' },
          ]},
          { text: 'Storage Symptoms', children: [
            { text: 'Frequency' },
            { text: 'Urgency' },
            { text: 'Nocturia' },
          ]},
          { text: 'Duration of Symptoms' },
          { text: 'Other Associated Symptoms: Gross haematuria, urinary incontinence (any need for diapers?), dysuria, symptoms of UTI' },
          { text: 'Medication List: Diuretics, SGLT2-inhibitors, anti-psychotics, traditional medications, supplements' },
          { text: 'Past Surgical History: Procedures like indwelling catheter, cystoscopy, bladder stones, TURP' },
          { text: 'Past Medical History: DM, CCF, Parkinson\'s, spinal injuries' },
          { text: 'Social History: Coffee, tea, alcohol drinking, smoking' },
          { text: 'Red Flags from History: Haematuria, acute retention of urine, fever with loin pain' },
        ]},
        { type: 'text', content: 'Differentials for LUTS in males: UTI, Prostatitis, Distal ureteral stone, Ureteral stricture, Bladder tumour, Neurogenic bladder dysfunction, Over Active Bladder (OAB) - Detrusor over-activity / under-activity, Nocturnal polyuria, Foreign body.' },
      ],
    },
    {
      heading: 'Physical Examination',
      blocks: [
        { type: 'list', items: [
          { text: 'BP and hydration status' },
          { text: 'Abdominal: Mass, palpable or percussable bladder, inguinal hernia, ballotable kidney' },
          { text: 'Any signs of ESRF' },
          { text: 'Digital Rectal Examination (DRE)', children: [
            { text: 'Prostate: Size, consistency, median sulcus, tenderness' },
            { text: '**Red flags: Irregular, hard, nodules' },
            { text: 'Rectal mass' },
            { text: 'Assess anal tone — Poor anal tone and sacral anaesthesia suggest possible neurogenic voiding dysfunction' },
            { text: 'Penis: Phimosis, hypospadias' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Investigation',
      blocks: [
        { type: 'list', items: [
          { text: 'UFEME to screen for pyuria, haematuria, proteinuria or other pathology. Urine culture if UFEME abnormal.' },
          { text: 'Baseline PSA: Levels of PSA proposed as a good surrogate for estimating prostate volume. For prostate volume > 30 g, PSA would be > 1.5 μg/L. PSA testing helps to detect prostate cancer and prostatitis, especially when DRE reveals an abnormal prostate.' },
        ]},
        { type: 'text', content: 'PSA Screening (Singapore Urological Association, 2017): Population screening for prostate cancer with PSA is controversial and not recommended. For men between 50–70 years of age with a life expectancy of more than 10 years, PSA screening may be offered after an informed discussion on potential benefits and harms including possibilities of false positive and false negative results, complications of subsequent TRUS guided biopsy and false negative biopsies. Men with a strong family history (one or more first-degree relatives diagnosed before age 65 years) may be offered screening 5–10 years younger than the youngest prostate cancer in the family. Routine screening in men younger than 50 years old without a strong family history is not recommended. Men with life expectancy less than 10–15 years should be informed that testing and treatment is unlikely to be beneficial. A PSA value of > 4 μg/L needs referral to urology for further evaluation. A routine screening interval of two years or more may be preferred over annual screening in asymptomatic men.' },
        { type: 'text', content: 'Voiding Diary: Should be used when frequency, urgency or nocturia is the dominant symptom. Helps to identify patients with isolated nocturnal polyuria, excessive fluid intake or overactive bladder.' },
      ],
    },
    {
      heading: 'International Prostate Symptoms Score (IPSS) and Quality of Life Score (QOL)',
      blocks: [
        { type: 'table', headers: ['Question', '0', '1', '2', '3', '4', '5'], rows: [
          { cells: ['Incomplete Emptying: Over the past month, how often have you had a sensation of not emptying your bladder completely after you finished urinating?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Frequency: Over the past month, how often have you had to urinate again less than 2 hours after you finished urinating?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Intermittency: Over the past month, how often have you found you stopped and started again several times when you urinated?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Urgency: Over the past month, how often have you found it difficult to postpone urination?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Weak Stream: Over the past month, how often have you had a weak urinary stream?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Straining: Over the past month, how often have you had to push or strain to begin urination?', 'Not at all', 'Less than 1 time in 5', 'Less than half the time', 'About half the time', 'More than half the time', 'Almost always'] },
          { cells: ['Nocturia: Over the past month, how many times did you most typically get up to urinate from the time you went to bed until the time you got up in the morning?', 'None', '1 time', '2 times', '3 times', '4 times', '5 or more times'] },
        ]},
        { type: 'text', content: 'IPSS Scoring: 0–7 = Mild; 8–19 = Moderate; 20–35 = Severe. QOL Score: < 3 not bothered; ≥ 3 bothered.' },
        { type: 'table', headers: ['QOL Question', '0', '1', '2', '3', '4', '5', '6'], rows: [
          { cells: ['If you were to spend the rest of your life with your urinary condition just the way it is now, how would you feel about that?', 'Delighted', 'Pleased', 'Mostly satisfied', 'Mixed mostly', 'Mostly dissatisfied', 'Unhappy', 'Terrible'] },
        ]},
      ],
    },
    {
      heading: 'Further Investigation',
      blocks: [
        { type: 'text', content: 'These investigations may be required in patients with a definite indication, such as gross haematuria, uncertain diagnosis, DRE abnormalities, poor response to medical therapy or for surgical planning.' },
        { type: 'list', items: [
          { text: 'Urine cytology' },
          { text: 'Uroflowmetry' },
          { text: 'Urodynamics' },
          { text: 'Cystoscopy' },
          { text: 'Radiological evaluation of upper urinary tract (e.g. IVU, CT KUB, Urogram)' },
          { text: 'Prostate ultrasound' },
          { text: 'MRI prostate and prostate biopsy are indicated when the PSA is elevated' },
        ]},
      ],
    },
    {
      heading: 'Management — Medical Therapy',
      blocks: [
        { type: 'text', content: 'Cost guide: $ = <$10/month; $$ = $10–<$20/month; $$$ = $20–<$30/month; $$$$ = $30–<$60/month. Amount payable depends on patient subsidy level and drug subsidy class. Unit prices before GST and accurate as of Jan 2024.' },
        { type: 'text', content: 'Alpha-1 blockers: Act by relaxation of smooth muscle in prostatic urethra, bladder neck and blood vessels. IPSS decreases by about 35–40% and the flow rate by 20–25%. However, they do not prevent progression of BPH. Patients usually experience full therapeutic effect within one week. Recommended for patients whose urinary symptoms affect and limit their function.' },
        { type: 'table', headers: ['Drug', 'Dose', 'Subsidy', 'Cost', 'Risk of Postural Hypotension', 'Risk of Retrograde Ejaculation', 'Risk of Floppy Iris Syndrome', 'Remarks'], rows: [
          { cells: ['Alfuzosin XL (Xatral XL)', '10 mg ON', 'SDL2', '$', 'Medium', 'Low', 'Medium', 'Recommended for younger patients'] },
          { cells: ['Tamsulosin (Harnal)', '0.4 mg ON', 'NS', '$$', 'Low', 'Medium', 'High', 'Recommended in elderly with high falls risk'] },
          { cells: ['Terazosin (Hytrin)', '1–10 mg ON', 'SDL2', '2mg: $; 5mg: $$$', 'High', 'Low', 'Low', 'Suitable as an anti-hypertensive. Can be increased up to 20mg if inadequate response after 4–6 weeks'] },
        ]},
        { type: 'text', content: '5-Alpha-reductase inhibitors (5ARI): Indicated for prostate volumes > 30 g and significant obstruction. Efficacy is more pronounced in those with larger prostatic volumes. Efficacy is minimal for prostatic volume < 30 g. Decreases prostate volume by about 18–28% after 6–12 months; IPSS decreases by about 20–30%; reduces PSA by 50% after 6–12 months. Patients usually experience full therapeutic effects after six months of treatment.' },
        { type: 'list', items: [
          { text: 'Finasteride (Proscar): 5 mg OD' },
          { text: 'Dutasteride (Avodart): 0.5 mg OD' },
          { text: 'ADR: Decreased libido, erectile dysfunction, ejaculatory disorders, mastalgia, gynaecomastia' },
          { text: 'PSA guidance: The PSA value should reduce by 50% after at least 6 months of 5ARI therapy. A red flag is a patient\'s PSA that reduces by approximately half but then begins to rise for an unexplained reason, assuming medication compliance.' },
        ]},
      ],
    },
    {
      heading: 'Management — Lifestyle Modifications',
      blocks: [
        { type: 'list', items: [
          { text: 'Modify drinking habits, cut down fluid intake at night' },
          { text: 'Restriction of caffeine and alcohol intake' },
          { text: 'Avoidance/monitoring usage of some drugs (diuretics, antihistamines, antidepressants)' },
          { text: 'Stop smoking' },
          { text: 'Regular exercise' },
          { text: 'Lose weight if BMI is high' },
          { text: 'Timed or organised voiding (Bladder retraining)' },
          { text: 'Keep other medical conditions well managed' },
        ]},
      ],
    },
    {
      heading: 'Surgical Therapy Options',
      blocks: [
        { type: 'list', items: [
          { text: 'Bipolar Transurethral Resection of Prostate (TURP)' },
          { text: 'Enucleation of obstructing prostatic adenoma' },
          { text: 'Transurethral Laser prostatectomy' },
          { text: 'Transurethral Incision of Prostate (TUIP) / Open prostatectomy' },
          { text: 'UroLift and Rezum water vapour treatments' },
        ]},
      ],
    },
    {
      heading: 'Referral to Urologist',
      blocks: [
        { type: 'list', items: [
          { text: 'Persistent LUTS (based on moderate–severe IPSS or QOL score ≥ 3)' },
          { text: 'Gross haematuria' },
          { text: 'Urinary incontinence' },
          { text: 'Palpable bladder' },
          { text: 'DRE suspicious of prostate cancer' },
          { text: 'Abnormal PSA levels (> 4.0 ng/ml)' },
          { text: 'A rise in PSA while on 5-alpha reductase inhibitors' },
          { text: 'Recurrent infection' },
          { text: 'Complications arising from obstruction like hydronephrosis, renal failure' },
          { text: 'History/risk of urethral stricture' },
          { text: 'Neurological disease raising the likelihood of a primary bladder disorder' },
          { text: 'Failure of medical treatment at primary care level' },
          { text: 'Note: Post catheterised patients presenting with ARU — Consider A&E referral (if gross haematuria or signs of urosepsis) or Direct Access referral to Urology (within 1 week, if patient is assessed to be able to take care of urinary catheter/bag)' },
        ]},
      ],
    },
    {
      heading: 'Follow Up in Primary Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Assess treatment success or failure and possible adverse events' },
          { text: 'Assessment of treatment success varies: usually 2–4 weeks for alpha blocker therapy and at least 3 months for a 5α-reductase inhibitor' },
          { text: 'If treatment is successful and patient is satisfied, annual PSA for patients below age 70 years is generally recommended for those on 5-alpha reductase inhibitors' },
          { text: 'Follow-up strategy allows the physician to detect any changes in the last year, specifically if symptoms have progressed or become more bothersome, or if a complication has developed creating an indication for surgery' },
        ]},
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['Review of Lower Urinary Tract Symptoms', 'Annually', 'Recommended tool: International Prostate Symptom / Quality of Life Score'] },
          { cells: ['Clinical Examination — Abdominal and Digital Rectal Exam', 'Initial assessment', 'Abdominal examination includes assessment for a palpable bladder. Rectal examination to assess size, consistency and regularity of prostate'] },
          { cells: ['Co-Morbidity Assessment (includes medication review)', 'Initial assessment', ''] },
          { cells: ['Urine Dipstick or Microscopy', 'Initial assessment', 'Screen for haematuria, pyuria and glycosuria'] },
        ]},
      ],
    },
  ],
};
