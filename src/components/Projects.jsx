import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Online Book Store Application",
    date: "Feb 2025",
    icon: "🛒",
    tech: "Java, Spring Boot, MySQL, HTML, CSS, Bootstrap, JavaScript",
    details: [
      "Full-stack app with Admin & User modules",
      "Admin: CRUD, search, pagination",
      "User: Cart, favorites, checkout",
      "MySQL database integration",
    ],
  },
  {
    title: "Customer CRUD – Spring Boot",
    date: "Jan 2025",
    icon: "👥",
    tech: "Spring Boot, MySQL, Postman, Maven",
    details: [
      "REST API with full CRUD",
      "Search by name, email, salary",
      "Tested using Postman",
    ],
  },
  {
    title: "Evergreen Studio – JDBC",
    date: "Dec 2024",
    icon: "💻",
    tech: "Java, JDBC, MySQL",
    details: [
      "JDBC CRUD operations",
      "Real-time DB updates",
    ],
  },
  {
    title: "Thirukkural Search",
    date: "Oct 2024 - Jul 2025",
    icon: "📖",
    tech: "HTML, CSS, Bootstrap, JS",
    details: [
      "Search Thirukkural couplets",
      "Responsive UI",
      "Deployed on Netlify",
    ],
    live: "https://site-tamil-ilakkiya.netlify.app",
    github: "https://github.com/Eswaran0908/thiru-kural-search-webpage",
  },
  {
    title: "Agriculture Database",
    date: "Oct 2024",
    icon: "🌾",
    tech: "MySQL Workbench",
    details: [
      "Farmer & crop management",
      "Profit/Loss tracking",
    ],
  },
  {
    title: "ESWARAN Resume Portfolio Website",
    date: "Apr 2026",
    icon: "💼",
    tech: "React.js, Vite, HTML, CSS, JavaScript, Netlify",
    details: [
      "Professional responsive portfolio website",
      "Projects, skills, education, certificates",
      "Resume download option",
      "Deployed on Netlify",
    ],
    live: "https://eswaran-resume-website.netlify.app",
    github: "https://github.com/Eswaran0908/eswaran-resume-website",
  },
];

const Projects = ({ next, prev }) => {
  return (
    <section className="project-section">
      <h2 className="heading">🚀 My Projects</h2>

      <div className="container">
        <div className="project-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <div className="card-top">
                <span className="icon">{proj.icon}</span>
                <span className="date">{proj.date}</span>
              </div>

              <h3>{proj.title}</h3>
              <p className="tech">{proj.tech}</p>

              <ul>
                {proj.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              <div className="btn-group">
                {proj.live && (
                  <button
                    onClick={() => window.open(proj.live, "_blank")}
                    className="btn"
                  >
                    Live
                  </button>
                )}

                {proj.github && (
                  <button
                    onClick={() => window.open(proj.github, "_blank")}
                    className="btn"
                  >
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="nav">
        <button onClick={prev}>⬅ Prev</button>
        <button onClick={next}>Next ➡</button>
      </div>

      <div className="social">
        <button
          onClick={() =>
            window.open("https://github.com/Eswaran0908", "_blank")
          }
        >
          GitHub
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/eswaran0908",
              "_blank"
            )
          }
        >
          LinkedIn
        </button>
      </div>
    </section>
  );
};

export default Projects;