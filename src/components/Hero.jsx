import React from "react";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black h-[120vh] md:h-screen flex items-center">
      {/* Inner Container */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 px-6 py-12">

        {/* Text Section */}
        <div className="text-center md:text-left text-white flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
            Hi, I am <br />
            <span className="text-blue-400 text-4xl sm:text-5xl md:text-5xl lg:text-6xl">Mohan</span>
          </h1>

          <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            I am a Full Stack Developer
          </div>

          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-300 leading-relaxed font-semibold">
            I am a fresher passionate about software development. I build scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and cross-platform mobile apps with Flutter. I focus on writing clean, maintainable code and creating efficient, high-quality solutions.
          </p>

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download="Mohan_Kumar_Resume.pdf"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: '#0ea5e9',
              boxShadow: '0 0 2px #0ea5e9, 0 0 16px #0ea5e9, 0 0 8px #0ea5e9',
              animation: 'glow 1.5s ease-in-out infinite alternate',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mb-8 md:mb-0 flex justify-center md:justify-end">
          <img
            src={profileImg}
            alt="Hero"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg border-4 border-gray-700"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
