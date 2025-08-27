import { useState, useEffect } from "react";
import ServicCard from "../Servic/ServicCard";
import "./ServiceSection.css";

function ServiceSection({ services: propServices }) {
  const [services, setServices] = useState([]);

  const defaultServices = [
    {
      id: crypto.randomUUID(),
      icon: "assets/icons/home-icon.png",
      alt: "home-Icon",
      serviceName: "Find Your Dream Home",
    },

    {
      id: crypto.randomUUID(),
      icon: "assets/icons/lock-icon.png",
      alt: "lock-Icon",
      serviceName: "Unlock Property Value",
    },

    {
      id: crypto.randomUUID(),
      icon: "assets/icons/bulding-icon.png",
      alt: "build-Icon",
      serviceName: "Effortless Property Management",
    },

    {
      id: crypto.randomUUID(),
      icon: "assets/icons/smart-icon.png",
      alt: "sun-Icon",
      serviceName: "Smart Investments, Informed Decisions",
    },
  ];

  useEffect(() => {
    if (propServices) {
      setServices(propServices);
      
    } else {
      const fetchServices = () => {
        try {
          let storedItems = localStorage.getItem("services");
          if (!storedItems) {
            localStorage.setItem("services", JSON.stringify(defaultServices));
            storedItems = JSON.stringify(defaultServices);
          }
          setServices(JSON.parse(storedItems));
        } catch (error) {
          console.error("Error reading from localStorage:", error);
        }
      };

      fetchServices();

      const handleStorageChange = (event) => {
        if (event.key === "services") {
          fetchServices();
        }
      };

      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, [propServices]);

  return (
    <section className="MF-serviceContainer">
      {services.map((item) => (
        <ServicCard
          key={item.id}
          logo={item.icon}
          alt={item.alt}
          titleService={item.serviceName}
          link={item.link}
        />
      ))}
    </section>
  );
}

export default ServiceSection;
