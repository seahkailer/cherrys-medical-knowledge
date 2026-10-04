import { CpgDocument } from '../types';

export const warfarinInteractions: CpgDocument = {
  id: 'cpg-warfarin-interactions',
  condition: 'Drug Interactions with Warfarin',
  source: '68 Drug With Major Interactions with Warfarin.pdf',
  reviewDate: 'Updated July 2015',
  advisors: 'NUP Clinical Pharmacy',
  sections: [
    {
      heading: 'Overview',
      blocks: [
        { type: 'text', content: 'This guide lists drugs with major interactions with Warfarin. Interactions may increase (↑) or decrease (↓) the anticoagulant effect of Warfarin. Note: this list is not exhaustive. Always consult drug references for drugs not listed.' },
      ],
    },
    {
      heading: 'Drugs That INCREASE Warfarin Effect (↑ INR risk)',
      blocks: [
        { type: 'table', headers: ['Drug Class', 'Drugs'], rows: [
          { cells: ['Anti-platelets and Anticoagulants', 'Aspirin, Clopidogrel, Dipyridamole, Ticlopidine; Apixaban, Dabigatran, Rivaroxaban'] },
          { cells: ['Endocrine', 'Levothyroxine; Sulphonylureas'] },
          { cells: ['Cardiovascular', 'Amiodarone; Diltiazem, Verapamil; Propranolol; Simvastatin, Lovastatin; Fenofibrate, Gemfibrozil'] },
          { cells: ['Psychiatric', 'SSRIs (Escitalopram, Fluoxetine, Fluvoxamine, Sertraline); TCAs (Amitriptyline, Doxepin); Mirtazapine; Venlafaxine; Quetiapine'] },
          { cells: ['Anticonvulsants', 'Valproic acid; Phenytoin* (initial increase then decrease)'] },
          { cells: ['Malignant disease and Immunosuppression', 'Methotrexate; Tamoxifen'] },
          { cells: ['Musculoskeletal', 'Allopurinol'] },
          { cells: ['Corticosteroid', 'Prednisolone'] },
          { cells: ['Gastrointestinal', 'Cimetidine, Ranitidine; Omeprazole'] },
          { cells: ['Analgesics', 'NSAIDs, COX-II Selective inhibitors; Paracetamol; Tramadol'] },
          { cells: ['Antibiotics/Antifungals (increase)', 'Isoniazid; Fluconazole; Levofloxacin; Oseltamivir'] },
        ]},
      ],
    },
    {
      heading: 'Drugs That DECREASE Warfarin Effect (↓ INR risk)',
      blocks: [
        { type: 'table', headers: ['Drug Class', 'Drugs'], rows: [
          { cells: ['Endocrine', 'Androgens, Estrogens, Progestins'] },
          { cells: ['Anticonvulsants', 'Carbamazepine; Phenobarbital; Phenytoin*'] },
          { cells: ['Endocrine (decrease)', 'Anti-thyroid agents (Carbimazole, Propylthiouracil)'] },
          { cells: ['Cardiovascular', 'Cholestyramine'] },
          { cells: ['Malignant disease and Immunosuppression', 'Azathioprine; Sulphasalazine'] },
          { cells: ['Antibiotics/Antifungals (decrease)', 'Rifampicin'] },
        ]},
        { type: 'text', content: '*Note: Phenytoin — initiation or dose increase results in an initial increase in Warfarin effect, followed by a decrease in a later phase.' },
      ],
    },
    {
      heading: 'Oral Antibiotics — Detailed Interaction Ratings',
      blocks: [
        { type: 'table', headers: ['Antibiotic', 'Interaction Rating', 'Effect on INR', 'Management'], rows: [
          { cells: ['Amoxicillin', 'Risk C: Monitor therapy. Severity moderate/major, Reliability good, Onset delayed.', 'Increase INR, risk of bleeding. May enhance anticoagulant effect by disrupting vitamin K synthesis.', 'Monitor INR closely'] },
          { cells: ['Amoxicillin-Clavulanate', 'Risk C: Monitor therapy. Severity moderate/major, Reliability good, Onset delayed.', 'Increase INR, risk of bleeding. Disruption of vitamin K synthesis; preferential metabolism of clavulanate over warfarin.', 'Monitor INR closely'] },
          { cells: ['Azithromycin', 'Risk C: Monitor therapy. Severity moderate/major, Reliability excellent. Serious — Use Alternative.', 'Increase INR, risk of bleeding. Inhibition of CYP3A4-mediated warfarin metabolism and disruption of vitamin K synthesis.', 'Consider alternative antibiotic'] },
          { cells: ['Cefuroxime', 'Risk C: Monitor therapy. Severity moderate, Reliability fair.', 'Increase INR. Disruption of vitamin K synthesis; may decrease prothrombin activity.', 'Monitor INR closely'] },
          { cells: ['Cephalexin', 'Risk C: Monitor therapy. Severity moderate/major, Reliability fair.', 'Increase INR, risk of bleeding. Disruption of vitamin K synthesis.', 'Monitor INR closely'] },
          { cells: ['Ciprofloxacin', 'Risk C/D: Monitor/Consider modification. Severity major, Reliability fair. Serious — Use Alternative.', 'Increase INR, risk of bleeding. Inhibition of CYP1A2-mediated warfarin metabolism and disruption of vitamin K synthesis.', 'Consider alternative antibiotic; if used, monitor INR closely'] },
          { cells: ['Clindamycin', 'Risk C: Monitor therapy. Severity moderate, Reliability fair.', 'Increase INR. Disruption of vitamin K synthesis.', 'Monitor INR closely'] },
          { cells: ['Co-trimoxazole (Trimethoprim-Sulfamethoxazole)', 'Risk D: Consider therapy modification. Severity major, Reliability excellent. Serious — Use Alternative.', 'Increase INR markedly, significant risk of bleeding. Stereoselective inhibition of CYP2C9-mediated warfarin metabolism.', 'Avoid if possible; reduce warfarin dose by 25–50% if used; monitor INR very closely'] },
          { cells: ['Doxycycline', 'Risk C: Monitor therapy. Severity moderate, Reliability fair.', 'Increase INR. Disruption of vitamin K synthesis.', 'Monitor INR closely'] },
          { cells: ['Erythromycin', 'Risk C: Monitor therapy. Severity moderate/major, Reliability good. Serious — Use Alternative.', 'Increase INR, risk of bleeding. Inhibition of CYP3A4-mediated warfarin metabolism.', 'Consider alternative antibiotic'] },
          { cells: ['Metronidazole', 'Risk D: Consider therapy modification. Severity major, Reliability excellent. Serious — Use Alternative.', 'Increase INR significantly. Stereoselective inhibition of CYP2C9-mediated warfarin metabolism.', 'Avoid if possible; reduce warfarin dose by 25–50% if used; monitor INR very closely'] },
          { cells: ['Nitrofurantoin', 'Risk C: Monitor therapy. Severity moderate, Reliability fair.', 'Increase INR. Mechanism not fully established.', 'Monitor INR closely'] },
        ]},
      ],
    },
    {
      heading: 'Topical Antibiotics',
      blocks: [
        { type: 'text', content: 'The following topical antibiotics have no documented interactions with warfarin: Clioquinol (topical), Fusidic acid (topical), Mupirocin (topical), Tetracycline (topical).' },
      ],
    },
    {
      heading: 'Oral Antifungals',
      blocks: [
        { type: 'table', headers: ['Antifungal', 'Interaction Rating', 'Effect on INR', 'Management'], rows: [
          { cells: ['Fluconazole', 'Risk D: Consider therapy modification. Severity major, Reliability excellent. Serious — Use Alternative.', 'Increase INR significantly. Potent inhibition of CYP2C9-mediated warfarin metabolism.', 'Avoid if possible; reduce warfarin dose by 25–50%; monitor INR very closely'] },
          { cells: ['Griseofulvin', 'Risk C: Monitor therapy. Severity moderate, Reliability fair. Significant — Monitor Closely.', 'Decrease INR. Induction of CYP1A2, CYP2C9 and CYP3A4-mediated warfarin metabolism.', 'Monitor INR closely; may need to increase warfarin dose'] },
          { cells: ['Itraconazole', 'Risk C: Monitor therapy. Severity moderate/major, Reliability fair. Serious — Use Alternative.', 'Increase INR, risk of bleeding. Inhibition of CYP3A4-mediated warfarin metabolism.', 'Consider alternative antifungal'] },
          { cells: ['Ketoconazole', 'Risk C: Monitor therapy. Severity moderate/major, Reliability fair. Serious — Use Alternative.', 'Increase INR, risk of bleeding. Inhibition of CYP3A4-mediated warfarin metabolism.', 'Consider alternative antifungal'] },
        ]},
      ],
    },
    {
      heading: 'Topical Antifungals',
      blocks: [
        { type: 'text', content: 'Clotrimazole (topical) and Ketoconazole (topical) and Selenium Sulfide (topical) have no documented interactions with warfarin.' },
        { type: 'text', content: 'IMPORTANT — Miconazole (topical): Risk D — Consider therapy modification. Severity major, Reliability good. Significant — Monitor Closely. May enhance anticoagulant effect of Warfarin through inhibition of CYP3A4-mediated warfarin metabolism. Monitor INR closely even with topical use.' },
      ],
    },
    {
      heading: 'Analgesics',
      blocks: [
        { type: 'table', headers: ['Analgesic', 'Interaction Rating', 'Effect on INR', 'Management'], rows: [
          { cells: ['Mefenamic Acid', 'Risk D: Consider therapy modification. Severity moderate, Reliability fair. Significant — Monitor Closely.', 'Increase INR, risk of bleeding. NSAID — inhibition of platelet aggregation and gastric erosion.', 'Avoid NSAIDs where possible; monitor INR if used'] },
          { cells: ['Meloxicam', 'Risk D: Consider therapy modification. Severity moderate, Reliability fair. Significant — Monitor Closely.', 'Increase INR, risk of bleeding. NSAID — inhibition of platelet aggregation and gastric erosion.', 'Avoid NSAIDs where possible; monitor INR if used'] },
          { cells: ['Naproxen', 'Risk D: Consider therapy modification. Severity moderate/major, Reliability fair. Significant — Monitor Closely.', 'Increase INR, risk of bleeding. NSAID — inhibition of platelet aggregation and gastric erosion.', 'Avoid NSAIDs where possible; monitor INR if used'] },
          { cells: ['Orphenadrine', 'No documented interaction', 'No documented interaction with warfarin.', 'No special precautions'] },
          { cells: ['Tramadol', 'Risk C: Monitor therapy. Severity moderate, Reliability fair. Significant — Monitor Closely.', 'Increase INR, risk of bleeding. Unknown mechanism.', 'Monitor INR closely'] },
          { cells: ['Methyl Salicylate (topical)', 'Risk not available. Severity major, Onset delayed.', 'Increase INR, risk of bleeding. Absorption of topical methyl salicylate is 15–22%.', 'Monitor INR closely; be aware even topical preparations are absorbed'] },
          { cells: ['Ketoprofen (topical)', 'No information available', 'No documented information.', 'Use with caution'] },
        ]},
      ],
    },
  ],
};
