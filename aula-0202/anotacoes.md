# Importantes sobre a aula

- Todo elemento react é criado com a função `createElement`. Nesse caso, o Babel transforma o elemento criado com JSX em funções de React (React.createElement) para cada elemento dentro do JSX

- É boa prática componentes react seguirem Pascal Case (ButtonSend, MenuNavigation, MenuItem)

- Interpolação de variáveis, funções e expressões é feita com chaves simples
```javascript
    const produto = 'nome produto'
    return <div>{produto} = {Math.random()}</div>
```

- Hooks: funçÕes especiais do React que podemos usar dentro dos elementos e nos dão diferentes habilidades.
Por ex. `useState` é um Hook que define uma variável como reativa.
```js
    const [count, setCount] = React.useState(0)
```



