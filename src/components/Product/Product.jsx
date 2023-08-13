import React, { useState } from 'react';
import './Product.css'
import '../ProductModal/ProductModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductModal from '../ProductModal/ProductModal';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;

    const handleAddToCart = props.handleAddToCart;
    // const handleAddToCart = handleAddToCart;

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                {/* <p>Ratings:{ratings} Stars</p> */}
                <button className='btn-details' onClick={() => openModal(props.product)}>View Details</button>
                {isModalOpen && (
                    <ProductModal
                        product={props.product}
                        closeModal={closeModal}
                    ></ProductModal>
                )}
            </div>
            <button onClick={() => handleAddToCart(props.product)}
                className='btn-cart'>
                Add to Cart<FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;