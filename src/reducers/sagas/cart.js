import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import url from './root-url';

import { getCartRequest, getCartSuccess, deleteCartRequest } from '../../actions/cart';

export function* getCartAsync() {
  try {
    const response = yield call(axios.get, `${url}/cart`);
    yield put({ type: 'GET_CART_SUCCESS', items: response.data });
  } catch (e) {
    console.log(e, 'THERE WAS AN ERROR');
    yield put({ type: 'GET_CART_ERROR', message: e.message });
  }
}

export function* watchGetCart() {
  yield takeEvery('GET_CART_REQUEST', getCartRequest);
}


// REMOVE FROM CART----------------------------------------------------------------
export function* deleteCartAsync() {
    try {
      const { upc } = take('DELETE_CART_REQUEST');
      console.log(upc, '------THE UPC---------');
      const response = yield call(axios.delete, `${url}/cart`);
      console.log('delete cart response', response)
      // yield put({ type: 'DELETE_CART_SUCCESS', items: response.data.search_response.items.Item});
    } catch (e) {
      console.log(e, 'THERE WAS AN ERROR');
      // yield put({ type: 'DELETE_CART_ERROR', message: e.message });
    }
  }
  
  export function* watchDeleteCart() {
    yield takeEvery('DELETE_CART_REQUEST', deleteCartRequest);
  }