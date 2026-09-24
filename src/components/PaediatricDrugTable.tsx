import React from 'react';
import { paediatricTables } from '../data/paediatricData';
import type { PaediatricTable } from '../data/paediatricData';

/** Single paediatric dosage grid matching the original document layout */
const SingleTable: React.FC<{ table: PaediatricTable }> = ({ table }) => {
  // Build category header spans (skip the first 2-column empty cell)
  const catHeaders = table.categoryHeader.filter(h => h.label !== '');

  return (
    <div className="paed-table-wrapper">
      <div className="table-responsive">
        <table className="paed-table">
          <thead>
            {/* Row 1: category group headers */}
            <tr>
              <th className="paed-th paed-th-age" rowSpan={2}>AGE</th>
              <th className="paed-th paed-th-wt" rowSpan={2}>WT<br/>(kg)</th>
              {catHeaders.map((h, i) => (
                <th key={i} colSpan={h.colspan} className="paed-th paed-th-cat">
                  {h.label}
                </th>
              ))}
            </tr>
            {/* Row 2: drug column headers */}
            <tr>
              {table.columns.map((col, i) => (
                <th key={i} className="paed-th paed-th-drug">
                  {col.split('\n').map((part, j) => (
                    <React.Fragment key={j}>{part}{j < col.split('\n').length - 1 && <br />}</React.Fragment>
                  ))}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.age} className="paed-row">
                <td className="paed-td paed-td-age">{row.age}</td>
                <td className="paed-td paed-td-wt">{row.weight}</td>
                {row.doses.map((dose, i) => (
                  <td key={i} className={`paed-td paed-td-dose${dose === null || dose === '-' ? ' paed-dash' : ''}`}>
                    {dose === null ? '-' : dose}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/** Renders all 6 paediatric dosage tables with their section headings */
const PaediatricDrugTable: React.FC = () => {
  const sectionLabels: Record<string, string> = {
    tbl31: 'Table 1 — Fever & Pain / Cough',
    tbl32: 'Table 2 — Flu & Allergy / Mucolytic',
    tbl33: 'Table 3 — Asthma / Vomiting',
    tbl34: 'Table 4 — Abdominal Colic / Diarrhoea / Constipation / Dysuria',
    tbl35: 'Table 5 — Antibiotics',
    tbl36: 'Table 6 — Antibiotics / Antiviral',
  };

  return (
    <div className="paed-section">
      <div className="paed-note">
        <strong>Note:</strong> All doses are in mL unless stated otherwise. Age is in years unless prefixed with MTH (months).
        Doses marked <span className="paed-dash-inline">—</span> are not recommended for that age group.
      </div>
      {paediatricTables.map((tbl) => (
        <div key={tbl.id} className="paed-table-section">
          <h3 className="paed-table-title">{sectionLabels[tbl.id]}</h3>
          <SingleTable table={tbl} />
        </div>
      ))}
    </div>
  );
};

export { PaediatricDrugTable };
