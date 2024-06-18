# Importantes sobre a aula

- useRef é um hook que retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Ele não é atualizado quando re-renderizamos o app por qualquer reatividade

- o `.current` só pode ser usado dentro de funções de template ou dentro de um useEffect, senão teremos um `undefined`

