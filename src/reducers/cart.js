import { getCartRequest, getCartSuccess, getCartError, deleteCartRequest, deleteCartSuccess, deleteCartError } from '../actions/cart';
const productsData = require('./sample-data.json');

const initialState = {
  message: '0',
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CART_REQUEST': {
      return Object.assign({}, state, {});
    }
    case 'GET_CART_SUCCESS': {
      console.log('get cart success', action.items);
      return Object.assign({}, state, {
        items: action.items
      });
    }

    case 'GET_CART_ERROR': {
      return Object.assign({}, state, {
        message: action.message
      });
    }

    case 'DELETE_CART_REQUEST': {
      console.log('reducer request');
      return Object.assign({}, state, {});
    }
    case 'DELETE_CART_SUCCESS': {
      console.log('DELETE ACTION DATA IN REDUCER', action);
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, action.data)
          // ...state.items.slice(action.payload + 1)
        ]
      });
    }

    case 'DELETE_CART_ERROR': {
      return Object.assign({}, state, {
        message: action.message
      });
    }

    default:
      return state;
  }
}
