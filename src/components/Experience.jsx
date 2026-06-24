import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "IndiaWebSoft",
      location: "Indore, MP",
      period: "April 2026 - June 2026",
      desc: "Gained hands-on industry experience building and deploying modern, responsive, and performance-optimized web interfaces for live, production-ready web applications. Collaborated closely with developers to implement interactive features and bring real-world projects to life.",
      bullets: [
        "Worked directly on deployment-ready, live web projects, ensuring robust frontend performance and smooth user experiences.",
        "Developed and maintained clean, responsive web pages using HTML5, CSS3, JavaScript, and Tailwind CSS.",
        "Optimized website interfaces for cross-device compatibility, ensuring pixel-perfect layouts on mobile, tablet, and desktop screens.",
        "Collaborated with developers and project managers to translate mockups into semantic and highly interactive UI code.",
        "Identified and resolved design bugs on active web projects, improving page loading speeds and overall usability."
      ]
    }
  ];

  return (
    <section id="experience" className="pt-12 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#4A4A4A]"
        >
          My{" "}
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Journey
          </span>
        </motion.h3>

        <div className="relative border-l border-gray-300/60 ml-4 md:ml-8 pl-8 md:pl-12 py-2">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              
              {/* Pulsing Dot on the Timeline */}
              <span className="absolute -left-[41px] md:-left-[57px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#E3EDF7] border-2 border-teal-600 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-600 animate-ping opacity-75" />
                <span className="absolute h-2.5 w-2.5 rounded-full bg-teal-600" />
              </span>

              {/* Main Timeline Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#4A4A4A]/5 hover:shadow-xl transition-all duration-300"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-5">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#4A4A4A]">
                      {exp.role}
                    </h3>
                    
                    <p className="text-lg text-teal-600 font-semibold flex items-center gap-2 mt-1">
                      <FaBriefcase className="text-sm" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 space-y-1.5 shrink-0">
                    <p className="flex items-center gap-2 font-semibold">
                      <FaCalendarAlt className="text-xs" />
                      <span>{exp.period}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-xs text-red-500/80" />
                      <span>{exp.location}</span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                  {exp.desc}
                </p>

                {/* Accomplishment Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;