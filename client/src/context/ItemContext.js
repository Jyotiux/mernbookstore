// src/context/ItemContext.js

import { createContext, useEffect, useState } from "react";

// Create a context to share product and cart data across components
const itemContext = createContext();

// Custom provider component to wrap the app and provide context values
function CustomItemContext({ children }) {
	// State to hold all products fetched from the backend
	const [products, setProducts] = useState([]);

	// State to hold the current cart items
	const [cart, setCart] = useState([]);

	// State to hold the total number of items in the cart
	const [itemsInCart, setItemsInCart] = useState(0);

	// State to hold the total price of all items in the cart
	const [totalPrice, setTotalPrice] = useState(0);

	// useEffect to load products when the component is first mounted
	useEffect(() => {
		// Fetch product data from backend API
		const fetchData = async () => {
			const response = await fetch("http://localhost:5000/api/books"); // API call
			const products = await response.json(); // Convert response to JSON
			console.log(products); // Optional: log products for debugging
			setProducts(products); // Store fetched products in state
		};

		fetchData(); // Call the async function
	}, []); // Empty dependency array ensures this runs once on mount

	// Function to add a product to the cart
	const addToCart = (product) => {
		setTotalPrice(totalPrice + product.price); // Increase total price
		setCart([...cart, product]); // Add product to cart array
		setItemsInCart(itemsInCart + 1); // Increment item count
	};

	// Function to remove one instance of a product from the cart
	const removeFromCart = (product) => {
		// Find the index of the first matching product in the cart
		const index = cart.findIndex((prdt) => prdt._id === product._id);
		console.log(index); // Optional: log the index

		if (index !== -1) {
			// If product exists in cart
			const updatedCart = [...cart]; // Create a copy of cart
			updatedCart.splice(index, 1); // Remove product at found index
			setTotalPrice(totalPrice - cart[index].price); // Decrease total price
			setCart(updatedCart); // Update cart state
			setItemsInCart(itemsInCart - 1); // Decrease item count
		} else {
			// If product not found in cart
			console.log("Item not found in the cart");
		}
	};

	return (
		// Provide context values to all children components
		<itemContext.Provider
			value={{
				products,
				addToCart,
				removeFromCart,
				itemsInCart,
				totalPrice,
			}}
		>
			{children}
		</itemContext.Provider>
	);
}

// Export context and provider so other components can consume/use it
export { itemContext };
export default CustomItemContext;
