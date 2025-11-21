import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiAward, FiGlobe, FiZap } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import Button from "../components/ui/Button";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 50,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const values = [
    {
      icon: FiUsers,
      title: "Community First",
      description:
        "Empowering local farming communities through technology and knowledge sharing.",
      color: "from-primary to-leaf",
      bgColor: "bg-primary/20",
    },
    {
      icon: FiZap,
      title: "Innovation Driven",
      description:
        "Pushing boundaries with cutting-edge AI and IoT solutions for sustainable farming.",
      color: "from-techblue to-droneblue",
      bgColor: "bg-techblue/20",
    },
    {
      icon: FaLeaf,
      title: "Eco-Balance",
      description:
        "Maintaining harmony between technology and nature for a sustainable future.",
      color: "from-leaf to-ecolime",
      bgColor: "bg-leaf/20",
    },
    {
      icon: FiGlobe,
      title: "Global Impact",
      description:
        "Creating solutions that benefit both local communities and the global ecosystem.",
      color: "from-seedgold to-ecolime",
      bgColor: "bg-seedgold/20",
    },
  ];

  const milestones = [
    {
      year: "2020",
      event: "Hydra Founded",
      description: "Started with a vision to merge AI with organic farming",
    },
    {
      year: "2021",
      event: "First Smart Farm",
      description: "Launched our first AI-powered organic farm in Trincomalee",
    },
    {
      year: "2022",
      event: "Drone Integration",
      description: "Integrated autonomous drones for precision farming",
    },
    {
      year: "2023",
      event: "Community Expansion",
      description: "Expanded to 50+ farming communities across Sri Lanka",
    },
    {
      year: "2024",
      event: "Global Recognition",
      description: "Received international awards for sustainable innovation",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest to-primary relative overflow-hidden">
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-tr from-leaf/10 via-transparent to-ecolime/5"></div>
      </div>

      {/* Hero Section */}
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
                About Hydra
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-silver max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Where Artificial Intelligence meets Organic Farming to create a
              sustainable future for generations to come.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="organic" size="lg">
                Our Story
              </Button>
              <Button variant="outline" size="lg">
                Meet the Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-linear-to-br from-primary via-forest to-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="w-16 h-1 bg-linear-to-r from-ecolime to-leaf rounded-full mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Our Story
              </h2>
              <p className="text-lg text-silver leading-relaxed mb-6">
                Hydra was born from a simple yet powerful vision: to bridge the
                gap between cutting-edge technology and traditional organic
                farming practices. Founded in 2020, we set out to create a
                farming ecosystem where AI, drones, and IoT work in harmony with
                nature.
              </p>
              <p className="text-lg text-silver leading-relaxed mb-8">
                Today, we're proud to be at the forefront of the agricultural
                revolution, helping farmers achieve unprecedented yields while
                maintaining ecological balance and preserving traditional
                farming wisdom.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="tech" size="md">
                  Read Our Manifesto
                </Button>
                <Button variant="outline" size="md">
                  Watch Our Story
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-leaf/30 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: FiTarget, value: "50+", label: "Smart Farms" },
                    {
                      icon: FiUsers,
                      value: "1000+",
                      label: "Farmers Empowered",
                    },
                    { icon: FaLeaf, value: "75%", label: "Yield Increase" },
                    { icon: FiAward, value: "15+", label: "Innovation Awards" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center p-6 bg-leaf/20 backdrop-blur-md rounded-2xl border border-ecolime/30 shadow-xl">
                      <stat.icon className="w-10 h-10 text-ecolime mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-silver">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-silver max-w-3xl mx-auto">
              Guided by principles that ensure we create positive impact while
              pushing the boundaries of innovation.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover="hover"
                className="group">
                <div
                  className={`p-8 rounded-2xl ${value.bgColor} backdrop-blur-xl border border-white/20 h-full shadow-2xl transition-all duration-500 group-hover:shadow-ecolime/30`}>
                  <div
                    className={`w-16 h-16 bg-linear-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-9 h-9 text-white drop-shadow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-silver leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-leaf/40 shadow-2xl">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FiTarget className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-silver leading-relaxed mb-6">
                To revolutionize agriculture by creating intelligent farming
                ecosystems that seamlessly integrate AI technology with organic
                practices, ensuring food security while preserving our planet's
                ecological balance.
              </p>
              <Button variant="tech" size="md">
                Explore Technology
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-ecolime/40 shadow-2xl">
              <div className="w-12 h-12 bg-leaf rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FiGlobe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-silver leading-relaxed mb-6">
                A world where every farm is a smart, sustainable ecosystem where
                technology enhances nature's wisdom, communities thrive, and
                future generations inherit a healthier planet.
              </p>
              <Button variant="organic" size="md">
                Join Our Vision
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Our Journey
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-silver max-w-2xl mx-auto">
              From a bold idea to a transformative movement in sustainable
              agriculture.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-ecolime to-leaf opacity-60"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}>
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}>
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-leaf/30">
                      <div className="text-2xl font-bold text-ecolime mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-silver">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-ecolime rounded-full border-4 border-forest shadow-xl"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
              Be part of the agricultural revolution. Together, we can create a
              sustainable future where technology and nature thrive in harmony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="organic" size="lg">
                Partner With Us
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
