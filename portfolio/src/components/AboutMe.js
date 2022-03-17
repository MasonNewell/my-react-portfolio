import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Portrait from "../images/portrait.jpg";

function AboutMe() {
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} md={12}>
          <img src={Portrait}></img>
        </Col>

        <Col lg={6} md={12}>
          <h5>About Me</h5>
          <p>
            Web Developer who loves solving difficult problems and finding efficient ways to
            complete tasks. I have experience working with servers, databases, and other backend
            technologies. I enjoy creating a seamless user experience through a detailed and
            efficient back-end while creating a aesthetically pleasing front-end presentation to the
            user. I enjoy learning new frameworks and libraries on my free time as well as
            challenging myself to do something new.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
