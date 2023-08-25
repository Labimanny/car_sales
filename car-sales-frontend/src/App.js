import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from './login';
import Logout from './logout';
import ChangePassword from './ChangePassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import AddCar from './AddCar';
import CarList from './CarList';
import AddSale from './AddSale';
import SalesList from './SalesList';



function App() {
  return (
    <><Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Car Sales App</Navbar.Brand>
          <Nav className="ml-auto">
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
      </Routes>
    </Router>
    <Router>
        <Routes>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add-car" component={AddCar} />
          <PrivateRoute path="/car-list" component={CarList} />
          <PrivateRoute path="/add-sale" component={AddSale} />
          <PrivateRoute path="/sales-list" component={SalesList} />
          <PrivateRoute path="/change-password" component={ChangePassword} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router></>

  );
}

export default App;
