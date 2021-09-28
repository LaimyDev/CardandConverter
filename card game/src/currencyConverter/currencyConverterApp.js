import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//variable containing currency names
const currencyNames = {
  $: "Dollars",
  R: "Rands",
  "£": "Pounds",
  "€": "Euros"
};

//functions converting dollars to respective currencies ie. Rands, Pounds and Euros
function toDollar(dollar) {
  return dollar;
}
function toRand(dollar) {
  return dollar * 14.96;
}

function toPound(dollar) {
  return dollar * 1.37;
}

function toEuro(dollar) {
  return dollar * 1.17;
}

//conversion function converting string to integers and thn rounding to 2 decimal places and then converting
//rounded number back to string
function tryConvert(amount, convert) {
  const input = parseFloat(amount);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

//child component containing currency input component
class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    //bind handle change function to this component so that 'this' may be used
    this.handleChange = this.handleChange.bind(this);
  }
  //handle change function which targets value attribute of input
  handleChange(e) {
    this.props.onAmountChange(e.target.value);
  }
  render() {
    //let amount value equal a property passed down from parent component
    const amount = this.props.amount;
    //let currency value equal a property passed down from parent component
    const currency = this.props.currency;
    //set event handler on change to call handle change function
    //set disabled input to a prop passed down from parent component
    return (
      <div>
        <fieldset className="fieldset">
          <div>
            <span className="currencySpan">{currencyNames[currency]}: </span>
            <input
              value={amount}
              onChange={this.handleChange}
              disabled={this.props.disabled}
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

//create currency converter app class as parent component which passes down data to props in child component
export default class CurrencyConverterApp extends React.Component {
  constructor(props) {
    super(props);
    //bind functions so that they may be called using this
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.handleRandChange = this.handleRandChange.bind(this);
    this.handlePoundChange = this.handlePoundChange.bind(this);
    this.handleEuroChange = this.handleEuroChange.bind(this);
    //set initial state of amount to empty string and currency to $ for dolars since we want to convert from dollars
    this.state = { amount: "", currency: "$" };
  }

  //functions which handle changes when an amount is enetered into the dollars input and is passed down to child component
  //the amount is converted to the respective currency in the child component and displayed
  handleDollarChange(amount) {
    this.setState({ currency: "$", amount });
  }

  handleRandChange(amount) {
    this.setState({ currency: "R", amount });
  }

  handlePoundChange(amount) {
    this.setState({ currency: "£", amount });
  }

  handleEuroChange(amount) {
    this.setState({ currency: "€", amount });
  }
  render() {
    //the currency is set to this currency state
    const currency = this.state.currency;
    //the amount is set to this amount of the dollars input
    const amount = this.state.amount;
    //variables which if currency equals "$", their amounts will be converted to the respective currency or
    //if currency not equal to "$" amount variable be will be given off
    const dollar = currency === "$" ? tryConvert(amount, toDollar) : amount;
    const rand = currency === "$" ? tryConvert(amount, toRand) : amount;
    const pound = currency === "$" ? tryConvert(amount, toPound) : amount;
    const euro = currency === "$" ? tryConvert(amount, toEuro) : amount;
    return (
      //currencyInput component is called for each currency
      //data such as currency, amount (in respective currency) and specific functions are passed down to child component
      //disabled boolean is set to true if input should be disabled
      <div>
        <Container>
          <h2>Currency converter</h2>
          <Row>
            <div className="currencyCalculator">
              <Col lg={true}>
                <CurrencyInput
                  currency="$"
                  amount={dollar}
                  onAmountChange={this.handleDollarChange}
                  disabled={false}
                />
                <CurrencyInput
                  currency="R"
                  amount={rand}
                  onAmountChange={this.handleRandChange}
                  disabled={true}
                />
                <CurrencyInput
                  currency="£"
                  amount={pound}
                  onAmountChange={this.handlePoundChange}
                  disabled={true}
                />
                <CurrencyInput
                  currency="€"
                  amount={euro}
                  onAmountChange={this.handleEuroChange}
                  disabled={true}
                />
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
