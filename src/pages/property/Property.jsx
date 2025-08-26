import { useParams } from "react-router-dom";
import DescriptionProperty from "../../components/DescriptionProperty/DescriptionProperty";
import GuaranteeSection from "../../components/GuaranteeSection/GuaranteeSection";
import properties from "../../components/Data/data";
import PricingDetails from "../../components/PricingDetails/PricingDetails";
import HeroProperty from "../../components/HeroProperty/HeroProperty";
import BuildingCards from "../../components/BuildingCards/BuildingCards";
import "./Property.css";

function Property() {
  const { id } = useParams();

  localStorage.setItem("properties", JSON.stringify(properties));
  const selectedId = id ? parseInt(id) : properties[0]?.id;
  const property = properties.find((p) => p.id === selectedId);

  return (
    <div className="MF-properyPage white-spacing">
      <header>
        <HeroProperty
          propertyImg={property.image}
          propertyLocation={property.location}
          propertyPrice={property.price}
          propertyName={property.type}
        ></HeroProperty>
      </header>

      <div className="MS-contentProperty">
        <DescriptionProperty
          Heading={"description"}
          Paragraph={property.description}
          Bedrooms={property.rooms}
          Bathrooms={property.baths}
          SquareFeet={property.area}
        ></DescriptionProperty>

        <GuaranteeSection features={property.features}></GuaranteeSection>
      </div>

      {/* <div className="MF-pricingDetails"> */}
        <PricingDetails id={parseInt(property.id)}></PricingDetails>

      <BuildingCards></BuildingCards>
    </div>
  );
}
export default Property;
