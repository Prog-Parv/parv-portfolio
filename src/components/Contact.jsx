import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCheckCircle,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    // Get your free Access Key at: https://web3forms.com/
    const accessKey = "65af4718-047e-41b4-bc69-218ea82163a2"; 
    
    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      // Simulated sending for testing if key is not set
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 4000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 4000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-12 pb-12 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#4A4A4A]"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side Links */}
          <div className="flex flex-col justify-center max-w-lg mx-auto w-full">

            <h4 className="text-2xl font-bold mb-6 text-center text-[#4A4A4A]">
              Find me on
            </h4>

            <div className="space-y-4 w-full flex flex-col items-center">

              <a
                href="https://github.com/Prog-Parv"
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-sm h-14 flex items-center justify-start gap-4 px-6 py-3.5 border border-gray-200 rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition shadow-sm text-[#4A4A4A] text-base font-semibold"
              >
                <FaGithub className="text-2xl text-gray-800 flex-shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/parv-chawada-04b31431a"
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-sm h-14 flex items-center justify-start gap-4 px-6 py-3.5 border border-gray-200 rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition shadow-sm text-[#4A4A4A] text-base font-semibold"
              >
                <FaLinkedin className="text-2xl text-blue-600 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:chawadaparv@gmail.com"
                className="w-full max-w-sm h-14 flex items-center justify-start gap-4 px-6 py-3.5 border border-gray-200 rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition shadow-sm text-[#4A4A4A] text-base font-semibold"
              >
                <FaEnvelope className="text-2xl text-red-500 flex-shrink-0" />
                <span className="truncate">chawadaparv@gmail.com</span>
              </a>

              <a
                href="tel:+918103403369"
                className="w-full max-w-sm h-14 flex items-center justify-start gap-4 px-6 py-3.5 border border-gray-200 rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition shadow-sm text-[#4A4A4A] text-base font-semibold"
              >
                <FaPhone className="text-xl text-green-500 flex-shrink-0" />
                <span>+91 8103403369</span>
              </a>

            </div>

            <div className="mt-4 p-6 bg-white border border-teal-500/20 rounded-2xl text-left w-full shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer transition-all duration-300">
              {/* Header with Pulsing Dot */}
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                </span>
                <span className="text-sm font-bold text-teal-600">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-[#555555] leading-relaxed">
                Actively looking for Frontend Developer / Web Developer internship roles alongside my B.Tech at <strong className="text-gray-800 font-bold"> IPS Academy, Indore</strong>.
              </p>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg relative overflow-hidden md:-right-6">
            <AnimatePresence>
              {isSent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-8 text-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.15 }}
                  >
                    <FaCheckCircle className="text-6xl text-[#27C93F] mb-4" />
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-2 text-[#4A4A4A]">Message Sent!</h4>
                  <p className="text-gray-600 max-w-xs leading-relaxed">
                    Thank you for reaching out, Parv. Your message has been sent successfully!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label className="text-sm font-semibold text-teal-600 mb-1.5 block pl-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Good Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full p-4 bg-slate-100 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-gray-800 placeholder-gray-400 font-medium"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="text-sm font-semibold text-teal-600 mb-1.5 block pl-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Company"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full p-4 bg-slate-100 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-gray-800 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="text-sm font-semibold text-teal-600 mb-1.5 block pl-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Job Opportunity / Collaboration"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full p-4 bg-slate-100 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-gray-800 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="text-sm font-semibold text-teal-600 mb-1.5 block pl-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell me about the opportunity or project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full p-4 bg-slate-100 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-gray-800 placeholder-gray-400 font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition flex items-center justify-center gap-2 disabled:bg-teal-400 disabled:cursor-not-allowed shadow-md text-base"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;