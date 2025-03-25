// src/pages/Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="p-6">
            {/* Header */}
            <header className="bg-red-700 text-white py-3 flex justify-between px-6">
                <div className="flex items-center space-x-4">
                    <i className='bx bx-phone'></i>
                    <a href="#" className="text-sm">1900 6756</a>
                    <span className="text-sm">Monday-Sunday: 9:00-18:00</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/signup" className="text-sm">Sign Up</a>
                    <a href="/login" className="text-sm">Login</a>
                    <button id="cart-btn" className="relative">
                        <i className='bx bx-cart'></i>
                        <span id="cart-count" className="absolute top-0 right-0 bg-white text-red-700 text-xs rounded-full px-1">0</span>
                    </button>
                </div>
            </header>
            
            {/* Navbar */}
            <nav className="bg-white shadow-md py-3">
                <ul className="flex justify-center space-x-6 font-semibold">
                    <li><a href="/" className="hover:text-red-700">HOME PAGE</a></li>
                    <li><a href="/sale" className="hover:text-red-700">SALES PRODUCTS</a></li>
                    <li><a href="/news" className="hover:text-red-700">NEWS</a></li>
                    <li><a href="/cart" className="hover:text-red-700">SHOPPING CART</a></li>
                </ul>
            </nav>
            
            {/* Slider */}
            <div className="w-full flex justify-center my-6">
                <div className="w-3/4">
                    <img src="/image.png" alt="Slider 1" className="w-full" />
                    <div className="text-center mt-2">
                        <a href="#" className="text-blue-500">View More</a>
                    </div>
                </div>
            </div>
            
            {/* Product List */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-center">Products On Sale</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {[...Array(9).keys()].map(i => (
                        <div key={i} className="border p-4 text-center">
                            <img src={`/image${i+1}.png`} alt={`Product ${i+1}`} className="mx-auto h-40" />
                            <h3 className="text-lg font-semibold mt-2">Product {i+1}</h3>
                            <p className="text-red-500 font-bold">{(i+1) * 50}.000đ</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Footer */}
            <footer className="bg-gray-800 text-white p-6 text-center">
                <p>&copy; 2025 Spotify Clone. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
