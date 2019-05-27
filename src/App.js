import React, { Component } from 'react'
import PrimeiroComponente from './components/PrimeiroComponente/PrimeiroComponente'



export class App extends Component {

  state  = {
    nome: "Matheus",
    sobrenome: "Batistela"
  }

  componentWillMount() {
    this.setState({
      nome: "Matheus"
    })
  }

  componentDidMount(){
    console.log("fui montado ( ͡~ ͜ʖ ͡°) ")
  }

  shouldComponentUpdate(nextProps,nextState){
    if (nextState.sobrenome === "Batistela"){
      return false
    }
    return true
  }

  updateName = () => {
    this.setState({
      nome:"Theuzinho"
    })
  }

  updateLastName = () => {
    this.setState({
      sobrenome: "DZN"
    })
  }

  render() {
    const Componente = this.state.nome !== " " ? <p>Tenho nome</p> : <p>Não tenho nome</p>
    return (
      <div>
        {/* <h1>Oi {this.state.nome}</h1>
        <PrimeiroComponente nome="teste"/>
        <PrimeiroComponente nome="testa"/>
        <PrimeiroComponente nome="testo"/>
        {Componente} */}
        <h1>Oi {this.state.nome} {this.state.sobrenome}</h1>
        <button onClick={this.updateName}>Atualizar nome</button>
        <button onClick={this.updateLastName}>Atualizar sobrenome</button>
      </div>
    )
  }
}

export default App
