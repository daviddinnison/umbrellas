import React, { Component } from 'react';
import CartItems from './CartItems';
import { connect } from 'react-redux';

import { getCartRequest } from './../../actions/cart';
import './styles/cart.css';

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleItems: false
    };
    this.toggleCart = this.toggleCart.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getCartRequest());
  }

  toggleCart() {
    this.setState({ visibleItems: !this.state.visibleItems });
  }

  showCart() {
    if (this.state.visibleItems) {
      if (this.props.items) {
        return this.props.items.map((item, index) => {
          return <CartItems item={item} key={index} />;
        });
      } else {
        return <p>empty cart</p>;
      }
    }
  }

  render() {
    return (
      <div className="cart">
        <p>{this.props.items.length} items</p>
        <button onClick={this.toggleCart}>Cart</button>
        {this.showCart()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.cart.items
  };
};

export default connect(mapStateToProps)(CartContainer);
