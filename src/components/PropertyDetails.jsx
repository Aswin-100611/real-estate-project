import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './PropertyDetails.css';

// Same properties array from HeroSection
const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Hyderabad",
    price: "₹1.45 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Bangalore",
    price: "₹2.10 Cr",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  },
  {
    id: 3,
    title: "Premium Flat",
    location: "Chennai",
    price: "₹92 Lakhs",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
  {
    id: 4,
    title: "Skyline Heights",
    location: "Mumbai",
    price: "₹3.2 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
  {
    id: 5,
    title: "Lake View Residency",
    location: "Pune",
    price: "₹1.12 Cr",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    id: 6,
    title: "Elite Garden Homes",
    location: "Coimbatore",
    price: "₹86 Lakhs",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
  },
  {
    id: 7,
    title: "Royal Heights",
    location: "Hyderabad",
    price: "₹1.85 Cr",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
  },
  {
    id: 8,
    title: "Palm Residency",
    location: "Chennai",
    price: "₹98 Lakhs",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800",
  },
  {
    id: 9,
    title: "Urban Elite",
    location: "Bangalore",
    price: "₹1.68 Cr",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  },
  {
    id: 10,
    title: "Green Valley Homes",
    location: "Pune",
    price: "₹1.25 Cr",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800",
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Find property by ID
  const property = properties.find(p => p.id === parseInt(id));

  // If property not found
  if (!property) {
    return (
      <div className="not-found">
        <h2>Property Not Found</h2>
        <p>The property you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    );
  }

  // Use same image for gallery (in real app would have multiple images)
  const images = [property.image, property.image, property.image];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We\'ll contact you soon.');
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Extended property details (would come from API in real app)
  const propertyDetails = {
    beds: 3,
    baths: 2,
    area: "1800 sqft",
    description: `Experience luxury living in this stunning ${property.title} located in the heart of ${property.location}. This premium property offers unparalleled comfort with modern amenities and breathtaking views.`,
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Central AC", "Balcony", "Smart Home Features"],
    features: {
      "Property Type": "Apartment",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1800 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-3 Years",
      "Floor": "4th Floor",
      "Total Floors": "12",
      "Possession": "Immediate"
    }
  };

  return (
    <div className="property-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/">Properties</Link>
          <span>›</span>
          <span className="current">{property.title}</span>
        </nav>

        {/* Property Header */}
        <div className="property-header-section">
          <div className="header-left">
            <h1>{property.title}</h1>
            <div className="location-rating">
              <span className="location">📍 {property.location}</span>
              <span className="rating">⭐ 4.8 (120 reviews)</span>
            </div>
            <div className="price-section">
              <span className="price">{property.price}</span>
              <span className="price-detail">EMI starts at ₹45,000/month</span>
            </div>
          </div>
          <div className="header-right">
            <button className="btn-favorite">♡ Save</button>
            <button className="btn-share">↗ Share</button>
          </div>
        </div>

        {/* Gallery */}
        <div className="gallery-section">
          <div className="gallery-main">
            <img src={images[activeImage]} alt={property.title} />
            <div className="gallery-badge">
              <span>Featured Property</span>
            </div>
            <div className="gallery-nav">
              <button className="nav-btn prev">‹</button>
              <button className="nav-btn next">›</button>
            </div>
            <div className="image-counter">
              {activeImage + 1} / {images.length}
            </div>
          </div>
          <div className="gallery-thumbs">
            {images.map((img, index) => (
              <div
                key={index}
                className={`thumb ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`View ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="details-grid">
          {/* Left Column */}
          <div className="details-main">
            {/* Quick Specs */}
            <div className="quick-specs">
              <div className="spec-card">
                <span className="spec-icon">🛏</span>
                <div>
                  <span className="spec-label">Bedrooms</span>
                  <span className="spec-value">{propertyDetails.beds} BHK</span>
                </div>
              </div>
              <div className="spec-card">
                <span className="spec-icon">🚿</span>
                <div>
                  <span className="spec-label">Bathrooms</span>
                  <span className="spec-value">{propertyDetails.baths}</span>
                </div>
              </div>
              <div className="spec-card">
                <span className="spec-icon">📐</span>
                <div>
                  <span className="spec-label">Area</span>
                  <span className="spec-value">{propertyDetails.area}</span>
                </div>
              </div>
              <div className="spec-card">
                <span className="spec-icon">🏗</span>
                <div>
                  <span className="spec-label">Type</span>
                  <span className="spec-value">{propertyDetails.features["Property Type"]}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="section">
              <h2>About This Property</h2>
              <p>{propertyDetails.description}</p>
              <p className="description-detail">
                This premium property offers unparalleled comfort and luxury. 
                Located in a prime area with excellent connectivity to schools, 
                hospitals, and shopping centers. The property features modern 
                architecture with high-quality finishes and state-of-the-art amenities.
              </p>
            </div>

            {/* Key Features */}
            <div className="section">
              <h2>Key Features</h2>
              <div className="feature-grid">
                {Object.entries(propertyDetails.features).map(([key, value]) => (
                  <div key={key} className="feature-item">
                    <span className="feature-label">{key}</span>
                    <span className="feature-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="section">
              <h2>Amenities & Facilities</h2>
              <div className="amenity-grid">
                {propertyDetails.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Nearby */}
            <div className="section">
              <h2>Location & Nearby</h2>
              <div className="nearby-grid">
                <div className="nearby-item">
                  <div>
                    <span className="nearby-label">Schools</span>
                    <span className="nearby-value">5+ Schools within 2 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <div>
                    <span className="nearby-label">Hospitals</span>
                    <span className="nearby-value">3 Hospitals within 3 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <div>
                    <span className="nearby-label">Shopping</span>
                    <span className="nearby-value">2 Malls within 1 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <div>
                    <span className="nearby-label">Transport</span>
                    <span className="nearby-value">Metro & Bus Stop nearby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="details-sidebar">
            {/* Inquiry Box */}
            <div className="inquiry-box">
              <div className="inquiry-header">
                <h3>Interested in this property?</h3>
                <p>Get in touch with our experts</p>
              </div>

              <div className="inquiry-stats">
                <div className="stat">
                  <span>Views</span>
                  <span>245</span>
                </div>
                <div className="stat">
                  <span>Saved</span>
                  <span>78</span>
                </div>
                <div className="stat">
                  <span>Inquiries</span>
                  <span>12</span>
                </div>
              </div>

              <button
                className="btn-inquiry"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? 'Close Form' : 'Send Inquiry'}
              </button>

              {showForm && (
                <form className="inquiry-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <select name="preference">
                    <option>I want to schedule a visit</option>
                    <option>I need more information</option>
                    <option>I want to discuss pricing</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                  />
                  <button type="submit" className="btn-submit">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Agent */}
            <div className="agent-box">
              <h4>Contact Agent</h4>
              <div className="agent-info">
                <div className="agent-avatar">RK</div>
                <div>
                  <span className="agent-name">Rajesh Kumar</span>
                  <span className="agent-title">Senior Sales Executive</span>
                  <span className="agent-phone">+91 98765 43210</span>
                </div>
              </div>
              <button className="btn-call">Call Now</button>
            </div>

            {/* Similar Properties */}
            <div className="similar-box">
              <h4>Similar Properties</h4>
              <div className="similar-list">
                {properties
                  .filter(p => p.id !== property.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link to={`/property/${p.id}`} key={p.id} className="similar-item">
                      <img src={p.image} alt={p.title} />
                      <div>
                        <span className="similar-title">{p.title}</span>
                        <span className="similar-price">{p.price}</span>
                        <span className="similar-location">{p.location}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;