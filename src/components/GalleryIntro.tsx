import React from "react";
import Kitchen from "../images/kitchen_cat.jpg";
import LivingArea from "../images/livingarea_cat.jpg";
import "./css/gallery.scss";

const GalleryIntro = () => {
  return (
    <div className="gallery_intro">
      <h1>Design Gallery!</h1>
      <div className="gallery_category">
        <div className="ima">
          <img src={Kitchen} alt="Image not Found" />
          <span className="cat_title">Kitchen</span>
        </div>
        <div className="ima">
          <img src={LivingArea} alt="Image not Found" />
          <span className="cat_title">Living Area</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryIntro;
