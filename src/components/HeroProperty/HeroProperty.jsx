import React from "react";
import "./HeroProperty.css";
function HeroProperty({
  propertyName,
  propertyLocation,
  propertyPrice,
  propertyImg,
}) {
  return (
    <div className="MF-heroProperty">
      <div className="MF-propertyFlex">
        
        <div className="MF-propertyFlex second">
          <h2 className="mswhiteColor">{propertyName}</h2>
          <div className="MF-propertyFlex MF-location">
            <img src="/assets/icons/location-Icon.svg" alt="loctionIcon"></img>
            <p className="mswhiteColor">{propertyLocation}</p>
          </div>
        </div>

        <div>
          <p className="msGrayColor">Price</p>
          <p className="mswhiteColor">${propertyPrice}</p>
        </div>
      </div>

      <div className="MF-heroImgProperty">
        <img src={propertyImg} alt="propertyImg"></img>
      </div>
    </div>
  );
}

export default HeroProperty;
