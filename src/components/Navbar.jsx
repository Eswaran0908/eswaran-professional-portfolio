import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ active, setPage }) => {
  const sections = [
    "home",
    "about",
    "projects",
    "certificates",
    "education",
    "contact",
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LEFT SIDE BRAND */}
      <div className="brand-box">

        <a
          href="/EANicelogo.png"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img
            src="/EANicelogo.png"
            alt="Logo"
            className="logo-img"
          />
        </a>

        <h2
          className="brand-name"
          onClick={() => setPage("home")}
        >
          Eswaran
        </h2>

      </div>

      {/* MOBILE MENU ICON */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* MENU */}
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {sections.map((item) => (
          <li key={item}>
            <button
              className={`nav-btn ${
                active === item ? "active" : ""
              }`}
              onClick={() => {
                setPage(item);
                setMenuOpen(false);
              }}
            >
              {item.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;