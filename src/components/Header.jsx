import React, { useState, useEffect } from 'react';

function Header({ onAddTodo, editMode }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (!editMode) {
      setInput('');
      const inputBox = document.getElementById('todo-input');
      if (inputBox) {
        inputBox.value = '';
      }
    }
  }, [editMode]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    onAddTodo(input);
    setInput('');
  };

  return (
    <div className="header">
      <h1>Todolist-App</h1>
      <div className="input-group">
        <input
          id="todo-input"
          type="text"
          placeholder="enter todos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editMode ? 'Update' : 'Add'}</button>
      </div>
    </div>
  );
}

export default Header;
