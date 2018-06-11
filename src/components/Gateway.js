import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import ProductGrid from './products/ProductGrid.js';
import CartContainer from './cart/CartContainer.js';



class Gateway extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CartContainer />
        <ProductGrid />
      </div>
    );
  }
}

export default Gateway;
