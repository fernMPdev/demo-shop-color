import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" >Shop</NavigationItem>
        <NavigationItem link="/checkout">Checkout - {props.cartLength}</NavigationItem>
      </ul>
  )


export default navigationItems;
