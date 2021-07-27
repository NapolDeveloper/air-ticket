import React from 'react';

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

// style
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-bottom: 1px solid ${Colors.colorGrey};
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 100%;
  /* background-color: green; */
`;
const HeaderDate = styled.span`
  font-size: 18px;
`;

const HeaderButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProductHeader = ({ date }) => {
  return (
    <HeaderContainer>
      <ItemContainer>
        <HeaderButton>
          <BiLeftArrow />
        </HeaderButton>
        <HeaderDate>{date}</HeaderDate>
        <HeaderButton>
          <BiRightArrow />
        </HeaderButton>
      </ItemContainer>
    </HeaderContainer>
  );
};

const HeaderButton = ({ children }) => {
  return <HeaderButtonStyle>{children}</HeaderButtonStyle>;
};

export default ProductHeader;
