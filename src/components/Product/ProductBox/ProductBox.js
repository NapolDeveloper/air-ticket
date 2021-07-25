import React from 'react';

import styled from 'styled-components';
import Colors from '../../../styles/Colors';

// components
import ProductHeader from '../ProductHeader/ProductHeader';
import ProductList from '../ProductList/ProductList';

const Box = styled.div`
  width: 600px;
  border: 1px solid ${Colors.colorGrey};
  background-color: white;
`;

const ProductBox = ({ date }) => {
  return (
    <Box>
      <ProductHeader date={date} />
      <ProductList />
    </Box>
  );
};

export default ProductBox;
