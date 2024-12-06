import React from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  // Fetch users from Redux store
  const users = useSelector((state) => state.users);

  // Count active and inactive users
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === 'Active').length;
  const inactiveUsers = users.filter((user) => user.status === 'Inactive').length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Add New User
          </button>
          <button className="p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
            View Reports
          </button>
          <button className="p-4 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out">
            Manage Permissions
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-medium">Active Users</h3>
            <p className="text-2xl font-bold">{activeUsers}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-medium">Inactive Users</h3>
            <p className="text-2xl font-bold">{inactiveUsers}</p>
          </div>
        </div>
      </div>

      {/* User List Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">User List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center">
                <img
                  src={user.image || 'https://via.placeholder.com/50'} // Default image if no image provided
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Role:</span>
                  <span className="text-gray-600">{user.role}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Status:</span>
                  <span
                    className={`px-2 py-1 rounded ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-around">
                <button className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                <button className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                <button className="text-yellow-500 hover:text-yellow-700 font-semibold">Assign Task</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
