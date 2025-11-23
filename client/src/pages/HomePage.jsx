import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import drone_farm from "../assets/drone_farm.png";
import drone_img from "../assets/drone.png";
import ai_farm from "../assets/ai_farm.png";
import IOT_farm from "../assets/IOT_farm.png";
import cult_farm from "../assets/cult_farm.png";
import FloatingPlants from "../components/animations/FloatingPlants";
import FloatingDots from "../components/animations/FloatingDots";
import { Link } from "react-router-dom";

const Homepage = () => {
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
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const features = [
    {
      image: ai_farm,
      title: "AI-Powered Analytics",
      description:
        "Advanced machine learning algorithms optimize crop yields and resource allocation.",
      bgColor: "bg-linear-to-br from-techblue to-droneblue",
      borderColor: "border-droneblue/20",
    },
    {
      image: drone_farm,
      title: "Drone Technology",
      description:
        "Autonomous drones monitor crop health and automate precision farming tasks.",
      bgColor: "bg-linear-to-br from-droneblue to-primary",
      borderColor: "border-primary/20",
    },
    {
      image: IOT_farm,
      title: "Smart IoT Farming",
      description:
        "Real-time sensor networks and automated systems for precision agriculture.",
      bgColor: "bg-linear-to-br from-primary to-leaf",
      borderColor: "border-leaf/20",
    },
    {
      image: cult_farm,
      title: "Mushroom Cultivation",
      description:
        "Smart controlled environments for optimal mushroom growth and quality.",
      bgColor: "bg-linear-to-br from-mushroom to-seedgold",
      borderColor: "border-seedgold/20",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest/95 to-primary/90 relative overflow-hidden">
      <div className="relative z-10">
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
                    <Link to={"/technology"}>Explore Technology</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link to={"/contact"}>Contact Us</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Hero Visual with Animated Drone*/}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                <div className="relative w-100 h-80 md:w-96 md:h-96 ">
                  {/* Animated Drone */}
                  <motion.div
                    className="absolute w-full h-auto"
                    animate={{
                      x: [-100, 100, 50, 200, 50, 200, -100],
                      y: [50, 100, 250, 150, 300, 50, 50],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    <img
                      src={drone_img}
                      alt="AI Drone"
                      className="w-2000 h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>
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

        {/* Mission Overview Section  */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4">
                <div className="w-20 h-1 bg-linear-to-r from-ecolime to-leaf rounded-full mx-auto"></div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-silver max-w-4xl mx-auto leading-relaxed">
                To revolutionize agriculture by seamlessly integrating
                artificial intelligence, drone technology, and IoT solutions
                with traditional organic farming methods, creating sustainable
                ecosystems that benefit both humanity and nature.
              </p>
            </motion.div>

            {/* Features Grid - Cards now pop on dark linear */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                  <div className="relative bg-leaf/15 backdrop-blur-md rounded-2xl border border-white/30 p-6 h-full shadow-2xl transition-all duration-300 group-hover:shadow-ecolime/20">
                    <div className="mb-4 p-4 rounded-xl bg-linear-to-br from-silver/30 to-white/80">
                      <div className="grid place-items-center">
                        <motion.img
                          src={feature.image}
                          alt={feature.title}
                          className="w-32 h-32 object-contain drop-shadow-md"
                          whileHover={{ scale: 1.12, rotate: 5 }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      <div
                        className={`w-2 h-8 ${
                          feature.bgColor.split(" ")[1]
                        } rounded-full mr-3`}></div>
                      <h3 className="text-xl font-bold text-forest">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-silver leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "50%", label: "Increase in Yield" },
                { number: "30%", label: "Water Savings" },
                { number: "100+", label: "Native Species" },
                { number: "24/7", label: "AI Monitoring" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="text-4xl font-bold text-ecolime drop-shadow-md mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-silver font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-6">
                Ready to Transform Agriculture?
              </h2>
              <p className="text-xl text-silver/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us in creating a sustainable future where technology and
                nature work in perfect harmony for smarter, greener farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="organic"
                  size="lg"
                  className="bg-linear-to-r from-ecolime to-leaf text-forest font-bold hover:from-leaf hover:to-ecolime shadow-lg hover:shadow-ecolime/50 border-0">
                  <Link to={"/contact"}>Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                  <Link to={"/farming"}>Learn More</Link>
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap justify-center gap-8 text-silver/90 text-sm">
                {["No setup fees", "Free consultation", "30-day trial"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-ecolime rounded-full animate-pulse"></div>
                      <span>{item}</span>
                    </div>
                  )
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technology Preview */}
        <section className="py-16 bg-leaf/15 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
                Integrated Farming Technology
              </h2>
              <p className="text-lg text-silver mb-10 max-w-2xl mx-auto">
                Our ecosystem combines the best of AI, drones, IoT, and organic
                practices
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "AI Analytics",
                  "Drone Fleet",
                  "IoT Sensors",
                  "Native Seeds",
                  "Smart Irrigation",
                  "Organic Certification",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="px-5 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium shadow-md hover:bg-white/30 transition-all">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
