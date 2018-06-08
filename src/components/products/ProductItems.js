import React, { Component } from 'react';
import { Map } from 'immutable';
import { getCartRequest } from './../../actions/cart';

import "./styles/products.css";


class ProductItems extends React.Component {
  componentDidMount() {
    //   console.log('PRODUCT ITEM PROPS', this.props)    
  }
  
  
  renderItem() {
    // console.log(this.props.item, 'product item props');
    return (
      <div className="product-item col">
        <p className="product-title">{this.props.item.title}</p>
        <button>add to cart</button>
      </div>
    );
  }
  render() {
    return <div>{this.renderItem()}</div>;
  }
}


export default ProductItems;
