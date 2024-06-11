import React from 'react'

import Produto from './Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {

  const [dadosProduto, setDadosProduto] = React.useState(null) 
  const [loading, setLoading] = React.useState(null)

  async function fetchProduto(event) {
    setLoading(true)
    await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
      .then((response) => response.json())
      .then((data) => {
        if(data) {
          setDadosProduto(data)
        }
      })
      .catch((error) => {
        console.log(error)

      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <React.Fragment>
      <button onClick={fetchProduto}>tablet</button>
      <button onClick={fetchProduto}>smartphone</button>
      <button onClick={fetchProduto}>notebook</button>

      {loading && <p>Carregando...</p>}
      {!loading && dadosProduto && <Produto produto={dadosProduto}/>}
      
    </React.Fragment>
  )
};


export default App
