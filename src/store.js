import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './reducers/sagas/sagas';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';


// const action = type => store.dispatch({type})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: productsReducer
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store;
