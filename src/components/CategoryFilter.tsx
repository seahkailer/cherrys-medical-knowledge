import React from 'react';
import { MedicalCategory } from '../types';

interface CategoryFilterProps {
  categories: MedicalCategory[];
  selectedCategory: string;
  selectedSubCategory: string;
  onCategoryChange: (categoryId: string) => void;
  onSubCategoryChange: (categoryId: string, subCategory: string) => void;
  categoryCounts: Record<string, number>;
  totalEntries: number;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  selectedSubCategory,
  onCategoryChange,
  onSubCategoryChange,
  categoryCounts,
  totalEntries,
}) => {
  return (
    <div className="category-section">
      <h2>Sickness Categories</h2>
      <ul className="category-list">

        {/* All Categories button */}
        <li>
          <button
            className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            All Categories
            <span className="count">{totalEntries}</span>
          </button>
        </li>

        {/* Each main category + its sub-categories */}
        {categories.map((category) => (
          <li key={category.id}>
            {/* Main category — clickable */}
            <button
              className={`category-button ${
                selectedCategory === category.id && !selectedSubCategory ? 'active' : ''
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
              <span className="count">{categoryCounts[category.id]}</span>
            </button>

            {/* Sub-categories — only shown when this category is selected or viewing all */}
            {(selectedCategory === 'all' || selectedCategory === category.id) && (
              <ul className="subcategory-list">
                {category.subCategories.map((sub) => (
                  <li key={`${category.id}-${sub.name}`}>
                    <button
                      className={`subcategory-button ${
                        selectedCategory === category.id && selectedSubCategory === sub.name
                          ? 'subcategory-active'
                          : ''
                      }`}
                      onClick={() => onSubCategoryChange(category.id, sub.name)}
                    >
                      {sub.name}
                      <span className="sub-count">{sub.entries.length}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="total-count">
        <strong>{totalEntries}</strong> total medication entries
      </div>
    </div>
  );
};

export { CategoryFilter };
