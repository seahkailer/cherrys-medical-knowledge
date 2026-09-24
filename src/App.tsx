import React, { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { SearchResult, TABLE_COLUMNS } from './types';
import { medicalCategories } from './data/medicalData';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { ResultDetail } from './components/ResultDetail';
import './App.css';

// Fuse.js configuration for fuzzy searching through medication entries
const fuseOptions = {
  keys: [
    { path: 'entry.brand', weight: 0.35 },
    { path: 'entry.generic', weight: 0.30 },
    { path: 'entry.dosage', weight: 0.20 },
    { path: 'entry.remarks', weight: 0.15 },
  ],
  threshold: 0.35,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  should_Sort: true,
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);

  // Flatten all medication entries into a searchable dataset
  const allEntries: SearchResult[] = useMemo(() => {
    const entries: SearchResult[] = [];

    medicalCategories.forEach((cat) => {
      cat.subCategories.forEach((sub) => {
        sub.entries.forEach((entry, entryIdx) => {
          const field = TABLE_COLUMNS.find((c) => c);
          entries.push({
            id: `${cat.id}-${sub.name}-${entryIdx}`,
            categoryId: cat.id,
            category: cat.name,
            subCategory: sub.name,
            field: 'all',
            fieldName: 'All Fields',
            text: `${entry.brand} ${entry.generic} ${entry.dosage} ${entry.remarks}`,
            entry,
            score: 0,
          });
        });
      });
    });

    return entries;
  }, []);

  // Initialize Fuse instance
  const fuse = useMemo(() => new Fuse(allEntries, fuseOptions), [allEntries]);

  // Filter categories based on selected category
  const filteredCategories = useMemo(() => {
    if (selectedCategory === 'all') {
      return medicalCategories;
    }
    return medicalCategories.filter((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  // Perform search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const results = fuse.search(searchQuery.trim());

    return results.map((r) => {
      const item = r.item;
      // Determine which field matched best by finding the highest-weighted match
      let bestField = 'all';
      let bestFieldName = 'All Fields';

      if (r.matches) {
        let bestMatchScore = 0;
        for (const match of r.matches) {
          const fieldName = match.key?.split('.')[0];
          if (fieldName && match.score && match.score > bestMatchScore) {
            bestMatchScore = match.score;
            bestField = match.key || 'all';
            // Find the human-readable name
            const col = TABLE_COLUMNS.find((c) => c.key === fieldName);
            bestFieldName = col?.header || 'All Fields';
          }
        }
      }

      return {
        ...item,
        score: r.score || 0,
        field: bestField,
        fieldName: bestFieldName,
      };
    });
  }, [fuse, searchQuery]);

  // Handle search input change
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSelectedResult(null);
    }
  }, []);

  // Handle category selection
  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
    setSelectedResult(null);
  }, []);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    setSelectedResult(result);
  }, []);

  // Handle closing detail view
  const handleCloseDetail = useCallback(() => {
    setSelectedResult(null);
  }, []);

  // Get counts for the sidebar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    medicalCategories.forEach((cat) => {
      counts[cat.id] = cat.subCategories.reduce(
        (sum, sub) => sum + sub.entries.length,
        0
      );
    });
    return counts;
  }, []);

  const totalEntries = useMemo(
    () => medicalCategories.reduce((sum, cat) => sum + categoryCounts[cat.id], 0),
    [categoryCounts]
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Medical Knowledge Search</h1>
        <p className="app-subtitle">
          Search medications by sickness type, condition, or drug name
        </p>
        <p className="doc-meta">
          Source: LOCUM_GUIDE.docx • {medicalCategories.length} categories • {totalEntries} medication entries
        </p>
      </header>

      <main className="app-main">
        {/* Sidebar: Category Filter */}
        <aside className="sidebar">
          <CategoryFilter
            categories={filteredCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categoryCounts={categoryCounts}
            totalEntries={totalEntries}
          />
        </aside>

        {/* Main Content: Search + Results */}
        <div className="content">
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search medications, conditions, dosages..."
            resultCount={searchResults.length}
          />

          <div className="results-container">
            {selectedResult ? (
              <ResultDetail result={selectedResult} onClose={handleCloseDetail} />
            ) : (
              <SearchResults
                results={searchResults}
                searchQuery={searchQuery}
                onResultClick={handleResultClick}
              />
            )}
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Medical Knowledge Search — Static front-end hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}

export default App;
