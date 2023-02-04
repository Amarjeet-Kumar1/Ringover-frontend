import React from 'react';
import Rating from '../Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-name">
        <p>{product.name}</p>
      </div>
      <div className="product-price-rating">
        <div className="product-price">
          <p>Rs. {product.price}/-</p>
        </div>

        <Rating rating={product.rating} />
      </div>
    </div>
  );
}
