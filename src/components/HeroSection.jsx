import React, { useState } from "react";
import "./HeroSection.css";

const navLinks = [
  { label: "Buy" },
  { label: "Rent" },
  { label: "Sell" },
  { label: "Loans" },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <nav className="navbar">
        {/* Logo */}
        <a href="/" className="logo">
          Estate<span>Hub</span>
        </a>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label} className="nav-item">
              {link.label}
              <svg className="caret" viewBox="0 0 16 16" fill="none">
                <polyline points="4 6 8 10 12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button className="btn-ghost">Login</button>
          <button className="btn-ghost icon-btn" aria-label="Shortlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Shortlist
          </button>
          <button className="btn-primary">
            Post Property
            <span className="free-tag">FREE</span>
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </div>
  );
}
