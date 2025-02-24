// src/pages/auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Lấy thông tin tài khoản đã đăng ký
        const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

        // Kiểm tra tài khoản admin
        if (formData.username === "admin" && formData.password === "123") {
            const adminUser = { username: "Admin", role: "admin" };
            localStorage.setItem("user", JSON.stringify(adminUser));
            navigate("/admin");
        } else if (
            registeredUser &&
            formData.username === registeredUser.username &&
            formData.password === registeredUser.password
        ) {
            // Kiểm tra tài khoản khách hàng
            const customerUser = { username: registeredUser.username, role: "user" };
            localStorage.setItem("user", JSON.stringify(customerUser));
            navigate("/");
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded mb-3" onChange={handleChange} required />
                    <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;