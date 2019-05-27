import React, { Component } from 'react'
import PrimeiroComponente from './components/PrimeiroComponente/PrimeiroComponente'



export class App extends Component {

  state  = {
    nome: "Matheus"
  }

  render() {
    return (
      <div>
        <h1>Oi {this.state.nome}</h1>
        <PrimeiroComponente nome="teste"/>
      </div>
    )
  }
}

export default App
