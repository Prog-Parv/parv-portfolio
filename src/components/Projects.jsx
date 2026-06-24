import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React, Tailwind CSS, Framer Motion",
      desc: "Personal portfolio showcasing skills, projects and experience.",
    },
    {
      title: "Employment Information Center",
      tech: "HTML, CSS, JavaScript",
      desc: "Candidate registration system with form validation.",
    },
    {
      title: "JavaScript Mini Projects",
      tech: "JavaScript",
      desc: "Calculator, ToDo App and DOM-based projects.",
    },
  ];

  return (
    <section id="projects" className="pt-12 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#4A4A4A]"
        >
          What I've{" "}
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Built
          </span>
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-[#4A4A4A]/5 group"
            >
              {/* Browser Mockup Header */}
              <div className="bg-gray-100/85 px-5 py-3.5 flex items-center gap-1.5 border-b border-gray-200/50">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-gray-400 select-none truncate">
                  {project.title.toLowerCase().replace(/\s+/g, "-")}.dev
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-[#4A4A4A]">
                  {project.title}
                </h3>

                <p className="text-xs font-bold text-teal-600 mb-4 uppercase tracking-wider">
                  {project.tech}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;