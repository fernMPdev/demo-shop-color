import * as actionTypes from "../actions/actionTypes";

const initialState = {
  colors: [],
  loading:false,
  message: ""
};

const setColors = (state,action) => {
  return {
    ...state,
    colors: action.colors,
  };
}

const fetchFailed = (state, action) => {
  const messageError = action.error.status +" "+ action.error.statusText  
  return{
    ...state,
    loading:true,
    message: messageError
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLORS: return setColors(state, action);
    case actionTypes.FETCH_FAILED: return fetchFailed(state, action);
    default: return state;
  }
};

export default reducer;
