import React, { Component } from 'react';
import { connect } from 'react-redux';


import ProductItems from './ProductItems';

import { getProductsRequest } from './../../actions/products';


class ProductGrid extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProductsRequest()); 
  }

  showProducts() {
    if (this.props.items) {
      console.log('ITEM PROPS', this.props.items);
      // return this.props.items.map((item, index) => {
      //   return <ProductItems item={item} key={index}/>;
      // })
    }
  }

  render() {
    return (
      <div>
        {this.showProducts()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.products.items
  };
};

export default connect(mapStateToProps)(ProductGrid);
