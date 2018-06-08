export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const getCartRequest = () => ({
  type: GET_CART_REQUEST
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

export const DELETE_CART_REQUEST = 'DELETE_CART_REQUEST';
export const deleteCartRequest = upc => ({
  type: DELETE_CART_REQUEST,
  upc
});

export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';
export const deleteCartSuccess = data => ({
  type: DELETE_CART_SUCCESS,
  data
});

export const DELETE_CART_ERROR = 'DELETE_CART_ERROR';
export const deleteCartError = message => ({
  type: DELETE_CART_ERROR,
  message
});

export const DELETE_CART = 'DELETE_CART'
export const deleteCart = upc => dispatch => {
  console.log('upc in delete cart...', upc);
  dispatch(deleteCartRequest());
  // fetch(`http://localhost:3001/api/cart/${upc}`, {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(upc),
  //   method: 'DELETE'
  // })
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error(res.statusText);
  //     }
  //     console.log('action success', res.json());
  //     return res.json();
  //   })
  //   .then(data => {
  //     dispatch(deleteCartSuccess(data));
  //   })
  //   .catch(err => {
  //     dispatch(deleteCartError(err));
  //   });
};
