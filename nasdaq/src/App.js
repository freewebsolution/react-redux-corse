import React, { Component } from 'react'
import logo from './logo.png';
import './css/App.css';
import Stock from './components/stock/Stock';
import Cerca from './components/Cerca';
import NomeStock from './components/NomeStock';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      listaelementi: [],
      listapreferiti: [],
      inCaricamento:false,
      showError:false,
      msg:null
    }
    console.log(`1g) il costruttore crea la prima istanza Genitore`)
  }

  // -------MOUNTING CREAZIONE ----------
  componentDidMount() {
    // const stock = [

    //   {
    //     nome: 'APPL',
    //     valore: 200
    //   },
    //   {
    //     nome: 'GOOG',
    //     valore: 350
    //   }
    // ]
    // this.setState({ listaStock: stock })
  }

  // --------UPDATE AGGIORNAMENTO--------

  // static getDerivedStaeFromProps(np,ns) {
  //   return null
  // }

  // componentDidUpdate() {
  //   console.log(`4g) DidUpdate padre ${this.state.nome}`)
  // }
  // aggiornoStock = (e) => {
  //   e.preventDefault()
  //   const stock1 = [

  //     {
  //       nome: 'AMZ',
  //       valore: 250
  //     },
  //     {
  //       nome: 'MICROSOFT',
  //       valore: 750
  //     },
  //     {
  //       nome: 'APPL',
  //       valore: 1299
  //     }
  //   ]
  //   this.setState({ listaStock: stock1 })
  // }
  cercaElementi = str => {
    //alert(`Stai cercando ${str}` )
    this.getElementi(str);
  }
  getElementi = str => {
    const url = `https://api.worldtradingdata.com/api/v1/stock_search?search_term=${str}&search_by=symbol,name&limit=50&page=1&api_token=NRRb7jYOsECVJFAckq4mik6zPku8TU1TspS0k879V2Ek98vEQZBDnsSH6UgJ`;
    this.setState({inCaricamento:true,showError:false})
    fetch(url)
      .then(r => r.json())
      .then(r =>{
          const {data} = r;
        this.setState({ listaelementi: data, inCaricamento: false})
          console.log('Recupero dati ' + JSON.stringify(r))
      })
      .catch((error) => {
        this.setState({ inCaricamento: false,showError:true,msg:error.message})
        console.log('Fetch failed', error)
      })
        
  }
  render() {
    console.log(`2g) Genitore Render`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color:'gold'}}>
            Applicazione Stock Exchange
          </p>
          <Cerca onInputSearch={this.cercaElementi}/>
          <div className="container" style={{ marginTop: '20px' }}>
            <section className="listanomi">
              <div className="row">              
                  <div className="col">
                    {this.state.inCaricamento &&<p className='text-center'>Caricamento in corso ...</p>}
                    {this.state.showError && <p className='text-center'>{this.state.msg}</p>}
                    {this.state.listaelementi.map(el => <NomeStock key={el.symbol} dati={el} />)}
                  </div>               
              </div>
            </section>
            <section className="listapreferiti">
              <div className="row">               
                  <div className="col">
                    {this.state.listapreferiti.map(el => <Stock key={el.symbol} dati={el} />)}
                  </div>              
              </div>
            </section>
          </div>
        </header>
      </div>

    )
  }
}

export default App

