import { CpgDocument } from '../types';

export const chronicHepatitisB: CpgDocument = {
  id: 'cpg-chronic-hepatitis-b',
  condition: 'Chronic Hepatitis B Carriers',
  source: '16 NUP CPG - Chronic Hepatitis B Carriers.pdf',
  reviewDate: 'Updated November 2025. Next review date: November 2028.',
  advisors: 'Key FP: Dr Phua Yiyong. Specialist Advisors: Dr Mark Muthiah (Senior Consultant, NUH) / Dr Daniel Huang (Consultant, NUH).',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { type: 'text', content: 'Hepatitis B essentially means an infection of the liver with the Hepatitis B Virus (HBV). The HBV is transmitted by blood or body fluids of an infected person to another who does not have immunity against it. A HBV infection can be cleared by the body especially in a healthy adult (acute Hepatitis B) but in some cases the infection progresses to become a long term infection (chronic Hepatitis B) as the body is not able to clear it.' },
        { type: 'text', content: 'Most patients who contracted acute Hepatitis B might not develop any symptoms or only develop non-specific symptoms. Patients with chronic Hepatitis B infection (Hepatitis B carriers) are usually well looking and can unknowingly transmit the virus to others. The complication of damage includes liver scarring (fibrosis), liver failure and liver cancer. Liver cancer is known as a silent killer because the majority of patients do not have symptoms in the early stages.' },
        { type: 'text', content: 'There are drug treatments for Hepatitis B but no cure. Fortunately, there is a vaccine. The Hepatitis B vaccine is 95% effective in preventing children and adults from developing chronic Hepatitis B infection if they have not yet been infected. The vaccine is easily administered in a series of 3 intramuscular doses for adults.' },
        { type: 'text', content: 'Epidemiology: Up to 2 billion people have been infected with Hepatitis B world-wide and 300 million are chronically infected. In Singapore about 4% (1 in 25 persons) of the population are chronic Hepatitis B carriers. Hepatitis B is estimated to cause 60 to 80 per cent of primary liver cancers worldwide. Key findings from the National Sero-prevalence Survey 2005 showed that 59.3% of the population aged 30 to 74 years and 57.2% aged 30 to 44 years were not immune to the HBV.' },
      ],
    },
    {
      heading: 'Natural History of Chronic Hepatitis B',
      blocks: [
        { type: 'text', content: 'The likelihood of developing chronic hepatitis B is higher in those infected perinatally (90%) compared to those infected in adulthood (1%). Most infections acquired in Singapore are perinatal or during early childhood. The natural history of perinatal and childhood-acquired infection is generally described in three phases:' },
        { type: 'list', items: [
          { text: 'Phase 1 — Immune Tolerance Phase (can persist 10–30 years): Characterised by presence of HBeAg and high HBV-DNA levels with persistently normal ALT levels. Usually minimal histological changes in the liver. Rate of spontaneous HBeAg seroconversion is very low; 90% of children remain HBeAg-positive by age 10–15 years.' },
          { text: 'Phase 2 — Immune Clearance Phase (usually during late adolescence or young adulthood): Characterised by elevated ALT levels, lower HBV-DNA levels and increased histological activity. Spontaneous HBeAg seroconversion occurs at annual rate of 10–20%. Mean age of spontaneous HBeAg seroconversion is about 31–35 years. Persistence of HBeAg and high HBV-DNA levels beyond this age implies poor prognosis with worsening histology and higher incidence of hepatocellular carcinoma.' },
          { text: 'Phase 3 — Non-Replicative Phase: Usually asymptomatic; disease progression to cirrhosis is low. Characterised by low HBV-DNA levels, absence of HBeAg (HBeAg negative) and presence of anti-HBe antibodies, with absence of hepatic inflammation histologically.' },
        ]},
      ],
    },
    {
      heading: 'Screening & Diagnosis — Who to Screen',
      blocks: [
        { type: 'text', content: 'As recommended by the Screening Test Review Committee (STRC), hepatitis B screening is recommended in:' },
        { type: 'list', items: [
          { text: 'Asymptomatic Singapore residents with no known hepatitis B carrier status born before 1st September 1987 (when Hepatitis B vaccination was mandatory for all newborns) and who did not undergo the local catch-up immunisation programmes from 2001 to 2004.' },
          { text: 'Pregnant women' },
          { text: 'Healthcare workers' },
          { text: 'Foreigners and immigrants from countries where HBV is endemic' },
          { text: 'At risk groups including but not limited to', children: [
            { text: 'Chronic haemodialysis patients' },
            { text: 'Past or present injection drug users' },
            { text: 'Individuals who underwent invasive procedures in health-care facilities with inadequate infection control practices' },
            { text: 'Individuals with known exposures to HBV (e.g. healthcare workers following needle stick injury involving HBV-positive blood, or recipients of blood or organs from a donor who tested HBV-positive)' },
            { text: 'Individuals whose past or present sex partners were/are HBV-infected or injection drug users or HIV patients' },
            { text: 'Other at risk groups at the discretion of the clinician' },
          ]},
        ]},
        { type: 'text', content: 'NUP Hep A/B Screening and Vaccination Workflow: (1) Before screening for hepatitis A/B, check medical records that patient had not received hepatitis A/B vaccination before. (2) Arrange appropriate screening tests: Hepatitis A — Anti-HAV IgG; Hepatitis B — HBsAg, anti-HBs. (3) Clinician will arrange for review when results are ready and offer appropriate management. (4) If screening results were done more than 6 months ago, manage according to risk profile. (5) To repeat Hep B screening with both HBsAg and anti-HBs post-vaccination.' },
      ],
    },
    {
      heading: 'Hepatitis B Screening Results and Clinical Interpretation',
      blocks: [
        { type: 'table', headers: ['HBsAg', 'Anti-HBs', 'Vaccination Status', 'Interpretation', 'Recommended Action'], rows: [
          { cells: ['Negative', '< 10 IU/L', 'No', 'Not immune to HBV', 'Administer hepatitis B vaccination.'] },
          { cells: ['Negative', '< 10 IU/L', 'Completed recently within last few months', 'Not immune to HBV', 'Repeat hepatitis B course of 3 doses and recheck serology 6–8 weeks later. If no antibody response, consider referral to Infectious Diseases or Hepatology.'] },
          { cells: ['Negative', '< 10 IU/L', 'Completed many years ago', 'Antibody levels may have waned', 'Administer 1 dose and recheck Anti-HBs 6–8 weeks later. High titres > 100 convey immunity for life. If no antibody response, complete course of 3 doses and recheck.'] },
          { cells: ['Negative', '> 10 IU/L', 'Regardless', 'Immune to HBV', 'No vaccination required.'] },
          { cells: ['Positive', '—', 'Regardless', 'HBV infection — either acute or chronic (carrier)', 'Look for signs and symptoms of acute hepatitis. Repeat HBsAg in 6 months to check for Chronic Hep B infection. Screen for HIV and HCV.'] },
          { cells: ['Positive', '> 10 IU/L', 'Regardless', 'HBV infection — either acute or chronic (carrier); possibly mutant variant', 'Look for signs and symptoms of acute hepatitis. Refer to hepatology for further management.'] },
        ]},
      ],
    },
    {
      heading: 'Hepatitis B Infection Diagnosis and Clinical Presentation',
      blocks: [
        { type: 'list', items: [
          { text: 'Hepatitis B infection is diagnosed based on the presence of Hepatitis B Surface Antigen (HBsAg).' },
          { text: 'Chronic HBV infection is defined as having two HBsAg positive results taken at least 6 months apart.' },
        ]},
        { type: 'text', content: 'Acute hepatitis B is often asymptomatic or mild, especially in children under 5 years of age. In adults the onset of illness is usually abrupt and can last for weeks to months. Symptoms of acute hepatitis include:' },
        { type: 'list', items: [
          { text: 'Jaundice' },
          { text: 'Fever' },
          { text: 'Dark coloured urine with pale stools' },
          { text: 'Prolonged tiredness or malaise' },
          { text: 'Poor appetite' },
          { text: 'Abdominal pain' },
          { text: 'Nausea and vomiting' },
        ]},
        { type: 'text', content: 'Patients with acute hepatitis B need to be treated urgently as it can lead to acute liver failure and even death. 1 in 10 patients may develop Chronic Hepatitis B Infection (Hepatitis B carriers). Patients with Chronic Hepatitis B Infection are usually asymptomatic unless they develop acute hepatitis or complications (liver cirrhosis, hepatocellular carcinoma, liver failure).' },
      ],
    },
    {
      heading: 'Hepatitis B Viral Protein Tests and Clinical Significance',
      blocks: [
        { type: 'table', headers: ['Viral Protein Test', 'Clinical Significance'], rows: [
          { cells: ['HBsAg (Hepatitis B surface antigen)', 'Detected in high levels in serum during acute infection and persists for an average of 4 weeks after exposure. Persistence beyond 6 months indicates chronic HBV infection.'] },
          { cells: ['Anti-HBs (Hepatitis B surface antibody)', 'Indicates recovery and immunity from HBV infection. Also develops in a person successfully vaccinated against HBV.'] },
          { cells: ['IgM anti-HBc (IgM class antibody to core antigen)', 'Indicates recent infection with HBV (< 6 months) or acute flare of chronic Hepatitis B.'] },
          { cells: ['HBeAg (Hepatitis B envelope antigen)', 'Those positive for HBeAg circulate HBV at very high titres in their blood — indicates high infectivity. Persistence of HBeAg beyond 40 years old is associated with poorer prognosis.'] },
          { cells: ['Anti-HBe (Antibody to HBeAg)', 'Anti-HBe becomes detectable when HBeAg is lost.'] },
        ]},
      ],
    },
    {
      heading: 'Management & Follow-Up of Chronic Hepatitis B',
      blocks: [
        { type: 'text', content: 'Initial Management (for 16 years old and above):' },
        { type: 'list', items: [
          { text: 'Family history of HBV infection, HBV vaccinations, HCC and cirrhosis' },
          { text: 'Risk factors: Smoking history, alcohol consumption, occupational history, medication history, history of jaundice and quality of life' },
          { text: 'Physical examination — Stigmata of chronic liver disease — refer to GE SOC immediately if present' },
          { text: 'Investigations: Viral markers (HBeAg, anti-HBe antibody), LFT, AFP, U/S HBS, FBC' },
        ]},
        { type: 'text', content: 'If physical examination and investigations are normal — Continue 6 monthly follow-up:' },
        { type: 'list', items: [
          { text: '1. ALT, Bilirubin, Albumin, AFP, platelets — 6 monthly' },
          { text: '2. U/S HBS — 6–12 monthly' },
          { text: '3. HBeAg — check once at age 40 or 35 years if high-risk factors present. No need to repeat yearly subsequently.' },
          { text: '4. Offer repeat Hep B serology (HBsAg + Anti-HBs) every 2 years — to check for spontaneous seroconversion. Consider continuing with regular surveillance even if there is HBsAg seroconversion as risk of HCC is still present.' },
          { text: '5. Consider FIB-4 or APRI score for fibrosis assessment every 2 years.' },
        ]},
        { type: 'text', content: 'High-risk factors: family history of HCC, regular alcohol consumption or immunocompromised state (prolonged steroids, chemo/immunotherapy).' },
        { type: 'text', content: 'Refer to Gastroenterologist if any of the following: (1) Clinical signs of liver disease — hepatomegaly, splenomegaly, ascites, jaundice, spider naevi, leukonychia, asterixis, pedal oedema, palmar erythema. (2) Abnormal laboratory results — ALT/AST persistently raised over 3 months; AFP raised, rising trend, or HBeAg positive > age 40 (or > age 35 if high-risk factors); Low albumin, raised bilirubin, low platelet. (3) U/S HBS suspicious for cirrhosis, HCC or abnormal lesions for which CT is recommended.' },
      ],
    },
    {
      heading: 'Management of Chronic Hepatitis B — Ongoing Care',
      blocks: [
        { type: 'list', items: [
          { text: 'Monitor for acute flare and complications — All patients should have a 6 monthly review to:', children: [
            { text: 'Review for clinical symptoms and signs' },
            { text: 'Liver Function Test — to look for acute liver inflammation or liver failure' },
            { text: 'Alpha-Fetoprotein (AFP) — Liver cancer marker' },
            { text: 'Full Blood Count and Platelet — to evaluate liver function; to calculate APRI or FIB-4 score as marker of liver fibrosis where indicated' },
            { text: 'Ultrasound Hepatobiliary system — to evaluate for abnormal changes such as fatty liver, fibrosis and growth' },
            { text: 'Frequency of review can be earlier according to clinician\'s assessment' },
          ]},
          { text: 'Specialist Referral — Gastroenterology referral recommended in patients with', children: [
            { text: 'Persistently elevated ALT' },
            { text: 'Abnormal Alpha-Fetoprotein level' },
            { text: 'Other abnormal lab results: low albumin, raised bilirubin, low platelets' },
            { text: 'Signs of liver cirrhosis, HCC or other abnormal lesions on U/S HBS' },
            { text: 'Positive HBeAg at 40 years old or 35 years old (for high-risk population) and beyond' },
            { text: 'Clinical signs of chronic liver disease' },
            { text: 'HIV or hepatitis C co-infection' },
          ]},
          { text: 'Emergency Department referral recommended for: Clinical signs suggestive of acute liver injury or hepatic decompensation (new onset clinical jaundice, acute or overt gastrointestinal bleeding or ALT ≥ 1000 U/L).' },
          { text: 'Special situations', children: [
            { text: 'Offer repeat Hep B serology every 2 years to check for seroconversion (HBsAg negative and anti-HBs positive)' },
            { text: 'Sero-converted patients: Discuss with patient to continue regular surveillance as risk of HCC is still present (although lower risk). Carry out fibrosis risk assessment with FIB-4 score every 2 years. Refer if FIB-4 score > 1.3.' },
            { text: 'Patients with acute flare where ALT is raised — see NUP Metabolic Dysfunction-Associated Steatotic Liver Disease CPG' },
            { text: 'Fatty liver — manage as per fatty liver workflow (see NUP Metabolic Dysfunction-Associated Steatotic Liver Disease CPG)' },
          ]},
        ]},
      ],
    },
    {
      heading: 'Non-Pharmacological / Lifestyle Management',
      blocks: [
        { type: 'list', items: [
          { text: 'Encourage screening for metabolic risk factors and optimise cardiovascular risk factors as per population guidelines.' },
          { text: 'Stop smoking and stop intake of alcohol.' },
          { text: 'Advise to avoid use of Traditional Chinese Medication.' },
          { text: 'If patient is on prolonged immunosuppression medication (e.g. steroids, methotrexate), refer to a gastroenterologist for co-management as patient is at increased risk of chronic Hepatitis B flare.' },
          { text: 'Advise family members & especially the sexual partner for hepatitis B screening. Advise Hepatitis B vaccination for those who are not immune to Hepatitis B.' },
          { text: 'Reinforce on the usage of barrier contraception (e.g. condoms) during sexual intercourse with partner unless the partner is Hepatitis B immunised.' },
          { text: 'Reassure that Hepatitis B cannot be contracted by casual contact, sharing of utensils and sharing of common living space.' },
          { text: 'Where patient is high risk, assess for other sexually transmitted diseases such as Hepatitis C and HIV.' },
        ]},
        { type: 'text', content: 'Self-Monitoring — Advise patients on signs and symptoms of acute flare and complications: (1) Jaundice; (2) Abdomen pain; (3) Weight loss or weight gain; (4) Abdomen swelling; (5) Loss of appetite; (6) Pale stools with tea-coloured urine.' },
      ],
    },
    {
      heading: 'Recommended Care Components',
      blocks: [
        { type: 'table', headers: ['Care Component', 'Minimum Frequency', 'Remarks'], rows: [
          { cells: ['HBeAg', 'At first visit', 'If positive at first visit, to recheck at age 40 years, or age 35 years if high-risk factors present; if still positive, consider specialist referral.'] },
          { cells: ['Anti-HBe antibody', 'At first visit', ''] },
          { cells: ['Liver Function Test (LFT)', 'At first visit, and minimally ALT once every 6 monthly', 'Frequency of monitoring and specialist referral to be tailored based on previous ALT values and trends as well as HBeAg status.'] },
          { cells: ['Alpha-fetoprotein (AFP)', 'At first visit and once every 6 monthly', 'AFP is a tumour marker used for HCC surveillance.'] },
          { cells: ['Full Blood Count (FBC)', 'Consider at first visit and once every 6 monthly', 'To monitor for thrombocytopenia associated with liver disease.'] },
          { cells: ['Ultrasound Hepatobiliary System', 'At first visit and annually', 'Frequency of imaging is based on HCC risk.'] },
          { cells: ['Hepatitis A Screening / Vaccination', 'Consider anti-HAV screening and vaccination', 'Unless contraindicated, hepatitis A vaccination should be given to prevent superimposed acute hepatitis A in patients with chronic hepatitis B virus infection.'] },
          { cells: ['Influenza Vaccination', 'Annually or per season', 'As recommended under the National Adult Immunisation Schedule (NAIS) and National Childhood Immunisation Schedule (NCIS).'] },
          { cells: ['Pneumococcal Vaccination (PCV13 or PPSV23)', 'As per guidelines depending on age and other medical conditions', 'As recommended under NAIS and NCIS.'] },
          { cells: ['Sexually transmitted diseases and Hepatitis C screening', 'Screening in patients with high-risk behaviours', 'High-risk behaviours include MSM, unprotected sex with multiple sexual partners, injection drug users, tattoos, sharing of household articles contaminated with blood.'] },
          { cells: ['Metabolic disease screening (BP, lipid profile, weight/BMI, Diabetes)', 'As per guidelines', 'Development of fatty liver and metabolic risk factors further increases risk of liver cirrhosis and HCC.'] },
        ]},
      ],
    },
  ],
};
