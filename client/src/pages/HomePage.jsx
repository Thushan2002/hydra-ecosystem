import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import drone_farm from "../assets/drone_farm.png";
import ai_farm from "../assets/ai_farm.png";
import IOT_farm from "../assets/IOT_farm.png";
import cult_farm from "../assets/cult_farm.png";
import FloatingPlants from "../components/animations/FloatingPlants";
import FloatingDots from "../components/animations/FloatingDots";
import { Link } from "react-router-dom";
import ParticleRings from "../components/three/ParticleRings";
import { SmoothHero } from "../components/layout/home/SmoothHero";
import Mission from "../components/layout/home/Mission";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest/95 to-primary/90 relative overflow-hidden">
      <div className="relative z-10">
        {/* Animated Hero section */}
        <SmoothHero />
        <section
          id="home"
          className="pt-20 lg:pt-0 min-h-screen bg-linear-to-br from-techblue via-forest to-primary relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingDots />
            <FloatingPlants />
          </div>

          {/* 3d Content */}
          <div className="relative  z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center items-center">
            <div className=" w-full">
              <ParticleRings />
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-10 border-2 border-ecolime rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-ecolime rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* Mission Overview Section */}
        <Mission />

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
