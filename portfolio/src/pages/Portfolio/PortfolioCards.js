import React from "react";
import "../../styles/portfolioCards.css";
import PortfolioList from "./PortfolioList";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function PortfolioCards() {
  console.log(PortfolioList);

  const openGithubLink = (url) => {
    window.open(`${url.target.id}`, "_blank");
  };

  return (
    <Container className="card-container">
      <Row>
        {PortfolioList.map((item, index) => (
          <Col md={6} xs={12} key={index} className="p-3 my-3">
            <Card className="h-100 custom-card text-center text-white">
              <Card.Img src={item.img} alt="Card image" />
              <Card.ImgOverlay>
                <Container className="container-info w-75 p-2">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Container>
              </Card.ImgOverlay>
            </Card>
            <Button
              variant="secondary"
              className="w-100"
              id={item.githubLink}
              onClick={openGithubLink}
            >
              Visit Repo
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PortfolioCards;
