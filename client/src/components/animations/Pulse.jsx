import { motion } from "framer-motion";

export const pulseVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

export const Pulse = ({ children }) => (
  <motion.div animate="pulse" variants={pulseVariants}>
    {children}
  </motion.div>
);
