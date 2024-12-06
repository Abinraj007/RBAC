import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UserManagementPage = () => {
  const users = useSelector((state) => state.users); // Fetch users from Redux store
  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">User Management</h1>

      {/* Search Bar */}
      <div className="mb-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search users by name or email..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition duration-300"
                >
                  <td className="py-3 px-6 text-sm">{user.id}</td>
                  <td className="py-3 px-6 text-sm font-medium">{user.name}</td>
                  <td className="py-3 px-6 text-sm">{user.email}</td>
                  <td className="py-3 px-6 text-sm">{user.role}</td>
                  <td className="py-3 px-6 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-sm">
                    <div className="flex space-x-4">
                      <button className="text-blue-500 hover:text-blue-700 font-semibold">
                        Edit
                      </button>
                      <button
                        className={`${
                          user.status === 'Active' ? 'text-red-500' : 'text-green-500'
                        } hover:text-red-700 font-semibold`}
                      >
                        {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagementPage;
