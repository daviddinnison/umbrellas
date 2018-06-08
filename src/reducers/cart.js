import { getCartRequest } from '../actions/cart';

const initialState = {
  test: 'before........',
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

    default:
      return state;
  }
}
