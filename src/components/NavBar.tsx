import React, { useState } from "react";
import "./css/NavBar.css";
import Logo from "../images/logo.svg";
const NavBar = () => {
  // const am = document.getElementsByClassName("menu-toggle")[0];
  const [class_name, setClassName] = useState({
    nav: "nav",
    icon: "menu-toggle",
  });

  const toggleClassName = () => {
    setClassName(
      class_name.nav === "nav"
        ? {
            nav: "mobile-nav",
            icon: "is-active",
          }
        : {
            nav: "nav",
            icon: "menu-toggle",
          }
    );
  };
  window.onscroll = () => {
    setClassName({
      nav: "nav",
      icon: "menu-toggle",
    });
  };
  return (
    <div className="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          <img src={Logo} alt="Company Logo" />
          <div className="logo_title">
            Dolphin<span className="sublogo_title">Interiors</span>
          </div>
          <div
            className={class_name.icon}
            id="mobile-menu"
            onClick={toggleClassName}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${class_name.nav} no-search`}
            onClick={toggleClassName}
          >
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Work</a>
            </li>
            <li className="nav-item">
              <a href="#">Careers</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="grad-bar"></div>
      </div>
    </div>
  );
};

export default NavBar;
