import { getCartRequest, getCartSuccess, getCartError } from '../actions/cart';

const initialState = {
  test: 'before........',
  message: '0',
  items: [
    {
      title: 'Black Umbrella',
      quantity: 1
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CART_REQUEST': {
      return Object.assign({}, state, {
        test: '.........after'
      });
    }
    case 'GET_CART_SUCCESS': {
      console.log('GET CART SUCCESs ACTION', action);
      return Object.assign({}, state, {
        test: '.........request went through the SAGA'
      });
    }

    case 'GET_CART_ERROR': {
      return Object.assign({}, state, {
        message: action.message
      });
    }

    default:
      return state;
  }
}
