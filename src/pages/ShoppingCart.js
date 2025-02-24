import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: "Chicken thighs fried in butter", price: "60.000đ", img: "images/sanpham1.png", quantity: 1 },
        { id: 2, name: "Spicy cheese grilled chicken rice", price: "65.000đ", img: "images/sanpham2.jpg", quantity: 1 },
        { id: 3, name: "Kimchi fried rice", price: "250.000đ", img: "images/sanpham3.png", quantity: 1 },
        { id: 1, name: "Chicken thighs fried in butter", price: "60.000đ", img: "images/sanpham1.png", quantity: 1 },
        { id: 2, name: "Spicy cheese grilled chicken rice", price: "65.000đ", img: "images/sanpham2.jpg", quantity: 1 },
        { id: 3, name: "Kimchi fried rice", price: "250.000đ", img: "images/sanpham3.png", quantity: 1 },
        { id: 1, name: "Chicken thighs fried in butter", price: "60.000đ", img: "images/sanpham1.png", quantity: 1 },
        { id: 2, name: "Spicy cheese grilled chicken rice", price: "65.000đ", img: "images/sanpham2.jpg", quantity: 1 },
        { id: 3, name: "Kimchi fried rice", price: "250.000đ", img: "images/sanpham3.png", quantity: 1 }
    ]);

    const increaseQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Header Section */}
            <header className="bg-red-700 text-white py-3 flex justify-between px-6 items-center">
                <div className="flex items-center space-x-4">
                    <i className='bx bx-phone text-xl'></i>
                    <span className="text-sm font-bold">1900 12345</span>
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
                <img src="images/cart-banner.jpg" alt="Shopping Cart" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-red-500">Your Shopping Cart</h1>
                </div>
            </div>

            {/* Shopping Cart Section */}
            <div className="container mx-auto p-6">
                {cart.length === 0 ? (
                    <p className="text-center text-lg font-semibold">Your cart is empty.</p>
                ) : (
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between border-b py-4">
                                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                <div className="text-lg font-semibold">{item.name}</div>
                                <div className="flex items-center">
                                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-300">-</button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-300">+</button>
                                </div>
                                <p className="text-red-500 font-bold">{item.price}</p>
                                <button onClick={() => removeItem(item.id)} className="text-red-700 font-semibold">Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;