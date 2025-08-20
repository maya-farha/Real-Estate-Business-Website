import React from "react";
import Title from "../Title/Title";
import PricingCard from "../PricingCard/PricingCard";
import "./PricingDetails.css";
function PricingDetails({id}) {
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
          <h2 className="mswhiteColor">$1,250,000</h2>
        </div>
        <div>
          <PricingCard
            propertyId={id}
            title="Initial Costs"
            dataPath="initialCosts"
          />
          <PricingCard
            propertyId={id}
            title="Monthly Expenses"
            dataPath="monthlyExpenses"
          />
          <PricingCard propertyId={id} title="Fees Breakdown" dataPath="fees" />
        </div>
      </div>
    </div>
  );
}

export default PricingDetails;
