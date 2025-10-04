// client/src/App.js

// Import React library
import React from 'react';

// Import components
import ProductList from './components/ProductList';
import Header from './components/Header';

// Import global styles
import './App.css';

// Import the custom context provider that holds product and cart state
import CustomItemContext from './context/ItemContext';

const App = () => {
	return (
		// Wrap the entire app in the context provider so that
		// all child components can access shared state and functions
		<CustomItemContext>
			{/* Header component displays the store name and cart summary */}
			<Header />

			{/* ProductList component shows available books with filters and sorting */}
			<ProductList />
		</CustomItemContext>
	);
};

// Export the App component as the default export
export default App;
