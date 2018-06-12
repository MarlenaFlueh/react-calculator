import React, { Component, Fragment } from "react";

import Display from "../../components/Display/Display";
import Numbers from "../../components/Numbers/Numbers";
import Operations from "../../components/Operations/Operations";
import calculator from "./../../utils/CalculatorLogik/CalculatorLogic";

class Calculator extends Component {
  state = {
    display: ""
  };

  handleOnNumber = value => {
    calculator.inputValue(value);

    this.setState({ display: calculator.currentValue });
  };

  handleOnAdd = () => {
    calculator.add();

    this.setState({ display: calculator.currentValue });
  };

  handleOnMinus = () => {
    calculator.minus();

    this.setState({ display: calculator.currentValue });
  };

  handleOnMultiply = () => {
    calculator.multiply();

    this.setState({ display: calculator.currentValue });
  };

  handleOnDivide = () => {
    calculator.divide();

    this.setState({ display: calculator.currentValue });
  };

  handleOnEqual = () => {
    calculator.equal();

    this.setState({ display: calculator.result });
  };

  handleOnDelete = () => {
    calculator.clear();

    this.setState({
      display: calculator.currentValue
    });
  };

  render() {
    return (
      <Fragment>
        <Display>{this.state.display}</Display>
        <Numbers clicked={this.handleOnNumber} equaled={this.handleOnEqual} />
        <Operations
          deleted={this.handleOnDelete}
          added={this.handleOnAdd}
          minused={this.handleOnMinus}
          multiplied={this.handleOnMultiply}
          divided={this.handleOnDivide}
        />
      </Fragment>
    );
  }
}

export default Calculator;
