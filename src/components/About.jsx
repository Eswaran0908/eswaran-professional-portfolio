

import { useState } from "react";

import angularProof from "../assets/Learning_proofs/angular.png";
import fullstackProof from "../assets/Learning_proofs/full_stack.png";
import htmlcssProof from "../assets/Learning_proofs/html.png";
import cssProof from "../assets/Learning_proofs/css.png";
import jdbcProof from "../assets/Learning_proofs/jdbc.png";
import jsProof from "../assets/Learning_proofs/js.png";
import reactProof from "../assets/Learning_proofs/react.png";
import springProof from "../assets/Learning_proofs/springboot.png";
import sqlProof from "../assets/Learning_proofs/sql.png";
import mongodbProof from "../assets/Learning_proofs/mongodb.png";
import seoProof from "../assets/Learning_proofs/seo_console.png";

import html from "../assets/icons/technologies/html.png";
import css from "../assets/icons/technologies/css.png";
import js from "../assets/icons/technologies/js.png";
import react from "../assets/icons/technologies/react.png";
import java from "../assets/icons/technologies/java.png";
import spring from "../assets/icons/technologies/spring.png";
import mongo from "../assets/icons/technologies/mongo.png";
import sql from "../assets/icons/technologies/sql.png";
import aws from "../assets/icons/technologies/aws.png";
import angular from "../assets/icons/technologies/angular.png";
import seo from "../assets/icons/technologies/google.png";

import eclipse from "../assets/icons/tools/eclipse.png";
import mongodb from "../assets/icons/tools/mongodb.png";
import mysql from "../assets/icons/tools/mysql.png";
import postman from "../assets/icons/tools/postman.png";
import springtool from "../assets/icons/tools/springtool.png";
import visual from "../assets/icons/tools/visual.png";

import "./About.css";

const About = ({ next, prev }) => {

  const proofs = [
    { img: fullstackProof, name: "AWS" },
    { img: angularProof, name: "Angular" },
    { img: reactProof, name: "React" },
    { img: jsProof, name: "JavaScript" },
    { img: htmlcssProof, name: "HTML" },
    { img: cssProof, name: "CSS" },
    { img: jdbcProof, name: "Java" },
    { img: springProof, name: "Spring Boot" },
    { img: sqlProof, name: "SQL" },
    { img: mongodbProof, name: "MongoDB" },
    { img: seoProof, name: "SEO Optimization" }
  ];

  const tech = [
    { img: aws, name: "AWS", proof: fullstackProof },
    { img: angular, name: "Angular", proof: angularProof },
    { img: react, name: "React", proof: reactProof },
    { img: js, name: "JavaScript", proof: jsProof },
    { img: html, name: "HTML", proof: htmlcssProof },
    { img: css, name: "CSS", proof: cssProof },
    { img: java, name: "Java", proof: jdbcProof },
    { img: spring, name: "Spring Boot", proof: springProof },
    { img: sql, name: "SQL", proof: sqlProof },
    { img: mongo, name: "MongoDB", proof: mongodbProof },
    { img: seo, name: "SEO Optimization", proof: seoProof }
  ];

  const tools = [
    { img: eclipse, name: "Eclipse" },
    { img: mongodb, name: "MongoDB Compass" },
    { img: mysql, name: "MySQL" },
    { img: postman, name: "Postman" },
    { img: springtool, name: "Spring Tool Suite" },
    { img: visual, name: "VS Code" }
  ];

  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("AWS");

  const change = (i) => {
    setIndex(i);
    setActive(proofs[i].name);
  };

  const handleTech = (item) => {
    const i = proofs.findIndex(p => p.img === item.proof);
    if (i !== -1) change(i);
  };

  const handleFullView = () => {
    window.open(proofs[index].img, "_blank");
  };

  return (
    <section className="about">

      <h2 className="title">👨‍💻 About Me</h2>

      <div className="container">

        {/* LEFT */}
        <div className="left">

          <div className="image-box">
            <img src={proofs[index].img} alt={active} />
          </div>

          <h4 className="active-text">{active}</h4>

          <div className="controls">
            <button onClick={() => change((index - 1 + proofs.length) % proofs.length)}>⬅</button>
            <button onClick={handleFullView}>Full View 🔍</button>
            <button onClick={() => change((index + 1) % proofs.length)}>➡</button>
          </div>

          <div className="bottom-nav">
            <button onClick={prev}>⬅ Prev</button>
            <button onClick={next}>Next ➡</button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="right">

          <div className="about-text">
          
            <p>🚀 <span>Full Stack Developer</span> building scalable, modern and responsive web applications</p>
            <p>⚡ Experienced in <span>Java, Spring Boot, React.js</span> and full stack web development</p>
            <p>💻 Strong knowledge in <span>Frontend & Backend Development</span>, REST APIs and database integration</p>
            <p>🔗 Skilled in <span>MongoDB, MySQL</span> and designing secure backend systems</p>
            <p>🎯 Focused on <span>Clean Code, Performance Optimization</span> and best development practices</p>
            <p>🌐 Experience in <span>SEO Optimization</span>, Google Search Console, indexing and website ranking</p>

          </div>

          <h4 className="sub">Technologies</h4>
          <div className="grid">
            {tech.map((t, i) => (
              <img
                key={i}
                src={t.img}
                title={t.name}
                className={active === t.name ? "active-icon" : ""}
                onClick={() => handleTech(t)}
              />
            ))}
          </div>

          <h4 className="sub">Tools</h4>
          <div className="grid">
            {tools.map((t, i) => (
              <img key={i} src={t.img} title={t.name} />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;