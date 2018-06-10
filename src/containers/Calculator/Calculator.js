import React, { Component } from "react";

import Aut from "../../hoc/Aut/Aut";
import Display from "../../components/Display/Display";
import Numbers from "../../components/Numbers/Numbers";
import Operations from "../../components/Operations/Operations";
import CalculatorLogic from "./CalculatorLogik/CalculatorLogic";

const calculator = new CalculatorLogic();

class Calculator extends Component {
  state = {
    display: ""
  };

  handleOnNumber = value => {
    calculator.inputValue(value);

    this.setState({ display: calculator.getCurrentValue() });
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
        <Display value={this.state.display} />
        <Numbers clicked={this.handleOnNumber} />
        <Operations
          deleted={this.handleOnDelete}
          clicked={this.changeDisplayHandler}
        />
      </Aut>
    );
  }
}

export default Calculator;
