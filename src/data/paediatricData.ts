// Structured paediatric drug dosage tables extracted from LOCUM_GUIDE.docx tbl[31]-tbl[36]

export type PaediatricRow = {
  age: string;
  weight: string;
  doses: (string | null)[];
};

export type PaediatricTable = {
  id: string;
  categoryHeader: { label: string; colspan: number }[];
  columns: string[];
  rows: PaediatricRow[];
};

// Age/weight axis (rows 3-17 of each table: 3MTH, 6MTH, 9MTH, 1-12 years)
const AGE_WT: { age: string; weight: string }[] = [
  { age: "3MTH", weight: "6" },
  { age: "6MTH", weight: "8" },
  { age: "9MTH", weight: "9" },
  { age: "1",    weight: "10" },
  { age: "2",    weight: "13" },
  { age: "3",    weight: "15" },
  { age: "4",    weight: "17" },
  { age: "5",    weight: "19" },
  { age: "6",    weight: "21" },
  { age: "7",    weight: "23" },
  { age: "8",    weight: "25" },
  { age: "9",    weight: "27" },
  { age: "10",   weight: "30" },
  { age: "11",   weight: "34" },
  { age: "12",   weight: "38" },
];

// tbl[31]: FEVER AND PAIN | COUGH
// Columns: PARACET 125MG/5ML QDS(ML), PARACET 250MG/5ML QDS(ML), PARACET 500MG/5ML QDS(ML),
//          NUROFEN 100MG/5ML QDS(ML), DHASEDYL TDS(ML), MUCOLEXIN TDS(ML), PHEN-EXPECT CD TDS(ML)
export const tbl31: PaediatricTable = {
  id: "tbl31",
  categoryHeader: [
    { label: "", colspan: 2 },
    { label: "FEVER AND PAIN", colspan: 4 },
    { label: "COUGH", colspan: 3 },
  ],
  columns: [
    "PARACET\n125MG/5ML\nQDS (ML)",
    "PARACET\n250MG/5ML\nQDS (ML)",
    "PARACET\n500MG/5ML\nQDS (ML)",
    "NUROFEN\n100MG/5ML\nQDS (ML)",
    "DHASEDYL\nTDS (ML)",
    "MUCOLEXIN\nTDS (ML)",
    "PHEN-EXPECT\nCD TDS(ML)",
  ],
  rows: AGE_WT.map(({ age, weight }, i) => {
    const d: (string | null)[][] = [
      // PARACET 125: 3MTH-8YR have values; 9-12 do not
      ["2.5","2.5","2.5","5","5","5","7.5","7.5","10","10","10",null,null,null,null],
      // PARACET 250: 1-12 only
      [null,null,null,"2.5","2.5","2.5","3.5","3.5","5","5","5","7.5","7.5","10","10"],
      // PARACET 500: 6-12 only
      [null,null,null,null,null,null,null,null,"2.5","2.5","2.5","3.5","3.5","5","5"],
      // NUROFEN 100: 6MTH-12
      [null,"2.5 TDS","2.5 TDS","2.5","2.5","2.5","2.5","5","5","5","5","5","10","10","10"],
      // DHASEDYL: 2-12
      [null,null,null,null,"2.5","2.5","2.5","2.5","5","5","5","5","5","5","10"],
      // MUCOLEXIN: all
      ["2.5","2.5","2.5","2.5","3.5","3.5","5","5","5","7.5","7.5","7.5","7.5","10","10"],
      // PHEN-EXPECT CD: 2-12
      [null,null,null,null,"2.5","2.5","2.5","2.5","5","5","5","5","5","5","10"],
    ];
    return {
      age,
      weight,
      doses: d.map(col => col[i] ?? null),
    };
  }),
};

