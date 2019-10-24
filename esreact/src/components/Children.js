import React, { Component } from 'react';

class Children extends Component {

    constructor(props) {
        super(props);
        this.state = { nome: this.props.nome, valore: this.props.valore };
        console.log('1f) FIGLIO Creo istanza');
    }

    // static getDerivedStateFromProps(np, ps) {
    //     console.log('1fa) FIGLIO check props ');
    //     return null;
    // }

    componentDidMount() {
        console.log('3f) FIGLIO DidMount ');
    }

    componentDidUpdate() {
        console.log('4f) FIGLIO Update ');
    }

    aggiornoStock = () => {
        this.setState({ valore: 300 })
    }

    render() {
        console.log('2f) FIGLIO Render');
        return (
            <div className="">
                <div className="row mytube">
                    <div className="col-md-4">
                        <h2>{this.props.nome}</h2>
                        <p>MyTube</p>
                    </div>
                    <div className="col-md-4">
                        <h2>{this.state.risultato}</h2>
                        <p>Video</p>
                    </div>
                    <div className="col-md-4">
                        <h2 onClick={this.aggiornoLista}><i className="fas fa-sync-alt"></i></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Children

