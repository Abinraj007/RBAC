import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink for active link styles
import { useAuth } from '../../contexts/AuthContext';  // Import AuthContext to handle logout
import { FaTachometerAlt, FaUsersCog, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';  // Add icons for links

const AdminNavbar = () => {
  const { logout } = useAuth();  // Get logout function from context

  // Links available for admin
  const adminLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Manage Users', path: '/users', icon: <FaUsersCog /> },
    { name: 'Profile', path: '/profile', icon: <FaUserAlt /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Branding */}
        <div className="text-2xl font-bold">Admin Dashboard</div>

        {/* Links Section */}
        <ul className="flex space-x-6 items-center">
          {adminLinks.map((link) => (
            <li key={link.path} className="group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-3 rounded-lg transition duration-300 ease-in-out transform 
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

export default AdminNavbar;