// tbl[32]: FLU AND ALLERGY | INFLAM | MUCOLYTIC
// Columns: FEDAC TDS(ML), PIRITON 4MG/5ML TDS(ML), POLARAX 2MG/5ML TDS(ML), PMZ 5MG/5ML TDS(ML),
//          ZYRTEC OM(ML), LEFTOSE TDS(ML), BISOLVON 4MG/5ML TDS(ML), MUCO-SOLVAN TDS(ML), FLUIMUCIL 100MG SACHET
export const tbl32: PaediatricTable = {
  id: "tbl32",
  categoryHeader: [
    { label: "", colspan: 2 },
    { label: "FLU AND ALLERGY", colspan: 5 },
    { label: "INFLAM", colspan: 1 },
    { label: "MUCOLYTIC", colspan: 3 },
  ],
  columns: [
    "FEDAC\nTDS(ML)",
    "PIRITON\n4MG/5ML\nTDS (ML)",
    "POLARAX\n2MG/5ML\nTDS (ML)",
    "PMZ\n5MG/5ML\nTDS (ML)",
    "ZYRTEC\nOM (ML)",
    "LEFTOSE\nTDS (ML)",
    "BISOLVON\n4MG/5ML\nTDS (ML)",
    "MUCO-SOLVAN\nTDS(ML)",
    "FLUIMUCIL\n100MG SACHET",
  ],
  rows: AGE_WT.map(({ age, weight }, i) => {
    const d: (string | null)[][] = [
      // FEDAC: 6MTH-12
      [null,"2.5 BD","2.5 BD","2.5 BD","2.5","2.5","2.5","2.5","5","5","5","5","5","5","10"],
      // PIRITON: 1-12
      [null,null,null,"1.25 BD","1.25 BD","1.25","1.25","1.25","2.5","2.5","2.5","2.5","5","5","5"],
      // POLARAX: 2-12
      [null,null,null,null,"1.25","1.25","1.25","1.25","2.5","2.5","2.5","2.5","2.5","2.5","5"],
      // PMZ: 2-12
      [null,null,null,null,"2.5","3.5","5","5","5","7.5","7.5","7.5","10","10","10"],
      // ZYRTEC: 2-12
      [null,null,null,null,"5","5","5","5","10","10","10","10","10","10","10"],
      // LEFTOSE: all
      ["1","1","1","1","2.5","2.5","2.5","2.5","3.5","3.5","3.5","3.5","3.5","5","5"],
      // BISOLVON: 1-12
      [null,null,null,"2.5","2.5","2.5","2.5","2.5","5","5","5","5","5","10","10"],
      // MUCO-SOLVAN: 1-12
      [null,null,null,"2.5 BD","2.5","2.5","2.5","2.5","5","5","5","5","5","5","5"],
      // FLUIMUCIL: all
      ["0.5 BD","0.5 BD","0.5 BD","0.5 TDS","1 TDS","1 TDS","1 TDS","1 TDS","2 BD","2 BD","2 BD","2 BD","2 TDS","2 TDS","2 TDS"],
    ];
    return {
      age,
      weight,
      doses: d.map(col => col[i] ?? null),
    };
  }),
};

// tbl[33]: ASTHMA | VOMITING
// Columns: VENTOLIN 2MG/5ML TDS(ML), VENTOLIN NEB(ML), BRICANYL 1.5MG/5ML TDS(ML),
//          KETOTIFEN 1MG/5ML BD(ML), PRED 3MG/5ML BD(ML), DIMENATE 15MG/5ML TDS(ML), MAXOLON 5MG/5ML TDS(ML)
export const tbl33: PaediatricTable = {
  id: "tbl33",
  categoryHeader: [
    { label: "", colspan: 2 },
    { label: "ASTHMA", colspan: 5 },
    { label: "VOMITING", colspan: 2 },
  ],
  columns: [
    "VENTOLIN\n2MG/5ML\nTDS (ML)",
    "VENTOLIN\nNEB (ML)",
    "BRICANYL\n1.5MG/5ML\nTDS (ML)",
    "KETOTIFEN\n1MG/5ML\nBD (ML)",
    "PRED\n3MG/5ML\nBD (ML)",
    "DIMENATE\n15MG/5ML\nTDS (ML)",
    "MAXOLON\n5MG/5ML\nTDS (ML)",
  ],
  rows: AGE_WT.map(({ age, weight }, i) => {
    const d: (string | null)[][] = [
      // VENTOLIN 2MG: 6MTH-12
      [null,"1.5","1.5","2.5","2.5","2.5","3.5","3.5","3.5","5","5","5","7.5","7.5","10"],
      // VENTOLIN NEB: all
      ["0.15","0.2","0.25","0.25","0.25","0.5","0.5","0.5","0.5","0.75","0.75","0.75","1","1","1"],
      // BRICANYL: 6MTH-12
      [null,"2.5","2.5","2.5","2.5","2.5","5","5","5","5","5","5","5","5","5"],
      // KETOTIFEN: 6MTH-12
      [null,"2.5","2.5","2.5","2.5","2.5","5","5","5","5","5","5","5","5","5"],
      // PRED 3MG: all
      ["2.5","2.5","2.5","2.5","5","5","5","7.5","7.5","7.5","10","10","10","10","10"],
      // DIMENATE: 1-12
      [null,null,null,"2.5","2.5","2.5","5","5","5","5","10","10","10","10","10"],
      // MAXOLON: all
      ["1 BD","1 BD","1 BD","1","1","2","2","2.5","2.5","2.5","2.5","5","5","5","5"],
    ];
    return {
      age,
      weight,
      doses: d.map(col => col[i] ?? null),
    };
  }),
};

