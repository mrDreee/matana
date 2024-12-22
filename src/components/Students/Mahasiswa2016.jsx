import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mahasiswa.css";
import studentsData from "../../data/StudentsPhoto/students2016.json";

const Mahasiswa2016 = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentsData);
  }, []);

  return (
    <div className="mahasiswa-details-container">
      <div className="header-row">
        <Link to="/mahasiswa" className="mahasiswa-back-button">←</Link>
        <h1 className="header-title">MAHASISWA ANGKATAN 2016</h1>
        <Link to="/" className="mahasiswa-home-button">HOME</Link>
      </div>
      <div className="students-scroll-container">
        <div className="students-container">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <img
                src={`/assets/Students2016/${student.photo}`}
                alt={student.name}
                className="student-photo"
              />
              <p className="student-info">{student.name}</p>
              <p className="student-info">{student.nim}</p>
              <p className="student-info">{student.tahunLulus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mahasiswa2016;
