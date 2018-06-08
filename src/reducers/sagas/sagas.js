import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

import { getCartRequest, getCartSuccess, deleteCartRequest } from '../../actions/cart';
import { getProductsRequest, getProductsSuccess } from '../../actions/products';

import { getCartAsync, watchGetCart, deleteCartAsync, watchDeleteCart } from './cart';
import { getProductsAsync, watchGetProducts } from './products';

import url from './root-url';



// root saga
export default function* rootSaga() {
  yield [watchGetCart(), getCartAsync(), watchGetProducts(), getProductsAsync(), watchDeleteCart(), deleteCartAsync()];
}
