import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/port.img3.png";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  FaArrowRight,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Frontend Developer",
    "Creative Problem Solver",
    "Passionate Tech Learner",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause at the end of the word
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500); // Pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-56"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full relative top-8">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-3 text-[#333333] tracking-tight">
            <span className="font-light text-2xl md:text-4xl text-gray-500 block mb-1">Hey, I'm</span>{" "}
            <span className="block">
              Parv{" "}
              <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
                Chawada
              </span>
            </span>
          </h1>

          <div className="h-8 mb-5 flex items-center justify-start">
            <p className="uppercase tracking-[4px] text-teal-600 font-bold text-sm md:text-base">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-600/90 leading-relaxed max-w-xl">
            Frontend Developer passionate about turning ideas into interactive
            and engaging digital experiences using modern web technologies.
            Creating fast, responsive, and visually appealing websites that
            combine functionality with exceptional user experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="relative overflow-hidden group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-teal-600 text-white text-[15px] font-semibold hover:bg-teal-700 hover:scale-[1.03] hover:shadow-lg transition-all duration-300 shadow-md"
            >
              {/* Diagonal Slash Shine Effect */}
              <span className="absolute inset-0 w-[30%] h-full bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-[400%] pointer-events-none" />
              
              <span>Contact Me</span>
              <FaArrowRight className="text-sm" />
            </a>

            <a
              href="https://drive.google.com/file/d/1Z2Z-7lLWSp8jK_TGKNgUoAaCoA7H3guK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-teal-500/20 text-teal-600 hover:bg-teal-500/10 hover:border-teal-500 hover:scale-[1.03] transition-all duration-300 shadow-sm"
            >
              <FiDownload className="text-base" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Icon Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="mailto:chawadaparv@gmail.com"
              className="w-12 h-12 rounded-2xl bg-slate-100 text-gray-800 hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-[1.1] hover:shadow-md"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>

            <a
              href="https://github.com/Prog-Parv"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl bg-slate-100 text-gray-800 hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-[1.1] hover:shadow-md"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/parv-chawada-04b31431a"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl bg-slate-100 text-gray-800 hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-[1.1] hover:shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative -top-4">

            {/* Profile Circle with premium double-border ring effect */}
            <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-teal-500 p-[3px] flex items-center justify-center shadow-2xl">
              <div className="w-full h-full rounded-full bg-white p-[6px] flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Parv Chawada"
                  className="w-full h-full rounded-full object-cover object-top border border-gray-200/50 shadow-md"
                />
              </div>
            </div>

            {/* React */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute -top-24 left-20 pointer-events-none opacity-90"
            >
              <FaReact className="text-5xl text-blue-500" />
            </motion.div>

            {/* HTML */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-20 -left-28 pointer-events-none opacity-90"
            >
              <FaHtml5 className="text-5xl text-orange-500" />
            </motion.div>

            {/* CSS */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              className="absolute -bottom-8 -left-24 pointer-events-none opacity-90"
            >
              <FaCss3Alt className="text-5xl text-blue-600" />
            </motion.div>

            {/* Bootstrap */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute -bottom-24 left-36 pointer-events-none opacity-90"
            >
              <FaBootstrap className="text-5xl text-[#7952B3]" />
            </motion.div>

            {/* JavaScript */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-16 -right-12 pointer-events-none opacity-90"
            >
              <FaJs className="text-5xl text-yellow-500" />
            </motion.div>

            {/* Tailwind CSS */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-24 -right-24 pointer-events-none opacity-90"
            >
              <SiTailwindcss className="text-5xl text-[#38BDF8]" />
            </motion.div>

            {/* GitHub */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.0 }}
              className="absolute top-72 -right-16 pointer-events-none opacity-90"
            >
              <FaGithub className="text-5xl text-gray-800" />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;