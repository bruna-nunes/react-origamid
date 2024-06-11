# Importantes sobre a aula

- Estado de uma aplicação = representa as caracteristicas dela naquele momento. EX. o botão está ativo, o usuário está na pag de contato etc.

- Um unico estado influencia diversos comportamentos

- Os Hooks são funções especificiais que são utilizadas pra controlar estados e ciclo de vida de componentes. Sempre que atualizarmos um estado a partir de um Hook, teremos atualizações em tudo relacionado e em todos os locais relacionados com a var/estado.


Ex. de Hook: useState

- Utilizar sempre a função de atualização do estado, e não atualizar diretamente, já que a reatividade não sera ativada

```js
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push('Novo Item');
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
  }
```