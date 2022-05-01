import React from 'react'
import ReactDOM from 'react-dom'
import '/ProjetoGit/ReactJS-Bootcamp/Aula1/configuration/src/style.css'

const App = () => {
  return <div className="App">Hello world</div>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
