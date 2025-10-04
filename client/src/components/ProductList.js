// client/src/components/ProductList.js

import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { itemContext } from "../context/ItemContext";

const ProductList = () => {
  // Get the products from context
  const { products } = useContext(itemContext);

  // Local state to manage displayed (filtered/sorted) products
  const [displayProducts, setDisplayProducts] = useState([...products]);
  const [minPrice, setMinPrice] = useState(0);        // Minimum price for filtering
  const [maxPrice, setMaxPrice] = useState(3000);     // Maximum price for filtering
  const [selectedType, setSelectedType] = useState("all"); // Genre/type filter

  // Update local state if the original product list changes
  useEffect(() => {
    setDisplayProducts([...products]);
  }, [products]);

  // Sort the displayed products in ascending order by price
  const handleSortByPrice = () => {
    const sorted = [...displayProducts].sort((a, b) => a.price - b.price);
    setDisplayProducts(sorted);
  };

  // Filter the original product list by price range and update display
  const handleFilterByPriceRange = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setDisplayProducts(filtered);
  };

  // Filter the original product list by genre/type
  const handleFilterByType = () => {
    if (selectedType === "all") {
      setDisplayProducts([...products]); // Reset to all products
    } else {
      const filtered = products.filter(
        (product) => product.genre === selectedType
      );
      setDisplayProducts(filtered);
    }
  };

  return (
    <div
      className="prdt-list"
      style={{
        padding: "20px",
        maxWidth: "960px",
        margin: "auto",
      }}
    >
      {/* Section Title */}
      <h2 style={{ color: "#2a7a2a", marginBottom: "20px" }}>Book List</h2>

      {/* Filter and Sort Controls */}
      <div
        className="filter-btn"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "25px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Sort Button */}
        <button
          onClick={handleSortByPrice}
          style={{
            padding: "8px 14px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          Sort by Price
        </button>

        {/* Min Price Input */}
        <label style={{ fontWeight: "500", fontSize: "0.9rem" }}>
          Min Price:
          <input
            type="number"
            value={minPrice}
            min={0}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            style={{
              marginLeft: "8px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "80px",
            }}
          />
        </label>

        {/* Max Price Input */}
        <label style={{ fontWeight: "500", fontSize: "0.9rem" }}>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            min={0}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{
              marginLeft: "8px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "80px",
            }}
          />
        </label>

        {/* Filter by Price Button */}
        <button
          onClick={handleFilterByPriceRange}
          style={{
            padding: "8px 14px",
            backgroundColor: "#28a745",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1e7e34")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#28a745")
          }
        >
          Filter by Price Range
        </button>

        {/* Genre Filter Dropdown */}
        <label style={{ fontWeight: "500", fontSize: "0.9rem" }}>
          Filter by Type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              marginLeft: "8px",
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="all">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Dystopian">Dystopian</option>
            {/* More genres can be added here */}
          </select>
        </label>

        {/* Filter by Genre Button */}
        <button
          onClick={handleFilterByType}
          style={{
            padding: "8px 14px",
            backgroundColor: "#ffc107",
            border: "none",
            borderRadius: "5px",
            color: "#212529",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#d39e00")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffc107")
          }
        >
          Filter by Type
        </button>
      </div>

      {/* Product Grid */}
      <div
        className="item-card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Render product cards or fallback message */}
        {displayProducts.length > 0 ? (
          displayProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        ) : (
          <p style={{ fontStyle: "italic", color: "#555" }}>
            No products match your criteria.
          </p>
        )}
      </div>

      {/* Buy Now Button */}
      <div
        className="buy-now-btn"
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          backgroundColor: "#28a745",
          color: "#fff",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "1.1rem",
          borderRadius: "6px",
          cursor: "pointer",
          maxWidth: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          userSelect: "none",
        }}
      >
        Buy Now
      </div>
    </div>
  );
};

export default ProductList;
