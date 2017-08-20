import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import TodoApp from './App';
import { createStore } from 'redux';
import reducer from './reducer';

ReactDOM.render((
  <Provider store={createStore(reducer)}>
    <TodoApp />
  </Provider>
), document.getElementById('root'));
