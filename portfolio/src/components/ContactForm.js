import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { validateName, validateEmail, validateMessage } from "../utils/helpers";
import emailjs from "emailjs-com";

function ContactForm() {
  // Name, Email, Message
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Error
  const [errorMessage, setErrorMessage] = useState("");

  // Form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Copy old object, change a key value pair
    const newInput = {
      ...inputFields,
      [name]: value,
    };
    setInputFields(newInput);
  };

  //   Form submit
  const handleFormSubmit = (e) => {
    console.log(inputFields);
    e.preventDefault();
    // Validate fields
    if (!validateName(inputFields.name)) {
      setErrorMessage("Name required.");
      return;
    }
    if (!validateEmail(inputFields.email)) {
      setErrorMessage("Invalid email address.");
      return;
    }
    if (!validateMessage(inputFields.message)) {
      setErrorMessage("Message field required.");
      return;
    }

    emailjs.sendForm("gmail", "email_template", e.target, process.env.REACT_APP_USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // Clear fields
    setInputFields({
      name: "",
      email: "",
      message: "",
    });
    setErrorMessage("");
  };

  return (
    <>
      <Container className="my-4 border border-secondary p-2">
        <h2 className="text-center">Contact</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Your Name:</Form.Label>
            <input
              value={inputFields.name}
              className="form-control mb-3"
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your Email:</Form.Label>
            <input
              value={inputFields.email}
              className="form-control mb-3"
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your Message:</Form.Label>
            <input
              value={inputFields.message}
              className="form-control mb-3"
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
            />
          </Form.Group>
          <div>
            <p>{errorMessage}</p>
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-dark" value="send message"></input>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;
