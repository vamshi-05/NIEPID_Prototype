import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './th.jpeg';
import axios from 'axios';

const Term = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [years, setYears] = useState([]);


  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const id = localStorage.getItem("studentId");
        const res = await axios.get("http://localhost:4000/teacher/getStudentbyId", {
          headers: {
            id: id,
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }, { withCredentials: true });
        const student = res.data;
        localStorage.setItem("currTerm", student.currTerm);
        localStorage.setItem("currYear", student.currYear);
        localStorage.setItem("currSection", student.currSection);
        const arr = []
        student.section.map((inst) => {
          arr.push(inst.sec)
        })
        setSections(arr)
      } catch (err) {
        console.error("Error fetching student data", err.response);
      }

    };

    fetchStudentData();
    localStorage.removeItem("term");
    localStorage.removeItem("year");
    localStorage.removeItem("section");
  }, []);

  const handleNavigate = (term) => {
    navigate('/teacher/term/termEntry');
  };

  const handleSection = async (section) => {
    try {
      setYears([]);
      localStorage.setItem("section", section);
      const id = localStorage.getItem("studentId");
      const res = await axios.get("http://localhost:4000/teacher/getStudentbyId", {
        headers: {
          id: id,
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }, { withCredentials: true });
      const data = res.data;
      const secIndex = data.section.findIndex(sec => sec.sec === section);
      const yr = []
      data.section[secIndex].yearReport.map(year => {
        yr.push(year.year)
      })
      setYears(yr)
      // setYears(Array.from({ length: data.section[secIndex].yearReport.length }, (_, i) => (i + 1).toString()));
    } catch (err) {
      console.error("Error fetching section data", err.response);
    }
  };

  const handleYear = async (year) => {
    try {
      localStorage.setItem("year", year);
      handleNavigate();
    } catch (err) {
      console.error("Error fetching year data", err.response);
    }

  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src={image} alt="Logo" style={styles.logoImage} />
          <span style={styles.logoLabel}>NIEPID</span>
        </div>
        <button onClick={() => navigate('/teacher')} style={styles.backButton} >Back</button>
      </header>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Terms</h1>
      </div>
      <div style={styles.buttonContainerBox}>
        <div style={styles.buttonContainer}>
          {sections.map((section) => (
            <button key={section} onClick={() => handleSection(section)} style={styles.termButton}>{section}</button>
          ))}
        </div>
        <div style={styles.buttonContainer}>
          {years.map((year) => (
            <button key={year} onClick={() => handleYear(year)} style={styles.termButton}>Year {year}</button>
          ))}
        </div>
      </div>
      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; 2024 Functional Assessment. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f0f8ff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px',
    height: '40px',
    marginRight: '0.5rem',
  },
  logoLabel: {
    fontSize: '1.5rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#333333',
    marginBottom: '1rem',
  },
  buttonContainerBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '5rem',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5rem',
    padding: '2rem',
  },
  termButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  backButton: {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
  },
  footerText: {
    margin: '0',
  },
};

export default Term;