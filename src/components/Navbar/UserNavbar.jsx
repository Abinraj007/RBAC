import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink for active link styling
import { useAuth } from '../../contexts/AuthContext';  // Import AuthContext to get user role
import { FaHome, FaUser, FaListAlt, FaSignOutAlt } from 'react-icons/fa'; // Importing icons for links

const UserNavbar = () => {
  const { logout } = useAuth();  // Get logout function from context

  // Links available for users
  const userLinks = [
    { name: 'Home', path: '/home', icon: <FaHome /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
    { name: 'My Activities', path: '/activities', icon: <FaListAlt /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <div className="text-2xl font-bold">User Dashboard</div>

        {/* Links Section */}
        <ul className="flex space-x-6 items-center">
          {userLinks.map((link) => (
            <li key={link.path} className="group">
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center space-x-2 p-2 rounded-lg transition duration-300 ease-in-out transform 
                  ${isActive ? 'bg-blue-500 scale-105 underline' : 'hover:bg-blue-500 hover:scale-105'}`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-lg">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaSignOutAlt />
          <span className="text-lg">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
