import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa";

function About() {
  const infoItems = [
    {
      icon: FaGraduationCap,
      label: "Degree",
      value: (
        <>
          B.Tech CSIT
          <span className="block text-gray-500 font-normal text-xs md:text-sm mt-0.5">
            IPS Academy, Indore
          </span>
        </>
      ),
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: (
        <>
          Indore
          <span className="block text-gray-500 font-normal text-xs md:text-sm mt-0.5">
            MP, India
          </span>
        </>
      ),
    },
    {
      icon: FaCalendarAlt,
      label: "Graduation",
      value: "2028 (Expected)",
    },
    {
      icon: FaCode,
      label: "CGPA",
      value: "7.76 / 10",
    },
  ];

  return (
    <section
      id="about"
      className="pt-12 pb-12 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#4A4A4A]"
        >
          Who I{" "}
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Am
          </span>
        </motion.h3>

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Description Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-center"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I'm Parv Chawada, a B.Tech student in Computer Science & Information Technology at IPS Academy, Indore. I am passionate about web development and enjoy creating modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              I have a strong foundation in HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS, and I am currently expanding my skills in React and modern frontend development. Through my internship experience and personal projects, I continue to strengthen my technical skills and grow as a developer.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Currently, I am gaining practical industry experience through my internship, where
              I work on real-world projects and collaborate with developers to build efficient
              web solutions.
            </p>
          </motion.div>

          {/* Right Column: Info Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {infoItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100/50 flex flex-col justify-between min-h-[130px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 text-lg shadow-sm">
                    <IconComponent />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-400 block mt-3.5">
                      {item.label}
                    </span>
                    <h4 className="text-[15.5px] font-bold text-gray-800 mt-1 leading-snug">
                      {item.value}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;