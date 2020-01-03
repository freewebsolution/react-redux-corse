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
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case 'REMOVE_TODO':
      return {
        todos: [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice(action.id + 1)
        ]
      }
    default:
      return { ...state };
  }
}
const store = createStore(storeReducer, { todos: [...todos] })
console.log(store.getState())

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.todoInput = React.createRef()
  }
  componentDidMount() {
    this.setState({ todos: [...store.getState().todos] })
    store.subscribe(() => {
      this.setState({ todos: [...store.getState().todos] })
      console.log(store.getState())
    })
  }
  addTodo = () => {
    const todo = this.todoInput.current.value;
    store.dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }

  removeTodo = i => {
    console.log(i)
    store.dispatch({
      type: 'REMOVE_TODO',
      id: i
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <button onClick={this.addTodo}>Add</button>
        <input ref={this.todoInput} />
        <ul>
          {
            this.state.todos.map((todo, i) => <li key={i}>{todo}<button onClick={this.removeTodo.bind(null, i)}> - </button></li>)
          }
        </ul>
      </div>
    );
  }
}


export default App;
