// Types
import * as actionTypes from "./actionTypes";

import axios from "axios";
import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://46.101.85.95/api/"
});

export const addToCart = item => dispatch => {
  dispatch({
    type: actionTypes.ADD_ITEM,
    payload: item
  });
};

export const removeItemFromCart = item => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_ITEM,
    payload: item
  });
};

export const checkout = newOrder => {
  return dispatch => {
    instance
      .post("/order/", newOrder)
      .then(res => res.data)
      .then(
        dispatch({
          type: actionTypes.CHECKOUT
        })
      )
      .catch(err => {
        if (err.response) dispatch(setErrors(err.response.data));
        else console.error(err);
      });
  };
};
