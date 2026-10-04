import { CpgDocument } from '../../types';

export const acuteMedsPregnancy: CpgDocument = {
  id: 'cpg-acute-meds-pregnancy',
  condition: 'Acute Medications for use in Pregnancy and Breastfeeding',
  source: 'National University Polyclinics (NUP)',
  reviewDate: 'June 2023',
  advisors: [
    'Amanda Lim Lay Ying, Senior Pharmacist, NUHS Pharmacy',
    'Esther Ang Pei Jing, Senior Pharmacist, NUHS Pharmacy',
    'Joseph Ong Heng Yang, Senior Pharmacist, NUHS Pharmacy',
  ],
  sections: [
    {
      heading: 'Overview and Definitions',
      blocks: [
        {
          type: 'text',
          content:
            'This chart covers acute medications for use in Pregnancy and Breastfeeding, including Analgesics, Antibiotics, Antifungals, Antivirals, Antihistamines, Decongestants, Cough, Phlegm, Sore Throat, Nausea and Vomiting, GI, Hemorrhoids, Constipation, and Diarrhoea. For medications not in this chart, please refer to standard drug references. For internal circulation and use within National University Polyclinics.',
        },
        {
          type: 'list',
          items: [
            { text: '1st trimester: 1 to 12 weeks' },
            { text: '2nd trimester: 13 to 28 weeks' },
            { text: '3rd trimester: More than 29 weeks' },
            { text: 'Near Term: More than 37 weeks' },
          ],
        },
        {
          type: 'text',
          content:
            'Legend: Y = Safe; N = Unsafe; Review (see comments) = Requires review of individual circumstances.',
        },
      ],
    },
    {
      heading: 'Analgesics',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Safety in Pregnancy', 'Safety in Breastfeeding', 'Comments'],
          rows: [
            { cells: ['Paracetamol', 'Y', 'Y', 'Drug of choice (Analgesic)'] },
            {
              cells: [
                'Diclofenac sodium',
                'Review (see comments)',
                'Y',
                '1st trimester: N — risk of cardiovascular anomalies/cleft palate. 2nd trimester: may be used for severe pain if no safer alternatives; avoid from 20 weeks due to oligohydramnios risk. 3rd trimester: N — risk of premature closure of ductus arteriosus.',
              ],
            },
            { cells: ['Ibuprofen', 'Y', 'Y', ''] },
            { cells: ['Indomethacin', 'Y', 'Y', ''] },
            { cells: ['Mefenamic acid', 'Y', 'Y', ''] },
            { cells: ['Naproxen', 'Y', 'Y', ''] },
            { cells: ['Celecoxib', 'Y', 'Y', ''] },
            { cells: ['Etoricoxib', 'N', 'N', 'Lack safety information'] },
            {
              cells: [
                'Tramadol',
                'N',
                'N',
                '1st trimester: caution due to possible toxicity (animal studies). Near term: caution due to neonatal withdrawal. Breastfeeding: not recommended in premature infants due to immature kidney/liver function. Monitor infants for sleepiness, breathing difficulties, or limpness.',
              ],
            },
            {
              cells: [
                'Codeine phosphate (incl. Panadeine)',
                'N',
                'N',
                'Pregnancy: associated with neural tube defects, congenital heart defects, gastroschisis, poor fetal growth, stillbirth, and preterm delivery. Breastfeeding: not recommended; risk of excessive sedation and respiratory depression in infant.',
              ],
            },
            {
              cells: [
                'Paracetamol 450mg / Orphenadrine 35mg',
                'N',
                'N',
                'Limited data on safety in pregnancy & breastfeeding.',
              ],
            },
            { cells: ['Ketoprofen plaster/gel (Kefentech/Fastum)', 'Y', 'Y', ''] },
            { cells: ['Methyl Salicylate cream/liniment', 'Y', 'Y', ''] },
          ],
        },
      ],
    },
    {
      heading: 'Antibiotics',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Safety in Pregnancy', 'Safety in Breastfeeding', 'Comments'],
          rows: [
            { cells: ['Amoxicillin', 'Y', 'Y', ''] },
            {
              cells: [
                'Amoxicillin/Clavulanic Acid (Augmentin)',
                'Review (see comments)',
                'Y',
                '3rd trimester: caution. Near term: not to be used due to risk of necrotising enterocolitis.',
              ],
            },
            { cells: ['Cephalexin', 'Y', 'Y', ''] },
            { cells: ['Cloxacillin', 'Y', 'Y', ''] },
            { cells: ['Phenoxymethylpenicillin (Penicillin V)', 'Y', 'Y', ''] },
            {
              cells: [
                'Ciprofloxacin',
                'N',
                'Review (see comments)',
                'Pregnancy: not recommended if alternatives available; concerns of fetal cartilage damage. Breastfeeding: avoid if baby is G6PD deficient or unknown status; caution in premature infants. If necessary, withhold breastfeeding 3–4 hours after dose. Ophthalmic preparations: Y.',
              ],
            },
            {
              cells: [
                'Clarithromycin',
                'N',
                'Review (see comments)',
                'Pregnancy: animal studies show risk of fetal effects (consider alternatives). Breastfeeding: data inconclusive, but 250mg bd has been shown safe. Observe for diarrhoea and thrush in infants.',
              ],
            },
            { cells: ['Azithromycin', 'Y', 'Y', ''] },
            { cells: ['Erythromycin', 'Y', 'Y', ''] },
            { cells: ['Clindamycin', 'Y', 'Y', ''] },
            {
              cells: [
                'Doxycycline',
                'N',
                'Review (see comments)',
                'Pregnancy: adverse effects on fetal teeth and bones, congenital defects. Breastfeeding: avoid unless no suitable alternatives; compatible for short-term use (≤3–4 weeks).',
              ],
            },
            {
              cells: [
                'Metronidazole',
                'Review (see comments)',
                'Review (see comments)',
                'Pregnancy: 1st trimester — caution (manufacturer recommendation). Breastfeeding: compatible for short-term use (e.g. 400mg tds × 7 days). For large doses (e.g. 2g once for trichomoniasis), advise to express and discard breastmilk for 24 hours after dose.',
              ],
            },
            {
              cells: [
                'Co-trimoxazole (Sulphamethoxazole/Trimethoprim)',
                'Review (see comments)',
                'Review (see comments)',
                '1st trimester: N — risk of structural defects. 3rd trimester: N — risk of jaundice/kernicterus. Breastfeeding: compatible; avoid in infants <1 month, G6PD deficient/unknown, premature, or with hyperbilirubinaemia.',
              ],
            },
            {
              cells: [
                'Nitrofurantoin',
                'Review (see comments)',
                'Review (see comments)',
                '3rd trimester: N. Near term: contraindicated due to risk of haemolytic anaemia. Breastfeeding: compatible; avoid in infants <1 month, G6PD deficient/unknown, premature, or with hyperbilirubinaemia.',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Antifungals & Antivirals',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Safety in Pregnancy', 'Safety in Breastfeeding', 'Comments'],
          rows: [
            {
              cells: [
                'Fluconazole',
                'Review (see comments)',
                'Y',
                '1st trimester: N — potential risk of spontaneous abortion and malformations. Topical azoles recommended as first line for VVC throughout pregnancy.',
              ],
            },
            {
              cells: [
                'Itraconazole',
                'N',
                'N',
                'Pregnancy: avoid in 1st trimester. Congenital abnormalities reported. Use only if benefits outweigh risks. Breastfeeding: limited data; use fluconazole as alternative.',
              ],
            },
            {
              cells: [
                'Clotrimazole Pessary',
                'Y',
                'Y',
                'Topical therapy recommended as first line for candidiasis in pregnancy.',
              ],
            },
            {
              cells: [
                'Nystatin Pessary',
                'Y',
                'Y',
                'Topical therapy recommended as first line for candidiasis in pregnancy.',
              ],
            },
            { cells: ['Nystatin Oral Suspension', 'Y', 'Y', ''] },
            { cells: ['Acyclovir (tablet/cream)', 'Y', 'Y', ''] },
          ],
        },
      ],
    },
    {
      heading: 'Antihistamines & Decongestants',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Safety in Pregnancy', 'Safety in Breastfeeding', 'Comments'],
          rows: [
            {
              cells: [
                'Diphenhydramine / Dimenhydrinate',
                'Y',
                'Review (see comments)',
                'Breastfeeding: may cause drowsiness and irritability in infants.',
              ],
            },
            {
              cells: [
                'Promethazine HCl/theoclate',
                'Y',
                'Y',
                'Use lowest effective dose. Chlorpheniramine preferred in pregnancy (more data available). Cetirizine/Loratadine when second-generation antihistamine needed. Breastfeeding: non-sedating antihistamines preferred.',
              ],
            },
            { cells: ['Chlorpheniramine', 'Y', 'Y', ''] },
            { cells: ['Cetirizine', 'Y', 'Y', ''] },
            { cells: ['Loratadine', 'Y', 'Y', ''] },
            {
              cells: [
                'Hydroxyzine',
                'N',
                'Review (see comments)',
                'Pregnancy: lack clinical data in early pregnancy. Breastfeeding: may reduce quantity of breastmilk and cause sedation in infants.',
              ],
            },
            {
              cells: [
                'Fexofenadine',
                'N',
                'Review (see comments)',
                'Pregnancy: lack clinical data. Breastfeeding: lack of data; may reduce quantity of breastmilk.',
              ],
            },
            {
              cells: [
                'Oxymetazoline Nasal Drops',
                'Y',
                'Y',
                'Nasal preparations (short-term use) are preferred over oral agents.',
              ],
            },
            {
              cells: [
                'Phenylephrine (in Panadol Cold/Sinus products)',
                'N',
                'Review (see comments)',
                '1st trimester: N — linked to eye/ear defects, fused fingers. 2nd trimester onwards: N — linked to musculoskeletal defects, congenital dislocation of hip, umbilical hernias. Breastfeeding: may reduce quantity of breastmilk.',
              ],
            },
            {
              cells: [
                'Pseudoephedrine',
                'N',
                'Review (see comments)',
                'Pregnancy: linked to CVS defects and cleft palate. Breastfeeding: likely to reduce breastmilk.',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Cough, Phlegm & Sore Throat',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Safety in Pregnancy', 'Safety in Breastfeeding', 'Comments'],
          rows: [
            {
              cells: [
                'Dextromethorphan',
                'Y',
                'Y',
                'Cough syrup for pregnant and breastfeeding mothers should ideally be alcohol-free.',
              ],
            },
            {
              cells: [
                'Procodin (Promethazine HCl/Codeine phosphate)',
                'N',
                'N',
                'Pregnancy: opioids associated with birth defects, poor fetal growth, stillbirth, preterm delivery. Breastfeeding: risk of excessive sedation and respiratory depression in infant.',
              ],
            },
            { cells: ['Acetylcysteine', 'Y', 'Y', ''] },
            {
              cells: [
                'Bromhexine',
                'Review (see comments)',
                'Y',
                'Pregnancy: compatible, but less safety information than acetylcysteine.',
              ],
            },
            {
              cells: [
                'Guaifenesin',
                'Review (see comments)',
                'Y',
                'Pregnancy: compatible, but less safety information than acetylcysteine.',
              ],
            },
            {
              cells: [
                'Rhinathiol Promethazine',
                'Review (see comments)',
                'Review (see comments)',
                '1st trimester: N — lack of data for carbocisteine in pregnancy. Breastfeeding: minimal exposure due to low oral bioavailability; avoid in preterm infants.',
              ],
            },
            { cells: ['Dequalinium', 'Y', 'Y', ''] },
            { cells: ['Dothiricin', 'N', 'N', 'No safety information.'] },
            { cells: ['Difflam (Benzydamine)', 'Y', 'Y', ''] },
            { cells: ['Thymol gargle', 'Y', 'Y', ''] },
            { cells: ['Chlorhexidine mouthwash', 'Y', 'Y', ''] },
          ],
        },
      ],
    },
    {
      heading: 'Nausea, Vomiting & GI',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Safety in Pregnancy', 'Safety in Breastfeeding', 'Comments'],
          rows: [
            { cells: ['Pyridoxine (B6)', 'Y', 'Y', ''] },
            { cells: ['Domperidone', 'Y', 'Y', ''] },
            {
              cells: [
                'Metoclopramide',
                'Y',
                'Y',
                'Reserve as 2nd-line agent due to risks of extrapyramidal side effects.',
              ],
            },
            { cells: ['Cinnarizine', 'N', 'N', 'No safety information.'] },
            {
              cells: [
                'Prochlorperazine',
                'Y',
                'N',
                'Reserve as 2nd-line agent. Breastfeeding: causes drowsiness, dizziness, blurred vision and hypotension in nursing infants.',
              ],
            },
            { cells: ['Betahistine Mesylate', 'N', 'N', 'Lack safety information.'] },
            {
              cells: [
                'Antacid (Mg trisilicate, Al hydroxide, simethicone)',
                'Y',
                'Y',
                'Pregnancy: for short-term use. High-dose prolonged use of Mg trisilicate associated with nephrolithiasis, hypotonia, respiratory distress in fetus.',
              ],
            },
            {
              cells: [
                'Gaviscon (sodium alginate, sodium bicarbonate, calcium bicarbonate)',
                'Y',
                'Y',
                'Safe as per manufacturer recommendation.',
              ],
            },
            { cells: ['Famotidine', 'Y', 'Y', 'Inhibition of gastric acid may interfere with calcium absorption.'] },
            { cells: ['Omeprazole', 'Y', 'Y', ''] },
            {
              cells: [
                'Hyoscine butylbromide',
                'Review (see comments)',
                'Y',
                'Near term: caution — associated with fever, tachycardia and lethargy in newborns. Avoid in severe pre-eclampsia.',
              ],
            },
            {
              cells: [
                'Mebeverine HCl',
                'N',
                'N',
                'Lack of data to support use. May reduce breastmilk production.',
              ],
            },
            {
              cells: [
                'Colimix (Simethicone/Dicyclomine)',
                'Y',
                'N',
                'Breastfeeding: associated with infant apnoea; may reduce breastmilk.',
              ],
            },
            {
              cells: [
                'Chlordiazepoxide/Clidinium',
                'N',
                'N',
                '1st trimester: chlordiazepoxide associated with higher risk of major congenital anomalies. 3rd trimester: neonatal withdrawal including tremors and sedation. Breastfeeding: sedation and poor feeding in nursing infant. Clidinium lacks safety information.',
              ],
            },
          ],
        },
      ],
    },
    {
      heading: 'Haemorrhoids, Constipation & Diarrhoea',
      blocks: [
        {
          type: 'table',
          headers: ['Drug', 'Safety in Pregnancy', 'Safety in Breastfeeding', 'Comments'],
          rows: [
            {
              cells: [
                'Daflon (Diosmin/Hesperidin)',
                'Y',
                'Y',
                'Pregnancy: safe for short-term use; topical options preferred.',
              ],
            },
            { cells: ['Lidocaine (Lignocaine) gel/ointment', 'Y', 'Y', ''] },
            {
              cells: [
                'Proctosedyl suppository/ointment',
                'Y',
                'Y',
                'Wash hands before and after use to reduce accidental ingestion due to steroid content.',
              ],
            },
            { cells: ['Fybogel (Ispaghula Husk)', 'Y', 'Y', ''] },
            { cells: ['Lactulose', 'Y', 'Y', ''] },
            {
              cells: [
                'Bisacodyl tablet/suppository',
                'Y',
                'Y',
                'Pregnancy: long-term use may cause malnutrition; use lowest effective dose. Suppository has lower systemic absorption than tablets.',
              ],
            },
            { cells: ['Senna (Sennosides)', 'Y', 'Y', ''] },
            {
              cells: [
                'Glycerin (Glycerol) suppository',
                'Review (see comments)',
                'Y',
                '1st trimester: product insert does not recommend use.',
              ],
            },
            {
              cells: [
                'Liquid Paraffin',
                'N',
                'Y',
                'Pregnancy: not recommended; associated with decreased maternal absorption of fat-soluble vitamins leading to adverse maternal and neonatal effects.',
              ],
            },
            {
              cells: [
                'Sodium Phosphate enema (Fleet)',
                'N',
                'Y',
                'Pregnancy: lack of data; reproduction studies have not been conducted.',
              ],
            },
            { cells: ['Probiotics (e.g. Lactoguard, Lacteol Fort)', 'Y', 'Y', ''] },
            { cells: ['Charcoal', 'Y', 'Y', ''] },
            { cells: ['Smecta (Dioctahedral smectite)', 'N', 'N', 'Lack safety information.'] },
            {
              cells: [
                'Loperamide',
                'Review (see comments)',
                'Y',
                'Pregnancy: use lowest effective dose; limited data; use safer alternatives.',
              ],
            },
            {
              cells: [
                'Lomotil (Diphenoxylate/Atropine)',
                'Review (see comments)',
                'N',
                '1st and 2nd trimester: can consider as second-line. 3rd trimester: avoid due to neonatal withdrawal from diphenoxylate. Breastfeeding: lack safety information.',
              ],
            },
            { cells: ['Oral Rehydration Salt', 'Y', 'Y', ''] },
            { cells: ['Kaolin mixture', 'Y', 'Y', ''] },
          ],
        },
      ],
    },
  ],
};
