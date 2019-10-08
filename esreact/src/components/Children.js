import React, { Component } from 'react'
 class Children extends Component {
     constructor(props){
         super(props);
     }
    render() {
        return (
            <div>
               <h1>Mio figlio {this.props.nome} {this.props.cognome}</h1> 
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
