import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// components - Sign
import Login from './components/Sign/Login';

// styles
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Fragment>
      <Container>
        <Router>
          <GlobalStyle />
          <Header />
          <Sidebar width={300} heigth={'100vh'} />
          <Switch>
            {/* 로그인, 회원가입 */}
            <Route exact path='/login' render={() => <Login />} />
          </Switch>
        </Router>
      </Container>
    </Fragment>
  );
}

export default App;
