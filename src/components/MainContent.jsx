import React, { useRef, useEffect, useState } from "react";
import "../CSS/MainContent.css";
import { Link } from "react-router-dom";
import video from "../assets/Video/video.mp4";
import eventsData from "../data/events.json";

function MainContent() {
  const videoRef = useRef(null);
  const [events, setEvents] = useState(eventsData);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="main-content">
      <div className="content-layout">
        <div className="left-panel">
          <div className="box">
            <img
              src="/assets/Students2016/fiola2015.jpeg"
              alt="Mahasiswa"
              className="photo"
            />
          </div>
          <div className="box">
            <h2 className="visi">Visi</h2>
            <p className="isi-visi">
              Menjadi Program Studi Teknik Informatika yang terpercaya dan
              terkemuka dalam bidang Human Computer Interaction, dan Graphics
              and Visual Computing pada sektor kesehatan di provinsi Banten
              pada tahun 2032.
            </p>
          </div>
          <div className="box">
            <h2>Kerja Sama</h2>
            <img
              src="https://lenna-prod.s3.ap-southeast-1.amazonaws.com/upload/602/webchat/logocbn.png"
              alt="CBN Logo"
              className="cbn"
            />
          </div>
        </div>
        <div className="center-panel">
        <div className="video-wrapper">
        <iframe
        src="https://www.youtube.com/embed/haf67eKF0uo"
        title="YouTube video player"
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        allowFullScreen>
        </iframe>
        </div>
          <Link to="/menu" className="menu-button">
            Menu
          </Link>
        </div>
        <div className="right-panel">
        <div className="box scrollable-box">
          <h2>Program</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Nama Kegiatan</th>
                  <th>Tgl Start</th>
                  <th>Tgl End</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.name}</td>
                    <td>{event.startDate}</td>
                    <td>{event.endDate}</td>
                    <td>
                      {event.status === "Selesai" ? (
                        <span style={{ color: "green" }}>✔ Selesai</span>
                      ) : (
                        <span style={{ color: "red" }}>✖ Belum</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

          <div className="box">
            <h2>Misi</h2>
            <p>
              Membentuk lulusan yang memiliki jiwa kepemimpinan serta
              berdedikasi pada perilaku etis, bertanggung jawab berlandaskan
              layanan penuh kasih. Membentuk lulusan yang memiliki kemampuan
              meneliti, kreatif, dan inovatif dalam bidang sains data untuk
              sektor kesehatan serta berjiwa wirausaha. Membentuk lulusan yang
              memiliki kepedulian untuk kehidupan berkelanjutan.
            </p>
          </div>
          <div className="box">
            <img
              src="https://warnajambi.com/wp-content/uploads/2024/08/444200_620.jpg"
              alt="Prestasi"
              className="photo"
            />
            <h2>Prestasi</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
