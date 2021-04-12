import React from "react";

import "./Li.module.css";

const li = (props) => {
  const euro = props.keyValue === "price" ? "€" : null;

  return (
    <li>
      <strong>{props.keyValue}:</strong>{" "}
      <span>
        {props.value}
        {euro}
      </span>
    </li>
  );
};

export default li;
