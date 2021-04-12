import * as actionTypes from "./actionTypes";

import axios from "../../axios";


export const setColors = (colors) => {
  return {
    type: actionTypes.SET_COLORS,
    colors: colors,
  };
};


export const fetchFailed = (error) => {
  return{
    type: actionTypes.FETCH_FAILED,
    error: error
  }

}

export const initColors = () => {
  return (dispatch) => {
    axios
      .get(
        "https://colors-shop-7ab31-default-rtdb.europe-west1.firebasedatabase.app/colors.json"
      )
      .then((response) => {
        dispatch(setColors(response.data));
      })
      .catch((error) => {
        dispatch(fetchFailed(error.response))
      });
  };
};
