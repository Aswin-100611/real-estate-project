import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

export default function ContactSection() {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  propertyType: "",
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
  setFormData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    propertyType: "",
    message: ""
  });
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

<section className="contact-hero">

  <div className="overlay"></div>

  <div className="contact-hero-content">

    <p className="tag">
      GET IN TOUCH
    </p>

    <h1>
      Contact Us
    </h1>

    <p>
      Have questions about a property or need expert guidance?
      Our team is here to help you every step of the way.
    </p>

  </div>

</section>

<section className="contact-main">

  <div className="contact-grid">

    <div className="contact-info">

      <div className="contact-info-header">

        <p className="section-tag">
          REACH OUT
        </p>

        <h2>
          We'd Love to Hear From You
        </h2>

        <p>
          Whether you're looking to buy, sell, or just explore
          your options — our dedicated team is ready to assist.
        </p>

      </div>

      <div className="info-card">
        <div className="info-icon">📍</div>
        <div>
          <h3>Our Office</h3>
          <p>
            EstateHub Headquarters<br />
            Banjara Hills, Road No. 12<br />
            Hyderabad, Telangana 500034
          </p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">📞</div>
        <div>
          <h3>Call Us</h3>
          <p>
            <a href="tel:+911234567809">+91 1234567809</a><br />
            <a href="tel:+919876543210">+91 9876543210</a>
          </p>
          <p style={{ fontSize: ".85rem", color: "#999", marginTop: "6px" }}>
            Mon — Sat, 9:00 AM to 7:00 PM
          </p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">📧</div>
        <div>
          <h3>Email Us</h3>
          <p>
            <a href="mailto:support@estatehub.com">support@estatehub.com</a><br />
            <a href="mailto:sales@estatehub.com">sales@estatehub.com</a>
          </p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon">💬</div>
        <div>
          <h3>Follow Us</h3>
          <p>
            Facebook • Instagram • LinkedIn • Twitter
          </p>
        </div>
      </div>

    </div>

    <div className="contact-form-wrapper">

      <h3>Send Us a Message</h3>

      {submitted && (
        <div style={{
          background: "rgba(184,154,94,.12)",
          border: "1px solid var(--gold)",
          borderRadius: "12px",
          padding: "14px 20px",
          marginBottom: "24px",
          color: "var(--charcoal)",
          fontWeight: "500"
        }}>
          ✔ Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Interested In</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="">Select Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="flat">Flat</option>
              <option value="penthouse">Penthouse</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group full">
          <label>Subject *</label>
          <input
            type="text"
            name="subject"
            placeholder="How can we help you?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full">
          <label>Message *</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message →
        </button>

      </form>

    </div>

  </div>

</section>

<section className="contact-map">

  <div className="map-container">
    <iframe
      title="EstateHub Office Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.835!2d78.4411!3d17.4259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzMzLjIiTiA3OMKwMjYnMjguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
      allowFullScreen=""
      loading="lazy"
    />
  </div>

</section>

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
