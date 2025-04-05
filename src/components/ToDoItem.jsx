import React from 'react';

function ToDoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <div className="todo-item">
      <input type="text" value={todo.text} readOnly />
      <div className="buttons">
        <button className="complete-btn" onClick={() => onToggle(todo.id)}>
          {todo.completed ? 'Undo' : 'Complete'} ✔
        </button>
        <button className="edit-btn" onClick={() => onEdit(todo.id)}>
          Edit ✏️
        </button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          Delete 🗑️
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
