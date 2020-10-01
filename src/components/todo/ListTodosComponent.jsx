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

class ListTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Learn to Dance',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: 'Become an Expert at React',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
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
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>description</th>
                <th>Is Completed?</th>
                <th>targetDate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
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

export default ListTodoComponent;