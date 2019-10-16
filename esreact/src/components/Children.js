import React, { Component } from 'react'
class Children extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eta: this.props.eta,
            hobby:['Calcio', 'Nuoto', 'tennis']
        }
        setInterval(() => this.aggiornoEta(), 2000)

    }
    aggiornoEta =()=> {
        this.setState((state,props) => ({eta:state.eta +1}))
    }
    render() {
        const { nome, cognome } = this.props;
        const itemjsx = (
             <ul>{/*hobby.map(item => <li>{item}</li>)*/}</ul>
        );
        return (
            <div>
                <h1>Mio figlio {nome} {cognome} di eta: {this.state.eta}</h1>
                {/* {this.eta >= 18 ? <h2>Sono maggiorenne</h2> : <h2>Sono minorenne</h2>} */}
                {this.eta >= 18 && <h2>Sono maggiorenne</h2>}
                <ul>
                    {/* {hobby.map(item => <li>{item}</li>)} */}
                </ul>
                {itemjsx}
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
