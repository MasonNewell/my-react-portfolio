import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ListGroup, Container } from "react-bootstrap";
import "../styles/navbar.css";
import resume from "../utils/MasonNewell.pdf";

function Navigation() {
  return (
    <>
      <nav className="bg-dark p-2">
        <Container className="d-flex justify-content-between custom-nav">
          <ListGroup horizontal>
            <ListGroup.Item className="bg-dark border-0">
              <Link to="/" className="text-decoration-none text-white">
                Mason Newell
              </Link>
            </ListGroup.Item>
          </ListGroup>
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
        </Container>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
