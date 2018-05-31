import React, { Component } from "react";

import Aut from "../../hoc/Aut/Aut";
import Display from "../../components/Display/Display";
import Numbers from "../../components/Numbers/Numbers";
import Operations from "../../components/Operations/Operations";

class Calculator extends Component {
  state = {
    display: 1787
  };

  render() {
    return (
      <Aut>
        <Display value={this.state.display} />
        <Numbers />
        <Operations />
      </Aut>
    );
  }
}

export default Calculator;
