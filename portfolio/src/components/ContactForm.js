import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
    <div>
      <Container className="my-4">
        <form onSubmit={handleFormSubmit} className="form">
          <input
            value={inputFields.name}
            className="form-control mb-3"
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={inputFields.email}
            className="form-control mb-3"
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={inputFields.message}
            className="form-control mb-3"
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <div>
            <p>{errorMessage}</p>
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-dark" value="send message"></input>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default ContactForm;
