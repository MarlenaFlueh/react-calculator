import React, { Component } from "react";

import Aut from "../../hoc/Aut/Aut";
import Display from "../../components/Display/Display";
import Numbers from "../../components/Numbers/Numbers";
import Operations from "../../components/Operations/Operations";

class Calculator extends Component {
  state = {
    display: "0"
  };

  changeDisplayHandler = value =>
    this.state.display === "0"
      ? this.setState({ display: value })
      : this.setState(prevState => {
          return { display: prevState.display + value.toString() };
        });

  render() {
    return (
      <Aut>
        <Display value={this.state.display} />
        <Numbers clicked={this.changeDisplayHandler} />
        <Operations />
      </Aut>
    );
  }
}

export default Calculator;
