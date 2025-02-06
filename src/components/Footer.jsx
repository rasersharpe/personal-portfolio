import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>&copy; 2025 Jay Bhatt</p>
      </div>
      <div className="footerIcons">
        <a
          href="https://github.com/rasersharpe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="fa-icon" />
        </a>
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="fa-icon" />
        <a href="mailto:jay.bhatt@me.com">
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            size="2x"
            className="fa-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
