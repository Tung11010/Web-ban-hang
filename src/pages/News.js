import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import Footer

const News = () => {
    const latestNews = [
        { id: 1, title: "Make delicious dried lemon chicken at home", date: "1/12/2023", img: "/new1.png" },
        { id: 2, title: "MewFood new phenomenon of \"Dried Chicken with Lemon Leaves\"", date: "5/12/2023", img: "/new2.png" },
        { id: 3, title: "How to choose fresh vegetables, tubers, and fruits that don't 'suck'", date: "9/12/2023", img: "/new3.png" }
    ];

    const featuredNews = [
        { id: 4, title: "MewFood new phenomenon of \"Dried Chicken with Lemon Leaves\"", date: "16/05/2023", img: "/new1.png", description: "Dried Chicken with Lemon Leaves retains the toughness and sweetness of each meat fiber without breaking. Prices are based on three types." },
        { id: 5, title: "How to choose fresh vegetables, tubers, and fruits that are not 'poisoned'", date: "16/05/2024", img: "/new2.png", description: "Learn how to pick the freshest and safest vegetables and fruits." },
        { id: 6, title: "Does eating a hamburger benefit your health?", date: "16/05/2024", img: "/new3.png", description: "Hamburgers contain proteins and vitamins, helping to maintain energy levels." }
    ];

    return (
        <div className="bg-gray-100 font-sans">
            {/* Header Section */}
            <header className="bg-red-700 text-white py-3 flex justify-between px-6 items-center">
                <div className="flex items-center space-x-4">
                    <i className='bx bx-phone text-xl'></i>
                    <span className="text-sm font-bold">1900 1234</span>
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
                <img src="/image.png" alt="News Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-red-500">PRODUCT PORTFOLIO</h1>
                    <p className="text-lg">Home page</p>
                </div>
            </div>
            
            {/* News Section */}
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Latest News */}
                <div className="bg-white p-4 border rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-red-500 pb-2">HOT NEWS</h2>
                    {latestNews.map(news => (
                        <div key={news.id} className="flex space-x-4 mb-4">
                            <img src={news.img} alt={news.title} className="w-16 h-16 object-cover rounded-md" />
                            <div>
                                <Link to="/news" className="text-blue-600 hover:underline text-sm">{news.title}</Link>
                                <p className="text-gray-500 text-xs flex items-center"><i className='bx bx-time mr-1'></i> {news.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured News */}
                <div className="md:col-span-2">
                    {featuredNews.map(news => (
                        <div key={news.id} className="bg-white p-4 border rounded-lg shadow-md mb-4">
                            <div className="flex space-x-4">
                                <img src={news.img} alt={news.title} className="w-32 h-32 object-cover rounded-md" />
                                <div>
                                    <h3 className="text-lg font-bold">{news.title}</h3>
                                    <p className="text-gray-500 text-sm flex items-center"><i className='bx bx-time mr-1'></i> {news.date}</p>
                                    <p className="text-gray-700 mt-2 text-sm">{news.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <Footer /> {/* Thêm footer vào cuối trang */}
        </div>
    );
};

export default News;
