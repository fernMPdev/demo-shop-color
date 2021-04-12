import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import ConfirmOrder from "../../components/ConfirmOrder/ConfirmOrder";

class Order extends Component {
  
  render() {
    let confirmOrder = this.props.orderId ?  <ConfirmOrder orderId={this.props.orderId} /> : <Redirect to="/" />

    return <Fragment>{confirmOrder}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    orderId: state.order.orderId
  };
};

export default connect(mapStateToProps, null)(Order);
