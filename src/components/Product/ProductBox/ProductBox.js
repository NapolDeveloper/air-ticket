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

const ListContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: scroll;
`;

// 후에 서버에서 json 형태로 데이터를 받아올 예정

const AirlineData = ['제주항공', '아시아나항공', '진에어'];

const TicketData = ['일반석', '할인석', '특가석', '특별석'];

const List = [
  {
    id: 0,
    airline: AirlineData[0],
    ticket: TicketData[0],
    seat: 4,
    price: 10000
  },
  {
    id: 1,
    airline: AirlineData[1],
    ticket: TicketData[1],
    seat: 4,
    price: 32000
  },
  {
    id: 2,
    airline: AirlineData[2],
    ticket: TicketData[2],
    seat: 4,
    price: 54000
  },
  {
    id: 3,
    airline: AirlineData[2],
    ticket: TicketData[3],
    seat: 9,
    price: 100000
  },
  {
    id: 4,
    airline: AirlineData[1],
    ticket: TicketData[0],
    seat: 2,
    price: 60000
  },
  {
    id: 5,
    airline: AirlineData[1],
    ticket: TicketData[2],
    seat: 1,
    price: 72000
  },
  {
    id: 6,
    airline: AirlineData[0],
    ticket: TicketData[1],
    seat: 3,
    price: 94500
  }
];

const ProductBox = ({ date }) => {
  return (
    <Box>
      <ProductHeader date={date} />
      <ListContainer>
        {List.map((list) => {
          return <ProductList key={list.id} airline={list.airline} ticket={list.ticket} seat={list.seat} price={list.price.toLocaleString()} />;
        })}
      </ListContainer>
    </Box>
  );
};

export default ProductBox;
