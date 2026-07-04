import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PropertyListing.css';

// Complete properties array with 20 properties
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
    rating: 4.8,
    reviews: 124
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
    rating: 4.9,
    reviews: 89
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
    rating: 4.6,
    reviews: 67
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
    rating: 4.9,
    reviews: 156
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
    rating: 4.7,
    reviews: 93
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
    rating: 4.5,
    reviews: 78
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
    rating: 4.8,
    reviews: 112
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
    rating: 4.4,
    reviews: 56
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
    rating: 4.7,
    reviews: 145
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
    rating: 4.6,
    reviews: 84
  },
  // ========== NEW PROPERTIES (11-20) ==========
  {
    id: 11,
    title: "Sunset Paradise",
    location: "Bangalore",
    price: "₹2.50 Cr",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
    beds: 4,
    baths: 3,
    area: "3000 sqft",
    rating: 4.9,
    reviews: 203
  },
  {
    id: 12,
    title: "Golden Oak Estate",
    location: "Hyderabad",
    price: "₹4.20 Cr",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
    beds: 5,
    baths: 4,
    area: "4200 sqft",
    rating: 4.8,
    reviews: 178
  },
  {
    id: 13,
    title: "Crystal Springs",
    location: "Pune",
    price: "₹1.80 Cr",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    beds: 3,
    baths: 2,
    area: "2000 sqft",
    rating: 4.6,
    reviews: 95
  },
  {
    id: 14,
    title: "Emerald Bay Villas",
    location: "Mumbai",
    price: "₹2.30 Cr",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    beds: 4,
    baths: 3,
    area: "2900 sqft",
    rating: 4.7,
    reviews: 134
  },
  {
    id: 15,
    title: "Silver Oak Residency",
    location: "Coimbatore",
    price: "₹1.10 Cr",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    beds: 3,
    baths: 2,
    area: "1600 sqft",
    rating: 4.5,
    reviews: 72
  },
  {
    id: 16,
    title: "Tranquil Meadows",
    location: "Chennai",
    price: "₹95 Lakhs",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    beds: 3,
    baths: 2,
    area: "1750 sqft",
    rating: 4.4,
    reviews: 61
  },
  {
    id: 17,
    title: "Regal Towers",
    location: "Mumbai",
    price: "₹5.50 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    beds: 5,
    baths: 4,
    area: "4800 sqft",
    rating: 4.9,
    reviews: 245
  },
  {
    id: 18,
    title: "Blossom Gardens",
    location: "Bangalore",
    price: "₹1.55 Cr",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    beds: 3,
    baths: 2,
    area: "1850 sqft",
    rating: 4.6,
    reviews: 108
  },
  {
    id: 19,
    title: "Serene Shores",
    location: "Coimbatore",
    price: "₹1.35 Cr",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    beds: 3,
    baths: 2,
    area: "1900 sqft",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 20,
    title: "Heritage Homes",
    location: "Pune",
    price: "₹2.80 Cr",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
    beds: 4,
    baths: 3,
    area: "3500 sqft",
    rating: 4.8,
    reviews: 156
  }
];

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Get unique locations for filter
  const locations = ['All', ...new Set(properties.map(p => p.location))];

  // Filter properties based on search and filters
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All' || property.location === selectedLocation;
    
    let matchesPrice = true;
    if (priceRange !== 'All') {
      const price = parseFloat(property.price.replace(/[₹,Cr,Lakhs]/g, '').trim());
      if (priceRange === 'Below 1Cr') {
        matchesPrice = price < 1;
      } else if (priceRange === '1Cr - 2Cr') {
        matchesPrice = price >= 1 && price <= 2;
      } else if (priceRange === '2Cr - 3Cr') {
        matchesPrice = price >= 2 && price <= 3;
      } else if (priceRange === 'Above 3Cr') {
        matchesPrice = price > 3;
      }
    }
    
    let matchesType = true;
    if (propertyType !== 'All') {
      const type = propertyType.toLowerCase();
      matchesType = property.title.toLowerCase().includes(type) ||
                    (type === 'villa' && property.title.toLowerCase().includes('villa')) ||
                    (type === 'apartment' && property.title.toLowerCase().includes('apartment')) ||
                    (type === 'flat' && property.title.toLowerCase().includes('flat')) ||
                    (type === 'penthouse' && property.title.toLowerCase().includes('penthouse'));
    }
    
    return matchesSearch && matchesLocation && matchesPrice && matchesType;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('All');
    setPriceRange('All');
    setPropertyType('All');
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = [];
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="star-icon half" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" clipPath="url(#half-star-clip)"/>
          <defs>
            <clipPath id="half-star-clip">
              <rect x="0" y="0" width="12" height="24"/>
            </clipPath>
          </defs>
        </svg>
      );
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="star-icon empty" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="listing-page">
      <div className="listing-hero">

    <Link to="/" className="back-home-btn">
        ← Back to Home
    </Link>

    <div className="listing-overlay">

    <span className="hero-tag">
        PREMIUM COLLECTION
    </span>

    <div className="hero-line"></div>

    <h1>
        Explore Premium <br />
        Properties
    </h1>

    <p>
        Discover luxury apartments, elegant villas and exclusive
        residences across India's most desirable cities.
        
    </p>

</div>

</div>
      <div className="container listing-content">
        {/* Page Header */}
        <div className="listing-header">
          <h1>Explore Properties</h1>
          <p>Find your dream home from our curated collection</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="filter-section">
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search by property name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-grid">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="filter-select"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Flat">Flat</option>
              <option value="Penthouse">Penthouse</option>
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Prices</option>
              <option value="Below 1Cr">Below ₹1 Cr</option>
              <option value="1Cr - 2Cr">₹1 Cr - ₹2 Cr</option>
              <option value="2Cr - 3Cr">₹2 Cr - ₹3 Cr</option>
              <option value="Above 3Cr">Above ₹3 Cr</option>
            </select>

            <button className="clear-filters" onClick={clearFilters}>
              Clear All
            </button>
          </div>

          {/* Listing Controls */}
          <div className="listing-controls">
            <span className="results-count">
              {filteredProperties.length} properties found
            </span>
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                </svg>
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6"/>
                  <line x1="8" y1="12" x2="21" y2="12"/>
                  <line x1="8" y1="18" x2="21" y2="18"/>
                  <line x1="3" y1="6" x2="3.01" y2="6"/>
                  <line x1="3" y1="12" x2="3.01" y2="12"/>
                  <line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Property Cards */}
        {filteredProperties.length === 0 ? (
          <div className="no-results">
            <h3>No properties found</h3>
            <p>Try adjusting your filters or search terms</p>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        ) : (
          <div className={`properties-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
            {filteredProperties.map((property) => (
              <div className="property-card" key={property.id}>
                <div className="card-image">
                  <img src={property.image} alt={property.title} />
                  <span className="card-verified">✓ Verified</span>
                  <span className="card-rating">
                    <span className="rating-stars">
                      {renderStars(property.rating)}
                    </span>
                    <span className="rating-value">{property.rating}</span>
                    <span className="rating-reviews">({property.reviews})</span>
                  </span>
                </div>
                <div className="card-content">
                  <h3>{property.title}</h3>
                  <p className="card-location">
                    <svg className="card-location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {property.location}
                  </p>
                  <p className="card-price">{property.price}</p>
                  <span className="card-details">{property.beds} BHK • {property.area}</span>
                  <Link to={`/property/${property.id}`} className="card-btn">
                    View Property →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;