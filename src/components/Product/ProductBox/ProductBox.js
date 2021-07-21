import React from 'react';

import styled from 'styled-components';
import Colors from '../../../styles/Colors';

// components
import ProductHeader from '../ProductHeader/ProductHeader';

const Box = styled.div`
  width: 600px;
  border: 1px solid ${Colors.colorGrey};
  background-color: white;
`;

const ProductBox = () => {
  return (
    <Box>
      <ProductHeader />
    </Box>
  );
};

export default ProductBox;
