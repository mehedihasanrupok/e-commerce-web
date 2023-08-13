import React from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    return (
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <Link to="/inventoryUsers">Users</Link>
                </li>
                <li>
                    <Link to="/admin/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/inventoryProducts">Products</Link>
                </li>
            </ul>
        </div>
    );
};

export default Inventory;