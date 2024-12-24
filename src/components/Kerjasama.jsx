import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import mitraData from "../data/mitra.json"; // Data JSON untuk mitra
import "../CSS/Kerjasama.css"; // File CSS untuk styling

const Kerjasama = () => {
  const [selectedMitra, setSelectedMitra] = useState(null); // State untuk mitra yang dipilih

  const handleBack = () => {
    setSelectedMitra(null); // Mengembalikan ke tampilan awal
  };

  return (
    <div className="kerjasama-container">
      <header className="kerjasama-header">
        <h1 className="kerjasama-title">KERJASAMA</h1>

        {/* Tombol Back ke Menu hanya muncul di halaman pertama */}
        {!selectedMitra && (
          <Link to="/menu">
            <button className="back-button">
              &#8592; 
            </button>
          </Link>
        )}
      </header>

      {/* Tampilan awal jika belum memilih mitra */}
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
        // Tampilan detail saat mitra dipilih
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
