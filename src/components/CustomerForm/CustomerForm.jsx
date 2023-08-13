import React, { useState } from 'react';
import './CustomerForm.css'

const CustomerForm = ({ addCustomer }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = { name, email, address, phone };
        addCustomer(newCustomer);
        setName('');
        setEmail('');
        setAddress('');
        setPhone('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add A Customer</h2>

            <div className='first'>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
            </div>
            <div className='second'>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

                <label>Phone:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerForm;