import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import agendaData from "../data/agenda.json";
import "../CSS/Agenda.css";

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    setAgenda(agendaData);
  }, []);

  return (
    <div className="agenda-container">
      <div className="row">
      <BackButton to="/menu" />
      </div>
      <header className="agenda-header">
        <h1 className="agenda-title">AGENDA</h1>
      </header>
      <div className="agenda-table-scroll-container">
        <table className="agenda-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>NAMA ACARA</th>
              <th>TANGGAL</th>
              <th>KETERANGAN</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.namaAcara}</td>
                <td>{item.tanggal}</td>
                <td>{item.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Agenda;
