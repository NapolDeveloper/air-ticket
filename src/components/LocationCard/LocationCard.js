import React from 'react';

import styled from 'styled-components';
import Colors from '../../styles/Colors';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 1;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(300 / 600 * 100%);
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* 아래 이미지 url props로 받아서 렌더링 시켜줘야함 */
  background-image: url(${({ image }) => image});
`;

// CardDescription
const CardDeswrap = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
`;
const CardDesTitle = styled.span`
  font-size: 18px;
`;
const CardDesPrice = styled.span`
  font-size: 14px;
  margin-top: 4px;
  color: ${Colors.colorPrice};
`;

const LocationCard = (props) => {
  const { image, title, price } = props;
  return (
    <CardContainer>
      <Card>
        <CardImage image={image} />
      </Card>
      <CardDescription title={title} price={price} />
    </CardContainer>
  );
};

const CardDescription = ({ title, price }) => {
  return (
    <CardDeswrap>
      <CardDesTitle>{title}</CardDesTitle>
      <CardDesPrice>항공권 {price}~</CardDesPrice>
    </CardDeswrap>
  );
};

export default LocationCard;
