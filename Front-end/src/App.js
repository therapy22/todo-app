import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}

/* class LearningComponents extends Component {
  render() {
    return (
      <div className='LearningComponents'>
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
} */

export default App;
