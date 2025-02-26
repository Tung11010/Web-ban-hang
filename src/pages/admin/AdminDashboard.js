import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost/backend/get_users.php");
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const filteredCustomers = customers.filter(customer =>
        customer.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>

            {/* Ô tìm kiếm khách hàng */}
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Search by username..."
                    className="p-2 border border-gray-300 rounded w-1/3"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Bảng danh sách khách hàng */}
            <div className="mt-6">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Username</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.map(customer => (
                            <tr key={customer.id}>
                                <td className="border border-gray-300 px-4 py-2">{customer.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.username}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
