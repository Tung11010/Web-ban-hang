import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <Header />
            <Navbar />
            <div className="container mx-auto p-4">
                <Slider />
                <h2 className="text-3xl font-bold text-center mt-10">ON SALE</h2>
                <div className="border-b-4 border-red-500 w-16 mx-auto my-4"></div>
                <ProductList />
            </div>
            <Footer />
        </div>
    );
};

export default Home;