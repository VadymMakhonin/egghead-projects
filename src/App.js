import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/add-todo';
import VisibleTodoList from './components/todo-list';
import Footer from './components/footer';

const TodoApp = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to React</h2>
    </div>
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  </div>
);

export default TodoApp;