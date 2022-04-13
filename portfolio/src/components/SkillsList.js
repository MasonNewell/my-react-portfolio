import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import "../styles/skillsList.css";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiZapier, SiJquery, SiGraphql, SiHandlebarsdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiCylinder } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { TiCode } from "react-icons/ti";

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
        <Col xs={12}>
          <h3>
            <TiCode />
            <br /> Skills & Technologies <br />
          </h3>
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          React <FaReact />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-2">
          Node <FaNodeJs />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          Express <SiExpress />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          REST API <SiZapier />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          jQuery <SiJquery />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          MySQL with Sequelize <GrMysql />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          NoSQL with MongoDB/Mongoose <BiCylinder />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          IndexedDB <FiDatabase />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          GraphQL <SiGraphql />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-3 m-1">
          Handlebars <SiHandlebarsdotjs />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          Bootstrap <FaBootstrap />
        </Col>
      </Row>
    </Container>
  );
}

export default SkillsList;
