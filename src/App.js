import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// components
import Header from './components/Header/Header';

// components - Sign
import Login from './components/Sign/Login';

// styles
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Fragment>
      <Router>
        <GlobalStyle />
        <Header />
        <Container>
          <Switch>
            {/* 로그인, 회원가입 */}
            <Route exact path='/login' render={() => <Login />} />
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
