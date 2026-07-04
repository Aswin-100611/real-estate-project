import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WishList.css";

import { db } from "../firebase";

import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

function WishList() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    const loadWishlist = async () => {

      const username = localStorage.getItem("username");
      const mobile = localStorage.getItem("mobile");

      if (!username || !mobile) return;

      const q = query(
        collection(db, "wishlist"),
        where("username", "==", username),
        where("mobile", "==", mobile)
      );

      const snapshot = await getDocs(q);

      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setWishlist(items);
    };

    loadWishlist();

  }, []);

return (

  <div className="wishlist-page">

    <div className="wishlist-container">

      <div className="wishlist-title">
        <Link to="/" className="wishlist-back">
    ← Back to Home
</Link>

        <h1>❤️ My Wishlist</h1>

        <p>
          Your favourite properties saved for later.
        </p>

      </div>

      <div className="wishlist-grid">

        {wishlist.length === 0 ? (

          <div className="empty-wishlist">

            <h2>No properties saved yet.</h2>

            <p>
              Browse properties and save your favourites.
            </p>

          </div>

        ) : (

          wishlist.map(item => (

            <div
              className="wishlist-card"
              key={item.id}
            >

              <img
                src={item.propertyImage}
                alt={item.propertyTitle}
              />

              <div className="wishlist-content">

                <h2>{item.propertyTitle}</h2>

                <p className="wishlist-location">
                  📍 {item.propertyLocation}
                </p>

                <h3 className="wishlist-price">
                  {item.propertyPrice}
                </h3>

                <Link
                  to={`/property/${item.propertyId}`}
                  className="view-details-btn"
                >
                  View Details →
                </Link>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  </div>

);
}

export default WishList;