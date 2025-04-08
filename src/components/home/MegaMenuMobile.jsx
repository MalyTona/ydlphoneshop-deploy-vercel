import React, { useState } from "react";
import {
  FaMobileAlt,
  FaChargingStation,
  FaWrench,
  FaHeadphones,
  FaBatteryFull,
} from "react-icons/fa";

const MegaMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordionMenuDivMobile">
      <div className="accordionMenuDivInsideMobile">
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
              className={`accordionMobile ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {category.icon} &nbsp; {category.label}
            </button>
            <div
              className="panelMobile"
              style={{ maxHeight: activeIndex === index ? "150px" : "0" }}
            >
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="accordionItemMobile">
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

export default MegaMenu;
