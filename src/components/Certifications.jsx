import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "Java Training",
      issuer: "IIT Bombay (Spoken Tutorial)",
      date: "Dec 2025",
      link: "#",
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Jan 2026",
      link: "https://aws.amazon.com/training/path-cloud-practitioner/",
    },
  ];

  return (
    <section id="certifications" className="pt-12 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#4A4A4A]"
        >
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-[#4A4A4A]/5 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                {/* Details */}
                <div>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-[#4A4A4A] mt-1 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Issued {cert.date} • No Expiration
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;