import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from './login';
import Logout from './logout';
import ChangePassword from './ChangePassword';

function App() {
  return (
    <Router>
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

      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/change-password" component={ChangePassword} />
      <Redirect from="/" to="/login" />
    </Router>
  );
}

export default App;
