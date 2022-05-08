import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clock: 1000,
      copo: 'agua'
    }
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <hi>{clock}</hi>
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
