import React from "react";
import Card from "react-bootstrap/Card";
import Restart from "./Restart";
import QuitGame from "./QuitGame";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//card 1 which randomly generates and informs user whether they won or not
class Card1 extends React.Component {
  state = {
    randomWin: Math.floor(Math.random() * 3)
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={true} md={{ span: 4, offset: 5 }}>
              <Card>
                <h2>You {this.state.randomWin === 0 ? "Win" : "Lose"}!</h2>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={{ offset: 2 }}>
              <Restart></Restart>
            </Col>
            <Col>
              <QuitGame></QuitGame>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Card1;
