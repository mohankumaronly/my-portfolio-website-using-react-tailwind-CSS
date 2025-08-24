import React from "react";

// You can replace these with your own SVG/PNG images in /assets folder
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import flutterLogo from "../assets/flutter.png";
import nodeLogo from "../assets/nodejs.png";
import mongoLogo from "../assets/mongodb.png";
import expressLogo from "../assets/express.png";
import gitLogo from "../assets/git.png";
import figmaLogo from "../assets/figma.png";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Flutter", logo: flutterLogo },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "MongoDB", logo: mongoLogo },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Postman", logo: "https://img.icons8.com/color/48/postman.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-16">My Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="bg-gray-800 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
