import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo collection">
      {
        todos.length ? todos.map(({ id, content }) => (
          <div className="collection-item" key={id}>
            <span onClick={() => deleteTodo(id)} >{content}</span>
          </div>
        )) : (
          <p className="center">You have not Todo's yet</p>
        )
      }
    </div>
  );
}

export default TodoList;
