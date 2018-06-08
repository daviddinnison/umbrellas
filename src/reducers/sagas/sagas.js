import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { getCartRequest, getCartSuccess } from '../../actions/cart';

const url = 'http://localhost:3001/api/cart';
// 1 worker saga - calls api, async stuff, response
export function* createLessonAsync() {
  try {
    console.log(response);

    console.log('made it into the api---------------');
    const response = yield call(axios.get, url);
    yield put({ type: 'GET_CART_SUCCESS', items: response.data });
  } catch (e) {
    console.log(e, 'THERE WAS AN ERROR');
    yield put({ type: 'GET_CART_ERROR', message: e.message });
  }
}

// 2 watcher saga - listens for actions
// spawn a new task on each action
export function* watchCreateLesson() {
  console.log('listening for items');
  yield takeEvery('GET_CART_REQUEST', getCartRequest);
}

// 3 root saga - entry point to start other saga
export default function* rootSaga() {
  yield [watchCreateLesson(), createLessonAsync()];
}
