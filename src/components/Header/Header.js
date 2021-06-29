import React from 'react';
import { Link } from 'react-router-dom';

// components
import HeaderMenu from './HeaderMenu';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-bottom: 20px;
  /* background-color: #efefef; */
  /* border-bottom: 1px solid ${Colors.colorGrey}; */
`;

const HeaderLogo = styled.span`
  font-weight: bold;
  color: ${Colors.colorBlack};
  /* width: 30px; */
  /* height: 30px; */
  /* background-color: red; */
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Link to={'/'}>
        <HeaderLogo>AIR-TICKET</HeaderLogo>
      </Link>
      <HeaderMenu />
    </HeaderWrap>
  );
};

export default React.memo(Header);
