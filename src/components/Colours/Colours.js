import React, { Fragment } from "react";

import classes from "./Colours.module.css";

import Color from "./Color/Color";
import Price from "./Price/Price";
import Button from "../UI/Button/Button";

const colours = (props) => {
  const colores = props.colours.map((color, key) => {
 
    return (
      <article className={classes.Colours} key={key}>
        <Color hex={color.hex} />
        <div className={classes.AddToCart}>
          <Price price={color.price} />
          <Button clicked={() => props.addCartHandler(color)}>
            Add to Cart
          </Button>
        </div>
      </article>
    );
  });

  return <Fragment>{colores}</Fragment>;
};

export default colours;
