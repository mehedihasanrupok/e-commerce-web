import React, { useEffect, useState } from 'react';
import CustomerForm from '../CustomerForm/CustomerForm';
import './AllCustomer.css'

const AllCustomer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
        setCustomers(savedCustomers);
    }, []);

    const addCustomer = (customer) => {
        const updatedCustomers = [...customers, customer];
        setCustomers(updatedCustomers);
        localStorage.setItem('customers', JSON.stringify(updatedCustomers));
    };
    return (
        <div>
            <h1>Customer List</h1>
            <CustomerForm addCustomer={addCustomer} />

            <h2>Saved Customers</h2>
            <table className='table-data'>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.address}</td>
                        <td>{customer.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default AllCustomer;


{/* <ul>
                {customers.map((customer, index) => (
                    <li key={index}>
                        {customer.name} - {customer.email} - {customer.address} - {customer.phone}
                    </li>
                ))}
            </ul> */}