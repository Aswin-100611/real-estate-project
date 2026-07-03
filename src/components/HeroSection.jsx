import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeroSection.css";

import {
  Location,
  Buildings,
  WalletMoney,
  Verify,
  Star1,
  SecuritySafe,
  People,
  MoneyRecive,
  DocumentText,
  SearchNormal,
  Calendar,
  Home,
  ArrowRight2,
  Call,
  Sms,
  Heart,
  ProfileCircle,
  Login,
  Logout,
CloseCircle
} from "iconsax-react";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Hyderabad",
    type: "Apartment",
    budget: "₹1Cr - ₹2Cr",
    price: "₹1.45 Cr",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Bangalore",
    type: "Villa",
    budget: "Above ₹2Cr",
    price: "₹2.10 Cr",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  },
  {
    id: 3,
    title: "Premium Flat",
    location: "Chennai",
    type: "Flat",
    budget: "₹50L - ₹1Cr",
    price: "₹92 Lakhs",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
  {
    id: 4,
    title: "Skyline Heights",
    location: "Mumbai",
    type: "Apartment",
    budget: "Above ₹2Cr",
    price: "₹3.2 Cr",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
  {
    id: 5,
    title: "Lake View Residency",
    location: "Pune",
    type: "Apartment",
    budget: "₹1Cr - ₹2Cr",
    price: "₹1.12 Cr",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    id: 6,
    title: "Elite Garden Homes",
    location: "Coimbatore",
    type: "Villa",
    budget: "₹50L - ₹1Cr",
    price: "₹86 Lakhs",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
  },
  {
    id: 7,
    title: "Royal Heights",
    location: "Hyderabad",
    type: "Apartment",
    budget: "₹1Cr - ₹2Cr",
    price: "₹1.85 Cr",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
  },
  {
    id: 8,
    title: "Palm Residency",
    location: "Chennai",
    type: "Flat",
    budget: "₹50L - ₹1Cr",
    price: "₹98 Lakhs",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800",
  },
  {
    id: 9,
    title: "Urban Elite",
    location: "Bangalore",
    type: "Apartment",
    budget: "₹1Cr - ₹2Cr",
    price: "₹1.68 Cr",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  },
  {
    id: 10,
    title: "Green Valley Homes",
    location: "Pune",
    type: "Villa",
    budget: "₹1Cr - ₹2Cr",
    price: "₹1.25 Cr",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800",
  },
];

export default function HeroSection() {

  const navigate = useNavigate();

  const sliderRef = useRef();

  const [location, setLocation] = useState("Bangalore");
  const [propertyType, setPropertyType] = useState("Villa");
  const [budget, setBudget] = useState("₹20L - ₹50L");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [username, setUsername] = useState(
localStorage.getItem("username") || ""
);

const [mobile, setMobile] = useState(
localStorage.getItem("mobile") || ""
);

const [isLoggedIn, setIsLoggedIn] = useState(
localStorage.getItem("isLoggedIn") === "true"
);
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const handleSearch = () => {

  const matchedProperty = properties.find((property) => {

    return (
      property.location === location &&
      property.type === propertyType &&
      property.budget === budget
    );

  });

  if (matchedProperty) {

    navigate(`/property/${matchedProperty.id}`);

  } else {

    alert("No property found matching your search.");

  }

};
const handleLogin = () => {

if(username.trim()==="" || mobile.trim()===""){

alert("Please enter Username and Mobile Number");

return;

}

localStorage.setItem("username",username);

localStorage.setItem("mobile",mobile);



localStorage.setItem("isLoggedIn","true");

setIsLoggedIn(true);

setShowLogin(false);

};

const handleLogout=()=>{

localStorage.clear();

setIsLoggedIn(false);

setUsername("");

setMobile("");



setShowProfileMenu(false);

};


  return (

<div className="page">

<nav className="navbar">

<div className="logo">
Estate<span>Hub</span>
</div>

<ul className="nav-links">

<li>
<Link to="/">Home</Link>
</li>

<li>
<Link to="/browser">Browser</Link>
</li>

<li>
<Link to="/about">About</Link>
</li>
<li>
<Link to="/agents">Agents</Link>
</li>

<li>
<Link to="/contact">Contact</Link>
</li>

</ul>
<div className="nav-actions">

    <button className="wishlist-btn">

        <Heart
            size="24"
            color="#ffffff"
            variant="Bold"
        />

    </button>

    <div className="profile-wrapper">

        <button
            className="profile-btn"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
        >

            <ProfileCircle
                size="28"
                color="#ffffff"
                variant="Bold"
            />

        </button>

        {showProfileMenu && (

            <div className="profile-dropdown">

                <div className="profile-header">

                    <ProfileCircle
                        size="40"
                        color="#b89a5e"
                        variant="Bold"
                    />

                    <div>

                       <h4>

  {isLoggedIn ? username : "Guest"}

</h4>

                        <span>

  {isLoggedIn ? mobile : "Please Login"}

</span>

                    </div>

                </div>

                <hr />

                {isLoggedIn ? (

                    <button onClick={handleLogout}>

<Logout
size="18"
color="#b89a5e"
variant="Bold"
/>

Logout

</button>

                ) : (
<button
onClick={()=>{
setShowProfileMenu(false);
setShowLogin(true);
}}
>

<Login
size="18"
color="#b89a5e"
variant="Bold"
/>

Login

</button>
                )}

            </div>

        )}

    </div>

</div></nav>

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

<label>

<Location
size="18"
color="#d4b87a"
variant="Bold"
/>

<span>Location</span>

</label>

<select
value={location}
onChange={(e)=>setLocation(e.target.value)}
>

<option>Hyderabad</option>
<option>Bangalore</option>
<option>Chennai</option>
<option>Mumbai</option>
<option>Pune</option>
<option>Coimbatore</option>

</select>

</div>

<div className="search-item">

<label>

<Buildings
size="18"
color="#d4b87a"
variant="Bold"
/>

<span>Property Type</span>

</label>

<select
value={propertyType}
onChange={(e)=>setPropertyType(e.target.value)}
>

<option>Apartment</option>
<option>Villa</option>
<option>Flat</option>
<option>Penthouse</option>

</select>

</div>

<div className="search-item">

<label>

<WalletMoney
size="18"
color="#d4b87a"
variant="Bold"
/>

<span>Budget</span>

</label>

<select
value={budget}
onChange={(e)=>setBudget(e.target.value)}
>

<option>₹20L - ₹50L</option>
<option>₹50L - ₹1Cr</option>
<option>₹1Cr - ₹2Cr</option>
<option>Above ₹2Cr</option>

</select>

</div>

<button
className="search-btn"
onClick={handleSearch}
>

<SearchNormal
size="18"
variant="Bold"
color="#000"
/>

Search

</button>

</div>

</div>

</section>
<section className="featured">

  <div className="section-header">

    <p className="section-tag">
      PREMIUM COLLECTION
    </p>

    <h2>
      Featured Properties
    </h2>

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

              <Verify
                size="16"
                variant="Bold"
                color="#16a34a"
              />

              Verified

            </span>

            <span className="rating">

              <Star1
                size="16"
                variant="Bold"
                color="#ffffff"
              />

              4.8

            </span>

          </div>

          <div className="card-body">

            <h3>{item.title}</h3>

            <div className="location">

              <Location
                size="16"
                variant="Bold"
                color="#b89a5e"
              />

              <span>{item.location}</span>

            </div>

            <h4>{item.price}</h4>

            <span className="details">

              2 BHK • 1200 sqft

            </span>

            <Link to={`/property/${item.id}`}>

              <button className="view-btn">

                <span>
                  View Property
                </span>

                <ArrowRight2
                  size="18"
                  color="#ffffff"
                  variant="Bold"
                />

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

    <Link to="/browser">

      <button className="explore">

        Explore Properties

      </button>

    </Link>

  </div>

</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="why-us">

  <div className="why-header">

    <p className="section-tag">
      WHY ESTATEHUB
    </p>

    <h2>
      Why Choose EstateHub
    </h2>

  </div>

  <div className="why-grid">

    <div className="why-card">

      <div className="why-icon">

        <SecuritySafe
          size="34"
          variant="Bold"
          color="#b89a5e"
        />

      </div>

      <h3>
        Verified Properties
      </h3>

      <p>
        Every property is carefully verified before
        being listed on EstateHub.
      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">

        <People
          size="34"
          variant="Bold"
          color="#b89a5e"
        />

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

        <MoneyRecive
          size="34"
          variant="Bold"
          color="#b89a5e"
        />

      </div>

      <h3>
        Best Pricing
      </h3>

      <p>
        Transparent pricing with zero
        hidden charges.
      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">

        <DocumentText
          size="34"
          variant="Bold"
          color="#b89a5e"
        />

      </div>

      <h3>
        Easy Documentation
      </h3>

      <p>
        Simple documentation and complete
        legal assistance.
      </p>

    </div>

  </div>

</section>
{/* ================= HOW IT WORKS ================= */}

<section className="how">

  <div className="why-header">

    <p className="section-tag">
      SIMPLE PROCESS
    </p>

    <h2>
      How It Works
    </h2>

  </div>

  <div className="timeline">

    <div className="step">

      <div className="step-circle">

        <SearchNormal
          size="36"
          color="#ffffff"
          variant="Bold"
        />

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

        <Calendar
          size="36"
          color="#ffffff"
          variant="Bold"
        />

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

        <People
          size="36"
          color="#ffffff"
          variant="Bold"
        />

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

        <Home
          size="36"
          color="#ffffff"
          variant="Bold"
        />

      </div>

      <h3>Own Your Home</h3>

      <p>
        Complete the purchase and
        move into your dream home.
      </p>

    </div>

  </div>

</section>

{/* ================= SERVICE LOCATIONS ================= */}

<section className="locations">

  <div className="why-header">

    <p className="section-tag">
      OUR PRESENCE
    </p>

    <h2>
      Service Locations
    </h2>

  </div>

  <div className="location-grid">

    <div className="location-card">

      <h3>

        <Location
          size="22"
          variant="Bold"
          color="#b89a5e"
        />

        Hyderabad

      </h3>

      <p>120+ Properties Available</p>

    </div>

    <div className="location-card">

      <h3>

        <Location
          size="22"
          variant="Bold"
          color="#b89a5e"
        />

        Bangalore

      </h3>

      <p>98+ Properties Available</p>

    </div>

    <div className="location-card">

      <h3>

        <Location
          size="22"
          variant="Bold"
          color="#b89a5e"
        />

        Chennai

      </h3>

      <p>82+ Properties Available</p>

    </div>

    <div className="location-card">

      <h3>

        <Location
          size="22"
          variant="Bold"
          color="#b89a5e"
        />

        Mumbai

      </h3>

      <p>145+ Properties Available</p>

    </div>

    <div className="location-card">

      <h3>

        <Location
          size="22"
          variant="Bold"
          color="#b89a5e"
        />

        Pune

      </h3>

      <p>76+ Properties Available</p>

    </div>

    <div className="location-card">

      <h3>

        <Location
          size="22"
          variant="Bold"
          color="#b89a5e"
        />

        Coimbatore

      </h3>

      <p>60+ Properties Available</p>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="cta">

  <div className="cta-header">

    <p className="section-tag">
      READY TO MOVE?
    </p>

    <h2>
      Ready to Find Your Dream Home?
    </h2>

  </div>

  <p>
    Let EstateHub help you discover the perfect property with
    trusted agents, verified listings and transparent pricing.
    Schedule a visit today and take the first step toward owning
    your dream home.
  </p>

  <Link to="/contact">

    <button>

      Contact Us

      <ArrowRight2
        size="18"
        color="#ffffff"
        variant="Bold"
      />

    </button>

  </Link>

</section>
{/* ================= FOOTER ================= */}

<footer className="footer">

  <div className="footer-container">

    {/* Brand */}

    <div className="footer-brand">

      <h3>
        EstateHub
      </h3>

      <p>
        Premium real estate platform helping families discover
        luxury apartments, villas and dream homes across India's
        finest cities with trusted agents and verified properties.
      </p>

    </div>

    {/* Quick Links */}

    <div className="footer-column footer-links">

      <h4>
        Quick Links
      </h4>

      <Link to="/">
        Home
      </Link>

      <Link to="/browser">
        Browser
      </Link>

      <Link to="/about">
        About
      </Link>

      <Link to="/contact">
        Contact
      </Link>

    </div>

    {/* Contact */}

    <div className="footer-column footer-contact">

      <h4>
        Contact
      </h4>

      <p>

        <Call
          size="18"
          color="#b89a5e"
          variant="Bold"
        />

        +91 1234567809

      </p>

      <p>

        <Sms
          size="18"
          color="#b89a5e"
          variant="Bold"
        />

        support@estatehub.com

      </p>

      <p>

        <Location
          size="18"
          color="#b89a5e"
          variant="Bold"
        />

        Hyderabad, India

      </p>

    </div>

    {/* Social */}

    <div className="footer-column footer-social">

      <h4>
        Follow Us
      </h4>

      <p>Facebook</p>

      <p>Instagram</p>

      <p>LinkedIn</p>

      <p>Twitter</p>

    </div>

  </div>

  <hr />

  <div className="copyright">

    © 2026 EstateHub. All Rights Reserved.

  </div>

</footer>
{/* ================= LOGIN MODAL ================= */}

{showLogin && (

<div className="modal-overlay">

  <div className="login-modal">

    <button
      className="close-btn"
      onClick={()=>setShowLogin(false)}
    >

      <CloseCircle
        size="28"
        color="#b89a5e"
        variant="Bold"
      />

    </button>

    <h2>

      Welcome to EstateHub

    </h2>

    <p>

      Login to manage your profile and enquiries.

    </p>

    <div className="input-group">

      <label>

        Username

      </label>

      <input

        type="text"

        value={username}

        onChange={(e)=>setUsername(e.target.value)}

        placeholder="Enter Username"

      />

    </div>

    <div className="input-group">

      <label>

        Mobile Number

      </label>

      <input

        type="tel"

        value={mobile}

        onChange={(e)=>setMobile(e.target.value)}

        placeholder="Enter Mobile Number"

      />

    </div>

    <button

      className="login-btn"

      onClick={handleLogin}

    >

      Login

    </button>

  </div>

</div>

)}

</div>

);

}