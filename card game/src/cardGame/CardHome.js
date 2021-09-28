import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//home page of card game
//quit options routes back to this page
//this page has the "play" button to start the game
function CardHome() {
  return (
    <div>
      <Container>
        <h2>Card Game</h2>
        <Row>
          <Col lg={true} md={{ span: 4, offset: 5 }}>
            <NavLink to="/cardgame" className="navIcon">
              <Card>Play</Card>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardHome;
