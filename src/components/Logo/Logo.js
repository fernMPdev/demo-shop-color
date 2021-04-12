import React from "react";
import {Link} from "react-router-dom";
import shopLogo from "../../assets/img/—Pngtree—creative  colorful brush stroke_3563789.png";
import carrito from "../../assets/img/001-trolley.png";

import classes from "./Logo.module.css";

const logo = (props) => (
  <div
    className={classes.Logo}
    onClick={props.clicked}
    
  >
    <img src={carrito} alt="Carrito"  className = {classes.Carrito}/>
    <img src={shopLogo} alt="Logo" className ={classes.ShopLogo}/>
    <div className={classes.Centered}><Link to="/checkout"  className={classes.CartLength}  style = {{cursor:"pointer"}}>{props.cartLength}</Link></div>
  </div>
);

export default logo;
