import React from 'react';

const ProductTotal = (props) => {
    const { name, seller, ratings, price, stock } = props.product;
    return (
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Seller</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{seller}</td>
                    <td>{price}</td>
                    <td>{stock}</td>
                    <td>{ratings}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ProductTotal;