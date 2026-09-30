import { CpgDocument } from '../types';

export const erectileDysfunction: CpgDocument = {
  id: 'erectile-dysfunction',
  condition: 'Erectile Dysfunction',
  source: 'NUP CPG',
  reviewDate: 'April 2025',
  advisors: 'Dr Sky Koh; Specialist Advisors: Adj A/Prof Benjamin Goh (Senior Consultant, NUH) / Dr Chia Jun Yang (Consultant, NUH)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        {
          type: 'text',
          content: 'Erectile dysfunction (ED) is a common condition where men struggle to achieve or maintain an erection, impacting sexual performance. It affects men of all ages, increasing with age. ED has physical (vascular, hormonal, neurological), psychological (anxiety, depression), and lifestyle-related causes. This condition significantly affects sexual and emotional well-being, self-esteem, and relationships.',
        },
      ],
    },
    {
      heading: 'Epidemiology',
      blocks: [
        {
          type: 'text',
          content: 'ED is a growing concern worldwide, with an estimated 322 million men expected to be affected by 2025. In Singapore, approximately half of all males above 30 report some degree of erectile dysfunction. This number increases substantially with age, affecting three-quarters of men in their sixties.',
        },
      ],
    },
    {
      heading: 'Risk Factors',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Endocrine: diabetes mellitus, thyroid disorders, hypogonadism, hyperprolactinemia.' },
            { text: 'Metabolic syndrome: hypertension, hyperlipidaemia, obesity, sedentary lifestyle.' },
            { text: 'Vascular: peripheral vascular disease.' },
            { text: 'Substance use: smoking, alcohol, illicit drugs.' },
            { text: 'Neurological: stroke, Parkinson\'s disease, multiple sclerosis, spinal cord injury.' },
            { text: 'Structural: Peyronie\'s disease, phimosis, prostate cancer treatment (surgery, radiation, hormone therapy), trauma.' },
            { text: 'Psychological: stress, marital/relationship issues, guilt, anxiety, depression, history of sexual abuse.' },
            { text: 'Drugs: anticonvulsants (phenytoin); antidepressants (lithium, MAO inhibitors, SSRIs, SNRIs, TCAs); antihistamines (dimenhydrinate, diphenhydramine, hydroxyzine); antihypertensives (alpha blockers, beta blockers, CCBs, thiazides, spironolactone); anti-Parkinson agents (bromocriptine, levodopa, trihexyphenidyl); psychotropics (chlorpromazine, haloperidol, benzodiazepines); cardiovascular drugs (digoxin, gemfibrozil); hormonal agents (5-alpha-reductase inhibitors, androgen receptor blockers, corticosteroids, GnRH analogues).' },
          ],
        },
      ],
    },
    {
      heading: 'Diagnosis',
      blocks: [
        {
          type: 'text',
          content: 'History and physical examination have a reported 95% sensitivity but 50% specificity in determining cause of ED, needing further tests to assist.',
        },
        {
          type: 'text',
          content: 'History: assessment of libido, morning erections, premature ejaculation, duration of symptoms; sexual history (5Ps — Partner, Practice, Past history of STI, Protection from STI, Prevention of Pregnancy); past medical history; previous cardiovascular evaluation, exertional symptoms, concomitant use of nitrates; baseline effort tolerance (ability to climb 2 flights of stairs or walk 2 bus stops); symptoms of hypogonadism (decreased libido, fatigability, loss of lean muscle mass, mood changes); evaluation of specific causes and risk factors for ED.',
        },
        {
          type: 'text',
          content: 'Physical Examination: blood pressure, heart rate, BMI; abdomen and external genitalia (structural issues, features of hypogonadism — loss of male hair pattern, gynaecomastia, small testes); assessment of femoral and peripheral pulses; targeted neurological evaluation.',
        },
        {
          type: 'table',
          headers: ['Score', 'Severity', 'Consistency', 'Remarks'],
          rows: [
            { cells: ['1', 'Severe', 'Tofu', 'Penis is large but not hard'] },
            { cells: ['2', 'Moderate', 'Peeled Banana', 'Penis is hard but not hard enough for penetration'] },
            { cells: ['3', 'Suboptimal', 'Unpeeled Banana', 'Penis is hard enough for penetration but not completely hard'] },
            { cells: ['4', 'Optimal', 'Cucumber', 'Penis is hard and completely rigid'] },
          ],
        },
        {
          type: 'text',
          content: 'Simplified Index of Erectile Function (IIEF-5) Score: a widely used, self-administered questionnaire that measures and grades severity of ED.',
        },
      ],
    },
    {
      heading: 'Investigations',
      blocks: [
        {
          type: 'text',
          content: 'Baseline investigations to identify underlying conditions (if not previously done):',
        },
        {
          type: 'list',
          items: [
            { text: 'Serum fasting glucose or HbA1c' },
            { text: 'Lipid panel' },
            { text: 'ECG' },
          ],
        },
        {
          type: 'text',
          content: 'Thyroid function tests are indicated for patients exhibiting signs or symptoms suggestive of thyroid disorders. If hypogonadism is suspected, referral to Urology is advised for morning testosterone level assessment and further management.',
        },
      ],
    },
    {
      heading: 'Management',
      blocks: [
        {
          type: 'text',
          content: 'Non-Pharmacological Therapy: effective management involves identifying and addressing the underlying cause, followed by targeted treatment. Optimising concomitant chronic conditions (hypertension, diabetes, hyperlipidaemia) is crucial. Consider medication adjustment if ED is suspected to be drug-induced. Lifestyle modifications — regular exercise, smoking cessation, weight loss in overweight men — demonstrate significant symptom improvement.',
        },
        {
          type: 'text',
          content: 'Initiating Pharmacological Therapy: ED and cardiovascular disease share common risk factors. Cardiovascular risk stratification uses the Singapore-modified Framingham Risk Score (SG-FRS-2023): low risk <5%, intermediate risk 5–20%, high risk ≥20%. Perform an ECG to assess for undiagnosed cardiovascular conditions if not done recently. Intermediate-risk patients should undergo exercise treadmill investigation via the Open Access Exercise Treadmill Testing Workflow. High-risk patients should be referred to Cardiology for clearance prior to initiating PDE-5 inhibitor therapy.',
        },
        {
          type: 'text',
          content: 'Patients without existing cardiovascular diseases can be initiated on PDE-5 inhibitors if they fulfil ALL: low cardiovascular risk (SG-FRS-2023 <5%), normal ECG, and good effort tolerance (able to climb 2 flights of stairs or walk 2 bus stops).',
        },
        {
          type: 'text',
          content: 'Patients with existing cardiovascular conditions can be initiated on PDE-5 inhibitors if they had undergone complete revascularisation of coronary arteries (successful PCI/CABG with no angina symptoms) OR received cardiology clearance.',
        },
        {
          type: 'table',
          headers: ['Drug', 'Initial Dose', 'Maximum Dose', 'Common ADRs', 'Rare ADRs', 'Remarks / Contraindications / Precautions'],
          rows: [
            { cells: ['Sildenafil (NS) — 50 mg tablet', '50 mg, 1 hour before sexual intercourse', '100 mg in 24 hours', 'Headache, flushing, gastrointestinal symptoms', 'Visual disturbance, dizziness, myalgia, insomnia, anxiety, vertigo, epistaxis, priapism, hypotension; can cause potentially fatal cardiovascular events (MI, arrhythmias, unstable angina)', 'Take on empty stomach, 2 hours after low-fat diet. Manual stimulation prior to intercourse required. Contraindicated with nitrates (GTN, ISMN, ISDN), severe cardiovascular disorders (unstable angina, cardiac failure), loss of vision in 1 eye due to non-arteritic anterior ischaemic optic neuropathy, hypotension (BP <90/50 mmHg), recent stroke or MI, known hereditary degenerative retinal disorders, severe hepatic impairment. Patients on alpha-blockers, mild/moderate liver impairment, or CrCl <30ml/min should start on 25mg.'] },
          ],
        },
        {
          type: 'text',
          content: 'Other treatments of ED include Low-intensity Extracorporeal Shockwave Therapy (LiESWT), Intracorporeal Injections, Vacuum Erection Devices, and penile prostheses.',
        },
      ],
    },
    {
      heading: 'Referral Criteria to Urology',
      blocks: [
        {
          type: 'list',
          items: [
            { text: 'Failed oral PDE5 inhibitor therapy with appropriate use (i.e., after 4 separate occasions of taking maximum doses on an empty stomach and with adequate stimulation).' },
            { text: 'Suspicion of hypogonadism.' },
            { text: 'Structural abnormalities, history of pelvic surgery, neurological disorders, complex medical conditions.' },
          ],
        },
      ],
    },
    {
      heading: 'Special Situations',
      blocks: [
        {
          type: 'text',
          content: 'HSG enrolled or teamlet patients demanding sildenafil based on previous use from private GP or specialist: determine probable cause, assess cardiovascular risk using SG-FRS-2023. For high-risk patients, decline and refer to cardiology. For medium-risk patients, recommend treadmill stress test. If patient insists, engage in shared decision-making, document discussion before prescribing. Escalate to senior doctor if pressured.',
        },
        {
          type: 'text',
          content: 'Non-HSG enrolled, non-teamlet patients requesting sildenafil: politely decline and advise them to consult their principal doctor. Inform that their principal physician can provide a private prescription fillable at the pharmacy at the same price, without quantity restrictions. If patient insists, explain that comprehensive cardiovascular risk assessment is required. Firmly decline if unwilling to undergo assessments.',
        },
        {
          type: 'text',
          content: 'Requests for sildenafil exceeding the monthly limit of 8 tablets: be aware that the pharmacy will restrict collection. Explain that this policy prevents potential abuse, discourages black market sales, rationalises stock, ensures equal access, and maintains a healthy drug supply. Consider asking them to revisit when their supply runs out for re-prescription.',
        },
      ],
    },
  ],
};



const heartFailure: CpgDocument = {
};
