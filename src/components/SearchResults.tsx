import React from 'react';
import { SearchResult, TABLE_COLUMNS } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
  searchQuery: string;
  onResultClick: (result: SearchResult) => void;
}

/**
 * Displays search results as a list of medication entries.
 * Highlights matched text in search results.
 * Shows an empty state when no results are found.
 */
export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  searchQuery,
  onResultClick,
}) => {
  if (!searchQuery.trim()) {
    return (
      <div className="empty-state">
        <h3>Enter a search term</h3>
        <p>Search medications by drug name, condition, dosage, or category.</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="empty-state">
        <h3>No results found</h3>
        <p>Try searching with different keywords or select a different category.</p>
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
                {highlightText(result.entry.brand, searchQuery)}
              </div>
              <div className="result-generic">
                {highlightText(result.entry.generic, searchQuery)}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="category-badge">{result.category}</span>
              <div className="subcategory-badge">{result.subCategory}</div>
            </div>
          </div>

          <div className="result-dosage">
            <strong>Dosage:</strong> {highlightText(result.entry.dosage, searchQuery)}
          </div>

          {result.entry.remarks && (
            <div className="result-remarks">
              <strong>Remarks:</strong> {highlightText(result.entry.remarks, searchQuery)}
            </div>
          )}

          <div className="score-badge">
            Relevance: {(result.score * 100).toFixed(0)}%
          </div>
        </li>
      ))}
    </ul>
  );
};

/**
 * Highlights search terms in text by wrapping matching substrings in <mark> tags.
 */
function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <>{text}</>;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts
        .filter((part) => part.length > 0)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="highlight">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </>
  );
}
