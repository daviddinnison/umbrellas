import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Gateway from './components/Gateway';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Gateway/>
      </Provider>
    );
  }
}

export default App;
