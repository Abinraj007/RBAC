import React from 'react';
import { useSelector } from 'react-redux';

const AdministratorDashboard = () => {
  const users = useSelector((state) => state.users); // Fetch users from Redux store

  // Separate users into admins and regular users based on role
  const admins = users.filter((user) =>
    ['admin'].includes(user.role)
  );
  const regularUsers = users.filter((user) => !['admin'].includes(user.role));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Administrator Dashboard</h1>

      {/* System Management Section */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-4">System Settings</h2>
          <p className="text-gray-600 mb-4">Configure system settings for optimal performance.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Go to Settings
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-4">View Reports</h2>
          <p className="text-gray-600 mb-4">Access detailed reports and analytics for insights.</p>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            View Reports
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>
          <p className="text-gray-600 mb-4">Track system usage and security logs.</p>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
            Access Logs
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-lg font-medium">Reports Generated</h3>
          <p className="text-2xl font-bold">34</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-lg font-medium">System Alerts</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* Admin Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Admins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={admin.profilePicture || '/default-profile.png'}
                  alt={admin.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{admin.name}</h3>
                  <p className="text-sm text-gray-600">{admin.email}</p>
                </div>
              </div>
              <p className="text-sm font-medium mb-4">Role: {admin.role}</p>
              <span
                className={`px-2 py-1 rounded ${admin.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
              >
                {admin.status}
              </span>
              <div className="mt-4 flex justify-between">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-green-500 hover:underline">Assign Task</button>
                <button className="text-red-500 hover:underline">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Users Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={user.profilePicture || '/default-profile.png'}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <p className="text-sm font-medium mb-4">Role: {user.role}</p>
              <span
                className={`px-2 py-1 rounded ${user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
              >
                {user.status}
              </span>
              <div className="mt-4 flex justify-between">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-green-500 hover:underline">Assign Task</button>
                <button className="text-red-500 hover:underline">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reports Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
        <ul className="list-disc pl-6 bg-white rounded-lg shadow-md p-6">
          <li>System Audit - October 2024</li>
          <li>User Activity Report - October 2024</li>
          <li>Security Compliance Report - Q3 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default AdministratorDashboard;
