import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import PortfolioMasonry from "./PortfolioMasonry";
import ImageLightbox from "./ImageLightbox";
import { buildPortfolioData } from "../data/portfolioFromFolders";
import "../styles/portfolio.css";

const STEP = 10;

export default function PortfolioSection() {
  const { categories, items } = useMemo(() => buildPortfolioData(), []);
  const [active, setActive] = useState("همه نمونه‌کارها");
  const [visibleCount, setVisibleCount] = useState(STEP);
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(() => {
    if (active === "همه نمونه‌کارها") return items;
    return items.filter((x) => x.category === active);
  }, [active, items]);

  useEffect(() => setVisibleCount(STEP), [active]);

  const visibleItems = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const hasMore = filtered.length > visibleCount;
  const canShowLess = visibleCount > STEP;

  const loadMore = () => setVisibleCount((c) => Math.min(c + STEP, filtered.length));
  const showLess = () => setVisibleCount(STEP);

  return (
    <section className="portfolio" dir="rtl">
      {/* ردیف عنوان */}
      <div className="pTopRow">
        <div className="pTitle">
          <span className="pTitleBar" />
          <h2>نمونه کارها</h2>
        </div>
{/* 
        <button className="pViewAll" type="button" onClick={() => console.log("view all")}>
          مشاهده همه
          <span className="pViewAllIcon" aria-hidden="true">↩</span>
        </button> */}
      </div>
    {/* کتگوری‌ها پایین */}
      <div className="pCatsRow" role="tablist" aria-label="دسته‌بندی نمونه‌کارها">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              className={`pChip ${isActive ? "pChipActive" : ""}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          );
        })}
      </div>
      {/* گالری بالا */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18 }}
      >
        <PortfolioMasonry
          items={visibleItems}
          onImageClick={(item) => setLightbox({ src: item.src, title: item.label })}
        />
      </motion.div>

      {/* دکمه‌های بیشتر/کمتر */}
      <div className="loadMoreWrap">
        {canShowLess && (
          <button className="loadMoreBtn secondary" type="button" onClick={showLess}>
            عکس‌های کمتر
          </button>
        )}
        {hasMore && (
          <button className="loadMoreBtn" type="button" onClick={loadMore}>
            عکس‌های بیشتر
          </button>
        )}
      </div>

  

      {/* مودال عکس */}
      <ImageLightbox
        open={!!lightbox}
        src={lightbox?.src}
        title={lightbox?.title}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
