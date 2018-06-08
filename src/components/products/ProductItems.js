import React, { Component } from 'react';
import { Map } from 'immutable';
import { getCartRequest } from './../../actions/cart';

class ProductItems extends React.Component {
  componentDidMount() {
      console.log('PRODUCT ITEM PROPS', this.props)    
  }
  
  
  renderItem() {
    console.log(this.props.item, 'product item props');
    return (
      <div>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
  render() {
    return <div>{this.renderItem()}</div>;
  }
}


export default ProductItems;
