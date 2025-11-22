import { motion } from "framer-motion";

export const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 1 },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

export const IconContainer = ({ children, ...props }) => (
  <motion.div variants={iconVariants} whileHover="hover" {...props}>
    {children}
  </motion.div>
);
