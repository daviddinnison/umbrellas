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


export const POST_CART_REQUEST = 'POST_CART_REQUEST';
export const postCartRequest = () => ({
  type: POST_CART_REQUEST
});

export const POST_CART_SUCCESS = 'POST_CART_SUCCESS';
export const postCartSuccess = item => ({
  type: POST_CART_SUCCESS,
  item
});

export const POST_CART_ERROR = 'POST_CART_ERROR';
export const postCartError = message => ({
  type: POST_CART_ERROR,
  message
});

export const postCart = (item) => dispatch => {
  dispatch(postCartRequest());
  fetch('http://localhost:3001/api/cart', {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item),
    method: "POST"
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(item => {
      console.log('post cart success in action', item)
      dispatch(postCartSuccess(item));
    })
    .catch(err => {
      console.log('post cart error in action', err)
      
      dispatch(postCartError(err));
    });
};

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
  dispatch(deleteCartRequest());
  fetch(`http://localhost:3001/api/cart/${upc}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(upc),
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log('delete cart data', data)
      dispatch(deleteCartSuccess(data));
    })
    .catch(err => {
      dispatch(deleteCartError(err));
    });
};
