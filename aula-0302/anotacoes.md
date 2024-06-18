# Importantes sobre a aula

- useEffect é um hook que permite definir uma callback que irá ser executada durante certos momentos do ciclo de vida do componente

- A assinatura do método/hook é: `useEffect(callback, arrayDeDependencias)`, sendo:
 - callback = função a ser executada
 - itens que ao mudarem, a função será executada
 ps. se passarmos um array vazio (`[]`) a callback só será executada uma vez, na montagem do componente/renderização inicial

ex.
```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log('Sempre ocorre, mas antes do useEffect');

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar');
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

```

ps. se utilizarmos o valor de um hook/propriedade dentro de um efeito, é preciso definir ele como dependência também

- Pode-se ter vários `useEffect` no código. O ideal é separar em finalidades

- As callbacks definidas no useEffect são quando elementos são montados. Mas se quisermos definir ações para quando um elemento for desmontado, utilizamos uma callback no retorno do callback de efeito

```javascript
const Produto = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <p style={{ height: '200vh' }}>Produto</p>;
};

```
