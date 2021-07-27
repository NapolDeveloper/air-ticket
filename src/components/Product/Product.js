import React from 'react';

// components
import ProductBox from './ProductBox/ProductBox';
import ProductDate from './ProductDate/ProductDate';

const Product = () => {
  return (
    <React.Fragment>
      <ProductDate />
      <ProductBox date={`2021년 04월 1일`} />
    </React.Fragment>
  );
};

export default Product;
