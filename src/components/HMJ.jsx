import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HMJ.css';
import icon from '../assets/Icon/icon.png';

function HMJ() {
  const years = [
    { year: "BACK", icon: "icon.png", link: "/menu" },
    { year: "2015", icon: "icon.png" },
    { year: "2016", icon: "icon.png" },
    { year: "2017", icon: "icon.png" },
    { year: "2018", icon: "icon.png" },
    { year: "2019", icon: "icon.png" },
    { year: "2020", icon: "icon.png" },
    { year: "2021", icon: "icon.png" },
    { year: "2022", icon: "icon.png" },
    { year: "2023", icon: "icon.png" },
    { year: "2024", icon: "icon.png" },
  ];

  return (
    <div className="hmj-container">
      <div className="grid-container">
        {years.map((item, index) => (
          <Link
            to={item.link || `/hmj/${item.year}`}
            key={index}
            className="grid-item"
          >
            <img
              src={icon}
              alt={item.year === "BACK" ? "Back Button" : `Angkatan ${item.year}`}
              className="folder-icon"
            />
            <p className="year-text">{item.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HMJ;
