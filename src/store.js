import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import cartReducer from './reducers/cart';

const store = createStore(
  combineReducers({
    cart: cartReducer
  }),
//   applyMiddleware(thunk)
);

export default store;
