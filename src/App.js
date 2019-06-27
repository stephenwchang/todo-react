import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Wash the dishes',
        completed: true
      },
      {
        id: 2,
        title: 'Study DS & Algos',
        completed: false
      },
      {
        id: 3,
        title: 'Learn React',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
