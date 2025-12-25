export default function PortfolioHeader({
  title,
  categories,
  active,
  onChange,
  onViewAll,
}) {
  return (
    <div className="portfolioHeader">
      {/* عنوان سمت راست */}
      <div className="phTitle">
        <span className="phTitleBar" />
        <h2>{title}</h2>
      </div>

      {/* چیپ‌ها وسط */}
      <div className="phChips" role="tablist" aria-label="دسته‌بندی نمونه‌کارها">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              className={`chip ${isActive ? "chipActive" : ""}`}
              onClick={() => onChange(c)}
              type="button"
              role="tab"
              aria-selected={isActive}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* مشاهده همه سمت چپ */}
      {/* <button className="viewAll" onClick={onViewAll} type="button">
        <span className="viewAllIcon" aria-hidden="true">
          ↩
        </span>
        مشاهده همه
      </button> */}
    </div>
  );
}
