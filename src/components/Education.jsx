import bca from "../assets/Education_Certificates/bca-professional.pdf";
import hsc from "../assets/Education_Certificates/hsc.pdf";
import sslc from "../assets/Education_Certificates/sslc.pdf";
import master from "../assets/Education_Certificates/master.jpg";

import "./Education.css";

const Education = ({ next, prev }) => {
  return (
    <section className="education">

      {/* HEADER */}
      <div className="edu-header">
        <h2>🎓 My Education</h2>
        <p>Academic journey & Certifications</p>
      </div>

      {/* GRID */}
      <div className="edu-grid">

        {/* FULL STACK */}
        <div className="edu-card highlight">
          <h3>Full Stack Developer</h3>
          <p>Itvedant Institute</p>

          <div className="cert-box">
            <img src={master} alt="certificate" className="cert-image" />
          </div>

          <button
            className="view-btn"
            onClick={() => window.open(master, "_blank")}
          >
            View Certificate 🖼
          </button>
        </div>

        {/* BCA */}
        <div className="edu-card">
          <h3>BCA</h3>
          <p>Periyar University</p>

          <div className="cert-box icon graduate-icon">🎓</div>

          <span>81.67%</span>

          <button
            className="view-btn"
            onClick={() => window.open(bca, "_blank")}
          >
            View Certificate 📄
          </button>
        </div>

        {/* HSC */}
        <div className="edu-card">
          <h3>HSC</h3>
          <p>State Board</p>

          <div className="cert-box icon hsc-icon">🏫</div>

          <span>66.75%</span>

          <button
            className="view-btn"
            onClick={() => window.open(hsc, "_blank")}
          >
            View Certificate 📄
          </button>
        </div>

        {/* SSLC */}
        <div className="edu-card">
          <h3>SSLC</h3>
          <p>State Board</p>

          <div className="cert-box icon sslc-icon">📘</div>

          <span>76.6%</span>

          <button
            className="view-btn"
            onClick={() => window.open(sslc, "_blank")}
          >
            View Certificate 📄
          </button>
        </div>

      </div>

      {/* NAV */}
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