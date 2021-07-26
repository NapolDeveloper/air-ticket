import React from 'react';

// 후에 서버에서 json 형태로 데이터를 받아올 예정

const AirlineData = ['Jeju', 'Asiana', 'Tway'];

const TicketData = ['일반석', '할인석', '특가석', '특별석'];

const List = [
  {
    airline: AirlineData[0],
    ticket: TicketData[0],
    seat: 4,
    price: 10000
  }
];

const ProductList = ({}) => {
  return <div></div>;
};

export default ProductList;
