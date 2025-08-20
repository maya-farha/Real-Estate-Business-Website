import React from "react";
import Button from "../Button/Button";
import properties from "../data";
import "./PricingCard.css";

function PricingCard({ propertyId, title, dataPath }) {
  const property = properties.find((p) => p.id === propertyId);

  const getValueFromPath = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc && acc[key], obj);
  };

  const data = getValueFromPath(property, dataPath);

  return (
    <div className="MF-pricingCard">
      <div className="header">
        <h2 className="" children>
          {title}
        </h2>
        <Button className={"mf-btn-black"}>Learn more</Button>
      </div>

      <div className="MF-grid">
        {Object.entries(data).map(([key, item]) => (
          <div key={key} className="fee-item">
            <p className="MF-feesTitle msGrayColor">{item.label}</p>
            <div className="MF-subPrice">
              <h3 className="mswhiteColor">
                {typeof item.value === "number"
                  ? `$${item.value.toLocaleString()}`
                  : item.value}
              </h3>
              {item.note && <p className="note msGrayColor">{item.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCard;
