import React, { Component, Fragment } from "react";

import Display from "../components/Display";
import Numbers from "../components/Numbers";
import Operations from "../components/Operations";
import calculator from "../utils/CalculatorLogic";

class Calculator extends Component {
  state = {
    display: null,
    history: null
  };

  setStateFunction = () => {
    this.setState({
      display: calculator.currentValue,
      history: calculator.cache.join(" ")
    });
  };

  handleOnNumber = value => {
    calculator.inputValue(value);

    this.setStateFunction();
  };

  handleOnAdd = () => {
    calculator.add();

    this.setStateFunction();
  };

  handleOnMinus = () => {
    calculator.minus();

    this.setStateFunction();
  };

  handleOnMultiply = () => {
    calculator.multiply();

    this.setStateFunction();
  };

  handleOnDivide = () => {
    calculator.divide();

    this.setStateFunction();
  };

  handleOnEqual = () => {
    calculator.equal();

    this.setState({
      display: calculator.result,
      history: calculator.cache.join(" ")
    });
  };

  handleOnDelete = () => {
    calculator.clear();

    this.setStateFunction();
  };

  handleOnShort = () => {
    calculator.short();

    this.setStateFunction();
  };

  handleOnBracketOpen = () => {
    this.handleOnNumber("(");
  };

  handleOnBracketClose = () => {
    this.handleOnNumber(")");
  };

  render() {
    return (
      <Fragment>
        <Display history={this.state.history} nums={this.state.display} />
        <Numbers clicked={this.handleOnNumber} equaled={this.handleOnEqual} />
        <Operations
          deleted={this.handleOnDelete}
          added={this.handleOnAdd}
          minused={this.handleOnMinus}
          multiplied={this.handleOnMultiply}
          divided={this.handleOnDivide}
          shortened={this.handleOnShort}
          bracketOpen={this.handleOnBracketOpen}
          bracketClose={this.handleOnBracketClose}
        />
      </Fragment>
    );
  }
}

export default Calculator;
