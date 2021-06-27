import React from 'react';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { lighten } from 'polished';

const NavBar = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0;
  position: absolute;
  top: 0;
  /* border-color: ${Colors.primaryColor}; */
  padding: 40px 0;
  /* background-color: ${Colors.colorBlack}; */
  background-color: ${Colors.colorWhite};
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
  &:hover {
    background-color: ${lighten(0.1, Colors.primaryColor)};
  }
`;

const UserDataWrap = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${Colors.colorGrey};
`;

const Content = styled.div`
  margin-left: 20px;
`;

const Sidebar = ({ width, height }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(-width);
    console.log(xPosition);
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
        <Content>Test</Content>
        <Content>Test</Content>
      </NavBar>
      <ToggleButton
        onClick={() => toggleMenu()}
        className='toggle-menu'
        style={{
          transform: `translate(${xPosition + 300}px, 30vh)`
        }}
      />
    </React.Fragment>
  );
};

const UserProfile = () => {
  return <UserDataWrap></UserDataWrap>;
};

export default Sidebar;
