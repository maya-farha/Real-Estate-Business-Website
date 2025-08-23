import { useState, useEffect } from "react";
import ServicCard from "../Servic/ServicCard";
import "./ServiceSection.css";

function ServiceSection() {
  const [items, setItems] = useState([]);
  const defaultServices = [
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/home-icon.png",
      alt: "home-Icon",
      serviceName: "Find Your Dream Home",
    },
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/lock-icon.png",
      alt: "lock-Icon",
      serviceName: "Unlock Property Value",
    },
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/bulding-icon.png",
      alt: "build-Icon",
      serviceName: "Effortless Property Management",
    },
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/smart-icon.png",
      alt: "sun-Icon",
      serviceName: "Smart Investments, Informed Decisions",
    },
  ];

  useEffect(() => {
    const fetchItems = () => {
      try {
        let storedItems = localStorage.getItem("services");
        if (!storedItems) {
          localStorage.setItem("services", JSON.stringify(defaultServices));
          storedItems = JSON.stringify(defaultServices);
        }
        setItems(JSON.parse(storedItems));
      } catch (error) {
        console.error("Error reading from localStorage:", error);
      }
    };

    fetchItems();

    const handleStorageChange = (event) => {
      if (event.key === "services") {
        fetchItems();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  console.log(items);
  return (
    <section className="MF-serviceContainer">
      {items.map((item, index) => (
        <ServicCard
          key={index}
          logo={item.icon}
          alt={item.alt}
          titleService={item.serviceName}
        />
      ))}
    </section>
  );
}

export default ServiceSection;
