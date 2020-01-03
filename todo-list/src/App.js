import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

let todos = [
  'fare la spesa',
  'giocare a calcetto',
  'fare il tagliando',
  'andare in banca'
]
function storeReducer(state = {}, action) {
  console.log('Reduce', state)
  return {...state};
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    const store = createStore(storeReducer, {todos:[...todos]})
    console.log(store.getState())
    this.setState({todos: [...store.getState().todos]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <ul>
          {
            this.state.todos.map((todo, i) => <li key={i}>{todo}</li>)
          }
        </ul>
      </div>
    );
  }
}


export default App;
