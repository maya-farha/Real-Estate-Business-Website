import React from "react";
import TextContainer from "../TextContainer/TextContainer.jsx";
import "./StatisticeSection.css";

function StatisticeSection() {
  const items = [
    {
      heading: "200+",
      Paragraph: "Happy Customers",
    },
    {
      heading: "10k+",
      Paragraph: "Properties For Clients",
    },
    {
      heading: "16+",
      Paragraph: "Years of Experience",
    },
  ];

  return (
    <section className="statistics-section ">
      {items.map((item, index) => (
        <TextContainer
          className="item"
          key={index}
          heading={item.heading}
          Paragraph={item.Paragraph}
        />
      ))}
    </section>
  );
}

export default StatisticeSection;
