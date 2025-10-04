// src/components/Header.js

import React, { useContext } from "react";

// Import FontAwesome icon for the shopping cart
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// Import the context to access cart state
import { itemContext } from "../context/ItemContext";

const Header = () => {
  // Destructure the values from the context
  const { itemsInCart, totalPrice } = useContext(itemContext);

  return (
    // Header container with modern styling
    <div 
      className="header" 
      style={{
        display: "flex",                  // Arrange children in a row
        justifyContent: "space-between", // Space out children evenly
        alignItems: "center",            // Vertically center items
        padding: "15px 30px",            // Inner spacing
        backgroundColor: "#f5f7fa",      // Light background color
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // Subtle shadow for depth
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      {/* Store title */}
      <h1 
        className="heading" 
        style={{
          margin: 0,
          fontSize: "2rem",
          color: "#333"
        }}
      >
        Book Store
      </h1>

      {/* Display total price with two decimal places */}
      <h3 
        style={{
          margin: 0,
          color: "#444",
          fontWeight: "600",
          fontSize: "1.2rem"
        }}
      >
        Total Price: ${totalPrice.toFixed(2)}
      </h3>

      {/* Cart icon and item count */}
      <div 
        className="cart-num" 
        style={{
          position: "relative",
          cursor: "pointer",
          color: "#007bff" // Blue icon color
        }}
      >
        {/* Red circle badge showing number of items in cart */}
        <div 
          className="cart-items" 
          style={{
            position: "absolute",      // Positioned relative to cart icon
            top: "-8px",               // Move up slightly
            right: "-10px",            // Move to the right
            backgroundColor: "#dc3545",// Bootstrap red
            color: "white",
            borderRadius: "50%",       // Make it a circle
            width: "20px",
            height: "20px",
            fontSize: "0.8rem",
            display: "flex",           // Center text inside circle
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            boxShadow: "0 0 4px rgba(0,0,0,0.2)" // Slight shadow for pop
          }}
        >
          {itemsInCart}
        </div>

        {/* FontAwesome shopping cart icon */}
        <FontAwesomeIcon icon={faCartShopping} size="3x" />
      </div>
    </div>
  );
};

export default Header;
