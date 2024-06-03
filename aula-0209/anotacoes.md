# Importantes sobre a aula

- Eventos no React funcionam na mesma linha de colocar eventos em HTML. Mas temos a questão do camelCase

`<button onClick={handleClick}>`

Mas os eventos são <b>sintáticos</b>. Ou seja, não são os eventos do próprio navegador, mas sim eventos criados pelo próprio React. Mas eles seguem as especificações da W3C (tem as mesmas propriedades, metodos dos eventos), com a vantagem que funcionam em todos os browsers que o React suporta; o que é melhor pr compatibilidade

- Eventos no window/document ou qualquer elemento fora do React devem ser adicionados via JS normalmente, usando `addEventListener`

```js
const App = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return <div style={{ height: '200vw' }}>Div</div>;
};
```