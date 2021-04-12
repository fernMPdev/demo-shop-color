import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Items.module.css";
import Item from "./Item/Item";
const items = (props) => {
  const hasProducts = props.items.length > 0;
  const items = hasProducts ? (
    props.items.map((p, key) => {
      return <Item key={key} hex={p.hex} object={p} onDeleteItem={props.onDeleteItem}/>;
    })
  ) : (
    <em>Please add some products to cart.</em>
  );
  
  const ButtonCheckout = hasProducts ? (
    <Link
      to="/order"
      onClick={() => props.onSetOrder(props.items)}
      style={{
        textDecoration: "none",
        fontWeight: "bold",
        backgroundColor: "#f0c14b",
        color: "#40403F",
        padding: "10px",
        borderColor: "#a88734 #9c7e31 #846a29",
        cursor: "pointer",
      }}
    >
      COMPRAR{" "}
    </Link>
  ) : null;

  return (
    <Fragment>
      <div className={classes.Texts}>
        <h1 style={{ fontWeight: 400, fontSize: "28px", lineHeight: "36px" }}>
          Cart
        </h1>
        <span style={{ fontSize: "18px", lineHeight: "24px" }}>
          Subtotal:{" "}
          <span style={{ fontWeight: "bold" }}>
            {props.totalPrice.toFixed(2)}€
          </span>
        </span>
      </div>
      <div className={classes.Items}>
        {items}
        <div className={classes.ButtonCheckout}>{ButtonCheckout}</div>
      </div>
    </Fragment>
  );
};

export default items;
