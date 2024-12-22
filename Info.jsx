import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

function Info() {
  return (
    <div>
      <main className="main">
        <div className="grid-container">
          <Link to="/">
            <button>HOME</button>
          </Link>
          <Link to="/mahasiswa">
            <button>MAHASISWA</button>
          </Link>
          <Link to="/dosen">
            <button>DOSEN</button>
          </Link>
          <Link to="/agenda">
            <button>AGENDA</button>
          </Link>
          <Link to="/prestasi">
            <button>PRESTASI</button>
          </Link>
          <Link to="/produk">
            <button>PRODUK</button>
          </Link>
          <Link to="/kerjasama">
            <button>KERJA SAMA</button>
          </Link>
          <Link to="/hmj">
            <button>HMJ</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Info;
