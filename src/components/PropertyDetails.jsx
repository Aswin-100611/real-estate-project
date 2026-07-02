import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './PropertyDetails.css';

// Complete properties array with unique details for each property
const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Hyderabad",
    price: "₹1.45 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    beds: 3,
    baths: 2,
    area: "1800 sqft",
    description: "Experience luxury living in this stunning 3-bedroom apartment in the heart of Hyderabad. Features premium finishes, smart home technology, and breathtaking city views.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Central AC", "Balcony", "Smart Home Features", "Club House", "Children's Play Area"],
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
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Bangalore",
    price: "₹2.10 Cr",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    beds: 4,
    baths: 3,
    area: "2800 sqft",
    description: "Spacious 4-bedroom modern villa with a private garden and premium finishes. Located in Bangalore's most sought-after neighborhood with excellent connectivity.",
    amenities: ["Private Garden", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Terrace", "Study Room", "Home Theater", "Wine Cellar"],
    features: {
      "Property Type": "Villa",
      "BHK": "4 BHK",
      "Bathrooms": "3",
      "Area": "2800 sqft",
      "Furnishing": "Semi-Furnished",
      "Parking": "3 Covered",
      "Age of Property": "0-1 Year",
      "Floor": "Ground + 2 Floors",
      "Total Floors": "3",
      "Possession": "Ready to Move"
    }
  },
  {
    id: 3,
    title: "Premium Flat",
    location: "Chennai",
    price: "₹92 Lakhs",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    beds: 2,
    baths: 2,
    area: "1350 sqft",
    description: "Beautiful 2-bedroom premium flat with sea views and modern amenities. Perfect for families looking for comfort and convenience in Chennai.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Sea View", "Balcony", "Club House", "Indoor Games"],
    features: {
      "Property Type": "Flat",
      "BHK": "2 BHK",
      "Bathrooms": "2",
      "Area": "1350 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "1 Covered",
      "Age of Property": "2-4 Years",
      "Floor": "8th Floor",
      "Total Floors": "15",
      "Possession": "Immediate"
    }
  },
  {
    id: 4,
    title: "Skyline Heights",
    location: "Mumbai",
    price: "₹3.2 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    beds: 4,
    baths: 3,
    area: "3200 sqft",
    description: "Luxury 4-bedroom penthouse with 360-degree city views, private terrace, and premium amenities. A masterpiece of modern architecture in Mumbai.",
    amenities: ["Private Terrace", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Sky Lounge", "Balcony", "Home Automation", "Jacuzzi", "Private Elevator"],
    features: {
      "Property Type": "Penthouse",
      "BHK": "4 BHK",
      "Bathrooms": "3",
      "Area": "3200 sqft",
      "Furnishing": "Luxury Furnished",
      "Parking": "3 Covered",
      "Age of Property": "0-1 Year",
      "Floor": "Top Floor",
      "Total Floors": "25",
      "Possession": "Immediate"
    }
  },
  {
    id: 5,
    title: "Lake View Residency",
    location: "Pune",
    price: "₹1.12 Cr",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    beds: 3,
    baths: 2,
    area: "1550 sqft",
    description: "Beautiful 3-bedroom apartment with stunning lake views and peaceful surroundings. Perfect for those seeking tranquility with modern conveniences.",
    amenities: ["Lake View", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Garden", "Jogging Track"],
    features: {
      "Property Type": "Apartment",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1550 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "2 Covered",
      "Age of Property": "2-3 Years",
      "Floor": "6th Floor",
      "Total Floors": "10",
      "Possession": "Immediate"
    }
  },
  {
    id: 6,
    title: "Elite Garden Homes",
    location: "Coimbatore",
    price: "₹86 Lakhs",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
    beds: 3,
    baths: 2,
    area: "1650 sqft",
    description: "Elegant 3-bedroom homes surrounded by lush greenery and gardens. A perfect blend of nature and modern living in Coimbatore.",
    amenities: ["Private Garden", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Club House", "Tennis Court", "Children's Play Area"],
    features: {
      "Property Type": "Villa",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1650 sqft",
      "Furnishing": "Semi-Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-2 Years",
      "Floor": "Ground Floor",
      "Total Floors": "2",
      "Possession": "Ready to Move"
    }
  },
  {
    id: 7,
    title: "Royal Heights",
    location: "Hyderabad",
    price: "₹1.85 Cr",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
    beds: 4,
    baths: 3,
    area: "2200 sqft",
    description: "Royal 4-bedroom apartment with premium finishes and panoramic city views. Located in Hyderabad's most prestigious residential area.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Club House", "Concierge Service", "Party Hall", "Kids Play Area"],
    features: {
      "Property Type": "Apartment",
      "BHK": "4 BHK",
      "Bathrooms": "3",
      "Area": "2200 sqft",
      "Furnishing": "Luxury Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-2 Years",
      "Floor": "12th Floor",
      "Total Floors": "18",
      "Possession": "Immediate"
    }
  },
  {
    id: 8,
    title: "Palm Residency",
    location: "Chennai",
    price: "₹98 Lakhs",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800",
    beds: 2,
    baths: 2,
    area: "1250 sqft",
    description: "Comfortable 2-bedroom apartment with modern amenities and excellent connectivity. Perfect for young professionals and small families.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Club House", "Indoor Games"],
    features: {
      "Property Type": "Flat",
      "BHK": "2 BHK",
      "Bathrooms": "2",
      "Area": "1250 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "1 Covered",
      "Age of Property": "2-3 Years",
      "Floor": "5th Floor",
      "Total Floors": "10",
      "Possession": "Immediate"
    }
  },
  {
    id: 9,
    title: "Urban Elite",
    location: "Bangalore",
    price: "₹1.68 Cr",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    beds: 3,
    baths: 2,
    area: "1900 sqft",
    description: "Modern 3-bedroom apartment in the heart of Bangalore's IT hub. Features contemporary design, premium amenities, and excellent connectivity.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Club House", "Conference Room", "Cafeteria", "Wi-Fi Zone"],
    features: {
      "Property Type": "Apartment",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1900 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "2 Covered",
      "Age of Property": "0-1 Year",
      "Floor": "7th Floor",
      "Total Floors": "14",
      "Possession": "Immediate"
    }
  },
  {
    id: 10,
    title: "Green Valley Homes",
    location: "Pune",
    price: "₹1.25 Cr",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800",
    beds: 3,
    baths: 2,
    area: "1700 sqft",
    description: "Beautiful 3-bedroom homes surrounded by green valleys and scenic views. Perfect for nature lovers seeking peace and tranquility.",
    amenities: ["Valley View", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Terrace Garden", "Yoga Center", "Meditation Hall", "Organic Garden"],
    features: {
      "Property Type": "Villa",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1700 sqft",
      "Furnishing": "Semi-Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-2 Years",
      "Floor": "Ground + 1",
      "Total Floors": "2",
      "Possession": "Ready to Move"
    }
  }
];

