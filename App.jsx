import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes.jsx";
import "./App.css";


function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <div className="container">
        <main className="main">
          <AppRoutes />a
        </main>

      </div>
    </Router>
  );
}

export default App;
