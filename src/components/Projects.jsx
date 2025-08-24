import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const Projects = () => {
  const projects = [
   {
      title: "Flutter food delivery Mobile App",
      description: "Cross-platform mobile application using Flutter for Android and iOS.",
      image: project1,
      link: "https://github.com/mohankumaronly/Burger-delivery-app",
    },
    {
      title: "Flutter traveling Mobile App",
      description: "Cross-platform mobile application using Flutter for Android and iOS.",
      image: project2,
      link: "https://github.com/mohankumaronly/Traveling-Ui-design-using-the-flutter",
    },
    {
      title: "Flutter chat bot Mobile App",
      description: "Cross-platform mobile application using Flutter for Android and iOS.",
      image: project3,
      link: "https://github.com/mohankumaronly/chat-bot",
    },
     {
      title: "Flutter food delivery Mobile App",
      description: "Cross-platform mobile application using Flutter for Android and iOS.",
      image: project4,
      link: "https://github.com/mohankumaronly/Burger-delivery-app",
    },
     {
      title: "Portfolio Website using react and tailwind css",
      description: "react and tailwind css website fully responsive portfolio website",
      image: project5,
      link: "https://github.com/mohankumaronly/my-portfolio-website-using-react-tailwind-CSS",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-16 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        My Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer min-h-[450px] flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-72 lg:h-80 object-cover"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 font-semibold hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
