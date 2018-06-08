import React, { Component } from 'react';
import { Map } from 'immutable';
import { getCartRequest } from './../../actions/cart';

class CartItems extends React.Component {
  componentDidMount() {
    //   use immutable js for editing cart items
    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);
    // console.log(map1.get('b') + ' vs. ' + map2.get('b')); // 2 vs. 50
    
  }
  
  
  renderItem() {
    return (
      <div>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.quantity}</p>
        <button>remove</button>
        
      </div>
    );
  }
  render() {
    return <div>{this.renderItem()}</div>;
  }
}


export default CartItems;
