import { useState, useEffect, React } from "react";
import { Container, Col, Row, Offcanvas, Button } from "react-bootstrap";
import Portrait from "../images/portrait.jpg";
import "../styles/aboutMe.css";
import ContactForm from "./ContactForm";

function AboutMe() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="text-center about-me-container py-4">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img className="portrait" src={Portrait}></img>
          </Col>

          <Col lg={6} md={6} sm={12} className="my-5">
            <h5>About Me</h5>
            <p>
              Web Developer who loves solving difficult problems and finding efficient ways to
              complete tasks. I have experience working with servers, databases, and other backend
              technologies. I enjoy creating a seamless user experience through a detailed and
              efficient back-end while creating a aesthetically pleasing front-end presentation to
              the user. I enjoy learning new frameworks and libraries on my free time as well as
              challenging myself to do something new.
            </p>
            <Button variant="dark" onClick={handleShow}>
              Contact Me
            </Button>
          </Col>
        </Row>
        <Offcanvas show={show} onHide={handleClose} className="bg-secondary">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Contact</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ContactForm />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

export default AboutMe;
