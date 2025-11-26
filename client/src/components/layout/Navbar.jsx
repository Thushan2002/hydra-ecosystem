import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo_white from "../../assets/logo_white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technology", path: "/technology" },
    { name: "Farming", path: "/farming" },
    { name: "Projects", path: "/projects" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed py-3 top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl shadow-lg rounded-2xl mx-3"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick("/")}
            className="flex items-center space-x-3 cursor-pointer">
            <img
              src={scrolled ? logo : logo_white}
              alt="Hydra Logo"
              className="h-15 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="relative cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}>
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-primary font-bold"
                        : scrolled
                        ? "text-forest hover:text-primary"
                        : "text-white hover:text-ecolime"
                    }`}>
                    {item.name}
                  </span>

                  {/* Active Indicator */}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary to-ecolime rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("/contact")}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg ${
                scrolled
                  ? "bg-linear-to-r from-primary to-leaf text-white hover:shadow-xl"
                  : "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
              }`}>
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-forest" : "text-white"
            }`}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl overflow-hidden border border-gray-200">
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    whileHover={{ x: 10 }}
                    className={`text-lg font-medium cursor-pointer transition-all ${
                      isActive(item.path)
                        ? "text-primary font-bold"
                        : "text-forest hover:text-primary"
                    }`}>
                    {item.name}
                    {isActive(item.path) && " ←"}
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick("/contact")}
                  className="w-full mt-6 px-6 py-3 bg-linear-to-r from-primary to-leaf text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
