import React from "react";
import Button from "../Button/Button";
import "./ClientCard.css";
function ClientCard({ date, companyName, category, quote }) {
  return (
    <div className="MF-clientCard">
      <div className="MF-details MF-displayFlex">
        <div>
          <p className="msFontWeight500 msGrayColor">since {date}</p>
          <h2 className="msFontWeight600">{companyName}</h2>
        </div>
        <Button className="mf-btn-black MF-buttonVisit">Visit Website</Button>
      </div>

      <div className="MF-flex">
        <div className="MF-domain">
          <div className="MF-iconContainer">
            <img src="/assets/icons/domain-icon.svg" alt="domain-icon"></img>
            <p className="msGrayColor MF-type">Domain</p>
          </div>
          <p className="msFontWeight500 mswhiteColor MF-pargraph">
            Commercial Real Estate
          </p>
        </div>

        <div className="MF-category">
          <div className="MF-iconContainer">
            <img
              src="/assets/icons/category-icon.svg"
              alt="category-icon"
            ></img>
            <p className="msGrayColor MF-type">Category</p>
          </div>
          <p className="msFontWeight500 mswhiteColor MF-pargraph">{category}</p>
        </div>
      </div>

      <div className="MF-quote">
        <p className="msGrayColor ">What They Said 🤗</p>
        <p className="mswhiteColor msLineHeight150 ">{quote}</p>
      </div>
    </div>
  );
}

export default ClientCard;
