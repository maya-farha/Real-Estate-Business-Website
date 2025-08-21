import GuarateeCards from "../GuarateeCards/GuarateeCards";
import "./GuaranteeSection.css";

function GuaranteeSection({ features }) {
  return (
    <div className="RJ-guaranteeSection">
      <h2 className="RJ-guaranteeTitle">Key Features and Amenities</h2>

      {/* <GuarateeCards paraghraf="Expansive oceanfront terrace for outdoor entertaining"/>
        <GuarateeCards paraghraf="Gourmet kitchen with top-of-the-line appliances"/>
        <GuarateeCards paraghraf="Private beach access for morning strolls and sunset views"/>
        <GuarateeCards paraghraf="Master suite with a spa-inspired bathroom and ocean-facing balcony"/>
        <GuarateeCards paraghraf="Private garage and ample storage space"/> */}
      {features.map((feature, index) => (
        <GuarateeCards key={index} paraghraf={feature} />
      ))}
    </div>
  );
}

export default GuaranteeSection;
