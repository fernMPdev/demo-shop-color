import React, { Fragment } from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Close  from "../SideDrawer/DrawerClose/DrawerClose";
import classes from "./SideDrawer.module.css";


  const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick = {props.closed}>
                <div className={classes.Logo}>
                    <Close  clicked={props.closed} />
                </div>
                <nav>
                    <NavigationItems cartLength= {props.cartLength} />
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;
