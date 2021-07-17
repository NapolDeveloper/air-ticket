import React from 'react';

// components
import LocationCard from '../LocationCard/LocationCard';
import LocationGrid from './LocationGrid';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
`;

const StyleTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
`;
const StyleDes = styled.div`
  font-size: 16px;
  margin-top: 8px;
`;

const Home = () => {
  return (
    <Container>
      <Title>내 안에 숨어 있는 여행 욕구를 깨워보세요</Title>
      <Describe>인기 여행지를 발견해보세요.</Describe>
      {/* <LocationGrid /> */}
    </Container>
  );
};

const Title = ({ children }) => {
  return <StyleTitle>{children}</StyleTitle>;
};
const Describe = ({ children }) => {
  return <StyleDes>{children}</StyleDes>;
};

export default Home;
