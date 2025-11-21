import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import logo_white from "../../assets/logo_white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Technology",
      links: [
        { name: "AI Systems", href: "#" },
        { name: "Drone Tech", href: "#" },
        { name: "IoT Solutions", href: "#" },
        { name: "Data Analytics", href: "#" },
      ],
    },
    {
      title: "Farming",
      links: [
        { name: "Native Seeds", href: "#" },
        { name: "Animal Farming", href: "#" },
        { name: "Mushroom Cultivation", href: "#" },
        { name: "Smart Farming", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiTwitter, href: "#", name: "Twitter" },
    { icon: FiLinkedin, href: "#", name: "LinkedIn" },
    { icon: FiGithub, href: "#", name: "GitHub" },
  ];

  return (
    <footer className="bg-linear-to-b from-forest to-techblue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4">
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-2xl">
                  <img src={logo_white} className="w-15 h-15" />
                </span>
                <p className="text-xl font-semibold text-ecolime">
                  When AI Meets Organic
                </p>
              </div>
              <p className="text-silver mb-4 max-w-md">
                Merging artificial intelligence with organic farming to create
                sustainable agricultural ecosystems for the future.
              </p>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}>
              <h3 className="font-bold text-lg mb-4 text-leaf">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-silver hover:text-ecolime transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-8 pt-8 border-t border-primary/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <FiMapPin className="text-droneblue" size={20} />
              <span className="text-silver">Trincomalee, Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiPhone className="text-droneblue" size={20} />
              <span className="text-silver">+94 XX XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="text-droneblue" size={20} />
              <span className="text-silver">info@hydra-agri.com</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary/30 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-silver mb-4 md:mb-0">
            &copy; {currentYear} Hydra Organic AI Farming. All rights reserved.
          </motion.p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, color: "#CFFF4D" }}
                className="text-silver hover:text-ecolime transition-colors duration-300">
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
