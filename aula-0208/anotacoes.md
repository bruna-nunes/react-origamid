# Importantes sobre a aula

- Podemos colocar em um array já os elementos JSX, mas elementos em arrays precisam de keys únicas
`const empresas = [<li key="li1">Apple</li>, <li key="li2">Google</li>]`
as keys servem para que o react só modifique um item especifico quando a lista mudar, ao invés de ter que destruir toda a lista por não saber o que mudou.

Mas é muito incomum ver listas assim. O mais frequente é ver listas "normais"
`const empresas = ['Apple', 'Google']`
E manipularmos no próprio template usando map
```js
return (
  <ul>
    {filmes.map((filme) => (
      <li key={filme}>{filme}</li>
    ))}
  </ul>
);
```