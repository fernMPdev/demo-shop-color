import React from "react";

import classes from "./Color.module.css";
const color = (props) => (
  <div className={classes.Color} style={{ backgroundColor: props.hex }}></div>
);

export default color;
