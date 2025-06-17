import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='text-center my-5'>
            <h1>Welcome to the Fake Store</h1>
            <p>Your one-stop shop for amazing products!</p>
            <Link to="/products" className='btn btn-primary'>View Products</Link>
        </div>
    );
}

export default HomePage;