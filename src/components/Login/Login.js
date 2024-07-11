import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import axios from 'axios';
let urlBack = process.env.REACT_APP_BACK_URL;
console.log('urlBack',urlBack);
     

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${urlBack}/login`, {
                email,
                password
            });
            console.log('Login successful:', response.config.data);
            setMessage('Login successful!');
            const encryptedToken = CryptoJS.AES.encrypt(response.config.data, 'your-secret-key').toString();
            localStorage.setItem('authToken',encryptedToken);
            navigate('/');
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
