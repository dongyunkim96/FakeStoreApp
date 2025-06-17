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

---

## API Setup (src/services/api.js)  
```js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default instance; ```
---

## Routing & Layout (App.jsx)  
- Uses React Router’s `Routes` and `Route` to define navigation paths:  
  - `/` → HomePage  
  - `/products` → ProductList  
  - `/products/:id` → ProductDetails  
  - `/add-product` → AddProduct  
  - `/edit-product/:id` → EditProduct  
- The app wraps all pages with a consistent layout:  
  - `Header` component at the top (navigation bar)  
  - Main content area rendered inside `<div className='main-cotent'>`  
  - `Footer` component at the bottom

---

## Product Forms (AddProduct.jsx, EditProduct.jsx)  
- Both components use controlled form inputs linked to React state (`useState`).  
- `AddProduct` submits a POST request to add a new product; resets form and navigates to product list on success.  
- `EditProduct` fetches product data by ID on mount (`useEffect`), pre-fills the form, and submits a PUT request to update the product.  
- Both handle loading states and provide user feedback via alerts.

---

## Product Details & Deletion (ProductDetails.jsx)  
- Fetches a product by ID from the API when the component loads (`useEffect`).  
- Displays product image, title, category, description, and price.  
- Includes a "Delete Product" button that triggers a confirmation modal.  
- Upon confirmation, deletes the product via API and redirects to the products list.

---

## Running the App  
1. Clone the repository:  
   ```bash
   git clone https://github.com/dongyunkim96/FakeStoreApp.git
