// client/src/components/ProductItem.js

import React, { useContext } from "react";
// Import context to manage cart state
import { itemContext } from "../context/ItemContext";

// Functional component to display a single product item
const ProductItem = ({ product }) => {
  // Access addToCart and removeFromCart functions from context
  const { addToCart, removeFromCart } = useContext(itemContext);

  // Handler to add the product to the cart
  const handleAddToCart = (product) => {
    console.log("Adding product:", product);
    addToCart(product);
  };

  // Handler to remove the product from the cart
  const handleRemoveFromCart = (product) => {
    console.log("Removing product:", product);
    removeFromCart(product);
  };

  return (
    // Product card container with styling
    <div
      className="product-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        maxWidth: "300px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        margin: "15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Product image */}
      <img
        className="product-image"
        src={product.image}
        alt={product.title || product.name}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "6px",
          marginBottom: "12px",
          objectFit: "cover",
        }}
      />

      {/* Product textual details */}
      <div className="product-details" style={{ flexGrow: 1 }}>
        {/* Product title */}
        <h3
          style={{
            fontWeight: "700",
            fontSize: "1.2rem",
            marginBottom: "8px",
            color: "#222",
          }}
        >
          {product.title || product.name}
        </h3>

        {/* Product description */}
        <p
          style={{
            fontWeight: "300",
            fontSize: "0.9rem",
            marginBottom: "12px",
            color: "#555",
          }}
        >
          {product.description}
        </p>

        {/* Product price */}
        <p
          style={{
            fontWeight: "600",
            fontSize: "1rem",
            marginBottom: "6px",
            color: "#333",
          }}
        >
          Price: ₹{product.price}
        </p>

        {/* Product genre */}
        <p
          style={{
            fontWeight: "500",
            fontSize: "0.9rem",
            marginBottom: "6px",
            color: "#777",
          }}
        >
          Genre: {product.genre}
        </p>

        {/* Product author */}
        <p
          style={{
            fontWeight: "700",
            fontSize: "1rem",
            color: "brown",
            marginBottom: "12px",
          }}
        >
          Author: {product.author}
        </p>
      </div>

      {/* Action buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {/* Add to Cart button */}
        <button
          onClick={() => handleAddToCart(product)}
          style={{
            flex: 1,
            padding: "10px 0",
            backgroundColor: "#007bff", // Primary blue
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          // Change background on hover
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          Add to Cart
        </button>

        {/* Remove from Cart button */}
        <button
          onClick={() => handleRemoveFromCart(product)}
          style={{
            flex: "0 0 40px",
            backgroundColor: "#dc3545", // Bootstrap red
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "1.2rem",
            lineHeight: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "background-color 0.3s ease",
          }}
          // Change background on hover
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#a71d2a")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#dc3545")
          }
        >
          −
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
