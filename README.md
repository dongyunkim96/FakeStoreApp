# FakeStoreApp

## Project Overview  
FakeStoreApp is a React-based e-commerce web application that allows users to browse products, view detailed information, add new products, edit existing ones, and delete products. It uses React Router for routing, axios for API communication, and React-Bootstrap for UI components and styling. The backend data is fetched from [Fake Store API](https://fakestoreapi.com).

---

## Features  
- **Product Listing:** Displays all products with image, title, and price; links to detailed product pages.  
- **Product Details & Deletion:** Shows product details with a delete option and confirmation modal.  
- **Add Product:** Form to add new products with inputs for title, price, description, category, and image URL.  
- **Edit Product:** Edit existing product details via a pre-filled form.  
- **Navigation & Layout:** Responsive header with navigation links and footer with GitHub link.  

---

## Tech Stack & Libraries  
React, React Router DOM (v6), Axios, Bootstrap & React-Bootstrap, Fake Store API

---

## Project Structure  
src/
├── components/
│ ├── AddProduct.jsx
│ ├── EditProduct.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── HomePage.jsx
│ ├── ProductDetails.jsx
│ ├── ProductList.jsx
├── services/
│ └── api.js
├── App.jsx
└── App.css

yaml
Copy
Edit

---

## API Setup (src/services/api.js)  
```js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default instance;
Routing & Layout (App.jsx)
Uses React Router Routes and Route to define paths:

/ → HomePage

/products → ProductList

/products/:id → ProductDetails

/add-product → AddProduct

/edit-product/:id → EditProduct

Header and Footer are displayed on all pages.

Product Forms (AddProduct.jsx, EditProduct.jsx)
Controlled inputs using React state (useState).

Submits POST or PUT requests to add or update products.

Alerts user on success or failure and navigates accordingly.

Product Details & Deletion (ProductDetails.jsx)
Fetches product by ID on mount (useEffect).

Shows product info with image, title, category, description, price.

Provides deletion with a confirmation modal to avoid accidental deletes.

Running the App
Clone repo:

bash
Copy
Edit
git clone https://github.com/dongyunkim96/FakeStoreApp.git
Install dependencies:

bash
Copy
Edit
npm install
Start app:

bash
Copy
Edit
npm start
Open in browser at http://localhost:3000

References
Fake Store API Documentation

React Router

React Bootstrap

