import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

function AddProduct() {
    const [formData, setFormData] = useState({ title: "", price: "", description: "", category: "", image: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('/products', formData);
            alert("Product added successfully!");
            setFormData({ title: "", price: "", description: "", category: "", image: "" }); 
            navigate('/products'); 
        } catch (error) {
            console.error(error);
            alert("Failed to add product. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="container my-5" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    className="form-control"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    className="form-control"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Adding Product..." : "Add Product"}
            </button>
        </form>
    );
}

export default AddProduct;