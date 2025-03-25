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

    const [activeSection, setActiveSection] = useState("dashboard"); // Mặc định là trang chủ

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

    const dailyData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            { label: 'Daily Sales', data: [10, 20, 15, 30, 25, 40, 35], backgroundColor: 'rgba(255, 99, 132, 0.5)' },
        ],
    };

    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            { label: 'Monthly Sales', data: [200, 250, 300, 400, 350, 500, 550, 600, 700, 650, 800, 900], backgroundColor: 'rgba(54, 162, 235, 0.5)' },
        ],
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Admin</h2>
                <ul>
                    <li className="p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => setActiveSection("dashboard")}>Trang chủ</li>
                    <li className="p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={() => setActiveSection("customers")}>Quản lý khách hàng</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {activeSection === "dashboard" && (
                    <>
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">Trang chủ</h1>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Đổi mật khẩu</button>
                        </div>

                        {/* Dashboard Cards */}
                        <div className="grid grid-cols-4 gap-4 mt-6">
                            <div className="bg-blue-500 text-white p-4 rounded shadow-md">
                                <h3 className="text-xl font-bold">2</h3>
                                <p>Hệ thống trang hệ thống</p>
                            </div>
                            <div className="bg-green-500 text-white p-4 rounded shadow-md">
                                <h3 className="text-xl font-bold">4</h3>
                                <p>Hệ thống sản phẩm</p>
                            </div>
                            <div className="bg-yellow-500 text-white p-4 rounded shadow-md">
                                <h3 className="text-xl font-bold">0</h3>
                                <p>Hệ thống đơn hàng</p>
                            </div>
                            <div className="bg-red-500 text-white p-4 rounded shadow-md">
                                <h3 className="text-xl font-bold">65</h3>
                                <p>Hệ thống khách ghi</p>
                            </div>
                        </div>

                        {/* Biểu đồ doanh số */}
                        <div className="mt-6 flex justify-around">
                            <div className="w-1/2">
                                <h2 className="text-lg font-bold mb-2">Daily Sales Report</h2>
                                <Bar data={dailyData} />
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-lg font-bold mb-2">Monthly Sales Report</h2>
                                <Bar data={monthlyData} />
                            </div>
                        </div>
                    </>
                )}

                {activeSection === "customers" && (
                    <div className="mt-6 bg-white p-4 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-4">Quản lý khách hàng</h2>

                        {/* Ô tìm kiếm khách hàng */}
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Tìm kiếm khách hàng..."
                                className="p-2 border border-gray-300 rounded w-1/3"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Bảng danh sách khách hàng */}
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
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
