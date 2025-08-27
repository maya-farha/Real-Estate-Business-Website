import ValueCard from "../ValueCard/ValueCard";
import "./ValueCards.css";

function ValueCards() {
  return (
    <div className="AM-valuesCardAb">
      <div className="AM-twoCardsAb first">
        <ValueCard
          image="/assets/icons/icon-star-about.svg"
          title="Trust"
          description="Trust is the cornerstone of every successful real estate transaction."
        />

        <div className="AM-borderAb"></div>
        <ValueCard
          image="/assets/icons/icon-graduation-about.svg"
          title="Excellence"
          description="We set the bar high for ourselves. From the properties we list to the services we provide."
        />
      </div>

      <div className="AM-twoCardsAb second">
        <ValueCard
          image="/assets/icons/icon-client-about.svg"
          title="Client-Centric"
          description="Your dreams and needs are at the center of our universe. We listen, understand."
        />

        <div className="AM-borderAb"></div>
        <ValueCard
          image="/assets/icons/icon-star-about.svg"
          title="Our Commitment"
          description="We are dedicated to providing you with the highest level of service, professionalism, and support."
        />
      </div>
      
    </div>
  );
}

export default ValueCards;
