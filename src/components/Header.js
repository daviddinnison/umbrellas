import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartContainer from './cart/CartContainer.js';

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1>Umbrella Shopping</h1>
        <CartContainer />
        
      </div>
    );
  }
}

export default Header;
