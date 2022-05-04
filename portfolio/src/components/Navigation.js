import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ListGroup, Container, Navbar, Nav } from "react-bootstrap";
import "../styles/navbar.css";
import resume from "../utils/MasonNewell.pdf";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect className="custom-nav" expand="md" bg="dark" variant="dark">
        <Container className="d-flex justify-content-between custom-nav">
          <ListGroup horizontal>
            <ListGroup.Item className="bg-dark border-0">
              <Link to="/" className="text-decoration-none text-white">
                Mason Newell
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <ListGroup horizontal>
              <ListGroup.Item className="bg-dark border-0">
                <Link to="/contact" className="text-decoration-none text-white">
                  Contact
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <Link to="/portfolio" className="text-decoration-none text-white">
                  Portfolio
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0">
                <a
                  href={resume}
                  download="MasonNewell.pdf"
                  target="_blank"
                  className="text-decoration-none text-white"
                >
                  PDF Resume
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
