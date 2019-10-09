import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Children from './components/Children';

export class App extends Component {
  render() {
    return (
      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
            <Children nome={'Mattia'} cognome={'Ticali'} eta={18}></Children>
            <Children nome={'Giorgio'} cognome={'Ticali'} eta ={8}/>
          </header>
        </div>
      
    )
  }
}

export default App

