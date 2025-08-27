import React, { useState, useEffect } from "react";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
import "./OfficeFilter.css";

function OfficeFilter() {
  const [filter, setFilter] = useState(() => {
    const savedFilter = localStorage.getItem("officeFilter");
    return savedFilter || "All";
  });

  const offices = [
    {
      id: 1,
      type: "International",
      site: "Main Headquarters",
      titli: "123 Estatein Plaza, City Center, Metropolis",
      paraghaph:
        "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      button: "Get Direction",
    },
    {
      id: 2,
      type: "Regional",
      site: "Regional Offices",
      titli: "456 Urban Avenue, Downtown District, Metropolis",
      paraghaph:
        "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
      button: "Get Direction",
    },
  ];

  const filteredOffices =
    filter === "All" ? offices : offices.filter((o) => o.type === filter);

  useEffect(() => {
    localStorage.setItem("officeFilter", filter);
  }, [filter]);
  return (
    <div>
      <div className="MF-btnsFilter">
        {["All", "Regional", "International"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`MF-btnFilter ${filter === type ? "active" : ""}`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="MF-officeCards">
        {filteredOffices.map((office) => (
          <DiscoverCard
            key={office.id}
            paragh={office.site}
            titli={office.titli}
            paragh2={office.paraghaph}
            button={office.button}
          />
        ))}
      </div>
    </div>
  );
}

export default OfficeFilter;
