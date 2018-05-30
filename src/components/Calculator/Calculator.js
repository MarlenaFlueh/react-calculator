import React, { Component } from "react";

import Aut from "../../hoc/Aut/Aut";
import Display from "../Display/Display";
import Numbers from "../Numbers/Numbers";
import Operations from "../Operations/Operations";

class Calculator extends Component {
  render() {
    return (
      <Aut>
        <Display />
        <Numbers />
        <Operations />
      </Aut>
    );
  }
}

export default Calculator;
