import React, { useState, useEffect } from "react";
import BackButton from "../BackButton"
import "./HMJ.css";
import studentsData from "../../data/StudentsPhoto/students2016.json";

const HMJ2016 = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentsData);
  }, []);

  return (
    <div className="hmj-details-container">
      <div className="header-row">
      <BackButton to="/hmj" />
        <h1 className="header-title">HMJ ANGKATAN 2016</h1>
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

export default HMJ2016;
