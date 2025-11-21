import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import FloatingDots from "../../animations/FloatingDots";
import FloatingPlants from "../../animations/FloatingPlants";
import drone_mp4 from "../../../assets/drone.mp4";
// background video (place in public/videos/hero-bg.mp4)
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="home"
      className="pt-20 lg:pt-0 min-h-screen bg-linear-to-br from-techblue via-forest to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingDots />
        <FloatingPlants />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left lg:flex lg:items-center lg:justify-between w-full">
          <div className="lg:w-1/2">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">Welcome to</span>
              <span className="block bg-linear-to-r from-ecolime to-leaf bg-clip-text text-transparent">
                Hydra
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-silver mb-8 font-light">
              When <span className="text-droneblue font-semibold">AI</span>{" "}
              Meets <span className="text-leaf font-semibold">Organic</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-silver mb-8 max-w-2xl mx-auto lg:mx-0">
              Revolutionizing sustainable agriculture through artificial
              intelligence, drone technology, and IoT solutions. Join us in
              creating a greener, smarter future for farming.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="tech" size="lg">
                Explore Technology
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Hero Visual with Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-silver/20">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/videos/hero-fallback.jpg" // optional fallback image
              >
                <source src={drone_mp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-ecolime rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-ecolime rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
