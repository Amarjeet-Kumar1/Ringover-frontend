import React from 'react';
import './Store.css';

export default function CartSide() {
  return (
    <div id="cart-side">
      <div id="cart-side-container">
        <div id="cart-heading-container">
          <div id="cart-heading">
            <p>CART</p>
          </div>
          <div id="cart-icons">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
        <div id="cart-main">
          <p>What's stopping you, designer? </p>
        </div>
        <div id="cart-bottom-icon">
          <div id="home-location">
            <i className="fa-solid fa-location-dot"></i>
            <p>Home</p>
          </div>
          <div id="select-date">
            <i className="fa-regular fa-calendar"></i>
            <p>Select Date</p>
          </div>
        </div>
        <div id="cart-order">
          <button>order now</button>
        </div>
      </div>
    </div>
  );
}
