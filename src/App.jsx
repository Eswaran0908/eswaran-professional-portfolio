import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("home");

  const order = [
    "home",
    "about",
    "projects",
    "certificates",
    "education",
    "contact"
  ];

  const next = () => {
    const i = order.indexOf(page);
    if (i < order.length - 1) setPage(order[i + 1]);
  };

  const prev = () => {
    const i = order.indexOf(page);
    if (i > 0) setPage(order[i - 1]);
  };

  return (
    <>
      <Navbar active={page} setPage={setPage} />

      <div style={{ paddingTop: "80px", minHeight: "80vh" }}>
        {page === "home" && <Home next={next} setPage={setPage} />}
        {page === "about" && <About next={next} prev={prev} />}
        {page === "projects" && <Projects next={next} prev={prev} />}
        {page === "certificates" && <Certificates next={next} prev={prev} />}
        {page === "education" && <Education next={next} prev={prev} />}
        {page === "contact" && <Contact prev={prev} setPage={setPage} />}
      </div>

      <Footer setPage={setPage} />
    </>
  );
}

export default App;