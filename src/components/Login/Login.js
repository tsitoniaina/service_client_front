import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    let urlBack='http://localhost:8000';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${urlBack}/login`, {
                email,
                password
            });
            console.log('Login successful:', response.data);
            setMessage('Login successful!');
            navigate('/home');
        } catch (error) {
            console.error('Error logging in:', error);
            setMessage('Error logging in. Please check your credentials.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                <Link to='/singin'>S'inscrire</Link>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginForm;
