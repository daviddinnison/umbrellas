import React, { Component } from 'react';
import CartItems from './CartItems';
import { connect } from 'react-redux';

import { getCartRequest } from './../../actions/cart';
import './styles/cart.css';

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleItems: true
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
      } 
    }
  }

  render() {
    console.log('total props', this.props.total);

    return (
      <div className="cart container-fluid">
        <div className="cart-indicator">
        <p>({this.props.items.length}) items</p>
        <p className="cart-item-total">${this.props.total}</p>
        <button onClick={this.toggleCart}>View Cart</button>
        </div>
        {this.showCart()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.cart.items,
    total: state.cart.total
  };
};

export default connect(mapStateToProps)(CartContainer);
