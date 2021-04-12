import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orderId: null,
  order: [],
};

const setOrder = (state, action) => {
  const userId =  new Date().getTime();
  return {
    ...state,
    orderId: userId,
    order: action.order,
  };
}

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDER: return setOrder(state, action);
    default:return state;
      
  }
};

export default reduce;
