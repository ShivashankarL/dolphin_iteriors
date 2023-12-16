import React from "react";
import "./css/Footer.scss";
import FaceBook from "../images/faceboook.svg";
import Instagram from "../images/instagram.svg";
import Gmail from "../images/gmail.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact-us">
        <div className="footer__contact-us--head">
          <span className="footer__contact-us--head--title">Contact Us</span>
          <span className="footer__contact-us--head--line"></span>
        </div>
        <div className="footer__contact-us--phone">
          <span className="material-symbols-outlined">call</span> &nbsp;
          8956894565
        </div>
        <div className="footer__contact-us--email">
          <span className="material-symbols-outlined">mail</span> &nbsp; &nbsp;
          dolphininterior@gmail.com
        </div>
      </div>
      <span className="footer__contact-us--border-span"></span>
      <div className="footer__address">
        <div className="footer__address--head">
          <span className="footer__address--head--title">Address</span>
          <span className="footer__address--head--line"></span>
        </div>
        <div className="footer__address--body">
          #216 ward No 13 Tekal Opp to Seed Corp Petechamanhalli ext Tekal main
          road Kolar-563101
          <div className="footer__address--body--phno-email">
            PhNo: 8956894565 <br />
            Email: dolphininterior@gmail.com
          </div>
        </div>
      </div>
      <span className="footer__contact-us--border-span"></span>
      <div className="footer__followus">
        <div className="footer__followus--head">
          <span className="footer__followus--head--title">Follow Us</span>
          <span className="footer__followus--head--line"></span>
        </div>
        <div className="footer__followus--body">
          <div className="footer__followus--body--img_label">
            <img src={FaceBook} alt="Facebook" />
            <span>Faceboook</span>
          </div>
          <div className="footer__followus--body--img_label">
            <img src={Instagram} alt="Instagram" />
            <span>Instagram</span>
          </div>
          <div
            className="footer__followus--body--img_label"
            onClick={() => {
              window.location.assign("mailto:dolphininterior@gmail.com");
            }}
          >
            <img src={Gmail} alt="Gmail" />
            <span>Mail</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
