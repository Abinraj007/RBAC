import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';  // Import to navigate and check location
import { useAuth } from '../../contexts/AuthContext';  // Import authentication context

const ProtectedRoute = ({ element, requiredRoles }) => {
  const { isAuthenticated, role } = useAuth();  // Access auth state and role from context
  const location = useLocation();  // Get current location (for redirecting after login)

  // If the user is not authenticated or doesn't have the required role
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If the user doesn't have one of the required roles
  if (requiredRoles && !requiredRoles.includes(role)) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  // If the user passes the checks, render the requested element
  return element;
};

export default ProtectedRoute;
