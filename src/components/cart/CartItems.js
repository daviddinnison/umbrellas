import React, { Component } from 'react';
import { Map } from 'immutable';
import { getCartRequest, deleteCart } from './../../actions/cart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CartItems extends React.Component {
  deleteItem(upc) {
    console.log('you will delete this item', upc);
    this.props.dispatch(deleteCart(upc));
  }

  renderItem() {
    return (
      <div>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.quantity}</p>
        <p>{this.props.item.upc}</p>
        <button
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
