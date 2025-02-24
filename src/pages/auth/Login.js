import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Logged In:', formData);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">Login</button>
                </form>
                <p className="mt-4 text-center">Don't have an account? <Link to="/signup" className="text-red-500">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;