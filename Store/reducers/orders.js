import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    case actionTypes.SET_ORDERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
