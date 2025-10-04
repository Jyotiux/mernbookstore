// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Define the port to run the server on (default to 5000 if not set)
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database named 'book' running on localhost
mongoose.connect('mongodb://localhost:27017/book');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable Cross-Origin Resource Sharing to allow requests from different origins
app.use(cors());

// Define Mongoose schema for the 'Book' collection
const bookSchema = new mongoose.Schema({
	title: String,       // Title of the book
	author: String,      // Author of the book
	genre: String,       // Genre/category of the book
	description: String, // Short description of the book
	price: Number,       // Price of the book
	image: String,       // URL to the book's image/cover
});

// Create Mongoose model for 'Book' based on the schema
const Book = mongoose.model('Book', bookSchema);

// Function to seed the database with initial book data
const seedDatabase = async () => {
	try {
		// Remove all existing documents in the 'Book' collection
		await Book.deleteMany();

		// Array of book objects to insert into the database
		const books = [
			{
				title: 'The Great Gatsby',
				author: 'F. Scott Fitzgerald',
				genre: 'Fiction',
				description: 'A classic novel about the American Dream',
				price: 20,
				image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011815/sutterlin-1362879_640-(1).jpg',
			},
			{
				title: 'To Kill a Mockingbird',
				author: 'Harper Lee',
				genre: 'Fiction',
				description: 'A powerful story of racial injustice and moral growth',
				price: 15,
				image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg',
			},
			{
				title: '1984',
				author: 'George Orwell',
				genre: 'Dystopian',
				description: 'A dystopian vision of a totalitarian future society',
				price: 255,
				image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg',
			},
			{
				title: 'The Great Gatsby',
				author: 'F. Scott Fitzgerald',
				genre: 'Fiction',
				description: 'A classic novel about the American Dream',
				price: 220,
				image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg',
			},
			{
				title: 'To Kill a Mockingbird',
				author: 'Harper Lee',
				genre: 'Fiction',
				description: 'A powerful story of racial injustice and moral growth',
				price: 1115,
				image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg',
			},
			{
				title: '1984',
				author: 'George Orwell',
				genre: 'Dystopian',
				description: 'A dystopian vision of a totalitarian future society',
				price: 125,
				image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg',
			},
		];

		// Insert the array of books into the database
		await Book.insertMany(books);

		// Log success message on successful seeding
		console.log('Database seeded successfully');
	} catch (error) {
		// Log any errors that occur during seeding
		console.error('Error seeding database:', error);
	}
};

// Seed the database when the server starts
seedDatabase();

// Define API endpoint to fetch all books
app.get('/api/books', async (req, res) => {
	try {
		// Query MongoDB to find all books
		const allBooks = await Book.find();

		// Send the books as JSON response
		res.json(allBooks);
	} catch (error) {
		// Log any error and send a 500 response
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

// Start the Express server and listen on the defined port
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
