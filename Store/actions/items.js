import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://46.101.85.95/"
});

export const fetchItems = () => {
  return dispatch => {
    instance
      .get("/api/list/")
      .then(res => res.data)
      .then(items =>
        dispatch({ type: actionTypes.FETCH_ITEMS, payload: items })
      )
      .catch(error => console.error(error));
  };
};

export const filterItems = query => {
  return {
    type: actionTypes.FILTER_ITEMS,
    payload: query
  };
};
