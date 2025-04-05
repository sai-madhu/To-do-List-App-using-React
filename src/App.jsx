import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const addTodo = (taskText) => {
    if (taskText.trim() === '') {
      return;
    }

    if (editTaskId !== null) {
      const updatedTasks = todoList.map((task) => {
        if (task.id === editTaskId) {
          return { ...task, text: taskText };
        }
        return task;
      });

      setTodoList(updatedTasks);
      setEditTaskId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };

      setTodoList([...todoList, newTask]);
    }
  };

  const deleteTodo = (taskId) => {
    const remainingTasks = todoList.filter((task) => task.id !== taskId);
    setTodoList(remainingTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = todoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTodoList(updatedTasks);
  };

  const editTodo = (taskId) => {
    const selectedTask = todoList.find((task) => task.id === taskId);
    if (selectedTask) {
      setEditTaskId(taskId);
      const inputBox = document.getElementById('todo-input');
      if (inputBox) {
        inputBox.value = selectedTask.text;
      }
    }
  };

  return (
    <div className="app-container">
      <Header onAddTodo={addTodo} editMode={editTaskId !== null} />
      <ToDoList
        todos={todoList}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
