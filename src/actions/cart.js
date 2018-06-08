export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const getCartRequest = () => ({
  type: GET_CART_REQUEST,
  test: 'test'
});

export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const getCartSuccess = () => ({
  type: GET_CART_SUCCESS,
  test: 'baseball'
});

export const GET_CART_ERROR = 'GET_CART_ERROR';
export const getCartError = message => ({
  type: GET_CART_ERROR,
  message
});

// export const getCartItems = dispatch => {
//   console.log('here');
//   getCartRequest()
// };
