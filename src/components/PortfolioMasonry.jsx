import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

const itemAnim = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.985 },
};

export default function PortfolioMasonry({ items, onImageClick }) {
  return (
    <Box className="masonryWrap">
      {/* برای اینکه تو رزومه بهم نریزه، 4 ستون نرو */}
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              variants={itemAnim}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard item={item} onOpen={() => onImageClick?.(item)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Masonry>
    </Box>
  );
}
