import React from 'react'

const App = () => {
  // Forma convencao
  const [ativo, setAtivo] = React.useState(false)
  // Forma extensa
  // const ativoHook = React.useState(false)
  // const ativoValor = ativoHook[0]
  // const atualizaValor = ativoHook[1]

  function handleClick() {
    setAtivo(!ativo)
    // atualizaValor(!ativoValor)
  }

  return (
    <React.Fragment>
      <button onClick={handleClick} setAtivo={setAtivo}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </React.Fragment>
  )
};

export default App
