import React, { Component } from 'react'
 class NomeStock extends Component {
    render() {
        return (
            <div className='nomestock'>
                <i className="fas fa-plus-circle"></i>{this.props.dati.symbol} - {this.props.dati.name} 
            </div>
        )
    }
}

export default NomeStock