// Gallery images for each property (different images for variety)
const propertyGalleries = {
  1: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
  ],
  2: [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800"
  ],
  3: [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800"
  ],
  4: [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
  ],
  5: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800"
  ],
  6: [
    "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800"
  ],
  7: [
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800"
  ],
  8: [
    "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800"
  ],
  9: [
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800"
  ],
  10: [
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800"
  ]
};

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

  // Get gallery images for this property
  const galleryImages = propertyGalleries[property.id] || [property.image, property.image, property.image, property.image];

  // Gallery navigation
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We\'ll contact you soon.');
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Use property's own details
  const propertyDetails = {
    beds: property.beds,
    baths: property.baths,
    area: property.area,
    description: property.description,
    amenities: property.amenities,
    features: property.features
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
              <span className="location">
                <svg className="icon-location" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {property.location}
              </span>
              <span className="rating">
                <svg className="icon-star" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                4.8 (120 reviews)
              </span>
            </div>
            <div className="price-section">
              <span className="price">{property.price}</span>
              <span className="price-detail">EMI starts at ₹45,000/month</span>
            </div>
          </div>
          <div className="header-right">
            <button className="btn-favorite">
              <svg className="icon-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Save
            </button>
            <button className="btn-share">
              <svg className="icon-share" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="gallery-section">
          <div className="gallery-main">
            <img src={galleryImages[activeImage]} alt={property.title} />
            <div className="gallery-badge">
              <span>Featured Property</span>
            </div>
            <button className="gallery-nav-btn prev" onClick={prevImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button className="gallery-nav-btn next" onClick={nextImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
            <div className="image-counter">
              {activeImage + 1} / {galleryImages.length}
            </div>
          </div>
          <div className="gallery-thumbs">
            {galleryImages.map((img, index) => (
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
                <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="3" x2="12" y2="21"/>
                </svg>
                <div>
                  <span className="spec-label">Bedrooms</span>
                  <span className="spec-value">{propertyDetails.beds} BHK</span>
                </div>
              </div>
              <div className="spec-card">
                <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2v20M2 12h20"/>
                </svg>
                <div>
                  <span className="spec-label">Bathrooms</span>
                  <span className="spec-value">{propertyDetails.baths}</span>
                </div>
              </div>
              <div className="spec-card">
                <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="3" y1="15" x2="21" y2="15"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
                <div>
                  <span className="spec-label">Area</span>
                  <span className="spec-value">{propertyDetails.area}</span>
                </div>
              </div>
              <div className="spec-card">
                <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
                  <line x1="2" y1="7" x2="22" y2="7"/>
                </svg>
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
                    <svg className="amenity-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
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
                  <svg className="nearby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4 12H2M22 12h-2M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M16.24 7.76l2.83-2.83M4.93 19.07l2.83-2.83"/>
                  </svg>
                  <div>
                    <span className="nearby-label">Schools</span>
                    <span className="nearby-value">5+ Schools within 2 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <svg className="nearby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <div>
                    <span className="nearby-label">Hospitals</span>
                    <span className="nearby-value">3 Hospitals within 3 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <svg className="nearby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <div>
                    <span className="nearby-label">Shopping</span>
                    <span className="nearby-value">2 Malls within 1 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <svg className="nearby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
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
                  <span>
                    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Views
                  </span>
                  <span>245</span>
                </div>
                <div className="stat">
                  <span>
                    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    Saved
                  </span>
                  <span>78</span>
                </div>
                <div className="stat">
                  <span>
                    <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Inquiries
                  </span>
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
              <button className="btn-call">
                <svg className="icon-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </button>
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