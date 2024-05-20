# Importantes sobre a aula

- JSX é uma extensão do Javascript, dando a ele novas funcionalidades como por exemplo retornar elementos que se parecem com HTML e XML que depois são convertidos através do babel em funções do React que criam elementos.

NO JSX:

- Atributos podem ser passados como no html, com alguns casos especiais para evitar conflitos
  - `class` vira className (`<div className="name">`)
  - `for` de label vira htmlFor (para evitar conflitos com for loop)
  - atributos compostos ficam em camelCase
- Interpolação é feita com {variavel}
- Valores reativos para serem passados como valores de atributos também devem estar entre {}
    - `<p className={ativo}></p>`