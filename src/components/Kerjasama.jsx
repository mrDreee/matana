import React, { useState } from "react";
import { Link } from "react-router-dom";
import mitraData from "../data/mitra.json";
import "../CSS/Kerjasama.css";

const Kerjasama = () => {
  const [selectedMitra, setSelectedMitra] = useState(null);

  const handleBack = () => {
    setSelectedMitra(null);
  };

  return (
    <div className="kerjasama-container">
      <header className="kerjasama-header">
        <h1 className="kerjasama-title">KERJASAMA</h1>

        {!selectedMitra && (
          <Link to="/menu">
            <button className="back-button">
              &#8592; 
            </button>
          </Link>
        )}
      </header>

      {!selectedMitra ? (
        <div className="mitra-grid">
          {mitraData.map((mitra, index) => (
            <div
              key={index}
              className="mitra-card"
              onClick={() => setSelectedMitra(mitra)}
            >
              <img src={mitra.image} alt={mitra.name} className="mitra-image" />
              <p className="mitra-name">{mitra.name}</p>
            </div>
          ))}
        </div>
      ) : (
        
        <div className="mitra-detail">
          <button className="back-button" onClick={handleBack}>
            &#8592;
          </button>
          <img
            src={selectedMitra.image}
            alt={selectedMitra.name}
            className="mitra-image-detail"
          />
          <h2>{selectedMitra.name}</h2>
          <p>{selectedMitra.description}</p>
        </div>
      )}
    </div>
  );
};

export default Kerjasama;
