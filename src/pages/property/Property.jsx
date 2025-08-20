import { useParams, Link } from "react-router-dom";

import DescriptionProperty from "../../components/DescriptionProperty/DescriptionProperty";

import GuaranteeSection from "../../components/GuaranteeSection/GuaranteeSection";

import MonthlyCosts from "../../components/MonthyCosts/MonthlyCosts";
import properties from "../../components/data";
import PricingDetails from "../../components/PricingDetails/PricingDetails";
import "./Property.css";
function Property() {
  const { id } = useParams();

  // console.log(properties);
  localStorage.setItem("properties", JSON.stringify(properties));
  // console.log(id);
  const selectedId = id ? parseInt(id) : properties[0]?.id;
  const property = properties.find((p) => p.id === selectedId);

  // const property = properties.find((p) => p.id === Number(id));
  console.log(property);
  console.log(id);
  return (
    <div className="MF-properyPage white-spacing">
      <PricingDetails id={parseInt(property.id)}></PricingDetails>
      <MonthlyCosts />
      <GuaranteeSection />
    </div>
  );
}
export default Property;
