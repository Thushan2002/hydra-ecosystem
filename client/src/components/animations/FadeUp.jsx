import { motion } from "framer-motion";

export const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const FadeUp = ({ children, ...props }) => (
  <motion.div variants={fadeUpVariants} {...props}>
    {children}
  </motion.div>
);
