import * as actionTypes from "../actions/actionTypes";

const initialState = {
  addresses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
