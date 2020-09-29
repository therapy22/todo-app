import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path='/' exact component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/welcome/:name' component={WelcomeComponent} />
            <Route path='/todos' component={ListTodoComponent} />
            <Route path='/logout' component={ListTodoComponent} />
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

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a href='http://www.in28minutes.com' className='navbar-brand'>
              in28Minutes
            </a>
          </div>
          <ul className='navbar-nav'>
            <li>
              <Link className='nav-link' to='/welcome/in28minutes'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/todos'>
                Todos
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav navbar-collapse justify-content-end'>
            <li>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link
                className='nav-link'
                to='/logout'
                onClick={AuthenticationService.logout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className='footer'>
        <span className='text-muted'>All Rights Reserved 2020 @suminjung</span>
      </footer>
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

class ListTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          description: 'Learn to Dance',
          done: false,
          targetDate: new Date(),
        },
        {
          description: 'Become an Expert at React',
          done: false,
          targetDate: new Date(),
        },
        {
          description: 'Visit India',
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div class='container'>
          <table class='table'>
            <thead>
              <tr>
                <th>description</th>
                <th>Is Completed?</th>
                <th>targetDate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      /* this.setState({
        showSuccessMessage: true,
        hasLoginFailed: false,
      }); */
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
        <h1>Login</h1>
        <div className='container'></div>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {/* {this.showInvalidCredentials()} */}
        {this.state.hasLoginFailed && (
          <div className='alert alert-warning'>Invalid Credentials</div>
        )}
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
        <button className='btn btn-success' onClick={this.loginClicked}>
          Login
        </button>
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
