import React from "react";
import "./HeroHome.css";
import StatisticeSection from "../../components/StatisticsSection/StatisticeSection";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

function HeroHome() {
  return (
    <div className="MF-hero">
      <div className="MF-heroContent">
        <div className="MF-heroTitle">
          <Title
            title="Discover Your Dream Property with Estatein"
            description="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
            fsDifference="48"
            image={false}
          />
        </div>

        <div className="MF-buttons">
          <Button className="mf-btn-black">Learn More</Button>
          <Button className="mf-btn-purble">Browse Properties</Button>
        </div>

        <div>
          <StatisticeSection></StatisticeSection>
        </div>
      </div>

      <div className="MF-heroImg">
        <img src="/assets/imgs/hero-img.png" alt="hero-img"></img>
      </div>
    </div>
  );
}

export default HeroHome;
