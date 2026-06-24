import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold mb-6">
          Frontend Developer
        </h3>

        <div className="flex justify-center gap-6 text-2xl">

          <a
            href="https://github.com/Prog-Parv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/parv-chawada-04b31431a"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:chawadaparv@gmail.com"
            className="hover:text-teal-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 text-sm mt-6">
          © Designed & built by Parv Chawada · 2026 · All rights reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;