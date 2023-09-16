import React from "react";
import "./css/LandingPage.scss";
import NavBar from "./NavBar";
import logo from "../images/logo.svg";
import title1 from "../images/Dolphindream_Infra_Projects_LLP.svg";
import Landing from "../images/landing.jpg";
import ComingSoon from "./ComingSoon";
const LandingPage = () => {
  return (
    <>
      <div className="landing_page">
        <h1 className="main-head">
          Design Your Dream Where Spaces Inspire and Stories Unfold
        </h1>
        <div className="landing_page-details">
          <div className="landing_text">
            <h1 className="head_title">We Build your dreams.</h1>
            <ul className="bullet_info">
              <li className="bullet-li">
                Discover the Beauty of Personalized Interiors
              </li>
              <li className="bullet-li">
                Experience the artistry of transformative interior design, where
                your vision meets our expertise to create spaces that inspire
                and elevate your everyday living.
              </li>
              <li className="bullet-li">
                Your Vision, Our Expertise, Perfect Harmony
              </li>
            </ul>

            <button
              onClick={() => {
                alert("To be implemented");
              }}
              className="get-quote-btn"
            >
              Book a Meeting!
            </button>
          </div>
          <div className="image_corousel">
            <img src={Landing} alt="image not found" />
          </div>
        </div>
      </div>
      {/* <ComingSoon /> */}
    </>
  );
};
// const LandingPage = () => {
//   return (
//     <>
//       <div className="landing_page">
//         <div className="landing_text">
//           <h1 className="head_title">We Build your dreams.</h1>

//           <p className="head-paragraph">
//             "Synchronized Perfection - Dolphin Interiors, Merging Impeccable
//             Precision with the Fluidity of Nature, Tailoring Your Space into a
//             Harmonious Masterpiece."
//           </p>
//           <p className="head-paragraph">
//             "To begin crafting your dream space, we invite you to 'Envision'
//             your ideal home with us. Book a meeting today!"
//           </p>

//           <button
//             onClick={() => {
//               alert("To be implemented");
//             }}
//             className="get-quote-btn"
//           >
//             Book a Meeting!
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

export default LandingPage;
