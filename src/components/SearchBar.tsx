import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  resultCount: number;
}

/**
 * Search bar component with icon and results count.
 * Uses client-side fuzzy search (Fuse.js) — no backend required.
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  resultCount,
}) => {
  return (
    <div className="search-container">
      <span className="search-icon" aria-hidden="true">
        🔍
      </span>
      <input
        type="search"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search medications"
      />
      {value.trim() && (
        <div className="search-results-count">
          {resultCount === 0
            ? 'No results found. Try different keywords.'
            : `${resultCount} result${resultCount > 1 ? 's' : ''} found`}
        </div>
      )}
    </div>
  );
};
