import React, { useState } from 'react';
import { FaCheck, FaRegLightbulb, FaBell, FaPaintBrush } from 'react-icons/fa'; // Icons for settings

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general'); // To track active tab
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  // Handle Dark Mode Toggle
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle Email Notifications Toggle
  const handleEmailNotificationToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  // Handle Push Notifications Toggle
  const handlePushNotificationToggle = () => {
    setPushNotifications(!pushNotifications);
  };

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'} min-h-screen`}>
      <h1 className="text-3xl font-bold text-center mb-6">Administrator Settings</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('general')}
          className={`px-6 py-2 text-lg font-medium ${activeTab === 'general' ? 'bg-blue-600 text-white' : 'text-blue-600'}`}
        >
          General Settings
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-6 py-2 text-lg font-medium ${activeTab === 'notifications' ? 'bg-green-600 text-white' : 'text-green-600'}`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab('appearance')}
          className={`px-6 py-2 text-lg font-medium ${activeTab === 'appearance' ? 'bg-yellow-600 text-white' : 'text-yellow-600'}`}
        >
          Appearance
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {activeTab === 'general' && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="adminEmail" className="block text-sm font-medium">Admin Email</label>
                <input
                  type="email"
                  id="adminEmail"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter admin email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">Change Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter new password"
                />
              </div>
              <div className="mt-4 text-right">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaBell className="text-blue-500" />
                <label className="text-sm font-medium">Email Notifications</label>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={handleEmailNotificationToggle}
                  className="toggle-checkbox"
                />
              </div>
              <div className="flex items-center space-x-4">
                <FaBell className="text-green-500" />
                <label className="text-sm font-medium">Push Notifications</label>
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  onChange={handlePushNotificationToggle}
                  className="toggle-checkbox"
                />
              </div>
              <div className="mt-4 text-right">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                  Save Notifications
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appearance' && (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaRegLightbulb className="text-yellow-500" />
                <label className="text-sm font-medium">Dark Mode</label>
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={handleDarkModeToggle}
                  className="toggle-checkbox"
                />
              </div>
              <div className="mt-4 text-right">
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300">
                  Save Appearance
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reset and Log Out */}
      <div className="mt-8 flex justify-between">
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
          Reset Settings
        </button>
        <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
