import React, { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import "./Mahasiswa.css";
import studentsData from "../../data/StudentsPhoto/students2017.json";

const Mahasiswa2017 = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentsData);
  }, []);

  return (
    <div className="mahasiswa-details-container">
      <div className="header-row">
      <BackButton to="/mahasiswa" />
        <h1 className="header-title">MAHASISWA ANGKATAN 2017</h1>
      </div>
      <div className="students-scroll-container">
        <div className="students-container">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <img
                src={`/assets/Students2017/${student.photo}`}
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

export default Mahasiswa2017;
