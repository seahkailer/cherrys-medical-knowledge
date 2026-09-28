/**
 * Medical knowledge data — extracted from LOCUM_GUIDE.docx and NUP CPG documents.
 * Real data from all 39 document tables plus 5 NUP CPG guidelines.
 */
import { MedicalCategory } from '../types';

export const medicalCategories: MedicalCategory[] = [
  {
    "id": "cardiovascular",
    "name": "Cardiovascular System",
    "page": 2,
    "subCategories": [
      {
        "name": "Anti-hypertensives",
        "entries": [
          {
            "brand": "Atenolol / Normaten",
            "generic": "Atenolol 50mg (D)",
            "dosage": "\u00bd to 1 OM",
            "remarks": "[Beta-Blockers] Avoid in COPD, asthma, significant PVD, uncompensated CHF and psoriasis; Avoid in DM, obesity and metabolic syndrome"
          },
          {
            "brand": "Concor",
            "generic": "Bisoprolol 5mg (C; D in 2nd and 3rd)",
            "dosage": "1 \u2013 2 OM",
            "remarks": "[Beta-Blockers] As above"
          },
          {
            "brand": "Inderal",
            "generic": "Propanolol 10/40mg (C; D in 2nd and 3rd)",
            "dosage": "- HTN: 40mg bd initially, maintenance 160-320mg daily; - Arrhythmia: 10-40mg tds-qds",
            "remarks": "[Beta-Blockers] As above"
          },
          {
            "brand": "Lasix",
            "generic": "Frusemide 40mg (C; D if used in pregnancy-induced HTN)",
            "dosage": "\u00bd to 12 daily",
            "remarks": "[Diuretics]"
          },
          {
            "brand": "Scanduretic",
            "generic": "HCTZ 50mg, amiloride 5mg (B; D if used in pregnancy-induced HTN)",
            "dosage": "1 OM \u2013 2 BD",
            "remarks": "[Diuretics]"
          },
          {
            "brand": "Nitrilix",
            "generic": "Indapamide 1.5mg (B; D if used in pregnancy-induced HTN)",
            "dosage": "1 OM",
            "remarks": "[Diuretics]"
          },
          {
            "brand": "Adalat",
            "generic": "Nifedipine 10mg (C)",
            "dosage": "1 \u2013 2 TDS",
            "remarks": "[Calcium Channel Blockers] May cause LL swelling"
          },
          {
            "brand": "Adalat Retard",
            "generic": "Nifedipine 20mg",
            "dosage": "1 \u2013 2 BD",
            "remarks": "[Calcium Channel Blockers] As above"
          },
          {
            "brand": "Adalat LA",
            "generic": "Nifedipine 30mg",
            "dosage": "1 \u2013 2 OM",
            "remarks": "[Calcium Channel Blockers] As above"
          },
          {
            "brand": "Norvasc",
            "generic": "Amlodipine 5mg (C)",
            "dosage": "1 \u2013 2 OM",
            "remarks": "[Calcium Channel Blockers] As above"
          },
          {
            "brand": "Captopril",
            "generic": "Captopril 25mg (C; D in 2nd and 3rd)",
            "dosage": "- HTN: 25mg bd-tds initially, may be increased to 100mg bd-tds; - CHF: 25mg tds initially (max 450mg/day)",
            "remarks": "[ACE-Inhibitor] 1st dose hypotension, ACE-I induced cough (more common in women), to monitor U/E 2-4 weeks into initiation or escalation and stop if >30% rise, caution in CRF, risk of hyperkalemia, contra-indicated in unilateral RAS with solitary kidney or bilateral RAS"
          },
          {
            "brand": "Enalapril / Renitec",
            "generic": "Enalapril 10/20mg (C; D in 2nd and 3rd)",
            "dosage": "20-40mg OM",
            "remarks": "[ACE-Inhibitor] As above"
          },
          {
            "brand": "Zestril",
            "generic": "Lisinopril 5/10mg (C; D in 2nd and 3rd)",
            "dosage": "2.5 \u2013 20mg OM",
            "remarks": "[ACE-Inhibitor] As above"
          },
          {
            "brand": "Cozaar",
            "generic": "Losartan 50mg (C; D in 2nd and 3rd)",
            "dosage": "1 \u2013 2 OM",
            "remarks": "[Angiotensin Receptor Blocker]"
          },
          {
            "brand": "Olmetec",
            "generic": "Olmesartan",
            "dosage": "20-40mg OM",
            "remarks": "[Angiotensin Receptor Blocker]"
          },
          {
            "brand": "Aprovel",
            "generic": "Irbesartan 300mg (C; D in 2nd and 3rd)",
            "dosage": "\u00bd - 1 OM",
            "remarks": "[Angiotensin Receptor Blocker]"
          },
          {
            "brand": "Micardis",
            "generic": "Telmisartan 40mg (C; D in 2nd and 3rd)",
            "dosage": "40 \u2013 160mg daily",
            "remarks": "[Angiotensin Receptor Blocker]"
          },
          {
            "brand": "Hyzaar",
            "generic": "Losartan 50mg, HCTZ 12.5mg (C; D in 2nd and 3rd)",
            "dosage": "1 \u2013 2 OM",
            "remarks": "[Combination]"
          },
          {
            "brand": "Hyzaar Forte",
            "generic": "Losartan 100mg, HCTZ 25mg (C; D in 2nd and 3rd)",
            "dosage": "1 OM",
            "remarks": "[Combination]"
          },
          {
            "brand": "Niften / Nifetex-TR",
            "generic": "Atenolol 50mg, nifedipine SR 20mg (D)",
            "dosage": "1 OM \u2013 BD",
            "remarks": "[Combination]"
          }
        ]
      },
      {
        "name": "Anti-anginal",
        "entries": [
          {
            "brand": "ISDN",
            "generic": "Isosorbide dinitrate 5/10mg (C)",
            "dosage": "5-30mg qds",
            "remarks": ""
          },
          {
            "brand": "GTN",
            "generic": "GTN 0.5mg S/L (C)",
            "dosage": "1 PRN",
            "remarks": ""
          },
          {
            "brand": "Aspirin",
            "generic": "Aspirin 100mg (C; D if full dose in 3rd)",
            "dosage": "1 OM",
            "remarks": "3 Stat in ACS"
          },
          {
            "brand": "Persantin",
            "generic": "Dipyridamole 25mg (C)",
            "dosage": "300-450mg/day in 3-4 divided doses",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Haemorrhoids / Varicose Veins",
        "entries": [
          {
            "brand": "Daflon",
            "generic": "Diosmin, hesperidin",
            "dosage": "- Varicose veins: 1 BD; - Piles: 2 TDS for 3 days, then 2 BD",
            "remarks": ""
          },
          {
            "brand": "Proctosedyl supp",
            "generic": "Hydrocortisone, cinchocaine, framycetin, aesculin",
            "dosage": "1 BD and after defecation",
            "remarks": "For piles, anal fissure, anal pruritus"
          },
          {
            "brand": "Hirudoid cream",
            "generic": "",
            "dosage": "Apply BD-TDS",
            "remarks": "Venoconstrictor (for fine varicosities)"
          }
        ]
      },
      {
        "name": "Others",
        "entries": [
          {
            "brand": "Digoxin",
            "generic": "Digoxin 0.0625/0.25mg (C)",
            "dosage": "Maintenance of 0.125-0.75mg daily",
            "remarks": ""
          }
        ]
      }
    ]
  },
  {
    "id": "respiratory",
    "name": "Respiratory System",
    "page": 4,
    "subCategories": [
      {
        "name": "Asthma, COPD, Allergic Rhinitis",
        "entries": [
          {
            "brand": "Bricanyl",
            "generic": "Terbutaline 2.5mg (B)",
            "dosage": "1 \u2013 2 TDS",
            "remarks": "B-agonist"
          },
          {
            "brand": "Ketotifen",
            "generic": "Ketotifen 1mg",
            "dosage": "Adult: 1/1 bd (max 11/11 bd)",
            "remarks": "Anti-histamine"
          },
          {
            "brand": "Ventolin",
            "generic": "Salbutamol 2/4mg (C)",
            "dosage": "2-4mg tds",
            "remarks": "B-agonist"
          },
          {
            "brand": "",
            "generic": "Salbutamol MDI",
            "dosage": "2 puffs tds-qds",
            "remarks": ""
          },
          {
            "brand": "Singulair",
            "generic": "Montelukast 4/5/10mg  (B)",
            "dosage": ">14yo: 10mg OM; 6-14yo: 5mg OM; 1-5mg: 4mg OM",
            "remarks": "Leucotriene antagonist"
          },
          {
            "brand": "Atrovent",
            "generic": "Ipratropium bromide MDI (B)",
            "dosage": "2 puffs QDS",
            "remarks": "Anti-muscarinic"
          },
          {
            "brand": "Becotide",
            "generic": "Beclomethasone 50mcg inhaler (C)",
            "dosage": "2 puff TDS-QDS",
            "remarks": "Steroid inhaler"
          },
          {
            "brand": "Flixotide",
            "generic": "Fluticasone 50/100/250 mcg inhaler (C)",
            "dosage": "Mild: 100-250mcg bd; Moderate: 250-500mcg bd; Severe 500-1000 mcg bd",
            "remarks": "Steroid inhaler"
          },
          {
            "brand": "Pulmicort",
            "generic": "Budesonide 200mcg inhaler (B if inhaled)",
            "dosage": "1 \u2013 2 puffs BD",
            "remarks": "Steroid inhaler"
          },
          {
            "brand": "Symbicort",
            "generic": "Budesonide + formoterol inhaler (C)",
            "dosage": "1 -2 puffs bd",
            "remarks": "Combination of long-acting B-agonist and steroid"
          },
          {
            "brand": "Seretide",
            "generic": "Salmeterol + fluticasone (C) 50/100, 50/250, 50/500 (Accuhaler) 25/50, 25/125, 25/250 (Evohaler)",
            "dosage": "Adult: 1 puff bd (Accuhaler); 4-11yo: 1 puff bd (Evohaler)",
            "remarks": "Combination of long-acting B-agonist and steroid"
          },
          {
            "brand": "Flixonase",
            "generic": "Fluticasone (C)",
            "dosage": "2 puff OM (each nostril)",
            "remarks": "Allergic rhinitis"
          },
          {
            "brand": "Nasacort",
            "generic": "Triamcinolone (C)",
            "dosage": "1-2 puff OM (each nostril)",
            "remarks": "Allergic rhinitis"
          }
        ]
      },
      {
        "name": "Cough & Cold",
        "entries": [
          {
            "brand": "Phensedyl / Dhasedyl / Sunsedyl",
            "generic": "Codeine + ephedrine + promethazine (C)",
            "dosage": "Adult: 10ml tds",
            "remarks": "[Cough Suppressant]"
          },
          {
            "brand": "Phensedyl-DM / Dhasedyl DM",
            "generic": "Dextromethorphan + ephedrine + promethazine (C)",
            "dosage": "As above",
            "remarks": "[Cough Suppressant]"
          },
          {
            "brand": "LTR",
            "generic": "Codeine (C; D if prolonged dosing/high dose at term)",
            "dosage": "Adults only: 10ml tds",
            "remarks": "[Cough Suppressant]"
          },
          {
            "brand": "Promethazine",
            "generic": "Promethazine (C)",
            "dosage": "10ml tds",
            "remarks": "[Cough Suppressant] Safest for pregnancy"
          },
          {
            "brand": "Codipront",
            "generic": "Codeine 30mg, Phenyltoloxamine 10mg",
            "dosage": "1 BD",
            "remarks": "[Cough Suppressant]"
          },
          {
            "brand": "Dexcophan / DMP",
            "generic": "Dextromethorphan 15mg (C)",
            "dosage": "1 \u2013 2 TDS",
            "remarks": "[Cough Suppressant]"
          },
          {
            "brand": "Tussils lozenges",
            "generic": "Dextromethorphan 15mg(C)",
            "dosage": "2 TDS",
            "remarks": "[Cough Suppressant]"
          },
          {
            "brand": "MBE / Benadryl / Phenexpect",
            "generic": "Ammonium chloride + diphenhydramine",
            "dosage": "10ml tds",
            "remarks": "[Expectorant]"
          },
          {
            "brand": "CM2",
            "generic": "Phensedyl + Benadryl",
            "dosage": "10ml tds",
            "remarks": "[Mixed Cough Preparations]"
          },
          {
            "brand": "Phenexpect CD",
            "generic": "Benadryl + codeine",
            "dosage": "10ml tds",
            "remarks": "[Mixed Cough Preparations]"
          },
          {
            "brand": "Rhinathiol - Promethazine",
            "generic": "PMZ + carbocisteine",
            "dosage": "10ml tds",
            "remarks": "[Mixed Cough Preparations] Carbocisteine is mucolytic"
          },
          {
            "brand": "Bisolvon / Vasican",
            "generic": "Bromhexine 8mg",
            "dosage": "1 TDS",
            "remarks": "[Mucolytic]"
          },
          {
            "brand": "Mucosolvan / Shinoxol",
            "generic": "Ambroxol 30mg",
            "dosage": "1 TDS",
            "remarks": "[Mucolytic]"
          },
          {
            "brand": "Fluimucil",
            "generic": "N-acetylcysteine 600mg (B)",
            "dosage": "1 OM or ON",
            "remarks": "[Mucolytic] For 100mg sachet: 2 TDS; For 200mg sachet: 1 TDS"
          },
          {
            "brand": "Actifed / Fedac / Decondine",
            "generic": "Triprolidine 2.5mg + pseudoephedrine 30mg  (C)",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antihistamines]"
          },
          {
            "brand": "Became",
            "generic": "Carbinoxamine 4mg + pseudoephedrine 60mg (C)",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antihistamines]"
          },
          {
            "brand": "Fenfedrin",
            "generic": "Chlorpheniramine 4mg + pseudoephedrine 60mg (C)",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antihistamines]"
          },
          {
            "brand": "Piriton / Chloramine",
            "generic": "Chlorpheniramine 4mg (B)",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antihistamines]"
          },
          {
            "brand": "Polaramine / Polarax / Dexchloramine",
            "generic": "Dexchlorpheniramine 2mg (B)",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antihistamines]"
          },
          {
            "brand": "Atarax",
            "generic": "Hydroxyzine 10/25 mg (C)",
            "dosage": "1 BD \u2013 TDS",
            "remarks": "[Antihistamines]"
          },
          {
            "brand": "Zyrtec",
            "generic": "Cetirizine 10mg (B)",
            "dosage": "1 OM",
            "remarks": "[Antihistamines] Non-sedating"
          },
          {
            "brand": "Telfast",
            "generic": "Fexofenadine 180mg (C)",
            "dosage": "1 OM",
            "remarks": "[Antihistamines] Non-sedating"
          },
          {
            "brand": "Xyzal",
            "generic": "Levocetirizine 5mg (C)",
            "dosage": "1 OM",
            "remarks": "[Antihistamines] Non-sedating"
          },
          {
            "brand": "Clarinase, Cirrus/ Zyrtec-D Telfast-D",
            "generic": "",
            "dosage": "1 BD",
            "remarks": "[Antihistamines] Combination of non-sedating antihistamine with pseduoephedrine"
          },
          {
            "brand": "Iliadin nasal drops",
            "generic": "Oxymetazoline 0.01%/0.025%/0.05% (C)",
            "dosage": "<1yo: 0.01%; 1-6yo: 0.025%; >6yo: 0.05%; 1 drop tds",
            "remarks": "[Nasal Decongestants] Not to continue beyond 5 days"
          },
          {
            "brand": "Ephedrine nosedrops",
            "generic": "Ephedrine (C)",
            "dosage": "2 drops TDS \u2013 QDS into each nostril",
            "remarks": "[Nasal Decongestants]"
          },
          {
            "brand": "Danzen / Korzen",
            "generic": "Serratiopeptidase 5/10mg",
            "dosage": "5mg: 2 TDS; 10mg: 1 TDS",
            "remarks": "[Anti-inflammatory Enzymes]"
          },
          {
            "brand": "Leftose / Neuflo",
            "generic": "Lysozyme 10/ 30/ 90 mg",
            "dosage": "For 10mg: 2 TDS; For 30/ 90 mg: 1 TDS",
            "remarks": "[Anti-inflammatory Enzymes]"
          },
          {
            "brand": "Difflam",
            "generic": "Benzydamine",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antiseptic Lozenges]"
          },
          {
            "brand": "Trachisan",
            "generic": "Chlorhexidine, lidocaine, tyrothricin",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antiseptic Lozenges]"
          },
          {
            "brand": "MAC",
            "generic": "",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antiseptic Lozenges]"
          }
        ]
      }
    ]
  },
  {
    "id": "gastrointestinal",
    "name": "Gastro-intestinal System",
    "page": 6,
    "subCategories": [
      {
        "name": "Antacid / Antiulcerants / Antispasmodics",
        "entries": [
          {
            "brand": "Allumag",
            "generic": "AlOH + Mg trisilicate",
            "dosage": "1 \u2013 2 TDS-QDS",
            "remarks": "[Antacid]"
          },
          {
            "brand": "Veragel",
            "generic": "Antacid + dicyclomine + dimethicone",
            "dosage": "2 TDS",
            "remarks": "[Antacid]"
          },
          {
            "brand": "MMT",
            "generic": "Mg trisilicate + Mg carbonate + NaHCO3",
            "dosage": "10-20ml tds",
            "remarks": "[Antacid]"
          },
          {
            "brand": "Tagamet",
            "generic": "Cimetidine 200mg (B)",
            "dosage": "2 BD",
            "remarks": "[H2-blocker & PPI]"
          },
          {
            "brand": "Famotidine",
            "generic": "Famotidine 20mg (B)",
            "dosage": "1 BD",
            "remarks": "[H2-blocker & PPI]"
          },
          {
            "brand": "Zantac",
            "generic": "Ranitidine 150mg (B)",
            "dosage": "1 BD",
            "remarks": "[H2-blocker & PPI]"
          },
          {
            "brand": "Losec / Romesec",
            "generic": "Omeprazole 20mg (C)",
            "dosage": "1 BD",
            "remarks": "[H2-blocker & PPI]"
          },
          {
            "brand": "Buscopan",
            "generic": "Hyoscine-N-butylbromide 10mg (C)",
            "dosage": "1 TDS",
            "remarks": "[Antispasmodic]"
          },
          {
            "brand": "Librax / Medocalum",
            "generic": "Chlordiaazepoxide + clidinium",
            "dosage": "1 TDS \u2013 QDS",
            "remarks": "[Antispasmodic] Can also be used for ureteric spasm, dysmenorrhea"
          },
          {
            "brand": "Debridat",
            "generic": "Trimebutine 100mg",
            "dosage": "1 \u2013 2 TDS",
            "remarks": "[Antispasmodic]"
          },
          {
            "brand": "Meteospasmyl",
            "generic": "Alverine citrate 60mg + simethicone 300mg",
            "dosage": "1 BD \u2013 TDS",
            "remarks": "[Antispasmodic]"
          }
        ]
      },
      {
        "name": "Anti-diarrhoea",
        "entries": [
          {
            "brand": "Gastrosorb",
            "generic": "",
            "dosage": "2 TDS",
            "remarks": ""
          },
          {
            "brand": "Charcoal",
            "generic": "Charcoal",
            "dosage": "2 TDS",
            "remarks": ""
          },
          {
            "brand": "Imodium",
            "generic": "Loperamide 2mg (B)",
            "dosage": "1 TDS",
            "remarks": ""
          },
          {
            "brand": "Lomotil",
            "generic": "Diphenoxylate + atropine",
            "dosage": "1 TDS",
            "remarks": ""
          },
          {
            "brand": "Lacteol Fort / DiarrStope",
            "generic": "Lactobacillus acidophilus",
            "dosage": "Sachet: 1 TDS or 2 BD; Capsules: 2 BD",
            "remarks": "Can also be used for IBS"
          }
        ]
      },
      {
        "name": "Laxatives",
        "entries": [
          {
            "brand": "Dulcolax",
            "generic": "Bisacodyl 5mg (B)",
            "dosage": "1 \u2013 2 ON",
            "remarks": ""
          },
          {
            "brand": "Dulcolax supp",
            "generic": "Bisacodyl 10mg",
            "dosage": "1 PRN",
            "remarks": ""
          },
          {
            "brand": "Senakot",
            "generic": "Senna (C)",
            "dosage": "2 ON",
            "remarks": ""
          },
          {
            "brand": "Glycerine supp",
            "generic": "Glycerol",
            "dosage": "1 PRN",
            "remarks": "For kids"
          },
          {
            "brand": "Lactulose",
            "generic": "",
            "dosage": "10ml TDS",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Hepatic Protectors",
        "entries": [
          {
            "brand": "Hepaton / Livolin",
            "generic": "Essential phospholipids + Vit B1/2/6/12 + nicotinamide + Vit E",
            "dosage": "1 TDS",
            "remarks": "For liver disease of any origin"
          }
        ]
      }
    ]
  },
  {
    "id": "nervous-system",
    "name": "Central Nervous System",
    "page": 7,
    "subCategories": [
      {
        "name": "Analgesics / Antipyretics / Anti-inflammatory",
        "entries": [
          {
            "brand": "Paracetamol / Biogesic",
            "generic": "Paracetamol 500mg (B)",
            "dosage": "2 TDS \u2013 QDS",
            "remarks": ""
          },
          {
            "brand": "Anarex / Norgesic",
            "generic": "Paracetamol + orphenadrine",
            "dosage": "2 TDS \u2013 QDS",
            "remarks": ""
          },
          {
            "brand": "Pacofen / Panadeine / Panaco",
            "generic": "Paracetamol 500mg + codeine 8mg (with or without caffeine) (C)",
            "dosage": "2 TDS",
            "remarks": ""
          },
          {
            "brand": "Ponstan",
            "generic": "Mefenamic Acid 250mg (C; D in 3rd)",
            "dosage": "2 TDS",
            "remarks": ""
          },
          {
            "brand": "Synflex",
            "generic": "Naproxen 275mg (B; D in 3rd)",
            "dosage": "2 BD",
            "remarks": ""
          },
          {
            "brand": "Nurofen / Brufen",
            "generic": "Ibuprofen 200mg (B; D in 3rd)",
            "dosage": "2 TDS",
            "remarks": ""
          },
          {
            "brand": "Piroxicam",
            "generic": "Piroxicam 20mg (C; D in 3rd)",
            "dosage": "1 OM",
            "remarks": ""
          },
          {
            "brand": "Mobic",
            "generic": "Meloxicam 7.5mg (C; D in 3rd)",
            "dosage": "1 OM - BD",
            "remarks": "Cox-2 selective"
          },
          {
            "brand": "Indocid",
            "generic": "Indomethacin 25mg",
            "dosage": "1 \u2013 2 TDS",
            "remarks": ""
          },
          {
            "brand": "Voltaren / Cataflam",
            "generic": "Diclofenac 25/50/100mg (B; D in 3rd)",
            "dosage": "50mg TDS",
            "remarks": ""
          },
          {
            "brand": "Arcoxia",
            "generic": "Etoricoxib 60/90/120mg",
            "dosage": "60-120mg OM",
            "remarks": ""
          },
          {
            "brand": "Codeine",
            "generic": "Codeine 30mg (C; D in 3rd)",
            "dosage": "1 \u2013 2 TDS/QDS",
            "remarks": ""
          },
          {
            "brand": "Tramadol",
            "generic": "Tramadol 50mg (C)",
            "dosage": "1 TDS",
            "remarks": ""
          },
          {
            "brand": "Cafegot",
            "generic": "Caffeine 100mg, ergotamine 1mg",
            "dosage": "2 stat, then 1 every 30 min",
            "remarks": "For migraine; Max: 6 per day, or 10 per week"
          }
        ]
      },
      {
        "name": "Gout",
        "entries": [
          {
            "brand": "Allopurinol",
            "generic": "Allopurinol 100mg (C)",
            "dosage": "100-300mg OM",
            "remarks": "Avoid in acute gouty attack"
          },
          {
            "brand": "Colchicine",
            "generic": "Colchicine 0.5mg (D)",
            "dosage": "2 stat, then 1 q2H (max 10mg)",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Anti-emetics / Anti-vertigo",
        "entries": [
          {
            "brand": "Dimenate / Gravol",
            "generic": "Dimenhydrinate 50mg (B)",
            "dosage": "1 TDS",
            "remarks": ""
          },
          {
            "brand": "Cinnarizine / Stugeron",
            "generic": "Cinnarizine 25mg (C)",
            "dosage": "1 TDS",
            "remarks": ""
          },
          {
            "brand": "Maxalon",
            "generic": "Metoclopramide 10mg (B)",
            "dosage": "1 TDS",
            "remarks": ""
          },
          {
            "brand": "Stemetil",
            "generic": "Prochlorperazine 5mg (C)",
            "dosage": "1 \u2013 2 TDS",
            "remarks": ""
          },
          {
            "brand": "Motilium",
            "generic": "Domperidone 10mg",
            "dosage": "1 TDS",
            "remarks": ""
          },
          {
            "brand": "Betaserc / Merislon",
            "generic": "Betahistine",
            "dosage": "Betaserc: 1 BD-TDS; Merislon: 1-2 TDS",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Sedatives",
        "entries": [
          {
            "brand": "Ativan",
            "generic": "Lorazepam 0.5/ 1mg (D)",
            "dosage": "0.5mg \u2013 2mg ON",
            "remarks": "For insomnia"
          },
          {
            "brand": "Valium",
            "generic": "Diazepam 2/5/10mg (D)",
            "dosage": "5mg ON",
            "remarks": ""
          },
          {
            "brand": "Mogadon",
            "generic": "Nitrazepam 5mg",
            "dosage": "1 \u2013 2 ON",
            "remarks": ""
          },
          {
            "brand": "Xanax",
            "generic": "Alprazolam 1mg (D)",
            "dosage": "1 ON",
            "remarks": ""
          },
          {
            "brand": "Stilnox",
            "generic": "Zolpidem 10mg (B)",
            "dosage": "1 ON",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Anti-convulsant",
        "entries": [
          {
            "brand": "Dilantin",
            "generic": "Phenytoin 100mg (D)",
            "dosage": "1 TDS-QDS",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Antidepressants",
        "entries": [
          {
            "brand": "Prozac / Zactin",
            "generic": "Fluoxetine 20mg",
            "dosage": "1 OM",
            "remarks": ""
          },
          {
            "brand": "Imiprin",
            "generic": "Imipramine 25mg (D)",
            "dosage": "30-40mg initially, max 100mg daily",
            "remarks": ""
          },
          {
            "brand": "Amitriptyline",
            "generic": "Amitriptyline 10/ 25mg (C)",
            "dosage": "Initially 75-150mg per day; Maintenance 25-100mg per day",
            "remarks": ""
          }
        ]
      }
    ]
  },
  {
    "id": "genitourinary",
    "name": "Genito-urinary System",
    "page": 9,
    "subCategories": [
      {
        "name": "Erectile Dysfunction",
        "entries": [
          {
            "brand": "Viagra",
            "generic": "Sildenafil 100mg",
            "dosage": "1 ON/prn 1 hr before sexual activity; 1 pack (4 tab)",
            "remarks": "CI: on nitrates, recent CVA/AMI, EF < 40%, retinitis pigmentosa"
          },
          {
            "brand": "Cialis",
            "generic": "Tadalafil 20mg",
            "dosage": "1 ON/prn 30min-36hr before sexual activity; 1 pack (4 tab)",
            "remarks": "As above"
          },
          {
            "brand": "Levitra",
            "generic": "Vardenafil 10/20mg",
            "dosage": "1 ON/prn 25-60min before sexual activity; 1 pack (4 tab)",
            "remarks": "As above"
          }
        ]
      },
      {
        "name": "BPH",
        "entries": [
          {
            "brand": "Hytrin",
            "generic": "Terazosin 1/2mg",
            "dosage": "1mg on (up to 5-10mg daily)",
            "remarks": ""
          },
          {
            "brand": "Proscar",
            "generic": "Finasteride 5mg",
            "dosage": "1 OM",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Urinary Irritability",
        "entries": [
          {
            "brand": "Urogesic / Pyridium",
            "generic": "Phenazopyridine 100mg (B)",
            "dosage": "1 \u2013 2 TDS",
            "remarks": "Used for irritability and pain in urinary tract; Avoid in G6PD def!"
          },
          {
            "brand": "Urispas / Cleanxate",
            "generic": "Flavoxate",
            "dosage": "1 TDS",
            "remarks": "For dysuria, urgency, frequency, incontinence"
          },
          {
            "brand": "Citravescent",
            "generic": "",
            "dosage": "1 TDS (sachet)",
            "remarks": "For dysuria, irritation"
          },
          {
            "brand": "Detrusitol",
            "generic": "Tolterodine  (C)",
            "dosage": "2mg bd",
            "remarks": "For overactive bladder"
          }
        ]
      },
      {
        "name": "Vaginal Candidiasis",
        "entries": [
          {
            "brand": "Polygynax",
            "generic": "Neomycin, nystatin, polymyxin B",
            "dosage": "1 ON (vaginal capsules)",
            "remarks": "For 2 weeks"
          },
          {
            "brand": "Gyno-Travogen pessary",
            "generic": "Isoconazole 600mg",
            "dosage": "1 stat",
            "remarks": ""
          },
          {
            "brand": "Canesten/Cristan vaginal supp",
            "generic": "Clotrimazole (B)",
            "dosage": "1 ON",
            "remarks": "For 1 week"
          }
        ]
      }
    ]
  },
  {
    "id": "hormones",
    "name": "Hormones",
    "page": 10,
    "subCategories": [
      {
        "name": "Contraceptives",
        "entries": [
          {
            "brand": "Norethisterone",
            "generic": "Norethisterone 5mg",
            "dosage": "-For primary or secondary amenorrhea: 10-20mg/day from D5-D25; -For functional uterine bleeding: 15mg/day for 10 days; -For endometriosis / adenomyosis: 5mg/day for 6 months from D5-D25; -For delaying of menses: 15mg/day",
            "remarks": ""
          },
          {
            "brand": "Gynera",
            "generic": "Gestodene 75mcg, ethinylestradiol 30mcg",
            "dosage": "1 OM from D1-D21",
            "remarks": ""
          },
          {
            "brand": "Yasmin",
            "generic": "",
            "dosage": "1 OM from D1-D21",
            "remarks": ""
          },
          {
            "brand": "Microgynon",
            "generic": "Levonorgestrel 150mcg, ethinylestradiol 30mcg",
            "dosage": "1 OM from D5-D25",
            "remarks": ""
          },
          {
            "brand": "Unimen injection",
            "generic": "",
            "dosage": "",
            "remarks": "Monthly inj; - into buttocks!"
          },
          {
            "brand": "Noristerat injection / Depo-provera",
            "generic": "",
            "dosage": "",
            "remarks": "3 monthly inj; - into buttocks!"
          },
          {
            "brand": "Postinor",
            "generic": "",
            "dosage": "1 tab stat, 2nd tab 12 hrs later",
            "remarks": "Emergency contraception; Within 48hr post-coitus (max 72 hrs)"
          }
        ]
      },
      {
        "name": "Steroids",
        "entries": [
          {
            "brand": "Dexamethasone",
            "generic": "Dexamethasone 0.5mg (C; D in 1st)",
            "dosage": "0.5-10mg daily",
            "remarks": ""
          },
          {
            "brand": "Prednisolone",
            "generic": "Prednisolone 5mg (C; D in 1st)",
            "dosage": "5-60mg daily",
            "remarks": ""
          }
        ]
      }
    ]
  },
  {
    "id": "antibiotics",
    "name": "Antibiotics",
    "page": 11,
    "subCategories": [
      {
        "name": "Antibiotics",
        "entries": [
          {
            "brand": "Penicillin V",
            "generic": "Penicillin V 250mg (B)",
            "dosage": "1 \u2013 2 QDS",
            "remarks": ""
          },
          {
            "brand": "Amoxycillin / Ospamox",
            "generic": "Amoxicillin 250/500mg (B)",
            "dosage": "250-500mg tds",
            "remarks": ""
          },
          {
            "brand": "Ampicillin",
            "generic": "Ampicillin 250mg (B)",
            "dosage": "1 \u2013 2 QDS",
            "remarks": ""
          },
          {
            "brand": "Augmentin / Enhancin / Curam / Amocla / Augmex",
            "generic": "Amoxicillin 500mg + clavulanate 125mg",
            "dosage": "1 BD",
            "remarks": ""
          },
          {
            "brand": "Cloxacillin",
            "generic": "Cloxacillin 250mg (B)",
            "dosage": "1 \u2013 2 QDS",
            "remarks": ""
          },
          {
            "brand": "Cephalexin",
            "generic": "Cephalexin 250mg (B)",
            "dosage": "1 \u2013 2 TDS",
            "remarks": ""
          },
          {
            "brand": "Zinnat",
            "generic": "Cefuroxime 250/ 500mg",
            "dosage": "250mg bd",
            "remarks": "500mg bd for resp infx"
          },
          {
            "brand": "Rocephin",
            "generic": "Ceftriaxone inj 250mg (B)",
            "dosage": "IM 250mg stat",
            "remarks": "Suspected gonorrhea"
          },
          {
            "brand": "Lincomycin",
            "generic": "Lincomycin inj 300mg/ml (B)",
            "dosage": "IM 600mg stat",
            "remarks": "For gram +ve infections"
          },
          {
            "brand": "Bactrim",
            "generic": "Co-trimoxazole (C; D if near term)",
            "dosage": "2 BD",
            "remarks": "Avoid in G6PD def"
          },
          {
            "brand": "Ciprobay",
            "generic": "Ciprofloxacin 250/500mg (C)",
            "dosage": "250-500mg bd",
            "remarks": ""
          },
          {
            "brand": "Inflox / Oflox",
            "generic": "Ofloxacin 200mg (C; caution esp 1st)",
            "dosage": "1 BD",
            "remarks": ""
          },
          {
            "brand": "Tarivid",
            "generic": "Ofloxacin 100mg",
            "dosage": "2 BD",
            "remarks": ""
          },
          {
            "brand": "Bexinor / Nolicin",
            "generic": "Norfloxacin 400mg (C; caution esp 1st)",
            "dosage": "1 BD",
            "remarks": ""
          },
          {
            "brand": "Cravit",
            "generic": "Levofloxacin 250/500mg x 10s (C; contraindicated in 1st)",
            "dosage": "250-750mg om",
            "remarks": "Pack of 10 tab; CAP, skin infx, UTI"
          },
          {
            "brand": "Avelox",
            "generic": "Moxifloxacin 400mg (C)",
            "dosage": "1 OM",
            "remarks": "Pack of 5 tab; CAP, bronchitis, sinusitis"
          },
          {
            "brand": "Doxycycline",
            "generic": "Doxycycline 100mg (D)",
            "dosage": "1 OM - BD",
            "remarks": ""
          },
          {
            "brand": "Erythromycin",
            "generic": "Erythromycin 250mg (B)",
            "dosage": "1 QDS or 2 BD",
            "remarks": ""
          },
          {
            "brand": "Klacid / Crixan",
            "generic": "Clarithromycin 250mg (C)",
            "dosage": "1 \u2013 2 BD",
            "remarks": ""
          },
          {
            "brand": "Zithromax",
            "generic": "Azithromycin 250mg (B)",
            "dosage": "2 OM",
            "remarks": "Pack of 6 tab; Also has 500mg tab in pack of 3 tab"
          },
          {
            "brand": "Flagyl",
            "generic": "Metronidazole 200mg (B)",
            "dosage": "2 TDS",
            "remarks": ""
          }
        ]
      }
    ]
  },
  {
    "id": "antiviral-antifungal",
    "name": "Anti-viral / Anti-fungal / Others",
    "page": 12,
    "subCategories": [
      {
        "name": "Anti-viral / Anti-fungal / Others",
        "entries": [
          {
            "brand": "Griseofulvin",
            "generic": "Griseofulvin 500mg (C)",
            "dosage": "1 OM",
            "remarks": "Anti-fungal; Need to monitor LFT"
          },
          {
            "brand": "Ketoconazole",
            "generic": "Ketoconazole 200mg (C)",
            "dosage": "1 \u2013 2 OM",
            "remarks": "Anti-fungal; Need to monitor LFT"
          },
          {
            "brand": "Sporanox",
            "generic": "Itraconazole 100mg (C)",
            "dosage": "Vulvovaginal: 2 BD for 1 day or 2 OM for 3 days; Tinea pedis: 2 BD for 1 week",
            "remarks": "Anti-fungal; Need to monitor LFT"
          },
          {
            "brand": "Diflucan / Mycorest",
            "generic": "Fluconazole 50/100/150/200mg",
            "dosage": "Dermal: 150mg once a week for 4 weeks; Vaginal: 150mg single dose",
            "remarks": "Anti-fungal"
          },
          {
            "brand": "Acyclovir",
            "generic": "Acyclovir 400/800mg (B)",
            "dosage": "Chickenpox: 800mg 5x/day for 5 days; Herpes: 400mg TDS for 5 days",
            "remarks": "20mg/kg 4x per day for children with chickenpox"
          },
          {
            "brand": "Isoprinosine",
            "generic": "500mg",
            "dosage": "2 TDS-QDS",
            "remarks": "Anti-viral/ immuno-modulator"
          },
          {
            "brand": "Tamiflu",
            "generic": "Oseltamivir 75mg (C)",
            "dosage": "1 BD",
            "remarks": "For avian influenza; Course of 10 tab"
          },
          {
            "brand": "Alzental",
            "generic": "Albendazole  (C)",
            "dosage": "1 single dose",
            "remarks": "Anti-parasite"
          }
        ]
      }
    ]
  },
  {
    "id": "endocrine",
    "name": "Endocrine",
    "page": 13,
    "subCategories": [
      {
        "name": "DM",
        "entries": [
          {
            "brand": "Metformin",
            "generic": "Metformin 500/850mg (B)",
            "dosage": "500mg bd-1g tds",
            "remarks": ""
          },
          {
            "brand": "Tolbutamide",
            "generic": "Tolbutamide 500mg (C)",
            "dosage": "500mg-1.5g daily in divided doses",
            "remarks": ""
          },
          {
            "brand": "Minidiab",
            "generic": "Glipizide 5mg (C)",
            "dosage": "2.5-5mg daily (max 20mg daily)",
            "remarks": ""
          },
          {
            "brand": "Diapride",
            "generic": "Glimepiride 1/12mg (C)",
            "dosage": "1mg daily (max 4mg daily)",
            "remarks": ""
          },
          {
            "brand": "Diamicron",
            "generic": "Gliclazide 80mg",
            "dosage": "40-80mg daily (max 320mg daily)",
            "remarks": ""
          },
          {
            "brand": "Daonil",
            "generic": "Glibenclamide 5mg (C)",
            "dosage": "5mg daily (max 15mg daily)",
            "remarks": ""
          },
          {
            "brand": "Diabinese",
            "generic": "Chlorpropamide 250mg",
            "dosage": "\u00bd - 2 OM",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Hyperthyroidism",
        "entries": [
          {
            "brand": "Carbimazole",
            "generic": "Carbimazole 5mg (D)",
            "dosage": "Initially 10-60mg in divided doses. Maintenance 5-20mg/day",
            "remarks": ""
          }
        ]
      },
      {
        "name": "Lipids",
        "entries": [
          {
            "brand": "Zocor",
            "generic": "Simvastatin 20mg (X)",
            "dosage": "10-20mg on (max 80mg/day)",
            "remarks": ""
          },
          {
            "brand": "Lipitor",
            "generic": "Atorvastatin (X)",
            "dosage": "10-20mg on",
            "remarks": ""
          },
          {
            "brand": "Lopid",
            "generic": "Gemfibrozil 300mg (C)",
            "dosage": "900-1500mg/day",
            "remarks": ""
          },
          {
            "brand": "Lipanthyl Supra",
            "generic": "Fenofibrate 160mg (C)",
            "dosage": "1 OM",
            "remarks": ""
          }
        ]
      }
    ]
  },
  {
    "id": "eye-ent",
    "name": "Eye & ENT Preparations",
    "page": 14,
    "subCategories": [
      {
        "name": "Eye & Ear Preparations",
        "entries": [
          {
            "brand": "Naphcon-A",
            "generic": "Naphazoline + pheniramine",
            "dosage": "1-2 drops q3-4H",
            "remarks": "[Allergic/ Irritant Conjunctivitis] Anti-histamine eyedrop"
          },
          {
            "brand": "Spersallerg",
            "generic": "Antazoline + tetrahydrozoline",
            "dosage": "1 drop 3 hourly, then wean to bd-tds",
            "remarks": "[Allergic/ Irritant Conjunctivitis] Anti-histamine eyedrop"
          },
          {
            "brand": "Optizoline",
            "generic": "Tetrahydrozoline",
            "dosage": "1 drop 3 hourly",
            "remarks": "[Allergic/ Irritant Conjunctivitis] Anti-histamine eyedrop"
          },
          {
            "brand": "Cromabak",
            "generic": "Sodium cromoglycate",
            "dosage": "1 drop TDS-QDS",
            "remarks": "[Allergic/ Irritant Conjunctivitis]"
          },
          {
            "brand": "Xepanicol / Optomycin",
            "generic": "Chloramphenicol 0.5%",
            "dosage": "2 drops QDS",
            "remarks": "[Infectious Conjunctivitis/ Acute Otitis Externa] Eyedrop"
          },
          {
            "brand": "Chlortalim",
            "generic": "Tetracycline",
            "dosage": "1 drop TDS",
            "remarks": "[Infectious Conjunctivitis/ Acute Otitis Externa] Eye ointment"
          },
          {
            "brand": "Fucithalmic",
            "generic": "Fusidic acid",
            "dosage": "1 drop BD",
            "remarks": "[Infectious Conjunctivitis/ Acute Otitis Externa] Eye ointment"
          },
          {
            "brand": "Dexa-N / Dextracin ear/eye drops",
            "generic": "Dexamethaxone + neomycin",
            "dosage": "Eye: 1 drop q1-2H; Ear: 3-4 drops BD-TDS",
            "remarks": "[Infectious Conjunctivitis/ Acute Otitis Externa] For eye and ear; Contain steroids"
          },
          {
            "brand": "Sofradex",
            "generic": "Dexamethasone + framycetin + gramicidin",
            "dosage": "Eye: 1-2 drops tds-qds; Ear: 2-3 drops tds-qds",
            "remarks": "[Infectious Conjunctivitis/ Acute Otitis Externa] For eye and ear; Contain steroids"
          },
          {
            "brand": "Polydexa eardrops",
            "generic": "Dexamethasone + neomycin + polymyxin B",
            "dosage": "1-5 drops bd",
            "remarks": "[Infectious Conjunctivitis/ Acute Otitis Externa] For ear only"
          },
          {
            "brand": "Waxsol",
            "generic": "Docusate 0.5%",
            "dosage": "2 drops ON",
            "remarks": "[Ear Wax] Not for more than 2 nights"
          },
          {
            "brand": "Tropex",
            "generic": "Phenazone 0.5%",
            "dosage": "4-6 drops tds - qds",
            "remarks": "[Ear Wax]"
          }
        ]
      }
    ]
  },
  {
    "id": "dermatologicals",
    "name": "Dermatologicals",
    "page": 15,
    "subCategories": [
      {
        "name": "Dermatologicals",
        "entries": [
          {
            "brand": "Fusiderm cream / Foban",
            "generic": "Fusidic acid",
            "dosage": "Apply bd - tds",
            "remarks": "[Antibiotic]"
          },
          {
            "brand": "Gentamicin cream",
            "generic": "Gentamicin",
            "dosage": "Apply tds-qds",
            "remarks": "[Antibiotic]"
          },
          {
            "brand": "Tetracycline cream",
            "generic": "Tetracycline 3%",
            "dosage": "Apply tds",
            "remarks": "[Antibiotic]"
          },
          {
            "brand": "Bactroban",
            "generic": "Mupirocin",
            "dosage": "Apply tds",
            "remarks": "[Antibiotic]"
          },
          {
            "brand": "Dermovate",
            "generic": "Clobetasol propionate 0.05%",
            "dosage": "Apply od or bd",
            "remarks": "[Steroid] High potency"
          },
          {
            "brand": "Diprocel",
            "generic": "Betamethasone dipropionate 0.05%",
            "dosage": "Apply bd",
            "remarks": "[Steroid] High moderate potency"
          },
          {
            "brand": "Betnovate",
            "generic": "Betamethasone valerate 0.1%",
            "dosage": "Apply bd - tds",
            "remarks": "[Steroid] High moderate potency"
          },
          {
            "brand": "Elomet",
            "generic": "Mometasone furoate 0.1%",
            "dosage": "Apply om",
            "remarks": "[Steroid] High moderate potency"
          },
          {
            "brand": "Hydrocortisone",
            "generic": "Hydrocortisone 1%",
            "dosage": "Apply bd - qds",
            "remarks": "[Steroid] Mild potency"
          },
          {
            "brand": "Triderm / Combiderm / Gentriderm / Gentrisone",
            "generic": "Betamethasone dipropionate 0.05%, clotrimazole 1%, gentamicin 0.1%",
            "dosage": "Apply bd",
            "remarks": "[Combination] Multiple variations of steroid + Abx + antifungal; Also called Conazole etc"
          },
          {
            "brand": "Hydroderm-C",
            "generic": "Hydrocortisone acetate 1% + clioquinol 3%",
            "dosage": "Apply bd \u2013 tds",
            "remarks": "[Combination]"
          },
          {
            "brand": "Fucicort / Fobancort",
            "generic": "Fusidic acid + betamethasone valerate 0.1%",
            "dosage": "Apply bd",
            "remarks": "[Combination]"
          },
          {
            "brand": "Cristan / Canesten",
            "generic": "Clotrimazole",
            "dosage": "Apply bd-tds",
            "remarks": "[Anti-fungal]"
          },
          {
            "brand": "Mycoban / Daktarin",
            "generic": "Miconazole",
            "dosage": "Apply bd",
            "remarks": "[Anti-fungal]"
          },
          {
            "brand": "Acyclovir",
            "generic": "",
            "dosage": "Apply 5x per day",
            "remarks": "[Anti-viral] For herpes labialis"
          },
          {
            "brand": "Verrumal",
            "generic": "Fluorouracil 0.5g, salicylic acid 10g, dimethylsulfoxide 8g",
            "dosage": "Apply bd - tds",
            "remarks": "[Warts] For viral warts"
          }
        ]
      }
    ]
  },
  {
    "id": "anti-obesity",
    "name": "Anti-obesity",
    "page": 16,
    "subCategories": [
      {
        "name": "Anti-obesity",
        "entries": [
          {
            "brand": "Duromin / Panbesy",
            "generic": "Phentermine 15/30mg",
            "dosage": "1 OM",
            "remarks": "Monitor BMI, BP, HR, insomnia, tremors, palpitations etc"
          },
          {
            "brand": "Reductil",
            "generic": "Sibutramine 10/15mg",
            "dosage": "1 OM",
            "remarks": "Pack of 28 tab"
          },
          {
            "brand": "Xenical",
            "generic": "Orlistat 120mg",
            "dosage": "1 tds with each meal (> 18yo only)",
            "remarks": "S/E: steatorrhea, fecal incontinence"
          }
        ]
      }
    ]
  },
  {
    "id": "paediatric-drugs",
    "name": "Paediatric Drugs",
    "page": 17,
    "subCategories": [
      {
        "name": "Paediatric Drugs",
        "entries": [
          {
            "brand": "PARACET 125MG/5ML QDS (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 7.5; 5 (19kg): 7.5; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10",
            "remarks": "Paediatric dosing table (Table 31)"
          },
          {
            "brand": "PARACET 250MG/5ML QDS (ML)",
            "generic": "",
            "dosage": "1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 3.5; 5 (19kg): 3.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 7.5; 10 (30kg): 7.5; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 31)"
          },
          {
            "brand": "PARACET 500MG/5ML QDS (ML)",
            "generic": "",
            "dosage": "6 (21kg): 2.5; 7 (23kg): 2.5; 8 (25kg): 2.5; 9 (27kg): 3.5; 10 (30kg): 3.5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 31)"
          },
          {
            "brand": "NUROFEN 100MG/5ML QDS (ML)",
            "generic": "",
            "dosage": "6MTH (8kg): 2.5 TDS; 9MTH (9kg): 2.5 TDS; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 31)"
          },
          {
            "brand": "DHASEDYL TDS (ML)",
            "generic": "",
            "dosage": "2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 31)"
          },
          {
            "brand": "MUCOLEXIN TDS (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 3.5; 3 (15kg): 3.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 7.5; 8 (25kg): 7.5; 9 (27kg): 7.5; 10 (30kg): 7.5; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 31)"
          },
          {
            "brand": "PHEN-EXPECT CD TDS(ML)",
            "generic": "",
            "dosage": "2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 31)"
          },
          {
            "brand": "FEDAC TDS(ML)",
            "generic": "",
            "dosage": "6MTH (8kg): 2.5 BD; 9MTH (9kg): 2.5 BD; 1 (10kg): 2.5 BD; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "PIRITON 4MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "1 (10kg): 1.25 BD; 2 (13kg): 1.25 BD; 3 (15kg): 1.25; 4 (17kg): 1.25; 5 (19kg): 1.25; 6 (21kg): 2.5; 7 (23kg): 2.5; 8 (25kg): 2.5; 9 (27kg): 2.5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "POLARAX 2MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "2 (13kg): 1.25; 3 (15kg): 1.25; 4 (17kg): 1.25; 5 (19kg): 1.25; 6 (21kg): 2.5; 7 (23kg): 2.5; 8 (25kg): 2.5; 9 (27kg): 2.5; 10 (30kg): 2.5; 11 (34kg): 2.5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "PMZ 5MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "2 (13kg): 2.5; 3 (15kg): 3.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 7.5; 8 (25kg): 7.5; 9 (27kg): 7.5; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "ZYRTEC OM (ML)",
            "generic": "",
            "dosage": "2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "LEFTOSE TDS (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 1; 6MTH (8kg): 1; 9MTH (9kg): 1; 1 (10kg): 1; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 3.5; 7 (23kg): 3.5; 8 (25kg): 3.5; 9 (27kg): 3.5; 10 (30kg): 3.5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "BISOLVON 4MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "MUCO-SOLVAN TDS(ML)",
            "generic": "",
            "dosage": "1 (10kg): 2.5 BD; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "FLUIMUCIL 100MG SACHET",
            "generic": "",
            "dosage": "3MTH (6kg): 0.5 BD; 6MTH (8kg): 0.5 BD; 9MTH (9kg): 0.5 BD; 1 (10kg): 0.5 TDS; 2 (13kg): 1 TDS; 3 (15kg): 1 TDS; 4 (17kg): 1 TDS; 5 (19kg): 1 TDS; 6 (21kg): 2 BD; 7 (23kg): 2 BD; 8 (25kg): 2 BD; 9 (27kg): 2 BD; 10 (30kg): 2 TDS; 11 (34kg): 2 TDS; 12 (38kg): 2 TDS",
            "remarks": "Paediatric dosing table (Table 32)"
          },
          {
            "brand": "VENTOLIN 2MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "6 MTH (8kg): 1.5; 9 MTH (9kg): 1.5; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 3.5; 5 (19kg): 3.5; 6 (21kg): 3.5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 7.5; 11 (34kg): 7.5; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 33)"
          },
          {
            "brand": "VENTOLIN NEB (ML)",
            "generic": "",
            "dosage": "3 MTH (6kg): 0.15; 6 MTH (8kg): 0.2; 9 MTH (9kg): 0.25; 1 (10kg): 0.25; 2 (13kg): 0.25; 3 (15kg): 0.5; 4 (17kg): 0.5; 5 (19kg): 0.5; 6 (21kg): 0.5; 7 (23kg): 0.75; 8 (25kg): 0.75; 9 (27kg): 0.75; 10 (30kg): 1; 11 (34kg): 1; 12 (38kg): 1",
            "remarks": "Paediatric dosing table (Table 33)"
          },
          {
            "brand": "BRICANYL 1.5MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "6 MTH (8kg): 2.5; 9 MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 33)"
          },
          {
            "brand": "KETOTIFEN 1MG/5ML BD (ML)",
            "generic": "",
            "dosage": "6 MTH (8kg): 2.5; 9 MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 33)"
          },
          {
            "brand": "PRED 3MG/5ML BD (ML)",
            "generic": "",
            "dosage": "3 MTH (6kg): 2.5; 6 MTH (8kg): 2.5; 9 MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 7.5; 6 (21kg): 7.5; 7 (23kg): 7.5; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 33)"
          },
          {
            "brand": "DIMENATE 15MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 33)"
          },
          {
            "brand": "MAXOLON 5MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "3 MTH (6kg): 1 BD; 6 MTH (8kg): 1 BD; 9 MTH (9kg): 1 BD; 1 (10kg): 1; 2 (13kg): 1; 3 (15kg): 2; 4 (17kg): 2; 5 (19kg): 2.5; 6 (21kg): 2.5; 7 (23kg): 2.5; 8 (25kg): 2.5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 33)"
          },
          {
            "brand": "BUSCOPAN 5MG/5ML TDS (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "COLIMIX TDS(ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "DEBRIDAT TDS (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 5 BD; 1 (10kg): 5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "KAOLIN QDS(ML)",
            "generic": "",
            "dosage": "6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 5; 2 (13kg): 5; 3 (15kg): 10; 4 (17kg): 10; 5 (19kg): 10; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "LACTEOL FORT SACHET/ TAB BD",
            "generic": "",
            "dosage": "3MTH (6kg): 2; 6MTH (8kg): 2; 9MTH (9kg): 2; 1 (10kg): 2; 2 (13kg): 2; 3 (15kg): 2; 4 (17kg): 2; 5 (19kg): 2; 6 (21kg): 2; 7 (23kg): 2; 8 (25kg): 2; 9 (27kg): 2; 10 (30kg): 2; 11 (34kg): 2; 12 (38kg): 2",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "LOPER-AMIDE TDS (ML)",
            "generic": "",
            "dosage": "5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "LACTULOSE TDS (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5 BD; 6MTH (8kg): 2.5 BD; 9MTH (9kg): 2.5 BD; 1 (10kg): 5 BD; 2 (13kg): 5 BD; 3 (15kg): 5 BD; 4 (17kg): 5 BD; 5 (19kg): 5 BD; 6 (21kg): 10 BD; 7 (23kg): 10 BD; 8 (25kg): 10 BD; 9 (27kg): 10 BD; 10 (30kg): 10 BD; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "LIQUID PARAFFIN TDS(ML)",
            "generic": "",
            "dosage": "3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "POT CITRATE TDS(ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 34)"
          },
          {
            "brand": "AMOXIL 125MG/5ML TDS(ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 5; 1 (10kg): 5; 2 (13kg): 5; 3 (15kg): 7.5; 4 (17kg): 7.5; 5 (19kg): 7.5; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 35)"
          },
          {
            "brand": "AMOXIL 250MG/5ML TDS(ML)1",
            "generic": "",
            "dosage": "9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 3.5; 4 (17kg): 3.5; 5 (19kg): 3.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 35)"
          },
          {
            "brand": "AUGMENTIN 228MG/5ML BD (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 1.5; 6MTH (8kg): 1.5; 9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 35)"
          },
          {
            "brand": "CURAM 312.5MG/5ML TDS (ML)1",
            "generic": "",
            "dosage": "9MTH (9kg): 1.25; 1 (10kg): 1.25; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 2.5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 35)"
          },
          {
            "brand": "CEPHALEXIN 125MG/5ML TDS (ML) 1",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 10; 6 (21kg): 10; 7 (23kg): 10; 8 (25kg): 10; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 35)"
          },
          {
            "brand": "CEPHALEXIN 250MG/5ML TDS(ML) 1",
            "generic": "",
            "dosage": "3MTH (6kg): 1.25; 6MTH (8kg): 1.25; 9MTH (9kg): 1.25; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 35)"
          },
          {
            "brand": "CEFACLOR 125MG/5ML TDS(ML) 1",
            "generic": "",
            "dosage": "3MTH (6kg): 1.5; 6MTH (8kg): 1.5; 9MTH (9kg): 1.5; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 7.5; 10 (30kg): 7.5; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 35)"
          },
          {
            "brand": "ERYTHROMYCIN 200MG/5ML QDS (ML) 1",
            "generic": "",
            "dosage": "3MTH (6kg): 1; 6MTH (8kg): 1; 9MTH (9kg): 1; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 5; 10 (30kg): 7.5; 11 (34kg): 7.5; 12 (38kg): 7.5",
            "remarks": "Paediatric dosing table (Table 36)"
          },
          {
            "brand": "KLACID 125MG/5ML BD (ML) 1",
            "generic": "",
            "dosage": "1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 7.5; 8 (25kg): 7.5; 9 (27kg): 7.5; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 36)"
          },
          {
            "brand": "KLACID 250MG/5ML BD (ML) 1",
            "generic": "",
            "dosage": "1 (10kg): 1.25; 2 (13kg): 1.25; 3 (15kg): 2.5; 4 (17kg): 2.5; 5 (19kg): 2.5; 6 (21kg): 2.5; 7 (23kg): 3.5; 8 (25kg): 3.5; 9 (27kg): 3.5; 10 (30kg): 5; 11 (34kg): 5; 12 (38kg): 5",
            "remarks": "Paediatric dosing table (Table 36)"
          },
          {
            "brand": "ZITHROMAX 200MG/5ML OM (ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 1.5; 6MTH (8kg): 2; 9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 3.5; 3 (15kg): 3.5; 4 (17kg): 4.5; 5 (19kg): 4.5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 6; 9 (27kg): 6; 10 (30kg): 7.5; 11 (34kg): 7.5; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 36)"
          },
          {
            "brand": "BACTRIM BD(ML)",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 2.5; 2 (13kg): 2.5; 3 (15kg): 2.5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 5; 7 (23kg): 5; 8 (25kg): 5; 9 (27kg): 10; 10 (30kg): 10; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 36)"
          },
          {
            "brand": "ISOPRINOSINE QDS",
            "generic": "",
            "dosage": "3MTH (6kg): 2.5; 6MTH (8kg): 2.5; 9MTH (9kg): 2.5; 1 (10kg): 5; 2 (13kg): 5; 3 (15kg): 5; 4 (17kg): 5; 5 (19kg): 5; 6 (21kg): 7.5; 7 (23kg): 7.5; 8 (25kg): 7.5; 9 (27kg): 7.5; 10 (30kg): 7.5; 11 (34kg): 10; 12 (38kg): 10",
            "remarks": "Paediatric dosing table (Table 36)"
          }
        ]
      }
    ]
  },
  {
    "id": "vaccinations",
    "name": "Vaccinations",
    "page": 19,
    "subCategories": [
      {
        "name": "National Guidelines",
        "entries": [
          {
            "brand": "BCG / Hep B \u2013 1st dose",
            "generic": "",
            "dosage": "Birth",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "Hep B \u2013 2nd dose",
            "generic": "",
            "dosage": "1 Month",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "DPT + oral Sabin (0.05ml) \u2013 1st dose",
            "generic": "",
            "dosage": "3 Months",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "DPT + oral Sabin \u2013 2nd dose",
            "generic": "",
            "dosage": "4 Months",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "DPT + oral Sabin \u2013 3rd dose",
            "generic": "",
            "dosage": "5 Months",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "Hep B \u2013 3rd dose",
            "generic": "",
            "dosage": "6 Months",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "Hep B (for children of carrier mother)",
            "generic": "",
            "dosage": "12 Months",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "MMR",
            "generic": "",
            "dosage": "15 Months",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "DPT + oral Sabin \u2013 1st booster",
            "generic": "",
            "dosage": "18 Months",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "MMR \u2013 booster / Oral Sabin \u2013 2nd booster",
            "generic": "",
            "dosage": "6 Years",
            "remarks": "National Guidelines schedule"
          },
          {
            "brand": "DPT \u2013 2nd booster / Oral Sabin \u2013 3rd booster",
            "generic": "",
            "dosage": "11 Years",
            "remarks": "National Guidelines schedule"
          }
        ]
      },
      {
        "name": "Vaccine Information",
        "entries": [
          {
            "brand": "Hep B",
            "generic": "",
            "dosage": "Regimen:; - Normal: 0, 1, 6 months; - Accelerated: 0, 1, 2 months; Dose:; - 0 \u2013 10yo: 2.5 mcg (0.25ml); - 11 \u2013 19 yo: 5mcg (0.5ml); - 20yo and above: 10mcg (1ml)",
            "remarks": "Vaccine Information"
          },
          {
            "brand": "Haemophilus Influenza (Hib)",
            "generic": "",
            "dosage": "6 weeks to 6 months old: 3 doses. Booster at 2 yo; 6 to 12 months old: 2 doses 1 month apart. Booster at 2 yo; 1 to 5 yo: single dose",
            "remarks": "Vaccine Information"
          },
          {
            "brand": "Hep A",
            "generic": "",
            "dosage": "More than 19 yo: Single dose; Less than 19 yo: Single dose + booster (6 to 12 months later)",
            "remarks": "Vaccine Information"
          },
          {
            "brand": "Typhoid",
            "generic": "",
            "dosage": "Single dose; Revaccinate every 3 yrs",
            "remarks": "Vaccine Information"
          },
          {
            "brand": "Varicella",
            "generic": "",
            "dosage": "1-12 yo: Single dose; More than 12 yo: 2 doses 4-8 weeks apart",
            "remarks": "Vaccine Information"
          },
          {
            "brand": "Influenza",
            "generic": "",
            "dosage": "Adult: 1 dose (0.5ml); Children: 1 dose + 1 booster after 4 weeks; (note that for 6 to 36 months old: give only 0.25ml per dose)",
            "remarks": "Vaccine Information"
          },
          {
            "brand": "HPV (Gardasil)",
            "generic": "",
            "dosage": "3 doses at 0, 2, 6 months (for 9-26 yo)",
            "remarks": "Vaccine Information"
          },
          {
            "brand": "Mencevax ACWY (Meninogoccal)",
            "generic": "",
            "dosage": "For > 2yo only; s/c 0.5ml single dose",
            "remarks": "Vaccine Information"
          }
        ]
      }
    ]
  },
  {
    "id": "acne-treatment",
    "name": "Acne Treatment",
    "page": 20,
    "subCategories": [
      {
        "name": "Acne Treatment",
        "entries": [
          {
            "brand": "Mild (non-inflammed lesions or mild inflammatory acne with 2-3 lesions)",
            "generic": "Topical",
            "dosage": "Combination of:; Benzoyl peroxide (2.5%, 5%, 10%) \u2013 apply od \u2013 bd; Clindamycin \u2013 apply bd; Topical retinoids (Differin, Retin-A) \u2013 apply ON",
            "remarks": "Acne Treatment Guidelines"
          },
          {
            "brand": "Moderate",
            "generic": "Topical + Oral Abx",
            "dosage": "Oral Abx for 6 to 9 months; 1st Line:; doxycycline 100mg bd; erythromycin 500mg bd; 2nd Line:; minocycline 50-200mg daily; bactrim 2 tab bd",
            "remarks": "Acne Treatment Guidelines"
          },
          {
            "brand": "Severe (nodular ance)",
            "generic": "Oral Isotretinoin (Roaccutane)",
            "dosage": "- Aim is 1mg/kg/day for 4 months; - But start off with 0.5mg/kg/day; - Each tab is 10mg; - S/E: teratogenicity, headache, raised liver enzymes, hyperlipidaemia, dry skin, arthralgia; - Monitoring:; Pre-treatment LFT, fasting lipids, UPT; LFT and fasting lipids at least once during treatment",
            "remarks": "Acne Treatment Guidelines"
          }
        ]
      }
    ]
  },
  {
    "id": "cpg-allergic-conjunctivitis",
    "name": "CPG: Allergic Conjunctivitis",
    "page": 0,
    "subCategories": [
      {
        "name": "Topical Antihistamines / Mast Cell Stabilisers Eyedrops",
        "entries": [
          {
            "brand": "Sodium Cromoglycate 2% Eye Drop",
            "generic": "Sodium Cromoglycate 2%",
            "dosage": "1 drop QDS",
            "remarks": "Mast cell stabiliser. Non-formulary (NS). Cost: < $10 per unit. Jan 2024 NUP CPG. Specialist Advisors: Drs Yuen Yew Sen / Lai Yien / Chris Lim (NUH Ophthalmology). Next review: Jan 2029."
          },
          {
            "brand": "Patanol",
            "generic": "Olopatadine 0.1% Eye Drop 5mL",
            "dosage": "1 drop BD",
            "remarks": "Antihistamine / mast cell stabiliser. Non-formulary (NS). Cost: $$. Rule out severe allergic reaction (SOB, wheezing) before prescribing. Avoid topical decongestants (e.g. Naphcon-A) — no action on allergic mediators, risk of rebound hyperaemia."
          }
        ]
      },
      {
        "name": "Lubricating Eyedrops",
        "entries": [
          {
            "brand": "Tears Naturale Free",
            "generic": "Artificial Tears (preservative-free) 0.8mL 32S",
            "dosage": "Every 3 hourly PRN",
            "remarks": "Formulary item (NS). Cost: $$. Preferred over Refresh Plus which is non-formulary."
          },
          {
            "brand": "Refresh Plus",
            "generic": "Artificial Tears (preservative-free) 0.4mL x 30",
            "dosage": "PRN",
            "remarks": "Non-formulary, available at retail. Cost: $$."
          }
        ]
      },
      {
        "name": "Intranasal Corticosteroids (for concurrent Allergic Rhinitis)",
        "entries": [
          {
            "brand": "Nasonex",
            "generic": "Mometasone Furoate 0.05% Nasal Spray 140D",
            "dosage": "2 puffs OD (per nostril)",
            "remarks": "Formulary S2. Cost: $. Consider when allergic rhinitis co-exists."
          },
          {
            "brand": "Avamys",
            "generic": "Fluticasone Furoate Nasal Spray 120D",
            "dosage": "2 puffs OD (per nostril)",
            "remarks": "Non-formulary (NS). Cost: $$$. Consider when allergic rhinitis co-exists."
          }
        ]
      },
      {
        "name": "Systemic Antihistamines (if indicated)",
        "entries": [
          {
            "brand": "Loratadine",
            "generic": "Loratadine 10mg Tab",
            "dosage": "10mg OD",
            "remarks": "2nd generation antihistamine. Formulary S2. Cost: < $10/month. Preferred over 1st generation (avoid Chlorpheniramine, Diphenhydramine due to sedative and anticholinergic effects)."
          },
          {
            "brand": "Cetirizine",
            "generic": "Cetirizine 10mg Tab",
            "dosage": "10mg OD",
            "remarks": "2nd generation antihistamine (alternative). Formulary S2. Cost: < $5/month."
          }
        ]
      },
      {
        "name": "Patient Advice",
        "entries": [
          {
            "brand": "Allergen Avoidance",
            "generic": "Non-pharmacological measures",
            "dosage": "N/A",
            "remarks": "Allergen-impermeable mattress and pillow covers; wash bed sheets/linen weekly with hot water; avoid pets; cold compresses. Document: ordered medications, advised to return if worsening itch/red eye/persistent blurring, advised against contact lens use."
          }
        ]
      }
    ]
  },
  {
    "id": "cpg-allergic-rhinitis",
    "name": "CPG: Allergic Rhinitis",
    "page": 0,
    "subCategories": [
      {
        "name": "Overview & Classification",
        "entries": [
          {
            "brand": "Intermittent Mild",
            "generic": "Allergic Rhinitis Classification",
            "dosage": "Step-up approach",
            "remarks": "Intermittent: < 4 days/week OR < 4 consecutive weeks/year. Persistent: > 4 days/week AND > 4 consecutive weeks/year. Mild: not interfering with quality of life. Moderate-Severe: interferes with QoL (sleep, daily activities, school/work)."
          }
        ]
      },
      {
        "name": "Antihistamines",
        "entries": [
          {
            "brand": "Loratadine / Cetirizine",
            "generic": "2nd generation oral H1-antihistamines",
            "dosage": "Loratadine 10mg OD; Cetirizine 10mg OD",
            "remarks": "Recommended for adults and children. 1st generation (e.g. chlorpheniramine) has sedating effects — use with care. Intranasal antihistamines (azelastine, olopatadine) not available in NUP."
          }
        ]
      },
      {
        "name": "Intranasal Corticosteroids",
        "entries": [
          {
            "brand": "Avamys",
            "generic": "Fluticasone Furoate 27.5mcg/spray",
            "dosage": "Adults: 2 sprays per nostril OD; Children 2-11 yrs: 1 spray per nostril OD",
            "remarks": "First-line for moderate-severe intermittent or any persistent symptoms. Maximal effect from 2 weeks of daily use. Once controlled, reduce to lowest effective dose. IM/oral long-term corticosteroids NOT recommended."
          },
          {
            "brand": "Nasonex",
            "generic": "Mometasone 50mcg/spray",
            "dosage": "≥12 years: 2 sprays per nostril OD",
            "remarks": "First-line intranasal corticosteroid. Pharmacy can counsel on correct technique. Aqueous and aerosol sprays have different techniques."
          }
        ]
      },
      {
        "name": "Decongestants",
        "entries": [
          {
            "brand": "Oxymetazoline / Pseudoephedrine",
            "generic": "Intranasal or oral decongestants",
            "dosage": "Short-term only, max 5 days",
            "remarks": "For nasal obstruction relief only. Prolonged use causes rebound congestion (rhinitis medicamentosa). Not for routine/long-term use."
          }
        ]
      },
      {
        "name": "Leukotriene Receptor Antagonist",
        "entries": [
          {
            "brand": "Montelukast",
            "generic": "LTRA (Montelukast)",
            "dosage": "As per standard dosing",
            "remarks": "NOT for primary treatment of allergic rhinitis. May benefit subset with both allergic rhinitis AND asthma."
          }
        ]
      },
      {
        "name": "Nasal Irrigation",
        "entries": [
          {
            "brand": "Sterimar / Serenaz",
            "generic": "Saline nasal spray (OTC)",
            "dosage": "1–2 times daily",
            "remarks": "Improves mucous clearance, enhances ciliary activity, removes antigens. Perform nasal irrigation BEFORE nasal medication for better drug penetration. Available OTC at NUP retail pharmacy."
          }
        ]
      },
      {
        "name": "When to Refer to ENT",
        "entries": [
          {
            "brand": "Referral Criteria",
            "generic": "ENT Referral Indications",
            "dosage": "N/A",
            "remarks": "Refer if: medical therapy fails; candidate for immunotherapy/surgery; recurrent epistaxis; nasal obstruction without other symptoms; unilateral symptoms; anosmia; mucopurulent rhinorrhoea; posterior rhinorrhoea with thick mucus and no anterior rhinorrhoea; facial pain; children < 2 years old."
          }
        ]
      }
    ]
  },
  {
    "id": "cpg-anaemia",
    "name": "CPG: Anaemia",
    "page": 0,
    "subCategories": [
      {
        "name": "Diagnosis Thresholds (WHO 2011)",
        "entries": [
          {
            "brand": "Mild Anaemia Hb Levels",
            "generic": "Haemoglobin cut-offs (g/dL)",
            "dosage": "Check FBC",
            "remarks": "Children 6-59m: Mild 10.0-10.9 / Mod 7.0-9.9 / Severe <7.0. Non-pregnant women ≥15y: Mild 11.0-11.9 / Mod 8.0-10.9 / Severe <8.0. Men ≥15y: Mild 11.0-12.9 / Mod 8.0-10.9 / Severe <8.0. Pregnant women: Mild 10.0-10.9 / Mod 7.0-9.9 / Severe <7.0."
          }
        ]
      },
      {
        "name": "Iron Deficiency Anaemia — Oral Iron Therapy",
        "entries": [
          {
            "brand": "Ferrous Gluconate",
            "generic": "Ferrous Gluconate (elemental iron 30mg/tab)",
            "dosage": "1 tablet BD; start low to avoid intolerance",
            "remarks": "Available at NUP. Take on empty stomach if tolerated. Side effects: nausea, constipation, metallic taste, dark stools. Take 2h before or 4h after antacids. Combine with Vitamin C to improve absorption. Response: Hb rise ≥1g/dL at 7-10 days. Continue 3 months after Hb normalises to replenish iron stores."
          },
          {
            "brand": "Iron Polymaltose",
            "generic": "Iron Polymaltose (elemental iron 100mg/tab)",
            "dosage": "1 tablet OD; may be taken with meals",
            "remarks": "Available at NUP. Better GI tolerability. Monitor FBC at 4 weeks (2 weeks if Hb 8-10 g/dL). At 12 weeks: check Hb normalisation. At 24 weeks: check FBC + ferritin. Stop when Hb and ferritin normalised and cause resolved."
          }
        ]
      },
      {
        "name": "Vitamin B12 Deficiency",
        "entries": [
          {
            "brand": "Cyanocobalamin IM",
            "generic": "Cyanocobalamin 1000mcg IM injection",
            "dosage": "Acute: 1000mcg IM daily or every other day x 1 week, then weekly x 4-8 weeks. Neurological sx: step down to fortnightly x 6 months. Maintenance: 1000mcg IM every 1-3 months.",
            "remarks": "Deficiency cutoff: B12 < 145 pmol/L (definite) or <220 pmol/L with symptoms. Indicated when: severe deficiency, neurological symptoms, malabsorption, compliance issues. Monitor FBC at 1 week (expect Hb ↑ ≥1g/dL). Refer haematologist if no improvement by 8 weeks."
          },
          {
            "brand": "Mecobalamin (Oral)",
            "generic": "Mecobalamin 1000mcg oral tablet",
            "dosage": "Acute oral: 1000mcg OD x 6 months. Maintenance: 1000mcg OD.",
            "remarks": "Oral therapy suitable if no malabsorption/compliance issues. As effective as IM for maintenance. Monitor FBC and B12 yearly on maintenance. High risk groups for monitoring: vegetarians, pernicious anaemia, chronic malabsorption — yearly FBC + B12. Metformin users: 2-yearly B12 monitoring."
          }
        ]
      },
      {
        "name": "Folate Deficiency",
        "entries": [
          {
            "brand": "Folic Acid",
            "generic": "Folic Acid 5mg tab",
            "dosage": "5mg daily until correction of anaemia (usually 8 weeks)",
            "remarks": "Rule out Vitamin B12 deficiency BEFORE starting. FBC at 4 weeks and 8 weeks. Refer haematologist if anaemia not normalised by 8 weeks. Stop after 8 weeks or Hb normalised (whichever is later), unless chronic haemolysis/cell turnover disorder. Causes: substance abuse, alcoholism, malabsorption (celiac, IBD), drugs (methotrexate, phenytoin), pregnancy."
          }
        ]
      },
      {
        "name": "Referral to Haematologist",
        "entries": [
          {
            "brand": "Haematology Referral",
            "generic": "Indications for Haematologist referral",
            "dosage": "N/A",
            "remarks": "Refer when: haematological emergencies (symptomatic/severe anaemia); other cytopenias present; abnormal blood film; unexplained anaemia; Fe deficiency not responding after 3 months; B12 deficiency with other cytopenias at 1 week; B12/folate anaemia not resolved at 8 weeks; Hb < 10 in ACD or CKD; persistent macrocytosis >1 year; retic > 3% (suspect haemolytic anaemia)."
          }
        ]
      }
    ]
  },
  {
    "id": "cpg-anxiety-disorder",
    "name": "CPG: Anxiety Disorder",
    "page": 0,
    "subCategories": [
      {
        "name": "GAD-7 Screening & Classification",
        "entries": [
          {
            "brand": "GAD-7 Score",
            "generic": "Generalised Anxiety Disorder Scale",
            "dosage": "Administer GAD-2 first; if ≥3, proceed to full GAD-7",
            "remarks": "Scores: 0–4 No anxiety; 5–9 Mild; 10–14 Moderate; 15–21 Severe. Anxiety types: GAD, Panic Disorder, Adjustment Disorder, Acute Stress Disorder, Social Anxiety, Agoraphobia, PTSD, Specific Phobia. Reviewed Feb 2025 (Dr Jonathan Tung / Dr Benjamin Cheah); June 2025 (Dr Tan Jee Ooi). Next review: June 2028."
          }
        ]
      },
      {
        "name": "SSRIs / SNRIs (First-Line Pharmacotherapy)",
        "entries": [
          {
            "brand": "Escitalopram",
            "generic": "Escitalopram (SSRI)",
            "dosage": "Standard adult dosing; titrate over 4–8 weeks",
            "remarks": "1st line for GAD. Check baseline ECG for QTc before starting. Check sodium at 3-4 weeks in patients >65 years or multiple comorbidities. Adequate trial = 6 weeks at therapeutic dose. Early ADRs: agitation, insomnia (co-prescribe BZD / hydroxyzine short-term)."
          },
          {
            "brand": "Sertraline",
            "generic": "Sertraline (SSRI)",
            "dosage": "Standard adult dosing",
            "remarks": "1st line for GAD. All SSRIs suitable for Panic Disorder. Monitor for emergent suicidal thoughts especially in patients <25 years."
          },
          {
            "brand": "Venlafaxine",
            "generic": "Venlafaxine (SNRI)",
            "dosage": "Standard adult dosing",
            "remarks": "2nd line for GAD and Panic Disorder. Check baseline ECG for QTc. Continuation: at least 6–12 months. Taper gradually when discontinuing to minimise discontinuation symptoms."
          }
        ]
      },
      {
        "name": "Benzodiazepines (Short-term adjunct only)",
        "entries": [
          {
            "brand": "Xanax",
            "generic": "Alprazolam 0.25mg tab",
            "dosage": "Initiate 0.25–0.5mg BD; usual 2–6mg/day in 3–4 divided doses; max 10mg/day",
            "remarks": "For breakthrough anxiety. Limit to max 2 weeks per consult as adjunct to antidepressant. Max 4 weeks cumulative/year at primary care. Hepatic adjustment required. Contraindicated: pregnancy, narrow-angle glaucoma, severe respiratory insufficiency, myasthenia gravis, sleep apnoea, severe hepatic impairment, concomitant ketoconazole/itraconazole. Avoid in alcohol/drug dependence. ADRs: sedation, muscle weakness, ataxia, paradoxical reactions."
          },
          {
            "brand": "Rivotril",
            "generic": "Clonazepam 0.5mg tab",
            "dosage": "Initiate 0.25mg BD; usual 1–3mg/day in 1–4 divided doses; max 4mg/day",
            "remarks": "For anxiety. Same contraindications as other BZDs. Hepatic adjustment required."
          },
          {
            "brand": "Ativan",
            "generic": "Lorazepam 0.5mg / 1mg tab",
            "dosage": "Initiate 0.5–1mg BD; max 10mg/day",
            "remarks": "For anxiety / insomnia. Prolonged elimination half-life with hepatic impairment. Same precautions as other BZDs."
          },
          {
            "brand": "Librax",
            "generic": "Chlordiazepoxide 5mg + Clidinium 2.5mg capsule",
            "dosage": "Adults: 2 capsules QDS; Geriatric: 1 capsule BD",
            "remarks": "Only for emotional distress caused by irritable bowel syndrome. Not approved for patients below 18 years old."
          }
        ]
      },
      {
        "name": "Adjunct Medications",
        "entries": [
          {
            "brand": "Seroquel",
            "generic": "Quetiapine (2nd generation antipsychotic)",
            "dosage": "Initiate 25mg ON → titrate to 50mg → up to 150mg ON as tolerated",
            "remarks": "Augmentation agent — add on to SSRI/SNRI if partial response or unable to tolerate higher doses. Ensure baseline ECG QTc < 500ms before starting. ADRs: sedation, dyslipidaemia, EPSEs, hypothyroidism, prolonged QTc, postural hypotension. Refer to psychiatrist if antipsychotics required (unless stepped down from psychiatry)."
          },
          {
            "brand": "Pregabalin",
            "generic": "Pregabalin (Gabapentinoid)",
            "dosage": "150mg/day in 2 divided doses initially; increase to max 600mg/day (2–3 divided doses)",
            "remarks": "For GAD. Renal adjustment required. ADRs: giddiness, sedation, fatigue. Caution: myasthenia gravis, substance abuse history."
          },
          {
            "brand": "Inderal",
            "generic": "Propranolol 10/40mg (off-label)",
            "dosage": "10–40mg BD to TDS PRN; max 40mg TDS",
            "remarks": "For symptomatic relief of palpitations and hand tremors in anxiety. Contraindicated: asthma, bradycardia, hypotension, heart block. May mask signs of hypoglycaemia and hyperthyroidism. Avoid abrupt withdrawal."
          },
          {
            "brand": "Atarax",
            "generic": "Hydroxyzine 10mg / 25mg tab",
            "dosage": "Initiate 10–25mg/day in divided doses; max 400mg/day (single dose max: 100mg adult, 50mg elderly)",
            "remarks": "MOH approved for anxiety (short-term). Also used for initial insomnia from SSRIs. Renal and hepatic adjustment required. ADRs: dizziness, drowsiness, dry mouth, constipation, urinary retention, QT prolongation. Contraindicated in early pregnancy."
          }
        ]
      },
      {
        "name": "Referral to Psychiatry SOC",
        "entries": [
          {
            "brand": "Psychiatric Referral",
            "generic": "Conditions for Referral to Psychiatry SOC",
            "dosage": "N/A",
            "remarks": "Refer when: patient ≤17 years requiring psychotropics; no response to 3 different antidepressants or at very high dose monotherapy; antipsychotics required as adjunct; complicated medical history (Cushing, liver disease); comorbid personality disorder or substance dependence; new onset psychotic or bipolar disorder."
          }
        ]
      }
    ]
  },
  {
    "id": "cpg-joint-pain",
    "name": "CPG: Joint Pain (Musculoskeletal)",
    "page": 0,
    "subCategories": [
      {
        "name": "Osteoarthritis — Pharmacological Treatment",
        "entries": [
          {
            "brand": "Paracetamol (Oral)",
            "generic": "Paracetamol",
            "dosage": "Standard oral dosing",
            "remarks": "First-line analgesia for OA. Conservative management is first-line and mainstay. Goals: adequate pain control, improve/maintain function, allow independent community functioning. Reviewed Aug 2024 by NUP Ortho SAG. Next review: Aug 2027."
          },
          {
            "brand": "Topical NSAIDs",
            "generic": "Topical NSAIDs (e.g. diclofenac gel)",
            "dosage": "Apply topically to affected joint",
            "remarks": "Preferred over oral NSAIDs where possible to reduce systemic side effects."
          },
          {
            "brand": "Oral NSAIDs",
            "generic": "Oral NSAIDs / Selective COX-2 inhibitors",
            "dosage": "Standard dosing if no contraindication",
            "remarks": "Use if no contraindication. Long-term/large doses affect renal function, increase peptic ulcer risk and cardiovascular events. Check baseline Hb and Cr. Cross-reactive NSAID hypersensitivity: use paracetamol or opioids/tramadol instead."
          },
          {
            "brand": "Intraarticular Injection",
            "generic": "Hydrocortisone + Lignocaine / Hyaluronic Acid",
            "dosage": "As clinically indicated",
            "remarks": "May provide temporary pain relief but not mainstay of conservative treatment. Efficacy and cost-effectiveness remain controversial. Glucosamine/chondroitin supplements: insufficient evidence, essentially placebo effects."
          }
        ]
      },
      {
        "name": "Rheumatoid Arthritis — Non-Biologic DMARDs",
        "entries": [
          {
            "brand": "Hydroxychloroquine",
            "generic": "Hydroxychloroquine (DMARD)",
            "dosage": "Standard dosing; used alone or in combination",
            "remarks": "Initiate DMARD as soon as possible for confirmed RA with persistent synovitis. Monitor: FBC, ESR, AST/ALT, Creatinine at 2–3 monthly intervals. Eye assessment for retinal toxicity required with chronic use. Refer to rheumatologist for new DMARD initiation or RA flares requiring high dose steroids (>10mg/day) or long-term glucocorticoids (≥6 months)."
          },
          {
            "brand": "Sulfasalazine",
            "generic": "Sulfasalazine (DMARD)",
            "dosage": "Standard dosing",
            "remarks": "1st line DMARD for RA. Used alone or in combination with hydroxychloroquine and/or methotrexate."
          },
          {
            "brand": "Methotrexate",
            "generic": "Methotrexate (DMARD)",
            "dosage": "Standard weekly dosing; check ALT trend — escalate if ALT 3x normal",
            "remarks": "1st line DMARD. Monitor LFT (ALT rising >30 to 56 to 78 U/L warrants dose reduction). Dose adjustment for renal impairment. Patients on MTX + statin with NAFLD require careful monitoring."
          },
          {
            "brand": "Prednisolone (short trial)",
            "generic": "Prednisolone 5mg",
            "dosage": "5mg BD for 2 weeks to assess response in newly diagnosed RA",
            "remarks": "Effective for RA symptom suppression. Not ideal for long-term due to toxicities. High dose (>10mg/day) or long-term (≥6 months) use requires rheumatologist review with DMARD adjustment."
          }
        ]
      },
      {
        "name": "Red Flags / Musculoskeletal Emergencies",
        "entries": [
          {
            "brand": "Septic Arthritis",
            "generic": "Emergency referral criteria",
            "dosage": "Refer urgently to ED",
            "remarks": "Red flags: hot/swollen joint (consider TB in patients on anti-TNF biologics); constitutional symptoms (high-grade fever, weight loss, malaise); weakness suggesting compartment syndrome or acute myelopathy; burning pain/numbness/paraesthesia suggesting myelopathy or radiculopathy. Also refer urgently: suspected active SLE/CTD; active dermatomyositis with ILD; antiphospholipid syndrome with DVT/PE/stroke."
          }
        ]
      },
      {
        "name": "Investigations for Joint Pain",
        "entries": [
          {
            "brand": "Blood Tests",
            "generic": "FBC, ESR, CRP, RF",
            "dosage": "As indicated",
            "remarks": "FBC: high WBC in gout/septic arthritis; anaemia of chronic illness or microcytic anaemia from NSAID use. ESR/CRP: help identify inflammatory conditions (normal ESR/CRP does not exclude inflammatory arthritis). RF: order only with reasonable clinical suspicion of inflammatory joint disease — indiscriminate use causes false positives. ANA (not available at NUP): only if systemic symptoms + laboratory features. Upper limit of normal ESR: Male = Age/2; Female = (Age+10)/2."
          },
          {
            "brand": "Plain X-Ray",
            "generic": "Radiological imaging",
            "dosage": "When indicated",
            "remarks": "For significant trauma or focal bone pain. Bilateral weight-bearing AP + lateral views for knee OA assessment. Skyline view if patellofemoral involvement suspected. Not routinely required to diagnose OA with typical presentation. X-ray changes in inflammatory/crystal arthritis only visible in chronic disease (years)."
          }
        ]
      }
    ]
  }
];
