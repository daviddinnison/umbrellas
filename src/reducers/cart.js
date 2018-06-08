import { getCartRequest, getCartSuccess, getCartError, deleteCartRequest, deleteCartSuccess, deleteCartError } from '../actions/cart';
const productsData = require('./sample-data.json');

const initialState = {
  message: '0',
  items: [productsData.search_response.items.Item[0]]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CART_REQUEST': {
      return Object.assign({}, state, {});
    }
    case 'GET_CART_SUCCESS': {
      return Object.assign({}, state, {
        test: '.........request went through the SAGA'
      });
    }

    case 'GET_CART_ERROR': {
      return Object.assign({}, state, {
        message: action.message
      });
    }

    case 'DELETE_CART_REQUEST': {
      console.log('reducer request')
      return Object.assign({}, state, {});
    }
    case 'DELETE_CART_SUCCESS': {
      return Object.assign({}, state, {
        test: 'delete item'
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
