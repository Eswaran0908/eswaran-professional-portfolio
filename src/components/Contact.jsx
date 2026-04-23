import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
  FaPaperPlane,
  FaArrowLeft,
  FaSpinner,
  FaCheckCircle,
  FaUserTie,
  FaRocket
} from "react-icons/fa";

import "./Contact.css";

const Contact = ({ prev }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    location: "",
    purpose: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (form.firstName.trim().length < 2) return false;
    if (!form.email.includes("@")) return false;
    if (form.phone.trim().length < 5) return false;
    if (!form.location.trim()) return false;
    if (!form.purpose.trim()) return false;
    if (form.message.trim().length < 3) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const fullName = `${form.firstName} ${form.lastName}`.trim();

    /* ADMIN MAIL TEMPLATE */
    const adminParams = {
      from_name: fullName,
      user_email: form.email,
      phone_number: `${form.countryCode} ${form.phone}`,
      user_location: form.location,
      purpose: form.purpose,
      message: form.message
    };

    /* AUTO REPLY TEMPLATE */
    const replyParams = {
      u_name: form.firstName,
      user_email: form.email
    };

    /* 1. SEND TO YOU */
    emailjs
      .send(
        "service_eswaranraja0908",
        "template_12fa3jk", // New Contact Message Template
        adminParams,
        "ZPmFFa_bh1BJ4dS45"
      )

      /* 2. AUTO REPLY TO USER */
      .then(() => {
        return emailjs.send(
          "service_eswaranraja0908",
          "template_autoreply", // Thank You Template
          replyParams,
          "ZPmFFa_bh1BJ4dS45"
        );
      })

      .then(() => {
        setSubmittedName(form.firstName);
        setShowPopup(true);

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+91",
          phone: "",
          location: "",
          purpose: "",
          message: ""
        });

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      })

      .catch(() => {
        alert("Failed to send message");
      })

      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-glow"></div>

      <h2 className="title">📬 Contact Me</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="mini-badge">
            <FaRocket /> Available for Opportunities
          </div>

          <h3>Let's Build Something Great</h3>

          <p className="sub-text">
            Open for Full Stack Developer roles, freelance work,
            collaborations and exciting tech opportunities.
          </p>

          <div className="stats-row">

            <div className="stat-box">
              <FaUserTie />
              <span>Open To Work</span>
            </div>

            <div className="stat-box">
              <FaRocket />
              <span>Fast Response</span>
            </div>

          </div>

          <div className="top-icons">

            <a href="tel:6361232640" className="call">
              <FaPhoneAlt />
              <span>Call</span>
            </a>

            <a
              href="https://github.com/Eswaran0908"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a href="/ESWARAN.R.pdf" download className="resume">
              <FaFileDownload />
              <span>Resume</span>
            </a>

            <a
              href="https://www.google.com/maps?q=Singarapettai+Tamil+Nadu"
              target="_blank"
              rel="noreferrer"
              className="location"
            >
              <FaMapMarkerAlt />
              <span>Location</span>
            </a>

          </div>

          <div className="bottom-layout">

            <div className="side-icons">

              <a href="mailto:eswaranraja555@gmail.com" className="email">
                <FaEnvelope />
                <span>Email</span>
              </a>

              <a
                href="https://wa.me/916361232640"
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://linkedin.com/in/eswaran0908"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

            </div>

            <div className="map-box">
              <iframe
                title="map"
                loading="lazy"
                src="https://maps.google.com/maps?q=Singarapettai%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-right" onSubmit={handleSubmit}>

          <h3 className="form-title">Send Me a Message</h3>

          {/* FIRST + LAST NAME */}
          <div className="double-row">

            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={form.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />

          </div>

          {/* EMAIL + PHONE */}
          <div className="double-row">

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
            />

            <div className="phone-group">

              <input
                type="text"
                name="countryCode"
                className="code-input"
                value={form.countryCode}
                onChange={handleChange}
                maxLength="5"
                required
              />

              <input
                type="tel"
                name="phone"
                className="number-input"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                maxLength="15"
                required
              />

            </div>

          </div>

          {/* LOCATION + PURPOSE */}
          <div className="double-row">

            <input
              type="text"
              name="location"
              placeholder="Location *"
              value={form.location}
              onChange={handleChange}
              required
            />

            <select
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select Purpose *</option>
              <option value="Hiring Opportunity">Hiring Opportunity</option>
              <option value="Job Request">Job Request</option>
              <option value="Freelance Project">Freelance Project</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>

          </div>

          {/* MESSAGE */}
          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          {/* BUTTONS */}
          <div className="form-actions">

            <button
              type="button"
              className="prev-btn"
              onClick={prev}
            >
              <FaArrowLeft /> Prev
            </button>

            <button
              type="submit"
              className="send-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="spin-loader" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>

          </div>

        </form>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="success-popup">
          <div className="popup-box">
            <FaCheckCircle size={55} color="#22c55e" />
            <h2>Message Sent!</h2>
            <p>Thank you {submittedName}</p>
            <p>I will contact you soon 🚀</p>
          </div>
        </div>
      )}

    </section>
  );
};

export default Contact;