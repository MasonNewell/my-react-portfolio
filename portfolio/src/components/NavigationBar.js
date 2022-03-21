import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/navbar.css";

function NavigationBar() {
  return (
    <>
      <Navbar collapseOnSelect className="custom-nav" expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mason Newell</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">About Me</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
