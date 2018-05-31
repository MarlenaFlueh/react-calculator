import React from "react";

import classes from "./Operations.css";

const operations = props => (
  <div className={classes.Operations}>
    <div className={classes.Operator1} onClick={() => props.clicked("+")}>
      +
    </div>
    <div className={classes.Operator1} onClick={props.deleted}>
      AC
    </div>
    <div className={classes.Operator2} onClick={() => props.clicked("-")}>
      -
    </div>
    <div className={classes.Operator3} onClick={() => props.clicked("x")}>
      x
    </div>
    <div className={classes.Operator4} onClick={() => props.clicked("/")}>
      /
    </div>
  </div>
);

export default operations;
