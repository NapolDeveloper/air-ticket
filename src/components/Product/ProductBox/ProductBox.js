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

// 후에 서버에서 json 형태로 데이터를 받아올 예정

const AirlineData = ['Jeju', 'Asiana', 'Tway'];

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
  }
];

const ProductBox = ({ date }) => {
  return (
    <Box>
      <ProductHeader date={date} />
      {List.map((list) => {
        return <ProductList key={list.id} airline={list.airline} ticket={list.ticket} seat={list.seat} price={list.price} />;
      })}
    </Box>
  );
};

export default ProductBox;
