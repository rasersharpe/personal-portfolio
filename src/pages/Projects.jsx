import React from "react";

import ProjectCard from "../components/ProjectCard";

import "./Projects.css";

import portfolio from "../assets/images/portfolio.png";
import employee from "../assets/images/employee.png";
import vehicle from "../assets/images/vehicle.png";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React.",
      techStack: "React, CSS, JavaScript",
      image: portfolio,
      projectLink: "https://jbpersonalportfolio.netlify.app/",
    },
    {
      title: "Employee Tracker",
      description:
        "A CMS tool to track employees, built with Node.js and PostgreSQL.",
      techStack: "Node.js, PostgreSQL, Inquirer",
      image: employee,
      projectLink: "https://github.com/rasersharpe/employee-tracker",
    },
    {
      title: "Vehicle Builder",
      description: "A multi-vehicle builder and simulator wrapped in a CMS.",
      techStack: "Node.js, PostgreSQL, Inquirer",
      image: vehicle,
      projectLink: "https://github.com/rasersharpe/vehicle-builder",
    },
  ];

  return (
    <section>
      <div className="projects-page">
        <div className="projectsFlex">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
