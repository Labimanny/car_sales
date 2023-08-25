// PrivateRoute.js

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token is present

  return (
   <Routes>
        <Route
        {...rest}
        render={(props) =>
            isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Navigate to="/login" />
            )
        }
        />
    </Routes>
  );
};

export default PrivateRoute;
