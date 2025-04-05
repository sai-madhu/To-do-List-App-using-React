import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggle, onEdit, onDelete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-task">No tasks yet...</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;
