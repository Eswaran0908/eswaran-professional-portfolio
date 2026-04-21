import "./Footer.css";
import {
  FaHome,
  FaCode,
  FaHeart,
  FaReact,
  FaJava,
  FaGithub
} from "react-icons/fa";

const Footer = ({ setPage }) => {
  return (
    <footer className="footer">

      {/* TOP LINE */}
      <div className="footer-line"></div>

      {/* ONE ROW - 5 COLUMNS */}
      <div className="footer-grid">

        {/* COLUMN 1 */}
        <div className="col left-col">
          <h3 className="footer-brand">
            <FaReact className="spin-icon" />
            ER Portfolio
          </h3>

          <p className="footer-sub">
            Java Full Stack Developer
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="col">
          <p className="footer-watermark">
            Professional Portfolio Website
          </p>
        </div>

        {/* COLUMN 3 */}
        <div className="col">
          <p className="footer-copy">
            © 2026 All Rights Reserved
          </p>
        </div>

        {/* COLUMN 4 */}
        <div className="col">
          <p className="footer-tech">
            <FaReact /> React
            <FaGithub /> GitHub
            <FaJava /> Java
          </p>

          <p className="made-line">
            Made with <FaHeart className="heart" />
            using React <FaCode />
          </p>
        </div>

        {/* COLUMN 5 */}
        <div className="col btn-col">
          <button
            className="footer-btn"
            onClick={() => setPage("home")}
            type="button"
          >
            <FaHome /> Back to Home
          </button>
        </div>

      </div>

    </footer>
  );
};

export default Footer;