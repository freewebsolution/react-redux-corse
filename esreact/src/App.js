import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Children from './components/Children';

export class App extends Component {
  messaggio = (nome, eta,maggiorenne) => {
    alert(`${maggiorenne} è diventato maggiorenne ha compiuto ${eta} anni`)
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
          <Children nome={'Mattia'} cognome={'Ticali'} eta={15} sonoMaggiorenne={this.messaggio}></Children>
          <Children nome={'Giorgio'} cognome={'Ticali'} eta={8} />
        </header>
      </div>

    )
  }
}

export default App

