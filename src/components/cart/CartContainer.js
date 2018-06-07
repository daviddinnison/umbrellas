import React, { Component } from 'react';
import CartItems from './CartItems';

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCart: false
    };
    this.toggleCart = this.toggleCart.bind(this);
  }

  toggleCart() {
    this.setState({ visibleCart: !this.state.visibleCart });
  }

  showCart() {
    if (this.state.visibleCart) {
      return <CartItems/>;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleCart}>Cart</button>
        {this.showCart()}
      </div>
    );
  }
}

export default CartContainer;
