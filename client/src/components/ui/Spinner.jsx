import React from "react";
import { motion } from "framer-motion";

const Spinner = ({ size = "md", color = "primary", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colors = {
    primary: "text-primary",
    white: "text-white",
    tech: "text-droneblue",
    organic: "text-seedgold",
  };

  return (
    <motion.div
      className={`
        ${sizes[size]}
        ${colors[color]}
        ${className}
      `}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </motion.div>
  );
};

export default Spinner;
