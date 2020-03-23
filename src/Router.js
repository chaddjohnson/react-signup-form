import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/index';
import SignupPage from './pages/signup';

const Router = () => (
  <BrowserRouter basename={process.env.BASE_PATH}>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
