import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../services/api";

function EditProduct() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then((response) => setFormData(response.data))
            .catch((error) => console.error("Failed to fetch product:", error))
            .finally(() => setLoading(false));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`/products/${id}`, formData)
            .then(() => {
                alert("Product updated successfully!");
                navigate("/products");
            })
            .catch((error) => console.error("Failed to update product:", error));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container my-5">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        className="form-control"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default EditProduct;