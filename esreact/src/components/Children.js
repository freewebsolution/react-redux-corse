import React, { Component } from 'react'
 class Children extends Component {
     constructor(props){
         super(props);
         this.eta = this.props.eta;
         console.log(typeof(this.props.eta))
     }
    render() {
        const {nome,cognome} = this.props;
        const hobby = ['Calcio','Nuoto','tennis'];
        const itemjsx = (
                        <ul>{ hobby.map(item => <li>{item}</li>) }</ul>
                        );
        setInterval(() => {this.eta ++;console.log(this.eta)},2000)
        return (
            <div>
               <h1>Mio figlio {nome} {cognome} di eta: {this.eta}</h1>
                {/* {this.eta >= 18 ? <h2>Sono maggiorenne</h2> : <h2>Sono minorenne</h2>} */}
                {this.eta >= 18 && <h2>Sono maggiorenne</h2>}
               <ul>
                   {hobby.map(item =><li>{item}</li>)}
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
