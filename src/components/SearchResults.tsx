import React from 'react';
import { FlatEntry } from '../App';

interface SearchResultsProps {
  results: (FlatEntry & { score: number; matches?: readonly Fuse.FuseResultMatch[] })[];
  searchQuery: string;
  onResultClick: (entry: FlatEntry) => void;
}

/**
 * Displays search results as a list of medication entries.
 * Highlights matched text. Shows empty state when no results found.
 */
const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  searchQuery,
  onResultClick,
}) => {
  if (!searchQuery.trim()) {
    return (
      <div className="empty-state">
        <h3>🔍 Search your medical knowledge</h3>
        <p>Type a drug name, condition, or category to find medication information.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
          Examples: "atenolol", "diabetes", "asthma", "paediatric"
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="empty-state">
        <h3>No results found</h3>
        <p>Try different keywords or select a different category from the sidebar.</p>
      </div>
    );
  }

  return (
    <ul className="results-list">
      {results.map((result) => (
        <li
          key={result.id}
          className="result-item"
          onClick={() => onResultClick(result)}
        >
          <div className="result-header">
            <div>
              <div className="result-brand">
                {highlight(result.brand, searchQuery)}
              </div>
              <div className="result-generic">
                {highlight(result.generic, searchQuery)}
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <span className="category-badge">{result.category}</span>
              <div className="subcategory-badge">{result.subCategory}</div>
            </div>
          </div>

          <div className="result-dosage">
            <strong>Dosage:</strong> {highlight(result.dosage, searchQuery)}
          </div>

          {result.remarks && (
            <div className="result-remarks">
              <strong>Remarks:</strong> {highlight(result.remarks, searchQuery)}
            </div>
          )}

          <div className="score-badge">
            Relevance: {Math.round((1 - result.score) * 100)}%
          </div>
        </li>
      ))}
    </ul>
  );
};

/** Highlights matching text with a yellow mark */
function highlight(text: string, query: string): JSX.Element {
  if (!query.trim()) return <>{text}</>;
  try {
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="highlight">{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  } catch {
    return <>{text}</>;
  }
}

export { SearchResults };
