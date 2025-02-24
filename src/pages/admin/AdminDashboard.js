import React from 'react';

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
            <p className="text-center text-gray-600">Welcome, {user.username}! You have admin access.</p>
            
            {/* Thêm bảng hiển thị danh sách khách hàng */}
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
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">1</td>
                            <td className="border border-gray-300 px-4 py-2">JohnDoe</td>
                            <td className="border border-gray-300 px-4 py-2">johndoe@example.com</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2</td>
                            <td className="border border-gray-300 px-4 py-2">JaneSmith</td>
                            <td className="border border-gray-300 px-4 py-2">janesmith@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
