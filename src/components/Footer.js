
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Quick Links */}
                <div>
                    <h3 className="text-pink-500 font-bold mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">about</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">products</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">review</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">contact</a></li>
                    </ul>
                </div>

                {/* Extra Links */}
                <div>
                    <h3 className="text-pink-500 font-bold mb-4">EXTRA LINKS</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">my account</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">my order</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">my favorite</a></li>
                    </ul>
                </div>

                {/* Locations */}
                <div>
                    <h3 className="text-pink-500 font-bold mb-4">LOCATIONS</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">india</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">USA</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Japan</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">France</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-pink-500 font-bold mb-4">CONTACT INFO</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">+03-836-290-03</li>
                        <li className="text-gray-400">tungndblh01085@fpt.edu.vn</li>
                        <li className="text-gray-400">mumbai, india - 400104</li>
                    </ul>
                    {/* Payment Icons */}
                    <div className="mt-4 flex justify-start space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                        
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center border-t border-gray-700 pt-4">
                <p>© 2025 Spotify Clone. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;