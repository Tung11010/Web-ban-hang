import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md py-3">
            <ul className="flex justify-center space-x-6 font-semibold">
                <li><a href="/" className="hover:text-red-700">HOME PAGE</a></li>
                <li><a href="/sale" className="hover:text-red-700">SALES PRODUCTS</a></li>
                <li><a href="/news" className="hover:text-red-700">NEWS</a></li>
                <li><a href="/cart" className="hover:text-red-700">SHOPPING CART</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;