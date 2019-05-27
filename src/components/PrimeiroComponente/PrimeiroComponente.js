// import React, { Component } from 'react'

// export class PrimeiroComponente extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Meu PrimeiroComponente</h1>
//                 <h3>{this.props.nome}</h3>
//             </div>
//         )
//     }
// }

// export default PrimeiroComponente

import React from 'react'

export default function PrimeiroComponente(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
        </div>
    )
}
