import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
};

const store = createStore(counter);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: store.getState()};

    store.subscribe(() => {
      this.setState({counter: store.getState()});
    });
  }

  increment() {
    store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    store.dispatch({type: 'DECREMENT'});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {this.state.counter}
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default App;

