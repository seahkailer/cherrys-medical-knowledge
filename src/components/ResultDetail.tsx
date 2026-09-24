import React from 'react';
import { SearchResult } from '../types';

interface ResultDetailProps {
  result: SearchResult;
  onClose: () => void;
}

/**
 * Detailed view of a single medication entry.
 * Shows all fields (Brand Name, Generic, Dosage, Remarks) in a structured layout.
 */
export const ResultDetail: React.FC<ResultDetailProps> = ({ result, onClose }) => {
  const { entry, category, subCategory } = result;

  return (
    <div className="detail-overlay">
      <div className="detail-modal">
        <button className="close-button" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="detail-header">
          <h2>{entry.brand}</h2>
          <div className="detail-meta">
            <span>Category: {category}</span>
            <span>•</span>
            <span>Sub-category: {subCategory}</span>
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

          <div className="detail-section">
            <div className="detail-section-label">Table Column Reference</div>
            <div className="detail-section-value" style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Brand Name | Generic Constituents (Pregnancy Safety) | Dosage | Remarks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
