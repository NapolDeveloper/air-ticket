import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

// components - module
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// components
import Home from './components/Home/Home';
import Login from './components/Sign/Login';
import Product from './components/Product/Product';

// styles
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  z-index: -99;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
  padding: 20px;
`;

function App() {
  return (
    <React.Fragment>
      <Container>
        <GlobalStyle />
        <Router>
          <Sidebar width={300} heigth={'100vh'} />
          <Header />
          <Content>
            <Switch>
              <Route exact path='/' component={Home} />
              {/* 로그인, 회원가입 */}
              {/* render를 이용할 때는 props를 전달할 때 */}
              <Route exact path='/login' component={Login} />
              <Route exact path='/product' component={Product} />
            </Switch>
          </Content>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
