import React from 'react';
import { FlatEntry } from '../App';

interface MedicationTableProps {
  subCategoryName: string;
  categoryName: string;
  entries: FlatEntry[];
  onEntryClick: (entry: FlatEntry) => void;
}

/**
 * Displays a full medication table matching the original document layout:
 * Brand Name | Generic Constituents (Pregnancy Safety) | Dosage | Remarks
 */
const MedicationTable: React.FC<MedicationTableProps> = ({
  subCategoryName,
  categoryName,
  entries,
  onEntryClick,
}) => {
  return (
    <div className="medication-table-container">
      <div className="table-heading">
        <span className="table-category-badge">{categoryName}</span>
        <h2 className="table-title">{subCategoryName}</h2>
        <span className="table-count">{entries.length} medications</span>
      </div>

      <div className="table-responsive">
        <table className="medication-table">
          <thead>
            <tr>
              <th className="col-brand">Brand Name</th>
              <th className="col-generic">Generic Constituents<br /><span>(Pregnancy Safety)</span></th>
              <th className="col-dosage">Dosage</th>
              <th className="col-remarks">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.id}
                className="table-row"
                onClick={() => onEntryClick(entry)}
                title="Click for details"
              >
                <td className="col-brand">
                  <strong>{entry.brand}</strong>
                </td>
                <td className="col-generic">{entry.generic}</td>
                <td className="col-dosage">{entry.dosage}</td>
                <td className="col-remarks">{entry.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { MedicationTable };
