import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function BackgroundLines() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hasMoved]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive Cursor Spotlight Grid */}
      <svg
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{
          opacity: hasMoved ? 0.15 : 0,
          maskImage: `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4A4A4A" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Ambient Faint Graphic Flow Lines (Always visible at low opacity) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        {/* Diagonal Line 1 */}
        <motion.line
          x1="0"
          y1="15%"
          x2="100%"
          y2="85%"
          stroke="#14B8A6"
          strokeWidth="1"
          strokeDasharray="8 16"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Diagonal Line 2 */}
        <motion.line
          x1="100%"
          y1="30%"
          x2="0"
          y2="70%"
          stroke="#14B8A6"
          strokeWidth="1"
          strokeDasharray="12 24"
          animate={{
            strokeDashoffset: [0, 100],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Vertical Guide Lines */}
        <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#14B8A6" strokeWidth="0.5" className="opacity-25" />
        <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#14B8A6" strokeWidth="0.5" className="opacity-25" />
      </svg>

      {/* Interactive Cursor Background Glow Blob (Trails behind mouse) */}
      {hasMoved && (
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full bg-teal-400/10 blur-[90px]"
          animate={{
            x: mousePos.x - 175,
            y: mousePos.y - 175,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 25,
            mass: 0.4,
          }}
        />
      )}

      {/* Static Drifting Ambient Glow Blobs for overall depth */}
      <motion.div
        className="absolute top-[25%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-300/5 blur-[100px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-[25%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-300/5 blur-[120px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default BackgroundLines;
