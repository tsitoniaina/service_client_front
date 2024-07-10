import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    let urlBack='http://localhost:8000';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${urlBack}/api/users`, {
                email,
                password
            });
            console.log('User created:', response.data);
            setMessage('User created successfully!');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error creating user:', error);
            setMessage('Error creating user. Please try again.');
        }
    };
    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Create User</button>
                <Link to='/login'>Se connecter</Link>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateUser;
