import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItems from './ProductItems';
import { getProductsRequest } from './../../actions/products';

import './styles/products.css';

class ProductGrid extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProductsRequest());
  }

  showProducts() {
    const items = this.props.items.map((item, index) => {
      return <ProductItems item={item} key={index} />;
    });

    return <div className="products-container flex-grid">{items}</div>;
  }

  render() {
    return (
      <div className="products">
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
