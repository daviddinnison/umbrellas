import React, { Component } from 'react';
import { Map } from 'immutable';
import { getCartRequest } from './../../actions/cart';

import "./styles/products.css";


class ProductItems extends React.Component {
  componentDidMount() {
    //   console.log('PRODUCT ITEM PROPS', this.props)    
  }
  
  
  renderItem() {
    // console.log(this.props.item.offer_price.price, 'product item props');
    const image = String(this.props.item.images[0].base_url + this.props.item.images[0].primary);
    return (
      <div className="product-item col">
        <img src={image} className="umbrella"/>        
        <p className="product-price">${this.props.item.offer_price.price}</p>
        <p className="product-title">{this.props.item.title}</p>
        <span className="add-to-cart">add to cart</span>
      </div>
    );
  }
  render() {
    return <div>{this.renderItem()}</div>;
  }
}


export default ProductItems;
