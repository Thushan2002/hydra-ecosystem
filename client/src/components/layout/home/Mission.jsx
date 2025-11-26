import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import smart_farm from "../../../assets/feat_1.png";
import organic_farm from "../../../assets/feat_2.png";

const MISSION_IMG_PADDING = 12;

export const MissionParallaxSection = ({ features }) => {
  return (
    <div className="bg-transparent">
      <MissionParallaxContent
        imgUrl={smart_farm}
        subheading="Our Vision"
        heading="AI Meets Organic">
        <MissionContent features={features} />
      </MissionParallaxContent>

      <MissionParallaxContent
        imgUrl={organic_farm}
        subheading="Technology"
        heading="Smart Farming Revolution">
        <StatsContent />
      </MissionParallaxContent>
    </div>
  );
};

const MissionParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: MISSION_IMG_PADDING,
        paddingRight: MISSION_IMG_PADDING,
      }}>
      <div className="relative h-[150vh]">
        <MissionStickyImage imgUrl={imgUrl} />
        <MissionOverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const MissionStickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${MISSION_IMG_PADDING * 2}px)`,
        top: MISSION_IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl">
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-techblue/80 via-forest/70 to-primary/60"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const MissionOverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-block mb-4">
        <div className="w-20 h-1 bg-linear-to-r from-ecolime to-leaf rounded-full mx-auto"></div>
      </motion.div>
      <p className="mb-4 text-center text-2xl md:mb-6 md:text-4xl font-light text-ecolime">
        {subheading}
      </p>
      <p className="text-center text-5xl font-bold md:text-8xl bg-linear-to-r from-ecolime to-leaf bg-clip-text text-transparent">
        {heading}
      </p>
    </motion.div>
  );
};

const MissionContent = ({ features }) => (
  <div className="mx-auto max-w-7xl px-4 pb-24 pt-12">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-xl text-silver mb-8 leading-relaxed">
          To revolutionize agriculture by seamlessly integrating artificial
          intelligence, drone technology, and IoT solutions with traditional
          organic farming methods, creating sustainable ecosystems that benefit
          both humanity and nature.
        </p>
        <button className="rounded-full bg-linear-to-r from-ecolime to-leaf px-8 py-4 text-lg font-semibold text-forest transition-all hover:shadow-2xl hover:shadow-ecolime/50">
          Join Our Mission <FiArrowUpRight className="inline ml-2" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.slice(0, 4).map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:border-ecolime/30 transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="w-3 h-8 bg-linear-to-b from-ecolime to-leaf rounded-full mr-4"></div>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const StatsContent = () => {
  const stats = [
    { number: "50%", label: "Increase in Yield" },
    { number: "30%", label: "Water Savings" },
    { number: "100+", label: "Native Species" },
    { number: "24/7", label: "AI Monitoring" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Measurable Impact
          </h2>
          <p className="text-xl text-silver mb-8 leading-relaxed">
            Our technology-driven approach delivers tangible results that
            transform traditional farming into sustainable, high-yield
            agricultural systems.
          </p>
          <button className="rounded-full border-2 border-ecolime px-8 py-4 text-lg font-semibold text-ecolime transition-all hover:bg-ecolime/10">
            View Case Studies <FiArrowUpRight className="inline ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-ecolime/30 transition-all duration-300">
              <div className="text-3xl font-bold text-ecolime drop-shadow-lg mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-silver font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Usage in your main component:
const Mission = () => {
  const features = [
    {
      image: "ai_farm",
      title: "AI-Powered Analytics",
      description:
        "Advanced machine learning algorithms optimize crop yields and resource allocation.",
    },
    {
      image: "drone_farm",
      title: "Drone Technology",
      description:
        "Autonomous drones monitor crop health and automate precision farming tasks.",
    },
    {
      image: "IOT_farm",
      title: "Smart IoT Farming",
      description:
        "Real-time sensor networks and automated systems for precision agriculture.",
    },
    {
      image: "cult_farm",
      title: "Mushroom Cultivation",
      description:
        "Smart controlled environments for optimal mushroom growth and quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-techblue via-forest/95 to-primary/90">
      <MissionParallaxSection features={features} />
    </div>
  );
};

export default Mission;
