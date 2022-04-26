import { useState, useEffect, React } from "react";
import SkillsList from "../components/SkillsList";
import AboutMe from "../components/AboutMe";
import ContactForm from "../components/ContactForm";
import { Offcanvas, Button } from "react-bootstrap";

function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <AboutMe />
      <SkillsList />
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose} className="bg-secondary">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContactForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Home;
