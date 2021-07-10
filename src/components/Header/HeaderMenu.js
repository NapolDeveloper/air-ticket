import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { selectIsLogged, login, logout } from '../../redux/User/userSlice';

// styles
import Colors from '../../styles/Colors';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
const MenuItem = styled.div`
  margin: 0 6px;
  cursor: pointer;
  position: relative;
  padding: 7px 4px;

  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1.5px;
    background: ${Colors.primaryGradientColor};
    transition: 0.2s ease-in-out;
  }
  &:hover::after {
    width: 80%;
    margin-left: -40%;
    /* transition: all 300ms ease 0s; */
  }
`;

const Button = styled.button`
  color: ${Colors.colorBlack};
  font-size: 13px;
  width: 75px;
  padding: 8px 15px;
  background: transparent;
  border: 1px solid ${Colors.primaryColor};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  font-weight: bold;
  margin-left: 10px;
  &:hover {
    color: white;
    &:after {
      height: 100%;
    }
  }
  &:after {
    background: ${Colors.primaryColor};
    content: '';
    position: absolute;
    z-index: -1;
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
    transition: 0.3s ease-in-out;
  }
`;

const StyleLoginButton = styled(Button)``;
const StyleProfileButton = styled(Button)``;

const HeaderMenu = (props) => {
  const isLogged = useSelector(selectIsLogged);
  return (
    <MenuWrap>
      <MenuItem>test1</MenuItem>
      <MenuItem>test2</MenuItem>
      {isLogged ? <ProfileButton /> : <LoginButton />}
    </MenuWrap>
  );
};

const LoginButton = () => {
  return (
    <Link to={'/login'}>
      <StyleLoginButton>로그인</StyleLoginButton>
    </Link>
  );
};
const ProfileButton = () => {
  return (
    <Link to={'/profile'}>
      <StyleProfileButton>프로필</StyleProfileButton>
    </Link>
  );
};

export default HeaderMenu;
