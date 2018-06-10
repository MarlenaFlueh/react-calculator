import React from "react";

import classes from "./Operations.css";

const operations = props => (
  <div className={classes.Operations}>
    <div className={classes.Operator1} onClick={props.added}>
      +
    </div>
    <div className={classes.Operator1} onClick={props.deleted}>
      AC
    </div>
    <div className={classes.Operator2} onClick={props.minused}>
      -
    </div>
    <div className={classes.Operator3} onClick={props.multiplied}>
      x
    </div>
    <div className={classes.Operator4} onClick={props.divided}>
      /
    </div>
  </div>
);

export default operations;
