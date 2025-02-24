import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Lưu tài khoản vào localStorage
        localStorage.setItem("registeredUser", JSON.stringify(formData));
        
        alert("Account created successfully! Please login.");
        navigate("/login");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
