import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItems = (props) => (
  
  <li className={classes.NavigationItem}>
    <NavLink to={props.link} exact activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItems;
