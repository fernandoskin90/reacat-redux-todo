import React, { Component } from 'react';
import TodoList from './components/TodoList/index';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'study'},
      {id: 2 , content: 'play with my pets'}
    ]
  }
  deleteTodo = (id) => {
    const todosFilter = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todosFilter
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
