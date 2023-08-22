import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/auth/login/', {
        email: email,
        password: password
      });
      
      // Assuming the backend returns a token upon successful login
      const token = response.data.token;

      // Store the token in local storage or a cookie
      localStorage.setItem('token', token);

      // Redirect the user to a protected route
      // You can use react-router-dom's Redirect component for this
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
