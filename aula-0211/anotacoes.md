# Importantes sobre a aula

- Propriedades funcionam da mesma forma que funções que recebem argumentos, só que no contexto de componentes recebendo estes argumentos
- Props são passadas direto na tag do componente, como se fosse um atributo HTML

```js
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" />
      <Titulo texto="Meu Segundo Título" />
    </section>
  );
};

```

- Se utilizarmos o componente com abre e fecha tags, o conteúdo interno dele poderá ser acesso via propriedade `children`

```js
const Titulo = (props) => {
  return <h1>{props.children}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo>Meu Primeiro Título</Titulo>
      <Titulo>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo>
    </section>
  );
};

```