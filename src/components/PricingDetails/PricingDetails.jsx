import React from "react";
import Title from "../Title/Title";
import PricingCard from "../PricingCard/PricingCard";
import MonthlyCosts from "../MonthyCosts/MonthlyCosts";
import "./PricingDetails.css";
import properties from "../data";
function PricingDetails({ id }) {
  const property = properties.find((p) => p.id === id);
  console.log(property);
  return (
    <div>
      <Title
        title="Comprehensive Pricing Details"
        description="At Estatein, transparency is key.
        We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
        fsDifference="48"
      />
      <div className="MF-note">
        <h2 className="mswhiteColor">Note</h2>
        <p className="msGrayColor">
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </p>
      </div>
      <div className="MF-pricingSection">
        <div>
          <span className="msGrayColor">Listing Price</span>
          <h2 className="mswhiteColor">${property.price}</h2>
        </div>
        <div>
          <PricingCard
            propertyId={id}
            title="Additional Fees"
            dataPath="fees"
          />

          <MonthlyCosts />

          <PricingCard
            propertyId={id}
            title="Total Initial Costs"
            dataPath="initialCosts"
          />

          <PricingCard
            propertyId={id}
            title="Monthly Expenses"
            dataPath="monthlyExpenses"
          />
        </div>
      </div>
    </div>
  );
}

export default PricingDetails;
