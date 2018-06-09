import React, { Component } from "react";

import Aut from "../../hoc/Aut/Aut";
import Display from "../../components/Display/Display";
import Numbers from "../../components/Numbers/Numbers";
import Operations from "../../components/Operations/Operations";
import CalculatorLogic from "./CalculatorLogik/CalculatorLogic";

const calculator = new CalculatorLogic();

class Calculator extends Component {
  state = {
    display: 0
  };

  changeDisplayHandler = value =>
    this.state.display === 0 && typeof value === "number"
      ? this.setState({ display: value })
      : this.setState(prevState => {
          return { display: prevState.display + value.toString() };
        });

  deleteDisplayHandler = () => {
    calculator.clear();

    this.setState({ display: calculator.getHistory() });
  };

  render() {
    return (
      <Aut>
        <Display value={this.state.display} />
        <Numbers clicked={this.changeDisplayHandler} />
        <Operations
          deleted={this.deleteDisplayHandler}
          clicked={this.changeDisplayHandler}
        />
      </Aut>
    );
  }
}

export default Calculator;
