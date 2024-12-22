import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";
import dosenData from "../../data/Dosen/dosen.json";
import "../../CSS/Dosen.css";

const DosenList = () => {
  const [dosen, setDosen] = useState([]);

  useEffect(() => {
    setDosen(dosenData);
  }, []);

  return (
    <div className="dosen-details-container">
      <div className="header-row">
      <BackButton to="/menu" />
        <h1 className="header-title">DAFTAR DOSEN</h1>
      </div>
      <div className="dosen-scroll-container">
        <div className="dosen-container">
          {dosen.map((d) => (
            <div className="dosen-card">
            <img
              src={`/assets/Dosen/${d.photo}`}
              alt={d.name}
              className="dosen-photo"
            />
            <p className="dosen-info">Nama: {d.name}</p>
            <p className="dosen-info">NIDN: {d.nidn}</p>
            <p className="dosen-info">NIP: {d.nip}</p>
            <p className="dosen-info">Bidang Keahlian: {d.bidang}</p>
            <Link to={`/dosen/${d.id}`} className="dosen-button">
              RISET
            </Link>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default DosenList;
