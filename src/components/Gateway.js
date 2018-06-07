import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './cart/Header';
import ProductGrid from './products/ProductGrid.js';

class Gateway extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductGrid />
      </div>
    );
  }
}

export default Gateway;
