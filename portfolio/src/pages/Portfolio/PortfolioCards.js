import React from "react";
import PortfolioList from "./PortfolioList";
import { Container, Row, Col, Card } from "react-bootstrap";

function PortfolioCards() {
  console.log(PortfolioList);

  return (
    <Container>
      <Row>
        {PortfolioList.map((item, index) => (
          <Col md={6} sm={12} key={index}>
            <Card>
              <Card.Img src={item.img} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PortfolioCards;