import React from "react";
import { Link } from "react-router-dom";
import "../CSS/BackButton.css"; // File CSS khusus untuk tombol Back

const BackButton = ({ to }) => {
  return (
    <Link to={to} className="back-button-global">
      ←
    </Link>
  );
};

export default BackButton;
