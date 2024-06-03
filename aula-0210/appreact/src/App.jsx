import React from 'react'
import Header from './Header'
import './App.css'
import { Footer } from './Footer';
import Form from './Form/Form';

const Teste = () => {
  const active = true
  if(active) {
    return <p>Teste</p>;
  } else {
    return null
  }

}

const App = () => {
  return (
    <React.Fragment>App
      <Teste />
      <Header/>
      <Form />
      <Footer/>
    </React.Fragment>
  )
};


export default App
