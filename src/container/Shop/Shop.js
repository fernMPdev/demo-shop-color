import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/index";

import classes from "./Shop.module.css";
import Colours from "../../components/Colours/Colours";

import Spinner from "../../components/UI/Spinner/Spinner";

class Shop extends Component {
  componentDidMount() {
    this.props.onInitColors();
  }

  render() {
    const listOfColors = this.props.loading ? (
      <Spinner message = {this.props.errorMessage}/>
    ) : (
      <Colours
        colours={this.props.colors}
        addCartHandler={this.props.onColorAddedToCart}
      />
    );
    return <div className={classes.Shop}> {listOfColors}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    colors: state.shop.colors,
    loading: state.shop.loading,
    errorMessage: state.shop.message
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onColorAddedToCart: (clr) => dispatch(actionTypes.addColor(clr)),
    onInitColors: () => dispatch(actionTypes.initColors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
