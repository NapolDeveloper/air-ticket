import React from 'react';

// style
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: ${Colors.colorPrice};
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: yellow;
`;

const Ticket = styled(DataContainer)``;
const AirLine = styled(DataContainer)``;
const Price = styled(DataContainer)``;
const Seat = styled(DataContainer)``;

const ProductList = ({ airline, ticket, price, seat }) => {
  return (
    <ListContainer>
      <AirLine>{airline}</AirLine>
      <Ticket>{ticket}</Ticket>

      <Seat>{seat}석</Seat>
      <Price>{price}원</Price>
    </ListContainer>
  );
};

export default ProductList;
