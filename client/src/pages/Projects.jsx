import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiTarget,
  FiArrowRight,
  FiFilter,
  FiX,
} from "react-icons/fi";
import { FaLeaf, FaSeedling, FaCow } from "react-icons/fa6";
import { GiMushroom, GiDeliveryDrone } from "react-icons/gi";
import Button from "../components/ui/Button";
import { containerVariants } from "../components/animations/Container";
import { itemVariants } from "../components/animations/Item";
import { cardVariants } from "../components/animations/CardSpring";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Rice Cultivation Initiative",
      description:
        "AI-powered rice farming with drone monitoring and IoT sensors for precision agriculture",
      category: "smart-farming",
      icon: GiDeliveryDrone,
      image: "🌾",
      location: "Trincomalee, Sri Lanka",
      duration: "12 months",
      farmers: 150,
      outcomes: [
        "40% increase in yield",
        "50% water savings",
        "Real-time pest detection",
        "Automated irrigation",
      ],
      status: "completed",
      color: "from-techblue to-droneblue",
    },
    {
      id: 2,
      title: "Native Seed Bank & Research Center",
      description:
        "Preservation and research facility for indigenous Sri Lankan crop varieties",
      category: "seed-farming",
      icon: FaSeedling,
      image: "🏛️",
      location: "Kandy, Sri Lanka",
      duration: "18 months",
      farmers: 75,
      outcomes: [
        "100+ native varieties preserved",
        "Climate-resilient strains developed",
        "Community training programs",
        "Seed distribution network",
      ],
      status: "ongoing",
      color: "from-primary to-leaf",
    },
    {
      id: 3,
      title: "Organic Dairy Farm Modernization",
      description:
        "Transforming traditional dairy farming with smart monitoring and sustainable practices",
      category: "animal-farming",
      icon: FaCow,
      image: "🥛",
      location: "Nuwara Eliya, Sri Lanka",
      duration: "8 months",
      farmers: 50,
      outcomes: [
        "30% milk yield increase",
        "Zero antibiotic usage",
        "Automated feeding systems",
        "Waste-to-energy conversion",
      ],
      status: "completed",
      color: "from-seedgold to-mushroom",
    },
    {
      id: 4,
      title: "Gourmet Mushroom Production Facility",
      description:
        "State-of-the-art controlled environment for premium mushroom cultivation",
      category: "mushroom",
      icon: GiMushroom,
      image: "🏭",
      location: "Colombo, Sri Lanka",
      duration: "6 months",
      farmers: 25,
      outcomes: [
        "Year-round production",
        "5+ gourmet varieties",
        "95% quality consistency",
        "Direct export channels",
      ],
      status: "ongoing",
      color: "from-mushroom to-soil",
    },
    {
      id: 5,
      title: "Community Farming IoT Network",
      description:
        "Implementing sensor networks across multiple small-scale farms for collective optimization",
      category: "smart-farming",
      icon: GiDeliveryDrone,
      image: "📡",
      location: "Multiple Regions",
      duration: "24 months",
      farmers: 300,
      outcomes: [
        "Shared resource optimization",
        "Collective data analytics",
        "Early warning systems",
        "Knowledge sharing platform",
      ],
      status: "upcoming",
      color: "from-techblue to-droneblue",
    },
    {
      id: 6,
      title: "Heritage Crop Revival Program",
      description:
        "Reviving traditional Sri Lankan crops with modern organic techniques",
      category: "seed-farming",
      icon: FaLeaf,
      image: "🌿",
      location: "Anuradhapura, Sri Lanka",
      duration: "15 months",
      farmers: 120,
      outcomes: [
        "Ancient varieties restored",
        "Organic certification",
        "Market access created",
        "Cultural preservation",
      ],
      status: "ongoing",
      color: "from-primary to-leaf",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "smart-farming",
      label: "Smart Farming",
      count: projects.filter((p) => p.category === "smart-farming").length,
    },
    {
      key: "seed-farming",
      label: "Seed Farming",
      count: projects.filter((p) => p.category === "seed-farming").length,
    },
    {
      key: "animal-farming",
      label: "Animal Farming",
      count: projects.filter((p) => p.category === "animal-farming").length,
    },
    {
      key: "mushroom",
      label: "Mushroom",
      count: projects.filter((p) => p.category === "mushroom").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const statusColors = {
    completed: "bg-leaf text-white",
    ongoing: "bg-ecolime text-forest",
    upcoming: "bg-techblue text-white",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-ecolime rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-leaf rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex justify-center items-center py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center text-white">
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="w-24 h-1 bg-linear-to-r from-ecolime to-leaf rounded-full mx-auto mb-4"></div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                Our Projects
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-silver max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Transforming agriculture through innovative projects that blend
              cutting-edge technology with sustainable farming practices
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "border-ecolime bg-ecolime/10 text-white"
                      : "border-white/20 bg-white/5 text-silver hover:text-white"
                  }`}>
                  <span className="font-semibold">{filter.label}</span>
                  <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}>
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 h-full shadow-2xl transition-all duration-500 group-hover:shadow-ecolime/30 overflow-hidden">
                    {/* Project Header */}
                    <div className="p-6 border-b border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-linear-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            statusColors[project.status]
                          }`}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>

                      <p className="text-silver text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Image/Icon */}
                    <div className="p-6 bg-white/5 flex justify-center">
                      <div className="text-6xl">{project.image}</div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-silver text-sm">
                          <FiMapPin className="w-4 h-4 mr-2" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-silver text-sm">
                          <FiCalendar className="w-4 h-4 mr-2" />
                          {project.duration}
                        </div>
                        <div className="flex items-center text-silver text-sm">
                          <FiUsers className="w-4 h-4 mr-2" />
                          {project.farmers} farmers
                        </div>
                      </div>

                      <div className="flex items-center text-ecolime text-sm font-semibold group-hover:underline">
                        View Project Details
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No projects found
              </h3>
              <p className="text-silver">
                Try selecting a different filter category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 "
            onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-linear-to-br from-techblue to-forest rounded-2xl border border-leaf/30 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-hidden"
              onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 bg-linear-to-r ${selectedProject.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <selectedProject.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          statusColors[selectedProject.status]
                        }`}>
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <FiX className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-ecolime mb-3">
                        Project Overview
                      </h3>
                      <p className="text-silver leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <FiMapPin className="w-6 h-6 text-ecolime mb-2" />
                        <div className="text-white font-semibold">Location</div>
                        <div className="text-silver text-sm">
                          {selectedProject.location}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <FiCalendar className="w-6 h-6 text-ecolime mb-2" />
                        <div className="text-white font-semibold">Duration</div>
                        <div className="text-silver text-sm">
                          {selectedProject.duration}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <FiUsers className="w-6 h-6 text-ecolime mb-2" />
                        <div className="text-white font-semibold">
                          Farmers Involved
                        </div>
                        <div className="text-silver text-sm">
                          {selectedProject.farmers}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <FiTarget className="w-6 h-6 text-ecolime mb-2" />
                        <div className="text-white font-semibold">Category</div>
                        <div className="text-silver text-sm capitalize">
                          {selectedProject.category.replace("-", " ")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-ecolime mb-3">
                        Expected Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.outcomes.map((outcome, index) => (
                          <li
                            key={index}
                            className="flex items-center text-silver">
                            <div className="w-2 h-2 bg-ecolime rounded-full mr-3"></div>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="organic" size="md">
                        Download Case Study
                      </Button>
                      <Button variant="outline" size="md">
                        Similar Projects
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-forest to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-2xl">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-silver mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring sustainable agricultural innovation to
              your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="organic" size="lg">
                Start a Project
              </Button>
              <Button variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
