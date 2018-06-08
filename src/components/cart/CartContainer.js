import React, { Component } from 'react';
import CartItems from './CartItems';
import { connect } from 'react-redux';

import { getCartRequest } from './../../actions/cart';
import './styles/cart.css';

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCart: true
    };
    this.toggleCart = this.toggleCart.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getCartRequest());
  }

  toggleCart() {
    this.setState({ visibleCart: !this.state.visibleCart });
  }

  showCart() {
    if (this.state.visibleCart) {
      return this.props.items.map((item, index) => {
        return <CartItems item={item} key={index} />;
      });
    }
  }

  render() {
    return (
      <div className="cart">
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
