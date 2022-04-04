import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import "../styles/skillsList.css";

function SkillsList() {
  return (
    // <Container className="d-flex justify-content-center text-center skills-container">
    //   <ListGroup horizontal={""} className="list-group-flush skills-list">
    //     <h4>Proficiencies</h4>
    //     <ListGroup.Item>React</ListGroup.Item>
    //     <ListGroup.Item>Node</ListGroup.Item>
    //     <ListGroup.Item>Express</ListGroup.Item>
    //     <ListGroup.Item>REST API</ListGroup.Item>
    //     <ListGroup.Item>jQuery</ListGroup.Item>
    //     <ListGroup.Item>MySQL with Sequelize</ListGroup.Item>
    //     <ListGroup.Item>NoSQL with MongoDB/Mongoose</ListGroup.Item>
    //     <ListGroup.Item>IndexedDB</ListGroup.Item>
    //     <ListGroup.Item>GraphQL</ListGroup.Item>
    //     <ListGroup.Item>Handlebars</ListGroup.Item>
    //     <ListGroup.Item>Bootstrap</ListGroup.Item>
    //   </ListGroup>
    // </Container>

    <Container>
      <Row className="justify-content-around text-center">
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          React
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          Node
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          Express
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          REST API
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          jQuery
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          MySQL with Sequelize
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          NoSQL with MongoDB/Mongoose
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          IndexedDB
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          GraphQL
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          Handlebars
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          Bootstrap
        </Col>
      </Row>
    </Container>
  );
}

export default SkillsList;
