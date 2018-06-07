import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import cartReducer from './reducers/cart';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    cart: cartReducer
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store;
