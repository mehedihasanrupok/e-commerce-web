import React, { useEffect, useState } from 'react';
import './ProductDash.css'

const ProductDash = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <table className='table-data'>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Seller</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.stock}</td>
                        <td>{product.seller}</td>
                        <td>{product.price}</td>
                        <td>{product.ratings}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductDash;

{/* <div>
<div>
    {
        products.map(product => <ProductTotal
            key={product.id}
            product={product}
        ></ProductTotal>)
    }
</div>
</div> */}