import React from "react";

import classes from "./ConfirmOrder.module.css";

const confirmOrder = (props) => (
  <div className={classes.ConfirmOrder}>
    <div className={classes.Order}>
      <div className={classes.OrderId}>
        <h2>Nº de pedido: {props.orderId}</h2>
      </div>
      <div className={classes.MessageOrder}>
        <h4>Gracias, has realizado tu pedido</h4>
       <p>La entrega prevista es de 3 dias, en ocasiones, puede haber retrasos</p>
       <p>Tu numero de pedido es: <i><strong>{props.orderId}</strong></i></p>
      </div>
    </div>
  </div>
);

export default confirmOrder;
