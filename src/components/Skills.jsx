import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 75 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Tools & Databases",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="pt-12 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#4A4A4A]"
        >
          What I{" "}
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Work With
          </span>
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -10 }}
              className="bg-white p-7 rounded-2xl shadow-lg flex flex-col h-full"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-5 text-center text-[#4A4A4A]">
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="text-left font-medium text-gray-700 text-[15px]">
                      {skill.name}
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;