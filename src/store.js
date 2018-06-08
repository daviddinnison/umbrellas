import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './reducers/sagas/sagas';
import cartReducer from './reducers/cart';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    cart: cartReducer
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store;
