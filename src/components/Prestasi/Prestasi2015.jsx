import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton"; // Import komponen BackButton
import "./PrestasiDetail.css";

const Prestasi2024 = () => {
  const { year } = useParams(); // Ambil parameter tahun dari URL

  return (
    <div className="prestasi-container">
      <BackButton to="/prestasi" /> {/* Gunakan tombol Back global */}
      <header className="prestasi-header">
        <h1 className="prestasi-text">PRESTASI {year}</h1>
      </header>
      <div className="prestasi-content">
        <img
          src={`/assets/prestasi/2015/fiola2015.jpeg`}
          alt={`Prestasi ${year}`}
          className="prestasi-image"
        />
        <video
          className="prestasi-video"
          controls
        >
          <source src={`/assets/prestasi/video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="prestasi-description-box">
        <p className="prestasi-description">Seorang anak yg berhasil meraih mimpinya</p>
      </div>
    </div>
  );
};

export default Prestasi2024;
