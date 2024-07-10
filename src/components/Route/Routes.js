import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../Login/Login';
import CreateUser from '../User/createUser';
import Home from '../web/index';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/singin" element={<CreateUser />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
