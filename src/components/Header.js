import React from 'react';

const Header = () => {
    return (
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
    );
};

export default Header;
