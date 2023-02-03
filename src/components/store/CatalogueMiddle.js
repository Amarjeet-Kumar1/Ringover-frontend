import React from 'react';
import './CatalogueMiddle.css';

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
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <button>sort by</button>
            </div>
          </div>
        </div>
        <div id="catalogue-main"></div>
      </div>
    </div>
  );
}
