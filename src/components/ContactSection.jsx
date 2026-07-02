import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";
import { ReactComponent as Logo } from "./iconsax-location.svg";

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (

    <div className="contact-page">

      <nav className="navbar">

        <div className="logo">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Estate<span>Hub</span>
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/property">Browser</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="btn">
          My Account
        </button>

      </nav>

      {/* ——— FULL-PAGE DARK CONTACT SECTION ——— */}

      <section className="contact-fullpage">

        <div className="contact-fullpage-overlay"></div>

        <div className="contact-fullpage-content">

          <p className="contact-tag">GET IN TOUCH</p>

          <h1 className="contact-heading">
            We'd love to<br />hear from you!
          </h1>

          <p className="contact-subtitle">
            Whether you have a property in mind, want to schedule a visit,
            or just have a question, feel free to reach out. Our team is ready to help.
          </p>

          {submitted && (
            <div className="contact-success">
              ✔ Thank you! Your message has been sent successfully.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="contact-send-btn">
              SEND <span>↗</span>
            </button>

          </form>

          <div className="contact-info-strip">
            <div className="contact-info-item">
              <span className="contact-info-icon">📞</span>
              <div>
                <p className="contact-info-label">Call Us</p>
                <a href="tel:+911234567809">+91 1234567809</a>
              </div>
            </div>
            <div className="contact-info-divider"></div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📧</span>
              <div>
                <p className="contact-info-label">Email Us</p>
                <a href="mailto:support@estatehub.com">support@estatehub.com</a>
              </div>
            </div>
            <div className="contact-info-divider"></div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              <div>
                <p className="contact-info-label">Visit Us</p>
                <p>Banjara Hills, Hyderabad</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ——— FOOTER ——— */}

      <footer className="footer">

        <div className="footer-container">

          <div>
            <h3>EstateHub</h3>
            <p>
              Premium real estate platform helping
              families find their dream homes.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p><Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></p>
            <p><Link to="/property" style={{ color: "inherit", textDecoration: "none" }}>Browser</Link></p>
            <p><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link></p>
            <p><Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link></p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>📞 +91 1234567809</p>
            <p>📧 support@estatehub.com</p>
            <p>📍 Hyderabad, India</p>
          </div>

          <div>
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 EstateHub. All Rights Reserved.
        </p>

      </footer>

    </div>

  );

}
