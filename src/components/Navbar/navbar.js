// src/components/ProtectedRoute.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import love from '../../assets/images/love-removebg-preview.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');

        navigate('/login');
    };
    return (
        <nav class="navbar gradient-custom">
            <div class="container-fluid">
            <img src={love} alt="" width="60" height="64" class="d-inline-block align-text-top"/>
            <form class="d-flex">
                <button class="btn btn-outline-light btn-lg px-5" onClick={handleLogout}>Déconnecter</button>
            </form>
            </div>
        </nav>
    );
};

export default Navbar;