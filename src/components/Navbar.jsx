import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "experience", "certifications", "contact"];

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-[#4A4A4A]/5 shadow-sm"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-3" : "py-4.5 md:py-5"
        }`}
      >
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <h2 className="font-normal text-lg md:text-xl tracking-wider text-[#4A4A4A]">
            <a href="#home" className="hover:opacity-85 transition duration-300">
              {"<Parv Chawada />"}
            </a>
          </h2>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center relative left-6">
          <ul className="flex gap-10 text-base lg:text-lg font-bold">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative py-1 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-teal-600 after:transition-all after:duration-300 ${
                      isActive
                        ? "text-teal-600 after:w-full"
                        : "text-[#4A4A4A] hover:text-teal-600 after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Hire Me Button & Hamburger */}
        <div className="flex-1 flex justify-end items-center gap-5">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base font-bold rounded-full border border-teal-500/30 text-teal-600 bg-teal-500/10 backdrop-blur-md hover:bg-teal-500/20 hover:text-teal-700 hover:border-teal-500/60 hover:scale-[1.08] hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:shadow-teal-500/20 cursor-pointer"
          >
            Hire Me
          </a>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-6 bg-[#4A4A4A] rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#4A4A4A] rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#4A4A4A] rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-[#4A4A4A]/10 shadow-lg md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8 px-6 text-lg font-bold text-[#4A4A4A]">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="w-full text-center">
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 transition-colors duration-200 ${
                        isActive ? "text-teal-600" : "hover:text-teal-600"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
