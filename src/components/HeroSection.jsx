import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Hyderabad",
    price: "₹1.45 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Bangalore",
    price: "₹2.10 Cr",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  },
  {
    id: 3,
    title: "Premium Flat",
    location: "Chennai",
    price: "₹92 Lakhs",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
  {
    id: 4,
    title: "Skyline Heights",
    location: "Mumbai",
    price: "₹3.2 Cr",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
  {
    id: 5,
    title: "Lake View Residency",
    location: "Pune",
    price: "₹1.12 Cr",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    id: 6,
    title: "Elite Garden Homes",
    location: "Coimbatore",
    price: "₹86 Lakhs",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
  },
  {
    id: 7,
    title: "Royal Heights",
    location: "Hyderabad",
    price: "₹1.85 Cr",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
  },
  {
    id: 8,
    title: "Palm Residency",
    location: "Chennai",
    price: "₹98 Lakhs",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800",
  },
  {
    id: 9,
    title: "Urban Elite",
    location: "Bangalore",
    price: "₹1.68 Cr",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  },
  {
    id: 10,
    title: "Green Valley Homes",
    location: "Pune",
    price: "₹1.25 Cr",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800",
  },
];

export default function HeroSection() {

const sliderRef = useRef();

const scrollLeft = () => {
sliderRef.current.scrollBy({
left:-350,
behavior:"smooth"
});
};

const scrollRight = () => {
sliderRef.current.scrollBy({
left:350,
behavior:"smooth"
});
};

return (

<div className="page">

<nav className="navbar">

<div className="logo">
Estate<span>Hub</span>
</div>

<ul className="nav-links">
<li>Home</li>
<li><Link to="/property">Browser</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>

<button className="btn">
My Account
</button>

</nav>

<section className="hero">

<div className="overlay"></div>

<div className="content center-content">

<p className="tag">
PREMIUM REAL ESTATE
</p>

<h1>
Find Your Dream Home
</h1>

<p className="hero-description">

Discover premium apartments, villas and luxury homes
across India's finest cities.

Find your perfect property with trusted agents,
verified listings and transparent pricing.

</p>

<div className="search glass">

<div className="search-item">

<label>📍 Location</label>

<select>

<option>Hyderabad</option>
<option>Bangalore</option>
<option>Chennai</option>
<option>Mumbai</option>
<option>Pune</option>
<option>Coimbatore</option>

</select>

</div>

<div className="search-item">

<label>🏡 Property Type</label>

<select>

<option>Apartment</option>
<option>Villa</option>
<option>Flat</option>
<option>Penthouse</option>

</select>

</div>

<div className="search-item">

<label>💰 Budget</label>

<select>

<option>₹20L - ₹50L</option>
<option>₹50L - ₹1Cr</option>
<option>₹1Cr - ₹2Cr</option>
<option>Above ₹2Cr</option>

</select>

</div>

<button className="search-btn">

Search

</button>

</div>

</div>

</section>
<section className="featured">

  <div className="section-header">

    <div>

      <p className="section-tag">
        PREMIUM COLLECTION
      </p>

      <h2>
        Featured Properties
      </h2>

    </div>

  </div>

  <div className="carousel-wrapper">

    <button
      className="carousel-btn left"
      onClick={scrollLeft}
    >
      &#10094;
    </button>

    <div
      className="cards"
      ref={sliderRef}
    >

      {properties.map((item) => (

        <div
          className="card"
          key={item.id}
        >

          <div className="image-wrapper">

            <img
              src={item.image}
              alt={item.title}
            />

            <span className="verified">
              ✔ Verified
            </span>

            <span className="rating">
              ⭐ 4.8
            </span>

          </div>

          <div className="card-body">

            <h3>{item.title}</h3>

            <p className="location">

              📍 {item.location}

            </p>

            <h4>{item.price}</h4>

            <span className="details">

              2 BHK • 1200 sqft

            </span>
<Link to={`/property/${item.id}`}>
            <button>

              View Property →

            </button>
</Link>

          </div>

        </div>

      ))}

    </div>

    <button
      className="carousel-btn right"
      onClick={scrollRight}
    >
      &#10095;
    </button>

  </div>

  <div className="featured-btn">
 <Link to="/property">
    <button className="explore">

      Explore Properties

    </button>
</Link>
  </div>

</section>

<section className="why-us">

  <p className="section-tag">

    WHY ESTATEHUB

  </p>

  <h2>

    Why Choose EstateHub

  </h2>

  <div className="why-grid">

    <div className="why-card">

      <div className="why-icon">
        ✔
      </div>

      <h3>

        Verified Properties

      </h3>

      <p>

        Every property is carefully verified
        before being listed on EstateHub.

      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">
        🤝
      </div>

      <h3>

        Trusted Agents

      </h3>

      <p>

        Work with experienced professionals
        from enquiry to purchase.

      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">
        💰
      </div>

      <h3>

        Best Pricing

      </h3>

      <p>

        Transparent pricing with
        zero hidden charges.

      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">
        📄
      </div>

      <h3>

        Easy Documentation

      </h3>

      <p>

        Simple documentation and
        complete legal assistance.

      </p>

    </div>

  </div>

</section>
<section className="how">

  <p className="section-tag">
    SIMPLE PROCESS
  </p>

  <h2>
    How It Works
  </h2>

  <div className="timeline">

    <div className="step">

      <div className="step-circle">
        🔍
      </div>

      <h3>Search</h3>

      <p>
        Browse thousands of verified apartments,
        villas and premium homes.
      </p>

    </div>

    <div className="timeline-line"></div>

    <div className="step">

      <div className="step-circle">
        📅
      </div>

      <h3>Book Visit</h3>

      <p>
        Schedule a convenient site visit
        with one of our trusted agents.
      </p>

    </div>

    <div className="timeline-line"></div>

    <div className="step">

      <div className="step-circle">
        🤝
      </div>

      <h3>Meet Agent</h3>

      <p>
        Discuss pricing, amenities and
        complete documentation.
      </p>

    </div>

    <div className="timeline-line"></div>

    <div className="step">

      <div className="step-circle">
        🏡
      </div>

      <h3>Own Your Home</h3>

      <p>
        Complete the purchase and
        move into your dream home.
      </p>

    </div>

  </div>

</section>

<section className="locations">

  <p className="section-tag">
    OUR PRESENCE
  </p>

  <h2>
    Service Locations
  </h2>

  <div className="location-grid">

    <div className="location-card">
      <h3>📍 Hyderabad</h3>
      <p>120+ Properties Available</p>
    </div>

    <div className="location-card">
      <h3>📍 Bangalore</h3>
      <p>98+ Properties Available</p>
    </div>

    <div className="location-card">
      <h3>📍 Chennai</h3>
      <p>82+ Properties Available</p>
    </div>

    <div className="location-card">
      <h3>📍 Mumbai</h3>
      <p>145+ Properties Available</p>
    </div>

    <div className="location-card">
      <h3>📍 Pune</h3>
      <p>76+ Properties Available</p>
    </div>

    <div className="location-card">
      <h3>📍 Coimbatore</h3>
      <p>60+ Properties Available</p>
    </div>

  </div>

</section>

<section className="cta">

  <div className="cta-overlay">

    <p className="section-tag">
      READY TO MOVE?
    </p>

    <h2>
      Ready to Find Your Dream Home?
    </h2>

    <p>

      Let EstateHub help you discover
      the perfect property with trusted
      agents and verified listings.

    </p>

    <Link to="/contact">
    <button>

      Contact Us

    </button>
    </Link>

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

      <p>Home</p>

      <p>Browser</p>

      <p>About</p>

      <p>Contact</p>

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