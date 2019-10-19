import React, { Component } from 'react'
class Children extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eta: this.props.eta,
            maggiorenne: ''


        }
    }
    time = () => {
        setInterval(() => this.aggiornoEta(), 2000)
    }
    aggiornoEta = () => {
        this.setState((state, props) => ({ eta: state.eta + 1 }))
        if (this.state.eta <= 18) {
            if (this.state.eta === 18) {
                this.props.sonoMaggiorenne(this.props.nome, this.state.eta)
                this.setState((state, props) => ({ maggiorenne: this.props.nome }))


            }
        }
    }
    render() {
        const { nome, cognome } = this.props;
        const h1Style = {
            fontSize: '80px',
            color: 'red',
            backgroundColor: 'yellow'
        }
        return (
            <div>
                <h1 style={h1Style}>Mio figlio {nome} {cognome} di eta: {this.state.eta}</h1>
                <p>{this.state.maggiorenne}</p>
                {/* { this.state.eta >= 18 ? <h2>Sono maggiorenne</h2> : <h2>Sono minorenne</h2>} */}
                {/* { this.state.eta >= 18 && <h2>{this.props.nome}</h2>} */}
                <button className='btn btn-primary' onClick={this.time}>Start</button>
            </div>

        )
    }
}
export default Children

// import React from 'react'
// const Children =(props)=>{
//     return(
//         <div>
//             <h1>Mio figlio {props.nome} {props.cognome}</h1>
//         </div>
//     )
// }
//  export default Children
// props = {nome:'Mattia'}
// this.props.nome
