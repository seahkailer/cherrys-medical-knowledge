import React from 'react';
import { MedicalCategory } from '../types';

interface CategoryFilterProps {
  categories: MedicalCategory[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  categoryCounts: Record<string, number>;
  totalEntries: number;
}

/**
 * Sidebar component that displays category filters based on sickness type.
 * Users can select a single category or "All" to see everything.
 * Each category shows a count of medication entries.
 */
export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  categoryCounts,
  totalEntries,
}) => {
  return (
    <div className="category-section">
      <h2>Sickness Categories</h2>
      <ul className="category-list">
        <li>
          <button
            className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            All Categories
            <span className="count">{totalEntries}</span>
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
              <span className="count">{categoryCounts[category.id]}</span>
            </button>
            {category.subCategories.map((sub) => (
              <div
                key={`${category.id}-${sub.name}`}
                className="subcategory-item"
                style={{
                  padding: '0.25rem 0.75rem 0.25rem 1.5rem',
                  fontSize: '0.8rem',
                  color: selectedCategory === category.id ? 'rgba(255,255,255,0.8)' : '#64748b',
                }}
              >
                {sub.name}
              </div>
            ))}
          </li>
        ))}
      </ul>
      <div className="total-count">
        <strong>{totalEntries}</strong> total medication entries
      </div>
    </div>
  );
};
