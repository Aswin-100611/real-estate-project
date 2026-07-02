import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './PropertyListing.css';

// Import the same properties array from HeroSection
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

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 'smooth' for animation, or 'instant' for immediate
    });
  }, []);

  // Get unique locations for filter
  const locations = ['All', ...new Set(properties.map(p => p.location))];

  // Filter properties based on search and filters
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All' || property.location === selectedLocation;
    
    // Price filter logic
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
    
    // Property type filter (based on title keywords)
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

  return (
    <div className="listing-page">
      <div className="container">
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

          {/* View Toggle & Results Count */}
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
                  <span className="card-rating">★ 4.8</span>
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
                  <span className="card-details">3 BHK • 1800 sqft</span>
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