// tbl[34]: ABDOMINAL COLIC | DIARRHOEA | CONSTIPATION | DYSURIA
// Columns: BUSCOPAN 5MG/5ML TDS(ML), COLIMIX TDS(ML), DEBRIDAT TDS(ML), KAOLIN QDS(ML),
//          LACTEOL FORT SACHET/TAB BD, LOPER-AMIDE TDS(ML), LACTULOSE TDS(ML), LIQUID PARAFFIN TDS(ML), POT CITRATE TDS(ML)
export const tbl34: PaediatricTable = {
  id: "tbl34",
  categoryHeader: [
    { label: "", colspan: 2 },
    { label: "ABDOMINAL COLIC", colspan: 3 },
    { label: "DIARRHOEA", colspan: 3 },
    { label: "CONSTIPATION", colspan: 2 },
    { label: "DYSURIA", colspan: 1 },
  ],
  columns: [
    "BUSCOPAN\n5MG/5ML\nTDS (ML)",
    "COLIMIX\nTDS(ML)",
    "DEBRIDAT\nTDS (ML)",
    "KAOLIN\nQDS(ML)",
    "LACTEOL FORT\nSACHET/TAB BD",
    "LOPER-AMIDE\nTDS (ML)",
    "LACTULOSE\nTDS (ML)",
    "LIQUID PARAFFIN\nTDS(ML)",
    "POT CITRATE\nTDS(ML)",
  ],
  rows: AGE_WT.map(({ age, weight }, i) => {
    const d: (string | null)[][] = [
      // BUSCOPAN: all
      ["2.5","2.5","2.5","2.5","5","5","5","5","10","10","10","10","10","10","10"],
      // COLIMIX: all
      ["2.5","2.5","2.5","2.5","5","5","5","5","5","5","10","10","10","10","10"],
      // DEBRIDAT: all (9MTH is 5 BD)
      ["2.5","2.5","5 BD","5","5","5","5","5","10","10","10","10","10","10","10"],
      // KAOLIN: 6MTH-12
      [null,"2.5","2.5","5","5","10","10","10","10","10","10","10","10","10","10"],
      // LACTEOL: all (always 2)
      ["2","2","2","2","2","2","2","2","2","2","2","2","2","2","2"],
      // LOPER-AMIDE: 5-12
      [null,null,null,null,null,null,"5","5","5","5","5","5","10","10","10"],
      // LACTULOSE: all (BD suffix)
      ["2.5 BD","2.5 BD","2.5 BD","5 BD","5 BD","5 BD","5 BD","5 BD","10 BD","10 BD","10 BD","10 BD","10 BD","10","10"],
      // LIQUID PARAFFIN: 3-12
      [null,null,null,null,null,"2.5","2.5","2.5","5","5","5","5","5","10","10"],
      // POT CITRATE: all
      ["2.5","2.5","2.5","2.5","5","5","5","5","10","10","10","10","10","10","10"],
    ];
    return {
      age,
      weight,
      doses: d.map(col => col[i] ?? null),
    };
  }),
};

