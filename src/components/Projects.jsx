


import React, { useState, useEffect } from "react";

import {
  FaGithub,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import { SiNetlify, SiVercel } from "react-icons/si";

import "./Projects.css";

const projects = [
  {
    title: "Professional Portfolio Website (SEO Optimized)",
    date: "Apr 2026",
    icon: "💼",

    image: "/seo-console.png",


    tech:
      "React.js, Vite, HTML, CSS, JavaScript, SEO Optimization, Google Search Console, Vercel, GoDaddy",

    details: [
      "Modern professional portfolio website",
      "Fully SEO optimized (Google indexed website)",
      "Integrated Google Search Console",
      "Projects, skills, education, certificates sections",
      "Fully responsive (mobile + desktop)",
      "Custom domain connected via GoDaddy",
      "Deployed using Vercel with fast performance",
      "Live website available on Google search",
    ],

    highlights: [
      "Google Search Ranking Enabled",
      "SEO Friendly Structure",
      "Fast Loading Performance",
      "Mobile Optimized UI",
    ],

    live: "https://eswarandev.in",
    vercel: "https://eswaran-professional-portfolio.vercel.app",
    github:
      "https://github.com/Eswaran0908/eswaran-professional-portfolio",
  },


   {
    title: "ESWARAN Resume Portfolio Website",
    date: "Apr 2026",
    icon: "📄",

    // ⭐ MULTIPLE IMAGES
    images: [
      "/eswaran_resume/about.png",
      "/eswaran_resume/home.png",
      "/eswaran_resume/projects.png",
      "/eswaran_resume/contact.png",
      "/eswaran_resume/certificates.png",
      "/eswaran_resume/education.png",
      "/eswaran_resume/index.png",
      "/eswaran_resume/skills.png"
    ],

    tech: "React.js, Vite, HTML, CSS, JavaScript, Netlify Free Domain",

    details: [
      "Professional responsive portfolio website",
      "Projects, skills, education, certificates",
      "Resume download option",
      "Hosted using Netlify",
      "Earlier portfolio version",
    ],

    highlights: [
      "Responsive Portfolio UI",
      "Multi-page Navigation",
      "Netlify Deployment",
      "Clean UI Design",
      "Fast Loading",
    ],

    netlify: "https://eswaran-resume-website.netlify.app",
    github: "https://github.com/Eswaran0908/eswaran-resume-website",

  },

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
    title: "Thirukkural Search Website",
    date: "Oct 2024 - Jul 2025",
    icon: "📖",
    images: ["/thiru_kural/index.png",
      "/thiru_kural/இலக்கியம்-page.png",
      "/thiru_kural/திருக்குறள்-Home-page.png",
      "/thiru_kural/5_3.பிரிவுகள்-search.png",
      "/thiru_kural/5_4.குறட்பாக்கள்-search.png"
    ],

    tech: "HTML, CSS, Bootstrap, JavaScript, Netlify",

    details: [
      "Search Thirukkural couplets",
      "Responsive UI design",
      "Hosted with Netlify",
      "Tamil educational web project",
    ],
    highlights: [
      "📖 1330 Thirukkural Couplets Search",
      "🔍 Fast Tamil Search Functionality",
      "📱 Fully Responsive Design",
      "🌐 Live Website (Netlify Hosted)",
      "🎯 Clean UI & Easy Navigation",
      "📚 Tamil Educational Platform",
    ],

    netlify: "https://site-tamil-ilakkiya.netlify.app",
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
  }
 
];


