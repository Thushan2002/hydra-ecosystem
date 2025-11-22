import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart,
  FiTarget,
  FiAward,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import { FaCow, FaSeedling } from "react-icons/fa6";
import { GiMushroom, GiDeliveryDrone } from "react-icons/gi";
import { TbPlant2 } from "react-icons/tb";
import Button from "../components/ui/Button";
import { itemVariants } from "../components/animations/Item";
import { staggerContainer } from "../components/animations/StaggerContainer";
import { cardVariants } from "../components/animations/CardSpring";
import { iconVariants } from "../components/animations/IconSpin";
import { pulseVariants } from "../components/animations/Pulse";
import { containerVariants } from "../components/animations/Container";

const Farming = () => {
  const [activeDivision, setActiveDivision] = useState(0);

  const tabVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    active: {
      scale: 1.1,
      backgroundColor: "rgba(207, 255, 77, 0.2)",
      borderColor: "rgb(207, 255, 77)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.5,
      },
    },
  };

  const divisions = [
    {
      icon: TbPlant2,
      title: "Native Seed Farming",
      description:
        "Preserving biodiversity through indigenous seed cultivation",
      features: [
        "200+ native seed varieties preserved",
        "Climate-resilient crop development",
        "Traditional farming knowledge integration",
        "Organic certification standards",
      ],
      stats: [
        { value: "95%", label: "Germination Rate" },
        { value: "50+", label: "Native Species" },
        { value: "100%", label: "Organic" },
      ],
      color: "from-primary to-leaf",
      bgColor: "bg-primary/20",
      image: "🌱",
      details:
        "Our native seed division focuses on preserving heirloom and indigenous plant varieties that are naturally adapted to local conditions, requiring less water and pesticides while maintaining biodiversity.",
      benefits: [
        "Enhanced soil health and biodiversity",
        "Reduced dependency on synthetic inputs",
        "Preservation of cultural heritage",
        "Climate change resilience",
      ],
    },
    {
      icon: FaCow,
      title: "Animal Farming",
      description: "Ethical livestock management with advanced monitoring",
      features: [
        "Free-range grazing systems",
        "AI health monitoring",
        "Automated feeding solutions",
        "Waste-to-energy conversion",
      ],
      stats: [
        { value: "24/7", label: "Health Monitoring" },
        { value: "0%", label: "Antibiotics" },
        { value: "100%", label: "Free Range" },
      ],
      color: "from-seedgold to-mushroom",
      bgColor: "bg-seedgold/20",
      image: "🐄",
      details:
        "We practice regenerative animal farming where livestock are raised in their natural habitats with ample space, monitored by AI systems that track health and wellbeing in real-time.",
      benefits: [
        "Improved animal welfare standards",
        "Natural manure for soil enrichment",
        "Carbon sequestration through grazing",
        "Local ecosystem preservation",
      ],
    },
    {
      icon: GiMushroom,
      title: "Mushroom Cultivation",
      description: "Precision-controlled gourmet mushroom production",
      features: [
        "Climate-controlled growing chambers",
        "Automated humidity control",
        "Quality grading systems",
        "Direct-to-consumer distribution",
      ],
      stats: [
        { value: "10+", label: "Mushroom Types" },
        { value: "365", label: "Days Production" },
        { value: "99%", label: "Quality Rate" },
      ],
      color: "from-mushroom to-soil",
      bgColor: "bg-mushroom/20",
      image: "🍄",
      details:
        "Our state-of-the-art mushroom facilities use precision climate control and AI monitoring to create perfect growing conditions year-round for various gourmet and medicinal mushrooms.",
      benefits: [
        "Year-round production capability",
        "Minimal water consumption",
        "High nutritional value output",
        "Utilization of agricultural waste",
      ],
    },
    {
      icon: GiDeliveryDrone,
      title: "Smart Farming",
      description: "AI-driven precision agriculture technology",
      features: [
        "Autonomous drone surveillance",
        "Real-time soil analytics",
        "Predictive yield modeling",
        "Automated irrigation systems",
      ],
      stats: [
        { value: "60%", label: "Water Saved" },
        { value: "30%", label: "Yield Increase" },
        { value: "24/7", label: "AI Monitoring" },
      ],
      color: "from-techblue to-droneblue",
      bgColor: "bg-techblue/20",
      image: "🤖",
      details:
        "Leveraging cutting-edge technology, our smart farming division uses autonomous systems and data analytics to optimize every aspect of agricultural production while minimizing environmental impact.",
      benefits: [
        "Precision resource allocation",
        "Data-driven decision making",
        "Reduced environmental footprint",
        "Scalable farming solutions",
      ],
    },
  ];

  const benefits = [
    {
      icon: FiTarget,
      title: "Sustainable Practices",
      description:
        "All divisions follow strict environmental and sustainability standards",
      color: "from-primary to-leaf",
    },
    {
      icon: FiHeart,
      title: "Animal Welfare",
      description:
        "Ethical treatment and natural living conditions for all livestock",
      color: "from-seedgold to-mushroom",
    },
    {
      icon: FiAward,
      title: "Quality Certified",
      description:
        "Organic certification and quality assurance across all products",
      color: "from-leaf to-ecolime",
    },
    {
      icon: FiUsers,
      title: "Community Focus",
      description:
        "Supporting local communities and preserving traditional knowledge",
      color: "from-techblue to-droneblue",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-ecolime rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-leaf rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section - Keeping original style */}
      <section className="relative h-screen bg-transparent flex justify-center items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center text-white">
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="w-24 h-1 bg-linear-to-r from-ecolime to-leaf rounded-full mx-auto mb-4"></div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                Farming Divisions
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-silver max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Four specialized divisions working in harmony to create the future
              of sustainable agriculture
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="organic" size="lg">
                Explore Our Farms
              </Button>
              <Button variant="outline" size="lg">
                View Products
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New Layout: Feature Showcase with Sidebar Navigation */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:col-span-1 space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                Our Divisions
              </motion.h2>

              {divisions.map((division, index) => (
                <motion.button
                  key={division.title}
                  variants={tabVariants}
                  whileHover="hover"
                  animate={activeDivision === index ? "active" : "visible"}
                  onClick={() => setActiveDivision(index)}
                  className={`w-full p-4 rounded-2xl backdrop-blur-xl border-2 text-left transition-all duration-300 group ${
                    activeDivision === index
                      ? "border-ecolime bg-ecolime/10 text-white"
                      : "border-white/20 bg-white/5 text-silver hover:text-white"
                  }`}>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-12 h-12 bg-linear-to-r ${division.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1 }}>
                      <division.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg">{division.title}</h3>
                      <p className="text-sm opacity-80 mt-1">
                        {division.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Main Content Area */}
            <motion.div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDivision}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-leaf/30 shadow-2xl h-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Details */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          className={`w-20 h-20 bg-linear-to-r ${divisions[activeDivision].color} rounded-2xl flex items-center justify-center shadow-lg`}
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}>
                          {divisions[activeDivision].icon}
                        </motion.div>
                        <div>
                          <h2 className="text-4xl font-bold text-white mb-2">
                            {divisions[activeDivision].title}
                          </h2>
                          <p className="text-silver text-lg">
                            {divisions[activeDivision].description}
                          </p>
                        </div>
                      </div>

                      <motion.p
                        variants={itemVariants}
                        className="text-silver leading-relaxed mb-8 text-lg">
                        {divisions[activeDivision].details}
                      </motion.p>

                      {/* Benefits Section */}
                      <motion.div variants={staggerContainer} className="mb-8">
                        <h3 className="text-2xl font-bold text-ecolime mb-4">
                          Key Benefits
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {divisions[activeDivision].benefits.map(
                            (benefit, idx) => (
                              <motion.div
                                key={benefit}
                                variants={cardVariants}
                                className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <FaSeedling className="w-4 h-4 text-ecolime mr-3" />
                                <span className="text-silver text-sm">
                                  {benefit}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>

                      <div className="flex gap-4">
                        <Button variant="organic" size="md">
                          Learn More
                        </Button>
                        <Button variant="outline" size="md">
                          <FiArrowRight className="mr-2" />
                          Visit Division
                        </Button>
                      </div>
                    </div>

                    {/* Right Column - Stats & Visuals */}
                    <div className="space-y-8">
                      {/* Animated Emoji */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="text-9xl text-center">
                        {divisions[activeDivision].image}
                      </motion.div>

                      {/* Stats Grid */}
                      <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-3 gap-4">
                        {divisions[activeDivision].stats.map((stat, idx) => (
                          <motion.div
                            key={stat.label}
                            variants={cardVariants}
                            className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <motion.div
                              className="text-3xl font-bold text-ecolime mb-2"
                              animate="pulse"
                              variants={pulseVariants}>
                              {stat.value}
                            </motion.div>
                            <div className="text-sm text-silver">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Features List */}
                      <motion.div variants={staggerContainer}>
                        <h3 className="text-xl font-bold text-ecolime mb-4">
                          Core Features
                        </h3>
                        <div className="space-y-2">
                          {divisions[activeDivision].features.map(
                            (feature, idx) => (
                              <motion.div
                                key={feature}
                                variants={itemVariants}
                                className="flex items-center text-silver bg-white/5 rounded-lg p-3">
                                <div className="w-2 h-2 bg-ecolime rounded-full mr-3"></div>
                                <span>{feature}</span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unified Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Why Choose Hydra Farming?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-silver max-w-3xl mx-auto">
              Our integrated approach delivers unparalleled benefits across all
              agricultural practices
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                whileHover="hover"
                className="group">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-leaf/30 shadow-2xl text-center h-full">
                  <motion.div
                    className={`w-16 h-16 bg-linear-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}
                    variants={iconVariants}
                    whileHover="hover">
                    <benefit.icon className="w-8 h-8 text-white drop-shadow" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-silver text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-forest to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-2xl">
              Ready to Transform Your Agriculture?
            </h2>
            <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
              Join us in creating a sustainable future where technology and
              nature work in perfect harmony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="organic" size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Get Expert Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Farming;
