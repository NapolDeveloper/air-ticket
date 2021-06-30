import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { open, close, selectIsOpen } from '../../redux/Sidebar/sidebarSlice';

// components
import HeaderMenu from './HeaderMenu';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 20px;
  font-size: 20px;
  /* line-height: 22px; */
  border-radius: 5px;
  z-index: 99;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${Colors.colorButtonHover};
  }
`;
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
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();
  const handleToggle = () => {
    if (isOpen === false) {
      dispatch(open());
    } else {
      dispatch(close());
    }
  };
  return (
    <HeaderWrap>
      <HeaderHamburger onClick={handleToggle}>
        <GiHamburgerMenu />
      </HeaderHamburger>
      <Link to={'/'}>
        <HeaderLogo>AIR-TICKET</HeaderLogo>
      </Link>
      <HeaderMenu />
    </HeaderWrap>
  );
};

export default React.memo(Header);
