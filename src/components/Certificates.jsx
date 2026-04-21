import React, { useState } from "react";
import "./Certificates.css";

/* CERTIFICATE IMAGES */
import advanced from "../assets/List_Certificates/advanced.jpg";
import coreweb from "../assets/List_Certificates/coreweb.jpg";
import reactCert from "../assets/List_Certificates/react.jpg";
import angularCert from "../assets/List_Certificates/angular.jpg";
import javaCert from "../assets/List_Certificates/java.jpg";
import springCert from "../assets/List_Certificates/spring.jpg";
import mongoCert from "../assets/List_Certificates/mongo.jpg";
import sqlCert from "../assets/List_Certificates/sql.jpg";
import awsCert from "../assets/List_Certificates/aws.jpg";
import masterCert from "../assets/List_Certificates/master.jpg";

/* ICONS */
import htmlIcon from "../assets/icons/technologies/html.png";
import cssIcon from "../assets/icons/technologies/css.png";
import jsIcon from "../assets/icons/technologies/js.png";
import reactIcon from "../assets/icons/technologies/react.png";
import angularIcon from "../assets/icons/technologies/angular.png";
import javaIcon from "../assets/icons/technologies/java.png";
import springIcon from "../assets/icons/technologies/spring.png";
import mongoIcon from "../assets/icons/technologies/mongo.png";
import sqlIcon from "../assets/icons/technologies/sql.png";
import awsIcon from "../assets/icons/technologies/aws.png";
import masterIcon from "../assets/master.png";

const certData = [
  {
    category: "Frontend 🚀",
    items: [
      { img: advanced, title: "Advanced Web Design", date: "09 Oct 2024", icon: jsIcon },
      { img: coreweb, title: "Core Web Design", date: "04 Oct 2024", icons: [htmlIcon, cssIcon] },
      { img: reactCert, title: "React.js", date: "26 Apr 2025", icon: reactIcon },
      { img: angularCert, title: "Angular.js", date: "10 Jul 2025", icon: angularIcon }
    ]
  },
  {
    category: "Backend ⚙️",
    items: [
      { img: javaCert, title: "Core Java", date: "08 Feb 2025", icon: javaIcon },
      { img: springCert, title: "Spring Boot", date: "21 Feb 2025", icon: springIcon }
    ]
  },
  {
    category: "Database 🗄️",
    items: [
      { img: mongoCert, title: "MongoDB", date: "13 May 2025", icon: mongoIcon },
      { img: sqlCert, title: "SQL", date: "09 Oct 2024", icon: sqlIcon }
    ]
  },
  {
    category: "Cloud ☁️",
    items: [
      { img: awsCert, title: "AWS & DevOps", date: "02 Aug 2025", icon: awsIcon }
    ]
  },
  {
    category: "Master 🎓",
    items: [
      { img: masterCert, title: "Full Stack Web Development", date: "14 Feb 2025", icon: masterIcon }
    ]
  }
];

const Certificates = ({ next, prev }) => {
  const allCertificates = certData.flatMap((group) => group.items);

  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (cert) => {
    const index = allCertificates.findIndex((item) => item.title === cert.title);
    setSelected(cert);
    setCurrentIndex(index);
    setZoom(1);
  };

  const handleClose = () => {
    setSelected(null);
    setZoom(1);
  };

  const handleNextCert = () => {
    const nextIndex = (currentIndex + 1) % allCertificates.length;
    setSelected(allCertificates[nextIndex]);
    setCurrentIndex(nextIndex);
    setZoom(1);
  };

  const handlePrevCert = () => {
    const prevIndex = (currentIndex - 1 + allCertificates.length) % allCertificates.length;
    setSelected(allCertificates[prevIndex]);
    setCurrentIndex(prevIndex);
    setZoom(1);
  };

  return (
    <section className="cert-section">
      <h2>🏆 Certificates </h2>

      {certData.map((group, index) => (
        <div key={index}>
          <h3 className="category-title">{group.category}</h3>

          <div className="cert-grid">
            {group.items.map((cert, i) => (
              <div className="cert-card" key={i}>
                <div className="card-top">

                  <div className="icon-group">
                    {cert.icons ? (
                      cert.icons.map((icon, idx) => (
                        <img
                          key={idx}
                          src={icon}
                          alt="icon"
                          className="tech-icon"
                        />
                      ))
                    ) : (
                      <img
                        src={cert.icon}
                        alt={cert.title}
                        className="tech-icon"
                      />
                    )}
                  </div>

                  <div className="card-text">
                    <h4>{cert.title}</h4>
                    <p>{cert.date}</p>
                  </div>
                </div>

                <button
                  className="view-btn"
                  onClick={() => handleOpen(cert)}
                >
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* NAV */}
      <div className="nav-buttons">
        <button className="btn prev" onClick={prev}>
          ⬅ Prev
        </button>

        <button className="btn next" onClick={next}>
          Next ➡
        </button>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal-overlay">
          <div className="modal-content">

            <div className="viewer-wrapper">
              <img
                src={selected.img}
                alt={selected.title}
                className="viewer-img"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            <div className="bottom-controls">
              <button
                className="back-btn"
                onClick={handlePrevCert}
              >
                ⬅ Prev
              </button>

              <button
                className="zoom-btn"
                onClick={() => setZoom((p) => p + 0.2)}
              >
                🔍 Zoom In
              </button>

              <button
                className="zoom-btn"
                onClick={() =>
                  setZoom((p) => Math.max(0.5, p - 0.2))
                }
              >
                🔎 Zoom Out
              </button>

              <button
                className="back-btn"
                onClick={handleNextCert}
              >
                Next ➡
              </button>

              <button
                className="close-btn full-close"
                onClick={handleClose}
              >
                ❌ Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;