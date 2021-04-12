import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const addColor = (state, action) => {
  const findOne = state.cart.find((p) => p.name === action.color.name);
  state.cart
    .filter((p) => p.name === action.color.name)
    .map((p) => (p.quantity += 1));

  const updCart = findOne ? state.cart : [...state.cart, action.color];
  const updTotalPrice = parseFloat(state.totalPrice) + parseFloat(action.color.price);
    
  return {
    ...state,
    cart: updCart,
    totalPrice: updTotalPrice,
  };
}

const removeColorCart = (state,action) => {
  const removedColor = state.cart.filter(p => p !== action.color)
  const newTotalPrice = parseFloat(state.totalPrice) - parseFloat(action.color.price) * action.color.quantity;
        
      return {
        ...state,
        cart:removedColor,
        totalPrice:newTotalPrice
      };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLOR: return addColor(state, action);
    case actionTypes.REMOVE_COLOR_CART: return removeColorCart(state,action);
    default: return state;
  }
};

export default reducer;
