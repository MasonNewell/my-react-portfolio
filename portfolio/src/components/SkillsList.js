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
    <Container>
      <Row className="justify-content-around text-center p-2">
        <Col xs={12}>
          <h3>
            <TiCode />
            <br /> Skills & Technologies <br />
          </h3>
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
          React <FaReact />
        </Col>
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
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
        <Col sm={12} md={5} className="bg-dark text-white p-2 m-2">
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
