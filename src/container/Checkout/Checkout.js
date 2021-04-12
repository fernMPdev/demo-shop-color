import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../store/actions/index";

import Items from "../../components/Items/Items";

class Checkout extends Component {
  render() {
    return (
      <Fragment>
        {
          <Items
            items={this.props.cart}
            totalPrice={this.props.totalPrice}
            onSetOrder={this.props.onSetOrder}
            onDeleteItem={this.props.onDeleteItem}
          />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.checkout.cart,
    totalPrice: state.checkout.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetOrder: (order) => dispatch(action.setOrder(order)),
    onDeleteItem: (color) => dispatch(action.removeColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
