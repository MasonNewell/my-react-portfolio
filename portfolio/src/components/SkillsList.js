import React from "react";
import { Container, ListGroup } from "react-bootstrap";

function SkillsList() {
  return (
    <Container className="d-flex justify-content-center text-center">
      <ListGroup>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Node</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>RestAPI</ListGroup.Item>
        <ListGroup.Item>jQuery</ListGroup.Item>
        <ListGroup.Item>MySQL with Sequelize</ListGroup.Item>
        <ListGroup.Item>NoSQL with MongoDB/Mongoose</ListGroup.Item>
        <ListGroup.Item>IndexedDB</ListGroup.Item>
        <ListGroup.Item>GraphQL</ListGroup.Item>
        <ListGroup.Item>Handlebars</ListGroup.Item>
        <ListGroup.Item>Bootsrap</ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default SkillsList;
