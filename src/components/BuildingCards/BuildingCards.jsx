import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChoiceHome from "../ChoiceHome/ChoiceHome";
import "./BuildingCards.css";
import { useEffect } from "react";
function BuildingCards() {
  const cards = [
    {
      image: "assets/imgs/Seaside-Serenity-Villa.png",
      title: "Seaside Serenity Villa",
      descreption:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
      bedroom: "4",
      bathroom: "3",
      type: "villa",
      price: "550,000",
    },
    {
      image: "assets/imgs/Metropolitan-Haven.png",
      title: "Metropolitan Haven",
      descreption:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroom: "2",
      bathroom: "2",
      type: "villa",
      price: "550,000",
    },
    {
      image: "assets/imgs/Rustic-Retreat-Cottage.png",
      title: "Rustic Retreat Cottage",
      descreption:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More",
      bedroom: "3",
      bathroom: "3",
      type: "villa",
      price: "550,000",
    },
    {
      image: "assets/imgs/Seaside-Serenity-Villa.png",
      title: "Seaside Serenity Villa",
      descreption:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
      bedroom: "4",
      bathroom: "3",
      type: "villa",
      price: "550,000",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const cardsData = JSON.stringify(cards);
    localStorage.setItem("cards", cardsData);
  }, []);

  return (
    <div className="amAllCards white-spacing">
      {/* <div className="amContainer"> */}
      <Slider {...settings}>
        {cards.map((card, index) => {
          return (
            <ChoiceHome
              key={index}
              image={card.image}
              title={card.title}
              descreption={card.descreption}
              bedroom={card.bedroom}
              bathroom={card.bathroom}
              type={card.type}
              price={card.price}
            />
          );
        })}
      </Slider>
      {/* </div> */}
    </div>
  );
}

export default BuildingCards;
