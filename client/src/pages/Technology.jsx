import React from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiWifi,
  FiDroplet,
  FiThermometer,
  FiBarChart2,
  FiCloud,
  FiMonitor,
} from "react-icons/fi";
import { FaSeedling } from "react-icons/fa";
import { FaCow } from "react-icons/fa6";
import { GiMushroom, GiDeliveryDrone } from "react-icons/gi";
import Button from "../components/ui/Button";
import { containerVariants } from "../components/animations/Container";
import { itemVariants } from "../components/animations/Item";
import { staggerContainer } from "../components/animations/StaggerContainer";
import { cardVariants } from "../components/animations/CardSpring";
import { iconVariants } from "../components/animations/IconSpin";
import { pulseVariants } from "../components/animations/Pulse";

const Technology = () => {
  const technologies = [
    {
      icon: FiCpu,
      title: "AI-Powered Analytics",
      description:
        "Advanced machine learning algorithms for intelligent farming decisions",
      features: [
        "Predictive crop yield analysis",
        "Disease detection and prevention",
        "Automated resource optimization",
        "Real-time decision support",
      ],
      color: "from-primary to-leaf",
      bgColor: "bg-primary/20",
    },
    {
      icon: GiDeliveryDrone,
      title: "Drone Technology",
      description: "Autonomous aerial systems for precision farming operations",
      features: [
        "High-resolution field mapping",
        "Precision spraying and seeding",
        "Crop health monitoring",
        "Automated field surveillance",
      ],
      color: "from-leaf to-ecolime",
      bgColor: "bg-leaf/20",
    },
    {
      icon: FiWifi,
      title: "IoT Sensor Networks",
      description:
        "Connected sensor systems for real-time environmental monitoring",
      features: [
        "Soil moisture and nutrient sensors",
        "Weather and climate monitoring",
        "Livestock health tracking",
        "Automated irrigation control",
      ],
      color: "from-ecolime to-seedgold",
      bgColor: "bg-ecolime/20",
    },
  ];

  const applications = [
    {
      icon: FaSeedling,
      title: "Precision Crop Management",
      description:
        "AI-driven insights for optimal planting, growth, and harvesting",
      technologies: ["AI Analytics", "Drone Imaging", "Soil Sensors"],
      benefits: [
        "50% reduction in water usage",
        "30% increase in crop yield",
        "Real-time pest detection",
      ],
      color: "from-primary to-leaf",
    },
    {
      icon: FaCow,
      title: "Livestock Monitoring",
      description: "Smart tracking and health monitoring for animal welfare",
      technologies: ["IoT Sensors", "AI Health Analysis", "GPS Tracking"],
      benefits: [
        "24/7 health monitoring",
        "Automated feeding systems",
        "Early disease detection",
      ],
      color: "from-seedgold to-ecolime",
    },
    {
      icon: FiCloud,
      title: "Climate Data Analysis",
      description: "Advanced weather forecasting and microclimate optimization",
      technologies: ["Weather Stations", "AI Prediction", "Sensor Networks"],
      benefits: [
        "Accurate yield forecasting",
        "Optimal planting schedules",
        "Climate risk mitigation",
      ],
      color: "from-techblue to-droneblue",
    },
    {
      icon: GiMushroom,
      title: "Mushroom Growth Optimization",
      description: "Controlled environment agriculture for perfect cultivation",
      technologies: ["Climate Control", "AI Monitoring", "IoT Sensors"],
      benefits: [
        "Perfect humidity control",
        "Automated harvesting",
        "Quality consistency",
      ],
      color: "from-mushroom to-seedgold",
    },
  ];

  const features = [
    {
      icon: FiDroplet,
      title: "Smart Irrigation",
      description:
        "AI-controlled water management based on soil moisture and weather data",
      stat: "60% Water Saved",
    },
    {
      icon: FiThermometer,
      title: "Climate Control",
      description:
        "Automated temperature and humidity regulation for optimal growth",
      stat: "24/7 Monitoring",
    },
    {
      icon: FiBarChart2,
      title: "Yield Prediction",
      description:
        "Machine learning models predicting harvest outcomes with 95% accuracy",
      stat: "95% Accuracy",
    },
    {
      icon: FiMonitor,
      title: "Real-time Dashboard",
      description:
        "Comprehensive monitoring and control interface for farm operations",
      stat: "Live Updates",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest to-primary relative overflow-hidden">
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-tr from-leaf/10 via-transparent to-ecolime/5"></div>
      </div>

      {/* Hero Section - Keeping original colors */}
      <section className="h-screen flex justify-center items-center relative py-20 bg-linear-to-r from-primary via-forest to-leaf overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ecolime rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-leaf rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center text-white">
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="w-24 h-1 bg-linear-to-r from-ecolime to-leaf rounded-full mx-auto mb-4"></div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                Our Technology
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-silver max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Cutting-edge solutions where artificial intelligence meets organic
              farming to create the future of sustainable agriculture.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="organic"
                size="lg"
                className="bg-linear-to-r from-ecolime to-leaf text-forest font-bold shadow-lg">
                See Technology in Action
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/20">
                Request Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Technologies */}
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
              Core Technologies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-silver max-w-3xl mx-auto">
              Three pillars of innovation driving our smart farming revolution
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={cardVariants}
                whileHover="hover"
                className="group">
                <div
                  className={`p-8 rounded-2xl ${tech.bgColor} backdrop-blur-xl border border-white/20 h-full shadow-2xl transition-all duration-500 group-hover:shadow-ecolime/30`}>
                  <motion.div
                    className={`w-20 h-20 bg-linear-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    variants={iconVariants}
                    whileHover="hover">
                    <tech.icon className="w-10 h-10 text-white drop-shadow" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {tech.title}
                  </h3>

                  <p className="text-silver leading-relaxed mb-6 text-center">
                    {tech.description}
                  </p>

                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center text-silver">
                        <div className="w-2 h-2 bg-ecolime rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Applications */}
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
              Smart Applications
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-silver max-w-3xl mx-auto">
              How our technology transforms key areas of modern agriculture
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover="hover"
                variants={cardVariants}
                className="group">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-leaf/30 shadow-2xl h-full">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      animate="pulse"
                      variants={pulseVariants}
                      className={`w-16 h-16 bg-linear-to-r ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <app.icon className="w-8 h-8 text-white drop-shadow"></app.icon>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {app.title}
                  </h3>

                  <p className="text-silver leading-relaxed mb-6">
                    {app.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-ecolime mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {app.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-ecolime/20 text-ecolime rounded-full text-sm font-medium border border-ecolime/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-ecolime mb-3">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {app.benefits.map((benefit, idx) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-center text-silver">
                          <div className="w-1.5 h-1.5 bg-ecolime rounded-full mr-3"></div>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Advanced Features
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-silver max-w-3xl mx-auto">
              Powerful tools that make smart farming accessible and effective
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover="hover"
                className="group">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-leaf/30 shadow-2xl text-center h-full">
                  <motion.div
                    className={`w-14 h-14 bg-linear-to-r from-primary to-leaf rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}
                    variants={iconVariants}
                    whileHover="hover">
                    <feature.icon className="w-6 h-6 text-white drop-shadow" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-silver text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <motion.div
                    className="text-2xl font-bold text-ecolime drop-shadow"
                    animate="pulse"
                    variants={pulseVariants}>
                    {feature.stat}
                  </motion.div>
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
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
              Join hundreds of farmers already using Hydra's technology to
              increase yields, reduce costs, and farm more sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="organic" size="lg">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
