import React from "react";
import "./css/LandingPage.css";
import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import title1 from "../images/Dolphindream_Infra_Projects_LLP.svg";
const LandingPage = () => {
  return (
    <>
      <div className="landing_page">
        <img src={logo} alt=" not found" />
        <img src={title1} alt=" not found" />
        <button
          onClick={() => {
            alert("To be implemented");
          }}
          className="get-quote-btn"
        >
          Get a Quote!
        </button>
      </div>
    </>
  );
};

export default LandingPage;
