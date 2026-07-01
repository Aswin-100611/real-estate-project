import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "3,500+", label: "Properties Sold" },
  { value: "15", label: "Cities Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: "🏛️",
    title: "Trust & Transparency",
    desc: "Every transaction is backed by verified documentation and complete legal compliance. We believe trust is built on openness.",
  },
  {
    icon: "🎯",
    title: "Client-Centric Approach",
    desc: "Your dream home is our mission. Our dedicated advisors work around your schedule, preferences, and budget.",
  },
  {
    icon: "📈",
    title: "Market Expertise",
    desc: "With deep analytics and neighbourhood-level insights, we help you make investment decisions with confidence.",
  },
  {
    icon: "🏗️",
    title: "Premium Partnerships",
    desc: "We partner exclusively with RERA-registered developers and verified builders to guarantee quality construction.",
  },
  {
    icon: "🤝",
    title: "End-to-End Support",
    desc: "From property search to home-loan assistance and registration, we're with you at every step of the journey.",
  },
  {
    icon: "🌿",
    title: "Sustainable Living",
    desc: "We champion eco-friendly developments with green certifications, rainwater harvesting, and energy-efficient designs.",
  },
];

const team = [
  {
    name: "Aswin Ram",
    role: "Founder & CEO",
    bio: "15+ years in luxury real estate across India",
  },
  {
    name: "Gopi Maries",
    role: "Head of Sales",
    bio: "Specialist in premium residential properties",
  },
  {
    name: "Piramu Chendu",
    role: "Chief Architect",
    bio: "Award-winning architect with 200+ projects",
  },
];

export default function AboutSection() {
  return (
    <div className="page">

      {/* Navbar (same as HeroSection) */}

      <nav className="navbar">

        <div className="logo">
          Estate<span>Hub</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>Browser</li>
          <li><Link to="/about">About</Link></li>
          <li>Contact</li>
        </ul>

        <button className="btn">
          My Account
        </button>

      </nav>

      {/* About Hero Banner */}

      <section className="about-hero">

        <div className="overlay"></div>

        <div className="about-hero-content">

          <p className="tag">
            ABOUT ESTATEHUB
          </p>

          <h1>
            Building Dreams, Delivering Trust
          </h1>

          <p>
            For over a decade, EstateHub has been India's most trusted partner
            in premium real estate — connecting families with homes that inspire.
          </p>

        </div>

      </section>

      {/* Our Story */}

      <section className="about-story">

        <div className="about-story-img">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
            alt="EstateHub office"
          />
        </div>

        <div className="about-story-text">

          <p className="tag">OUR STORY</p>

          <h2>
            From a Vision to India's Trusted Real Estate Partner
          </h2>

          <p>
            Founded in 2014 in Hyderabad, EstateHub began with a simple belief:
            everyone deserves a home that matches their aspirations. What started
            as a boutique consultancy has grown into a full-service real estate
            platform serving 15+ cities across India.
          </p>

          <p>
            Our team of 200+ professionals combines deep local expertise with
            cutting-edge technology to deliver an unmatched property experience.
            From curated listings to AI-powered recommendations, we ensure
            every client finds exactly what they're looking for.
          </p>

          <p>
            Today, with over 3,500 successful transactions and a 98% client
            satisfaction rate, EstateHub continues to redefine how India buys,
            sells, and invests in real estate.
          </p>

        </div>

      </section>

      {/* Stats */}

      <section className="about-stats">

        {stats.map((item, i) => (
          <div className="stat-item" key={i}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}

      </section>

      {/* Core Values */}

      <section className="about-values">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          {values.map((item, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* Team */}

      <section className="about-team">

        <h2>Meet Our Leadership</h2>

        <div className="team-grid">

          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <span>{member.bio}</span>
            </div>
          ))}

        </div>

      </section>



      {/* CTA */}

      <section className="about-cta">

        <h2>Let's Find Your Perfect Home</h2>

        <p>
          Whether you're buying your first home or expanding your portfolio,
          our experts are ready to guide you.
        </p>

        <div className="about-cta-buttons">
          <button className="cta-primary">Schedule a Consultation</button>
          <button className="cta-secondary">Browse Properties</button>
        </div>

      </section>

      {/* Footer (same as HeroSection) */}

      <footer className="footer">

        <div>
          © 2026 EstateHub. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}
