import { AnimatePresence, motion } from "framer-motion";

export default function ImageLightbox({ open, src, title, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lbOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}          // کلیک بیرون = بستن
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="lbPanel"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(e) => e.stopPropagation()} // کلیک روی عکس، مودال نبنده
          >
            <button className="lbClose" type="button" onClick={onClose} aria-label="بستن">
              {/* ایکن مینیمال X */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="lbTitle">{title}</div>

            <img
              className="lbImg"
              src={src}
              alt={title || "preview"}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()} // راست‌کلیک = خیر
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
