import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = sessionStorage.getItem("jwt"); // Get the JWT from sessionStorage

  return token ? element : <Navigate to="/login" state={{ from: window.location.pathname }} />;
};

export default PrivateRoute;
