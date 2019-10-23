import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Search from './components/Search';

export class App extends Component {
  invioFormGenitore=(cerca) => {
    alert ('Messaggio dal genitore hai cercato ' + cerca)
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <Search nome = 'cerca' onSubmit = {this.invioFormGenitore} />
        </header>
      </div>

    )
  }
}

export default App

