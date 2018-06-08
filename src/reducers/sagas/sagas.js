import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { getCartRequest, getCartSuccess } from '../../actions/cart';
import { getProductsRequest, getProductsSuccess } from '../../actions/products';


const url = 'http://localhost:3001/api';
// 1
// worker saga
export function* getCartAsync() {
  try {
    const response = yield call(axios.get, `${url}/cart`);
    yield put({ type: 'GET_CART_SUCCESS', items: response.data });
  } catch (e) {
    console.log(e, 'THERE WAS AN ERROR');
    yield put({ type: 'GET_CART_ERROR', message: e.message });
  }
}

// watcher saga- spawn a new task on each action
export function* watchGetCart() {
  yield takeEvery('GET_CART_REQUEST', getCartRequest);
}

// 2
// worker saga
export function* getProductsAsync() {
  try {
    const response = yield call(axios.get, `${url}/products`);
    console.log('getProductsAsnyc response', response.data.search_response.items);
    yield put({ type: 'GET_PRODUCTS_SUCCESS', items: response.data.search_response.items});
  } catch (e) {
    console.log(e, 'THERE WAS AN ERROR');
    yield put({ type: 'GET_PRODUCT_ERROR', message: e.message });
  }
}

// watcher saga- spawn a new task on each action
export function* watchGetProducts() {
  yield takeEvery('GET_PRODUCTS_REQUEST', getProductsRequest);
}


// root saga
export default function* rootSaga() {
  yield [watchGetCart(), getCartAsync(), watchGetProducts(), getProductsAsync()];
}
