import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// components - Sign
import Home from './components/Home/Home';
import Login from './components/Sign/Login';

// styles
import GlobalStyle from './styles/GlobalStyle';
import React from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  z-index: -99;
`;

function App() {
  return (
    // <React.Fragment>
    <Container>
      <GlobalStyle />
      <Router>
        <Sidebar width={300} heigth={'100vh'} />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* 로그인, 회원가입 */}
          {/* render를 이용할 때는 props를 전달할 때 */}
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </Container>
    // </React.Fragment>
  );
}

export default App;
