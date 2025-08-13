import { easeIn, easeOut } from "framer-motion";

import { motion } from "framer-motion";

export const FadeSlideUpText = ({
  children,
  className = "",
  delay = 0.1,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInMotion = ({
  children,
  delay = 0.1,
  duration = 0.6,
  y = 40,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const ZoomInFade = ({
  children,
  delay = 0.1,
  duration = 0.6,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export const RotateFadeIn = ({
  children,
  delay = 0.1,
  duration = 0.7,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, rotate: -10 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const SlideRightFade = ({
  children,
  delay = 0.2,
  duration = 0.7,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({
  children,
  delay = 0.3,
  duration = 0.8,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const flipCardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const defaultMotionConfig = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.20 },
};

export const titleMotionConfig = {
  initial: { opacity: 1, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeIn },
  viewport: { once: true, amount: 0.5 },
};

export const commonCardMotionConfig = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: easeIn },
};

export const GenericSliderMotionConfig = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: easeOut },
};

export const SwiperSlideMotionConfig = {
  initial: { opacity: 1, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

export const FilterMotionConfig = {
  initial: { opacity: 1, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
  viewport: { once: true, amount: 0.2 },
};

export const fadeUp = {
  hidden: { opacity: 1, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeLeft = {
  hidden: { opacity: 1, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const fadeRight = {
  hidden: { opacity: 1, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const socialHover = {
  whileHover: { scale: 1.05, y: -5 },
  transition: { type: "spring", stiffness: 300 },
};
