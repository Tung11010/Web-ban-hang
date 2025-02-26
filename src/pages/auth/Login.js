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
            alert("Tài khoản hoặc mật khẩu không đúng!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Đăng nhập</h2>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Tên đăng nhập" 
                        className="w-full p-2 border rounded mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Mật khẩu" 
                        className="w-full p-2 border rounded mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" 
                        onChange={handleChange} 
                        required 
                    />

                    <div className="text-right mb-3">
                        <a href="#" className="text-sm text-gray-500 hover:text-red-500">Quên mật khẩu?</a>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Đăng nhập
                    </button>
                </form>

                {/* Chưa có tài khoản? Đăng ký ngay */}
                <p className="text-center text-gray-600 mt-4">
                    Chưa có tài khoản?{" "}
                    <a 
                        href="/signup" 
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Đăng ký ngay
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
