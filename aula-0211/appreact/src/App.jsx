import React from 'react'

import './App.css'
import Form from './Form/Form';

const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>
    {props.texto}, {props.children}
    </h1>
}

const App = () => {
  return (
    <React.Fragment>
      <Titulo texto="titulo teste" cor="red"/>
      <Titulo texto="titulo teste2" cor="blue">
        Isso eh o children
      </Titulo>
      <Form/>
    </React.Fragment>
  )
};


export default App
