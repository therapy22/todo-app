import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <Route path='/' exact component={LoginComponent} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/welcome' component={WelcomeComponent} />
        </Router>

        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome in28minutes</div>;
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'in28minutes',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    /* this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this); */
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /* handleUsernameChange(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  } */

  loginClicked() {
    if (
      this.state.username === 'in28minutes' &&
      this.state.password === 'dummy'
    ) {
      console.log('Successful');
      this.setState({
        showSuccessMessage: true,
        hasLoginFailed: false,
      });
    } else {
      console.log('Faild');
      this.setState({
        showSuccessMessage: false,
        hasLoginFailed: true,
      });
    }
  }

  render() {
    return (
      <div>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {/* {this.showInvalidCredentials()} */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Sucessfull</div>}
        {/* <ShowLoginSuccessful
          showSuccessMessage={this.state.showSuccessMessage}
        /> */}
        User Name:{''}
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{''}
        <input
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }

  //just tried to replace function with function which is inside the component
  /* showInvalidCredentials() {
    if (this.state.hasLoginFailed) {
      return <div>Invalid Credentials</div>;
    } else {
      return null;
    }
  } */
}

function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  }
  return null;
}

function ShowLoginSuccessful(props) {
  if (props.showSuccessMessage) {
    return <div>Login Sucessfull</div>;
  }
  return null;
}

export default TodoApp;
