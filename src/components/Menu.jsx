import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Menu.css';
import icon from '../assets/Icon/icon.png'

function Menu() {
  const menuItems = [
    { name: "HOME", icon: "icon.png", link: "/" },
    { name: "MAHASISWA", icon: "icon.png", link: "/mahasiswa" },
    { name: "DOSEN", icon: "icon.png", link: "/dosen" },
    { name: "AGENDA", icon: "icon.png", link: "/agenda" },
    { name: "PRESTASI", icon: "icon.png", link: "/prestasi" },
    { name: "PRODUK", icon: "icon.png", link: "/produk" },
    { name: "KERJA SAMA", icon: "icon.png", link: "/kerja-sama" },
    { name: "HMJ", icon: "icon.png", link: "/hmj" },
  ];

  return (
    <div className="menu-grid">
      {menuItems.map((item, index) => (
        <Link to={item.link} key={index} className="menu-item">
          <img
            src={icon}
            alt='logo'
            className="menu-icon"
          />
          <p className="menu-text">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
