import { useEffect, useRef } from "react";

export default function PortfolioCard({ item }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) imgRef.current.style.filter = "grayscale(1)";
  }, []);

  const toColor = () => imgRef.current && (imgRef.current.style.filter = "grayscale(0)");
  const toBW = () => imgRef.current && (imgRef.current.style.filter = "grayscale(1)");

  return (
    <article className="pCard" onMouseEnter={toColor} onMouseLeave={toBW}>
      <div className="pShell">
        <div className="pFrame">
          <div className="pMedia">
            <img ref={imgRef} src={item.src} alt={item.label} loading="lazy" className="pImg" />

            <div className="pLabelWrap">
              <div className="pLabel">{item.label}</div>
            </div>
          </div>
        </div>

        {/* دسته‌ی بیرونی سمت راست */}
        <span className="pHandle" aria-hidden="true" />
      </div>
    </article>
  );
}
