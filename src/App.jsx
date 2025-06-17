import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductList';
import EditProduct from './components/EditProduct';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <div className='main-cotent'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;