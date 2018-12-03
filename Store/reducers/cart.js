import * as actionTypes from "../actions/actionTypes";

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let itemOrder = action.payload;
      let listItem = state.list.find(
        listItem => listItem.itemID === itemOrder.itemID
      );
      let list;
      if (listItem) {
        listItem.quantity += itemOrder.quantity;
        list = [...state.list];
      } else {
        list = state.list.concat(itemOrder);
      }
      return {
        ...state,
        list: list
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(item => item !== action.payload)
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
}
