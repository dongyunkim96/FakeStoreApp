import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../services/api";
import { Modal, Button } from "react-bootstrap";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.error("Failed to fetch product:", error))
            .finally(() => setLoading(false));
    }, [id]);

    const handleDelete = () => {
        axios
            .delete(`/products/${id}`)
            .then(() => {
                alert("Product deleted successfully!");
                navigate("/products");
            })
            .catch((error) => console.error("Failed to delete product:", error));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container my-5">
            <h2>Product Details</h2>
            {product && (
                <>
                    <img src={product.image} alt={product.title} className="img-fluid" />
                    <h3>{product.title}</h3>
                    <p>Category: {product.category}</p>
                    <p>{product.description}</p>
                    <h4>${product.price}</h4>
                    <button className="btn btn-danger" onClick={() => setShowModal(true)}>
                        Delete Product
                    </button>
                </>
            )}

            {/* Confirmation Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProductDetails;
