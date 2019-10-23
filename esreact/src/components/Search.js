import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cerca: this.props.nome,
            note: '',
            azioni: '',
            ck1: false,
            ck2: false
        }
    }
    onChange = (e) => {
        console.log(e.target.value)
        this.setState({ cerca: e.target.value })
    }
    onChangeTexta = (e) => {
        this.setState({ note: e.target.value })
    }
    onChangeSelect = (e) => {
        console.log(e.target.value)
        this.setState({ azioni: e.target.value })
    }
    onChangeCk = (e) => {
        console.log("Ho cliccato sul campo checkbox " + e.target.name + ':' + e.target.checked)
        this.setState({ [e.target.name]: e.target.checked })
    }
    invioDati = (e) => {
        e.preventDefault()
        //alert('idati sono stati inviati correttamente ' + this.state.cerca)
        this.props.onSubmit(this.state.cerca)
    }
    render() {
        return (
            <div>
                <form className='' onSubmit={this.invioDati}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" name='cerca' value={this.state.cerca} onChange={this.onChange} />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <select name='azioni' value={this.state.azioni} className="form-control form-control-lg" onChange={this.onChangeSelect}>
                            <option value='-'>Seleziona</option>
                            <option value='lucio'>Lucio</option>
                            <option value='Mattia'>Mattia</option>
                            <option value='Giorgio'>Giorgio</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input name='ck1' className="form-check-input" type="checkbox" checked={this.state.ck1} id="defaultCheck1" onChange={this.onChangeCk} />
                        <label className="form-check-label" >
                            Mattia
                            </label>
                    </div>
                    <div className="form-check">
                        <input name='ck2' className="form-check-input" type="checkbox" checked={this.state.ck2} onChange={this.onChangeCk} />
                        <label className="form-check-label">
                            Lucio
                            </label>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <textarea className="form-control" name="note" id="" cols="30" rows="10" value={this.state.note} onChange={this.onChangeTexta} />
                    </div>
                    <button type="submit" className="btn btn-warning mb-2">Invia</button>
                </form>
            </div>
        )
    }
}

export default Search
