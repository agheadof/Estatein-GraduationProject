import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type MaggnaticProps = {
  children: React.ReactNode;
};

const Maggnatic: React.FC<MaggnaticProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      const strength = 0.5;
      setPosition({ x: x * strength, y: y * strength });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default Maggnatic;
