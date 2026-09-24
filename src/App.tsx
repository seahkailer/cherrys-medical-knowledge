import React, { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { medicalCategories } from './data/medicalData';
import { MedicationEntry, MedicalCategory } from './types';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { ResultDetail } from './components/ResultDetail';
import './App.css';

// A flat searchable record — one per medication entry
export type FlatEntry = {
  id: string;
  categoryId: string;
  category: string;
  subCategory: string;
  brand: string;
  generic: string;
  dosage: string;
  remarks: string;
};

// Fuse.js config — keys are top-level strings (no nesting)
const fuseOptions: Fuse.IFuseOptions<FlatEntry> = {
  keys: ['brand', 'generic', 'dosage', 'remarks'],
  threshold: 0.35,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  shouldSort: true,
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<FlatEntry | null>(null);

  // Flatten all medication entries into a single searchable list
  const allEntries: FlatEntry[] = useMemo(() => {
    const entries: FlatEntry[] = [];
    medicalCategories.forEach((cat) => {
      cat.subCategories.forEach((sub) => {
        sub.entries.forEach((entry, idx) => {
          entries.push({
            id: `${cat.id}__${sub.name}__${idx}`,
            categoryId: cat.id,
            category: cat.name,
            subCategory: sub.name,
            brand: entry.brand,
            generic: entry.generic,
            dosage: entry.dosage,
            remarks: entry.remarks,
          });
        });
      });
    });
    return entries;
  }, []);

  // Entries filtered by selected category
  const categoryEntries = useMemo(() => {
    if (selectedCategory === 'all') return allEntries;
    return allEntries.filter((e) => e.categoryId === selectedCategory);
  }, [allEntries, selectedCategory]);

  // Fuse instance — recreated when category changes
  const fuse = useMemo(
    () => new Fuse(categoryEntries, fuseOptions),
    [categoryEntries]
  );

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return fuse.search(searchQuery.trim()).map((r) => ({
      ...r.item,
      score: r.score ?? 0,
      matches: r.matches,
    }));
  }, [fuse, searchQuery]);

  // Categories for the sidebar
  const filteredCategories: MedicalCategory[] = useMemo(() => {
    if (selectedCategory === 'all') return medicalCategories;
    return medicalCategories.filter((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  // Entry counts per category
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
    () => Object.values(categoryCounts).reduce((a, b) => a + b, 0),
    [categoryCounts]
  );

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSelectedEntry(null);
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
    setSelectedEntry(null);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🏥 Medical Knowledge Search</h1>
        <p className="app-subtitle">
          Search medications by sickness type, condition, or drug name
        </p>
        <p className="doc-meta">
          Source: LOCUM_GUIDE.docx &nbsp;•&nbsp; {medicalCategories.length} categories &nbsp;•&nbsp; {totalEntries} entries
        </p>
      </header>

      <main className="app-main">
        <aside className="sidebar">
          <CategoryFilter
            categories={filteredCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categoryCounts={categoryCounts}
            totalEntries={totalEntries}
          />
        </aside>

        <div className="content">
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search medications, conditions, dosages..."
            resultCount={searchResults.length}
          />

          <div className="results-container">
            {selectedEntry ? (
              <ResultDetail
                entry={selectedEntry}
                onClose={() => setSelectedEntry(null)}
              />
            ) : (
              <SearchResults
                results={searchResults}
                searchQuery={searchQuery}
                onResultClick={setSelectedEntry}
              />
            )}
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Medical Knowledge Search — Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}

export default App;
