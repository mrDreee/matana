import React from "react";
import { useParams, Link } from "react-router-dom";
import dosenData from "../../data/Dosen/dosen.json";
import "../../CSS/DosenDetail.css";

const DosenDetail = () => {
  const { id } = useParams();

  const dosen = dosenData.find((dosen) => dosen.id === parseInt(id));

  if (!dosen) {
    return <p>Dosen tidak ditemukan.</p>;
  }

  return (
    <div className="dosen-detail-container">
      <Link to="/dosen" className="back-button">
        ←
      </Link>
      <div className="dosen-detail">
        <h2>{dosen.name}</h2>
        <p>NIDN: {dosen.nidn}</p>
        <p>NIP: {dosen.nip}</p>
        <p>Bidang Keahlian: {dosen.bidang}</p>

        {dosen.scholarLink ? (
          <iframe
            src={dosen.scholarLink}
            title={`Google Scholar Profile of ${dosen.name}`}
            className="scholar-iframe"
          ></iframe>
        ) : (
          <p>Profil Google Scholar tidak tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default DosenDetail;
