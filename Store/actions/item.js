import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://46.101.85.95/"
});

const setLoading = () => ({
  type: actionTypes.SET_ITEM_LOADING
});

export const fetchItemDetail = itemID => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get(`/api/${itemID}/detail/`) //local
      .then(res => res.data)
      .then(item =>
        dispatch({
          type: actionTypes.FETCH_ITEM_DETAIL,
          payload: item
        })
      )
      .catch(err => console.error(err));
  };
};
