import { motion } from "framer-motion";

export const itemVariants = {
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

export const Item = ({ children, as = "div", ...props }) => {
  const Component = motion[as];
  return (
    <Component variants={itemVariants} {...props}>
      {children}
    </Component>
  );
};
