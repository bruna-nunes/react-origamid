import React from 'react'

function Produto({produto}) {
  return (
    <div style={{border: '1px solid', margin: '1rem 0', padding: '1rem'}}>
        <h1>{produto.nome}</h1>
        <p>R$ {produto.preco}</p>
        <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
    </div>
  )
}

export default Produto