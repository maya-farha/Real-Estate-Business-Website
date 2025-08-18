import React from "react";
import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import ClientCard from "../ClientCard/ClientCard";
import "./ClientReview.css";
function ClientReview() {
  const clientsData = [
    {
      date: "2007",
      companyName: "ABC Corporation",
      category: "Luxury Home Development",
      quote:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      date: "2010",
      companyName: "GreenTech Enterprises",
      category: "Commercial Property Management",
      quote:
        "The team at Estatein provided exceptional service in managing our commercial properties. Their professionalism and attention to detail are unmatched.",
    },
    {
      date: "2015",
      companyName: "SAN",
      category: "Real Estate Investment",
      quote:
        "We've made several successful investments with Estatein. Their market insights and strategic advice have been key to our growth.",
    },
  ];
  return (
    <div>
      <Title
        title="Our Valued Clients"
        description="At Estatein, we have had the privilege of working 
        with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        fsDifference="48"
      />
      <div className="MF-sliderContainer">
        <Slider
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            992: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          data={clientsData}
          renderItem={(card) => (
            
            <ClientCard
              date={card.date}
              companyName={card.companyName}
              category={card.category}
              quote={card.quote}
            />
          )}
        />
      </div>
    </div>
  );
}

export default ClientReview;
