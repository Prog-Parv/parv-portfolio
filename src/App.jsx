import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import BackgroundLines from "./components/BackgroundLines";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen text-[#4A4A4A]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-teal-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <BackgroundLines />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[99] w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-[#4A4A4A]/10 text-[#4A4A4A] hover:bg-teal-600 hover:text-white shadow-lg flex items-center justify-center transition-colors duration-300 focus:outline-none"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;