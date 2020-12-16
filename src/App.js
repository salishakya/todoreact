import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodof = (id) => {
    const dtodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos : dtodos
    });
  }
  addTodof = (todo) => {
    todo.id = Math.random();
    let atodos = [...this.state.todos, todo];
    this.setState({
      todos : atodos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todosp={this.state.todos} deleteTodop={this.deleteTodof} />
        <AddTodo addTodop={this.addTodof} />
      </div>
    );
  }
}

export default App;