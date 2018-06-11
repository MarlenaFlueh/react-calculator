import React, { Component } from "react";

import Aut from "../../hoc/Aut/Aut";
import Display from "../../components/Display/Display";
import Numbers from "../../components/Numbers/Numbers";
import Operations from "../../components/Operations/Operations";
import calculator from "./CalculatorLogik/CalculatorLogic";

class Calculator extends Component {
  state = {
    display: ""
  };

  handleOnNumber = value => {
    calculator.inputValue(value);

    this.setState({ display: calculator.getCurrentValue() });
  };

  handleOnAdd = () => {
    calculator.add();

    this.setState({ display: calculator.getCurrentValue().toString() });
  };

  handleOnMinus = () => {
    calculator.minus();

    this.setState({ display: calculator.getCurrentValue().toString() });
  };

  handleOnMultiply = () => {
    calculator.multiply();

    this.setState({ display: calculator.getCurrentValue().toString() });
  };

  handleOnDivide = () => {
    calculator.divide();

    this.setState({ display: calculator.getCurrentValue().toString() });
  };

  handleOnEqual = () => {
    calculator.equal();

    this.setState({ display: calculator.getResult() });
  };

  handleOnDelete = () => {
    calculator.clear();

    this.setState(() => ({
      display: calculator.getCurrentValue()
    }));
  };

  render() {
    return (
      <Aut>
        <Display>{this.state.display}</Display>
        <Numbers clicked={this.handleOnNumber} equaled={this.handleOnEqual} />
        <Operations
          deleted={this.handleOnDelete}
          added={this.handleOnAdd}
          minused={this.handleOnMinus}
          multiplied={this.handleOnMultiply}
          divided={this.handleOnDivide}
        />
      </Aut>
    );
  }
}

export default Calculator;
