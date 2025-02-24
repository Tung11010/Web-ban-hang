import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.role !== "admin") {
        return <Navigate to="/login" replace />; // Chuyển hướng đến Login nếu không phải Admin
    }

    return children;
};

export default PrivateRoute;