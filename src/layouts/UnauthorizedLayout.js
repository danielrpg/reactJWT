import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from '../components/login/Login';


const UnauthorizedLayout = () => (
  <Container>
      
      <Switch>
          <Route path="/auth/login" component={Login} />
          <Redirect to="/auth/login" />
      </Switch>
  </Container>
);

export default UnauthorizedLayout;
