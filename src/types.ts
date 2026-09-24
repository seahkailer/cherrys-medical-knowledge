/**
 * Data types for the Medical Knowledge Search application.
 *
 * The source document (LOCUM_GUIDE.docx) is organized into 15 main categories
 * based on sickness type / body system. Within each category are sub-categories
 * (e.g., "Anti-hypertensives" under "Cardiovascular System") and tables with
 * medication information.
 *
 * Table columns: Brand Name, Generic Constituents (Pregnancy Safety), Dosage, Remarks
 */

/** The four table headers used in the source document */
export type TableColumn = {
  /** Column display name, e.g. "Brand Name" */
  header: string;
  /** Column key, e.g. "brand", "generic", "dosage", "remarks" */
  key: string;
};

/** A single medication row from a table */
export type MedicationEntry = {
  /** Brand name(s), e.g. "Liziban, Coversyl" */
  brand: string;
  /** Generic name + pregnancy safety, e.g. "Lisinopril (B)" */
  generic: string;
  /** Dosage information, e.g. "10-40mg daily" */
  dosage: string;
  /** Additional remarks, e.g. "Monitor creatinine, K+" */
  remarks: string;
};

/**
 * A sub-category within a main category.
 *
 * In the document, these appear as bold section headers spanning all table columns,
 * e.g. "Beta-Blockers", "ACE Inhibitors", "Diuretics" under "Cardiovascular System".
 */
export type SubCategory = {
  /** Sub-category name, e.g. "Beta-Blockers" */
  name: string;
  /** All medication entries belonging to this sub-category */
  entries: MedicationEntry[];
};

/**
 * A main sickness category based on the document's table of contents.
 */
export type MedicalCategory = {
  /** Unique identifier, e.g. "cardiovascular" */
  id: string;
  /** Display name, e.g. "Cardiovascular System" */
  name: string;
  /** Page number in the original document */
  page: number;
  /** Sub-categories within this system */
  subCategories: SubCategory[];
};

/** A search result entry with relevance metadata */
export type SearchResult = {
  /** Unique result ID */
  id: string;
  /** Category this result belongs to */
  categoryId: string;
  /** Category display name */
  category: string;
  /** Sub-category name (empty if at category level) */
  subCategory: string;
  /** The column that matched, e.g. "brand", "generic", "dosage", "remarks" */
  field: string;
  /** Human-readable field label */
  fieldName: string;
  /** The matched text snippet */
  text: string;
  /** Full medication entry for display */
  entry: MedicationEntry;
  /** Relevance score (0-1) from Fuse.js */
  score: number;
};

/** The table column definitions used throughout the document */
export const TABLE_COLUMNS: TableColumn[] = [
  { header: 'Brand Name', key: 'brand' },
  { header: 'Generic Constituents\n(Pregnancy Safety)', key: 'generic' },
  { header: 'Dosage', key: 'dosage' },
  { header: 'Remarks', key: 'remarks' },
];
