import React from "react";
import "../components/css/WhyUs.scss";
import { Title } from "./Title";

const WhyUs = () => {
  return (
    <div className="whyus">
      <Title variant="caption">Why Us?</Title>
      <div className="whyus__main-div">
        <div className="row whyus__icons">
          <div>
            <span className="material-symbols-outlined whyus__icons--svg">
              sell
            </span>
            Best in Price
          </div>
          <span className="whyus__icons--line" />
          <div>
            <span className="material-symbols-outlined whyus__icons--svg">
              signal_cellular_alt
            </span>
            Superior Quality
          </div>
          <span className="whyus__icons--line"> </span>
          <div>
            <span className="material-symbols-outlined whyus__icons--svg">
              safety_check
            </span>
            Safety Assured
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
