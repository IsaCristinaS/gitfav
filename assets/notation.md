## Estudo e Revisão Rápida ##

## HTML ##
__input__ no HTML é formado pela id, placeholder e type, muitas vezes acompanhado de um *label*.
Inclsuive label pode ser utilizado para acessibilidade.
__button__ acessível imagens e símbolos pelo &*algoaqui*; dentro da tag.
__table__ utilizando tags como 
-> thead (para o cabeçalho)
-> tr (rols, as linhas da tabela) 
-> th (colunas)
-> tbody 
-> td (faz-se colunas assim dentro do tbody)
__a__ utilizando target: blank para abrir em outra janela ao clicar no link

## CSS ##
__border-colapse__ quando escolhido "colapse", as linhas e espaçamento se fundem, ótimo para o nosso caso de tabelas
__pseudo-classes__ sempre bom rever e revisar esses conceitos. Muito úteis

## JS ##
__classe__ POO | representado por {}, similares a funções podendo ser declaração, expressão com nome e expressão anônima. Criam modelos para objetos através do *new* operator.
__constructor__ participante de classes
__super__ referencia a classe pai
__this__ referencia os parâmetros da classe, funções, etc
__NodeList__ é um tipo de dado *arrayLike* para toda estrutura que parece um array (o que me permite utilizar funções de array em elementos NodeList)
__Higher Order Function__ funções de alta ordem como map, filter, reduce, etc
__onclick__ direto no HTML do elemento pode ser usado apenas uma vez. Se for necessário chamar o evento mais de uma vez, então escolha addEventListener 
__desestruturação__ direto no argumento, uma forma de shorthand para facilitar a utilização de dados. exemplo:
##.then(({ login, name, public_repos, followers }) => (
      {
      login,
      name,
      public_repos,
      followers
    }))##

__métodos estáticos__ 

## PRINCÍPIO DA IMUTABILIDADE ##
Principio de programação funcional. Numa aplicação, nós _não_ modificamos um elemnto que ja existe (exemplos, não troco a cor da bola vermelha por azul). Nós criamos um novo e paramos de usar o antigo