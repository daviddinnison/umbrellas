import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { getCartItems } from './../../actions/cart';

class CartItems extends React.Component {
  componentDidMount() {
    //   use immutable js for editing cart items
    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);
    console.log(map1.get('b') + ' vs. ' + map2.get('b')); // 2 vs. 50
    // this.props.dispatch(getCartItems()); 
  }


  renderItems() {
    return (
      <div>
        <p>{this.props.test}</p>
      </div>
    );
  }
  render() {
    return <div>{this.renderItems()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    test: state.cart.test
  };
};

export default connect(mapStateToProps)(CartItems);
