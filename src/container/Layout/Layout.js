import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawe: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawe: false,
    });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawe: !prevState.showSideDrawe };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar cartLength = {this.props.cartLength}   drawerToggleClicked = {this.SideDrawerToggleHandler}/>
        <SideDrawer
          cartLength = {this.props.cartLength}
          open={this.state.showSideDrawe}
          closed={this.SideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartLength: state.checkout.cart.length
  }
}

export default connect(mapStateToProps)(Layout);
