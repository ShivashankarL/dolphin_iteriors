import React, { useState } from "react";
import "./css/NavBar1.scss";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}
enum NavTypes {
  HOME = "HOME",
  GALLERY = "GALLERY",
}
const NavBar: React.FC<Props> = ({ children }) => {
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
  console.log(class_name.icon);

  window.onscroll = () => {
    setClassName({
      nav: "nav",
      icon: "menu-toggle",
    });
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-nav-wrapper">
          <nav className="navbar-nav">
            <img src={Logo} alt="Company Logo" className="navbar-logo-img" />
            <div className="logo-title">Dolphin Dream Infra Projects</div>
            <div
              className="menu-toggle"
              id="mobile-menu"
              onClick={toggleClassName}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`${class_name.nav} no-search`}>
              <li className="nav-item">
                <span className="material-symbols-outlined">home</span>
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <span className="material-symbols-outlined">
                  gallery_thumbnail
                </span>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <span className="material-symbols-outlined">contacts</span>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {children}
    </>
  );
};

export default NavBar;
