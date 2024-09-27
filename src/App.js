import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false, id: Date.now() }];
    setTodos(newTodos);
  };

  // Toggle completion status
  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  // Update a todo
  const updateTodo = (id, newText) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Router>
      <div className="App">
        <h1>Todo List</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TodoForm addTodo={addTodo} />
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              </>
            }
          />
          <Route
            path="/edit/:id"
            element={<EditTodo todos={todos} updateTodo={updateTodo} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
