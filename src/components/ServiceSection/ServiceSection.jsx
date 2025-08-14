import ServicCard from "../Servic/ServicCard";
import "./ServiceSection.css";
import { FaHome, FaKey, FaBuilding, FaChartLine } from "react-icons/fa";

function ServiceSection() {
  const items = [
    {
      logo: "/assets/icons/home-icon.png",
      alt: "home-Icon",
      titleService: "Find Your Dream Home",
    },
    {
      logo: "/assets/icons/lock-icon.png",
      alt: "lock-Icon",
      titleService: "Unlock Property Value",
    },
    {
      logo: "/assets/icons/bulding-icon.png",
      alt: "build-Icon",
      titleService: "Effortless Property Management",
    },
    {
      logo: "/assets/icons/smart-icon.png",
      alt: "sun-Icon",
      titleService: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <section className="MF-serviceContainer">
      {items.map((item, index) => (
        <ServicCard
          key={index}
          logo={item.logo}
          alt={item.alt}
          titleService={item.titleService}
        />
      ))}
    </section>
  );
}

export default ServiceSection;
