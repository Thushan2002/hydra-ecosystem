import { motion } from "framer-motion";

export const cardVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 50,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

export const Card = ({ children, ...props }) => (
  <motion.div variants={cardVariants} whileHover="hover" {...props}>
    {children}
  </motion.div>
);
