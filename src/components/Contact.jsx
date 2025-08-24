import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
        Contact Me
      </h2>
      <p className="text-gray-300 text-center mb-12">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg font-semibold text-white transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: "#0ea5e9",
              boxShadow: "0 0 2px #0ea5e9, 0 0 16px #0ea5e9, 0 0 8px #0ea5e9",
              animation: "glow 1.5s ease-in-out infinite alternate",
            }}
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 gap-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
