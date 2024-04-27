import React from "react";
import "./css/our-services.scss";
const OurServices = () => {
  const services = [
    "Interior / Exterior works",
    "Construction / Electricals",
    "Plumbing / Fabrications",
    "Painting / Flooring works",
    "Glass / Cladding works",
    "Upvc / Aluminium doors & Windows solutions",
    "Poultry farms / Hatchery / Convention Halls / Factory / Theatre / Cold storage works",
  ];
  return (
    <div className="our-services">
      <h2 className="our-services__title">Our Services</h2>
      <ul className="our-services__list">
        {services.map((item) => (
          <li className="our-services__list--item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default OurServices;
