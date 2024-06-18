import React from 'react'
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [preferredProduct, setPreferredProduct] = React.useState(null)

  React.useEffect(() => {
    const preferredProductStorage = window.localStorage.getItem('product')
    if(preferredProductStorage) {
      setPreferredProduct(preferredProductStorage)
    }
  }, [])

  React.useEffect(() => {
    if(preferredProduct !== null) {
      window.localStorage.setItem('product', preferredProduct)
    }
  }, [preferredProduct])
  
    return (
      <React.Fragment>
        <h1>Preferência:  {preferredProduct}</h1>
        <button onClick={() => setPreferredProduct('notebook')}>notebook</button>
        <button onClick={() => setPreferredProduct('smartphone')}>smartphone</button>
        <Produto produto={preferredProduct}/>
      </React.Fragment>
    )
};

export default App
