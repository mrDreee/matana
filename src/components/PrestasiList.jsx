import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Prestasi.css';
import icon from '../assets/Icon/icon.png';

function PrestasiList() {
  const years = [
    { year: "BACK", icon: "icon.png", link: "/menu" },
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
      <div className="prestasi-grid">
        {years.map((item, index) => (
          <Link
            to={item.link || `/prestasi/${item.year}`}
            key={index}
            className="grid-item"
          >
            <img
              src={icon}
              alt={item.year === "BACK" ? "Back Button" : `Prestasi ${item.year}`}
              className="folder-icon"
            />
            <p className="year-text">{item.year}</p>
          </Link>
        ))}
      </div>
  );
}

export default PrestasiList;
