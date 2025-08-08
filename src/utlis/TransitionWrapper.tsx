import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 100, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -60, scale: 0.95 },
};

const pageTransition = {
  duration: 0.6,
  ease: easeInOut,
};

type Props = {
  children: ReactNode;
  shouldAnimate?: boolean;
};

const PageTransitionWrapper = ({ children, shouldAnimate = true }: Props) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={shouldAnimate ? pageVariants.initial : false}
        animate={shouldAnimate ? pageVariants.animate : false}
        exit={shouldAnimate ? pageVariants.exit : undefined}
        transition={pageTransition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
