export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const getProductsSuccess = items => ({
  type: GET_PRODUCTS_SUCCESS,
  items: items
});

export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const getProductsError = message => ({
  type: GET_PRODUCTS_ERROR,
  message
});
