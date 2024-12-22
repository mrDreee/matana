import React from "react";
import { Link, useParams } from "react-router-dom";
import "./PrestasiDetail.css";

const Prestasi2024 = () => {
  const { year } = useParams(); // Ambil parameter tahun dari URL

  return (
    <div className="prestasi-container">
      <div className="header-row">
        <Link to="/prestasi" className="back-button">← Back</Link>
        <h1 className="prestasi-header">PRESTASI {year}</h1>
      </div>
      <img
        src={`/assets/prestasi/${year}/image.jpg`} // Sesuaikan path gambar berdasarkan tahun
        alt={`Prestasi ${year}`}
        className="prestasi-image"
      />
      <video
        className="prestasi-video"
        controls
      >
        <source src={`/assets/prestasi/${year}/video.mp4`} type="video/mp4" /> {/* Sesuaikan path video berdasarkan tahun */}
        Your browser does not support the video tag.
      </video>
      <p className="prestasi-description">Penjelasan Prestasi {year}</p>
    </div>
  );
};

export default Prestasi2024;
