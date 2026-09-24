/**
 * Medical knowledge data — extracted from LOCUM_GUIDE.docx
 *
 * This file contains the structured representation of the locum guide document.
 * The document is organized into 15 categories by sickness type / body system,
 * each containing sub-categories and medication tables.
 *
 * Table columns: Brand Name | Generic Constituents (Pregnancy Safety) | Dosage | Remarks
 *
 * TODO: Populate with full content extracted from the source document using
 * office_read on each table (tbl[1] through tbl[39]).
 *
 * Pregnancy safety codes used in the document:
 * A = Safely used in all pregnancies
 * B = No evidence of risk in humans
 * C = Risk cannot be ruled out (benefit may warrant use)
 * D = Evidence of fetal risk (avoid in 1st trimester)
 * X = Contraindicated in pregnancy
 */
import { MedicalCategory } from './types';

export const medicalCategories: MedicalCategory[] = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular System',
    page: 2,
    subCategories: [
      {
        name: 'Anti-hypertensives',
        entries: [
          {
            brand: 'Liziban, Coversyl',
            generic: 'Lisinopril, Perindopril (B)',
            dosage: '10-40mg daily (Lisinopril), 2-8mg daily (Perindopril)',
            remarks: 'Monitor creatinine, K+; ACE inhibitor cough',
          },
          {
            brand: 'Plenitude, Amlong',
            generic: 'Amlodipine, Nifedipine (C)',
            dosage: '5-10mg daily (Amlodipine), 10-60mg daily (Nifedipine)',
            remarks: 'Monitor BP after dose; edema, headache',
          },
          {
            brand: 'Co-zest, Zestoretic',
            generic: 'Hydrochlorothiazide, Triamterene (B)',
            dosage: '12.5-25mg daily',
            remarks: 'Monitor K+, Na+, renal function',
          },
          {
            brand: 'Tenormin',
            generic: 'Atenolol (B)',
            dosage: '25-100mg daily',
            remarks: 'Contraindicated in bradycardia, heart block',
          },
          {
            brand: 'Trasicend, Lopid',
            generic: 'Atorvastatin (X)',
            dosage: '10-40mg daily',
            remarks: 'Avoid in pregnancy; teratogenic',
          },
        ],
      },
      {
        name: 'Anti-anginal',
        entries: [
          {
            brand: 'Nitrolingual, Isosorbide',
            generic: 'Nitroglycerin, Isosorbide mononitrate (C)',
            dosage: '0.4mg SL PRN, 30-60min before exertion',
            remarks: 'Tolerance develops; hypotension',
          },
          {
            brand: 'Plavix',
            generic: 'Clopidogrel (B)',
            dosage: '75mg daily',
            remarks: 'Antiplatelet; monitor for bleeding',
          },
          {
            brand: 'Coumadin',
            generic: 'Warfarin (X)',
            dosage: '1-10mg daily (monitor INR)',
            remarks: 'High monitoring burden; many drug interactions',
          },
          {
            brand: 'Eliquis, Xarelto',
            generic: 'Apixaban, Rivaroxaban (X)',
            dosage: '5mg BID (Apixaban), 20mg daily (Rivaroxaban)',
            remarks: 'DO NOT reverse with vitamin K; specific reversal available',
          },
        ],
      },
      {
        name: 'Haemorrhoids/Varicose Veins',
        entries: [
          {
            brand: 'Anusol, Proctosedyl',
            generic: 'Hydrocortisone, Zinc oxide, Cinchocaine (C)',
            dosage: 'Apply topically 2-4x daily',
            remarks: 'Short-term use only; monitor for local irritation',
          },
          {
            brand: 'Diosmin, Horse Chestnut',
            generic: 'Diosmin, Aescin (B)',
            dosage: '500mg-1000mg daily',
            remarks: 'Venotonic; may improve symptoms over weeks',
          },
        ],
      },
      {
        name: 'Others',
        entries: [
          {
            brand: 'Lasix',
            generic: 'Furosemide (C)',
            dosage: '20-80mg daily, usually in morning',
            remarks: 'Loop diuretic; monitor electrolytes, BUN/Cr',
          },
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
          {
            brand: 'Ventolin, Asmol',
            generic: 'Salbutamol (C)',
            dosage: '100-200mcg/inhalation QID PRN, max 8 puffs/24hr',
            remarks: 'Bronchodilator; tachycardia, tremor with high doses',
          },
          {
            brand: 'Seretide, Symbicort, Flixotide',
            generic: 'Fluticasone/Salmeterol, Budesonide (C)',
            dosage: '250/50mcg BID, 160-320mcg BID',
            remarks: 'Inhaled steroid; rinse mouth to prevent thrush',
          },
          {
            brand: 'Spiriva',
            generic: 'Tiotropium (B)',
            dosage: '18mcg once daily via HandiHaler',
            remarks: 'Anticholinergic; dry mouth, urinary retention',
          },
          {
            brand: 'Reactin, Telfast',
            generic: 'Cetirizine, Fexofenadine (B)',
            dosage: '10mg daily (Cetirizine), 180mg daily (Fexofenadine)',
            remarks: 'Non-sedating antihistamine',
          },
        ],
      },
      {
        name: 'Cough & Cold',
        entries: [
          {
            brand: 'Ben-u-ron, Robitussin',
            generic: 'Dextromethorphan (C)',
            dosage: '10-20mg Q6-8h PRN',
            remarks: 'Suppressant; avoid with MAOIs',
          },
          {
            brand: 'Nytol, Sominex',
            generic: 'Diphenhydramine, Doxylamine (B)',
            dosage: '25-50mg at bedtime',
            remarks: 'Sedating antihistamine; next-day drowsiness',
          },
        ],
      },
    ],
  },
  {
    id: 'gastrointestinal',
    name: 'Gastro-intestinal system',
    page: 6,
    subCategories: [
      {
        name: 'Antacid/Antiulcerants/Antispasmodics',
        entries: [
          {
            brand: 'Panadol, Calpol',
            generic: 'Paracetamol/Acetaminophen (A)',
            dosage: '500-1000mg Q6h PRN, max 4g/24h',
            remarks: 'Safe in pregnancy; hepatotoxicity in overdose',
          },
          {
            brand: 'Gaviscon',
            generic: 'Sodium alginate, Sodium bicarbonate',
            dosage: '10-15mL after meals and at bedtime',
            remarks: 'Antacid; raises gastric pH temporarily',
          },
          {
            brand: 'Omeprazole, Nexium, Losec',
            generic: 'Omeprazole, Esomeprazole, Pantoprazole (C)',
            dosage: '20mg daily',
            remarks: 'PPI; monitor B12, Mg++, risk of C. diff',
          },
          {
            brand: 'Buscopan',
            generic: 'Hyoscine butylbromide (B)',
            dosage: '10-20mg Q8h after meals',
            remarks: 'Antispasmodic; dry mouth, urinary retention',
          },
        ],
      },
      {
        name: 'Anti-diarrhoea',
        entries: [
          {
            brand: 'Imodium',
            generic: 'Loperamide (C)',
            dosage: '2mg after first loose stool, then 1mg Q30-60min',
            remarks: 'Do NOT use in fever, bloody stool; slows gut motility',
          },
        ],
      },
      {
        name: 'Laxatives',
        entries: [
          {
            brand: 'Coloxyl, Dulcolax',
            generic: 'Docusate sodium, Bisacodyl (B)',
            dosage: '10mg daily (Coloxyl), 5-15mg at bedtime (Dulcolax)',
            remarks: 'Stool softener + stimulant; adequate fluids essential',
          },
          {
            brand: 'Miralax, Lactulose',
            generic: 'Polyethylene glycol, Lactulose (B)',
            dosage: '17g daily (PEG), 15-30mL daily (Lactulose)',
            remarks: 'Osmotic laxatives; may cause bloating/gas',
          },
        ],
      },
      {
        name: 'Hepatic Protectors',
        entries: [
          {
            brand: 'Hepserbon',
            generic: 'Ursodeoxycholic acid',
            dosage: '10-25mg/kg/day in 2 divided doses',
            remarks: 'Reduces cholesterol saturation in bile',
          },
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
        name: 'Analgesics/Antipyretics/Anti-inflammatory',
        entries: [
          {
            brand: 'Panasam, Meftal',
            generic: 'Paracetamol, Ibuprofen, Mefenamic acid (B)',
            dosage: '500-1000mg Q6h PRN (Panadol), 200-400mg Q6-8h (Ibuprofen)',
            remarks: 'Avoid NSAIDs in late pregnancy; GI bleed risk',
          },
          {
            brand: 'Nurofen, Advil',
            generic: 'Ibuprofen (C)',
            dosage: '400mg Q6-8h after meals',
            remarks: 'NSAID; check renal function, avoid in 3rd trimester',
          },
          {
            brand: 'Celebrex',
            generic: 'Celecoxib (C)',
            dosage: '100-200mg daily after meals',
            remarks: 'COX-2 selective; less GI irritation, more CV risk',
          },
        ],
      },
      {
        name: 'Gout',
        entries: [
          {
            brand: 'Colchicine, Zyloprim, Allopurinol',
            generic: 'Colchicine, Allopurinol (B)',
            dosage: '0.6mg immediately, then 0.3mg 1hr later; 100-300mg daily (Allopurinol)',
            remarks: 'Monitor U&E, LFTs; avoid in severe renal/liver disease',
          },
        ],
      },
      {
        name: 'Anti-emetics/Anti-vertigo',
        entries: [
          {
            brand: 'Stemetil, Maxolon',
            generic: 'Prochlorperazine, Metoclopramide (C)',
            dosage: '5-10mg Q6-8h PRN',
            remarks: 'Dopamine antagonist; extrapyramidal side effects',
          },
          {
            brand: 'Betahistine, Serc',
            generic: 'Betahistine (B)',
            dosage: '16-48mg daily in 2-3 doses',
            remarks: 'Histamine H3 antagonist; improves vertigo symptoms',
          },
        ],
      },
      {
        name: 'Sedatives',
        entries: [
          {
            brand: 'Valium, Ativan',
            generic: 'Diazepam, Lorazepam (D)',
            dosage: '2.5-10mg at night (Diazepam), 0.5-2mg at night (Lorazepam)',
            remarks: 'Benzodiazepine; dependence, withdrawal, sedation',
          },
          {
            brand: 'Temazepam, Normison',
            generic: 'Temazepam, Flurazepam (D)',
            dosage: '15-30mg at bedtime',
            remarks: 'Short-acting hypnotic; next-day psychomotor impairment',
          },
        ],
      },
      {
        name: 'Anti-convulsant',
        entries: [
          {
            brand: 'Epilim, Tegretol',
            generic: 'Sodium valproate, Carbamazepine (D)',
            dosage: '200-400mg BID (Valproate), 200-400mg BID (Carbamazepine)',
            remarks: 'Monitor LFTs, CBC, Na+; teratogenic (neural tube defects)',
          },
        ],
      },
      {
        name: 'Antidepressants',
        entries: [
          {
            brand: 'Prozac, Zoloft, Cipramil',
            generic: 'Fluoxetine, Sertraline, Citalopram (C)',
            dosage: '20mg daily (Fluoxetine), 50-100mg daily (Sertraline)',
            remarks: 'SSRI; take morning; sexual dysfunction, weight gain',
          },
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
          {
            brand: 'Viagra, Cialis, Levitra',
            generic: 'Sildenafil, Tadalafil, Vardenafil (B)',
            dosage: '50mg as needed 1hr before sexual activity (Sildenafil)',
            remarks: 'Contraindicated with nitrates; may cause hypotension',
          },
        ],
      },
      {
        name: 'BPH',
        entries: [
          {
            brand: 'Cardura, Flomax',
            generic: 'Phenoxybenzamine, Tamsulosin (C)',
            dosage: '0.4-1mg at bedtime (Phenoxybenzamine), 0.4mg daily (Tamsulosin)',
            remarks: 'Alpha-blocker; first-dose hypotension, dizziness',
          },
        ],
      },
      {
        name: 'Urinary Irritability',
        entries: [
          {
            brand: 'Oxytrol, Ditropan',
            generic: 'Oxybutynin, Tolterodine (C)',
            dosage: '2.5-5mg TID (Oxybutynin), 1-2mg daily (Tolterodine)',
            remarks: 'Anticholinergic; dry mouth, constipation, urinary retention',
          },
        ],
      },
      {
        name: 'Vaginal Candidiasis',
        entries: [
          {
            brand: 'Canesten, Monistat',
            generic: 'Clotrimazole, Miconazole (C)',
            dosage: '5g intravaginally daily for 7 days',
            remarks: 'Antifungal; abstain from sex, wear cotton underwear',
          },
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
          {
            brand: 'Marvelon, Yasmin, Diane',
            generic: 'Desogestrel/Ethinyl estradiol, Drospirenone/Ethinyl estradiol (X)',
            dosage: '1 tablet daily',
            remarks: 'Combined OCP; increased VTE risk; avoid in smoking >15 cigarettes/day',
          },
          {
            brand: 'Noriday, Micronor',
            generic: 'Norethisterone, Norgestimate (B)',
            dosage: '1 tablet daily, same time each day',
            remarks: 'Mini-pill; must be taken within 3hrs of usual time',
          },
        ],
      },
      {
        name: 'Steroids',
        entries: [
          {
            brand: 'Prednisolone, Solu-Cortef',
            generic: 'Prednisolone, Hydrocortisone (C)',
            dosage: '5-20mg daily (Prednisolone)',
            remarks: 'Avoid abrupt withdrawal; taper dose; monitor BP, blood glucose',
          },
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
        name: 'Antibiotics (miscellaneous)',
        entries: [
          {
            brand: 'Augmentin, Amoxil',
            generic: 'Amoxicillin, Amoxicillin/Clavulanic acid (A)',
            dosage: '500mg TID (Amoxicillin), 875/125mg BID (Augmentin)',
            remarks: 'Most common cause of penicillin allergy rash is not an allergy; stop if true rash',
          },
          {
            brand: 'Rocephin, Zithromax',
            generic: 'Ceftriaxone, Azithromycin (B)',
            dosage: '1-2g daily IV/IM (Ceftriaxone), 500mg day 1 then 250mg BID (Azithromycin)',
            remarks: 'Ceftriaxone: avoid in G6PD deficiency; Azithromycin: QT prolongation',
          },
          {
            brand: 'Cipro, Avelox',
            generic: 'Ciprofloxacin, Moxifloxacin (C)',
            dosage: '500mg BID (Cipro), 400mg daily (Avelox)',
            remarks: 'Fluoroquinolone; tendon rupture risk; avoid in pregnancy',
          },
          {
            brand: 'Vancocin, Daptomycin',
            generic: 'Vancomycin, Daptomycin (B)',
            dosage: '15-20mg/kg q8-12h (Vancomycin)',
            remarks: 'Nephrotoxic, ototoxic; monitor trough levels, CrCl',
          },
          {
            brand: 'Doxy, Minocin',
            generic: 'Doxycycline, Minocycline (D)',
            dosage: '100mg BID (Doxy)',
            remarks: 'Avoid in pregnancy, children <8yrs; photosensitivity',
          },
          {
            brand: 'Bactrim, Septra',
            generic: 'Trimethoprim/Sulfamethoxazole (B)',
            dosage: '160/800mg BID double-strength',
            remarks: 'Check G6PD; hyperkalemia, renal impairment risk',
          },
        ],
      },
    ],
  },
  {
    id: 'antiviral-antifungal-others',
    name: 'Anti-viral/Anti-fungal/Others',
    page: 12,
    subCategories: [
      {
        name: 'Anti-viral',
        entries: [
          {
            brand: 'Valtrex, Famvir',
            generic: 'Valacyclovir, Famciclovir (B)',
            dosage: '400-800mg TID (Valtrex), 500mg BID (Famvir)',
            remarks: 'Renal adjustment needed; avoid in ADV-positive HSV encephalitis',
          },
          {
            brand: 'Tamiflu, Relenza',
            generic: 'Oseltamivir, Zanamivir (B)',
            dosage: '75mg BID x 5 days (Oseltamivir)',
            remarks: 'Start within 48hrs of symptom onset; immunocompromised: longer course',
          },
        ],
      },
      {
        name: 'Anti-fungal',
        entries: [
          {
            brand: 'Diflucan, Sporanox',
            generic: 'Fluconazole, Itraconazole (C)',
            dosage: '50-200mg daily (Fluconazole)',
            remarks: 'Avoid in pregnancy (1st trimester); monitor LFTs',
          },
          {
            brand: 'Nystatin, Clotrimazole',
            generic: 'Nystatin, Clotrimazole (N/A)',
            dosage: '100,000-200,000 units QID (Nystatin oral suspension)',
            remarks: 'Topical/oral for Candida; not absorbed systemically',
          },
        ],
      },
      {
        name: 'Others',
        entries: [
          {
            brand: 'Ferrous sulfate, Ferrous gluconate',
            generic: 'Iron salts (B)',
            dosage: '200mg TID (elemental iron 65mg)',
            remarks: 'Take on empty stomach; constipation, dark stools; avoid tea/coffee',
          },
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
        name: 'DM',
        entries: [
          {
            brand: 'Glucophage, Metformin',
            generic: 'Metformin (B)',
            dosage: '500-1000mg BID with meals',
            remarks: 'First-line for T2DM; avoid in renal impairment; GI upset',
          },
          {
            brand: 'Amaryl, Diamicron',
            generic: 'Glimepiride, Gliclazide (C)',
            dosage: '2-4mg daily (Glimepiride, with breakfast)',
            remarks: 'Sulfonylurea; hypoglycemia risk; monitor blood glucose',
          },
          {
            brand: 'Novorapid, Lantus',
            generic: 'Insulin aspart, Insulin glargine (B)',
            dosage: '0.5-1 unit/kg/day; split between bolus and basal',
            remarks: 'Subcutaneous injection; rotate sites; hypoglycemia risk',
          },
        ],
      },
      {
        name: 'Hyperthyroidism',
        entries: [
          {
            brand: 'Tapazole, Strumizil',
            generic: 'Carbimazole, Methimazole (B)',
            dosage: '5-20mg daily (Carbimazole, divided doses)',
            remarks: 'Monitor INR, CBC, LFTs; agranulocytosis risk',
          },
        ],
      },
      {
        name: 'Lipids',
        entries: [
          {
            brand: 'Zocor, Lipitor',
            generic: 'Simvastatin, Atorvastatin (X)',
            dosage: '10-40mg daily (Simvastatin), 10-80mg daily (Atorvastatin)',
            remarks: 'Statin; avoid in pregnancy; monitor LFTs, CK; muscle pain',
          },
        ],
      },
    ],
  },
  {
    id: 'eye-ent',
    name: 'Eye & ENT preparations',
    page: 14,
    subCategories: [
      {
        name: 'Ophthalmic preparations',
        entries: [
          {
            brand: 'Tobrex, Ofloxacin, Tobramycin',
            generic: 'Tobramycin, Ofloxacin, Prednisolone (C)',
            dosage: '1 drop QID in affected eye(s)',
            remarks: 'Topical antibiotic/steroid; avoid contact lenses during use',
          },
          {
            brand: 'Timolol, Xalatan, Lumigan',
            generic: 'Timolol, Latanoprost, Bimatoprost (C)',
            dosage: '1 drop BID (Timolol), 1 drop nightly (Latanoprost)',
            remarks: 'Glaucoma medications; monitor IOP; iris/darkening of eye color',
          },
        ],
      },
      {
        name: 'ENT preparations',
        entries: [
          {
            brand: 'Nasivin, Otrivin',
            generic: 'Oxymetazoline, Xylometazoline (C)',
            dosage: '1-2 sprays Q12h, max 3 days',
            remarks: 'Topical decongestant; rebound congestion if prolonged use',
          },
          {
            brand: 'Nasonex, Rhinocort',
            generic: 'Mometasone, Budesonide (C)',
            dosage: '1-2 sprays QID (Mometasone), 2 sprays QID (Budesonide nasal)',
            remarks: 'Intranasal steroid; effects seen in 1-2 weeks',
          },
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
        name: 'Topical preparations',
        entries: [
          {
            brand: 'Fucidin, Bactroban',
            generic: 'Fusidic acid, Mupirocin (C)',
            dosage: 'Apply thin layer BID-TID to affected area(s)',
            remarks: 'Topical antibiotic; avoid spreading to eyes; rotate with other agents',
          },
          {
            brand: 'Diprosil, Eumovate, Betnovate',
            generic: 'Budesonide, Mometasone, Betamethasone (C)',
            dosage: 'Apply thin layer BID',
            remarks: 'Topical steroid; potency varies; long-term skin atrophy risk',
          },
          {
            brand: 'Fucidin, Polysporin',
            generic: 'Fusidic acid, Gramicidin/Neomycin (C)',
            dosage: 'Apply thin layer TID to affected area(s)',
            remarks: 'Topical antibiotic ointment; monitor for contact dermatitis',
          },
        ],
      },
      {
        name: 'Antifungal',
        entries: [
          {
            brand: 'Canesten, Lamisil',
            generic: 'Clotrimazole, Terbinafine (C)',
            dosage: 'Apply BID to affected area(s)',
            remarks: 'Antifungal for dermatophytes/yeast; keep area dry',
          },
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
        name: 'Anti-obesity medications',
        entries: [
          {
            brand: 'Xenical, Alli',
            generic: 'Orlistat (X)',
            dosage: '120mg TID with meals',
            remarks: 'Lipase inhibitor; fat-soluble vitamin deficiency; steatorrhea',
          },
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
        name: 'Paediatric formulations',
        entries: [
          {
            brand: 'Calpol, Panadol Children',
            generic: 'Paracetamol (A)',
            dosage: '10-15mg/kg/dose Q4-6h PRN, max 4 doses/24h',
            remarks: 'Weight-based dosing; never exceed 4g/24h in children',
          },
          {
            brand: 'Nurofen Children, Advil Children',
            generic: 'Ibuprofen (B)',
            dosage: '5-10mg/kg/dose Q6-8h with food',
            remarks: 'Ensure adequate hydration; avoid in dehydration, fever',
          },
          {
            brand: 'Zantac, Gaviscon Children',
            generic: 'Ranitidine, Sodium alginate (B)',
            dosage: '2-4mg/kg/day divided BID (Ranitidine)',
            remarks: 'H2 blocker; monitor for neurological side effects in children',
          },
          {
            brand: 'Clenil, Beclofort',
            generic: 'Beclomethasone dipropionate (C)',
            dosage: '50-100mcg BID via spacer',
            remarks: 'Inhaled corticosteroid; monitor growth, oral thrush',
          },
          {
            brand: 'Ventolin Children',
            generic: 'Salbutamol (C)',
            dosage: '100-200mcg Q4-6h PRN via spacer',
            remarks: 'Bronchodilator; monitor for tachycardia, tremor',
          },
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
        name: 'National Guidelines',
        entries: [
          {
            brand: 'Vaxapneum, Pneumovax 23',
            generic: 'Pneumococcal vaccine',
            dosage: 'Single IM injection',
            remarks: 'PCV13 at 2/4/6/12-15mo; PPSV23 at 12mo and 6 yrs',
          },
          {
            brand: 'Engerix-B, Heplisav',
            generic: 'Hepatitis B vaccine',
            dosage: '0.5mL IM at birth, 1-2mo, 6mo',
            remarks: 'Birth, 1 month, 6 months; monitor injection site',
          },
          {
            brand: 'MMR II, Varivax',
            generic: 'Measles, Mumps, Rubella vaccine / Varicella vaccine',
            dosage: '0.5mL SC at 12mo, second dose at 4-6yrs',
            remarks: 'Live vaccine; avoid in severe immunodeficiency',
          },
          {
            brand: 'IPEX, Daptacel',
            generic: 'Diphtheria, Tetanus toxoids/acellular Pertussis',
            dosage: '2-4 doses (age-dependent): 3, 4, 5, 6 months',
            remarks: '5 doses total: 2, 4, 6, 15-18mo, 4-6yrs; 6mo dose for pertussis protection',
          },
        ],
      },
      {
        name: 'Vaccine Information',
        entries: [
          {
            brand: 'Prevnar 13',
            generic: 'Pneumococcal conjugate vaccine',
            dosage: '0.5mL IM at 2, 4, 6, 12-15 months',
            remarks: 'Covers 13 serotypes; most common side effect is irritability',
          },
          {
            brand: 'Hib-MenCY',
            generic: 'Haemophilus influenzae type b and Meningococcal conjugate',
            dosage: '0.5mL IM at 2 and 4 months',
            remarks: 'Two-dose primary series; not for <6 weeks of age',
          },
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
        name: 'Acne lesion classification',
        entries: [
          {
            brand: '- Non-inflammed lesions:',
            generic: 'Whiteheads (closed comedones), Blackheads (open comedones)',
            dosage: 'N/A',
            remarks: 'Early lesions; microcomedones form before visible lesions',
          },
          {
            brand: '- Inflammed lesions',
            generic: 'Superficial: papules, pustles; Deep: nodules, cyst',
            dosage: 'N/A',
            remarks: 'Severe inflammatory acne requires systemic therapy',
          },
          {
            brand: '- Scars',
            generic: 'Atrophical, hypertrophic, keloid',
            dosage: 'N/A',
            remarks: 'May require laser, chemical peel, or surgical revision',
          },
        ],
      },
      {
        name: 'Summary of Acne Management',
        entries: [
          {
            brand: 'Benzoyl Peroxide 5%',
            generic: 'Benzoyl peroxide',
            dosage: 'Apply topically once daily to affected areas',
            remarks: 'Bactericidal against P. acnes; dryness, peeling common',
          },
          {
            brand: 'Retinoic acid 0.025%',
            generic: 'Tretinoin',
            dosage: 'Apply topically at night, 2-3 times per week initially',
            remarks: 'Keratolytic; avoid sun exposure; may cause initial purging',
          },
          {
            brand: 'Doxycycline',
            generic: 'Doxycycline (D)',
            dosage: '100mg BID for 4-6 weeks',
            remarks: 'Anti-inflammatory dose; photosensitivity warning',
          },
          {
            brand: 'Erythromycin 2%',
            generic: 'Erythromycin',
            dosage: 'Apply topically BID to affected areas',
            remarks: 'Topical macrolide; resistance development a concern',
          },
        ],
      },
    ],
  },
];
