import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Debug: Kiểm tra dữ liệu trước khi gửi
        console.log("🔹 Login Data gửi đi:", formData);

        try {
            const response = await axios.post("http://localhost/backend/login.php", formData, {
                headers: { "Content-Type": "application/json" }
            });

            // Debug: Kiểm tra phản hồi từ API
            console.log("✅ API Response:", response.data);

            if (response.data.success) {
                alert("🎉 Login successful!");
                localStorage.setItem("user", JSON.stringify(response.data.user)); // Lưu user vào localStorage
                navigate("/"); // Chuyển hướng đến trang Home.js
            } else {
                alert("❌ Login failed: " + response.data.message);
            }
        } catch (error) {
            console.error("🚨 Lỗi đăng nhập:", error);

            if (error.response) {
                // Lỗi từ API (HTTP Response có lỗi)
                console.log("🔴 Lỗi phản hồi từ server:", error.response.data);
                alert("❌ Login failed: " + (error.response.data.message || "Server error."));
            } else if (error.request) {
                // Lỗi khi không thể kết nối đến API
                console.log("⚠️ Không thể kết nối tới API:", error.request);
                alert("🚨 Cannot connect to the server. Check if backend is running.");
            } else {
                // Lỗi không xác định
                alert("⚠️ Unexpected error occurred. Check console for details.");
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded mb-3"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded mb-3"
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
