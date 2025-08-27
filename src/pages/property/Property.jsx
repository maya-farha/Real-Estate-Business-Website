import { useParams } from "react-router-dom";
import DescriptionProperty from "../../components/DescriptionProperty/DescriptionProperty";
import GuaranteeSection from "../../components/GuaranteeSection/GuaranteeSection";
import properties from "../../components/Data/data";
import PricingDetails from "../../components/PricingDetails/PricingDetails";
import HeroProperty from "../../components/HeroProperty/HeroProperty";
import BuildingCards from "../../components/BuildingCards/BuildingCards";
import "./Property.css";
import useScrollToHash from "../../hooks/scroll";

function Property() {
  useScrollToHash();

  const { id } = useParams();

  localStorage.setItem("properties", JSON.stringify(properties));
  const selectedId = id ? parseInt(id) : properties[0]?.id;
  const property = properties.find((p) => p.id === selectedId);

  return (
    <div className="MF-propertyPage white-spacing">
      <header id="portfolio">
        <HeroProperty
          propertyImg={property.image}
          propertyLocation={property.location}
          propertyPrice={property.price}
          propertyName={property.type}
        ></HeroProperty>
      </header>
      <main className="MF-gapProperty">
        
        <div className="MS-contentProperty" id="categories">
          <DescriptionProperty
            Heading={"description"}
            Paragraph={property.description}
            Bedrooms={property.rooms}
            Bathrooms={property.baths}
            SquareFeet={property.area}
          ></DescriptionProperty>

          <GuaranteeSection features={property.features}></GuaranteeSection>
        </div>

        <section>
          <PricingDetails id={parseInt(property.id)}></PricingDetails>
        </section>

        <section>
          <BuildingCards></BuildingCards>
        </section>
      </main>
    </div>
  );
}
export default Property;
