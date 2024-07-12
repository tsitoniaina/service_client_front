import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
let urlBack=process.env.REACT_APP_BACK_URL;
console.log('urlBack',urlBack);

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

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
            <form onSubmit={handleSubmit} class="vh-100 bg gradient-custom">
                <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    {/* <div class="col-12 col-md-8 col-lg-6 col-xl-5"> */}
                    <div className={`col-12 col-md-8 col-lg-6 col-xl-5 ${email && password ? 'with-bg' : ''}`}>
                    <div class="card bg-dark text-white" >
                        <div class="card-body p-5 text-center">
            
                        <div class="mb-md-5 mt-md-4 pb-5">
            
                            <img src={love} alt="Background" className="lv-image" />
                            <h2 class="fw-bold mb-2 text-uppercase">Sign up</h2>
                            <p class="text-white-50 mb-5">Please enter your login and password!</p>
            
                            <div data-mdb-input-init class="form-outline form-white mb-4">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  class="form-control form-control-lg" />
                            <label class="form-label text-end" for="typeEmailX">Email</label>
                            </div>
            
                            <div data-mdb-input-init class="form-outline form-white mb-4">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required  class="form-control form-control-lg" />
                            <label class="form-label" for="typePasswordX">Password</label>
                            </div>

                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Sing up</button>
                            {message && <p>{message}</p>}
                        </div>
                        <div>
                            <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold"> <Link to='/login'>Se connecter</Link></a>
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

export default CreateUser;
