// src/pages/SalesProducts.js
import React from 'react';
import { Link } from 'react-router-dom';

const SalesProducts = () => {
    const products = [
        { id: 1, name: "Chicken thighs fried in butter", price: "60.000đ", discount: "-6%", img: "/image1.png" },
        { id: 2, name: "Spicy cheese grilled chicken rice", price: "65.000đ", discount: "", img: "/image2.png" },
        { id: 3, name: "Kimchi fried rice", price: "250.000đ", discount: "-11%", img: "/image3.png" },
        { id: 4, name: "Bibimbap", price: "280.000đ", discount: "-13%", img: "/image4.png" },
        { id: 5, name: "Chicken thighs fried in butter", price: "60.000đ", discount: "-6%", img: "/image5.png" },
        { id: 6, name: "Spicy cheese grilled chicken rice", price: "65.000đ", discount: "", img: "/image6.png" },
        { id: 7, name: "Kimchi fried rice", price: "250.000đ", discount: "-11%", img: "/image7.png" },
        { id: 8, name: "Bibimbap", price: "280.000đ", discount: "-13%", img: "/image8.png" }
    ];

    return (
        <div className="bg-gray-100 font-sans">
            {/* Header Section */}
            <header className="bg-red-700 text-white py-3 flex justify-between px-6 items-center">
                <div className="flex items-center space-x-4">
                    <i className='bx bx-phone text-xl'></i>
                    <span className="text-sm font-bold">1900 6756</span>
                    <span className="text-sm">Monday-Sunday: 9:00-18:00</span>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/signup" className="text-sm hover:underline">Sign Up</Link>
                    <Link to="/login" className="text-sm hover:underline">Login</Link>
                    <i className='bx bx-search text-xl cursor-pointer'></i>
                    <i className='bx bx-shopping-bag text-xl cursor-pointer'></i>
                </div>
            </header>

            {/* Navbar Section */}
            <nav className="bg-white shadow-md py-3">
                <ul className="flex justify-center space-x-8 font-bold text-lg">
                    <li><Link to="/" className="hover:text-red-700">HOME PAGE</Link></li>
                    <li><Link to="/sale" className="hover:text-red-700">SALES PRODUCTS</Link></li>
                    <li><Link to="/news" className="hover:text-red-700">NEWS</Link></li>
                    <li><Link to="/cart" className="hover:text-red-700">SHOPPING CART</Link></li>
                </ul>
            </nav>

            {/* Banner Section */}
            <div className="relative w-full h-80">
                <img 
                    src="/image.png" 
                    alt="Featured Products" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-red-500">FEATURED PRODUCTS</h1>
                    <p className="text-lg">Home / Featured products</p>
                </div>
            </div>
            
            {/* Products Section */}
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white border rounded-lg p-4 shadow-lg relative hover:shadow-xl transition duration-300">
                            {product.discount && (
                                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                    {product.discount}
                                </span>
                            )}
                            <img 
                                src={product.img} 
                                alt={product.name} 
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-semibold mt-2 text-center text-gray-800">{product.name}</h3>
                            <p className="text-red-500 font-bold text-center mt-1">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesProducts;
