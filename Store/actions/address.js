import axios from "axios";

import * as actionTypes from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://46.101.85.95/api/"
});

export const addAddress = userData => {
  return dispatch => {
    instance
      .post("address/", userData)
      .then(res => res.data)
      .then(createdAddress =>
        dispatch({ type: actionTypes.ADD_ADDRESS, payload: createdAddress })
      )
      .catch(err => {
        if (err.response) dispatch(setErrors(err.response.data));
        else console.log(err);
      });
  };
};
