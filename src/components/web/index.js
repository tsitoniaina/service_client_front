// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';

const Home = () => {

    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem('authToken');

    //     navigate('/login');
    // };
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='justify-content-center'>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is the home page.</p>
                    {/* <button onClick={handleLogout}>Déconnecter</button> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
