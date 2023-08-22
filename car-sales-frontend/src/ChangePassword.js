import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    
    try {
      const response = await axios.post(
        '/api/auth/change-password/',
        {
          old_password: oldPassword,
          new_password: newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      // Handle success message or redirect
    } catch (error) {
      console.error('Change password error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Change Password</h2>
      <Form onSubmit={handleChangePassword}>
        <Form.Group controlId="oldPassword">
          <Form.Label>Old Password</Form.Label>
          <Form.Control type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary">Change Password</Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
