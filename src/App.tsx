import React, { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { medicalCategories } from './data/medicalData';
import { cpgDocuments } from './data/cpgData';
import { MedicalCategory, CpgDocument } from './types';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { ResultDetail } from './components/ResultDetail';
import { MedicationTable } from './components/MedicationTable';
import { PaediatricDrugTable } from './components/PaediatricDrugTable';
import { CpgDetail } from './components/CpgDetail';
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

// A flat searchable record for CPG content
type CpgFlatEntry = {
  id: string;
  cpgId: string;
  condition: string;
  sectionHeading: string;
  content: string;
};

// Fuse.js config for drug entries
const fuseOptions: Fuse.IFuseOptions<FlatEntry> = {
  keys: ['brand', 'generic', 'dosage', 'remarks'],
  threshold: 0.35,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
  shouldSort: true,
};

// Fuse.js config for CPG content
const cpgFuseOptions: Fuse.IFuseOptions<CpgFlatEntry> = {
  keys: ['condition', 'sectionHeading', 'content'],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
  shouldSort: true,
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<FlatEntry | null>(null);
  const [selectedCpg, setSelectedCpg] = useState<CpgDocument | null>(null);

  // Flatten all medication entries
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

  // Flatten all CPG content for search
  const allCpgEntries: CpgFlatEntry[] = useMemo(() => {
    const entries: CpgFlatEntry[] = [];
    cpgDocuments.forEach((doc) => {
      doc.sections.forEach((section, si) => {
        // Extract all text from this section's blocks
        const texts: string[] = [];
        section.blocks.forEach((block) => {
          if (block.type === 'text') {
            texts.push(block.content);
          } else if (block.type === 'list') {
            const flattenItems = (items: typeof block.items): string[] => {
              const out: string[] = [];
              items.forEach((item) => {
                out.push(item.text);
                if (item.children) out.push(...flattenItems(item.children));
              });
              return out;
            };
            texts.push(...flattenItems(block.items));
          } else if (block.type === 'table') {
            block.rows.forEach((row) => {
              texts.push(row.cells.join(' '));
            });
          }
        });
        entries.push({
          id: `${doc.id}__${si}`,
          cpgId: doc.id,
          condition: doc.condition,
          sectionHeading: section.heading,
          content: texts.join(' '),
        });
      });
    });
    return entries;
  }, []);

  // Entries filtered by selected category
  const categoryEntries = useMemo(() => {
    if (selectedCategory === 'all') return allEntries;
    if (selectedSubCategory) {
      return allEntries.filter(
        (e) => e.categoryId === selectedCategory && e.subCategory === selectedSubCategory
      );
    }
    return allEntries.filter((e) => e.categoryId === selectedCategory);
  }, [allEntries, selectedCategory, selectedSubCategory]);

  const fuse = useMemo(
    () => new Fuse(categoryEntries, fuseOptions),
    [categoryEntries]
  );

  const cpgFuse = useMemo(
    () => new Fuse(allCpgEntries, cpgFuseOptions),
    [allCpgEntries]
  );

  // Search results — drug entries
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const isCpgCategory = selectedCategory.startsWith('cpg-');
    if (isCpgCategory) return [];
    return fuse.search(searchQuery.trim()).map((r) => ({
      ...r.item,
      score: r.score ?? 0,
      matches: r.matches,
    }));
  }, [fuse, searchQuery, selectedCategory]);

  // Search results — CPG content
  const cpgSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const pool = selectedCategory === 'all'
      ? allCpgEntries
      : selectedCategory.startsWith('cpg-')
        ? allCpgEntries.filter((e) => e.cpgId === selectedCategory)
        : [];
    if (pool.length === 0) return [];
    const f = selectedCategory === 'all'
      ? cpgFuse
      : new Fuse(pool, cpgFuseOptions);
    return f.search(searchQuery.trim()).map((r) => r.item);
  }, [cpgFuse, allCpgEntries, searchQuery, selectedCategory]);

  // Sidebar categories
  const filteredCategories: MedicalCategory[] = useMemo(() => {
    if (selectedCategory === 'all') return medicalCategories;
    return medicalCategories.filter((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  // Entry counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    medicalCategories.forEach((cat) => {
      counts[cat.id] = cat.subCategories.reduce(
        (sum, sub) => sum + sub.entries.length, 0
      );
    });
    cpgDocuments.forEach((doc) => {
      counts[doc.id] = doc.sections.length;
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
    setSelectedCpg(null);
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory('');
    setSearchQuery('');
    setSelectedEntry(null);
    // If CPG category selected, auto-open that document
    if (categoryId.startsWith('cpg-')) {
      const doc = cpgDocuments.find((d) => d.id === categoryId) ?? null;
      setSelectedCpg(doc);
    } else {
      setSelectedCpg(null);
    }
  }, []);

  const handleSubCategoryChange = useCallback((categoryId: string, subCategory: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategory);
    setSearchQuery('');
    setSelectedEntry(null);
    setSelectedCpg(null);
  }, []);

  const isCpgCategory = selectedCategory.startsWith('cpg-');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🍒 Cherry's Medical Knowledge</h1>
        <p className="app-subtitle">
          Search medications, clinical guidelines, conditions, or drug names
        </p>
      </header>

      <main className="app-main">
        <aside className="sidebar">
          {/* Locum Guide categories */}
          <CategoryFilter
            categories={filteredCategories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            onCategoryChange={handleCategoryChange}
            onSubCategoryChange={handleSubCategoryChange}
            categoryCounts={categoryCounts}
            totalEntries={totalEntries}
          />

          {/* NUP CPG section */}
          <div className="cpg-sidebar-section">
            <h2>NUP Clinical Practice Guidelines</h2>
            <ul className="category-list">
              {cpgDocuments.map((doc) => (
                <li key={doc.id}>
                  <button
                    className={`category-button ${selectedCategory === doc.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(doc.id)}
                  >
                    {doc.condition}
                    <span className="count">{doc.sections.length} sections</span>
                  </button>
                  {selectedCategory === doc.id && (
                    <ul className="subcategory-list">
                      {doc.sections.map((section, i) => (
                        <li key={i}>
                          <button
                            className="subcategory-button"
                            onClick={() => handleCategoryChange(doc.id)}
                          >
                            {section.heading}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="content">
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search medications, conditions, guidelines, dosages..."
            resultCount={searchResults.length + cpgSearchResults.length}
          />

          <div className="results-container">
            {selectedEntry ? (
              <ResultDetail
                entry={selectedEntry}
                onClose={() => setSelectedEntry(null)}
              />
            ) : searchQuery.trim() && isCpgCategory ? (
              /* CPG search results */
              cpgSearchResults.length > 0 ? (
                <div>
                  <p className="cpg-search-hint">
                    {cpgSearchResults.length} section{cpgSearchResults.length !== 1 ? 's' : ''} matched in <strong>{selectedCpg?.condition ?? 'CPG'}</strong>
                  </p>
                  {cpgSearchResults.map((r) => {
                    const doc = cpgDocuments.find((d) => d.id === r.cpgId);
                    return doc ? (
                      <div key={r.id} className="cpg-search-result" onClick={() => { setSelectedCpg(doc); setSearchQuery(''); }}>
                        <div className="cpg-search-result-condition">{doc.condition}</div>
                        <div className="cpg-search-result-heading">{r.sectionHeading}</div>
                        <div className="cpg-search-result-snippet">{r.content.substring(0, 200)}…</div>
                      </div>
                    ) : null;
                  })}
                </div>
              ) : (
                <div className="empty-state">
                  <h3>No results found in this CPG</h3>
                  <p>Try different keywords or browse the sections in the sidebar.</p>
                </div>
              )
            ) : searchQuery.trim() && !isCpgCategory ? (
              /* Drug table search results */
              <SearchResults
                results={searchResults}
                searchQuery={searchQuery}
                onResultClick={setSelectedEntry}
              />
            ) : isCpgCategory && selectedCpg ? (
              /* Full CPG document view */
              <CpgDetail doc={selectedCpg} />
            ) : selectedCategory === 'paediatric-drugs' && !searchQuery.trim() ? (
              <PaediatricDrugTable />
            ) : selectedSubCategory ? (
              <MedicationTable
                subCategoryName={selectedSubCategory}
                categoryName={
                  medicalCategories.find((c) => c.id === selectedCategory)?.name ?? ''
                }
                entries={categoryEntries}
                onEntryClick={setSelectedEntry}
              />
            ) : (
              <SearchResults
                results={[]}
                searchQuery=""
                onResultClick={setSelectedEntry}
              />
            )}
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Cherry's Medical Knowledge — Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}

export default App;
