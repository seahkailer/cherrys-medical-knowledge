import { CpgDocument } from '../types';

export const chronicHepatitisC: CpgDocument = {
  id: 'chronic-hepatitis-c',
  condition: 'Chronic Hepatitis C',
  source: '17 NUP CPG - Chronic Hepatitis C.pdf',
  reviewDate: 'October 2024',
  advisors: 'Dr Mark Muthiah (Senior Consultant, NUH) / Dr Alexander Yip (Consultant, Alexandra Hospital) / Dr Alex Soh (Consultant, Alexandra Hospital)',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Hepatitis C is an inflammation of the liver caused by the hepatitis C virus (HCV). HCV is primarily a blood-borne virus. The most common modes of infection are: (1) Injecting drug through sharing of injection equipment; (2) Inadequate sterilization of medical equipment; (3) Transfusion of unscreened blood and blood products; (4) Unsafe sex practices that lead to exposure to blood, people with multiple sexual partners and among men who have sex with men (less common).' },
        { type: 'text', content: 'Acute Hepatitis C infections are usually asymptomatic. Around 30% of infected persons clear the virus spontaneously within 6 months without treatment. The remaining 70% will develop chronic HCV infection. Among this group, the risk of cirrhosis ranges from 15–30% within 20 years.' },
        { type: 'text', content: 'Unlike Hepatitis B, there is currently no effective vaccine against hepatitis C. However, Direct-acting antiviral agents (DAAs) can cure more than 95% of persons affected by HCV.' },
        { type: 'text', content: 'In Singapore, acute hepatitis C infection is a notifiable disease under section 6 of the Infectious Disease Act within 72 hours from time of diagnosis. Chronic hepatitis C need not be reported to MOH.' },
        { type: 'text', content: 'Epidemiology: Globally, an estimated 50 million people have chronic HCV infection with approximately 1 million new infections per year. In Singapore, the seroprevalence is low (0.37–0.54%) based on blood donor studies, with majority among those with history of injecting drug use. Approximately 45% of people who inject drugs show evidence of current or past HCV infection.' },
      ],
    },
    {
      heading: 'Screening and Diagnosis',
      blocks: [
        { type: 'text', content: 'Screening (per Report of Screening Test Review Committee, March 2019) is recommended for:' },
        { type: 'list', items: [
          { text: 'At-Risk Groups', children: [
            { text: 'Children born to HCV positive mothers' },
            { text: 'Chronic haemodialysis patients' },
            { text: 'Past or present intravenous drug abusers' },
            { text: 'Individuals who underwent invasive procedures in health-care facilities with inadequate infection control practices' },
            { text: 'Individuals with known exposures to HCV (e.g. healthcare workers following needle stick injury, recipients of blood or organs from HCV-positive donor)' },
            { text: 'Individuals whose past or present sex partners were/are HCV infected or intravenous drug abusers' },
            { text: 'HIV patients' },
          ]},
          { text: 'Healthcare Workers', children: [
            { text: 'All HCWs with direct patient contact are encouraged to have their status checked' },
            { text: 'HCWs practising in specialties or areas involving exposure-prone procedures' },
          ]},
        ]},
        { type: 'text', content: 'Diagnosis depends on detection of antibodies to recombinant antigens (Anti-HCV antibody) and detection of viral RNA (e.g. by PCR techniques).' },
        { type: 'text', content: 'Clinical Presentation: Most patients do not have symptoms in the first week of infection. Symptoms may develop anywhere between 2 weeks to 6 months. In the local context, most patients in the primary care setting were either discharged from specialist or defaulted follow-up. Patients who are treated and discharged would have achieved sustained virological response (SVR) defined by undetectable HCV RNA ≥ 12 weeks after treatment completion with DAA and transaminase normalization. Likelihood of achieving SVR with DAA generally exceeds 95%.' },
      ],
    },
    {
      heading: 'Management and Follow-Up',
      blocks: [
        { type: 'text', content: 'Patients who are discharged generally do not require follow-up if there is no evidence of cirrhosis. Assessment for other causes of liver disease is recommended for patients with persistently elevated transaminase levels after SVR. Patients who have risk of recurrence (habit of adding tattoo, IVDU, multiple sexual partners) should be counselled.' },
        { type: 'text', content: 'Cirrhotic patients are at risk for Hepatocellular Carcinoma and should undergo surveillance every 6 months with ultrasound (with or without AFP testing) with Gastro SOC. If relapse is suspected or cannot be ruled out, refer to Gastro for HCV-RNA testing. HCV antibody remains positive in most patients after achieving SVR; testing for recurrence via HCV RNA is recommended.' },
        { type: 'text', content: 'People who achieve SVR can have HCV recurrence due to reinfection or late relapse. Annual testing for HCV reinfection is recommended for patients with ongoing risk (injection drug use or high-risk sexual exposure).' },
      ],
    },
    {
      heading: 'Non-Pharmacological / Lifestyle',
      blocks: [
        { type: 'list', items: [
          { text: 'Avoid sharing toothbrushes, and dental or shaving equipment. Cover any bleeding wound.' },
          { text: 'Persons who inject drugs: counsel to avoid reusing or sharing syringes, needles, water, cotton and other drug preparation equipment.' },
          { text: 'Advised not to donate blood and to discuss HCV serostatus prior to donation of body organs, other tissue or semen.' },
          { text: 'Persons with HIV and those with multiple sexual partners should be reinforced to use barrier precautions.' },
          { text: 'Household surfaces contaminated with visible blood should be cleaned using 1 part household bleach to 9 parts water. Wear gloves when cleaning up blood spills.' },
          { text: 'Screening for at-risk family members such as children of persons with HCV infection and sexual contacts is recommended.' },
          { text: 'HCV is not spread by sneezing, hugging, holding hands, coughing, sharing eating utensils or drinking glasses, nor through food or water.' },
        ]},
      ],
    },
    {
      heading: 'Pharmacological Treatment',
      blocks: [
        { type: 'text', content: 'Direct-acting antiviral agents (DAAs) are prescribed by a specialist physician (gastroenterologist, hepatologist, or infectious disease specialist). DAAs can cure more than 95% of persons affected by HCV.' },
      ],
    },
    {
      heading: 'Self-Monitoring',
      blocks: [
        { type: 'text', content: 'Patients who have achieved SVR can develop recurrence from reinfection or relapse. They should be advised to monitor for:' },
        { type: 'list', items: [
          { text: 'Jaundice' },
          { text: 'Abdominal pain' },
          { text: 'Pale stools or tea-coloured urine' },
          { text: 'Loss of weight and/or loss of appetite' },
          { text: 'Vomiting of blood' },
          { text: 'Per rectal bleeding' },
          { text: 'Abdominal swelling' },
        ]},
        { type: 'text', content: 'Signs or symptoms suggesting decompensated liver disease, cirrhosis or hepatocellular carcinoma should be referred to Gastroenterologist for further management.' },
      ],
    },
  ],
};
