
# Bookstore E-commerce App (MERN Stack)

A full-stack e-commerce application for browsing and purchasing books. This project demonstrates how to build a responsive, interactive online bookstore using the MERN (MongoDB, Express, React, Node.js) stack.

## Overview

This app allows users to:

* View a list of books
* Sort books by price
* Filter books by genre or price range
* Add or remove books from the cart
* View total items and total price in the cart

---

<img width="1919" height="967" alt="image" src="https://github.com/user-attachments/assets/62e86105-935d-4d20-b8dc-f26a4b7085c4" />


## Project Structure

```
bookstore-ecommerce/
├── server/              # Backend code (Node.js, Express, MongoDB)
│   └── server.js
├── client/              # Frontend code (React)
│   ├── public/
│   └── src/
│       ├── components/  # UI Components
│       ├── context/     # Global state using Context API
│       ├── App.js
│       └── App.css
├── README.md
```

---

## Tech Stack

* **Frontend**: React, Context API, FontAwesome
* **Backend**: Node.js, Express.js, MongoDB (via Mongoose)
* **Database**: MongoDB (local instance)

---

## Features

* Browse books with title, author, genre, and description
* Add and remove items from cart
* Display total cart value and number of items
* Sort books by price
* Filter books by genre or price range
* Responsive layout

---

## Prerequisites

Before running this project, ensure the following are installed:

* Node.js and npm
* MongoDB (running locally)
* Git (optional)

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/bookstore-ecommerce.git
cd bookstore-ecommerce
```

---

## Backend Setup (server)

### Step 2: Navigate to backend folder

```bash
cd server
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start MongoDB

Make sure your MongoDB is running locally. This app connects to `mongodb://localhost:27017/book`.

### Step 5: Start backend server

```bash
node server.js
```

This will seed the database and start the Express server on `http://localhost:5000`.

---

## Frontend Setup (client)

### Step 6: Navigate to client folder

```bash
cd ../client
```

### Step 7: Install dependencies

```bash
npm install
```

### Step 8: Start frontend development server

```bash
npm start
```

Visit `http://localhost:3000` to see the app running in the browser.

---

## API Routes

### GET `/api/books`

Returns all books in the MongoDB collection.

---

## Example Data (Seeded on Startup)

```json
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian",
  "description": "A dystopian vision of a totalitarian future society",
  "price": 125,
  "image": "https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg"
}
```

---

## Available Scripts

In the **client** directory:

* `npm start` – Runs the app in development mode
* `npm run build` – Builds the app for production

In the **server** directory:

* `node server.js` – Starts the backend server and seeds the database

---

## Notes

* You can add more books or genres in `server.js` for testing.
* The frontend dynamically fetches and displays data from the backend API.
* No user authentication or payment integration is included.

---

## Future Enhancements

* Add user authentication (JWT)
* Integrate payment gateway (Stripe, Razorpay)
* Add search functionality
* Admin dashboard to manage books

---


Let me know if you’d like a downloadable PDF or markdown version, or want this published to GitHub with auto-generated badges.
