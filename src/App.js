// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import AdministratorDashboard from './pages/Dashboard/AdministratorDashboard';

import UserManagementPage from './pages/Users/UserManagementPage';
import ProfilePage from './pages/Profile/ProfilePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AdminNavbar from './components/Navbar/AdminNavbar';
import UserNavbar from './components/Navbar/UserNavbar';
import AdministratorNavbar from './components/Navbar/AdministratorNavbar';
import HomePage from './pages/UserPages/HomePage';
import UserTask from './pages/UserPages/UserTask';
import UserActivitiesPage from './pages/UserPages/UserActivitiesPage';
import AdminReports from './pages/Dashboard/AdminReports';
import AdminSettings from './pages/Dashboard/AdminSettings';

const App = () => {
  const { isAuthenticated, role } = useAuth();

  return (
    <BrowserRouter basename="/rbac">
    <Router>
      {isAuthenticated && (
        <>
          {role === 'admin' && <AdminNavbar />}
          {role === 'administrator' && <AdministratorNavbar />}
          {role === 'user' && <UserNavbar />}
        </>
      )}
      <Routes>
        {/* Public Route: Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* User Home Page: Accessible by all roles */}
        <Route
          path="/home"
          element={
            <ProtectedRoute element={<HomePage/>} requiredRoles={['user', 'admin', 'administrator']} />
          }
        />
         <Route
          path="/task"
          element={<ProtectedRoute element={<UserTask />} requiredRoles={['user']} />}
        />
         <Route
          path="/activities"
          element={<ProtectedRoute element={<UserActivitiesPage />} requiredRoles={['user']} />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<AdminDashboard />} requiredRoles={['admin']} />}
        />

        {/* Administrator Dashboard */}
        <Route
          path="/administrator-dashboard"
          element={<ProtectedRoute element={<AdministratorDashboard />} requiredRoles={['administrator']} />}
        />
        <Route
          path="/reports"
          element={<ProtectedRoute element={<AdminReports />} requiredRoles={['administrator']} />}
        />
         <Route
          path="/settings"
          element={<ProtectedRoute element={<AdminSettings />} requiredRoles={['administrator']} />}
        />

        {/* User Management Page */}
        <Route
          path="/users"
          element={<ProtectedRoute element={<UserManagementPage />} requiredRoles={['admin', 'administrator']} />}
        />

        {/* User Profile Page */}
        <Route
          path="/profile"
          element={<ProtectedRoute element={<ProfilePage />} requiredRoles={['user', 'admin', 'administrator']} />}
        />
      </Routes>
    </Router>
    </BrowserRouter>
  );
};

export default App;
