import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://46.101.85.95/"
});

const setLoading = () => ({
  type: actionTypes.SET_ORDERS_LOADING
});

export const fetchOrders = () => {
  return dispatch => {
    instance
      .get("/api/prevorders/")
      .then(res => res.data)
      .then(orders =>
        dispatch({ type: actionTypes.FETCH_ORDERS, payload: orders })
      )
      .catch(error => console.error(error));
  };
};
