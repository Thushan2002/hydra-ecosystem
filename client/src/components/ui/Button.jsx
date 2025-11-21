import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-primary hover:bg-forest text-white focus:ring-leaf/30",
    secondary:
      "bg-techblue hover:bg-droneblue text-white focus:ring-droneblue/30",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/30",
    tech: "bg-linear-to-r from-techblue to-droneblue hover:from-droneblue hover:to-techblue text-white focus:ring-droneblue/30",
    organic:
      "bg-linear-to-r from-primary to-seedgold hover:from-seedgold hover:to-primary text-white focus:ring-seedgold/30",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}>
      {loading && <Spinner size="sm" className="mr-2" />}
      {children}
    </motion.button>
  );
};

export default Button;
