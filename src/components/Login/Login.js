import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import '../../assets/css/style.css';
import love from '../../assets/images/love-removebg-preview.png';

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
            <form onSubmit={handleSubmit} class="vh-100 bg gradient-custom">
                <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    {/* <div class="col-12 col-md-8 col-lg-6 col-xl-5"> */}
                    <div className={`col-12 col-md-8 col-lg-6 col-xl-5 ${email && password ? 'with-bg' : ''}`}>
                    <div class="card bg-dark text-white" >
                        <div class="card-body p-5 text-center">
            
                        <div class="mb-md-5 mt-md-4 pb-5">
            
                            <img src={love} alt="Background" className="lv-image" />
                            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                            <p class="text-white-50 mb-5">Please enter your login and password!</p>
            
                            <div data-mdb-input-init class="form-outline form-white mb-4">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  class="form-control form-control-lg" />
                            <label class="form-label text-end" for="typeEmailX">Email</label>
                            </div>
            
                            <div data-mdb-input-init class="form-outline form-white mb-4">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required  class="form-control form-control-lg" />
                            <label class="form-label" for="typePasswordX">Password</label>
                            </div>
            
                            <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
            
                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                            {message && <p>{message}</p>}
                        </div>
            
                        <div>
                            <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold"> <Link to='/singin'>Sign Up</Link></a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>


        </div>
    );
};

export default LoginForm;
