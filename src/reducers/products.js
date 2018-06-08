import { getProductsRequest, getProductsSuccess, getProductsError } from '../actions/products';

const initialState = {
  items: [{title: 'orange umb'}]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST': {
      return Object.assign({}, state, {});
    }
    case 'GET_PRODUCTS_SUCCESS': {
      return Object.assign({}, state, {
        items: action.items
      });
    }

    case 'GET_PRODUCTS_ERROR': {
      return Object.assign({}, state, {
        message: action.message
      });
    }

    default:
      return state;
  }
}
