// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');

        navigate('/login');
    };
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page.</p>
            <button onClick={handleLogout}>Déconnecter</button>
        </div>
    );
};

export default Home;
