import React from "react";
import "./css/Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact-us">
        <span className="footer__contact-us--head">Contact Us</span>
        <div className="footer__contact-us--phone">
          <span className="material-symbols-outlined">call</span>
          +918956894565
        </div>
      </div>
      <div className="footer__contact-us--email">
        <span className="material-symbols-outlined">mail</span>
        dolphininterior@gmail.com
      </div>
    </div>
  );
};

export default Footer;
