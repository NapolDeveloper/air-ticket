import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  /* background-color: red; */
`;
const Button = styled.div`
  cursor: pointer;
`;
const Home = () => {
  return (
    <Container>
      Home
      <Button onClick={() => console.log('test')}>test</Button>
    </Container>
  );
};

export default Home;
