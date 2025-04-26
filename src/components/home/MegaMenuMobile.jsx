import React, { Component } from "react";

class MegaMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null, // Tracks the currently active accordion
    };
  }

  toggleAccordion = (index) => {
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index, // Toggle the active accordion
    });
  };

  render() {
    const categories = [
      {
        label: "Mobile Phones",
        icon: "https://cdn-icons-png.flaticon.com/128/2482/2482945.png",
        items: ["iPhone", "Samsung", "Xiaomi", "Oppo", "Vivo", "Pova"],
      },
      {
        label: "Accessories",
        icon: "https://cdn-icons-png.flaticon.com/128/2482/2482945.png",
        items: ["AirPods", "Speakers", "Phone Cases", "Screen Protector"],
      },
      {
        label: "Chargers & Cables",
        icon: "https://cdn-icons-png.flaticon.com/128/2482/2482945.png",
        items: ["Fast Chargers", "Wireless Chargers", "Type-C Cables"],
      },
      {
        label: "Battery & Power",
        icon: "https://cdn-icons-png.flaticon.com/128/2482/2482945.png",
        items: ["Power Banks", "Replacement Batteries"],
      },
      {
        label: "Repair Services",
        icon: "https://cdn-icons-png.flaticon.com/128/2482/2482945.png",
        items: ["Screen Replacement", "Battery Change", "Water Damage Repair"],
      },
    ];

    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          {categories.map((category, index) => (
            <div key={index}>
              <button
                className={`accordionMobile ${
                  this.state.activeIndex === index ? "active" : ""
                }`}
                onClick={() => this.toggleAccordion(index)}
              >
                <img
                  className="accordionMenuIconMobile"
                  src={category.icon}
                  alt="icon"
                />
                &nbsp; {category.label}
              </button>
              <div
                className="panelMobile"
                style={{
                  maxHeight: this.state.activeIndex === index ? "150px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
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
  }
}

export default MegaMenu;
