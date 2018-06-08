import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import url from './root-url';

import { getProductsRequest, getProductsSuccess } from '../../actions/products';

export function* getProductsAsync() {
  try {
    const response = yield call(axios.get, `${url}/products`);

    yield put({ type: 'GET_PRODUCTS_SUCCESS', items: response.data.search_response.items.Item });
  } catch (e) {
    console.log(e, 'THERE WAS AN ERROR');
    yield put({ type: 'GET_PRODUCT_ERROR', message: e.message });
  }
}

export function* watchGetProducts() {
  yield takeEvery('GET_PRODUCTS_REQUEST', getProductsRequest);
}
