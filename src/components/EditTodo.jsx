import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditTodo.css';

function EditTodo({ todos, updateTodo }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentTodo, setCurrentTodo] = useState(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    const todoToEdit = todos.find(todo => todo.id === parseInt(id));
    if (todoToEdit) {
      setCurrentTodo(todoToEdit);
      setInput(todoToEdit.text);
    }
  }, [id, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      updateTodo(parseInt(id), input);
      navigate('/');
    }
  };

  if (!currentTodo) {
    return <div className="edit-todo-container">Todo not found.</div>;
  }

  return (
    <div className="edit-todo-container">
      <h2>Edit Todo</h2>
      <form className="edit-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="edit-todo-input"
          placeholder="Edit your todo..."
        />
        <button type="submit" className="edit-todo-button">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditTodo;
