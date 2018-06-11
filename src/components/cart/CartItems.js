import React, { Component } from 'react';
import { Map } from 'immutable';
import { getCartRequest, deleteCart } from './../../actions/cart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CartItems extends React.Component {
  deleteItem(upc) {
    this.props.dispatch(deleteCart(upc));
  }

  renderItem() {
    const image = String(this.props.item.images[0].base_url + this.props.item.images[0].primary);
    console.log('image props', this.props.item);
    return (
      <div className="row cart-item">
        <div className="col-sm-3">
          <img src={image} className="umbrella-sm" />
        </div>
        <div className="col-sm-3 cart-item-total">
          <p>${this.props.item.offer_price.price}</p>
        </div>
        <div className="col-sm-3">
          <p>{this.props.item.title}</p>
        </div>
        <div className="col-sm-3">
          <button
            className="remove-cart"
            onClick={() => {
              const message = `Are you sure you wish to delete ${this.props.item.title} from your cart?`;

              if (window.confirm(message)) {
                this.deleteItem(this.props.item.upc);
              }
            }}
          >
            remove
          </button>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderItem()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ deleteCart });
  return { ...actions, dispatch };
}

export default connect(
  null,
  mapDispatchToProps
)(CartItems);
