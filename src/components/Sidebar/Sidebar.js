import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { open, close, selectIsOpen } from '../../redux/Sidebar/sidebarSlice';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { lighten, darken } from 'polished';
import { BsPeopleCircle } from 'react-icons/bs';

const NavBar = styled.div`
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
  transition: 0.8s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
`;

const ToggleButton = styled.button`
  height: 50px;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 9rem;
  width: 10px;
  position: absolute;
  outline: none;
  z-index: 1;
  /* background-color: rgba(64, 194, 133, 0.693); */
  background-color: ${Colors.primaryColor};
  border-color: rgba(64, 194, 133, 0.693);
  border-left: 0;
  cursor: pointer;
  transition: 0.8s ease;
  transform: ${(props) => `translate(${props.xPosition + 300}px, 30vh)`};
  &:hover {
    background-color: ${lighten(0.1, Colors.primaryColor)};
  }
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

const SidebarMenuWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 15px 7px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 10px;
  color: ${Colors.colorBlack};
  &:hover {
    background-color: ${darken(0.1, Colors.colorSideBar)};
  }
`;

const Sidebar = ({ width, height }) => {
  const [xPosition, setX] = React.useState(-width);

  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    if (isOpen === false) {
      dispatch(open());
      setX(0);
    } else {
      dispatch(close());
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(-width); // 이게 닫혀있는 상태
    // setX(width);
  }, []);

  return (
    <React.Fragment>
      <NavBar
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <UserProfile />
        <SidebarMenu>Home</SidebarMenu>
        <SidebarMenu>TEST</SidebarMenu>
        <SidebarMenu>TEST</SidebarMenu>
        <SidebarMenu>TEST</SidebarMenu>
        <SidebarMenu>TEST</SidebarMenu>
      </NavBar>
      <ToggleButton onClick={() => toggleMenu()} className='toggle-menu' xPosition={xPosition} />
    </React.Fragment>
  );
};

const UserProfile = () => {
  return (
    <UserDataWrap>
      {/* <UserIcon> */}
      <BsPeopleCircle style={{ color: `${Colors.colorWhite}`, fontSize: `36px` }} />
      {/* </UserIcon> */}
      {/* 후에 리덕스에서 유저의 데이터를 받아와서 넣어줄 예정 */}
      <UserData>
        <UserDes>Name : 김현재</UserDes>
      </UserData>
    </UserDataWrap>
  );
};

const SidebarMenu = ({ children }) => {
  return (
    <SidebarMenuWrap>
      <Link to={'/'} style={{ color: `${Colors.colorBlack}` }}>
        {children}
      </Link>
    </SidebarMenuWrap>
  );
};

export default Sidebar;
