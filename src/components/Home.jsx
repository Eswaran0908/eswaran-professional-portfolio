

import profile from "../assets/eswaran.jpg";
import "./Home.css";

const Home = ({ next, setPage }) => {
  return (
    <section className="home-section">
      <div className="home-card">

        <div className="top-row">

          {/* LEFT SIDE */}
          <div className="top-left">

            <p className="eyebrow">
              🚀 FULL STACK DEVELOPER
            </p>

            <div className="job-badge">
              💼 Open to Work &nbsp;|&nbsp;
              🚀 Immediate Joiner &nbsp;|&nbsp;
              💻 Freelance Available &nbsp;|&nbsp;
              👨‍💻 Full-Time / Part-Time &nbsp;|&nbsp;
              🌍 Remote Ready
            </div>

            <h1 className="main-title">
               Eswaran R
               <span className="ean-tag">EAN Developer </span>
               <small>Java Full Stack Developer</small>

            </h1>

            <p className="summary">
              Full Stack Developer skilled in Java, Spring Boot,
              React.js, MongoDB and MySQL. Focused on building
              scalable web applications with modern UI,
              secure backend systems and real-world solutions.
            </p>

            {/* SKILLS */}
            <div className="chip-row">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>AWS</span>
              <span>GitHub</span>
            </div>

            {/* SERVICES */}
            <div className="services-box">

              <h3>💼 Core Expertise</h3>

              <div className="service-grid">
                <div>✔ Full Stack Web Development</div>
                <div>✔ REST API Development</div>
                <div>✔ Responsive Web Design</div>

                <div>✔ SQL / MySQL Database</div>
                <div>✔ CRUD Applications</div>
                <div>✔ Spring Boot Backend</div>

                <div>✔ React.js Frontend</div>
                <div>✔ GitHub Workflow</div>
                <div>✔ Frontend Deployment</div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="top-right">

            {/* PHOTO */}
            <div className="image-wrap">
              <img
                src={profile}
                alt="Eswaran Profile"
                className="home-image"
              />
            </div>

            {/* STATUS */}
            <div className="status-box">
              <p>🟢 Available for Hiring | 🚀 Immediate Joiner | 📍 Tamil Nadu, India</p>
              

            </div>

            {/* GOAL */}
            <div className="goal-box">
              📌 Looking to contribute technical skills in a
              growth-oriented company and build
              high-quality software solutions.
            </div>

            {/* BUTTONS */}
            <div className="right-action-row">

              <button
                className="hire-btn"
                onClick={() => setPage("contact")}
              >
                Hire Me 🚀
              </button>

              <a
                href="/ESWARAN.R.pdf"
                download
                className="secondary-btn"
              >
                Resume 📄
              </a>

              <button
                className="primary-btn"
                onClick={next}
              >
                Explore →
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;