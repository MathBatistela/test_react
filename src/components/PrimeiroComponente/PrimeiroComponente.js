import React, { Component } from 'react'

export class PrimeiroComponente extends Component {
    render() {
        return (
            <div>
                <h1>Meu PrimeiroComponente</h1>
                <h3>{this.props.nome}</h3>
            </div>
        )
    }
}

export default PrimeiroComponente
