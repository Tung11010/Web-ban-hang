import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SalesProducts from './pages/SalesProducts';
import News from './pages/News';
import ShoppingCart from './pages/ShoppingCart';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sale" element={<SalesProducts />} />
                <Route path="/news" element={<News />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={
                    <PrivateRoute>
                        <AdminDashboard />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
