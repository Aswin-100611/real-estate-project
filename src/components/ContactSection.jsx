import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

const EMAILJS_SERVICE_ID = "service_n3oizzh";   
const EMAILJS_TEMPLATE_ID = "template_6t46y8y"; 
const EMAILJS_PUBLIC_KEY = "c2enONqTGBu9otFww";

export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const fieldMap = { from_name: "name", from_email: "email", message: "message" };
    const stateKey = fieldMap[e.target.name] || e.target.name;
    setFormData((prev) => ({ ...prev, [stateKey]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setSending(false);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setSending(false);
        setError("Failed to send message. Please try again.");
        console.error("EmailJS Error:", err);
        setTimeout(() => setError(""), 5000);
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
          <li><Link to="/agents">Agents</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

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
            <div className="contact-success" style={{ display: "flex", alignItems: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "10px", flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {error && (
            <div className="contact-error" style={{ display: "flex", alignItems: "center", background: "rgba(220,38,38,0.12)", color: "#ff6b6b", padding: "14px 20px", borderRadius: "10px", marginBottom: "18px", fontSize: "0.98rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "10px", flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
              <span>{error}</span>
            </div>
          )}

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="hidden" name="to_email" value="estatehub321@gmail.com" />
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="from_email"
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

            <button type="submit" className="contact-send-btn" disabled={sending}>
              {sending ? "SENDING..." : "SEND"} <span>{sending ? "⏳" : "↗"}</span>
            </button>
          </form>

          <div className="contact-info-strip">
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div>
                <p className="contact-info-label">Call Us</p>
                <a href="tel:+911234567809">+91 1234567809</a>
              </div>
            </div>
            <div className="contact-info-divider"></div>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </span>
              <div>
                <p className="contact-info-label">Email Us</p>
                <a href="mailto:estatehub321@gmail.com">estatehub321@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-divider"></div>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <div>
                <p className="contact-info-label">Visit Us</p>
                <p>Banjara Hills, Hyderabad</p>
              </div>
            </div>
          </div>
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
            <p className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <span>+91 1234567809</span>
            </p>
            <p className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <span>estatehub321@gmail.com</span>
            </p>
            <p className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>Hyderabad, India</span>
            </p>
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
