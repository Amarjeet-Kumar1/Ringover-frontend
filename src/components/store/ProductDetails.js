import React from 'react';
import './ProductDetails.css';
import data from '../../data';
import Rating from '../Rating';

export default function ProductDetails(props) {
  const product = data.product[0];
  return (
    <div id="product-details">
      <div id="product-details-container">
        <div id="product-heading-container">
          <p>
            <i className="fa fa-angle-left "></i>
          </p>

          <p>your design space</p>
        </div>
        <div id="product-image-design">
          <div id="product-main-image">
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div id="product-sub-image">
            {[1, 2, 3].map((n) => (
              <div className="product-image" key={n}>
                <img src={product.imgUrl} alt={product.name} />
              </div>
            ))}
          </div>
          <div id="product-design-center">
            <div id="design-heading">
              <p className="large">{product.name}</p>
              <p>by KICKSUP and you</p>
            </div>
            <div id="design-rating">
              <Rating rating={product.rating} />
              <p className="small num-rating">{product.numReviews} reviews</p>
            </div>
            <div id="design-price">
              <p>Rs. {product.price}/-</p>
              <p className="small">
                Get an exclusive 20% off shopping with HDFC bank
              </p>
            </div>
            {['Front', 'Middle', 'Back', 'Sole'].map((side) => (
              <div className="choose-design" key={side}>
                <div className="design-side">
                  <p>{side}</p>
                </div>
                {[1, 2, 3].map((no) => (
                  <div className="design" key={no}>
                    <img
                      src={`/images/products/design${no}.png`}
                      alt={`design${no}`}
                    />
                  </div>
                ))}
              </div>
            ))}

            <div className="choose-design">
              <div className="design-side">
                <p>Size</p>
              </div>
              {[7, 8, 9, 10].map((size) => (
                <div className="design border" key={size}>
                  <p>{size}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="rate-product">
          <p>Rate product</p>
          <Rating rating="0" />
        </div>
        <div id="details-buttons">
          <button>share design</button>
          <button className="black">add to cart</button>
        </div>
      </div>
    </div>
  );
}
