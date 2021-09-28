//imported all necessary components and installed ones that I didnt have
import React from "react";
import PlayGame from "./cardGame/PlayGame";
import Home from "./Home";
import Card1 from "./cardGame/Card1";
import Card2 from "./cardGame/Card2";
import Card3 from "./cardGame/Card3";
import CardHome from "./cardGame/CardHome";
import CurrencyConverterApp from "./currencyConverter/currencyConverterApp";

//link container was downloaded and was very useful to route to different pages from a link
import { LinkContainer } from "react-router-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";

//imported  browser modules
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";


export default class Menu extends React.Component {
  render() {
    return (
        //inserted all routing JSX in Router component
        //use dropdown button from react bootstrap for menu
        //link continer used in menu to route to different pages
        //created routing paths to different components
      <div>
        <Router>
          <DropdownButton
            title="Select"
            size="sm"
            variant="secondary"
            style={{textAlign: "center"}}
          >
            <LinkContainer to="/home">
              <Dropdown.Item>Home</Dropdown.Item>
            </LinkContainer>

            <LinkContainer to="/currencyconverter">
              <Dropdown.Item>Currency converter</Dropdown.Item>
            </LinkContainer>

            <LinkContainer to="/cardhome">
              <Dropdown.Item>Card Game</Dropdown.Item>
            </LinkContainer>
          </DropdownButton>

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/currencyconverter" component={CurrencyConverterApp} />
            <Route path="/cardhome" component={CardHome} />
            <Route path="/card1" component={Card1} />
            <Route path="/card2" component={Card2} />
            <Route path="/card3" component={Card3} />
            <Route path="/cardgame" component={PlayGame} />
          </Switch>
        </Router>
      </div>
    );
  }
}
