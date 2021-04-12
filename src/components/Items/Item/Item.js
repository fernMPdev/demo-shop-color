import React from "react";
import { Link } from "react-router-dom";
import classes from "./Item.module.css";
import Li from "./Li/Li";

const item = (props) => {
  let details = [];
  for (const key in props.object) {
    if (key !== "hex") {
      details.push(<Li key={key} keyValue={key} value={props.object[key]} />);
    }
  }
  const deleteColor = {
    display: "inline",
    textDecoration: "none",
    color: "#000",
    fontWeight: "bold",
    height: "20px",
    fontSize: "18px",
  } 
  
  return (
    <div className={classes.Item}>
      <div className={classes.Item_container_color}>
        <div
          className={classes.Item_color}
          style={{ backgroundColor: props.hex }}
        ></div>
      </div>
      <div className={classes.Item_container_details}>
        <ul className={classes.Item_details}>{details}</ul>
      </div>
      <div className={classes.Delete}>
        <Link
          to="/checkout"
          onClick= {() => props.onDeleteItem(props.object)}
          style={deleteColor}
        >X</Link>
      </div>
    </div>
  );
};

export default item;
