import Slider from "../Slider/Slider";
import ChoiceHome from "../ChoiceHome/ChoiceHome";
import "./BuildingCards.css";
import { useEffect } from "react";
function BuildingCards() {
  const cards = [
    {
      id: 2,
      image: "/assets/imgs/Seaside-Serenity-Villa.png",
      title: "Seaside Serenity Villa",
      descreption:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
      bedroom: "4",
      bathroom: "3",
      type: "villa",
      price: "550,000",
    },
    {
      id: 3,
      image: "/assets/imgs/Metropolitan-Haven.png",
      title: "Metropolitan Haven",
      descreption:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroom: "2",
      bathroom: "2",
      type: "villa",
      price: "550,000",
    },
    {
      id: 4,
      image: "/assets/imgs/Rustic-Retreat-Cottage.png",
      title: "Rustic Retreat Cottage",
      descreption:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More",
      bedroom: "3",
      bathroom: "3",
      type: "villa",
      price: "550,000",
    },
    {
      id: 5,
      image: "/assets/imgs/Seaside-Serenity-Villa.png",
      title: "Seaside Serenity Villa",
      descreption:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
      bedroom: "4",
      bathroom: "3",
      type: "villa",
      price: "550,000",
    },
  ];

  useEffect(() => {
    const cardsData = JSON.stringify(cards);
    localStorage.setItem("cards", cardsData);
  }, []);

  return (
    <div className="amAllCards">
      <Slider
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        data={cards}
        renderItem={(card) => (
          <ChoiceHome
            id={card.id}
            image={card.image}
            title={card.title}
            descreption={card.descreption}
            bedroom={card.bedroom}
            bathroom={card.bathroom}
            type={card.type}
            price={card.price}
          />
        )}
      />
    </div>
  );
}

export default BuildingCards;
