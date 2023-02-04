import React from 'react';
import data from '../../data';
import './CatalogueMiddle.css';
import Product from './Product';

export default function CatalogueMiddle() {
  return (
    <div id="catalogue-middle">
      <div id="catalogue-container">
        <div id="catalogue-heading-container">
          <div id="catalogue-heading">
            <p>SHOES</p>
          </div>
          <div id="catalogue-icons">
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <button>sort by</button>
            </div>
          </div>
        </div>
        <div id="catalogue-main">
          {data.product.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
