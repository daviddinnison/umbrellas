export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const getCartRequest = () => ({
  type: GET_CART_REQUEST,
});

export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const getCartSuccess = items => ({
  type: GET_CART_SUCCESS,
  items
});

export const GET_CART_ERROR = 'GET_CART_ERROR';
export const getCartError = message => ({
  type: GET_CART_ERROR,
  message
});
