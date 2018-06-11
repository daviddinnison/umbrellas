import {
  getCartRequest,
  getCartSuccess,
  getCartError,
  deleteCartRequest,
  deleteCartSuccess,
  deleteCartError,
  postCartRequest,
  postCartSuccess,
  postCartError
} from '../actions/cart';

const initialState = {
  message: '',
  items: [],
  total: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CART_REQUEST': {
      return Object.assign({}, state, {});
    }
    case 'GET_CART_SUCCESS': {
      let newTotal = 0;
      for (let i = 0; i < action.items.length; i++) {
        newTotal += action.items[i].offer_price.price;
      }

      return Object.assign({}, state, {
        items: action.items,
        total: newTotal
      });
    }

    case 'GET_CART_ERROR': {
      return Object.assign({}, state, {
        message: action.message
      });
    }

    case 'POST_CART_REQUEST': {
      return Object.assign({}, state, {});
    }
    case 'POST_CART_SUCCESS': {
      console.log('post cart succ in reducer', action);

      return Object.assign({}, state, {
        items: [...state.items, action.item]
      });
    }

    case 'POST_CART_ERROR': {
      return Object.assign({}, state, {
        message: action.message
      });
    }

    case 'DELETE_CART_REQUEST': {
      return Object.assign({}, state, {});
    }

    case 'DELETE_CART_SUCCESS': {
      console.log('delete cart action data', action.data);

      return Object.assign({}, state, {
        items: state.items.filter(item => item.upc !== action.data.upc)
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
