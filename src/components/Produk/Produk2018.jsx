import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton"; // Import komponen BackButton
import "./ProdukDetail.css";

const Produk2024 = () => {
  const { year } = useParams(); // Ambil parameter tahun dari URL

  return (
    <div className="produk-container">
      <BackButton to="/produk" /> {/* Gunakan tombol Back global */}
      <header className="produk-header">
        <h1 className="produk-text">PRESTASI {year}</h1>
      </header>
      <div className="produk-content">
        <img
          src={`/assets/produk/2018/fawgs2017.jpeg`}
          alt={`Produk ${year}`}
          className="produk-image"
        />
        <video
          className="produk-video"
          controls
        >
          <source src={`/assets/produk/video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="produk-description-box">
        <p className="produk-description">Seorang anak yg berhasil meraih mimpinya</p>
      </div>
    </div>
  );
};

export default Produk2024;
