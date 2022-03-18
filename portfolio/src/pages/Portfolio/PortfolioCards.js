import React from "react";
import PortfolioList from "./PortfolioList";
import { Container, Row, Col, Card } from "react-bootstrap";

function PortfolioCards() {
  console.log(PortfolioList);

  return (
    <Container>
      <Row>
        {PortfolioList.map((item, index) => (
          <Col md={6} xs={12} key={index} className="p-4">
            <Card className="h-100">
              <Card.Img src={item.img} alt="Card image" />
              <Card.ImgOverlay>
                <Container className="bg-dark text-white">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Container>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PortfolioCards;
