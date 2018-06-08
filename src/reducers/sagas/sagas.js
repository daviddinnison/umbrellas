import { takeEvery } from 'redux-saga';
import { getCartItems } from '../../actions/cart';

// 1 worker saga - calls api, async stuff, response

// 2 watcher saga - listens for actions
// spawn a new task on each action
export function* watchCreateLesson() {
  console.log('redux-saga is running action listeners');
  yield takeEvery('GET_CART_ITEMS', getCartItems);
}

// 3 root saga - entry point to start other saga
export default function* rootSaga() {
  yield [watchCreateLesson()];
}
