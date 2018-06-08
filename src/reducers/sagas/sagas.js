import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { getCartRequest, getCartSuccess } from '../../actions/cart';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
// 1 worker saga - calls api, async stuff, response
export function* createLessonAsync() {
  try {
    console.log('made it into the api---------------');
    const response = yield call(axios.get, url);
    console.log(response);

    yield put({type: 'GET_CART_SUCCESS', response: response.data})
  } catch (e) {
    console.log(e, 'THERE WAS AN ERROR');
    yield put({type: 'GET_CART_ERROR', message: e.message})
    
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
