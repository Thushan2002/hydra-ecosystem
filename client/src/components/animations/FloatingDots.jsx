import { motion } from "framer-motion";

const FloatingDots = () => {
  return (
    <>
      {/* Drone-like floating dots */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-6 h-6 bg-droneblue rounded-full opacity-60"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 w-4 h-4 bg-droneblue rounded-full opacity-40"
      />
    </>
  );
};

export default FloatingDots;
