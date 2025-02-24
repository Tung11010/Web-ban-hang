// src/pages/admin/AdminDashboard.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [searchQuery, setSearchQuery] = useState('');
    const [customers, setCustomers] = useState([
        { id: 1, username: "JohnDoe", email: "johndoe@example.com" },
        { id: 2, username: "JaneSmith", email: "janesmith@example.com" }
    ]);

    const handleDelete = (id) => {
        const updatedCustomers = customers.filter(customer => customer.id !== id);
        setCustomers(updatedCustomers);
    };

    const handleEdit = (id) => {
        const newUsername = prompt("Enter new username:");
        const newEmail = prompt("Enter new email:");
        if (newUsername && newEmail) {
            setCustomers(customers.map(customer => 
                customer.id === id ? { ...customer, username: newUsername, email: newEmail } : customer
            ));
        }
    };

    const filteredCustomers = customers.filter(customer =>
        customer.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Dữ liệu giả lập số lượng người mua hàng theo ngày
    const dailyData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Daily Sales',
                data: [10, 20, 15, 30, 25, 40, 35],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    // Dữ liệu giả lập số lượng người mua hàng theo tháng
    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [200, 250, 300, 400, 350, 500, 550, 600, 700, 650, 800, 900],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome, {user.username}! You have admin access.</p>
            
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
            
            {/* Bảng danh sách khách hàng với chức năng sửa và xóa */}
            <div className="mt-6">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Username</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.map(customer => (
                            <tr key={customer.id}>
                                <td className="border border-gray-300 px-4 py-2">{customer.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.username}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleEdit(customer.id)}>Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(customer.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Biểu đồ doanh số theo ngày */}
            <div className="mt-6 flex justify-center">
                <div className="w-1/2">
                    <h2 className="text-lg font-bold mb-2">Daily Sales Report</h2>
                    <Bar data={dailyData} />
                </div>
            </div>
            
            {/* Biểu đồ doanh số theo tháng */}
            <div className="mt-6 flex justify-center">
                <div className="w-1/2">
                    <h2 className="text-lg font-bold mb-2">Monthly Sales Report</h2>
                    <Bar data={monthlyData} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;