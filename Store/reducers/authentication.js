import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default reducer;
