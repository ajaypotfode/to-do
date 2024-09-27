import React from 'react';
import { Link } from 'react-router-dom';
import './TodoItem.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <div className="buttons">
        <Link to={`/edit/${todo.id}`} className="edit-button">
          Edit
        </Link>
        <button onClick={() => deleteTodo(todo.id)} className="delete-button">
          &times;
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
