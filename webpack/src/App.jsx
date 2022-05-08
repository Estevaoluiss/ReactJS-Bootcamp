import React from 'react'

const showEvent=()=>{
  console.log('evento clicado')
}


const Button = <button>Mostrar Evento</button>

const App = () => {
  return (
    <div>
      <p>Digital Inoovation</p>
      <p>Bem vindo a nossa aula</p>
      {Button}
    </div>
  )
}
export default App
