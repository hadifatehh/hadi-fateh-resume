import { useEffect, useRef } from "react";

export default function PortfolioCard({ item, onOpen }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) imgRef.current.style.filter = "grayscale(1)";
  }, []);

  return (
    <article className="pCard">
      <button
        type="button"
        className="pClickable"
        onClick={onOpen}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="pMedia">
          <img
            ref={imgRef}
            src={item.src}
            alt={item.label}
            loading="lazy"
            className="pImg"
            draggable={false}
            onMouseEnter={() => imgRef.current && (imgRef.current.style.filter = "grayscale(0)")}
            onMouseLeave={() => imgRef.current && (imgRef.current.style.filter = "grayscale(1)")}
          />
          {/* <div className="pLabelWrap">
            <div className="pLabel">{item.label}</div>
          </div> */}
        </div>
      </button>
    </article>
  );
}
