import React from "react";

import classes from "./Numbers.css";

const numbers = props => (
  <div className={classes.Numbers}>
    <div className={classes.Item1} onClick={() => props.clicked(7)}>
      7
    </div>
    <div className={classes.Item1} onClick={() => props.clicked(8)}>
      8
    </div>
    <div className={classes.Item1} onClick={() => props.clicked(9)}>
      9
    </div>
    <div className={classes.Item2} onClick={() => props.clicked(4)}>
      4
    </div>
    <div className={classes.Item2} onClick={() => props.clicked(5)}>
      5
    </div>
    <div className={classes.Item2} onClick={() => props.clicked(6)}>
      6
    </div>
    <div className={classes.Item3} onClick={() => props.clicked(1)}>
      1
    </div>
    <div className={classes.Item3} onClick={() => props.clicked(2)}>
      2
    </div>
    <div className={classes.Item3} onClick={() => props.clicked(3)}>
      3
    </div>
    <div className={classes.Item4} onClick={() => props.clicked(0)}>
      0
    </div>
    <div className={classes.Item4} onClick={() => props.clicked(".")}>
      .
    </div>
    <div className={classes.Item4} onClick={() => props.clicked("=")}>
      =
    </div>
  </div>
);

export default numbers;
