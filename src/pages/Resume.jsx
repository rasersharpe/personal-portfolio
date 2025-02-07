import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section>
      <div>
        <p className="skills">
          <strong>Front End Proficiencies:</strong>
          <ul className="frontList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
          </ul>
        </p>
        <p className="skills">
          <strong>Back End Proficiencies:</strong>
          <ul className="backList">
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL Databases (PostgreSQL, MySQL)</li>
            <li>Deployment</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Resume;
