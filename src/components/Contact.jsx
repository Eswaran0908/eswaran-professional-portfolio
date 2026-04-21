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
  FaCheckCircle
} from "react-icons/fa";

import "./Contact.css";

const Contact = ({ prev }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
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
    const phoneOnly = form.phone.replace(/\D/g, "");

    if (form.name.trim().length < 3) {
      alert("Enter valid name");
      return false;
    }

    if (!form.email.includes("@")) {
      alert("Enter valid email");
      return false;
    }

    if (phoneOnly.length < 10) {
      alert("Enter valid phone number");
      return false;
    }

    if (form.message.trim().length < 3) {
      alert("Enter message");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  // OWNER MAIL
  const ownerParams = {
    title: "New Portfolio Contact",
    from_name: form.name,
    user_email: form.email,
    phone_number: `${form.countryCode} ${form.phone}`,
    message: form.message
  };

  // USER AUTO REPLY
  const replyParams = {
    u_name: form.name,
    name: form.name,
    u_email: form.email,
    email: form.email
  };

  // 1st Send Owner Mail
  emailjs
    .send(
      "service_eswaranraja0908",
      "template_12fa3jk",
      ownerParams,
      "ZPmFFa_bh1BJ4dS45"
    )

    .then(() => {
      // 2nd Send User Thank You Mail
      return emailjs.send(
        "service_eswaranraja0908",
        "template_59ow7s7",
        replyParams,
        "ZPmFFa_bh1BJ4dS45"
      );
    })

    .then(() => {
      setSubmittedName(form.name);
      setShowPopup(true);

      setForm({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: ""
      });

      setTimeout(() => {
        setShowPopup(false);
      }, 3500);
    })

    .catch((error) => {
      console.log(error);
      alert("Message Failed. Try again.");
    })

    .finally(() => {
      setLoading(false);
    });
};

  return (
    <section className="contact-section">

      <h2 className="title">📬 Contact Me</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <h3>Get in Touch</h3>

          <p className="sub-text">
            Feel free to reach out anytime.
          </p>

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

            <a
              href="/ESWARAN.R.pdf"
              download
              className="resume"
            >
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

              <a
                href="mailto:eswaranraja555@gmail.com"
                className="email"
              >
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
                href="https://linkedin.com"
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

        {/* RIGHT SIDE */}
        <form
          className="contact-right"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="phone-group">

            <input
              type="text"
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              maxLength="10"
              pattern="[0-9]{10}"
              required
            />

          </div>

          <textarea
            rows="6"
            name="message"
            placeholder="Message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
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

        </form>

      </div>

      {/* PREV BUTTON */}
      <div className="nav-buttons">

        <button
          className="btn prev"
          onClick={prev}
        >
          <FaArrowLeft />
          Prev
        </button>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="success-popup">

          <div className="popup-box">

            <FaCheckCircle
              size={55}
              color="#22c55e"
            />

            <h2>Message Sent!</h2>

            <p>
              Thank you <b>{submittedName}</b>
            </p>

            <p>
              I will contact you soon 🚀
            </p>

          </div>

        </div>
      )}

    </section>
  );
};

export default Contact;