import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  const login = (username, password) => {
    if (username === 'admin@gmail.com' && password === 'admin123') {
      setRole('admin');
      setIsAuthenticated(true);
      return { username, role: 'admin' };
    } else if (username === 'user@gmail.com' && password === 'user123') {
      setRole('user');
      setIsAuthenticated(true);
      return { username, role: 'user' };
    } else if (username === 'administrator@gmail.com' && password === 'admin@123') {
      setRole('administrator');
      setIsAuthenticated(true);
      return { username, role: 'administrator' };
    } else {
      return null; // Return null for invalid credentials
    }
  };

  const logout = () => {
    setRole(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

