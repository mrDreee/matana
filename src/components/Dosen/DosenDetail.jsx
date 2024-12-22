import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
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
      <BackButton to="/dosen" />
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
