import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CartSide from '../components/store/CartSide';
import CatalogMiddle from '../components/store/CatalogueMiddle';
import FilterSide from '../components/store/FilterSide';
import ProductDetails from '../components/store/ProductDetails';
import data from '../data';
import { Store } from '../Store';
import './StoreScreen.css';

export default function StoreScreen() {
  const [queryParameters] = useSearchParams();
  const [product, setProduct] = useState({});
  // const {state, dispatch: ctxDispatch} = useContext(Store);
  // const {
  //   cart: {
  //     cartItems
  //   }
  // } = state;
  useEffect(() => {
    const fetchData = () => {
      if (queryParameters.has('id')) {
        const id = queryParameters.get('id');
        const pro = data.product.find((one) => one.id === id);
        if (pro !== undefined) {
          setProduct(pro);
        }
      }
    };
    fetchData();
  }, [queryParameters]);

  return (
    <div className="store-screen">
      {queryParameters.has('id') ? (
        <ProductDetails product={product} />
      ) : (
        <>
          <FilterSide />
          <CatalogMiddle />
        </>
      )}

      <CartSide />
    </div>
  );
}
