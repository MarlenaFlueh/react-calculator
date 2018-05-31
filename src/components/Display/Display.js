import React from "react";

import classes from "./Display.css";

const display = props => <div className={classes.Display}>{props.value}</div>;

export default display;
