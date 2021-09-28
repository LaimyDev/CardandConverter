import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//allows user to restart the game at the card game page
function Restart() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <NavLink to="/cardgame" className="navIcon">
              <Card>Restart</Card>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Restart;
