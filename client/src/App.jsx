import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Farming from "./pages/Farming";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import FullPageLoading from "./components/ui/FullPageLoading";
import FloatingDots from "./components/animations/FloatingDots";
import FloatingPlants from "./components/animations/FloatingPlants";

const App = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isFirstLoad && <FullPageLoading key="loader" />}
      </AnimatePresence>

      {!isFirstLoad && (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/farming" element={<Farming />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
