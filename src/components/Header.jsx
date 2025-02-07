import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/jb_logo.png";
import "./Header.css";

const NavItems = () => {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navBar">
      {/* <li className="navItem">
        <Link
          to="/"
          className={currentPage === "/" ? "navLinkActive" : "navLink"}
        >
          [HOME]
        </Link>
      </li> */}
      <li className="navItem">
        <Link
          to="/about"
          className={currentPage === "/about" ? "navLinkActive" : "navLink"}
        >
          [ABOUT]
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/projects"
          className={currentPage === "/projects" ? "navLinkActive" : "navLink"}
        >
          [PROJECTS]
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/resume"
          className={currentPage === "/resume" ? "navLinkActive" : "navLink"}
        >
          [RESUME]
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/contact"
          className={currentPage === "/contact" ? "navLinkActive" : "navLink"}
        >
          [CONTACT]
        </Link>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <header>
      <div className="leftContainer">
        <div>
          <Link to="/about">
            <img id="logoImage" src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default Header;
