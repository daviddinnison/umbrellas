import React, { Component } from 'react';
import { Map } from 'immutable';
import { getCartRequest } from './../../actions/cart';

class CartItems extends React.Component {
  componentDidMount() {
    //   use immutable js for editing cart items
    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);
    // console.log(map1.get('b') + ' vs. ' + map2.get('b')); // 2 vs. 50
  }

  deleteItem() {
    console.log('you will delete this item', this.props.item);
  }

  renderItem() {
    return (
      <div>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.quantity}</p>
        <button
          onClick={() => {
            const message = `Are you sure you wish to delete ${this.props.item.title} from your cart?`;

            if (window.confirm(message)) {
              this.deleteItem();
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

export default CartItems;
