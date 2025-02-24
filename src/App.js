import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Không dùng {} vì Home được export mặc định
import SalesProducts from './pages/SalesProducts';
import News from './pages/News';
import ShoppingCart from './pages/ShoppingCart';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sale" element={<SalesProducts />} />
                <Route path="/news" element={<News />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </Router>
    );
}

export default App;
