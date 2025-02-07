import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, techStack, image, projectLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-tech">
          <strong>Technologies:</strong> {techStack}
        </p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
