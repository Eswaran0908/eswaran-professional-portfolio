
import bca from "../assets/Education_Certificates/bca-professional.pdf";
import hsc from "../assets/Education_Certificates/hsc.pdf";
import sslc from "../assets/Education_Certificates/sslc.pdf";
import master from "../assets/Education_Certificates/master.jpg";
import nsdc from "../assets/Education_Certificates/nsdc.jpg";

import "./Education.css";

const Education = ({ next, prev }) => {
  return (
    <section className="education">

      {/* HEADER */}
      <div className="edu-header">
        <h2>🎓 My Education</h2>
        <p>Academic Journey & Certifications</p>
      </div>

      {/* PROFESSIONAL CERTIFICATIONS */}
      <div className="edu-grid professional-grid">

        {/* NSDC */}
        <div className="edu-card highlight">

          <h3>NSDC Certification</h3>

          <p>National Skill Development Corporation</p>

          <small>📅 Issued: 25 July 2026</small>

          <div className="cert-box professional-cert">
            <img
              src={nsdc}
              alt="NSDC Certificate"
              className="cert-image"
            />
          </div>

          <button
            className="view-btn"
            onClick={() => window.open(nsdc, "_blank")}
          >
            View NSDC Certificate ↗
          </button>

        </div>

        {/* MASTER */}
        <div className="edu-card highlight">

          <h3>
            Master in Full Stack Web Development with Java
          </h3>

          <p>Itvedant Institute</p>

          <small>📅 Issued: 14 February 2025</small>

          <div className="cert-box professional-cert">
            <img
              src={master}
              alt="Master Full Stack Certificate"
              className="cert-image"
            />
          </div>

          <button
            className="view-btn"
            onClick={() => window.open(master, "_blank")}
          >
            View Certificate ↗
          </button>

        </div>

      </div>

      {/* ACADEMIC EDUCATION */}
      <div className="edu-grid academic-grid">

        {/* BCA */}
        <div className="edu-card">

          <h3>BCA</h3>

          <p>Periyar University</p>

          <small>📅 Dated: 22 June 2017</small>

          <div className="cert-box icon graduate-icon">
            🎓
          </div>

          <span>81.67%</span>

          <button
            className="view-btn"
            onClick={() => window.open(bca, "_blank")}
          >
            View Certificate ↗
          </button>

        </div>

        {/* HSC */}
        <div className="edu-card">

          <h3>HSC</h3>

          <p>State Board</p>

          <small>📅 Completed: March 2014</small>

          <div className="cert-box icon hsc-icon">
            🏫
          </div>

          <span>66.75%</span>

          <button
            className="view-btn"
            onClick={() => window.open(hsc, "_blank")}
          >
            View Certificate ↗
          </button>

        </div>

        {/* SSLC */}
        <div className="edu-card">

          <h3>SSLC</h3>

          <p>State Board</p>

          <small>📅 Completed: April 2012</small>

          <div className="cert-box icon sslc-icon">
            📘
          </div>

          <span>76.6%</span>

          <button
            className="view-btn"
            onClick={() => window.open(sslc, "_blank")}
          >
            View Certificate ↗
          </button>

        </div>

      </div>

      {/* NAVIGATION */}
      <div className="nav-buttons">

        <button className="btn prev" onClick={prev}>
          ⬅ Prev
        </button>

        <button className="btn next" onClick={next}>
          Next ➡
        </button>

      </div>

    </section>
  );
};

export default Education;

