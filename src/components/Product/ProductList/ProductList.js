import React from 'react';

// style
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Colors.colorPrice};
`;

const ProductList = ({ airline, ticket, price, seat }) => {
  return <ListContainer>{ticket}</ListContainer>;
};

export default ProductList;
