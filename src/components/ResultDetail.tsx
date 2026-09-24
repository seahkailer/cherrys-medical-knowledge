import React from 'react';
import { FlatEntry } from '../App';

interface ResultDetailProps {
  entry: FlatEntry;
  onClose: () => void;
}

/**
 * Detailed view of a single medication entry.
 * Shows all fields in a structured layout.
 */
const ResultDetail: React.FC<ResultDetailProps> = ({ entry, onClose }) => {
  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="detail-header">
          <h2>{entry.brand}</h2>
          <div className="detail-meta">
            <span>📂 {entry.category}</span>
            <span>•</span>
            <span>{entry.subCategory}</span>
          </div>
        </div>

        <div className="detail-body">
          <div className="detail-section">
            <div className="detail-section-label">Generic / Pregnancy Safety</div>
            <div className="detail-section-value">{entry.generic}</div>
          </div>

          <div className="detail-section">
            <div className="detail-section-label">Dosage</div>
            <div className="detail-section-value">{entry.dosage}</div>
          </div>

          <div className="detail-section">
            <div className="detail-section-label">Remarks & Clinical Notes</div>
            <div className="detail-section-value">{entry.remarks}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ResultDetail };
