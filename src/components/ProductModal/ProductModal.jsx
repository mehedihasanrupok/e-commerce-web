import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, closeModal }) => {
    const { img, name, seller, ratings, price, shipping , stock } = product;
    if (!product) {
        return null;
    }
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={closeModal}>
                    Close
                </button>
                <h2>Product Name:{name}</h2>
                <h2>Seller:{seller}</h2>
                <h3>Rating:{ratings}</h3>
                <h3>Price:${price}</h3>
                <h3>Shipping Charge:${shipping}</h3>
                <h3>Stock:{stock}</h3>
                
                {/* Display other product details */}
            </div>
        </div>
    );
};

export default ProductModal;