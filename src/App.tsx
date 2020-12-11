import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './assets/scss/main.scss';

import AuthContainer from './components/auth/AuthContainer';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

function App() {
  const [isSignedIn , setSignedIn] = useState(false);

  return (
    <Router>
      <div className={"page " + (!isSignedIn ? 'page--auth' : '')} >
        <Switch>
          <Route exact path="/">
            <AuthContainer>
              <Login />
            </AuthContainer>
          </Route>
          <Route path="/signup">
            <AuthContainer>
              <SignUp />
            </AuthContainer>
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
