import React from "react";
import Button from "../Button/Button";
import properties from "../Data/data";
import "./MonthlyCosts.css";

function MonthlyCosts({ propertyId, dataPath }) {
  const property = properties.find((p) => p.id === Number(propertyId));

  const getValueFromPath = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  const data = getValueFromPath(property, dataPath);

  if (!Array.isArray(data)) {
    return (
      <div className="AM-MonthlyCostsPr">No monthly cost data available.</div>
    );
  }

  return (
    <div className="AM-MonthlyCostsPr mswhiteColor">
      <div className="AM-costsPr">
        <h2 className="msFontWeight600 msFontSize24">Monthly Costs</h2>
        <Button to="" className="AM-btnPr mf-btn-black">
          Learn More
        </Button>
      </div>

      {data.map((item, index) => (
        <div key={index} className="AM-costItem">
          <p className="msFontSize18 msGrayColor msFontWeight500">
            {item.label}
          </p>
          <div className="AM-costDetail">
            <h2 className="msFontWeight600 msFontSize24">
              {typeof item.value === "number"
                ? `$${item.value.toLocaleString()}`
                : item.value}
            </h2>
            
            {item.note && (
              <p className="msFontSize18 msGrayColor msFontWeight500">
                {item.note}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MonthlyCosts;
