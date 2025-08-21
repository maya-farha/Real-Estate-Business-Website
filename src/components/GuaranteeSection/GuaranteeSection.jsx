import GuarateeCards from "../GuarateeCards/GuarateeCards";
import "./GuaranteeSection.css";

function GuaranteeSection({ features }) {
  return (
    <div className="RJ-guaranteeSection">
      <h2 className="RJ-guaranteeTitle">Key Features and Amenities</h2>
      {features.map((feature, index) => (
        <GuarateeCards key={index} paraghraf={feature} />
      ))}
    </div>
  );
}

export default GuaranteeSection;
