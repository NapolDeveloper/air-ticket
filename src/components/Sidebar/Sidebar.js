import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { open, close, selectIsOpen, selectSideWidth } from '../../redux/Sidebar/sidebarSlice';
import { selectIsLogged, selectUserData } from '../../redux/User/userSlice';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { lighten, darken } from 'polished';
import { BsPeopleCircle } from 'react-icons/bs';

const NavBar = styled.div`
  z-index: 99;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 10px 10px 0;
  position: absolute;
  top: 0;
  /* border-color: ${Colors.primaryColor}; */
  padding: 40px 10px;
  /* background-color: ${Colors.colorBlack}; */
  background-color: ${Colors.colorSideBar};
  transition: 0.4s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
`;

// UserProfile style
const UserDataWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  background-color: ${Colors.colorGrey};
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 10px 30px;
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;
const UserDes = styled.span`
  color: white;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  border-radius: 10px;
  padding: 15px 10px;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  text-align: left;
  color: ${Colors.colorBlack};
  transition: 0.2s ease-in;
  margin-top: 3px;
  margin-bottom: 3px;
  &:hover {
    background-color: ${darken(0.1, Colors.colorSideBar)};
    padding-left: 15px;
  }

  &.selected {
    font-weight: bold;
    background-color: ${darken(0.1, Colors.colorSideBar)};
  }
`;

const DivideStroke = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.colorGrey};
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Sidebar = ({ width, height }) => {
  const sideWidth = useSelector(selectSideWidth);

  const dispatch = useDispatch();

  // const toggleMenu = () => {
  //   if (isOpen === false) {
  //     dispatch(open());
  //   } else {
  //     dispatch(close());
  //   }
  // };

  return (
    <React.Fragment>
      <NavBar
        style={{
          transform: `translatex(${sideWidth}px)`,
          width: width,
          minHeight: height
        }}
      >
        <UserProfile />
        <SidebarMenu />
      </NavBar>
    </React.Fragment>
  );
};

const UserProfile = () => {
  const isLogged = useSelector(selectIsLogged);
  const userData = useSelector(selectUserData);
  return (
    <UserDataWrap>
      {/* <UserIcon> */}
      <BsPeopleCircle style={{ color: `${Colors.colorWhite}`, fontSize: `36px` }} />
      {/* </UserIcon> */}
      {/* 후에 리덕스에서 유저의 데이터를 받아와서 넣어줄 예정 */}
      <UserData>
        <UserDes>{isLogged ? `이름 : ${userData.name}` : `로그인해주세요`}</UserDes>
      </UserData>
    </UserDataWrap>
  );
};

// 나중에 menu 재사용 가능한 컴포넌트로 변경
const SidebarMenu = () => {
  const isLogged = useSelector(selectIsLogged);
  return (
    <React.Fragment>
      {isLogged ? null : (
        <StyledNavLink activeClassName='selected' exact to='/login'>
          로그인
        </StyledNavLink>
      )}
      <DivideStroke />
      <StyledNavLink activeClassName='selected' exact to='/'>
        Home
      </StyledNavLink>
      <StyledNavLink activeClassName='selected' exact to='/product'>
        항공편 예약
      </StyledNavLink>
      <DivideStroke />
    </React.Fragment>
  );
};

export default Sidebar;
