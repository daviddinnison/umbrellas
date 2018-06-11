import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postCart } from './../../actions/cart';

import './styles/products.css';

class ProductItems extends React.Component {
  addToCart(item) {
    this.props.dispatch(postCart(item));
  }

  renderItem() {
    const image = String(this.props.item.images[0].base_url + this.props.item.images[0].primary);
    return (
      <div className="product-item col">
        <img src={image} className="umbrella-lg" />
        <p className="product-price">${this.props.item.offer_price.price}</p>
        <p className="product-title">{this.props.item.title}</p>
        <button
          className="add-to-cart"
          onClick={() => {
            const message = `Are you sure you wish to delete ${this.props.item.title} to your cart?`;
            if (window.confirm(message)) {
              this.addToCart(this.props.item);
            }
          }}
        >
          add to cart
        </button>
      </div>
    );
  }
  render() {
    return <div>{this.renderItem()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ postCart });
  return { ...actions, dispatch };
}

export default connect(
  null,
  mapDispatchToProps
)(ProductItems);
