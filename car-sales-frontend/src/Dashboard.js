// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Welcome to the Dashboard</h2>
      <Link to="/add-car">
        <Button variant="primary">Add Car</Button>
      </Link>
      <Link to="/car-list">
        <Button variant="info">Car List</Button>
      </Link>
      <Link to="/add-sale">
        <Button variant="success">Add Sale</Button>
      </Link>
      <Link to="/sales-list">
        <Button variant="warning">Sales List</Button>
      </Link>
      <Link to="/change-password">
        <Button variant="danger">Change Password</Button>
      </Link>
    </div>
  );
};

export default Dashboard;
