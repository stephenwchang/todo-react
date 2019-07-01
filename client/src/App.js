import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  // get request to load todos
  componentDidMount() {
    axios.get('http://localhost:8080/todos/json')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = (id) => {
    axios.put(`http://localhost:8080/todos/update/${id}`)
      .then(res => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo._id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        })});
      });
  }

  // Delete Todo Item
  delTodo = (id) => {
    axios.delete(`http://localhost:8080/todos/delete/${id}`)
      .then(res => {
        let deletedTodoList = this.state.todos.filter(todo => todo._id !== id);
        this.setState({ todos: deletedTodoList })
      });
  }

  addItem = (title) => {
    axios.post('http://localhost:8080/todos/new', {
      title: title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
   }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addItem={this.addItem} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
