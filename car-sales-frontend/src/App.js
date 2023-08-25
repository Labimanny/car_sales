import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Logout from './logout';
import ChangePassword from './ChangePassword';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import AddCar from './AddCar';
import CarList from './CarList';
import AddSale from './AddSale';
import SalesList from './SalesList';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Car Sales App</Navbar.Brand>
          <Nav className="ml-auto navbar navbar-expand-lg bg-body-tertiary">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="/change-password">Change Password</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-car"
          element={
            <PrivateRoute>
              <AddCar />
            </PrivateRoute>
          }
        />
        <Route
          path="/car-list"
          element={
            <PrivateRoute>
              <CarList />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-sale"
          element={
            <PrivateRoute>
              <AddSale />
            </PrivateRoute>
          }
        />
        <Route
          path="/sales-list"
          element={
            <PrivateRoute>
              <SalesList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
