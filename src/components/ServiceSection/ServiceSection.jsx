import React, { useState, useEffect } from "react";
import ServicCard from "../Servic/ServicCard";
import "./ServiceSection.css";
import { FaHome, FaKey, FaBuilding, FaChartLine } from "react-icons/fa";

function ServiceSection() {
  const items = [
    {
      logo: "/assets/icons/home-Icon.svg",
      titleService: "Find Your Dream Home",
    },
    {
      logo: "/assets/icons/lock-Icon.svg",
      titleService: "Unlock Property Value",
    },
    {
      logo: "/assets/icons/build-Icon.svg",
      titleService: "Effortless Property Management",
    },
    {
      logo: "/assets/icons/sun-Icon.svg",
      titleService: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <section className="mf-service-section">
      {items.map((item, index) => (
        <ServicCard
          key={index}
          logo={item.logo}
          titleService={item.titleService}
        />
      ))}
    </section>
  );
}

export default ServiceSection;
