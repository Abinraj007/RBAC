import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'admin@gmail.com',
    role: 'admin',
    status: 'Active',
    responsibilities: ['Manage Admin Permissions', 'Review User Reports'],
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'user@gmail.com',
    role: 'user',
    status: 'Active',
    responsibilities: ['Complete Task A', 'Update Profile'],
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    email: 'administrator@gmail.com',
    role: 'administrator',
    status: 'Active',
    responsibilities: ['Set Up New Users', 'Review System Settings'],
    image: 'https://via.placeholder.com/100'
  }
];

const ProfilePage = () => {
  const { currentUser } = useAuth(); // Fetch the current authenticated user's information

  // Find the user in the mock data based on the current user's email
  const user = mockUsers.find((u) => u.email === 'admin@gmail.com'|| u.email === 'user@gmail.com'|| u.email === 'admininstrator@gmail.com' );

  if (!user) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="text-red-500">User data not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Role</h3>
          <p className="text-gray-700">{user.role}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Status</h3>
          <p
            className={`inline-block px-3 py-1 rounded ${
              user.status === 'Active'
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {user.status}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Responsibilities</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {user.responsibilities && user.responsibilities.length > 0 ? (
              user.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))
            ) : (
              <li>No responsibilities assigned.</li>
            )}
          </ul>
        </div>

        <div className="mt-6">
          <button
            onClick={() => alert('Edit Profile functionality coming soon!')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
