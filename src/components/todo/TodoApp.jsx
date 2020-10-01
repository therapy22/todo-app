import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import HeaderComponent from './HeadercComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import ListTodoComponent from './ListTodosComponent';
import FooterComponent from './FooterComponent';

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path='/' exact component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <AuthenticatedRoute
              path='/welcome/:name'
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path='/todos' component={ListTodoComponent} />
            <Route path='/logout' component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>

        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are logged out</h1>
        <div className='container'>Thank You for Using Our Application.</div>
      </>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div>
          Welcome {this.props.match.params.name}. You can manage your todos
          <Link to='/todos'> here</Link>.
        </div>
      </>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occurred.</div>;
}

export default TodoApp;
