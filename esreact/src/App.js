import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import Children from './components/Children';

export class App extends Component {
  constructor(props) {
    super(props)
    console.log(`1g) il costruttore crea la prima istanza Genitore`)
  }

  // -------MOUNTING CREAZIONE ----------
  componentDidMount () {
    console.log(`3g) Genitore didMount`)
  }

  // --------UPDATE AGGIORNAMENTO--------

  // static getDerivedStaeFromProps(np,ns) {
  //   return null
  // }

  // componentDidUpdate() {
  //   console.log(`4g) DidUpdate padre ${this.state.nome}`)
  // }
  render() {
    console.log(`2g) Genitore Render`)
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
          <Children />
        </header>
      </div>

    )
  }
}

export default App

