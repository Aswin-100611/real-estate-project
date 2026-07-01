import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Hyderabad",
    price: "₹1.45 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Bangalore",
    price: "₹2.10 Cr",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
  },
  {
    id: 3,
    title: "Premium Flat",
    location: "Chennai",
    price: "₹92 Lakhs",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800"
  },
  {
    id: 4,
    title: "Skyline Heights",
    location: "Mumbai",
    price: "₹3.2 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
  }]
const navLinks = [
  { label: "Buy" },
  { label: "Rent" },
  { label: "Sell" },
  { label: "Loans" },
];

export default function HeroSection() {
  return (
    <div className="page">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          Estate<span>Hub</span>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Browser</li>
          <li><Link to="/about">About</Link></li>
          <li>Contact</li>
        </ul>

        <button className="btn">
          My Account
        </button>

      </nav>

      {/* Hero */}

      <section className="hero">

        <div className="overlay"></div>

        <div className="content">

          <p className="tag">
            PREMIUM REAL ESTATE
          </p>

          <h1>
            Find Your Dream Home
          </h1>

          <p>
            Discover premium apartments in prime locations with trusted
            real estate experts.
          </p>

          <div className="search">

            <select>
              <option>Select Location</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Pune</option>
            </select>

            <select>
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Flat</option>
              <option>Villa</option>
              <option>Penthouse</option>
            </select>

            <select>
              <option>Select Budget</option>
              <option>₹20L - ₹50L</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹2Cr</option>
              <option>Above ₹2Cr</option>
            </select>

            <button>
              Search
            </button>

          </div>

          <button className="explore">
            Explore Properties
          </button>

        </div>

      </section>

      {/* Featured */}

      <section className="featured">

        <h2>Featured Properties</h2>

        <div className="scroll-buttons">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>

        <div className="cards">

          {properties.map((item) => (

            <div className="card" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="card-body">

                <h3>{item.title}</h3>

                <p>📍 {item.location}</p>

                <h4>{item.price}</h4>

                <span>2 BHK • 1200 sqft</span>

                <button>
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Ready to Find Your Dream Home?
        </h2>

        <p>
          Contact our experts today and schedule a property visit.
        </p>

        <button>
          Contact Us
        </button>

      </section>

      {/* Footer */}

      <footer className="footer">

        <div>
          © 2026 EstateHub. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}