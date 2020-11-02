import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed': 
        setFilterTodo(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  };

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    let todoLocal = []
    if (localStorage.getItem('todos'))
      todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  };

  return (
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filterTodo={filterTodo}
      />
    </div>
  );
}

export default App;
