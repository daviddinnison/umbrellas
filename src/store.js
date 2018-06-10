import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './reducers/sagas/sagas';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';
import thunk from 'redux-thunk';
import { deleteCart } from './actions/cart';

// const action = type => store.dispatch({type})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: productsReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(rootSaga);

export default store;
