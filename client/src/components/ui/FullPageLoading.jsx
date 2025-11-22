// components/FullPageLoading.jsx
import React from "react";
import { motion } from "framer-motion";
import { TbPlant2 } from "react-icons/tb";

const FullPageLoading = () => {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-forest via-primary/95 to-forest backdrop-blur-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.6 }}>
        {/* Central Growing Plant */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block">
          <div className="w-32 h-32 bg-linear-to-r from-leaf to-ecolime rounded-full flex items-center justify-center shadow-2xl">
            <TbPlant2 className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mt-8 drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}>
          Cultivating Innovation...
        </motion.h2>

        {/* Dots Animation */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-ecolime rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Subtle Tagline */}
        <motion.p
          className="text-silver/80 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}>
          When AI Meets Organic
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FullPageLoading;
