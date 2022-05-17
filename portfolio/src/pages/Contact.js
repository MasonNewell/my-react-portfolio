import ContactForm from "../components/ContactForm";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
