import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import { useAuth } from '../../contexts/AuthContext';   // Import the authentication context
import { FaUser, FaCog, FaSignOutAlt, FaTachometerAlt, FaChartBar } from 'react-icons/fa';  // Import icons

const AdministratorNavbar = () => {
  const { logout } = useAuth();  // Access the logout function from context
  const navigate = useNavigate();  // Hook to navigate programmatically
  const [dropdownOpen, setDropdownOpen] = useState(false);  // State for profile dropdown visibility

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Logout function
  const handleLogout = () => {
    logout();  // Clear authentication data
    navigate('/login');  // Redirect user to login page after logout
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-white text-2xl font-bold flex items-center space-x-2">
          <FaTachometerAlt className="text-white text-3xl" />
          <Link to="/" className="hover:text-blue-200 transition duration-300">
            Administrator Panel
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6">
          <Link
            to="/administrator-dashboard"
            className="text-white hover:text-blue-200 transition duration-300 flex items-center space-x-2"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/users"
            className="text-white hover:text-blue-200 transition duration-300 flex items-center space-x-2"
          >
            <FaUser />
            <span>User Management</span>
          </Link>
          <Link
            to="/reports"
            className="text-white hover:text-blue-200 transition duration-300 flex items-center space-x-2"
          >
            <FaChartBar />
            <span>Reports</span>
          </Link>
          <Link
            to="/settings"
            className="text-white hover:text-blue-200 transition duration-300 flex items-center space-x-2"
          >
            <FaCog />
            <span>Settings</span>
          </Link>
        </div>

        {/* Profile / Logout */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white flex items-center space-x-2 hover:text-blue-200 transition duration-300"
          >
            <span>Admin Name</span>
            <FaUser />
          </button>

          {/* Profile Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48 transition-all duration-300">
              <ul>
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                  >
                    <FaUser className="inline mr-2" />
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200 transition duration-300"
                  >
                    <FaSignOutAlt className="inline mr-2" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdministratorNavbar;
