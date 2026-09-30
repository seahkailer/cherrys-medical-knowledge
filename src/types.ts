/**
 * Data types for the Medical Knowledge Search application.
 *
 * Two document types are supported:
 * 1. LOCUM_GUIDE.docx — drug tables with Brand / Generic / Dosage / Remarks columns
 * 2. NUP CPG PDFs — full clinical practice guidelines with free-form sections
 */

// ---------------------------------------------------------------------------
// Locum Guide — drug table types
// ---------------------------------------------------------------------------

/** The four table headers used in the locum guide */
export type TableColumn = {
  header: string;
  key: string;
};

/** A single medication row from a locum guide table */
export type MedicationEntry = {
  brand: string;
  generic: string;
  dosage: string;
  remarks: string;
};

/** A sub-category within a locum guide category (e.g. "Beta-Blockers") */
export type SubCategory = {
  name: string;
  entries: MedicationEntry[];
};

/** A main locum guide category (e.g. "Cardiovascular System") */
export type MedicalCategory = {
  id: string;
  name: string;
  page: number;
  subCategories: SubCategory[];
};

// ---------------------------------------------------------------------------
// NUP CPG — clinical practice guideline types
// ---------------------------------------------------------------------------

/**
 * A single item in a CPG section list.
 * Can be plain text or a nested sub-list.
 */
export type CpgListItem = {
  text: string;
  /** Optional nested items under this bullet */
  children?: CpgListItem[];
};

/**
 * A table row inside a CPG section.
 * Supports two shapes:
 *  - { cells: string[] }  — positional (new docs 07+)
 *  - Record<string, string> — header-keyed (legacy docs 02–06)
 */
export type CpgTableRow = { cells: string[] } | Record<string, string>;

/**
 * A block of content inside a CPG section.
 * type="text"  — a plain paragraph
 * type="list"  — a bullet/numbered list
 * type="table" — a structured table
 */
export type CpgBlock =
  | { type: 'text'; content: string }
  | { type: 'list'; items: CpgListItem[] }
  | { type: 'table'; headers: string[]; rows: CpgTableRow[] };

/**
 * A named section within a CPG document (e.g. "Management", "When to Refer").
 * Each section has an ordered array of content blocks.
 */
export type CpgSection = {
  /** Section heading as it appears in the document */
  heading: string;
  blocks: CpgBlock[];
};

/**
 * A complete NUP CPG document for one condition.
 * The sidebar shows this as a category; subsection name is always "NUP CPG".
 */
export type CpgDocument = {
  id: string;
  /** Full condition name, e.g. "Allergic Conjunctivitis" */
  condition: string;
  /** Source filename */
  source: string;
  /** Review date from document */
  reviewDate: string;
  /** Specialist advisors credited in the document */
  advisors: string;
  /** Ordered sections from the document */
  sections: CpgSection[];
};

// ---------------------------------------------------------------------------
// Shared search types
// ---------------------------------------------------------------------------

/** A search result entry with relevance metadata */
export type SearchResult = {
  id: string;
  categoryId: string;
  category: string;
  subCategory: string;
  field: string;
  fieldName: string;
  text: string;
  entry: MedicationEntry;
  score: number;
};

/** The table column definitions used throughout the locum guide */
export const TABLE_COLUMNS: TableColumn[] = [
  { header: 'Brand Name', key: 'brand' },
  { header: 'Generic Constituents\n(Pregnancy Safety)', key: 'generic' },
  { header: 'Dosage', key: 'dosage' },
  { header: 'Remarks', key: 'remarks' },
];
