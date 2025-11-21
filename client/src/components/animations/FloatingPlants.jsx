import { motion } from "framer-motion";
import plant_1 from "../../assets/plant_1.png";
import plant_2 from "../../assets/plant_2.png";
import mushroom from "../../assets/mushroom.png";

const FloatingPlants = () => {
  return (
    <>
      {/* Floating Plant 2 */}
      <motion.div
        animate={{
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
          float: [1, 3, 4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-120 text-leaf opacity-30 text-6xl">
        <img src={plant_1} />
      </motion.div>

      {/* Floating Plant 2 */}
      <motion.div
        animate={{
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
          float: [1, 3, 4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 left-120 text-leaf opacity-30 text-6xl">
        <img src={plant_2} />
      </motion.div>

      {/* Mushroom Cluster */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-60 right-32 text-mushroom opacity-40 text-5xl">
        <img src={mushroom} />
      </motion.div>
    </>
  );
};

export default FloatingPlants;
