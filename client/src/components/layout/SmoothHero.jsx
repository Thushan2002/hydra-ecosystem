import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { itemVariants } from "../animations/Item";
import drone_agri from "../../assets/drone_agri.png";
import smart_farm from "../../assets/smart_farm.png";
import ai_analysis from "../../assets/ai_analysis.png";
import organic_farm from "../../assets/organic_farm.png";

export const SmoothHero = () => {
  return (
    <div className="bg-linear-to-br from-techblue via-forest to-primary">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}>
        <Hero />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1300;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full">
      <CenterImage />

      <ParallaxImages />

      <HeroContent />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-linear-to-b from-transparent to-techblue/90" />
    </div>
  );
};

const HeroContent = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, SECTION_HEIGHT * 0.5], [1, 0]);
  const scale = useTransform(scrollY, [0, SECTION_HEIGHT * 0.3], [1, 0.8]);
  const y = useTransform(scrollY, [0, SECTION_HEIGHT * 0.5], [0, 100]);

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 z-10 flex h-screen items-center justify-center"
      style={{ opacity, scale, y }}>
      <div className="text-center text-white px-4 max-w-4xl">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="block">Welcome to</span>
          <span className="block bg-linear-to-r from-ecolime to-leaf bg-clip-text text-transparent">
            HYDRA
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-silver mb-8 font-light">
          <Typewriter
            words={["When AI Meets Organic"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
            onType={(typewriter) => {
              // Custom rendering to maintain span styles
              const currentText = typewriter.state.text;
              const words = currentText.split(" ");

              if (words.length >= 4) {
                return (
                  <>
                    {words[0]}{" "}
                    <span className="text-droneblue font-semibold">
                      {words[1]}
                    </span>{" "}
                    {words[2]}{" "}
                    <span className="text-leaf font-semibold">{words[3]}</span>
                  </>
                );
              }
              return currentText;
            }}
          />
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-silver/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Revolutionizing sustainable agriculture through artificial
          intelligence, drone technology, and IoT solutions for a greener
          future.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/technology"
            className="bg-linear-to-r from-ecolime to-leaf text-forest font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-ecolime/50 transition-all duration-300 flex items-center gap-2">
            Explore Technology <FiArrowRight />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1592517918252-0d4cb77ac0ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src={drone_agri}
        alt="Agricultural drone technology"
        start={-200}
        end={200}
        className="w-1/3 rounded-2xl shadow-2xl"
      />
      <ParallaxImg
        src={smart_farm}
        alt="Smart farming with IoT sensors"
        start={200}
        end={-250}
        className="mx-auto w-2/3 rounded-2xl shadow-2xl"
      />
      <ParallaxImg
        src={ai_analysis}
        alt="AI powered agriculture analytics"
        start={-200}
        end={200}
        className="ml-auto w-1/3 rounded-2xl shadow-2xl"
      />
      <ParallaxImg
        src={organic_farm}
        alt="Sustainable organic farming"
        start={0}
        end={-500}
        className="ml-24 w-5/12 rounded-2xl shadow-2xl"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
