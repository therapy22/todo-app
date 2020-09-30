import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
import { Route, Redirect } from 'react-router-dom';

class AuthenticatedRoute extends Component {
  render() {
    if (AuthenticationService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to='/login' />;
    }
    // console.log(...this.props);
  }
}

export default AuthenticatedRoute;
