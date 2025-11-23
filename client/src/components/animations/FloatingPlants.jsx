import { motion } from "framer-motion";
import plant_1 from "../../assets/plant_1.png";
import plant_2 from "../../assets/plant_2.png";
import mushroom from "../../assets/mushroom.png";

const assets = [plant_1, plant_2, mushroom];

const generateParticles = (count = 5) => {
  return Array.from({ length: count }).map((_, i) => {
    const asset = assets[i % assets.length];

    return {
      id: i,
      src: asset,
      left: Math.random() * 100, // % across the screen
      top: Math.random() * 100, // % down the screen
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 3,
      scale: 0.7 + Math.random() * 0.6, // 0.7–1.3
      rotateRange: 2 + Math.random() * 4,
      floatDistance: 20 + Math.random() * 20,
      opacity: 0.2 + Math.random() * 0.3,
    };
  });
};

const particles = generateParticles(5);

const FloatingPlants = () => {
  return (
    <>
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src={p.src}
          style={{
            position: "absolute",
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: "80px",
            opacity: p.opacity,
            pointerEvents: "none",
          }}
          initial={{ y: 0 }}
          animate={{
            y: [-p.floatDistance, p.floatDistance, -p.floatDistance],
            rotate: [-p.rotateRange, p.rotateRange, -p.rotateRange],
            scale: [p.scale, p.scale * 1.1, p.scale],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
};

export default FloatingPlants;
