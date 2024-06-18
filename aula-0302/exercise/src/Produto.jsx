import React from 'react'

function Produto({produto}) {

  const [productData, setProductData] = React.useState(null)

  React.useEffect(() => {
      if(produto !== null) {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then(response => response.json())
        .then(dados => {
        setProductData(dados)
      })
    }
  }, [produto])


  if (productData === null) return null
  return (
    <div style={{border: '1px solid', margin: '1rem 0', padding: '1rem'}}>
        <h1>{productData.nome}</h1>
        <p>R$ {productData.preco}</p>
    </div>
  )
}

export default Produto