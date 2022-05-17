import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/navbar.css";
import resume from "../utils/MasonNewell.pdf";
function NavigationBar() {
  return (
    <>
      <Navbar collapseOnSelect className="custom-nav" expand="md" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="nav-brand nav-link text-white">
            Mason Newell
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
              <Nav.Link href={resume} download="MasonNewell.pdf" target="_blank">
                PDF Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
