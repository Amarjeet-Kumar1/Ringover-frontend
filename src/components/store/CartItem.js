import React from 'react';
import data from '../../data';
import './CartItem.css';

export default function CartItem() {
  const product = data.product[0];
  return (
    <div className="product-cart">
      <div className="product-cart-image">
        <img src={product.imgUrl} alt={product.name} />
        <span className="cross">
          <i className="fa fa-times-circle-o"></i>
        </span>
      </div>
      <div className="product-cart-details">
        <div className="product-cart-heading">
          <p className="product-cart-name">{product.name}</p>
          <p className="product-cart-small">by KICKSUP and you</p>
        </div>
        <div className="product-cart-price">
          <p>Rs. {product.price}/-</p>
        </div>
      </div>
    </div>
  );
}
