function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <section className="category-section">
      <div className="section-heading">
        <div>
          <p className="section-tag">EXPLORE</p>
          <h2>Shop by Category</h2>
        </div>
      </div>

      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;