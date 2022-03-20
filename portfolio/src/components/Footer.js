import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="my-5 p-2">
      <div className="fixed-bottom d-flex justify-content-center bg-white px-4">
        <a href="https://github.com/MasonNewell" target="_blank">
          <FaGithub
            size="2.5rem"
            color="black"
            onMouseOver={({ target }) => (target.style.color = "gray")}
            onMouseOut={({ target }) => (target.style.color = "black")}
          />
        </a>
        <a href="https://www.linkedin.com/in/mason-newell-a730ab21b/" target="_blank">
          <FaLinkedin
            size="2.5rem"
            onMouseOver={({ target }) => (target.style.color = "rgb(40, 140, 178)")}
            onMouseOut={({ target }) => (target.style.color = "rgb(40, 103, 178)")}
          />
        </a>
      </div>
    </Container>
  );
}
