import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageText } from "iconsax-react";
import {
  Location,
  Buildings,
  WalletMoney,
  Verify,
  Star1,
  
  People,
  
  DocumentText,
  SearchNormal,
  
  Home,
  ArrowRight2,
  Call,
 
} from "iconsax-react";
import './PropertyDetails.css';
import agents from "../data/agents";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

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
    reviews: 124,
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
    rating: 4.9,
    reviews: 89,
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
    rating: 4.6,
    reviews: 67,
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
    rating: 4.9,
    reviews: 156,
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
    rating: 4.7,
    reviews: 93,
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
    rating: 4.5,
    reviews: 78,
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
    rating: 4.8,
    reviews: 112,
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
    rating: 4.4,
    reviews: 56,
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
    rating: 4.7,
    reviews: 145,
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
    rating: 4.6,
    reviews: 84,
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
  },
  // ========== NEW PROPERTIES (11-20) ==========
  {
    id: 11,
    title: "Sunset Paradise",
    location: "Goa",
    price: "₹2.50 Cr",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
    beds: 4,
    baths: 3,
    area: "3000 sqft",
    rating: 4.9,
    reviews: 203,
    description: "Breathtaking 4-bedroom villa with stunning sunset views over the Arabian Sea. Features infinity pool, private beach access, and luxurious finishes in Goa.",
    amenities: ["Infinity Pool", "Private Beach Access", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Terrace", "Home Theater", "Wine Cellar", "Spa"],
    features: {
      "Property Type": "Villa",
      "BHK": "4 BHK",
      "Bathrooms": "3",
      "Area": "3000 sqft",
      "Furnishing": "Luxury Furnished",
      "Parking": "3 Covered",
      "Age of Property": "0-1 Year",
      "Floor": "Ground + 1",
      "Total Floors": "2",
      "Possession": "Ready to Move"
    }
  },
  {
    id: 12,
    title: "Golden Oak Estate",
    location: "Delhi",
    price: "₹4.20 Cr",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
    beds: 5,
    baths: 4,
    area: "4200 sqft",
    rating: 4.8,
    reviews: 178,
    description: "Majestic 5-bedroom estate in the heart of Delhi's diplomatic enclave. Features sprawling gardens, private pool, and exquisite craftsmanship.",
    amenities: ["Private Pool", "Garden", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Terrace", "Study Room", "Library", "Home Office"],
    features: {
      "Property Type": "Villa",
      "BHK": "5 BHK",
      "Bathrooms": "4",
      "Area": "4200 sqft",
      "Furnishing": "Luxury Furnished",
      "Parking": "4 Covered",
      "Age of Property": "2-4 Years",
      "Floor": "Ground + 2",
      "Total Floors": "3",
      "Possession": "Immediate"
    }
  },
  {
    id: 13,
    title: "Crystal Springs",
    location: "Jaipur",
    price: "₹1.80 Cr",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    beds: 3,
    baths: 2,
    area: "2000 sqft",
    rating: 4.6,
    reviews: 95,
    description: "Elegant 3-bedroom apartment with panoramic views of the Pink City. Features traditional architecture with modern amenities and serene surroundings.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Club House", "Garden", "Children's Play Area"],
    features: {
      "Property Type": "Apartment",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "2000 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-2 Years",
      "Floor": "6th Floor",
      "Total Floors": "12",
      "Possession": "Immediate"
    }
  },
  {
    id: 14,
    title: "Emerald Bay Villas",
    location: "Kochi",
    price: "₹2.30 Cr",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    beds: 4,
    baths: 3,
    area: "2900 sqft",
    rating: 4.7,
    reviews: 134,
    description: "Stunning 4-bedroom villa overlooking the serene backwaters of Kochi. Features modern Kerala architecture with luxurious amenities and waterfront views.",
    amenities: ["Private Jetty", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Terrace", "Backwater View", "Home Theater"],
    features: {
      "Property Type": "Villa",
      "BHK": "4 BHK",
      "Bathrooms": "3",
      "Area": "2900 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "3 Covered",
      "Age of Property": "0-1 Year",
      "Floor": "Ground + 1",
      "Total Floors": "2",
      "Possession": "Ready to Move"
    }
  },
  {
    id: 15,
    title: "Silver Oak Residency",
    location: "Ahmedabad",
    price: "₹1.10 Cr",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    beds: 3,
    baths: 2,
    area: "1600 sqft",
    rating: 4.5,
    reviews: 72,
    description: "Contemporary 3-bedroom apartment with modern amenities in Ahmedabad's most sought-after location. Perfect for families seeking comfort and convenience.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Club House", "Garden", "Jogging Track"],
    features: {
      "Property Type": "Apartment",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1600 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "2 Covered",
      "Age of Property": "2-3 Years",
      "Floor": "4th Floor",
      "Total Floors": "10",
      "Possession": "Immediate"
    }
  },
  {
    id: 16,
    title: "Tranquil Meadows",
    location: "Mysore",
    price: "₹95 Lakhs",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    beds: 3,
    baths: 2,
    area: "1750 sqft",
    rating: 4.4,
    reviews: 61,
    description: "Peaceful 3-bedroom home surrounded by lush green meadows and gardens. Perfect for those seeking a serene lifestyle close to nature.",
    amenities: ["Garden", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Club House", "Yoga Center", "Walking Track"],
    features: {
      "Property Type": "Villa",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1750 sqft",
      "Furnishing": "Semi-Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-2 Years",
      "Floor": "Ground Floor",
      "Total Floors": "1",
      "Possession": "Ready to Move"
    }
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
    reviews: 245,
    description: "Ultra-luxury 5-bedroom penthouse with panoramic views of Mumbai's skyline and Arabian Sea. Features private pool, home theater, and world-class amenities.",
    amenities: ["Private Pool", "Home Theater", "Gymnasium", "Parking", "24/7 Security", "Sky Lounge", "Balcony", "Jacuzzi", "Private Elevator", "Concierge"],
    features: {
      "Property Type": "Penthouse",
      "BHK": "5 BHK",
      "Bathrooms": "4",
      "Area": "4800 sqft",
      "Furnishing": "Luxury Furnished",
      "Parking": "4 Covered",
      "Age of Property": "0-1 Year",
      "Floor": "Top Floor",
      "Total Floors": "30",
      "Possession": "Immediate"
    }
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
    reviews: 108,
    description: "Beautiful 3-bedroom apartment in Bangalore's garden city. Features lush green surroundings, modern amenities, and excellent connectivity to IT hubs.",
    amenities: ["Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Club House", "Garden", "Kids Play Area"],
    features: {
      "Property Type": "Apartment",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1850 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-2 Years",
      "Floor": "5th Floor",
      "Total Floors": "12",
      "Possession": "Immediate"
    }
  },
  {
    id: 19,
    title: "Serene Shores",
    location: "Visakhapatnam",
    price: "₹1.35 Cr",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    beds: 3,
    baths: 2,
    area: "1900 sqft",
    rating: 4.7,
    reviews: 89,
    description: "Stunning 3-bedroom apartment with breathtaking sea views and cool coastal breezes. Perfect for those seeking a peaceful lifestyle by the ocean.",
    amenities: ["Sea View", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Elevator", "Balcony", "Club House", "Jogging Track"],
    features: {
      "Property Type": "Apartment",
      "BHK": "3 BHK",
      "Bathrooms": "2",
      "Area": "1900 sqft",
      "Furnishing": "Fully Furnished",
      "Parking": "2 Covered",
      "Age of Property": "1-2 Years",
      "Floor": "7th Floor",
      "Total Floors": "15",
      "Possession": "Immediate"
    }
  },
  {
    id: 20,
    title: "Heritage Homes",
    location: "Jaipur",
    price: "₹2.80 Cr",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
    beds: 4,
    baths: 3,
    area: "3500 sqft",
    rating: 4.8,
    reviews: 156,
    description: "Exquisite 4-bedroom heritage-style villa with traditional Rajasthani architecture and modern luxury. Features private courtyard, garden, and premium finishes.",
    amenities: ["Private Courtyard", "Garden", "Swimming Pool", "Gymnasium", "Parking", "24/7 Security", "Balcony", "Terrace", "Home Theater", "Library"],
    features: {
      "Property Type": "Villa",
      "BHK": "4 BHK",
      "Bathrooms": "3",
      "Area": "3500 sqft",
      "Furnishing": "Luxury Furnished",
      "Parking": "3 Covered",
      "Age of Property": "2-4 Years",
      "Floor": "Ground + 2",
      "Total Floors": "3",
      "Possession": "Immediate"
    }
  }
];

// Gallery images for each property (20 properties with unique images)
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
  ],
  11: [
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
  ],
  12: [
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800"
  ],
  13: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
  ],
  14: [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800"
  ],
  15: [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
  ],
  16: [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
  ],
  17: [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800"
  ],
  18: [
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
    "https://images.unsplash.com/photo-1560448204-5f59f8fc3ac4?w=800"
  ],
  19: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
  ],
  20: [
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800"
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
  const assignedAgent = agents.find(
agent => agent.city === property?.location
);

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

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Property:", property);
  console.log("Assigned Agent:", assignedAgent);
  console.log("Form Data:", formData);

  try {
    console.log("Saving to Firestore...");

    const docRef = await addDoc(collection(db, "inquiries"), {
      propertyId: property.id,
      propertyName: property.title,
      propertyLocation: property.location,
      propertyPrice: property.price,

      agentId: assignedAgent.id,
      agentName: assignedAgent.name,

      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      message: formData.message,

      status: "Pending",
      replies: [],

      createdAt: serverTimestamp()
    });

    console.log("Document ID:", docRef.id);

    alert("Inquiry Sent Successfully!");

    setShowForm(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

  } catch (error) {
    console.error("FULL ERROR:", error);
    console.error("CODE:", error.code);
    console.error("MESSAGE:", error.message);
    alert(error.message);
  }
};
  // Function to render star ratings using iconsax
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = [];
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star1
          key={`full-${i}`}
          size={16}
          variant="Bold"
          color="#f39c12"
        />
      );
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star1
          key={`empty-${i}`}
          size={16}
          variant="Outline"
          color="#f39c12"
        />
      );
    }
    
    return stars;
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
          <Link to="/property">Properties</Link>
          <span>›</span>
          <span className="current">{property.title}</span>
        </nav>

        {/* Property Header */}
        <div className="property-header-section">
          <div className="header-left">
            <h1>{property.title}</h1>
            <div className="location-rating">
              <span className="location">
                <Location size={18} color="#b89a5e" variant="Bold" />
                {property.location}
              </span>
              <span className="rating">
                <span className="rating-stars">
                  {renderStars(property.rating)}
                </span>
                <span className="rating-value">{property.rating}</span>
                <span className="rating-reviews">({property.reviews} reviews)</span>
              </span>
            </div>
            <div className="price-section">
              <span className="price">{property.price}</span>
              <span className="price-detail">EMI starts at ₹45,000/month</span>
            </div>
          </div>
          <div className="header-right">
            <button className="btn-favorite">
              <Star1 size={18} variant="Bold" color="#2c3e50" />
              Save
            </button>
            <button className="btn-share">
              <ArrowRight2 size={18} variant="Bold" color="#2c3e50" />
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
                <Home size={24} variant="Bold" color="#b89a5e" />
                <div>
                  <span className="spec-label">Bedrooms</span>
                  <span className="spec-value">{propertyDetails.beds} BHK</span>
                </div>
              </div>
              <div className="spec-card">
                <Buildings size={24} variant="Bold" color="#b89a5e" />
                <div>
                  <span className="spec-label">Bathrooms</span>
                  <span className="spec-value">{propertyDetails.baths}</span>
                </div>
              </div>
              <div className="spec-card">
                <WalletMoney size={24} variant="Bold" color="#b89a5e" />
                <div>
                  <span className="spec-label">Area</span>
                  <span className="spec-value">{propertyDetails.area}</span>
                </div>
              </div>
              <div className="spec-card">
                <DocumentText size={24} variant="Bold" color="#b89a5e" />
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
                    <Verify size={18} variant="Bold" color="#27ae60" />
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
                  <Location size={22} variant="Bold" color="#b89a5e" />
                  <div>
                    <span className="nearby-label">Schools</span>
                    <span className="nearby-value">5+ Schools within 2 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <Buildings size={22} variant="Bold" color="#b89a5e" />
                  <div>
                    <span className="nearby-label">Hospitals</span>
                    <span className="nearby-value">3 Hospitals within 3 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <WalletMoney size={22} variant="Bold" color="#b89a5e" />
                  <div>
                    <span className="nearby-label">Shopping</span>
                    <span className="nearby-value">2 Malls within 1 km</span>
                  </div>
                </div>
                <div className="nearby-item">
                  <SearchNormal size={22} variant="Bold" color="#b89a5e" />
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
                    <SearchNormal size={16} variant="Bold" color="#b89a5e" />
                    Views
                  </span>
                  <span>245</span>
                </div>
                <div className="stat">
                  <span>
                    <Star1 size={16} variant="Bold" color="#b89a5e" />
                    Saved
                  </span>
                  <span>78</span>
                </div>
                <div className="stat">
                  <span>
                    <Call size={16} variant="Bold" color="#b89a5e" />
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
                <div className="agent-avatar">
                  <People size={24} variant="Bold" color="#ffffff" />
                </div>
                <div>
                  <span className="agent-name">Gopi Maries R</span>
                  <span className="agent-title">Senior Sales Executive</span>
                  <span className="agent-phone">
                    <Call size={16} variant="Bold" color="#b89a5e" />
                    +91 0987654321
                  </span>
                </div>
              </div>
              <button className="btn-call">
                <Call size={18} variant="Bold" color="#ffffff" />
                Call Now
              </button>
            </div>

<h4>

Contact Agent

</h4>

<div className="agent-info">

<img

className="agent-avatar"

src={assignedAgent.image}

alt={assignedAgent.name}

/>

<div>

<span className="agent-name">

{assignedAgent.name}

</span>

<span className="agent-title">

{assignedAgent.designation}

</span>

<span className="agent-phone">

{assignedAgent.phone}

</span>

</div>

</div>



<button
  className="btn-chat"
  onClick={() => navigate(`/agent/${assignedAgent.id}`)}
>
  <MessageText
    size="20"
    color="#ffffff"
    variant="Bold"
  />

  Chat With Agent
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
                        <span className="similar-location">
                          <Location size={14} color="#b89a5e" variant="Bold" />
                          {p.location}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default PropertyDetails;