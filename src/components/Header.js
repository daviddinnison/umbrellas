import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./styles/header.css";
import CartContainer from './cart/CartContainer.js';


class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>Umbrella Shopping</h1>
        
        <CartContainer />
      </header>
    );
  }
}

export default Header;
