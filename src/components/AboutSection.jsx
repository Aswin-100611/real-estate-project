import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "3,500+", label: "Properties Sold" },
  { value: "15", label: "Cities Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const coreValues = [
  { num: "01", title: "Your Trust, Our Priority" },
  { num: "02", title: "Transforming Spaces Safely" },
  { num: "03", title: "Data-Backed Decisions" },
  { num: "04", title: "Deep Market Research" },
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
          <li><Link to="/property">Browser</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
            src="/about_story_flats.png"
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

      {/* Core Values — Redesigned Layout */}

      <section className="about-values-v2">

        {/* Left Column */}
        <div className="values-left">

          <p className="values-tag">
            <span className="tag-dot"></span>
            OUR APPROACH
          </p>

          <h2 className="values-heading">
            A Stronger Future,<br />
            Built on Trust.
          </h2>

          <p className="values-desc">
            We provide reliable, market-backed guidance using the finest
            industry expertise, data analytics, and client-first principles
            to empower confident real estate decisions.
          </p>

          <div className="values-numbered-grid">
            {coreValues.map((item, i) => (
              <div className="values-numbered-item" key={i}>
                <span className="values-num">{item.num}</span>
                <div className="values-num-line"></div>
                <h3 className="values-num-title">{item.title}</h3>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column — Mission & Vision Cards */}
        <div className="values-right">

          <div className="mv-card mv-card--mission">
            <div className="mv-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To pioneer transparent, client-first real estate services that
              safely harness deep market insights, verified partnerships, and
              cutting-edge technology to build stronger communities and
              healthier investments globally.
            </p>
          </div>

          <div className="mv-card mv-card--vision">
            <div className="mv-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              A world where modern real estate practices work harmoniously
              with community values, sustainable development, and technology
              to make property ownership accessible and rewarding for everyone.
            </p>
          </div>

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
          <Link to="/contact"><button className="cta-primary">Schedule a Consultation</button></Link>
          <Link to="/property"><button className="cta-secondary">Browse Properties</button></Link>
        </div>

      </section>

      {/* Footer (same as HeroSection) */}

      <footer className="footer">

        <div>
          <p>© 2026 EstateHub. All Rights Reserved.</p>
        </div>

      </footer>

    </div>
  );
}
