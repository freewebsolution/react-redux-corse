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
          action.payload,
          ...state.todos
         
        ]
      }
    default:
      return { ...state }
  }

}
const store = createStore(storeReducer, { todos: [...todos] })


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
      console.log(store.getState())
      this.setState({ todos: [...store.getState().todos] })
    })
  }
  addTodo = () => {
    const todo = this.todoInput.current.value;
    store.dispatch({
      type: 'ADD_TODO',
      payload: todo
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
            this.state.todos.map((todo, i) => <li key={i}>{todo}</li>)
          }
        </ul>
      </div>
    );
  }
}


export default App;
