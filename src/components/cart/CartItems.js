import React, { Component } from 'react';

class CartItems extends React.Component {
  renderItems() {
    return <p>this is a cart item</p>;
  }
  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default CartItems;
