import React, { useState } from "react";
import {
  FaMobileAlt,
  FaChargingStation,
  FaWrench,
  FaHeadphones,
  FaBatteryFull,
} from "react-icons/fa";

const MegaMenuAll = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">
        {[
          {
            icon: <FaMobileAlt />,
            label: "Mobile Phones",
            items: ["iPhone", "Samsung", "Xiaomi", "Oppo", "Vivo", "Pova"],
          },
          {
            icon: <FaHeadphones />,
            label: "Accessories",
            items: ["AirPods", "Speakers", "Phone Cases", "Screen Protectors"],
          },
          {
            icon: <FaChargingStation />,
            label: "Chargers & Cables",
            items: ["Fast Chargers", "Wireless Chargers", "Type-C Cables"],
          },
          {
            icon: <FaBatteryFull />,
            label: "Battery & Power",
            items: ["Power Banks", "Replacement Batteries"],
          },
          {
            icon: <FaWrench />,
            label: "Repair Services",
            items: [
              "Screen Replacement",
              "Battery Change",
              "Water Damage Repair",
            ],
          },
        ].map((category, index) => (
          <div key={index}>
            <button
              className={`accordion ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {category.icon} &nbsp; {category.label}
            </button>
            <div
              className="panel"
              style={{ maxHeight: activeIndex === index ? "150px" : "0" }}
            >
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="accordionItem">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuAll;
