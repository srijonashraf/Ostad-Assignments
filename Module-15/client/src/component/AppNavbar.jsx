import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/save">
            Registration
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
