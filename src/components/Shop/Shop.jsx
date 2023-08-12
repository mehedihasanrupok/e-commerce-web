import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // get id
        for (const id in storedCart) {
            // get the product using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                //add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //add the added product
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart = () => {
        setCart([]);
        // deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart
                 cart={cart}
                 handleClearCart={handleClearCart}
                 >
                    
                    {/* <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order</button>
                    </Link> */}
                 </Cart>
            </div>
        </div>
    );
};

export default Shop;