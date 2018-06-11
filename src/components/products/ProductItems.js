import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import { postCart } from './../../actions/cart';

import './styles/products.css';

class ProductItems extends React.Component {
  addToCart(item) {
    this.props.dispatch(postCart(item));
  }

  renderItem() {
    // console.log(this.props.item.upc, 'product item props');
    const image = String(this.props.item.images[0].base_url + this.props.item.images[0].primary);
    return (
      <div className="product-item col">
        <img src={image} className="umbrella-lg" />
        <p className="product-price">${this.props.item.offer_price.price}</p>
        <p className="product-title">{this.props.item.title}</p>
        <button
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
