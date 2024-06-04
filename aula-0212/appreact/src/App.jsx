import React from 'react'

import './App.css'
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';


const App = () => {
  const { pathname } = window.location;
  let Componente;
  if(pathname === '/produtos') {
    Componente = Produtos
  } else {
    Componente = Home
  }

  return (
    <React.Fragment>
      <Header />
      <Componente/>
    </React.Fragment>
  )
};


export default App