// tbl[35]: ANTIBIOTICS
// Columns: AMOXIL 125MG/5ML TDS(ML), AMOXIL 250MG/5ML TDS(ML), AUGMENTIN 228MG/5ML BD(ML),
//          CURAM 312.5MG/5ML TDS(ML), CEPHALEXIN 125MG/5ML TDS(ML), CEPHALEXIN 250MG/5ML TDS(ML), CEFACLOR 125MG/5ML TDS(ML)
export const tbl35: PaediatricTable = {
  id: "tbl35",
  categoryHeader: [
    { label: "", colspan: 2 },
    { label: "ANTIBIOTICS", colspan: 7 },
  ],
  columns: [
    "AMOXIL\n125MG/5ML\nTDS(ML)",
    "AMOXIL\n250MG/5ML\nTDS(ML)",
    "AUGMENTIN\n228MG/5ML\nBD (ML)",
    "CURAM\n312.5MG/5ML\nTDS (ML)",
    "CEPHALEXIN\n125MG/5ML\nTDS (ML)",
    "CEPHALEXIN\n250MG/5ML\nTDS(ML)",
    "CEFACLOR\n125MG/5ML\nTDS(ML)",
  ],
  rows: AGE_WT.map(({ age, weight }, i) => {
    const d: (string | null)[][] = [
      // AMOXIL 125: all
      ["2.5","2.5","5","5","5","7.5","7.5","7.5","10","10","10","10","10","10","10"],
      // AMOXIL 250: 9MTH-12
      [null,null,"2.5","2.5","2.5","3.5","3.5","3.5","5","5","5","5","5","5","5"],
      // AUGMENTIN 228: all
      ["1.5","1.5","2.5","2.5","5","5","5","5","5","10","10","10","10","10","10"],
      // CURAM 312.5: 9MTH-12
      [null,null,"1.25","1.25","2.5","2.5","2.5","2.5","2.5","5","5","5","5","5","5"],
      // CEPHALEXIN 125: all
      ["2.5","2.5","2.5","5","5","5","5","10","10","10","10","10","10","10","10"],
      // CEPHALEXIN 250: all
      ["1.25","1.25","1.25","2.5","2.5","2.5","2.5","5","5","5","5","5","5","5","5"],
      // CEFACLOR 125: all
      ["1.5","1.5","1.5","2.5","2.5","2.5","5","5","5","5","5","7.5","7.5","10","10"],
    ];
    return {
      age,
      weight,
      doses: d.map(col => col[i] ?? null),
    };
  }),
};

// tbl[36]: ANTIBIOTICS | ANTIVIRAL
// Columns: ERYTHROMYCIN 200MG/5ML QDS(ML), KLACID 125MG/5ML BD(ML), KLACID 250MG/5ML BD(ML),
//          ZITHROMAX 200MG/5ML OM(ML), BACTRIM BD(ML), ISOPRINOSINE QDS
export const tbl36: PaediatricTable = {
  id: "tbl36",
  categoryHeader: [
    { label: "", colspan: 2 },
    { label: "ANTIBIOTICS", colspan: 5 },
    { label: "ANTIVIRAL", colspan: 1 },
  ],
  columns: [
    "ERYTHROMYCIN\n200MG/5ML\nQDS (ML)",
    "KLACID\n125MG/5ML\nBD (ML)",
    "KLACID\n250MG/5ML\nBD (ML)",
    "ZITHROMAX\n200MG/5ML\nOM (ML)",
    "BACTRIM\nBD(ML)",
    "ISOPRINOSINE\nQDS",
  ],
  rows: AGE_WT.map(({ age, weight }, i) => {
    const d: (string | null)[][] = [
      // ERYTHROMYCIN 200: all
      ["1","1","1","2.5","2.5","2.5","5","5","5","5","5","5","7.5","7.5","7.5"],
      // KLACID 125: 1-12
      [null,null,null,"2.5","2.5","5","5","5","5","7.5","7.5","7.5","10","10","10"],
      // KLACID 250: 1-12
      [null,null,null,"1.25","1.25","2.5","2.5","2.5","2.5","3.5","3.5","3.5","5","5","5"],
      // ZITHROMAX: all
      ["1.5","2","2.5","2.5","3.5","3.5","4.5","4.5","5","5","6","6","7.5","7.5","10"],
      // BACTRIM: all
      ["2.5","2.5","2.5","2.5","2.5","2.5","5","5","5","5","5","10","10","10","10"],
      // ISOPRINOSINE: all
      ["2.5","2.5","2.5","5","5","5","5","5","7.5","7.5","7.5","7.5","7.5","10","10"],
    ];
    return {
      age,
      weight,
      doses: d.map(col => col[i] ?? null),
    };
  }),
};

export const paediatricTables: PaediatricTable[] = [tbl31, tbl32, tbl33, tbl34, tbl35, tbl36];
