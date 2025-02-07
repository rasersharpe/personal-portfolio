import React from "react";

import ProjectCard from "../components/ProjectCard";

import "./Projects.css";

import portfolio from "../assets/images/portfolio.png";
import employee from "../assets/images/employee.png";
import vehicle from "../assets/images/vehicle.png";
import readme from "../assets/images/readme.png";
import stopwatch from "../assets/images/stopwatch.png";
import weather from "../assets/images/weather.png";

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
    {
      title: "README Generator",
      description: "An easy to use README generator for your projects.",
      techStack: "Node.js, PostgreSQL, Inquirer",
      image: readme,
      projectLink: "https://github.com/rasersharpe/README-generator",
    },
    {
      title: "ChronoByte Stopwatch",
      description: "A pleasing stopwatch with fun unicorn and space modes.",
      techStack: "HTML, Bootstap, javascript",
      image: stopwatch,
      projectLink: "https://mbauer99621.github.io/Stopwatch-Timer/",
    },
    {
      title: "Weather Dashboard",
      description:
        "An app that displays the current weather and forecast for a city.",
      techStack: "HTML, CSS, javascript, TypeScript, OpenWeatherMap API",
      image: weather,
      projectLink: "https://weather-dashboard-ojrv.onrender.com/",
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
