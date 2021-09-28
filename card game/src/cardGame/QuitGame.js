import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//quit game component which allos user to return to the card home page
function QuitGame() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <NavLink to="/cardhome" className="navIcon">
              <Card>Quit</Card>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QuitGame;
