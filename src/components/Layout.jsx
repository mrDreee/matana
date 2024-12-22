import React, { useState, useEffect } from "react";
import "../CSS/Layout.css";
import matana1 from "../assets/Logo/matana1.png";
import hmj from "../assets/Logo/hmj.png";

function Layout({ children }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <img src={matana1} alt="Matana Logo" className="logo" />
        <h1 className="header-title">MATANA INFORMATICS</h1>
        <img src={hmj} alt="Matana Logo" className="logo1" />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="footer-content">
          <div className="realtime-clock">
            {time.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
          </div>
          <div className="marquee">
            <span>HITAMKAN DAN HILANGKAN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
