import React from 'react';
import { Button } from 'react-bootstrap';

const Logout = () => {
  const handleLogout = () => {
    // Clear the token from local storage or cookies
    localStorage.removeItem('token');
    
    // Redirect the user to the login page or another route
    // You can use react-router-dom's Redirect component for this
  };

  return (
    <div className="container">
      <Button onClick={handleLogout} variant="danger">Logout</Button>
    </div>
  );
};

export default Logout;
