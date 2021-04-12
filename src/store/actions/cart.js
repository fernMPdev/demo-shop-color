import * as actionTypes from "./actionTypes";


export const addColor = (color) => {
  return {
    type: actionTypes.ADD_COLOR,
    color: { ...color, quantity: 1 },
  };
};

export const removeColor = (color) => {
  return{
    type: actionTypes.REMOVE_COLOR_CART,
    color: color
  }
}