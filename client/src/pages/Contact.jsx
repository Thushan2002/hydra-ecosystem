import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiUser,
  FiMessageCircle,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../components/ui/Button";
import { containerVariants } from "../components/animations/Container";
import { itemVariants } from "../components/animations/Item";
import { cardVariants } from "../components/animations/CardSpring";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      details: "info@hydra-agri.com",
      description: "Send us an email anytime",
      color: "from-primary to-leaf",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+94 77 123 4567",
      description: "Mon to Fri, 9am to 6pm",
      color: "from-techblue to-droneblue",
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      details: "Trincomalee, Sri Lanka",
      description: "Come say hello at our office",
      color: "from-seedgold to-mushroom",
    },
    {
      icon: FiClock,
      title: "Office Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM",
      color: "from-leaf to-ecolime",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "#",
      color: "hover:bg-green-500",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "#",
      color: "hover:bg-sky-500",
    },
  ];

  // Fix Leaflet default icon issue in React
  const customIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-ecolime rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-leaf rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 min-h-screen flex justify-center items-center bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center text-white">
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="w-24 h-1 bg-linear-to-r from-ecolime to-leaf rounded-full mx-auto mb-4"></div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                Get In Touch
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-silver max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Ready to transform agriculture together? Let's start a
              conversation about your sustainable farming needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
                Let's Start a Conversation
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-silver text-lg leading-relaxed mb-8">
                Whether you're a farmer looking to adopt smart agriculture
                practices, an investor interested in sustainable farming, or a
                partner wanting to collaborate, we'd love to hear from you.
              </motion.p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div
                      className={`w-12 h-12 bg-linear-to-r ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-ecolime font-semibold mb-1">
                      {info.details}
                    </p>
                    <p className="text-silver text-sm">{info.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 text-white transition-colors ${social.color}`}>
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}>
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-leaf/30 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Send us a Message
                </h2>
                <p className="text-silver mb-8">
                  We'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-silver focus:outline-none focus:border-ecolime transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-semibold mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-silver focus:outline-none focus:border-ecolime transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-semibold mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <FiMessageCircle className="absolute left-4 top-4 text-silver w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full bg-white/5 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-silver focus:outline-none focus:border-ecolime transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="organic"
                      size="lg"
                      className="w-full">
                      <FiSend className="mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-4 bg-ecolime/10 rounded-2xl border border-ecolime/30">
                  <p className="text-sm text-ecolime text-center">
                    💡 Looking for immediate assistance? Call us directly at +94
                    77 123 4567
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
              Find Us on the Map
            </motion.h2>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-ecolime/30">
              <MapContainer
                center={[8.7189671, 81.174844]}
                zoom={15}
                style={{ height: "500px", width: "100%" }}
                scrollWheelZoom={true}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[8.7189671, 81.174844]} icon={customIcon}>
                  <Popup>
                    <div className="text-center font-semibold">
                      <p className="text-lg text-primary">
                        Neirah Tech Solution (Pvt) Ltd.
                      </p>
                      <p className="text-sm">Ward No:04, Valaiyootru</p>
                      <p className="text-sm">Nilaveli 31000</p>
                      <p className="text-sm">Trincomalee, Sri Lanka</p>
                      <p className="text-xs text-ecolime mt-2">
                        We'd love to see you!
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <motion.div variants={itemVariants} className="mt-6 text-center">
              <p className="text-white text-lg font-medium">
                Neirah Tech Solution (Pvt) Ltd.
              </p>
              <p className="text-silver">
                Ward No:04, Valaiyootru, Nilaveli 31000, Sri Lanka
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8.7189671,81.174844"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-ecolime/20 border border-ecolime rounded-full text-ecolime font-semibold hover:bg-ecolime hover:text-primary transition-all">
                Open in Google Maps
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer:
                  "We typically respond within 24 hours during business days. For urgent matters, please call us directly.",
              },
              {
                question: "Do you offer consultations for new farmers?",
                answer:
                  "Yes! We provide free initial consultations to understand your needs and recommend suitable solutions.",
              },
              {
                question: "What regions do you currently operate in?",
                answer:
                  "We're currently focused on Sri Lanka with plans to expand to other South Asian countries soon.",
              },
              {
                question: "Can I visit your demonstration farms?",
                answer:
                  "Absolutely! We welcome visitors to our demonstration farms in Trincomalee. Schedule your visit in advance.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-silver">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
