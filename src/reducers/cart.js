import { getCartRequest, getCartSuccess, getCartError } from '../actions/cart';

const initialState = {
  message: '0',
  items: [
    {
      title: 'Black Umbrella',
      quantity: 1
    },
    {
      title: 'FUll body umbrella',
      quantity: 1
    }
  ]
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

    default:
      return state;
  }
}
