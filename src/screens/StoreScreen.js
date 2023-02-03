import React from 'react';
import CartSide from '../components/store/CartSide';
import CatalogMiddle from '../components/store/CatalogueMiddle';
import FilterSide from '../components/store/FilterSide';
import ProductDetails from '../components/store/ProductDetails';

import './StoreScreen.css';

export default function StoreScreen() {
  return (
    <div id="store-screen">
      <FilterSide />
      <CatalogMiddle />
      {/* <ProductDetails /> */}
      <CartSide />
    </div>
  );
}
