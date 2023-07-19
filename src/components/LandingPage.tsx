import React from "react";
import "./css/LandingPage.css";
import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import title1 from "../images/Dolphindream_Infra_Projects_LLP.svg";
const LandingPage = () => {
  return (
    <>
      <div className="landing_page">
        <div className="landing_text">
          <h1 className="head_title">We Build your dreams.</h1>

          <p className="head-paragraph">
            "Synchronized Perfection - Dolphin Interiors, Merging Impeccable
            Precision with the Fluidity of Nature, Tailoring Your Space into a
            Harmonious Masterpiece."
          </p>
          <p className="head-paragraph">
            "To begin crafting your dream space, we invite you to 'Envision'
            your ideal home with us. Book a meeting today!"
          </p>

          <button
            onClick={() => {
              alert("To be implemented");
            }}
            className="get-quote-btn"
          >
            Book a Meeting!
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
