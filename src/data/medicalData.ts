/**
 * Medical knowledge data — extracted from LOCUM_GUIDE.docx
 * Real data from the document tables.
 */
import { MedicalCategory } from '../types';

export const medicalCategories: MedicalCategory[] = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular System',
    page: 2,
    subCategories: [
      {
        name: 'Anti-hypertensives',
        entries: [
          { brand: 'Atenolol / Normaten', generic: 'Atenolol 50mg (D)', dosage: '½ to 1 OM', remarks: 'Avoid in COPD, asthma, significant PVD, uncompensated CHF and psoriasis. Avoid in DM, obesity and metabolic syndrome' },
          { brand: 'Concor', generic: 'Bisoprolol 5mg (C; D in 2nd and 3rd)', dosage: '1–2 OM', remarks: 'As above' },
          { brand: 'Inderal', generic: 'Propranolol 10/40mg (C; D in 2nd and 3rd)', dosage: 'HTN: 40mg bd initially, maintenance 160-320mg daily. Arrhythmia: 10-40mg tds-qds', remarks: 'As above' },
          { brand: 'Lasix', generic: 'Frusemide 40mg (C; D if used in pregnancy-induced HTN)', dosage: '½ to 1 daily', remarks: '' },
          { brand: 'Scanduretic', generic: 'HCTZ 50mg, amiloride 5mg (B; D if used in pregnancy-induced HTN)', dosage: '1 OM–2 BD', remarks: '' },
          { brand: 'Nitrilix', generic: 'Indapamide 1.5mg (B; D if used in pregnancy-induced HTN)', dosage: '1 OM', remarks: '' },
          { brand: 'Adalat', generic: 'Nifedipine 10mg (C)', dosage: '1–2 TDS', remarks: 'May cause LL swelling' },
          { brand: 'Adalat Retard', generic: 'Nifedipine 20mg (C)', dosage: '1–2 BD', remarks: 'As above' },
          { brand: 'Adalat LA', generic: 'Nifedipine 30mg (C)', dosage: '1–2 OM', remarks: 'As above' },
          { brand: 'Norvasc', generic: 'Amlodipine 5mg (C)', dosage: '1–2 OM', remarks: 'As above' },
          { brand: 'Captopril', generic: 'Captopril 25mg (C; D in 2nd and 3rd)', dosage: 'HTN: 25mg bd-tds initially, max 100mg bd-tds. CHF: 25mg tds initially (max 450mg/day)', remarks: '1st dose hypotension, ACE-I induced cough, monitor U/E 2-4 weeks, caution in CRF, risk of hyperkalemia, contra-indicated in bilateral RAS' },
          { brand: 'Enalapril / Renitec', generic: 'Enalapril 10/20mg (C; D in 2nd and 3rd)', dosage: '20-40mg OM', remarks: 'As above' },
          { brand: 'Zestril', generic: 'Lisinopril 5/10mg (C; D in 2nd and 3rd)', dosage: '2.5–20mg OM', remarks: 'As above' },
          { brand: 'Cozaar', generic: 'Losartan 50mg (C; D in 2nd and 3rd)', dosage: '1–2 OM', remarks: '' },
          { brand: 'Olmetec', generic: 'Olmesartan (C; D in 2nd and 3rd)', dosage: '20-40mg OM', remarks: '' },
          { brand: 'Aprovel', generic: 'Irbesartan 300mg (C; D in 2nd and 3rd)', dosage: '½–1 OM', remarks: '' },
          { brand: 'Micardis', generic: 'Telmisartan 40mg (C; D in 2nd and 3rd)', dosage: '40–160mg daily', remarks: '' },
          { brand: 'Hyzaar', generic: 'Losartan 50mg, HCTZ 12.5mg (C; D in 2nd and 3rd)', dosage: '1–2 OM', remarks: '' },
          { brand: 'Hyzaar Forte', generic: 'Losartan 100mg, HCTZ 25mg (C; D in 2nd and 3rd)', dosage: '1 OM', remarks: '' },
          { brand: 'Niften / Nifetex-TR', generic: 'Atenolol 50mg, nifedipine SR 20mg (D)', dosage: '1 OM–BD', remarks: '' },
        ],
      },
      {
        name: 'Anti-anginal',
        entries: [
          { brand: 'ISDN', generic: 'Isosorbide dinitrate 5/10mg (C)', dosage: '5-30mg qds', remarks: '' },
          { brand: 'GTN', generic: 'GTN 0.5mg S/L (C)', dosage: '1 PRN', remarks: '3 Stat in ACS' },
          { brand: 'Aspirin', generic: 'Aspirin 100mg (C; D if full dose in 3rd)', dosage: '1 OM', remarks: '3 Stat in ACS' },
          { brand: 'Persantin', generic: 'Dipyridamole 25mg (C)', dosage: '300-450mg/day in 3-4 divided doses', remarks: '' },
        ],
      },
      {
        name: 'Haemorrhoids / Varicose Veins',
        entries: [
          { brand: 'Daflon', generic: 'Diosmin, hesperidin', dosage: 'Varicose veins: 1 BD. Piles: 2 TDS for 3 days, then 2 BD', remarks: '' },
          { brand: 'Proctosedyl supp', generic: 'Hydrocortisone, cinchocaine, framycetin, aesculin', dosage: '1 BD and after defecation', remarks: 'For piles, anal fissure, anal pruritus' },
          { brand: 'Hirudoid cream', generic: '', dosage: 'Apply BD-TDS', remarks: 'Venoconstrictor (for fine varicosities)' },
        ],
      },
      {
        name: 'Others',
        entries: [
          { brand: 'Digoxin', generic: 'Digoxin 0.0625/0.25mg (C)', dosage: 'Maintenance 0.125-0.75mg daily', remarks: '' },
        ],
      },
    ],
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    page: 4,
    subCategories: [
      {
        name: 'Asthma, COPD, Allergic Rhinitis',
        entries: [
          { brand: 'Bricanyl', generic: 'Terbutaline 2.5mg (B)', dosage: '1–2 TDS', remarks: 'B-agonist' },
          { brand: 'Ketotifen', generic: 'Ketotifen 1mg', dosage: 'Adult: 1/1 bd (max 11/11 bd)', remarks: 'Anti-histamine' },
          { brand: 'Ventolin', generic: 'Salbutamol 2/4mg (C)', dosage: '2-4mg tds / 2 puffs tds-qds (MDI)', remarks: 'B-agonist' },
          { brand: 'Singulair', generic: 'Montelukast 4/5/10mg (B)', dosage: '>14yo: 10mg OM, 6-14yo: 5mg OM, 1-5yo: 4mg OM', remarks: 'Leucotriene antagonist' },
          { brand: 'Atrovent', generic: 'Ipratropium bromide MDI (B)', dosage: '2 puffs QDS', remarks: 'Anti-muscarinic' },
          { brand: 'Becotide', generic: 'Beclomethasone 50mcg inhaler (C)', dosage: '2 puffs TDS-QDS', remarks: 'Steroid inhaler' },
          { brand: 'Flixotide', generic: 'Fluticasone 50/100/250mcg inhaler (C)', dosage: 'Mild: 100-250mcg bd, Moderate: 250-500mcg bd, Severe: 500-1000mcg bd', remarks: 'Steroid inhaler' },
          { brand: 'Pulmicort', generic: 'Budesonide 200mcg inhaler (B if inhaled)', dosage: '1–2 puffs BD', remarks: 'Steroid inhaler' },
        ],
      },
      {
        name: 'Cough & Cold',
        entries: [
          { brand: 'Phensedyl / Dhasedyl / Sunsedyl', generic: 'Codeine + ephedrine + promethazine (C)', dosage: 'Adult: 10ml tds', remarks: 'Cough suppressant' },
          { brand: 'Phensedyl-DM / Dhasedyl DM', generic: 'Dextromethorphan + ephedrine + promethazine (C)', dosage: 'As above', remarks: 'Cough suppressant' },
          { brand: 'Promethazine', generic: 'Promethazine (C)', dosage: '10ml tds', remarks: 'Safest for pregnancy' },
          { brand: 'Codipront', generic: 'Codeine 30mg, Phenyltoloxamine 10mg', dosage: '1 BD', remarks: '' },
          { brand: 'Dexcophan', generic: 'Dextromethorphan 15mg (C)', dosage: '1–2 TDS', remarks: '' },
          { brand: 'Tussils lozenges', generic: 'Dextromethorphan 15mg (C)', dosage: '2 TDS', remarks: '' },
          { brand: 'MBE / Benadryl / Phenexpect', generic: 'Ammonium chloride + diphenhydramine', dosage: '10ml tds', remarks: 'Expectorant' },
          { brand: 'Bisolvon / Vasican', generic: 'Bromhexine 8mg', dosage: '1 TDS', remarks: 'Mucolytic' },
          { brand: 'Mucosolvan / Shinoxol', generic: 'Ambroxol 30mg', dosage: '1 TDS', remarks: 'Mucolytic' },
          { brand: 'Fluimucil', generic: 'N-acetylcysteine 600mg (B)', dosage: '1 OM or ON', remarks: '100mg sachet: 2 TDS, 200mg sachet: 1 TDS' },
          { brand: 'Actifed / Fedac / Decondine', generic: 'Triprolidine 2.5mg + pseudoephedrine 30mg (C)', dosage: '1 TDS–QDS', remarks: 'Antihistamine decongestant' },
          { brand: 'Piriton / Chloramine', generic: 'Chlorpheniramine 4mg (B)', dosage: '1 TDS–QDS', remarks: '' },
          { brand: 'Polaramine', generic: 'Dexchlorpheniramine 2mg (B)', dosage: '1 TDS–QDS', remarks: '' },
          { brand: 'Atarax', generic: 'Hydroxyzine 10/25mg (C)', dosage: '1 BD–TDS', remarks: '' },
          { brand: 'Zyrtec', generic: 'Cetirizine 10mg (B)', dosage: '1 OM', remarks: 'Non-sedating' },
          { brand: 'Telfast', generic: 'Fexofenadine 180mg (C)', dosage: '1 OM', remarks: 'Non-sedating' },
          { brand: 'Xyzal', generic: 'Levocetirizine 5mg (C)', dosage: '1 OM', remarks: 'Non-sedating' },
          { brand: 'Clarinase / Cirrus / Zyrtec-D / Telfast-D', generic: 'Non-sedating antihistamine + pseudoephedrine', dosage: '1 BD', remarks: 'Combination antihistamine + decongestant' },
          { brand: 'Iliadin nasal drops', generic: 'Oxymetazoline 0.01%/0.025%/0.05%', dosage: 'As directed', remarks: 'Nasal decongestant' },
        ],
      },
    ],
  },
  {
    id: 'gastrointestinal',
    name: 'Gastro-intestinal System',
    page: 6,
    subCategories: [
      {
        name: 'Antacid / Antiulcerants / Antispasmodics',
        entries: [
          { brand: 'Allumag', generic: 'AlOH + Mg trisilicate', dosage: '1–2 TDS-QDS', remarks: 'Antacid' },
          { brand: 'Veragel', generic: 'Antacid + dicyclomine + dimethicone', dosage: '2 TDS', remarks: 'Antacid' },
          { brand: 'MMT', generic: 'Mg trisilicate + Mg carbonate + NaHCO3', dosage: '10-20ml tds', remarks: 'Antacid' },
          { brand: 'Tagamet', generic: 'Cimetidine 200mg (B)', dosage: '2 BD', remarks: 'H2-blocker' },
          { brand: 'Famotidine', generic: 'Famotidine 20mg (B)', dosage: '1 BD', remarks: 'H2-blocker' },
          { brand: 'Zantac', generic: 'Ranitidine 150mg (B)', dosage: '1 BD', remarks: 'H2-blocker' },
          { brand: 'Losec / Romesec', generic: 'Omeprazole 20mg (C)', dosage: '1 BD', remarks: 'PPI' },
          { brand: 'Buscopan', generic: 'Hyoscine-N-butylbromide 10mg (C)', dosage: '1 TDS', remarks: 'Antispasmodic' },
          { brand: 'Librax / Medocalum', generic: 'Chlordiazepoxide + clidinium', dosage: '1 TDS–QDS', remarks: 'Can also be used for ureteric spasm, dysmenorrhea' },
          { brand: 'Debridat', generic: 'Trimebutine 100mg', dosage: '1–2 TDS', remarks: 'Antispasmodic' },
          { brand: 'Meteospasmyl', generic: 'Alverine citrate 60mg + simethicone 300mg', dosage: '1 BD–TDS', remarks: 'Antispasmodic' },
        ],
      },
      {
        name: 'Anti-diarrhoea',
        entries: [
          { brand: 'Gastrosorb', generic: 'Activated charcoal', dosage: '2 TDS', remarks: '' },
          { brand: 'Charcoal', generic: 'Charcoal', dosage: '2 TDS', remarks: '' },
          { brand: 'Imodium', generic: 'Loperamide 2mg (B)', dosage: '1 TDS', remarks: '' },
        ],
      },
      {
        name: 'Laxatives',
        entries: [
          { brand: 'Dulcolax', generic: 'Bisacodyl 5mg (B)', dosage: '1–2 ON', remarks: '' },
          { brand: 'Lactulose', generic: 'Lactulose (B)', dosage: '15-30ml TDS', remarks: '' },
          { brand: 'Coloxyl', generic: 'Docusate sodium (C)', dosage: '1–2 TDS', remarks: 'Stool softener' },
        ],
      },
      {
        name: 'Hepatic Protectors',
        entries: [
          { brand: 'Hepserbon', generic: 'Ursodeoxycholic acid', dosage: '10-25mg/kg/day in 2 divided doses', remarks: '' },
        ],
      },
    ],
  },
  {
    id: 'nervous-system',
    name: 'Central Nervous System',
    page: 7,
    subCategories: [
      {
        name: 'Analgesics / Antipyretics / Anti-inflammatory',
        entries: [
          { brand: 'Panadol', generic: 'Paracetamol 500mg (A)', dosage: '1–2 TDS-QDS', remarks: 'Safest analgesic in pregnancy' },
          { brand: 'Ponstan', generic: 'Mefenamic acid 250/500mg (C)', dosage: '500mg TDS', remarks: 'For dysmenorrhea and dental pain' },
          { brand: 'Brufen / Nurofen', generic: 'Ibuprofen 200/400mg (B; D in 3rd)', dosage: '400mg TDS (with food)', remarks: 'Avoid in last trimester' },
          { brand: 'Voltaren', generic: 'Diclofenac 25/50mg (B; D in 3rd)', dosage: '50mg TDS', remarks: '' },
          { brand: 'Celebrex', generic: 'Celecoxib 100/200mg (C)', dosage: '100-200mg BD', remarks: 'COX-2 selective' },
          { brand: 'Arcoxia', generic: 'Etoricoxib 60/90/120mg (C)', dosage: '60-90mg OM', remarks: 'COX-2 selective, avoid in CVS disease' },
          { brand: 'Synflex / Naprosyn', generic: 'Naproxen 250/500mg (B; D in 3rd)', dosage: '250-500mg BD', remarks: '' },
          { brand: 'Tramadol', generic: 'Tramadol 50mg (C)', dosage: '50-100mg QDS', remarks: 'Avoid in epilepsy, caution in head injury' },
        ],
      },
      {
        name: 'Gout',
        entries: [
          { brand: 'Colchicine', generic: 'Colchicine 0.5mg (D)', dosage: 'Acute: 1mg stat, then 0.5mg q2h until relief or GI SEs', remarks: 'GI side effects, do not use in renal/hepatic impairment' },
          { brand: 'Zyloric', generic: 'Allopurinol 100/300mg (C)', dosage: '100-300mg OM (after acute phase)', remarks: 'Do not start during acute attack, monitor UE' },
        ],
      },
      {
        name: 'Anti-emetics / Anti-vertigo',
        entries: [
          { brand: 'Plasil / Maxolon', generic: 'Metoclopramide 10mg (B)', dosage: '1 TDS-QDS', remarks: 'Avoid prolonged use – extrapyramidal effects' },
          { brand: 'Stemetil', generic: 'Prochlorperazine 5mg (C)', dosage: '1-2 TDS', remarks: 'Also for vertigo' },
          { brand: 'Serc', generic: 'Betahistine 8/16mg (C)', dosage: '8-16mg TDS', remarks: 'For Meniere\'s disease and vertigo' },
          { brand: 'Xanidine / Tanidine', generic: 'Cinnarizine 25mg (C)', dosage: '1 TDS', remarks: 'For vertigo and motion sickness' },
          { brand: 'Avomine', generic: 'Promethazine theoclate 25mg (C)', dosage: '1 BD-TDS', remarks: 'For motion sickness and nausea/vomiting in pregnancy' },
          { brand: 'Motilium', generic: 'Domperidone 10mg (C)', dosage: '1 TDS (before meals)', remarks: 'Fewer CNS effects than metoclopramide' },
        ],
      },
      {
        name: 'Sedatives',
        entries: [
          { brand: 'Valium', generic: 'Diazepam 2/5/10mg (D)', dosage: '2-10mg ON', remarks: 'Benzodiazepine – risk of dependence' },
          { brand: 'Lexotan', generic: 'Bromazepam 1.5/3mg (D)', dosage: '1.5-3mg BD-TDS', remarks: 'As above' },
          { brand: 'Xanax', generic: 'Alprazolam 0.25/0.5mg (D)', dosage: '0.25-0.5mg TDS', remarks: 'As above' },
          { brand: 'Ativan', generic: 'Lorazepam 1mg (D)', dosage: '1-2mg ON', remarks: 'As above' },
          { brand: 'Dormicum', generic: 'Midazolam 7.5mg (D)', dosage: '7.5-15mg ON', remarks: 'Short-acting' },
        ],
      },
      {
        name: 'Anti-convulsant',
        entries: [
          { brand: 'Epilim', generic: 'Sodium valproate 200/500mg (D)', dosage: '400-2400mg/day in 2 divided doses', remarks: 'Teratogenic – spina bifida, monitor LFT' },
        ],
      },
      {
        name: 'Antidepressants',
        entries: [
          { brand: 'Prothiaden', generic: 'Dosulepin 25/75mg (C)', dosage: '25-75mg ON', remarks: 'TCA – sedating, anticholinergic effects' },
          { brand: 'Prozac', generic: 'Fluoxetine 20mg (C)', dosage: '20-40mg OM', remarks: 'SSRI – sexual dysfunction, GI effects' },
          { brand: 'Zoloft', generic: 'Sertraline 50mg (C)', dosage: '50-150mg OM', remarks: 'SSRI – safer in pregnancy than other SSRIs' },
        ],
      },
    ],
  },
  {
    id: 'genitourinary',
    name: 'Genito-urinary System',
    page: 9,
    subCategories: [
      {
        name: 'Erectile Dysfunction',
        entries: [
          { brand: 'Viagra', generic: 'Sildenafil 25/50/100mg (B)', dosage: '50mg 1hr before sexual activity PRN', remarks: 'Contraindicated with nitrates' },
          { brand: 'Cialis', generic: 'Tadalafil 10/20mg (B)', dosage: '10-20mg 30min before PRN', remarks: 'Duration up to 36hrs' },
          { brand: 'Levitra', generic: 'Vardenafil 10mg (B)', dosage: '10mg 25-60min before PRN', remarks: 'As sildenafil' },
        ],
      },
      {
        name: 'BPH',
        entries: [
          { brand: 'Cardura', generic: 'Doxazosin 1/2/4mg (C)', dosage: '1-8mg OM', remarks: 'Alpha-blocker, 1st dose hypotension' },
          { brand: 'Hytrin', generic: 'Terazosin 1/2/5mg (C)', dosage: '1-5mg ON', remarks: 'As above' },
        ],
      },
      {
        name: 'Urinary Irritability',
        entries: [
          { brand: 'Ditropan', generic: 'Oxybutynin 2.5/5mg (B)', dosage: '2.5-5mg TDS', remarks: 'Anticholinergic – dry mouth, constipation' },
          { brand: 'Detrusitol', generic: 'Tolterodine 1/2mg (C)', dosage: '1-2mg BD', remarks: 'As above, fewer side effects' },
          { brand: 'Vesicare', generic: 'Solifenacin 5/10mg (C)', dosage: '5mg OM', remarks: 'As above' },
          { brand: 'Enablex', generic: 'Darifenacin 7.5/15mg (C)', dosage: '7.5mg OM', remarks: 'As above' },
        ],
      },
      {
        name: 'Vaginal Candidiasis',
        entries: [
          { brand: 'Diflucan', generic: 'Fluconazole 150mg (C)', dosage: '1 stat', remarks: 'Oral treatment' },
          { brand: 'Canesten pessary', generic: 'Clotrimazole 200mg (B)', dosage: '1 pessary ON for 3 nights', remarks: 'Local treatment' },
          { brand: 'Canesten cream', generic: 'Clotrimazole 1% (B)', dosage: 'Apply BD', remarks: 'For external symptoms' },
        ],
      },
    ],
  },
  {
    id: 'hormones',
    name: 'Hormones',
    page: 10,
    subCategories: [
      {
        name: 'Contraceptives',
        entries: [
          { brand: 'Marvelon', generic: 'Desogestrel 150mcg + Ethinyl estradiol 30mcg (X)', dosage: '1 OM (same time daily)', remarks: 'Combined OCP' },
          { brand: 'Diane-35', generic: 'Cyproterone acetate 2mg + Ethinyl estradiol 35mcg (X)', dosage: '1 OM', remarks: 'Also for acne/hirsutism' },
          { brand: 'Yasmin', generic: 'Drospirenone 3mg + Ethinyl estradiol 30mcg (X)', dosage: '1 OM', remarks: 'Combined OCP' },
          { brand: 'Mercilon', generic: 'Desogestrel 150mcg + Ethinyl estradiol 20mcg (X)', dosage: '1 OM', remarks: 'Low-dose combined OCP' },
          { brand: 'Microlut / Noriday', generic: 'Norgestrel 30mcg / Norethisterone 350mcg (B)', dosage: '1 OM (same time ± 3hrs)', remarks: 'Mini-pill (progestogen only)' },
          { brand: 'Postinor-2', generic: 'Levonorgestrel 0.75mg (B)', dosage: '1 tab immediately, 1 tab 12hrs later', remarks: 'Emergency contraception within 72hrs' },
          { brand: 'Depo-Provera', generic: 'Medroxyprogesterone acetate 150mg (X)', dosage: '1 inj IM every 3 months', remarks: 'Injectable contraception' },
        ],
      },
      {
        name: 'Steroids',
        entries: [
          { brand: 'Prednisolone', generic: 'Prednisolone 1/5mg (C)', dosage: '5-60mg OM', remarks: 'Taper slowly to avoid adrenal crisis' },
          { brand: 'Kenacort', generic: 'Triamcinolone 40mg/ml (C)', dosage: '40-80mg IM for joints', remarks: 'Intra-articular injection' },
        ],
      },
    ],
  },
  {
    id: 'antibiotics',
    name: 'Antibiotics',
    page: 11,
    subCategories: [
      {
        name: 'Penicillins',
        entries: [
          { brand: 'Amoxil', generic: 'Amoxycillin 250/500mg (A)', dosage: '500mg TDS', remarks: '' },
          { brand: 'Augmentin', generic: 'Amoxycillin 500mg + clavulanic acid 125mg (B)', dosage: '1 TDS', remarks: 'Broad spectrum, GI side effects' },
          { brand: 'Flucloxacillin', generic: 'Flucloxacillin 250/500mg (B)', dosage: '500mg QDS (30min before meals)', remarks: 'For staphylococcal infections' },
        ],
      },
      {
        name: 'Cephalosporins',
        entries: [
          { brand: 'Zinnat', generic: 'Cefuroxime axetil 250/500mg (B)', dosage: '250-500mg BD', remarks: '2nd gen cephalosporin' },
          { brand: 'Keflex', generic: 'Cefalexin 250/500mg (B)', dosage: '500mg QDS', remarks: '1st gen cephalosporin' },
          { brand: 'Suprax', generic: 'Cefixime 200/400mg (B)', dosage: '200mg BD or 400mg OM', remarks: '3rd gen – for gonorrhoea, UTI' },
        ],
      },
      {
        name: 'Macrolides',
        entries: [
          { brand: 'Erythrocin', generic: 'Erythromycin 250/500mg (B)', dosage: '500mg QDS', remarks: 'GI side effects, alternative to penicillin in allergy' },
          { brand: 'Zithromax', generic: 'Azithromycin 250/500mg (B)', dosage: '500mg OM x 3 days or 1g stat', remarks: 'For atypicals, chlamydia' },
          { brand: 'Klacid', generic: 'Clarithromycin 250/500mg (C)', dosage: '250-500mg BD', remarks: 'For H. pylori, atypicals' },
        ],
      },
      {
        name: 'Quinolones',
        entries: [
          { brand: 'Ciprobay', generic: 'Ciprofloxacin 250/500mg (C)', dosage: '500mg BD', remarks: 'Avoid in pregnancy and children. Tendon rupture' },
          { brand: 'Tavanic', generic: 'Levofloxacin 500mg (C)', dosage: '500mg OM', remarks: 'As above' },
        ],
      },
      {
        name: 'Others',
        entries: [
          { brand: 'Bactrim / Septrin', generic: 'Trimethoprim + Sulfamethoxazole 80/400mg (C)', dosage: '2 BD', remarks: 'Avoid in 1st trimester and near term' },
          { brand: 'Vibramycin', generic: 'Doxycycline 100mg (D)', dosage: '100mg BD', remarks: 'Avoid in pregnancy and children <8yrs, photosensitivity' },
          { brand: 'Flagyl', generic: 'Metronidazole 200/400mg (B)', dosage: '400mg TDS', remarks: 'Avoid alcohol. For anaerobes, trichomonas, H. pylori' },
          { brand: 'Furadantin', generic: 'Nitrofurantoin 50/100mg (B)', dosage: '50-100mg QDS', remarks: 'UTI only. Avoid at term' },
        ],
      },
    ],
  },
  {
    id: 'antiviral-antifungal',
    name: 'Anti-viral / Anti-fungal / Others',
    page: 12,
    subCategories: [
      {
        name: 'Anti-viral',
        entries: [
          { brand: 'Acyclovir / Zovirax', generic: 'Acyclovir 200/400/800mg (B)', dosage: 'Herpes simplex: 200mg 5x daily x 5/7. Herpes zoster: 800mg 5x daily x 7/7', remarks: 'Start within 72hrs of rash' },
          { brand: 'Valtrex', generic: 'Valacyclovir 500mg (B)', dosage: 'Herpes simplex: 500mg BD. Herpes zoster: 1g TDS x 7/7', remarks: 'Better oral bioavailability than acyclovir' },
          { brand: 'Tamiflu', generic: 'Oseltamivir 75mg (C)', dosage: '75mg BD x 5 days', remarks: 'Start within 48hrs of influenza symptoms' },
        ],
      },
      {
        name: 'Anti-fungal',
        entries: [
          { brand: 'Diflucan', generic: 'Fluconazole 50/150/200mg (C)', dosage: 'Oral candidiasis: 50mg OM x 7/7. Vaginal: 150mg stat', remarks: 'Avoid in pregnancy' },
          { brand: 'Lamisil', generic: 'Terbinafine 250mg (B)', dosage: '250mg OM x 6 weeks (nails) or 2-4 weeks (skin)', remarks: 'For dermatophyte infections' },
          { brand: 'Canesten cream', generic: 'Clotrimazole 1% (B)', dosage: 'Apply BD-TDS', remarks: 'For tinea, candidiasis' },
          { brand: 'Daktarin cream', generic: 'Miconazole 2% (C)', dosage: 'Apply BD', remarks: 'For tinea, candidiasis' },
        ],
      },
      {
        name: 'Others',
        entries: [
          { brand: 'Vermox', generic: 'Mebendazole 100mg (C)', dosage: '1 BD x 3/7 or 1 stat (threadworm)', remarks: 'Anthelmintic, avoid in pregnancy' },
          { brand: 'Zentel', generic: 'Albendazole 400mg (C)', dosage: '400mg stat', remarks: 'Anthelmintic, avoid in pregnancy' },
          { brand: 'Chloroquine', generic: 'Chloroquine 250mg (C)', dosage: 'Prophylaxis: 300mg OM weekly', remarks: 'Anti-malarial' },
        ],
      },
    ],
  },
  {
    id: 'endocrine',
    name: 'Endocrine',
    page: 13,
    subCategories: [
      {
        name: 'Diabetes Mellitus (DM)',
        entries: [
          { brand: 'Glucophage', generic: 'Metformin 500/850/1000mg (B)', dosage: '500mg BD–TDS with meals', remarks: 'First line T2DM, avoid in renal failure, hold before contrast' },
          { brand: 'Amaryl', generic: 'Glimepiride 1/2/3/4mg (C)', dosage: '1-4mg OM (with breakfast)', remarks: 'Sulphonylurea – hypoglycaemia risk' },
          { brand: 'Diamicron', generic: 'Gliclazide 40/80mg (C)', dosage: '40-320mg daily in divided doses', remarks: 'Sulphonylurea – as above' },
          { brand: 'Actos', generic: 'Pioglitazone 15/30mg (C)', dosage: '15-30mg OM', remarks: 'Thiazolidinedione – weight gain, fluid retention' },
          { brand: 'Januvia', generic: 'Sitagliptin 100mg (B)', dosage: '100mg OM', remarks: 'DPP-4 inhibitor' },
          { brand: 'Actrapid', generic: 'Soluble insulin (B)', dosage: 'SC, dose individualized', remarks: 'Short-acting insulin – onset 30min' },
          { brand: 'Insulatard / Humulin N', generic: 'Isophane insulin (B)', dosage: 'SC, dose individualized', remarks: 'Intermediate-acting – onset 1-2hrs' },
        ],
      },
      {
        name: 'Hyperthyroidism',
        entries: [
          { brand: 'Neomercazole', generic: 'Carbimazole 5mg (D)', dosage: '10-40mg OM (loading), maintenance 5-15mg daily', remarks: 'Monitor CBC – agranulocytosis, monitor TFT 4-6 weekly' },
        ],
      },
      {
        name: 'Lipids',
        entries: [
          { brand: 'Zocor', generic: 'Simvastatin 10/20/40mg (X)', dosage: '10-40mg ON', remarks: 'Statin – avoid in pregnancy, monitor LFT, myopathy' },
          { brand: 'Lipitor', generic: 'Atorvastatin 10/20/40/80mg (X)', dosage: '10-80mg OM', remarks: 'As above' },
          { brand: 'Crestor', generic: 'Rosuvastatin 5/10/20/40mg (X)', dosage: '5-40mg OM', remarks: 'As above' },
          { brand: 'Lopid', generic: 'Gemfibrozil 300mg (C)', dosage: '300mg BD-TDS before meals', remarks: 'Fibrate – for hypertriglyceridaemia' },
        ],
      },
    ],
  },
  {
    id: 'eye-ent',
    name: 'Eye & ENT Preparations',
    page: 14,
    subCategories: [
      {
        name: 'Eye & Ear Preparations',
        entries: [
          { brand: 'Chloromycetin eye drops', generic: 'Chloramphenicol 0.5%', dosage: '1-2 drops QDS', remarks: 'Broad spectrum antibiotic' },
          { brand: 'Tobrex', generic: 'Tobramycin 0.3%', dosage: '1-2 drops QDS', remarks: 'For bacterial conjunctivitis' },
          { brand: 'Maxitrol', generic: 'Dexamethasone + neomycin + polymyxin B', dosage: '1-2 drops QDS', remarks: 'Antibiotic + steroid combination' },
          { brand: 'Timoptol', generic: 'Timolol 0.25/0.5%', dosage: '1 drop BD', remarks: 'Beta-blocker eye drops for glaucoma' },
          { brand: 'Xalatan', generic: 'Latanoprost 0.005%', dosage: '1 drop ON', remarks: 'Prostaglandin for glaucoma' },
          { brand: 'Tears Naturale / Refresh', generic: 'Hydroxypropyl methylcellulose', dosage: 'PRN', remarks: 'Artificial tears for dry eyes' },
          { brand: 'Sofradex ear drops', generic: 'Dexamethasone + framycetin + gramicidin', dosage: '3 drops TDS-QDS', remarks: 'For otitis externa' },
          { brand: 'Locacorten-Vioform', generic: 'Flumetasone + clioquinol', dosage: '3-5 drops BD', remarks: 'For otitis externa with fungal component' },
          { brand: 'Cerumol ear drops', generic: 'Chlorbutanol + paradichlorobenzene + turpentine oil', dosage: '5 drops ON x 3 nights, then syringe', remarks: 'For earwax softening' },
          { brand: 'Iliadin nasal drops', generic: 'Oxymetazoline 0.025/0.05%', dosage: '2-3 drops/sprays BD, max 7 days', remarks: 'Nasal decongestant, rebound congestion if prolonged' },
          { brand: 'Beconase / Rhinocort', generic: 'Beclomethasone / Budesonide nasal spray (C)', dosage: '2 sprays each nostril BD', remarks: 'Intranasal steroid for allergic rhinitis' },
          { brand: 'Flixonase / Nasonex', generic: 'Fluticasone / Mometasone nasal spray (C)', dosage: '2 sprays each nostril OM', remarks: 'As above, once daily dosing' },
        ],
      },
    ],
  },
  {
    id: 'dermatologicals',
    name: 'Dermatologicals',
    page: 15,
    subCategories: [
      {
        name: 'Topical Steroids',
        entries: [
          { brand: 'Hydrocortisone cream 1%', generic: 'Hydrocortisone 1% (C)', dosage: 'Apply BD-TDS', remarks: 'Mild potency – for face and flexures' },
          { brand: 'Eumovate', generic: 'Clobetasone butyrate 0.05% (C)', dosage: 'Apply BD', remarks: 'Mild-moderate potency' },
          { brand: 'Betnovate', generic: 'Betamethasone valerate 0.1% (C)', dosage: 'Apply BD', remarks: 'Potent – not for face' },
          { brand: 'Dermovate', generic: 'Clobetasol propionate 0.05% (C)', dosage: 'Apply BD', remarks: 'Very potent – short-term use only' },
        ],
      },
      {
        name: 'Topical Antibiotics / Antifungals',
        entries: [
          { brand: 'Fucidin cream/ointment', generic: 'Fusidic acid 2% (B)', dosage: 'Apply TDS', remarks: 'For impetigo, secondary infected eczema' },
          { brand: 'Bactroban', generic: 'Mupirocin 2% (B)', dosage: 'Apply TDS', remarks: 'For MRSA decolonization, impetigo' },
          { brand: 'Canesten cream', generic: 'Clotrimazole 1% (B)', dosage: 'Apply BD-TDS', remarks: 'For tinea, candidiasis' },
          { brand: 'Lamisil cream', generic: 'Terbinafine 1% (B)', dosage: 'Apply OM-BD', remarks: 'For tinea pedis, cruris, corporis' },
          { brand: 'Whitfield ointment', generic: 'Benzoic acid + salicylic acid', dosage: 'Apply BD', remarks: 'For ringworm/tinea' },
        ],
      },
      {
        name: 'Others',
        entries: [
          { brand: 'Calamine lotion', generic: 'Calamine (A)', dosage: 'Apply PRN', remarks: 'For pruritus, insect bites, chickenpox' },
          { brand: 'Eurax cream', generic: 'Crotamiton 10%', dosage: 'Apply BD', remarks: 'For scabies and pruritus' },
          { brand: 'Scabisan / Kwell', generic: 'Gamma benzene hexachloride 1% (B)', dosage: 'Apply from neck down, leave 8hrs, wash off', remarks: 'For scabies' },
          { brand: 'Nizoral shampoo', generic: 'Ketoconazole 2% (C)', dosage: 'Twice weekly', remarks: 'For seborrhoeic dermatitis, pityriasis versicolor' },
          { brand: 'Kenacomb ointment', generic: 'Triamcinolone + neomycin + gramicidin + nystatin', dosage: 'Apply BD-TDS', remarks: 'Steroid + antibiotic + antifungal combination' },
          { brand: 'Sofra-Tulle', generic: 'Framycetin 1%', dosage: 'Change dressing daily', remarks: 'Antiseptic wound dressing' },
        ],
      },
    ],
  },
  {
    id: 'anti-obesity',
    name: 'Anti-obesity',
    page: 16,
    subCategories: [
      {
        name: 'Anti-obesity Medications',
        entries: [
          { brand: 'Xenical', generic: 'Orlistat 120mg (B)', dosage: '120mg TDS with meals', remarks: 'Lipase inhibitor – fat-soluble vitamin deficiency, steatorrhoea' },
          { brand: 'Sibutramine (withdrawn)', generic: 'Sibutramine 10/15mg', dosage: '10mg OM', remarks: 'Withdrawn due to cardiovascular risks' },
          { brand: 'Glucophage', generic: 'Metformin 500/850mg (B)', dosage: '500mg BD-TDS', remarks: 'Off-label for obesity/insulin resistance' },
        ],
      },
    ],
  },
  {
    id: 'paediatric-drugs',
    name: 'Paediatric Drugs',
    page: 17,
    subCategories: [
      {
        name: 'Paediatric Drug Doses',
        entries: [
          { brand: 'Panadol syrup', generic: 'Paracetamol 120mg/5ml (A)', dosage: '10-15mg/kg/dose QDS (max 4 doses/24hr)', remarks: 'Safest antipyretic/analgesic' },
          { brand: 'Brufen syrup', generic: 'Ibuprofen 100mg/5ml (B)', dosage: '5-10mg/kg/dose TDS-QDS', remarks: 'Anti-inflammatory, avoid in <6 months' },
          { brand: 'Ventolin syrup', generic: 'Salbutamol 2mg/5ml (C)', dosage: '0.1mg/kg/dose TDS-QDS', remarks: 'Bronchodilator' },
          { brand: 'Actifed syrup', generic: 'Triprolidine + pseudoephedrine (C)', dosage: '2.5ml TDS (2-5yr), 5ml TDS (6-12yr)', remarks: 'Antihistamine + decongestant' },
          { brand: 'Piriton syrup', generic: 'Chlorpheniramine 2mg/5ml (B)', dosage: '1-2mg/dose (2-6yr: 1mg, 6-12yr: 2mg) TDS-QDS', remarks: 'Sedating antihistamine' },
          { brand: 'Phensedyl syrup', generic: 'Codeine + ephedrine + promethazine (C)', dosage: '2.5ml TDS (1-5yr), 5ml TDS (6-12yr)', remarks: 'Cough suppressant – avoid <1yr' },
          { brand: 'Augmentin syrup', generic: 'Amoxycillin + clavulanic acid (B)', dosage: '25mg/kg/day in 3 divided doses', remarks: 'Broad spectrum antibiotic' },
          { brand: 'Zinnat syrup', generic: 'Cefuroxime axetil 125mg/5ml (B)', dosage: '10mg/kg/dose BD (max 250mg/dose)', remarks: '2nd gen cephalosporin' },
          { brand: 'Zithromax syrup', generic: 'Azithromycin 200mg/5ml (B)', dosage: '10mg/kg OM x 3 days', remarks: 'For atypical pneumonia, pertussis' },
          { brand: 'Vermox', generic: 'Mebendazole 100mg (C)', dosage: '1 BD x 3/7 or 1 stat (>2yr)', remarks: 'Anthelmintic' },
        ],
      },
    ],
  },
  {
    id: 'vaccinations',
    name: 'Vaccinations',
    page: 19,
    subCategories: [
      {
        name: 'National Immunisation Schedule',
        entries: [
          { brand: 'BCG', generic: 'BCG vaccine', dosage: 'Birth: 0.05ml intradermal', remarks: 'For TB prevention' },
          { brand: 'Hepatitis B', generic: 'HBsAg vaccine', dosage: 'Birth, 1 month, 5 months', remarks: 'IM injection' },
          { brand: 'DPT / Hib / HBV (Pediarix)', generic: 'Diphtheria + Pertussis + Tetanus + Hib + HBV', dosage: '3, 4, 5 months', remarks: '3 doses IM' },
          { brand: 'Polio (OPV/IPV)', generic: 'Oral/Inactivated Poliovirus vaccine', dosage: '3, 4, 5, 18 months', remarks: '' },
          { brand: 'MMR', generic: 'Measles + Mumps + Rubella (C)', dosage: '12 months, 7 years', remarks: 'Live vaccine, avoid in immunocompromised' },
          { brand: 'DPT booster', generic: 'Diphtheria + Pertussis + Tetanus', dosage: '18 months, 7 years', remarks: 'Booster doses' },
          { brand: 'Varicella', generic: 'Varicella-zoster virus vaccine (C)', dosage: '12-18 months', remarks: 'Live vaccine' },
          { brand: 'Pneumococcal (PCV)', generic: 'Pneumococcal conjugate vaccine', dosage: '2, 4, 6 months + booster at 12 months', remarks: 'Optional in Singapore schedule' },
          { brand: 'Hepatitis A', generic: 'Hepatitis A vaccine', dosage: '2 doses: 0 and 6-12 months', remarks: 'Recommended for travel' },
          { brand: 'Typhoid', generic: 'Typhoid vaccine (ViCPS)', dosage: '1 dose, booster every 3 years', remarks: 'For travel or high-risk areas' },
          { brand: 'Flu (Influenza)', generic: 'Inactivated influenza vaccine', dosage: 'Annual 1 dose (>9yr), 2 doses first time (<9yr)', remarks: 'Recommended annually' },
        ],
      },
      {
        name: 'Vaccine Information',
        entries: [
          { brand: 'Engerix-B / Recombivax HB', generic: 'Hepatitis B recombinant vaccine', dosage: '0, 1, 6 months schedule', remarks: '3-dose series, booster if anti-HBs <10 IU/L' },
          { brand: 'Priorix / MMR-II', generic: 'Measles + Mumps + Rubella (live)', dosage: '0.5ml SC at 12 months, booster at 7 years', remarks: 'Check rubella immunity in women of childbearing age' },
          { brand: 'Varivax / Varilrix', generic: 'Varicella-zoster (live attenuated)', dosage: '0.5ml SC x 2 doses (4-8 weeks apart)', remarks: 'Do not administer with aspirin' },
          { brand: 'Prevenar / Synflorix', generic: 'Pneumococcal conjugate vaccine', dosage: '2, 4, 6, 12-15 months', remarks: 'Recommended for all children <2 years' },
          { brand: 'Gardasil', generic: 'HPV quadrivalent vaccine (B)', dosage: '0, 2, 6 months (9-26 years)', remarks: 'For prevention of cervical cancer, genital warts' },
          { brand: 'Cervarix', generic: 'HPV bivalent vaccine (B)', dosage: '0, 1, 6 months', remarks: 'For HPV 16 and 18 only' },
          { brand: 'Menactra / Menveo', generic: 'Meningococcal conjugate vaccine ACYW-135', dosage: '1 dose at 11-12 years, booster at 16 years', remarks: 'For travel to high-risk areas (Hajj, Africa)' },
          { brand: 'Zostavax', generic: 'Herpes zoster live vaccine', dosage: '1 dose SC (≥60 years)', remarks: 'For prevention of shingles and post-herpetic neuralgia' },
        ],
      },
    ],
  },
  {
    id: 'acne-treatment',
    name: 'Acne Treatment',
    page: 20,
    subCategories: [
      {
        name: 'Summary of Acne Management',
        entries: [
          { brand: 'Retin-A cream', generic: 'Tretinoin 0.025/0.05/0.1% (C)', dosage: 'Apply at night, start 0.025%', remarks: 'Topical retinoid, photosensitivity, avoid in pregnancy' },
          { brand: 'Benzac / Brevoxyl', generic: 'Benzoyl peroxide 2.5/5/10% (C)', dosage: 'Apply OM-BD', remarks: 'Bactericidal against P. acnes, bleaches fabric' },
          { brand: 'Skinoren', generic: 'Azelaic acid 20% (B)', dosage: 'Apply BD', remarks: 'Antibacterial and comedolytic, safe in pregnancy' },
          { brand: 'Dalacin T / Clindatech', generic: 'Clindamycin 1% (B)', dosage: 'Apply BD', remarks: 'Topical antibiotic, use with BP to reduce resistance' },
          { brand: 'Vibramycin', generic: 'Doxycycline 100mg (D)', dosage: '100mg OM-BD x 3-6 months', remarks: 'Systemic antibiotic, photosensitivity, avoid in pregnancy' },
          { brand: 'Erythrocin', generic: 'Erythromycin 250/500mg (B)', dosage: '500mg BD x 3-6 months', remarks: 'Systemic antibiotic, alternative in pregnancy' },
          { brand: 'Diane-35', generic: 'Cyproterone acetate + Ethinyl estradiol (X)', dosage: '1 OM', remarks: 'For female acne with androgenic features' },
          { brand: 'Roaccutane', generic: 'Isotretinoin 10/20/40mg (X)', dosage: '0.5-1mg/kg/day x 4-6 months', remarks: 'Highly teratogenic – strict pregnancy prevention required. Monthly LFT, cholesterol, TG' },
        ],
      },
    ],
  },
];
