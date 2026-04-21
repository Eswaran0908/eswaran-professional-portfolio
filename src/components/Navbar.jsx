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

  // 🔥 scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h2 className="logo">Eswaran</h2>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {sections.map((item) => (
          <li key={item}>
            <button
              className={`nav-btn ${active === item ? "active" : ""}`}
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