// src/pages/Home/HomePage.js

import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const { currentUser, role } = useAuth(); // Get current user and role from AuthContext

  const welcomeMessage = {
    admin: 'Welcome back, Admin! Here’s what’s happening today.',
    administrator: 'Welcome, Administrator! Check the system status below.',
    user: 'Hello! Here’s what’s happening in your workspace.',
  };

  return (
   
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {currentUser ? `Hi, ${currentUser.name}!` : 'Welcome!'}
          </h2>
          <p className="text-gray-600">
            {welcomeMessage[role] || 'Welcome to the system.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* Section for different widgets/cards */}
          <div className="bg-blue-50 p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-600">Tasks Overview</h3>
            <p className="text-gray-700">
              You have 3 ongoing tasks and 5 completed tasks.
            </p>
          </div>

          {role === 'admin' || role === 'administrator' ? (
            <div className="bg-green-50 p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-green-600">Manage Users</h3>
              <p className="text-gray-700">
                Click to view and manage all users in the system.
              </p>
            </div>
          ) : null}

          <div className="bg-yellow-50 p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-yellow-600">Notifications</h3>
            <p className="text-gray-700">
              You have 2 unread messages and 1 new notification.
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-purple-600">Your Profile</h3>
            <p className="text-gray-700">
              View or update your profile details.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/task"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View My Tasks
          </Link>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
