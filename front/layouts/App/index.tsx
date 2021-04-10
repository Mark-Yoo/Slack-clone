import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// page 단위의 code splitting을 위한 loadable
import loadable from '@loadable/component';
// import LogIn from '@pages/LogIn';
// import SignUp from '@pages/SignUp';

// loadable에 콜백으로 전달
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace" component={Workspace} />
    </Switch>
  );
};

export default App;
