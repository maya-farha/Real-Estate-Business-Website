import React from "react";
import "./ServiceCard.css";
function ServicCard({ logo, titleService }) {
  return (
    <div className="mf-servic-card">
      <img
        src="/assets/icons/arrowTop.svg"
        alt="arrowTop"
        className="arrow-top"
      ></img>
      <div className="outer-circle">
        <div className="inner-circle">
          {/* {logo} */}
          <img src={logo} className="service-logo" />
        </div>
      </div>
      <p className="mswhiteColor">{titleService}</p>
    </div>
  );
}

export default ServicCard;
