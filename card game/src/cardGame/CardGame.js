import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import QuitGame from "./QuitGame";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//main component of card game
//card game which routes to different cards and then tells you whther you've won or not
//also has a quit option which takes you back to the card home page
export default class CardGame extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={true}>
              <NavLink to="/card1" className="navIcon">
                <Card>Card
                </Card>
              </NavLink>
            </Col>
            <Col lg={true}>
              <NavLink to="/card2" className="navIcon">
                <Card>Card</Card>
              </NavLink>
            </Col>
            <Col lg={true}>
              <NavLink to="/card3" className="navIcon">
                <Card>Card</Card>
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col lg={true} md={{ span: 4, offset: 4 }}>
              <QuitGame></QuitGame>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
