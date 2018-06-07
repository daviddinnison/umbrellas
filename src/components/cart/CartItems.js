import React, { Component } from 'react';
import { Map } from 'immutable';

class CartItems extends React.Component {
  componentDidMount() {
    //   use immutable js for editing cart items
    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);
    console.log(map1.get('b') + ' vs. ' + map2.get('b')); // 2 vs. 50
  }
  renderItems() {
    return <p>this is a cart item</p>;
  }
  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default CartItems;
