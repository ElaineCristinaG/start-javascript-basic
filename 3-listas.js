console.log(`Trabalhando com Listas`)

/**em javascript listas são Arrays */
const listaDeDestinos = new Array(
    `Salvador`,
    `Rio De Janeiro`,
    `São Paulo`,
    `Santa Catarina`,
    `Maceió`,
    `Ouro Preto`
)
console.log(listaDeDestinos)

/* Adiciona elementos a uma lista */
listaDeDestinos.push(`Curitiba`)
console.log(listaDeDestinos)

/* Retira elementos a uma lista */
listaDeDestinos.splice(2,1)  //posição, qtd elemento

console.log(listaDeDestinos)

/* o indice da lista mostra o seu conteúdo */
console.log(listaDeDestinos[5])
console.log(listaDeDestinos[0])
