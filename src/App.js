import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <p>this will be the application</p>
      </Provider>
    );
  }
}

export default App;
