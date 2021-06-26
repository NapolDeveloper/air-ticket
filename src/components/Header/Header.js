import React from 'react';

// components
import HeaderMenu from './HeaderMenu';

// styles
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-bottom: 20px;
  /* background-color: #efefef; */
`;

const HeaderLogo = styled.span`
  font-weight: bold;
  /* width: 30px; */
  /* height: 30px; */
  /* background-color: red; */
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo>AIR-TICKET</HeaderLogo>
      <HeaderMenu />
    </HeaderWrap>
  );
};

export default Header;
