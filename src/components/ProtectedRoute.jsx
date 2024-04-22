import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  console.log(user);

  // Check if the user exists, if not, redirect to the homepage
  if (!user) {
    return <Navigate to='/' />;
  }

  // Render the children if the user is authenticated
  return children;
}

export default ProtectedRoute;