const Projects = ({ next, prev }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [lightboxImg, setLightboxImg] = useState(null);

  /* ✅ FIXED AUTO SLIDE */
  useEffect(() => {
    if (!activeImages.length) return;

    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % activeImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImages]);

  return (
    <section className="project-section">
      <h2 className="heading">🚀 My Projects</h2>

      <div className="project-container">
        {projects.map((proj, index) => (
          <div className="project-card-row" key={index}>

            {/* LEFT */}
            <div className="project-left">

              {/* SINGLE IMAGE */}
              {proj.image && (
                <img
                  src={proj.image}
                  className="project-img"
                  onClick={() => {
                    setActiveImages([proj.image]);
                    setImgIndex(0);   // ✅ added
                    setLightboxOpen(true);
                  }}
                />
              )}

              {/* MULTIPLE IMAGE */}
              {proj.images && (
                <div className="project-image">

                  <img
                    src={proj.images[imgIndex % proj.images.length]}
                    onClick={() => {
                      setActiveImages(proj.images);
                      setImgIndex(0);   // ✅ added
                      setLightboxOpen(true);
                    }}
                  />
                  
                  {/* LEFT */}
                    <button
                      className="carousel-btn carousel-left"
                      onClick={() =>
                        setImgIndex((prev) =>
                          prev === 0 ? proj.images.length - 1 : prev - 1
                        )
                      }
                    >
                      ⬅
                    </button>

                    {/* RIGHT */}
                    <button
                      className="carousel-btn carousel-right"
                      onClick={() =>
                        setImgIndex(
                          (prev) => (prev + 1) % proj.images.length
                        )
                      }
                    >
                      ➡
                    </button>     
              
                  {/* MAIN CAROUSEL DOTS */}
                  <div className="carousel-dots">
                    {proj.images.map((_, i) => (
                      <span
                        key={i + "-" + imgIndex}
                        className={`carousel-dot ${
                          i === imgIndex ? "carousel-active" : ""
                        }`}
                        onClick={() => setImgIndex(i)}
                      />
                    ))}
                  </div>

                </div>

              )}

              {/* BUTTONS */}
              <div className="btn-group">
                {proj.live && (
                  <button onClick={() => window.open(proj.live)}>
                    <FaGlobe /> Live
                  </button>
                )}
                {proj.netlify && (
                  <button onClick={() => window.open(proj.netlify)}>
                    <SiNetlify /> Netlify
                  </button>
                )}
                {proj.vercel && (
                  <button onClick={() => window.open(proj.vercel)}>
                    <SiVercel /> Vercel
                  </button>
                )}
                {proj.github && (
                  <button onClick={() => window.open(proj.github)}>
                    <FaGithub /> GitHub
                  </button>
                )}
              </div>
            </div>
          
              <div className="project-content">
                  <h3>{proj.title}</h3>
                  <p className="tech">{proj.tech}</p>

                  {/* DETAILS */}
                  <ul className="details-list">
                    {proj.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>

                  {/* 🔥 HIGHLIGHTS GRID */}
                  {proj.highlights && (
                    <div className="simple-highlights">
                      <h3 className="highlight-title">⭐ Highlights</h3>

                      <div className="highlight-grid">
                        {proj.highlights.map((h, i) => (
                          <div key={i} className="highlight-box">
                            ⭐ {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
            </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox">
          <span className="close" onClick={() => setLightboxOpen(false)}>
            ✖
          </span>

          <img
            src={activeImages[imgIndex % activeImages.length]}
            className="lightbox-img"
          />

          {/* LEFT */}
          <button
            className="lb-btn left"
            onClick={() =>
              setImgIndex((prev) =>
                prev === 0 ? activeImages.length - 1 : prev - 1
              )
            }
          >
            ⬅
          </button>

          {/* RIGHT */}
          <button
            className="lb-btn right"
            onClick={() =>
              setImgIndex(
                (prev) => (prev + 1) % activeImages.length
              )
            }
          >
            ➡
          </button>

         
          {/* LIGHTBOX DOTS */}
          <div className="lightbox-dots">
            {activeImages.map((_, i) => (
              <span
                key={i + "-" + imgIndex}
                className={`lightbox-dot ${
                  i === imgIndex % activeImages.length
                    ? "lightbox-active"
                    : ""
                }`}
                onClick={() => setImgIndex(i)}
              />
            ))}
          </div>
          
        </div>
      )}

      {/* EXTRA LIGHTBOX (UNCHANGED) */}
      {lightboxImg && (
        <div
          className="lightbox"
          onClick={() => setLightboxImg(null)}
        >
          <img src={lightboxImg} alt="full" />
        </div>
      )}

      
      {/* NAV */}
      <div className="nav-buttons">
        <button className="btn prev" onClick={prev}>
          ⬅ Prev
        </button>

        <button className="btn next" onClick={next}>
          Next ➡
        </button>
      </div>

      {/* SOCIAL */}
      <div className="social">
        <button onClick={() => window.open("https://github.com/Eswaran0908")}>
          <FaGithub /> GitHub
        </button>

        <button onClick={() => window.open("https://linkedin.com")}>
          <FaLinkedin /> LinkedIn
        </button>
      </div>
    </section>
  );
};

export default Projects;