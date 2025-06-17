import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../services/api";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container my-5">
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p>${product.price.toFixed(2)}</p>
                                <Link to={`/products/${product.id}`} className="btn btn-secondary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductList;
