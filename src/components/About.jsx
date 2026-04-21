import { useState } from "react";
import { useRef } from "react";

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
    { img: mongodbProof, name: "MongoDB" }
  ];

  const tech = [
    { img: html, name: "HTML", proof: htmlcssProof },
    { img: css, name: "CSS", proof: cssProof },
    { img: js, name: "JavaScript", proof: jsProof },
    { img: react, name: "React", proof: reactProof },
    { img: java, name: "Java", proof: jdbcProof },
    { img: spring, name: "Spring Boot", proof: springProof },
    { img: mongo, name: "MongoDB", proof: mongodbProof },
    { img: sql, name: "SQL", proof: sqlProof },
    { img: aws, name: "AWS", proof: fullstackProof },
    { img: angular, name: "Angular", proof: angularProof }
  ];

  const tools = [
    { img: eclipse }, { img: mongodb }, { img: mysql },
    { img: postman }, { img: springtool }, { img: visual }
  ];

  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [active, setActive] = useState("Full Stack");

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - start.x,
      y: e.clientY - start.y
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const change = (i) => {
    setIndex(i);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setActive(proofs[i].name);
  };

  const handleTech = (item) => {
    const i = proofs.findIndex(p => p.img === item.proof);
    if (i !== -1) change(i);
  };

  return (
    <section className="about">

      <h2 className="title">👨‍💻 About Me</h2>

      <div className="container">

        {/* LEFT */}
        <div className="left">

          <div
            className="image-box"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={proofs[index].img}
              onMouseDown={handleMouseDown}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                cursor: dragging ? "grabbing" : "grab"
              }}
            />
          </div>

          <h4 className="active-text">{active}</h4>

          <div className="controls">
            <button onClick={() => change((index - 1 + proofs.length) % proofs.length)}>⬅</button>
            <button onClick={() => change(0)}>Reset</button>
            <button onClick={() => change((index + 1) % proofs.length)}>➡</button>
          </div>

          <div className="controls">
            <button onClick={() => setZoom(z => z + 0.2)}>🔍+</button>
            <button onClick={() => setZoom(z => (z > 1 ? z - 0.2 : 1))}>🔍-</button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="right">

          <div className="about-text">
                 
  <p>🚀 <span>Full Stack Developer</span> passionate about building modern and user-friendly web applications</p>
  <p>⚡ Develop <span>Scalable</span> and <span>High-Performance</span> systems for real-world business needs</p>
  <p>💻 Skilled in <span>Java</span>, <span>Spring Boot</span>, <span>React</span> and frontend-backend integration</p>
  <p>🔗 Strong experience in creating <span>REST APIs</span>, databases, and secure backend services</p>
  <p>🎯 Focused on <span>Clean Code</span>, <span>Responsive UI</span>, and smart <span>Problem Solving</span></p>

          </div>

          <h4 className="sub">Technologies</h4>
          <div className="grid">
            {tech.map((t, i) => (
              <img
                key={i}
                src={t.img}
                className={active === t.name ? "active-icon" : ""}
                onClick={() => handleTech(t)}
              />
            ))}
          </div>

          <h4 className="sub">Tools</h4>
          <div className="grid">
            {tools.map((t, i) => (
              <img key={i} src={t.img} />
            ))}
          </div>

          <div className="bottom-nav">
            <button onClick={prev}>⬅ Prev</button>
            <button onClick={next}>Next ➡</button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;