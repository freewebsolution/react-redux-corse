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
    };
    this.todoInput = React.createRef()
  }
  componentDidMount() {
    const store = createStore(storeReducer, {todos:[...todos]})
    console.log(store.getState())
    this.setState({todos: [...store.getState().todos]})
  }
  addTodo = () => {
    const todo = this.todoInput.current.value;
    alert(todo)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <button onClick={this.addTodo}>Add</button>
        <input ref={this.todoInput}/>
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
